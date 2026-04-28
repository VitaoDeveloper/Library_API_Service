import getall_service from "../services/library.service";
import { Request, Response } from "express";

export async function getall_controller({}: Request, res: Response) {
    const library_data = await getall_service();
    
    return res.status(200).json(library_data);
}

export async function edit_controller(req: Request, res: Response) {
    const { table, name } = req.params;
    
    return res.status(200).json({
        table,
        name
    });
}

export async function delete_controller(req: Request, res: Response) {
    const { table, name } = req.params;
    
    return res.status(200).json({
        table,
        name
    });
}