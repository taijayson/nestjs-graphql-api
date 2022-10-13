import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { CategoryEntity } from './category.entity';
import { Category } from './category.model';
import { CategoryArgs } from './dto/category.args';
import { NewCategoryInput } from './dto/category.input';
import { CreateCategoryDto } from './dto/category.dto';

@Injectable()
export class CategoryService {
  constructor(
    @InjectRepository(CategoryEntity)
    private readonly categoryRepo: Repository<CategoryEntity>,
  ) {}

  async create(data: CreateCategoryDto): Promise<CategoryEntity> {
    const category = new CategoryEntity();
    category.title = data.title;
    category.description = data.description;
    return await this.categoryRepo.save(category);
  }

  async findOneById(id: string): Promise<CategoryEntity> {
    return this.categoryRepo.findOneByOrFail({ id });
  }

  async findAll(recipesArgs: CategoryArgs): Promise<CategoryEntity[]> {
    return this.categoryRepo.find();
  }

  async remove(id: string): Promise<boolean> {
    return true;
  }
}
