'use strict';

import types from '../../actionTypes/index';
import {request} from '../../../expand/request';
import {handleData, handleErrorData} from '../../../utils/asyncActionHandle';
// 今日推荐
export function onLoadRecommendData(url) {
  return dispatch => {
    request(url)
      .then(res => {
        let data = res.result;
        //console.log('--推荐--', data)
        handleData(dispatch, data, types.RECOMMED_LOAD_SUCCESS);
      })
      .catch(err => {
        handleErrorData(dispatch, err, types.RECOMMED_LOAD_FAIL);
      });
  };
}
