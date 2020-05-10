// eslint-disable-next-line @typescript-eslint/no-explicit-any
export const getAllLocations = async (): Promise<any> => {
  // get data from api
  return fetch('http://api.stayopen.maxwu.ca/locations')
    .then(res => res.json())
    .catch(console.log);
};
