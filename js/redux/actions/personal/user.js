/*
 * @Author: your name
 * @Date: 2020-01-20 16:31:19
 * @LastEditTime : 2020-01-28 20:58:03
 * @LastEditors  : Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: /music_app/js/redux/actions/personal/user.js
 */
import types from '../../actionTypes/index';
import {request} from '../../../expand/request';
import {handleData, handleErrorData} from '../../../utils/asyncActionHandle';

// 发送验证码
export function onGetCodeData(url) {
  return dispatch => {
    request(url)
      .then(res => {
        let data = res.data;
        handleData(dispatch, data, types.GET_CODE_DATA_SUCCESS);
      })
      .catch(err => {
        handleErrorData(dispatch, err, types.GET_CODE_DATA_FAIL);
      });
  };
}

// 登录
export function onLoginData(url) {
  return dispatch => {
    request(url)
      .then(res => {
        let data = res.data;
        handleData(dispatch, data, types.LOGIN_LOAD_SUCCESS);
      })
      .catch(err => {
        handleErrorData(dispatch, err, types.LOGIN_LOAD_FAIL);
      });
  };
}

// 签到
export function onSignindata(url) {
  return dispatch => {
    request(url)
      .then(res => {
        let data = res.data;
        handleData(dispatch, data, types.SIGNIN_LOAD_SUCCESS);
      })
      .catch(err => {
        handleErrorData(dispatch, err, types.SIGNIN_LOAD_FAIL);
      });
  };
}
