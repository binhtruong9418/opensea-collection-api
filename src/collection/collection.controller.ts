import { Body, Controller, Get, Post } from '@nestjs/common';
import { CollectionService } from './collection.service';
import { CreateCollectionDto } from './dto/create-collection.dto';
import { Collection } from './entity/collection.entity';

@Controller('collection')
export class CollectionController {
    constructor(
        private readonly collectionService: CollectionService
    ) {}

    @Post()
    async create (@Body() createCollectionDto: CreateCollectionDto): Promise<Collection> {
        return this.collectionService.createOne(createCollectionDto)
    }
}
