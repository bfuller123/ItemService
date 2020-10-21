import { ItemRepository } from '../../database/repositories/item';
import getDBConnection​​ from '../../database/database';

const _ACCOUNT = { id: 2, username: 'bobBelcher' }
const _ITEM = { name: 'RobotTest101', cost: 10000, accountId: 1};
const _SAVED_ITEM = { id: 3, name: 'Matsuki knife', cost: 67740, accountId: 2};
const _TABLENAME = 'item_test';

describe('Item tests', () => {
    let itemRepo;
    beforeAll(async () => {
        const db = await getDBConnection(true);
        itemRepo = new ItemRepository(db);
    });

    it('add item to item table', async () => {
        const result = await itemRepo.createItem(_ITEM.name, _ITEM.cost, _ITEM.accountId, _TABLENAME);
        expect.assertions(1);
        expect(result).toBe(true);
    });

    it('find account items by accountID', async () => {
        const results = await itemRepo.findAll(_ACCOUNT.id, _TABLENAME);
        expect.assertions(2);
        expect(results.length).toBeGreaterThan(0);
        expect(results).toEqual(
            expect.arrayContaining([
                expect.objectContaining({
                    cost: 67740
                }),
                expect.objectContaining({
                    cost: 1650
                })
            ])
        );
    });

    it('find item by itemId', async () => {
        const result = await itemRepo.findById(_SAVED_ITEM.id, _TABLENAME);
        expect(result.name).toBe(_SAVED_ITEM.name);
    })
});

