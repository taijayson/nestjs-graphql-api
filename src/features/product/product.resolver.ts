import { NotFoundException } from '@nestjs/common';
import { Args, Mutation, Query, Resolver, Subscription } from '@nestjs/graphql';
import { PubSub } from 'graphql-subscriptions';
import { NewProductInput } from './dto/product.input';
import { ProductArgs } from './dto/product.args';
import { Product } from './product.model';
import { ProductService } from './product.service';

const pubSub = new PubSub();

@Resolver((of) => Product)
export class ProductResolver {
  constructor(private readonly productService: ProductService) {}

  @Query((returns) => Product)
  async product(@Args('id') id: string) {
    console.log('blabla' + 100);

    const product = await this.productService.findOneById(id);
    if (!product) {
      throw new NotFoundException(id);
    }
    return product;
  }

  @Query((returns) => [Product])
  products(@Args() productArgs: ProductArgs): Promise<Product[]> {
    return this.productService.findAll(productArgs);
  }

  @Mutation((returns) => Product)
  async addProduct(
    @Args('newProductData') newProductData: NewProductInput,
  ): Promise<Product> {
    const recipe = await this.productService.create(newProductData);
    pubSub.publish('productAdded', { recipeAdded: recipe });
    return recipe;
  }

  @Mutation((returns) => Boolean)
  async removePrice(@Args('id') id: string) {
    return this.productService.remove(id);
  }

  // @Subscription((returns) => Price)
  // priceAdded() {
  //   return pubSub.asyncIterator('priceAdded');
  // }
}
