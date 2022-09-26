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

@Injectable()
export class JwtGuard implements CanActivate {
  async canActivate(context: ExecutionContext): Promise<boolean> {
    const ctx = GqlExecutionContext.create(context).getContext();
    const authorization = ctx.req.headers.authorization;
    console.log(authorization);

    if (authorization) {
      const token = authorization.split(' ')[1];
      console.log('token', token);
      try {
        const user = verify(token, 'rehmankey');
        console.log('user', user);
        ctx.user = user;
        return true;
      } catch (err) {
        throw new HttpException('Invalid Token', HttpStatus.UNAUTHORIZED);
      }
    } else {
      return false;
    }
  }
}
