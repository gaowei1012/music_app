'use strict'

import types from '../../actionTypes/index'

// 精选歌单
export default function onPlaylistHigh(state = {}, action) {
  switch(action.type) {
    case types.TOP_PlAY_HIGH_LOAD_SUCCESS:
      return {
        ...state,
        item: action.item
      }
    case types.TOP_PlAY_HIGH_LOAD_FAIL:
      return { ...state }
    default:
      return state
  }
}
