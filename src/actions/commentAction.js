import axios from 'axios';

export const SET_COMMENTS = 'SET_COMMENTS';
const COMMENT_URL = 'https://jsonplaceholder.typicode.com/comments?postId=1';

const fetchComments = async (dispatch) => {
  const response = await axios.get(COMMENT_URL);
  dispatch({ type: SET_COMMENTS, payload: response.data });
};

export { fetchComments };
