import React, { createRef } from 'react'
import Slider from './container/Slider';

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
