import React, { createRef } from 'react'
import Slider from './slider/Slider';
import { IonText } from '@ionic/react';

export interface IShop {
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

const Shop = (props: {shop: IShop | null}) => {
  if(props.shop) {
    return <Slider location={props.shop}></Slider>
  }else {
    return <IonText></IonText>
  }
}

export default Shop
