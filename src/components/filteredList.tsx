import React from 'react'
import Sidebar from './sidebar/Sidebar';
import { IShop } from './shop';

const FilteredList = (props:{filteredList: IShop[]}) => {
  return (
    <Sidebar locations={props.filteredList}></Sidebar>
  )
}

export default FilteredList
