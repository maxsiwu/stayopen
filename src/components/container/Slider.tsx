import React from 'react'
import { IonList, IonItem, IonLabel, IonListHeader, IonContent, IonText, IonIcon, IonButton } from '@ionic/react'
import './Slider.css'
import { callOutline, desktopOutline, closeOutline } from 'ionicons/icons'
import { store } from '../..'
import { showShop } from '../actions'
import { IShop } from '../shop'


function Slider(props: {location: IShop | null}) {
    let className = 'hidden'
    if(props.location?.name) {
        className = 'show';
    }
    return (
        <IonContent id="slider" className={className}>
            <IonListHeader>
                <IonLabel color="primary"><h2><b>{props.location?.name}</b></h2></IonLabel>
                <IonButton fill="clear" onClick={() => onClose()}>
                    <IonIcon color="medium" icon={closeOutline} size="large"></IonIcon>
                </IonButton>
            </IonListHeader>
            <IonList>
                <IonItem>
                    <IonButton fill="clear" onClick={() => openUrl(props.location?.url)}>
                        <IonIcon color="medium" icon={desktopOutline}></IonIcon>&nbsp;&nbsp;
                        <IonText color="medium">Visit Website</IonText>
                    </IonButton>
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

const onClose = () => {
    store.dispatch(showShop(null))
}
const openUrl = (url?: string) => {
    window.open(url, '_blank')
}

export default Slider