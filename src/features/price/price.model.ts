import { Directive, Field, ID, Int, ObjectType } from '@nestjs/graphql';

@ObjectType({ description: 'recipe' })
export class Price {
  @Field((type) => ID)
  id: string;

  @Directive('@upper')
  title: string;

  @Field({ nullable: true })
  description?: string;

  @Field((type) => Int, { nullable: true })
  amount?: number;

  @Field()
  creationDate: string;
}
