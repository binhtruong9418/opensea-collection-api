import { Category } from '../enum/category.enum';
import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { Document, Date, now } from 'mongoose';

export type CollectionDocument = Collection & Document;
@Schema({ timestamps: true })
export class Collection {
  @Prop({ required: true, default: 'https://image.com' })
  image: string;

  @Prop({ required: false, default: 'https://image.com' })
  imgFeatured: string;

  @Prop({ required: false, default: 'https://image.com' })
  imgBanner: string;

  @Prop({ unique: true, required: true, default: 'collection 1' })
  name: string;

  @Prop({
    required: false,
    default: 'https://opensea.io/collection/treasures-of-the-sea',
  })
  url: string;

  @Prop({ required: false, default: 'This is the description of collection 1' })
  description: string;
}

export const CollectionSchema = SchemaFactory.createForClass(Collection);
