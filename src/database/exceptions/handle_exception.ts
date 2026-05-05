import { PG_ERRORS, PG_CLASS_FALLBACKS } from "./pg_errors";
import PgErrorEntry from "../../types/PgErrorEntry";
import { DatabaseError } from "pg";

function handle_exception(error: DatabaseError): PgErrorEntry {
    const code  = error.code ?? "";
    const clase = code.slice(0, 2); // primeiros 2 chars = classe

    // 1º tenta código exato → 2º tenta fallback da classe → 3º genérico
    return PG_ERRORS[code] ?? PG_CLASS_FALLBACKS[clase] ?? { message: "Erro de banco de dados.", status: 500 };
}

export default handle_exception;