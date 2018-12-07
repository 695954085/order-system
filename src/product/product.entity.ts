import {
  Table,
  Column,
  Model,
  ForeignKey,
  DataType,
  BelongsToMany,
  HasOne,
  AllowNull,
  HasMany,
  BelongsTo,
} from 'sequelize-typescript';
import { Vendor } from '../vendor/vendor.entity';
import { Order } from '../order/order.entity';
import { OrderItem } from '../order/orderitem.entity';
import { ProductNote } from './productnote.entity';

@Table
export class Product extends Model<Product> {
  @AllowNull(false)
  @Column({ primaryKey: true, autoIncrement: false, type: DataType.CHAR(10) })
  prod_id: string;

  @AllowNull(false)
  @ForeignKey(() => Vendor)
  @Column
  vend_id: number;

  @BelongsTo(() => Vendor)
  vendor: Vendor;

  @AllowNull(false)
  @Column
  prod_name: string;

  @AllowNull(false)
  @Column({ type: DataType.DECIMAL({ precision: 8, scale: 2 }) })
  prod_price: number;

  @Column(DataType.TEXT)
  prod_desc: string;

  @BelongsToMany(() => Order, () => OrderItem)
  orders: Order[];

  @HasOne(() => ProductNote)
  productNotes: ProductNote;
}
