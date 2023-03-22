import { Author } from "./author";
import { Categorie } from "./categorie";

export interface Book {
    id: number;
    title: string;
    price: number;
    cover: string;
    authors: Author[];
    categories: [];

}

export interface BookResult {
    result: Book
    statusCode: number
}

export interface finalDataBook {
    title: string;
    price: number;
    authors: Author[]
    categories: Categorie[]
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