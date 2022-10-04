import { Injectable } from '@nestjs/common';
import { PriceArgs } from './dto/price.args';
import { NewPriceInput } from './dto/price.input';
import { Price } from './price.model';

@Injectable()
export class PriceService {
  /**
   * MOCK
   * Put some real business logic here
   * Left for demonstration purposes
   */

  async create(data: NewPriceInput): Promise<Price> {
    return {} as any;
  }

  findOne() {
    return 100;
  }

  async findOneById(id: string): Promise<Price> {
    return {} as any;
  }

  async findAll(recipesArgs: PriceArgs): Promise<Price[]> {
    return [] as Price[];
  }

  async remove(id: string): Promise<boolean> {
    return true;
  }
}
