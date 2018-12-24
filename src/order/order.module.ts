import { Module } from '@nestjs/common';
import { orderProviders } from './order.providers';
import { OrderService } from './order.service';
import { OrderItemService } from './orderitem.service';

@Module({
  providers: [...orderProviders, OrderService, OrderItemService],
  exports: [OrderService, OrderItemService],
})
export class OrderModule {}
