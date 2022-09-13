import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { CollectionController } from './collection.controller';
import { CollectionService } from './collection.service';
import { Collection } from './entity/collection.entity';

@Module({
    controllers: [CollectionController],
    providers: [CollectionService],
    imports: [TypeOrmModule.forFeature([Collection])]
})
export class CollectionModule {}
