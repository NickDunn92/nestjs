// Basic controller sample with a single route

import { Controller, Get } from '@nestjs/common';
import { AppService } from './app.service';


interface HealthInterface{
  message: string;
  statusCode: number;
}

@Controller()
export class AppController {
  constructor(){}

  @Get()
  heartbeat(): HealthInterface {
    return {
      message: "alive",
      statusCode: 200
    }
  }
}
