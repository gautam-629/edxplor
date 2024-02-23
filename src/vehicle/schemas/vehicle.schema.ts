import { Document, Schema, Model, model } from 'mongoose';

export interface Vehicle extends Document {
  make: string;
  vehicleModel: string; 
  year: number;
  registrationNumber: string;
  status: 'active' | 'maintenance' | 'retired';
  location: string;
}

export const VehicleSchema: Schema<Vehicle> = new Schema<Vehicle>({
  make: String,
  vehicleModel: String, 
  year: Number,
  registrationNumber: String,
  status: { type: String, enum: ['active', 'maintenance', 'retired'],default: 'active' },
  location: String,
});

const VehicleModel: Model<Vehicle> = model<Vehicle>('Vehicle', VehicleSchema);

export default VehicleModel;
