export const getAllLocations = async () => {
    // return mockData;
    // get data from api
    return fetch('http://api.stayopen.maxwu.ca/locations')
        .then(res => res.json())
        .catch(console.log)
}
