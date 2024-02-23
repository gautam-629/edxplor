import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import { UserSchema } from './schemas/users.schema';
import { AuthController } from './auth.controller';
import { AuthService } from './auth.service';
import { LocalStrategy } from './local.strategy';
import { JwtModule } from '@nestjs/jwt';
import { jwtConstants } from 'src/common/constants';
import { JwtStrategy } from './jwt.strategy';

@Module({
    imports: [MongooseModule.forFeature([{ name: 'User', schema: UserSchema }]),
    JwtModule.register({
        secret: jwtConstants.secret,
        signOptions: { expiresIn: '60s' },
      }),
],
    controllers: [AuthController],
    providers: [AuthService,LocalStrategy,JwtStrategy],
})
export class AuthModule {}
