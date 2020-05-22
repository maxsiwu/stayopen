import { ILinkList, ILinkDispatchList } from '../../components/Location/Location';
import { showFilteredLocations } from '../actions';
import { ILocation } from '../../components/Location/Location';
import { connect } from 'react-redux';
import { RootState } from '../reducers/reducer';
import { Dispatch, AnyAction } from 'redux';
import FilteredList from '../../components/FilteredList/FilteredList';

const mapStateToProps = (state: RootState): ILinkList => ({
  filteredList: state.filteredLocations
});

const mapDispatchToProps = (dispatch: Dispatch): ILinkDispatchList => ({
  showFilteredLocations: (keyword: string, filteredList: ILocation[]): AnyAction => dispatch(showFilteredLocations(keyword, filteredList))
});
const SearchSliderContainer = connect(mapStateToProps, mapDispatchToProps)(FilteredList);

export default SearchSliderContainer;
