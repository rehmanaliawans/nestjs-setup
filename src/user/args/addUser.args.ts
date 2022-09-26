import { InputType, Field, Int } from '@nestjs/graphql';

@InputType()
export class AddUserArgs {
  @Field()
  firstName: string;

  @Field()
  lastName: string;

  @Field()
  email: string;

  @Field()
  password: string;

  @Field()
  role: string;
}
