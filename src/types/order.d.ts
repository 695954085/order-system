import { OrderDto } from "../business/dto/order.dto";
import { OrderItemDto } from "../business/dto/orderitem.dto";
import { Order as OrderInterface } from '../order/interface/order.interface'
import { OrderItem as OrderItemInterface } from '../order/interface/orderitem.interface'

declare type Order = {
  order: OrderDto,
  orderItems: OrderItemDto[]
}

declare type OrderInterface = {
  order: OrderInterface,
  orderItems: OrderItemInterface[]
}