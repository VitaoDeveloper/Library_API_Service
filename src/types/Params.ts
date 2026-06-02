import { UUID } from "node:crypto";

export type Table = "books" | "genres"

export type MainParams = {
    table: Table,
    id: UUID
};