import { Body, Controller, Delete, Get, Param, Post, Put } from '@nestjs/common';
import { ApiOperation, ApiTags } from '@nestjs/swagger';
import { CollationDocument } from 'typeorm';
import { CollectionService } from './collection.service';
import { NftInformationDto } from './dto/nft-information.dto';
import { Collection, CollectionDocument } from './entity/collection.entity';

@ApiTags('Collection')
@Controller('collection')
export class CollectionController {
  constructor(private readonly collectionService: CollectionService) {}

  @ApiOperation({ summary: 'Create a collection' })
  @Post('create')
  async createItem(@Body() collection: NftInformationDto): Promise<CollectionDocument> {
    return this.collectionService.createOne(collection);
  }

  @ApiOperation({ summary: 'Update a collection by name' })
  @Put('/update/:name')
  async update(
    @Param('name') name: string,
    @Body() collection: NftInformationDto,
  ) {
    return await this.collectionService.updateOne(name, collection);
  }

  @ApiOperation({ summary: 'Get a collection by name' })
  @Put('/getOne/:name')
  async getOne(@Param('name') name: string) {
    return this.collectionService.getOne(name);
  }

  @ApiOperation({ summary: 'Get all collections' })
  @Get('/getAll')
  async getAll() {
    const data = await this.collectionService.getAll();
    return { data };
  }

  @ApiOperation({ summary: 'Delete a collection by name' })
  @Delete('/delete/:name')
  async deleteOne(@Param('name') name: string) {
    return this.collectionService.deleteOne(name);
  }
}
