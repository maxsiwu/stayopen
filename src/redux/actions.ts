import { ActionTypes } from './constants/enums';
import { ILocation } from '../components/Location/Location';
import { store } from './store';

export interface IBaseAction {
  type: ActionTypes;
}

export interface ILoadLocations extends IBaseAction {
  type: ActionTypes.SHOW_ALL;
  locations: ILocation[];
}
export interface IShowLocation extends IBaseAction {
  type: ActionTypes.SHOW_LOCATION;
  location: ILocation;
}

export interface IHideLocation extends IBaseAction {
  type: ActionTypes.HIDE_LOCATION;
  location: ILocation | null;
  isOpen: boolean;
}

export interface IShowFilteredLocations extends IBaseAction {
  type: ActionTypes.SHOW_FILTERED;
  locations: ILocation[];
  keyword: string;
}

export const showLocation = (location: ILocation): IShowLocation => ({
  type: ActionTypes.SHOW_LOCATION,
  location
});

export const showFilteredLocations = (keyword: string, locations: ILocation[]): IShowFilteredLocations => ({
  type: ActionTypes.SHOW_FILTERED,
  locations,
  keyword
});

export const hideLocation = (): IHideLocation => ({
  type: ActionTypes.HIDE_LOCATION,
  location: store.getState().location,
  isOpen: false
});

export const loadLocations = (locations: ILocation[]): ILoadLocations => ({
  type: ActionTypes.SHOW_ALL,
  locations
});
