import {
  ConflictException,
  InternalServerErrorException,
} from '@nestjs/common';

import { EntityRepository, Repository } from 'typeorm';
import { SignUpDto } from './dto/auth-credentials.dto';
import { User } from './user.entity';
import * as bcrypt from 'bcrypt';

@EntityRepository(User)
export class UsersRepository extends Repository<User> {
  async createUser(signupDto: SignUpDto): Promise<void> {
    const { email, fullName, password, role } = signupDto;

    const salt = await bcrypt.genSalt();
    const hashedPassword = await bcrypt.hash(password, salt);

    const user = this.create({
      email,
      fullName,
      password: hashedPassword,
      role,
    });

    try {
      await this.save(user);
    } catch (error) {
      if (error.code === '23505') {
        // duplicate username
        throw new ConflictException('Email already exists');
      } else {
        throw new InternalServerErrorException();
      }
    }
  }
}
