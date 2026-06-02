import CreateRequest from "../interface/CreateRequest";
import { create_service, delete_service, edit_service, getall_service } from "../services/library.service";
import { Request, Response } from "express";
import { Table, MainParams } from "../types/Params";
import MainResponse from "../interface/MainResponse";

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
export async function getall_controller({}: Request, res: Response) {
    const result = await getall_service();

    const library_data = Object.fromEntries(
        Object.entries(result).map(([key, values]) => [
            key,
            values.filter((v) => v != null),
        ])
    );
    
    return res.status(200).json(library_data);
}

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
export async function create_controller(req: Request<{ table: Table }, MainResponse, CreateRequest>, res: Response<MainResponse>) {
    const { name, genre_id } = req.body;
    const { table } = req.params;

    const data: CreateRequest = {
        name,
        genre_id
    };

    const create = await create_service(table, data);
    
    return res.status(200).json(create);
}

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
export async function edit_controller(req: Request<MainParams, MainResponse, { update: string }>, res: Response<MainResponse>) {
    const { table, id } = req.params;
    const { update } = req.body;

    const edit = await edit_service(table, update, id);
    
    return res.status(200).json(edit);
}

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
export async function delete_controller(req: Request<MainParams, MainResponse>, res: Response<MainResponse>) {
    const { table, id } = req.params;

    const _delete = await delete_service(table, id)
    
    return res.status(200).json(_delete);
}