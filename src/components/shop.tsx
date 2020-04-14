import React, { createRef } from 'react'
import { IonMenu, IonHeader, IonToolbar, IonTitle, IonContent } from '@ionic/react';
// import PropTypes from 'prop-types'

const menu = createRef<HTMLIonMenuElement>();
const Shop = (props: any) => {
  if( props ) {
    menu.current?.open()
  }
  return (
      <IonMenu side="start" menuId="first" ref={menu}>
        <IonHeader>
          <IonToolbar color="primary">
            <IonTitle>{props.shop.text}</IonTitle>
          </IonToolbar>
        </IonHeader>
        <IonContent>
            <p>Website:</p>

            <p>Service:</p>
            <p>Spec:</p>
            <p>Operation Time:</p>
        </IonContent>
      </IonMenu>
  )
}

// Shop.propTypes = {
//   shop: PropTypes.arrayOf(
//     PropTypes.shape({
//       id: PropTypes.number.isRequired,
//       active: PropTypes.bool.isRequired,
//       text: PropTypes.string.isRequired
//     }).isRequired
//   ).isRequired,
// }

export default Shop
