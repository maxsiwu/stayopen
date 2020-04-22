import React, { useState } from 'react'
import './Sidebar.css'
import { IShop } from '../shop'
import { IonList, IonItem, IonLabel, IonListHeader, IonContent, IonButton, IonSearchbar, IonText } from '@ionic/react'
import { store } from '../..';
import { showFilteredLocations, showShop } from '../actions';

function Sidebar(props: {locations: IShop[]}) {
    const [searchText, setSearchText] = useState('');
    let list = <IonLabel color="medium">Search by typing</IonLabel>;
    if(props.locations && props.locations.length > 0 && searchText !== '') {
        list =  <IonList lines="none" key="search-result">
            { props.locations.map((location, index) => (
                <IonItem key={"search-result-item-" + index} onClick={() => openLocation(location)} color="light" lines="full" detail={true}>
                    <IonLabel color="medium" key={"item-info-" + index}>{location.name}</IonLabel>
                </IonItem>
            ))}
        </IonList>
    }
    if (searchText && searchText !== '' && props.locations.length == 0){
        list = <IonText>No result</IonText>
    }

    return (
        <IonContent id="sidebar" key="sidebar-block" >
            <IonSearchbar value={searchText} onIonChange={e => {
                setSearchText(e.detail.value!);
                sendToStore(e.detail.value!);
            }}></IonSearchbar>
            {/* <IonLabel color="primary" key="sidebar-heading"><h2><b>Search for Businesses</b></h2></IonLabel> */}
            {list}

        </IonContent>
    )
}

const sendToStore = (value: string) => {
    let fullList = store.getState().locations;
    store.dispatch(showFilteredLocations(value, fullList));
}

const openLocation = (location: IShop) => {
    store.dispatch(showShop(location));
}

export default Sidebar