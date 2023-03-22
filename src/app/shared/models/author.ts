export interface Author {
    id: number
    name: string;
    surname: string;
    birthdate: Date;
}

export interface AuthorArray {
    results: Author[];
    count: number;
    statusCode: number;
}