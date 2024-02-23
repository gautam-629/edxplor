import { Controller, Get, Post, Patch, Delete, Param, Body, UseGuards } from '@nestjs/common';
import { VehicleService } from './vehicle.service';
import { AuthGuard } from '@nestjs/passport';
import { Vehicle } from './schemas/vehicle.schema';
import { CreateVehicleDto, UpdateVehicleDto } from './dto/create-vehicle.dto';

@Controller('vehicles')
@UseGuards(AuthGuard('jwt'))
export class VehicleController {
  constructor(private readonly vehicleService: VehicleService) {}

  @Post()
  create(@Body() createVehicleDto: CreateVehicleDto): Promise<Vehicle> {
    return this.vehicleService.create(createVehicleDto);
  }

  @Patch(':id')
  update(@Param('id') id: string, @Body() updateVehicleDto: UpdateVehicleDto): Promise<Vehicle> {
    return this.vehicleService.update(id, updateVehicleDto);
  }

  @Get()
  findAll(): Promise<Vehicle[]> {
    return this.vehicleService.findAll();
  }

  @Get(':id')
  findById(@Param('id') id: string): Promise<Vehicle> {
    return this.vehicleService.findById(id);
  }

  @Delete(':id')
  delete(@Param('id') id: string): Promise<Vehicle> {
    return this.vehicleService.delete(id);
  }
}
