import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { MyLogger } from './share/logger.service';

async function bootstrap() {
  const app = await NestFactory.create(AppModule, {
    logger: false,
  });
  app.useLogger(app.get(MyLogger));
  await app.listen(3000);
}
bootstrap();
