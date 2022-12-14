/* eslint-disable prefer-const */
import { Injectable } from '@nestjs/common';
import { Repository } from 'typeorm';
import { InjectRepository } from '@nestjs/typeorm';
import { UserEntity } from './entity/user.entity';
import { AddUserArgs } from './args/addUser.args';
import { validate } from 'class-validator';

@Injectable()
export class UserService {
  constructor(
    @InjectRepository(UserEntity)
    public readonly userRepo: Repository<UserEntity>,
  ) {}

  async fintUserByemail(email: string): Promise<UserEntity> {
    const user = await this.userRepo.findOne({
      where: { email: email },
    });
    return user;
  }

  async addUser(addUserArgs: AddUserArgs): Promise<string> {
    // eslint-disable-next-line prefer-const
    let user: UserEntity = new UserEntity();
    user.firstName = addUserArgs.firstName;
    user.lastName = addUserArgs.lastName;
    user.email = addUserArgs.email;
    user.password = addUserArgs.password;
    console.log(addUserArgs);
    if (addUserArgs.role) {
      console.log('true');
      user.role = addUserArgs.role;
    }

    const errors = await validate(user);
    if (errors.length > 0) {
      throw new Error(`Validation failed!`);
    } else {
      await this.userRepo.save(user);
      return 'User save successfully';
    }
  }
}
