import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import TwitterTimeline from '../lib/TwitterTimeline';

class App extends Component {
  render() {
    return (
      <div>
        <TwitterTimeline user="uraway_" />
        <TwitterTimeline widgetId="695868534455275520" chrom="noborders noheader" />
      </div>
    );
  }
}

ReactDOM.render(<App />, document.getElementById('app'));
