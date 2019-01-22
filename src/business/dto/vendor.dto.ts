import { ApiModelProperty } from '@nestjs/swagger';
export class VendorDto {
  @ApiModelProperty()
  readonly vend_name: string;
  @ApiModelProperty()
  readonly vend_address: string;
  @ApiModelProperty()
  readonly vend_city: string;
  @ApiModelProperty()
  readonly vend_state: string;
  @ApiModelProperty()
  readonly vend_zip: string;
  @ApiModelProperty()
  readonly vend_country: string;
}