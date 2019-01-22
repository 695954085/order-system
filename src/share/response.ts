import { ApiModelProperty, ApiModelPropertyOptional } from '@nestjs/swagger';

export class Response {
  @ApiModelProperty()
  type: string;
  @ApiModelPropertyOptional()
  message?: string;
  @ApiModelPropertyOptional()
  data?: any;
}
