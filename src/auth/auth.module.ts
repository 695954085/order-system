import { Module, Global } from '@nestjs/common';
import { AuthService } from './auth.service';
import { HttpStrategy } from './http.strategy';
import { StaffModule } from '../staff/staff.module';
import { RoleGuard } from './role.guard';
import { Roles } from './roles.decorator';

@Global()
@Module({
  imports: [StaffModule],
  providers: [AuthService, HttpStrategy, RoleGuard, {
    provide: Roles,
    useValue: Roles,
  }],
})
export class AuthModule {}
