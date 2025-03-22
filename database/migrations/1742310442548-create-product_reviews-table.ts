import type { Database } from '@stacksjs/database'
import { sql } from '@stacksjs/database'

export async function up(db: Database<any>) {
  await db.schema
    .createTable('product_reviews')
    .addColumn('id', 'integer', col => col.primaryKey().autoIncrement())
    .addColumn('uuid', 'text')
    .addColumn('rating', 'numeric', col => col.notNull())
    .addColumn('title', 'text', col => col.notNull())
    .addColumn('content', 'text', col => col.notNull())
    .addColumn('is_verified_purchase', 'integer')
    .addColumn('is_approved', 'integer')
    .addColumn('helpful_votes', 'numeric')
    .addColumn('unhelpful_votes', 'numeric')
    .addColumn('purchase_date', 'text')
    .addColumn('images', 'text')
    .addColumn('created_at', 'timestamp', col => col.notNull().defaultTo(sql`CURRENT_TIMESTAMP`))
    .addColumn('updated_at', 'timestamp')
    .execute()
}
