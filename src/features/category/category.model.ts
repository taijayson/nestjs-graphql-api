import { Directive, Field, ID, Int, ObjectType } from '@nestjs/graphql';

@ObjectType({ description: 'category' })
export class Category {
  @Field((type) => ID)
  id: string;

  @Field()
  title: string;

  @Field({ nullable: true })
  description?: string;
}
