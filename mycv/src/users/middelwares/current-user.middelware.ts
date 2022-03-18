import { Injectable, NestMiddleware } from '@nestjs/common';
import { Request, Response, NextFunction } from 'express';
import { UsersService } from '../users.service';

export class CurrentUserMiddleware implements NestMiddleware {
  async use(req: Request, res: Response, next: NextFunction) {}
}
