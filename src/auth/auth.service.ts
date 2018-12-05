import { Injectable, InternalServerErrorException } from '@nestjs/common';
import * as jsonwebtoken from 'jsonwebtoken';
import { SECRET } from '../config/constants';
import { StaffService } from '../staff/staff.service';
import * as bluebird from 'bluebird';

const jsonwebtokenAsync: any = bluebird.promisifyAll(jsonwebtoken);

@Injectable()
export class AuthService {
  constructor(private readonly staffService: StaffService) {}

  async validateUser(token: string): Promise<any> {
    try {
      const decodedObj = await jsonwebtokenAsync.verifyAsync(token, SECRET);
      const userName = (decodedObj as any).userName;
      return this.staffService.findStaffByUserName(userName);
    } catch (err) {
      throw new InternalServerErrorException(err);
    }
  }
}
