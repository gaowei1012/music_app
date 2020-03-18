import {combineReducers} from 'redux';
import {rootCom, RootNavigation} from '../../navigation/AppNavigation';
import theme from './theme/index';
import banner from './index/banner';
import getCode from './personal/user/getCode';
import login from './personal/user/login';
import signin from './personal/user/signin';
import radio from './index/radio';
import topList from './index/topList';
import playHigh from './index/topPlaylistHigh';
import daily from './personal/daily';
import weather from './index/weather';
import search from './index/search';
import recommend from './index/personalized';
import mv from './video/mv';
import group from './video/video';
import follow from './personal/user/follow';
import userinfo from './personal/user/userinfo';
import msgPrivate from './personal/msg/private';
import songUrl from './index/song/song';
import play from './index/song/play';
import check from './index/song/check';
import resoucre from './index/resoucre';
import like from './index/song/like';
import likeList from './index/song/likelist';
import rankiglist from './index/rakinglist';
import lyric from './index/song/lyric';

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
  topList,
  playHigh,
  daily,
  weather,
  search,
  recommend,
  mv,
  group,
  follow,
  userinfo,
  msgPrivate,
  songUrl,
  play,
  check,
  resoucre,
  like,
  likeList,
  rankiglist,
  lyric,
});

export default root;
