export interface User {
    id: number;
    name: string;
    surname: string;
    birthdate: Date;
    adresse: string;
    email: string;
    phonenumber: number;
    role: string;
    avatar: string;
}

export interface UserResult {
    result: User;
    statusCode: number;
}

export interface UsersResult {
    results: User[];
    count: number;
    statusCode: number;
}