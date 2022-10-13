import { NotFoundException } from '@nestjs/common';
import { Args, Mutation, Query, Resolver, Subscription } from '@nestjs/graphql';
import { PubSub } from 'graphql-subscriptions';
import { NewCategoryInput } from './dto/category.input';
import { CategoryArgs } from './dto/category.args';
import { Category } from './category.model';
import { CategoryService } from './category.service';

const pubSub = new PubSub();

@Resolver((of) => Category)
export class CategoryResolver {
  constructor(private readonly categoryService: CategoryService) {}

  @Query((returns) => Category)
  async category(@Args('id') id: string) {
    const category = await this.categoryService.findOneById(id);
    if (!category) {
      throw new NotFoundException(id);
    }
    return category;
  }

  @Query((returns) => [Category])
  categories(@Args() categoryArgs: CategoryArgs): Promise<Category[]> {
    return this.categoryService.findAll(categoryArgs);
  }

  @Mutation((returns) => Category)
  async addCategory(
    @Args('newCategoryInput') newCategoryInput: NewCategoryInput,
  ): Promise<Category> {
    const category = await this.categoryService.create(newCategoryInput);
    pubSub.publish('categoryAdded', { categoryAdded: category });
    return category;
  }

  @Mutation((returns) => Boolean)
  async removeCategory(@Args('id') id: string) {
    return this.categoryService.remove(id);
  }

  // @Subscription((returns) => Price)
  // priceAdded() {
  //   return pubSub.asyncIterator('priceAdded');
  // }
}
