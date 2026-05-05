import PgErrorEntry from "../../types/PgErrorEntry";

export const PG_ERRORS: Record<string, PgErrorEntry> = {

    // ── Classe 08 — Erros de Conexão ──────────────────────────────────────
    "08000": { message: "Erro de conexão com o banco.",                    status: 503 },
    "08003": { message: "Conexão não existe.",                             status: 503 },
    "08006": { message: "Falha na conexão com o banco.",                   status: 503 },
    "08001": { message: "Não foi possível estabelecer conexão.",           status: 503 },
    "08004": { message: "Conexão rejeitada pelo servidor.",                status: 503 },
    "08P01": { message: "Violação de protocolo.",                          status: 500 },

    // ── Classe 22 — Exceções de Dados ─────────────────────────────────────
    "22000": { message: "Erro nos dados fornecidos.",                      status: 400 },
    "22001": { message: "Valor muito longo para o campo.",                 status: 400 },
    "22003": { message: "Valor numérico fora do intervalo permitido.",     status: 400 },
    "22007": { message: "Formato de data/hora inválido.",                  status: 400 },
    "22008": { message: "Campo de data/hora fora do intervalo.",           status: 400 },
    "22012": { message: "Divisão por zero.",                               status: 400 },
    "22018": { message: "Valor inválido para conversão de tipo.",          status: 400 },
    "22019": { message: "Caractere de escape inválido.",                   status: 400 },
    "22023": { message: "Valor de parâmetro inválido.",                    status: 400 },
    "22P02": { message: "Representação de texto inválida para o tipo.",    status: 400 },

    // ── Classe 23 — Violações de Integridade ──────────────────────────────
    "23000": { message: "Violação de constraint de integridade.",          status: 409 },
    "23001": { message: "Violação de restrição RESTRICT.",                 status: 409 },
    "23502": { message: "Campo obrigatório não pode ser nulo.",            status: 400 },
    "23503": { message: "Registro referenciado por outros dados.",         status: 409 },
    "23505": { message: "Já existe um registro com esse valor.",           status: 409 },
    "23514": { message: "Valor viola constraint CHECK.",                   status: 400 },
    "23P01": { message: "Violação de constraint de exclusão.",             status: 409 },

    // ── Classe 25 — Estado de Transação Inválido ──────────────────────────
    "25006": { message: "Transação em modo somente leitura.",              status: 403 },
    "25P02": { message: "Transação em estado de falha.",                   status: 500 },

    // ── Classe 28 — Autenticação ──────────────────────────────────────────
    "28000": { message: "Especificação de autorização inválida.",          status: 401 },
    "28P01": { message: "Senha inválida.",                                 status: 401 },

    // ── Classe 40 — Rollback de Transação ─────────────────────────────────
    "40001": { message: "Falha de serialização, tente novamente.",        status: 503 },
    "40P01": { message: "Deadlock detectado.",                             status: 409 },

    // ── Classe 42 — Erros de Sintaxe / Permissão ──────────────────────────
    "42501": { message: "Permissão insuficiente.",                         status: 403 },
    "42601": { message: "Erro de sintaxe SQL.",                            status: 500 },
    "42703": { message: "Coluna não encontrada.",                          status: 500 },
    "42883": { message: "Função não encontrada.",                          status: 500 },
    "42P01": { message: "Tabela não encontrada.",                          status: 500 },
    "42P04": { message: "Banco de dados duplicado.",                       status: 409 },
    "42P07": { message: "Tabela já existe.",                               status: 409 },

    // ── Classe 53 — Recursos Insuficientes ────────────────────────────────
    "53000": { message: "Recursos insuficientes no banco.",                status: 503 },
    "53100": { message: "Disco cheio.",                                    status: 503 },
    "53200": { message: "Memória insuficiente.",                           status: 503 },
    "53300": { message: "Muitas conexões abertas.",                        status: 503 },
};

export const PG_CLASS_FALLBACKS: Record<string, PgErrorEntry> = {
    "08": { message: "Erro de conexão com o banco.",       status: 503 },
    "22": { message: "Dados inválidos.",                   status: 400 },
    "23": { message: "Violação de integridade.",           status: 409 },
    "28": { message: "Erro de autenticação.",              status: 401 },
    "40": { message: "Erro de transação.",                 status: 503 },
    "42": { message: "Erro de sintaxe ou permissão.",      status: 500 },
    "53": { message: "Recursos insuficientes.",            status: 503 },
};