import { Injectable } from "@nestjs/common";
@Injectable()
export class productRepository {
  private products = [];

  async salvar(dados) {
    this.products.push(dados);
  }
  async listar() {
    return this.products;
  }
}
