import { BadRequestException, Injectable, NotFoundException } from '@nestjs/common';
import { HttpService } from '@nestjs/axios';
import { NftInformationDto } from './dto/nft-information.dto';
import { InjectModel } from '@nestjs/mongoose/dist';
import { Model } from 'mongoose';
import { Collection, CollectionDocument } from './entity/collection.entity';
import { CollectionRepository } from './collection.repository';

@Injectable()
export class CollectionService {
  constructor(
    private readonly collectionRepository: CollectionRepository,
    private readonly httpService: HttpService,
  ) {}

  async createOne(dto: NftInformationDto) {
    const itemExist = await this.collectionRepository.findOneByName(dto.name);
    if (itemExist) {
      throw new BadRequestException('Item already exists');
    }
    return await this.collectionRepository.create(dto);
  }

  async updateOne(
    name: string,
    colletion: NftInformationDto,
  ) {
    const item = await this.getOne(name);
    return await this.collectionRepository.update(item._id, colletion);
  }

  async getOne(name: string) {
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
    return await this.collectionRepository.remove(item);
  }
}
