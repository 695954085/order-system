import { Injectable } from '@nestjs/common';
import { StaffService } from '../staff/staff.service';
import { Staff } from '../staff/interface/staff.interface';
import { AuthService } from '../auth/auth.service';
import { SUCCESS_LOGIN, STAFFNOEXIST, WRONG_TOKEN } from '../config/constants';

@Injectable()
export class LoginService {
  constructor(
    private readonly staffService: StaffService,
    private readonly authService: AuthService,
  ) {}

  doLogin(staff: Staff) {
    return this.staffService.login(staff);
  }

  doRegister(staff: Staff) {
    return this.staffService.register(staff);
  }

  findStaffById(staff_id: string) {
    return this.staffService.findStaffById(staff_id);
  }

  async doLoginByToken(token: string) {
    try {
      const user = await this.authService.validateUser(token);
      // user not exist
      if (!user) {
        return {
          type: STAFFNOEXIST,
        };
      }
      return {
        type: SUCCESS_LOGIN,
        data: {
          userName: user.userName,
          token: user.token,
        },
      };
    } catch (err) {
      return {
        type: WRONG_TOKEN,
      };
    }
  }
}
