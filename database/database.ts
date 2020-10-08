// access environment variables
import dotenv from 'dotenv';
dotenv.config();

const getDBConnection = async () => {
    const db = require('knex')({
        client: 'pg',
        connection: process.env.CONNECTION_STRING
    });
    const setupSchema = require(`./scripts/db_schema`);

    await setupSchema(db);

    return db;
};

export default getDBConnection;