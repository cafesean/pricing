import { 
  pgTable,
  uuid,
  varchar,
  timestamp,
  json,
  uniqueIndex,
  index
} from 'drizzle-orm/pg-core';

export const templates = pgTable('templates', {
  id: uuid('id').primaryKey().defaultRandom(),
  template_id: varchar('template_id', { length: 256 }).notNull(),
  version_id: varchar('version_id', { length: 256 }).notNull(),
  instance_id: varchar('instance_id', { length: 256 }).notNull(),
  user_inputs: json('user_inputs').notNull().$type<Record<string, unknown>>(),
  workflow_json: json('workflow_json').notNull().$type<Record<string, unknown>>(),
  created_at: timestamp('createdAt').defaultNow().notNull(),
  updated_at: timestamp('updatedAt').defaultNow().notNull(),
}, (table) => ({
  template_id_idx: index('template_id_idx').on(table.template_id),
  instance_id_idx: index('instance_id_idx').on(table.instance_id),
}));

export const nodeTypes = pgTable('node_types', {
  id: uuid('id').primaryKey().defaultRandom(),
  type: varchar('type', { length: 256 }).notNull(),
  category: varchar('category', { length: 256 }).notNull(),
  description: varchar('description', { length: 1024 }),
  created_at: timestamp('created_at').defaultNow().notNull(),
  updated_at: timestamp('updated_at').defaultNow().notNull(),
}, (table) => ({
  type_idx: uniqueIndex('type_idx').on(table.type),
  category_idx: index('category_idx').on(table.category),
}));

// Types
export type Template = typeof templates.$inferSelect;
export type InsertTemplate = typeof templates.$inferInsert;

export type NodeType = typeof nodeTypes.$inferSelect;
export type InsertNodeType = typeof nodeTypes.$inferInsert; 