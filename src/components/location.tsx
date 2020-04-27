import React from 'react'
import Slider from './slider/Slider';

export interface ILocation {
  id: number,
  name: string,
  longitude: number,
  latitude: number,
  url: string,
  services: IService[],
  categories: ICategory[]
}

export interface IService {
  id: number,
  name: string
}

export interface ICategory {
  id: number,
  name: string
}

const Location = (props: {location: ILocation | null}) => {
  return <Slider location={props.location}></Slider>
}

export default Location
