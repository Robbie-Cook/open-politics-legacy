webpackHotUpdate("static\\development\\pages\\index.js",{

/***/ "./components/NavigationBar.js":
/*!*************************************!*\
  !*** ./components/NavigationBar.js ***!
  \*************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_taggedTemplateLiteral__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/taggedTemplateLiteral */ "../node_modules/@babel/runtime-corejs2/helpers/esm/taggedTemplateLiteral.js");
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/defineProperty */ "../node_modules/@babel/runtime-corejs2/helpers/esm/defineProperty.js");
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/classCallCheck */ "../node_modules/@babel/runtime-corejs2/helpers/esm/classCallCheck.js");
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_createClass__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/createClass */ "../node_modules/@babel/runtime-corejs2/helpers/esm/createClass.js");
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/possibleConstructorReturn */ "../node_modules/@babel/runtime-corejs2/helpers/esm/possibleConstructorReturn.js");
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_getPrototypeOf__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/getPrototypeOf */ "../node_modules/@babel/runtime-corejs2/helpers/esm/getPrototypeOf.js");
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_inherits__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/inherits */ "../node_modules/@babel/runtime-corejs2/helpers/esm/inherits.js");
/* harmony import */ var _material_ui_core_AppBar__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @material-ui/core/AppBar */ "../node_modules/@material-ui/core/esm/AppBar/index.js");
/* harmony import */ var _material_ui_core_styles__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @material-ui/core/styles */ "../node_modules/@material-ui/core/esm/styles/index.js");
/* harmony import */ var _material_ui_core_Tabs__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @material-ui/core/Tabs */ "../node_modules/@material-ui/core/esm/Tabs/index.js");
/* harmony import */ var _material_ui_core_Toolbar__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @material-ui/core/Toolbar */ "../node_modules/@material-ui/core/esm/Toolbar/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! react */ "../node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_11___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_11__);
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! styled-components */ "../node_modules/styled-components/dist/styled-components.browser.esm.js");
/* harmony import */ var _Colors__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ./Colors */ "./components/Colors.js");
/* harmony import */ var _Sizes_js__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ./Sizes.js */ "./components/Sizes.js");
/* harmony import */ var _Views__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! ./Views */ "./components/Views.js");
/* harmony import */ var _MyLink__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! ./MyLink */ "./components/MyLink.js");
/* harmony import */ var _typography__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! ./typography */ "./components/typography/index.js");
/* harmony import */ var _Spacer__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! ./Spacer */ "./components/Spacer.js");







var _jsxFileName = "C:\\Users\\Robbie\\Repos\\OpenPolitics\\src\\components\\NavigationBar.js";
var __jsx = react__WEBPACK_IMPORTED_MODULE_11___default.a.createElement;

function _templateObject2() {
  var data = Object(_babel_runtime_corejs2_helpers_esm_taggedTemplateLiteral__WEBPACK_IMPORTED_MODULE_0__["default"])(["\n                margin-right: 30px;\n              "]);

  _templateObject2 = function _templateObject2() {
    return data;
  };

  return data;
}

function _templateObject() {
  var data = Object(_babel_runtime_corejs2_helpers_esm_taggedTemplateLiteral__WEBPACK_IMPORTED_MODULE_0__["default"])(["\n      z-index: 150;\n      margin-left: 0;\n      padding: 0;\n      height: ", ";\n      ", ";\n    "]);

  _templateObject = function _templateObject() {
    return data;
  };

  return data;
}














var NavigationBar =
/*#__PURE__*/
function (_React$Component) {
  Object(_babel_runtime_corejs2_helpers_esm_inherits__WEBPACK_IMPORTED_MODULE_6__["default"])(NavigationBar, _React$Component);

  function NavigationBar(props) {
    Object(_babel_runtime_corejs2_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_2__["default"])(this, NavigationBar);

    return Object(_babel_runtime_corejs2_helpers_esm_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_4__["default"])(this, Object(_babel_runtime_corejs2_helpers_esm_getPrototypeOf__WEBPACK_IMPORTED_MODULE_5__["default"])(NavigationBar).call(this, props));
  }

  Object(_babel_runtime_corejs2_helpers_esm_createClass__WEBPACK_IMPORTED_MODULE_3__["default"])(NavigationBar, [{
    key: "render",
    value: function render() {
      /* CSS */
      var StyledAppBar = Object(_material_ui_core_styles__WEBPACK_IMPORTED_MODULE_8__["withStyles"])({
        root: {
          backgroundColor: _Colors__WEBPACK_IMPORTED_MODULE_13__["default"].backgroundColor,
          height: _Sizes_js__WEBPACK_IMPORTED_MODULE_14__["default"].navbar.height
        }
      })(_material_ui_core_AppBar__WEBPACK_IMPORTED_MODULE_7__["default"]);
      var StyledTabs = Object(_material_ui_core_styles__WEBPACK_IMPORTED_MODULE_8__["withStyles"])({
        root: Object(_babel_runtime_corejs2_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_1__["default"])({}, "@media (max-width:".concat(_Views__WEBPACK_IMPORTED_MODULE_15__["Sizes"].mobileSize, "px)"), {
          display: "none"
        })
      })(_material_ui_core_Tabs__WEBPACK_IMPORTED_MODULE_9__["default"]);
      var StyledToolbar = Object(styled_components__WEBPACK_IMPORTED_MODULE_12__["default"])(_material_ui_core_Toolbar__WEBPACK_IMPORTED_MODULE_10__["default"])(_templateObject(), _Sizes_js__WEBPACK_IMPORTED_MODULE_14__["default"].navbar.height, new _Views__WEBPACK_IMPORTED_MODULE_15__["MobileView"]("\n        margin-left: 20px;\n      "));
      var navigationLinks = [new _MyLink__WEBPACK_IMPORTED_MODULE_16__["default"]("Home", "/"), new _MyLink__WEBPACK_IMPORTED_MODULE_16__["default"]("News", "/news")];
      var heading = "Open Politics";
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
      }, heading && __jsx(react__WEBPACK_IMPORTED_MODULE_11___default.a.Fragment, null, __jsx(_typography__WEBPACK_IMPORTED_MODULE_17__["Heading"], {
        type: "h3",
        margin: "0",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 56
        },
        __self: this
      }, heading), __jsx(_Spacer__WEBPACK_IMPORTED_MODULE_18__["default"], {
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
      }, function () {
        var array = [];
        var LinkContainer = styled_components__WEBPACK_IMPORTED_MODULE_12__["default"].div(_templateObject2());
        navigationLinks.map(function (item) {
          // If the current URL is the same as the item path, mark Tab as active
          array.push(__jsx(LinkContainer, {
            __source: {
              fileName: _jsxFileName,
              lineNumber: 72
            },
            __self: this
          }, __jsx(_typography__WEBPACK_IMPORTED_MODULE_17__["Link"], {
            style: "\n                          line-height: ".concat(_Sizes_js__WEBPACK_IMPORTED_MODULE_14__["default"].navbar.height, ";\n                          position: relative;\n                          bottom: -5px;\n                          color: ").concat(_Colors__WEBPACK_IMPORTED_MODULE_13__["default"].text.color, "\n                        "),
            __source: {
              fileName: _jsxFileName,
              lineNumber: 73
            },
            __self: this
          }, item.name)));
        });
        return array;
      }())));
    }
  }]);

  return NavigationBar;
}(react__WEBPACK_IMPORTED_MODULE_11___default.a.Component);

/* harmony default export */ __webpack_exports__["default"] = (NavigationBar);

/***/ })

})
//# sourceMappingURL=index.js.5564e0205098cc701632.hot-update.js.map