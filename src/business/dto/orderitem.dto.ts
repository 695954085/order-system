import { ApiModelProperty } from '@nestjs/swagger';
export class OrderItemDto {
  @ApiModelProperty()
  readonly order_num: number;
  @ApiModelProperty()
  readonly order_item: number;
  @ApiModelProperty()
  readonly prod_id: string;
  @ApiModelProperty()
  readonly quantity: number;
  @ApiModelProperty()
  readonly item_price: number;
}