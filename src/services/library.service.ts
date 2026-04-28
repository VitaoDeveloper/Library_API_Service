import getall_repository from "../repositories/library.repository";
import LibraryData from "../types/LibraryData";

async function getall_service() {
    const library_data = await getall_repository();

    const result: LibraryData = {};
    
    for (const row of library_data) {
        if (!result[row.gender]) result[row.gender] = [];
        if (!result[row.gender][row.book]) result[row.gender].push(row.book);
    }

    return result;
}

export default getall_service;