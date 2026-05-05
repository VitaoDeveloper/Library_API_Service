import CreateRequest from "../interface/CreateRequest";
import { create_repository, delete_repository, edit_repository, getall_repository } from "../repositories/library.repository";
import LibraryData from "../types/LibraryData";
import crypto from 'crypto'
import MainParams from "../types/MainParams";

export async function getall_service() {
    const library_data = await getall_repository();

    const result: LibraryData = {};
    
    for (const row of library_data) {
        if (!result[row.genre]) result[row.genre] = [];
        if (!result[row.genre][row.book]) result[row.genre].push(row.book);
    }

    return result;
}

export async function create_service(table: string, data: CreateRequest) {
    const { name, genre } = data;
    let body: CreateRequest = { name };

    switch (table) {
        case "books":
            body = {
                id: crypto.randomUUID(),
                name,
                genre
            }
            break;

        case "genres":
            body = {
                id: crypto.randomUUID(),
                name,
            }
            break;
    }

    const create = await create_repository(table, body);

    return create;
}

export async function edit_service(table: string, update: string, name: string) {
    const edit = await edit_repository(table, update, name);
    
    return edit;
}

export async function delete_service(table: string, name: string) {
    const _delete = await delete_repository(table, name);

    return _delete;
}