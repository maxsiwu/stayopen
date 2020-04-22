import React from 'react'
import Sidebar from './container/Sidebar';
import { IShop } from './shop';

const FilteredList = (props:{filteredList: IShop[]}) => {
  return (
    <Sidebar locations={props.filteredList}></Sidebar>
  )
}

export default FilteredList
