/*
 * @Author: your name
 * @Date: 2020-01-19 10:21:13
 * @LastEditTime : 2020-01-28 21:01:41
 * @LastEditors  : Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: /music_app/js/redux/reducers/index.js
 */

'use strict';

import {combineReducers} from 'redux';
import {rootCom, RootNavigation} from '../../navigation/AppNavigation';
import theme from './theme/index';
import banner from './index/banner';
import getCode from './personal/user/getCode';
import login from './personal/user/login';
import signin from './personal/user/signin';
import radio from './index/radio';
import top from './index/list';
import playHigh from './index/topPlaylistHigh';
import daily from './personal/daily';
import weather from './index/weather';
import search from './index/search';
import recommend from './index/personalized';
import mv from './video/mv';
import group from './video/video';

const navState = RootNavigation.router.getStateForAction(
  RootNavigation.router.getActionForPathAndParams(rootCom),
);

const navReducer = (state = navState, action) => {
  const nextState = RootNavigation.router.getStateForAction(action, state);
  return nextState || state;
};

const root = combineReducers({
  nav: navReducer,
  theme,
  banner,
  getCode,
  login,
  signin,
  radio,
  top,
  playHigh,
  daily,
  weather,
  search,
  recommend,
  mv,
  group,
});

export default root;
