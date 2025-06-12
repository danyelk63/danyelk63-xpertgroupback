import { isoDate } from "./common";

export interface User {
    id?: string;
    name: string;
    email: string;
    password: string;
    createdAt: isoDate;
    updatedAt: isoDate;
    isActive: boolean;
    role: 'user' | 'admin';
    lastLogin?: isoDate;
}
