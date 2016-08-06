import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import TwitterTimeline from '../lib/TwitterTimeline';

class App extends Component {
  render() {
    return (
      <TwitterTimeline user="uraway_" />
    );
  }
}

ReactDOM.render(<App />, document.getElementById('root'));
