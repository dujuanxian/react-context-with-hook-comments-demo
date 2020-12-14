import React, { useState, useContext } from 'react';
import { CommentContext } from '../contexts/CommentProvider';
import { fetchComments, createComment } from '../actions/commentAction';

function CommentCreator() {
  const [name, setName] = useState('');
  const [comment, setComment] = useState('');
  const { dispatch } = useContext(CommentContext);

  const handleSubmit = async (event) => {
    event.preventDefault();
    await createComment({ name, body: comment });
    fetchComments(dispatch);
  };

  return (
    <article className="CommentCreator">
      <h1>Post Comment</h1>
      <form onSubmit={handleSubmit}>
        <label htmlFor="name">
          Name
          <input
            type="text"
            id="name"
            value={name}
            onChange={(event) => setName(event.target.value)}
          />
        </label>
        <label htmlFor="comment">
          Comment
          <textarea
            id="comment"
            value={comment}
            onChange={(event) => setComment(event.target.value)}
          />
        </label>
        <button type="submit" role="submit">
          Submit
        </button>
      </form>
    </article>
  );
}

export default CommentCreator;
