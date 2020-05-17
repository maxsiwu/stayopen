import { ILinkSingle, ILinkDispatchSingle } from './../location';
import Location, { ILocation } from '../location';
import { showLocation, hideLocation } from '../../redux/actions';
import { connect } from 'react-redux';
import { RootState } from '../../redux/reducers/reducer';
import { Dispatch } from 'redux';

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
