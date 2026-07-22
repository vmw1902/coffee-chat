import { NestFactory } from '@nestjs/core';
import { CoffeeModule } from './coffee/coffee.module';

async function bootstrap() {
  const app = await NestFactory.create(CoffeeModule);
  app.enableCors();
  await app.listen(process.env.PORT ?? 3000);
}
bootstrap();
