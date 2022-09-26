
/*
 * -------------------------------------------------------
 * THIS FILE WAS AUTOMATICALLY GENERATED (DO NOT MODIFY)
 * -------------------------------------------------------
 */

/* tslint:disable */
/* eslint-disable */

export interface AddBookArgs {
    title: string;
    price: number;
}

export interface UpdateBookArgs {
    id: number;
    title: string;
    price: number;
}

export interface AddUserArgs {
    firstName: string;
    lastName: string;
    email: string;
    password: string;
    role: string;
}

export interface Book {
    id: number;
    title: string;
    price: number;
}

export interface IQuery {
    index(): string | Promise<string>;
    secureDataWithNormalUser(): string | Promise<string>;
    secureDataWithadmin(): string | Promise<string>;
    login(email: string, password: string): string | Promise<string>;
    books(): Book[] | Promise<Book[]>;
    bookById(bookId: number): Book | Promise<Book>;
}

export interface IMutation {
    deleteBook(bookId: number): string | Promise<string>;
    addBook(addBookArgs: AddBookArgs): string | Promise<string>;
    updateBook(updateBookArgs: UpdateBookArgs): string | Promise<string>;
    addUser(addUserArgs: AddUserArgs): string | Promise<string>;
}

type Nullable<T> = T | null;
