import { pgTable, serial, varchar, numeric, timestamp } from 'drizzle-orm/pg-core';

export const products = pgTable('products', {
  id: serial('id').primaryKey(),
  name: varchar('name', { length: 255 }).notNull(),
  price: numeric('price').notNull(),
  sku: varchar('sku', { length: 50 }).notNull(),
  createdAt: timestamp().defaultNow().notNull(),
});