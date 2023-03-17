import { Author } from "./author";

export interface Book {
    id: number;
    title: string;
    price: number;
    authors: Author[];
    categories: [];

}


export interface BookArray {
    results: Book[];
    count: number;
    statusCode: number;
}