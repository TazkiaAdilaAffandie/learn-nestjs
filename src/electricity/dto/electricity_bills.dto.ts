// import { Transform } from "class-transformer/types/decorators/transform.decorator.js";
// import { Type } from "class-transformer/types/decorators/type.decorator.js";
import { IsString, Length, ValidateNested } from "class-validator";
import { MeterDto } from "./electricity_meter.dto.js";
import { RatesDto } from "./electricity_rate.dto.js";
import { Transform, Type } from "class-transformer";

export class ElectricityBillDto {
  // trim removes spaces at the start and end
  @Transform(({ value }) => (typeof value === 'string' ? value.trim() : value))
  @IsString()
  @Length(3, 80)
  customerName: string;

  @ValidateNested()
  @Type(() => MeterDto)
  meter: MeterDto;

  @ValidateNested()
  @Type(() => RatesDto)
  rates: RatesDto;
}