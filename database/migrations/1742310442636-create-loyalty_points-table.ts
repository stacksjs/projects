import type { Database } from '@stacksjs/database'
import { sql } from '@stacksjs/database'

export async function up(db: Database<any>) {
  await db.schema
    .createTable('loyalty_points')
    .addColumn('id', 'integer', col => col.primaryKey().autoIncrement())
    .addColumn('uuid', 'text')
    .addColumn('wallet_id', 'text', col => col.notNull())
    .addColumn('points', 'numeric', col => col.notNull())
    .addColumn('source', 'text', col => col.notNull())
    .addColumn('source_reference_id', 'text')
    .addColumn('description', 'text')
    .addColumn('expiry_date', 'text')
    .addColumn('is_used', 'integer')
    .addColumn('created_at', 'timestamp', col => col.notNull().defaultTo(sql`CURRENT_TIMESTAMP`))
    .addColumn('updated_at', 'timestamp')
    .execute()
}
