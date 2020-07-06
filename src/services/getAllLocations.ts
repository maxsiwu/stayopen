// eslint-disable-next-line @typescript-eslint/no-explicit-any
export const getAllLocations = async (): Promise<any> => {
  // for mixpanel
  window.mixpanel.identify(1);
  window.mixpanel.people.set({
    'Sign up date': Date.now(), // Send dates in ISO timestamp format (e.g. "2020-01-02T21:07:03Z")
    USER_ID: 1
  });
  // get data from api
  return fetch('http://api.stayopen.maxwu.ca/locations')
    .then(res => res.json())
    .catch(console.log);
};
