import { IShop } from './shop';
export const SHOW_SHOP= 'SHOW_SHOP'
export const SHOW_ALL= 'SHOW_ALL'
export const HIDE_SHOP= 'HIDE_SHOP'
export const SHOW_FILTERED = 'SHOW_FILTERED'


export const showShop = (shop: IShop) => ({
    type: SHOW_SHOP,
    shop
})

export const showFilteredLocations = (keyword: string, shops: IShop[]) => ({
    type: SHOW_FILTERED,
    shops,
    keyword,
})
export const hideShop = () => ({
    type: HIDE_SHOP,
    shop: null
})

export const loadLocations = (shops:IShop[]) => ({
    type: SHOW_ALL,
    shops
})