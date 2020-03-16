import types from '../../../actionTypes/index';

export default function onCheckMusicAction(state = {}, action) {
  switch (action.type) {
    case types.CHECK_MUSIC_SCUUESS:
      return {
        ...state,
        item: action.item,
      };
    case types.CHECK_MUSIC_FAIL:
      return {
        ...state,
      };
    default:
      return state;
  }
}
