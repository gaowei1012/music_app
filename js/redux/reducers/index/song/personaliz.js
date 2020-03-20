import types from '../../../actionTypes/index';

// 推荐歌单
export default function onPersonalizAction(state = {}, action) {
  switch (action.type) {
    case types.GET_PERSONALIZ_SUCCESS:
      return {
        ...state,
        item: action.item,
        loading: false,
      };
    case types.GET_PERSONALIZ_FAIL:
      return {
        ...state,
        loading: true,
      };
    default:
      return state;
  }
}
