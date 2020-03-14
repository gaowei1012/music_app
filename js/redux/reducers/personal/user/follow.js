import types from '../../../actionTypes/index';

export default function onFollowAction(state = {}, action) {
  switch (action.type) {
    case types.USER_LOAD_FOLLOWS_SUCCESS:
      return {
        ...state,
        item: action.item,
        loading: false,
      };
    case types.USER_LOAD_FOLLOWS_FAIL:
      return {
        ...state,
        loading: true,
      };
    default:
      return state;
  }
}
