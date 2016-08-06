import React from 'react';
import ReactDOM from 'react-dom';
import TwitterTimeline from '../lib/TwitterTimeline';

class App extends React.Component {
  render() {
    return (
      <TwitterTimeline widgetId="695868534455275520"/>
    );
  }
}

ReactDOM.render(
  <App />,
  document.getElementById('content')
);
