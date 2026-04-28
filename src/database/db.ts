import { Pool } from "pg";
import env from "../config/env";

async function try_connection(): Promise<Pool> {
    try {
        const pool: Pool = new Pool({
            connectionString: env.databaseUrl,
            ssl: { rejectUnauthorized: false },
            connectionTimeoutMillis: 10000,
            idleTimeoutMillis: 30000,
            max: 5,
        });

        const client = await pool.connect();
        client.release();

        console.log("\nConnected to PostgreSQL DB on Neon");

        return pool;
    } catch (error) {
        throw new Error(
            "\nConnection failed. Check the URL and database status, then try again\n" +
            `Error: ${error as Error}\n`
        );
    }
}

let _conn: Pool | null;

export async function init_db(): Promise<void> {
    if (!_conn) _conn = await try_connection();
}

export async function get_db(): Promise<Pool> {
    if (!_conn) throw new Error("Pool has not been initialized. Call init_db to initialize.");

    return _conn;
}