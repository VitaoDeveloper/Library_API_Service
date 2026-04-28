import { get_db } from "../database/db";

export async function getall_repository() {
    const db = await get_db();

    const join_query: string = `
        SELECT g.name AS gender, b.name AS book
        FROM genders g
        LEFT JOIN books b ON b.gender = g.name
        ORDER BY g.name`;
    
    const result = await db.query(join_query, []);

    return result.rows;
}

export async function edit_repository(table: any, update: string, name: any) {
    const db = await get_db();

    const query: string = `
        UPDATE ${table} SET name = $1 WHERE name = $2`;

    const result = await db.query(query, [update, name]);

    return result.rows[0];
}

export async function delete_repository(table: any, name: any) {
    const db = await get_db();

    const query: string = `DELETE FROM ${table} WHERE name = $1`;

    const result = await db.query(query, [name]);

    return result.rows[0];
}