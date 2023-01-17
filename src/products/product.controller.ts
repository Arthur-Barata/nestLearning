import { Body, Controller, Get, Post } from '@nestjs/common';
import { productRepository } from './product.repository';
@Controller('product')
export class productController {
  private products = new productRepository();

  @Post()
  async CreateProduct(@Body() ProductDados) {
    this.products.salvar(ProductDados);
    return ProductDados;
  }

  @Get()
  async showProduct() {
    return this.products.listar();
  }
}
