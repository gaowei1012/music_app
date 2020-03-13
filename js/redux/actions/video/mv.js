import types from '../../actionTypes/index';
import {request} from '../../../expand/request';
import {handleData, handleErrorData} from '../../../utils/asyncActionHandle';

export function onLoadMv(url) {
  return dispatch => {
    request(url)
      .then(res => {
        let data = res.data;
        handleData(dispatch, data, types.VIDEO_LOAD_SUCCESS);
      })
      .catch(err => {
        handleErrorData(dispatch, err, types.VIDEO_LOAD_FAIL);
      });
  };
}
