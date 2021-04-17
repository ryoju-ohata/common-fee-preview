webpackHotUpdate_N_E("pages/payment",{

/***/ "./src/pages/payment.tsx":
/*!*******************************!*\
  !*** ./src/pages/payment.tsx ***!
  \*******************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* WEBPACK VAR INJECTION */(function(module) {/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"default\", function() { return Home; });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @babel/runtime/regenerator */ \"./node_modules/@babel/runtime/regenerator/index.js\");\n/* harmony import */ var _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _babel_runtime_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @babel/runtime/helpers/esm/asyncToGenerator */ \"./node_modules/@babel/runtime/helpers/esm/asyncToGenerator.js\");\n/* harmony import */ var _babel_runtime_helpers_esm_toConsumableArray__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @babel/runtime/helpers/esm/toConsumableArray */ \"./node_modules/@babel/runtime/helpers/esm/toConsumableArray.js\");\n/* harmony import */ var dayjs__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! dayjs */ \"./node_modules/dayjs/dayjs.min.js\");\n/* harmony import */ var dayjs__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(dayjs__WEBPACK_IMPORTED_MODULE_4__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_5__);\n/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! next/router */ \"./node_modules/next/router.js\");\n/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(next_router__WEBPACK_IMPORTED_MODULE_6__);\n/* harmony import */ var _components_layout__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../components/layout */ \"./src/components/layout.tsx\");\n/* harmony import */ var _styles_utils_module_css__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../styles/utils.module.css */ \"./src/styles/utils.module.css\");\n/* harmony import */ var _styles_utils_module_css__WEBPACK_IMPORTED_MODULE_8___default = /*#__PURE__*/__webpack_require__.n(_styles_utils_module_css__WEBPACK_IMPORTED_MODULE_8__);\n/* harmony import */ var _lib_api__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../lib/api */ \"./src/lib/api.ts\");\n\n\n\n\n\nvar _jsxFileName = \"/Users/rj/Desktop/CFP/CommonFeePlan/app/src/pages/payment.tsx\",\n    _s = $RefreshSig$();\n\n\n\n\n\n\n\nvar pageName = \"Pay the <br />common fee\";\nvar pageDescription = \"Thank you for your cooperation this month 😀\";\nvar pageHero = \"/images/payment.jpg\";\nfunction Home() {\n  _s();\n\n  var _this = this;\n\n  var _useState = Object(react__WEBPACK_IMPORTED_MODULE_5__[\"useState\"])(false),\n      processing = _useState[0],\n      setProcessing = _useState[1];\n\n  var _useState2 = Object(react__WEBPACK_IMPORTED_MODULE_5__[\"useState\"])(1234567890),\n      price = _useState2[0],\n      setPrice = _useState2[1];\n\n  var _useState3 = Object(react__WEBPACK_IMPORTED_MODULE_5__[\"useState\"])([{\n    date: \"\",\n    id: -1\n  }]),\n      month = _useState3[0],\n      setMonth = _useState3[1];\n\n  var members = Object(_lib_api__WEBPACK_IMPORTED_MODULE_9__[\"getMembersWithSWR\"])();\n  var router = Object(next_router__WEBPACK_IMPORTED_MODULE_6__[\"useRouter\"])();\n\n  var addMonth = function addMonth(e) {\n    setMonth([].concat(Object(_babel_runtime_helpers_esm_toConsumableArray__WEBPACK_IMPORTED_MODULE_3__[\"default\"])(month), [{\n      date: \"\",\n      id: -1\n    }]));\n  };\n\n  var submit = /*#__PURE__*/function () {\n    var _ref = Object(_babel_runtime_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_2__[\"default\"])( /*#__PURE__*/_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_1___default.a.mark(function _callee(e) {\n      return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_1___default.a.wrap(function _callee$(_context) {\n        while (1) {\n          switch (_context.prev = _context.next) {\n            case 0:\n              e.preventDefault();\n              setProcessing(true);\n              _context.next = 4;\n              return Object(_lib_api__WEBPACK_IMPORTED_MODULE_9__[\"postPaymentMonth\"])(month);\n\n            case 4:\n              router.push(\"thanks\");\n\n            case 5:\n            case \"end\":\n              return _context.stop();\n          }\n        }\n      }, _callee);\n    }));\n\n    return function submit(_x) {\n      return _ref.apply(this, arguments);\n    };\n  }();\n\n  var months = [];\n\n  for (var i = 0; i < 6; i++) {\n    var date = dayjs__WEBPACK_IMPORTED_MODULE_4___default()().add(-i, 'month');\n    months.push({\n      year: date.year,\n      month: date.month\n    });\n  }\n\n  return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(_components_layout__WEBPACK_IMPORTED_MODULE_7__[\"default\"], {\n    pageName: pageName,\n    pageDescription: pageDescription,\n    pageHero: pageHero,\n    children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"div\", {\n      className: \"mb-10\",\n      children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"select\", {\n        className: _styles_utils_module_css__WEBPACK_IMPORTED_MODULE_8___default.a.input,\n        children: members.map(function (member, key) {\n          return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"option\", {\n            value: member.id,\n            children: member.name\n          }, key, false, {\n            fileName: _jsxFileName,\n            lineNumber: 63,\n            columnNumber: 23\n          }, _this);\n        })\n      }, void 0, false, {\n        fileName: _jsxFileName,\n        lineNumber: 60,\n        columnNumber: 9\n      }, this)\n    }, void 0, false, {\n      fileName: _jsxFileName,\n      lineNumber: 58,\n      columnNumber: 7\n    }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"div\", {\n      className: \"mb-10\",\n      children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"ul\", {\n        children: months.map(function (month, key) {\n          return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"li\", {\n            className: \"mb-5 flex space-x-5\",\n            children: [month, month.year, month.month]\n          }, key, true, {\n            fileName: _jsxFileName,\n            lineNumber: 74,\n            columnNumber: 15\n          }, _this);\n        })\n      }, void 0, false, {\n        fileName: _jsxFileName,\n        lineNumber: 71,\n        columnNumber: 9\n      }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"button\", {\n        className: _styles_utils_module_css__WEBPACK_IMPORTED_MODULE_8___default.a[\"btn-add\"],\n        onClick: addMonth,\n        children: \"Add month\"\n      }, void 0, false, {\n        fileName: _jsxFileName,\n        lineNumber: 87,\n        columnNumber: 9\n      }, this)]\n    }, void 0, true, {\n      fileName: _jsxFileName,\n      lineNumber: 70,\n      columnNumber: 7\n    }, this), !processing ? /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"button\", {\n      className: _styles_utils_module_css__WEBPACK_IMPORTED_MODULE_8___default.a[\"btn-submit\"],\n      onClick: submit,\n      children: \"Pay\"\n    }, void 0, false, {\n      fileName: _jsxFileName,\n      lineNumber: 92,\n      columnNumber: 9\n    }, this) : /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"button\", {\n      className: _styles_utils_module_css__WEBPACK_IMPORTED_MODULE_8___default.a[\"btn-submit\"],\n      children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"svg\", {\n        className: \"animate-spin\",\n        xmlns: \"http://www.w3.org/2000/svg\",\n        fill: \"none\",\n        viewBox: \"0 0 24 24\",\n        children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"circle\", {\n          className: \"opacity-25\",\n          cx: \"12\",\n          cy: \"12\",\n          r: \"10\",\n          stroke: \"currentColor\",\n          \"stroke-width\": \"4\"\n        }, void 0, false, {\n          fileName: _jsxFileName,\n          lineNumber: 103,\n          columnNumber: 13\n        }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"path\", {\n          className: \"opacity-75\",\n          fill: \"currentColor\",\n          d: \"M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z\"\n        }, void 0, false, {\n          fileName: _jsxFileName,\n          lineNumber: 111,\n          columnNumber: 13\n        }, this)]\n      }, void 0, true, {\n        fileName: _jsxFileName,\n        lineNumber: 97,\n        columnNumber: 11\n      }, this), \"Processing\"]\n    }, void 0, true, {\n      fileName: _jsxFileName,\n      lineNumber: 96,\n      columnNumber: 9\n    }, this)]\n  }, void 0, true, {\n    fileName: _jsxFileName,\n    lineNumber: 53,\n    columnNumber: 5\n  }, this);\n}\n\n_s(Home, \"qJFXD/yGthbxQAP3hvI1hV5JULQ=\", false, function () {\n  return [next_router__WEBPACK_IMPORTED_MODULE_6__[\"useRouter\"]];\n});\n\n_c = Home;\n\nvar _c;\n\n$RefreshReg$(_c, \"Home\");\n\n;\n    var _a, _b;\n    // Legacy CSS implementations will `eval` browser code in a Node.js context\n    // to extract CSS. For backwards compatibility, we need to check we're in a\n    // browser context before continuing.\n    if (typeof self !== 'undefined' &&\n        // AMP / No-JS mode does not inject these helpers:\n        '$RefreshHelpers$' in self) {\n        var currentExports = module.__proto__.exports;\n        var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n        // This cannot happen in MainTemplate because the exports mismatch between\n        // templating and execution.\n        self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.i);\n        // A module can be accepted automatically based on its exports, e.g. when\n        // it is a Refresh Boundary.\n        if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n            // Save the previous exports on update so we can compare the boundary\n            // signatures.\n            module.hot.dispose(function (data) {\n                data.prevExports = currentExports;\n            });\n            // Unconditionally accept an update to this module, we'll check if it's\n            // still a Refresh Boundary later.\n            module.hot.accept();\n            // This field is set when the previous version of this module was a\n            // Refresh Boundary, letting us know we need to check for invalidation or\n            // enqueue an update.\n            if (prevExports !== null) {\n                // A boundary can become ineligible if its exports are incompatible\n                // with the previous exports.\n                //\n                // For example, if you add/remove/change exports, we'll want to\n                // re-execute the importing modules, and force those components to\n                // re-render. Similarly, if you convert a class component to a\n                // function, we want to invalidate the boundary.\n                if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                    module.hot.invalidate();\n                }\n                else {\n                    self.$RefreshHelpers$.scheduleUpdate();\n                }\n            }\n        }\n        else {\n            // Since we just executed the code for the module, it's possible that the\n            // new exports made it ineligible for being a boundary.\n            // We only care about the case when we were _previously_ a boundary,\n            // because we already accepted this update (accidental side effect).\n            var isNoLongerABoundary = prevExports !== null;\n            if (isNoLongerABoundary) {\n                module.hot.invalidate();\n            }\n        }\n    }\n\n/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../../node_modules/webpack/buildin/harmony-module.js */ \"./node_modules/webpack/buildin/harmony-module.js\")(module)))//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vc3JjL3BhZ2VzL3BheW1lbnQudHN4P2I4MjkiXSwibmFtZXMiOlsicGFnZU5hbWUiLCJwYWdlRGVzY3JpcHRpb24iLCJwYWdlSGVybyIsIkhvbWUiLCJ1c2VTdGF0ZSIsInByb2Nlc3NpbmciLCJzZXRQcm9jZXNzaW5nIiwicHJpY2UiLCJzZXRQcmljZSIsImRhdGUiLCJpZCIsIm1vbnRoIiwic2V0TW9udGgiLCJtZW1iZXJzIiwiZ2V0TWVtYmVyc1dpdGhTV1IiLCJyb3V0ZXIiLCJ1c2VSb3V0ZXIiLCJhZGRNb250aCIsImUiLCJzdWJtaXQiLCJwcmV2ZW50RGVmYXVsdCIsInBvc3RQYXltZW50TW9udGgiLCJwdXNoIiwibW9udGhzIiwiaSIsImRheWpzIiwiYWRkIiwieWVhciIsInV0aWxTdHlsZXMiLCJpbnB1dCIsIm1hcCIsIm1lbWJlciIsImtleSIsIm5hbWUiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFFQTtBQUNBO0FBRUEsSUFBTUEsUUFBUSxHQUFHLDBCQUFqQjtBQUNBLElBQU1DLGVBQWUsR0FBRyw4Q0FBeEI7QUFDQSxJQUFNQyxRQUFRLEdBQUcscUJBQWpCO0FBRWUsU0FBU0MsSUFBVCxHQUFnQjtBQUFBOztBQUFBOztBQUFBLGtCQUNPQyxzREFBUSxDQUFDLEtBQUQsQ0FEZjtBQUFBLE1BQ3RCQyxVQURzQjtBQUFBLE1BQ1ZDLGFBRFU7O0FBQUEsbUJBRUhGLHNEQUFRLENBQUMsVUFBRCxDQUZMO0FBQUEsTUFFdEJHLEtBRnNCO0FBQUEsTUFFZkMsUUFGZTs7QUFBQSxtQkFHSEosc0RBQVEsQ0FBQyxDQUNqQztBQUNFSyxRQUFJLEVBQUUsRUFEUjtBQUVFQyxNQUFFLEVBQUUsQ0FBQztBQUZQLEdBRGlDLENBQUQsQ0FITDtBQUFBLE1BR3RCQyxLQUhzQjtBQUFBLE1BR2ZDLFFBSGU7O0FBUzdCLE1BQU1DLE9BQU8sR0FBR0Msa0VBQWlCLEVB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QUlFLGVBQU8sRUFBQyxXQUpWO0FBQUEsZ0NBTUU7QUFDRSxtQkFBUyxFQUFDLFlBRFo7QUFFRSxZQUFFLEVBQUMsSUFGTDtBQUdFLFlBQUUsRUFBQyxJQUhMO0FBSUUsV0FBQyxFQUFDLElBSko7QUFLRSxnQkFBTSxFQUFDLGNBTFQ7QUFNRSwwQkFBYTtBQU5mO0FBQUE7QUFBQTtBQUFBO0FBQUEsZ0JBTkYsZUFjRTtBQUNFLG1CQUFTLEVBQUMsWUFEWjtBQUVFLGNBQUksRUFBQyxjQUZQO0FBR0UsV0FBQyxFQUFDO0FBSEo7QUFBQTtBQUFBO0FBQUE7QUFBQSxnQkFkRjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsY0FERjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsWUEzQ0o7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLFVBREY7QUFzRUQ7O0dBN0d1QnpCLEk7VUFXUGEscUQ7OztLQVhPYixJIiwiZmlsZSI6Ii4vc3JjL3BhZ2VzL3BheW1lbnQudHN4LmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IGRheWpzIGZyb20gXCJkYXlqc1wiO1xuaW1wb3J0IHsgdXNlU3RhdGUgfSBmcm9tIFwicmVhY3RcIjtcbmltcG9ydCB7IHVzZVJvdXRlciB9IGZyb20gXCJuZXh0L3JvdXRlclwiO1xuaW1wb3J0IExheW91dCBmcm9tIFwiLi4vY29tcG9uZW50cy9sYXlvdXRcIjtcbmltcG9ydCBQcmljZSBmcm9tIFwiLi4vY29tcG9uZW50cy9wcmljZVwiO1xuaW1wb3J0IHV0aWxTdHlsZXMgZnJvbSBcIi4uL3N0eWxlcy91dGlscy5tb2R1bGUuY3NzXCI7XG5pbXBvcnQgeyBnZXRNZW1iZXJzV2l0aFNXUiwgcG9zdFBheW1lbnRNb250aCB9IGZyb20gXCIuLi9saWIvYXBpXCI7XG5cbmNvbnN0IHBhZ2VOYW1lID0gXCJQYXkgdGhlIDxiciAvPmNvbW1vbiBmZWVcIjtcbmNvbnN0IHBhZ2VEZXNjcmlwdGlvbiA9IFwiVGhhbmsgeW91IGZvciB5b3VyIGNvb3BlcmF0aW9uIHRoaXMgbW9udGgg8J+YgFwiO1xuY29uc3QgcGFnZUhlcm8gPSBcIi9pbWFnZXMvcGF5bWVudC5qcGdcIjtcblxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gSG9tZSgpIHtcbiAgY29uc3QgW3Byb2Nlc3NpbmcsIHNldFByb2Nlc3NpbmddID0gdXNlU3RhdGUoZmFsc2UpO1xuICBjb25zdCBbcHJpY2UsIHNldFByaWNlXSA9IHVzZVN0YXRlKDEyMzQ1Njc4OTApO1xuICBjb25zdCBbbW9udGgsIHNldE1vbnRoXSA9IHVzZVN0YXRlKFtcbiAgICB7XG4gICAgICBkYXRlOiBcIlwiLFxuICAgICAgaWQ6IC0xLFxuICAgIH0sXG4gIF0pO1xuICBjb25zdCBtZW1iZXJzID0gZ2V0TWVtYmVyc1dpdGhTV1IoKVxuXG4gIGNvbnN0IHJvdXRlciA9IHVzZVJvdXRlcigpO1xuXG4gIGNvbnN0IGFkZE1vbnRoID0gKGUpID0+IHtcbiAgICBzZXRNb250aChbXG4gICAgICAuLi5tb250aCxcbiAgICAgIHtcbiAgICAgICAgZGF0ZTogXCJcIixcbiAgICAgICAgaWQ6IC0xLFxuICAgICAgfSxcbiAgICBdKTtcbiAgfTtcblxuICBjb25zdCBzdWJtaXQgPSBhc3luYyAoZSkgPT4ge1xuICAgIGUucHJldmVudERlZmF1bHQoKTtcbiAgICBzZXRQcm9jZXNzaW5nKHRydWUpO1xuICAgIGF3YWl0IHBvc3RQYXltZW50TW9udGgobW9udGgpXG4gICAgcm91dGVyLnB1c2goXCJ0aGFua3NcIik7XG4gIH07XG5cbiAgbGV0IG1vbnRocyA9IFtdXG4gIGZvciAobGV0IGkgPSAwOyBpIDwgNjsgaSsrKSB7XG4gICAgY29uc3QgZGF0ZSA9IGRheWpzKCkuYWRkKC1pLCAnbW9udGgnKVxuICAgIG1vbnRocy5wdXNoKHtcbiAgICAgIHllYXI6IGRhdGUueWVhcixcbiAgICAgIG1vbnRoOiBkYXRlLm1vbnRoLFxuICAgIH0pXG4gIH1cblxuICByZXR1cm4gKFxuICAgIDxMYXlvdXRcbiAgICAgIHBhZ2VOYW1lPXtwYWdlTmFtZX1cbiAgICAgIHBhZ2VEZXNjcmlwdGlvbj17cGFnZURlc2NyaXB0aW9ufVxuICAgICAgcGFnZUhlcm89e3BhZ2VIZXJvfVxuICAgID5cbiAgICAgIDxkaXYgY2xhc3NOYW1lPVwibWItMTBcIj5cbiAgICAgICAgey8qIDxQcmljZSBwcmljZT17NDAwfSAvPiAqL31cbiAgICAgICAgPHNlbGVjdCBjbGFzc05hbWU9e3V0aWxTdHlsZXMuaW5wdXR9PlxuICAgICAgICAgICAgICAgICAge21lbWJlcnMubWFwKChtZW1iZXIsIGtleSkgPT4ge1xuICAgICAgICAgICAgICAgICAgICByZXR1cm4gKFxuICAgICAgICAgICAgICAgICAgICAgIDxvcHRpb24ga2V5PXtrZXl9IHZhbHVlPXttZW1iZXIuaWR9PlxuICAgICAgICAgICAgICAgICAgICAgICAge21lbWJlci5uYW1lfVxuICAgICAgICAgICAgICAgICAgICAgIDwvb3B0aW9uPlxuICAgICAgICAgICAgICAgICAgICApO1xuICAgICAgICAgICAgICAgICAgfSl9XG4gICAgICAgICAgICAgICAgPC9zZWxlY3Q+XG4gICAgICA8L2Rpdj5cbiAgICAgIDxkaXYgY2xhc3NOYW1lPVwibWItMTBcIj5cbiAgICAgICAgPHVsPlxuICAgICAgICAgIHttb250aHMubWFwKChtb250aCwga2V5KSA9PiB7XG4gICAgICAgICAgICByZXR1cm4gKFxuICAgICAgICAgICAgICA8bGkga2V5PXtrZXl9IGNsYXNzTmFtZT1cIm1iLTUgZmxleCBzcGFjZS14LTVcIj5cbiAgICAgICAgICAgICAgICB7bW9udGh9XG4gICAgICAgICAgICAgIHttb250aC55ZWFyfVxuICAgICAgICAgICAgICB7bW9udGgubW9udGh9XG4gICAgICAgICAgICAgICAgey8qIDxpbnB1dFxuICAgICAgICAgICAgICAgICAgY2xhc3NOYW1lPXt1dGlsU3R5bGVzLmlucHV0fVxuICAgICAgICAgICAgICAgICAgdHlwZT1cImRhdGVcIlxuICAgICAgICAgICAgICAgICAgLy8gZGVmYXVsdFZhbHVlPXtpdGVtLmRhdGV9XG4gICAgICAgICAgICAgICAgLz4gKi99XG4gICAgICAgICAgICAgIDwvbGk+XG4gICAgICAgICAgICApO1xuICAgICAgICAgIH0pfVxuICAgICAgICA8L3VsPlxuICAgICAgICA8YnV0dG9uIGNsYXNzTmFtZT17dXRpbFN0eWxlc1tcImJ0bi1hZGRcIl19IG9uQ2xpY2s9e2FkZE1vbnRofT5cbiAgICAgICAgICBBZGQgbW9udGhcbiAgICAgICAgPC9idXR0b24+XG4gICAgICA8L2Rpdj5cbiAgICAgIHshcHJvY2Vzc2luZyA/IChcbiAgICAgICAgPGJ1dHRvbiBjbGFzc05hbWU9e3V0aWxTdHlsZXNbXCJidG4tc3VibWl0XCJdfSBvbkNsaWNrPXtzdWJtaXR9PlxuICAgICAgICAgIFBheVxuICAgICAgICA8L2J1dHRvbj5cbiAgICAgICkgOiAoXG4gICAgICAgIDxidXR0b24gY2xhc3NOYW1lPXt1dGlsU3R5bGVzW1wiYnRuLXN1Ym1pdFwiXX0+XG4gICAgICAgICAgPHN2Z1xuICAgICAgICAgICAgY2xhc3NOYW1lPVwiYW5pbWF0ZS1zcGluXCJcbiAgICAgICAgICAgIHhtbG5zPVwiaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmdcIlxuICAgICAgICAgICAgZmlsbD1cIm5vbmVcIlxuICAgICAgICAgICAgdmlld0JveD1cIjAgMCAyNCAyNFwiXG4gICAgICAgICAgPlxuICAgICAgICAgICAgPGNpcmNsZVxuICAgICAgICAgICAgICBjbGFzc05hbWU9XCJvcGFjaXR5LTI1XCJcbiAgICAgICAgICAgICAgY3g9XCIxMlwiXG4gICAgICAgICAgICAgIGN5PVwiMTJcIlxuICAgICAgICAgICAgICByPVwiMTBcIlxuICAgICAgICAgICAgICBzdHJva2U9XCJjdXJyZW50Q29sb3JcIlxuICAgICAgICAgICAgICBzdHJva2Utd2lkdGg9XCI0XCJcbiAgICAgICAgICAgID48L2NpcmNsZT5cbiAgICAgICAgICAgIDxwYXRoXG4gICAgICAgICAgICAgIGNsYXNzTmFtZT1cIm9wYWNpdHktNzVcIlxuICAgICAgICAgICAgICBmaWxsPVwiY3VycmVudENvbG9yXCJcbiAgICAgICAgICAgICAgZD1cIk00IDEyYTggOCAwIDAxOC04VjBDNS4zNzMgMCAwIDUuMzczIDAgMTJoNHptMiA1LjI5MUE3Ljk2MiA3Ljk2MiAwIDAxNCAxMkgwYzAgMy4wNDIgMS4xMzUgNS44MjQgMyA3LjkzOGwzLTIuNjQ3elwiXG4gICAgICAgICAgICA+PC9wYXRoPlxuICAgICAgICAgIDwvc3ZnPlxuICAgICAgICAgIFByb2Nlc3NpbmdcbiAgICAgICAgPC9idXR0b24+XG4gICAgICApfVxuICAgIDwvTGF5b3V0PlxuICApO1xufVxuIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./src/pages/payment.tsx\n");

/***/ })

})