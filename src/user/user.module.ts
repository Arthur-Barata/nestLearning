import { Module } from '@nestjs/common';
import { userRepository } from './user.repository';
import { usercontroll } from './usuario.controller';

@Module({
  controllers: [usercontroll],
  providers: [userRepository],
})
export class userModule {}
