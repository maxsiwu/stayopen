import { ILocation } from '../components/location';
import GoogleMap from '../components/map/GoogleMap';
const ICON_RESTAURANT = 'https://mt.googleapis.com/vt/icon/name=icons/onion/SHARED-mymaps-container-bg_4x.png,icons/onion/SHARED-mymaps-container_4x.png,icons/onion/1577-food-fork-knife_4x.png&highlight=ff000000,0288D1&scale=1.0'

class GoogleMapServices {
    private GOOGLE_MAP_API_KEY = process.env.REACT_APP_GOOGLE_API_KEY;
    private ready: Promise<void>;

    constructor() {
        this.ready = new Promise((resolve, reject) => {
            const googleScript = document.createElement('script');
            googleScript.src = `https://maps.googleapis.com/maps/api/js?key=${this.GOOGLE_MAP_API_KEY}&libraries=places`;
            window.document.body.appendChild(googleScript);
            googleScript.addEventListener('load', () => {
                resolve();
            })
        })
    }

    createGoogleMap = async (googleMapRef: React.RefObject<HTMLDivElement>) => {
        await this.ready;
        let map = new window.google.maps.Map(googleMapRef.current, {
            zoom: 13,
            mapTypeControlOptions: {
                mapTypeIds: ['roadmap', 'satellite', 'hybrid', 'terrain',
                        'styled_map']
            },
            center: {
                lat: 49.2785508,
                lng: -123.1415198,
            },
            disableDefaultUI: true,
        });
        let styledMapType = new window.google.maps.StyledMapType(this.silverMapStyle)
        map.mapTypes.set('styled_map', styledMapType)
        map.setMapTypeId('styled_map');
        return map
    }

    createMarker = (item: ILocation, googleMap: GoogleMap) => {
        return new window.google.maps.Marker({
            position: { lat: item.latitude, lng: item.longitude },
            map: googleMap,
            label: item.name,
            icon: {
                url: ICON_RESTAURANT,
                labelOrigin: new window.google.maps.Point(15,35),
            },
        })
    }

    silverMapStyle = [{elementType:'geometry',stylers:[{color:'#f5f5f5'}]},{elementType:'labels.icon',stylers:[{visibility:'off'}]},{elementType:'labels.text.fill',stylers:[{color:'#616161'}]},{elementType:'labels.text.stroke',stylers:[{color:'#f5f5f5'}]},{featureType:'administrative.land_parcel',elementType:'labels.text.fill',stylers:[{color:'#bdbdbd'}]},{featureType:'poi',elementType:'geometry',stylers:[{color:'#eeeeee'}]},{featureType:'poi',elementType:'labels.text.fill',stylers:[{color:'#757575'}]},{featureType:'poi.park',elementType:'geometry',stylers:[{color:'#e5e5e5'}]},{featureType:'poi.park',elementType:'labels.text.fill',stylers:[{color:'#9e9e9e'}]},{featureType:'road',elementType:'geometry',stylers:[{color:'#ffffff'}]},{featureType:'road.arterial',elementType:'labels.text.fill',stylers:[{color:'#757575'}]},{featureType:'road.highway',elementType:'geometry',stylers:[{color:'#dadada'}]},{featureType:'road.highway',elementType:'labels.text.fill',stylers:[{color:'#616161'}]},{featureType:'road.local',elementType:'labels.text.fill',stylers:[{color:'#9e9e9e'}]},{featureType:'transit.line',elementType:'geometry',stylers:[{color:'#e5e5e5'}]},{featureType:'transit.station',elementType:'geometry',stylers:[{color:'#eeeeee'}]},{featureType:'water',elementType:'geometry',stylers:[{color:'#c9c9c9'}]},{featureType:'water',elementType:'labels.text.fill',stylers:[{color:'#9e9e9e'}]}]
}
export default new GoogleMapServices();