import { Controller, Post, Body, UseGuards } from '@nestjs/common';
import { JoiValidationPipe } from '../share/joi-validation.pipe';
import { schema } from './schema/vendor.schema';
import { VendorDto } from './dto/vendor.dto';
import { BusinessService } from './business.service';
import { AuthGuard } from '@nestjs/passport';
import { Roles } from '../auth/roles.decorator';
import { RoleGuard } from '../auth/role.guard';
import { productSchema } from './schema/product.schema';
import { ProductDto } from './dto/product.dto';
import { customerSchema } from './schema/customer.schema';
import { CustomerDto } from './dto/customer.dto';

@UseGuards(AuthGuard('bearer'))
@Controller('/v1')
export class BusinessController {
  constructor(private readonly businessService: BusinessService) {}

  @Roles('admin', 'general')
  @UseGuards(RoleGuard)
  @Post('/vendor')
  async create(@Body(new JoiValidationPipe(schema)) vendor: VendorDto) {
    return this.businessService.createVendor(vendor);
  }

  @Roles('admin', 'general')
  @UseGuards(RoleGuard)
  @Post('/product')
  async createProduct(
    @Body(new JoiValidationPipe(productSchema)) product: ProductDto,
  ) {
    return this.businessService.createProduct(product);
  }

  @Roles('admin', 'general')
  @UseGuards(RoleGuard)
  @Post('/customer')
  async createCustomer(@Body(new JoiValidationPipe(customerSchema)) customer: CustomerDto){
    return this.businessService.createCustomer(customer);
  }
}
