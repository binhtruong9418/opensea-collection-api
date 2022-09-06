import { Injectable, NotFoundException } from '@nestjs/common';
import { EditCollectionDto } from './dto/edit-collection.dto';
import { Collection } from './entity/collection.entity';
import { Repository } from 'typeorm'
import { InjectRepository } from "@nestjs/typeorm"

@Injectable()
export class CollectionService {
    constructor(
        @InjectRepository(Collection)
        private readonly collectionRepository: Repository<Collection>
    ) {}

    async createOne(createCollectionDto: EditCollectionDto) {
        return await this.collectionRepository.save(createCollectionDto)
    }

    async updateOne(id: number, dto: EditCollectionDto, collectionEntity?: Collection) {
        const item = await this.getOne(id, collectionEntity)

        const editedCollection = Object.assign(item, dto)
        return await this.collectionRepository.save(editedCollection);
    }

    async getOne(id: number, collectionEntity?: Collection) {
        const item =  await this.collectionRepository
            .findOne({where: {"id": id}})
            .then(item => (!collectionEntity ? item : !!item && collectionEntity.id === item.id ? item : null))
        if(!item) {
            throw new NotFoundException("Item does not exists")
        }

        return item
    }


}
