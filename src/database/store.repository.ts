import { Injectable } from '@nestjs/common';
import { User } from '@prisma/client';
import { USerRequestDto } from 'src/user/user.request.dto';
import { PrismaService } from './prisma.service';

@Injectable()
export class StoreRepository {
  constructor(private prisma: PrismaService) {}

  createUser = async (userData: USerRequestDto): Promise<User> => {
    return await this.prisma.user.create({
      data: userData,
    });
  };
}
