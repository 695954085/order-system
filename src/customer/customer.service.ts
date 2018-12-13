import { Injectable, Inject } from '@nestjs/common';
import {
  CUSTOMER_PROVIDER_TOKEN,
  CUSTOMERALREADYEXIST,
  CUSTOMERINSERTSUCCESS,
} from 'src/config/constants';
import { Customer } from './customer.entity';
import { Customer as CustomerInterface } from './interface/customer.interface';

@Injectable()
export class CustomerService {
  constructor(
    @Inject(CUSTOMER_PROVIDER_TOKEN)
    private readonly customerReposity: typeof Customer,
  ) {}

  async insertOneCustomer(params: CustomerInterface) {
    const { cust_name } = params;
    const [customer, created] = await this.customerReposity.findOrCreate({
      where: {
        cust_name,
      },
      defaults: {
        ...params,
      },
    });
    const { cust_id } = customer;
    if (!created) {
      // 用户已存在
      return {
        type: CUSTOMERALREADYEXIST,
        message: '客户信息已存在',
        data: cust_id,
      };
    }
    return {
      type: CUSTOMERINSERTSUCCESS,
      message: '客户信息录入成功',
      data: cust_id,
    };
  }
}
