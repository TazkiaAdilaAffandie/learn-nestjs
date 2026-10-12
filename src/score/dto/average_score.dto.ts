import { IsArray, IsNotEmpty, IsNumber, IsOptional, ArrayMinSize, ArrayMaxSize, Min, Max } from "class-validator";

export class AverageScoreDto {
    @IsNotEmpty()
    @IsArray()
    @ArrayMinSize(1)
    @ArrayMaxSize(20)
    @IsNumber({}, { each: true })
    scores: number[];

    @IsOptional()
    @IsNumber()
    @Min(0)
    @Max(100)
    passMark: number = 70;
}