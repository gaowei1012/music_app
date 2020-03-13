'use strict'

import types from '../../actionTypes/index'
// 推荐 reducers
export default function onRecommendAction(state={}, action) {
  switch(action.type) {
    case types.RECOMMED_LOAD_SUCCESS:
      return {
        ...state,
        item: action.item
      }
    case types.RECOMMED_LOAD_FAIL:
      return {
        ...state
      }
    default:
      return state
  }
}
