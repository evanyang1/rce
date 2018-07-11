'use strict';

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

// Homepage is the parent component.
var Homepage = function (_React$Component) {
  _inherits(Homepage, _React$Component);

  function Homepage() {
    _classCallCheck(this, Homepage);

    return _possibleConstructorReturn(this, (Homepage.__proto__ || Object.getPrototypeOf(Homepage)).apply(this, arguments));
  }

  _createClass(Homepage, [{
    key: 'render',
    value: function render() {
      return React.createElement(
        'div',
        null,
        React.createElement(Logo, null),
        React.createElement(Login, null)
      );
    }
  }]);

  return Homepage;
}(React.Component);

// Component: Logo for the website.


var Logo = function (_React$Component2) {
  _inherits(Logo, _React$Component2);

  function Logo() {
    _classCallCheck(this, Logo);

    return _possibleConstructorReturn(this, (Logo.__proto__ || Object.getPrototypeOf(Logo)).apply(this, arguments));
  }

  _createClass(Logo, [{
    key: 'render',
    value: function render() {
      return React.createElement(
        'h1',
        null,
        ' RCE '
      );
    }
  }]);

  return Logo;
}(React.Component);

// Login Button.


var Login = function (_React$Component3) {
  _inherits(Login, _React$Component3);

  function Login() {
    _classCallCheck(this, Login);

    return _possibleConstructorReturn(this, (Login.__proto__ || Object.getPrototypeOf(Login)).apply(this, arguments));
  }

  _createClass(Login, [{
    key: 'render',
    value: function render() {
      return React.createElement(
        'button',
        null,
        ' Log In '
      );
    }
  }]);

  return Login;
}(React.Component);

ReactDOM.render(React.createElement(Homepage, null), document.getElementById('app'));
