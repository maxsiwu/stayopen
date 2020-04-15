export const SHOW_SHOP= 'SHOW_SHOP'
export const SHOW_ALL= 'SHOW_ALL'


export const showShop = (text: string) => ({
    type: SHOW_SHOP,
    text
})

export const loadLocations = (data:[]) => ({
    type: SHOW_ALL,
    shops: {
        ...data
    }
})