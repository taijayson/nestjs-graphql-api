import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { PriceArgs } from './dto/price.args';
// import { NewPriceInput } from './dto/price.input';
import { Price } from './price.model';
import { Model } from 'mongoose';
import { CreatePriceDto } from './dto/price.dto';
import { PriceObj } from './price.schema';

@Injectable()
export class PriceService {
  constructor(
    @InjectModel(PriceObj.name)
    private readonly priceModel: Model<PriceObj>,
  ) {}

  async create(data: CreatePriceDto): Promise<PriceObj> {
    const dataObj = {
      ...data,
      creationDate: new Date().toLocaleString(),
    };
    return await this.priceModel.create(dataObj);
  }

  findOne() {
    return 100;
  }

  async findOneById(id: string): Promise<Price> {
    return {} as any;
  }

  async findAll(recipesArgs: PriceArgs): Promise<PriceObj[]> {
    return this.priceModel.find().exec();
  }

  async remove(id: string): Promise<boolean> {
    return true;
  }
}
