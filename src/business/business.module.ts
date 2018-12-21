import { Module } from '@nestjs/common';
import { VendorModule } from '../vendor/vendor.module';
import { BusinessController } from './business.controller';
import { BusinessService } from './business.service';
import { ProductModule } from '../product/product.module';
import { CustomerModule } from '../customer/customer.module';
import { OrderModule } from '../order/order.module';

@Module({
  imports: [VendorModule, ProductModule, CustomerModule, OrderModule],
  controllers: [BusinessController],
  providers: [BusinessService],
})
export class BusinessModule {}
