import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { AuthModule } from './auth/auth.module';
import { MongooseModule } from '@nestjs/mongoose';
import { VehicleModule } from './vehicle/vehicle.module';

@Module({
  imports: [AuthModule,
  MongooseModule.forRoot('mongodb://localhost/nest'),
  VehicleModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
