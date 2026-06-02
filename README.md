# Library API Service

API RESTful para gerenciamento de uma biblioteca comunitária, desenvolvida como backend para um aplicativo Flutter.

## Tecnologias

- **Node.js** — Runtime JavaScript
- **TypeScript** — Tipagem estática (strict mode)
- **Express 5** — Framework web
- **PostgreSQL** — Banco de dados relacional
- **Neon** — PostgreSQL serverless

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
└── types/                        # Tipos compartilhados
```

## Endpoints

| Método   | Rota                  | Descrição                          |
|----------|-----------------------|------------------------------------|
| `GET`    | `/`                   | Mensagem de boas-vindas            |
| `GET`    | `/getall`             | Livros agrupados por gênero        |
| `POST`   | `/create/:table`      | Criar registro (books ou genres)   |
| `PATCH`  | `/edit/:table/:id`    | Renomear registro pelo id          |
| `DELETE` | `/delete/:table/:id`  | Excluir registro pelo id           |

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

O esquema espera as tabelas `books` e `genres` com colunas `id`, `name`, `genre_id` (em books) e `created_at`, além da view `getall_view` para agregação de livros por gênero.