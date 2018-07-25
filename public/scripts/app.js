'use strict';

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _reactDom = require('react-dom');

var _reactDom2 = _interopRequireDefault(_reactDom);

var _Homepage = require('./components/Homepage');

var _Homepage2 = _interopRequireDefault(_Homepage);

require('normalize.css/normalize.css');

require('./styles/styles.scss');

require('./firebase/firebase.js');

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

_reactDom2.default.render(_react2.default.createElement(_Homepage2.default, null), document.getElementById('app'));
