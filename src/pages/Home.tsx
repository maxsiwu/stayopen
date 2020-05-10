import { IonContent, IonHeader, IonPage, IonTitle, IonToolbar } from '@ionic/react';
import React from 'react';
import GoogleMap from '../components/map/GoogleMap';
import './Home.css';
import ActiveLocationContainer from '../components/container/ActiveLocationContainer';
import SearchSliderContainer from '../components/container/SearchSliderContainer';

const Home: React.FC = () => {
  return (
    <IonPage>
      <IonHeader>
        <IonToolbar color="primary">
          <IonTitle><b>Stay Open</b></IonTitle>
        </IonToolbar>
      </IonHeader>
      <IonContent>
        <IonHeader collapse="condense">
          <IonToolbar>
            <IonTitle size="large">Blank</IonTitle>
          </IonToolbar>
        </IonHeader>
        <SearchSliderContainer />
        <ActiveLocationContainer />
        <GoogleMap/>
      </IonContent>
    </IonPage>
  );
};

export default Home;
