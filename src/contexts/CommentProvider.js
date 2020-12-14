import React, { createContext, useReducer } from 'react';
import commentReducer from '../reducers/commentReducer';

const CommentContext = createContext({});

const CommentProvider = ({ children }) => {
  const [state, dispatch] = useReducer(commentReducer, { comments: [] });

  return (
    <CommentContext.Provider
      value={{
        state,
        dispatch,
      }}
    >
      {children}
    </CommentContext.Provider>
  );
};

export { CommentProvider, CommentContext };
