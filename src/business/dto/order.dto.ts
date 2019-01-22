import { ApiModelProperty } from '@nestjs/swagger';
export class OrderDto {
  @ApiModelProperty()
  readonly order_num: number;
  @ApiModelProperty()
  readonly order_date: Date;
  @ApiModelProperty()
  readonly cust_id: number;
}