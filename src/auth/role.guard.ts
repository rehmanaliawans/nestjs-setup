import {
  CanActivate,
  ExecutionContext,
  HttpStatus,
  HttpException,
  Injectable,
} from '@nestjs/common';
import { GqlExecutionContext } from '@nestjs/graphql';
import { verify } from 'jsonwebtoken';
import { UserService } from 'src/user/user.service';

export const Roles = {
  ADMIN: 'admin',
  USER: 'user',
};

export class RoleGuard implements CanActivate {
  public role: string;

  constructor(role: string) {
    this.role = role;
  }

  canActivate(context: ExecutionContext): boolean {
    const ctx = GqlExecutionContext.create(context).getContext();
    const { role } = ctx.user;
    if (role === this.role) return true;
    return false;
  }
}
