import { ConflictException, Injectable, NotFoundException } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { Vehicle } from './schemas/vehicle.schema';
import { CreateVehicleDto, UpdateVehicleDto } from './dto/create-vehicle.dto';
import { ErrorHandler } from 'src/common/errorHandler';
import { CommmonError } from 'src/common/enums/common.enum';


@Injectable()
export class VehicleService {
  constructor(@InjectModel('Vehicle') private readonly vehicleModel: Model<Vehicle>) {}

  async findAll(): Promise<Vehicle[]> {
    try {
      return this.vehicleModel.find().exec();
    } catch (error) {
      ErrorHandler(CommmonError.SOMETHING_WRONG, error.message);
    }
  }
  async findById(id: string): Promise<Vehicle> {
    try {
      const vehicle = await this.vehicleModel.findById(id).exec();
    if (!vehicle) {
      throw new NotFoundException('Vehicle not found');
    }
    return vehicle;
    } catch (error) {
      ErrorHandler(CommmonError.SOMETHING_WRONG, error.message);
    }
    
  }

  async create(createVehicleDto: CreateVehicleDto): Promise<Vehicle> {
    try {
      const { registrationNumber } = createVehicleDto;
    // Check if a vehicle with the same registration number already exists
    const existingVehicle = await this.vehicleModel.findOne({ registrationNumber }).exec();
    if (existingVehicle) {
      throw new ConflictException('Vehicle with the same registration number already exists');
    }
    // Create and save the new vehicle
    const createdVehicle = new this.vehicleModel(createVehicleDto);
    return await createdVehicle.save();
    } catch (error) {
       ErrorHandler(CommmonError.SOMETHING_WRONG, error.message);
    }
    
  }

  async update(id: string, updateVehicleDto: UpdateVehicleDto): Promise<Vehicle> {
    
    try {
      const updatedVehicle = await this.vehicleModel.findByIdAndUpdate(id, updateVehicleDto, { new: true }).exec();
    if (!updatedVehicle) {
      throw new NotFoundException('Vehicle not found');
    }
    return updatedVehicle;
    } catch (error) {
      ErrorHandler(CommmonError.SOMETHING_WRONG, error.message);
    }
    
  }

  async delete(id: string): Promise<Vehicle> {
    try {
      const deletedVehicle = await this.vehicleModel.findByIdAndDelete(id).exec();
    if (!deletedVehicle) {
      throw new NotFoundException('Vehicle not found');
    }
    return deletedVehicle;
    } catch (error) {
      ErrorHandler(CommmonError.SOMETHING_WRONG, error.message);
    }
    
  }
}
