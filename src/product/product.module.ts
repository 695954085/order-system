import { Module } from '@nestjs/common';
import { productProviders } from './product.providers';
import { ProductService } from './product.service';

@Module({
  providers: [...productProviders, ProductService],
  exports: [ProductService],
})
export class ProductModule {

}