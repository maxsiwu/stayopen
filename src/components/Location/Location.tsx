import React from 'react';
import Slider from '../Slider/Slider';
import { AnyAction } from 'redux';

export interface ILocation {
  id: number;
  name: string;
  longitude: number;
  latitude: number;
  url: string;
  services: IService[];
  categories: ICategory[];
}

export interface IService {
  id: number;
  name: string;
}

export interface ICategory {
  id: number;
  name: string;
}

const Location = (props: {location: ILocation | null}): JSX.Element => {
  return <Slider location={props.location}></Slider>;
};

export interface ILinkList {
  filteredList: ILocation[];
}
export interface ILinkSingle {
  location: ILocation | null;
  isSliderOpen: boolean;
}

export interface ILinkDispatchSingle {
  showLocation: (location: ILocation) => void;
  hideLocation: () => void;
}
export interface ILinkDispatchList {
  showFilteredLocations: (keyword: string, filteredList: ILocation[]) => AnyAction;
}
export default Location;
