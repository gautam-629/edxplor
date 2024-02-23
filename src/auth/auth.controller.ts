import { Body, Controller, Post, UseGuards,Request } from '@nestjs/common';
import { AuthService } from './auth.service';
import { CreateUserDto } from './dto/create-user.dto';
import { AuthGuard } from '@nestjs/passport';

@Controller('auth')
export class AuthController {
    constructor( private readonly authService:AuthService){}
    
    @Post('register')
  async register(@Body() createUserDto:CreateUserDto) {
    return await this.authService.createUser(createUserDto);
  }

  @UseGuards(AuthGuard('local'))
  @Post('login')
  async login(@Request() req: any) {
    return this.authService.login(req.user);
  }
}
