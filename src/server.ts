import app from "./app";
import env from "./config/env";
import { init_db } from "./database/db";

async function initialize_api() {
    const location: string = `http://localhost:${env.port}`;

    await init_db();

    app.listen(env.port, () => {
        console.log(`\nServer running on ${location}`);
    });
}

initialize_api().catch((e) => {
    console.error(e.message);
    process.exit(1);
});