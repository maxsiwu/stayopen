import { ILocation } from '../components/Location/Location';
import GoogleMap from '../components/Map/GoogleMap';
import { SILVER_MAP_STYLE } from '../redux/constants/customizedMapStyle';
const ICON_RESTAURANT = 'https://mt.googleapis.com/vt/icon/name=icons/onion/SHARED-mymaps-container-bg_4x.png,icons/onion/SHARED-mymaps-container_4x.png,icons/onion/1577-food-fork-knife_4x.png&highlight=ff000000,0288D1&scale=1.0';

class GoogleMapServices {
    private GOOGLE_MAP_API_KEY = process.env.REACT_APP_GOOGLE_API_KEY;
    private ready: Promise<void>;

    constructor () {
      this.ready = new Promise((resolve) => {
        const googleScript = document.createElement('script');
        googleScript.src = `https://maps.googleapis.com/maps/api/js?key=${this.GOOGLE_MAP_API_KEY}&libraries=places`;
        window.document.body.appendChild(googleScript);
        googleScript.addEventListener('load', () => {
          resolve();
        });
      });
    }

    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    createGoogleMap = async (googleMapRef: React.RefObject<HTMLDivElement>): Promise<any> => {
      await this.ready;
      const map = new window.google.maps.Map(googleMapRef.current, {
        zoom: 13,
        mapTypeControlOptions: {
          mapTypeIds: ['roadmap', 'satellite', 'hybrid', 'terrain',
            'styled_map']
        },
        center: {
          lat: 49.2785508,
          lng: -123.1415198
        },
        disableDefaultUI: true
      });
      const styledMapType = new window.google.maps.StyledMapType(SILVER_MAP_STYLE);
      map.mapTypes.set('styled_map', styledMapType);
      map.setMapTypeId('styled_map');
      return map;
    }

    // eslint-disable-next-line @typescript-eslint/explicit-function-return-type
    createMarker = (item: ILocation, googleMap: GoogleMap) => {
      return new window.google.maps.Marker({
        position: { lat: item.latitude, lng: item.longitude },
        map: googleMap,
        label: item.name,
        icon: {
          url: ICON_RESTAURANT,
          labelOrigin: new window.google.maps.Point(15, 35)
        }
      });
    }
}
export default new GoogleMapServices();
