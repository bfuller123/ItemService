module.exports = async (knexConnection) => {
    await knexConnection.raw(`
        CREATE TABLE IF NOT EXISTS account (
            id SERIAL PRIMARY KEY,
            username VARCHAR(40) UNIQUE NOT NULL,
            email VARCHAR(255) UNIQUE NOT NULL,
            firstName VARCHAR(50) NULL,
            lastName VARCHAR(50) NULL,
            active BOOLEAN DEFAULT TRUE
        );
    `);

    await knexConnection.raw(`
        CREATE TABLE IF NOT EXISTS friend (
            id SERIAL PRIMARY KEY,
            email VARCHAR(50) UNIQUE NOT NULL
        );
    `);

    await knexConnection.raw(`
        CREATE TABLE IF NOT EXISTS account_friend_map (
            id SERIAL PRIMARY KEY,
            accountId INT NOT NULL,
            friendId INT NOT NULL,
            canView BOOLEAN NOT NULL DEFAULT TRUE,
            viewUntil date NULL,
            FOREIGN KEY (accountId)
                REFERENCES account (id),
            FOREIGN KEY (friendId)
                REFERENCES friend (id)
        );
    `);

    await knexConnection.raw(`
        CREATE TABLE IF NOT EXISTS item (
            id SERIAL PRIMARY KEY,
            name VARCHAR(100) NOT NULL,
            cost INT NULL,
            link VARCHAR(255) NULL,
            accountId INT NOT NULL,
            active BOOLEAN NOT NULL DEFAULT TRUE,
            purchased BOOLEAN NOT NULL DEFAULT FALSE,
            FOREIGN KEY (accountId)
                REFERENCES account (id)
        );
    `);

    await knexConnection.raw(`
        CREATE TABLE IF NOT EXISTS category (
            id SERIAL PRIMARY KEY,
            description VARCHAR(50) NOT NULL
        );
    `);

    await knexConnection.raw(`
        CREATE TABLE IF NOT EXISTS item_category_map (
            id serial PRIMARY KEY,
            itemId INT NOT NULL,
            categoryId INT NOT NULL,
            FOREIGN KEY (itemId)
                REFERENCES item (id),
            FOREIGN KEY (categoryId)
                REFERENCES category (id)
        );
    `);

    await knexConnection.raw(`
        CREATE TABLE IF NOT EXISTS item_rating (
            id SERIAL PRIMARY KEY,
            itemId INT NOT NULL,
            weekOneRating SMALLINT NULL,
            weekTwoRating SMALLINT NULL,
            weekFourRating SMALLINT NULL,
            weekEightRating SMALLINT NULL,
            weekSixteenRating SMALLINT NULL,
            FOREIGN KEY (itemId)
                REFERENCES item (id)
        )
    `);
};
