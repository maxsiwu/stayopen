import React from 'react'
import { IonList, IonItem, IonLabel, IonListHeader, IonContent, IonIcon, IonButton, IonBadge } from '@ionic/react'
import './Slider.css'
import { globeOutline, closeOutline } from 'ionicons/icons'
import { store } from '../..'
import { hideShop } from '../actions'
import { IShop } from '../shop'


function Slider(props: {location: IShop}) {
    let className = 'hidden';
    let link;
    if(props.location?.name) {
        className = 'show';
    }
    if(props.location?.url) {
        link =  <IonItem color="light" onClick={() => openUrl(props.location?.url)} key="list-button">
                    <IonIcon color="medium" icon={globeOutline} key="link-icon"></IonIcon>&nbsp;&nbsp;
                    <IonLabel color="medium" key="link-text">Visit Website</IonLabel>
                </IonItem>
    } else {
        link = <IonLabel>No Website</IonLabel>
    }
    return (
        <IonContent id="slider" className={className} key="slider-block">
            <IonListHeader key="list-header">
                <IonLabel color="primary" key="item-name"><h1>{props.location?.name}</h1></IonLabel>
                <IonButton color="light" onClick={() => onClose()} key="close-button">
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
    )
}

const onClose = () => {
    store.dispatch(hideShop())
}
const openUrl = (url?: string) => {
    window.open(url, '_blank')
}

export default Slider