"use strict";
/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
self["webpackHotUpdate_N_E"]("app/page",{

/***/ "(app-pages-browser)/./src/components/mobile/CancelledMobile.tsx":
/*!***************************************************!*\
  !*** ./src/components/mobile/CancelledMobile.tsx ***!
  \***************************************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": function() { return /* binding */ CancelledMobile; }\n/* harmony export */ });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"(app-pages-browser)/./node_modules/next/dist/compiled/react/jsx-dev-runtime.js\");\n/* harmony import */ var _components_ui_separator__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @/components/ui/separator */ \"(app-pages-browser)/./src/components/ui/separator.tsx\");\n/* harmony import */ var _ui_dialog__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../ui/dialog */ \"(app-pages-browser)/./src/components/ui/dialog.tsx\");\n/* harmony import */ var _ui_card__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../ui/card */ \"(app-pages-browser)/./src/components/ui/card.tsx\");\n\n\n\n\nconst orders = [\n    {\n        order_id: \"ORD003\",\n        order_date: \"2023/05/02\",\n        customer_id: \"0000000002\",\n        customer_name: \"Beta-cancelled\",\n        order_type: \"Type 2\",\n        expectations: [\n            {\n                location: \"CBD\",\n                start_date: \"2023/05/04\",\n                end_date: \"2023/11/20\",\n                start_time: \"09:00\",\n                end_time: \"11:00\"\n            },\n            {\n                location: \"Westall\",\n                start_date: \"2023/05/10\",\n                end_date: \"2023/10/20\",\n                start_time: \"11:00\",\n                end_time: \"13:00\"\n            }\n        ],\n        service_fee: 250,\n        cancelled_date: \"2023/11/10\"\n    },\n    {\n        order_id: \"ORD001\",\n        order_date: \"2023/04/01\",\n        customer_id: \"0000000001\",\n        customer_name: \"Alpha\",\n        order_type: \"Type 1\",\n        expectations: [\n            {\n                location: \"CBD\",\n                start_date: \"2023/05/01\",\n                end_date: \"2023/05/10\",\n                start_time: \"09:00\",\n                end_time: \"13:00\"\n            }\n        ],\n        service_fee: 350,\n        cancelled_date: \"2023/11/10\"\n    }\n];\nfunction CancelledMobile() {\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n        children: orders.map((order)=>/*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_ui_dialog__WEBPACK_IMPORTED_MODULE_2__.Dialog, {\n                children: [\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_ui_dialog__WEBPACK_IMPORTED_MODULE_2__.DialogTrigger, {\n                        className: \"space-y-1 mb-2 w-full\",\n                        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_ui_card__WEBPACK_IMPORTED_MODULE_3__.Card, {\n                            children: [\n                                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_ui_card__WEBPACK_IMPORTED_MODULE_3__.CardHeader, {\n                                    className: \"flex flex-row items-center justify-between space-y-0 pb-1\",\n                                    children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_ui_card__WEBPACK_IMPORTED_MODULE_3__.CardTitle, {\n                                        className: \"text-sm font-medium\",\n                                        children: order.customer_name\n                                    }, void 0, false, {\n                                        fileName: \"C:\\\\Users\\\\ASUS\\\\Documents\\\\booking-system\\\\src\\\\components\\\\mobile\\\\CancelledMobile.tsx\",\n                                        lineNumber: 68,\n                                        columnNumber: 17\n                                    }, this)\n                                }, void 0, false, {\n                                    fileName: \"C:\\\\Users\\\\ASUS\\\\Documents\\\\booking-system\\\\src\\\\components\\\\mobile\\\\CancelledMobile.tsx\",\n                                    lineNumber: 67,\n                                    columnNumber: 15\n                                }, this),\n                                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_ui_card__WEBPACK_IMPORTED_MODULE_3__.CardContent, {\n                                    className: \"text-xs text-muted-foreground\",\n                                    children: [\n                                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"p\", {\n                                            className: \"text-sm text-muted-foreground w-3/4 inline-block text-left\",\n                                            children: order.order_type\n                                        }, void 0, false, {\n                                            fileName: \"C:\\\\Users\\\\ASUS\\\\Documents\\\\booking-system\\\\src\\\\components\\\\mobile\\\\CancelledMobile.tsx\",\n                                            lineNumber: 73,\n                                            columnNumber: 17\n                                        }, this),\n                                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"p\", {\n                                            className: \"text-sm text-muted-foreground w-1/4 inline-block\",\n                                            children: order.order_date\n                                        }, void 0, false, {\n                                            fileName: \"C:\\\\Users\\\\ASUS\\\\Documents\\\\booking-system\\\\src\\\\components\\\\mobile\\\\CancelledMobile.tsx\",\n                                            lineNumber: 76,\n                                            columnNumber: 17\n                                        }, this)\n                                    ]\n                                }, void 0, true, {\n                                    fileName: \"C:\\\\Users\\\\ASUS\\\\Documents\\\\booking-system\\\\src\\\\components\\\\mobile\\\\CancelledMobile.tsx\",\n                                    lineNumber: 72,\n                                    columnNumber: 15\n                                }, this)\n                            ]\n                        }, void 0, true, {\n                            fileName: \"C:\\\\Users\\\\ASUS\\\\Documents\\\\booking-system\\\\src\\\\components\\\\mobile\\\\CancelledMobile.tsx\",\n                            lineNumber: 63,\n                            columnNumber: 13\n                        }, this)\n                    }, void 0, false, {\n                        fileName: \"C:\\\\Users\\\\ASUS\\\\Documents\\\\booking-system\\\\src\\\\components\\\\mobile\\\\CancelledMobile.tsx\",\n                        lineNumber: 62,\n                        columnNumber: 11\n                    }, this),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_ui_dialog__WEBPACK_IMPORTED_MODULE_2__.DialogContent, {\n                        className: \"w-5/6\",\n                        children: [\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_ui_dialog__WEBPACK_IMPORTED_MODULE_2__.DialogHeader, {\n                                children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_ui_dialog__WEBPACK_IMPORTED_MODULE_2__.DialogTitle, {\n                                    children: \"Order detail\"\n                                }, void 0, false, {\n                                    fileName: \"C:\\\\Users\\\\ASUS\\\\Documents\\\\booking-system\\\\src\\\\components\\\\mobile\\\\CancelledMobile.tsx\",\n                                    lineNumber: 84,\n                                    columnNumber: 15\n                                }, this)\n                            }, void 0, false, {\n                                fileName: \"C:\\\\Users\\\\ASUS\\\\Documents\\\\booking-system\\\\src\\\\components\\\\mobile\\\\CancelledMobile.tsx\",\n                                lineNumber: 83,\n                                columnNumber: 13\n                            }, this),\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                                className: \"flex flex-col\",\n                                children: [\n                                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"p\", {\n                                        className: \"text-md\",\n                                        children: order.customer_name\n                                    }, void 0, false, {\n                                        fileName: \"C:\\\\Users\\\\ASUS\\\\Documents\\\\booking-system\\\\src\\\\components\\\\mobile\\\\CancelledMobile.tsx\",\n                                        lineNumber: 87,\n                                        columnNumber: 15\n                                    }, this),\n                                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"p\", {\n                                        className: \"text-small text-muted-foreground\",\n                                        children: order.customer_id\n                                    }, void 0, false, {\n                                        fileName: \"C:\\\\Users\\\\ASUS\\\\Documents\\\\booking-system\\\\src\\\\components\\\\mobile\\\\CancelledMobile.tsx\",\n                                        lineNumber: 88,\n                                        columnNumber: 15\n                                    }, this)\n                                ]\n                            }, void 0, true, {\n                                fileName: \"C:\\\\Users\\\\ASUS\\\\Documents\\\\booking-system\\\\src\\\\components\\\\mobile\\\\CancelledMobile.tsx\",\n                                lineNumber: 86,\n                                columnNumber: 13\n                            }, this),\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                                className: \"space-y-2\",\n                                children: [\n                                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"p\", {\n                                        children: [\n                                            \"Order Type: \",\n                                            order.order_type\n                                        ]\n                                    }, void 0, true, {\n                                        fileName: \"C:\\\\Users\\\\ASUS\\\\Documents\\\\booking-system\\\\src\\\\components\\\\mobile\\\\CancelledMobile.tsx\",\n                                        lineNumber: 95,\n                                        columnNumber: 15\n                                    }, this),\n                                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"p\", {\n                                        children: [\n                                            \"Order Date: \",\n                                            order.order_date\n                                        ]\n                                    }, void 0, true, {\n                                        fileName: \"C:\\\\Users\\\\ASUS\\\\Documents\\\\booking-system\\\\src\\\\components\\\\mobile\\\\CancelledMobile.tsx\",\n                                        lineNumber: 96,\n                                        columnNumber: 15\n                                    }, this),\n                                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_ui_separator__WEBPACK_IMPORTED_MODULE_1__.Separator, {}, void 0, false, {\n                                        fileName: \"C:\\\\Users\\\\ASUS\\\\Documents\\\\booking-system\\\\src\\\\components\\\\mobile\\\\CancelledMobile.tsx\",\n                                        lineNumber: 97,\n                                        columnNumber: 15\n                                    }, this),\n                                    order.expectations.map((expectation, index)=>/*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                                            className: \"space-y-2\",\n                                            children: [\n                                                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"p\", {\n                                                    children: [\n                                                        \"Location: \",\n                                                        expectation.location\n                                                    ]\n                                                }, void 0, true, {\n                                                    fileName: \"C:\\\\Users\\\\ASUS\\\\Documents\\\\booking-system\\\\src\\\\components\\\\mobile\\\\CancelledMobile.tsx\",\n                                                    lineNumber: 100,\n                                                    columnNumber: 19\n                                                }, this),\n                                                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"p\", {\n                                                    children: [\n                                                        \"Start Date: \",\n                                                        expectation.start_date\n                                                    ]\n                                                }, void 0, true, {\n                                                    fileName: \"C:\\\\Users\\\\ASUS\\\\Documents\\\\booking-system\\\\src\\\\components\\\\mobile\\\\CancelledMobile.tsx\",\n                                                    lineNumber: 101,\n                                                    columnNumber: 19\n                                                }, this),\n                                                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"p\", {\n                                                    children: [\n                                                        \"End Date: \",\n                                                        expectation.end_date\n                                                    ]\n                                                }, void 0, true, {\n                                                    fileName: \"C:\\\\Users\\\\ASUS\\\\Documents\\\\booking-system\\\\src\\\\components\\\\mobile\\\\CancelledMobile.tsx\",\n                                                    lineNumber: 102,\n                                                    columnNumber: 19\n                                                }, this),\n                                                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"p\", {\n                                                    children: [\n                                                        \"Start Time: \",\n                                                        expectation.start_time\n                                                    ]\n                                                }, void 0, true, {\n                                                    fileName: \"C:\\\\Users\\\\ASUS\\\\Documents\\\\booking-system\\\\src\\\\components\\\\mobile\\\\CancelledMobile.tsx\",\n                                                    lineNumber: 103,\n                                                    columnNumber: 19\n                                                }, this),\n                                                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"p\", {\n                                                    children: [\n                                                        \"End Time: \",\n                                                        expectation.end_time\n                                                    ]\n                                                }, void 0, true, {\n                                                    fileName: \"C:\\\\Users\\\\ASUS\\\\Documents\\\\booking-system\\\\src\\\\components\\\\mobile\\\\CancelledMobile.tsx\",\n                                                    lineNumber: 104,\n                                                    columnNumber: 19\n                                                }, this),\n                                                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_ui_separator__WEBPACK_IMPORTED_MODULE_1__.Separator, {}, void 0, false, {\n                                                    fileName: \"C:\\\\Users\\\\ASUS\\\\Documents\\\\booking-system\\\\src\\\\components\\\\mobile\\\\CancelledMobile.tsx\",\n                                                    lineNumber: 105,\n                                                    columnNumber: 19\n                                                }, this)\n                                            ]\n                                        }, index, true, {\n                                            fileName: \"C:\\\\Users\\\\ASUS\\\\Documents\\\\booking-system\\\\src\\\\components\\\\mobile\\\\CancelledMobile.tsx\",\n                                            lineNumber: 99,\n                                            columnNumber: 17\n                                        }, this)),\n                                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"p\", {\n                                        children: [\n                                            \"Service Fee: \",\n                                            order.service_fee\n                                        ]\n                                    }, void 0, true, {\n                                        fileName: \"C:\\\\Users\\\\ASUS\\\\Documents\\\\booking-system\\\\src\\\\components\\\\mobile\\\\CancelledMobile.tsx\",\n                                        lineNumber: 108,\n                                        columnNumber: 15\n                                    }, this),\n                                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"p\", {\n                                        children: [\n                                            \"Cancelled Date: \",\n                                            order.cancelled_date\n                                        ]\n                                    }, void 0, true, {\n                                        fileName: \"C:\\\\Users\\\\ASUS\\\\Documents\\\\booking-system\\\\src\\\\components\\\\mobile\\\\CancelledMobile.tsx\",\n                                        lineNumber: 109,\n                                        columnNumber: 15\n                                    }, this)\n                                ]\n                            }, void 0, true, {\n                                fileName: \"C:\\\\Users\\\\ASUS\\\\Documents\\\\booking-system\\\\src\\\\components\\\\mobile\\\\CancelledMobile.tsx\",\n                                lineNumber: 94,\n                                columnNumber: 13\n                            }, this)\n                        ]\n                    }, void 0, true, {\n                        fileName: \"C:\\\\Users\\\\ASUS\\\\Documents\\\\booking-system\\\\src\\\\components\\\\mobile\\\\CancelledMobile.tsx\",\n                        lineNumber: 82,\n                        columnNumber: 11\n                    }, this)\n                ]\n            }, order.order_id, true, {\n                fileName: \"C:\\\\Users\\\\ASUS\\\\Documents\\\\booking-system\\\\src\\\\components\\\\mobile\\\\CancelledMobile.tsx\",\n                lineNumber: 61,\n                columnNumber: 9\n            }, this))\n    }, void 0, false, {\n        fileName: \"C:\\\\Users\\\\ASUS\\\\Documents\\\\booking-system\\\\src\\\\components\\\\mobile\\\\CancelledMobile.tsx\",\n        lineNumber: 59,\n        columnNumber: 5\n    }, this);\n}\n_c = CancelledMobile;\nvar _c;\n$RefreshReg$(_c, \"CancelledMobile\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports on update so we can compare the boundary\n                // signatures.\n                module.hot.dispose(function (data) {\n                    data.prevExports = currentExports;\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevExports !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevExports !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKGFwcC1wYWdlcy1icm93c2VyKS8uL3NyYy9jb21wb25lbnRzL21vYmlsZS9DYW5jZWxsZWRNb2JpbGUudHN4IiwibWFwcGluZ3MiOiI7Ozs7Ozs7OztBQUFxRDtBQU9oQztBQUNnRDtBQUVyRSxNQUFNVSxTQUFTO0lBQ2I7UUFDRUMsVUFBVTtRQUNWQyxZQUFZO1FBQ1pDLGFBQWE7UUFDYkMsZUFBZTtRQUNmQyxZQUFZO1FBQ1pDLGNBQWM7WUFDWjtnQkFDRUMsVUFBVTtnQkFDVkMsWUFBWTtnQkFDWkMsVUFBVTtnQkFDVkMsWUFBWTtnQkFDWkMsVUFBVTtZQUNaO1lBQ0E7Z0JBQ0VKLFVBQVU7Z0JBQ1ZDLFlBQVk7Z0JBQ1pDLFVBQVU7Z0JBQ1ZDLFlBQVk7Z0JBQ1pDLFVBQVU7WUFDWjtTQUNEO1FBQ0RDLGFBQWE7UUFDYkMsZ0JBQWdCO0lBQ2xCO0lBQ0E7UUFDRVosVUFBVTtRQUNWQyxZQUFZO1FBQ1pDLGFBQWE7UUFDYkMsZUFBZTtRQUNmQyxZQUFZO1FBQ1pDLGNBQWM7WUFDWjtnQkFDRUMsVUFBVTtnQkFDVkMsWUFBWTtnQkFDWkMsVUFBVTtnQkFDVkMsWUFBWTtnQkFDWkMsVUFBVTtZQUNaO1NBQ0Q7UUFDREMsYUFBYTtRQUNiQyxnQkFBZ0I7SUFDbEI7Q0FDRDtBQUVjLFNBQVNDO0lBQ3RCLHFCQUNFLDhEQUFDQztrQkFDRWYsT0FBT2dCLEdBQUcsQ0FBQyxDQUFDQyxzQkFDWCw4REFBQzFCLDhDQUFNQTs7a0NBQ0wsOERBQUNHLHFEQUFhQTt3QkFBQ3dCLFdBQVU7a0NBQ3ZCLDRFQUFDdEIsMENBQUlBOzs4Q0FJSCw4REFBQ0UsZ0RBQVVBO29DQUFDb0IsV0FBVTs4Q0FDcEIsNEVBQUNuQiwrQ0FBU0E7d0NBQUNtQixXQUFVO2tEQUNsQkQsTUFBTWIsYUFBYTs7Ozs7Ozs7Ozs7OENBR3hCLDhEQUFDUCxpREFBV0E7b0NBQUNxQixXQUFVOztzREFDckIsOERBQUNDOzRDQUFFRCxXQUFVO3NEQUNWRCxNQUFNWixVQUFVOzs7Ozs7c0RBRW5CLDhEQUFDYzs0Q0FBRUQsV0FBVTtzREFDVkQsTUFBTWYsVUFBVTs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7a0NBS3pCLDhEQUFDUCxxREFBYUE7d0JBQUN1QixXQUFVOzswQ0FDdkIsOERBQUMxQixvREFBWUE7MENBQ1gsNEVBQUNDLG1EQUFXQTs4Q0FBQzs7Ozs7Ozs7Ozs7MENBRWYsOERBQUNzQjtnQ0FBSUcsV0FBVTs7a0RBQ2IsOERBQUNDO3dDQUFFRCxXQUFVO2tEQUFXRCxNQUFNYixhQUFhOzs7Ozs7a0RBQzNDLDhEQUFDZTt3Q0FBRUQsV0FBVTtrREFDVkQsTUFBTWQsV0FBVzs7Ozs7Ozs7Ozs7OzBDQUt0Qiw4REFBQ1k7Z0NBQUlHLFdBQVU7O2tEQUNiLDhEQUFDQzs7NENBQUU7NENBQWFGLE1BQU1aLFVBQVU7Ozs7Ozs7a0RBQ2hDLDhEQUFDYzs7NENBQUU7NENBQWFGLE1BQU1mLFVBQVU7Ozs7Ozs7a0RBQ2hDLDhEQUFDWiwrREFBU0E7Ozs7O29DQUNUMkIsTUFBTVgsWUFBWSxDQUFDVSxHQUFHLENBQUMsQ0FBQ0ksYUFBYUMsc0JBQ3BDLDhEQUFDTjs0Q0FBZ0JHLFdBQVU7OzhEQUN6Qiw4REFBQ0M7O3dEQUFFO3dEQUFXQyxZQUFZYixRQUFROzs7Ozs7OzhEQUNsQyw4REFBQ1k7O3dEQUFFO3dEQUFhQyxZQUFZWixVQUFVOzs7Ozs7OzhEQUN0Qyw4REFBQ1c7O3dEQUFFO3dEQUFXQyxZQUFZWCxRQUFROzs7Ozs7OzhEQUNsQyw4REFBQ1U7O3dEQUFFO3dEQUFhQyxZQUFZVixVQUFVOzs7Ozs7OzhEQUN0Qyw4REFBQ1M7O3dEQUFFO3dEQUFXQyxZQUFZVCxRQUFROzs7Ozs7OzhEQUNsQyw4REFBQ3JCLCtEQUFTQTs7Ozs7OzJDQU5GK0I7Ozs7O2tEQVNaLDhEQUFDRjs7NENBQUU7NENBQWNGLE1BQU1MLFdBQVc7Ozs7Ozs7a0RBQ2xDLDhEQUFDTzs7NENBQUU7NENBQWlCRixNQUFNSixjQUFjOzs7Ozs7Ozs7Ozs7Ozs7Ozs7OztlQWhEakNJLE1BQU1oQixRQUFROzs7Ozs7Ozs7O0FBdURuQztLQTNEd0JhIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vX05fRS8uL3NyYy9jb21wb25lbnRzL21vYmlsZS9DYW5jZWxsZWRNb2JpbGUudHN4PzdlOGQiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgU2VwYXJhdG9yIH0gZnJvbSBcIkAvY29tcG9uZW50cy91aS9zZXBhcmF0b3JcIlxyXG5pbXBvcnQge1xyXG4gIERpYWxvZyxcclxuICBEaWFsb2dIZWFkZXIsXHJcbiAgRGlhbG9nVGl0bGUsXHJcbiAgRGlhbG9nVHJpZ2dlcixcclxuICBEaWFsb2dDb250ZW50LFxyXG59IGZyb20gXCIuLi91aS9kaWFsb2dcIlxyXG5pbXBvcnQgeyBDYXJkLCBDYXJkQ29udGVudCwgQ2FyZEhlYWRlciwgQ2FyZFRpdGxlIH0gZnJvbSBcIi4uL3VpL2NhcmRcIlxyXG5cclxuY29uc3Qgb3JkZXJzID0gW1xyXG4gIHtcclxuICAgIG9yZGVyX2lkOiBcIk9SRDAwM1wiLFxyXG4gICAgb3JkZXJfZGF0ZTogXCIyMDIzLzA1LzAyXCIsXHJcbiAgICBjdXN0b21lcl9pZDogXCIwMDAwMDAwMDAyXCIsXHJcbiAgICBjdXN0b21lcl9uYW1lOiBcIkJldGEtY2FuY2VsbGVkXCIsXHJcbiAgICBvcmRlcl90eXBlOiBcIlR5cGUgMlwiLFxyXG4gICAgZXhwZWN0YXRpb25zOiBbXHJcbiAgICAgIHtcclxuICAgICAgICBsb2NhdGlvbjogXCJDQkRcIixcclxuICAgICAgICBzdGFydF9kYXRlOiBcIjIwMjMvMDUvMDRcIixcclxuICAgICAgICBlbmRfZGF0ZTogXCIyMDIzLzExLzIwXCIsXHJcbiAgICAgICAgc3RhcnRfdGltZTogXCIwOTowMFwiLFxyXG4gICAgICAgIGVuZF90aW1lOiBcIjExOjAwXCIsXHJcbiAgICAgIH0sXHJcbiAgICAgIHtcclxuICAgICAgICBsb2NhdGlvbjogXCJXZXN0YWxsXCIsXHJcbiAgICAgICAgc3RhcnRfZGF0ZTogXCIyMDIzLzA1LzEwXCIsXHJcbiAgICAgICAgZW5kX2RhdGU6IFwiMjAyMy8xMC8yMFwiLFxyXG4gICAgICAgIHN0YXJ0X3RpbWU6IFwiMTE6MDBcIixcclxuICAgICAgICBlbmRfdGltZTogXCIxMzowMFwiLFxyXG4gICAgICB9LFxyXG4gICAgXSxcclxuICAgIHNlcnZpY2VfZmVlOiAyNTAsXHJcbiAgICBjYW5jZWxsZWRfZGF0ZTogXCIyMDIzLzExLzEwXCIsXHJcbiAgfSxcclxuICB7XHJcbiAgICBvcmRlcl9pZDogXCJPUkQwMDFcIixcclxuICAgIG9yZGVyX2RhdGU6IFwiMjAyMy8wNC8wMVwiLFxyXG4gICAgY3VzdG9tZXJfaWQ6IFwiMDAwMDAwMDAwMVwiLFxyXG4gICAgY3VzdG9tZXJfbmFtZTogXCJBbHBoYVwiLFxyXG4gICAgb3JkZXJfdHlwZTogXCJUeXBlIDFcIixcclxuICAgIGV4cGVjdGF0aW9uczogW1xyXG4gICAgICB7XHJcbiAgICAgICAgbG9jYXRpb246IFwiQ0JEXCIsXHJcbiAgICAgICAgc3RhcnRfZGF0ZTogXCIyMDIzLzA1LzAxXCIsXHJcbiAgICAgICAgZW5kX2RhdGU6IFwiMjAyMy8wNS8xMFwiLFxyXG4gICAgICAgIHN0YXJ0X3RpbWU6IFwiMDk6MDBcIixcclxuICAgICAgICBlbmRfdGltZTogXCIxMzowMFwiLFxyXG4gICAgICB9LFxyXG4gICAgXSxcclxuICAgIHNlcnZpY2VfZmVlOiAzNTAsXHJcbiAgICBjYW5jZWxsZWRfZGF0ZTogXCIyMDIzLzExLzEwXCIsXHJcbiAgfSxcclxuXVxyXG5cclxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gQ2FuY2VsbGVkTW9iaWxlKCkge1xyXG4gIHJldHVybiAoXHJcbiAgICA8ZGl2PlxyXG4gICAgICB7b3JkZXJzLm1hcCgob3JkZXIpID0+IChcclxuICAgICAgICA8RGlhbG9nIGtleT17b3JkZXIub3JkZXJfaWR9PlxyXG4gICAgICAgICAgPERpYWxvZ1RyaWdnZXIgY2xhc3NOYW1lPVwic3BhY2UteS0xIG1iLTIgdy1mdWxsXCI+XHJcbiAgICAgICAgICAgIDxDYXJkPlxyXG4gICAgICAgICAgICAgIHsvKiA8cCBjbGFzc05hbWU9XCJ0ZXh0LXNtIGZvbnQtbWVkaXVtIGxlYWRpbmctbm9uZSB0ZXh0LWxlZnRcIj5cclxuICAgICAgICAgICAgICAgIHtvcmRlci5jdXN0b21lcl9uYW1lfVxyXG4gICAgICAgICAgICAgIDwvcD4gKi99XHJcbiAgICAgICAgICAgICAgPENhcmRIZWFkZXIgY2xhc3NOYW1lPVwiZmxleCBmbGV4LXJvdyBpdGVtcy1jZW50ZXIganVzdGlmeS1iZXR3ZWVuIHNwYWNlLXktMCBwYi0xXCI+XHJcbiAgICAgICAgICAgICAgICA8Q2FyZFRpdGxlIGNsYXNzTmFtZT1cInRleHQtc20gZm9udC1tZWRpdW1cIj5cclxuICAgICAgICAgICAgICAgICAge29yZGVyLmN1c3RvbWVyX25hbWV9XHJcbiAgICAgICAgICAgICAgICA8L0NhcmRUaXRsZT5cclxuICAgICAgICAgICAgICA8L0NhcmRIZWFkZXI+XHJcbiAgICAgICAgICAgICAgPENhcmRDb250ZW50IGNsYXNzTmFtZT1cInRleHQteHMgdGV4dC1tdXRlZC1mb3JlZ3JvdW5kXCI+XHJcbiAgICAgICAgICAgICAgICA8cCBjbGFzc05hbWU9XCJ0ZXh0LXNtIHRleHQtbXV0ZWQtZm9yZWdyb3VuZCB3LTMvNCBpbmxpbmUtYmxvY2sgdGV4dC1sZWZ0XCI+XHJcbiAgICAgICAgICAgICAgICAgIHtvcmRlci5vcmRlcl90eXBlfVxyXG4gICAgICAgICAgICAgICAgPC9wPlxyXG4gICAgICAgICAgICAgICAgPHAgY2xhc3NOYW1lPVwidGV4dC1zbSB0ZXh0LW11dGVkLWZvcmVncm91bmQgdy0xLzQgaW5saW5lLWJsb2NrXCI+XHJcbiAgICAgICAgICAgICAgICAgIHtvcmRlci5vcmRlcl9kYXRlfVxyXG4gICAgICAgICAgICAgICAgPC9wPlxyXG4gICAgICAgICAgICAgIDwvQ2FyZENvbnRlbnQ+XHJcbiAgICAgICAgICAgIDwvQ2FyZD5cclxuICAgICAgICAgIDwvRGlhbG9nVHJpZ2dlcj5cclxuICAgICAgICAgIDxEaWFsb2dDb250ZW50IGNsYXNzTmFtZT1cInctNS82XCI+XHJcbiAgICAgICAgICAgIDxEaWFsb2dIZWFkZXI+XHJcbiAgICAgICAgICAgICAgPERpYWxvZ1RpdGxlPk9yZGVyIGRldGFpbDwvRGlhbG9nVGl0bGU+XHJcbiAgICAgICAgICAgIDwvRGlhbG9nSGVhZGVyPlxyXG4gICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImZsZXggZmxleC1jb2xcIj5cclxuICAgICAgICAgICAgICA8cCBjbGFzc05hbWU9XCJ0ZXh0LW1kXCI+e29yZGVyLmN1c3RvbWVyX25hbWV9PC9wPlxyXG4gICAgICAgICAgICAgIDxwIGNsYXNzTmFtZT1cInRleHQtc21hbGwgdGV4dC1tdXRlZC1mb3JlZ3JvdW5kXCI+XHJcbiAgICAgICAgICAgICAgICB7b3JkZXIuY3VzdG9tZXJfaWR9XHJcbiAgICAgICAgICAgICAgPC9wPlxyXG4gICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgey8qIDxwPkN1c3RvbWVyIE5hbWU6IHtvcmRlci5jdXN0b21lcl9uYW1lfTwvcD5cclxuICAgICAgICAgICAgPHA+Q3VzdG9tZXIgSUQ6IHtvcmRlci5jdXN0b21lcl9pZH08L3A+ICovfVxyXG4gICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInNwYWNlLXktMlwiPlxyXG4gICAgICAgICAgICAgIDxwPk9yZGVyIFR5cGU6IHtvcmRlci5vcmRlcl90eXBlfTwvcD5cclxuICAgICAgICAgICAgICA8cD5PcmRlciBEYXRlOiB7b3JkZXIub3JkZXJfZGF0ZX08L3A+XHJcbiAgICAgICAgICAgICAgPFNlcGFyYXRvciAvPlxyXG4gICAgICAgICAgICAgIHtvcmRlci5leHBlY3RhdGlvbnMubWFwKChleHBlY3RhdGlvbiwgaW5kZXgpID0+IChcclxuICAgICAgICAgICAgICAgIDxkaXYga2V5PXtpbmRleH0gY2xhc3NOYW1lPVwic3BhY2UteS0yXCI+XHJcbiAgICAgICAgICAgICAgICAgIDxwPkxvY2F0aW9uOiB7ZXhwZWN0YXRpb24ubG9jYXRpb259PC9wPlxyXG4gICAgICAgICAgICAgICAgICA8cD5TdGFydCBEYXRlOiB7ZXhwZWN0YXRpb24uc3RhcnRfZGF0ZX08L3A+XHJcbiAgICAgICAgICAgICAgICAgIDxwPkVuZCBEYXRlOiB7ZXhwZWN0YXRpb24uZW5kX2RhdGV9PC9wPlxyXG4gICAgICAgICAgICAgICAgICA8cD5TdGFydCBUaW1lOiB7ZXhwZWN0YXRpb24uc3RhcnRfdGltZX08L3A+XHJcbiAgICAgICAgICAgICAgICAgIDxwPkVuZCBUaW1lOiB7ZXhwZWN0YXRpb24uZW5kX3RpbWV9PC9wPlxyXG4gICAgICAgICAgICAgICAgICA8U2VwYXJhdG9yIC8+XHJcbiAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICApKX1cclxuICAgICAgICAgICAgICA8cD5TZXJ2aWNlIEZlZToge29yZGVyLnNlcnZpY2VfZmVlfTwvcD5cclxuICAgICAgICAgICAgICA8cD5DYW5jZWxsZWQgRGF0ZToge29yZGVyLmNhbmNlbGxlZF9kYXRlfTwvcD5cclxuICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICA8L0RpYWxvZ0NvbnRlbnQ+XHJcbiAgICAgICAgPC9EaWFsb2c+XHJcbiAgICAgICkpfVxyXG4gICAgPC9kaXY+XHJcbiAgKVxyXG59XHJcbiJdLCJuYW1lcyI6WyJTZXBhcmF0b3IiLCJEaWFsb2ciLCJEaWFsb2dIZWFkZXIiLCJEaWFsb2dUaXRsZSIsIkRpYWxvZ1RyaWdnZXIiLCJEaWFsb2dDb250ZW50IiwiQ2FyZCIsIkNhcmRDb250ZW50IiwiQ2FyZEhlYWRlciIsIkNhcmRUaXRsZSIsIm9yZGVycyIsIm9yZGVyX2lkIiwib3JkZXJfZGF0ZSIsImN1c3RvbWVyX2lkIiwiY3VzdG9tZXJfbmFtZSIsIm9yZGVyX3R5cGUiLCJleHBlY3RhdGlvbnMiLCJsb2NhdGlvbiIsInN0YXJ0X2RhdGUiLCJlbmRfZGF0ZSIsInN0YXJ0X3RpbWUiLCJlbmRfdGltZSIsInNlcnZpY2VfZmVlIiwiY2FuY2VsbGVkX2RhdGUiLCJDYW5jZWxsZWRNb2JpbGUiLCJkaXYiLCJtYXAiLCJvcmRlciIsImNsYXNzTmFtZSIsInAiLCJleHBlY3RhdGlvbiIsImluZGV4Il0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///(app-pages-browser)/./src/components/mobile/CancelledMobile.tsx\n"));

/***/ })

});