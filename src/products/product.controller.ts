import { Body, Controller, Get, Post } from '@nestjs/common';
import { CreateProductDto } from './product.dto';
import { productRepository } from './product.repository';
@Controller('product')
export class productController  {
 
 constructor(public products:productRepository){
 }
  @Post()
  async CreateProduct(@Body() ProductDados:CreateProductDto) {
    this.products.salvar(ProductDados);
    return ProductDados;
  }

  @Get()
  async showProduct() {
    return this.products.listar();
  }
}
