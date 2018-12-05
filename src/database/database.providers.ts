import { Sequelize } from 'sequelize-typescript';
import { Vendor } from '../vendor/vendor.entity';
import { Product } from '../product/product.entity';
import { Customer } from '../customer/customer.entity';
import { Order } from '../order/order.entity';
import { OrderItem } from '../order/orderitem.entity';
import { ProductNote } from '../product/productnote.entity';
import { Staff } from '../staff/staff.entity';
import { DATABASE_PROVIDER_TOKEN } from '../config/constants';

export const dataProviders = [
  {
    provide: DATABASE_PROVIDER_TOKEN,
    useFactory: async () => {
      const sequelize = new Sequelize({
        dialect: 'mysql',
        host: 'localhost',
        port: 3306,
        username: 'root',
        password: 'root',
        database: 'order',
      });
      sequelize.addModels([Vendor, Product, Customer, Order, OrderItem, ProductNote, Staff]);
      await sequelize.sync();
      return sequelize;
    },
  },
];
