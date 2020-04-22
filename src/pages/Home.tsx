import { IonContent, IonHeader, IonPage, IonTitle, IonToolbar } from '@ionic/react';
import React from 'react';
import GoogleMap from '../components/GoogleMap';
import './Home.css';
import ActiveShopContainer from '../components/container/ActiveShopContainer';
import SearchSliderContainer from '../components/container/SearchSliderContainer';

const Home: React.FC = () => {

  return (
    <IonPage>
      <IonHeader>
        <IonToolbar color="primary">
          <IonTitle>Stay Open</IonTitle>
        </IonToolbar>
      </IonHeader>
      <IonContent>
        <IonHeader collapse="condense">
          <IonToolbar>
            <IonTitle size="large">Blank</IonTitle>
          </IonToolbar>
        </IonHeader>
        <SearchSliderContainer />
        <ActiveShopContainer />
        <GoogleMap/>
      </IonContent>
    </IonPage>
  );
};

export default Home;
