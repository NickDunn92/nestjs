import { Module } from "@nestjs/common";
import { CatService } from "./cats.service";
import { CatsController } from "./cats.controller";

@Module({
    controllers: [CatsController],
    providers: [CatService],
    exports: [CatService]
})
export class CatsModule {}