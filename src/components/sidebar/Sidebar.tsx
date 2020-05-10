import React, { useState } from 'react';
import './Sidebar.css';
import { ILocation } from '../location';
import { IonList, IonItem, IonLabel, IonContent, IonSearchbar } from '@ionic/react';
import { store } from '../..';
import { showFilteredLocations, showLocation } from '../actions';

const sendToStore = (value: string): void => {
  const fullList = store.getState().locations;
  store.dispatch(showFilteredLocations(value, fullList));
};

const openLocation = (location: ILocation): void => {
  store.dispatch(showLocation(location));
};

function Sidebar (props: {locations: ILocation[]}): JSX.Element {
  const [searchText, setSearchText] = useState('');
  let list = <IonLabel color="medium">Help businesses to stay open</IonLabel>;
  let className;
  if (props.locations && props.locations.length > 0 && searchText !== '') {
    className = 'auto';
    list = <IonList lines="none" key="search-result">
      { props.locations.map((location, index) => (
        <IonItem key={'search-result-item-' + index} onClick={(): void => openLocation(location)} color="light" lines="full" detail={true}>
          <IonLabel color="medium" key={'item-info-' + index}>{location.name}</IonLabel>
        </IonItem>
      ))}
    </IonList>;
  }
  if (searchText && searchText !== '' && props.locations.length === 0) {
    list = <IonLabel color="medium">No result</IonLabel>;
  }

  return (
    <IonContent id="sidebar" key="sidebar-block" className={className}>
      <IonSearchbar value={searchText} color="light" onIonChange={e => {
        setSearchText(e.detail.value!);
        sendToStore(e.detail.value!);
      }}></IonSearchbar>
      {list}

    </IonContent>
  );
}

export default Sidebar;
