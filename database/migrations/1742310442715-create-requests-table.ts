import type { Database } from '@stacksjs/database'
import { sql } from '@stacksjs/database'

export async function up(db: Database<any>) {
  await db.schema
    .createTable('requests')
    .addColumn('id', 'integer', col => col.primaryKey().autoIncrement())
    .addColumn('method', 'text')
    .addColumn('path', 'text')
    .addColumn('status_code', 'numeric')
    .addColumn('duration_ms', 'numeric')
    .addColumn('ip_address', 'text')
    .addColumn('memory_usage', 'numeric')
    .addColumn('user_agent', 'text')
    .addColumn('error_message', 'text')
    .addColumn('created_at', 'timestamp', col => col.notNull().defaultTo(sql`CURRENT_TIMESTAMP`))
    .addColumn('updated_at', 'timestamp')
    .addColumn('deleted_at', 'timestamp')
    .execute()
}
