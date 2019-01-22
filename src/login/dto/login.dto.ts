/**
 * As you can see, the definition's empty although the class
 * has few declared properties. In order to make the class
 * properties accessible to the SwaggerModule, we have to mark
 * all of them with @ApiModelProperty() descrator:
 */

import { ApiModelProperty, ApiModelPropertyOptional } from '@nestjs/swagger';

export class StaffDto {
  @ApiModelProperty()
  readonly userName: string;

  @ApiModelProperty()
  readonly passport: string;

  @ApiModelPropertyOptional()
  readonly role: string;
}
