import React from 'react'
import { IonList, IonItem, IonLabel, IonListHeader, IonContent, IonText, IonIcon, IonButton } from '@ionic/react'
import './Slider.css'
import { callOutline, desktopOutline, closeOutline } from 'ionicons/icons'
import { store } from '../..'
import { showShop } from '../actions'


function Slider(props: any) {
    let className = 'hidden'
    if(props.location?.text) {
        className = 'show';
    }
    return (
        <IonContent id="slider" className={className}>
            <IonListHeader>
                <IonLabel color="primary"><h2><b>{props.location.text}</b></h2></IonLabel>
                <IonButton fill="clear" onClick={() => onClose()}>
                    <IonIcon color="medium" icon={closeOutline} size="large"></IonIcon>
                </IonButton>
            </IonListHeader>
            <IonList>
                <IonItem>
                    <IonIcon color="medium" icon={desktopOutline}></IonIcon>&nbsp;&nbsp;
                    <IonIcon color="medium" icon={callOutline}></IonIcon>
                </IonItem>
                <IonItem>
                    <IonLabel><h3><b>Services</b></h3></IonLabel>
                    <IonText color="medium">TakeOut | Delivery</IonText>
                </IonItem>
                <IonItem>
                    <IonLabel><h3><b>Category</b></h3></IonLabel>
                    <IonText color="medium">Food</IonText>
                </IonItem>
            </IonList>
        </IonContent>
    )
}

function onClose() {
    store.dispatch(showShop(''))
}

export default Slider