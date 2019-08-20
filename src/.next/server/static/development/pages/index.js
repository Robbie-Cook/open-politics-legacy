module.exports =
/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = require('../../../ssr-module-cache.js');
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		var threw = true;
/******/ 		try {
/******/ 			modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/ 			threw = false;
/******/ 		} finally {
/******/ 			if(threw) delete installedModules[moduleId];
/******/ 		}
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, { enumerable: true, get: getter });
/******/ 		}
/******/ 	};
/******/
/******/ 	// define __esModule on exports
/******/ 	__webpack_require__.r = function(exports) {
/******/ 		if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 			Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 		}
/******/ 		Object.defineProperty(exports, '__esModule', { value: true });
/******/ 	};
/******/
/******/ 	// create a fake namespace object
/******/ 	// mode & 1: value is a module id, require it
/******/ 	// mode & 2: merge all properties of value into the ns
/******/ 	// mode & 4: return value when already ns object
/******/ 	// mode & 8|1: behave like require
/******/ 	__webpack_require__.t = function(value, mode) {
/******/ 		if(mode & 1) value = __webpack_require__(value);
/******/ 		if(mode & 8) return value;
/******/ 		if((mode & 4) && typeof value === 'object' && value && value.__esModule) return value;
/******/ 		var ns = Object.create(null);
/******/ 		__webpack_require__.r(ns);
/******/ 		Object.defineProperty(ns, 'default', { enumerable: true, value: value });
/******/ 		if(mode & 2 && typeof value != 'string') for(var key in value) __webpack_require__.d(ns, key, function(key) { return value[key]; }.bind(null, key));
/******/ 		return ns;
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = 3);
/******/ })
/************************************************************************/
/******/ ({

/***/ "../node_modules/@babel/runtime-corejs2/core-js/object/define-property.js":
/*!********************************************************************************!*\
  !*** ../node_modules/@babel/runtime-corejs2/core-js/object/define-property.js ***!
  \********************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! core-js/library/fn/object/define-property */ "core-js/library/fn/object/define-property");

/***/ }),

/***/ "../node_modules/@babel/runtime-corejs2/helpers/esm/defineProperty.js":
/*!****************************************************************************!*\
  !*** ../node_modules/@babel/runtime-corejs2/helpers/esm/defineProperty.js ***!
  \****************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return _defineProperty; });
/* harmony import */ var _core_js_object_define_property__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../core-js/object/define-property */ "../node_modules/@babel/runtime-corejs2/core-js/object/define-property.js");
/* harmony import */ var _core_js_object_define_property__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_core_js_object_define_property__WEBPACK_IMPORTED_MODULE_0__);

function _defineProperty(obj, key, value) {
  if (key in obj) {
    _core_js_object_define_property__WEBPACK_IMPORTED_MODULE_0___default()(obj, key, {
      value: value,
      enumerable: true,
      configurable: true,
      writable: true
    });
  } else {
    obj[key] = value;
  }

  return obj;
}

/***/ }),

/***/ "../node_modules/@robbie-cook/react-components/build/index.es.js":
/*!***********************************************************************!*\
  !*** ../node_modules/@robbie-cook/react-components/build/index.es.js ***!
  \***********************************************************************/
/*! exports provided: BorderBox, Button, ButtonGenerator, ButtonWrapper, Carousel, Codify, Col, Container, DefaultSiteContext, DefaultTheme, Dimensions, Heading, Icon, IconsWrapper, LayoutWrapper, Link, MobileView, MyHelmet, MyLink, NavigationBar, Page, Row, SampleComponent, SamplePage, Section, SiteContext, Sizes, Spacer, Text, ThemeContext, Transition */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "BorderBox", function() { return on; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Button", function() { return Dn; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ButtonGenerator", function() { return Vn; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ButtonWrapper", function() { return Wn; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Carousel", function() { return te; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Codify", function() { return Sn; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Col", function() { return dn; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Container", function() { return Xn; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DefaultSiteContext", function() { return hn; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DefaultTheme", function() { return k; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Dimensions", function() { return yn; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Heading", function() { return Rn; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Icon", function() { return ce; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "IconsWrapper", function() { return ae; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LayoutWrapper", function() { return fn; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Link", function() { return zn; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MobileView", function() { return cn; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MyHelmet", function() { return Nn; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MyLink", function() { return mn; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "NavigationBar", function() { return Bn; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Page", function() { return Jn; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Row", function() { return pn; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SampleComponent", function() { return tn; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SamplePage", function() { return Zn; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Section", function() { return Kn; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SiteContext", function() { return vn; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Sizes", function() { return K; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Spacer", function() { return gn; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Text", function() { return $n; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ThemeContext", function() { return O; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Transition", function() { return nn; });
/* harmony import */ var _fortawesome_free_solid_svg_icons__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @fortawesome/free-solid-svg-icons */ "@fortawesome/free-solid-svg-icons");
/* harmony import */ var _fortawesome_free_solid_svg_icons__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_fortawesome_free_solid_svg_icons__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _fortawesome_react_fontawesome__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @fortawesome/react-fontawesome */ "@fortawesome/react-fontawesome");
/* harmony import */ var _fortawesome_react_fontawesome__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_fortawesome_react_fontawesome__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var react_pose__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! react-pose */ "react-pose");
/* harmony import */ var react_pose__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(react_pose__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! styled-components */ "styled-components");
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(styled_components__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var gatsby_plugin_page_transitions__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! gatsby-plugin-page-transitions */ "gatsby-plugin-page-transitions");
/* harmony import */ var gatsby_plugin_page_transitions__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(gatsby_plugin_page_transitions__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var react_helmet__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! react-helmet */ "react-helmet");
/* harmony import */ var react_helmet__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(react_helmet__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var grommet__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! grommet */ "grommet");
/* harmony import */ var grommet__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(grommet__WEBPACK_IMPORTED_MODULE_7__);
/* harmony import */ var react_responsive_carousel__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! react-responsive-carousel */ "react-responsive-carousel");
/* harmony import */ var react_responsive_carousel__WEBPACK_IMPORTED_MODULE_8___default = /*#__PURE__*/__webpack_require__.n(react_responsive_carousel__WEBPACK_IMPORTED_MODULE_8__);
/* harmony import */ var react_responsive_carousel_lib_styles_carousel_min_css__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! react-responsive-carousel/lib/styles/carousel.min.css */ "../node_modules/react-responsive-carousel/lib/styles/carousel.min.css");
/* harmony import */ var react_responsive_carousel_lib_styles_carousel_min_css__WEBPACK_IMPORTED_MODULE_9___default = /*#__PURE__*/__webpack_require__.n(react_responsive_carousel_lib_styles_carousel_min_css__WEBPACK_IMPORTED_MODULE_9__);
function d(n,e){if(!(n instanceof e))throw new TypeError("Cannot call a class as a function")}function y(n,e){for(var t=0;t<e.length;t++){var r=e[t];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(n,r.key,r)}}function m(n,e,t){return e&&y(n.prototype,e),t&&y(n,t),n}function h(n,e,t){return e in n?Object.defineProperty(n,e,{value:t,enumerable:!0,configurable:!0,writable:!0}):n[e]=t,n}function v(n,e){if("function"!=typeof e&&null!==e)throw new TypeError("Super expression must either be null or a function");n.prototype=Object.create(e&&e.prototype,{constructor:{value:n,writable:!0,configurable:!0}}),e&&g(n,e)}function b(n){return(b=Object.setPrototypeOf?Object.getPrototypeOf:function(n){return n.__proto__||Object.getPrototypeOf(n)})(n)}function g(n,e){return(g=Object.setPrototypeOf||function(n,e){return n.__proto__=e,n})(n,e)}function x(n){if(void 0===n)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return n}function w(n,e){return!e||"object"!=typeof e&&"function"!=typeof e?x(n):e}function E(n,e){return e||(e=n.slice(0)),Object.freeze(Object.defineProperties(n,{raw:{value:Object.freeze(e)}}))}function S(n,e){return function(n){if(Array.isArray(n))return n}(n)||function(n,e){var t=[],r=!0,o=!1,i=void 0;try{for(var a,c=n[Symbol.iterator]();!(r=(a=c.next()).done)&&(t.push(a.value),!e||t.length!==e);r=!0);}catch(n){o=!0,i=n}finally{try{r||null==c.return||c.return()}finally{if(o)throw i}}return t}(n,e)||function(){throw new TypeError("Invalid attempt to destructure non-iterable instance")}()}var k=function n(){d(this,n)};h(k,"textColor","#dcd6ce"),h(k,"backgroundColor","#0f0f0f"),h(k,"link",{color:"#6385a9",colorActive:"#1565c0",colorHighlight:"#6385a9"}),h(k,"text",{color:k.textColor,font:"'Roboto', sans-serif"}),h(k,"page",{backgroundColor:"#0f0f0f",secondaryColor:"#EB6D6D"}),h(k,"navbar",{backgroundColor:k.backgroundColor,height:"60px",button:{backgroundColor:k.backgroundColor,color:k.textColor,borderColor:"transparent",activeColor:k.link.color}}),h(k,"button",{backgroundColor:k.link.color,color:k.text.color,borderColor:k.textColor});var O=react__WEBPACK_IMPORTED_MODULE_2___default.a.createContext(k);function C(n){return n&&n.__esModule&&Object.prototype.hasOwnProperty.call(n,"default")?n.default:n}function P(n,e){return n(e={exports:{}},e.exports),e.exports}var j=P(function(n,e){Object.defineProperty(e,"__esModule",{value:!0});var t="function"==typeof Symbol&&Symbol.for,r=t?Symbol.for("react.element"):60103,o=t?Symbol.for("react.portal"):60106,i=t?Symbol.for("react.fragment"):60107,a=t?Symbol.for("react.strict_mode"):60108,c=t?Symbol.for("react.profiler"):60114,l=t?Symbol.for("react.provider"):60109,u=t?Symbol.for("react.context"):60110,s=t?Symbol.for("react.async_mode"):60111,f=t?Symbol.for("react.concurrent_mode"):60111,p=t?Symbol.for("react.forward_ref"):60112,d=t?Symbol.for("react.suspense"):60113,y=t?Symbol.for("react.suspense_list"):60120,m=t?Symbol.for("react.memo"):60115,h=t?Symbol.for("react.lazy"):60116,v=t?Symbol.for("react.fundamental"):60117,b=t?Symbol.for("react.responder"):60118;function g(n){if("object"==typeof n&&null!==n){var e=n.$$typeof;switch(e){case r:switch(n=n.type){case s:case f:case i:case c:case a:case d:return n;default:switch(n=n&&n.$$typeof){case u:case p:case l:return n;default:return e}}case h:case m:case o:return e}}}function x(n){return g(n)===f}e.typeOf=g,e.AsyncMode=s,e.ConcurrentMode=f,e.ContextConsumer=u,e.ContextProvider=l,e.Element=r,e.ForwardRef=p,e.Fragment=i,e.Lazy=h,e.Memo=m,e.Portal=o,e.Profiler=c,e.StrictMode=a,e.Suspense=d,e.isValidElementType=function(n){return"string"==typeof n||"function"==typeof n||n===i||n===f||n===c||n===a||n===d||n===y||"object"==typeof n&&null!==n&&(n.$$typeof===h||n.$$typeof===m||n.$$typeof===l||n.$$typeof===u||n.$$typeof===p||n.$$typeof===v||n.$$typeof===b)},e.isAsyncMode=function(n){return x(n)||g(n)===s},e.isConcurrentMode=x,e.isContextConsumer=function(n){return g(n)===u},e.isContextProvider=function(n){return g(n)===l},e.isElement=function(n){return"object"==typeof n&&null!==n&&n.$$typeof===r},e.isForwardRef=function(n){return g(n)===p},e.isFragment=function(n){return g(n)===i},e.isLazy=function(n){return g(n)===h},e.isMemo=function(n){return g(n)===m},e.isPortal=function(n){return g(n)===o},e.isProfiler=function(n){return g(n)===c},e.isStrictMode=function(n){return g(n)===a},e.isSuspense=function(n){return g(n)===d}});C(j);j.typeOf,j.AsyncMode,j.ConcurrentMode,j.ContextConsumer,j.ContextProvider,j.Element,j.ForwardRef,j.Fragment,j.Lazy,j.Memo,j.Portal,j.Profiler,j.StrictMode,j.Suspense,j.isValidElementType,j.isAsyncMode,j.isConcurrentMode,j.isContextConsumer,j.isContextProvider,j.isElement,j.isForwardRef,j.isFragment,j.isLazy,j.isMemo,j.isPortal,j.isProfiler,j.isStrictMode,j.isSuspense;var T=P(function(n,e){ true&&function(){Object.defineProperty(e,"__esModule",{value:!0});var n="function"==typeof Symbol&&Symbol.for,t=n?Symbol.for("react.element"):60103,r=n?Symbol.for("react.portal"):60106,o=n?Symbol.for("react.fragment"):60107,i=n?Symbol.for("react.strict_mode"):60108,a=n?Symbol.for("react.profiler"):60114,c=n?Symbol.for("react.provider"):60109,l=n?Symbol.for("react.context"):60110,u=n?Symbol.for("react.async_mode"):60111,s=n?Symbol.for("react.concurrent_mode"):60111,f=n?Symbol.for("react.forward_ref"):60112,p=n?Symbol.for("react.suspense"):60113,d=n?Symbol.for("react.suspense_list"):60120,y=n?Symbol.for("react.memo"):60115,m=n?Symbol.for("react.lazy"):60116,h=n?Symbol.for("react.fundamental"):60117,v=n?Symbol.for("react.responder"):60118;var b=function(n){for(var e=arguments.length,t=Array(e>1?e-1:0),r=1;r<e;r++)t[r-1]=arguments[r];var o=0,i="Warning: "+n.replace(/%s/g,function(){return t[o++]});"undefined"!=typeof console&&console.warn(i);try{throw new Error(i)}catch(n){}},g=function(n,e){if(void 0===e)throw new Error("`lowPriorityWarning(condition, format, ...args)` requires a warning message argument");if(!n){for(var t=arguments.length,r=Array(t>2?t-2:0),o=2;o<t;o++)r[o-2]=arguments[o];b.apply(void 0,[e].concat(r))}};function x(n){if("object"==typeof n&&null!==n){var e=n.$$typeof;switch(e){case t:var d=n.type;switch(d){case u:case s:case o:case a:case i:case p:return d;default:var h=d&&d.$$typeof;switch(h){case l:case f:case c:return h;default:return e}}case m:case y:case r:return e}}}var w=u,E=s,S=l,k=c,O=t,C=f,P=o,j=m,T=y,M=r,_=a,R=i,$=p,z=!1;function N(n){return x(n)===s}e.typeOf=x,e.AsyncMode=w,e.ConcurrentMode=E,e.ContextConsumer=S,e.ContextProvider=k,e.Element=O,e.ForwardRef=C,e.Fragment=P,e.Lazy=j,e.Memo=T,e.Portal=M,e.Profiler=_,e.StrictMode=R,e.Suspense=$,e.isValidElementType=function(n){return"string"==typeof n||"function"==typeof n||n===o||n===s||n===a||n===i||n===p||n===d||"object"==typeof n&&null!==n&&(n.$$typeof===m||n.$$typeof===y||n.$$typeof===c||n.$$typeof===l||n.$$typeof===f||n.$$typeof===h||n.$$typeof===v)},e.isAsyncMode=function(n){return z||(z=!0,g(!1,"The ReactIs.isAsyncMode() alias has been deprecated, and will be removed in React 17+. Update your code to use ReactIs.isConcurrentMode() instead. It has the exact same API.")),N(n)||x(n)===u},e.isConcurrentMode=N,e.isContextConsumer=function(n){return x(n)===l},e.isContextProvider=function(n){return x(n)===c},e.isElement=function(n){return"object"==typeof n&&null!==n&&n.$$typeof===t},e.isForwardRef=function(n){return x(n)===f},e.isFragment=function(n){return x(n)===o},e.isLazy=function(n){return x(n)===m},e.isMemo=function(n){return x(n)===y},e.isPortal=function(n){return x(n)===r},e.isProfiler=function(n){return x(n)===a},e.isStrictMode=function(n){return x(n)===i},e.isSuspense=function(n){return x(n)===p}}()});C(T);T.typeOf,T.AsyncMode,T.ConcurrentMode,T.ContextConsumer,T.ContextProvider,T.Element,T.ForwardRef,T.Fragment,T.Lazy,T.Memo,T.Portal,T.Profiler,T.StrictMode,T.Suspense,T.isValidElementType,T.isAsyncMode,T.isConcurrentMode,T.isContextConsumer,T.isContextProvider,T.isElement,T.isForwardRef,T.isFragment,T.isLazy,T.isMemo,T.isPortal,T.isProfiler,T.isStrictMode,T.isSuspense;var M=P(function(n){ false?undefined:n.exports=T}),_=Object.getOwnPropertySymbols,R=Object.prototype.hasOwnProperty,$=Object.prototype.propertyIsEnumerable;function z(n){if(null==n)throw new TypeError("Object.assign cannot be called with null or undefined");return Object(n)}var N=function(){try{if(!Object.assign)return!1;var n=new String("abc");if(n[5]="de","5"===Object.getOwnPropertyNames(n)[0])return!1;for(var e={},t=0;t<10;t++)e["_"+String.fromCharCode(t)]=t;if("0123456789"!==Object.getOwnPropertyNames(e).map(function(n){return e[n]}).join(""))return!1;var r={};return"abcdefghijklmnopqrst".split("").forEach(function(n){r[n]=n}),"abcdefghijklmnopqrst"===Object.keys(Object.assign({},r)).join("")}catch(n){return!1}}()?Object.assign:function(n,e){for(var t,r,o=z(n),i=1;i<arguments.length;i++){for(var a in t=Object(arguments[i]))R.call(t,a)&&(o[a]=t[a]);if(_){r=_(t);for(var c=0;c<r.length;c++)$.call(t,r[c])&&(o[r[c]]=t[r[c]])}}return o},A="SECRET_DO_NOT_PASS_THIS_OR_YOU_WILL_BE_FIRED",I=function(){};if(true){var F=A,D={},V=Function.call.bind(Object.prototype.hasOwnProperty);I=function(n){var e="Warning: "+n;"undefined"!=typeof console&&console.error(e);try{throw new Error(e)}catch(n){}}}function W(n,e,t,r,o){if(true)for(var i in n)if(V(n,i)){var a;try{if("function"!=typeof n[i]){var c=Error((r||"React class")+": "+t+" type `"+i+"` is invalid; it must be a function, usually from the `prop-types` package, but received `"+typeof n[i]+"`.");throw c.name="Invariant Violation",c}a=n[i](e,i,r,t,null,F)}catch(n){a=n}if(!a||a instanceof Error||I((r||"React class")+": type specification of "+t+" `"+i+"` is invalid; the type checker function must return `null` or an `Error` but returned a "+typeof a+". You may have forgotten to pass an argument to the type checker creator (arrayOf, instanceOf, objectOf, oneOf, oneOfType, and shape all require an argument)."),a instanceof Error&&!(a.message in D)){D[a.message]=!0;var l=o?o():"";I("Failed "+t+" type: "+a.message+(null!=l?l:""))}}}W.resetWarningCache=function(){ true&&(D={})};var L=W,q=Function.call.bind(Object.prototype.hasOwnProperty),H=function(){};function U(){return null} true&&(H=function(n){var e="Warning: "+n;"undefined"!=typeof console&&console.error(e);try{throw new Error(e)}catch(n){}});var B=function(n,e){var t="function"==typeof Symbol&&Symbol.iterator,r="@@iterator";var o="<<anonymous>>",i={array:u("array"),bool:u("boolean"),func:u("function"),number:u("number"),object:u("object"),string:u("string"),symbol:u("symbol"),any:l(U),arrayOf:function(n){return l(function(e,t,r,o,i){if("function"!=typeof n)return new c("Property `"+i+"` of component `"+r+"` has invalid PropType notation inside arrayOf.");var a=e[t];if(!Array.isArray(a))return new c("Invalid "+o+" `"+i+"` of type `"+f(a)+"` supplied to `"+r+"`, expected an array.");for(var l=0;l<a.length;l++){var u=n(a,l,r,o,i+"["+l+"]",A);if(u instanceof Error)return u}return null})},element:l(function(e,t,r,o,i){var a=e[t];return n(a)?null:new c("Invalid "+o+" `"+i+"` of type `"+f(a)+"` supplied to `"+r+"`, expected a single ReactElement.")}),elementType:l(function(n,e,t,r,o){var i=n[e];return M.isValidElementType(i)?null:new c("Invalid "+r+" `"+o+"` of type `"+f(i)+"` supplied to `"+t+"`, expected a single ReactElement type.")}),instanceOf:function(n){return l(function(e,t,r,i,a){if(!(e[t]instanceof n)){var l=n.name||o;return new c("Invalid "+i+" `"+a+"` of type `"+function(n){if(!n.constructor||!n.constructor.name)return o;return n.constructor.name}(e[t])+"` supplied to `"+r+"`, expected instance of `"+l+"`.")}return null})},node:l(function(n,e,t,r,o){return s(n[e])?null:new c("Invalid "+r+" `"+o+"` supplied to `"+t+"`, expected a ReactNode.")}),objectOf:function(n){return l(function(e,t,r,o,i){if("function"!=typeof n)return new c("Property `"+i+"` of component `"+r+"` has invalid PropType notation inside objectOf.");var a=e[t],l=f(a);if("object"!==l)return new c("Invalid "+o+" `"+i+"` of type `"+l+"` supplied to `"+r+"`, expected an object.");for(var u in a)if(q(a,u)){var s=n(a,u,r,o,i+"."+u,A);if(s instanceof Error)return s}return null})},oneOf:function(n){if(!Array.isArray(n))return true&&(arguments.length>1?H("Invalid arguments supplied to oneOf, expected an array, got "+arguments.length+" arguments. A common mistake is to write oneOf(x, y, z) instead of oneOf([x, y, z])."):H("Invalid argument supplied to oneOf, expected an array.")),U;return l(function(e,t,r,o,i){for(var l=e[t],u=0;u<n.length;u++)if(a(l,n[u]))return null;var s=JSON.stringify(n,function(n,e){return"symbol"===p(e)?String(e):e});return new c("Invalid "+o+" `"+i+"` of value `"+String(l)+"` supplied to `"+r+"`, expected one of "+s+".")})},oneOfType:function(n){if(!Array.isArray(n))return true&&H("Invalid argument supplied to oneOfType, expected an instance of array."),U;for(var e=0;e<n.length;e++){var t=n[e];if("function"!=typeof t)return H("Invalid argument supplied to oneOfType. Expected an array of check functions, but received "+d(t)+" at index "+e+"."),U}return l(function(e,t,r,o,i){for(var a=0;a<n.length;a++){if(null==(0,n[a])(e,t,r,o,i,A))return null}return new c("Invalid "+o+" `"+i+"` supplied to `"+r+"`.")})},shape:function(n){return l(function(e,t,r,o,i){var a=e[t],l=f(a);if("object"!==l)return new c("Invalid "+o+" `"+i+"` of type `"+l+"` supplied to `"+r+"`, expected `object`.");for(var u in n){var s=n[u];if(s){var p=s(a,u,r,o,i+"."+u,A);if(p)return p}}return null})},exact:function(n){return l(function(e,t,r,o,i){var a=e[t],l=f(a);if("object"!==l)return new c("Invalid "+o+" `"+i+"` of type `"+l+"` supplied to `"+r+"`, expected `object`.");var u=N({},e[t],n);for(var s in u){var p=n[s];if(!p)return new c("Invalid "+o+" `"+i+"` key `"+s+"` supplied to `"+r+"`.\nBad object: "+JSON.stringify(e[t],null,"  ")+"\nValid keys: "+JSON.stringify(Object.keys(n),null,"  "));var d=p(a,s,r,o,i+"."+s,A);if(d)return d}return null})}};function a(n,e){return n===e?0!==n||1/n==1/e:n!=n&&e!=e}function c(n){this.message=n,this.stack=""}function l(n){if(true)var t={},r=0;function i(i,a,l,u,s,f,p){if(u=u||o,f=f||l,p!==A){if(e){var d=new Error("Calling PropTypes validators directly is not supported by the `prop-types` package. Use `PropTypes.checkPropTypes()` to call them. Read more at http://fb.me/use-check-prop-types");throw d.name="Invariant Violation",d}if( true&&"undefined"!=typeof console){var y=u+":"+l;!t[y]&&r<3&&(H("You are manually calling a React.PropTypes validation function for the `"+f+"` prop on `"+u+"`. This is deprecated and will throw in the standalone `prop-types` package. You may be seeing this warning due to a third-party PropTypes library. See https://fb.me/react-warning-dont-call-proptypes for details."),t[y]=!0,r++)}}return null==a[l]?i?null===a[l]?new c("The "+s+" `"+f+"` is marked as required in `"+u+"`, but its value is `null`."):new c("The "+s+" `"+f+"` is marked as required in `"+u+"`, but its value is `undefined`."):null:n(a,l,u,s,f)}var a=i.bind(null,!1);return a.isRequired=i.bind(null,!0),a}function u(n){return l(function(e,t,r,o,i,a){var l=e[t];return f(l)!==n?new c("Invalid "+o+" `"+i+"` of type `"+p(l)+"` supplied to `"+r+"`, expected `"+n+"`."):null})}function s(e){switch(typeof e){case"number":case"string":case"undefined":return!0;case"boolean":return!e;case"object":if(Array.isArray(e))return e.every(s);if(null===e||n(e))return!0;var o=function(n){var e=n&&(t&&n[t]||n[r]);if("function"==typeof e)return e}(e);if(!o)return!1;var i,a=o.call(e);if(o!==e.entries){for(;!(i=a.next()).done;)if(!s(i.value))return!1}else for(;!(i=a.next()).done;){var c=i.value;if(c&&!s(c[1]))return!1}return!0;default:return!1}}function f(n){var e=typeof n;return Array.isArray(n)?"array":n instanceof RegExp?"object":function(n,e){return"symbol"===n||!!e&&("Symbol"===e["@@toStringTag"]||"function"==typeof Symbol&&e instanceof Symbol)}(e,n)?"symbol":e}function p(n){if(null==n)return""+n;var e=f(n);if("object"===e){if(n instanceof Date)return"date";if(n instanceof RegExp)return"regexp"}return e}function d(n){var e=p(n);switch(e){case"array":case"object":return"an "+e;case"boolean":case"date":case"regexp":return"a "+e;default:return e}}return c.prototype=Error.prototype,i.checkPropTypes=L,i.resetWarningCache=L.resetWarningCache,i.PropTypes=i,i};function Y(){}function J(){}J.resetWarningCache=Y;var G=P(function(n){if(true){var e=M;n.exports=B(e.isElement,!0)}else {}}),K=function n(){d(this,n)};function Q(){var n=E(["\n    animation-name: spin;\n    align-items: center;\n    max-width: 200px;\n    animation-duration: 2500ms;\n    animation-iteration-count: infinite;\n    animation-timing-function: linear;\n\n    @keyframes spin {\n      from {\n        transform: rotate(0deg);\n      }\n      to {\n        transform: rotate(360deg);\n      }\n    }\n  "]);return Q=function(){return n},n}function X(){var n=E(["\n    min-width: 100px;\n    width: 100%;\n    color: ","\n    display: flex;\n    flex-direction: row;\n    justify-content: center;\n  "]);return X=function(){return n},n}function Z(){var n=E([""]);return Z=function(){return n},n}function nn(n){var e=react_pose__WEBPACK_IMPORTED_MODULE_3___default.a.div({visible:{opacity:1,height:"auto",transition:{default:{ease:"linear",duration:500}}},hidden:{opacity:0,height:"0px",transition:{default:{ease:"linear",duration:500}}}}),r=styled_components__WEBPACK_IMPORTED_MODULE_4___default()(e)(Z());return react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement(react__WEBPACK_IMPORTED_MODULE_2___default.a.Fragment,null,react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement(r,{initialPose:"hidden",pose:n.loaded?"hidden":"visible"},react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement(en,{color:"white"})),react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement(r,{initialPose:"hidden",pose:n.loaded?"visible":"hidden"},n.children))}function en(r){var o=styled_components__WEBPACK_IMPORTED_MODULE_4___default.a.div(X(),r.color),i=styled_components__WEBPACK_IMPORTED_MODULE_4___default.a.div(Q());return react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement(o,null,react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement(i,null,react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement(_fortawesome_react_fontawesome__WEBPACK_IMPORTED_MODULE_1__["FontAwesomeIcon"],{style:{fontSize:"65px",display:"flex",margin:"auto"},icon:_fortawesome_free_solid_svg_icons__WEBPACK_IMPORTED_MODULE_0__["faCircleNotch"]})))}function tn(n){return react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement(react__WEBPACK_IMPORTED_MODULE_2___default.a.Fragment,null)}function rn(){var n=E(["\n      border: 8px solid ",";\n      border-radius: 4px;\n      padding: 20px;\n      display: flex;\n      flex-direction: ",";\n      ",";\n      ",";\n      ",";\n\n      ",";\n      ",";\n\n      &::-webkit-scrollbar-track {\n        -webkit-box-shadow: inset 0 0 6px rgba(0, 0, 0, 0.3);\n        background-color: #2b2b2b;\n      }\n\n      &::-webkit-scrollbar {\n        width: 10px;\n        background-color: ",";\n      }\n\n      &::-webkit-scrollbar-thumb {\n        background-color: ",";\n        );\n      }\n    "]);return rn=function(){return n},n}h(K,"navbar",{height:"64"}),h(K,"page",{sideMargin:"90px"}),nn.defaultProps={loaded:!1},en.defaultProps={color:"white"},tn.defaultProps={optionalWidth:"20px"};var on=function(n){function e(){return d(this,e),w(this,b(e).apply(this,arguments))}return v(e,react__WEBPACK_IMPORTED_MODULE_2__["Component"]),m(e,[{key:"render",value:function(){var n=styled_components__WEBPACK_IMPORTED_MODULE_4___default.a.div(rn(),k.text.color,this.props.horizontalScroll?"row":"column",this.props.width?"width: ".concat(this.props.width):"",this.props.height?"height: ".concat(this.props.height):"",this.props.style,this.props.horizontalScroll?"overflow-x: auto":"",this.props.verticalScroll?"overflow-y: auto":"",k.backgroundColor,k.text.color);return react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement(n,null,this.props.children)}}]),e}();on.propTypes={width:G.string,height:G.string,horizontalScroll:G.bool,verticalScroll:G.bool};var an=function n(){d(this,n)};h(an,"mobileSize","900");var cn=function(){function n(e){d(this,n),this.style=e}return m(n,[{key:"toString",value:function(){return"\n      @media (max-width: ".concat(an.mobileSize,"px) {\n        ").concat(this.style,";\n      }")}}]),n}();function ln(){var n=E(["\n    display: flex;\n    flex-direction: column;\n    margin: 0 40px 20px 0;\n    width: ",";\n\n    ","\n  "]);return ln=function(){return n},n}function un(){var n=E(["\n  display: flex;\n  flex-direction: row;\n  flex: 1;\n\n  ","\n"]);return un=function(){return n},n}function sn(){var n=E(["\n  display: flex;\n  flex-direction: column;\n  width: 100%;\n"]);return sn=function(){return n},n}var fn=styled_components__WEBPACK_IMPORTED_MODULE_4___default.a.div(sn()),pn=styled_components__WEBPACK_IMPORTED_MODULE_4___default.a.div(un(),new cn("\n    flex-direction: column;\n  "));function dn(n){var e=styled_components__WEBPACK_IMPORTED_MODULE_4___default.a.div(ln(),n.width,new cn("\n        width: 100%;\n      "));return react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement(e,null,n.children)}dn.propTypes={width:G.string};var yn=function(){function n(e,t){var r=arguments.length>2&&void 0!==arguments[2]?arguments[2]:e,o=arguments.length>3&&void 0!==arguments[3]?arguments[3]:t;d(this,n),"string"==typeof e?(this.top=e,this.right=t,this.bottom=r,this.left=o):(this.top="".concat(e,"px"),this.right="".concat(t,"px"),this.bottom="".concat(r,"px"),this.left="".concat(o,"px"))}return m(n,[{key:"toString",value:function(){return"".concat(this.top," ").concat(this.right," ").concat(this.bottom," ").concat(this.left)}}]),n}(),mn=function(){function n(e,t,r){var o=arguments.length>3&&void 0!==arguments[3]&&arguments[3];d(this,n),this.name=e,this.path=t,this.exact=o}return m(n,[{key:"isActive",value:function(){}}]),n}(),hn=function n(){d(this,n)};h(hn,"name","My Website"),h(hn,"links",[new mn("Home","/"),new mn("News","/news")]);var vn=react__WEBPACK_IMPORTED_MODULE_2___default.a.createContext(hn);function bn(){var n=E(["\n    height: ",";\n    width: ",";\n  "]);return bn=function(){return n},n}function gn(n){var e=styled_components__WEBPACK_IMPORTED_MODULE_4___default.a.div(bn(),n.height,n.width);return react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement(e,null)}function xn(){var n=E(["\n      font-size: ",';\n      font-weight: bold;\n      font-family: "Roboto Slab", sans-serif;\n      color: ',";\n      opacity: ",";\n    "]);return xn=function(){return n},n}function wn(){var n=E(["\n      display: flex;\n      align-items: center;\n    "]);return wn=function(){return n},n}gn.propTypes={width:G.string,height:G.string};var En=function(n){function e(){return d(this,e),w(this,b(e).apply(this,arguments))}return v(e,react__WEBPACK_IMPORTED_MODULE_2__["Component"]),m(e,[{key:"render",value:function(){return react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement(react__WEBPACK_IMPORTED_MODULE_2___default.a.Fragment,null,this.props.content)}}]),e}();En.propTypes={position:G.string};var Sn=function(n){function e(){return d(this,e),w(this,b(e).apply(this,arguments))}return v(e,react__WEBPACK_IMPORTED_MODULE_2__["Component"]),m(e,[{key:"render",value:function(){var n=styled_components__WEBPACK_IMPORTED_MODULE_4___default.a.div(wn()),e=styled_components__WEBPACK_IMPORTED_MODULE_4___default.a.span(xn(),this.props.fontSize,this.props.color,this.props.opacity),r=react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement(e,null,"<"),o=react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement(react__WEBPACK_IMPORTED_MODULE_2___default.a.Fragment,null,react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement(gn,{width:this.props.rightTagSpacing}),react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement(e,null," />"));return react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement(n,null,react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement(En,{position:"left",content:r}),this.props.children,react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement(En,{position:"right",content:o}))}}]),e}();function kn(){var n=E(['\n    font-family: "Roboto", sans-serif;\n    color: ',";\n    ",";\n  "]);return kn=function(){return n},n}function On(){var n=E(["\n    margin: 12px 0;\n    color: ",';\n\n    /* Local to this politics */\n    font-family: "Roboto", sans-serif;\n    ',";\n  "]);return On=function(){return n},n}function Cn(){var n=E(["\n      display: flex;\n      width: fit-content;\n      & * {\n        align-self: center;\n      }\n      ",";\n      ",";\n    "]);return Cn=function(){return n},n}function Pn(){var n=E(["\n      ","\n      font-size: 20px;\n    "]);return Pn=function(){return n},n}function jn(){var n=E(["\n      ","\n      font-size: 25px;\n    "]);return jn=function(){return n},n}function Tn(){var n=E(["\n      ","\n      font-size: 30px;\n    "]);return Tn=function(){return n},n}function Mn(){var n=E(["\n      ","\n      font-size: 40px;\n    "]);return Mn=function(){return n},n}function _n(){var n=E(["\n      ","\n      font-size: ",";\n      line-height: ",";\n    "]);return _n=function(){return n},n}Sn.propTypes={color:G.string,fontSize:G.string,rightTagSpacing:G.string,opacity:G.string},Sn.defaultProps={color:k.page.secondaryColor,fontSize:"69px",rightTagSpacing:"13px",opacity:"1"};var Rn=function(n){function e(){return d(this,e),w(this,b(e).apply(this,arguments))}return v(e,react__WEBPACK_IMPORTED_MODULE_2__["Component"]),m(e,[{key:"getHeading",value:function(n,e,r){var o='\n      font-family: "Roboto Slab", sans-serif;\n      font-weight: bold;\n      margin: '.concat(this.props.margin,";\n      text-transform: lowercase;\n      color: ").concat(k.text.color,";\n    "),i=styled_components__WEBPACK_IMPORTED_MODULE_4___default.a.h1(_n(),o,"53px","53px"),a=styled_components__WEBPACK_IMPORTED_MODULE_4___default.a.h2(Mn(),o),c=styled_components__WEBPACK_IMPORTED_MODULE_4___default.a.h3(Tn(),o),u=styled_components__WEBPACK_IMPORTED_MODULE_4___default.a.h4(jn(),o),s=styled_components__WEBPACK_IMPORTED_MODULE_4___default.a.h5(Pn(),o),f=styled_components__WEBPACK_IMPORTED_MODULE_4___default.a.div(Cn(),this.props.center&&"align-self: center",this.props.style),p="";"h1"===n||void 0===n?p=i:"h2"===n?p=a:"h3"===n?p=c:"h4"===n?p=u:"h5"===n&&(p=s);var d=react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement(p,{className:r},this.props.children);return react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement(f,null,this.props.codify?react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement(Sn,null,d):d)}},{key:"render",value:function(){return this.getHeading(this.props.type,this.props.style,this.props.className,this.props.codify,this.props.margin)}}]),e}();function $n(n){var e=Object(react__WEBPACK_IMPORTED_MODULE_2__["useContext"])(O).text,r=styled_components__WEBPACK_IMPORTED_MODULE_4___default.a.p(On(),e.color,n.style);return react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement(r,null,n.children)}function zn(n){var e=styled_components__WEBPACK_IMPORTED_MODULE_4___default.a.a(kn(),k.link.color,n.style);return react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement(e,{href:n.href},n.children)}function Nn(){var n=Object(react__WEBPACK_IMPORTED_MODULE_2__["useContext"])(O);return react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement("div",{className:"application"},react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement(react_helmet__WEBPACK_IMPORTED_MODULE_6__["Helmet"],null,react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement("meta",{charSet:"utf-8"}),react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement("link",{href:"https://fonts.googleapis.com/css?family=Roboto+Slab:400,700|Roboto:300,400,700&display=swap",rel:"stylesheet"}),react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement("title",null,"Robbie Cook"),react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement("meta",{name:"viewport",content:"width=device-width, initial-scale=1.0"}),react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement("style",null,"\n              body {\n                background-color: ".concat(n.backgroundColor,";\n                margin: 0;\n              }\n            "))))}function An(){var n=E(["\n      ","\n      display: flex;\n      ",";\n    "]);return An=function(){return n},n}function In(){var n=E(["\n    color: ",";\n    margin: 0;\n    text-decoration: none;\n    line-height: 20px;\n  "]);return In=function(){return n},n}function Fn(){var n=E(["\n    border: 3px solid ",";\n    border-radius: 6px;\n    color: ",";\n    transition: 0.03s;\n    height: 36px;\n\n    /* for svg icons */\n    fill: ",";\n    stroke: ",";\n\n    &:hover {\n      & p {\n        border-bottom: 1px solid transparent;\n      }\n      background-color: ",";\n    }\n\n    & p {\n      color: ","\n    }\n\n    margin: ",";\n    color: ",";\n    line-height: 27px;\n    font-size: 16px;\n    padding: 5px 12px;\n    font-weight: normal;\n\n    // Styles for active links\n    background-color: ",";\n\n    ",";\n  "]);return Fn=function(){return n},n}function Dn(n){var e=n.navbar?Object(react__WEBPACK_IMPORTED_MODULE_2__["useContext"])(O).navbar.button:Object(react__WEBPACK_IMPORTED_MODULE_2__["useContext"])(O).button;console.log(e);var r=styled_components__WEBPACK_IMPORTED_MODULE_4___default()(grommet__WEBPACK_IMPORTED_MODULE_7__["Button"])(Fn(),e.backgroundColor,e.color,e.color,e.color,e.backgroundColor,e.color,n.margin,e.color,e.backgroundColor,n.style),i=styled_components__WEBPACK_IMPORTED_MODULE_4___default.a.p(In(),e.color);return react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement(r,{icon:n.icon,label:react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement(i,null,n.label),onClick:n.function,href:n.to})}Rn.propTypes={type:G.string,codify:G.bool,style:G.string,margin:G.string,center:G.bool},Rn.defaultProps={margin:"0 0 20px 0;",center:!1},$n.defaultProps={style:""},Dn.defaultProps={to:"/",label:"My name",active:!1};var Vn=function(n){function e(){return d(this,e),w(this,b(e).apply(this,arguments))}return v(e,react__WEBPACK_IMPORTED_MODULE_2__["Component"]),m(e,[{key:"render",value:function(){var n=this;return react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement(Wn,{buttonRow:this.props.buttonRow},this.props.labels.map(function(e,r){return react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement(Dn,{function:n.props.functions[r],margin:n.props.buttonMargin,style:n.props.buttonStyle,label:e})}))}}]),e}();Vn.propTypes={labels:G.array.isRequired,functions:G.array,buttonRow:G.bool,buttonStyle:G.string,activeColor:G.string};var Wn=function(n){function e(){return d(this,e),w(this,b(e).apply(this,arguments))}return v(e,react__WEBPACK_IMPORTED_MODULE_2__["Component"]),m(e,[{key:"render",value:function(){var n=this,e=styled_components__WEBPACK_IMPORTED_MODULE_4___default.a.div(An(),"flex-direction: "+(!1!==n.props.buttonRow?"row":"column")+";",this.props.style);return react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement(e,null,this.props.children)}}]),e}();function Ln(n){var e=Object(react__WEBPACK_IMPORTED_MODULE_2__["useContext"])(O).navbar.button,r="\n    & * {\n      color: ".concat(e.activeColor,"!important;\n    }\n  "),i="\n    background-color: ".concat(e.backgroundColor,";\n    border-color: ").concat(e.borderColor,";\n\n    &:hover {\n      background-color: ").concat(e.backgroundColor,";\n    }\n    ").concat(n.active&&r,"\n  ");return react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement(Dn,{style:i,label:n.label,to:n.link},n.children)}function qn(){var n=E([""]);return qn=function(){return n},n}function Hn(){var n=E(["\n    height: ",";\n    display: flex;\n    flex-direction: row;\n    align-items: center;\n    background-color: ",";\n    padding-left: 40px;\n    padding-right: 40px;\n    box-sizing: border-box;\n  "]);return Hn=function(){return n},n}function Un(n){var e=S(Object(react__WEBPACK_IMPORTED_MODULE_2__["useState"])(!1),2),r=(e[0],e[1]);Object(react__WEBPACK_IMPORTED_MODULE_2__["useEffect"])(function(){r(!0)});var c,u=Object(react__WEBPACK_IMPORTED_MODULE_2__["useContext"])(O).navbar,s=styled_components__WEBPACK_IMPORTED_MODULE_4___default.a.div(Hn(),u.height,u.backgroundColor),f=(c=[],n.links.forEach(function(n){c.push(react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement(Ln,{to:n.path,label:n.name,active:n.isActive()}))}),c),p=styled_components__WEBPACK_IMPORTED_MODULE_4___default()($n)(qn());return react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement(s,null,react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement(p,null,n.title),react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement(gn,{width:"30px"}),f)}function Bn(n){var e=S(Object(react__WEBPACK_IMPORTED_MODULE_2__["useState"])(!1),2),r=(e[0],e[1]);Object(react__WEBPACK_IMPORTED_MODULE_2__["useEffect"])(function(){r(!0)},[]);Object(react__WEBPACK_IMPORTED_MODULE_2__["useContext"])(O).navbar;var c=Object(react__WEBPACK_IMPORTED_MODULE_2__["useContext"])(vn);return react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement(react__WEBPACK_IMPORTED_MODULE_2___default.a.Fragment,null,react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement(Un,{title:c.name,links:c.links}))}function Yn(){var n=E(["\n    display: flex;\n    flex-direction: column;\n    padding: ",";\n\n    // Mobile styles\n    ","\n  "]);return Yn=function(){return n},n}function Jn(n){var e=S(Object(react__WEBPACK_IMPORTED_MODULE_2__["useState"])(!1),2),r=(e[0],e[1]);Object(react__WEBPACK_IMPORTED_MODULE_2__["useEffect"])(function(){r(!0)},[]);Object(react__WEBPACK_IMPORTED_MODULE_2__["useContext"])(O);var c=styled_components__WEBPACK_IMPORTED_MODULE_4___default.a.div(Yn(),new yn(40,90,0,90),new cn("\n      flex-direction: column;\n      padding: ".concat(new yn(20,30),"; \n    ")));return react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement(gatsby_plugin_page_transitions__WEBPACK_IMPORTED_MODULE_5___default.a,null,react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement(Nn,null),react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement("div",null,react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement(Bn,null),react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement("div",{style:n.style},react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement(c,{style:n.style},n.children))))}function Gn(){var n=E(["\n      min-height: ","px;\n      display: flex;\n      ",";\n    "]);return Gn=function(){return n},n}Wn.propTypes={buttonRow:G.bool},Ln.defaultProps={label:"My label",link:"/",active:!1},Un.defaultProps={title:"Testing title",links:k.navbar.links};var Kn=function(n){function e(n){var t;return d(this,e),(t=w(this,b(e).call(this,n))).state={width:0,height:0},t.updateWindowDimensions=t.updateWindowDimensions.bind(x(t)),t}return v(e,react__WEBPACK_IMPORTED_MODULE_2__["Component"]),m(e,[{key:"componentDidMount",value:function(){this.updateWindowDimensions(),window.addEventListener("resize",this.updateWindowDimensions)}},{key:"componentWillUnmount",value:function(){window.removeEventListener("resize",this.updateWindowDimensions)}},{key:"updateWindowDimensions",value:function(){this.setState({width:window.innerWidth,height:window.innerHeight})}},{key:"render",value:function(){var n=styled_components__WEBPACK_IMPORTED_MODULE_4___default.a.div(Gn(),this.state.height-K.navbar.height,this.props.style);return react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement(n,null,this.props.children)}}]),e}();function Qn(){var n=E(["\ndisplay: flex;\nflex-direction: column;\nwidth: 100%"]);return Qn=function(){return n},n}var Xn=styled_components__WEBPACK_IMPORTED_MODULE_4___default.a.div(Qn());function Zn(n){return react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement(Jn,null,react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement(fn,null,react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement(Rn,{type:"h1"},"Sample"),react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement(pn,null,react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement(dn,null),react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement(dn,null))))}function ne(){var n=E(["\n      display: flex;\n      height: 100%;\n      align-items: center;\n      & > div {\n        overflow: hidden!important;\n        width: 100%;\n        border: 4px solid ",";\n      }\n      \n      // Make arrows bigger on carousel\n\n      & .control-next:before {\n        border-top: "," solid transparent!important;\n        border-bottom: "," solid transparent!important;\n        border-left: "," solid #fff!important;\n      }\n\n      & .control-prev:before {\n        border-top: "," solid transparent!important;\n        border-bottom: "," solid transparent!important;\n        border-right: "," solid #fff!important;\n      }\n    "]);return ne=function(){return n},n}function ee(){var n=E(["\n      max-height: 300px;\n      width: auto !important;\n    "]);return ee=function(){return n},n}var te=function(n){function e(){return d(this,e),w(this,b(e).apply(this,arguments))}return v(e,react__WEBPACK_IMPORTED_MODULE_2__["Component"]),m(e,[{key:"getCarouselPhotoElement",value:function(n){var e=styled_components__WEBPACK_IMPORTED_MODULE_4___default.a.img(ee()),r=[],o=!0,i=!1,a=void 0;try{for(var c,u=n[Symbol.iterator]();!(o=(c=u.next()).done);o=!0){var s=c.value;r.push(react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement("div",null,react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement(e,{src:s})))}}catch(n){i=!0,a=n}finally{try{o||null==u.return||u.return()}finally{if(i)throw a}}return r}},{key:"render",value:function(){var n=styled_components__WEBPACK_IMPORTED_MODULE_4___default.a.div(ne(),k.text.color,"20px","20px","20px","20px","20px","20px");return react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement(n,null,react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement(react_responsive_carousel__WEBPACK_IMPORTED_MODULE_8__["Carousel"],{showThumbs:!1},this.getCarouselPhotoElement(this.props.photos)))}}]),e}();function re(){var n=E(["\n      color: inherit;\n      &:hover {\n        color: inherit;\n      }\n    "]);return re=function(){return n},n}function oe(){var n=E(["\n      width: ","px;\n      height: ","px;\n      border-radius: ","px;\n      line-height: ","px;\n      text-align: center;\n      font-size: ","px;\n      cursor: pointer;\n      background-color: ",";\n      margin: 0 9px;\n      color: ",";\n      transition: 0.1s;\n      transition-timing-function: ease-out;\n\n      &:hover {\n        background-color: ",";\n        color: ",";\n      }\n\n      &:active {\n        background-color: ",";\n        color: ",";\n      }\n    "]);return oe=function(){return n},n}function ie(){var n=E(["\n      display: flex;\n      margin-top: 17px;\n      align-items: center;\n    "]);return ie=function(){return n},n}react_responsive_carousel__WEBPACK_IMPORTED_MODULE_8__["Carousel"].propTypes={photos:G.any};var ae=function(n){function e(){return d(this,e),w(this,b(e).apply(this,arguments))}return v(e,react__WEBPACK_IMPORTED_MODULE_2__["Component"]),m(e,[{key:"render",value:function(){var n=styled_components__WEBPACK_IMPORTED_MODULE_4___default.a.div(ie());return react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement(n,null,this.props.children)}}]),e}();ae.propTypes={};var ce=function(n){function e(){return d(this,e),w(this,b(e).apply(this,arguments))}return v(e,react__WEBPACK_IMPORTED_MODULE_2__["Component"]),m(e,[{key:"render",value:function(){var n=styled_components__WEBPACK_IMPORTED_MODULE_4___default.a.div(oe(),50,50,25,50,35,k.text.color,k.backgroundColor,k.link.color,k.text.color,k.link.color,k.text.color),e=styled_components__WEBPACK_IMPORTED_MODULE_4___default.a.a(re());return react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement(n,null,react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement(e,{href:this.props.href},this.props.children))}}]),e}();ce.propTypes={};
//# sourceMappingURL=index.es.js.map


/***/ }),

/***/ "../node_modules/react-responsive-carousel/lib/styles/carousel.min.css":
/*!*****************************************************************************!*\
  !*** ../node_modules/react-responsive-carousel/lib/styles/carousel.min.css ***!
  \*****************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {



/***/ }),

/***/ "./components/Boxes.js":
/*!*****************************!*\
  !*** ./components/Boxes.js ***!
  \*****************************/
/*! exports provided: BorderBox */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "BorderBox", function() { return BorderBox; });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! prop-types */ "prop-types");
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(prop_types__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! styled-components */ "styled-components");
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(styled_components__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _Colors__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./Colors */ "./components/Colors.js");
var _jsxFileName = "C:\\Users\\Robbie\\Repos\\OpenPolitics\\src\\components\\Boxes.js";
var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;




/**
 *  A bordered box.
 */

class BorderBox extends react__WEBPACK_IMPORTED_MODULE_0__["Component"] {
  render() {
    const Box = styled_components__WEBPACK_IMPORTED_MODULE_2___default.a.div`
      border: ${this.props.border};
      border-radius: 4px;
      padding: 20px;
      display: flex;
      flex-direction: ${this.props.horizontalScroll ? "row" : "column"};
      ${this.props.width ? `width: ${this.props.width}` : ``};
      ${this.props.height ? `height: ${this.props.height}` : ``};
      ${this.props.style};

      ${this.props.horizontalScroll ? "overflow-x: auto" : ""};
      ${this.props.verticalScroll ? "overflow-y: auto" : ""};

      &::-webkit-scrollbar-track {
        -webkit-box-shadow: inset 0 0 6px rgba(0, 0, 0, 0.3);
        background-color: #2b2b2b;
      }

      &::-webkit-scrollbar {
        width: 10px;
        background-color: ${_Colors__WEBPACK_IMPORTED_MODULE_3__["default"].backgroundColor};
      }

      &::-webkit-scrollbar-thumb {
        background-color: ${_Colors__WEBPACK_IMPORTED_MODULE_3__["default"].text.color};
        );
      }
    `;
    return __jsx(Box, {
      __source: {
        fileName: _jsxFileName,
        lineNumber: 39
      },
      __self: this
    }, this.props.children);
  }

}

BorderBox.propTypes = {
  width: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.string,
  // Should be like "50px"
  height: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.string,
  // Whether to scroll horizontally or vertically.
  horizontalScroll: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.bool,
  verticalScroll: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.bool
};
BorderBox.defaultProps = {
  border: `8px solid ${_Colors__WEBPACK_IMPORTED_MODULE_3__["default"].text.color};`
};


/***/ }),

/***/ "./components/Codify.js":
/*!******************************!*\
  !*** ./components/Codify.js ***!
  \******************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! prop-types */ "prop-types");
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(prop_types__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _Spacer__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./Spacer */ "./components/Spacer.js");
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! styled-components */ "styled-components");
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(styled_components__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _Colors__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./Colors */ "./components/Colors.js");
var _jsxFileName = "C:\\Users\\Robbie\\Repos\\OpenPolitics\\src\\components\\Codify.js";
var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;

/**
 *  A styling component, which puts < /> tags around its children
 */





/** Icons to display with text */

class TextIcon extends react__WEBPACK_IMPORTED_MODULE_0__["Component"] {
  render() {
    return __jsx(react__WEBPACK_IMPORTED_MODULE_0___default.a.Fragment, null, this.props.content);
  }

}

TextIcon.propTypes = {
  position: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.string // where the icon is to be displayed relative to the content (left, right, ...)
  // Sample component

};

class Codify extends react__WEBPACK_IMPORTED_MODULE_0__["Component"] {
  render() {
    const Wrapper = styled_components__WEBPACK_IMPORTED_MODULE_3___default.a.div`
      display: flex;
      align-items: center;
    `;
    /* 
      Icons currently hard-coded, but should be passed as a prop if 
      custom icons are needed for headers 
     */

    const MyIcon = styled_components__WEBPACK_IMPORTED_MODULE_3___default.a.span`
      font-size: ${this.props.fontSize};
      font-weight: bold;
      font-family: "Roboto Slab", sans-serif;
      color: ${this.props.color};
      opacity: ${this.props.opacity};
    `;

    const leftIcon = __jsx(MyIcon, {
      __source: {
        fileName: _jsxFileName,
        lineNumber: 40
      },
      __self: this
    }, "<");

    const rightIcon = __jsx(react__WEBPACK_IMPORTED_MODULE_0___default.a.Fragment, null, __jsx(_Spacer__WEBPACK_IMPORTED_MODULE_2__["default"], {
      width: this.props.rightTagSpacing,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 43
      },
      __self: this
    }), __jsx(MyIcon, {
      __source: {
        fileName: _jsxFileName,
        lineNumber: 44
      },
      __self: this
    }, " />"));

    return __jsx(Wrapper, {
      __source: {
        fileName: _jsxFileName,
        lineNumber: 49
      },
      __self: this
    }, __jsx(TextIcon, {
      position: "left",
      content: leftIcon,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 50
      },
      __self: this
    }), this.props.children, __jsx(TextIcon, {
      position: "right",
      content: rightIcon,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 52
      },
      __self: this
    }));
  }

}

Codify.propTypes = {
  color: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.string,
  fontSize: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.string,
  rightTagSpacing: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.string,
  opacity: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.string
};
Codify.defaultProps = {
  color: _Colors__WEBPACK_IMPORTED_MODULE_4__["default"].page.secondaryColor,
  fontSize: "69px",
  rightTagSpacing: "13px",
  opacity: "1"
};
/* harmony default export */ __webpack_exports__["default"] = (Codify);

/***/ }),

/***/ "./components/Colors.js":
/*!******************************!*\
  !*** ./components/Colors.js ***!
  \******************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/defineProperty */ "../node_modules/@babel/runtime-corejs2/helpers/esm/defineProperty.js");


/*
Styling for entire website. All common variables are being migrated here from
css/global-styles.css. 

This is to be replaced with React.Context, where this is an object passed 
through a color context
*/
class Colors {}

Object(_babel_runtime_corejs2_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_0__["default"])(Colors, "textColor", "#FEFFFE");

Object(_babel_runtime_corejs2_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_0__["default"])(Colors, "backgroundColor", "#F58C8C");

Object(_babel_runtime_corejs2_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_0__["default"])(Colors, "link", {
  color: '#6385a9',
  // also defined in global-styles.css
  colorActive: '#1565c0',
  colorHighlight: '#6385a9'
});

Object(_babel_runtime_corejs2_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_0__["default"])(Colors, "text", {
  color: Colors.textColor // also defined in global-styles.css

});

Object(_babel_runtime_corejs2_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_0__["default"])(Colors, "page", {
  backgroundColor: '#0f0f0f',
  secondaryColor: '#EB6D6D' // reddish

});

/* harmony default export */ __webpack_exports__["default"] = (Colors);

/***/ }),

/***/ "./components/Dimensions.js":
/*!**********************************!*\
  !*** ./components/Dimensions.js ***!
  \**********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
// Class converting css-style dimensions (padding etc.) to an object
class Dimensions {
  // e.g. padding: 0 5px;
  constructor(top, right, bottom = top, left = right) {
    // String values given
    if (typeof top === "string") {
      this.top = top;
      this.right = right;
      this.bottom = bottom;
      this.left = left;
    } else {
      // Numeric values given
      this.top = `${top}px`;
      this.right = `${right}px`;
      this.bottom = `${bottom}px`;
      this.left = `${left}px`;
    }
  }

  toString() {
    return `${this.top} ${this.right} ${this.bottom} ${this.left}`;
  }

}

/* harmony default export */ __webpack_exports__["default"] = (Dimensions);

/***/ }),

/***/ "./components/Layout.js":
/*!******************************!*\
  !*** ./components/Layout.js ***!
  \******************************/
/*! exports provided: Col, Row, LayoutWrapper */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Col", function() { return Col; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Row", function() { return Row; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LayoutWrapper", function() { return LayoutWrapper; });
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! styled-components */ "styled-components");
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(styled_components__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _Colors__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./Colors */ "./components/Colors.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! prop-types */ "prop-types");
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(prop_types__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _Views__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./Views */ "./components/Views.js");
var _jsxFileName = "C:\\Users\\Robbie\\Repos\\OpenPolitics\\src\\components\\Layout.js";
var __jsx = react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement;

/**
 * A component which defines Row and Col for layout
 */





const LayoutWrapper = styled_components__WEBPACK_IMPORTED_MODULE_0___default.a.div`
  display: flex;
  flex-direction: column;
  width: 100%;
`;
const Row = styled_components__WEBPACK_IMPORTED_MODULE_0___default.a.div`
  display: flex;
  flex-direction: row;
  flex: 1;

  ${new _Views__WEBPACK_IMPORTED_MODULE_4__["MobileView"](`
    flex-direction: column;
  `)}
`;
/**
 * Represents a column
 * @param {*} props 
 */

function Col(props) {
  const StyledCol = styled_components__WEBPACK_IMPORTED_MODULE_0___default.a.div`
    display: flex;
    flex-direction: column;
    margin: 0 40px 20px 0;
    width: ${props.width};

    ${new _Views__WEBPACK_IMPORTED_MODULE_4__["MobileView"](`
        width: 100%;
      `)}
  `;
  return __jsx(StyledCol, {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 42
    },
    __self: this
  }, props.children);
}

Col.propTypes = {
  width: prop_types__WEBPACK_IMPORTED_MODULE_3___default.a.string // Given as a string,
  // not as a number, e.g. 50%

};


/***/ }),

/***/ "./components/MyHelmet.js":
/*!********************************!*\
  !*** ./components/MyHelmet.js ***!
  \********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react_helmet__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react-helmet */ "react-helmet");
/* harmony import */ var react_helmet__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react_helmet__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _Colors__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./Colors */ "./components/Colors.js");
var _jsxFileName = "C:\\Users\\Robbie\\Repos\\OpenPolitics\\src\\components\\MyHelmet.js";
var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;
// Metadata for each page




function MyHelmet(props) {
  return __jsx("div", {
    className: "application",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 9
    },
    __self: this
  }, __jsx(react_helmet__WEBPACK_IMPORTED_MODULE_1__["Helmet"], {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 10
    },
    __self: this
  }, __jsx("meta", {
    charSet: "utf-8",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 11
    },
    __self: this
  }), __jsx("link", {
    href: "https://fonts.googleapis.com/css?family=Roboto+Slab:400,700|Roboto:300,400,700&display=swap",
    rel: "stylesheet",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 13
    },
    __self: this
  }), __jsx("title", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 18
    },
    __self: this
  }, props.title), __jsx("meta", {
    name: "viewport",
    content: "width=device-width, initial-scale=1.0",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 19
    },
    __self: this
  }), __jsx("style", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 23
    },
    __self: this
  }, `
              body {
                background-color: ${_Colors__WEBPACK_IMPORTED_MODULE_2__["default"].backgroundColor};
                margin: 0;
              }
            `)));
}

MyHelmet.defaultProps = {
  title: "Robbie Cook"
};
/* harmony default export */ __webpack_exports__["default"] = (MyHelmet);

/***/ }),

/***/ "./components/MyLink.js":
/*!******************************!*\
  !*** ./components/MyLink.js ***!
  \******************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* Defines a page link */


class MyLink {
  constructor(name, path, component, exact = false) {
    this.name = name;
    this.path = path;
    this.exact = exact; // whether or not the path has to be exact
  }

}

/* harmony default export */ __webpack_exports__["default"] = (MyLink);

/***/ }),

/***/ "./components/NavigationBar.js":
/*!*************************************!*\
  !*** ./components/NavigationBar.js ***!
  \*************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _material_ui_core_AppBar__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @material-ui/core/AppBar */ "@material-ui/core/AppBar");
/* harmony import */ var _material_ui_core_AppBar__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_material_ui_core_AppBar__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _material_ui_core_styles__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @material-ui/core/styles */ "@material-ui/core/styles");
/* harmony import */ var _material_ui_core_styles__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_material_ui_core_styles__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _material_ui_core_Tabs__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @material-ui/core/Tabs */ "@material-ui/core/Tabs");
/* harmony import */ var _material_ui_core_Tabs__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_material_ui_core_Tabs__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _material_ui_core_Toolbar__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @material-ui/core/Toolbar */ "@material-ui/core/Toolbar");
/* harmony import */ var _material_ui_core_Toolbar__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_material_ui_core_Toolbar__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! styled-components */ "styled-components");
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(styled_components__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _Colors__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./Colors */ "./components/Colors.js");
/* harmony import */ var _Sizes_js__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./Sizes.js */ "./components/Sizes.js");
/* harmony import */ var _Views__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./Views */ "./components/Views.js");
/* harmony import */ var _MyLink__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./MyLink */ "./components/MyLink.js");
/* harmony import */ var _typography__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./typography */ "./components/typography/index.js");
/* harmony import */ var _Spacer__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./Spacer */ "./components/Spacer.js");
var _jsxFileName = "C:\\Users\\Robbie\\Repos\\OpenPolitics\\src\\components\\NavigationBar.js";
var __jsx = react__WEBPACK_IMPORTED_MODULE_4___default.a.createElement;













class NavigationBar extends react__WEBPACK_IMPORTED_MODULE_4___default.a.Component {
  constructor(props) {
    super(props);
  }

  render() {
    /* CSS */
    const StyledAppBar = Object(_material_ui_core_styles__WEBPACK_IMPORTED_MODULE_1__["withStyles"])({
      root: {
        backgroundColor: _Colors__WEBPACK_IMPORTED_MODULE_6__["default"].backgroundColor,
        height: _Sizes_js__WEBPACK_IMPORTED_MODULE_7__["default"].navbar.height
      }
    })(_material_ui_core_AppBar__WEBPACK_IMPORTED_MODULE_0___default.a);
    const StyledTabs = Object(_material_ui_core_styles__WEBPACK_IMPORTED_MODULE_1__["withStyles"])({
      root: {
        // Not ideal, should be done with breakpoints in theme
        // re: https://stackoverflow.com/questions/45847090/media-queries-in-material-ui-components
        [`@media (max-width:${_Views__WEBPACK_IMPORTED_MODULE_8__["Sizes"].mobileSize}px)`]: {
          display: "none"
        }
      }
    })(_material_ui_core_Tabs__WEBPACK_IMPORTED_MODULE_2___default.a);
    const StyledToolbar = styled_components__WEBPACK_IMPORTED_MODULE_5___default()(_material_ui_core_Toolbar__WEBPACK_IMPORTED_MODULE_3___default.a)`
      z-index: 150;
      margin-left: 0;
      padding: 0;
      height: ${_Sizes_js__WEBPACK_IMPORTED_MODULE_7__["default"].navbar.height};
      ${new _Views__WEBPACK_IMPORTED_MODULE_8__["MobileView"](`
        margin-left: 20px;
      `)};
    `;
    let navigationLinks = [new _MyLink__WEBPACK_IMPORTED_MODULE_9__["default"]("Home", "/"), new _MyLink__WEBPACK_IMPORTED_MODULE_9__["default"]("News", "/news")];
    let heading = "Open Politics";
    return __jsx(StyledAppBar, {
      position: "static",
      color: "primary",
      colorPrimary: true,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 52
      },
      __self: this
    }, __jsx(StyledToolbar, {
      __source: {
        fileName: _jsxFileName,
        lineNumber: 53
      },
      __self: this
    }, heading && __jsx(react__WEBPACK_IMPORTED_MODULE_4___default.a.Fragment, null, __jsx(_typography__WEBPACK_IMPORTED_MODULE_10__["Heading"], {
      type: "h3",
      margin: "0",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 56
      },
      __self: this
    }, heading), __jsx(_Spacer__WEBPACK_IMPORTED_MODULE_11__["default"], {
      width: "56px",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 59
      },
      __self: this
    })), __jsx(StyledTabs, {
      __source: {
        fileName: _jsxFileName,
        lineNumber: 62
      },
      __self: this
    }, (() => {
      let array = [];
      let LinkContainer = styled_components__WEBPACK_IMPORTED_MODULE_5___default.a.div`
                margin-right: 30px;
              `;
      navigationLinks.map(item => {
        // If the current URL is the same as the item path, mark Tab as active
        array.push(__jsx(LinkContainer, {
          __source: {
            fileName: _jsxFileName,
            lineNumber: 72
          },
          __self: this
        }, __jsx(_typography__WEBPACK_IMPORTED_MODULE_10__["Link"], {
          style: `
                          line-height: ${_Sizes_js__WEBPACK_IMPORTED_MODULE_7__["default"].navbar.height};
                          position: relative;
                          bottom: -5px;
                          color: ${_Colors__WEBPACK_IMPORTED_MODULE_6__["default"].text.color}
                        `,
          __source: {
            fileName: _jsxFileName,
            lineNumber: 73
          },
          __self: this
        }, item.name)));
      });
      return array;
    })())));
  }

}

/* harmony default export */ __webpack_exports__["default"] = (NavigationBar);

/***/ }),

/***/ "./components/Page.js":
/*!****************************!*\
  !*** ./components/Page.js ***!
  \****************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! styled-components */ "styled-components");
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(styled_components__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _Colors__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./Colors */ "./components/Colors.js");
/* harmony import */ var _NavigationBar__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./NavigationBar */ "./components/NavigationBar.js");
/* harmony import */ var _MyLink__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./MyLink */ "./components/MyLink.js");
/* harmony import */ var _MyHelmet__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./MyHelmet */ "./components/MyHelmet.js");
/* harmony import */ var _Views__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./Views */ "./components/Views.js");
/* harmony import */ var _Dimensions__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./Dimensions */ "./components/Dimensions.js");
var _jsxFileName = "C:\\Users\\Robbie\\Repos\\OpenPolitics\\src\\components\\Page.js";
var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;
// Root container for a page

/* Imports */

/* Stylesheets etc. */







 // Styles for component

const StyledPage = styled_components__WEBPACK_IMPORTED_MODULE_1___default.a.div`
  background-color: ${_Colors__WEBPACK_IMPORTED_MODULE_2__["default"].backgroundColor};

  display: flex;
  flex-direction: column;
  padding: ${new _Dimensions__WEBPACK_IMPORTED_MODULE_7__["default"](40, 90, 0, 90)};

  // Mobile styles
  ${new _Views__WEBPACK_IMPORTED_MODULE_6__["MobileView"](`
    flex-direction: column;
    padding: ${new _Dimensions__WEBPACK_IMPORTED_MODULE_7__["default"](20, 30)}; 
  `)}
`;
/* Navigation links, which are passed to navbar.js */

/**
 * Define a React Context for all child components to use
 * Made to make finding colors easier
 */

const ColorsContext = react__WEBPACK_IMPORTED_MODULE_0___default.a.createContext(_Colors__WEBPACK_IMPORTED_MODULE_2__["default"]); // Main Page component

class WebPage extends react__WEBPACK_IMPORTED_MODULE_0__["Component"] {
  constructor(props) {
    super(props);
  }

  render() {
    return __jsx(ColorsContext.Provider, {
      value: _Colors__WEBPACK_IMPORTED_MODULE_2__["default"],
      __source: {
        fileName: _jsxFileName,
        lineNumber: 46
      },
      __self: this
    }, __jsx(_MyHelmet__WEBPACK_IMPORTED_MODULE_5__["default"], {
      title: "OpenPolitics",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 47
      },
      __self: this
    }), " ", __jsx("div", {
      __source: {
        fileName: _jsxFileName,
        lineNumber: 48
      },
      __self: this
    }, __jsx(_NavigationBar__WEBPACK_IMPORTED_MODULE_3__["default"], {
      __source: {
        fileName: _jsxFileName,
        lineNumber: 49
      },
      __self: this
    }), __jsx("div", {
      style: this.props.style,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 50
      },
      __self: this
    }, __jsx(StyledPage, {
      style: this.props.style,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 51
      },
      __self: this
    }, this.props.children))));
  }

}

/* harmony default export */ __webpack_exports__["default"] = (WebPage);

/***/ }),

/***/ "./components/Sizes.js":
/*!*****************************!*\
  !*** ./components/Sizes.js ***!
  \*****************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/defineProperty */ "../node_modules/@babel/runtime-corejs2/helpers/esm/defineProperty.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! prop-types */ "prop-types");
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(prop_types__WEBPACK_IMPORTED_MODULE_2__);



/**
 *  Class to temporarily store sizes until Context /
 *  Redux is implemented
*/

class Sizes {}

Object(_babel_runtime_corejs2_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_0__["default"])(Sizes, "navbar", {
  height: "64px"
});

Object(_babel_runtime_corejs2_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_0__["default"])(Sizes, "page", {
  sideMargin: "90px"
});

/* harmony default export */ __webpack_exports__["default"] = (Sizes);

/***/ }),

/***/ "./components/Spacer.js":
/*!******************************!*\
  !*** ./components/Spacer.js ***!
  \******************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return Spacer; });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! styled-components */ "styled-components");
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(styled_components__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! prop-types */ "prop-types");
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(prop_types__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _Dimensions__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./Dimensions */ "./components/Dimensions.js");
var _jsxFileName = "C:\\Users\\Robbie\\Repos\\OpenPolitics\\src\\components\\Spacer.js";
var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;




/**
 * Component for providing space in a UI
 *
 * Values must be given like so
 * <Spacer width="40px" />
 */

function Spacer(props) {
  const StyledSpacer = styled_components__WEBPACK_IMPORTED_MODULE_1___default.a.div`
    height: ${props.height};
    width: ${props.width};
  `;
  return __jsx(StyledSpacer, {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 17
    },
    __self: this
  });
}
Spacer.propTypes = {
  width: prop_types__WEBPACK_IMPORTED_MODULE_2___default.a.string,
  height: prop_types__WEBPACK_IMPORTED_MODULE_2___default.a.string
};

/***/ }),

/***/ "./components/Views.js":
/*!*****************************!*\
  !*** ./components/Views.js ***!
  \*****************************/
/*! exports provided: MobileView, Sizes */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MobileView", function() { return MobileView; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Sizes", function() { return Sizes; });
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/defineProperty */ "../node_modules/@babel/runtime-corejs2/helpers/esm/defineProperty.js");
/* harmony import */ var _Colors__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./Colors */ "./components/Colors.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! prop-types */ "prop-types");
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(prop_types__WEBPACK_IMPORTED_MODULE_3__);




/**
 * Sizing of views
 */

class Sizes {}
/**
 * Styles to apply when screen is mobile-sized
 */


Object(_babel_runtime_corejs2_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_0__["default"])(Sizes, "mobileSize", "900");

class MobileView {
  constructor(style) {
    this.style = style;
  }

  toString() {
    const mSize = Sizes.mobileSize;
    return `
      @media (max-width: ${mSize}px) {
        ${this.style};
      }`;
  }

}



/***/ }),

/***/ "./components/animation/TransitionWrapper.js":
/*!***************************************************!*\
  !*** ./components/animation/TransitionWrapper.js ***!
  \***************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/defineProperty */ "../node_modules/@babel/runtime-corejs2/helpers/esm/defineProperty.js");
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! styled-components */ "styled-components");
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(styled_components__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var react_pose__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react-pose */ "react-pose");
/* harmony import */ var react_pose__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react_pose__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _Colors__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../Colors */ "./components/Colors.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _fortawesome_react_fontawesome__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @fortawesome/react-fontawesome */ "@fortawesome/react-fontawesome");
/* harmony import */ var _fortawesome_react_fontawesome__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_fortawesome_react_fontawesome__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _fortawesome_free_solid_svg_icons__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @fortawesome/free-solid-svg-icons */ "@fortawesome/free-solid-svg-icons");
/* harmony import */ var _fortawesome_free_solid_svg_icons__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(_fortawesome_free_solid_svg_icons__WEBPACK_IMPORTED_MODULE_6__);

var _jsxFileName = "C:\\Users\\Robbie\\Repos\\OpenPolitics\\src\\components\\animation\\TransitionWrapper.js";
var __jsx = react__WEBPACK_IMPORTED_MODULE_4___default.a.createElement;






/**
 * A loading screen
 */

class TransitionWrapper extends react__WEBPACK_IMPORTED_MODULE_4__["PureComponent"] {
  constructor(props) {
    super(props);

    Object(_babel_runtime_corejs2_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_0__["default"])(this, "PosedDiv", react_pose__WEBPACK_IMPORTED_MODULE_2___default.a.div({
      visible: {
        opacity: 1,
        height: "auto"
      },
      hidden: {
        opacity: 0,
        height: "0px",
        transition: {
          default: {
            ease: "linear",
            duration: 100
          }
        }
      }
    }));

    Object(_babel_runtime_corejs2_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_0__["default"])(this, "StyledDiv", styled_components__WEBPACK_IMPORTED_MODULE_1___default()(this.PosedDiv)``);

    Object(_babel_runtime_corejs2_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_0__["default"])(this, "SpinnerWrapper", styled_components__WEBPACK_IMPORTED_MODULE_1___default.a.div`
    min-width: 100px;
    color: ${_Colors__WEBPACK_IMPORTED_MODULE_3__["default"].text.color};
    animation-name: spin;
    animation-duration: 2500ms;
    animation-iteration-count: infinite;
    animation-timing-function: linear;

    @keyframes spin {
      from {
        transform: rotate(0deg);
      }
      to {
        transform: rotate(360deg);
      }
    }
  `);
  }

  render() {
    return __jsx(react__WEBPACK_IMPORTED_MODULE_4___default.a.Fragment, null, __jsx(this.StyledDiv, {
      pose: this.props.loaded ? "hidden" : "visible",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 54
      },
      __self: this
    }, __jsx(this.SpinnerWrapper, {
      __source: {
        fileName: _jsxFileName,
        lineNumber: 55
      },
      __self: this
    }, __jsx(_fortawesome_react_fontawesome__WEBPACK_IMPORTED_MODULE_5__["FontAwesomeIcon"], {
      style: {
        fontSize: "65px",
        display: "flex",
        margin: "auto"
      },
      icon: _fortawesome_free_solid_svg_icons__WEBPACK_IMPORTED_MODULE_6__["faCircleNotch"],
      __source: {
        fileName: _jsxFileName,
        lineNumber: 56
      },
      __self: this
    }))), __jsx(this.StyledDiv, {
      pose: this.props.loaded ? "visible" : "hidden",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 62
      },
      __self: this
    }, this.props.children));
  }

}

/* harmony default export */ __webpack_exports__["default"] = (TransitionWrapper);

/***/ }),

/***/ "./components/politics/MemberPage.js":
/*!*******************************************!*\
  !*** ./components/politics/MemberPage.js ***!
  \*******************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! prop-types */ "prop-types");
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(prop_types__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! styled-components */ "styled-components");
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(styled_components__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _animation_TransitionWrapper__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../animation/TransitionWrapper */ "./components/animation/TransitionWrapper.js");
/* harmony import */ var _Boxes__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../Boxes */ "./components/Boxes.js");
/* harmony import */ var _Colors__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../Colors */ "./components/Colors.js");
/* harmony import */ var _typography__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../typography */ "./components/typography/index.js");
/* harmony import */ var _fortawesome_react_fontawesome__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @fortawesome/react-fontawesome */ "@fortawesome/react-fontawesome");
/* harmony import */ var _fortawesome_react_fontawesome__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(_fortawesome_react_fontawesome__WEBPACK_IMPORTED_MODULE_7__);
/* harmony import */ var _fortawesome_free_solid_svg_icons__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @fortawesome/free-solid-svg-icons */ "@fortawesome/free-solid-svg-icons");
/* harmony import */ var _fortawesome_free_solid_svg_icons__WEBPACK_IMPORTED_MODULE_8___default = /*#__PURE__*/__webpack_require__.n(_fortawesome_free_solid_svg_icons__WEBPACK_IMPORTED_MODULE_8__);
var _jsxFileName = "C:\\Users\\Robbie\\Repos\\OpenPolitics\\src\\components\\politics\\MemberPage.js";
var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;









const StyledMemberImage = styled_components__WEBPACK_IMPORTED_MODULE_2___default.a.img``;
const StyledFontAwesomeIcon = styled_components__WEBPACK_IMPORTED_MODULE_2___default()(_fortawesome_react_fontawesome__WEBPACK_IMPORTED_MODULE_7__["FontAwesomeIcon"])`
  color: ${_Colors__WEBPACK_IMPORTED_MODULE_5__["default"].text.color};
  font-size: 53px;
`;
const Description = styled_components__WEBPACK_IMPORTED_MODULE_2___default()(_typography__WEBPACK_IMPORTED_MODULE_6__["Text"])``;
const MemberPageWrapper = styled_components__WEBPACK_IMPORTED_MODULE_2___default.a.div`
  display: flex;
  justify-content: center;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`; // Sample component

function MemberPage(props) {
  return __jsx(MemberPageWrapper, {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 32
    },
    __self: this
  }, __jsx(_Boxes__WEBPACK_IMPORTED_MODULE_4__["BorderBox"], {
    style: `
          border: 4px solid ${_Colors__WEBPACK_IMPORTED_MODULE_5__["default"].text.color}; 
          width: fit-content;
        `,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 33
    },
    __self: this
  }, props.memberImage ? __jsx(StyledMemberImage, {
    src: props.memberImage,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 40
    },
    __self: this
  }) : __jsx(StyledFontAwesomeIcon, {
    icon: _fortawesome_free_solid_svg_icons__WEBPACK_IMPORTED_MODULE_8__["faUserCircle"],
    __source: {
      fileName: _jsxFileName,
      lineNumber: 42
    },
    __self: this
  })), __jsx(_typography__WEBPACK_IMPORTED_MODULE_6__["Heading"], {
    type: "h2",
    noMargin: true,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 45
    },
    __self: this
  }, props.memberName), __jsx(Description, {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 48
    },
    __self: this
  }, props.memberDescription));
}

MemberPage.propTypes = {
  memberImage: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.object,
  memberName: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.string,
  memberDescription: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.string
};
MemberPage.defaultProps = {
  memberImage: null,
  memberName: "Jim Bob",
  memberDescription: "Jim Bob is a valued MP from deep in the 'naki. \
    His interests are farming, shooting, and dungeons and dragons."
};
/* harmony default export */ __webpack_exports__["default"] = (MemberPage);

/***/ }),

/***/ "./components/politics/ParliamentGraphic.js":
/*!**************************************************!*\
  !*** ./components/politics/ParliamentGraphic.js ***!
  \**************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/defineProperty */ "../node_modules/@babel/runtime-corejs2/helpers/esm/defineProperty.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! prop-types */ "prop-types");
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(prop_types__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! styled-components */ "styled-components");
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(styled_components__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _robbie_cook_react_components__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @robbie-cook/react-components */ "../node_modules/@robbie-cook/react-components/build/index.es.js");
/* harmony import */ var _MemberPage__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./MemberPage */ "./components/politics/MemberPage.js");
/* harmony import */ var _Colors__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../Colors */ "./components/Colors.js");

var _jsxFileName = "C:\\Users\\Robbie\\Repos\\OpenPolitics\\src\\components\\politics\\ParliamentGraphic.js";
var __jsx = react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement;







function Seat(props) {
  const StyledSeat = styled_components__WEBPACK_IMPORTED_MODULE_3___default.a.div`
    width: ${props.size};
    height: ${props.size};
    background-color: ${props.color};
    border-radius: 100%;
    margin: 5px;
    flex-shrink: 0;
    position: absolute;
    bottom: ${props.position[0]}px;
    left: ${props.position[1]}px;
  `;
  return __jsx(StyledSeat, {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 20
    },
    __self: this
  });
}

Seat.propTypes = {
  color: prop_types__WEBPACK_IMPORTED_MODULE_2___default.a.string,
  size: prop_types__WEBPACK_IMPORTED_MODULE_2___default.a.string,
  id: prop_types__WEBPACK_IMPORTED_MODULE_2___default.a.number,
  position: prop_types__WEBPACK_IMPORTED_MODULE_2___default.a.arrayOf(prop_types__WEBPACK_IMPORTED_MODULE_2___default.a.number)
};
Seat.defaultProps = {
  color: _Colors__WEBPACK_IMPORTED_MODULE_6__["default"].text.color,
  size: "14px",
  id: 0,
  position: [0, 0] // ParliamentGraphic component

};

class ParliamentGraphic extends react__WEBPACK_IMPORTED_MODULE_1__["Component"] {
  constructor(props) {
    super(props);

    Object(_babel_runtime_corejs2_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_0__["default"])(this, "size", "300px");

    Object(_babel_runtime_corejs2_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_0__["default"])(this, "StyledSeatWrapper", styled_components__WEBPACK_IMPORTED_MODULE_3___default.a.div`
    display: flex;
    flex-direction: row;
    flex-wrap: wrap;
    position: relative;
    width: ${this.size};
    height: ${this.size};
  `);

    this.state = {
      seatingData: null,
      membersData: null,
      partyData: null // Updating functions bound to this

    };

    var updateSeatingData = function (data) {
      this.setState({
        seatingData: data
      });
    }.bind(this);

    var updateMembersData = function (data) {
      this.setState({
        membersData: data
      });
    }.bind(this);

    var updatePartyData = function (data) {
      this.setState({
        partyData: data
      });
    }.bind(this); // Queries for the data
    // TODO: implement queries to API e.g. api.robbie.pw/politics/members

  }

  generateSeats(seatingData) {
    if (!seatingData) {
      return;
    }

    let jsxArray = [];
    seatingData.docs.forEach(element => jsxArray.push(__jsx(Seat, {
      id: element.id,
      position: element.position,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 69
      },
      __self: this
    })));
    return jsxArray;
  }

  render() {
    return __jsx(_robbie_cook_react_components__WEBPACK_IMPORTED_MODULE_4__["Transition"], {
      loaded: this.state.seatingData,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 86
      },
      __self: this
    }, __jsx(this.StyledSeatWrapper, {
      __source: {
        fileName: _jsxFileName,
        lineNumber: 87
      },
      __self: this
    }, this.generateSeats(this.state.seatingData, this.positions)));
  }

}

/* harmony default export */ __webpack_exports__["default"] = (ParliamentGraphic);

/***/ }),

/***/ "./components/typography/Heading.js":
/*!******************************************!*\
  !*** ./components/typography/Heading.js ***!
  \******************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return Heading; });
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! styled-components */ "styled-components");
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(styled_components__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! prop-types */ "prop-types");
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(prop_types__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _Colors__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../Colors */ "./components/Colors.js");
/* harmony import */ var _Spacer__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../Spacer */ "./components/Spacer.js");
/* harmony import */ var _Codify__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../Codify */ "./components/Codify.js");
var _jsxFileName = "C:\\Users\\Robbie\\Repos\\OpenPolitics\\src\\components\\typography\\Heading.js";
var __jsx = react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement;






/**
 *  Get appropriate heading
 *  Type: h1, h2, etc,
 *  Content: The child elements
 */

function getHeading(props, type, className) {
  const myStyles = `
        font-family: "Roboto Slab", sans-serif;
        font-weight: bold;
        margin: ${props.noMargin ? "0px" : props.margin};
        text-transform: lowercase;
        color: ${_Colors__WEBPACK_IMPORTED_MODULE_3__["default"].text.color};
      `;
  const h1Height = "53px";
  const H1 = styled_components__WEBPACK_IMPORTED_MODULE_0___default.a.h1`
        ${myStyles}
        font-size: ${h1Height};
        line-height: ${h1Height};
      `; // H2 inherits and overrides styles from H1

  const H2 = styled_components__WEBPACK_IMPORTED_MODULE_0___default.a.h2`
    ${myStyles}
    font-size: 40px;
  `;
  const H3 = styled_components__WEBPACK_IMPORTED_MODULE_0___default.a.h3`
    ${myStyles}
    font-size: 30px;
  `;
  const H4 = styled_components__WEBPACK_IMPORTED_MODULE_0___default.a.h4`
    ${myStyles}
    font-size: 25px;
  `;
  const H5 = styled_components__WEBPACK_IMPORTED_MODULE_0___default.a.h5`
    ${myStyles}
    font-size: 20px;
  `;
  let headingElementToUse = ""; // Probably should use TypeScript for this

  if (type === "h1" || type === undefined) {
    headingElementToUse = H1;
  } else if (type === "h2") {
    headingElementToUse = H2;
  } else if (type === "h3") {
    headingElementToUse = H3;
  } else if (type === "h4") {
    headingElementToUse = H4;
  } else if (type === "h5") {
    headingElementToUse = H5;
  }

  const headingElement = react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(headingElementToUse, {
    className: className
  }, props.children);
  return __jsx(react__WEBPACK_IMPORTED_MODULE_1___default.a.Fragment, null, props.codify ? __jsx(_Codify__WEBPACK_IMPORTED_MODULE_5__["default"], {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 73
    },
    __self: this
  }, headingElement) : headingElement);
}
/**
 * Heading section for a page
 * Should be used for all headings. Currently, only supports h1 and h2.
 * Example usage: <Heading type="h2">My heading</Heading>
 */


function Heading(props) {
  const HeadingWrapper = styled_components__WEBPACK_IMPORTED_MODULE_0___default.a.div`
    display: flex;
    width: fit-content;
    & * {
      align-self: center;
    }
    ${props.center && "align-self: center"};
    ${props.style};
  `;
  return __jsx(HeadingWrapper, {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 93
    },
    __self: this
  }, getHeading(props, props.type, props.className));
}
Heading.propTypes = {
  type: prop_types__WEBPACK_IMPORTED_MODULE_2___default.a.string,
  codify: prop_types__WEBPACK_IMPORTED_MODULE_2___default.a.bool,
  style: prop_types__WEBPACK_IMPORTED_MODULE_2___default.a.string,
  margin: prop_types__WEBPACK_IMPORTED_MODULE_2___default.a.string,
  center: prop_types__WEBPACK_IMPORTED_MODULE_2___default.a.bool,
  noMargin: prop_types__WEBPACK_IMPORTED_MODULE_2___default.a.bool
};
Heading.defaultProps = {
  margin: "0 0 20px 0;",
  center: false,
  noMargin: false
};

/***/ }),

/***/ "./components/typography/Link.js":
/*!***************************************!*\
  !*** ./components/typography/Link.js ***!
  \***************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return Link; });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! styled-components */ "styled-components");
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(styled_components__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _Colors__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../Colors */ "./components/Colors.js");
var _jsxFileName = "C:\\Users\\Robbie\\Repos\\OpenPolitics\\src\\components\\typography\\Link.js";
var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;



/**
 *  Common components relating to text. This includes
 *  <Text> and <Heading>.
 */

function Link(props) {
  const StyledLink = styled_components__WEBPACK_IMPORTED_MODULE_1___default.a.a`
    font-family: "Roboto", sans-serif;
    color: ${_Colors__WEBPACK_IMPORTED_MODULE_2__["default"].link.color};
    ${props.style};
  `;
  return __jsx(StyledLink, {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 15
    },
    __self: this
  }, props.children);
}
Link.defaultProps = {
  style: ""
};

/***/ }),

/***/ "./components/typography/Text.js":
/*!***************************************!*\
  !*** ./components/typography/Text.js ***!
  \***************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return Text; });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! styled-components */ "styled-components");
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(styled_components__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _Colors__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../Colors */ "./components/Colors.js");
var _jsxFileName = "C:\\Users\\Robbie\\Repos\\OpenPolitics\\src\\components\\typography\\Text.js";
var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;



/**
 * Text element for a page.
 * Should be used in place of <p>, because this
 * is a globally-styled version
 */

function Text(props) {
  const Text = styled_components__WEBPACK_IMPORTED_MODULE_1___default.a.p`
    margin: 12px 0;

    font-family: "Roboto", sans-serif;
    color: ${props.color};
    ${props.style};
  `;
  return __jsx(Text, {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 18
    },
    __self: this
  }, props.children);
}
Text.defaultProps = {
  style: "",
  color: _Colors__WEBPACK_IMPORTED_MODULE_2__["default"].text.color
};

/***/ }),

/***/ "./components/typography/index.js":
/*!****************************************!*\
  !*** ./components/typography/index.js ***!
  \****************************************/
/*! exports provided: Heading, Text, Link */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _Heading_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./Heading.js */ "./components/typography/Heading.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "Heading", function() { return _Heading_js__WEBPACK_IMPORTED_MODULE_0__["default"]; });

/* harmony import */ var _Text__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./Text */ "./components/typography/Text.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "Text", function() { return _Text__WEBPACK_IMPORTED_MODULE_1__["default"]; });

/* harmony import */ var _Link__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./Link */ "./components/typography/Link.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "Link", function() { return _Link__WEBPACK_IMPORTED_MODULE_2__["default"]; });






/***/ }),

/***/ "./components/ui-components/ProgressBar.js":
/*!*************************************************!*\
  !*** ./components/ui-components/ProgressBar.js ***!
  \*************************************************/
/*! exports provided: ProgressBar, ProgressBarSectionData */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ProgressBar", function() { return ProgressBar; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ProgressBarSectionData", function() { return ProgressBarSectionData; });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! prop-types */ "prop-types");
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(prop_types__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! styled-components */ "styled-components");
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(styled_components__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _animation_TransitionWrapper__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../animation/TransitionWrapper */ "./components/animation/TransitionWrapper.js");
var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;




function ProgressBar(props) {
  const width = 300;
  const ProgressBarWrapper = styled_components__WEBPACK_IMPORTED_MODULE_2___default.a.div`
    border: 8px solid white;
    border-radius: 100px;
    width: ${width}px;
    height: 40px;
  `;

  var getProgressBarSectionRender = function (section) {} // const myWidth = (100 / width) * section.getPercent() 
  // var sections = (() => {
  //   let jsx = []
  //   props.sections.forEach((section) => {
  //     jsx.append(getProgressBarSectionRender(section))
  //   })
  // })()
  ;

  return (// <ProgressBarWrapper>
    //   {sections}
    // </ProgressBarWrapper>
    __jsx(react__WEBPACK_IMPORTED_MODULE_0___default.a.Fragment, null)
  );
} // Represents a portion of the progress bar.
// e.g index, percent, etc.

function ProgressBarSectionData(index = 0, percent = 50, color = 'green') {
  // The data which represents a section of the progress bar  
  const data = {
    index: index,
    percent: percent,
    color: color
  };

  let getIndex = function () {
    return data.index;
  };

  let getPercent = function () {
    return data.percent;
  };

  let getColor = function () {
    return data.color;
  };
} // Given a precalculated width, gives a progress bar graphic
// Internal function

function ProgressBarSection(props) {
  let styledProgressBarSection = styled_components__WEBPACK_IMPORTED_MODULE_2___default.a.div`
    e
  `;
  return;
}

ProgressBar.defaultProps = {
  sections: [new ProgressBarSectionData()]
};

/***/ }),

/***/ "./pages/index.js":
/*!************************!*\
  !*** ./pages/index.js ***!
  \************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return Index; });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _components_Boxes__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../components/Boxes */ "./components/Boxes.js");
/* harmony import */ var _components_Layout__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../components/Layout */ "./components/Layout.js");
/* harmony import */ var _components_Page__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../components/Page */ "./components/Page.js");
/* harmony import */ var _components_politics_MemberPage__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../components/politics/MemberPage */ "./components/politics/MemberPage.js");
/* harmony import */ var _components_politics_ParliamentGraphic__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../components/politics/ParliamentGraphic */ "./components/politics/ParliamentGraphic.js");
/* harmony import */ var _components_typography__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../components/typography */ "./components/typography/index.js");
/* harmony import */ var _components_ui_components_ProgressBar__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../components/ui-components/ProgressBar */ "./components/ui-components/ProgressBar.js");
/* harmony import */ var _robbie_cook_react_components__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @robbie-cook/react-components */ "../node_modules/@robbie-cook/react-components/build/index.es.js");
var _jsxFileName = "C:\\Users\\Robbie\\Repos\\OpenPolitics\\src\\pages\\index.js";
var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;








 // Main Page component

function Index(props) {
  // Render
  return __jsx(_robbie_cook_react_components__WEBPACK_IMPORTED_MODULE_8__["Page"], {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 19
    },
    __self: this
  }, __jsx(_components_Layout__WEBPACK_IMPORTED_MODULE_2__["LayoutWrapper"], {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 20
    },
    __self: this
  }, __jsx(_components_typography__WEBPACK_IMPORTED_MODULE_6__["Heading"], {
    type: "h1",
    center: true,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 21
    },
    __self: this
  }, "Parliament"), __jsx(_components_Layout__WEBPACK_IMPORTED_MODULE_2__["Row"], {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 24
    },
    __self: this
  }, __jsx(_components_Layout__WEBPACK_IMPORTED_MODULE_2__["Col"], {
    width: "50%",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 25
    },
    __self: this
  }, __jsx(_components_Boxes__WEBPACK_IMPORTED_MODULE_1__["BorderBox"], {
    style: "max-width: 300px; margin: auto;",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 26
    },
    __self: this
  }, __jsx(_components_politics_ParliamentGraphic__WEBPACK_IMPORTED_MODULE_5__["default"], {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 27
    },
    __self: this
  }))), __jsx(_components_Layout__WEBPACK_IMPORTED_MODULE_2__["Col"], {
    width: "50%",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 30
    },
    __self: this
  }, __jsx(_components_Boxes__WEBPACK_IMPORTED_MODULE_1__["BorderBox"], {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 31
    },
    __self: this
  }, __jsx(_components_politics_MemberPage__WEBPACK_IMPORTED_MODULE_4__["default"], {
    member: props.currentMember,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 32
    },
    __self: this
  })))), __jsx(_components_typography__WEBPACK_IMPORTED_MODULE_6__["Heading"], {
    type: "h2",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 37
    },
    __self: this
  }, "Balance of power"), __jsx(_components_ui_components_ProgressBar__WEBPACK_IMPORTED_MODULE_7__["ProgressBar"], {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 38
    },
    __self: this
  })));
}

/***/ }),

/***/ 3:
/*!******************************!*\
  !*** multi ./pages/index.js ***!
  \******************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! C:\Users\Robbie\Repos\OpenPolitics\src\pages\index.js */"./pages/index.js");


/***/ }),

/***/ "@fortawesome/free-solid-svg-icons":
/*!****************************************************!*\
  !*** external "@fortawesome/free-solid-svg-icons" ***!
  \****************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("@fortawesome/free-solid-svg-icons");

/***/ }),

/***/ "@fortawesome/react-fontawesome":
/*!*************************************************!*\
  !*** external "@fortawesome/react-fontawesome" ***!
  \*************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("@fortawesome/react-fontawesome");

/***/ }),

/***/ "@material-ui/core/AppBar":
/*!*******************************************!*\
  !*** external "@material-ui/core/AppBar" ***!
  \*******************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("@material-ui/core/AppBar");

/***/ }),

/***/ "@material-ui/core/Tabs":
/*!*****************************************!*\
  !*** external "@material-ui/core/Tabs" ***!
  \*****************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("@material-ui/core/Tabs");

/***/ }),

/***/ "@material-ui/core/Toolbar":
/*!********************************************!*\
  !*** external "@material-ui/core/Toolbar" ***!
  \********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("@material-ui/core/Toolbar");

/***/ }),

/***/ "@material-ui/core/styles":
/*!*******************************************!*\
  !*** external "@material-ui/core/styles" ***!
  \*******************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("@material-ui/core/styles");

/***/ }),

/***/ "core-js/library/fn/object/define-property":
/*!************************************************************!*\
  !*** external "core-js/library/fn/object/define-property" ***!
  \************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("core-js/library/fn/object/define-property");

/***/ }),

/***/ "gatsby-plugin-page-transitions":
/*!*************************************************!*\
  !*** external "gatsby-plugin-page-transitions" ***!
  \*************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("gatsby-plugin-page-transitions");

/***/ }),

/***/ "grommet":
/*!**************************!*\
  !*** external "grommet" ***!
  \**************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("grommet");

/***/ }),

/***/ "prop-types":
/*!*****************************!*\
  !*** external "prop-types" ***!
  \*****************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("prop-types");

/***/ }),

/***/ "react":
/*!************************!*\
  !*** external "react" ***!
  \************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("react");

/***/ }),

/***/ "react-helmet":
/*!*******************************!*\
  !*** external "react-helmet" ***!
  \*******************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("react-helmet");

/***/ }),

/***/ "react-pose":
/*!*****************************!*\
  !*** external "react-pose" ***!
  \*****************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("react-pose");

/***/ }),

/***/ "react-responsive-carousel":
/*!********************************************!*\
  !*** external "react-responsive-carousel" ***!
  \********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("react-responsive-carousel");

/***/ }),

/***/ "styled-components":
/*!************************************!*\
  !*** external "styled-components" ***!
  \************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("styled-components");

/***/ })

/******/ });
//# sourceMappingURL=index.js.map