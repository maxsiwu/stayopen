import { IonContent, IonHeader, IonPage, IonTitle, IonToolbar } from '@ionic/react';
import React from 'react';
import GoogleMap from '../components/GoogleMap';
import './Home.css';
import ActiveShopContainer from '../components/container/ActiveShopContainer';

const Home: React.FC = () => {
  console.log(('home'))
  return (
    <IonPage>
      <IonHeader>
        <IonToolbar>
          <IonTitle>Stay Open</IonTitle>
        </IonToolbar>
      </IonHeader>
      <IonContent>
        <IonHeader collapse="condense">
          <IonToolbar>
            <IonTitle size="large">Blank</IonTitle>
          </IonToolbar>
        </IonHeader>
        <ActiveShopContainer />
        <GoogleMap/>
      </IonContent>
    </IonPage>
  );
};

export default Home;
