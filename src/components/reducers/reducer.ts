import { combineReducers } from 'redux';
import { SHOW_SHOP, SHOW_ALL } from './../actions';

const locations = (state=[], action: any) => {
    switch(action.type){
        case SHOW_ALL:
            return {
                locations: action,
            }
        default:
            return state
    }
}

function shop(state={}, action:any) {
    switch(action.type){
        case SHOW_SHOP:
            return {
                text: action.text,
            }
        default:
            return state
    }
}

const shopApp = combineReducers({
    locations,
    shop
})
export default shopApp