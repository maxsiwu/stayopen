import React, { Component, createRef, ReactNode } from 'react';
import { showLocation, loadLocations } from '../../redux/actions';
import { getAllLocations } from '../../services/getAllLocations';
import GoogleMapService from '../../services/GoogleMapService';
import { store } from '../../redux/store';

class GoogleMap extends Component {
  googleMapRef = createRef<HTMLDivElement>();
  googleMap: GoogleMap | null = null;
  clickedOutside = true;

  componentDidMount (): void {
    // create google map
    GoogleMapService.createGoogleMap(this.googleMapRef).then((googleMap: GoogleMap) => {
      this.googleMap = googleMap;
    });
    // add markers
    getAllLocations()
      .then((data) => {
        store.dispatch(loadLocations(data));
        for (const item of data) {
          if (this.googleMap) {
            GoogleMapService.createMarker(item, this.googleMap).addListener('click', () => {
              this.clickedOutside = false;
              store.dispatch(showLocation(item));
            });
          }
        }
      });
  }

  render (): ReactNode {
    return (
      <div
        id="google-map"
        ref={this.googleMapRef}
        style={{ width: '100%', height: '100%' }}
      />
    );
  }
}

export default GoogleMap;
