import { Injectable } from '@nestjs/common';
import { Vendor } from '../vendor/interface/vendor.interface';
import { VendorService } from '../vendor/vendor.service';

@Injectable()
export class BusinessService {

  constructor(private readonly vendorService: VendorService) {}

  createVendor(vendor: Vendor) {
    return this.vendorService.insertOneVendor(vendor);
  }
}
