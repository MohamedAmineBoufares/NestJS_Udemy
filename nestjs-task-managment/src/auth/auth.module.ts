import { Module } from '@nestjs/common';
import { AuthService } from './auth.service';
import { AuthController } from './auth.controller';
import { TypeOrmModule } from '@nestjs/typeorm';
import { UsersRepository } from './users.repository';
import { PassportModule } from '@nestjs/passport';
import { JwtModule } from '@nestjs/jwt';
import { JwtStragtegy } from './jwt.strategy';
@Module({
  imports: [
    PassportModule.register({ defaultStrategy: 'jwt' }),
    JwtModule.register({
      secret: 'topSecret51',
      signOptions: {
        expiresIn: 3600, // One hour = 3600 seconds
      },
    }),

    TypeOrmModule.forFeature([UsersRepository]),
  ],
  providers: [AuthService, JwtStragtegy],
  controllers: [AuthController],
  exports: [JwtStragtegy, PassportModule],
})
export class AuthModule {}
