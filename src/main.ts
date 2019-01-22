import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { MyLogger } from './share/logger.service';
import { SwaggerModule, DocumentBuilder } from '@nestjs/swagger';

async function bootstrap() {
  const app = await NestFactory.create(AppModule, {
    logger: false,
  });
  app.useLogger(app.get(MyLogger));
  app.enableCors();
  // config swagger
  // The DocumentBuilder is helper class that helps to structure
  // a base document for the SwaggerModule. It contains several methods
  // that allow setting such properties like title, description
  // version and so on.
  const options = new DocumentBuilder()
    .setTitle('Order System')
    .setDescription('The Order System API description')
    .setVersion('1.0')
    .addTag('Order System')
    .build();
  // This method takes two arguments, the application instance
  // and the base Swagger options respectively.
  const document = SwaggerModule.createDocument(app, options);
  // The last step is to call setup. It accepts sequentially path
  // to mount the Swagger, application instance, and the document
  // that describes the Nest application.
  SwaggerModule.setup('api', app, document);

  await app.listen(3000);
}
bootstrap();
