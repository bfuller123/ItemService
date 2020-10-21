module.exports = async (knexConnection) => {
    await knexConnection.raw(`
        CREATE TABLE IF NOT EXISTS account_test (
            id SERIAL PRIMARY KEY,
            username VARCHAR(40) UNIQUE NOT NULL,
            email VARCHAR(255) UNIQUE NOT NULL,
            firstName VARCHAR(50) NULL,
            lastName VARCHAR(50) NULL,
            active BOOLEAN DEFAULT TRUE
        );

        DO $$
        BEGIN
        IF (SELECT COUNT(1) FROM account_test) < 1 THEN
            INSERT INTO account_test (id, username, email, firstName, lastName, active)
            VALUES 
                (1, 'jackReacher', 'jackReacher@aol.com', 'Jack', 'Reacher', true),
                (2, 'bobBelcher', 'bobBelcher@hotmail.com', 'Bob', 'Belcher', true),
                (3, 'Louise', 'Louise@gmail.com', 'Louise', 'Belcher', true),
                (4, 'bartSimpson', 'bad_boy_not_bad@gmail.com', 'Bart', 'Simpson', false);
        END IF;
        END
        $$
    `);

    await knexConnection.raw(`
        CREATE TABLE IF NOT EXISTS friend_test (
            id SERIAL PRIMARY KEY,
            email VARCHAR(50) UNIQUE NOT NULL
        );

        DO $$
        BEGIN
        IF (SELECT COUNT(1) FROM friend_test) < 1 THEN
            INSERT INTO friend_test (id, email)
            VALUES
                (1, 'lindaBelcher@hotmail.com');
        END IF;
        END
        $$
    `);

    await knexConnection.raw(`
        CREATE TABLE IF NOT EXISTS account_friend_map_test (
            id SERIAL PRIMARY KEY,
            accountId INT NOT NULL,
            friendId INT NOT NULL,
            canView BOOLEAN NOT NULL DEFAULT TRUE,
            viewUntil date NULL,
            FOREIGN KEY (accountId)
                REFERENCES account_test (id),
            FOREIGN KEY (friendId)
                REFERENCES friend_test (id)
        );

        DO $$
        BEGIN
        IF (SELECT COUNT(1) FROM account_friend_map_test) < 1 THEN
        INSERT INTO account_friend_map_test (id, accountId, friendId, canView)
        VALUES
            (1, 2, 1, true),
            (2, 3, 1, false);
        END IF;
        END
        $$
    `);

    await knexConnection.raw(`
        CREATE TABLE IF NOT EXISTS item_test (
            id SERIAL PRIMARY KEY,
            name VARCHAR(100) NOT NULL,
            cost INT NULL,
            link VARCHAR(255) NULL,
            accountId INT NOT NULL,
            active BOOLEAN NOT NULL DEFAULT TRUE,
            purchased BOOLEAN NOT NULL DEFAULT FALSE,
            FOREIGN KEY (accountId)
                REFERENCES account_test (id)
        );

        DO $$
        BEGIN
        IF (SELECT COUNT(1) FROM item_test) < 1 THEN
        INSERT INTO item_test (id, name, cost, link, accountId, active, purchased)
        VALUES
            (1, 'rocket launcher', 5000000, null, 1, true, false),
            (2, 'sleeping bag', 3500, null, 1, false, true),
            (3, 'Matsuki knife', 67740, null, 2, true, false),
            (4, 'spatula', 1650, null, 2, true, false),
            (5, 'socks', 300, null, 2, true, false),
            (6, 'grenade', 4000, null, 3, true, false);
        END IF;
        END
        $$
    `);

    await knexConnection.raw(`
        CREATE TABLE IF NOT EXISTS category_test (
            id SERIAL PRIMARY KEY,
            description VARCHAR(50) NOT NULL
        );

        DO $$
        BEGIN
        IF (SELECT COUNT(1) FROM category_test) < 1 THEN
        INSERT INTO category_test (id, description)
        VALUES
            (1, 'weapon'),
            (2, 'culinary');
        END IF;
        END
        $$
    `);

    await knexConnection.raw(`
        CREATE TABLE IF NOT EXISTS item_category_map_test (
            id SERIAL PRIMARY KEY,
            itemId INT NOT NULL,
            categoryId INT NOT NULL,
            FOREIGN KEY (itemId)
                REFERENCES item_test (id),
            FOREIGN KEY (categoryId)    
                REFERENCES category_test (id)
        );

        DO $$
        BEGIN
        IF (SELECT COUNT(1) FROM item_category_map_test) < 1 THEN
        INSERT INTO item_category_map_test (itemId, categoryId)
        VALUES
            (1, 1),
            (6, 1),
            (4, 2),
            (3, 2);
        END IF;
        END;
        $$
    `);

    await knexConnection.raw(`
        CREATE TABLE IF NOT EXISTS item_rating_test (
            id SERIAL PRIMARY KEY,
            itemId INT NOT NULL,
            weekOneRating SMALLINT NULL,
            weekTwoRating SMALLINT NULL,
            weekFourRating SMALLINT NULL,
            weekEightRating SMALLINT NULL,
            weekSixteenRating SMALLINT NULL,
            FOREIGN KEY (itemId)
                REFERENCES item_test (id)
        );

        DO $$
        BEGIN
        IF (SELECT COUNT(1) FROM item_rating_test) < 1 THEN
        INSERT INTO item_rating_test (itemId, weekOneRating, weekTwoRating, weekFourRating)
        VALUES
            (2, 10, 9, 9);
        END IF;
        END
        $$
    `);
}