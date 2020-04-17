import { IShop } from './../components/shop';
const ICON_RESTAURANT = 'https://mt.googleapis.com/vt/icon/name=icons/onion/SHARED-mymaps-container-bg_4x.png,icons/onion/SHARED-mymaps-container_4x.png,icons/onion/1577-food-fork-knife_4x.png&highlight=ff000000,0288D1&scale=1.0'

class GoogleMapServices {
    private GOOGLE_MAP_API_KEY = 'AIzaSyB5VLHtO6IMfBR5wwp0_YB123Gje7ogIDo';
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
        return new window.google.maps.Map(googleMapRef.current, {
            zoom: 13,
            center: {
                lat: 49.2785508,
                lng: -123.1415198,
            },
            disableDefaultUI: true,
        });
    }

    createMarker = (item: IShop, googleMap: any) => {
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
}
export default new GoogleMapServices();