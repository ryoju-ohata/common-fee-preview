webpackHotUpdate_N_E("pages/purchase",{

/***/ "./node_modules/@babel/runtime/helpers/arrayWithHoles.js":
false,

/***/ "./node_modules/@babel/runtime/helpers/asyncToGenerator.js":
false,

/***/ "./node_modules/@babel/runtime/helpers/construct.js":
false,

/***/ "./node_modules/@babel/runtime/helpers/interopRequireDefault.js":
false,

/***/ "./node_modules/@babel/runtime/helpers/interopRequireWildcard.js":
false,

/***/ "./node_modules/@babel/runtime/helpers/isNativeReflectConstruct.js":
false,

/***/ "./node_modules/@babel/runtime/helpers/iterableToArrayLimit.js":
false,

/***/ "./node_modules/@babel/runtime/helpers/nonIterableRest.js":
false,

/***/ "./node_modules/@babel/runtime/helpers/slicedToArray.js":
false,

/***/ "./node_modules/next/dist/client/normalize-trailing-slash.js":
false,

/***/ "./node_modules/next/dist/client/request-idle-callback.js":
false,

/***/ "./node_modules/next/dist/client/route-loader.js":
false,

/***/ "./node_modules/next/dist/client/router.js":
false,

/***/ "./node_modules/next/dist/client/with-router.js":
false,

/***/ "./node_modules/next/dist/compiled/path-to-regexp/index.js":
false,

/***/ "./node_modules/next/dist/next-server/lib/i18n/normalize-locale-path.js":
false,

/***/ "./node_modules/next/dist/next-server/lib/mitt.js":
false,

/***/ "./node_modules/next/dist/next-server/lib/router-context.js":
false,

/***/ "./node_modules/next/dist/next-server/lib/router/router.js":
false,

/***/ "./node_modules/next/dist/next-server/lib/router/utils/format-url.js":
false,

/***/ "./node_modules/next/dist/next-server/lib/router/utils/get-asset-path-from-route.js":
false,

/***/ "./node_modules/next/dist/next-server/lib/router/utils/is-dynamic.js":
false,

/***/ "./node_modules/next/dist/next-server/lib/router/utils/parse-relative-url.js":
false,

/***/ "./node_modules/next/dist/next-server/lib/router/utils/path-match.js":
false,

/***/ "./node_modules/next/dist/next-server/lib/router/utils/prepare-destination.js":
false,

/***/ "./node_modules/next/dist/next-server/lib/router/utils/querystring.js":
false,

/***/ "./node_modules/next/dist/next-server/lib/router/utils/resolve-rewrites.js":
false,

/***/ "./node_modules/next/dist/next-server/lib/router/utils/route-matcher.js":
false,

/***/ "./node_modules/next/dist/next-server/lib/router/utils/route-regex.js":
false,

/***/ "./node_modules/next/dist/next-server/lib/utils.js":
false,

/***/ "./node_modules/next/dist/next-server/server/denormalize-page-path.js":
false,

/***/ "./node_modules/next/router.js":
false,

/***/ "./node_modules/react-is/cjs/react-is.development.js":
false,

/***/ "./node_modules/react-is/index.js":
false,

/***/ "./src/pages/purchase.tsx":
/*!********************************!*\
  !*** ./src/pages/purchase.tsx ***!
  \********************************/
/*! exports provided: default, componentDidMount */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* WEBPACK VAR INJECTION */(function(module) {/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"default\", function() { return Home; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"componentDidMount\", function() { return componentDidMount; });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _components_layout__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../components/layout */ \"./src/components/layout.tsx\");\n/* harmony import */ var _components_price__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../components/price */ \"./src/components/price.tsx\");\n/* harmony import */ var _components_item__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../components/item */ \"./src/components/item.tsx\");\n/* harmony import */ var _styles_utils_module_css__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../styles/utils.module.css */ \"./src/styles/utils.module.css\");\n/* harmony import */ var _styles_utils_module_css__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_styles_utils_module_css__WEBPACK_IMPORTED_MODULE_5__);\n/* harmony import */ var _lib_api__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../lib/api */ \"./src/lib/api.ts\");\n\n\nvar _jsxFileName = \"/Users/rj/Desktop/CFP/CommonFeePlan/app/src/pages/purchase.tsx\",\n    _s = $RefreshSig$();\n\n\n\n\n\n\n\nvar pageName = \"Purchase\";\nvar pageDescription = \"Hello! Thank you for shopping 😀 Fill out this form and then take the money from the common fee\";\nfunction Home() {\n  _s();\n\n  var _this = this;\n\n  var _useState = Object(react__WEBPACK_IMPORTED_MODULE_1__[\"useState\"])(false),\n      processing = _useState[0],\n      setProcessing = _useState[1];\n\n  var _useState2 = Object(react__WEBPACK_IMPORTED_MODULE_1__[\"useState\"])([]),\n      items = _useState2[0],\n      setItems = _useState2[1];\n\n  var _useState3 = Object(react__WEBPACK_IMPORTED_MODULE_1__[\"useState\"])(0),\n      price = _useState3[0],\n      setPrice = _useState3[1];\n\n  var _useState4 = Object(react__WEBPACK_IMPORTED_MODULE_1__[\"useState\"])(\"\"),\n      memberId = _useState4[0],\n      setMemberId = _useState4[1]; // const [members, setMembers] = useState([]);\n\n\n  var members = Object(_lib_api__WEBPACK_IMPORTED_MODULE_6__[\"getMembersWithSWR\"])();\n\n  var submit = function submit(e) {\n    e.preventDefault();\n    setProcessing(true);\n    Object(_lib_api__WEBPACK_IMPORTED_MODULE_6__[\"postPurchaseItems\"])(memberId, items); // setTimeout(() => {\n    //   router.push('thanks')\n    // }, 2000)\n  };\n\n  var updateItems = function updateItems(childItems) {\n    setItems(childItems);\n    setPrice(childItems.reduce(function (sum, element) {\n      return sum + (element.price || 0) * element.quantity;\n    }, 0));\n  }; // async function mounted() {\n  //   const members = await getMembers();\n  //   setMembers([{ id: \"\", name: \"\" }, ...members]);\n  // }\n  // mounted();\n  // console.log('reload')\n\n\n  return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(_components_layout__WEBPACK_IMPORTED_MODULE_2__[\"default\"], {\n    pageName: pageName,\n    pageDescription: pageDescription,\n    children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"h2\", {\n      className: \"mb-10 text-sm leading-none font-bold\",\n      children: \"What's items\"\n    }, void 0, false, {\n      fileName: _jsxFileName,\n      lineNumber: 51,\n      columnNumber: 7\n    }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"div\", {\n      className: \"mb-14\",\n      children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(_components_item__WEBPACK_IMPORTED_MODULE_4__[\"default\"], {\n        items: items,\n        update: updateItems\n      }, void 0, false, {\n        fileName: _jsxFileName,\n        lineNumber: 54,\n        columnNumber: 9\n      }, this)\n    }, void 0, false, {\n      fileName: _jsxFileName,\n      lineNumber: 53,\n      columnNumber: 7\n    }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"div\", {\n      className: \"mb-10\",\n      children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(_components_price__WEBPACK_IMPORTED_MODULE_3__[\"default\"], {\n        price: price\n      }, void 0, false, {\n        fileName: _jsxFileName,\n        lineNumber: 58,\n        columnNumber: 9\n      }, this)\n    }, void 0, false, {\n      fileName: _jsxFileName,\n      lineNumber: 57,\n      columnNumber: 7\n    }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"select\", {\n      value: memberId,\n      onChange: function onChange(e) {\n        return setMemberId(e.target.value);\n      },\n      className: _styles_utils_module_css__WEBPACK_IMPORTED_MODULE_5___default.a.input + \" mb-10\",\n      children: members.map(function (member, key) {\n        return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"option\", {\n          value: member.id,\n          children: member.name\n        }, key, false, {\n          fileName: _jsxFileName,\n          lineNumber: 68,\n          columnNumber: 13\n        }, _this);\n      })\n    }, void 0, false, {\n      fileName: _jsxFileName,\n      lineNumber: 61,\n      columnNumber: 7\n    }, this), !processing ? /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"button\", {\n      className: _styles_utils_module_css__WEBPACK_IMPORTED_MODULE_5___default.a[\"btn-submit\"],\n      onClick: submit,\n      children: \"Purchase\"\n    }, void 0, false, {\n      fileName: _jsxFileName,\n      lineNumber: 75,\n      columnNumber: 9\n    }, this) : /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"button\", {\n      className: _styles_utils_module_css__WEBPACK_IMPORTED_MODULE_5___default.a[\"btn-submit\"],\n      onClick: submit,\n      children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"svg\", {\n        className: \"animate-spin\",\n        xmlns: \"http://www.w3.org/2000/svg\",\n        fill: \"none\",\n        viewBox: \"0 0 24 24\",\n        children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"circle\", {\n          className: \"opacity-25\",\n          cx: \"12\",\n          cy: \"12\",\n          r: \"10\",\n          stroke: \"currentColor\",\n          \"stroke-width\": \"4\"\n        }, void 0, false, {\n          fileName: _jsxFileName,\n          lineNumber: 86,\n          columnNumber: 13\n        }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"path\", {\n          className: \"opacity-75\",\n          fill: \"currentColor\",\n          d: \"M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z\"\n        }, void 0, false, {\n          fileName: _jsxFileName,\n          lineNumber: 94,\n          columnNumber: 13\n        }, this)]\n      }, void 0, true, {\n        fileName: _jsxFileName,\n        lineNumber: 80,\n        columnNumber: 11\n      }, this), \"Processing\"]\n    }, void 0, true, {\n      fileName: _jsxFileName,\n      lineNumber: 79,\n      columnNumber: 9\n    }, this)]\n  }, void 0, true, {\n    fileName: _jsxFileName,\n    lineNumber: 50,\n    columnNumber: 5\n  }, this);\n}\n\n_s(Home, \"F2XSTS0vtzUQor/ZL9kcSSMMPbc=\");\n\n_c = Home;\nvar componentDidMount = function componentDidMount() {\n  console.log('did');\n};\n\nvar _c;\n\n$RefreshReg$(_c, \"Home\");\n\n;\n    var _a, _b;\n    // Legacy CSS implementations will `eval` browser code in a Node.js context\n    // to extract CSS. For backwards compatibility, we need to check we're in a\n    // browser context before continuing.\n    if (typeof self !== 'undefined' &&\n        // AMP / No-JS mode does not inject these helpers:\n        '$RefreshHelpers$' in self) {\n        var currentExports = module.__proto__.exports;\n        var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n        // This cannot happen in MainTemplate because the exports mismatch between\n        // templating and execution.\n        self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.i);\n        // A module can be accepted automatically based on its exports, e.g. when\n        // it is a Refresh Boundary.\n        if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n            // Save the previous exports on update so we can compare the boundary\n            // signatures.\n            module.hot.dispose(function (data) {\n                data.prevExports = currentExports;\n            });\n            // Unconditionally accept an update to this module, we'll check if it's\n            // still a Refresh Boundary later.\n            module.hot.accept();\n            // This field is set when the previous version of this module was a\n            // Refresh Boundary, letting us know we need to check for invalidation or\n            // enqueue an update.\n            if (prevExports !== null) {\n                // A boundary can become ineligible if its exports are incompatible\n                // with the previous exports.\n                //\n                // For example, if you add/remove/change exports, we'll want to\n                // re-execute the importing modules, and force those components to\n                // re-render. Similarly, if you convert a class component to a\n                // function, we want to invalidate the boundary.\n                if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                    module.hot.invalidate();\n                }\n                else {\n                    self.$RefreshHelpers$.scheduleUpdate();\n                }\n            }\n        }\n        else {\n            // Since we just executed the code for the module, it's possible that the\n            // new exports made it ineligible for being a boundary.\n            // We only care about the case when we were _previously_ a boundary,\n            // because we already accepted this update (accidental side effect).\n            var isNoLongerABoundary = prevExports !== null;\n            if (isNoLongerABoundary) {\n                module.hot.invalidate();\n            }\n        }\n    }\n\n/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../../node_modules/webpack/buildin/harmony-module.js */ \"./node_modules/webpack/buildin/harmony-module.js\")(module)))//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vc3JjL3BhZ2VzL3B1cmNoYXNlLnRzeD9mMjM2Il0sIm5hbWVzIjpbInBhZ2VOYW1lIiwicGFnZURlc2NyaXB0aW9uIiwiSG9tZSIsInVzZVN0YXRlIiwicHJvY2Vzc2luZyIsInNldFByb2Nlc3NpbmciLCJpdGVtcyIsInNldEl0ZW1zIiwicHJpY2UiLCJzZXRQcmljZSIsIm1lbWJlcklkIiwic2V0TWVtYmVySWQiLCJtZW1iZXJzIiwiZ2V0TWVtYmVyc1dpdGhTV1IiLCJzdWJtaXQiLCJlIiwicHJldmVudERlZmF1bHQiLCJwb3N0UHVyY2hhc2VJdGVtcyIsInVwZGF0ZUl0ZW1zIiwiY2hpbGRJdGVtcyIsInJlZHVjZSIsInN1bSIsImVsZW1lbnQiLCJxdWFudGl0eSIsInRhcmdldCIsInZhbHVlIiwidXRpbFN0eWxlcyIsImlucHV0IiwibWFwIiwibWVtYmVyIiwia2V5IiwiaWQiLCJuYW1lIiwiY29tcG9uZW50RGlkTW91bnQiLCJjb25zb2xlIiwibG9nIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQTtBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFFQSxJQUFNQSxRQUFRLEdBQUcsVUFBakI7QUFDQSxJQUFNQyxlQUFlLEdBQ25CLGlHQURGO0FBSWUsU0FBU0MsSUFBVCxHQUFnQjtBQUFBOztBQUFBOztBQUFBLGtCQUNPQyxzREFBUSxDQUFDLEtBQUQsQ0FEZjtBQUFBLE1BQ3RCQyxVQURzQjtBQUFBLE1BQ1ZDLGFBRFU7O0FBQUEsbUJBRUhGLHNEQUFRLENBQUMsRUFBRCxDQUZMO0FBQUEsTUFFdEJHLEtBRnNCO0FBQUEsTUFFZkMsUUFGZTs7QUFBQSxtQkFHSEosc0RBQVEsQ0FBQyxDQUFELENBSEw7QUFBQSxNQUd0QkssS0FIc0I7QUFBQSxNQUdmQyxRQUhlOztBQUFBLG1CQUlHTixzREFBUSxDQUFDLEVBQUQsQ0FKWDtBQUFBLE1BSXRCTyxRQUpzQjtBQUFBLE1BSVpDLFdBSlksa0JBSzdCOzs7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QUFBO0FBQUEsZ0JBZEY7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLGNBREY7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLFlBN0JKO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxVQURGO0FBd0REOztHQTNGdUJaLEk7O0tBQUFBLEk7QUE2RmpCLElBQU0rQixpQkFBaUIsR0FBRyxTQUFwQkEsaUJBQW9CLEdBQU07QUFDckNDLFNBQU8sQ0FBQ0MsR0FBUixDQUFZLEtBQVo7QUFDRCxDQUZNIiwiZmlsZSI6Ii4vc3JjL3BhZ2VzL3B1cmNoYXNlLnRzeC5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IHVzZVN0YXRlIH0gZnJvbSBcInJlYWN0XCI7XG5pbXBvcnQgeyB1c2VSb3V0ZXIgfSBmcm9tIFwibmV4dC9yb3V0ZXJcIjtcbmltcG9ydCBMYXlvdXQgZnJvbSBcIi4uL2NvbXBvbmVudHMvbGF5b3V0XCI7XG5pbXBvcnQgUHJpY2UgZnJvbSBcIi4uL2NvbXBvbmVudHMvcHJpY2VcIjtcbmltcG9ydCBJdGVtIGZyb20gXCIuLi9jb21wb25lbnRzL2l0ZW1cIjtcbmltcG9ydCB1dGlsU3R5bGVzIGZyb20gXCIuLi9zdHlsZXMvdXRpbHMubW9kdWxlLmNzc1wiO1xuaW1wb3J0IHsgZ2V0TWVtYmVyc1dpdGhTV1IsIHBvc3RQdXJjaGFzZUl0ZW1zIH0gZnJvbSBcIi4uL2xpYi9hcGlcIjtcblxuY29uc3QgcGFnZU5hbWUgPSBcIlB1cmNoYXNlXCI7XG5jb25zdCBwYWdlRGVzY3JpcHRpb24gPVxuICBcIkhlbGxvISBUaGFuayB5b3UgZm9yIHNob3BwaW5nIPCfmIAgRmlsbCBvdXQgdGhpcyBmb3JtIGFuZCB0aGVuIHRha2UgdGhlIG1vbmV5IGZyb20gdGhlIGNvbW1vbiBmZWVcIjtcblxuXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBIb21lKCkge1xuICBjb25zdCBbcHJvY2Vzc2luZywgc2V0UHJvY2Vzc2luZ10gPSB1c2VTdGF0ZShmYWxzZSk7XG4gIGNvbnN0IFtpdGVtcywgc2V0SXRlbXNdID0gdXNlU3RhdGUoW10pO1xuICBjb25zdCBbcHJpY2UsIHNldFByaWNlXSA9IHVzZVN0YXRlKDApO1xuICBjb25zdCBbbWVtYmVySWQsIHNldE1lbWJlcklkXSA9IHVzZVN0YXRlKFwiXCIpO1xuICAvLyBjb25zdCBbbWVtYmVycywgc2V0TWVtYmVyc10gPSB1c2VTdGF0ZShbXSk7XG5cbiAgY29uc3QgbWVtYmVycyA9IGdldE1lbWJlcnNXaXRoU1dSKClcblxuICBjb25zdCBzdWJtaXQgPSAoZSkgPT4ge1xuICAgIGUucHJldmVudERlZmF1bHQoKTtcbiAgICBzZXRQcm9jZXNzaW5nKHRydWUpO1xuICAgIHBvc3RQdXJjaGFzZUl0ZW1zKG1lbWJlcklkLCBpdGVtcyk7XG4gICAgLy8gc2V0VGltZW91dCgoKSA9PiB7XG4gICAgLy8gICByb3V0ZXIucHVzaCgndGhhbmtzJylcbiAgICAvLyB9LCAyMDAwKVxuICB9O1xuXG4gIGNvbnN0IHVwZGF0ZUl0ZW1zID0gKGNoaWxkSXRlbXMpID0+IHtcbiAgICBzZXRJdGVtcyhjaGlsZEl0ZW1zKTtcbiAgICBzZXRQcmljZShcbiAgICAgIGNoaWxkSXRlbXMucmVkdWNlKChzdW0sIGVsZW1lbnQpID0+IHtcbiAgICAgICAgcmV0dXJuIHN1bSArIChlbGVtZW50LnByaWNlIHx8IDApICogZWxlbWVudC5xdWFudGl0eTtcbiAgICAgIH0sIDApXG4gICAgKTtcbiAgfTtcblxuICAvLyBhc3luYyBmdW5jdGlvbiBtb3VudGVkKCkge1xuICAvLyAgIGNvbnN0IG1lbWJlcnMgPSBhd2FpdCBnZXRNZW1iZXJzKCk7XG4gIC8vICAgc2V0TWVtYmVycyhbeyBpZDogXCJcIiwgbmFtZTogXCJcIiB9LCAuLi5tZW1iZXJzXSk7XG4gIC8vIH1cbiAgLy8gbW91bnRlZCgpO1xuICAvLyBjb25zb2xlLmxvZygncmVsb2FkJylcblxuXG4gIHJldHVybiAoXG4gICAgPExheW91dCBwYWdlTmFtZT17cGFnZU5hbWV9IHBhZ2VEZXNjcmlwdGlvbj17cGFnZURlc2NyaXB0aW9ufT5cbiAgICAgIDxoMiBjbGFzc05hbWU9XCJtYi0xMCB0ZXh0LXNtIGxlYWRpbmctbm9uZSBmb250LWJvbGRcIj5XaGF0J3MgaXRlbXM8L2gyPlxuXG4gICAgICA8ZGl2IGNsYXNzTmFtZT1cIm1iLTE0XCI+XG4gICAgICAgIDxJdGVtIGl0ZW1zPXtpdGVtc30gdXBkYXRlPXt1cGRhdGVJdGVtc30gLz5cbiAgICAgIDwvZGl2PlxuXG4gICAgICA8ZGl2IGNsYXNzTmFtZT1cIm1iLTEwXCI+XG4gICAgICAgIDxQcmljZSBwcmljZT17cHJpY2V9IC8+XG4gICAgICA8L2Rpdj5cblxuICAgICAgPHNlbGVjdFxuICAgICAgICB2YWx1ZT17bWVtYmVySWR9XG4gICAgICAgIG9uQ2hhbmdlPXsoZSkgPT4gc2V0TWVtYmVySWQoZS50YXJnZXQudmFsdWUpfVxuICAgICAgICBjbGFzc05hbWU9e3V0aWxTdHlsZXMuaW5wdXQgKyBcIiBtYi0xMFwifVxuICAgICAgPlxuICAgICAgICB7bWVtYmVycy5tYXAoKG1lbWJlciwga2V5KSA9PiB7XG4gICAgICAgICAgcmV0dXJuIChcbiAgICAgICAgICAgIDxvcHRpb24ga2V5PXtrZXl9IHZhbHVlPXttZW1iZXIuaWR9PlxuICAgICAgICAgICAgICB7bWVtYmVyLm5hbWV9XG4gICAgICAgICAgICA8L29wdGlvbj5cbiAgICAgICAgICApO1xuICAgICAgICB9KX1cbiAgICAgIDwvc2VsZWN0PlxuICAgICAgeyFwcm9jZXNzaW5nID8gKFxuICAgICAgICA8YnV0dG9uIGNsYXNzTmFtZT17dXRpbFN0eWxlc1tcImJ0bi1zdWJtaXRcIl19IG9uQ2xpY2s9e3N1Ym1pdH0+XG4gICAgICAgICAgUHVyY2hhc2VcbiAgICAgICAgPC9idXR0b24+XG4gICAgICApIDogKFxuICAgICAgICA8YnV0dG9uIGNsYXNzTmFtZT17dXRpbFN0eWxlc1tcImJ0bi1zdWJtaXRcIl19IG9uQ2xpY2s9e3N1Ym1pdH0+XG4gICAgICAgICAgPHN2Z1xuICAgICAgICAgICAgY2xhc3NOYW1lPVwiYW5pbWF0ZS1zcGluXCJcbiAgICAgICAgICAgIHhtbG5zPVwiaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmdcIlxuICAgICAgICAgICAgZmlsbD1cIm5vbmVcIlxuICAgICAgICAgICAgdmlld0JveD1cIjAgMCAyNCAyNFwiXG4gICAgICAgICAgPlxuICAgICAgICAgICAgPGNpcmNsZVxuICAgICAgICAgICAgICBjbGFzc05hbWU9XCJvcGFjaXR5LTI1XCJcbiAgICAgICAgICAgICAgY3g9XCIxMlwiXG4gICAgICAgICAgICAgIGN5PVwiMTJcIlxuICAgICAgICAgICAgICByPVwiMTBcIlxuICAgICAgICAgICAgICBzdHJva2U9XCJjdXJyZW50Q29sb3JcIlxuICAgICAgICAgICAgICBzdHJva2Utd2lkdGg9XCI0XCJcbiAgICAgICAgICAgID48L2NpcmNsZT5cbiAgICAgICAgICAgIDxwYXRoXG4gICAgICAgICAgICAgIGNsYXNzTmFtZT1cIm9wYWNpdHktNzVcIlxuICAgICAgICAgICAgICBmaWxsPVwiY3VycmVudENvbG9yXCJcbiAgICAgICAgICAgICAgZD1cIk00IDEyYTggOCAwIDAxOC04VjBDNS4zNzMgMCAwIDUuMzczIDAgMTJoNHptMiA1LjI5MUE3Ljk2MiA3Ljk2MiAwIDAxNCAxMkgwYzAgMy4wNDIgMS4xMzUgNS44MjQgMyA3LjkzOGwzLTIuNjQ3elwiXG4gICAgICAgICAgICA+PC9wYXRoPlxuICAgICAgICAgIDwvc3ZnPlxuICAgICAgICAgIFByb2Nlc3NpbmdcbiAgICAgICAgPC9idXR0b24+XG4gICAgICApfVxuICAgIDwvTGF5b3V0PlxuICApO1xufVxuXG5leHBvcnQgY29uc3QgY29tcG9uZW50RGlkTW91bnQgPSAoKSA9PiB7XG4gIGNvbnNvbGUubG9nKCdkaWQnKVxufSJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./src/pages/purchase.tsx\n");

/***/ })

})