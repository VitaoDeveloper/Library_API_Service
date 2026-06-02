import { OAS3Options } from "swagger-jsdoc";

const swagger_config: OAS3Options = {
    definition: {
        openapi: "3.0.0",
        info: {
            title: "Library API",
            version: "1.0.0",
            description:
                "API para gerenciamento de uma Biblioteca Comunitária"
        },
        servers: [
            {
                url: `http://localhost:${Number(process.env.PORT) || 8080}`,
                description: "Servidor de desenvolvimento"
            }
        ],
        components: {
            schemas: {
                MainResponse: {
                    type: "object",
                    properties: {
                        id: {
                            type: "string",
                            format: "uuid",
                            description: "ID do registro"
                        },
                        name: {
                            type: "string",
                            description: "Nome do livro ou gênero"
                        },
                        genre: {
                            type: "string",
                            description: "Nome do gênero (apenas para livros)"
                        },
                        created_at: {
                            type: "string",
                            format: "date-time",
                            description: "Data de criação"
                        }
                    }
                },
                ErrorResponse: {
                    type: "object",
                    properties: {
                        error: {
                            type: "string",
                            description: "Mensagem de erro"
                        }
                    }
                }
            }
        }
    },
    apis: ["./src/controllers/*.ts"]
};

export default swagger_config;
