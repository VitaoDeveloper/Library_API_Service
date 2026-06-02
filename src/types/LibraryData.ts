import { UUID } from "node:crypto";

type Book = {
    id: UUID;
    name: string;
}

type Genre = {
    id: UUID;
    genre: string;
    books: Book[];
}

type LibraryData = Record<string, Genre>;

export default LibraryData;