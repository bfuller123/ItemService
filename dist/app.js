"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const koa_1 = __importDefault(require("koa"));
// const itemController = require('./controllers/item');
// const userController = require('./controllers/user');
const app = new koa_1.default();
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
app.use((ctx) => __awaiter(void 0, void 0, void 0, function* () {
    ctx.body = 'Hello, World';
}));
exports.default = app;
//# sourceMappingURL=app.js.map