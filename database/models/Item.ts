export interface Item {
    id: number;
    name: string;
    cost?: number;
    link?: string;
    accountId: number;
    active: boolean;
    purchased: boolean;
    daysOnList: number;
    categories?: Category[];
    ratings?: Rating;
}

export interface Category {
    id: number;
    description: string;
}

export interface Rating {
    id: number;
    itemId: number;
    weekOneRating?: number;
    weekTwoRating?: number;
    weekFourRating?: number;
    weekEightRating?: number;
    weekSixteenRating?: number;
}
