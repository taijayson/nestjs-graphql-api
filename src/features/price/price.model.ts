import { Directive, Field, ID, Int, ObjectType } from '@nestjs/graphql';

@ObjectType({ description: 'recipe ' })
export class Price {
  @Field((type) => ID)
  id: string;

  @Directive('@upper')
  title: string;

  @Field({ nullable: true })
  description?: string;

  @Field((type) => Int)
  amount: number;

  @Field()
  creationDate: Date;
}

// @ObjectType()
// export class Currency {
//   @Field()
//   label: string;

//   @Field({ nullable: true })
//   symbol?: string;
// }
