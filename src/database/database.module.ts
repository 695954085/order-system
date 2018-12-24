import { Module } from '@nestjs/common';
import { dataProviders } from './database.providers';
import { DATABASE_PROVIDER_TOKEN } from '../config/constants';

@Module({
  providers: [...dataProviders],
  exports: [DATABASE_PROVIDER_TOKEN],
})
export class DatabaseModule {}