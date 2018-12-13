import { Module } from '@nestjs/common';
import { VendorModule } from '../vendor/vendor.module';
import { BusinessController } from './business.controller';
import { BusinessService } from './business.service';
import { ProductModule } from 'src/product/product.module';
import { CustomerModule } from 'src/customer/customer.module';

@Module({
  imports: [VendorModule, ProductModule, CustomerModule],
  controllers: [BusinessController],
  providers: [BusinessService],
})
export class BusinessModule {}
