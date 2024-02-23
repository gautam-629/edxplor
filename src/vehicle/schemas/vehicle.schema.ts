import { Document, Schema, Model, model } from 'mongoose';
import * as mongoose from 'mongoose'; 
export interface Vehicle extends Document {
  make: string;
  vehicleModel: string; 
  year: number;
  registrationNumber: string;
  status: 'active' | 'maintenance' | 'retired';
  location: string;
  driver:any
}

export const VehicleSchema: Schema<Vehicle> = new Schema<Vehicle>({
  make: String,
  vehicleModel: String, 
  year: Number,
  registrationNumber: String,
  status: { type: String, enum: ['active', 'maintenance', 'retired'],default: 'active' },
  location: String,
  driver: { type: mongoose.Schema.Types.ObjectId, ref: 'User' },
});

const VehicleModel: Model<Vehicle> = model<Vehicle>('Vehicle', VehicleSchema);

export default VehicleModel;
