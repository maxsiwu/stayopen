import { ILocation } from '../location';
import Location from '../location'
import { showLocation, hideLocation } from '../actions'
import { connect } from 'react-redux'
import { RootState } from '../reducers/reducer';
import { Dispatch } from 'redux';


const mapStateToProps = (state: RootState) => ({
  location: state.location,
  isSliderOpen: state.isSliderOpen
})

const mapDispatchToProps = (dispatch: Dispatch) => ({
  showLocation (location: ILocation) {dispatch(showLocation(location))},
  hideLocation () {dispatch(hideLocation())},
})
const ActiveLocationContainer = connect(mapStateToProps, mapDispatchToProps)(Location)


export default ActiveLocationContainer