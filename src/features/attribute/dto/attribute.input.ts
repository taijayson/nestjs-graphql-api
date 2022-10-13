import { Field, InputType, Int } from '@nestjs/graphql';
import { IsOptional, Length, MaxLength } from 'class-validator';

@InputType()
export class NewAttributeInput {
  @Field()
  @MaxLength(50)
  title: string;

  @Field()
  @Length(30, 255)
  value: string;
}
