import {
  Table,
  Column,
  Model,
  ForeignKey,
  DataType,
  BelongsToMany,
  HasOne,
  NotNull,
  HasMany,
  BelongsTo,
} from 'sequelize-typescript';
import { Vendor } from '../vendor/vendor.entity';
import { Order } from '../order/order.entity';
import { OrderItem } from '../order/orderitem.entity';
import { ProductNote } from './productnote.entity';

@Table
export class Product extends Model<Product> {
  @NotNull
  @Column({ primaryKey: true, autoIncrement: false, type: DataType.CHAR(10) })
  prod_id: string;

  @NotNull
  @ForeignKey(() => Vendor)
  @Column
  vend_id: number;

  @NotNull
  @Column
  prod_name: string;

  @NotNull
  @Column({ type: DataType.DECIMAL({ precision: 8, scale: 2 }) })
  prod_price: number;

  @Column(DataType.TEXT)
  prod_desc: string;

  @BelongsToMany(() => Order, () => OrderItem)
  orders: Order[];

  @HasOne(() => ProductNote)
  productNotes: ProductNote;

  @BelongsTo(() => Vendor)
  vendor: Vendor;
}
