import { Module } from '@nestjs/common';
import { LoginController } from './login.controller';
import { LoginService } from './login.service';
import { StaffModule } from '../staff/staff.module';
import { AuthModule } from '../auth/auth.module';

@Module({
  imports: [StaffModule, AuthModule],
  controllers: [LoginController],
  providers: [LoginService],
})
export class LoginModule {}