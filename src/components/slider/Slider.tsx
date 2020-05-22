import React from 'react';
import { IonList, IonItem, IonLabel, IonListHeader, IonContent, IonIcon, IonButton } from '@ionic/react';
import './Slider.css';
import { globeOutline, closeOutline } from 'ionicons/icons';
import { hideLocation } from '../../redux/actions';
import { ILocation } from '../Location/Location';
import { store } from '../../redux/store';

function Slider (props: {location: ILocation | null}): JSX.Element {
  let className = 'hidden';
  let link;
  const isOpen = store.getState().isSliderOpen;

  const onClose = (): void => {
    store.dispatch(hideLocation());
  };

  const openUrl = (url?: string): void => {
    window.open(url, '_blank');
  };

  if (isOpen) {
    className = 'show';
  } else {
    className = 'hidden';
  }
  if (props.location?.url) {
    link = <IonItem color="light" onClick={(): void => openUrl(props.location?.url)} key="list-button">
      <IonIcon color="medium" icon={globeOutline} key="link-icon"></IonIcon>&nbsp;&nbsp;
      <IonLabel color="medium" key="link-text">Visit Website</IonLabel>
    </IonItem>;
  } else {
    link = <IonLabel>No Website</IonLabel>;
  }

  return (
    <IonContent id="slider" className={className} key="slider-block">
      <IonListHeader key="list-header">
        <IonLabel color="primary" key="item-name"><h1>{props.location?.name}</h1></IonLabel>
        <IonButton color="light" onClick={(): void => onClose()} key="close-button">
          <IonIcon color="medium" icon={closeOutline} size="large" key="close-button-icon"></IonIcon>
        </IonButton>
      </IonListHeader>
      <IonList lines="none" key="list">
        <IonItem key="list-link">
          {link}
        </IonItem>
        <IonItem key="list-service">
          <IonLabel key="service-label"><h2><b>Services</b></h2></IonLabel>
        </IonItem>
        <ul key="list-service-content">
          {
            props.location?.services?.map(service => <li color="dark" key={'service' + service.name}>{service.name}</li>)
          }
        </ul>
        <IonItem key="list-cat">
          <IonLabel key="cat-label"><h2><b>Cuisine</b></h2></IonLabel>
        </IonItem>
        <ul key="list-cat-content">
          {
            props.location?.categories?.map(category => <li color="light" key={'cat' + category.name}>{category.name}</li>)
          }
        </ul>
      </IonList>
    </IonContent>
  );
}

export default Slider;
