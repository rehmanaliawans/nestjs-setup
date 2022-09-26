//create a fields which we want to show on frontend

import { ObjectType, Field, Int } from '@nestjs/graphql';

@ObjectType()
export class Book {
  @Field(() => Int)
  id: number;

  @Field()
  title: string;

  @Field(() => Int)
  price: number;
}
