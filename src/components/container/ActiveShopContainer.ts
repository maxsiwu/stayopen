import Shop from '../shop'
import { showShop } from '../actions'
import { connect } from 'react-redux'


const mapStateToProps = (state: any) => ({
  shop: state.shop
})

const mapDispatchToProps = (dispatch: any) => ({
  showShop: (text:string) => dispatch(showShop(text)),
})
const ActiveShopContainer = connect(mapStateToProps, mapDispatchToProps)(Shop)


export default ActiveShopContainer