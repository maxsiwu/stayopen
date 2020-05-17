import renderer from 'react-test-renderer';
import Sidebar from './Sidebar';
import dummyList from '../../services/dummyList';
import React from 'react';

describe('Counter', () => {
  test('snapshot renders', () => {
    const component = renderer.create(<Sidebar locations={dummyList}></Sidebar>).toJSON();
    // const component = renderer.create(Sidebar({ locations: dummyList })).toJSON();

    expect(component).toMatchSnapshot();
  });
});
