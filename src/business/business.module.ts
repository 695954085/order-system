import { Module } from '@nestjs/common';
import { VendorModule } from '../vendor/vendor.module';
import { BusinessController } from './business.controller';
import { BusinessService } from './business.service';

@Module({
  imports: [VendorModule],
  controllers: [BusinessController],
  providers: [BusinessService],
})
export class BusinessModule {}
