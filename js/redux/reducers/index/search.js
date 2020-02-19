'use strict'

import types from '../../actionTypes/index'

// 搜索 reducers
export default function onSearchAction(state={}, action) {
  switch(action.type) {
    case types.SEARCH_LOAD_SUCCESS:
      return {
        ...state,
        item: action.item
      }
    case types.SEARCH_LOAD_FAIL:
      return {
        ...state
      }
    default:
      return state
  }
}
