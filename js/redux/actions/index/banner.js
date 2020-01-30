/*
 * @Author: your name
 * @Date: 2020-01-20 16:10:14
 * @LastEditTime : 2020-01-21 08:46:20
 * @LastEditors  : Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: /music_app/js/redux/actions/index/banner.js
 */
import types from '../../actionTypes/index'
import {request} from '../../../expand/request'

export function onLoadBannerData(url) {
  return dispatch => {
    request(url)
      .then(res => {
        let data = res.banners;
        handledata(dispatch, data)
      })
      .catch(err => {
        dispatch({
          type: types.BANNER_LOAD_FAIL,
          err,
        })
      })
  }
}

function handledata(dispatch, data) {
  dispatch({
    type: types.BANNER_LOAD_SUCCESS,
    item: data,
  });
}