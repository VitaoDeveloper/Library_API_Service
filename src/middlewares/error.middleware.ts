import handle_exception from "../database/exceptions/handle_exception";
import { Request, Response, NextFunction } from "express";
import { DatabaseError } from "pg";

function error_middleware(error: unknown, {}: Request, res: Response, next: NextFunction) {
    console.error(error);

    if (error instanceof DatabaseError) {
        const { message, status } = handle_exception(error);
        return res.status(status).json({ error: message });
    }
    
    res.status(500).json({error});
}

export default error_middleware;