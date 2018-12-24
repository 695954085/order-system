import { CUSTOMER_PROVIDER_TOKEN } from '../config/constants';
import { Customer } from './customer.entity';

export const customerProvider = [
  {
    provide: CUSTOMER_PROVIDER_TOKEN,
    useValue: Customer,
  },
];