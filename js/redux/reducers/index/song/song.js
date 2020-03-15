import types from '../../../actionTypes/index';

// 获取音乐url
export default function onSongAction(state = {}, action) {
  switch (action.type) {
    case types.GET_SONG_URL_SUCCESS:
      return {
        ...state,
        item: action.item,
      };
    case types.GET_SONG_URL_FAIL:
      return {
        ...state,
      };
    default:
      return state;
  }
}
