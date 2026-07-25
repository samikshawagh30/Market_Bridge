import {
  IsString,
  IsNumber,
  IsNotEmpty,
} from 'class-validator';

export class CreateHarvestDto {

  @IsString()
  @IsNotEmpty()
  cropName: string;

  @IsNumber()
  quantity: number;

  @IsString()
  unit: string;

  @IsNumber()
  expectedPrice: number;

  @IsString()
  harvestDate: string;

  @IsString()
  village: string;

  @IsString()
  district: string;

  @IsString()
  state: string;

  @IsNumber()
  latitude: number;

  @IsNumber()
  longitude: number;
}