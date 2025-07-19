import { Injectable } from '@nestjs/common';
import { CreateProductDto } from './dto/create-product.dto';
import { UpdateProductDto } from './dto/update-product.dto';

@Injectable()
export class ProductsService {
  create(createProductDto: CreateProductDto) {
    return 'This action adds a new product';
  }

  findAll() {
    return `This action returns all products`;
  }

  findOne(id: number) {
    return `This action returns a #${id} product`;
  }

  update(id: number, updateProductDto: UpdateProductDto) {
    return `This action updates a #${id} product`;
  }

  remove(id: number) {
    return `This action removes a #${id} product`;
  }
}


import { Injectable } from '@nestjs/common';
import { db } from '../db/connection';
import { products } from '../db/schema/products';

@Injectable()
export class ProductsService {
  async create(data: { name: string; price: number; sku: string }) {
    return db.insert(products).values(data).returning();
  }

  async findAll() {
    return db.select().from(products).orderBy(products.name);
  }

  async findOne(id: number) {
    return db.select().from(products).where(products.id.eq(id)).limit(1);
  }

  async update(id: number, data: { name?: string; price?: number; sku?: string }) {
    return db.update(products).set(data).where(products.id.eq(id)).returning();
  }

  async remove(id: number) {
    return db.delete(products).where(products.id.eq(id)).returning();
  }
}