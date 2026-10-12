import { IsIn } from "class-validator";

export class ConvertTemperatureQueryDto {
  @IsIn(['C', 'F', 'K'])
  from: string;

  @IsIn(['C', 'F', 'K'])
  to: string;
}