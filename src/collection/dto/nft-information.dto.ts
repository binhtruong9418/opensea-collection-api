import { ApiProperty } from '@nestjs/swagger'
import { IsString, IsNotEmpty } from 'class-validator';
export class NftInformationDto {
    @ApiProperty({
        description: 'this is the logo image size 350 x 350 of collection',
        format: 'string',
        default: 'https://image.com',
    })
    @IsString()
    @IsNotEmpty()
    image: string;

    @ApiProperty({
        description: 'this is the featured image size 600 x 400 of collection',
        format: 'string',
        default: 'https://image.com',
    })
    @IsString()
    imgFeatured: string;

    @ApiProperty({
        description: 'this is the banner image size 1400 x 350 of collection',
        format: 'string',
        default: 'https://image.com',
    })
    @IsString()
    imgBanner: string;

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
    url: string;

    @ApiProperty({
        description: 'this is the description of collection',
        format: 'string',
        default: "This is the description of collection 1",
    })
    @IsString()
    description: string;
}