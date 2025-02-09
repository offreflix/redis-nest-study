import { Body, Controller, Get, Param, Post } from '@nestjs/common';
import { AppService } from './app.service';

@Controller()
export class AppController {
  constructor(private readonly appService: AppService) {}

  @Get('/:key')
  getHello(@Param('key') key: string): Promise<string> {
    return this.appService.getHello(key);
  }

  @Post('/:key')
  setHello(
    @Param('key') key: string,
    @Body('value') value: string,
  ): Promise<string> {
    return this.appService.setHello(key, value);
  }
}
