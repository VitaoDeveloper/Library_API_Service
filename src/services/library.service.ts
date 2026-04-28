import { delete_repository, edit_repository, getall_repository } from "../repositories/library.repository";
import LibraryData from "../types/LibraryData";

export async function getall_service() {
    const library_data = await getall_repository();

    const result: LibraryData = {};
    
    for (const row of library_data) {
        if (!result[row.gender]) result[row.gender] = [];
        if (!result[row.gender][row.book]) result[row.gender].push(row.book);
    }

    return result;
}

export async function edit_service(table: any, update: string, name: any) {
    const edit = await edit_repository(table, update, name);
    
    return edit;
}

export async function delete_service(table: any, name: any) {
    const _delete = await delete_repository(table, name);
    
    return _delete;
}