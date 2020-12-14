import React, { Component } from 'react';
import { CommentProvider } from '../contexts/CommentProvider';
import CommentList from '../CommentList/CommentList';

class App extends Component {
  render() {
    return (
      <CommentProvider>
        <CommentList />
      </CommentProvider>
    );
  }
}

export default App;
