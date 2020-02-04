// The entry file of the application which uses the core function NestFactory to create a Nest application instance

// NestFactrory class exposes static methods that allow creating an application instance
import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';

async function bootstrap() {

  // Create method returns an application object which fulfills the Nest application interface
  const app = await NestFactory.create(AppModule);

  // Start up HHTP listener, application awaits inbound HTTP requests
  await app.listen(3000);
}
bootstrap();
