import { Body, Controller, Post } from '@nestjs/common';
import { AuthService } from './auth.service';
import { SignUpDto, LogInDto } from './dto/auth-credentials.dto';

@Controller('auth')
export class AuthController {
  constructor(private authService: AuthService) {}

  @Post('/signup')
  signUp(@Body() signupDto: SignUpDto): Promise<void> {
    return this.authService.signUp(signupDto);
  }

  @Post('/login')
  logIn(@Body() loginDton: LogInDto): Promise<{ accessToken: string }> {
    return this.authService.logIn(loginDton);
  }
}
