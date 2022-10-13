import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { AttributeEntity } from './attribute.entity';
import { Attribute } from './attribute.model';
import { AttributeArgs } from './dto/attribute.args';
import { NewAttributeInput } from './dto/attribute.input';
import { CreateAttributeDto } from './dto/attribute.dto';

@Injectable()
export class AttributeService {
  constructor(
    @InjectRepository(AttributeEntity)
    private readonly attributeRepo: Repository<AttributeEntity>,
  ) {}

  async create(data: CreateAttributeDto): Promise<AttributeEntity> {
    const price = new AttributeEntity();
    price.value = data.value;
    return await this.attributeRepo.save(price);
  }

  async findOneById(id: string): Promise<AttributeEntity> {
    return this.attributeRepo.findOneByOrFail({ id });
  }

  async findAll(recipesArgs: AttributeArgs): Promise<AttributeEntity[]> {
    return this.attributeRepo.find();
  }

  async remove(id: string): Promise<boolean> {
    return true;
  }
}
