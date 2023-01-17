import { Injectable } from '@nestjs/common';

@Injectable()
export class userRepository {
  private repository = [];

  async salvar(dados) {
    this.repository.push(dados);
    console.log(this.repository);
  }
  async listar() {
    return this.repository;
  }
}
