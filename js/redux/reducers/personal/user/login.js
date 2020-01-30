/*
 * @Author: your name
 * @Date: 2020-01-28 19:39:09
 * @LastEditTime: 2020-01-28 19:39:49
 * @LastEditors: your name
 * @Description: In User Settings Edit
 * @FilePath: /music_app/js/redux/reducers/personal/user/login.js
 */
import types from '../../../actionTypes/index'

// 登录
export default function onLoginAction(state = {}, action) {
  switch(action.type) {
    case types.LOGIN_LOAD_SUCCESS:
      return {
        ...state,
        item: action.item
      }
    case types.LOGIN_LOAD_FAIL:
      return {
        ...state
      }
    default:
      return state
  }
}
