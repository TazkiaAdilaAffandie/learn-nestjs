import { IsBoolean, IsNotEmpty, IsNumber, IsOptional, Max, Min } from "class-validator";

export class SalesTaxDto{
    @IsNotEmpty()
    @IsNumber()
    @Min(0)
    amount: number

    @IsNotEmpty()
    @IsNumber()
    @Max(100)
    rate: number

    @IsOptional()
    @IsBoolean()
    inclusive: boolean = false;
}