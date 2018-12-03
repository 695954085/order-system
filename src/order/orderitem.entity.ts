import {
  Table,
  Column,
  Model,
  ForeignKey,
  DataType,
  NotNull,
} from 'sequelize-typescript';
import { Order } from './order.entity';
import { Product } from '../product/product.entity';

@Table
export class OrderItem extends Model<OrderItem> {
  @NotNull
  @ForeignKey(() => Order)
  @Column({
    primaryKey: true,
    autoIncrement: false,
  })
  order_num: number;

  @NotNull
  @Column({
    primaryKey: true,
    autoIncrement: false,
  })
  order_item: number;

  @NotNull
  @ForeignKey(() => Product)
  @Column(DataType.CHAR(10))
  prod_id: string;

  @NotNull
  @Column(DataType.INTEGER)
  quantity: number;

  @NotNull
  @Column(DataType.DECIMAL(8,2))
  item_price: number;
}
