import {
  Body,
  Controller,
  Delete,
  Get,
  Param,
  Post,
  Put,
  Query,
} from '@nestjs/common';
import { ApiOperation, ApiTags } from '@nestjs/swagger';
import { CollectionService } from './collection.service';
import { NftInformationDto } from './dto/nft-information.dto';
import { CollectionDocument } from './entity/collection.entity';

@ApiTags('Collections')
@Controller('v2/collections')
export class CollectionController {
  constructor(private readonly collectionService: CollectionService) {}

  @ApiOperation({ summary: 'Create a collection' })
  @Post()
  async createItem(
    @Body() collection: NftInformationDto,
  ): Promise<CollectionDocument> {
    return this.collectionService.createOne(collection);
  }

  @ApiOperation({ summary: 'Get all collections' })
  @Get()
  async getAll(): Promise<CollectionDocument[]> {
    const data = await this.collectionService.getAll();
    return data;
  }

  @ApiOperation({ summary: 'Get a collection by id' })
  @Get('/:id')
  async getOne(@Param('id') id: string): Promise<CollectionDocument> {
    return this.collectionService.getOne(id);
  }

  @ApiOperation({ summary: 'Update a collection by id' })
  @Put('/:id')
  async update(
    @Query('id') id: string,
    @Body() collection: NftInformationDto,
  ): Promise<CollectionDocument> {
    return await this.collectionService.updateOne(id, collection);
  }

  @ApiOperation({ summary: 'Delete a collection by id' })
  @Delete('/:id')
  async deleteOne(@Param('id') id: string): Promise<CollectionDocument> {
    return this.collectionService.deleteOne(id);
  }

  @ApiOperation({ summary: 'Get collections by slug' })
  @Get('/slug/:slug')
  async getAllBySlug(@Param('slug') slug: string) {
    return this.collectionService.getBySlug(slug);
  }
}
