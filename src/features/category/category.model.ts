import { Directive, Field, ID, Int, ObjectType } from '@nestjs/graphql';
import { Product } from '../product/product.model';

@ObjectType({ description: 'category' })
export class Category {
  @Field((type) => ID)
  id: string;

  @Field()
  name: string;

  @Field((type) => [Product])
  products: Product[];
}
