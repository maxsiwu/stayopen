import React from 'react';
import Sidebar from './sidebar/Sidebar';
import { ILocation } from './location';

const FilteredList = (props: {filteredList: ILocation[]}): JSX.Element | null => {
  return (
    <Sidebar locations={props.filteredList}></Sidebar>
  );
};

export default FilteredList;
