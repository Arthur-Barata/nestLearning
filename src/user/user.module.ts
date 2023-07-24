import { Module } from '@nestjs/common';
import { PrismaModule } from 'src/database/prisma.module';
import { UserService } from './user.service';
import { UserControll } from './usuario.controller';

@Module({
  imports: [PrismaModule],
  controllers: [UserControll],
  providers: [UserService],
  exports: [UserService],
})
export class userModule {}
