import { ApiModelProperty } from '@nestjs/swagger';
export class CustomerDto {
  @ApiModelProperty()
  readonly cust_id: number;
  @ApiModelProperty()
  readonly cust_name: string;
  @ApiModelProperty()
  readonly cust_address: string;
  @ApiModelProperty()
  readonly cust_city: string;
  @ApiModelProperty()
  readonly cust_state: string;
  @ApiModelProperty()
  readonly cust_zip: string;
  @ApiModelProperty()
  readonly cust_country: string;
  @ApiModelProperty()
  readonly cust_contact: string;
  @ApiModelProperty()
  readonly cust_email: string;
}
