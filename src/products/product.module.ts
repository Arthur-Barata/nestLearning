import { Module } from '@nestjs/common';
import { productController } from './product.controller';
import { productRepository } from './product.repository';

@Module({ controllers: [productController],  providers: [productRepository], })
export class productModule {}
