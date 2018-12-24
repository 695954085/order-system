import { Injectable, Inject } from '@nestjs/common';
import {
  ORDER_PROVIDER_TOKEN,
  DATABASE_EXCEPTION,
  ORDERINSERTSUCCESS,
} from '../config/constants';
import { Order } from './order.entity';
import { Order as OrderInterface } from './interface/order.interface';
import { Transaction } from 'sequelize';

@Injectable()
export class OrderService {
  constructor(
    @Inject(ORDER_PROVIDER_TOKEN) private readonly orderReposity: typeof Order,
  ) {}

  public async insertOneOrder(params: OrderInterface, t?: Transaction) {
    let order: Order;
    if (t) {
      order = await this.orderReposity.create(
        {
          ...params,
        },
        {
          transaction: t,
        },
      );
    } else {
      order = await this.orderReposity.create({
        ...params,
      });
    }
    return order;
  }
}
