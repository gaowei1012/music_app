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
import follow from './personal/user/follow';
import userinfo from './personal/user/userinfo';

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
  follow,
  userinfo,
});

export default root;
