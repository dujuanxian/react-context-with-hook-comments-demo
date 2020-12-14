import React, { Component } from 'react';
import { CommentProvider } from '../contexts/CommentProvider';
import CommentList from '../CommentList/CommentList';
import CommentCreator from '../CommentCreator/CommentCreator';

class App extends Component {
  render() {
    return (
      <CommentProvider>
        <CommentList />
        <CommentCreator />
      </CommentProvider>
    );
  }
}

export default App;
