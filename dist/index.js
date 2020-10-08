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
const app_1 = __importDefault(require("./app"));
const dotenv_1 = __importDefault(require("dotenv"));
const database_1 = __importDefault(require("./database/database"));
dotenv_1.default.config();
function initializeDB() {
    return __awaiter(this, void 0, void 0, function* () {
        try {
            const db = yield database_1.default();
            const users = yield db.select().table('account');
            if (users) {
                console.log('connected to DB');
            }
            else {
                console.log('error connecting to DB');
            }
        }
        catch (error) {
            console.log('error connecting to DB');
            console.log(error.message);
            process.exit(1);
        }
    });
}
function init() {
    return __awaiter(this, void 0, void 0, function* () {
        yield initializeDB();
        console.log('kick starting the engine...');
        app_1.default.listen(process.env.PORT, () => {
            console.log(`listening on ${process.env.PORT}`);
        });
    });
}
init();
//# sourceMappingURL=index.js.map