import * as Sentry from '@sentry/node';
import { Body, Controller, Get, Post } from '@nestjs/common';
import { AppService } from './app.service';

@Controller()
export class AppController {
  constructor(private readonly appService: AppService) { }

  @Get()
  getHello(): string {
    return this.appService.getHello();
  }

  @Get("/debug-sentry")
  getError() {
    try {
      throw new Error("This is a test error");
    } catch (error) {
      console.log("catch section");
      Sentry.captureException(error);
    }
  }

  @Post("/sentry-transaction")
  createError(@Body() req) {
    try {
      throw new Error("This is error transaction");
    } catch (error) {
      console.log("sentry transaction");
      Sentry.captureException(error);
    }
  }
}
