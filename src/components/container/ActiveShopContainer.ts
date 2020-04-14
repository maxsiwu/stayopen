import Shop from '../shop'
import { showShop } from '../actions'
import { VisibilityFilters } from '../actions'
import { connect } from 'react-redux'

const getVisibleShop = (shop?: any, filter?:any) => {
  switch (filter) {
    case VisibilityFilters.SHOW_NONE:
      return {}
    case VisibilityFilters.SHOW_ACTIVE:
      return shop
    default:
      throw new Error('Unknown filter: ' + filter)
  }
}

const mapStateToProps = (state: any) => ({
  shop: getVisibleShop(state.shop, state.visibilityFilter)
})

const mapDispatchToProps = (dispatch: any) => ({
  showShop: (text:string) => dispatch(showShop(text)),
})
const ActiveShopContainer = connect(mapStateToProps, mapDispatchToProps)(Shop)


export default ActiveShopContainer