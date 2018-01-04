'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _reactDom = require('react-dom');

var _reactDom2 = _interopRequireDefault(_reactDom);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; } /* global twttr */

var TwitterTimeline = function (_Component) {
  _inherits(TwitterTimeline, _Component);

  function TwitterTimeline(props) {
    _classCallCheck(this, TwitterTimeline);

    var _this = _possibleConstructorReturn(this, (TwitterTimeline.__proto__ || Object.getPrototypeOf(TwitterTimeline)).call(this, props));

    _this.state = { initialized: false };
    return _this;
  }

  _createClass(TwitterTimeline, [{
    key: 'componentDidMount',
    value: function componentDidMount() {
      if (this.state.initialized) {
        return;
      }

      if (typeof twttr === 'undefined') {
        var twittertimeline = _reactDom2.default.findDOMNode(this.refs.twittertimeline);
        var twitterscript = document.createElement('script');
        twitterscript.src = '//platform.twitter.com/widgets.js';
        twitterscript.async = true;
        twitterscript.id = 'twitter-wjs';
        twittertimeline.parentNode.appendChild(twitterscript);
      } else {
        twttr.widgets.load();
      }

      this.initialized();
    }
  }, {
    key: 'initialized',
    value: function initialized() {
      this.setState({ initialized: true });
    }
  }, {
    key: 'render',
    value: function render() {
      var _props = this.props,
          user = _props.user,
          widgetId = _props.widgetId,
          chrome = _props.chrome,
          limit = _props.limit;

      return _react2.default.createElement('a', {
        ref: 'twittertimeline',
        className: 'twitter-timeline',
        href: 'https://twitter.com/' + user,
        'data-widget-id': widgetId,
        'data-chrome': chrome,
        'data-tweet-limit': limit
      });
    }
  }]);

  return TwitterTimeline;
}(_react.Component);

TwitterTimeline.propTypes = {
  widgetId: _react.PropTypes.string,
  user: _react.PropTypes.string,
  chrome: _react.PropTypes.string,
  limit: _react.PropTypes.number
};
exports.default = TwitterTimeline;

exports.modules = TwitterTimeline;