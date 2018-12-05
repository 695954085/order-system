import {
  Table,
  Column,
  Model,
  ForeignKey,
  DataType,
  BelongsTo,
  AllowNull,
} from 'sequelize-typescript';
import { Product } from '../product/product.entity';

@Table({
  engine: 'MyISAM',
})
export class ProductNote extends Model<ProductNote> {
  @AllowNull(false)
  @Column({ primaryKey: true, autoIncrement: true })
  note_id: number;

  @AllowNull(false)
  @ForeignKey(() => Product)
  @Column(DataType.CHAR(10))
  prod_id: string;

  @AllowNull(false)
  @Column({ type: DataType.DATE })
  note_date: Date;

  @Column({ type: DataType.TEXT })
  note_text: string;

  @BelongsTo(() => Product)
  product: Product;
}
