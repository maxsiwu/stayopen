import React, { useState } from 'react'
import './Sidebar.css'
import { IShop } from '../shop'
import { IonList, IonItem, IonLabel, IonListHeader, IonContent, IonButton, IonSearchbar, IonText } from '@ionic/react'
import { store } from '../..';
import { showFilteredLocations } from '../actions';

function Sidebar(props: {locations: IShop[]}) {
    const [searchText, setSearchText] = useState('');
    let list = <IonText>Search by typing</IonText>;
    if(props.locations && props.locations.length > 0) {
        list =  <IonList lines="none" key="search-result">
            { props.locations.map((location, index) => (
                <IonItem key={"search-result-item-" + index}>
                    <IonButton color="light" onClick={() => openLocation()} key={"item-button-" + index}>
                        <IonLabel color="medium" key={"item-info-" + index}>{location.name}</IonLabel>
                    </IonButton>
                </IonItem>
            ))}
        </IonList>
    }
    if (searchText && searchText !== '' && props.locations.length == 0){
        list = <IonText>No result</IonText>
    }



    return (
        <IonContent id="sidebar" key="sidebar-block">
            <IonListHeader key="sidebar-header">
                <IonSearchbar value={searchText} onIonChange={e => {
                    setSearchText(e.detail.value!);
                    sendToStore(e.detail.value!);
                }}></IonSearchbar>
                {/* <IonLabel color="primary" key="sidebar-heading"><h2><b>Search for Businesses</b></h2></IonLabel> */}
            </IonListHeader>
            {list}

        </IonContent>
    )
}

const sendToStore = (value: string) => {
    let fullList = store.getState().locations;
    store.dispatch(showFilteredLocations(value, fullList));
}

const openLocation = () => {
    console.log('hi')
}

export default Sidebar