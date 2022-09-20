import { Category } from '../enum/category.enum';
import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { Document, Date, now } from 'mongoose';

export type CollectionDocument = Collection & Document;
@Schema()
export class Collection {
  @Prop({ required: true })
  image: string;

  @Prop({ required: false })
  imgFeatured: string;

  @Prop({ required: false })
  imgBanner: string;

  @Prop({ unique: true, required: true })
  name: string;

  @Prop({ required: false })
  url: string;

  @Prop({ required: false })
  description: string;

  @Prop({ type: Date, required: true, default: now })
  createdAt: Date;

  @Prop({ type: Date, required: true, default: now })
  updatedAt: Date;
}

export const CollectionSchema = SchemaFactory.createForClass(Collection);