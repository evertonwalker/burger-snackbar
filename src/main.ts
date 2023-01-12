import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { ValidationPipe } from '@nestjs/common';
import { BasicResponseInterceptor } from './interceptors/basic-response-interceptor';

async function bootstrap() {
  const app = await NestFactory.create(AppModule, { cors: false});
  app.useGlobalPipes(new ValidationPipe());
  app.useGlobalInterceptors(new BasicResponseInterceptor());
  app.enableCors();
  await app.listen(3000);
}
bootstrap();
