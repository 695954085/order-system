import { Injectable, Inject } from '@nestjs/common';
import {
  ORDER_ITEM_PROVIDER_TOKEN,
  DATABASE_EXCEPTION,
  ORDERITEMINSERTSUCCESS,
} from 'src/config/constants';
import { OrderItem } from './orderitem.entity';
import { OrderItemInterface } from './interface/orderitem.interface';

@Injectable()
export class OrderItemService {
  constructor(
    @Inject(ORDER_ITEM_PROVIDER_TOKEN)
    private readonly orderitemReposity: typeof OrderItem,
  ) {}

  public async insertOneOrderItem(params: OrderItemInterface) {
    let orderItem: OrderItem;
    try {
      orderItem = await this.orderitemReposity.create({
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
    const { order_num, order_item } = orderItem;
    return {
      type: ORDERITEMINSERTSUCCESS,
      message: '订单项创建成功',
      data: order_num,
    };
  }
}
