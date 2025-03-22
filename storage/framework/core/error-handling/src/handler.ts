import type { ErrorOptions } from '@stacksjs/logging'
import { appendFile, mkdir } from 'node:fs/promises'
import { dirname } from 'node:path'
import process from 'node:process'
import { italic, stripAnsi } from '@stacksjs/cli'
import { config } from '@stacksjs/config'
import * as path from '@stacksjs/path'
import { fs } from '@stacksjs/storage'
import { ExitCode } from '@stacksjs/types'
import { isString } from '@stacksjs/validation'

type ErrorMessage = string

export class ErrorHandler {
  static isTestEnvironment = false
  static shouldExitProcess = true

  static handle(err: Error | ErrorMessage | unknown, options?: ErrorOptions): Error {
    this.shouldExitProcess = options?.shouldExit !== false
    if (options?.silent !== true)
      this.writeErrorToConsole(err)

    let errorMessage: string

    if (options?.message) {
      // Use the message from options if provided
      errorMessage = options.message
    }
    else if (err instanceof Error) {
      errorMessage = err.message
    }
    else if (typeof err === 'string') {
      errorMessage = err
    }
    else {
      errorMessage = JSON.stringify(err)
    }

    // Create a new Error with the determined message
    const error = new Error(errorMessage)

    // If the original err was an Error instance, copy its properties
    if (err instanceof Error) {
      Object.assign(error, err)
    }

    this.writeErrorToFile(error).catch(e => console.error(e))

    return error
  }

  static handleError(err: Error, options?: ErrorOptions): Error {
    this.handle(err, options)
    return err
  }

  static async writeErrorToFile(err: Error | unknown): Promise<void> {
    if (!(err instanceof Error)) {
      console.error('Error is not an instance of Error:', err)
      return
    }

    const formattedError = `[${new Date().toISOString()}] ${err.name}: ${err.message}\n`
    const logFilePath = path.logsPath('stacks.log') ?? path.logsPath('errors.log')

    try {
      await mkdir(path.dirname(logFilePath), { recursive: true })
      await appendFile(logFilePath, formattedError)
    }
    catch (error) {
      console.error('Failed to write to error file:', error)
    }
  }

  static writeErrorToConsole(err: string | Error | unknown): void {
    console.error(err)

    const errorString = typeof err === 'string' ? err : err instanceof Error ? err.message : JSON.stringify(err)

    if (
      errorString.includes('bunx --bun cdk destroy')
      || errorString === `Failed to execute command: ${italic('bunx --bun eslint . --fix')}`
      || errorString === `Failed to execute command: ${italic('bun storage/framework/core/actions/src/lint/fix.ts')}`
    ) {
      if (!this.isTestEnvironment) {
        // eslint-disable-next-line no-console
        console.log(
          'No need to worry. The edge function is currently being destroyed. Please run `buddy undeploy` shortly again, and continue doing so until it succeeds running.',
        )
        // eslint-disable-next-line no-console
        console.log('Hoping to see you back soon!')
      }
    }

    if (this.shouldExitProcess) {
      process.exit(ExitCode.FatalError)
    }
  }
}

interface WriteOptions {
  logFile?: string
}

export async function writeToLogFile(message: string, options?: WriteOptions): Promise<void> {
  const timestamp = new Date().toISOString()
  const formattedMessage = `[${timestamp}] ${message}\n`
  const logFile = options?.logFile ?? config.logging.logsPath ?? 'storage/logs/stacks.log'
  const dirPath = dirname(logFile)

  if (!fs.existsSync(dirPath)) {
    await mkdir(dirPath, { recursive: true })
  }

  // Write to the log file
  await appendFile(logFile, formattedMessage)
}

export function handleError(
  err: string | Error | object | unknown,
  options?: ErrorOptions | Record<string, any>,
): Error {
  let errorMessage: string
  let contextData: Record<string, any> | undefined

  // Check if options is a context object (not an ErrorOptions)
  if (options
    && typeof options === 'object'
    && !('shouldExit' in options)
    && !('silent' in options)
    && !('message' in options)) {
    contextData = options as Record<string, any>
    options = undefined
  }

  if (options && 'message' in options) {
    // If options is provided with a message, use options.message as error message
    errorMessage = options.message
  }
  else {
    // If options is not provided or doesn't have a message, handle err based on its type
    if (isString(err)) {
      errorMessage = err
    }
    else if (err instanceof Error) {
      // For Error objects, include both message and stack if available
      errorMessage = err.stack || err.message
    }
    else {
      // Stringify any other type of error
      errorMessage = String(err)
    }
  }

  // Build log message with context if available
  let logMessage = `ERROR: ${stripAnsi(errorMessage)}`
  if (contextData) {
    logMessage += `\nContext: ${JSON.stringify(contextData, null, 2)}`
  }

  writeToLogFile(logMessage)

  return ErrorHandler.handle(err, options as ErrorOptions)
}
