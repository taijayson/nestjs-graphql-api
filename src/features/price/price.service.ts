import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { PriceEntity } from './price.entity';
import { PriceArgs } from './dto/price.args';
import { CreatePriceDto } from './dto/price.dto';
// import { Price } from './price.model';
// import { NewPriceInput } from './dto/price.input';

@Injectable()
export class PriceService {
  constructor(
    @InjectRepository(PriceEntity)
    private readonly priceRepo: Repository<PriceEntity>,
  ) {}

  async create(data: CreatePriceDto): Promise<PriceEntity> {
    const price = new PriceEntity();
    price.title = data.title;
    price.description = data.description;
    price.amount = data.amount;
    return await this.priceRepo.save(price);
  }

  async findOneById(id: string): Promise<PriceEntity> {
    return this.priceRepo.findOneByOrFail({ id });
  }

  async findAll(recipesArgs: PriceArgs): Promise<PriceEntity[]> {
    return this.priceRepo.find();
  }

  async remove(id: string): Promise<boolean> {
    return true;
  }
}
