import { Module } from '@nestjs/common';
import { CollectionController } from './collection.controller';
import { CollectionService } from './collection.service';
import { Collection, CollectionSchema } from './entity/collection.entity';
import { MongooseModule } from '@nestjs/mongoose/dist';
import { CollectionRepository } from './collection.repository';

@Module({
  controllers: [CollectionController],
  providers: [CollectionService, CollectionRepository],
  imports: [
    MongooseModule.forFeature([
      { name: Collection.name, schema: CollectionSchema },
    ]),
  ],
})
export class CollectionModule {}
