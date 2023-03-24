export interface User {
    id: number;
    name: string;
    surname: string;
    birthdate: Date;
    adresse: string;
    email: string;
    phonenumber: number;
    role: string;
}

export interface UserResult {
    results: User[];
    count: number;
    statusCode: number;
}