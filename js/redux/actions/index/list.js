'use strict'

import types from '../../actionTypes/index'
import {request} from '../../../expand/request'
import {handleData,handleErrorData} from '../../../utils/asyncActionHandle'

// 排行榜
export function onLoadTopListData(url) {
  return dispatch => {
    request(url)
      .then(res => {
        let data =res.playlist.tracks
        console.log('排行榜', data)
        handleData(dispatch, data, types.TOP_LIST_LOAD_SUCCESS)
      })
      .catch(err => {
        handleErrorData(dispatch, err, types.TOP_LIST_LOAD_FAIL)
      })
  }
}