import express, { Express, Request, Response } from "express";
import handler_routes from "./router/routes/handler.routes";
import cors from 'cors';

const app: Express = express();

app.use(cors());
app.use(express.json());

app.use(handler_routes);

app.get("/", ({}: Request, res: Response) => {
    res.status(200).json({
        message: "Welcome to the Library API"
    });
});

export default app;