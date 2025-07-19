import { pgTable, serial, varchar, decimal, timestamp } from 'drizzle-orm/pg-core';

export const products = pgTable('products', {
  id: serial('id').primaryKey(),
  name: varchar('name', { length: 255 }).notNull(),
  price: decimal('price', { precision: 10, scale: 2 }).notNull(),
  sku: varchar('sku', { length: 50 }).notNull().unique(),
  createdAt: timestamp().defaultNow().notNull(),
});