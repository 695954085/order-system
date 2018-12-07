import { Controller, Post, Body, Param, Get, UseGuards, Req } from '@nestjs/common';
import { StaffDto } from './dto/login.dto';
import { JoiValidationPipe } from '../share/joi-validation.pipe';
import { schema } from './schema/login.schema';
import { LoginService } from './login.service';
import * as util from 'util';
import { AuthGuard } from '@nestjs/passport';

@Controller()
export class LoginController {
  constructor(private readonly loginService: LoginService) {}

  @Post('/doLogin')
  async doLogin(@Body(new JoiValidationPipe(schema)) staff: StaffDto) {
    // 调用数据库
    return this.loginService.doLogin(staff);
  }

  @Post('/doRegister')
  async doRegister(@Body(new JoiValidationPipe(schema)) staff: StaffDto) {
    return this.loginService.doRegister(staff);
  }

  // @UseGuards(AuthGuard('bearer'))
  // @Get('/staff/:staff_id')
  // async doGet(@Param('staff_id') staff_id: string, @Req() req) {
  //   console.log(util.inspect(req.user));
  //   return this.loginService.findStaffById(staff_id);
  // }
}
