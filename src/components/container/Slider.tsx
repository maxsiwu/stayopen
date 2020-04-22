import React from 'react'
import { IonList, IonItem, IonLabel, IonListHeader, IonContent, IonIcon, IonButton, IonBadge } from '@ionic/react'
import './Slider.css'
import { globeOutline, closeOutline } from 'ionicons/icons'
import { store } from '../..'
import { hideShop } from '../actions'
import { IShop } from '../shop'


function Slider(props: {location: IShop}) {
    let className = 'hidden'
    if(props.location?.name) {
        className = 'show';
    }
    return (
        <IonContent id="slider" className={className} key="slider-block">
            <IonListHeader key="list-header">
                <IonLabel color="primary" key="item-name"><h2><b>{props.location?.name}</b></h2></IonLabel>
                <IonButton color="light" onClick={() => onClose()} key="close-button">
                    <IonIcon color="medium" icon={closeOutline} size="large" key="close-button-icon"></IonIcon>
                </IonButton>
            </IonListHeader>
            <IonList lines="none" key="list">
                <IonItem key="list-link">
                    <IonButton color="light" onClick={() => openUrl(props.location?.url)} key="list-button">
                        <IonIcon color="medium" icon={globeOutline} key="link-icon"></IonIcon>&nbsp;&nbsp;
                        <IonLabel color="medium" key="link-text">Visit Website</IonLabel>
                    </IonButton>
                </IonItem>
                <IonItem key="list-service">
                    <IonLabel key="service-label"><h3><b>Services</b></h3></IonLabel>
                </IonItem>
                <IonItem key="list-service-content">
                    {
                        props.location?.services?.map(service => <IonBadge color="dark" key={'service' + service}>{service}</IonBadge>)
                    }
                </IonItem>
                <IonItem key="list-cat">
                    <IonLabel key="cat-label"><h3><b>Category</b></h3></IonLabel>
                </IonItem>
                <IonItem key="list-cat-content">
                    {
                        props.location?.categories?.map(category => <IonBadge color="light" key={'cat' + category}>{category}</IonBadge>)
                    }
                </IonItem>
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