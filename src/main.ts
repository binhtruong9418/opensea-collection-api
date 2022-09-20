import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { SwaggerModule, DocumentBuilder } from '@nestjs/swagger';
import { ValidationPipe, INestApplication } from '@nestjs/common';

const configSwagger = (app: INestApplication) => {
  const config = new DocumentBuilder()
    .setTitle('Collections API')
    .setDescription('The collections API description')
    .setVersion('1.0')
    .addTag('collections')
    .build();
  const document = SwaggerModule.createDocument(app, config);
  SwaggerModule.setup('api', app, document);
}

const configValidation = (app: INestApplication) => {
  app.useGlobalPipes(
    new ValidationPipe({
      transform: true,
      whitelist: true,
      forbidNonWhitelisted: true,
    })
  );
}

async function bootstrap() {
  const app = await NestFactory.create(AppModule, { cors: true });

  configSwagger(app);
  configValidation(app);

  await app.listen(process.env.PORT || 8080);
}
bootstrap();
