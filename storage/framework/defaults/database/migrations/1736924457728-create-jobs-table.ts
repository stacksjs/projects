import type { Database } from '@stacksjs/database'
import { sql } from '@stacksjs/database'

export async function up(db: Database<any>) {
  await db.schema
    .createTable('jobs')
    .addColumn('id', 'integer', col => col.primaryKey().autoIncrement())
    .addColumn('queue', 'varchar(255)', col => col.notNull())
    .addColumn('payload', 'varchar(255)', col => col.notNull())
    .addColumn('attempts', 'integer')
    .addColumn('available_at', 'integer')
    .addColumn('reserved_at', 'date')
    .addColumn('created_at', 'timestamp', col => col.notNull().defaultTo(sql`CURRENT_TIMESTAMP`))
    .addColumn('updated_at', 'timestamp')
    .execute()
}
