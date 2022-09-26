import { Module } from '@nestjs/common';
import { UserModule } from 'src/user/user.module';
import { AuthGuard } from './auth.guard';
// import { TypeOrmModule } from '@nestjs/typeorm';

@Module({
  imports: [UserModule],
  controllers: [],
  providers: [AuthGuard],
  exports: [],
})
export class AuthModule {}
