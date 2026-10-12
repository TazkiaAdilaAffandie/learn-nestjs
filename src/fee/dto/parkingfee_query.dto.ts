import { Transform } from "class-transformer";
import { IsBoolean, IsIn, IsOptional } from "class-validator";

export class ParkingQueryDto {
  @IsIn(['car', 'motorcycle', 'bus'])
  vehicle: string;

  @IsOptional()
  @Transform(({ value }) => (value === 'true' ? true : value === 'false' ? false : value))
  @IsBoolean()
  weekend?: boolean;
}