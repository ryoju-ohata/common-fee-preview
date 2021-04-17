webpackHotUpdate_N_E("pages/payment",{

/***/ "./src/pages/payment.tsx":
/*!*******************************!*\
  !*** ./src/pages/payment.tsx ***!
  \*******************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* WEBPACK VAR INJECTION */(function(module) {/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"default\", function() { return Home; });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @babel/runtime/regenerator */ \"./node_modules/@babel/runtime/regenerator/index.js\");\n/* harmony import */ var _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _babel_runtime_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @babel/runtime/helpers/esm/asyncToGenerator */ \"./node_modules/@babel/runtime/helpers/esm/asyncToGenerator.js\");\n/* harmony import */ var dayjs__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! dayjs */ \"./node_modules/dayjs/dayjs.min.js\");\n/* harmony import */ var dayjs__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(dayjs__WEBPACK_IMPORTED_MODULE_3__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_4__);\n/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! next/router */ \"./node_modules/next/router.js\");\n/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(next_router__WEBPACK_IMPORTED_MODULE_5__);\n/* harmony import */ var _components_layout__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../components/layout */ \"./src/components/layout.tsx\");\n/* harmony import */ var _styles_utils_module_css__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../styles/utils.module.css */ \"./src/styles/utils.module.css\");\n/* harmony import */ var _styles_utils_module_css__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(_styles_utils_module_css__WEBPACK_IMPORTED_MODULE_7__);\n/* harmony import */ var _lib_api__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../lib/api */ \"./src/lib/api.ts\");\n\n\n\n\nvar _jsxFileName = \"/Users/rj/Desktop/CFP/CommonFeePlan/app/src/pages/payment.tsx\",\n    _s = $RefreshSig$();\n\n\n\n\n\n\n\nvar pageName = \"Pay the <br />common fee\";\nvar pageDescription = \"Thank you for your cooperation this month 😀\";\nvar pageHero = \"/images/payment.jpg\";\nfunction Home() {\n  _s();\n\n  var _this = this;\n\n  var _useState = Object(react__WEBPACK_IMPORTED_MODULE_4__[\"useState\"])(false),\n      processing = _useState[0],\n      setProcessing = _useState[1];\n\n  var _useState2 = Object(react__WEBPACK_IMPORTED_MODULE_4__[\"useState\"])(1234567890),\n      price = _useState2[0],\n      setPrice = _useState2[1]; // const [month, setMonth] = useState([\n  //   {\n  //     date: \"\",\n  //     id: -1,\n  //   },\n  // ]);\n\n\n  var originMonths = [];\n\n  for (var i = 0; i < 6; i++) {\n    var date = dayjs__WEBPACK_IMPORTED_MODULE_3___default()().add(-i, 'month');\n    originMonths.push({\n      year: date.year(),\n      month: date.format('MMM'),\n      processing: false,\n      paid: false,\n      price: 200\n    });\n  }\n\n  originMonths.reverse();\n\n  var _useState3 = Object(react__WEBPACK_IMPORTED_MODULE_4__[\"useState\"])(originMonths),\n      months = _useState3[0],\n      setMonths = _useState3[1];\n\n  var members = Object(_lib_api__WEBPACK_IMPORTED_MODULE_8__[\"getMembersWithSWR\"])();\n  var router = Object(next_router__WEBPACK_IMPORTED_MODULE_5__[\"useRouter\"])(); // const addMonth = (e) => {\n  //   setMonth([\n  //     ...month,\n  //     {\n  //       date: \"\",\n  //       id: -1,\n  //     },\n  //   ]);\n  // };\n\n  var submit = /*#__PURE__*/function () {\n    var _ref = Object(_babel_runtime_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_2__[\"default\"])( /*#__PURE__*/_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_1___default.a.mark(function _callee(index) {\n      return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_1___default.a.wrap(function _callee$(_context) {\n        while (1) {\n          switch (_context.prev = _context.next) {\n            case 0:\n              months[index].processing = true;\n              setMonths(Object.assign([], months)); // e.preventDefault();\n              // setProcessing(true);\n              // await postPaymentMonth(month)\n              // router.push(\"thanks\");\n\n            case 2:\n            case \"end\":\n              return _context.stop();\n          }\n        }\n      }, _callee);\n    }));\n\n    return function submit(_x) {\n      return _ref.apply(this, arguments);\n    };\n  }();\n\n  var setMonthPrice = function setMonthPrice(index, value) {\n    months[index].price = value;\n    setMonths(Object.assign([], months));\n  };\n\n  return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(_components_layout__WEBPACK_IMPORTED_MODULE_6__[\"default\"], {\n    pageName: pageName,\n    pageDescription: pageDescription,\n    pageHero: pageHero,\n    children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"div\", {\n      className: \"mb-10\",\n      children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"select\", {\n        className: _styles_utils_module_css__WEBPACK_IMPORTED_MODULE_7___default.a.input,\n        children: members.map(function (member, key) {\n          return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"option\", {\n            value: member.id,\n            children: member.name\n          }, key, false, {\n            fileName: _jsxFileName,\n            lineNumber: 76,\n            columnNumber: 23\n          }, _this);\n        })\n      }, void 0, false, {\n        fileName: _jsxFileName,\n        lineNumber: 73,\n        columnNumber: 9\n      }, this)\n    }, void 0, false, {\n      fileName: _jsxFileName,\n      lineNumber: 71,\n      columnNumber: 7\n    }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"div\", {\n      className: \"mb-10\",\n      children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"ul\", {\n        children: months.map(function (month, index) {\n          return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"li\", {\n            className: \"mb-5 flex space-x-5\",\n            children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"span\", {\n              style: {\n                width: '300px',\n                marginTop: '5px',\n                display: 'inline-block'\n              },\n              children: [month.month, \". \", month.year]\n            }, void 0, true, {\n              fileName: _jsxFileName,\n              lineNumber: 88,\n              columnNumber: 17\n            }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"select\", {\n              className: _styles_utils_module_css__WEBPACK_IMPORTED_MODULE_7___default.a.input,\n              onChange: function onChange(e) {\n                return setMonthPrice(index, e.target.value);\n              },\n              value: month.price,\n              disabled: month.paid,\n              children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"option\", {\n                value: \"100\",\n                children: \"100\"\n              }, void 0, false, {\n                fileName: _jsxFileName,\n                lineNumber: 90,\n                columnNumber: 19\n              }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"option\", {\n                value: \"200\",\n                children: \"200\"\n              }, void 0, false, {\n                fileName: _jsxFileName,\n                lineNumber: 91,\n                columnNumber: 19\n              }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"option\", {\n                value: \"300\",\n                children: \"300\"\n              }, void 0, false, {\n                fileName: _jsxFileName,\n                lineNumber: 92,\n                columnNumber: 19\n              }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"option\", {\n                value: \"400\",\n                children: \"400\"\n              }, void 0, false, {\n                fileName: _jsxFileName,\n                lineNumber: 93,\n                columnNumber: 19\n              }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"option\", {\n                value: \"500\",\n                children: \"500\"\n              }, void 0, false, {\n                fileName: _jsxFileName,\n                lineNumber: 94,\n                columnNumber: 19\n              }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"option\", {\n                value: \"600\",\n                children: \"600\"\n              }, void 0, false, {\n                fileName: _jsxFileName,\n                lineNumber: 95,\n                columnNumber: 19\n              }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"option\", {\n                value: \"700\",\n                children: \"700\"\n              }, void 0, false, {\n                fileName: _jsxFileName,\n                lineNumber: 96,\n                columnNumber: 19\n              }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"option\", {\n                value: \"800\",\n                children: \"800\"\n              }, void 0, false, {\n                fileName: _jsxFileName,\n                lineNumber: 97,\n                columnNumber: 19\n              }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"option\", {\n                value: \"900\",\n                children: \"900\"\n              }, void 0, false, {\n                fileName: _jsxFileName,\n                lineNumber: 98,\n                columnNumber: 19\n              }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"option\", {\n                value: \"1000\",\n                children: \"1,000\"\n              }, void 0, false, {\n                fileName: _jsxFileName,\n                lineNumber: 99,\n                columnNumber: 19\n              }, _this)]\n            }, void 0, true, {\n              fileName: _jsxFileName,\n              lineNumber: 89,\n              columnNumber: 17\n            }, _this), !month.processing ? /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"button\", {\n              className: _styles_utils_module_css__WEBPACK_IMPORTED_MODULE_7___default.a[\"btn-submit\"],\n              onClick: function onClick(e) {\n                return submit(index);\n              },\n              style: {\n                padding: 0\n              },\n              disabled: month.paid,\n              children: \"Pay\"\n            }, void 0, false, {\n              fileName: _jsxFileName,\n              lineNumber: 107,\n              columnNumber: 9\n            }, _this) : /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"button\", {\n              className: _styles_utils_module_css__WEBPACK_IMPORTED_MODULE_7___default.a[\"btn-submit\"],\n              style: {\n                padding: 0\n              },\n              children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"svg\", {\n                className: \"animate-spin\",\n                xmlns: \"http://www.w3.org/2000/svg\",\n                fill: \"none\",\n                viewBox: \"0 0 24 24\",\n                children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"circle\", {\n                  className: \"opacity-25\",\n                  cx: \"12\",\n                  cy: \"12\",\n                  r: \"10\",\n                  stroke: \"currentColor\",\n                  \"stroke-width\": \"4\"\n                }, void 0, false, {\n                  fileName: _jsxFileName,\n                  lineNumber: 118,\n                  columnNumber: 13\n                }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"path\", {\n                  className: \"opacity-75\",\n                  fill: \"currentColor\",\n                  d: \"M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z\"\n                }, void 0, false, {\n                  fileName: _jsxFileName,\n                  lineNumber: 126,\n                  columnNumber: 13\n                }, _this)]\n              }, void 0, true, {\n                fileName: _jsxFileName,\n                lineNumber: 112,\n                columnNumber: 11\n              }, _this), \"Processing\"]\n            }, void 0, true, {\n              fileName: _jsxFileName,\n              lineNumber: 111,\n              columnNumber: 9\n            }, _this)]\n          }, index, true, {\n            fileName: _jsxFileName,\n            lineNumber: 87,\n            columnNumber: 15\n          }, _this);\n        })\n      }, void 0, false, {\n        fileName: _jsxFileName,\n        lineNumber: 84,\n        columnNumber: 9\n      }, this)\n    }, void 0, false, {\n      fileName: _jsxFileName,\n      lineNumber: 83,\n      columnNumber: 7\n    }, this)]\n  }, void 0, true, {\n    fileName: _jsxFileName,\n    lineNumber: 66,\n    columnNumber: 5\n  }, this);\n}\n\n_s(Home, \"IHviJIUWro1iI3vsiAleKuTF28M=\", false, function () {\n  return [next_router__WEBPACK_IMPORTED_MODULE_5__[\"useRouter\"]];\n});\n\n_c = Home;\n\nvar _c;\n\n$RefreshReg$(_c, \"Home\");\n\n;\n    var _a, _b;\n    // Legacy CSS implementations will `eval` browser code in a Node.js context\n    // to extract CSS. For backwards compatibility, we need to check we're in a\n    // browser context before continuing.\n    if (typeof self !== 'undefined' &&\n        // AMP / No-JS mode does not inject these helpers:\n        '$RefreshHelpers$' in self) {\n        var currentExports = module.__proto__.exports;\n        var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n        // This cannot happen in MainTemplate because the exports mismatch between\n        // templating and execution.\n        self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.i);\n        // A module can be accepted automatically based on its exports, e.g. when\n        // it is a Refresh Boundary.\n        if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n            // Save the previous exports on update so we can compare the boundary\n            // signatures.\n            module.hot.dispose(function (data) {\n                data.prevExports = currentExports;\n            });\n            // Unconditionally accept an update to this module, we'll check if it's\n            // still a Refresh Boundary later.\n            module.hot.accept();\n            // This field is set when the previous version of this module was a\n            // Refresh Boundary, letting us know we need to check for invalidation or\n            // enqueue an update.\n            if (prevExports !== null) {\n                // A boundary can become ineligible if its exports are incompatible\n                // with the previous exports.\n                //\n                // For example, if you add/remove/change exports, we'll want to\n                // re-execute the importing modules, and force those components to\n                // re-render. Similarly, if you convert a class component to a\n                // function, we want to invalidate the boundary.\n                if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                    module.hot.invalidate();\n                }\n                else {\n                    self.$RefreshHelpers$.scheduleUpdate();\n                }\n            }\n        }\n        else {\n            // Since we just executed the code for the module, it's possible that the\n            // new exports made it ineligible for being a boundary.\n            // We only care about the case when we were _previously_ a boundary,\n            // because we already accepted this update (accidental side effect).\n            var isNoLongerABoundary = prevExports !== null;\n            if (isNoLongerABoundary) {\n                module.hot.invalidate();\n            }\n        }\n    }\n\n/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../../node_modules/webpack/buildin/harmony-module.js */ \"./node_modules/webpack/buildin/harmony-module.js\")(module)))//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vc3JjL3BhZ2VzL3BheW1lbnQudHN4P2I4MjkiXSwibmFtZXMiOlsicGFnZU5hbWUiLCJwYWdlRGVzY3JpcHRpb24iLCJwYWdlSGVybyIsIkhvbWUiLCJ1c2VTdGF0ZSIsInByb2Nlc3NpbmciLCJzZXRQcm9jZXNzaW5nIiwicHJpY2UiLCJzZXRQcmljZSIsIm9yaWdpbk1vbnRocyIsImkiLCJkYXRlIiwiZGF5anMiLCJhZGQiLCJwdXNoIiwieWVhciIsIm1vbnRoIiwiZm9ybWF0IiwicGFpZCIsInJldmVyc2UiLCJtb250aHMiLCJzZXRNb250aHMiLCJtZW1iZXJzIiwiZ2V0TWVtYmVyc1dpdGhTV1IiLCJyb3V0ZXIiLCJ1c2VSb3V0ZXIiLCJzdWJtaXQiLCJpbmRleCIsIk9iamVjdCIsImFzc2lnbiIsInNldE1vbnRoUHJpY2UiLCJ2YWx1ZSIsInV0aWxTdHlsZXMiLCJpbnB1dCIsIm1hcCIsIm1lbWJlciIsImtleSIsImlkIiwibmFtZSIsIndpZHRoIiwibWFyZ2luVG9wIiwiZGlzcGxheSIsImUiLCJ0YXJnZXQiLCJwYWRkaW5nIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUVBO0FBQ0E7QUFFQSxJQUFNQSxRQUFRLEdBQUcsMEJBQWpCO0FBQ0EsSUFBTUMsZUFBZSxHQUFHLDhDQUF4QjtBQUNBLElBQU1DLFFBQVEsR0FBRyxxQkFBakI7QUFFZSxTQUFTQyxJQUFULEdBQWdCO0FBQUE7O0FBQUE7O0FBQUEsa0JBQ09DLHNEQUFRLENBQUMsS0FBRCxDQURmO0FBQUEsTUFDdEJDLFVBRHNCO0FBQUEsTUFDVkMsYUFEVTs7QUFBQSxtQkFFSEYsc0RBQVEsQ0FBQyxVQUFELENBRkw7QUFBQSxNQUV0QkcsS0FGc0I7QUFBQSxNQUVmQyxRQUZlLGtCQUc3QjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7OztBQUVBLE1BQUlDLFlBQVksR0FBRyxFQUFuQjs7QUFDQSxP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ZmlsZSI6Ii4vc3JjL3BhZ2VzL3BheW1lbnQudHN4LmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IGRheWpzIGZyb20gXCJkYXlqc1wiO1xuaW1wb3J0IHsgdXNlU3RhdGUgfSBmcm9tIFwicmVhY3RcIjtcbmltcG9ydCB7IHVzZVJvdXRlciB9IGZyb20gXCJuZXh0L3JvdXRlclwiO1xuaW1wb3J0IExheW91dCBmcm9tIFwiLi4vY29tcG9uZW50cy9sYXlvdXRcIjtcbmltcG9ydCBQcmljZSBmcm9tIFwiLi4vY29tcG9uZW50cy9wcmljZVwiO1xuaW1wb3J0IHV0aWxTdHlsZXMgZnJvbSBcIi4uL3N0eWxlcy91dGlscy5tb2R1bGUuY3NzXCI7XG5pbXBvcnQgeyBnZXRNZW1iZXJzV2l0aFNXUiwgcG9zdFBheW1lbnRNb250aCB9IGZyb20gXCIuLi9saWIvYXBpXCI7XG5cbmNvbnN0IHBhZ2VOYW1lID0gXCJQYXkgdGhlIDxiciAvPmNvbW1vbiBmZWVcIjtcbmNvbnN0IHBhZ2VEZXNjcmlwdGlvbiA9IFwiVGhhbmsgeW91IGZvciB5b3VyIGNvb3BlcmF0aW9uIHRoaXMgbW9udGgg8J+YgFwiO1xuY29uc3QgcGFnZUhlcm8gPSBcIi9pbWFnZXMvcGF5bWVudC5qcGdcIjtcblxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gSG9tZSgpIHtcbiAgY29uc3QgW3Byb2Nlc3NpbmcsIHNldFByb2Nlc3NpbmddID0gdXNlU3RhdGUoZmFsc2UpO1xuICBjb25zdCBbcHJpY2UsIHNldFByaWNlXSA9IHVzZVN0YXRlKDEyMzQ1Njc4OTApO1xuICAvLyBjb25zdCBbbW9udGgsIHNldE1vbnRoXSA9IHVzZVN0YXRlKFtcbiAgLy8gICB7XG4gIC8vICAgICBkYXRlOiBcIlwiLFxuICAvLyAgICAgaWQ6IC0xLFxuICAvLyAgIH0sXG4gIC8vIF0pO1xuXG4gIGxldCBvcmlnaW5Nb250aHMgPSBbXVxuICBmb3IgKGxldCBpID0gMDsgaSA8IDY7IGkrKykge1xuICAgIGNvbnN0IGRhdGUgPSBkYXlqcygpLmFkZCgtaSwgJ21vbnRoJylcbiAgICBvcmlnaW5Nb250aHMucHVzaCh7XG4gICAgICB5ZWFyOiBkYXRlLnllYXIoKSxcbiAgICAgIG1vbnRoOiBkYXRlLmZvcm1hdCgnTU1NJyksXG4gICAgICBwcm9jZXNzaW5nOiBmYWxzZSxcbiAgICAgIHBhaWQ6IGZhbHNlLFxuICAgICAgcHJpY2U6IDIwMFxuICAgIH0pXG4gIH1cbiAgb3JpZ2luTW9udGhzLnJldmVyc2UoKVxuICBjb25zdCBbbW9udGhzLCBzZXRNb250aHNdID0gdXNlU3RhdGUob3JpZ2luTW9udGhzKTtcblxuICBjb25zdCBtZW1iZXJzID0gZ2V0TWVtYmVyc1dpdGhTV1IoKVxuXG4gIGNvbnN0IHJvdXRlciA9IHVzZVJvdXRlcigpO1xuXG4gIC8vIGNvbnN0IGFkZE1vbnRoID0gKGUpID0+IHtcbiAgLy8gICBzZXRNb250aChbXG4gIC8vICAgICAuLi5tb250aCxcbiAgLy8gICAgIHtcbiAgLy8gICAgICAgZGF0ZTogXCJcIixcbiAgLy8gICAgICAgaWQ6IC0xLFxuICAvLyAgICAgfSxcbiAgLy8gICBdKTtcbiAgLy8gfTtcblxuICBjb25zdCBzdWJtaXQgPSBhc3luYyAoaW5kZXgpID0+IHtcbiAgICBtb250aHNbaW5kZXhdLnByb2Nlc3NpbmcgPSB0cnVlXG4gICAgc2V0TW9udGhzKE9iamVjdC5hc3NpZ24oW10sIG1vbnRocykpXG4gICAgLy8gZS5wcmV2ZW50RGVmYXVsdCgpO1xuICAgIC8vIHNldFByb2Nlc3NpbmcodHJ1ZSk7XG4gICAgLy8gYXdhaXQgcG9zdFBheW1lbnRNb250aChtb250aClcbiAgICAvLyByb3V0ZXIucHVzaChcInRoYW5rc1wiKTtcbiAgfTtcblxuICBjb25zdCBzZXRNb250aFByaWNlID0gKGluZGV4LCB2YWx1ZSkgPT4ge1xuICAgIG1vbnRoc1tpbmRleF0ucHJpY2UgPSB2YWx1ZVxuICAgIHNldE1vbnRocyhPYmplY3QuYXNzaWduKFtdLCBtb250aHMpKVxuICB9XG5cbiAgcmV0dXJuIChcbiAgICA8TGF5b3V0XG4gICAgICBwYWdlTmFtZT17cGFnZU5hbWV9XG4gICAgICBwYWdlRGVzY3JpcHRpb249e3BhZ2VEZXNjcmlwdGlvbn1cbiAgICAgIHBhZ2VIZXJvPXtwYWdlSGVyb31cbiAgICA+XG4gICAgICA8ZGl2IGNsYXNzTmFtZT1cIm1iLTEwXCI+XG4gICAgICAgIHsvKiA8UHJpY2UgcHJpY2U9ezQwMH0gLz4gKi99XG4gICAgICAgIDxzZWxlY3QgY2xhc3NOYW1lPXt1dGlsU3R5bGVzLmlucHV0fT5cbiAgICAgICAgICAgICAgICAgIHttZW1iZXJzLm1hcCgobWVtYmVyLCBrZXkpID0+IHtcbiAgICAgICAgICAgICAgICAgICAgcmV0dXJuIChcbiAgICAgICAgICAgICAgICAgICAgICA8b3B0aW9uIGtleT17a2V5fSB2YWx1ZT17bWVtYmVyLmlkfT5cbiAgICAgICAgICAgICAgICAgICAgICAgIHttZW1iZXIubmFtZX1cbiAgICAgICAgICAgICAgICAgICAgICA8L29wdGlvbj5cbiAgICAgICAgICAgICAgICAgICAgKTtcbiAgICAgICAgICAgICAgICAgIH0pfVxuICAgICAgICAgICAgICAgIDwvc2VsZWN0PlxuICAgICAgPC9kaXY+XG4gICAgICA8ZGl2IGNsYXNzTmFtZT1cIm1iLTEwXCI+XG4gICAgICAgIDx1bD5cbiAgICAgICAgICB7bW9udGhzLm1hcCgobW9udGgsIGluZGV4KSA9PiB7XG4gICAgICAgICAgICByZXR1cm4gKFxuICAgICAgICAgICAgICA8bGkga2V5PXtpbmRleH0gY2xhc3NOYW1lPVwibWItNSBmbGV4IHNwYWNlLXgtNVwiPlxuICAgICAgICAgICAgICAgIDxzcGFuIHN0eWxlPXt7d2lkdGg6JzMwMHB4JywgbWFyZ2luVG9wOiAnNXB4JywgZGlzcGxheTogJ2lubGluZS1ibG9jayd9fT57bW9udGgubW9udGh9LiB7bW9udGgueWVhcn08L3NwYW4+XG4gICAgICAgICAgICAgICAgPHNlbGVjdCBjbGFzc05hbWU9e3V0aWxTdHlsZXMuaW5wdXR9IG9uQ2hhbmdlPXsoZSkgPT4gc2V0TW9udGhQcmljZShpbmRleCwgZS50YXJnZXQudmFsdWUpfSB2YWx1ZT17bW9udGgucHJpY2V9IGRpc2FibGVkPXttb250aC5wYWlkfT5cbiAgICAgICAgICAgICAgICAgIDxvcHRpb24gdmFsdWU9XCIxMDBcIj4xMDA8L29wdGlvbj5cbiAgICAgICAgICAgICAgICAgIDxvcHRpb24gdmFsdWU9XCIyMDBcIj4yMDA8L29wdGlvbj5cbiAgICAgICAgICAgICAgICAgIDxvcHRpb24gdmFsdWU9XCIzMDBcIj4zMDA8L29wdGlvbj5cbiAgICAgICAgICAgICAgICAgIDxvcHRpb24gdmFsdWU9XCI0MDBcIj40MDA8L29wdGlvbj5cbiAgICAgICAgICAgICAgICAgIDxvcHRpb24gdmFsdWU9XCI1MDBcIj41MDA8L29wdGlvbj5cbiAgICAgICAgICAgICAgICAgIDxvcHRpb24gdmFsdWU9XCI2MDBcIj42MDA8L29wdGlvbj5cbiAgICAgICAgICAgICAgICAgIDxvcHRpb24gdmFsdWU9XCI3MDBcIj43MDA8L29wdGlvbj5cbiAgICAgICAgICAgICAgICAgIDxvcHRpb24gdmFsdWU9XCI4MDBcIj44MDA8L29wdGlvbj5cbiAgICAgICAgICAgICAgICAgIDxvcHRpb24gdmFsdWU9XCI5MDBcIj45MDA8L29wdGlvbj5cbiAgICAgICAgICAgICAgICAgIDxvcHRpb24gdmFsdWU9XCIxMDAwXCI+MSwwMDA8L29wdGlvbj5cbiAgICAgICAgICAgICAgICA8L3NlbGVjdD5cbiAgICAgICAgICAgICAgICB7LyogPGlucHV0XG4gICAgICAgICAgICAgICAgICBjbGFzc05hbWU9e3V0aWxTdHlsZXMuaW5wdXR9XG4gICAgICAgICAgICAgICAgICB0eXBlPVwiZGF0ZVwiXG4gICAgICAgICAgICAgICAgICAvLyBkZWZhdWx0VmFsdWU9e2l0ZW0uZGF0ZX1cbiAgICAgICAgICAgICAgICAvPiAqL31cbiAgICAgICAgICAgICAgICAgICAgICB7IW1vbnRoLnByb2Nlc3NpbmcgPyAoXG4gICAgICAgIDxidXR0b24gY2xhc3NOYW1lPXt1dGlsU3R5bGVzW1wiYnRuLXN1Ym1pdFwiXX0gb25DbGljaz17KGUpID0+IHN1Ym1pdChpbmRleCl9IHN0eWxlPXt7cGFkZGluZzogMH19IGRpc2FibGVkPXttb250aC5wYWlkfT5cbiAgICAgICAgICBQYXlcbiAgICAgICAgPC9idXR0b24+XG4gICAgICApIDogKFxuICAgICAgICA8YnV0dG9uIGNsYXNzTmFtZT17dXRpbFN0eWxlc1tcImJ0bi1zdWJtaXRcIl19IHN0eWxlPXt7cGFkZGluZzogMH19PlxuICAgICAgICAgIDxzdmdcbiAgICAgICAgICAgIGNsYXNzTmFtZT1cImFuaW1hdGUtc3BpblwiXG4gICAgICAgICAgICB4bWxucz1cImh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnXCJcbiAgICAgICAgICAgIGZpbGw9XCJub25lXCJcbiAgICAgICAgICAgIHZpZXdCb3g9XCIwIDAgMjQgMjRcIlxuICAgICAgICAgID5cbiAgICAgICAgICAgIDxjaXJjbGVcbiAgICAgICAgICAgICAgY2xhc3NOYW1lPVwib3BhY2l0eS0yNVwiXG4gICAgICAgICAgICAgIGN4PVwiMTJcIlxuICAgICAgICAgICAgICBjeT1cIjEyXCJcbiAgICAgICAgICAgICAgcj1cIjEwXCJcbiAgICAgICAgICAgICAgc3Ryb2tlPVwiY3VycmVudENvbG9yXCJcbiAgICAgICAgICAgICAgc3Ryb2tlLXdpZHRoPVwiNFwiXG4gICAgICAgICAgICA+PC9jaXJjbGU+XG4gICAgICAgICAgICA8cGF0aFxuICAgICAgICAgICAgICBjbGFzc05hbWU9XCJvcGFjaXR5LTc1XCJcbiAgICAgICAgICAgICAgZmlsbD1cImN1cnJlbnRDb2xvclwiXG4gICAgICAgICAgICAgIGQ9XCJNNCAxMmE4IDggMCAwMTgtOFYwQzUuMzczIDAgMCA1LjM3MyAwIDEyaDR6bTIgNS4yOTFBNy45NjIgNy45NjIgMCAwMTQgMTJIMGMwIDMuMDQyIDEuMTM1IDUuODI0IDMgNy45MzhsMy0yLjY0N3pcIlxuICAgICAgICAgICAgPjwvcGF0aD5cbiAgICAgICAgICA8L3N2Zz5cbiAgICAgICAgICBQcm9jZXNzaW5nXG4gICAgICAgIDwvYnV0dG9uPlxuICAgICAgKX1cbiAgICAgICAgICAgICAgPC9saT5cbiAgICAgICAgICAgICk7XG4gICAgICAgICAgfSl9XG4gICAgICAgIDwvdWw+XG4gICAgICAgIHsvKiA8YnV0dG9uIGNsYXNzTmFtZT17dXRpbFN0eWxlc1tcImJ0bi1hZGRcIl19IG9uQ2xpY2s9e2FkZE1vbnRofT5cbiAgICAgICAgICBBZGQgbW9udGhcbiAgICAgICAgPC9idXR0b24+ICovfVxuICAgICAgPC9kaXY+XG4gICAgPC9MYXlvdXQ+XG4gICk7XG59XG4iXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./src/pages/payment.tsx\n");

/***/ })

})