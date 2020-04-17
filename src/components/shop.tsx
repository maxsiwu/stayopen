import React, { createRef } from 'react'
import Slider from './container/Slider';

export interface IShop {
  locationId: number,
  name: string,
  longitude: number,
  latitude: number,
  url: string,
  services: string[],
  categories: string[]
}

const menu = createRef<HTMLIonMenuElement>();
const Shop = (props: {shop: IShop | null}) => {
  if( props ) {
    menu.current?.open()
  }
  return (
    <Slider location={props.shop}></Slider>
  )
}

export default Shop
