import { ApiModelPropertyOptional } from '@nestjs/swagger';
export class ProductQuery {
  @ApiModelPropertyOptional()
  readonly pageNum: string;
  @ApiModelPropertyOptional()
  readonly pageSize: string;
  @ApiModelPropertyOptional()
  readonly attr: string;
  @ApiModelPropertyOptional()
  readonly prod_id: string;
  @ApiModelPropertyOptional()
  readonly vend_id: string;
  @ApiModelPropertyOptional()
  readonly prod_name: string;
  @ApiModelPropertyOptional()
  readonly prod_price: string;
}