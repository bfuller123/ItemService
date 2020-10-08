export interface Account {
    id: number;
    username: string;
    email: string;
    firstName?: string;
    lastName?: string;
    active: boolean;
    friends?: Friend[];
}

export interface Friend {
    id: number;
    email: string;
    canView: boolean;
    viewUntil?: Date;
}