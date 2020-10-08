const itemRepo = require('../../database/repositories/item');
// create item test

const item = { name: 'RobotTest101', cost: 10000, userId: 1};

test('add item', async () => {
    //create and add item
    expect.assertions(1);
    const resultingItem = await itemRepo.createItem(item);
    expect(resultingItem.name).toMatch(item.name);
});

test('find items', async () => {
    const results = await itemRepo.findAll(item.userId);
    
    const mappedToNames = results.map(i => i.name);

    expect.assertions(2);
    expect(results.length).toBeGreaterThan(0);
    expect(mappedToNames).toContain(item.name);

    // clean up db
    // await itemRepo.deleteItem(item.userId, item.id);
})


