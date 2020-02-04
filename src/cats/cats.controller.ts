import { CatService } from "./cats.service"
import { Controller, Get, Query, Post, Body, Delete } from "@nestjs/common";
import { CatInterface, CatErrorInterface } from "./interfaces";

/* 
    @Controller - decorator which is required to define a basic controller
    'cats' - specifies an optional route path prefix
*/
@Controller('cats')
export class CatsController {
    constructor(
        private readonly catService: CatService
    ) { }

    //@Get HTTP request method decorator 
    @Get()

    // findOne - user defined method 
    findOne(@Query('name') name: string): CatInterface {
        return this.catService.findOne(name)
    }

    @Post()
    create(@Body() body: CatInterface): CatInterface[] {
        return this.catService.create(body)
    }


    @Get('/all')
    findAll(): CatInterface[] {
        return this.catService.findAll()
    }

    @Delete()
    delete(@Body('name') name: string): CatInterface | CatErrorInterface {
        return this.catService.delete(name)
    }
}