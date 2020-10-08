// const Router = require('koa-router');
// const router = new Router({
//     prefix: '/item'
// });
// const itemRepo = require('../database/repositories/item');

// router.post('/', async (ctx) => {
//     if (!ctx.request.body.name || !ctx.request.body.userId) {
//         ctx.response.status(400);
//         ctx.body = { message: "Invalid request body" };
//     } else {
//         const item = await itemRepo.createItem(ctx.request.body);
//         ctx.response.body = item;
//     }
// });

// router.get('/:userid', async (ctx) => {
//     const results = await itemRepo.findAll(ctx.params.userid);

//     ctx.response.body = results;
// });

// router.put('/:userId/:itemId', async (ctx) => {
//     const response = await itemRepo.updateItem(ctx.params.userId, ctx.params.itemId, ctx.request.body);
//     ctx.response.body = {message: response};
// });

// router.put('/delete/:userId/:itemId', async (ctx) => {
//     const response = await itemRepo.deleteItem(ctx.params.userId, ctx.params.itemId);
//     ctx.response.body = {message: response};
// })

// module.exports = router;