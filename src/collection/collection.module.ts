import { Module } from '@nestjs/common';
import { CollectionController } from './collection.controller';
import { CollectionService } from './collection.service';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Collection } from './entity/collection.entity';

@Module({
    controllers: [CollectionController],
    providers: [CollectionService],
    imports: [TypeOrmModule.forFeature([Collection])]
})
export class CollectionModule {}
