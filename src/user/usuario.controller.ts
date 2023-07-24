import { Body, Controller, Post } from '@nestjs/common';
import { User } from '@prisma/client';
import { USerRequestDto } from './user.request.dto';
import { UserService } from './user.service';

@Controller('user')
export class UserControll {
  constructor(private UserService: UserService) {}
  @Post('/create-user')
  async createUsers(@Body() userData: USerRequestDto): Promise<User> {
    return await this.UserService.createUser(userData);
  }
}
