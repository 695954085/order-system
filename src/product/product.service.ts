import { Injectable, Inject } from '@nestjs/common';
import { PRODUCT_PROVIDER_TOKEN } from '../config/constants';
import { Product as ProductEntity } from './product.entity';
import { Transaction, Op } from 'sequelize';
import { Product, ProductSearch } from './interface/product.interface';

@Injectable()
export class ProductService {
  constructor(
    @Inject(PRODUCT_PROVIDER_TOKEN)
    private readonly productReposity: typeof ProductEntity,
  ) {}

  async insertOneProduct(params: Product, t?: Transaction) {
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

  async findProduct(params: Product, t?: Transaction) {
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

  async findProducts(params: ProductSearch, t?: Transaction) {
    const where = Object.create(null);
    if (params.prod_id) {
      Object.assign(where, {
        prod_id: {
          [Op.in]: params.prod_id,
        },
      });
    }
    if (params.prod_name) {
      Object.assign(where, {
        prod_name: {
          [Op.in]: params.prod_name,
        },
      });
    }
    if (params.vend_id) {
      Object.assign(where, {
        vend_id: {
          [Op.in]: params.vend_id,
        },
      });
    }
    if (params.prod_price) {
      Object.assign(where, {
        prod_price: {
          [Op.in]: params.prod_price,
        },
      });
    }
    return this.productReposity.findAll({
      attributes: params.attr,
      transaction: t ? t : null,
      where,
      limit: params.limit,
      offset: params.offset,
    });
  }
}
