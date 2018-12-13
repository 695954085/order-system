import { Module } from '@nestjs/common';
import { customerProvider } from './customer.provider';
import { CustomerService } from './customer.service';

@Module({
  providers: [...customerProvider, CustomerService],
  exports: [CustomerService],
})
export class CustomerModule {

}