import { Module } from '@nestjs/common';
import { DatabaseModule } from './database/database.module';
import { LoginModule } from './login/login.module';

@Module({
  imports: [DatabaseModule, LoginModule],
})
export class AppModule {}
