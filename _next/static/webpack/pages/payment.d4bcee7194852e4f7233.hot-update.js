webpackHotUpdate_N_E("pages/payment",{

/***/ "./src/lib/api.ts":
/*!************************!*\
  !*** ./src/lib/api.ts ***!
  \************************/
/*! exports provided: getMembersWithSWR, getMembers, getMemberHistory, postPurchaseItems, postPaymentMonth */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* WEBPACK VAR INJECTION */(function(module) {/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"getMembersWithSWR\", function() { return getMembersWithSWR; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"getMembers\", function() { return getMembers; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"getMemberHistory\", function() { return getMemberHistory; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"postPurchaseItems\", function() { return postPurchaseItems; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"postPaymentMonth\", function() { return postPaymentMonth; });\n/* harmony import */ var _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/regenerator */ \"./node_modules/@babel/runtime/regenerator/index.js\");\n/* harmony import */ var _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _babel_runtime_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @babel/runtime/helpers/esm/asyncToGenerator */ \"./node_modules/@babel/runtime/helpers/esm/asyncToGenerator.js\");\n/* harmony import */ var dayjs__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! dayjs */ \"./node_modules/dayjs/dayjs.min.js\");\n/* harmony import */ var dayjs__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(dayjs__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var swr__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! swr */ \"./node_modules/swr/esm/index.js\");\n\n\n\nvar _s = $RefreshSig$();\n\n\n\nvar endpoint = \"https://api.borderless.mym.works\";\nvar houseId = \"oimachi\";\nvar apiKey = \"mchHzX4VgR6xWZ8PfE2Ax36upW6kY4Cs7tQwwsjs\";\nvar getMembersWithSWR = function getMembersWithSWR() {\n  _s();\n\n  function fetcher(_x) {\n    return _fetcher.apply(this, arguments);\n  }\n\n  function _fetcher() {\n    _fetcher = Object(_babel_runtime_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_1__[\"default\"])( /*#__PURE__*/_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.mark(function _callee(url) {\n      return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.wrap(function _callee$(_context) {\n        while (1) {\n          switch (_context.prev = _context.next) {\n            case 0:\n              return _context.abrupt(\"return\", getMembers());\n\n            case 1:\n            case \"end\":\n              return _context.stop();\n          }\n        }\n      }, _callee);\n    }));\n    return _fetcher.apply(this, arguments);\n  }\n\n  return Object(swr__WEBPACK_IMPORTED_MODULE_3__[\"default\"])(\"member\", fetcher).data || [];\n};\n\n_s(getMembersWithSWR, \"7xERTuQa/rCStZtEZdi0LgBAmUk=\", false, function () {\n  return [swr__WEBPACK_IMPORTED_MODULE_3__[\"default\"]];\n});\n\nvar getMembers = /*#__PURE__*/function () {\n  var _ref = Object(_babel_runtime_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_1__[\"default\"])( /*#__PURE__*/_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.mark(function _callee2() {\n    var response, data;\n    return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.wrap(function _callee2$(_context2) {\n      while (1) {\n        switch (_context2.prev = _context2.next) {\n          case 0:\n            _context2.prev = 0;\n            _context2.next = 3;\n            return fetch(endpoint + \"/member/\" + houseId, {\n              headers: {\n                \"x-api-key\": apiKey\n              }\n            });\n\n          case 3:\n            response = _context2.sent;\n            _context2.next = 6;\n            return response.json();\n\n          case 6:\n            data = _context2.sent;\n            return _context2.abrupt(\"return\", data.map(function (member) {\n              return {\n                id: member.Name,\n                name: \"\".concat(member.Room, \" - \").concat(member.Name)\n              };\n            }));\n\n          case 10:\n            _context2.prev = 10;\n            _context2.t0 = _context2[\"catch\"](0);\n            alert(_context2.t0.message);\n\n          case 13:\n          case \"end\":\n            return _context2.stop();\n        }\n      }\n    }, _callee2, null, [[0, 10]]);\n  }));\n\n  return function getMembers() {\n    return _ref.apply(this, arguments);\n  };\n}();\nvar getMemberHistory = /*#__PURE__*/function () {\n  var _ref2 = Object(_babel_runtime_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_1__[\"default\"])( /*#__PURE__*/_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.mark(function _callee3(name) {\n    var response, data;\n    return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.wrap(function _callee3$(_context3) {\n      while (1) {\n        switch (_context3.prev = _context3.next) {\n          case 0:\n            _context3.prev = 0;\n            _context3.next = 3;\n            return fetch(endpoint + \"/paidhistory/\" + houseId + '/' + name, {\n              headers: {\n                \"x-api-key\": apiKey\n              }\n            });\n\n          case 3:\n            response = _context3.sent;\n            _context3.next = 6;\n            return response.json();\n\n          case 6:\n            data = _context3.sent;\n            return _context3.abrupt(\"return\", data.map(function (history) {\n              return {\n                price: history.Price,\n                liabilityMonth: history.LiabilityMonth // 支払い日時\n\n              };\n            }));\n\n          case 10:\n            _context3.prev = 10;\n            _context3.t0 = _context3[\"catch\"](0);\n            alert(_context3.t0.message);\n\n          case 13:\n          case \"end\":\n            return _context3.stop();\n        }\n      }\n    }, _callee3, null, [[0, 10]]);\n  }));\n\n  return function getMemberHistory(_x2) {\n    return _ref2.apply(this, arguments);\n  };\n}();\nvar postPurchaseItems = /*#__PURE__*/function () {\n  var _ref3 = Object(_babel_runtime_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_1__[\"default\"])( /*#__PURE__*/_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.mark(function _callee4(memberId, items) {\n    var postData, response;\n    return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.wrap(function _callee4$(_context4) {\n      while (1) {\n        switch (_context4.prev = _context4.next) {\n          case 0:\n            _context4.prev = 0;\n            postData = items.map(function (item, index) {\n              return {\n                Timestamp: dayjs__WEBPACK_IMPORTED_MODULE_2___default()().add(index, \"second\").format(\"YYYY/MM/DD HH:mm:ss\"),\n                Tenant: memberId,\n                Item: item.name,\n                Price: item.price,\n                Quantity: item.quantity,\n                TotalPrice: item.price * item.quantity\n              };\n            });\n            console.log(postData);\n            _context4.next = 5;\n            return fetch(endpoint + \"/purchase/\" + houseId, {\n              method: \"POST\",\n              headers: {\n                \"Content-Type\": \"application/json\",\n                \"x-api-key\": apiKey\n              },\n              body: JSON.stringify(postData)\n            });\n\n          case 5:\n            response = _context4.sent;\n            _context4.next = 8;\n            return response.json();\n\n          case 8:\n            return _context4.abrupt(\"return\", _context4.sent);\n\n          case 11:\n            _context4.prev = 11;\n            _context4.t0 = _context4[\"catch\"](0);\n            alert(_context4.t0.message);\n\n          case 14:\n          case \"end\":\n            return _context4.stop();\n        }\n      }\n    }, _callee4, null, [[0, 11]]);\n  }));\n\n  return function postPurchaseItems(_x3, _x4) {\n    return _ref3.apply(this, arguments);\n  };\n}();\nvar postPaymentMonth = /*#__PURE__*/function () {\n  var _ref4 = Object(_babel_runtime_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_1__[\"default\"])( /*#__PURE__*/_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.mark(function _callee5(id, liabilityMonth, price) {\n    var postData;\n    return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.wrap(function _callee5$(_context5) {\n      while (1) {\n        switch (_context5.prev = _context5.next) {\n          case 0:\n            try {\n              postData = {\n                \"Tenant\": id,\n                \"Timestamp\": liabilityMonth,\n                \"Price\": price\n              };\n              console.log(postData); // const response = await fetch(endpoint + \"/pay/\" + houseId, {\n              //   method: \"POST\",\n              //   headers: {\n              //     \"Content-Type\": \"application/json\",\n              //     \"x-api-key\": apiKey,\n              //   },\n              //   body: JSON.stringify(postData),\n              // });\n              // return await response.json();\n            } catch (e) {\n              alert(e.message);\n            }\n\n          case 1:\n          case \"end\":\n            return _context5.stop();\n        }\n      }\n    }, _callee5);\n  }));\n\n  return function postPaymentMonth(_x5, _x6, _x7) {\n    return _ref4.apply(this, arguments);\n  };\n}();\n\n;\n    var _a, _b;\n    // Legacy CSS implementations will `eval` browser code in a Node.js context\n    // to extract CSS. For backwards compatibility, we need to check we're in a\n    // browser context before continuing.\n    if (typeof self !== 'undefined' &&\n        // AMP / No-JS mode does not inject these helpers:\n        '$RefreshHelpers$' in self) {\n        var currentExports = module.__proto__.exports;\n        var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n        // This cannot happen in MainTemplate because the exports mismatch between\n        // templating and execution.\n        self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.i);\n        // A module can be accepted automatically based on its exports, e.g. when\n        // it is a Refresh Boundary.\n        if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n            // Save the previous exports on update so we can compare the boundary\n            // signatures.\n            module.hot.dispose(function (data) {\n                data.prevExports = currentExports;\n            });\n            // Unconditionally accept an update to this module, we'll check if it's\n            // still a Refresh Boundary later.\n            module.hot.accept();\n            // This field is set when the previous version of this module was a\n            // Refresh Boundary, letting us know we need to check for invalidation or\n            // enqueue an update.\n            if (prevExports !== null) {\n                // A boundary can become ineligible if its exports are incompatible\n                // with the previous exports.\n                //\n                // For example, if you add/remove/change exports, we'll want to\n                // re-execute the importing modules, and force those components to\n                // re-render. Similarly, if you convert a class component to a\n                // function, we want to invalidate the boundary.\n                if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                    module.hot.invalidate();\n                }\n                else {\n                    self.$RefreshHelpers$.scheduleUpdate();\n                }\n            }\n        }\n        else {\n            // Since we just executed the code for the module, it's possible that the\n            // new exports made it ineligible for being a boundary.\n            // We only care about the case when we were _previously_ a boundary,\n            // because we already accepted this update (accidental side effect).\n            var isNoLongerABoundary = prevExports !== null;\n            if (isNoLongerABoundary) {\n                module.hot.invalidate();\n            }\n        }\n    }\n\n/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../../node_modules/webpack/buildin/harmony-module.js */ \"./node_modules/webpack/buildin/harmony-module.js\")(module)))//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vc3JjL2xpYi9hcGkudHM/ZmYwNyJdLCJuYW1lcyI6WyJlbmRwb2ludCIsInByb2Nlc3MiLCJob3VzZUlkIiwiYXBpS2V5IiwiZ2V0TWVtYmVyc1dpdGhTV1IiLCJmZXRjaGVyIiwidXJsIiwiZ2V0TWVtYmVycyIsInVzZVNXUiIsImRhdGEiLCJmZXRjaCIsImhlYWRlcnMiLCJyZXNwb25zZSIsImpzb24iLCJtYXAiLCJtZW1iZXIiLCJpZCIsIk5hbWUiLCJuYW1lIiwiUm9vbSIsImFsZXJ0IiwibWVzc2FnZSIsImdldE1lbWJlckhpc3RvcnkiLCJoaXN0b3J5IiwicHJpY2UiLCJQcmljZSIsImxpYWJpbGl0eU1vbnRoIiwiTGlhYmlsaXR5TW9udGgiLCJwb3N0UHVyY2hhc2VJdGVtcyIsIm1lbWJlcklkIiwiaXRlbXMiLCJwb3N0RGF0YSIsIml0ZW0iLCJpbmRleCIsIlRpbWVzdGFtcCIsImRheWpzIiwiYWRkIiwiZm9ybWF0IiwiVGVuYW50IiwiSXRlbSIsIlF1YW50aXR5IiwicXVhbnRpdHkiLCJUb3RhbFByaWNlIiwiY29uc29sZSIsImxvZyIsIm1ldGhvZCIsImJvZHkiLCJKU09OIiwic3RyaW5naWZ5IiwicG9zdFBheW1lbnRNb250aCIsImUiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUE7QUFDQTtBQUNBLElBQU1BLFFBQVEsR0FBR0Msa0NBQWpCO0FBQ0EsSUFBTUMsT0FBTyxHQUFHRCxTQUFoQjtBQUNBLElBQU1FLE1BQU0sR0FBR0YsMENBQWY7QUFFTyxJQUFNRyxpQkFBaUIsR0FBRyxTQUFwQkEsaUJBQW9CLEdBQU07QUFBQTs7QUFBQSxXQUN0QkMsT0FEc0I7QUFBQTtBQUFBOztBQUFBO0FBQUEsZ01BQ3JDLGlCQUF1QkMsR0FBdkI7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLCtDQUNTQyxVQUFVLEVBRG5COztBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLEtBRHFDO0FBQUE7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QUEwQkUsT0FBM0IsRUFBb0M7QUFDOUQyQyxvQkFBTSxFQUFFLE1BRHNEO0FBRzlEbEMscUJBQU8sRUFBRTtBQUNQLGdDQUFnQixrQkFEVDtBQUVQLDZCQUFhUjtBQUZOLGVBSHFEO0FBTzlEMkMsa0JBQUksRUFBRUMsSUFBSSxDQUFDQyxTQUFMLENBQWVqQixRQUFmO0FBUHdELGFBQXBDLENBZkM7O0FBQUE7QUFldkJuQixvQkFmdUI7QUFBQTtBQUFBLG1CQXdCaEJBLFFBQVEsQ0FBQ0MsSUFBVCxFQXhCZ0I7O0FBQUE7QUFBQTs7QUFBQTtBQUFBO0FBQUE7QUEwQjdCTyxpQkFBSyxDQUFDLGFBQUVDLE9BQUgsQ0FBTDs7QUExQjZCO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLEdBQUg7O0FBQUEsa0JBQWpCTyxpQkFBaUI7QUFBQTtBQUFBO0FBQUEsR0FBdkI7QUE4QkEsSUFBTXFCLGdCQUFnQjtBQUFBLCtMQUFHLGtCQUFPakMsRUFBUCxFQUFXVSxjQUFYLEVBQTJCRixLQUEzQjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFDOUIsZ0JBQUk7QUFDSU8sc0JBREosR0FDZTtBQUNmLDBCQUFVZixFQURLO0FBRWYsNkJBQWFVLGNBRkU7QUFHZix5QkFBU0Y7QUFITSxlQURmO0FBT0ZtQixxQkFBTyxDQUFDQyxHQUFSLENBQVliLFFBQVosRUFQRSxDQVNGO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNELGFBbEJELENBa0JFLE9BQU9tQixDQUFQLEVBQVU7QUFDVjlCLG1CQUFLLENBQUM4QixDQUFDLENBQUM3QixPQUFILENBQUw7QUFDRDs7QUFyQjZCO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLEdBQUg7O0FBQUEsa0JBQWhCNEIsZ0JBQWdCO0FBQUE7QUFBQTtBQUFBLEdBQXRCIiwiZmlsZSI6Ii4vc3JjL2xpYi9hcGkudHMuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgZGF5anMgZnJvbSBcImRheWpzXCI7XG5pbXBvcnQgdXNlU1dSIGZyb20gXCJzd3JcIjtcbmNvbnN0IGVuZHBvaW50ID0gcHJvY2Vzcy5lbnYuTkVYVF9QVUJMSUNfQVBJX0VORFBPSU5UO1xuY29uc3QgaG91c2VJZCA9IHByb2Nlc3MuZW52Lk5FWFRfUFVCTElDX0FQSV9IT1VTRV9JRDtcbmNvbnN0IGFwaUtleSA9IHByb2Nlc3MuZW52Lk5FWFRfUFVCTElDX0FQSV9LRVk7XG5cbmV4cG9ydCBjb25zdCBnZXRNZW1iZXJzV2l0aFNXUiA9ICgpID0+IHtcbiAgYXN5bmMgZnVuY3Rpb24gZmV0Y2hlcih1cmwpIHtcbiAgICByZXR1cm4gZ2V0TWVtYmVycygpO1xuICB9XG4gIHJldHVybiB1c2VTV1IoXCJtZW1iZXJcIiwgZmV0Y2hlcikuZGF0YSB8fCBbXTtcbn07XG5cbmV4cG9ydCBjb25zdCBnZXRNZW1iZXJzID0gYXN5bmMgKCkgPT4ge1xuICB0cnkge1xuICAgIGNvbnN0IHJlc3BvbnNlID0gYXdhaXQgZmV0Y2goZW5kcG9pbnQgKyBcIi9tZW1iZXIvXCIgKyBob3VzZUlkLCB7XG4gICAgICBoZWFkZXJzOiB7XG4gICAgICAgIFwieC1hcGkta2V5XCI6IGFwaUtleSxcbiAgICAgIH0sXG4gICAgfSk7XG4gICAgLy8gcmV0dXJuIHJlc3BvbnNlLmpzb24oKVxuXG4gICAgY29uc3QgZGF0YSA9IGF3YWl0IHJlc3BvbnNlLmpzb24oKTtcblxuICAgIHJldHVybiBkYXRhLm1hcCgobWVtYmVyKSA9PiB7XG4gICAgICByZXR1cm4ge1xuICAgICAgICBpZDogbWVtYmVyLk5hbWUsXG4gICAgICAgIG5hbWU6IGAke21lbWJlci5Sb29tfSAtICR7bWVtYmVyLk5hbWV9YCxcbiAgICAgIH07XG4gICAgfSk7XG4gIH0gY2F0Y2ggKGUpIHtcbiAgICBhbGVydChlLm1lc3NhZ2UpO1xuICB9XG59O1xuXG5leHBvcnQgY29uc3QgZ2V0TWVtYmVySGlzdG9yeSA9IGFzeW5jIChuYW1lKSA9PiB7XG4gIHRyeSB7XG4gICAgY29uc3QgcmVzcG9uc2UgPSBhd2FpdCBmZXRjaChlbmRwb2ludCArIFwiL3BhaWRoaXN0b3J5L1wiICsgaG91c2VJZCArICcvJyArIG5hbWUsIHtcbiAgICAgIGhlYWRlcnM6IHtcbiAgICAgICAgXCJ4LWFwaS1rZXlcIjogYXBpS2V5LFxuICAgICAgfSxcbiAgICB9KTtcbiAgICAvLyByZXR1cm4gcmVzcG9uc2UuanNvbigpXG5cbiAgICBjb25zdCBkYXRhID0gYXdhaXQgcmVzcG9uc2UuanNvbigpO1xuXG4gICAgcmV0dXJuIGRhdGEubWFwKChoaXN0b3J5KSA9PiB7XG4gICAgICByZXR1cm4ge1xuICAgICAgICBwcmljZTogaGlzdG9yeS5QcmljZSxcbiAgICAgICAgbGlhYmlsaXR5TW9udGg6IGhpc3RvcnkuTGlhYmlsaXR5TW9udGgsIC8vIOaUr+aJleOBhOaXpeaZglxuICAgICAgfTtcbiAgICB9KTtcbiAgfSBjYXRjaCAoZSkge1xuICAgIGFsZXJ0KGUubWVzc2FnZSk7XG4gIH1cbn07XG5cbmV4cG9ydCBjb25zdCBwb3N0UHVyY2hhc2VJdGVtcyA9IGFzeW5jIChtZW1iZXJJZCwgaXRlbXMpID0+IHtcbiAgdHJ5IHtcbiAgICBjb25zdCBwb3N0RGF0YSA9IGl0ZW1zLm1hcCgoaXRlbSwgaW5kZXgpID0+IHtcbiAgICAgIHJldHVybiB7XG4gICAgICAgIFRpbWVzdGFtcDogZGF5anMoKS5hZGQoaW5kZXgsIFwic2Vjb25kXCIpLmZvcm1hdChcIllZWVkvTU0vREQgSEg6bW06c3NcIiksXG4gICAgICAgIFRlbmFudDogbWVtYmVySWQsXG4gICAgICAgIEl0ZW06IGl0ZW0ubmFtZSxcbiAgICAgICAgUHJpY2U6IGl0ZW0ucHJpY2UsXG4gICAgICAgIFF1YW50aXR5OiBpdGVtLnF1YW50aXR5LFxuICAgICAgICBUb3RhbFByaWNlOiBpdGVtLnByaWNlICogaXRlbS5xdWFudGl0eSxcbiAgICAgIH07XG4gICAgfSk7XG5cbiAgICBjb25zb2xlLmxvZyhwb3N0RGF0YSk7XG5cbiAgICBjb25zdCByZXNwb25zZSA9IGF3YWl0IGZldGNoKGVuZHBvaW50ICsgXCIvcHVyY2hhc2UvXCIgKyBob3VzZUlkLCB7XG4gICAgICBtZXRob2Q6IFwiUE9TVFwiLFxuXG4gICAgICBoZWFkZXJzOiB7XG4gICAgICAgIFwiQ29udGVudC1UeXBlXCI6IFwiYXBwbGljYXRpb24vanNvblwiLFxuICAgICAgICBcIngtYXBpLWtleVwiOiBhcGlLZXksXG4gICAgICB9LFxuICAgICAgYm9keTogSlNPTi5zdHJpbmdpZnkocG9zdERhdGEpLFxuICAgIH0pO1xuICAgIHJldHVybiBhd2FpdCByZXNwb25zZS5qc29uKCk7XG4gIH0gY2F0Y2ggKGUpIHtcbiAgICBhbGVydChlLm1lc3NhZ2UpO1xuICB9XG59O1xuXG5leHBvcnQgY29uc3QgcG9zdFBheW1lbnRNb250aCA9IGFzeW5jIChpZCwgbGlhYmlsaXR5TW9udGgsIHByaWNlKSA9PiB7XG4gIHRyeSB7XG4gICAgY29uc3QgcG9zdERhdGEgPSB7XG4gICAgICBcIlRlbmFudFwiOiBpZCxcbiAgICAgIFwiVGltZXN0YW1wXCI6IGxpYWJpbGl0eU1vbnRoLFxuICAgICAgXCJQcmljZVwiOiBwcmljZVxuICAgIH1cblxuICAgIGNvbnNvbGUubG9nKHBvc3REYXRhKTtcblxuICAgIC8vIGNvbnN0IHJlc3BvbnNlID0gYXdhaXQgZmV0Y2goZW5kcG9pbnQgKyBcIi9wYXkvXCIgKyBob3VzZUlkLCB7XG4gICAgLy8gICBtZXRob2Q6IFwiUE9TVFwiLFxuICAgIC8vICAgaGVhZGVyczoge1xuICAgIC8vICAgICBcIkNvbnRlbnQtVHlwZVwiOiBcImFwcGxpY2F0aW9uL2pzb25cIixcbiAgICAvLyAgICAgXCJ4LWFwaS1rZXlcIjogYXBpS2V5LFxuICAgIC8vICAgfSxcbiAgICAvLyAgIGJvZHk6IEpTT04uc3RyaW5naWZ5KHBvc3REYXRhKSxcbiAgICAvLyB9KTtcbiAgICAvLyByZXR1cm4gYXdhaXQgcmVzcG9uc2UuanNvbigpO1xuICB9IGNhdGNoIChlKSB7XG4gICAgYWxlcnQoZS5tZXNzYWdlKTtcbiAgfVxufTtcbiJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./src/lib/api.ts\n");

/***/ })

})