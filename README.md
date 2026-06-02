# Library API Service

API RESTful para gerenciamento de uma biblioteca comunitária — backend para aplicativo Flutter.

**Versão:** 1.1.0

## Tecnologias

- **Node.js** — Runtime JavaScript
- **TypeScript** — Tipagem estática (strict mode)
- **Express 5** — Framework web
- **PostgreSQL** — Banco de dados relacional
- **Neon** — PostgreSQL serverless
- **Swagger / OpenAPI 3.0** — Documentação interativa

## Estrutura do Projeto

```
src/
├── app.ts                        # Configuração do Express
├── server.ts                     # Ponto de entrada
├── config/
│   └── env.ts                    # Variáveis de ambiente
├── controllers/
│   └── library.controller.ts     # Handlers HTTP
├── database/
│   ├── db.ts                     # Pool de conexão PostgreSQL
│   └── exceptions/               # Mapeamento de erros PG
├── docs/
│   └── library.docs.ts           # Anotações OpenAPI das rotas
├── interface/                    # Tipos de request/response
├── middlewares/
│   └── error.middleware.ts       # Tratamento global de erros
├── repositories/
│   └── library.repository.ts     # Camada de dados (SQL)
├── router/
│   ├── router.ts                 # Agregador de rotas
│   └── routes/
│       └── library.routes.ts     # Definição das rotas
├── services/
│   └── library.service.ts        # Lógica de negócio
├── swagger/
│   ├── config.ts                 # Configuração Swagger
│   └── setup.ts                  # Setup Swagger UI
└── types/                        # Tipos compartilhados
```

## Endpoints

| Método   | Rota                  | Descrição                          |
|----------|-----------------------|------------------------------------|
| `GET`    | `/`                   | Mensagem de boas-vindas            |
| `GET`    | `/getall`             | Gêneros com livros agrupados       |
| `POST`   | `/create/:table`      | Criar registro (books ou genres)   |
| `PATCH`  | `/edit/:table/:id`    | Renomear registro pelo ID          |
| `DELETE` | `/delete/:table/:id`  | Excluir registro pelo ID           |
| `GET`    | `/docs`               | Documentação Swagger UI            |

### Formato de retorno (`/getall`)

```json
[
  {
    "id": "3209b136-234a-4894-a34b-...",
    "genre": "Romance",
    "books": [
      { "id": "9234fbb8-fd72-43fa-a49b-...", "name": "Dom Casmurro" }
    ]
  }
]
```

## Como Executar

1. Clone o repositório:
   ```bash
   git clone https://github.com/VitaoDeveloper/Library_API_Service.git
   cd Library_API_Service
   ```

2. Instale as dependências:
   ```bash
   yarn
   ```

3. Configure as variáveis de ambiente:
   ```bash
   cp .env.example .env
   ```
   Edite o `.env` com sua `DATABASE_URL` do Neon e a `PORT` desejada.

4. Execute em modo desenvolvimento:
   ```bash
   yarn dev
   ```

## Arquitetura

O projeto segue uma arquitetura em camadas:

```
Routes → Controller → Service → Repository → PostgreSQL
```

Cada camada tem responsabilidades bem definidas, facilitando testes e manutenção.

## Banco de Dados

O esquema espera as tabelas `books` e `genres` com colunas `id` (UUID), `name`, `genre_id` (em books) e `created_at`, além da view `getall_view` para agregação de livros por gênero.

## Histórico de Alterações Recentes

- **v1.1.0** — Documentação Swagger em `/docs` com anotações OpenAPI
- **v1.0.0** — Retorno do `/getall` reformado para array de objetos com `id`, `genre` e `books`
- **v0.9.0** — Substituição de `:name` por `:id` nas rotas; bodies e responses tipados
