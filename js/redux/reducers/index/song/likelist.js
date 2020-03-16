import types from '../../../actionTypes/index';

// 喜欢音乐列表
export default function onLikeListAction(state = {}, action) {
  switch (action.type) {
    case types.GET_LIKE_LIST_SUCCESS:
      return {
        ...state,
        item: action.item,
        loading: false,
      };
    case types.GET_LIKE_LIST_FAIL:
      return {
        ...state,
        loading: true,
      };
    default:
      return state;
  }
}
