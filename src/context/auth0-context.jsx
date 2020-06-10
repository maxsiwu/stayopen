/* eslint-disable @typescript-eslint/explicit-function-return-type */
import React, { Component, createContext } from 'react';
import createAuth0Client from '@auth0/auth0-spa-js';

// create the context
export const Auth0Context = createContext(null);

// create a provider
export class Auth0Provider extends Component {
  state = {
    message: 'testing message here!',
    isLoading: true,
    isAuthenticated: false,
    user: null
  };

  config = {
    domain: process.env.REACT_APP_AUTH0_DOMAIN,
    // eslint-disable-next-line @typescript-eslint/camelcase
    client_id: process.env.REACT_APP_AUTH0_CLIENT_ID,
    // eslint-disable-next-line @typescript-eslint/camelcase
    redirect_uri: window.location.origin
  };

  componentDidMount () {
    this.initializeAuth0();
  }

  // initialize the auth0 library
  initializeAuth0 = async () => {
    const auth0Client = await createAuth0Client(this.config);
    const isAuthenticated = auth0Client.isAuthenticated();
    const user = isAuthenticated ? await auth0Client.getUser() : null;
    this.setState({ auth0Client, isLoading: false, isAuthenticated, user });
  };

  render () {
    const { auth0Client, isLoading, isAuthenticated, user } = this.state;
    // eslint-disable-next-line react/prop-types
    const { children } = this.props;

    const configObject = {
      isLoading,
      isAuthenticated,
      user,
      loginWithRedirect: (...p) => auth0Client.loginWithRedirect(...p),
      getTokenSilently: (...p) => auth0Client.getTokenSilently(...p),
      getIdTokenClaims: (...p) => auth0Client.getIdTokenClaims(...p),
      logout: (...p) => auth0Client.logout(...p)
    };

    return (
      <Auth0Context.Provider value={configObject}>
        {children}
      </Auth0Context.Provider>
    );
  }
}
