import CreateRequest from "../interface/CreateRequest";
import { create_service, delete_service, edit_service, getall_service } from "../services/library.service";
import { Request, Response } from "express";
import { Table, MainParams } from "../types/Params";
import MainResponse from "../interface/MainResponse";
import handle_null_return from "../handlers/null_return";

export async function getall_controller({}: Request, res: Response) {
    const result = await getall_service();

    const library_data = handle_null_return(result);
    
    return res.status(200).json(library_data);
}

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

export async function edit_controller(req: Request<MainParams, MainResponse, { update: string }>, res: Response<MainResponse>) {
    const { table, id } = req.params;
    const { update } = req.body;

    const edit = await edit_service(table, update, id);
    
    return res.status(200).json(edit);
}

export async function delete_controller(req: Request<MainParams, MainResponse>, res: Response<MainResponse>) {
    const { table, id } = req.params;

    const _delete = await delete_service(table, id)
    
    return res.status(200).json(_delete);
}