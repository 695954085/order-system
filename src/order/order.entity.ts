import {
  Table,
  Column,
  Model,
  ForeignKey,
  BelongsTo,
  BelongsToMany,
  AllowNull,
  DataType,
} from 'sequelize-typescript';
import { Customer } from '../customer/customer.entity';
import { Product } from '../product/product.entity';
import { OrderItem } from './orderitem.entity';

@Table
export class Order extends Model<Order> {
  @AllowNull(false)
  @Column({ primaryKey: true, autoIncrement: true })
  order_num: number;

  @AllowNull(false)
  @Column
  order_date: Date;

  @AllowNull(false)
  @ForeignKey(() => Customer)
  @Column(DataType.INTEGER)
  cust_id: number;

  @BelongsTo(() => Customer)
  customer: Customer;

  @BelongsToMany(() => Product, () => OrderItem)
  products: Product[];
}
