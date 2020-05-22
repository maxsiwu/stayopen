import React from 'react';
import Sidebar from '../Sidebar/Sidebar';
import { ILocation } from '../Location/Location';

const FilteredList = (props: {filteredList: ILocation[]}): JSX.Element | null => {
  return (
    <Sidebar locations={props.filteredList}></Sidebar>
  );
};

export default FilteredList;
