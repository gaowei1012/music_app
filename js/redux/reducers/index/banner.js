/*
 * @Author: your name
 * @Date: 2020-01-20 16:12:08
 * @LastEditTime : 2020-01-28 18:26:42
 * @LastEditors  : Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: /music_app/js/redux/reducers/index/banner.js
 */
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