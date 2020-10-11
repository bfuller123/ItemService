const itemRepo = require('../../database/repositories/item');

const _ACCOUNT = { id: 10, username: 'MrRoboto', email: '', active: true }
const _ITEM = { name: 'RobotTest101', cost: 10000, accountId: 10};

describe('Item tests', () => {
    it('add item to item table', async () => {
        //create and add item
        expect.assertions(1);
        const resultingItem = await itemRepo.createItem(_item);
        expect(resultingItem.name).toMatch(_ITEM.name);
    });

    it('find account items by accountID', async () => {
        const results = await itemRepo.findAll(_ACCOUNT.id);
        expect.assertions(2);
        expect(results.length).toBeGreaterThan(0)
    });

    it('find item by itemId', async () => {
        const result = await itemRepo.findById(_ITEM.id);
    })
});

