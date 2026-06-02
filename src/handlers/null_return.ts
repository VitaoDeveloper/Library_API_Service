import LibraryData from "../types/LibraryData";

export default function handle_null_return(obj: LibraryData): LibraryData {
    return Object.fromEntries(
        Object.entries(obj).map(([key, values]) => [
            key,
            values.filter((v) => v != null),
        ])
    );
}