import { ApiProperty } from '@nestjs/swagger'
import { IsString, IsNotEmpty } from 'class-validator';

export class CreateCollectionDto {
    @ApiProperty({
        description: "this is the logo image size 350 x 350 of item",
        format: "string",
    })
    @IsString()
    @IsNotEmpty()
    logoImageURL: string;

    @ApiProperty({
        description: "this is the featured image size 600 x 400 of item",
        format: "string",
    })
    @IsString()
    @IsNotEmpty()
    featuredImageURL: string;

    @ApiProperty({
        description: "this is the banner image size 1400 x 350 of item",
        format: "string",
    })
    @IsString()
    @IsNotEmpty()
    bannerImageURL: string;

    @ApiProperty({
        description: "this is the name of item",
        format: "string",
    })
    @IsString()
    @IsNotEmpty()
    name: string;

}