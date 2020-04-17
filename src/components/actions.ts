import { IShop } from './shop';
export const SHOW_SHOP= 'SHOW_SHOP'
export const SHOW_ALL= 'SHOW_ALL'


export const showShop = (shop: IShop | null) => ({
    type: SHOW_SHOP,
    shop
})

export const loadLocations = (data:IShop[]) => ({
    type: SHOW_ALL,
    shops: {
        ...data
    }
})