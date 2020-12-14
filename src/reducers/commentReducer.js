import { SET_COMMENTS } from '../actions/commentAction';

const commentReducer = (state, action) => {
  if (action.type === SET_COMMENTS) {
    return {
      ...state,
      comments: action.payload,
    };
  }
  return state;
};

export default commentReducer;
