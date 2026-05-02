import CreateRequest from "../interface/CreateRequest";
import { create_service, delete_service, edit_service, getall_service } from "../services/library.service";
import { Request, Response } from "express";

export async function getall_controller({}: Request, res: Response) {
    const library_data = await getall_service();
    
    return res.status(200).json(library_data);
}

export async function create_controller(req: Request, res: Response) {
    const { table } = req.params;
    const data: CreateRequest = {
        name: req.body.name,
        genre: req.body.genre
    };

    const create = await create_service(table, data);
    
    return res.status(200).json(create);
}

export async function edit_controller(req: Request, res: Response) {
    const { table, name } = req.params;
    const { update } = req.body;

    const edit = await edit_service(table, update, name);
    
    return res.status(200).json(edit);
}

export async function delete_controller(req: Request, res: Response) {
    const { table, name } = req.params;

    const _delete = await delete_service(table, name)
    
    return res.status(200).json(_delete);
}