import { NotFoundException } from '@nestjs/common';
import { Args, Mutation, Query, Resolver, Subscription } from '@nestjs/graphql';
import { PubSub } from 'graphql-subscriptions';
import { NewAttributeInput } from './dto/attribute.input';
import { AttributeArgs } from './dto/attribute.args';
import { Attribute } from './attribute.model';
import { AttributeService } from './attribute.service';

const pubSub = new PubSub();

@Resolver((of) => Attribute)
export class AttributeResolver {
  constructor(private readonly attributeService: AttributeService) {}

  @Query((returns) => Attribute)
  async attribute(@Args('id') id: string) {
    const attribute = await this.attributeService.findOneById(id);
    if (!attribute) {
      throw new NotFoundException(id);
    }
    return attribute;
  }

  @Query((returns) => [Attribute])
  attributes(@Args() attributeArgs: AttributeArgs): Promise<Attribute[]> {
    return this.attributeService.findAll(attributeArgs);
  }

  @Mutation((returns) => Attribute)
  async addAttribute(
    @Args('newAttributeInput') newAttributeInput: NewAttributeInput,
  ): Promise<Attribute> {
    const attribute = await this.attributeService.create(newAttributeInput);
    pubSub.publish('priceAdded', { attributeAdded: attribute });
    return attribute;
  }

  @Mutation((returns) => Boolean)
  async removeAttribute(@Args('id') id: string) {
    return this.attributeService.remove(id);
  }

  // @Subscription((returns) => Price)
  // priceAdded() {
  //   return pubSub.asyncIterator('priceAdded');
  // }
}
