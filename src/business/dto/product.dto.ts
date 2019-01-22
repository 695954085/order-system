import { ApiModelProperty } from '@nestjs/swagger';
export class ProductDto {
  @ApiModelProperty()
  readonly prod_id: string;
  @ApiModelProperty()
  readonly vend_id: number;
  @ApiModelProperty()
  readonly prod_price: number;
  @ApiModelProperty()
  readonly prod_name: string;
  @ApiModelProperty()
  readonly prod_desc: string;
}