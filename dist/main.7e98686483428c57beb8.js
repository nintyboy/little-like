(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{12:function(module,__webpack_exports__,__webpack_require__){"use strict";(function(module){var react__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__(0),react__WEBPACK_IMPORTED_MODULE_0___default=__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__),react_dom__WEBPACK_IMPORTED_MODULE_1__=__webpack_require__(3),react_dom__WEBPACK_IMPORTED_MODULE_1___default=__webpack_require__.n(react_dom__WEBPACK_IMPORTED_MODULE_1__),_container__WEBPACK_IMPORTED_MODULE_2__=__webpack_require__(13),enterModule;function _typeof(e){return(_typeof="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e})(e)}function _classCallCheck(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function _defineProperties(e,t){for(var _=0;_<t.length;_++){var r=t[_];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}function _createClass(e,t,_){return t&&_defineProperties(e.prototype,t),_&&_defineProperties(e,_),e}function _possibleConstructorReturn(e,t){return!t||"object"!==_typeof(t)&&"function"!=typeof t?_assertThisInitialized(e):t}function _assertThisInitialized(e){if(void 0===e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e}function _getPrototypeOf(e){return(_getPrototypeOf=Object.setPrototypeOf?Object.getPrototypeOf:function(e){return e.__proto__||Object.getPrototypeOf(e)})(e)}function _inherits(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function");e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,writable:!0,configurable:!0}}),t&&_setPrototypeOf(e,t)}function _setPrototypeOf(e,t){return(_setPrototypeOf=Object.setPrototypeOf||function(e,t){return e.__proto__=t,e})(e,t)}enterModule=__webpack_require__(1).enterModule,enterModule&&enterModule(module);var get=__webpack_require__(26),HelloWorld=function(_React$Component){function HelloWorld(e){var t;return _classCallCheck(this,HelloWorld),(t=_possibleConstructorReturn(this,_getPrototypeOf(HelloWorld).call(this,e))).state={isLoading:!1,url:"https://www.polygon.com/2019/1/4/18168810/carmen-sandiego-animated-series-netflix-release-date"},t}return _inherits(HelloWorld,_React$Component),_createClass(HelloWorld,[{key:"handleChange",value:function(e){this.setState({url:e.target.value})}},{key:"handleSearch",value:function(e){e.preventDefault();var t=this;this.setState({isLoading:!0}),get.getData(this.state.url).then(function(e){console.log(e.domain),t.setState({data:e,isLoading:!1})},function(e){alert(e)})}},{key:"render",value:function(){var e=this.state,t=e.isLoading,_=e.url,r=e.data;return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div",{className:"container"},react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("form",{className:"import_module",onSubmit:this.handleSearch.bind(this)},react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("input",{type:"text",value:this.state.url,onChange:this.handleChange.bind(this)}),react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("p",null,this.state.url),react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("input",{type:"submit",value:"Get Website"})),t?react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("h3",null," Fetching... "):_&&r?react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_container__WEBPACK_IMPORTED_MODULE_2__.a,{content:r}):void 0)}},{key:"__reactstandin__regenerateByEval",value:function __reactstandin__regenerateByEval(key,code){this[key]=eval(code)}}]),HelloWorld}(react__WEBPACK_IMPORTED_MODULE_0___default.a.Component),_default=HelloWorld,reactHotLoader,leaveModule;__webpack_exports__.a=_default,reactHotLoader=__webpack_require__(1).default,leaveModule=__webpack_require__(1).leaveModule,reactHotLoader&&(reactHotLoader.register(HelloWorld,"HelloWorld","/Users/tyrell/Code/Prototypes/longform-client/src/components/helloWorld.jsx"),reactHotLoader.register(_default,"default","/Users/tyrell/Code/Prototypes/longform-client/src/components/helloWorld.jsx"),leaveModule(module))}).call(this,__webpack_require__(4)(module))},13:function(module,__webpack_exports__,__webpack_require__){"use strict";(function(module){var react__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__(0),react__WEBPACK_IMPORTED_MODULE_0___default=__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__),react_dom__WEBPACK_IMPORTED_MODULE_1__=__webpack_require__(3),react_dom__WEBPACK_IMPORTED_MODULE_1___default=__webpack_require__.n(react_dom__WEBPACK_IMPORTED_MODULE_1__),_scss_components_player_scss__WEBPACK_IMPORTED_MODULE_2__=__webpack_require__(21),_scss_components_player_scss__WEBPACK_IMPORTED_MODULE_2___default=__webpack_require__.n(_scss_components_player_scss__WEBPACK_IMPORTED_MODULE_2__),enterModule;function _typeof(e){return(_typeof="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e})(e)}function _classCallCheck(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function _defineProperties(e,t){for(var _=0;_<t.length;_++){var r=t[_];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}function _createClass(e,t,_){return t&&_defineProperties(e.prototype,t),_&&_defineProperties(e,_),e}function _possibleConstructorReturn(e,t){return!t||"object"!==_typeof(t)&&"function"!=typeof t?_assertThisInitialized(e):t}function _assertThisInitialized(e){if(void 0===e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e}function _getPrototypeOf(e){return(_getPrototypeOf=Object.setPrototypeOf?Object.getPrototypeOf:function(e){return e.__proto__||Object.getPrototypeOf(e)})(e)}function _inherits(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function");e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,writable:!0,configurable:!0}}),t&&_setPrototypeOf(e,t)}function _setPrototypeOf(e,t){return(_setPrototypeOf=Object.setPrototypeOf||function(e,t){return e.__proto__=t,e})(e,t)}enterModule=__webpack_require__(1).enterModule,enterModule&&enterModule(module);var Template=function(_React$Component){function Template(e){var t;return _classCallCheck(this,Template),(t=_possibleConstructorReturn(this,_getPrototypeOf(Template).call(this,e))).state={lead_image:t.props.content.lead_image_url,logo:t.props.content.logo},console.log(t.state.lead_image),t.bgIMG={backgroundImage:"url(https://fillmurray.com/200/300);"},t}return _inherits(Template,_React$Component),_createClass(Template,[{key:"handleClick",value:function(e){e.preventDefault(),alert("hello")}},{key:"render",value:function(){return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div",{className:"now_playing"},react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div",{className:"now_playing__view",style:{backgroundImage:"url("+this.state.lead_image+")"}},react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div",{className:"now_playing__view__logo"},react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("img",{src:this.state.logo})),react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div",{className:"now_playing__view__content"},react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("ul",null,react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("li",null,react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("a",{href:"{this.props.content.url}"},react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("h2",null,this.props.content.domain))),react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("li",null,react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("h1",null,this.props.content.title))))),react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div",{className:"now_playing__player"}))}},{key:"__reactstandin__regenerateByEval",value:function __reactstandin__regenerateByEval(key,code){this[key]=eval(code)}}]),Template}(react__WEBPACK_IMPORTED_MODULE_0___default.a.Component);Template.propTypes={},Template.defaultProp={};var _default=Template,reactHotLoader,leaveModule;__webpack_exports__.a=_default,reactHotLoader=__webpack_require__(1).default,leaveModule=__webpack_require__(1).leaveModule,reactHotLoader&&(reactHotLoader.register(Template,"Template","/Users/tyrell/Code/Prototypes/longform-client/src/components/container.jsx"),reactHotLoader.register(_default,"default","/Users/tyrell/Code/Prototypes/longform-client/src/components/container.jsx"),leaveModule(module))}).call(this,__webpack_require__(4)(module))},14:function(module,__webpack_exports__,__webpack_require__){"use strict";__webpack_require__.r(__webpack_exports__),function(module){var react__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__(0),react__WEBPACK_IMPORTED_MODULE_0___default=__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__),react_dom__WEBPACK_IMPORTED_MODULE_1__=__webpack_require__(3),react_dom__WEBPACK_IMPORTED_MODULE_1___default=__webpack_require__.n(react_dom__WEBPACK_IMPORTED_MODULE_1__),react_hot_loader__WEBPACK_IMPORTED_MODULE_2__=__webpack_require__(1),react_hot_loader__WEBPACK_IMPORTED_MODULE_2___default=__webpack_require__.n(react_hot_loader__WEBPACK_IMPORTED_MODULE_2__),_components_helloWorld__WEBPACK_IMPORTED_MODULE_3__=__webpack_require__(12),_components_template__WEBPACK_IMPORTED_MODULE_4__=__webpack_require__(48),enterModule;function _typeof(e){return(_typeof="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e})(e)}function _classCallCheck(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function _defineProperties(e,t){for(var _=0;_<t.length;_++){var r=t[_];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}function _createClass(e,t,_){return t&&_defineProperties(e.prototype,t),_&&_defineProperties(e,_),e}function _possibleConstructorReturn(e,t){return!t||"object"!==_typeof(t)&&"function"!=typeof t?_assertThisInitialized(e):t}function _assertThisInitialized(e){if(void 0===e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e}function _getPrototypeOf(e){return(_getPrototypeOf=Object.setPrototypeOf?Object.getPrototypeOf:function(e){return e.__proto__||Object.getPrototypeOf(e)})(e)}function _inherits(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function");e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,writable:!0,configurable:!0}}),t&&_setPrototypeOf(e,t)}function _setPrototypeOf(e,t){return(_setPrototypeOf=Object.setPrototypeOf||function(e,t){return e.__proto__=t,e})(e,t)}enterModule=__webpack_require__(1).enterModule,enterModule&&enterModule(module);var App=function(_React$Component){function App(){return _classCallCheck(this,App),_possibleConstructorReturn(this,_getPrototypeOf(App).apply(this,arguments))}return _inherits(App,_React$Component),_createClass(App,[{key:"render",value:function(){return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div",null,react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_components_helloWorld__WEBPACK_IMPORTED_MODULE_3__.a,null))}},{key:"__reactstandin__regenerateByEval",value:function __reactstandin__regenerateByEval(key,code){this[key]=eval(code)}}]),App}(react__WEBPACK_IMPORTED_MODULE_0___default.a.Component),AppWithHot=Object(react_hot_loader__WEBPACK_IMPORTED_MODULE_2__.hot)(module)(App),mountNode=document.getElementById("app"),reactHotLoader,leaveModule;react_dom__WEBPACK_IMPORTED_MODULE_1___default.a.render(react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(AppWithHot,null),mountNode),reactHotLoader=__webpack_require__(1).default,leaveModule=__webpack_require__(1).leaveModule,reactHotLoader&&(reactHotLoader.register(App,"App","/Users/tyrell/Code/Prototypes/longform-client/src/index.js"),reactHotLoader.register(AppWithHot,"AppWithHot","/Users/tyrell/Code/Prototypes/longform-client/src/index.js"),reactHotLoader.register(mountNode,"mountNode","/Users/tyrell/Code/Prototypes/longform-client/src/index.js"),leaveModule(module))}.call(this,__webpack_require__(4)(module))},21:function(e,t,_){var r=_(22);"string"==typeof r&&(r=[[e.i,r,""]]);var o={hmr:!0,transform:void 0,insertInto:void 0};_(24)(r,o);r.locals&&(e.exports=r.locals)},22:function(e,t,_){(t=e.exports=_(23)(!1)).push([e.i,"@import url(https://fonts.googleapis.com/css?family=Barlow:400,500,600);",""]),t.push([e.i,"*{font-family:'Barlow', sans-serif;box-sizing:border-box;-webkit-font-smoothing:antialiased;-moz-osx-font-smoothing:grayscale;transition:0.5s ease-in}.now_playing{width:300px;height:300px;transform:scale(1.25) translate(25%, 25%);background-color:rgba(0,0,0,0.2);border-radius:5px;box-shadow:2px 2px 5px rgba(0,0,0,0.07);margin-top:50px;overflow:hidden}.now_playing__view{width:100%;padding:14px 14px 0;background-repeat:no-repeat;background-size:cover}.now_playing__view__logo{width:35px;height:35px;border-radius:50%;overflow:hidden}.now_playing__view__logo img{width:100%}.now_playing__view__content{margin-top:58px;padding-bottom:14px}.now_playing__view__content ul{list-style:none;padding:0}.now_playing__view__content ul li a{text-decoration:none}.now_playing__view__content h1{font-size:16px;color:#fff;font-weight:600;text-shadow:1px 1px 2px rgba(0,0,0,0.75)}.now_playing__view__content h2{font-size:13px;color:#fff;font-weight:600;text-shadow:1px 1px 2px rgba(0,0,0,0.75)}.now_playing__player{border-top:1px solid #f4f4f4}\n",""])},26:function(e,t,_){(function(e){var t;(t=_(1).enterModule)&&t(e);var r,o,n=_(28),a="http://localhost:5000/api/url";e.exports={getData:function(e){return console.log("URL:",e),n.post(a,{data:{url:e}}).then(function(e){return e.data.data}).catch(function(e){console.log("GET ERROR:",e)})}},r=_(1).default,o=_(1).leaveModule,r&&(r.register(a,"url","/Users/tyrell/Code/Prototypes/longform-client/src/utils/get.js"),o(e))}).call(this,_(27)(e))},48:function(module,__webpack_exports__,__webpack_require__){"use strict";(function(module){var react__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__(0),react__WEBPACK_IMPORTED_MODULE_0___default=__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__),react_dom__WEBPACK_IMPORTED_MODULE_1__=__webpack_require__(3),react_dom__WEBPACK_IMPORTED_MODULE_1___default=__webpack_require__.n(react_dom__WEBPACK_IMPORTED_MODULE_1__),enterModule;function _typeof(e){return(_typeof="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e})(e)}function _classCallCheck(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function _defineProperties(e,t){for(var _=0;_<t.length;_++){var r=t[_];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}function _createClass(e,t,_){return t&&_defineProperties(e.prototype,t),_&&_defineProperties(e,_),e}function _possibleConstructorReturn(e,t){return!t||"object"!==_typeof(t)&&"function"!=typeof t?_assertThisInitialized(e):t}function _assertThisInitialized(e){if(void 0===e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e}function _getPrototypeOf(e){return(_getPrototypeOf=Object.setPrototypeOf?Object.getPrototypeOf:function(e){return e.__proto__||Object.getPrototypeOf(e)})(e)}function _inherits(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function");e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,writable:!0,configurable:!0}}),t&&_setPrototypeOf(e,t)}function _setPrototypeOf(e,t){return(_setPrototypeOf=Object.setPrototypeOf||function(e,t){return e.__proto__=t,e})(e,t)}enterModule=__webpack_require__(1).enterModule,enterModule&&enterModule(module);var Template=function(_React$Component){function Template(e){var t;return _classCallCheck(this,Template),(t=_possibleConstructorReturn(this,_getPrototypeOf(Template).call(this,e))).state={},t}return _inherits(Template,_React$Component),_createClass(Template,[{key:"handleClick",value:function(e){e.preventDefault(),alert("hello")}},{key:"render",value:function(){return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("h1",{onClick:this.handleClick.bind(this)}," hello, ")}},{key:"__reactstandin__regenerateByEval",value:function __reactstandin__regenerateByEval(key,code){this[key]=eval(code)}}]),Template}(react__WEBPACK_IMPORTED_MODULE_0___default.a.Component);Template.propTypes={},Template.defaultProp={};var _default=Template,_unused_webpack_default_export=_default,reactHotLoader,leaveModule;reactHotLoader=__webpack_require__(1).default,leaveModule=__webpack_require__(1).leaveModule,reactHotLoader&&(reactHotLoader.register(Template,"Template","/Users/tyrell/Code/Prototypes/longform-client/src/components/template.jsx"),reactHotLoader.register(_default,"default","/Users/tyrell/Code/Prototypes/longform-client/src/components/template.jsx"),leaveModule(module))}).call(this,__webpack_require__(4)(module))}},[[14,1,2]]]);