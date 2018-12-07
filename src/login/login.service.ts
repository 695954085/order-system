import { Injectable } from '@nestjs/common';
import { StaffService } from '../staff/staff.service';
import { Staff } from '../staff/interface/staff.interface';

@Injectable()
export class LoginService {
  constructor(private readonly staffService: StaffService) {}

  doLogin(staff: Staff) {
    return this.staffService.login(staff);
  }

  doRegister(staff: Staff) {
    return this.staffService.register(staff);
  }

  findStaffById(staff_id: string) {
    return this.staffService.findStaffById(staff_id);
  }
}
