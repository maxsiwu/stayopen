import React, { useContext } from 'react';
import { Route } from 'react-router-dom';
import { IonApp, IonRouterOutlet, IonHeader, IonToolbar, IonTitle, IonContent, IonTabs, IonTabBar, IonTabButton, IonLabel } from '@ionic/react';
import { IonReactRouter } from '@ionic/react-router';
import Home from './pages/Home/Home';

/* Core CSS required for Ionic components to work properly */
import '@ionic/react/css/core.css';

/* Basic CSS for apps built with Ionic */
import '@ionic/react/css/normalize.css';
import '@ionic/react/css/structure.css';
import '@ionic/react/css/typography.css';

/* Optional CSS utils that can be commented out */
import '@ionic/react/css/padding.css';
import '@ionic/react/css/float-elements.css';
import '@ionic/react/css/text-alignment.css';
import '@ionic/react/css/text-transformation.css';
import '@ionic/react/css/flex-utils.css';
import '@ionic/react/css/display.css';

/* Theme variables */
import './theme/variables.css';
import About from './pages/About/About';
import ErrorPage from './pages/ErrorPage/ErrorPage';
import { Auth0Context } from './context/auth0-context';

interface IAuth {
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  loginWithRedirect: any;
}
const App: React.FC = () => {
  const auth0: IAuth | null = useContext(Auth0Context);
  return (
    <IonApp>
      <IonReactRouter>
        <IonHeader>
          <IonToolbar color="primary">
            <IonTitle>Stay Open</IonTitle>
          </IonToolbar>
        </IonHeader>
        <IonContent>
          <IonTabs>
            <IonRouterOutlet>
              <Route path="/" component={Home} exact />
              <Route path="/about" component={About} exact />
              <Route path="*" component={ErrorPage} />
            </IonRouterOutlet>
            <IonTabBar slot="bottom">
              <IonTabButton tab="home" href="/">
                <IonLabel>Home</IonLabel>
              </IonTabButton>
              <IonTabButton tab="about" href="/about">
                <IonLabel>About</IonLabel>
              </IonTabButton>
              { auth0 !== null ? (
                <IonTabButton onClick= {auth0.loginWithRedirect} tab="login">
                  <IonLabel>Login</IonLabel>
                </IonTabButton>
              ) : (<p>No auth</p>)
              }

            </IonTabBar>
          </IonTabs>
        </IonContent>
      </IonReactRouter>
    </IonApp>
  );
};

export default App;
