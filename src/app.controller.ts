import { Controller, Get, Post, Body, Response, Request } from '@nestjs/common';
import { AppService } from './app.service';
import axios from 'axios';
import { EventsGateway } from './events.gateway';
@Controller()
export class AppController {
  constructor(private readonly appService: AppService) {}

  @Get()
  getHello(): string {
    return this.appService.getHello();
  }
  @Post('submitOrder')
  async submitOrder(
    @Body() body,
    @Response() res,
    @Request() req,
  ): Promise<any> {
    console.log('req', req.headers.authorization);
    console.log('body', body);
    const token = req.headers.authorization;
    const result = await axios.post(
      'user/createOrder',
      { ...body },
      { headers: { authorization: token } },
    );
    console.log('result', result);
    // EventsGateway.submitOrder(1);
    return result;
  }
}
