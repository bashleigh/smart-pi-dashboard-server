import { NestFactory } from '@nestjs/core';
import { ValidationPipe } from '@nestjs/common';
import { NestExpressApplication } from '@nestjs/platform-express';
import { AppModule } from './app.module';

const bootstrap = async () => {
  const app = await NestFactory.create<NestExpressApplication>(AppModule);

  // app.useGlobalPipes(
  //   new ValidationPipe({
  //     transform: true,
  //     forbidNonWhitelisted: true,
  //     whitelist: true,
  //   }),
  // );

  await app.init();

  await app.listen(3000);
}

bootstrap();
