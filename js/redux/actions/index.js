/*
 * @Author: your name
 * @Date: 2020-01-19 10:21:06
 * @LastEditTime : 2020-01-28 18:25:47
 * @LastEditors  : Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: /music_app/js/redux/actions/index.js
 */

import {onThemeChange} from '../actions/theme/index';
import {onLoadBannerData} from '../actions/index/banner';
import {onLoadRadioData} from '../actions/index/radio';
import {onLoadTopListData, onLoadListData} from './index/toplist';
import {onLoadTopPlayListHigh} from '../actions/index/topPlaylistHigh';
import {
  onGetCodeData,
  onLoginData,
  onFollowsData,
  onUserInfoData,
} from '../actions/personal/user';
import {onDailySinger} from '../actions/personal/daily';
import {onLoadWeatherData} from '../actions/index/weather';
import {onLoadSearchData} from '../actions/index/search';
import {onLoadRecommendData} from './index/personalized';
import {onLoadMv} from './video/mv';
import {
  onLoadVideoGroupData,
  onLoadVideoRelateData,
  onLoadVideoDetailData,
} from './video/video';
import {onLoadPrivateData} from './personal/message';
import {
  onLoadSongUrl,
  onCheckMusic,
  onLikeMusic,
  onLikeListMusic,
  onLoadPlayListData,
} from './index/song/song';
import {onLoadResourceData} from './index/resource';

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
  onLoadMv,
  onLoadVideoGroupData,
  onLoadVideoDetailData,
  onLoadVideoRelateData,
  onFollowsData,
  onUserInfoData,
  onLoadPrivateData,
  onLoadSongUrl,
  onCheckMusic,
  onLikeMusic,
  onLikeListMusic,
  onLoadPlayListData,
  onLoadResourceData,
  onLoadListData,
};
