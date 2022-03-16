import {
  NestInterceptor,
  ExecutionContext,
  CallHandler,
  Injectable,
} from '@nestjs/common';
import { Observable } from 'rxjs';
import { UsersService } from '../users.service';

@Injectable()
export class CurrentUserInterceptor implements NestInterceptor {
  constructor(private userService: UsersService) {}

  async intercept(context: ExecutionContext, handler: CallHandler<any>) {
    const req = context.switchToHttp().getRequest();

    const { userId } = req.session;

    if (userId) {
      const user = this.userService.findOne(userId);

      req.currentUser = user;
    }

    return handler.handle();
  }
}
