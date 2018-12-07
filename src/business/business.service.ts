import { Injectable } from '@nestjs/common';
import { Vendor } from '../vendor/interface/vendor.interface';
import { VendorService } from '../vendor/vendor.service';
import { Product } from '../product/interface/product.interface';
import { ProductService } from '../product/product.service';

@Injectable()
export class BusinessService {

  constructor(private readonly vendorService: VendorService, private readonly productService: ProductService) {}

  createVendor(vendor: Vendor) {
    return this.vendorService.insertOneVendor(vendor);
  }

  createProduct(product: Product) {
    return this.productService.insertOneProduct(product);
  }
}
