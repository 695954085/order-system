import { Injectable, Inject } from '@nestjs/common';
import { Vendor } from '../vendor/interface/vendor.interface';
import { VendorService } from '../vendor/vendor.service';
import { Product } from '../product/interface/product.interface';
import { ProductService } from '../product/product.service';
import { CustomerService } from '../customer/customer.service';
import { Customer } from '../customer/interface/customer.interface';

@Injectable()
export class BusinessService {
  // constructor(private readonly vendorService: VendorService, private readonly productService: ProductService, private ) {}

  @Inject(VendorService)
  private readonly vendorService: VendorService;

  @Inject(ProductService)
  private readonly productService: ProductService;

  @Inject(CustomerService)
  private readonly customerService: CustomerService;

  createVendor(vendor: Vendor) {
    return this.vendorService.insertOneVendor(vendor);
  }

  createProduct(product: Product) {
    return this.productService.insertOneProduct(product);
  }

  createCustomer(customer: Customer) {
    return this.customerService.insertOneCustomer(customer);
  }
}
