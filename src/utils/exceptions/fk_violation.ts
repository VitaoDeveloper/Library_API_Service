import { DatabaseError } from "pg";

async function fk_violation_catch(error: DatabaseError): Promise<string> {
    const isInsertOrphan = error.detail?.includes("is not present");
    const isDeleteParent = error.detail?.includes("is still referenced");

    if (isInsertOrphan) return "";
    if (isDeleteParent) return "Não é possível editar um gênero que possui livros referentes";

    return `Erro inesperado: ${error}"`;
}

export default fk_violation_catch;
