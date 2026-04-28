import library_repository from "../repositories/library.repository";
import LibraryData from "../interfaces/LibraryData";

async function library_service() {
    const library_data = await library_repository();

    const map:any = {};
    
    for (const row of library_data) {
        if (!map[row.gender]) map[row.gender] = []
    }

    return map;
}

export default library_service;