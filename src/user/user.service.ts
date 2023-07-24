import { HttpException, HttpStatus, Injectable } from '@nestjs/common';
import { StoreRepository } from 'src/database/store.repository';
import { USerRequestDto } from './user.request.dto';

@Injectable()
export class UserService {
  constructor(private storeRepository: StoreRepository) {}

  async createUser(userData: USerRequestDto) {
    try {
      return await this.storeRepository.createUser(userData);
    } catch (error) {
      throw new HttpException('falha na operação', HttpStatus.CONFLICT);
    }
  }
}
