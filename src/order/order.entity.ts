import { Table, Column, Model, ForeignKey, BelongsTo, BelongsToMany, NotNull, DataType } from 'sequelize-typescript';
import { Customer } from '../customer/customer.entity';
import { Product } from '../product/product.entity';
import { OrderItem } from './orderitem.entity';

@Table
export class Order extends Model<Order> {

  @NotNull
  @Column({ primaryKey: true })
  order_num: number;

  @NotNull
  @Column
  order_date: Date;

  @NotNull
  @ForeignKey(() => Customer)
  @Column(DataType.INTEGER)
  cust_id: number;

  @BelongsTo(() => Customer)
  customer: Customer;

  @BelongsToMany(() => Product, () => OrderItem)
  products: Product[];
}