import { Body, Controller, Post, Req, UseGuards } from '@nestjs/common';
import { AuthService } from './auth.service';
import { AuthCredentialsDto } from './dto/auth-credentials.dto';

@Controller('auth')
export class AuthController {
  constructor(private authService: AuthService) {}

  @Post('/signup')
  sigUp(@Body() autheCredentialsDto: AuthCredentialsDto): Promise<void> {
    return this.authService.signUp(autheCredentialsDto);
  }

  @Post('/signin')
  sigIn(
    @Body() autheCredentialsDto: AuthCredentialsDto,
  ): Promise<{ accessToken: string }> {
    return this.authService.signIn(autheCredentialsDto);
  }
}
