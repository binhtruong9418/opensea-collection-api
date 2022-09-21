import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { CollectionModule } from './collection/collection.module';


@Module({
  imports: [
    CollectionModule,
    MongooseModule.forRoot('mongodb://localhost:27017/opensea-api'),
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
