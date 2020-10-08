import koa from 'koa';
import router from 'koa-router';
import bodyParser from 'koa-body';
// const itemController = require('./controllers/item');
// const userController = require('./controllers/user');

const app = new koa();

// app.use(bodyParser({
//     urlencoded: true
// }));

// app.use(itemController.routes());
// app.use(userController.routes());

// app.use(async (ctx, next) => {
//     await next();
//     const rt = ctx.response.get('X-Response-Time');
//     console.log(`${ctx.method} ${ctx.url} - ${rt}`);
//   });
  
//   // x-response-time
  
// app.use(async (ctx, next) => {
//     const start = Date.now();
//     await next();
//     const ms = Date.now() - start;
//     ctx.set('X-Response-Time', `${ms}ms`);
// });

// app.use(async (ctx, next) => {
//     name = ctx.request.url;
//     await next();
//     ctx.set('secret-message', `Hello, Farty Mc${name}`);
// })

app.use(async ctx => {
    ctx.body = 'Hello, World';
});

export default app;