import { Staff } from './staff.entity';
import { STAFF_PROVIDER_TOKEN } from '../config/constants';

export const staffProviders = [
  {
    provide: STAFF_PROVIDER_TOKEN,
    useValue: Staff,
  },
];