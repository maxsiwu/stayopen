import React from 'react';
import './Sidebar.css';
import { ILocation } from '../Location/Location';
import { IonList, IonItem, IonLabel, IonContent, IonSearchbar } from '@ionic/react';
import { showFilteredLocations, showLocation } from '../../redux/actions';
import { store } from '../../redux/store';

interface ISidebarProps {
  locations: ILocation[];
}
interface ISidebarState {
  searchText: string;
}
class Sidebar extends React.Component<ISidebarProps, ISidebarState> {
  className = '';
  locationList: ILocation[] = [];

  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  constructor (props: any) {
    super(props);
    this.state = {
      searchText: ''
    };
  }

  sendToStore = (value: string): void => {
    const fullList = store.getState().locations;
    store.dispatch(showFilteredLocations(value, fullList));
  };

  openLocation = (location: ILocation): void => {
    store.dispatch(showLocation(location));
  };

  setSearchText = (text: string): void => {
    this.setState({ searchText: text });
  };

  render (): JSX.Element {
    let list = <IonLabel color="medium">Help businesses to stay open</IonLabel>;
    if (this.props.locations && this.props.locations.length > 0 && this.state.searchText !== '') {
      this.className = 'auto';
      list = <IonList lines="none" key="search-result">
        {
          this.props.locations.map((location: ILocation, index: number) => (
            <IonItem key={'search-result-item-' + index} onClick={(): void => this.openLocation(location)} color="light" lines="full" detail={true}>
              <IonLabel color="medium" key={'item-info-' + index}>{location.name}</IonLabel>
            </IonItem>
          ))
        }
      </IonList>;
    }

    if (this.state.searchText && this.state.searchText !== '' && this.props.locations.length === 0) {
      list = <IonLabel color="medium">No result</IonLabel>;
    }

    return (
      <IonContent id="sidebar" key="sidebar-block" className={this.className}>
        <IonSearchbar value={this.state.searchText} color="light" onIonChange={e => {
          // eslint-disable-next-line @typescript-eslint/no-non-null-assertion
          this.setSearchText(e.detail.value!);
          // eslint-disable-next-line @typescript-eslint/no-non-null-assertion
          this.sendToStore(e.detail.value!);
        }}></IonSearchbar>
        {list}
      </IonContent>
    );
  }
}

export default Sidebar;
