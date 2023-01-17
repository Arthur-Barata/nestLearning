import { Module } from '@nestjs/common';
import { productModule } from './products/product.module';
import { userModule } from './user/user.module';

@Module({
  imports: [userModule, productModule],
})
export class AppModule {}
