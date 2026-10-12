import { Type } from "class-transformer";
import { IsNumber, Max, Min } from "class-validator";

export class LoanParamsDto {
  @Type(() => Number)
  @IsNumber()
  @Min(1000000)
  @Max(1000000000)
  principal: number;
}
