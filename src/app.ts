import express, { Express, Request, Response } from "express";
import router from "./router/router";
import cors from 'cors';
import { init_db } from "./database/db";

const app: Express = express();

app.use(cors());
app.use(express.json());

app.get("/", async ({}: Request, res: Response) => {
    await init_db();
    
    res.status(200).json({
        message: "Welcome to the Library API"
    });
});

app.use(router)

export default app;