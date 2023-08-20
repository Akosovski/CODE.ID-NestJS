import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Users } from 'output/entities/Users';
import { Repository } from 'typeorm';
import * as Bcrypt from 'bcrypt';
import { JwtService } from '@nestjs/jwt';

const salt = 10;

@Injectable()
export class UserService {
  constructor(
    @InjectRepository(Users) private userRepo: Repository<Users>,
    private jwtService: JwtService,
  ) {}

  public async signup(fields: any) {
    try {
      const hashPassword = await Bcrypt.hash(fields.password, salt);
      const user = await this.userRepo.save({
        userName: fields.username,
        userEmail: fields.email,
        userPhone: fields.phone,
        userPass: hashPassword,
        roles: fields.roles,
      });
      const { userPass, ...result } = user;
      return result;
    } catch (error) {
      return error.message;
    }
  }

  public async validateUser(name: string, password: string) {
    const user = await this.userRepo.findOne({
      where: [{ userName: name }, { userEmail: name }],
    });
    const compare = await Bcrypt.compare(password, user.userPass);
    if (compare) {
      const { userPass, ...result } = user;
      return result;
    }
  }

  public async login(user: any) {
    const payload = {
      username: user.userName,
      id: user.userId,
      phone: user.userPhone,
      email: user.userEmail,
      roles: user.roles,
    };
    return {
      access_token: this.jwtService.sign(payload),
    };
  }
}
