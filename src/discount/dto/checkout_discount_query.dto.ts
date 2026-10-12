import { IsBoolean, IsOptional, IsString } from "class-validator";
import { Transform } from 'class-transformer';

export class CheckoutQueryDto {

  @IsOptional()
  @Transform(({ value }) => value === 'true')
  @IsBoolean()
  member?: boolean;

  @IsOptional()
  @IsString()
  coupon?: string;
}