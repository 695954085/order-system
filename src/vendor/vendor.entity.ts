import { Table, Column, Model, NotNull, DataType, HasMany } from 'sequelize-typescript';
import { Product } from 'src/product/product.entity';

@Table
export class Vendor extends Model<Vendor> {
  @NotNull
  @Column({ primaryKey: true })
  vend_id: number;

  @NotNull
  @Column(DataType.CHAR(50))
  vend_name: string;

  @Column(DataType.CHAR(50))
  vend_address: string;

  @Column(DataType.CHAR(50))
  vend_city: string;

  @Column(DataType.CHAR(5))
  vend_state: string;

  @Column(DataType.CHAR(10))
  vend_zip: string;

  @Column(DataType.CHAR(50))
  vend_country: string;

  @HasMany(() => Product)
  products: Product[];
}
