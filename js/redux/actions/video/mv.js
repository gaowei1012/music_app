import types from '../../actionTypes/index';
import {request} from '../../../expand/request';
import {handleData, handleErrorData} from '../../../utils/asyncActionHandle';

// 获取mv
export function onLoadMv(url) {
  return dispatch => {
    request(url)
      .then(res => {
        const data = res.data;
        handleData(dispatch, data, types.VIDEO_LOAD_SUCCESS);
      })
      .catch(err => {
        handleErrorData(dispatch, err, types.VIDEO_LOAD_FAIL);
      });
  };
}

// 获取mv数据
export function onLoadMvDetail(url) {
  return dispatch => {
    request(url)
      .then(res => {
        const data = res;
        console.log('获取mv数据', data);
        handleData(dispatch, data, types.GET_MV_DETAIL_SUCCESS);
      })
      .catch(err => {
        handleErrorData(dispatch, err, types.GET_MV_DETAIL_FAIL);
      });
  };
}
