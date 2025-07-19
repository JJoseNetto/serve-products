import { Injectable } from '@nestjs/common';
import { db } from '../db/connection';
import { products } from '../db/schema/products';
import { eq } from 'drizzle-orm';

@Injectable()
export class ProductsService {
  async create(data: { name: string; price: number; sku: string }) {
    return db.insert(products).values({
    ...data,
    price: data.price?.toString(),
    }).returning();
  }

  async findAll() {
    return db.select().from(products).orderBy(products.name);
  }

  async findOne(id: number) {
    return db.select().from(products).where(eq(products.id, id)).limit(1);
  }

  async update(id: number, data: { name?: string; price?: number; sku?: string }) {
    return db.update(products).set({
    ...data,
    price: data.price?.toString(),
    }).where(eq(products.id, id)).returning();
  }

  async remove(id: number) {
    return db.delete(products).where(eq(products.id, id)).returning();
  }
}