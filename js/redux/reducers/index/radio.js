'use strict'
import types from '../../actionTypes/index'

/**
 * 电台 reducers
 * @param {state} state 
 * @param {action} action 
 */
export default function onRadioAction(state = {}, action) {
  switch(action.type) {
    case types.RADIO_LOAD_SUCCESS:
      return {
        ...state,
        item: action.item
      }
    case types.RADIO_LOAD_FAIL:
      return {
        ...state,
      }
    default:
      return state
  }
}