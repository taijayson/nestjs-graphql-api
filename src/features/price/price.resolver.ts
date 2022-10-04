import { NotFoundException } from '@nestjs/common';
import { Args, Mutation, Query, Resolver, Subscription } from '@nestjs/graphql';
import { PubSub } from 'graphql-subscriptions';
import { NewPriceInput } from './dto/price.input';
import { PriceArgs } from './dto/price.args';
import { Price } from './price.model';
import { PriceService } from './price.service';

const pubSub = new PubSub();

@Resolver((of) => Price)
export class PriceResolver {
  constructor(private readonly priceService: PriceService) {}

  @Query((returns) => Price)
  async price(@Args('id') id: string) {
    const recipe = await this.priceService.findOneById(id);
    if (!recipe) {
      throw new NotFoundException(id);
    }
    return recipe;
  }

  @Query((returns) => [Price])
  prices(@Args() recipesArgs: PriceArgs): Promise<Price[]> {
    return this.priceService.findAll(recipesArgs);
  }

  @Mutation((returns) => Price)
  async addPrice(
    @Args('newPriceData') newRecipeData: NewPriceInput,
  ): Promise<Price> {
    const recipe = await this.priceService.create(newRecipeData);
    pubSub.publish('priceAdded', { recipeAdded: recipe });
    return recipe;
  }

  @Mutation((returns) => Boolean)
  async removePrice(@Args('id') id: string) {
    return this.priceService.remove(id);
  }

  // @Subscription((returns) => Price)
  // priceAdded() {
  //   return pubSub.asyncIterator('priceAdded');
  // }
}
