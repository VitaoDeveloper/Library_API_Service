import { Router, Request, Response, NextFunction } from "express";

const handler_routes: Router = Router();

handler_routes.use((_req: Request, res: Response) => {
    res.status(404).json({
        error: "Not found"
    });
});

handler_routes.use((err: Error, {}: Request, res: Response, {}: NextFunction) => {
    console.error(err.stack);

    res.status(500).json({ 
        error: err.message 
    });
});

export default handler_routes;