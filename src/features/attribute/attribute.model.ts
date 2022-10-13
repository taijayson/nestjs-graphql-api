import { Directive, Field, ID, Int, ObjectType } from '@nestjs/graphql';

@ObjectType({ description: 'recipe' })
export class Attribute {
  @Field((type) => ID)
  id: string;

  @Field()
  value: string;
}
