import { Module } from '@nestjs/common';
import { DatabaseModule } from './database/database.module';
import { LoginModule } from './login/login.module';
import { AuthModule } from './auth/auth.module';
import { BusinessModule } from './business/business.module';

@Module({
  imports: [DatabaseModule, AuthModule, LoginModule, BusinessModule],
})
export class AppModule {}
