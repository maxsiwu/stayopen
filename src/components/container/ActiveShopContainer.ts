import { IShop } from './../shop';
import Shop from '../shop'
import { showShop } from '../actions'
import { connect } from 'react-redux'
import { RootState } from '../reducers/reducer';
import { Dispatch } from 'redux';


const mapStateToProps = (state: RootState) => ({
  shop: state.shop
})

const mapDispatchToProps = (dispatch: Dispatch) => ({
  showShop: (shop: IShop) => dispatch(showShop(shop)),
})
const ActiveShopContainer = connect(mapStateToProps, mapDispatchToProps)(Shop)


export default ActiveShopContainer