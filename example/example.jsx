import React from 'react';
import ReactDOM from 'react-dom';
import TwitterTimeline from '../src/TwitterTimeline';

ReactDOM.render(
  <div>
    <TwitterTimeline user="uraway_" />
    <TwitterTimeline widgetId="695868534455275520" chrome="noborders noheader" />
  </div>,
  document.getElementById('app')
);
