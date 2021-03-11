webpackHotUpdate_N_E("pages/github",{

/***/ "./components/layout.js":
/*!******************************!*\
  !*** ./components/layout.js ***!
  \******************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* WEBPACK VAR INJECTION */(function(module) {/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ "./node_modules/react/jsx-dev-runtime.js");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _navbar__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./navbar */ "./components/navbar.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! next/router */ "./node_modules/next/router.js");
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(next_router__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var nprogress__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! nprogress */ "./node_modules/nprogress/nprogress.js");
/* harmony import */ var nprogress__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(nprogress__WEBPACK_IMPORTED_MODULE_4__);



var _jsxFileName = "C:\\Users\\renzo\\Desktop\\asd\\Desarrollo\\Portfolio-Nextjs\\components\\layout.js",
    _this = undefined,
    _s = $RefreshSig$();






var Layout = function Layout(_ref) {
  _s();

  var children = _ref.children;
  var router = Object(next_router__WEBPACK_IMPORTED_MODULE_3__["useRouter"])();
  Object(react__WEBPACK_IMPORTED_MODULE_2__["useEffect"])(function () {
    var handleRouteChange = function handleRouteChange(url) {
      console.log(url);
      nprogress__WEBPACK_IMPORTED_MODULE_4___default.a.start();
    };

    router.events.on('routerChangeStart', handleRouteChange);
    router.events.on('routeChangeComplete', function () {
      return nprogress__WEBPACK_IMPORTED_MODULE_4___default.a.done();
    });
    return function () {
      router.events.off('routerChangeStart', handleRouteChange);
    };
  }, []);
  return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["Fragment"], {
    children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_navbar__WEBPACK_IMPORTED_MODULE_1__["default"], {}, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 28,
      columnNumber: 9
    }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("main", {
      className: "container py-4",
      children: children
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 30,
      columnNumber: 9
    }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("footer", {
      className: "bg-dark text-light text-center",
      children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
        className: "container p-4",
        children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("h1", {
          children: "\xA9 Renzo Soler Portfolio"
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 36,
          columnNumber: 17
        }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("p", {
          children: ["2000- ", new Date().getFullYear()]
        }, void 0, true, {
          fileName: _jsxFileName,
          lineNumber: 37,
          columnNumber: 17
        }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("p", {
          children: "Todos los derechos reservados."
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 38,
          columnNumber: 17
        }, _this)]
      }, void 0, true, {
        fileName: _jsxFileName,
        lineNumber: 35,
        columnNumber: 13
      }, _this)
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 34,
      columnNumber: 9
    }, _this)]
  }, void 0, true);
};

_s(Layout, "vQduR7x+OPXj6PSmJyFnf+hU7bg=", false, function () {
  return [next_router__WEBPACK_IMPORTED_MODULE_3__["useRouter"]];
});

_c = Layout;
/* harmony default export */ __webpack_exports__["default"] = (Layout);

var _c;

$RefreshReg$(_c, "Layout");

;
    var _a, _b;
    // Legacy CSS implementations will `eval` browser code in a Node.js context
    // to extract CSS. For backwards compatibility, we need to check we're in a
    // browser context before continuing.
    if (typeof self !== 'undefined' &&
        // AMP / No-JS mode does not inject these helpers:
        '$RefreshHelpers$' in self) {
        var currentExports = module.__proto__.exports;
        var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;
        // This cannot happen in MainTemplate because the exports mismatch between
        // templating and execution.
        self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.i);
        // A module can be accepted automatically based on its exports, e.g. when
        // it is a Refresh Boundary.
        if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {
            // Save the previous exports on update so we can compare the boundary
            // signatures.
            module.hot.dispose(function (data) {
                data.prevExports = currentExports;
            });
            // Unconditionally accept an update to this module, we'll check if it's
            // still a Refresh Boundary later.
            module.hot.accept();
            // This field is set when the previous version of this module was a
            // Refresh Boundary, letting us know we need to check for invalidation or
            // enqueue an update.
            if (prevExports !== null) {
                // A boundary can become ineligible if its exports are incompatible
                // with the previous exports.
                //
                // For example, if you add/remove/change exports, we'll want to
                // re-execute the importing modules, and force those components to
                // re-render. Similarly, if you convert a class component to a
                // function, we want to invalidate the boundary.
                if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {
                    module.hot.invalidate();
                }
                else {
                    self.$RefreshHelpers$.scheduleUpdate();
                }
            }
        }
        else {
            // Since we just executed the code for the module, it's possible that the
            // new exports made it ineligible for being a boundary.
            // We only care about the case when we were _previously_ a boundary,
            // because we already accepted this update (accidental side effect).
            var isNoLongerABoundary = prevExports !== null;
            if (isNoLongerABoundary) {
                module.hot.invalidate();
            }
        }
    }

/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../node_modules/next/dist/compiled/webpack/harmony-module.js */ "./node_modules/next/dist/compiled/webpack/harmony-module.js")(module)))

/***/ }),

/***/ "./node_modules/@babel/runtime/helpers/arrayWithoutHoles.js":
false,

/***/ "./node_modules/@babel/runtime/helpers/assertThisInitialized.js":
false,

/***/ "./node_modules/@babel/runtime/helpers/defineProperty.js":
false,

/***/ "./node_modules/@babel/runtime/helpers/getPrototypeOf.js":
false,

/***/ "./node_modules/@babel/runtime/helpers/inherits.js":
false,

/***/ "./node_modules/@babel/runtime/helpers/iterableToArray.js":
false,

/***/ "./node_modules/@babel/runtime/helpers/nonIterableSpread.js":
false,

/***/ "./node_modules/@babel/runtime/helpers/possibleConstructorReturn.js":
false,

/***/ "./node_modules/@babel/runtime/helpers/toConsumableArray.js":
false,

/***/ "./node_modules/next/dist/next-server/lib/amp-context.js":
false,

/***/ "./node_modules/next/dist/next-server/lib/amp.js":
false,

/***/ "./node_modules/next/dist/next-server/lib/head-manager-context.js":
false,

/***/ "./node_modules/next/dist/next-server/lib/head.js":
false,

/***/ "./node_modules/next/dist/next-server/lib/side-effect.js":
false,

/***/ "./node_modules/next/head.js":
false

})
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vY29tcG9uZW50cy9sYXlvdXQuanMiXSwibmFtZXMiOlsiTGF5b3V0IiwiY2hpbGRyZW4iLCJyb3V0ZXIiLCJ1c2VSb3V0ZXIiLCJ1c2VFZmZlY3QiLCJoYW5kbGVSb3V0ZUNoYW5nZSIsInVybCIsImNvbnNvbGUiLCJsb2ciLCJOUHJvZ3Jlc3MiLCJzdGFydCIsImV2ZW50cyIsIm9uIiwiZG9uZSIsIm9mZiIsIkRhdGUiLCJnZXRGdWxsWWVhciJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUEsSUFBTUEsTUFBTSxHQUFHLFNBQVRBLE1BQVMsT0FBZ0I7QUFBQTs7QUFBQSxNQUFkQyxRQUFjLFFBQWRBLFFBQWM7QUFFM0IsTUFBTUMsTUFBTSxHQUFHQyw2REFBUyxFQUF4QjtBQUVBQyx5REFBUyxDQUFDLFlBQU07QUFFWixRQUFNQyxpQkFBaUIsR0FBRyxTQUFwQkEsaUJBQW9CLENBQUFDLEdBQUcsRUFBSTtBQUM3QkMsYUFBTyxDQUFDQyxHQUFSLENBQVlGLEdBQVo7QUFDQUcsc0RBQVMsQ0FBQ0MsS0FBVjtBQUNILEtBSEQ7O0FBS0FSLFVBQU0sQ0FBQ1MsTUFBUCxDQUFjQyxFQUFkLENBQWlCLG1CQUFqQixFQUFzQ1AsaUJBQXRDO0FBRUFILFVBQU0sQ0FBQ1MsTUFBUCxDQUFjQyxFQUFkLENBQWlCLHFCQUFqQixFQUF3QztBQUFBLGFBQU1ILGdEQUFTLENBQUNJLElBQVYsRUFBTjtBQUFBLEtBQXhDO0FBRUEsV0FBTyxZQUFNO0FBQ1RYLFlBQU0sQ0FBQ1MsTUFBUCxDQUFjRyxHQUFkLENBQWtCLG1CQUFsQixFQUF1Q1QsaUJBQXZDO0FBQ0gsS0FGRDtBQUdILEdBZFEsRUFjTixFQWRNLENBQVQ7QUFnQkEsc0JBQ0k7QUFBQSw0QkFDQSxxRUFBQywrQ0FBRDtBQUFBO0FBQUE7QUFBQTtBQUFBLGFBREEsZUFHQTtBQUFNLGVBQVMsRUFBQyxnQkFBaEI7QUFBQSxnQkFDS0o7QUFETDtBQUFBO0FBQUE7QUFBQTtBQUFBLGFBSEEsZUFPQTtBQUFRLGVBQVMsRUFBQyxnQ0FBbEI7QUFBQSw2QkFDSTtBQUFLLGlCQUFTLEVBQUMsZUFBZjtBQUFBLGdDQUNJO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLGlCQURKLGVBRUk7QUFBQSwrQkFBVSxJQUFJYyxJQUFKLEdBQVdDLFdBQVgsRUFBVjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsaUJBRkosZUFHSTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxpQkFISjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFESjtBQUFBO0FBQUE7QUFBQTtBQUFBLGFBUEE7QUFBQSxrQkFESjtBQWtCSCxDQXRDRDs7R0FBTWhCLE07VUFFYUcscUQ7OztLQUZiSCxNO0FBMENTQSxxRUFBZiIsImZpbGUiOiJzdGF0aWMvd2VicGFjay9wYWdlcy9naXRodWIuZTYyMTc2M2MxZThjNzhlMTRiNTAuaG90LXVwZGF0ZS5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBOYXZiYXIgZnJvbSAnLi9uYXZiYXInXHJcbmltcG9ydCB7dXNlRWZmZWN0fSBmcm9tICdyZWFjdCdcclxuaW1wb3J0IHt1c2VSb3V0ZXJ9IGZyb20gJ25leHQvcm91dGVyJ1xyXG5pbXBvcnQgTlByb2dyZXNzIGZyb20gJ25wcm9ncmVzcydcclxuXHJcbmNvbnN0IExheW91dCA9ICh7Y2hpbGRyZW59KSA9PiB7XHJcblxyXG4gICAgY29uc3Qgcm91dGVyID0gdXNlUm91dGVyKCk7XHJcblxyXG4gICAgdXNlRWZmZWN0KCgpID0+IHtcclxuXHJcbiAgICAgICAgY29uc3QgaGFuZGxlUm91dGVDaGFuZ2UgPSB1cmwgPT4ge1xyXG4gICAgICAgICAgICBjb25zb2xlLmxvZyh1cmwpXHJcbiAgICAgICAgICAgIE5Qcm9ncmVzcy5zdGFydCgpO1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgcm91dGVyLmV2ZW50cy5vbigncm91dGVyQ2hhbmdlU3RhcnQnLCBoYW5kbGVSb3V0ZUNoYW5nZSlcclxuXHJcbiAgICAgICAgcm91dGVyLmV2ZW50cy5vbigncm91dGVDaGFuZ2VDb21wbGV0ZScsICgpID0+IE5Qcm9ncmVzcy5kb25lKCkpO1xyXG5cclxuICAgICAgICByZXR1cm4gKCkgPT4ge1xyXG4gICAgICAgICAgICByb3V0ZXIuZXZlbnRzLm9mZigncm91dGVyQ2hhbmdlU3RhcnQnLCBoYW5kbGVSb3V0ZUNoYW5nZSlcclxuICAgICAgICB9XHJcbiAgICB9LCBbXSlcclxuXHJcbiAgICByZXR1cm4gKFxyXG4gICAgICAgIDw+XHJcbiAgICAgICAgPE5hdmJhci8+XHJcblxyXG4gICAgICAgIDxtYWluIGNsYXNzTmFtZT1cImNvbnRhaW5lciBweS00XCI+XHJcbiAgICAgICAgICAgIHtjaGlsZHJlbn1cclxuICAgICAgICA8L21haW4+XHJcblxyXG4gICAgICAgIDxmb290ZXIgY2xhc3NOYW1lPVwiYmctZGFyayB0ZXh0LWxpZ2h0IHRleHQtY2VudGVyXCI+XHJcbiAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiY29udGFpbmVyIHAtNFwiPlxyXG4gICAgICAgICAgICAgICAgPGgxPiZjb3B5OyBSZW56byBTb2xlciBQb3J0Zm9saW88L2gxPlxyXG4gICAgICAgICAgICAgICAgPHA+MjAwMC0ge25ldyBEYXRlKCkuZ2V0RnVsbFllYXIoKX08L3A+XHJcbiAgICAgICAgICAgICAgICA8cD5Ub2RvcyBsb3MgZGVyZWNob3MgcmVzZXJ2YWRvcy48L3A+XHJcbiAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgIDwvZm9vdGVyPlxyXG5cclxuICAgIDwvPlxyXG4gICAgKVxyXG59XHJcbiAgICBcclxuXHJcblxyXG5leHBvcnQgZGVmYXVsdCBMYXlvdXQ7Il0sInNvdXJjZVJvb3QiOiIifQ==