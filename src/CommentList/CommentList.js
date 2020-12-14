import React, { useContext, useEffect } from 'react';
import { CommentContext } from '../contexts/CommentProvider';
import { fetchComments } from '../actions/commentAction';

function CommentList() {
  const { state, dispatch } = useContext(CommentContext);

  useEffect(() => {
    fetchComments(dispatch);
  }, []);

  return (
    <div className="CommentList">
      <h1>Comment List</h1>
      <section className="comments">
        <ul>
          {state.comments.map((comment) => (
            <li key={comment.id}>
              <p>{comment.body}</p>
              <span>{comment.name}</span>
            </li>
          ))}
        </ul>
      </section>
    </div>
  );
}

export default CommentList;
