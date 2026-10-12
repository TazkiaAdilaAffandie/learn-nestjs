import { IsBoolean, IsNumber, IsOptional, IsString, Max, Min, ValidateNested } from 'class-validator';
import { Transform, Type } from 'class-transformer';

export class DeliveryParamsDto {
  @IsString()
  city: string;
}

export class DeliveryQueryDto {
  @IsOptional()
  @Transform(({ value }) => (value === 'true' ? true : value === 'false' ? false : value))
  @IsBoolean()
  express?: boolean;

  @IsOptional()
  @Transform(({ value }) => (value === 'true' ? true : value === 'false' ? false : value))
  @IsBoolean()
  insurance?: boolean;
}

export class DimensionDto {
  @IsNumber()
  @Min(1)
  @Max(100)
  lengthCm: number;

  @IsNumber()
  @Min(1)
  @Max(100)
  widthCm: number;

  @IsNumber()
  @Min(1)
  @Max(100)
  heightCm: number;
}

export class DeliveryBodyDto {
  @IsNumber()
  @Min(0.1)
  @Max(30)
  weightKg: number;

  @ValidateNested()
  @Type(() => DimensionDto)
  dimension: DimensionDto;
}