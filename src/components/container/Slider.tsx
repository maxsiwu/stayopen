import React from 'react'
import { IonList, IonItem, IonLabel, IonListHeader, IonContent } from '@ionic/react'
import './Slider.css'

function Slider(props: any) {

    return (
        <div>
        { props.location?.text &&
            <IonContent className="slider">
                <IonListHeader>
                    <IonLabel>{props.location.text}</IonLabel>
                </IonListHeader>
                <IonList>
                    <IonItem>
                    <IonLabel>Website</IonLabel>
                    </IonItem>
                    <IonItem>
                    <IonLabel>Service</IonLabel>
                    </IonItem>
                    <IonItem>
                    <IonLabel>Category</IonLabel>
                    </IonItem>
                </IonList>
            </IonContent>
        }
        </div>
    )
}

export default Slider