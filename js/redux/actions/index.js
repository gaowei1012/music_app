/*
 * @Author: your name
 * @Date: 2020-01-19 10:21:06
 * @LastEditTime : 2020-01-28 18:25:47
 * @LastEditors  : Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: /music_app/js/redux/actions/index.js
 */

import {onThemeChange} from '../actions/theme/index'
import {onLoadBannerData} from '../actions/index/banner'
import {onGetCodeData, onLoginData} from '../actions/personal/user'

export default {
  onThemeChange,
  onLoadBannerData,
  onGetCodeData,
  onLoginData,
}