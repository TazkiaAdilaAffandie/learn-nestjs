import { Type } from "class-transformer";
import { ArrayMaxSize, ArrayMinSize, IsArray, IsInt, IsNumber, IsString, Length, Min, ValidateNested } from "class-validator";

export class Item{
     @IsString()
  @Length(2, 50)
  name: string;

  @IsNumber()
  @Min(0)
  price: number;

  @IsInt()
  @Min(1)
  qty: number;

}

export class CheckoutBodyDto {
  @IsArray()
  @ArrayMinSize(1)
  @ArrayMaxSize(20)
  @ValidateNested({ each: true })
  @Type(() => Item)
  items: Item[];
}    
