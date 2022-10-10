import { Field, InputType, Int } from '@nestjs/graphql';
import { IsOptional, Length, MaxLength } from 'class-validator';

@InputType()
export class NewPriceInput {
  @Field()
  @MaxLength(50)
  title: string;

  @Field({ nullable: true })
  @IsOptional()
  @Length(30, 255)
  description?: string;

  @Field((type) => Int, { nullable: true })
  @IsOptional()
  amount?: string[];
}
