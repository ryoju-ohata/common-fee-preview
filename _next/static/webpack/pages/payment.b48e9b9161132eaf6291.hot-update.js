webpackHotUpdate_N_E("pages/payment",{

/***/ "./src/pages/payment.tsx":
/*!*******************************!*\
  !*** ./src/pages/payment.tsx ***!
  \*******************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* WEBPACK VAR INJECTION */(function(module) {/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"default\", function() { return Home; });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @babel/runtime/regenerator */ \"./node_modules/@babel/runtime/regenerator/index.js\");\n/* harmony import */ var _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _babel_runtime_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @babel/runtime/helpers/esm/asyncToGenerator */ \"./node_modules/@babel/runtime/helpers/esm/asyncToGenerator.js\");\n/* harmony import */ var dayjs__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! dayjs */ \"./node_modules/dayjs/dayjs.min.js\");\n/* harmony import */ var dayjs__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(dayjs__WEBPACK_IMPORTED_MODULE_3__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_4__);\n/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! next/router */ \"./node_modules/next/router.js\");\n/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(next_router__WEBPACK_IMPORTED_MODULE_5__);\n/* harmony import */ var _components_layout__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../components/layout */ \"./src/components/layout.tsx\");\n/* harmony import */ var _styles_utils_module_css__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../styles/utils.module.css */ \"./src/styles/utils.module.css\");\n/* harmony import */ var _styles_utils_module_css__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(_styles_utils_module_css__WEBPACK_IMPORTED_MODULE_7__);\n/* harmony import */ var _lib_api__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../lib/api */ \"./src/lib/api.ts\");\n\n\n\n\nvar _jsxFileName = \"/Users/rj/Desktop/CFP/CommonFeePlan/app/src/pages/payment.tsx\",\n    _s = $RefreshSig$();\n\n\n\n\n\n\n\nvar pageName = \"Pay the <br />common fee\";\nvar pageDescription = \"Thank you for your cooperation this month 😀\";\nvar pageHero = \"/images/payment.jpg\";\nfunction Home() {\n  _s();\n\n  var _this = this;\n\n  var _useState = Object(react__WEBPACK_IMPORTED_MODULE_4__[\"useState\"])(false),\n      processing = _useState[0],\n      setProcessing = _useState[1];\n\n  var _useState2 = Object(react__WEBPACK_IMPORTED_MODULE_4__[\"useState\"])(1234567890),\n      price = _useState2[0],\n      setPrice = _useState2[1]; // const [month, setMonth] = useState([\n  //   {\n  //     date: \"\",\n  //     id: -1,\n  //   },\n  // ]);\n\n\n  var originMonths = [];\n\n  for (var i = 0; i < 6; i++) {\n    var date = dayjs__WEBPACK_IMPORTED_MODULE_3___default()().add(-i, 'month');\n    originMonths.push({\n      year: date.year(),\n      month: date.format('MMM'),\n      processing: false,\n      paid: false,\n      price: 200\n    });\n  }\n\n  originMonths.reverse();\n\n  var _useState3 = Object(react__WEBPACK_IMPORTED_MODULE_4__[\"useState\"])(originMonths),\n      months = _useState3[0],\n      setMonths = _useState3[1];\n\n  var members = Object(_lib_api__WEBPACK_IMPORTED_MODULE_8__[\"getMembersWithSWR\"])();\n  var router = Object(next_router__WEBPACK_IMPORTED_MODULE_5__[\"useRouter\"])(); // const addMonth = (e) => {\n  //   setMonth([\n  //     ...month,\n  //     {\n  //       date: \"\",\n  //       id: -1,\n  //     },\n  //   ]);\n  // };\n\n  var submit = /*#__PURE__*/function () {\n    var _ref = Object(_babel_runtime_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_2__[\"default\"])( /*#__PURE__*/_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_1___default.a.mark(function _callee(index) {\n      return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_1___default.a.wrap(function _callee$(_context) {\n        while (1) {\n          switch (_context.prev = _context.next) {\n            case 0:\n              months[index].processing = true;\n              setMonths(months);\n              setMonths(Object.assign([], months)); // e.preventDefault();\n              // setProcessing(true);\n              // await postPaymentMonth(month)\n              // router.push(\"thanks\");\n\n            case 3:\n            case \"end\":\n              return _context.stop();\n          }\n        }\n      }, _callee);\n    }));\n\n    return function submit(_x) {\n      return _ref.apply(this, arguments);\n    };\n  }();\n\n  var setMonthPrice = function setMonthPrice(index, value) {\n    months[index].price = value;\n    setMonths(Object.assign([], months));\n  };\n\n  return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(_components_layout__WEBPACK_IMPORTED_MODULE_6__[\"default\"], {\n    pageName: pageName,\n    pageDescription: pageDescription,\n    pageHero: pageHero,\n    children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"div\", {\n      className: \"mb-10\",\n      children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"select\", {\n        className: _styles_utils_module_css__WEBPACK_IMPORTED_MODULE_7___default.a.input,\n        children: members.map(function (member, key) {\n          return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"option\", {\n            value: member.id,\n            children: member.name\n          }, key, false, {\n            fileName: _jsxFileName,\n            lineNumber: 77,\n            columnNumber: 23\n          }, _this);\n        })\n      }, void 0, false, {\n        fileName: _jsxFileName,\n        lineNumber: 74,\n        columnNumber: 9\n      }, this)\n    }, void 0, false, {\n      fileName: _jsxFileName,\n      lineNumber: 72,\n      columnNumber: 7\n    }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"div\", {\n      className: \"mb-10\",\n      children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"ul\", {\n        children: months.map(function (month, index) {\n          return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"li\", {\n            className: \"mb-5 flex space-x-5\",\n            children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"span\", {\n              style: {\n                width: '300px',\n                marginTop: '5px',\n                display: 'inline-block'\n              },\n              children: [month.month, \". \", month.year]\n            }, void 0, true, {\n              fileName: _jsxFileName,\n              lineNumber: 89,\n              columnNumber: 17\n            }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"select\", {\n              className: _styles_utils_module_css__WEBPACK_IMPORTED_MODULE_7___default.a.input,\n              onChange: function onChange(e) {\n                return setMonthPrice(index, e.target.value);\n              },\n              value: month.price,\n              children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"option\", {\n                value: \"100\",\n                children: \"100\"\n              }, void 0, false, {\n                fileName: _jsxFileName,\n                lineNumber: 91,\n                columnNumber: 19\n              }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"option\", {\n                value: \"200\",\n                children: \"200\"\n              }, void 0, false, {\n                fileName: _jsxFileName,\n                lineNumber: 92,\n                columnNumber: 19\n              }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"option\", {\n                value: \"300\",\n                children: \"300\"\n              }, void 0, false, {\n                fileName: _jsxFileName,\n                lineNumber: 93,\n                columnNumber: 19\n              }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"option\", {\n                value: \"400\",\n                children: \"400\"\n              }, void 0, false, {\n                fileName: _jsxFileName,\n                lineNumber: 94,\n                columnNumber: 19\n              }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"option\", {\n                value: \"500\",\n                children: \"500\"\n              }, void 0, false, {\n                fileName: _jsxFileName,\n                lineNumber: 95,\n                columnNumber: 19\n              }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"option\", {\n                value: \"600\",\n                children: \"600\"\n              }, void 0, false, {\n                fileName: _jsxFileName,\n                lineNumber: 96,\n                columnNumber: 19\n              }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"option\", {\n                value: \"700\",\n                children: \"700\"\n              }, void 0, false, {\n                fileName: _jsxFileName,\n                lineNumber: 97,\n                columnNumber: 19\n              }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"option\", {\n                value: \"800\",\n                children: \"800\"\n              }, void 0, false, {\n                fileName: _jsxFileName,\n                lineNumber: 98,\n                columnNumber: 19\n              }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"option\", {\n                value: \"900\",\n                children: \"900\"\n              }, void 0, false, {\n                fileName: _jsxFileName,\n                lineNumber: 99,\n                columnNumber: 19\n              }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"option\", {\n                value: \"1000\",\n                children: \"1,000\"\n              }, void 0, false, {\n                fileName: _jsxFileName,\n                lineNumber: 100,\n                columnNumber: 19\n              }, _this)]\n            }, void 0, true, {\n              fileName: _jsxFileName,\n              lineNumber: 90,\n              columnNumber: 17\n            }, _this), !month.processing ? /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"button\", {\n              className: _styles_utils_module_css__WEBPACK_IMPORTED_MODULE_7___default.a[\"btn-submit\"],\n              onClick: function onClick(e) {\n                return submit(index);\n              },\n              style: {\n                padding: 0\n              },\n              children: \"Pay\"\n            }, void 0, false, {\n              fileName: _jsxFileName,\n              lineNumber: 108,\n              columnNumber: 9\n            }, _this) : /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"button\", {\n              className: _styles_utils_module_css__WEBPACK_IMPORTED_MODULE_7___default.a[\"btn-submit\"],\n              style: {\n                padding: 0\n              },\n              children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"svg\", {\n                className: \"animate-spin\",\n                xmlns: \"http://www.w3.org/2000/svg\",\n                fill: \"none\",\n                viewBox: \"0 0 24 24\",\n                children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"circle\", {\n                  className: \"opacity-25\",\n                  cx: \"12\",\n                  cy: \"12\",\n                  r: \"10\",\n                  stroke: \"currentColor\",\n                  \"stroke-width\": \"4\"\n                }, void 0, false, {\n                  fileName: _jsxFileName,\n                  lineNumber: 119,\n                  columnNumber: 13\n                }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"path\", {\n                  className: \"opacity-75\",\n                  fill: \"currentColor\",\n                  d: \"M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z\"\n                }, void 0, false, {\n                  fileName: _jsxFileName,\n                  lineNumber: 127,\n                  columnNumber: 13\n                }, _this)]\n              }, void 0, true, {\n                fileName: _jsxFileName,\n                lineNumber: 113,\n                columnNumber: 11\n              }, _this), \"Processing\"]\n            }, void 0, true, {\n              fileName: _jsxFileName,\n              lineNumber: 112,\n              columnNumber: 9\n            }, _this)]\n          }, index, true, {\n            fileName: _jsxFileName,\n            lineNumber: 88,\n            columnNumber: 15\n          }, _this);\n        })\n      }, void 0, false, {\n        fileName: _jsxFileName,\n        lineNumber: 85,\n        columnNumber: 9\n      }, this)\n    }, void 0, false, {\n      fileName: _jsxFileName,\n      lineNumber: 84,\n      columnNumber: 7\n    }, this)]\n  }, void 0, true, {\n    fileName: _jsxFileName,\n    lineNumber: 67,\n    columnNumber: 5\n  }, this);\n}\n\n_s(Home, \"IHviJIUWro1iI3vsiAleKuTF28M=\", false, function () {\n  return [next_router__WEBPACK_IMPORTED_MODULE_5__[\"useRouter\"]];\n});\n\n_c = Home;\n\nvar _c;\n\n$RefreshReg$(_c, \"Home\");\n\n;\n    var _a, _b;\n    // Legacy CSS implementations will `eval` browser code in a Node.js context\n    // to extract CSS. For backwards compatibility, we need to check we're in a\n    // browser context before continuing.\n    if (typeof self !== 'undefined' &&\n        // AMP / No-JS mode does not inject these helpers:\n        '$RefreshHelpers$' in self) {\n        var currentExports = module.__proto__.exports;\n        var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n        // This cannot happen in MainTemplate because the exports mismatch between\n        // templating and execution.\n        self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.i);\n        // A module can be accepted automatically based on its exports, e.g. when\n        // it is a Refresh Boundary.\n        if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n            // Save the previous exports on update so we can compare the boundary\n            // signatures.\n            module.hot.dispose(function (data) {\n                data.prevExports = currentExports;\n            });\n            // Unconditionally accept an update to this module, we'll check if it's\n            // still a Refresh Boundary later.\n            module.hot.accept();\n            // This field is set when the previous version of this module was a\n            // Refresh Boundary, letting us know we need to check for invalidation or\n            // enqueue an update.\n            if (prevExports !== null) {\n                // A boundary can become ineligible if its exports are incompatible\n                // with the previous exports.\n                //\n                // For example, if you add/remove/change exports, we'll want to\n                // re-execute the importing modules, and force those components to\n                // re-render. Similarly, if you convert a class component to a\n                // function, we want to invalidate the boundary.\n                if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                    module.hot.invalidate();\n                }\n                else {\n                    self.$RefreshHelpers$.scheduleUpdate();\n                }\n            }\n        }\n        else {\n            // Since we just executed the code for the module, it's possible that the\n            // new exports made it ineligible for being a boundary.\n            // We only care about the case when we were _previously_ a boundary,\n            // because we already accepted this update (accidental side effect).\n            var isNoLongerABoundary = prevExports !== null;\n            if (isNoLongerABoundary) {\n                module.hot.invalidate();\n            }\n        }\n    }\n\n/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../../node_modules/webpack/buildin/harmony-module.js */ \"./node_modules/webpack/buildin/harmony-module.js\")(module)))//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vc3JjL3BhZ2VzL3BheW1lbnQudHN4P2I4MjkiXSwibmFtZXMiOlsicGFnZU5hbWUiLCJwYWdlRGVzY3JpcHRpb24iLCJwYWdlSGVybyIsIkhvbWUiLCJ1c2VTdGF0ZSIsInByb2Nlc3NpbmciLCJzZXRQcm9jZXNzaW5nIiwicHJpY2UiLCJzZXRQcmljZSIsIm9yaWdpbk1vbnRocyIsImkiLCJkYXRlIiwiZGF5anMiLCJhZGQiLCJwdXNoIiwieWVhciIsIm1vbnRoIiwiZm9ybWF0IiwicGFpZCIsInJldmVyc2UiLCJtb250aHMiLCJzZXRNb250aHMiLCJtZW1iZXJzIiwiZ2V0TWVtYmVyc1dpdGhTV1IiLCJyb3V0ZXIiLCJ1c2VSb3V0ZXIiLCJzdWJtaXQiLCJpbmRleCIsIk9iamVjdCIsImFzc2lnbiIsInNldE1vbnRoUHJpY2UiLCJ2YWx1ZSIsInV0aWxTdHlsZXMiLCJpbnB1dCIsIm1hcCIsIm1lbWJlciIsImtleSIsImlkIiwibmFtZSIsIndpZHRoIiwibWFyZ2luVG9wIiwiZGlzcGxheSIsImUiLCJ0YXJnZXQiLCJwYWRkaW5nIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUVBO0FBQ0E7QUFFQSxJQUFNQSxRQUFRLEdBQUcsMEJBQWpCO0FBQ0EsSUFBTUMsZUFBZSxHQUFHLDhDQUF4QjtBQUNBLElBQU1DLFFBQVEsR0FBRyxxQkFBakI7QUFFZSxTQUFTQyxJQUFULEdBQWdCO0FBQUE7O0FBQUE7O0FBQUEsa0JBQ09DLHNEQUFRLENBQUMsS0FBRCxDQURmO0FBQUEsTUFDdEJDLFVBRHNCO0FBQUEsTUFDVkMsYUFEVTs7QUFBQSxtQkFFSEYsc0RBQVEsQ0FBQyxVQUFELENBRkw7QUFBQSxNQUV0QkcsS0FGc0I7QUFBQSxNQUVmQyxRQUZlLGtCQUc3QjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7OztBQUVBLE1BQUlDLFlBQVksR0FBRyxFQUFuQjs7QUFDQSxP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Q29udGVudCI6WyJpbXBvcnQgZGF5anMgZnJvbSBcImRheWpzXCI7XG5pbXBvcnQgeyB1c2VTdGF0ZSB9IGZyb20gXCJyZWFjdFwiO1xuaW1wb3J0IHsgdXNlUm91dGVyIH0gZnJvbSBcIm5leHQvcm91dGVyXCI7XG5pbXBvcnQgTGF5b3V0IGZyb20gXCIuLi9jb21wb25lbnRzL2xheW91dFwiO1xuaW1wb3J0IFByaWNlIGZyb20gXCIuLi9jb21wb25lbnRzL3ByaWNlXCI7XG5pbXBvcnQgdXRpbFN0eWxlcyBmcm9tIFwiLi4vc3R5bGVzL3V0aWxzLm1vZHVsZS5jc3NcIjtcbmltcG9ydCB7IGdldE1lbWJlcnNXaXRoU1dSLCBwb3N0UGF5bWVudE1vbnRoIH0gZnJvbSBcIi4uL2xpYi9hcGlcIjtcblxuY29uc3QgcGFnZU5hbWUgPSBcIlBheSB0aGUgPGJyIC8+Y29tbW9uIGZlZVwiO1xuY29uc3QgcGFnZURlc2NyaXB0aW9uID0gXCJUaGFuayB5b3UgZm9yIHlvdXIgY29vcGVyYXRpb24gdGhpcyBtb250aCDwn5iAXCI7XG5jb25zdCBwYWdlSGVybyA9IFwiL2ltYWdlcy9wYXltZW50LmpwZ1wiO1xuXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBIb21lKCkge1xuICBjb25zdCBbcHJvY2Vzc2luZywgc2V0UHJvY2Vzc2luZ10gPSB1c2VTdGF0ZShmYWxzZSk7XG4gIGNvbnN0IFtwcmljZSwgc2V0UHJpY2VdID0gdXNlU3RhdGUoMTIzNDU2Nzg5MCk7XG4gIC8vIGNvbnN0IFttb250aCwgc2V0TW9udGhdID0gdXNlU3RhdGUoW1xuICAvLyAgIHtcbiAgLy8gICAgIGRhdGU6IFwiXCIsXG4gIC8vICAgICBpZDogLTEsXG4gIC8vICAgfSxcbiAgLy8gXSk7XG5cbiAgbGV0IG9yaWdpbk1vbnRocyA9IFtdXG4gIGZvciAobGV0IGkgPSAwOyBpIDwgNjsgaSsrKSB7XG4gICAgY29uc3QgZGF0ZSA9IGRheWpzKCkuYWRkKC1pLCAnbW9udGgnKVxuICAgIG9yaWdpbk1vbnRocy5wdXNoKHtcbiAgICAgIHllYXI6IGRhdGUueWVhcigpLFxuICAgICAgbW9udGg6IGRhdGUuZm9ybWF0KCdNTU0nKSxcbiAgICAgIHByb2Nlc3Npbmc6IGZhbHNlLFxuICAgICAgcGFpZDogZmFsc2UsXG4gICAgICBwcmljZTogMjAwXG4gICAgfSlcbiAgfVxuICBvcmlnaW5Nb250aHMucmV2ZXJzZSgpXG4gIGNvbnN0IFttb250aHMsIHNldE1vbnRoc10gPSB1c2VTdGF0ZShvcmlnaW5Nb250aHMpO1xuXG4gIGNvbnN0IG1lbWJlcnMgPSBnZXRNZW1iZXJzV2l0aFNXUigpXG5cbiAgY29uc3Qgcm91dGVyID0gdXNlUm91dGVyKCk7XG5cbiAgLy8gY29uc3QgYWRkTW9udGggPSAoZSkgPT4ge1xuICAvLyAgIHNldE1vbnRoKFtcbiAgLy8gICAgIC4uLm1vbnRoLFxuICAvLyAgICAge1xuICAvLyAgICAgICBkYXRlOiBcIlwiLFxuICAvLyAgICAgICBpZDogLTEsXG4gIC8vICAgICB9LFxuICAvLyAgIF0pO1xuICAvLyB9O1xuXG4gIGNvbnN0IHN1Ym1pdCA9IGFzeW5jIChpbmRleCkgPT4ge1xuICAgIG1vbnRoc1tpbmRleF0ucHJvY2Vzc2luZyA9IHRydWVcbiAgICBzZXRNb250aHMobW9udGhzKVxuICAgIHNldE1vbnRocyhPYmplY3QuYXNzaWduKFtdLCBtb250aHMpKVxuICAgIC8vIGUucHJldmVudERlZmF1bHQoKTtcbiAgICAvLyBzZXRQcm9jZXNzaW5nKHRydWUpO1xuICAgIC8vIGF3YWl0IHBvc3RQYXltZW50TW9udGgobW9udGgpXG4gICAgLy8gcm91dGVyLnB1c2goXCJ0aGFua3NcIik7XG4gIH07XG5cbiAgY29uc3Qgc2V0TW9udGhQcmljZSA9IChpbmRleCwgdmFsdWUpID0+IHtcbiAgICBtb250aHNbaW5kZXhdLnByaWNlID0gdmFsdWVcbiAgICBzZXRNb250aHMoT2JqZWN0LmFzc2lnbihbXSwgbW9udGhzKSlcbiAgfVxuXG4gIHJldHVybiAoXG4gICAgPExheW91dFxuICAgICAgcGFnZU5hbWU9e3BhZ2VOYW1lfVxuICAgICAgcGFnZURlc2NyaXB0aW9uPXtwYWdlRGVzY3JpcHRpb259XG4gICAgICBwYWdlSGVybz17cGFnZUhlcm99XG4gICAgPlxuICAgICAgPGRpdiBjbGFzc05hbWU9XCJtYi0xMFwiPlxuICAgICAgICB7LyogPFByaWNlIHByaWNlPXs0MDB9IC8+ICovfVxuICAgICAgICA8c2VsZWN0IGNsYXNzTmFtZT17dXRpbFN0eWxlcy5pbnB1dH0+XG4gICAgICAgICAgICAgICAgICB7bWVtYmVycy5tYXAoKG1lbWJlciwga2V5KSA9PiB7XG4gICAgICAgICAgICAgICAgICAgIHJldHVybiAoXG4gICAgICAgICAgICAgICAgICAgICAgPG9wdGlvbiBrZXk9e2tleX0gdmFsdWU9e21lbWJlci5pZH0+XG4gICAgICAgICAgICAgICAgICAgICAgICB7bWVtYmVyLm5hbWV9XG4gICAgICAgICAgICAgICAgICAgICAgPC9vcHRpb24+XG4gICAgICAgICAgICAgICAgICAgICk7XG4gICAgICAgICAgICAgICAgICB9KX1cbiAgICAgICAgICAgICAgICA8L3NlbGVjdD5cbiAgICAgIDwvZGl2PlxuICAgICAgPGRpdiBjbGFzc05hbWU9XCJtYi0xMFwiPlxuICAgICAgICA8dWw+XG4gICAgICAgICAge21vbnRocy5tYXAoKG1vbnRoLCBpbmRleCkgPT4ge1xuICAgICAgICAgICAgcmV0dXJuIChcbiAgICAgICAgICAgICAgPGxpIGtleT17aW5kZXh9IGNsYXNzTmFtZT1cIm1iLTUgZmxleCBzcGFjZS14LTVcIj5cbiAgICAgICAgICAgICAgICA8c3BhbiBzdHlsZT17e3dpZHRoOiczMDBweCcsIG1hcmdpblRvcDogJzVweCcsIGRpc3BsYXk6ICdpbmxpbmUtYmxvY2snfX0+e21vbnRoLm1vbnRofS4ge21vbnRoLnllYXJ9PC9zcGFuPlxuICAgICAgICAgICAgICAgIDxzZWxlY3QgY2xhc3NOYW1lPXt1dGlsU3R5bGVzLmlucHV0fSBvbkNoYW5nZT17KGUpID0+IHNldE1vbnRoUHJpY2UoaW5kZXgsIGUudGFyZ2V0LnZhbHVlKX0gdmFsdWU9e21vbnRoLnByaWNlfT5cbiAgICAgICAgICAgICAgICAgIDxvcHRpb24gdmFsdWU9XCIxMDBcIj4xMDA8L29wdGlvbj5cbiAgICAgICAgICAgICAgICAgIDxvcHRpb24gdmFsdWU9XCIyMDBcIj4yMDA8L29wdGlvbj5cbiAgICAgICAgICAgICAgICAgIDxvcHRpb24gdmFsdWU9XCIzMDBcIj4zMDA8L29wdGlvbj5cbiAgICAgICAgICAgICAgICAgIDxvcHRpb24gdmFsdWU9XCI0MDBcIj40MDA8L29wdGlvbj5cbiAgICAgICAgICAgICAgICAgIDxvcHRpb24gdmFsdWU9XCI1MDBcIj41MDA8L29wdGlvbj5cbiAgICAgICAgICAgICAgICAgIDxvcHRpb24gdmFsdWU9XCI2MDBcIj42MDA8L29wdGlvbj5cbiAgICAgICAgICAgICAgICAgIDxvcHRpb24gdmFsdWU9XCI3MDBcIj43MDA8L29wdGlvbj5cbiAgICAgICAgICAgICAgICAgIDxvcHRpb24gdmFsdWU9XCI4MDBcIj44MDA8L29wdGlvbj5cbiAgICAgICAgICAgICAgICAgIDxvcHRpb24gdmFsdWU9XCI5MDBcIj45MDA8L29wdGlvbj5cbiAgICAgICAgICAgICAgICAgIDxvcHRpb24gdmFsdWU9XCIxMDAwXCI+MSwwMDA8L29wdGlvbj5cbiAgICAgICAgICAgICAgICA8L3NlbGVjdD5cbiAgICAgICAgICAgICAgICB7LyogPGlucHV0XG4gICAgICAgICAgICAgICAgICBjbGFzc05hbWU9e3V0aWxTdHlsZXMuaW5wdXR9XG4gICAgICAgICAgICAgICAgICB0eXBlPVwiZGF0ZVwiXG4gICAgICAgICAgICAgICAgICAvLyBkZWZhdWx0VmFsdWU9e2l0ZW0uZGF0ZX1cbiAgICAgICAgICAgICAgICAvPiAqL31cbiAgICAgICAgICAgICAgICAgICAgICB7IW1vbnRoLnByb2Nlc3NpbmcgPyAoXG4gICAgICAgIDxidXR0b24gY2xhc3NOYW1lPXt1dGlsU3R5bGVzW1wiYnRuLXN1Ym1pdFwiXX0gb25DbGljaz17KGUpID0+IHN1Ym1pdChpbmRleCl9IHN0eWxlPXt7cGFkZGluZzogMH19PlxuICAgICAgICAgIFBheVxuICAgICAgICA8L2J1dHRvbj5cbiAgICAgICkgOiAoXG4gICAgICAgIDxidXR0b24gY2xhc3NOYW1lPXt1dGlsU3R5bGVzW1wiYnRuLXN1Ym1pdFwiXX0gc3R5bGU9e3twYWRkaW5nOiAwfX0+XG4gICAgICAgICAgPHN2Z1xuICAgICAgICAgICAgY2xhc3NOYW1lPVwiYW5pbWF0ZS1zcGluXCJcbiAgICAgICAgICAgIHhtbG5zPVwiaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmdcIlxuICAgICAgICAgICAgZmlsbD1cIm5vbmVcIlxuICAgICAgICAgICAgdmlld0JveD1cIjAgMCAyNCAyNFwiXG4gICAgICAgICAgPlxuICAgICAgICAgICAgPGNpcmNsZVxuICAgICAgICAgICAgICBjbGFzc05hbWU9XCJvcGFjaXR5LTI1XCJcbiAgICAgICAgICAgICAgY3g9XCIxMlwiXG4gICAgICAgICAgICAgIGN5PVwiMTJcIlxuICAgICAgICAgICAgICByPVwiMTBcIlxuICAgICAgICAgICAgICBzdHJva2U9XCJjdXJyZW50Q29sb3JcIlxuICAgICAgICAgICAgICBzdHJva2Utd2lkdGg9XCI0XCJcbiAgICAgICAgICAgID48L2NpcmNsZT5cbiAgICAgICAgICAgIDxwYXRoXG4gICAgICAgICAgICAgIGNsYXNzTmFtZT1cIm9wYWNpdHktNzVcIlxuICAgICAgICAgICAgICBmaWxsPVwiY3VycmVudENvbG9yXCJcbiAgICAgICAgICAgICAgZD1cIk00IDEyYTggOCAwIDAxOC04VjBDNS4zNzMgMCAwIDUuMzczIDAgMTJoNHptMiA1LjI5MUE3Ljk2MiA3Ljk2MiAwIDAxNCAxMkgwYzAgMy4wNDIgMS4xMzUgNS44MjQgMyA3LjkzOGwzLTIuNjQ3elwiXG4gICAgICAgICAgICA+PC9wYXRoPlxuICAgICAgICAgIDwvc3ZnPlxuICAgICAgICAgIFByb2Nlc3NpbmdcbiAgICAgICAgPC9idXR0b24+XG4gICAgICApfVxuICAgICAgICAgICAgICA8L2xpPlxuICAgICAgICAgICAgKTtcbiAgICAgICAgICB9KX1cbiAgICAgICAgPC91bD5cbiAgICAgICAgey8qIDxidXR0b24gY2xhc3NOYW1lPXt1dGlsU3R5bGVzW1wiYnRuLWFkZFwiXX0gb25DbGljaz17YWRkTW9udGh9PlxuICAgICAgICAgIEFkZCBtb250aFxuICAgICAgICA8L2J1dHRvbj4gKi99XG4gICAgICA8L2Rpdj5cbiAgICA8L0xheW91dD5cbiAgKTtcbn1cbiJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./src/pages/payment.tsx\n");

/***/ })

})