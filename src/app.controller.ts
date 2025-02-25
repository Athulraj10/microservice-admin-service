import { Controller, Get, Inject } from '@nestjs/common';
import { ClientProxy } from '@nestjs/microservices';

@Controller('auth')
export class AppController {
  constructor(@Inject('AUTH_SERVICE') private authService: ClientProxy) {}

  @Get('users')
  getUsers() {
    return this.authService.send({ cmd: 'get_users' }, {});
  }
}
