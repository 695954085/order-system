import {
  PRODUCT_PROVIDER_TOKEN,
  PRODUCT_NOTE_PROVIDER_TOKEN,
} from '../config/constants';
import { Product } from './product.entity';
import { ProductNote } from './productnote.entity';

export const productProviders = [
  {
    provide: PRODUCT_PROVIDER_TOKEN,
    useValue: Product,
  },
  {
    provide: PRODUCT_NOTE_PROVIDER_TOKEN,
    useValue: ProductNote,
  },
];
