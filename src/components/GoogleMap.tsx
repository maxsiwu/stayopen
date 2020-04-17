import React, { Component, createRef } from 'react'
import { showShop, loadLocations } from './actions'
import { store } from '../index'
import { getAllLocations } from '../services/getAllLocations'
import GoogleMapService from '../services/GoogleMapService'

declare global {
  interface Window { google?: any; }
}

class GoogleMap extends Component {
  googleMapRef = createRef<HTMLDivElement>()
  googleMap = null
  clickedOutside: boolean = true

  componentDidMount() {
    // create google map
    GoogleMapService.createGoogleMap(this.googleMapRef).then((googleMap: any) => {
      this.googleMap = googleMap

      // add markers
      getAllLocations()
        .then((data) => {
          store.dispatch(loadLocations(data))
          for (const item of data) {
            GoogleMapService.createMarker(item, this.googleMap).addListener('click', () => {
              this.clickedOutside = false
              store.dispatch(showShop(item.name))
            });
          }
        })
    })
  }

  render() {
    return (
      <div
        id="google-map"
        ref={this.googleMapRef}
        style={{ width: '100%', height: '100%' }}
      />
    )
  }

}

export default GoogleMap;
