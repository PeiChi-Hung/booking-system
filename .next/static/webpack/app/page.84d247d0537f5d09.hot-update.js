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

/***/ "(app-pages-browser)/./src/components/UnpaidTask.tsx":
/*!***************************************!*\
  !*** ./src/components/UnpaidTask.tsx ***!
  \***************************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": function() { return /* binding */ UnpaidTask; }\n/* harmony export */ });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"(app-pages-browser)/./node_modules/next/dist/compiled/react/jsx-dev-runtime.js\");\n/* harmony import */ var _components_ui_table__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @/components/ui/table */ \"(app-pages-browser)/./src/components/ui/table.tsx\");\n\n\nconst orders = [\n    {\n        order_id: \"ORD001\",\n        order_date: \"2023/04/01\",\n        customer_id: \"1\",\n        customer_name: \"Alpha\",\n        start_dates: [\n            \"2023/05/01\",\n            \"2023/05/02\"\n        ],\n        start_times: [\n            \"09:00\",\n            \"09:00\"\n        ],\n        end_dates: [\n            \"2023/05/10\",\n            \"2023/05/11\"\n        ],\n        end_times: [\n            \"13:00\",\n            \"14:00\"\n        ],\n        order_type: \"Type 1\",\n        location: \"Springvale\",\n        service_fee: \"$250\"\n    },\n    {\n        order_id: \"ORD002\",\n        order_date: \"2023/05/01\",\n        customer_id: \"2\",\n        customer_name: \"Beta\",\n        start_dates: [\n            \"2023/05/04\"\n        ],\n        start_times: [\n            \"09:00\"\n        ],\n        end_dates: [\n            \"2023/11/20\"\n        ],\n        end_times: [\n            \"11:00\"\n        ],\n        order_type: \"Type 2\",\n        location: \"CBD\",\n        service_fee: \"$350\"\n    },\n    {\n        order_id: \"ORD003\",\n        order_date: \"2023/05/04\",\n        customer_id: \"3\",\n        customer_name: \"Gamma\",\n        start_dates: [\n            \"2023/07/29\"\n        ],\n        start_times: [\n            \"09:00\"\n        ],\n        end_dates: [\n            \"2023/09/29\"\n        ],\n        end_times: [\n            \"23:00\"\n        ],\n        order_type: \"Type 3\",\n        location: \"Wheelers Hill\",\n        service_fee: \"$240\"\n    },\n    {\n        order_id: \"ORD004\",\n        order_date: \"2023/05/11\",\n        customer_id: \"4\",\n        customer_name: \"Lambda\",\n        start_dates: [\n            \"2023/07/04\"\n        ],\n        start_times: [\n            \"07:00\"\n        ],\n        end_dates: [\n            \"2023/09/04\"\n        ],\n        end_times: [\n            \"09:00\"\n        ],\n        order_type: \"Type 4\",\n        location: \"Clayton\",\n        service_fee: \"$200\"\n    }\n];\nfunction UnpaidTask() {\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_ui_table__WEBPACK_IMPORTED_MODULE_1__.Table, {\n        children: [\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_ui_table__WEBPACK_IMPORTED_MODULE_1__.TableHeader, {\n                children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_ui_table__WEBPACK_IMPORTED_MODULE_1__.TableRow, {\n                    children: [\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_ui_table__WEBPACK_IMPORTED_MODULE_1__.TableHead, {\n                            className: \"w-[100px]\",\n                            children: \"Order Date\"\n                        }, void 0, false, {\n                            fileName: \"C:\\\\Users\\\\ASUS\\\\Documents\\\\booking-system\\\\src\\\\components\\\\UnpaidTask.tsx\",\n                            lineNumber: 70,\n                            columnNumber: 11\n                        }, this),\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_ui_table__WEBPACK_IMPORTED_MODULE_1__.TableHead, {\n                            children: \"Customer ID\"\n                        }, void 0, false, {\n                            fileName: \"C:\\\\Users\\\\ASUS\\\\Documents\\\\booking-system\\\\src\\\\components\\\\UnpaidTask.tsx\",\n                            lineNumber: 71,\n                            columnNumber: 11\n                        }, this),\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_ui_table__WEBPACK_IMPORTED_MODULE_1__.TableHead, {\n                            children: \"Customer Name\"\n                        }, void 0, false, {\n                            fileName: \"C:\\\\Users\\\\ASUS\\\\Documents\\\\booking-system\\\\src\\\\components\\\\UnpaidTask.tsx\",\n                            lineNumber: 72,\n                            columnNumber: 11\n                        }, this),\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_ui_table__WEBPACK_IMPORTED_MODULE_1__.TableHead, {\n                            className: \"text-right\",\n                            children: \"Order Type\"\n                        }, void 0, false, {\n                            fileName: \"C:\\\\Users\\\\ASUS\\\\Documents\\\\booking-system\\\\src\\\\components\\\\UnpaidTask.tsx\",\n                            lineNumber: 73,\n                            columnNumber: 11\n                        }, this),\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_ui_table__WEBPACK_IMPORTED_MODULE_1__.TableHead, {\n                            className: \"text-right\",\n                            children: \"Location\"\n                        }, void 0, false, {\n                            fileName: \"C:\\\\Users\\\\ASUS\\\\Documents\\\\booking-system\\\\src\\\\components\\\\UnpaidTask.tsx\",\n                            lineNumber: 75,\n                            columnNumber: 11\n                        }, this),\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_ui_table__WEBPACK_IMPORTED_MODULE_1__.TableHead, {\n                            className: \"text-right\",\n                            children: \"Start Date\"\n                        }, void 0, false, {\n                            fileName: \"C:\\\\Users\\\\ASUS\\\\Documents\\\\booking-system\\\\src\\\\components\\\\UnpaidTask.tsx\",\n                            lineNumber: 76,\n                            columnNumber: 11\n                        }, this),\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_ui_table__WEBPACK_IMPORTED_MODULE_1__.TableHead, {\n                            className: \"text-right\",\n                            children: \"End Date\"\n                        }, void 0, false, {\n                            fileName: \"C:\\\\Users\\\\ASUS\\\\Documents\\\\booking-system\\\\src\\\\components\\\\UnpaidTask.tsx\",\n                            lineNumber: 77,\n                            columnNumber: 11\n                        }, this),\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_ui_table__WEBPACK_IMPORTED_MODULE_1__.TableHead, {\n                            className: \"text-right\",\n                            children: \"Start Time\"\n                        }, void 0, false, {\n                            fileName: \"C:\\\\Users\\\\ASUS\\\\Documents\\\\booking-system\\\\src\\\\components\\\\UnpaidTask.tsx\",\n                            lineNumber: 78,\n                            columnNumber: 11\n                        }, this),\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_ui_table__WEBPACK_IMPORTED_MODULE_1__.TableHead, {\n                            className: \"text-right\",\n                            children: \"End Time\"\n                        }, void 0, false, {\n                            fileName: \"C:\\\\Users\\\\ASUS\\\\Documents\\\\booking-system\\\\src\\\\components\\\\UnpaidTask.tsx\",\n                            lineNumber: 79,\n                            columnNumber: 11\n                        }, this),\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_ui_table__WEBPACK_IMPORTED_MODULE_1__.TableHead, {\n                            className: \"text-right\",\n                            children: \"Comment\"\n                        }, void 0, false, {\n                            fileName: \"C:\\\\Users\\\\ASUS\\\\Documents\\\\booking-system\\\\src\\\\components\\\\UnpaidTask.tsx\",\n                            lineNumber: 80,\n                            columnNumber: 11\n                        }, this),\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_ui_table__WEBPACK_IMPORTED_MODULE_1__.TableHead, {\n                            className: \"text-right\",\n                            children: \"Service Fee\"\n                        }, void 0, false, {\n                            fileName: \"C:\\\\Users\\\\ASUS\\\\Documents\\\\booking-system\\\\src\\\\components\\\\UnpaidTask.tsx\",\n                            lineNumber: 81,\n                            columnNumber: 11\n                        }, this)\n                    ]\n                }, void 0, true, {\n                    fileName: \"C:\\\\Users\\\\ASUS\\\\Documents\\\\booking-system\\\\src\\\\components\\\\UnpaidTask.tsx\",\n                    lineNumber: 69,\n                    columnNumber: 9\n                }, this)\n            }, void 0, false, {\n                fileName: \"C:\\\\Users\\\\ASUS\\\\Documents\\\\booking-system\\\\src\\\\components\\\\UnpaidTask.tsx\",\n                lineNumber: 68,\n                columnNumber: 7\n            }, this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_ui_table__WEBPACK_IMPORTED_MODULE_1__.TableBody, {\n                children: orders.map((order)=>/*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_ui_table__WEBPACK_IMPORTED_MODULE_1__.TableRow, {\n                        children: [\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_ui_table__WEBPACK_IMPORTED_MODULE_1__.TableCell, {\n                                className: \"font-medium\",\n                                children: order.order_date\n                            }, void 0, false, {\n                                fileName: \"C:\\\\Users\\\\ASUS\\\\Documents\\\\booking-system\\\\src\\\\components\\\\UnpaidTask.tsx\",\n                                lineNumber: 87,\n                                columnNumber: 13\n                            }, this),\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_ui_table__WEBPACK_IMPORTED_MODULE_1__.TableCell, {\n                                children: order.customer_id\n                            }, void 0, false, {\n                                fileName: \"C:\\\\Users\\\\ASUS\\\\Documents\\\\booking-system\\\\src\\\\components\\\\UnpaidTask.tsx\",\n                                lineNumber: 88,\n                                columnNumber: 13\n                            }, this),\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_ui_table__WEBPACK_IMPORTED_MODULE_1__.TableCell, {\n                                children: order.customer_name\n                            }, void 0, false, {\n                                fileName: \"C:\\\\Users\\\\ASUS\\\\Documents\\\\booking-system\\\\src\\\\components\\\\UnpaidTask.tsx\",\n                                lineNumber: 89,\n                                columnNumber: 13\n                            }, this),\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_ui_table__WEBPACK_IMPORTED_MODULE_1__.TableCell, {\n                                className: \"text-right\",\n                                children: order.order_type\n                            }, void 0, false, {\n                                fileName: \"C:\\\\Users\\\\ASUS\\\\Documents\\\\booking-system\\\\src\\\\components\\\\UnpaidTask.tsx\",\n                                lineNumber: 90,\n                                columnNumber: 13\n                            }, this),\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_ui_table__WEBPACK_IMPORTED_MODULE_1__.TableCell, {\n                                className: \"text-right\",\n                                children: order.location\n                            }, void 0, false, {\n                                fileName: \"C:\\\\Users\\\\ASUS\\\\Documents\\\\booking-system\\\\src\\\\components\\\\UnpaidTask.tsx\",\n                                lineNumber: 91,\n                                columnNumber: 13\n                            }, this),\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_ui_table__WEBPACK_IMPORTED_MODULE_1__.TableCell, {\n                                className: \"text-right\",\n                                children: order.start_dates.map((date, index)=>/*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"ul\", {\n                                        children: date\n                                    }, index, false, {\n                                        fileName: \"C:\\\\Users\\\\ASUS\\\\Documents\\\\booking-system\\\\src\\\\components\\\\UnpaidTask.tsx\",\n                                        lineNumber: 94,\n                                        columnNumber: 17\n                                    }, this))\n                            }, void 0, false, {\n                                fileName: \"C:\\\\Users\\\\ASUS\\\\Documents\\\\booking-system\\\\src\\\\components\\\\UnpaidTask.tsx\",\n                                lineNumber: 92,\n                                columnNumber: 13\n                            }, this),\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_ui_table__WEBPACK_IMPORTED_MODULE_1__.TableCell, {\n                                className: \"text-right\",\n                                children: order.end_dates.map((date, index)=>/*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"ul\", {\n                                        children: date\n                                    }, index, false, {\n                                        fileName: \"C:\\\\Users\\\\ASUS\\\\Documents\\\\booking-system\\\\src\\\\components\\\\UnpaidTask.tsx\",\n                                        lineNumber: 99,\n                                        columnNumber: 17\n                                    }, this))\n                            }, void 0, false, {\n                                fileName: \"C:\\\\Users\\\\ASUS\\\\Documents\\\\booking-system\\\\src\\\\components\\\\UnpaidTask.tsx\",\n                                lineNumber: 97,\n                                columnNumber: 13\n                            }, this),\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_ui_table__WEBPACK_IMPORTED_MODULE_1__.TableCell, {\n                                className: \"text-right\",\n                                children: order.start_times.map((time, index)=>/*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"ul\", {\n                                        children: time\n                                    }, index, false, {\n                                        fileName: \"C:\\\\Users\\\\ASUS\\\\Documents\\\\booking-system\\\\src\\\\components\\\\UnpaidTask.tsx\",\n                                        lineNumber: 104,\n                                        columnNumber: 17\n                                    }, this))\n                            }, void 0, false, {\n                                fileName: \"C:\\\\Users\\\\ASUS\\\\Documents\\\\booking-system\\\\src\\\\components\\\\UnpaidTask.tsx\",\n                                lineNumber: 102,\n                                columnNumber: 13\n                            }, this),\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_ui_table__WEBPACK_IMPORTED_MODULE_1__.TableCell, {\n                                className: \"text-right\",\n                                children: order.end_times.map((time, index)=>/*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"ul\", {\n                                        children: time\n                                    }, index, false, {\n                                        fileName: \"C:\\\\Users\\\\ASUS\\\\Documents\\\\booking-system\\\\src\\\\components\\\\UnpaidTask.tsx\",\n                                        lineNumber: 109,\n                                        columnNumber: 17\n                                    }, this))\n                            }, void 0, false, {\n                                fileName: \"C:\\\\Users\\\\ASUS\\\\Documents\\\\booking-system\\\\src\\\\components\\\\UnpaidTask.tsx\",\n                                lineNumber: 107,\n                                columnNumber: 13\n                            }, this),\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_ui_table__WEBPACK_IMPORTED_MODULE_1__.TableCell, {}, void 0, false, {\n                                fileName: \"C:\\\\Users\\\\ASUS\\\\Documents\\\\booking-system\\\\src\\\\components\\\\UnpaidTask.tsx\",\n                                lineNumber: 112,\n                                columnNumber: 13\n                            }, this),\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_ui_table__WEBPACK_IMPORTED_MODULE_1__.TableCell, {\n                                className: \"text-right\",\n                                children: order.service_fee\n                            }, void 0, false, {\n                                fileName: \"C:\\\\Users\\\\ASUS\\\\Documents\\\\booking-system\\\\src\\\\components\\\\UnpaidTask.tsx\",\n                                lineNumber: 113,\n                                columnNumber: 13\n                            }, this)\n                        ]\n                    }, order.order_id, true, {\n                        fileName: \"C:\\\\Users\\\\ASUS\\\\Documents\\\\booking-system\\\\src\\\\components\\\\UnpaidTask.tsx\",\n                        lineNumber: 86,\n                        columnNumber: 11\n                    }, this))\n            }, void 0, false, {\n                fileName: \"C:\\\\Users\\\\ASUS\\\\Documents\\\\booking-system\\\\src\\\\components\\\\UnpaidTask.tsx\",\n                lineNumber: 84,\n                columnNumber: 7\n            }, this)\n        ]\n    }, void 0, true, {\n        fileName: \"C:\\\\Users\\\\ASUS\\\\Documents\\\\booking-system\\\\src\\\\components\\\\UnpaidTask.tsx\",\n        lineNumber: 67,\n        columnNumber: 5\n    }, this);\n}\n_c = UnpaidTask;\nvar _c;\n$RefreshReg$(_c, \"UnpaidTask\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports on update so we can compare the boundary\n                // signatures.\n                module.hot.dispose(function (data) {\n                    data.prevExports = currentExports;\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevExports !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevExports !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKGFwcC1wYWdlcy1icm93c2VyKS8uL3NyYy9jb21wb25lbnRzL1VucGFpZFRhc2sudHN4IiwibWFwcGluZ3MiOiI7Ozs7Ozs7QUFPOEI7QUFFOUIsTUFBTU0sU0FBUztJQUNiO1FBQ0VDLFVBQVU7UUFDVkMsWUFBWTtRQUNaQyxhQUFhO1FBQ2JDLGVBQWU7UUFDZkMsYUFBYTtZQUFDO1lBQWM7U0FBYTtRQUN6Q0MsYUFBYTtZQUFDO1lBQVM7U0FBUTtRQUMvQkMsV0FBVztZQUFDO1lBQWM7U0FBYTtRQUN2Q0MsV0FBVztZQUFDO1lBQVM7U0FBUTtRQUM3QkMsWUFBWTtRQUNaQyxVQUFVO1FBQ1ZDLGFBQWE7SUFDZjtJQUNBO1FBQ0VWLFVBQVU7UUFDVkMsWUFBWTtRQUNaQyxhQUFhO1FBQ2JDLGVBQWU7UUFDZkMsYUFBYTtZQUFDO1NBQWE7UUFDM0JDLGFBQWE7WUFBQztTQUFRO1FBQ3RCQyxXQUFXO1lBQUM7U0FBYTtRQUN6QkMsV0FBVztZQUFDO1NBQVE7UUFDcEJDLFlBQVk7UUFDWkMsVUFBVTtRQUNWQyxhQUFhO0lBQ2Y7SUFDQTtRQUNFVixVQUFVO1FBQ1ZDLFlBQVk7UUFDWkMsYUFBYTtRQUNiQyxlQUFlO1FBQ2ZDLGFBQWE7WUFBQztTQUFhO1FBQzNCQyxhQUFhO1lBQUM7U0FBUTtRQUN0QkMsV0FBVztZQUFDO1NBQWE7UUFDekJDLFdBQVc7WUFBQztTQUFRO1FBQ3BCQyxZQUFZO1FBQ1pDLFVBQVU7UUFDVkMsYUFBYTtJQUNmO0lBQ0E7UUFDRVYsVUFBVTtRQUNWQyxZQUFZO1FBQ1pDLGFBQWE7UUFDYkMsZUFBZTtRQUNmQyxhQUFhO1lBQUM7U0FBYTtRQUMzQkMsYUFBYTtZQUFDO1NBQVE7UUFDdEJDLFdBQVc7WUFBQztTQUFhO1FBQ3pCQyxXQUFXO1lBQUM7U0FBUTtRQUNwQkMsWUFBWTtRQUNaQyxVQUFVO1FBQ1ZDLGFBQWE7SUFDZjtDQUNEO0FBRWMsU0FBU0M7SUFDdEIscUJBQ0UsOERBQUNsQix1REFBS0E7OzBCQUNKLDhEQUFDSSw2REFBV0E7MEJBQ1YsNEVBQUNDLDBEQUFRQTs7c0NBQ1AsOERBQUNGLDJEQUFTQTs0QkFBQ2dCLFdBQVU7c0NBQVk7Ozs7OztzQ0FDakMsOERBQUNoQiwyREFBU0E7c0NBQUM7Ozs7OztzQ0FDWCw4REFBQ0EsMkRBQVNBO3NDQUFDOzs7Ozs7c0NBQ1gsOERBQUNBLDJEQUFTQTs0QkFBQ2dCLFdBQVU7c0NBQWE7Ozs7OztzQ0FFbEMsOERBQUNoQiwyREFBU0E7NEJBQUNnQixXQUFVO3NDQUFhOzs7Ozs7c0NBQ2xDLDhEQUFDaEIsMkRBQVNBOzRCQUFDZ0IsV0FBVTtzQ0FBYTs7Ozs7O3NDQUNsQyw4REFBQ2hCLDJEQUFTQTs0QkFBQ2dCLFdBQVU7c0NBQWE7Ozs7OztzQ0FDbEMsOERBQUNoQiwyREFBU0E7NEJBQUNnQixXQUFVO3NDQUFhOzs7Ozs7c0NBQ2xDLDhEQUFDaEIsMkRBQVNBOzRCQUFDZ0IsV0FBVTtzQ0FBYTs7Ozs7O3NDQUNsQyw4REFBQ2hCLDJEQUFTQTs0QkFBQ2dCLFdBQVU7c0NBQWE7Ozs7OztzQ0FDbEMsOERBQUNoQiwyREFBU0E7NEJBQUNnQixXQUFVO3NDQUFhOzs7Ozs7Ozs7Ozs7Ozs7OzswQkFHdEMsOERBQUNsQiwyREFBU0E7MEJBQ1BLLE9BQU9jLEdBQUcsQ0FBQyxDQUFDQyxzQkFDWCw4REFBQ2hCLDBEQUFRQTs7MENBQ1AsOERBQUNILDJEQUFTQTtnQ0FBQ2lCLFdBQVU7MENBQWVFLE1BQU1iLFVBQVU7Ozs7OzswQ0FDcEQsOERBQUNOLDJEQUFTQTswQ0FBRW1CLE1BQU1aLFdBQVc7Ozs7OzswQ0FDN0IsOERBQUNQLDJEQUFTQTswQ0FBRW1CLE1BQU1YLGFBQWE7Ozs7OzswQ0FDL0IsOERBQUNSLDJEQUFTQTtnQ0FBQ2lCLFdBQVU7MENBQWNFLE1BQU1OLFVBQVU7Ozs7OzswQ0FDbkQsOERBQUNiLDJEQUFTQTtnQ0FBQ2lCLFdBQVU7MENBQWNFLE1BQU1MLFFBQVE7Ozs7OzswQ0FDakQsOERBQUNkLDJEQUFTQTtnQ0FBQ2lCLFdBQVU7MENBQ2xCRSxNQUFNVixXQUFXLENBQUNTLEdBQUcsQ0FBQyxDQUFDRSxNQUFNQyxzQkFDNUIsOERBQUNDO2tEQUFnQkY7dUNBQVJDOzs7Ozs7Ozs7OzBDQUdiLDhEQUFDckIsMkRBQVNBO2dDQUFDaUIsV0FBVTswQ0FDbEJFLE1BQU1SLFNBQVMsQ0FBQ08sR0FBRyxDQUFDLENBQUNFLE1BQU1DLHNCQUMxQiw4REFBQ0M7a0RBQWdCRjt1Q0FBUkM7Ozs7Ozs7Ozs7MENBR2IsOERBQUNyQiwyREFBU0E7Z0NBQUNpQixXQUFVOzBDQUNsQkUsTUFBTVQsV0FBVyxDQUFDUSxHQUFHLENBQUMsQ0FBQ0ssTUFBTUYsc0JBQzVCLDhEQUFDQztrREFBZ0JDO3VDQUFSRjs7Ozs7Ozs7OzswQ0FHYiw4REFBQ3JCLDJEQUFTQTtnQ0FBQ2lCLFdBQVU7MENBQ2xCRSxNQUFNUCxTQUFTLENBQUNNLEdBQUcsQ0FBQyxDQUFDSyxNQUFNRixzQkFDMUIsOERBQUNDO2tEQUFnQkM7dUNBQVJGOzs7Ozs7Ozs7OzBDQUdiLDhEQUFDckIsMkRBQVNBOzs7OzswQ0FDViw4REFBQ0EsMkRBQVNBO2dDQUFDaUIsV0FBVTswQ0FBY0UsTUFBTUosV0FBVzs7Ozs7Ozt1QkEzQnZDSSxNQUFNZCxRQUFROzs7Ozs7Ozs7Ozs7Ozs7O0FBaUN2QztLQXREd0JXIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vX05fRS8uL3NyYy9jb21wb25lbnRzL1VucGFpZFRhc2sudHN4P2RiYmUiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHtcclxuICBUYWJsZSxcclxuICBUYWJsZUJvZHksXHJcbiAgVGFibGVDZWxsLFxyXG4gIFRhYmxlSGVhZCxcclxuICBUYWJsZUhlYWRlcixcclxuICBUYWJsZVJvdyxcclxufSBmcm9tIFwiQC9jb21wb25lbnRzL3VpL3RhYmxlXCJcclxuXHJcbmNvbnN0IG9yZGVycyA9IFtcclxuICB7XHJcbiAgICBvcmRlcl9pZDogXCJPUkQwMDFcIixcclxuICAgIG9yZGVyX2RhdGU6IFwiMjAyMy8wNC8wMVwiLFxyXG4gICAgY3VzdG9tZXJfaWQ6IFwiMVwiLFxyXG4gICAgY3VzdG9tZXJfbmFtZTogXCJBbHBoYVwiLFxyXG4gICAgc3RhcnRfZGF0ZXM6IFtcIjIwMjMvMDUvMDFcIiwgXCIyMDIzLzA1LzAyXCJdLFxyXG4gICAgc3RhcnRfdGltZXM6IFtcIjA5OjAwXCIsIFwiMDk6MDBcIl0sXHJcbiAgICBlbmRfZGF0ZXM6IFtcIjIwMjMvMDUvMTBcIiwgXCIyMDIzLzA1LzExXCJdLFxyXG4gICAgZW5kX3RpbWVzOiBbXCIxMzowMFwiLCBcIjE0OjAwXCJdLFxyXG4gICAgb3JkZXJfdHlwZTogXCJUeXBlIDFcIixcclxuICAgIGxvY2F0aW9uOiBcIlNwcmluZ3ZhbGVcIixcclxuICAgIHNlcnZpY2VfZmVlOiBcIiQyNTBcIixcclxuICB9LFxyXG4gIHtcclxuICAgIG9yZGVyX2lkOiBcIk9SRDAwMlwiLFxyXG4gICAgb3JkZXJfZGF0ZTogXCIyMDIzLzA1LzAxXCIsXHJcbiAgICBjdXN0b21lcl9pZDogXCIyXCIsXHJcbiAgICBjdXN0b21lcl9uYW1lOiBcIkJldGFcIixcclxuICAgIHN0YXJ0X2RhdGVzOiBbXCIyMDIzLzA1LzA0XCJdLFxyXG4gICAgc3RhcnRfdGltZXM6IFtcIjA5OjAwXCJdLFxyXG4gICAgZW5kX2RhdGVzOiBbXCIyMDIzLzExLzIwXCJdLFxyXG4gICAgZW5kX3RpbWVzOiBbXCIxMTowMFwiXSxcclxuICAgIG9yZGVyX3R5cGU6IFwiVHlwZSAyXCIsXHJcbiAgICBsb2NhdGlvbjogXCJDQkRcIixcclxuICAgIHNlcnZpY2VfZmVlOiBcIiQzNTBcIixcclxuICB9LFxyXG4gIHtcclxuICAgIG9yZGVyX2lkOiBcIk9SRDAwM1wiLFxyXG4gICAgb3JkZXJfZGF0ZTogXCIyMDIzLzA1LzA0XCIsXHJcbiAgICBjdXN0b21lcl9pZDogXCIzXCIsXHJcbiAgICBjdXN0b21lcl9uYW1lOiBcIkdhbW1hXCIsXHJcbiAgICBzdGFydF9kYXRlczogW1wiMjAyMy8wNy8yOVwiXSxcclxuICAgIHN0YXJ0X3RpbWVzOiBbXCIwOTowMFwiXSxcclxuICAgIGVuZF9kYXRlczogW1wiMjAyMy8wOS8yOVwiXSxcclxuICAgIGVuZF90aW1lczogW1wiMjM6MDBcIl0sXHJcbiAgICBvcmRlcl90eXBlOiBcIlR5cGUgM1wiLFxyXG4gICAgbG9jYXRpb246IFwiV2hlZWxlcnMgSGlsbFwiLFxyXG4gICAgc2VydmljZV9mZWU6IFwiJDI0MFwiLFxyXG4gIH0sXHJcbiAge1xyXG4gICAgb3JkZXJfaWQ6IFwiT1JEMDA0XCIsXHJcbiAgICBvcmRlcl9kYXRlOiBcIjIwMjMvMDUvMTFcIixcclxuICAgIGN1c3RvbWVyX2lkOiBcIjRcIixcclxuICAgIGN1c3RvbWVyX25hbWU6IFwiTGFtYmRhXCIsXHJcbiAgICBzdGFydF9kYXRlczogW1wiMjAyMy8wNy8wNFwiXSxcclxuICAgIHN0YXJ0X3RpbWVzOiBbXCIwNzowMFwiXSxcclxuICAgIGVuZF9kYXRlczogW1wiMjAyMy8wOS8wNFwiXSxcclxuICAgIGVuZF90aW1lczogW1wiMDk6MDBcIl0sXHJcbiAgICBvcmRlcl90eXBlOiBcIlR5cGUgNFwiLFxyXG4gICAgbG9jYXRpb246IFwiQ2xheXRvblwiLFxyXG4gICAgc2VydmljZV9mZWU6IFwiJDIwMFwiLFxyXG4gIH0sXHJcbl1cclxuXHJcbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIFVucGFpZFRhc2soKSB7XHJcbiAgcmV0dXJuIChcclxuICAgIDxUYWJsZT5cclxuICAgICAgPFRhYmxlSGVhZGVyPlxyXG4gICAgICAgIDxUYWJsZVJvdz5cclxuICAgICAgICAgIDxUYWJsZUhlYWQgY2xhc3NOYW1lPVwidy1bMTAwcHhdXCI+T3JkZXIgRGF0ZTwvVGFibGVIZWFkPlxyXG4gICAgICAgICAgPFRhYmxlSGVhZD5DdXN0b21lciBJRDwvVGFibGVIZWFkPlxyXG4gICAgICAgICAgPFRhYmxlSGVhZD5DdXN0b21lciBOYW1lPC9UYWJsZUhlYWQ+XHJcbiAgICAgICAgICA8VGFibGVIZWFkIGNsYXNzTmFtZT1cInRleHQtcmlnaHRcIj5PcmRlciBUeXBlPC9UYWJsZUhlYWQ+XHJcbiAgICAgICAgICB7LyogYWxsb3cgbXVsdGlwbGUgaW5wdXRzIGZvciBiZWxvdyBpbnB1dHMgKi99XHJcbiAgICAgICAgICA8VGFibGVIZWFkIGNsYXNzTmFtZT1cInRleHQtcmlnaHRcIj5Mb2NhdGlvbjwvVGFibGVIZWFkPlxyXG4gICAgICAgICAgPFRhYmxlSGVhZCBjbGFzc05hbWU9XCJ0ZXh0LXJpZ2h0XCI+U3RhcnQgRGF0ZTwvVGFibGVIZWFkPlxyXG4gICAgICAgICAgPFRhYmxlSGVhZCBjbGFzc05hbWU9XCJ0ZXh0LXJpZ2h0XCI+RW5kIERhdGU8L1RhYmxlSGVhZD5cclxuICAgICAgICAgIDxUYWJsZUhlYWQgY2xhc3NOYW1lPVwidGV4dC1yaWdodFwiPlN0YXJ0IFRpbWU8L1RhYmxlSGVhZD5cclxuICAgICAgICAgIDxUYWJsZUhlYWQgY2xhc3NOYW1lPVwidGV4dC1yaWdodFwiPkVuZCBUaW1lPC9UYWJsZUhlYWQ+XHJcbiAgICAgICAgICA8VGFibGVIZWFkIGNsYXNzTmFtZT1cInRleHQtcmlnaHRcIj5Db21tZW50PC9UYWJsZUhlYWQ+XHJcbiAgICAgICAgICA8VGFibGVIZWFkIGNsYXNzTmFtZT1cInRleHQtcmlnaHRcIj5TZXJ2aWNlIEZlZTwvVGFibGVIZWFkPlxyXG4gICAgICAgIDwvVGFibGVSb3c+XHJcbiAgICAgIDwvVGFibGVIZWFkZXI+XHJcbiAgICAgIDxUYWJsZUJvZHk+XHJcbiAgICAgICAge29yZGVycy5tYXAoKG9yZGVyKSA9PiAoXHJcbiAgICAgICAgICA8VGFibGVSb3cga2V5PXtvcmRlci5vcmRlcl9pZH0+XHJcbiAgICAgICAgICAgIDxUYWJsZUNlbGwgY2xhc3NOYW1lPVwiZm9udC1tZWRpdW1cIj57b3JkZXIub3JkZXJfZGF0ZX08L1RhYmxlQ2VsbD5cclxuICAgICAgICAgICAgPFRhYmxlQ2VsbD57b3JkZXIuY3VzdG9tZXJfaWR9PC9UYWJsZUNlbGw+XHJcbiAgICAgICAgICAgIDxUYWJsZUNlbGw+e29yZGVyLmN1c3RvbWVyX25hbWV9PC9UYWJsZUNlbGw+XHJcbiAgICAgICAgICAgIDxUYWJsZUNlbGwgY2xhc3NOYW1lPVwidGV4dC1yaWdodFwiPntvcmRlci5vcmRlcl90eXBlfTwvVGFibGVDZWxsPlxyXG4gICAgICAgICAgICA8VGFibGVDZWxsIGNsYXNzTmFtZT1cInRleHQtcmlnaHRcIj57b3JkZXIubG9jYXRpb259PC9UYWJsZUNlbGw+XHJcbiAgICAgICAgICAgIDxUYWJsZUNlbGwgY2xhc3NOYW1lPVwidGV4dC1yaWdodFwiPlxyXG4gICAgICAgICAgICAgIHtvcmRlci5zdGFydF9kYXRlcy5tYXAoKGRhdGUsIGluZGV4KSA9PiAoXHJcbiAgICAgICAgICAgICAgICA8dWwga2V5PXtpbmRleH0+e2RhdGV9PC91bD5cclxuICAgICAgICAgICAgICApKX1cclxuICAgICAgICAgICAgPC9UYWJsZUNlbGw+XHJcbiAgICAgICAgICAgIDxUYWJsZUNlbGwgY2xhc3NOYW1lPVwidGV4dC1yaWdodFwiPlxyXG4gICAgICAgICAgICAgIHtvcmRlci5lbmRfZGF0ZXMubWFwKChkYXRlLCBpbmRleCkgPT4gKFxyXG4gICAgICAgICAgICAgICAgPHVsIGtleT17aW5kZXh9PntkYXRlfTwvdWw+XHJcbiAgICAgICAgICAgICAgKSl9XHJcbiAgICAgICAgICAgIDwvVGFibGVDZWxsPlxyXG4gICAgICAgICAgICA8VGFibGVDZWxsIGNsYXNzTmFtZT1cInRleHQtcmlnaHRcIj5cclxuICAgICAgICAgICAgICB7b3JkZXIuc3RhcnRfdGltZXMubWFwKCh0aW1lLCBpbmRleCkgPT4gKFxyXG4gICAgICAgICAgICAgICAgPHVsIGtleT17aW5kZXh9Pnt0aW1lfTwvdWw+XHJcbiAgICAgICAgICAgICAgKSl9XHJcbiAgICAgICAgICAgIDwvVGFibGVDZWxsPlxyXG4gICAgICAgICAgICA8VGFibGVDZWxsIGNsYXNzTmFtZT1cInRleHQtcmlnaHRcIj5cclxuICAgICAgICAgICAgICB7b3JkZXIuZW5kX3RpbWVzLm1hcCgodGltZSwgaW5kZXgpID0+IChcclxuICAgICAgICAgICAgICAgIDx1bCBrZXk9e2luZGV4fT57dGltZX08L3VsPlxyXG4gICAgICAgICAgICAgICkpfVxyXG4gICAgICAgICAgICA8L1RhYmxlQ2VsbD5cclxuICAgICAgICAgICAgPFRhYmxlQ2VsbD48L1RhYmxlQ2VsbD5cclxuICAgICAgICAgICAgPFRhYmxlQ2VsbCBjbGFzc05hbWU9XCJ0ZXh0LXJpZ2h0XCI+e29yZGVyLnNlcnZpY2VfZmVlfTwvVGFibGVDZWxsPlxyXG4gICAgICAgICAgPC9UYWJsZVJvdz5cclxuICAgICAgICApKX1cclxuICAgICAgPC9UYWJsZUJvZHk+XHJcbiAgICA8L1RhYmxlPlxyXG4gIClcclxufVxyXG4iXSwibmFtZXMiOlsiVGFibGUiLCJUYWJsZUJvZHkiLCJUYWJsZUNlbGwiLCJUYWJsZUhlYWQiLCJUYWJsZUhlYWRlciIsIlRhYmxlUm93Iiwib3JkZXJzIiwib3JkZXJfaWQiLCJvcmRlcl9kYXRlIiwiY3VzdG9tZXJfaWQiLCJjdXN0b21lcl9uYW1lIiwic3RhcnRfZGF0ZXMiLCJzdGFydF90aW1lcyIsImVuZF9kYXRlcyIsImVuZF90aW1lcyIsIm9yZGVyX3R5cGUiLCJsb2NhdGlvbiIsInNlcnZpY2VfZmVlIiwiVW5wYWlkVGFzayIsImNsYXNzTmFtZSIsIm1hcCIsIm9yZGVyIiwiZGF0ZSIsImluZGV4IiwidWwiLCJ0aW1lIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///(app-pages-browser)/./src/components/UnpaidTask.tsx\n"));

/***/ })

});