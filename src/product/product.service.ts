import { Injectable, Inject } from '@nestjs/common';
import {
  PRODUCT_PROVIDER_TOKEN,
  PRODUCTALREADYEXIST,
  PRODUCTINSERTSUCCESS,
  DATABASE_EXCEPTION,
} from '../config/constants';
import { Product } from './product.entity';
import { Product as ProductInterface } from './interface/product.interface';
@Injectable()
export class ProductService {
  constructor(
    @Inject(PRODUCT_PROVIDER_TOKEN)
    private readonly productReposity: typeof Product,
  ) {}

  async insertOneProduct(params: ProductInterface) {
    const { prod_id } = params;
    let product: Product, created: boolean;
    try {
      [product, created] = await this.productReposity.findOrCreate({
        where: {
          prod_id,
        },
        defaults: {
          ...params,
        },
      });
    } catch (err) {
      let message;
      switch (typeof err) {
        case 'object':
          message = err.message;
          break;
        case 'string':
          message = err;
          break;
        default:
          break;
      }
      return {
        type: DATABASE_EXCEPTION,
        message: '数据库操作异常',
        data: message,
      };
    }
    const prodId = product.prod_id;
    if (!created) {
      return {
        type: PRODUCTALREADYEXIST,
        message: '产品已经存在',
        data: prodId,
      };
    }
    return {
      type: PRODUCTINSERTSUCCESS,
      message: '产品创建成功',
      data: prodId,
    };
  }
}
