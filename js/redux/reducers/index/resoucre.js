import types from '../../actionTypes/index';

// 每日推荐
export default function onResoucreAction(state = {}, action) {
  switch (action.type) {
    case types.GET_RESOURCE_SUCCESS:
      return {
        ...state,
        item: action.item,
        loading: false,
      };
    case types.GET_RESOURCE_FAIL:
      return {
        ...state,
        loading: true,
      };
    default:
      return state;
  }
}
