import { Directive, Field, ID, Int, ObjectType } from '@nestjs/graphql';
import AttributeSet from '../../utils/attribute-set';
import { Price } from '../price/price.model';

export enum Category {
  all = 'all',
  clothes = 'clothes',
  tech = 'tech',
}

@ObjectType({ description: 'Product' })
export class Product {
  @Field((type) => ID)
  id: string;

  @Field((type) => [Price], { nullable: true })
  prices?: Price[];

  @Field((type) => Category, { nullable: true })
  category?: Category;

  @Field({ nullable: true })
  description?: string;

  @Field({ nullable: true })
  gallery?: string[];

  @Field((type) => [AttributeSet], { nullable: true })
  attributes?: AttributeSet[];

  @Field()
  inStock: boolean;

  @Field({ nullable: true })
  brand?: string;

  @Field()
  creationDate: string;
}
