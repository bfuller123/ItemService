import { Item } from '../models';
import getDatabaseConnection from '../database';

export interface _ItemRepository {
    createItem(name: string, cost: number, accountId: number, tableName: string): Promise<boolean>;
    findAll(accountId: number, tableName: string): Promise<Item[]>;
    findById(itemId: number, tableName: string): Promise<Item>;
}

export class ItemRepository implements _ItemRepository {
    private db;

    constructor(db: any) {
        this.db = db;
    }

    public async createItem(name: string, cost: number, accountId: number, tableName: string) {
        try {
            const result = await this.db(tableName).insert({
                'name': name,
                'cost': cost,
                'accountid': accountId
            });
            return true;
        } catch (err) {
            console.log(err);
            return false;
        }
    };

    public async findAll(accountId: number, tableName: string) {
        try {
            const result = await this.db(tableName).where({
                accountid: accountId
            });

            return result;
        } catch (err) {
            console.log(err);
            return [];
        }
    }

    public async findById(itemId: number, tableName: string) {
        try {
            const result = await this.db(tableName).where({
                id: itemId
            });

            // since we just need the first element, we can just shift
            return result.shift();
        } catch (err) {
            console.log(err);
            return;
        }
    }
}
