import renderer from 'react-test-renderer';
import dummyList from '../../services/dummyList';
import React from 'react';
import Sidebar from './Sidebar';

describe('Counter', () => {
  test('snapshot renders', () => {
    const component = renderer.create(<Sidebar locations={dummyList}></Sidebar>).toJSON();
    // const component = renderer.create(Sidebar({ locations: dummyList })).toJSON();

    expect(component).toMatchSnapshot();
  });
});
