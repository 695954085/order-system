import { Injectable, Inject } from '@nestjs/common';
import {
  PRODUCT_PROVIDER_TOKEN,
  PRODUCTALREADYEXIST,
  PRODUCTINSERTSUCCESS,
  DATABASE_EXCEPTION,
} from '../config/constants';
import { Product } from './product.entity';
import { Product as ProductInterface } from './interface/product.interface';
import { Transaction } from 'sequelize';
@Injectable()
export class ProductService {
  constructor(
    @Inject(PRODUCT_PROVIDER_TOKEN)
    private readonly productReposity: typeof Product,
  ) {}

  async insertOneProduct(params: ProductInterface, t?: Transaction) {
    const { prod_id } = params;
    if (t) {
      return this.productReposity.findOrCreate({
        transaction: t,
        where: {
          prod_id,
        },
        defaults: {
          ...params,
        },
      });
    }
    return this.productReposity.findOrCreate({
      where: {
        prod_id,
      },
      defaults: {
        ...params,
      },
    });
  }

  async findProduct(params: ProductInterface, t?: Transaction) {
    const { prod_id } = params;
    if (t) {
      return this.productReposity.findOne({
        transaction: t,
        where: {
          prod_id,
        },
      });
    }
    return this.productReposity.findOne({
      where: {
        prod_id,
      },
    });
  }
}
