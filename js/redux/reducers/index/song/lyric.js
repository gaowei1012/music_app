import types from '../../../actionTypes/index';

// 获取歌词
export default function onLyricAction(state = {}, action) {
  switch (action.type) {
    case types.GET_LYRIC_SUCCESS:
      return {
        ...state,
        item: action.item,
        loading: false,
      };
    case types.GET_LYRIC_FAIL:
      return {
        ...state,
        loading: true,
      };
    default:
      return state;
  }
}
