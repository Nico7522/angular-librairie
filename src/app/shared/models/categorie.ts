export interface Categorie {
    id: number
    name: string
}

export interface CategorieResultArray {
    results : Categorie[]
    count: number
    statusCode: number
}