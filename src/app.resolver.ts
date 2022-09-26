/* eslint-disable prettier/prettier */
import { Resolver, Query, Args, Context } from '@nestjs/graphql';
import { AuthGuard } from './auth/auth.guard';
import { UseGuards } from '@nestjs/common';
import { UserEntity } from './user/entity/user.entity';
import { sign } from 'jsonwebtoken';
import { JwtGuard } from './auth/jwt.guard';
import { RoleGuard, Roles } from './auth/role.guard';
@Resolver(() => String)
export class AppResolver {
  @Query(() => String)
  index(): string {
    return 'Nest JS Graphqsl Server';
  }

  @Query(() => String)
  @UseGuards(JwtGuard, new RoleGuard(Roles.USER))
  secureDataWithNormalUser(): string {
    return 'This is secure data with user';
  }
  @Query(() => String)
  @UseGuards(JwtGuard, new RoleGuard(Roles.ADMIN))
  secureDataWithadmin(): string {
    return 'This is secure data with admin';
  }

  @Query(() => String)
  @UseGuards(AuthGuard)
  login(
    @Args({ name: 'email', type: () => String }) email: string,
    @Args({ name: 'password', type: () => String }) password: string,
    @Context('user') user: UserEntity,
  ): string {
    const payload = {
      name: user.firstName,
      email: user.lastName,
      lastName: user.lastName,
      role: user.role,
    };
    const token = sign(payload, 'rehmankey', {
      expiresIn: '30d',
    });
    return token;
  }
}
