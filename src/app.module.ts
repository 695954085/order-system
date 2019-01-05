import { Module } from '@nestjs/common';
import { DatabaseModule } from './database/database.module';
import { LoginModule } from './login/login.module';
import { AuthModule } from './auth/auth.module';
import { BusinessModule } from './business/business.module';
import { ShareModule } from './share/share.module';

@Module({
  imports: [DatabaseModule, AuthModule, LoginModule, BusinessModule, ShareModule],
})
export class AppModule {}
