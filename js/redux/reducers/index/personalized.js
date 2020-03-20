import types from '../../actionTypes/index';
// 今日推荐
export default function onRecommendAction(state = {}, action) {
  switch (action.type) {
    case types.RECOMMED_LOAD_SUCCESS:
      return {
        ...state,
        item: action.item,
        loading: false,
      };
    case types.RECOMMED_LOAD_FAIL:
      return {
        ...state,
        loading: true,
      };
    default:
      return state;
  }
}
