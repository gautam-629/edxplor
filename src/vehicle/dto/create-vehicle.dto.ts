import { IsString, IsNumber, IsEnum } from 'class-validator';

export class CreateVehicleDto {
  @IsString()
  make: string;

  @IsString()
  vehicleModel: string;

  @IsNumber()
  year: number;

  @IsString()
  registrationNumber: string;

  @IsEnum(['active', 'maintenance', 'retired'])
  status: 'active' | 'maintenance' | 'retired';

  @IsString()
  location: string;
}

export class UpdateVehicleDto extends CreateVehicleDto {}
