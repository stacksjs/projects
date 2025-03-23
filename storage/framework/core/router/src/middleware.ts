import type { MiddlewareOptions } from '@stacksjs/types'
import { userMiddlewarePath } from '@stacksjs/path'

export class Middleware implements MiddlewareOptions {
  name: string
  priority: number
  handle: () => Promise<void>

  constructor(data: MiddlewareOptions) {
    this.name = data.name
    this.priority = data.priority
    this.handle = data.handle
  }
}

// const readdir = promisify(fs.readdir)

async function importMiddlewares(directory: string): Promise<string[]> {
  // const middlewares = []
  // TODO: somehow this breaks ./buddy dev
  // const files = await readdir(directory)

  // for (const file of files) {
  //   // Dynamically import the middleware
  //   const imported = await import(path.join(directory, file))
  //   middlewares.push(imported.default)
  // }

  // return middlewares
  return [directory] // fix this: return array of middlewares
}

export async function middlewares(): Promise<string[]> {
  return await importMiddlewares(userMiddlewarePath())
}
