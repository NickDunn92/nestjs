export interface CatInterface {
    name: string;
    age: number;
    weight?: number;
}

export interface CatErrorInterface {
    message: string; 
    statusCode: number;
}
