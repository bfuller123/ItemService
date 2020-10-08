// const Router = require('koa-router');
// const router = new Router({
//     prefix: '/user'
// });
// const userRepo = require('../database/repositories/user');
// const itemHelper = require('../helpers/itemHelper');

// // read all route
// router.get('/', async (ctx) => {
//     const result = await userRepo.findAll();
//     ctx.response.body = result;
// })

// // read one route
// router.get('/:id', async (ctx) => {
//     let user = await userRepo.findUser(ctx.params.id);
//     user.items = itemHelper.addDaysOnList(user.items);
//     ctx.response.body = user;
// });

// // create route
// router.post('/', async (ctx) => {
//     if(!ctx.request.body.username) {
//         ctx.response.status(400);
//     } else {
//         const user = await userRepo.createUser(ctx.request.body);
//         ctx.response.body = user;
//     }
// });

// // update route
// router.put('/:id', async (ctx) => {
//     const result = await userRepo.updateUser(ctx.params.id, ctx.request.body);
//     ctx.response.body = { message: result };
// })

// // delete route
// router.delete('/:id', async (ctx) => {
//     const result = await userRepo.deleteUser(ctx.params.id);
//     ctx.response.body = { message: result };
// })

// module.exports = router;