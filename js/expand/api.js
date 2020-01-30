/*
 * @Author: your name
 * @Date: 2020-01-20 16:01:18
 * @LastEditTime : 2020-01-28 12:21:35
 * @LastEditors  : Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: /music_app/js/expand/config.js
 */
module.exports = {
  // 线下默认地址
  base_url: 'http://localhost:3000/',
  // 首页
  banner_url: 'banner',
  // 登录 发送手机验证码
  captcha: 'captcha/sent',
  // 验证验证码
  verify: 'captcha/verify',
  // 刷新登录
  refresh: 'login/refresh',
  // 注册
  register:'register/cellphone',
  // 检查手机好是否已注册
  checkot_register: 'cellphone/existence/check',
  // 退出登录
  logout: 'logout',
  // 获取热门歌手
  artist: 'artist/sublist',
  // 搜索歌曲
  search: 'search',
  // 点赞收藏
  subscribe: 'playlist/subscribe',
  // 歌词
  lyric: 'lyric',
  // 新歌速递
  top: 'top/song',
  // 评论
  comment: 'comment/music',
  // 获取歌曲详情
  songDetail: 'song/detail',
  // 获取专辑内容
  album: 'album',
  // 签到
  dailySignin: 'daily_signin',
  // 喜欢音乐
  like: 'like?id=',
  // 喜欢音乐列表
  likelist: 'likelist?uid=',
  // 新碟上架
  topAlbum: 'top/album',
  // 最新专辑
  albumNewest: 'album/newest',
  // 热门歌手
  topArtists: 'top/artists',
  // 全部mv
  mvAll: 'mv/all?area=',
  // 网易出品mv
  mvExclusiveRcmd: 'mv/exclusive/rcmd',
  // 推荐mv
  personalizedMv: 'personalized/mv',
  // 推荐歌单
  personalized: 'personalized?limit=',
  // 推荐新音乐
  personalizedNewsong: 'personalized/newsong',
  // 推荐电台
  personalizedDjprogram: 'personalized/djprogram',
  // 排行榜
  topList: 'top/list?idx=',
  // 所有排行榜
  toplist: 'toplist',
  // 所有榜单内容摘要
  toplistDeatil: 'toplist/detail',
  // 歌手榜
  toplistArtist: 'toplist/artist',
  // 热门电台
  djHot: 'dj/hot',
  // 电台 - 24小时节目榜
  djProgramToplist: 'dj/program/toplist/hours',
}
