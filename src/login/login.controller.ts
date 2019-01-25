import { Controller, Post, Body } from '@nestjs/common';
import { StaffDto } from './dto/login.dto';
import { JoiValidationPipe } from '../share/joi-validation.pipe';
import { schema } from './schema/login.schema';
import { LoginService } from './login.service';
import { ApiOkResponse } from '@nestjs/swagger';
import { Response } from '../share/response';
import { TokenDto } from './dto/token.dto';

@Controller()
export class LoginController {
  constructor(private readonly loginService: LoginService) {}

  @ApiOkResponse({
    type: Response,
  })
  @Post('/doLogin')
  async doLogin(@Body(new JoiValidationPipe(schema)) staff: StaffDto) {
    // 调用数据库
    return this.loginService.doLogin(staff);
  }

  @ApiOkResponse({
    type: Response,
  })
  @Post('/dologinbytoken')
  async doLoginByToken(@Body() params: TokenDto) {
    return this.loginService.doLoginByToken(params.token);
  }

  @ApiOkResponse({
    type: Response,
  })
  @Post('/doRegister')
  async doRegister(@Body(new JoiValidationPipe(schema)) staff: StaffDto) {
    return this.loginService.doRegister(staff);
  }
}
