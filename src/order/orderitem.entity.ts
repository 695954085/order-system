import {
  Table,
  Column,
  Model,
  ForeignKey,
  DataType,
  AllowNull,
} from 'sequelize-typescript';
import { Order } from './order.entity';
import { Product } from '../product/product.entity';

@Table
export class OrderItem extends Model<OrderItem> {
  @AllowNull(false)
  @ForeignKey(() => Order)
  @Column({
    primaryKey: true,
    autoIncrement: false,
  })
  order_num: number;

  @AllowNull(false)
  @Column({
    primaryKey: true,
    autoIncrement: false,
  })
  order_item: number;

  @AllowNull(false)
  @ForeignKey(() => Product)
  @Column(DataType.CHAR(10))
  prod_id: string;

  @AllowNull(false)
  @Column(DataType.INTEGER)
  quantity: number;

  @AllowNull(false)
  @Column(DataType.DECIMAL(8,2))
  item_price: number;
}
