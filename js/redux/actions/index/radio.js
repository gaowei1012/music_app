'use strict'

import types from '../../actionTypes/index'
import {request} from '../../../expand/request'
import {handleData,handleErrorData} from '../../../utils/asyncActionHandle'
/**
 * 电台
 * @param {string} url
 */
export function onLoadRadioData(url) {
  return dispatch => {
    request(url)
      .then(res => {
        let data = res.result
        //console.log(' 电台 res======data', data)
        handleData(dispatch, data, types.RADIO_LOAD_SUCCESS)
      })
      .catch(err => {
        handleErrorData(dispatch, err, types.RADIO_LOAD_FAIL)
      })
  }
}