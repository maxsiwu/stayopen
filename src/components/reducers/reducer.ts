import { combineReducers } from 'redux';
import { VisibilityFilters, SET_VISIBILITY_FILTER, SHOW_SHOP } from './../actions';

const { SHOW_ACTIVE } = VisibilityFilters

function visibilityFilter(state = SHOW_ACTIVE, action:any) {
    switch (action.type) {
        case SET_VISIBILITY_FILTER:
            return action.filter
        default:
            return state
    }
}

function shop(state={}, action:any) {
    switch(action.type){
        case SHOW_SHOP:
            return {
                id: action.id,
                text: action.text,
                active: true
            }
        default:
            return state
    }
}

const shopApp = combineReducers({
    visibilityFilter,
    shop
})
export default shopApp