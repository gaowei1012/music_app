import types from '../../../actionTypes/index';
import {request} from '../../../../expand/request';
import {handleData, handleErrorData} from '../../../../utils/asyncActionHandle';

// 获取音乐url
export function onLoadSongUrl(url) {
  return dispatch => {
    request(url)
      .then(res => {
        let data = res;
        handleData(dispatch, data, types.GET_SONG_URL_SUCCESS);
      })
      .catch(err => {
        handleErrorData(dispatch, err, types.GET_SONG_URL_FAIL);
      });
  };
}
