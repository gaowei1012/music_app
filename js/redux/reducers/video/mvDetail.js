import types from '../../actionTypes/index';

// 获取mv数据
export default function onMvDetailAction(state = {}, action) {
  switch (action.type) {
    case types.GET_MV_DETAIL_SUCCESS:
      return {
        ...state,
        item: action.item,
        loading: false,
      };
    case types.GET_MV_DETAIL_FAIL:
      return {
        ...state,
        loading: true,
      };
    default:
      return state;
  }
}
