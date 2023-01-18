import { Injectable } from '@nestjs/common';

@Injectable()
export class userRepository {
  public repository = [];

  async salvar(dados) {
    this.repository.push(dados);  
  }
  async listar() {
    return this.repository;
  }
}
