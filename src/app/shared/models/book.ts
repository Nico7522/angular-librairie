import { Author } from "./author";

export interface Book {
    id: number;
    title: string;
    price: number;
    cover: string;
    authors: Author[];
    categories: [];

}

export interface finalDataBook {
    title: string;
    price: number;
    authors: Author[]
}


export interface BookArray {
    results: Book[];
    count: number;
    statusCode: number;
}

export interface AuthorsInfos {
    name: string
    surname: string;
    birthdate: Date;
}