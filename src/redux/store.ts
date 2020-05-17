import { createStore } from 'redux';
import locationApp from './reducers/reducer';

export const store = createStore(
  locationApp,
  window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
);
