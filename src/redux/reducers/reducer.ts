import { ActionTypes } from '../constants/enums';

import { ILocation } from '../../components/Location/Location';
import { combineReducers } from 'redux';

const locations = (state: ILocation[] = [], action: {type: string; locations: ILocation[] }): ILocation[] => {
  switch (action.type) {
    case ActionTypes.SHOW_ALL:
      return action.locations;
    default:
      return state;
  }
};

const filteredLocations = (state: ILocation[] = [], action: {type: string; locations: ILocation[]; keyword?: string}): ILocation[] => {
  let keyword = '';
  switch (action.type) {
    case ActionTypes.SHOW_FILTERED:
      keyword = action.keyword ? action.keyword.toLowerCase() : '';
      if (keyword === '') {
        return [];
      }
      return action.locations.filter(s => s.name.toLowerCase().includes(keyword));
    default:
      return state;
  }
};

const location = (state: ILocation|null = null, action: {type: string; location: ILocation|null}): ILocation | null => {
  switch (action.type) {
    case ActionTypes.SHOW_LOCATION:
      return action.location;
    case ActionTypes.HIDE_LOCATION:
      return action.location;
    default:
      return state;
  }
};

const isSliderOpen = (state = false, action: {type: string; isOpen: boolean}): boolean => {
  switch (action.type) {
    case ActionTypes.SHOW_LOCATION:
      return true;
    case ActionTypes.HIDE_LOCATION:
      return false;
    default:
      return state;
  }
};

const locationApp = combineReducers({
  locations,
  filteredLocations,
  location,
  isSliderOpen
});

export default locationApp;

export type RootState = ReturnType<typeof locationApp>;
