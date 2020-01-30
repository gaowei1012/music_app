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
});

export default root;
