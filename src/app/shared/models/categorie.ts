import { Book } from "./book"

export interface Categorie {
    id: number
    name: string
    book: Book[]
}

export interface CategorieResultArray {
    results : Categorie[]
    count: number
    statusCode: number
}

export interface CategorieArray {
    results : Categorie[]
    statusCode: number
}