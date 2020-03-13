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
import {onLoadRadioData} from '../actions/index/radio'
import {onLoadTopListData} from '../actions/index/list'
import {onLoadTopPlayListHigh} from '../actions/index/topPlaylistHigh'
import {onGetCodeData, onLoginData} from '../actions/personal/user'
import {onDailySinger} from '../actions/personal/daily'
import {onLoadWeatherData} from '../actions/index/weather'
import {onLoadSearchData} from '../actions/index/search'
import {onLoadRecommendData} from './index/personalized'

export default {
  onThemeChange,
  onLoadBannerData,
  onGetCodeData,
  onLoginData,
  onLoadRadioData,
  onLoadTopListData,
  onLoadTopPlayListHigh,
  onDailySinger,
  onLoadWeatherData,
  onLoadSearchData,
  onLoadRecommendData,
}