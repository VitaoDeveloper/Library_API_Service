import 'dotenv/config';

const env = {
    port: Number(process.env.PORT) || 8080,
    databaseUrl: process.env.DATABASE_URL || "URL not found"
};

export default env;