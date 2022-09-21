import {
  BadRequestException,
  Injectable,
  NotFoundException,
} from '@nestjs/common';
import { NftInformationDto } from './dto/nft-information.dto';
import { CollectionRepository } from './collection.repository';
import { Collection, CollectionDocument } from './entity/collection.entity';

@Injectable()
export class CollectionService {
  constructor(private readonly collectionRepository: CollectionRepository) {}

  async createOne(collection: NftInformationDto): Promise<CollectionDocument> {
    const itemExist = await this.collectionRepository.findOneByName(
      collection.name,
    );
    if (itemExist) {
      throw new BadRequestException('Item already exists');
    }
    return await this.collectionRepository.create(collection);
  }

  async updateOne(id: string, colletion: NftInformationDto) {
    const item = await this.getOne(id);
    return await this.collectionRepository.update(item._id, colletion);
  }

  async getOne(id: string): Promise<CollectionDocument> {
    const item = await this.collectionRepository.findOneById(id);
    if (!item) {
      throw new NotFoundException('Item does not exists');
    }

    return item;
  }

  async getAll() {
    return await this.collectionRepository.findAll();
  }

  async deleteOne(id: string) {
    const item = await this.getOne(id);
    if (!item) {
      throw new NotFoundException('Item does not exists');
    }
    return await this.collectionRepository.remove(item);
  }
}
