import types from '../../actionTypes/index';
import {request} from '../../../expand/request';
import {handleData, handleErrorData} from '../../../utils/asyncActionHandle';

export function onLoadVideo(url) {
  return dispatch => {
    request(url)
      .then(res => {
        let data = res;
        handleData(dispatch, data, types.DAILY_SINGER_LOAD_SUCCESS);
      })
      .catch(err => {
        handleErrorData(dispatch, err, types.DAILY_SINGER_LOAD_FAIL);
      });
  };
}
