import {
  Model,
  Column,
  AllowNull,
  Table,
  IsAlphanumeric,
  Length,
} from 'sequelize-typescript';

@Table
export class Staff extends Model<Staff> {
  @Column({
    primaryKey: true,
    autoIncrement: true,
  })
  staff_id: number;

  @AllowNull(false)
  @Column
  role: string;

  @AllowNull(false)
  @Length({
    min: 5,
    max: 10,
  })
  @IsAlphanumeric
  @Column
  userName: string;

  @AllowNull(false)
  @Column
  password: string;

  @Column
  token: string;
}
