import { ORDER_PROVIDER_TOKEN, ORDER_ITEM_PROVIDER_TOKEN } from '../config/constants';
import { Order } from './order.entity';
import { OrderItem } from './orderitem.entity';

export const orderProviders = [
  {
    provide: ORDER_PROVIDER_TOKEN,
    useValue: Order,
  },
  {
    provide: ORDER_ITEM_PROVIDER_TOKEN,
    useValue: OrderItem,
  },
];
