import types from '../../../actionTypes/index';

// 登录
export default function onLoginAction(state = {}, action) {
  switch (action.type) {
    case types.LOGIN_LOAD_SUCCESS:
      return {
        ...state,
        item: action.item,
      };
    case types.LOGIN_LOAD_FAIL:
      return {
        ...state,
      };
    default:
      return state;
  }
}
