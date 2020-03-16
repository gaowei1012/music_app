import types from '../../actionTypes/index';
import {request} from '../../../expand/request';
import {handleData, handleErrorData} from '../../../utils/asyncActionHandle';

// 排行榜
export function onLoadTopListData(url) {
  return dispatch => {
    request(url)
      .then(res => {
        let data = res.list;
        handleData(dispatch, data, types.TOP_LIST_LOAD_SUCCESS);
      })
      .catch(err => {
        handleErrorData(dispatch, err, types.TOP_LIST_LOAD_FAIL);
      });
  };
}

// 单个排行榜
export function onLoadListData(url) {
  return dispatch => {
    request(url)
      .then(res => {
        let data = res;
        console.log('data--data', data);
        handleData(dispatch, data, types);
      })
      .catch(err => {
        handleErrorData(dispatch, err, types);
      });
  };
}
