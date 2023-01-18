import { Body, Controller, Get, Post } from '@nestjs/common';
import { CreateUserDto } from './dto/createUser.dto';
import { userRepository } from './user.repository';

@Controller('usuarios')
export class usercontroll {
  constructor(private userRepository: userRepository) {}
  @Post()
  async createUsers(@Body() userData:CreateUserDto
  ) {
    this.userRepository.salvar(userData);
    console.log(userData)
    return userData;
  }
  @Get()
  async listUser() {
    return this.userRepository.listar();
  }
}
