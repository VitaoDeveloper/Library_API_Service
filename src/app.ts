import express, { Express, Request, Response } from "express";
import error_middleware from "./middlewares/error.middleware";
import router from "./router/router";
import cors from 'cors';
import { swagger_serve, swagger_setup } from "./docs/swagger";

const app: Express = express();

app.use(cors());
app.use(express.json());

app.get("/", async ({}: Request, res: Response) => {
    res.status(200).json({
        message: "Welcome to the Library API"
    });
});

app.use("/docs", swagger_serve, swagger_setup);

app.use(router)

app.use(({}: Request, res: Response) => {
    res.status(404).json({
        error: "Not found"
    });
})

app.use(error_middleware)

export default app;