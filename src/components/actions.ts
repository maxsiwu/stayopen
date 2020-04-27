import { store } from './../index';
import { ILocation } from './location';
export const SHOW_LOCATION= 'SHOW_LOCATION'
export const SHOW_ALL= 'SHOW_ALL'
export const HIDE_LOCATION= 'HIDE_LOCATION'
export const SHOW_FILTERED = 'SHOW_FILTERED'


export const showLocation = (location: ILocation) => ({
    type: SHOW_LOCATION,
    location
})

export const showFilteredLocations = (keyword: string, locations: ILocation[]) => ({
    type: SHOW_FILTERED,
    locations,
    keyword,
})
export const hideLocation = () => ({
    type: HIDE_LOCATION,
    location: store.getState().location,
    isOpen: false
})

export const loadLocations = (locations:ILocation[]) => ({
    type: SHOW_ALL,
    locations
})