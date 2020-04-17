import React, { Component, createRef } from 'react'
import { showShop, loadLocations } from './actions'
import { store } from '../index'
import { getAllLocations } from '../services/getAllLocations'
import GoogleMapService from '../services/GoogleMapService'

class GoogleMap extends Component {
  googleMapRef = createRef<HTMLDivElement>()
  googleMap: GoogleMap | null = null
  clickedOutside: boolean = true

  componentDidMount() {
    // create google map
    GoogleMapService.createGoogleMap(this.googleMapRef).then((googleMap: GoogleMap) => {
      this.googleMap = googleMap

      // add markers
      getAllLocations()
        .then((data) => {
          store.dispatch(loadLocations(data))
          for (const item of data) {
            if (this.googleMap) {
              GoogleMapService.createMarker(item, this.googleMap).addListener('click', () => {
                this.clickedOutside = false
                store.dispatch(showShop(item))
              });
            }
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
