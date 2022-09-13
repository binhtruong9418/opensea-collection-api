import { ApiProperty } from '@nestjs/swagger'
import { IsString, IsNotEmpty, IsNumber, IsEnum } from 'class-validator';
import { Category } from '../enum/category.enum';
export class CreateCollectionDto {
  @ApiProperty({
    description: 'this is the logo image size 350 x 350 of collection',
    format: 'string',
    default: 'https://image.com',
  })
  @IsString()
  @IsNotEmpty()
  logoImage: string;

  @ApiProperty({
    description: 'this is the featured image size 600 x 400 of collection',
    format: 'string',
    default: 'https://image.com',
  })
  @IsString()
  featuredImage: string;

  @ApiProperty({
    description: 'this is the banner image size 1400 x 350 of collection',
    format: 'string',
    default: 'https://image.com',
  })
  @IsString()
  bannerImage: string;

  @ApiProperty({
    description: 'this is the name of collection',
    format: 'string',
    uniqueItems: true,
    default: 'collection 1',
  })
  @IsString()
  @IsNotEmpty()
  name: string;

  @ApiProperty({
    description: 'this is the url of collection',
    format: 'string',
    default: 'https://opensea.io/collection/treasures-of-the-sea',
  })
  @IsString()
  collectionURL: string;

  @ApiProperty({
    description: 'this is the description of collection',
    format: 'string',
    default: "This is the description of collection 1",
  })
  @IsString()
  description: string;

  @ApiProperty({
    description: 'this is the blockchain of collection',
    format: 'string',
    default: 'wrapper Binance',
  })
  @IsString()
  blockchain: string;

  @ApiProperty({
    description: 'this is the category of collection',
    format: 'enum',
    default: 'Trending',
  })
  @IsEnum(Category)
  category: Category;

  @ApiProperty({
    description: 'this is the social url of collection',
    format: 'string',
    default: 'https://facebook.com/anyone',
  })
  @IsString()
  social: string;

  @ApiProperty({
    description: 'this is the payment tokens of collection',
    format: 'string',
    default: 'WBNB',
  })
  @IsString()
  paymentTokens: string;
}