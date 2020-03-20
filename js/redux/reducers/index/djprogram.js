import types from '../../actionTypes/index';

export default function onDjprogramAction(state = {}, action) {
  switch (action.type) {
    case types.GET_DJPROGRAM_SUCCESS:
      return {
        ...state,
        item: action.item,
        loading: false,
      };
    case types.GET_DJPROGRAM_FAIL:
      return {
        ...state,
        loading: true,
      };
    default:
      return state;
  }
}
