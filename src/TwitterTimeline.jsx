import React from 'react';
import ReactDOM from 'react-dom';

export default class TwitterTimeline extends React.Component {
  constructor(props) {
    super(props);
    this.state = ({ initialized: false });
  }

  componentDidMount() {
    if (this.state.initialized) {
      return;
    }

    if (typeof twttr === 'undefined') {
      const twittertimeline = ReactDOM.findDOMNode(this.refs.twittertimeline);
      const twitterscript = document.createElement('script');
      twitterscript.src = '//platform.twitter.com/widgets.js';
      twitterscript.async = true;
      twitterscript.id = 'twitter-wjs';
      twittertimeline.parentNode.appendChild(twitterscript);
    } else {
      twttr.widgets.load();
    }

    this.initialized();
  }

  initialized() {
    this.setState({ initialized: true });
  }

  render() {
    return (
      <a
        ref="twittertimeline"
        className="twitter-timeline"
        href={"https://twitter.com/" + this.props.user}
        data-widget-id={this.props.widgetId}
        data-chrome={this.props.chrome}
        data-tweet-limit={this.props.limit}
      ></a>
    );
  }
}
/*
<a class="twitter-timeline" href="https://twitter.com/hashtag/corgi" data-widget-id="695856236961492993">#corgi のツイート</a>
<script>!function(d,s,id){var js,fjs=d.getElementsByTagName(s)[0],p=/^http:/.test(d.location)?'http':'https';if(!d.getElementById(id)){js=d.createElement(s);js.id=id;js.src=p+"://platform.twitter.com/widgets.js";fjs.parentNode.insertBefore(js,fjs);}}(document,"script","twitter-wjs");</script>
*/
