import React, { createRef } from 'react'
import Slider from './container/Slider';

export interface IShop {
  locationId: number,
  name: string,
  longitude: number,
  latitude: number,
  url: string,
  services: string[],
  category: string[]
}

const menu = createRef<HTMLIonMenuElement>();
const Shop = (props: any) => {
  if( props ) {
    menu.current?.open()
  }
  return (
    <Slider location={props.shop}></Slider>
  )
}

export default Shop
