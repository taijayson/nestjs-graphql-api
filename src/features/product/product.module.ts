import { Module } from '@nestjs/common';

import { ProductService } from './product.service';
import { ProductResolver } from './product.resolver';
import { ProductEntity } from './product.entity';
import { TypeOrmModule } from '@nestjs/typeorm';

@Module({
  imports: [TypeOrmModule.forFeature([ProductEntity])],
  providers: [ProductResolver, ProductService],
})
export class ProductModule {}
