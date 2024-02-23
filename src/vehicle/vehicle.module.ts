import { Module } from '@nestjs/common';
import { VehicleController } from './vehicle.controller';
import { VehicleService } from './vehicle.service';
import { MongooseModule } from '@nestjs/mongoose';
import { VehicleSchema } from './schemas/vehicle.schema';

@Module({
  imports:[ MongooseModule.forFeature([{ name: 'Vehicle', schema: VehicleSchema }]),],
  controllers: [VehicleController],
  providers: [VehicleService]
})
export class VehicleModule {}
