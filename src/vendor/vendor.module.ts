import { Module } from '@nestjs/common';
import { vendorProviders } from './vendor.provider';
import { VendorService } from './vendor.service';
@Module({
  providers: [VendorService, ...vendorProviders],
  exports: [VendorService],
})
export class VendorModule {}
