export const SHOW_SHOP= 'SHOW_SHOP'
export const SET_VISIBILITY_FILTER = 'SET_VISIBILITY_FILTER'

export const VisibilityFilters = {
    SHOW_NONE: 'SHOW_NONE',
    SHOW_ACTIVE: 'SHOW_ACTIVE'
}
let nextTodoId = 0

export const showShop = (text: string) => ({
  type: SHOW_SHOP,
  id: nextTodoId++,
  text
})

export const setVisibilityFilter = (filter: any) => ({
  type: SET_VISIBILITY_FILTER,
  filter
})