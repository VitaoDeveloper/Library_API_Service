import library_service from "../services/library.service";
import { Request, Response } from "express";

async function library_controller({}: Request, res: Response) {
    const library_data = await library_service();
    
    return res.status(200).json(library_data);
}

export default library_controller;