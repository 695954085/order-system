import { Module } from '@nestjs/common';
import { StaffService } from './staff.service';
import { staffProviders } from './staff.providers';

@Module({
  providers: [StaffService, ...staffProviders],
  exports: [StaffService],
})
export class StaffModule {}