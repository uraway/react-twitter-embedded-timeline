# react-twitter-embedded-timeline

Simple React component for Twitter Embedded Timeline

## Install

```shell
npm install --save react-twitter-embedded-timeline
```

## Example

![](http://i.imgur.com/jwu7yuK.png)

```javascript
import React from 'react';
import ReactDOM from 'react-dom';
import TwitterTimeline from 'react-twitter-embedded-timeline';

ReactDOM.render(
  <TwitterTimeline widgetId="695868534455275520" chrome="noborders noheader" />,
  document.getElementById('app')
);
```

## Required props

|Option    |Description                                                            |
|---       |---                                                                    |
|`widgetId`| Create a widget [here](https://dev.twitter.com/web/embedded-timelines)|

get the widget ID (e.g.  `<a data-widget-id="`**your widget ID**`">****</a>`)

## Optional props

You can highly customize the Timeline only if you set `widgetId`.

|Option  |Description                                                       |
|---     |---                                                               |
|`chrome`| `noheader`, `nofooter`, `noborders`, `noscrollbar`, `transparent`|
|`limit` | Display a specific number of items between 1 and 20              |
|`user`  | Your username on Twitter                                          |

---

MIT licensed
