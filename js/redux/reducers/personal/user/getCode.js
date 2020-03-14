import types from '../../../actionTypes/index';

// 发送验证码
export default function onGetCodeAction(state = {}, action) {
  switch (action.type) {
    case types.GET_CODE_DATA_SUCCESS:
      return {
        ...state,
        item: action.item,
      };
    case types.GET_CODE_DATA_FAIL:
      return {
        ...state,
      };
    default:
      return state;
  }
}
