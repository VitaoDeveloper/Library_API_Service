import CreateRequest from "../interface/CreateRequest";
import { create_repository, delete_repository, edit_repository, getall_repository } from "../repositories/library.repository";
import LibraryData from "../types/LibraryData";
import fk_violation_catch from "../utils/catches/fk_violation";

export async function getall_service() {
    try {
        const library_data = await getall_repository();

        const result: LibraryData = {};
        
        for (const row of library_data) {
            if (!result[row.genre]) result[row.genre] = [];
            if (!result[row.genre][row.book]) result[row.genre].push(row.book);
        }

        return result;
    } catch (error: any) {
        return error;
    }
}

export async function create_service(table: any, data: CreateRequest) {
    try {
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
    } catch (error: any) {
        return error;
    }

}

export async function edit_service(table: any, update: string, name: any) {
    try {
        const edit = await edit_repository(table, update, name);
        
        return edit;
    } catch (error: any) {
        if (error.code == "23503") {
            const message: string = await fk_violation_catch(error)
        }

        return error;
    }
}

export async function delete_service(table: any, name: any) {
    try {
        const _delete = await delete_repository(table, name);
    
        return _delete;
    } catch (error: any) {
        if (error.code === "23503") {
            const delete_parent = error.detail?.includes("is still referenced");

            if (delete_parent) {
                return {
                    status: "error",
                    code: error.code,
                    message: "Não é possível excluir um gênero que possui livros cadastrados."
                };
            }
        }

        return error;
    }
}