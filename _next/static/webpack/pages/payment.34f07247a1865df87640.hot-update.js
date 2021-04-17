webpackHotUpdate_N_E("pages/payment",{

/***/ "./src/pages/payment.tsx":
/*!*******************************!*\
  !*** ./src/pages/payment.tsx ***!
  \*******************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* WEBPACK VAR INJECTION */(function(module) {/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"default\", function() { return Home; });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @babel/runtime/regenerator */ \"./node_modules/@babel/runtime/regenerator/index.js\");\n/* harmony import */ var _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _babel_runtime_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @babel/runtime/helpers/esm/asyncToGenerator */ \"./node_modules/@babel/runtime/helpers/esm/asyncToGenerator.js\");\n/* harmony import */ var dayjs__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! dayjs */ \"./node_modules/dayjs/dayjs.min.js\");\n/* harmony import */ var dayjs__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(dayjs__WEBPACK_IMPORTED_MODULE_3__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_4__);\n/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! next/router */ \"./node_modules/next/router.js\");\n/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(next_router__WEBPACK_IMPORTED_MODULE_5__);\n/* harmony import */ var _components_layout__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../components/layout */ \"./src/components/layout.tsx\");\n/* harmony import */ var _styles_utils_module_css__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../styles/utils.module.css */ \"./src/styles/utils.module.css\");\n/* harmony import */ var _styles_utils_module_css__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(_styles_utils_module_css__WEBPACK_IMPORTED_MODULE_7__);\n/* harmony import */ var _lib_api__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../lib/api */ \"./src/lib/api.ts\");\n\n\n\n\nvar _jsxFileName = \"/Users/rj/Desktop/CFP/CommonFeePlan/app/src/pages/payment.tsx\",\n    _s = $RefreshSig$();\n\n\n\n\n\n\n\nvar pageName = \"Pay the <br />common fee\";\nvar pageDescription = \"Thank you for your cooperation this month 😀\";\nvar pageHero = \"/images/payment.jpg\";\nfunction Home() {\n  _s();\n\n  var _this = this;\n\n  var _useState = Object(react__WEBPACK_IMPORTED_MODULE_4__[\"useState\"])(false),\n      processing = _useState[0],\n      setProcessing = _useState[1];\n\n  var _useState2 = Object(react__WEBPACK_IMPORTED_MODULE_4__[\"useState\"])(1234567890),\n      price = _useState2[0],\n      setPrice = _useState2[1]; // const [month, setMonth] = useState([\n  //   {\n  //     date: \"\",\n  //     id: -1,\n  //   },\n  // ]);\n\n\n  var members = Object(_lib_api__WEBPACK_IMPORTED_MODULE_8__[\"getMembersWithSWR\"])();\n  var router = Object(next_router__WEBPACK_IMPORTED_MODULE_5__[\"useRouter\"])(); // const addMonth = (e) => {\n  //   setMonth([\n  //     ...month,\n  //     {\n  //       date: \"\",\n  //       id: -1,\n  //     },\n  //   ]);\n  // };\n\n  var submit = /*#__PURE__*/function () {\n    var _ref = Object(_babel_runtime_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_2__[\"default\"])( /*#__PURE__*/_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_1___default.a.mark(function _callee(e) {\n      return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_1___default.a.wrap(function _callee$(_context) {\n        while (1) {\n          switch (_context.prev = _context.next) {\n            case 0:\n            case \"end\":\n              return _context.stop();\n          }\n        }\n      }, _callee);\n    }));\n\n    return function submit(_x) {\n      return _ref.apply(this, arguments);\n    };\n  }();\n\n  var months = [];\n\n  for (var i = 0; i < 6; i++) {\n    var date = dayjs__WEBPACK_IMPORTED_MODULE_3___default()().add(-i, 'month');\n    months.push({\n      year: date.year(),\n      month: date.format('MMM')\n    });\n  }\n\n  months.reverse();\n  return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(_components_layout__WEBPACK_IMPORTED_MODULE_6__[\"default\"], {\n    pageName: pageName,\n    pageDescription: pageDescription,\n    pageHero: pageHero,\n    children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"div\", {\n      className: \"mb-10\",\n      children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"select\", {\n        className: _styles_utils_module_css__WEBPACK_IMPORTED_MODULE_7___default.a.input,\n        children: members.map(function (member, key) {\n          return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"option\", {\n            value: member.id,\n            children: member.name\n          }, key, false, {\n            fileName: _jsxFileName,\n            lineNumber: 64,\n            columnNumber: 23\n          }, _this);\n        })\n      }, void 0, false, {\n        fileName: _jsxFileName,\n        lineNumber: 61,\n        columnNumber: 9\n      }, this)\n    }, void 0, false, {\n      fileName: _jsxFileName,\n      lineNumber: 59,\n      columnNumber: 7\n    }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"div\", {\n      className: \"mb-10\",\n      children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"ul\", {\n        children: months.map(function (month, key) {\n          return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"li\", {\n            className: \"mb-5 flex space-x-5\",\n            children: [month.month, \". \", month.year]\n          }, key, true, {\n            fileName: _jsxFileName,\n            lineNumber: 75,\n            columnNumber: 15\n          }, _this);\n        })\n      }, void 0, false, {\n        fileName: _jsxFileName,\n        lineNumber: 72,\n        columnNumber: 9\n      }, this)\n    }, void 0, false, {\n      fileName: _jsxFileName,\n      lineNumber: 71,\n      columnNumber: 7\n    }, this), !processing ? /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"button\", {\n      className: _styles_utils_module_css__WEBPACK_IMPORTED_MODULE_7___default.a[\"btn-submit\"],\n      onClick: submit,\n      children: \"Pay\"\n    }, void 0, false, {\n      fileName: _jsxFileName,\n      lineNumber: 91,\n      columnNumber: 9\n    }, this) : /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"button\", {\n      className: _styles_utils_module_css__WEBPACK_IMPORTED_MODULE_7___default.a[\"btn-submit\"],\n      children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"svg\", {\n        className: \"animate-spin\",\n        xmlns: \"http://www.w3.org/2000/svg\",\n        fill: \"none\",\n        viewBox: \"0 0 24 24\",\n        children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"circle\", {\n          className: \"opacity-25\",\n          cx: \"12\",\n          cy: \"12\",\n          r: \"10\",\n          stroke: \"currentColor\",\n          \"stroke-width\": \"4\"\n        }, void 0, false, {\n          fileName: _jsxFileName,\n          lineNumber: 102,\n          columnNumber: 13\n        }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"path\", {\n          className: \"opacity-75\",\n          fill: \"currentColor\",\n          d: \"M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z\"\n        }, void 0, false, {\n          fileName: _jsxFileName,\n          lineNumber: 110,\n          columnNumber: 13\n        }, this)]\n      }, void 0, true, {\n        fileName: _jsxFileName,\n        lineNumber: 96,\n        columnNumber: 11\n      }, this), \"Processing\"]\n    }, void 0, true, {\n      fileName: _jsxFileName,\n      lineNumber: 95,\n      columnNumber: 9\n    }, this)]\n  }, void 0, true, {\n    fileName: _jsxFileName,\n    lineNumber: 54,\n    columnNumber: 5\n  }, this);\n}\n\n_s(Home, \"PcZAj2NNBK9dP8lfzgQZpWDDkhk=\", false, function () {\n  return [next_router__WEBPACK_IMPORTED_MODULE_5__[\"useRouter\"]];\n});\n\n_c = Home;\n\nvar _c;\n\n$RefreshReg$(_c, \"Home\");\n\n;\n    var _a, _b;\n    // Legacy CSS implementations will `eval` browser code in a Node.js context\n    // to extract CSS. For backwards compatibility, we need to check we're in a\n    // browser context before continuing.\n    if (typeof self !== 'undefined' &&\n        // AMP / No-JS mode does not inject these helpers:\n        '$RefreshHelpers$' in self) {\n        var currentExports = module.__proto__.exports;\n        var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n        // This cannot happen in MainTemplate because the exports mismatch between\n        // templating and execution.\n        self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.i);\n        // A module can be accepted automatically based on its exports, e.g. when\n        // it is a Refresh Boundary.\n        if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n            // Save the previous exports on update so we can compare the boundary\n            // signatures.\n            module.hot.dispose(function (data) {\n                data.prevExports = currentExports;\n            });\n            // Unconditionally accept an update to this module, we'll check if it's\n            // still a Refresh Boundary later.\n            module.hot.accept();\n            // This field is set when the previous version of this module was a\n            // Refresh Boundary, letting us know we need to check for invalidation or\n            // enqueue an update.\n            if (prevExports !== null) {\n                // A boundary can become ineligible if its exports are incompatible\n                // with the previous exports.\n                //\n                // For example, if you add/remove/change exports, we'll want to\n                // re-execute the importing modules, and force those components to\n                // re-render. Similarly, if you convert a class component to a\n                // function, we want to invalidate the boundary.\n                if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                    module.hot.invalidate();\n                }\n                else {\n                    self.$RefreshHelpers$.scheduleUpdate();\n                }\n            }\n        }\n        else {\n            // Since we just executed the code for the module, it's possible that the\n            // new exports made it ineligible for being a boundary.\n            // We only care about the case when we were _previously_ a boundary,\n            // because we already accepted this update (accidental side effect).\n            var isNoLongerABoundary = prevExports !== null;\n            if (isNoLongerABoundary) {\n                module.hot.invalidate();\n            }\n        }\n    }\n\n/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../../node_modules/webpack/buildin/harmony-module.js */ \"./node_modules/webpack/buildin/harmony-module.js\")(module)))//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vc3JjL3BhZ2VzL3BheW1lbnQudHN4P2I4MjkiXSwibmFtZXMiOlsicGFnZU5hbWUiLCJwYWdlRGVzY3JpcHRpb24iLCJwYWdlSGVybyIsIkhvbWUiLCJ1c2VTdGF0ZSIsInByb2Nlc3NpbmciLCJzZXRQcm9jZXNzaW5nIiwicHJpY2UiLCJzZXRQcmljZSIsIm1lbWJlcnMiLCJnZXRNZW1iZXJzV2l0aFNXUiIsInJvdXRlciIsInVzZVJvdXRlciIsInN1Ym1pdCIsImUiLCJtb250aHMiLCJpIiwiZGF0ZSIsImRheWpzIiwiYWRkIiwicHVzaCIsInllYXIiLCJtb250aCIsImZvcm1hdCIsInJldmVyc2UiLCJ1dGlsU3R5bGVzIiwiaW5wdXQiLCJtYXAiLCJtZW1iZXIiLCJrZXkiLCJpZCIsIm5hbWUiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBRUE7QUFDQTtBQUVBLElBQU1BLFFBQVEsR0FBRywwQkFBakI7QUFDQSxJQUFNQyxlQUFlLEdBQUcsOENBQXhCO0FBQ0EsSUFBTUMsUUFBUSxHQUFHLHFCQUFqQjtBQUVlLFNBQVNDLElBQVQsR0FBZ0I7QUFBQTs7QUFBQTs7QUFBQSxrQkFDT0Msc0RBQVEsQ0FBQyxLQUFELENBRGY7QUFBQSxNQUN0QkMsVUFEc0I7QUFBQSxNQUNWQyxhQURVOztBQUFBLG1CQUVIRixzREFBUSxDQUFDLFVBQUQsQ0FGTDtBQUFBLE1BRXRCRyxLQUZzQjtBQUFBLE1BRWZDLFFBRmUsa0JBRzdCO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7O0FBQ0EsTUFBTUMsT0FBTyxHQUFHQyxrRUFBaUIsRUFBakM7QUFFQSxNQUFNQyxNQUFNLEdBQUdDLDZEQUFTLEVBQXhCLENBWDZCLENBYTdCO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQSxNQUFNQyxNQUFNO0FBQUEsZ01BQUcsaUJBQU9DLENBQVA7QUFBQTtB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ImltcG9ydCBkYXlqcyBmcm9tIFwiZGF5anNcIjtcbmltcG9ydCB7IHVzZVN0YXRlIH0gZnJvbSBcInJlYWN0XCI7XG5pbXBvcnQgeyB1c2VSb3V0ZXIgfSBmcm9tIFwibmV4dC9yb3V0ZXJcIjtcbmltcG9ydCBMYXlvdXQgZnJvbSBcIi4uL2NvbXBvbmVudHMvbGF5b3V0XCI7XG5pbXBvcnQgUHJpY2UgZnJvbSBcIi4uL2NvbXBvbmVudHMvcHJpY2VcIjtcbmltcG9ydCB1dGlsU3R5bGVzIGZyb20gXCIuLi9zdHlsZXMvdXRpbHMubW9kdWxlLmNzc1wiO1xuaW1wb3J0IHsgZ2V0TWVtYmVyc1dpdGhTV1IsIHBvc3RQYXltZW50TW9udGggfSBmcm9tIFwiLi4vbGliL2FwaVwiO1xuXG5jb25zdCBwYWdlTmFtZSA9IFwiUGF5IHRoZSA8YnIgLz5jb21tb24gZmVlXCI7XG5jb25zdCBwYWdlRGVzY3JpcHRpb24gPSBcIlRoYW5rIHlvdSBmb3IgeW91ciBjb29wZXJhdGlvbiB0aGlzIG1vbnRoIPCfmIBcIjtcbmNvbnN0IHBhZ2VIZXJvID0gXCIvaW1hZ2VzL3BheW1lbnQuanBnXCI7XG5cbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIEhvbWUoKSB7XG4gIGNvbnN0IFtwcm9jZXNzaW5nLCBzZXRQcm9jZXNzaW5nXSA9IHVzZVN0YXRlKGZhbHNlKTtcbiAgY29uc3QgW3ByaWNlLCBzZXRQcmljZV0gPSB1c2VTdGF0ZSgxMjM0NTY3ODkwKTtcbiAgLy8gY29uc3QgW21vbnRoLCBzZXRNb250aF0gPSB1c2VTdGF0ZShbXG4gIC8vICAge1xuICAvLyAgICAgZGF0ZTogXCJcIixcbiAgLy8gICAgIGlkOiAtMSxcbiAgLy8gICB9LFxuICAvLyBdKTtcbiAgY29uc3QgbWVtYmVycyA9IGdldE1lbWJlcnNXaXRoU1dSKClcblxuICBjb25zdCByb3V0ZXIgPSB1c2VSb3V0ZXIoKTtcblxuICAvLyBjb25zdCBhZGRNb250aCA9IChlKSA9PiB7XG4gIC8vICAgc2V0TW9udGgoW1xuICAvLyAgICAgLi4ubW9udGgsXG4gIC8vICAgICB7XG4gIC8vICAgICAgIGRhdGU6IFwiXCIsXG4gIC8vICAgICAgIGlkOiAtMSxcbiAgLy8gICAgIH0sXG4gIC8vICAgXSk7XG4gIC8vIH07XG5cbiAgY29uc3Qgc3VibWl0ID0gYXN5bmMgKGUpID0+IHtcbiAgICAvLyBlLnByZXZlbnREZWZhdWx0KCk7XG4gICAgLy8gc2V0UHJvY2Vzc2luZyh0cnVlKTtcbiAgICAvLyBhd2FpdCBwb3N0UGF5bWVudE1vbnRoKG1vbnRoKVxuICAgIC8vIHJvdXRlci5wdXNoKFwidGhhbmtzXCIpO1xuICB9O1xuXG4gIGxldCBtb250aHMgPSBbXVxuICBmb3IgKGxldCBpID0gMDsgaSA8IDY7IGkrKykge1xuICAgIGNvbnN0IGRhdGUgPSBkYXlqcygpLmFkZCgtaSwgJ21vbnRoJylcbiAgICBtb250aHMucHVzaCh7XG4gICAgICB5ZWFyOiBkYXRlLnllYXIoKSxcbiAgICAgIG1vbnRoOiBkYXRlLmZvcm1hdCgnTU1NJyksXG4gICAgfSlcbiAgfVxuICBtb250aHMucmV2ZXJzZSgpXG5cbiAgcmV0dXJuIChcbiAgICA8TGF5b3V0XG4gICAgICBwYWdlTmFtZT17cGFnZU5hbWV9XG4gICAgICBwYWdlRGVzY3JpcHRpb249e3BhZ2VEZXNjcmlwdGlvbn1cbiAgICAgIHBhZ2VIZXJvPXtwYWdlSGVyb31cbiAgICA+XG4gICAgICA8ZGl2IGNsYXNzTmFtZT1cIm1iLTEwXCI+XG4gICAgICAgIHsvKiA8UHJpY2UgcHJpY2U9ezQwMH0gLz4gKi99XG4gICAgICAgIDxzZWxlY3QgY2xhc3NOYW1lPXt1dGlsU3R5bGVzLmlucHV0fT5cbiAgICAgICAgICAgICAgICAgIHttZW1iZXJzLm1hcCgobWVtYmVyLCBrZXkpID0+IHtcbiAgICAgICAgICAgICAgICAgICAgcmV0dXJuIChcbiAgICAgICAgICAgICAgICAgICAgICA8b3B0aW9uIGtleT17a2V5fSB2YWx1ZT17bWVtYmVyLmlkfT5cbiAgICAgICAgICAgICAgICAgICAgICAgIHttZW1iZXIubmFtZX1cbiAgICAgICAgICAgICAgICAgICAgICA8L29wdGlvbj5cbiAgICAgICAgICAgICAgICAgICAgKTtcbiAgICAgICAgICAgICAgICAgIH0pfVxuICAgICAgICAgICAgICAgIDwvc2VsZWN0PlxuICAgICAgPC9kaXY+XG4gICAgICA8ZGl2IGNsYXNzTmFtZT1cIm1iLTEwXCI+XG4gICAgICAgIDx1bD5cbiAgICAgICAgICB7bW9udGhzLm1hcCgobW9udGgsIGtleSkgPT4ge1xuICAgICAgICAgICAgcmV0dXJuIChcbiAgICAgICAgICAgICAgPGxpIGtleT17a2V5fSBjbGFzc05hbWU9XCJtYi01IGZsZXggc3BhY2UteC01XCI+XG4gICAgICAgICAgICAgIHttb250aC5tb250aH0uIHttb250aC55ZWFyfVxuICAgICAgICAgICAgICAgIHsvKiA8aW5wdXRcbiAgICAgICAgICAgICAgICAgIGNsYXNzTmFtZT17dXRpbFN0eWxlcy5pbnB1dH1cbiAgICAgICAgICAgICAgICAgIHR5cGU9XCJkYXRlXCJcbiAgICAgICAgICAgICAgICAgIC8vIGRlZmF1bHRWYWx1ZT17aXRlbS5kYXRlfVxuICAgICAgICAgICAgICAgIC8+ICovfVxuICAgICAgICAgICAgICA8L2xpPlxuICAgICAgICAgICAgKTtcbiAgICAgICAgICB9KX1cbiAgICAgICAgPC91bD5cbiAgICAgICAgey8qIDxidXR0b24gY2xhc3NOYW1lPXt1dGlsU3R5bGVzW1wiYnRuLWFkZFwiXX0gb25DbGljaz17YWRkTW9udGh9PlxuICAgICAgICAgIEFkZCBtb250aFxuICAgICAgICA8L2J1dHRvbj4gKi99XG4gICAgICA8L2Rpdj5cbiAgICAgIHshcHJvY2Vzc2luZyA/IChcbiAgICAgICAgPGJ1dHRvbiBjbGFzc05hbWU9e3V0aWxTdHlsZXNbXCJidG4tc3VibWl0XCJdfSBvbkNsaWNrPXtzdWJtaXR9PlxuICAgICAgICAgIFBheVxuICAgICAgICA8L2J1dHRvbj5cbiAgICAgICkgOiAoXG4gICAgICAgIDxidXR0b24gY2xhc3NOYW1lPXt1dGlsU3R5bGVzW1wiYnRuLXN1Ym1pdFwiXX0+XG4gICAgICAgICAgPHN2Z1xuICAgICAgICAgICAgY2xhc3NOYW1lPVwiYW5pbWF0ZS1zcGluXCJcbiAgICAgICAgICAgIHhtbG5zPVwiaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmdcIlxuICAgICAgICAgICAgZmlsbD1cIm5vbmVcIlxuICAgICAgICAgICAgdmlld0JveD1cIjAgMCAyNCAyNFwiXG4gICAgICAgICAgPlxuICAgICAgICAgICAgPGNpcmNsZVxuICAgICAgICAgICAgICBjbGFzc05hbWU9XCJvcGFjaXR5LTI1XCJcbiAgICAgICAgICAgICAgY3g9XCIxMlwiXG4gICAgICAgICAgICAgIGN5PVwiMTJcIlxuICAgICAgICAgICAgICByPVwiMTBcIlxuICAgICAgICAgICAgICBzdHJva2U9XCJjdXJyZW50Q29sb3JcIlxuICAgICAgICAgICAgICBzdHJva2Utd2lkdGg9XCI0XCJcbiAgICAgICAgICAgID48L2NpcmNsZT5cbiAgICAgICAgICAgIDxwYXRoXG4gICAgICAgICAgICAgIGNsYXNzTmFtZT1cIm9wYWNpdHktNzVcIlxuICAgICAgICAgICAgICBmaWxsPVwiY3VycmVudENvbG9yXCJcbiAgICAgICAgICAgICAgZD1cIk00IDEyYTggOCAwIDAxOC04VjBDNS4zNzMgMCAwIDUuMzczIDAgMTJoNHptMiA1LjI5MUE3Ljk2MiA3Ljk2MiAwIDAxNCAxMkgwYzAgMy4wNDIgMS4xMzUgNS44MjQgMyA3LjkzOGwzLTIuNjQ3elwiXG4gICAgICAgICAgICA+PC9wYXRoPlxuICAgICAgICAgIDwvc3ZnPlxuICAgICAgICAgIFByb2Nlc3NpbmdcbiAgICAgICAgPC9idXR0b24+XG4gICAgICApfVxuICAgIDwvTGF5b3V0PlxuICApO1xufVxuIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./src/pages/payment.tsx\n");

/***/ })

})