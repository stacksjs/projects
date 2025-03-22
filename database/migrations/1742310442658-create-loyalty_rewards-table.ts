import type { Database } from '@stacksjs/database'
import { sql } from '@stacksjs/database'

export async function up(db: Database<any>) {
  await db.schema
    .createTable('loyalty_rewards')
    .addColumn('id', 'integer', col => col.primaryKey().autoIncrement())
    .addColumn('uuid', 'text')
    .addColumn('name', 'text', col => col.notNull())
    .addColumn('description', 'text')
    .addColumn('points_required', 'numeric', col => col.notNull())
    .addColumn('reward_type', 'text', col => col.notNull())
    .addColumn('discount_percentage', 'numeric')
    .addColumn('free_product_id', 'text')
    .addColumn('is_active', 'integer')
    .addColumn('expiry_days', 'numeric')
    .addColumn('image_url', 'text')
    .addColumn('created_at', 'timestamp', col => col.notNull().defaultTo(sql`CURRENT_TIMESTAMP`))
    .addColumn('updated_at', 'timestamp')
    .execute()
}
