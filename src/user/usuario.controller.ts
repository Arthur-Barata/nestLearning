import { Body, Controller, Get, Post } from '@nestjs/common';
import { userRepository } from './user.repository';

@Controller('usuarios')
export class usercontroll {
  constructor(private userRepository: userRepository) {}
  @Post()
  async createUsers(@Body() userData) {
    this.userRepository.salvar(userData);
    return userData;
  }
  @Get()
  async listUser() {
    return this.userRepository.listar();
  }
}
