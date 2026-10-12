import { IsNotEmpty, IsNumber, Max, Min } from "class-validator";
import { Temperature } from "../entities/temperature.entity.js";

export class ConvertTemperatureDto{
    @IsNotEmpty()
    @IsNumber()
    @Min(-273.15)
    @Max(1000)
    value: number;

        

}