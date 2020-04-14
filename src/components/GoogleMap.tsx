import React, { Component, createRef } from 'react'
import { showShop } from './actions'
import { store } from '../index'

declare global {
  interface Window { google?: any; }
}

const GOOGLE_MAP_API_KEY = 'AIzaSyB5VLHtO6IMfBR5wwp0_YB123Gje7ogIDo'
const ICON_RESTAURANT = 'https://mt.googleapis.com/vt/icon/name=icons/onion/SHARED-mymaps-container-bg_4x.png,icons/onion/SHARED-mymaps-container_4x.png,icons/onion/1577-food-fork-knife_4x.png&highlight=ff000000,0288D1&scale=1.0'
class GoogleMap extends Component {
  googleMapRef = createRef<HTMLDivElement>()
  googleMap = null
  marker = null

  componentDidMount() {
    const googleScript = document.createElement('script')
    googleScript.src = `https://maps.googleapis.com/maps/api/js?key=${GOOGLE_MAP_API_KEY}&libraries=places`
    window.document.body.appendChild(googleScript)

    googleScript.addEventListener('load', () => {
      console.log('googlescript loaded')
      this.googleMap = this.createGoogleMap()
      let image = {
        url: ICON_RESTAURANT,
        labelOrigin: new window.google.maps.Point(15,35),
      };
      this.marker = this.createMarker(image).addListener('click', () => {
        store.dispatch(showShop('Gastown'))
      });
    })

  }

  createGoogleMap = () =>
    new window.google.maps.Map(this.googleMapRef.current, {
      zoom: 13,
      center: {
        lat: 49.2785508,
        lng: -123.1415198,
      },
      disableDefaultUI: true,
    })

  createMarker = (image:any) =>
    new window.google.maps.Marker({
      position: { lat: 49.284313, lng: -123.108792 },
      map: this.googleMap,
      label: 'Gastown',
      icon: image,
    })

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
