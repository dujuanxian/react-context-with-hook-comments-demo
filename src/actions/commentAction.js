import axios from 'axios';

export const SET_COMMENTS = 'SET_COMMENTS';
const COMMENT_URL = 'https://jsonplaceholder.typicode.com/posts/1/comments';

const fetchComments = async (dispatch) => {
  const response = await axios.get(COMMENT_URL);
  dispatch({ type: SET_COMMENTS, payload: response.data });
};

const createComment = (comment) => axios.post(COMMENT_URL, comment);

export { fetchComments, createComment };
