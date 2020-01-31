'use strict'
import types from '../../actionTypes/index'

export default function onBannerAction(state = {}, action) {
  switch(action.type) {
    case types.BANNER_LOAD_SUCCESS:
      return {
        ...state,
        item: action.item,
      }
    case types.BANNER_LOAD_FAIL:
      return {
        ...state
      }
    default:
      return state
  }
}