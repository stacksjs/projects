import type { Database } from '@stacksjs/database'
import { sql } from '@stacksjs/database'

export async function up(db: Database<any>) {
  await db.schema
    .createTable('payment_methods')
    .addColumn('id', 'integer', col => col.primaryKey().autoIncrement())
    .addColumn('uuid', 'text')
    .addColumn('type', 'varchar(512)', col => col.notNull())
    .addColumn('last_four', 'integer', col => col.notNull())
    .addColumn('brand', 'varchar(50)', col => col.notNull())
    .addColumn('exp_month', 'integer', col => col.notNull())
    .addColumn('exp_year', 'integer', col => col.notNull())
    .addColumn('is_default', 'boolean')
    .addColumn('provider_id', 'varchar(255)')
    .addColumn('user_id', 'integer', col =>
      col.references('users.id').onDelete('cascade'))
    .addColumn('created_at', 'timestamp', col => col.notNull().defaultTo(sql`CURRENT_TIMESTAMP`))
    .addColumn('updated_at', 'timestamp')
    .execute()
}
