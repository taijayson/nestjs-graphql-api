import { Field, InputType, Int } from '@nestjs/graphql';
import { IsOptional, Length, MaxLength } from 'class-validator';

@InputType()
export class NewProductInput {
  // @Field((type) => [Price])
  // prices: Price[];

  // @Field((type) => Category)
  // category: Category;

  @Field({ nullable: true })
  description?: string;

  // @Field()
  // gallery: string[];

  // @Field((type) => [AttributeSet])
  // attributes: AttributeSet[];

  @Field()
  inStock: boolean;

  @Field({ nullable: true })
  @IsOptional()
  brand?: string;
}
