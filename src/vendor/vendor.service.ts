import { Injectable, Inject } from '@nestjs/common';
import { Vendor as VendorInterface } from './interface/vendor.interface';
import { VENDOR_PROVIDER_TOKEN, VENDORALREADYEXIST, VENDORINSERTSUCCESS } from '../config/constants';
import { Vendor } from './vendor.entity';

@Injectable()
export class VendorService {
  constructor(
    @Inject(VENDOR_PROVIDER_TOKEN)
    private readonly vendorRepository: typeof Vendor,
  ) {}

  async insertOneVendor(params: VendorInterface) {
    const { vend_name } = params;
    const [vendor, created] = await this.vendorRepository.findOrCreate({
      where: {
        vend_name,
      },
      defaults: {
        ...params,
        vend_id: null,
      },
    });
    const vend_id = vendor.vend_id;
    if (!created) {
      // 该vendor已经存在
      return {
        type: VENDORALREADYEXIST,
        message: '该供应商已经存在',
        data: vend_id,
      };
    }
    return {
      type: VENDORINSERTSUCCESS,
      message: '供应商添加成功',
      data: vend_id,
    };
  }
}
