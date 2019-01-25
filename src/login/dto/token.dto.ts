import { ApiModelProperty } from '@nestjs/swagger';
export class TokenDto {
  @ApiModelProperty()
  token: string;
}