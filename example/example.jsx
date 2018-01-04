import React from 'react';
import ReactDOM from 'react-dom';
import TwitterTimeline from 'react-twitter-embedded-timeline';

ReactDOM.render(
  <TwitterTimeline widgetId="695868534455275520" chrome="noborders noheader" />,
  document.getElementById('app')
);
