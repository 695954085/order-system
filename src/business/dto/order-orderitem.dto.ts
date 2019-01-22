import { ApiModelProperty } from '@nestjs/swagger';
import { OrderDto } from './order.dto';
import { OrderItemDto } from './orderitem.dto';

export class OrderAndOrderItemDto {
  @ApiModelProperty()
  order: OrderDto;
  @ApiModelProperty({ type: OrderItemDto })
  orderItems: OrderItemDto[];
}
