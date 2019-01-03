import { Injectable, Inject } from '@nestjs/common';
import {
  CUSTOMER_PROVIDER_TOKEN,
  CUSTOMERALREADYEXIST,
  CUSTOMERINSERTSUCCESS,
} from '../config/constants';
import { Customer } from './customer.entity';
import { Customer as CustomerInterface } from './interface/customer.interface';
import { Transaction } from 'sequelize';

@Injectable()
export class CustomerService {
  constructor(
    @Inject(CUSTOMER_PROVIDER_TOKEN)
    private readonly customerReposity: typeof Customer,
  ) {}

  async insertOneCustomer(params: CustomerInterface) {
    const { cust_name } = params;
    return this.customerReposity.findOrCreate({
      where: {
        cust_name,
      },
      defaults: {
        ...params,
      },
    });
  }

  async findCustomer(params: CustomerInterface, t?: Transaction) {
    const { cust_id } = params;
    return this.customerReposity.findOne({
      transaction: t,
      where: {
        cust_id,
      },
    });
  }
}
