// import { Injectable } from '@nestjs/common';

// @Injectable()
// export class AuthService {}



// import { Injectable } from '@nestjs/common';
// import { RegisterDto } from './dto/register.dto';

// @Injectable()
// export class AuthService {

//   register(registerDto: RegisterDto) {
//     return {
//       message: 'User registration API is working!',
//       data: registerDto,
//     };
//   }

// }


import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';

import { RegisterDto } from './dto/register.dto';

import { LoginDto } from './dto/login.dto';

import { User } from './entities/user.entity';

import { JwtService } from '@nestjs/jwt';

import * as bcrypt from 'bcrypt';

@Injectable()
export class AuthService {

  constructor(
    @InjectRepository(User)
    private readonly userRepository: Repository<User>,
      private readonly jwtService: JwtService,

  ) {}

//   async register(registerDto: RegisterDto) {

//     const user = this.userRepository.create(registerDto);

//     await this.userRepository.save(user);

//     return {
//       message: 'User Registered Successfully',
//       user,
//     };
//   }

async register(registerDto: RegisterDto) {

  const existingUser = await this.userRepository.findOne({
    where: {
      email: registerDto.email,
    },
  });

  if (existingUser) {
    return {
      message: 'Email already exists',
    };
  }
   const hashedPassword = await bcrypt.hash(registerDto.password, 10);

  registerDto.password = hashedPassword;


  const user = this.userRepository.create(registerDto);

  await this.userRepository.save(user);

  return {
    message: 'User Registered Successfully',
    user,
  };
}

async login(loginDto: LoginDto) {

  const user = await this.userRepository.findOne({
    where: {
      email: loginDto.email,
    },
  });

  if (!user) {
    return {
      message: 'Invalid email or password',
    };
  }

  const isPasswordValid = await bcrypt.compare(
    loginDto.password,
    user.password,
  );

  if (!isPasswordValid) {
    return {
      message: 'Invalid email or password',
    };
  }

  const payload = {
    sub: user.id,
    email: user.email,
    role: user.role,
  };

  const accessToken = await this.jwtService.signAsync(payload);

  return {
    message: 'Login Successful',
    access_token: accessToken,
    user: {
      id: user.id,
      name: user.name,
      email: user.email,
      role: user.role,
    },
  };
}
}