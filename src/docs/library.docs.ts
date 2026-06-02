// src/docs/library.docs.ts

/**
 * @openapi
 * /getall:
 *   get:
 *     tags:
 *       - Biblioteca
 *     summary: Retorna todos os dados da biblioteca
 *     description: Agrupa livros por gênero e retorna um objeto chave-valor
 *     responses:
 *       200:
 *         description: Dados da biblioteca agrupados por gênero
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               additionalProperties:
 *                 type: array
 *                 items:
 *                   type: string
 *             example:
 *               Ficção: ["Dom Casmurro", "1984"]
 *               Romance: ["Orgulho e Preconceito"]
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