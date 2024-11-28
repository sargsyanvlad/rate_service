import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { HttpConfig } from './config/http.config';
import { SwaggerModule, DocumentBuilder } from '@nestjs/swagger';
import { operationIdFactory } from './utilities/swaggerOperationIdFactory';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  const httpConfig = app.get(HttpConfig);

  const config = new DocumentBuilder()
    .setTitle('Rate API v1')
    .setVersion('1.0')
    .build();

  const document = SwaggerModule.createDocument(app, config, {
    operationIdFactory,
  });

  SwaggerModule.setup('/docs', app, document, {
    swaggerOptions: {
      persistAuthorization: true,
      filter: true,
      tryItOutEnabled: true,
    },
  });

  await app.listen(httpConfig.port);
  app.enableShutdownHooks(['SIGINT']);
}
bootstrap();
