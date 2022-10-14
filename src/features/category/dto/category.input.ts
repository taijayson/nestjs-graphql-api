import { Field, InputType, Int } from '@nestjs/graphql';
import { IsOptional, Length, MaxLength } from 'class-validator';

@InputType()
export class NewCategoryInput {
  @Field()
  @MaxLength(50)
  name: string;
}
