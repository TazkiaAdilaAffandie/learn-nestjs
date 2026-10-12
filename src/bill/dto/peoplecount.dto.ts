import { IsNumber, Max, Min } from "class-validator";

export class PeopleCountDto{
    @IsNumber()
    @Min(2)
    @Max(20)

    peopleCount: number;
}