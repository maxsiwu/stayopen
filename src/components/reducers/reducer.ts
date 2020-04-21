import { IShop } from './../shop';
import { combineReducers } from 'redux';
import { SHOW_SHOP, SHOW_ALL, HIDE_SHOP } from './../actions';

const locations = (state:IShop[] =[], action: {type: string; shops:IShop[]}) => {
    switch(action.type){
        case SHOW_ALL:
            return action.shops;
        default:
            return state;
    }
}

function shop(state:IShop|null = null, action: {type: string; shop?:IShop|null}) {
    switch(action.type){
        case SHOW_SHOP:
            return {
                ...action.shop,
            }
        case HIDE_SHOP:
            return null
        default:
            return state;
    }
}

const shopApp = combineReducers({
    locations,
    shop,
})

export default shopApp

export type RootState = ReturnType<typeof shopApp>