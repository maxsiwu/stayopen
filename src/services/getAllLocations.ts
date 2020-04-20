export const getAllLocations = async () => {
    return mockData;
    // get data from api
    // return fetch('http://api.stayopen.maxwu.ca/locations')
    //     .then(res => res.json())
    //     .catch(console.log)
}

const mockData = [
    {
        locationId: 1,
        name: 'Cheesecake etc.',
        longitude: -123.138763,
        latitude: 49.266666,
        url: 'https://www.cheesecakeetc.com/',
        services: ['Takeout', 'Delivery'],
        categories: ['Japanese']
    },
    {
        locationId: 2,
        name: 'Minami Restaurant',
        longitude:  -123.120790,
        latitude: 49.275383,
        url: 'https://minamirestaurant.com/',
        services: ['Takeout', 'Delivery'],
        categories: ['Japanese', 'Sushi']
    }
]