/*
 * @Author: your name
 * @Date: 2020-01-28 20:58:43
 * @LastEditTime: 2020-01-28 21:01:18
 * @LastEditors: your name
 * @Description: In User Settings Edit
 * @FilePath: /music_app/js/redux/reducers/personal/user/signin.js
 */
'use strict'

import types from '../../../actionTypes/index'

export default function onSigninAction(state = {}, action) {
  switch(action.type) {
    case types.SIGNIN_LOAD_SUCCESS:
      return {
        ...state,
        item: action.item,
      }
    case types.SIGNIN_LOAD_FAIL:
      return {
        ...state
      }
    default: 
      return state
  }
}