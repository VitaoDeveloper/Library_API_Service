import library_repository from "../repositories/library.repository";
import LibraryData from "../types/LibraryData";

async function library_service() {
    const library_data = await library_repository();

    const result: LibraryData = {};
    
    for (const row of library_data) {
        if (!result[row.gender]) result[row.gender] = [];
        if (!result[row.gender][row.book]) result[row.gender].push(row.book);
    }

    return result;
}

export default library_service;