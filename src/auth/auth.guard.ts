import {
  CanActivate,
  ExecutionContext,
  HttpStatus,
  HttpException,
  Injectable,
} from '@nestjs/common';
import { GqlExecutionContext } from '@nestjs/graphql';
import { UserService } from 'src/user/user.service';

@Injectable()
export class AuthGuard implements CanActivate {
  constructor(private readonly userService: UserService) {}

  async canActivate(context: ExecutionContext): Promise<boolean> {
    const ctx = GqlExecutionContext.create(context).getContext();
    const { email, password } = ctx.req.body.variables;
    const user = await this.userService.fintUserByemail(email);

    if (user && user.password === password) {
      ctx.user = user;
      return true;
    } else {
      throw new HttpException('UnAuthenticated', HttpStatus.UNAUTHORIZED);
    }
  }
}
