
import { User } from './schemas/users.schema';
import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { CreateUserDto } from './dto/create-user.dto';
import { ErrorHandler } from 'src/common/errorHandler';
import { CommmonError } from 'src/common/enums/common.enum';
import * as bcrypt from 'bcrypt';
import { JwtService } from '@nestjs/jwt';

@Injectable()
export class AuthService {
    constructor(
        @InjectModel('User')
        private readonly userModel:Model<User>,
        private jwtService: JwtService,
        ){}

        async createUser({email,password}:CreateUserDto): Promise<User> {
            try {
                 // Check if the email already exists
         const existingUser = await this.userModel.findOne({ email });

         if (existingUser) {
            ErrorHandler(CommmonError.NOT_CREATED,"Something went wrong",400);
         }
         const saltOrRounds = 10;
         const hashedPassword = await bcrypt.hash(password, saltOrRounds);
         // Create and save the new user
           const user = new this.userModel({ email:email, password: hashedPassword });
           
           return await user.save();
            } catch (error) {
                ErrorHandler(CommmonError.SOMETHING_WRONG, error.message);
            }
           
          }

          async validateUser(email: string, password: string) {
            const user = await this.userModel.findOne({email});
            const isMatch = await bcrypt.compare(password, user.password);
            if (user && isMatch) {
              return user;
            }
            return null;
          }

          async login(user: any) {
            const payload = { email: user.email, sub: user.id };
            return {
              access_token: this.jwtService.sign(payload),
            };
          }
}

