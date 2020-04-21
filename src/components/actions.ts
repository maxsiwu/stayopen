import { IShop } from './shop';
export const SHOW_SHOP= 'SHOW_SHOP'
export const SHOW_ALL= 'SHOW_ALL'
export const HIDE_SHOP= 'HIDE_SHOP'


export const showShop = (shop: IShop | null) => ({
    type: SHOW_SHOP,
    shop
})

export const hideShop = () => ({
    type: HIDE_SHOP,
    shop: null
})

export const loadLocations = (data:IShop[]) => ({
    type: SHOW_ALL,
    shops: {
        ...data
    }
})