import { Injectable, Inject } from '@nestjs/common';
import { ORDER_PROVIDER_TOKEN, DATABASE_EXCEPTION, ORDERINSERTSUCCESS } from 'src/config/constants';
import { Order } from './order.entity';
import { OrderInterface } from './interface/order.interface';

@Injectable()
export class OrderService {
  constructor(
    @Inject(ORDER_PROVIDER_TOKEN) private readonly orderReposity: typeof Order,
  ) {}

  public async insertOneOrder(params: OrderInterface) {
    let order: Order;
    try {
      order = await this.orderReposity.create({
        ...params,
      });
    } catch (err) {
      let message: string;
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
    const order_num = order.order_num;
    return {
      type: ORDERINSERTSUCCESS,
      message: '订单创建成功',
      data: order_num,
    };
  }
}
