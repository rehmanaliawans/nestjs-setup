/* eslint-disable prettier/prettier */
import { Resolver, Query, Args } from '@nestjs/graphql';
import { AuthGuard } from './auth/auth.guard';
import { UseGuards } from '@nestjs/common';

@Resolver(() => String)
export class AppResolver {
  @Query(() => String)
  index(): string {
    return 'Nest JS Graphqsl Server';
  }

  @Query(() => String)
  @UseGuards(AuthGuard)
  login(
    @Args({ name: 'email', type: String }) email: string,
    @Args({ name: 'password', type: String }) password: string,
  ): string {
    return 'User Authenticated Successfully!';
  }
}
