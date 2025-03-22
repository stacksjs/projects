import type { Database } from '@stacksjs/orm'
import type { RawBuilder } from 'kysely'
import { log } from '@stacksjs/logging'
import { projectPath } from '@stacksjs/path'
import { Kysely, MysqlDialect, PostgresDialect, sql } from 'kysely'
import { BunWorkerDialect } from 'kysely-bun-worker'
import { createPool } from 'mysql2'
import { Pool } from 'pg'

// Use default values to avoid circular dependencies initially
// These can be overridden later once config is fully loaded
let appEnv = 'local'
let dbDriver = 'sqlite'
let dbConfig = {
  connections: {
    sqlite: {
      database: 'database/stacks.sqlite',
      prefix: '',
    },
    mysql: {
      name: 'stacks',
      host: '127.0.0.1',
      username: 'root',
      password: '',
      port: 3306,
      prefix: '',
    },
    postgres: {
      name: 'stacks',
      host: '127.0.0.1',
      username: '',
      password: '',
      port: 5432,
      prefix: '',
    },
  },
}

// Function to initialize the config when it's available
export function initializeDbConfig(config: any): void {
  if (config?.app?.env)
    appEnv = config.app.env

  if (config?.database?.default)
    dbDriver = config.database.default

  if (config?.database)
    dbConfig = config.database
}

// Simple functions with defensive defaults
function getEnv(): string {
  return appEnv
}

function getDriver(): string {
  return dbDriver
}

function getDatabaseConfig() {
  return dbConfig
}

export function getDialect(): MysqlDialect | PostgresDialect | BunWorkerDialect {
  const appEnv = getEnv()
  const driver = getDriver()
  const database = getDatabaseConfig()

  log.debug(`Using database driver: ${driver}`)

  if (driver === 'sqlite') {
    const defaultName = appEnv !== 'testing' ? 'database/stacks.sqlite' : 'database/stacks_testing.sqlite'
    const sqliteDbName = database.connections?.sqlite?.database ?? defaultName
    const dbPath = projectPath(sqliteDbName)

    return new BunWorkerDialect({
      url: dbPath,
    })
  }

  if (driver === 'mysql') {
    return new MysqlDialect({
      pool: createPool({
        database: database.connections?.mysql?.name || 'stacks',
        host: database.connections?.mysql?.host ?? '127.0.0.1',
        user: database.connections?.mysql?.username ?? 'root',
        password: database.connections?.mysql?.password ?? '',
        port: database.connections?.mysql?.port ?? 3306,
      }),
    })
  }

  if (driver === 'postgres') {
    const pgDbName = database.connections?.postgres?.name ?? 'stacks'
    const finalPgDbName = appEnv === 'testing' ? `${pgDbName}_testing` : pgDbName

    return new PostgresDialect({
      pool: new Pool({
        database: finalPgDbName,
        host: database.connections?.postgres?.host ?? '127.0.0.1',
        user: database.connections?.postgres?.username ?? '',
        password: database.connections?.postgres?.password ?? '',
        port: database.connections?.postgres?.port ?? 5432,
      }),
    })
  }

  throw new Error(`Unsupported driver: ${driver}`)
}

export const now: RawBuilder<any> = sql`now()`

export const db: Kysely<Database> = new Kysely<Database>({
  dialect: getDialect(),
})
