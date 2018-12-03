import {
  Table,
  Column,
  Model,
  ForeignKey,
  DataType,
  BelongsTo,
} from 'sequelize-typescript';
import { Product } from '../product/product.entity';

@Table({
  engine: 'MyISAM',
})
export class ProductNote extends Model<ProductNote> {
  @Column({primaryKey: true})
  note_id: number;

  @ForeignKey(() => Product)
  @Column(DataType.CHAR(10))
  prod_id: string;

  @Column({ type: DataType.DATE })
  note_date: Date;

  @Column({ type: DataType.TEXT })
  note_text: string;

  @BelongsTo(() => Product)
  product: Product;
}
