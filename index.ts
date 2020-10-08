import app from './app';
import dotenv from 'dotenv';
import getDBConnection from './database/database';
dotenv.config()

async function initializeDB() {
    try {
        const db = await getDBConnection();
        const users = await db.select().table('account');

        if (users) {
            console.log('connected to DB');
        }
        else {
            console.log('error connecting to DB');
        }
    } catch(error) {
        console.log('error connecting to DB');
        console.log(error.message);
        process.exit(1);
    }
}

async function init() {
    await initializeDB();
    console.log('kick starting the engine...');
    app.listen(process.env.PORT, () => {
        console.log(`listening on ${process.env.PORT}`);
    });

}

init();