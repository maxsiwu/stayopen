import React, { createRef } from 'react'
import Slider from './container/Slider';
import { IonText } from '@ionic/react';

export interface IShop {
  locationId: number,
  name: string,
  longitude: number,
  latitude: number,
  url: string,
  services: string[],
  categories: string[]
}

const Shop = (props: {shop: IShop | null}) => {
  if(props.shop) {
    return <Slider location={props.shop}></Slider>
  }else {
    return <IonText>Null</IonText>
  }
}

export default Shop
