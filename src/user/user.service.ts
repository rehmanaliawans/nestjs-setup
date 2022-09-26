/* eslint-disable prefer-const */
import { Injectable } from '@nestjs/common';
import { Repository } from 'typeorm';
import { InjectRepository } from '@nestjs/typeorm';
import { UserEntity } from './entity/user.entity';

@Injectable()
export class UserService {
  constructor(
    @InjectRepository(UserEntity)
    public readonly userRepo: Repository<UserEntity>,
  ) {}

  async fintUserByemail(email: string) {
    const user: UserEntity = await this.userRepo.findOne({
      where: { email: email },
    });
    return user;
  }
}
