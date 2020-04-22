import { showFilteredLocations } from './../actions';
import { IShop } from './../shop';
import { connect } from 'react-redux'
import { RootState } from '../reducers/reducer';
import { Dispatch } from 'redux';
import FilteredList from '../filteredList';


const mapStateToProps = (state: RootState) => ({
    filteredList: state.filteredLocations
})

const mapDispatchToProps = (dispatch: Dispatch) => ({
    showFilteredLocations: (keyword: string, filteredList: IShop[]) => dispatch(showFilteredLocations(keyword, filteredList)),
})
const SearchSliderContainer = connect(mapStateToProps, mapDispatchToProps)(FilteredList)

export default SearchSliderContainer