import { ArrayMaxSize, ArrayMinSize, IsArray, IsNotEmpty, IsNumber, IsOptional, IsString, Max, Min, ValidateNested } from "class-validator";

class Item{
  @IsString()  
  @Min(2)
  @Max(50)
  name: string;

  @IsNumber()
  @Min(0)
  price: number;

  @IsNumber()
  @Min(1)
  qty: number;
}

export class SplitBillDto{
    @IsArray()
  @ArrayMinSize(1)
  @ArrayMaxSize(30)
  items: Item[];

  @IsOptional()
  @IsNumber()
  @Min(0)
  @Max(30)
  tipPercent: number = 0;

}