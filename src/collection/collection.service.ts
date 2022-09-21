import { BadRequestException, Injectable, NotFoundException } from '@nestjs/common';
import { NftInformationDto } from './dto/nft-information.dto';
import { CollectionRepository } from './collection.repository';
import { Collection, CollectionDocument } from './entity/collection.entity';

@Injectable()
export class CollectionService {
  constructor(
    private readonly collectionRepository: CollectionRepository,
  ) {}

  async createOne(collection: NftInformationDto): Promise<CollectionDocument> {
    const itemExist = await this.collectionRepository.findOneByName(collection.name);
    if (itemExist) {
      throw new BadRequestException('Item already exists');
    }
    return await this.collectionRepository.create(collection);
  }

  async updateOne(
    name: string,
    colletion: NftInformationDto,
  ) {
    const item = await this.getOne(name);
    return await this.collectionRepository.update(item._id, colletion);
  }

  async getOne(name: string): Promise<CollectionDocument> {
    let toLowerCaseName = name.toLowerCase();
    const item = await this.collectionRepository
      .findOneByName(toLowerCaseName)
    if (!item) {
      throw new NotFoundException('Item does not exists');
    }

    return item;
  }

  async getAll() {
    return await this.collectionRepository.findAll();
  }

  async deleteOne(name: string) {
    const item = await this.getOne(name);
    if(!item) {
      throw new NotFoundException('Item does not exists');
    }
    return await this.collectionRepository.remove(item);
  }
}
