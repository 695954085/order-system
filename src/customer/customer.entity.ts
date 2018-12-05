import {
  Model,
  Table,
  Column,
  HasMany,
  DataType,
  AllowNull,
} from 'sequelize-typescript';
import { Order } from '../order/order.entity';

@Table
export class Customer extends Model<Customer> {
  @Column({ primaryKey: true, autoIncrement: true })
  cust_id: number;

  @AllowNull(false)
  @Column(DataType.CHAR(50))
  cust_name: string;

  @Column(DataType.CHAR(50))
  cust_address: string;

  @Column(DataType.CHAR(50))
  cust_city: string;

  @Column(DataType.CHAR(5))
  cust_state: string;

  @Column(DataType.CHAR(10))
  cust_zip: string;

  @Column(DataType.CHAR(50))
  cust_country: string;

  @Column(DataType.CHAR(50))
  cust_contact: string;

  @Column(DataType.CHAR(255))
  cust_email: string;

  @HasMany(() => Order)
  orders: Order[];
}
