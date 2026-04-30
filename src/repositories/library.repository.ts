import { get_db } from "../database/db";
import CreateRequest from "../interface/CreateRequest";

export async function getall_repository() {
    const db = await get_db();

    const query: string = `SELECT gender, book FROM getall_view`;
    
    const result = await db.query(query, []);

    return result.rows;
}

export async function create_repository(table: any, data: CreateRequest) {
    const db = await get_db();

    if (table == "books") {
        const query: string = `INSERT INTO books (id, name, gender) VALUES ($1, $2, $3) RETURNING *`;
        const values: string[] = [
            data.id!,
            data.name,
            data.gender!
        ];

        const create = await db.query(query, values);

        return create.rows[0] ?? null;
    }

    if (table == "genders") {
        const query: string = `INSERT INTO genders (id, name) VALUES ($1, $2) RETURNING *`;
        const values: string[] = [
            data.id!,
            data.name
        ];

        const create = await db.query(query, values);

        return create.rows[0] ?? null;
    }

    return null;
}

export async function edit_repository(table: any, update: string, name: any) {
    const db = await get_db();

    const query: string = `
        UPDATE ${table} SET name = $1 WHERE name = $2 RETURNING *`;

    const result = await db.query(query, [update, name]);

    return result.rows[0];
}

export async function delete_repository(table: any, name: any) {
    const db = await get_db();

    const query: string = `DELETE FROM ${table} WHERE name = $1 RETURNING *`;

    const result = await db.query(query, [name]);

    return result.rows[0];
}
