import app from "./app";
import env from "./config/env";

async function initialize_api() {
    app.listen(env.port, () => {
        console.log(`\nServer running on ${location}`);
    });
}

initialize_api().catch((e) => {
    console.error(e.message);
    process.exit(1);
});