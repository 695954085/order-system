import { Vendor } from './vendor.entity';
import { VENDOR_PROVIDER_TOKEN } from '../config/constants';

export const vendorProviders = [
  {
    provide: VENDOR_PROVIDER_TOKEN,
    useValue: Vendor,
  },
];
