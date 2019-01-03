import { Injectable, Inject } from '@nestjs/common';
import { Vendor as VendorInterface } from './interface/vendor.interface';
import { VENDOR_PROVIDER_TOKEN, VENDORALREADYEXIST, VENDORINSERTSUCCESS } from '../config/constants';
import { Vendor } from './vendor.entity';
import { Transaction } from 'sequelize';

@Injectable()
export class VendorService {
  constructor(
    @Inject(VENDOR_PROVIDER_TOKEN)
    private readonly vendorRepository: typeof Vendor,
  ) {}

  async insertOneVendor(params: VendorInterface) {
    return this.vendorRepository.findOrCreate({
      where: {
        vend_name: params.vend_name,
      },
      defaults: {
        ...params,
        vend_id: null,
      },
    });
  }

  async findVendor(params: VendorInterface, t: Transaction) {
    const { vend_id } = params;
    if(t) {
      return this.vendorRepository.findOne({
        where: {
          vend_id,
        },
        transaction: t,
      });
    }
    return this.vendorRepository.findOne({
      where: {
        vend_id,
      },
    });
  }
}
