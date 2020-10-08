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
// access environment variables
const dotenv_1 = __importDefault(require("dotenv"));
dotenv_1.default.config();
const getDBConnection = () => __awaiter(void 0, void 0, void 0, function* () {
    const db = require('knex')({
        client: 'pg',
        connection: process.env.CONNECTION_STRING
    });
    const setupSchema = require(`./scripts/db_schema`);
    yield setupSchema(db);
    return db;
});
exports.default = getDBConnection;
//# sourceMappingURL=database.js.map