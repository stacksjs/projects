import type { Database } from '@stacksjs/database'
import { sql } from '@stacksjs/database'

export async function up(db: Database<any>) {
  await db.schema
    .createTable('transactions')
    .addColumn('id', 'integer', col => col.primaryKey().autoIncrement())
    .addColumn('uuid', 'text')
    .addColumn('amount', 'numeric', col => col.notNull())
    .addColumn('status', 'text', col => col.notNull())
    .addColumn('payment_method', 'text', col => col.notNull())
    .addColumn('payment_details', 'text')
    .addColumn('transaction_reference', 'text')
    .addColumn('loyalty_points_earned', 'numeric')
    .addColumn('loyalty_points_redeemed', 'numeric')
    .addColumn('created_at', 'timestamp', col => col.notNull().defaultTo(sql`CURRENT_TIMESTAMP`))
    .addColumn('updated_at', 'timestamp')
    .execute()
}
