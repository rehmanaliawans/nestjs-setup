import { Resolver, Query, Args, Int, Mutation } from '@nestjs/graphql';

import { AddUserArgs } from './args/addUser.args';
import { User } from './schema/user.schema';
import { UserService } from './user.service';

@Resolver(() => User)
export class UserResolver {
  constructor(private readonly userService: UserService) {}

  @Mutation(() => String, { name: 'addUser' })
  addUser(@Args('addUserArgs') addUserArgs: AddUserArgs) {
    return this.userService.addUser(addUserArgs);
  }
}
