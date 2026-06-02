// src/docs/library.docs.ts

/**
 * @openapi
 * /getall:
 *   get:
 *     tags:
 *       - Biblioteca
 *     summary: Retorna todos os dados da biblioteca
 *     description: Retorna um array de gêneros com seus livros agrupados
 *     responses:
 *       200:
 *         description: Lista de gêneros com livros
 *         content:
 *           application/json:
 *             schema:
 *               type: array
 *               items:
 *                 type: object
 *                 properties:
 *                   id:
 *                     type: string
 *                     format: uuid
 *                   genre:
 *                     type: string
 *                   books:
 *                     type: array
 *                     items:
 *                       type: object
 *                       properties:
 *                         id:
 *                           type: string
 *                           format: uuid
 *                         name:
 *                           type: string
 *             example:
 *               - id: "3209b136-234a-4894-a34b-..."
 *                 genre: "Ficção"
 *                 books:
 *                   - id: "9234fbb8-fd72-43fa-a49b-..."
 *                     name: "Livro dos Mortos"
 *               - id: "71f217e3-dee8-42b6-be6c-..."
 *                 genre: "Terror"
 *                 books: []
 */

/**
 * @openapi
 * /create/{table}:
 *   post:
 *     tags:
 *       - Biblioteca
 *     summary: Cria um novo registro na tabela especificada
 *     parameters:
 *       - in: path
 *         name: table
 *         required: true
 *         schema:
 *           type: string
 *           enum: [books, genres]
 *         description: Nome da tabela (books ou genres)
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             properties:
 *               name:
 *                 type: string
 *                 description: Nome do livro ou gênero
 *               genre_id:
 *                 type: string
 *                 format: uuid
 *                 description: ID do gênero (obrigatório para books)
 *             required:
 *               - name
 *     responses:
 *       200:
 *         description: Registro criado com sucesso
 *         content:
 *           application/json:
 *             schema:
 *               $ref: '#/components/schemas/MainResponse'
 *       409:
 *         description: Registro duplicado
 */

/**
 * @openapi
 * /edit/{table}/{id}:
 *   patch:
 *     tags:
 *       - Biblioteca
 *     summary: Atualiza um registro existente
 *     parameters:
 *       - in: path
 *         name: table
 *         required: true
 *         schema:
 *           type: string
 *           enum: [books, genres]
 *         description: Nome da tabela (books ou genres)
 *       - in: path
 *         name: id
 *         required: true
 *         schema:
 *           type: string
 *           format: uuid
 *         description: ID do registro
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             properties:
 *               update:
 *                 type: string
 *                 description: Novo nome para o registro
 *             required:
 *               - update
 *     responses:
 *       200:
 *         description: Registro atualizado com sucesso
 *         content:
 *           application/json:
 *             schema:
 *               $ref: '#/components/schemas/MainResponse'
 */

/**
 * @openapi
 * /delete/{table}/{id}:
 *   delete:
 *     tags:
 *       - Biblioteca
 *     summary: Remove um registro existente
 *     parameters:
 *       - in: path
 *         name: table
 *         required: true
 *         schema:
 *           type: string
 *           enum: [books, genres]
 *         description: Nome da tabela (books ou genres)
 *       - in: path
 *         name: id
 *         required: true
 *         schema:
 *           type: string
 *           format: uuid
 *         description: ID do registro
 *     responses:
 *       200:
 *         description: Registro removido com sucesso
 *         content:
 *           application/json:
 *             schema:
 *               $ref: '#/components/schemas/MainResponse'
 */