export const getAllLocations = async () => {
    // get data from api
    return fetch('http://api.stayopen.maxwu.ca/locations')
        .then(res => res.json())
        .catch(console.log)
}
