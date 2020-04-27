import { ILocation } from '../location';
import { combineReducers } from 'redux';
import { SHOW_LOCATION, SHOW_ALL, HIDE_LOCATION, SHOW_FILTERED } from './../actions';

const locations = (state:ILocation[] =[], action: {type: string; locations:ILocation[];}) => {
    switch(action.type){
        case SHOW_ALL:
            return action.locations;
        default:
            return state;
    }
}

const filteredLocations = (state:ILocation[] =[], action: {type: string; locations:ILocation[]; keyword?: string}) => {
    switch(action.type){
        case SHOW_FILTERED:
            let keyword = action.keyword ? action.keyword.toLowerCase() : '';
            return action.locations.filter(s => s.name.toLowerCase().includes(keyword));
        default:
            return state;
    }
}

const location = (state:ILocation|null = null, action: {type: string; location:ILocation|null}) => {
    switch(action.type){
        case SHOW_LOCATION:
            return action.location;
        case HIDE_LOCATION:
            return action.location;
        default:
            return state;
    }
}

const isSliderOpen = (state: boolean = false, action: {type: string; isOpen: boolean}) => {
    switch(action.type){
        case SHOW_LOCATION:
            return true;
        case HIDE_LOCATION:
            return false;
        default:
            return state;
    }
}
const locationApp = combineReducers({
    locations,
    filteredLocations,
    location,
    isSliderOpen
})

export default locationApp

export type RootState = ReturnType<typeof locationApp>