/*
 * @Author: your name
 * @Date: 2020-01-28 19:38:13
 * @LastEditTime: 2020-01-28 19:38:50
 * @LastEditors: your name
 * @Description: In User Settings Edit
 * @FilePath: /music_app/js/redux/reducers/personal/user/getCode.js
 */
import types from '../../../actionTypes/index'

// 发送验证码
export default function onGetCodeAction(state = {}, action) {
  switch(action.type) {
    case types.GET_CODE_DATA_SUCCESS:
      return {
        ...state,
        item: action.item,
      }
    case types.GET_CODE_DATA_FAIL:
      return {
        ...state
      }
    default:
      return state
  }
}
