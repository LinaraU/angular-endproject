export interface Category {
   id: number;
    name: string;
    products: {
        id: number;
        name: string;
        price: number;
        description: string;
        itemImageUrl: any;
        amazonUrl: string;
        categoryId: number;
        count: number;
    }[];
}