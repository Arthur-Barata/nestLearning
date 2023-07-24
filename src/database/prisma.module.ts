import { Module } from '@nestjs/common';
import { PrismaService } from './prisma.service';
import { StoreRepository } from './store.repository';

@Module({
  providers: [PrismaService, StoreRepository],
  exports: [PrismaService, StoreRepository],
})
export class PrismaModule {}
