import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import TwitterTimeline from 'react-twitter-embedded-timeline';

class App extends Component {
  render() {
    return (
      <div>
        <TwitterTimeline user="uraway_" />
        <TwitterTimeline widgetId="695868534455275520" chrome="noborders noheader" />
      </div>
    );
  }
}

ReactDOM.render(<App />, document.getElementById('app'));
