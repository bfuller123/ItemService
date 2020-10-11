// access environment variables
let setupSchema;
import dotenv from 'dotenv';
dotenv.config();

const getDBConnection = async (setupTestDB: boolean = false) => {
    const db = require('knex')({
        client: 'pg',
        connection: process.env.CONNECTION_STRING
    });

    if (setupTestDB) {
        setupSchema = require('./scripts/test_db_schema');
    }
    else {
        setupSchema = require(`./scripts/db_schema`);
    }

    await setupSchema(db);

    return db;
};

export default getDBConnection;