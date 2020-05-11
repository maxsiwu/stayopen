import { getAllLocations } from './getAllLocations';

it('gets locations', done => {
  getAllLocations().then(data => {
    try {
      expect(data.length).toBeGreaterThan(0);
      done();
    } catch (error) {
      done(error);
    }
  });
});
