import { IsInt, IsNumber, Max, Min } from "class-validator";

export class LoanBodyDto {
  @IsInt()
  @Min(1)
  @Max(60)
  months: number;

  @IsNumber()
  @Min(0)
  @Max(50)
  annualInterestRate: number;
}