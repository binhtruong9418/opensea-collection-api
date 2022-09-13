import { BadRequestException, Injectable, NotFoundException } from '@nestjs/common';
import { EditCollectionDto } from './dto/edit-collection.dto';
import { Collection } from './entity/collection.entity';
import { Repository } from 'typeorm'
import { InjectRepository } from '@nestjs/typeorm';
import { CreateCollectionDto } from './dto/create-collection.dto';

@Injectable()
export class CollectionService {
  constructor(
    @InjectRepository(Collection)
    private readonly collectionRepository: Repository<Collection>,
  ) {}

  async createOne(dto: CreateCollectionDto) {
    const itemExist = await this.collectionRepository.findOne({
      where: { name: dto.name },
    });
    if (itemExist) {
      throw new BadRequestException('Item already exists');
    }
    return await this.collectionRepository.save(dto);
  }

  async updateOne(
    name: string,
    dto: EditCollectionDto,
    collectionEntity?: Collection,
  ) {
    const item = await this.getOne(name, collectionEntity);

    const editedCollection = Object.assign(item, dto);
    return await this.collectionRepository.save(editedCollection);
  }

  async getOne(name: string, collectionEntity?: Collection) {
    let toLowerCaseName = name.toLowerCase();
    const item = await this.collectionRepository
      .findOne({ where: { name:toLowerCaseName } })
      .then((item) =>
        !collectionEntity
          ? item
          : !!item && collectionEntity.name === item.name
          ? item
          : null,
      );
    if (!item) {
      throw new NotFoundException('Item does not exists');
    }

    return item;
  }

  async getAll() {
    return await this.collectionRepository.find();
  }

  async deleteOne(name: string, collectionEntity?: Collection) {
    const item = await this.getOne(name, collectionEntity);
    return await this.collectionRepository.remove(item);
  }
}
