import { Injectable } from '@nestjs/common';
import { Model } from 'mongoose';
import { InjectModel } from '@nestjs/mongoose';
import { Collection, CollectionDocument } from './entity/collection.entity';
import { NftInformationDto } from './dto/nft-information.dto';

Injectable();
export class CollectionRepository {
    constructor(
        @InjectModel(Collection.name)
        private readonly userAppModal: Model<CollectionDocument>,
    ) {}

    async create(collection: NftInformationDto): Promise<CollectionDocument> {
        return this.userAppModal.create(collection);
    }

    async update(id: any, collection: NftInformationDto): Promise<CollectionDocument> {
        return await this.userAppModal.findByIdAndUpdate(id, collection);
    }

    async findOneByName (name: string): Promise<CollectionDocument> {
    return this.userAppModal.findOne({ name });
    }
    
    async findAll(): Promise<CollectionDocument[]> {
        return this.userAppModal.find();
    }

    async remove(collection: CollectionDocument): Promise<CollectionDocument> {
        return this.userAppModal.findByIdAndRemove(collection._id);
    }
}
