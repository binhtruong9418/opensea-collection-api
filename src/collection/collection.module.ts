import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { CollectionController } from './collection.controller';
import { CollectionService } from './collection.service';
import { Collection, CollectionSchema } from './entity/collection.entity';
import { HttpModule } from '@nestjs/axios';
import { MongooseModule } from '@nestjs/mongoose/dist';
import { CollectionRepository } from './collection.repository';

@Module({
    controllers: [CollectionController],
    providers: [CollectionService, CollectionRepository],
    imports: [
        MongooseModule.forFeature([{ name: Collection.name, schema: CollectionSchema }]),
        HttpModule.register({
            timeout: 5000,
            maxRedirects: 5,
        })
    ]
})
export class CollectionModule {}
