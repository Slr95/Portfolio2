webpackHotUpdate_N_E("pages/blog",{

/***/ "./pages/blog.js":
/*!***********************!*\
  !*** ./pages/blog.js ***!
  \***********************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* WEBPACK VAR INJECTION */(function(module) {/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ "./node_modules/react/jsx-dev-runtime.js");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! next/link */ "./node_modules/next/link.js");
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(next_link__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _components_Layout__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../components/Layout */ "./components/Layout.js");
/* harmony import */ var _profile__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../profile */ "./profile.js");


var _jsxFileName = "C:\\Users\\renzo\\Desktop\\asd\\Desarrollo\\Portfolio-nextjs\\pages\\blog.js",
    _this = undefined;





var PostCard = function PostCard(_ref) {
  var post = _ref.post;
  return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
    className: "col-md-4",
    children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
      className: "card",
      children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
        className: "overflow",
        children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("img", {
          src: post.imageURL,
          alt: "",
          className: "card-img-top"
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 10,
          columnNumber: 9
        }, _this)
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 9,
        columnNumber: 7
      }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
        className: "card-body",
        children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("h1", {
          children: post.title
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 13,
          columnNumber: 9
        }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("p", {
          children: post.content
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 14,
          columnNumber: 9
        }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(next_link__WEBPACK_IMPORTED_MODULE_1___default.a, {
          href: "/post?title=".concat(post.title),
          children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("button", {
            className: "btn btn-light",
            children: "Read"
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 16,
            columnNumber: 11
          }, _this)
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 15,
          columnNumber: 9
        }, _this)]
      }, void 0, true, {
        fileName: _jsxFileName,
        lineNumber: 12,
        columnNumber: 7
      }, _this)]
    }, void 0, true, {
      fileName: _jsxFileName,
      lineNumber: 8,
      columnNumber: 5
    }, _this)
  }, void 0, false, {
    fileName: _jsxFileName,
    lineNumber: 7,
    columnNumber: 3
  }, _this);
};

_c = PostCard;

var blog = function blog() {
  return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_components_Layout__WEBPACK_IMPORTED_MODULE_2__["default"], {
    title: "My Blog",
    footer: false,
    dark: true,
    children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
      className: "row",
      children: _profile__WEBPACK_IMPORTED_MODULE_3__["posts"].map(function (post, i) {
        return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(PostCard, {
          post: post
        }, i, false, {
          fileName: _jsxFileName,
          lineNumber: 28,
          columnNumber: 11
        }, _this);
      })
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 26,
      columnNumber: 7
    }, _this)
  }, void 0, false, {
    fileName: _jsxFileName,
    lineNumber: 25,
    columnNumber: 5
  }, _this);
};

/* harmony default export */ __webpack_exports__["default"] = (blog);

var _c;

$RefreshReg$(_c, "PostCard");

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

/***/ "./profile.js":
/*!********************!*\
  !*** ./profile.js ***!
  \********************/
/*! exports provided: skills, estudios, projects, posts */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* WEBPACK VAR INJECTION */(function(module) {/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "skills", function() { return skills; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "estudios", function() { return estudios; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "projects", function() { return projects; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "posts", function() { return posts; });
var skills = [{
  skill: 'JavaScript',
  percentage: 100
}, {
  skill: 'NodeJS',
  percentage: 90
}, {
  skill: 'React',
  percentage: 90
}, {
  skill: 'PHP',
  percentage: 80
}, {
  skill: 'MySQL',
  percentage: 100
}, {
  skill: 'MongoDB',
  percentage: 90
}, {
  skill: 'English',
  percentage: 100
}];
var estudios = [{
  title: "Analista de sistemas computacionales",
  description: "Graduado de analista en la Universidad Siglo 21.",
  from: 2017,
  to: 2020
}, {
  title: "Licenciatura en informatica",
  description: "Cursando las ultimas materias de 5to de la carrera. Actualmente buscando mi primera oportunidad laboral.",
  from: 2017,
  to: 2021
}, {
  title: "Inglés",
  description: "Excelente manejo del inglés, casi nativo.",
  from: 2010
}];
var projects = [{
  name: "Web ecommerce",
  description: "Tienda online de celulares, con carrito de compras. Hecho con Php y Mysql",
  image: "portfolio1.png"
}, {
  name: "FarmaSalud",
  description: "Sistema de inventario para una farmacia. Hecho con Java y Mysql",
  image: "portfolio2.png"
}, {
  name: "Chat online",
  description: "App chat online. Hecho con Php y Mysql",
  image: "portfolio3.png"
}, {
  name: "App Peliculas",
  description: "App para buscar peliculas. Hecha con React y la api OMDB",
  image: "portfolio4.png"
}, {
  name: "App Notas",
  description: "To do list. Hecho con NodeJS y MongoDB",
  image: "portfolio5.png"
}, {
  name: "Portfolio Web",
  description: "Otro portfolio web. Hecho con SCSS y Javascript",
  image: "portfolio6.png"
}];
var posts = [{
  title: "React",
  content: "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Sint excepturi ea explicabo. Illum suscipit illo, porro quisquam voluptatem",
  imageURL: ""
}, {
  title: "Angular",
  content: "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Sint excepturi ea explicabo. Illum suscipit illo, porro quisquam voluptatem",
  imageURL: ""
}, {
  title: "Nextjs",
  content: "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Sint excepturi ea explicabo. Illum suscipit illo, porro quisquam voluptatem",
  imageURL: ""
}];

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

/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./node_modules/next/dist/compiled/webpack/harmony-module.js */ "./node_modules/next/dist/compiled/webpack/harmony-module.js")(module)))

/***/ })

})
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vcGFnZXMvYmxvZy5qcyIsIndlYnBhY2s6Ly9fTl9FLy4vcHJvZmlsZS5qcyJdLCJuYW1lcyI6WyJQb3N0Q2FyZCIsInBvc3QiLCJpbWFnZVVSTCIsInRpdGxlIiwiY29udGVudCIsImJsb2ciLCJwb3N0cyIsIm1hcCIsImkiLCJza2lsbHMiLCJza2lsbCIsInBlcmNlbnRhZ2UiLCJlc3R1ZGlvcyIsImRlc2NyaXB0aW9uIiwiZnJvbSIsInRvIiwicHJvamVjdHMiLCJuYW1lIiwiaW1hZ2UiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQTtBQUNBO0FBRUE7O0FBRUEsSUFBTUEsUUFBUSxHQUFHLFNBQVhBLFFBQVc7QUFBQSxNQUFHQyxJQUFILFFBQUdBLElBQUg7QUFBQSxzQkFDZjtBQUFLLGFBQVMsRUFBQyxVQUFmO0FBQUEsMkJBQ0U7QUFBSyxlQUFTLEVBQUMsTUFBZjtBQUFBLDhCQUNFO0FBQUssaUJBQVMsRUFBQyxVQUFmO0FBQUEsK0JBQ0U7QUFBSyxhQUFHLEVBQUVBLElBQUksQ0FBQ0MsUUFBZjtBQUF5QixhQUFHLEVBQUMsRUFBN0I7QUFBZ0MsbUJBQVMsRUFBQztBQUExQztBQUFBO0FBQUE7QUFBQTtBQUFBO0FBREY7QUFBQTtBQUFBO0FBQUE7QUFBQSxlQURGLGVBSUU7QUFBSyxpQkFBUyxFQUFDLFdBQWY7QUFBQSxnQ0FDRTtBQUFBLG9CQUFLRCxJQUFJLENBQUNFO0FBQVY7QUFBQTtBQUFBO0FBQUE7QUFBQSxpQkFERixlQUVFO0FBQUEsb0JBQUlGLElBQUksQ0FBQ0c7QUFBVDtBQUFBO0FBQUE7QUFBQTtBQUFBLGlCQUZGLGVBR0UscUVBQUMsZ0RBQUQ7QUFBTSxjQUFJLHdCQUFpQkgsSUFBSSxDQUFDRSxLQUF0QixDQUFWO0FBQUEsaUNBQ0U7QUFBUSxxQkFBUyxFQUFDLGVBQWxCO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBREY7QUFBQTtBQUFBO0FBQUE7QUFBQSxp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QUFpQ0EsSUFBTVosS0FBSyxHQUFHLENBQ25CO0FBQ0VILE9BQUssRUFBRSxPQURUO0FBRUVDLFNBQU8sRUFDTCx1SUFISjtBQUlFRixVQUFRLEVBQ047QUFMSixDQURtQixFQVFuQjtBQUNFQyxPQUFLLEVBQUUsU0FEVDtBQUVFQyxTQUFPLEVBQ0wsdUlBSEo7QUFJRUYsVUFBUSxFQUNOO0FBTEosQ0FSbUIsRUFlbkI7QUFDRUMsT0FBSyxFQUFFLFFBRFQ7QUFFRUMsU0FBTyxFQUNMLHVJQUhKO0FBSUVGLFVBQVEsRUFDTjtBQUxKLENBZm1CLENBQWQiLCJmaWxlIjoic3RhdGljL3dlYnBhY2svcGFnZXMvYmxvZy44Yjg2ODE1ZTY4ZmI4NTkwZGE4MC5ob3QtdXBkYXRlLmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IExpbmsgZnJvbSBcIm5leHQvbGlua1wiO1xyXG5pbXBvcnQgTGF5b3V0IGZyb20gXCIuLi9jb21wb25lbnRzL0xheW91dFwiO1xyXG5cclxuaW1wb3J0IHsgcG9zdHMgfSBmcm9tIFwiLi4vcHJvZmlsZVwiO1xyXG5cclxuY29uc3QgUG9zdENhcmQgPSAoeyBwb3N0IH0pID0+IChcclxuICA8ZGl2IGNsYXNzTmFtZT1cImNvbC1tZC00XCI+XHJcbiAgICA8ZGl2IGNsYXNzTmFtZT1cImNhcmRcIj5cclxuICAgICAgPGRpdiBjbGFzc05hbWU9XCJvdmVyZmxvd1wiPlxyXG4gICAgICAgIDxpbWcgc3JjPXtwb3N0LmltYWdlVVJMfSBhbHQ9XCJcIiBjbGFzc05hbWU9XCJjYXJkLWltZy10b3BcIiAvPlxyXG4gICAgICA8L2Rpdj5cclxuICAgICAgPGRpdiBjbGFzc05hbWU9XCJjYXJkLWJvZHlcIj5cclxuICAgICAgICA8aDE+e3Bvc3QudGl0bGV9PC9oMT5cclxuICAgICAgICA8cD57cG9zdC5jb250ZW50fTwvcD5cclxuICAgICAgICA8TGluayBocmVmPXtgL3Bvc3Q/dGl0bGU9JHtwb3N0LnRpdGxlfWB9PlxyXG4gICAgICAgICAgPGJ1dHRvbiBjbGFzc05hbWU9XCJidG4gYnRuLWxpZ2h0XCI+UmVhZDwvYnV0dG9uPlxyXG4gICAgICAgIDwvTGluaz5cclxuICAgICAgPC9kaXY+XHJcbiAgICA8L2Rpdj5cclxuICA8L2Rpdj5cclxuKTtcclxuXHJcbmNvbnN0IGJsb2cgPSAoKSA9PiB7XHJcbiAgcmV0dXJuIChcclxuICAgIDxMYXlvdXQgdGl0bGU9XCJNeSBCbG9nXCIgZm9vdGVyPXtmYWxzZX0gZGFyaz5cclxuICAgICAgPGRpdiBjbGFzc05hbWU9XCJyb3dcIj5cclxuICAgICAgICB7cG9zdHMubWFwKChwb3N0LCBpKSA9PiAoXHJcbiAgICAgICAgICA8UG9zdENhcmQgcG9zdD17cG9zdH0ga2V5PXtpfSAvPlxyXG4gICAgICAgICkpfVxyXG4gICAgICA8L2Rpdj5cclxuICAgIDwvTGF5b3V0PlxyXG4gICk7XHJcbn07XHJcblxyXG5leHBvcnQgZGVmYXVsdCBibG9nOyIsImV4cG9ydCBjb25zdCBza2lsbHMgPSBbXHJcbiAgICB7XHJcbiAgICAgICAgc2tpbGw6ICdKYXZhU2NyaXB0JyxcclxuICAgICAgICBwZXJjZW50YWdlOiAxMDAsXHJcbiAgICB9LFxyXG4gICAge1xyXG4gICAgICAgIHNraWxsOiAnTm9kZUpTJyxcclxuICAgICAgICBwZXJjZW50YWdlOiA5MCxcclxuICAgIH0sXHJcbiAgICB7XHJcbiAgICAgICAgc2tpbGw6ICdSZWFjdCcsXHJcbiAgICAgICAgcGVyY2VudGFnZTogOTAsXHJcbiAgICB9LFxyXG4gICAge1xyXG4gICAgICAgIHNraWxsOiAnUEhQJyxcclxuICAgICAgICBwZXJjZW50YWdlOiA4MCxcclxuICAgIH0sXHJcbiAgICB7XHJcbiAgICAgICAgc2tpbGw6ICdNeVNRTCcsXHJcbiAgICAgICAgcGVyY2VudGFnZTogMTAwLFxyXG4gICAgfSxcclxuICAgIHtcclxuICAgICAgICBza2lsbDogJ01vbmdvREInLFxyXG4gICAgICAgIHBlcmNlbnRhZ2U6IDkwLFxyXG4gICAgfSxcclxuICAgIHtcclxuICAgICAgICBza2lsbDogJ0VuZ2xpc2gnLFxyXG4gICAgICAgIHBlcmNlbnRhZ2U6IDEwMCxcclxuICAgIH0sXHJcbl1cclxuXHJcbmV4cG9ydCBjb25zdCBlc3R1ZGlvcyA9IFtcclxuICAgIHtcclxuICAgICAgdGl0bGU6IFwiQW5hbGlzdGEgZGUgc2lzdGVtYXMgY29tcHV0YWNpb25hbGVzXCIsXHJcbiAgICAgIGRlc2NyaXB0aW9uOlxyXG4gICAgICAgIFwiR3JhZHVhZG8gZGUgYW5hbGlzdGEgZW4gbGEgVW5pdmVyc2lkYWQgU2lnbG8gMjEuXCIsXHJcbiAgICAgIGZyb206IDIwMTcsXHJcbiAgICAgIHRvOiAyMDIwLFxyXG4gICAgfSxcclxuICAgIHtcclxuICAgICAgdGl0bGU6IFwiTGljZW5jaWF0dXJhIGVuIGluZm9ybWF0aWNhXCIsXHJcbiAgICAgIGRlc2NyaXB0aW9uOlxyXG4gICAgICAgIFwiQ3Vyc2FuZG8gbGFzIHVsdGltYXMgbWF0ZXJpYXMgZGUgNXRvIGRlIGxhIGNhcnJlcmEuIEFjdHVhbG1lbnRlIGJ1c2NhbmRvIG1pIHByaW1lcmEgb3BvcnR1bmlkYWQgbGFib3JhbC5cIixcclxuICAgICAgZnJvbTogMjAxNyxcclxuICAgICAgdG86IDIwMjEsXHJcbiAgICB9LFxyXG4gICAge1xyXG4gICAgICB0aXRsZTogXCJJbmdsw6lzXCIsXHJcbiAgICAgIGRlc2NyaXB0aW9uOlxyXG4gICAgICAgIFwiRXhjZWxlbnRlIG1hbmVqbyBkZWwgaW5nbMOpcywgY2FzaSBuYXRpdm8uXCIsXHJcbiAgICAgIGZyb206IDIwMTAsXHJcbiAgICB9LFxyXG4gIF07XHJcblxyXG4gIGV4cG9ydCBjb25zdCBwcm9qZWN0cyA9IFtcclxuICAgICAge1xyXG4gICAgICAgICAgbmFtZTogXCJXZWIgZWNvbW1lcmNlXCIsXHJcbiAgICAgICAgICBkZXNjcmlwdGlvbjogXCJUaWVuZGEgb25saW5lIGRlIGNlbHVsYXJlcywgY29uIGNhcnJpdG8gZGUgY29tcHJhcy4gSGVjaG8gY29uIFBocCB5IE15c3FsXCIsXHJcbiAgICAgICAgICBpbWFnZTogXCJwb3J0Zm9saW8xLnBuZ1wiXHJcbiAgICAgIH0sXHJcbiAgICAgIHtcclxuICAgICAgICBuYW1lOiBcIkZhcm1hU2FsdWRcIixcclxuICAgICAgICBkZXNjcmlwdGlvbjogXCJTaXN0ZW1hIGRlIGludmVudGFyaW8gcGFyYSB1bmEgZmFybWFjaWEuIEhlY2hvIGNvbiBKYXZhIHkgTXlzcWxcIixcclxuICAgICAgICBpbWFnZTogXCJwb3J0Zm9saW8yLnBuZ1wiXHJcbiAgICB9LFxyXG4gICAge1xyXG4gICAgICAgIG5hbWU6IFwiQ2hhdCBvbmxpbmVcIixcclxuICAgICAgICBkZXNjcmlwdGlvbjogXCJBcHAgY2hhdCBvbmxpbmUuIEhlY2hvIGNvbiBQaHAgeSBNeXNxbFwiLFxyXG4gICAgICAgIGltYWdlOiBcInBvcnRmb2xpbzMucG5nXCJcclxuICAgIH0sXHJcbiAgICB7XHJcbiAgICAgICAgbmFtZTogXCJBcHAgUGVsaWN1bGFzXCIsXHJcbiAgICAgICAgZGVzY3JpcHRpb246IFwiQXBwIHBhcmEgYnVzY2FyIHBlbGljdWxhcy4gSGVjaGEgY29uIFJlYWN0IHkgbGEgYXBpIE9NREJcIixcclxuICAgICAgICBpbWFnZTogXCJwb3J0Zm9saW80LnBuZ1wiXHJcbiAgICB9LFxyXG4gICAge1xyXG4gICAgICAgIG5hbWU6IFwiQXBwIE5vdGFzXCIsXHJcbiAgICAgICAgZGVzY3JpcHRpb246IFwiVG8gZG8gbGlzdC4gSGVjaG8gY29uIE5vZGVKUyB5IE1vbmdvREJcIixcclxuICAgICAgICBpbWFnZTogXCJwb3J0Zm9saW81LnBuZ1wiXHJcbiAgICB9LFxyXG4gICAge1xyXG4gICAgICAgIG5hbWU6IFwiUG9ydGZvbGlvIFdlYlwiLFxyXG4gICAgICAgIGRlc2NyaXB0aW9uOiBcIk90cm8gcG9ydGZvbGlvIHdlYi4gSGVjaG8gY29uIFNDU1MgeSBKYXZhc2NyaXB0XCIsXHJcbiAgICAgICAgaW1hZ2U6IFwicG9ydGZvbGlvNi5wbmdcIlxyXG4gICAgfSxcclxuICBdXHJcblxyXG4gIGV4cG9ydCBjb25zdCBwb3N0cyA9IFtcclxuICAgIHtcclxuICAgICAgdGl0bGU6IFwiUmVhY3RcIixcclxuICAgICAgY29udGVudDpcclxuICAgICAgICBcIkxvcmVtLCBpcHN1bSBkb2xvciBzaXQgYW1ldCBjb25zZWN0ZXR1ciBhZGlwaXNpY2luZyBlbGl0LiBTaW50IGV4Y2VwdHVyaSBlYSBleHBsaWNhYm8uIElsbHVtIHN1c2NpcGl0IGlsbG8sIHBvcnJvIHF1aXNxdWFtIHZvbHVwdGF0ZW1cIixcclxuICAgICAgaW1hZ2VVUkw6XHJcbiAgICAgICAgXCJcIixcclxuICAgIH0sXHJcbiAgICB7XHJcbiAgICAgIHRpdGxlOiBcIkFuZ3VsYXJcIixcclxuICAgICAgY29udGVudDpcclxuICAgICAgICBcIkxvcmVtLCBpcHN1bSBkb2xvciBzaXQgYW1ldCBjb25zZWN0ZXR1ciBhZGlwaXNpY2luZyBlbGl0LiBTaW50IGV4Y2VwdHVyaSBlYSBleHBsaWNhYm8uIElsbHVtIHN1c2NpcGl0IGlsbG8sIHBvcnJvIHF1aXNxdWFtIHZvbHVwdGF0ZW1cIixcclxuICAgICAgaW1hZ2VVUkw6XHJcbiAgICAgICAgXCJcIixcclxuICAgIH0sXHJcbiAgICB7XHJcbiAgICAgIHRpdGxlOiBcIk5leHRqc1wiLFxyXG4gICAgICBjb250ZW50OlxyXG4gICAgICAgIFwiTG9yZW0sIGlwc3VtIGRvbG9yIHNpdCBhbWV0IGNvbnNlY3RldHVyIGFkaXBpc2ljaW5nIGVsaXQuIFNpbnQgZXhjZXB0dXJpIGVhIGV4cGxpY2Fiby4gSWxsdW0gc3VzY2lwaXQgaWxsbywgcG9ycm8gcXVpc3F1YW0gdm9sdXB0YXRlbVwiLFxyXG4gICAgICBpbWFnZVVSTDpcclxuICAgICAgICBcIlwiLFxyXG4gICAgfSxcclxuICBdOyJdLCJzb3VyY2VSb290IjoiIn0=