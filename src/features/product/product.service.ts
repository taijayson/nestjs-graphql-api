import { Injectable } from '@nestjs/common';
import { ProductArgs } from './dto/product.args';
import { NewProductInput } from './dto/product.input';
import { Product } from './product.model';

@Injectable()
export class ProductService {
  /**
   * MOCK
   * Put some real business logic here
   * Left for demonstration purposes
   */

  async create(data: NewProductInput): Promise<Product> {
    return {} as any;
  }

  async findOne() {
    return 100;
  }

  async findOneById(id: string): Promise<Product> {
    return {} as any;
  }

  async findAll(recipesArgs: ProductArgs): Promise<Product[]> {
    return [] as Product[];
  }

  async remove(id: string): Promise<boolean> {
    return true;
  }
}
