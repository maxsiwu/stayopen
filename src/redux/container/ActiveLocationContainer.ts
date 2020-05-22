
import { showLocation, hideLocation } from '../actions';
import { connect } from 'react-redux';
import { RootState } from '../reducers/reducer';
import { Dispatch } from 'redux';
import Location, { ILinkDispatchSingle, ILinkSingle, ILocation } from '../../components/Location/Location';

const mapStateToProps = (state: RootState): ILinkSingle => ({
  location: state.location,
  isSliderOpen: state.isSliderOpen
});

const mapDispatchToProps = (dispatch: Dispatch): ILinkDispatchSingle => ({
  showLocation (location: ILocation): void { dispatch(showLocation(location)); },
  hideLocation (): void { dispatch(hideLocation()); }
});
const ActiveLocationContainer = connect(mapStateToProps, mapDispatchToProps)(Location);

export default ActiveLocationContainer;
