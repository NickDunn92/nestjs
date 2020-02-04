import { Injectable, Body } from "@nestjs/common";
import { CatInterface } from ".";
import { CatErrorInterface } from "./interfaces";

@Injectable()
export class CatService {
    private arr: CatInterface[];
    constructor() {
        this.arr = [
            {
                name: "fluff", age: 44, weight: 7
            },
            {
                name: "jeff", age: 12
            }
        ]
    }

    findOne(name: string): CatInterface | undefined {
        return this.arr.find(cat => cat.name === name);
    }

    create(body: CatInterface): CatInterface[] {
        const { name: n, ...rest } = body;
        let name: string = n.toLowerCase();
        this.arr.push({
            name,
            ...rest
        })

        return this.arr;
    }

    findAll(): CatInterface[] {
        return this.arr;
    }

    delete(name: string): CatInterface | CatErrorInterface {
        const cat = this.findOne(name);

        if (!cat) {
            return {
                message: "cat cannot be deleted",
                statusCode: 400
            }
        }
        this.arr.splice(this.arr.findIndex(cat => cat.name === name))
        return cat;
    }
}