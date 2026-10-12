import { IsNumber, IsOptional, Max, Min } from "class-validator";

export class RatesDto {
  @IsNumber()
  @Min(0)
  baseFee: number;

  @IsNumber()
  @Min(0)
  perKwh: number;

  @IsOptional()
  @IsNumber()
  @Min(0)
  @Max(20)
  taxRate?: number;
}
