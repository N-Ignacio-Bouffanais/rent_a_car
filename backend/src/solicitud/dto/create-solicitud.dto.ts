import { IsNotEmpty, IsString, IsInt, Min } from 'class-validator';

export class CreateSolicitudDto {
  @IsString()
  @IsNotEmpty()
  username: string;
  @IsString()
  @IsNotEmpty()
  dni: string;
  @IsString()
  @IsNotEmpty()
  car_model: string;
  @IsInt()
  @Min(2000000)
  price: number;
  @IsString()
  @IsNotEmpty()
  car_brand: string;
  @IsInt()
  @Min(1940)
  year: number;
  @IsString()
  @IsNotEmpty()
  color: string;
}
