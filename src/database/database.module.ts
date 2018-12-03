import { Module } from '@nestjs/common';
import { dataProviders } from './database.providers';

@Module({
  providers: [...dataProviders],
})
export class DatabaseModule {}