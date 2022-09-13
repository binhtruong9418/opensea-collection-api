import { Body, Controller, Delete, Get, Param, ParseIntPipe, Patch, Post, Put } from '@nestjs/common';
import { ApiOperation, ApiTags } from '@nestjs/swagger';
import { getegid } from 'process';
import { CollectionService } from './collection.service';
import { CreateCollectionDto } from './dto/create-collection.dto';
import { EditCollectionDto } from './dto/edit-collection.dto';
import { Collection } from './entity/collection.entity';

@ApiTags('Collection')
@Controller('collection')
export class CollectionController {
    constructor(
        private readonly collectionService: CollectionService
    ) {}

    @ApiOperation({ summary: 'Create a collection' })
    @Post('create')
    async createItem (@Body() createCollectionDto: CreateCollectionDto): Promise<any> {
        return this.collectionService.createOne(createCollectionDto)
    }

    @ApiOperation({ summary: 'Update a collection by name' })
    @Put('/update/:name')
    async update(
        @Param('name') name: string,
        @Body() editCollectionDto: EditCollectionDto
    ) {
        return this.collectionService.updateOne(name, editCollectionDto)
    }

    @ApiOperation({ summary: 'Get a collection by name'})
    @Put('/readOne/:name')
    async getOne(
        @Param('name') name: string
    ) {
        return this.collectionService.getOne(name)
    }

    @ApiOperation({ summary: 'Get all collections' })
    @Get('/readAll')
    async getAll() {
        const data = await this.collectionService.getAll()
        return { data }
    }

    @ApiOperation({ summary: 'Delete a collection by name' })
    @Delete('/delete/:name')
    async deleteOne(@Param('name') name: string) {
        return this.collectionService.deleteOne(name)
    }
}
