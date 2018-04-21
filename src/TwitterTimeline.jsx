/* global twttr */

import React, { Component } from 'react';
import PropTypes from 'prop-types';

export default class TwitterTimeline extends Component {
  static propTypes = {
    widgetId: PropTypes.string,
    user: PropTypes.string,
    chrome: PropTypes.string,
    limit: PropTypes.number,
    width: PropTypes.number,
    height: PropTypes.number,
    loading: PropTypes.node,
  };

  static defaultProps = {
    widgetId: '',
    user: '',
    chrome: '',
    limit: null,
    width: null,
    height: null,
    loading: null
  };

  constructor(props) {
    super(props);
    this.state = ({ initialized: false });
  }

  componentDidMount() {
    if (this.state.initialized) {
      return;
    }

    if (typeof twttr === 'undefined') {
      const twittertimeline = this.node;
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
    const {
      user, widgetId, chrome, limit, width, height, loading
    } = this.props;
    console.log(loading);
    return (
      <a
        ref={node => this.node = node}
        className="twitter-timeline"
        href={`https://twitter.com/${user}`}
        data-widget-id={widgetId}
        data-chrome={chrome}
        data-tweet-limit={limit}
        data-width={width}
        data-height={height}
      >
        {loading || (`Tweets by @${user}`)}
      </a>
    );
  }
}

exports.modules = TwitterTimeline;
