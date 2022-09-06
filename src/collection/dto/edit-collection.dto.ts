import { CreateCollectionDto } from "./create-collection.dto";
import { PartialType } from "@nestjs/swagger"

export class EditCollectionDto extends PartialType(CreateCollectionDto) {}