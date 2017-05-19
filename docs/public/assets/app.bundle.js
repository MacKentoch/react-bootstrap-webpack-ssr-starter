webpackJsonp([1],{

/***/ 0:
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	var _react = __webpack_require__(1);
	
	var _react2 = _interopRequireDefault(_react);
	
	var _reactDom = __webpack_require__(32);
	
	var _reactTapEventPlugin = __webpack_require__(472);
	
	var _reactTapEventPlugin2 = _interopRequireDefault(_reactTapEventPlugin);
	
	var _reactHotLoader = __webpack_require__(453);
	
	var _Root = __webpack_require__(494);
	
	var _Root2 = _interopRequireDefault(_Root);
	
	var _Routes = __webpack_require__(508);
	
	var _Routes2 = _interopRequireDefault(_Routes);
	
	__webpack_require__(246);
	
	__webpack_require__(757);
	
	__webpack_require__(136);
	
	__webpack_require__(759);
	
	__webpack_require__(758);
	
	__webpack_require__(249);
	
	__webpack_require__(760);
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
	
	var ELEMENT_TO_BOOTSTRAP = 'root'; //  weak
	
	var BootstrapedElement = document.getElementById(ELEMENT_TO_BOOTSTRAP);
	
	(0, _reactTapEventPlugin2.default)();
	
	var renderApp = function renderApp(appRoutes) {
	  (0, _reactDom.render)(_react2.default.createElement(
	    _reactHotLoader.AppContainer,
	    null,
	    _react2.default.createElement(_Root2.default, { routes: appRoutes })
	  ), BootstrapedElement);
	};
	
	renderApp(_Routes2.default);
	
	if (false) {
	  module.hot.accept('./routes/Routes', function () {
	    var newRoutes = require('./routes/Routes').default;
	    renderApp(newRoutes);
	  });
	}
	;
	
	var _temp = function () {
	  if (typeof __REACT_HOT_LOADER__ === 'undefined') {
	    return;
	  }
	
	  __REACT_HOT_LOADER__.register(ELEMENT_TO_BOOTSTRAP, 'ELEMENT_TO_BOOTSTRAP', '/Users/kentor/GitProjects/react-bootstrap-webpack-ssr-starter/src/app/index.js');
	
	  __REACT_HOT_LOADER__.register(BootstrapedElement, 'BootstrapedElement', '/Users/kentor/GitProjects/react-bootstrap-webpack-ssr-starter/src/app/index.js');
	
	  __REACT_HOT_LOADER__.register(renderApp, 'renderApp', '/Users/kentor/GitProjects/react-bootstrap-webpack-ssr-starter/src/app/index.js');
	}();

	;

/***/ },

/***/ 245:
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	exports.BackToTop = exports.NavigationBar = exports.Jumbotron = undefined;
	
	var _Jumbotron = __webpack_require__(500);
	
	var _Jumbotron2 = _interopRequireDefault(_Jumbotron);
	
	var _NavigationBar = __webpack_require__(501);
	
	var _NavigationBar2 = _interopRequireDefault(_NavigationBar);
	
	var _BackToTop = __webpack_require__(496);
	
	var _BackToTop2 = _interopRequireDefault(_BackToTop);
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
	
	exports.Jumbotron = _Jumbotron2.default;
	exports.NavigationBar = _NavigationBar2.default;
	exports.BackToTop = _BackToTop2.default; //  weak
	
	;

	var _temp = function () {
	  if (typeof __REACT_HOT_LOADER__ === 'undefined') {
	    return;
	  }
	}();

	;

/***/ },

/***/ 494:
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	
	var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();
	
	var _react = __webpack_require__(1);
	
	var _react2 = _interopRequireDefault(_react);
	
	var _reactRouter = __webpack_require__(104);
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
	
	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }
	
	function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }
	
	function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; } //  weak
	
	var Root = function (_Component) {
	  _inherits(Root, _Component);
	
	  function Root() {
	    _classCallCheck(this, Root);
	
	    return _possibleConstructorReturn(this, (Root.__proto__ || Object.getPrototypeOf(Root)).apply(this, arguments));
	  }
	
	  _createClass(Root, [{
	    key: 'render',
	    value: function render() {
	      var routes = this.props.routes;
	
	      return _react2.default.createElement(
	        _reactRouter.Router,
	        { history: _reactRouter.browserHistory },
	        routes()
	      );
	    }
	  }]);
	
	  return Root;
	}(_react.Component);
	
	Root.propTypes = {
	  routes: _react.PropTypes.any
	};
	var _default = Root;
	exports.default = _default;
	;
	
	var _temp = function () {
	  if (typeof __REACT_HOT_LOADER__ === 'undefined') {
	    return;
	  }
	
	  __REACT_HOT_LOADER__.register(Root, 'Root', '/Users/kentor/GitProjects/react-bootstrap-webpack-ssr-starter/src/app/Root.js');
	
	  __REACT_HOT_LOADER__.register(_default, 'default', '/Users/kentor/GitProjects/react-bootstrap-webpack-ssr-starter/src/app/Root.js');
	}();

	;

/***/ },

/***/ 495:
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	
	var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();
	
	var _react = __webpack_require__(1);
	
	var _react2 = _interopRequireDefault(_react);
	
	var _classnames = __webpack_require__(9);
	
	var _classnames2 = _interopRequireDefault(_classnames);
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
	
	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }
	
	function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }
	
	function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; } //  weak
	
	var ANIMATION_DELAY_MS = 500;
	
	var AnimatedView = function (_PureComponent) {
	  _inherits(AnimatedView, _PureComponent);
	
	  function AnimatedView() {
	    var _ref;
	
	    var _temp, _this, _ret;
	
	    _classCallCheck(this, AnimatedView);
	
	    for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
	      args[_key] = arguments[_key];
	    }
	
	    return _ret = (_temp = (_this = _possibleConstructorReturn(this, (_ref = AnimatedView.__proto__ || Object.getPrototypeOf(AnimatedView)).call.apply(_ref, [this].concat(args))), _this), _this.enterAnimationTimer = null, _this.state = {
	      animated: true,
	      viewEnters: false
	    }, _temp), _possibleConstructorReturn(_this, _ret);
	  }
	
	  _createClass(AnimatedView, [{
	    key: 'componentDidMount',
	    value: function componentDidMount() {
	      var _this2 = this;
	
	      var delay = this.props.delay;
	
	
	      this.enterAnimationTimer = setTimeout(function () {
	        return _this2.setState({ viewEnters: true });
	      }, delay);
	    }
	  }, {
	    key: 'componentWillUnmount',
	    value: function componentWillUnmount() {
	      clearTimeout(this.enterAnimationTimer);
	    }
	  }, {
	    key: 'render',
	    value: function render() {
	      var _state = this.state,
	          animated = _state.animated,
	          viewEnters = _state.viewEnters;
	      var children = this.props.children;
	
	
	      return _react2.default.createElement(
	        'section',
	        {
	          className: (0, _classnames2.default)({
	            'content': true,
	            'invisible': !viewEnters && animated,
	            'view-enter': viewEnters && animated
	          }) },
	        children
	      );
	    }
	  }]);
	
	  return AnimatedView;
	}(_react.PureComponent);
	
	AnimatedView.propTypes = {
	  children: _react.PropTypes.node,
	  delay: _react.PropTypes.number
	};
	AnimatedView.defaultProps = {
	  delay: ANIMATION_DELAY_MS
	};
	var _default = AnimatedView;
	exports.default = _default;
	;
	
	var _temp2 = function () {
	  if (typeof __REACT_HOT_LOADER__ === 'undefined') {
	    return;
	  }
	
	  __REACT_HOT_LOADER__.register(ANIMATION_DELAY_MS, 'ANIMATION_DELAY_MS', '/Users/kentor/GitProjects/react-bootstrap-webpack-ssr-starter/src/app/components/animatedView/AnimatedView.js');
	
	  __REACT_HOT_LOADER__.register(AnimatedView, 'AnimatedView', '/Users/kentor/GitProjects/react-bootstrap-webpack-ssr-starter/src/app/components/animatedView/AnimatedView.js');
	
	  __REACT_HOT_LOADER__.register(_default, 'default', '/Users/kentor/GitProjects/react-bootstrap-webpack-ssr-starter/src/app/components/animatedView/AnimatedView.js');
	}();

	;

/***/ },

/***/ 496:
/***/ function(module, exports, __webpack_require__) {

	/* WEBPACK VAR INJECTION */(function($) {'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	
	var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();
	
	var _react = __webpack_require__(1);
	
	var _react2 = _interopRequireDefault(_react);
	
	var _smoothScroll = __webpack_require__(499);
	
	var _BackToTopButton = __webpack_require__(497);
	
	var _BackToTopButton2 = _interopRequireDefault(_BackToTopButton);
	
	var _reactMotion = __webpack_require__(455);
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
	
	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }
	
	function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }
	
	function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; } /* global $:true */
	//  weak
	
	var BackToTop = function (_Component) {
	  _inherits(BackToTop, _Component);
	
	  function BackToTop() {
	    var _ref;
	
	    var _temp, _this, _ret;
	
	    _classCallCheck(this, BackToTop);
	
	    for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
	      args[_key] = arguments[_key];
	    }
	
	    return _ret = (_temp = (_this = _possibleConstructorReturn(this, (_ref = BackToTop.__proto__ || Object.getPrototypeOf(BackToTop)).call.apply(_ref, [this].concat(args))), _this), _this.defaultProps = {
	      minScrollY: 120
	    }, _this.state = {
	      windowScrollY: 0,
	      showBackButton: false
	    }, _this.handleWindowScroll = function () {
	      var _this2;
	
	      return (_this2 = _this).__handleWindowScroll__REACT_HOT_LOADER__.apply(_this2, arguments);
	    }, _this.scrollDone = function () {
	      var _this3;
	
	      return (_this3 = _this).__scrollDone__REACT_HOT_LOADER__.apply(_this3, arguments);
	    }, _this.handlesOnBackButtonClick = function () {
	      var _this4;
	
	      return (_this4 = _this).__handlesOnBackButtonClick__REACT_HOT_LOADER__.apply(_this4, arguments);
	    }, _temp), _possibleConstructorReturn(_this, _ret);
	  }
	
	  _createClass(BackToTop, [{
	    key: 'componentWillMount',
	    value: function componentWillMount() {
	      window.addEventListener('scroll', this.handleWindowScroll);
	    }
	  }, {
	    key: 'componentWillUnmount',
	    value: function componentWillUnmount() {
	      window.removeEventListener('scroll', this.handleWindowScroll);
	    }
	  }, {
	    key: 'render',
	    value: function render() {
	      var _this5 = this;
	
	      var showBackButton = this.state.showBackButton;
	
	      return _react2.default.createElement(
	        _reactMotion.Motion,
	        { style: { x: (0, _reactMotion.spring)(showBackButton ? 0 : 120) } },
	        function (_ref2) {
	          var x = _ref2.x;
	          return _react2.default.createElement(_BackToTopButton2.default, {
	            position: 'bottom-right',
	            onClick: _this5.handlesOnBackButtonClick,
	            motionStyle: {
	              WebkitTransform: 'translate3d(' + x + 'px, 0, 0)',
	              transform: 'translate3d(' + x + 'px, 0, 0)'
	            }
	          });
	        }
	      );
	    }
	  }, {
	    key: '__handleWindowScroll__REACT_HOT_LOADER__',
	    value: function __handleWindowScroll__REACT_HOT_LOADER__() {
	      if ($) {
	        var windowScrollY = this.state.windowScrollY;
	        var minScrollY = this.props.minScrollY;
	
	        var currentWindowScrollY = $(window).scrollTop();
	
	        if (windowScrollY !== currentWindowScrollY) {
	          // console.log('scrollTop: ', currentWindowScrollY);
	          var shouldShowBackButton = currentWindowScrollY >= minScrollY ? true : false;
	
	          this.setState({
	            windowScrollY: currentWindowScrollY,
	            showBackButton: shouldShowBackButton
	          });
	        }
	      } else {
	        /* eslint-disable no-throw-literal*/
	        throw 'BackToTop component requires jQuery';
	        /* eslint-enable no-throw-literal*/
	      }
	    }
	  }, {
	    key: '__scrollDone__REACT_HOT_LOADER__',
	    value: function __scrollDone__REACT_HOT_LOADER__() {
	      var onScrollDone = this.props.onScrollDone;
	
	      if (onScrollDone) {
	        onScrollDone();
	      }
	    }
	  }, {
	    key: '__handlesOnBackButtonClick__REACT_HOT_LOADER__',
	    value: function __handlesOnBackButtonClick__REACT_HOT_LOADER__(event) {
	      event.preventDefault();
	      var _props = this.props,
	          scrollTo = _props.scrollTo,
	          minScrollY = _props.minScrollY;
	      var windowScrollY = this.state.windowScrollY;
	
	
	      if (windowScrollY && windowScrollY > minScrollY) {
	        _smoothScroll.smoothScroll.scrollTo(scrollTo, this.scrollDone);
	      }
	    }
	  }]);
	
	  return BackToTop;
	}(_react.Component);
	
	BackToTop.propTypes = {
	  minScrollY: _react.PropTypes.number,
	  scrollTo: _react.PropTypes.string.isRequired,
	  onScrollDone: _react.PropTypes.func
	};
	var _default = BackToTop;
	exports.default = _default;
	;
	
	var _temp2 = function () {
	  if (typeof __REACT_HOT_LOADER__ === 'undefined') {
	    return;
	  }
	
	  __REACT_HOT_LOADER__.register(BackToTop, 'BackToTop', '/Users/kentor/GitProjects/react-bootstrap-webpack-ssr-starter/src/app/components/backToTop/BackToTop.js');
	
	  __REACT_HOT_LOADER__.register(_default, 'default', '/Users/kentor/GitProjects/react-bootstrap-webpack-ssr-starter/src/app/components/backToTop/BackToTop.js');
	}();

	;
	/* WEBPACK VAR INJECTION */}.call(exports, __webpack_require__(136)))

/***/ },

/***/ 497:
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	
	var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; //  weak
	
	var _react = __webpack_require__(1);
	
	var _react2 = _interopRequireDefault(_react);
	
	var _classnames = __webpack_require__(9);
	
	var _classnames2 = _interopRequireDefault(_classnames);
	
	var _UpIcon = __webpack_require__(498);
	
	var _UpIcon2 = _interopRequireDefault(_UpIcon);
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
	
	var defaultBackGroundColor = '#4A4A4A';
	var sideOffset = '-10px';
	var bottomOffset = '40px';
	var defaultWidth = '100px';
	var defaultZindex = 10;
	var defaultOpacity = 0.5;
	var defaultStyle = {
	  position: 'fixed',
	  right: sideOffset,
	  left: '',
	  bottom: bottomOffset,
	  width: defaultWidth,
	  zIndex: defaultZindex,
	  opacity: defaultOpacity,
	  backgroundColor: defaultBackGroundColor
	};
	
	var BackToTopButton = function BackToTopButton(_ref) {
	  var onClick = _ref.onClick,
	      position = _ref.position,
	      children = _ref.children,
	      motionStyle = _ref.motionStyle;
	
	  var buttonStyle = setPosition(position, _extends({}, motionStyle, defaultStyle));
	
	  return _react2.default.createElement(
	    'button',
	    {
	      style: buttonStyle,
	      className: (0, _classnames2.default)({
	        'btn': true
	      }),
	      onClick: onClick },
	    !children && _react2.default.createElement(
	      'div',
	      { style: { marginRight: '10px' } },
	      _react2.default.createElement(_UpIcon2.default, { color: '#F1F1F1' })
	    ),
	    !!children && children
	  );
	};
	
	BackToTopButton.propTypes = {
	  position: _react.PropTypes.oneOf(['bottom-left', 'bottom-right']),
	  onClick: _react.PropTypes.func.isRequired,
	  children: _react.PropTypes.node,
	  motionStyle: _react.PropTypes.object
	};
	
	BackToTopButton.defaultProps = {
	  position: 'bottom-right'
	};
	
	function setPosition() {
	  var position = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : 'bottom-right';
	  var refStyle = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : defaultStyle;
	
	  var style = _extends({}, refStyle);
	
	  switch (position) {
	    case 'bottom-right':
	      style.right = sideOffset;
	      style.left = '';
	      return style;
	
	    case 'bottom-left':
	      style.right = '';
	      style.left = sideOffset;
	      return style;
	
	    default:
	      return refStyle;
	  }
	}
	
	var _default = BackToTopButton;
	exports.default = _default;
	;
	
	var _temp = function () {
	  if (typeof __REACT_HOT_LOADER__ === 'undefined') {
	    return;
	  }
	
	  __REACT_HOT_LOADER__.register(defaultBackGroundColor, 'defaultBackGroundColor', '/Users/kentor/GitProjects/react-bootstrap-webpack-ssr-starter/src/app/components/backToTop/backToTopButton/BackToTopButton.js');
	
	  __REACT_HOT_LOADER__.register(sideOffset, 'sideOffset', '/Users/kentor/GitProjects/react-bootstrap-webpack-ssr-starter/src/app/components/backToTop/backToTopButton/BackToTopButton.js');
	
	  __REACT_HOT_LOADER__.register(bottomOffset, 'bottomOffset', '/Users/kentor/GitProjects/react-bootstrap-webpack-ssr-starter/src/app/components/backToTop/backToTopButton/BackToTopButton.js');
	
	  __REACT_HOT_LOADER__.register(defaultWidth, 'defaultWidth', '/Users/kentor/GitProjects/react-bootstrap-webpack-ssr-starter/src/app/components/backToTop/backToTopButton/BackToTopButton.js');
	
	  __REACT_HOT_LOADER__.register(defaultZindex, 'defaultZindex', '/Users/kentor/GitProjects/react-bootstrap-webpack-ssr-starter/src/app/components/backToTop/backToTopButton/BackToTopButton.js');
	
	  __REACT_HOT_LOADER__.register(defaultOpacity, 'defaultOpacity', '/Users/kentor/GitProjects/react-bootstrap-webpack-ssr-starter/src/app/components/backToTop/backToTopButton/BackToTopButton.js');
	
	  __REACT_HOT_LOADER__.register(defaultStyle, 'defaultStyle', '/Users/kentor/GitProjects/react-bootstrap-webpack-ssr-starter/src/app/components/backToTop/backToTopButton/BackToTopButton.js');
	
	  __REACT_HOT_LOADER__.register(BackToTopButton, 'BackToTopButton', '/Users/kentor/GitProjects/react-bootstrap-webpack-ssr-starter/src/app/components/backToTop/backToTopButton/BackToTopButton.js');
	
	  __REACT_HOT_LOADER__.register(setPosition, 'setPosition', '/Users/kentor/GitProjects/react-bootstrap-webpack-ssr-starter/src/app/components/backToTop/backToTopButton/BackToTopButton.js');
	
	  __REACT_HOT_LOADER__.register(_default, 'default', '/Users/kentor/GitProjects/react-bootstrap-webpack-ssr-starter/src/app/components/backToTop/backToTopButton/BackToTopButton.js');
	}();

	;

/***/ },

/***/ 498:
/***/ function(module, exports, __webpack_require__) {

	"use strict";
	
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	
	var _react = __webpack_require__(1);
	
	var _react2 = _interopRequireDefault(_react);
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
	
	var UpIcon = function UpIcon(_ref) {
	  var color = _ref.color;
	
	  return _react2.default.createElement(
	    "svg",
	    {
	      width: "24px",
	      height: "24px",
	      viewBox: "0 0 512 512",
	      fill: "" + color },
	    _react2.default.createElement("path", { d: "M256,213.7L256,213.7L256,213.7l174.2,167.2c4.3,4.2,11.4,4.1,15.8-0.2l30.6-29.9c4.4-4.3,4.5-11.3,0.2-15.5L264.1,131.1 c-2.2-2.2-5.2-3.2-8.1-3c-3-0.1-5.9,0.9-8.1,3L35.2,335.3c-4.3,4.2-4.2,11.2,0.2,15.5L66,380.7c4.4,4.3,11.5,4.4,15.8,0.2L256,213.7z" })
	  );
	}; //  weak
	
	UpIcon.propTypes = {
	  color: _react.PropTypes.string
	};
	
	UpIcon.defaultProps = {
	  color: '#F1F1F1'
	};
	
	var _default = UpIcon;
	exports.default = _default;
	;
	
	var _temp = function () {
	  if (typeof __REACT_HOT_LOADER__ === 'undefined') {
	    return;
	  }
	
	  __REACT_HOT_LOADER__.register(UpIcon, "UpIcon", "/Users/kentor/GitProjects/react-bootstrap-webpack-ssr-starter/src/app/components/backToTop/backToTopButton/UpIcon.js");
	
	  __REACT_HOT_LOADER__.register(_default, "default", "/Users/kentor/GitProjects/react-bootstrap-webpack-ssr-starter/src/app/components/backToTop/backToTopButton/UpIcon.js");
	}();

	;

/***/ },

/***/ 499:
/***/ function(module, exports) {

	"use strict";
	
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	var smoothScroll = exports.smoothScroll = {
	  timer: null,
	
	  stop: function stop() {
	    clearTimeout(this.timer);
	  },
	  scrollTo: function scrollTo(id, callback) {
	    var settings = {
	      duration: 1000,
	      easing: {
	        outQuint: function outQuint(x, t, b, c, d) {
	          /* eslint-disable no-param-reassign*/
	          return c * ((t = t / d - 1) * t * t * t * t + 1) + b;
	          /* eslint-enable no-param-reassign*/
	        }
	      }
	    };
	    var percentage = void 0;
	    var node = document.getElementById(id);
	    var nodeTop = node.offsetTop;
	    var nodeHeight = node.offsetHeight;
	    var body = document.body;
	    var html = document.documentElement;
	    var height = Math.max(body.scrollHeight, body.offsetHeight, html.clientHeight, html.scrollHeight, html.offsetHeight);
	    var windowHeight = window.innerHeight;
	    var offset = window.pageYOffset;
	    var delta = nodeTop - offset;
	    var bottomScrollableY = height - windowHeight;
	    var targetY = bottomScrollableY < delta ? bottomScrollableY - (height - nodeTop - nodeHeight + offset) : delta;
	
	    var startTime = Date.now();
	    percentage = 0;
	
	    if (this.timer) {
	      clearInterval(this.timer);
	    }
	
	    function step() {
	      var yScroll = void 0;
	      var elapsed = Date.now() - startTime;
	
	      if (elapsed > settings.duration) {
	        clearTimeout(this.timer);
	      }
	
	      percentage = elapsed / settings.duration;
	
	      if (percentage > 1) {
	        clearTimeout(this.timer);
	
	        if (callback) {
	          callback();
	        }
	      } else {
	        yScroll = settings.easing.outQuint(0, elapsed, offset, targetY, settings.duration);
	        window.scrollTo(0, yScroll);
	        this.timer = setTimeout(step, 10);
	      }
	    }
	
	    this.timer = setTimeout(step, 10);
	  }
	};
	;
	
	var _temp = function () {
	  if (typeof __REACT_HOT_LOADER__ === 'undefined') {
	    return;
	  }
	
	  __REACT_HOT_LOADER__.register(smoothScroll, "smoothScroll", "/Users/kentor/GitProjects/react-bootstrap-webpack-ssr-starter/src/app/components/backToTop/lib/smoothScroll.js");
	}();

	;

/***/ },

/***/ 500:
/***/ function(module, exports, __webpack_require__) {

	"use strict";
	
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	
	var _react = __webpack_require__(1);
	
	var _react2 = _interopRequireDefault(_react);
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
	
	var Jumbotron = function Jumbotron(props) {
	  return _react2.default.createElement(
	    "div",
	    { className: "jumbotron" },
	    props.children
	  );
	}; //  weak
	
	Jumbotron.propTypes = {
	  children: _react.PropTypes.node
	};
	
	var _default = Jumbotron;
	exports.default = _default;
	;
	
	var _temp = function () {
	  if (typeof __REACT_HOT_LOADER__ === 'undefined') {
	    return;
	  }
	
	  __REACT_HOT_LOADER__.register(Jumbotron, "Jumbotron", "/Users/kentor/GitProjects/react-bootstrap-webpack-ssr-starter/src/app/components/jumbotron/Jumbotron.js");
	
	  __REACT_HOT_LOADER__.register(_default, "default", "/Users/kentor/GitProjects/react-bootstrap-webpack-ssr-starter/src/app/components/jumbotron/Jumbotron.js");
	}();

	;

/***/ },

/***/ 501:
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	
	var _react = __webpack_require__(1);
	
	var _react2 = _interopRequireDefault(_react);
	
	var _Humburger = __webpack_require__(502);
	
	var _Humburger2 = _interopRequireDefault(_Humburger);
	
	var _LeftNav = __webpack_require__(503);
	
	var _LeftNav2 = _interopRequireDefault(_LeftNav);
	
	var _RightNav = __webpack_require__(505);
	
	var _RightNav2 = _interopRequireDefault(_RightNav);
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
	
	//  weak
	
	var NavigationBar = function NavigationBar(_ref) {
	  var brand = _ref.brand,
	      navModel = _ref.navModel,
	      handleLeftNavItemClick = _ref.handleLeftNavItemClick,
	      handleRightNavItemClick = _ref.handleRightNavItemClick;
	
	  return _react2.default.createElement(
	    'nav',
	    { className: 'navbar navbar-default' },
	    _react2.default.createElement(
	      'div',
	      { className: 'containersCustom' },
	      _react2.default.createElement(
	        'div',
	        { className: 'navbar-header' },
	        _react2.default.createElement(_Humburger2.default, null),
	        _react2.default.createElement(
	          'a',
	          { className: 'navbar-brand' },
	          brand
	        )
	      ),
	      _react2.default.createElement(
	        'div',
	        {
	          className: 'collapse navbar-collapse',
	          id: 'bs-example-navbar-collapse-1' },
	        _react2.default.createElement(
	          'ul',
	          { className: 'nav navbar-nav' },
	          _react2.default.createElement(_LeftNav2.default, {
	            leftLinks: navModel.leftLinks,
	            onLeftNavButtonClick: handleLeftNavItemClick
	          })
	        ),
	        _react2.default.createElement(
	          'ul',
	          { className: 'nav navbar-nav navbar-right' },
	          _react2.default.createElement(_RightNav2.default, {
	            rightLinks: navModel.rightLinks,
	            onRightNavButtonClick: handleRightNavItemClick
	          })
	        )
	      )
	    )
	  );
	};
	
	NavigationBar.propTypes = {
	  brand: _react.PropTypes.string,
	  handleLeftNavItemClick: _react.PropTypes.func,
	  handleRightNavItemClick: _react.PropTypes.func,
	  navModel: _react.PropTypes.shape({
	    leftLinks: _react.PropTypes.arrayOf(_react.PropTypes.shape({
	      label: _react.PropTypes.string.isRequired,
	      link: _react.PropTypes.string.isRequired
	    })).isRequired,
	    rightLinks: _react.PropTypes.arrayOf(_react.PropTypes.shape({
	      label: _react.PropTypes.string.isRequired,
	      link: _react.PropTypes.string.isRequired
	    })).isRequired
	  })
	};
	
	NavigationBar.defaultProps = {
	  brand: 'brand'
	};
	
	var _default = NavigationBar;
	exports.default = _default;
	;
	
	var _temp = function () {
	  if (typeof __REACT_HOT_LOADER__ === 'undefined') {
	    return;
	  }
	
	  __REACT_HOT_LOADER__.register(NavigationBar, 'NavigationBar', '/Users/kentor/GitProjects/react-bootstrap-webpack-ssr-starter/src/app/components/navigation/NavigationBar.js');
	
	  __REACT_HOT_LOADER__.register(_default, 'default', '/Users/kentor/GitProjects/react-bootstrap-webpack-ssr-starter/src/app/components/navigation/NavigationBar.js');
	}();

	;

/***/ },

/***/ 502:
/***/ function(module, exports, __webpack_require__) {

	"use strict";
	
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	
	var _react = __webpack_require__(1);
	
	var _react2 = _interopRequireDefault(_react);
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
	
	var Humburger = function Humburger() {
	  return _react2.default.createElement(
	    "button",
	    {
	      className: "navbar-toggle collapsed",
	      type: "button",
	      "data-toggle": "collapse",
	      "data-target": "#bs-example-navbar-collapse-1" },
	    _react2.default.createElement(
	      "span",
	      { className: "sr-only" },
	      "Toggle navigation"
	    ),
	    _react2.default.createElement("span", { className: "icon-bar" }),
	    _react2.default.createElement("span", { className: "icon-bar" }),
	    _react2.default.createElement("span", { className: "icon-bar" })
	  );
	}; //  weak
	
	var _default = Humburger;
	exports.default = _default;
	;
	
	var _temp = function () {
	  if (typeof __REACT_HOT_LOADER__ === 'undefined') {
	    return;
	  }
	
	  __REACT_HOT_LOADER__.register(Humburger, "Humburger", "/Users/kentor/GitProjects/react-bootstrap-webpack-ssr-starter/src/app/components/navigation/humburger/Humburger.js");
	
	  __REACT_HOT_LOADER__.register(_default, "default", "/Users/kentor/GitProjects/react-bootstrap-webpack-ssr-starter/src/app/components/navigation/humburger/Humburger.js");
	}();

	;

/***/ },

/***/ 503:
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	
	var _react = __webpack_require__(1);
	
	var _react2 = _interopRequireDefault(_react);
	
	var _LeftNavButton = __webpack_require__(504);
	
	var _LeftNavButton2 = _interopRequireDefault(_LeftNavButton);
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
	
	//  weak
	
	var LeftNav = function LeftNav(_ref) {
	  var leftLinks = _ref.leftLinks,
	      onLeftNavButtonClick = _ref.onLeftNavButtonClick;
	
	  return _react2.default.createElement(
	    'ul',
	    { className: 'nav navbar-nav' },
	    leftLinks.map(function (aLinkBtn, index) {
	      return _react2.default.createElement(_LeftNavButton2.default, {
	        key: index,
	        link: aLinkBtn.link,
	        label: aLinkBtn.label,
	        viewName: aLinkBtn.view,
	        onClick: onLeftNavButtonClick
	      });
	    })
	  );
	};
	
	LeftNav.propTypes = {
	  leftLinks: _react.PropTypes.arrayOf(_react.PropTypes.shape({
	    link: _react.PropTypes.string,
	    label: _react.PropTypes.string,
	    viewName: _react.PropTypes.string
	  })),
	  onLeftNavButtonClick: _react.PropTypes.func
	};
	
	var _default = LeftNav;
	exports.default = _default;
	;
	
	var _temp = function () {
	  if (typeof __REACT_HOT_LOADER__ === 'undefined') {
	    return;
	  }
	
	  __REACT_HOT_LOADER__.register(LeftNav, 'LeftNav', '/Users/kentor/GitProjects/react-bootstrap-webpack-ssr-starter/src/app/components/navigation/leftNav/LeftNav.js');
	
	  __REACT_HOT_LOADER__.register(_default, 'default', '/Users/kentor/GitProjects/react-bootstrap-webpack-ssr-starter/src/app/components/navigation/leftNav/LeftNav.js');
	}();

	;

/***/ },

/***/ 504:
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	
	var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();
	
	var _react = __webpack_require__(1);
	
	var _react2 = _interopRequireDefault(_react);
	
	var _reactRouter = __webpack_require__(104);
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
	
	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }
	
	function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }
	
	function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; } //  weak
	
	var LeftNavButton = function (_PureComponent) {
	  _inherits(LeftNavButton, _PureComponent);
	
	  function LeftNavButton() {
	    var _ref;
	
	    var _temp, _this, _ret;
	
	    _classCallCheck(this, LeftNavButton);
	
	    for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
	      args[_key] = arguments[_key];
	    }
	
	    return _ret = (_temp = (_this = _possibleConstructorReturn(this, (_ref = LeftNavButton.__proto__ || Object.getPrototypeOf(LeftNavButton)).call.apply(_ref, [this].concat(args))), _this), _this.handleLeftNavItemClick = function () {
	      var _this2;
	
	      return (_this2 = _this).__handleLeftNavItemClick__REACT_HOT_LOADER__.apply(_this2, arguments);
	    }, _temp), _possibleConstructorReturn(_this, _ret);
	  }
	
	  _createClass(LeftNavButton, [{
	    key: 'render',
	    value: function render() {
	      var _props = this.props,
	          link = _props.link,
	          label = _props.label;
	
	      return _react2.default.createElement(
	        'li',
	        null,
	        _react2.default.createElement(
	          _reactRouter.Link,
	          {
	            to: link,
	            onClick: this.handleLeftNavItemClick },
	          label
	        )
	      );
	    }
	  }, {
	    key: '__handleLeftNavItemClick__REACT_HOT_LOADER__',
	    value: function __handleLeftNavItemClick__REACT_HOT_LOADER__(event) {
	      var _props2 = this.props,
	          onClick = _props2.onClick,
	          viewName = _props2.viewName;
	
	      onClick(event, viewName);
	    }
	  }]);
	
	  return LeftNavButton;
	}(_react.PureComponent);
	
	LeftNavButton.propTypes = {
	  link: _react.PropTypes.string,
	  label: _react.PropTypes.string,
	  viewName: _react.PropTypes.string,
	  onClick: _react.PropTypes.func
	};
	var _default = LeftNavButton;
	exports.default = _default;
	;
	
	var _temp2 = function () {
	  if (typeof __REACT_HOT_LOADER__ === 'undefined') {
	    return;
	  }
	
	  __REACT_HOT_LOADER__.register(LeftNavButton, 'LeftNavButton', '/Users/kentor/GitProjects/react-bootstrap-webpack-ssr-starter/src/app/components/navigation/leftNav/leftNavButton/LeftNavButton.js');
	
	  __REACT_HOT_LOADER__.register(_default, 'default', '/Users/kentor/GitProjects/react-bootstrap-webpack-ssr-starter/src/app/components/navigation/leftNav/leftNavButton/LeftNavButton.js');
	}();

	;

/***/ },

/***/ 505:
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	
	var _react = __webpack_require__(1);
	
	var _react2 = _interopRequireDefault(_react);
	
	var _RightNavButton = __webpack_require__(506);
	
	var _RightNavButton2 = _interopRequireDefault(_RightNavButton);
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
	
	//  weak
	
	var RightNav = function RightNav(_ref) {
	  var rightLinks = _ref.rightLinks,
	      onRightNavButtonClick = _ref.onRightNavButtonClick;
	
	  return _react2.default.createElement(
	    'ul',
	    { className: 'nav navbar-nav navbar-right' },
	    rightLinks.map(function (aLinkBtn, index) {
	      return _react2.default.createElement(_RightNavButton2.default, {
	        key: index,
	        link: aLinkBtn.link,
	        label: aLinkBtn.label,
	        viewName: aLinkBtn.view,
	        onClick: onRightNavButtonClick
	      });
	    })
	  );
	};
	
	RightNav.propTypes = {
	  rightLinks: _react.PropTypes.arrayOf(_react.PropTypes.shape({
	    link: _react.PropTypes.string,
	    label: _react.PropTypes.string,
	    viewName: _react.PropTypes.string
	  })),
	  onRightNavButtonClick: _react.PropTypes.func
	};
	
	var _default = RightNav;
	exports.default = _default;
	;
	
	var _temp = function () {
	  if (typeof __REACT_HOT_LOADER__ === 'undefined') {
	    return;
	  }
	
	  __REACT_HOT_LOADER__.register(RightNav, 'RightNav', '/Users/kentor/GitProjects/react-bootstrap-webpack-ssr-starter/src/app/components/navigation/rightNav/RightNav.js');
	
	  __REACT_HOT_LOADER__.register(_default, 'default', '/Users/kentor/GitProjects/react-bootstrap-webpack-ssr-starter/src/app/components/navigation/rightNav/RightNav.js');
	}();

	;

/***/ },

/***/ 506:
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	
	var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();
	
	var _react = __webpack_require__(1);
	
	var _react2 = _interopRequireDefault(_react);
	
	var _reactRouter = __webpack_require__(104);
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
	
	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }
	
	function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }
	
	function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; } //  weak
	
	var RightNavButton = function (_PureComponent) {
	  _inherits(RightNavButton, _PureComponent);
	
	  function RightNavButton() {
	    var _ref;
	
	    var _temp, _this, _ret;
	
	    _classCallCheck(this, RightNavButton);
	
	    for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
	      args[_key] = arguments[_key];
	    }
	
	    return _ret = (_temp = (_this = _possibleConstructorReturn(this, (_ref = RightNavButton.__proto__ || Object.getPrototypeOf(RightNavButton)).call.apply(_ref, [this].concat(args))), _this), _this.handleRightNavItemClick = function () {
	      var _this2;
	
	      return (_this2 = _this).__handleRightNavItemClick__REACT_HOT_LOADER__.apply(_this2, arguments);
	    }, _temp), _possibleConstructorReturn(_this, _ret);
	  }
	
	  _createClass(RightNavButton, [{
	    key: 'render',
	    value: function render() {
	      var _props = this.props,
	          link = _props.link,
	          label = _props.label;
	
	      return _react2.default.createElement(
	        'li',
	        null,
	        _react2.default.createElement(
	          _reactRouter.Link,
	          {
	            to: link,
	            onClick: this.handleRightNavItemClick },
	          label
	        )
	      );
	    }
	  }, {
	    key: '__handleRightNavItemClick__REACT_HOT_LOADER__',
	    value: function __handleRightNavItemClick__REACT_HOT_LOADER__(event) {
	      var _props2 = this.props,
	          onClick = _props2.onClick,
	          viewName = _props2.viewName;
	
	      onClick(event, viewName);
	    }
	  }]);
	
	  return RightNavButton;
	}(_react.PureComponent);
	
	RightNavButton.propTypes = {
	  link: _react.PropTypes.string,
	  label: _react.PropTypes.string,
	  viewName: _react.PropTypes.string,
	  onClick: _react.PropTypes.func
	};
	var _default = RightNavButton;
	exports.default = _default;
	;
	
	var _temp2 = function () {
	  if (typeof __REACT_HOT_LOADER__ === 'undefined') {
	    return;
	  }
	
	  __REACT_HOT_LOADER__.register(RightNavButton, 'RightNavButton', '/Users/kentor/GitProjects/react-bootstrap-webpack-ssr-starter/src/app/components/navigation/rightNav/rightNavButton/RightNavButton.js');
	
	  __REACT_HOT_LOADER__.register(_default, 'default', '/Users/kentor/GitProjects/react-bootstrap-webpack-ssr-starter/src/app/components/navigation/rightNav/rightNavButton/RightNavButton.js');
	}();

	;

/***/ },

/***/ 507:
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	
	var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();
	
	var _react = __webpack_require__(1);
	
	var _react2 = _interopRequireDefault(_react);
	
	var _components = __webpack_require__(245);
	
	var _navigation = __webpack_require__(780);
	
	var _navigation2 = _interopRequireDefault(_navigation);
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
	
	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }
	
	function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }
	
	function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; } //  weak
	
	var App = function (_Component) {
	  _inherits(App, _Component);
	
	  function App() {
	    var _ref;
	
	    var _temp, _this, _ret;
	
	    _classCallCheck(this, App);
	
	    for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
	      args[_key] = arguments[_key];
	    }
	
	    return _ret = (_temp = (_this = _possibleConstructorReturn(this, (_ref = App.__proto__ || Object.getPrototypeOf(App)).call.apply(_ref, [this].concat(args))), _this), _this.state = { navModel: _navigation2.default }, _this.handleLeftNavItemClick = function () {
	      var _this2;
	
	      return (_this2 = _this).__handleLeftNavItemClick__REACT_HOT_LOADER__.apply(_this2, arguments);
	    }, _this.handleRightNavItemClick = function () {
	      var _this3;
	
	      return (_this3 = _this).__handleRightNavItemClick__REACT_HOT_LOADER__.apply(_this3, arguments);
	    }, _temp), _possibleConstructorReturn(_this, _ret);
	  }
	
	  _createClass(App, [{
	    key: 'render',
	    value: function render() {
	      var navModel = this.state.navModel;
	      var children = this.props.children;
	
	
	      return _react2.default.createElement(
	        'div',
	        { id: 'appContainer' },
	        _react2.default.createElement(_components.NavigationBar, {
	          brand: navModel.brand,
	          navModel: navModel,
	          handleLeftNavItemClick: this.handleLeftNavItemClick,
	          handleRightNavItemClick: this.handleRightNavItemClick
	        }),
	        _react2.default.createElement(
	          'div',
	          { className: 'container-fluid' },
	          children
	        )
	      );
	    }
	
	    /* eslint-disable no-unused-vars*/
	
	  }, {
	    key: '__handleLeftNavItemClick__REACT_HOT_LOADER__',
	    value: function __handleLeftNavItemClick__REACT_HOT_LOADER__(event, viewName) {
	      // something to do here?
	    }
	  }, {
	    key: '__handleRightNavItemClick__REACT_HOT_LOADER__',
	    value: function __handleRightNavItemClick__REACT_HOT_LOADER__(event, viewName) {}
	    // something to do here?
	
	    /* eslint-enable no-unused-vars*/
	
	  }]);
	
	  return App;
	}(_react.Component);
	
	App.propTypes = {
	  children: _react.PropTypes.node,
	  history: _react.PropTypes.object,
	  location: _react.PropTypes.object
	};
	var _default = App;
	exports.default = _default;
	;
	
	var _temp2 = function () {
	  if (typeof __REACT_HOT_LOADER__ === 'undefined') {
	    return;
	  }
	
	  __REACT_HOT_LOADER__.register(App, 'App', '/Users/kentor/GitProjects/react-bootstrap-webpack-ssr-starter/src/app/containers/app/App.js');
	
	  __REACT_HOT_LOADER__.register(_default, 'default', '/Users/kentor/GitProjects/react-bootstrap-webpack-ssr-starter/src/app/containers/app/App.js');
	}();

	;

/***/ },

/***/ 508:
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	
	var _react = __webpack_require__(1);
	
	var _react2 = _interopRequireDefault(_react);
	
	var _reactRouter = __webpack_require__(104);
	
	var _App = __webpack_require__(507);
	
	var _App2 = _interopRequireDefault(_App);
	
	var _views = __webpack_require__(511);
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
	
	//  weak
	
	var Routes = function Routes() {
	  return _react2.default.createElement(
	    _reactRouter.Route,
	    { path: '/', component: _App2.default },
	    _react2.default.createElement(_reactRouter.IndexRoute, { component: _views.Home }),
	    _react2.default.createElement(_reactRouter.Route, { path: '/about', component: _views.About })
	  );
	};
	
	var _default = Routes;
	exports.default = _default;
	;
	
	var _temp = function () {
	  if (typeof __REACT_HOT_LOADER__ === 'undefined') {
	    return;
	  }
	
	  __REACT_HOT_LOADER__.register(Routes, 'Routes', '/Users/kentor/GitProjects/react-bootstrap-webpack-ssr-starter/src/app/routes/Routes.js');
	
	  __REACT_HOT_LOADER__.register(_default, 'default', '/Users/kentor/GitProjects/react-bootstrap-webpack-ssr-starter/src/app/routes/Routes.js');
	}();

	;

/***/ },

/***/ 509:
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	
	var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();
	
	var _react = __webpack_require__(1);
	
	var _react2 = _interopRequireDefault(_react);
	
	var _AnimatedView = __webpack_require__(495);
	
	var _AnimatedView2 = _interopRequireDefault(_AnimatedView);
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
	
	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }
	
	function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }
	
	function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; } //  weak
	
	var About = function (_PureComponent) {
	  _inherits(About, _PureComponent);
	
	  function About() {
	    _classCallCheck(this, About);
	
	    return _possibleConstructorReturn(this, (About.__proto__ || Object.getPrototypeOf(About)).apply(this, arguments));
	  }
	
	  _createClass(About, [{
	    key: 'render',
	    value: function render() {
	      return _react2.default.createElement(
	        _AnimatedView2.default,
	        null,
	        _react2.default.createElement(
	          'h1',
	          null,
	          'About'
	        )
	      );
	    }
	  }]);
	
	  return About;
	}(_react.PureComponent);
	
	var _default = About;
	exports.default = _default;
	;
	
	var _temp = function () {
	  if (typeof __REACT_HOT_LOADER__ === 'undefined') {
	    return;
	  }
	
	  __REACT_HOT_LOADER__.register(About, 'About', '/Users/kentor/GitProjects/react-bootstrap-webpack-ssr-starter/src/app/views/about/About.js');
	
	  __REACT_HOT_LOADER__.register(_default, 'default', '/Users/kentor/GitProjects/react-bootstrap-webpack-ssr-starter/src/app/views/about/About.js');
	}();

	;

/***/ },

/***/ 510:
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	
	var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();
	
	var _react = __webpack_require__(1);
	
	var _react2 = _interopRequireDefault(_react);
	
	var _components = __webpack_require__(245);
	
	var _classnames = __webpack_require__(9);
	
	var _classnames2 = _interopRequireDefault(_classnames);
	
	var _reactRouter = __webpack_require__(104);
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
	
	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }
	
	function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }
	
	function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; } //  weak
	
	var Home = function (_PureComponent) {
	  _inherits(Home, _PureComponent);
	
	  function Home() {
	    var _ref;
	
	    var _temp, _this, _ret;
	
	    _classCallCheck(this, Home);
	
	    for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
	      args[_key] = arguments[_key];
	    }
	
	    return _ret = (_temp = (_this = _possibleConstructorReturn(this, (_ref = Home.__proto__ || Object.getPrototypeOf(Home)).call.apply(_ref, [this].concat(args))), _this), _this.state = {
	      animated: true,
	      viewEntersAnim: true
	    }, _temp), _possibleConstructorReturn(_this, _ret);
	  }
	
	  _createClass(Home, [{
	    key: 'render',
	    value: function render() {
	      var _state = this.state,
	          animated = _state.animated,
	          viewEntersAnim = _state.viewEntersAnim;
	
	      return _react2.default.createElement(
	        'div',
	        {
	          key: 'homeView',
	          className: (0, _classnames2.default)({
	            'animatedViews': animated,
	            'view-enter': viewEntersAnim
	          }) },
	        _react2.default.createElement(
	          _components.Jumbotron,
	          null,
	          _react2.default.createElement(
	            'h1',
	            null,
	            'Full ES2015 ReactJS + Bootstrap'
	          ),
	          _react2.default.createElement(
	            'h2',
	            null,
	            'with Hot Reload!!!'
	          ),
	          _react2.default.createElement(
	            'h2',
	            null,
	            'with React Router (SPA)'
	          ),
	          _react2.default.createElement(
	            'h1',
	            null,
	            'Starter'
	          ),
	          _react2.default.createElement(
	            'p',
	            null,
	            _react2.default.createElement(
	              _reactRouter.Link,
	              {
	                className: 'btn btn-success btn-lg',
	                to: '/about' },
	              _react2.default.createElement('i', { className: 'fa fa-info' }),
	              '\xA0 go to about'
	            )
	          )
	        )
	      );
	    }
	  }]);
	
	  return Home;
	}(_react.PureComponent);
	
	var _default = Home;
	exports.default = _default;
	;
	
	var _temp2 = function () {
	  if (typeof __REACT_HOT_LOADER__ === 'undefined') {
	    return;
	  }
	
	  __REACT_HOT_LOADER__.register(Home, 'Home', '/Users/kentor/GitProjects/react-bootstrap-webpack-ssr-starter/src/app/views/home/Home.js');
	
	  __REACT_HOT_LOADER__.register(_default, 'default', '/Users/kentor/GitProjects/react-bootstrap-webpack-ssr-starter/src/app/views/home/Home.js');
	}();

	;

/***/ },

/***/ 511:
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	exports.Home = exports.About = undefined;
	
	var _About = __webpack_require__(509);
	
	var _About2 = _interopRequireDefault(_About);
	
	var _Home = __webpack_require__(510);
	
	var _Home2 = _interopRequireDefault(_Home);
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
	
	//  weak
	
	exports.About = _About2.default;
	exports.Home = _Home2.default;
	;

	var _temp = function () {
	  if (typeof __REACT_HOT_LOADER__ === 'undefined') {
	    return;
	  }
	}();

	;

/***/ },

/***/ 757:
/***/ function(module, exports) {

	// removed by extract-text-webpack-plugin

/***/ },

/***/ 758:
/***/ function(module, exports) {

	// removed by extract-text-webpack-plugin

/***/ },

/***/ 759:
/***/ function(module, exports) {

	// removed by extract-text-webpack-plugin

/***/ },

/***/ 760:
/***/ function(module, exports) {

	// removed by extract-text-webpack-plugin

/***/ },

/***/ 780:
/***/ function(module, exports) {

	module.exports = {
		"brand": "React Bootstrap Starter",
		"leftLinks": [],
		"rightLinks": [
			{
				"label": "Home",
				"link": "/"
			},
			{
				"label": "About",
				"link": "/about"
			}
		]
	};

/***/ }

});
//# sourceMappingURL=app.bundle.js.map