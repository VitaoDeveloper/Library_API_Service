import express, { Express, Request, Response } from "express";
import router from "./router/router";
import cors from 'cors';

const app: Express = express();

app.use(cors());
app.use(express.json());

app.get("/", async ({}: Request, res: Response) => {
    res.status(200).json({
        message: "Welcome to the Library API"
    });
});

app.use(router)

export default app;