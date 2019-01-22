import {
  Injectable,
  Inject,
  InternalServerErrorException,
} from '@nestjs/common';
import {
  STAFF_PROVIDER_TOKEN,
  SECRET,
  STAFFALREADYEXIST,
  SUCCESS_REGISTER,
  STAFFNOEXIST,
  FAIL_PASSWORD_ERROR,
  SUCCESS_LOGIN,
} from '../config/constants';
import { Staff } from './staff.entity';
import { Staff as StaffInterface } from './interface/staff.interface';
import * as bcrypt from 'bcrypt';
import * as jsonwebtoken from 'jsonwebtoken';
import * as bluebird from 'bluebird';
import { Response} from '../share/response';
const jsonwebtokenAsync: any = bluebird.promisifyAll(jsonwebtoken);

@Injectable()
export class StaffService {
  constructor(
    @Inject(STAFF_PROVIDER_TOKEN)
    private readonly staffRepository: typeof Staff,
  ) {}

  async login(params: StaffInterface): Promise<Response> {
    const { userName, password } = params;
    try {
      const staff = await this.staffRepository.findOne({
        where: {
          userName,
        },
      });
      if (!staff) {
        // 用户不存在
        return {
          type: STAFFNOEXIST,
          message: '员工不存在',
        };
      }
      const encryptedPassword = staff.get('password');
      const isVerify = await bcrypt.compare(password, encryptedPassword);
      if (!isVerify) {
        // 密码错误
        return {
          type: FAIL_PASSWORD_ERROR,
          message: '密码错误',
        };
      }
      // 生成token
      const token = await jsonwebtokenAsync.signAsync({ userName }, SECRET, {
        expiresIn: '1h',
      });
      // 保存token
      await staff.update({
        token,
      });
      return {
        type: SUCCESS_LOGIN,
        message: '登录成功',
        data: token,
      };
    } catch (err) {
      let message = '数据库操作异常';
      switch (typeof err) {
        case 'string':
          message = err;
          break;
        case 'object':
          message = err.message;
          break;
        default:
          break;
      }
      throw new InternalServerErrorException(message);
    }
  }

  async register(params: StaffInterface) {
    const { userName, password, role } = params;
    try {
      const salt = await bcrypt.genSalt(10);
      const newPassword = await bcrypt.hash(password, salt);
      const [staff, created] = await this.staffRepository.findOrCreate({
        where: { userName },
        defaults: { staff_id: null, userName, password: newPassword, role },
      });
      const staff_id = staff.get('staff_id');
      if (!created) {
        // staff已经存在
        return {
          type: STAFFALREADYEXIST,
          message: '该员工已存在',
          data: staff_id,
        };
      }
      return {
        type: SUCCESS_REGISTER,
        message: '成功注册',
        data: staff_id,
      };
    } catch (err) {
      // 数据库操作异常
      // 1. 如果这个err是字符串， message直接为err
      // 2. 如果这个err是对象，那么message为err.message, 但是如果message为undefined， 那么就是用自定义message？
      let message = '数据库操作异常';
      switch (typeof err) {
        case 'string':
          message = err;
          break;
        case 'object':
          message = err.message;
          break;
        default:
          break;
      }
      throw new InternalServerErrorException(message);
    }
  }

  async findStaffByUserName(userName: string) {
    return this.staffRepository.findOne({
      where: {
        userName,
      },
    });
  }

  async findStaffById(staff_id: string) {
    return this.staffRepository.findOne({
      where: {
        staff_id,
      },
    });
  }
}
