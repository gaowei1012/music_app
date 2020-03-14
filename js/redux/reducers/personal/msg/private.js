import types from '../../../actionTypes/index';

export default function onPrivateAction(state = {}, action) {
  switch (action.type) {
    case types.MSG_LOAD_INFO_SUCCESS:
      return {
        ...state,
        item: action.item,
      };
    case types.MSG_LOAD_INFO_FAIL:
      return {
        ...state,
      };
    default:
      return state;
  }
}
