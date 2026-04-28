import { get_db } from "../database/db";

async function getall_repository() {
    const db = await get_db();

    const join_query: string = `
        SELECT g.name AS gender, b.name AS book
        FROM genders g
        LEFT JOIN books b ON b.gender = g.name
        ORDER BY g.name`;
    
    const result = await db.query(join_query, []);

    return result.rows;
}

export default getall_repository;