import { ILocation, ICategory, IService } from '../components/Location/Location';

const dummyCategory: ICategory[] = [
  {
    id: 1,
    name: 'Japanese'
  },
  {
    id: 2,
    name: 'Sushi'
  }
];

const dummyService: IService[] = [
  {
    id: 1,
    name: 'Takeout'
  },
  {
    id: 2,
    name: 'Delivery'
  }
];
const dummyList: ILocation[] = [
  {
    id: 1,
    name: 'Miku',
    longitude: 123,
    latitude: 33,
    url: 'www.miku.com',
    services: [dummyCategory[0], dummyCategory[1]],
    categories: [dummyService[0]]
  },
  {
    id: 2,
    name: 'Minami',
    longitude: 145,
    latitude: 23,
    url: 'www.minami.com',
    services: [dummyCategory[0], dummyCategory[1]],
    categories: [dummyService[1]]
  }
];

export default dummyList;
