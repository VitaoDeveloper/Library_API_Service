import { UUID } from "node:crypto";
import { get_db } from "../database/db";
import CreateRequest from "../interface/CreateRequest";
import { Table } from "../types/Params";

export async function getall_repository() {
    const db = await get_db();

    const query: string = `SELECT * FROM getall_view`;
    
    const result = await db.query(query, []);

    return result.rows;
}

export async function create_repository(table: Table, data: CreateRequest) {
    const db = await get_db();

    if (table == "books") {
        const query: string = `INSERT INTO books (id, name, genre_id) VALUES ($1, $2, $3) RETURNING *`;
        const values: string[] = [
            data.id!,
            data.name,
            data.genre_id!
        ];

        const create = await db.query(query, values);

        return create.rows[0] ?? null;
    }

    if (table == "genres") {
        const query: string = `INSERT INTO genres (id, name) VALUES ($1, $2) RETURNING *`;
        const values: string[] = [
            data.id!,
            data.name
        ];

        const create = await db.query(query, values);

        return create.rows[0] ?? null;
    }

    return null;
}

export async function edit_repository(table: Table, update: string, id: UUID) {
    const db = await get_db();

    const query: string = `
        UPDATE ${table} SET name = $1 WHERE id = $2 RETURNING *`;

    const result = await db.query(query, [update, id]);

    return result.rows[0];
}

export async function delete_repository(table: Table, id: UUID) {
    const db = await get_db();

    const query: string = `DELETE FROM ${table} WHERE id = $1 RETURNING *`;

    const result = await db.query(query, [id]);

    return result.rows[0];
}
