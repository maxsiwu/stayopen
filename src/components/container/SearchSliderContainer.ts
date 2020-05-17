import { ILinkList, ILinkDispatchList } from './../location';
import { showFilteredLocations } from '../../redux/actions';
import { ILocation } from '../location';
import { connect } from 'react-redux';
import { RootState } from '../../redux/reducers/reducer';
import { Dispatch, AnyAction } from 'redux';
import FilteredList from '../filteredList';

const mapStateToProps = (state: RootState): ILinkList => ({
  filteredList: state.filteredLocations
});

const mapDispatchToProps = (dispatch: Dispatch): ILinkDispatchList => ({
  showFilteredLocations: (keyword: string, filteredList: ILocation[]): AnyAction => dispatch(showFilteredLocations(keyword, filteredList))
});
const SearchSliderContainer = connect(mapStateToProps, mapDispatchToProps)(FilteredList);

export default SearchSliderContainer;
