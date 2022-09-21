import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { SwaggerModule, DocumentBuilder } from '@nestjs/swagger';
import { ValidationPipe, INestApplication } from '@nestjs/common';
import { ResponseInterceptor } from './config/response.interceptor';
import { GlobalExceptionFilter } from './config/exception.filter';

const configSwagger = (app: INestApplication) => {
  const config = new DocumentBuilder()
    .setTitle('Collections API')
    .setDescription('The collections API description')
    .setVersion('1.0')
    .addTag('collections')
    .build();
  const document = SwaggerModule.createDocument(app, config);
  SwaggerModule.setup('api', app, document);
};

const configValidation = (app: INestApplication) => {
  app.useGlobalPipes(
    new ValidationPipe({
      transform: true,
      whitelist: true,
      forbidNonWhitelisted: true,
    }),
  );
};

async function bootstrap() {
  const app = await NestFactory.create(AppModule, { cors: true });

  app.useGlobalFilters(new GlobalExceptionFilter());
  app.useGlobalInterceptors(new ResponseInterceptor());
  configSwagger(app);
  configValidation(app);

  await app.listen(Number(process.env.PORT) || 80);
}
bootstrap();
