// import { IsNumber, Min } from "class-validator/types/decorator/decorators.js";

import { IsNumber, Min } from "class-validator";

export class MeterDto {
  @IsNumber()
  @Min(0)
  previousKwh: number;

  @IsNumber()
  @Min(0)
  currentKwh: number;
}