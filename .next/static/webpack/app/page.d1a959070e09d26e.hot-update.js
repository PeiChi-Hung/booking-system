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

/***/ "(app-pages-browser)/./src/app/page.tsx":
/*!**************************!*\
  !*** ./src/app/page.tsx ***!
  \**************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": function() { return /* binding */ Home; }\n/* harmony export */ });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"(app-pages-browser)/./node_modules/next/dist/compiled/react/jsx-dev-runtime.js\");\n/* harmony import */ var _components_ui_tabs__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @/components/ui/tabs */ \"(app-pages-browser)/./src/components/ui/tabs.tsx\");\n/* harmony import */ var _components_NewOrder__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @/components/NewOrder */ \"(app-pages-browser)/./src/components/NewOrder.tsx\");\n/* harmony import */ var _components_RunningTask__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @/components/RunningTask */ \"(app-pages-browser)/./src/components/RunningTask.tsx\");\n/* harmony import */ var _components_RunningMobile__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @/components/RunningMobile */ \"(app-pages-browser)/./src/components/RunningMobile.tsx\");\n/* harmony import */ var _components_CancelledTask__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @/components/CancelledTask */ \"(app-pages-browser)/./src/components/CancelledTask.tsx\");\n/* harmony import */ var _components_PauseTask__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @/components/PauseTask */ \"(app-pages-browser)/./src/components/PauseTask.tsx\");\n/* harmony import */ var _components_PaidTask__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @/components/PaidTask */ \"(app-pages-browser)/./src/components/PaidTask.tsx\");\n/* harmony import */ var _components_UnpaidTask__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @/components/UnpaidTask */ \"(app-pages-browser)/./src/components/UnpaidTask.tsx\");\n/* harmony import */ var _components_ui_badge__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @/components/ui/badge */ \"(app-pages-browser)/./src/components/ui/badge.tsx\");\n/* harmony import */ var _lib_utils__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @/lib/utils */ \"(app-pages-browser)/./src/lib/utils.ts\");\n/* __next_internal_client_entry_do_not_use__ default auto */ \n\n\n\n\n\n\n\n\n\n\n// following numbers will be replaced by API\nconst runningCount = 4;\nconst pauseCount = 4;\nconst unpaidCount = 4;\nconst paidCount = 4;\nconst cancelledCount = 4;\nconst failedCount = 0;\nfunction Home() {\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"main\", {\n        className: \"mt-3 px-3 md:mt-5 md:px-5\",\n        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_ui_tabs__WEBPACK_IMPORTED_MODULE_1__.Tabs, {\n            defaultValue: \"running\",\n            children: [\n                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_ui_tabs__WEBPACK_IMPORTED_MODULE_1__.TabsList, {\n                    className: \"grid grid-cols-3 grid-rows-2 md:grid-cols-6 md:grid-rows-none w-full gap-3 h-full\",\n                    children: [\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_ui_tabs__WEBPACK_IMPORTED_MODULE_1__.TabsTrigger, {\n                            value: \"running\",\n                            children: [\n                                \"Running\",\n                                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_ui_badge__WEBPACK_IMPORTED_MODULE_9__.Badge, {\n                                    className: (0,_lib_utils__WEBPACK_IMPORTED_MODULE_10__.cn)(runningCount > 0 ? \"ml-2 bg-green-400\" : \"ml-2 bg-transparent\"),\n                                    children: runningCount\n                                }, void 0, false, {\n                                    fileName: \"C:\\\\Users\\\\ASUS\\\\Documents\\\\booking-system\\\\src\\\\app\\\\page.tsx\",\n                                    lineNumber: 28,\n                                    columnNumber: 13\n                                }, this)\n                            ]\n                        }, void 0, true, {\n                            fileName: \"C:\\\\Users\\\\ASUS\\\\Documents\\\\booking-system\\\\src\\\\app\\\\page.tsx\",\n                            lineNumber: 26,\n                            columnNumber: 11\n                        }, this),\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_ui_tabs__WEBPACK_IMPORTED_MODULE_1__.TabsTrigger, {\n                            value: \"paused\",\n                            children: [\n                                \"Paused\",\n                                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_ui_badge__WEBPACK_IMPORTED_MODULE_9__.Badge, {\n                                    className: (0,_lib_utils__WEBPACK_IMPORTED_MODULE_10__.cn)(pauseCount > 0 ? \"ml-2 bg-yellow-400\" : \"ml-2 bg-transparent\"),\n                                    children: pauseCount\n                                }, void 0, false, {\n                                    fileName: \"C:\\\\Users\\\\ASUS\\\\Documents\\\\booking-system\\\\src\\\\app\\\\page.tsx\",\n                                    lineNumber: 38,\n                                    columnNumber: 13\n                                }, this)\n                            ]\n                        }, void 0, true, {\n                            fileName: \"C:\\\\Users\\\\ASUS\\\\Documents\\\\booking-system\\\\src\\\\app\\\\page.tsx\",\n                            lineNumber: 36,\n                            columnNumber: 11\n                        }, this),\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_ui_tabs__WEBPACK_IMPORTED_MODULE_1__.TabsTrigger, {\n                            value: \"failed\",\n                            children: [\n                                \"Failed\",\n                                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_ui_badge__WEBPACK_IMPORTED_MODULE_9__.Badge, {\n                                    className: (0,_lib_utils__WEBPACK_IMPORTED_MODULE_10__.cn)(failedCount > 0 ? \"ml-2 bg-red-500\" : \"ml-2\"),\n                                    children: failedCount\n                                }, void 0, false, {\n                                    fileName: \"C:\\\\Users\\\\ASUS\\\\Documents\\\\booking-system\\\\src\\\\app\\\\page.tsx\",\n                                    lineNumber: 48,\n                                    columnNumber: 13\n                                }, this)\n                            ]\n                        }, void 0, true, {\n                            fileName: \"C:\\\\Users\\\\ASUS\\\\Documents\\\\booking-system\\\\src\\\\app\\\\page.tsx\",\n                            lineNumber: 46,\n                            columnNumber: 11\n                        }, this),\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_ui_tabs__WEBPACK_IMPORTED_MODULE_1__.TabsTrigger, {\n                            value: \"unpaid\",\n                            children: [\n                                \"Unpaid\",\n                                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_ui_badge__WEBPACK_IMPORTED_MODULE_9__.Badge, {\n                                    className: \"ml-2\",\n                                    children: unpaidCount\n                                }, void 0, false, {\n                                    fileName: \"C:\\\\Users\\\\ASUS\\\\Documents\\\\booking-system\\\\src\\\\app\\\\page.tsx\",\n                                    lineNumber: 54,\n                                    columnNumber: 13\n                                }, this)\n                            ]\n                        }, void 0, true, {\n                            fileName: \"C:\\\\Users\\\\ASUS\\\\Documents\\\\booking-system\\\\src\\\\app\\\\page.tsx\",\n                            lineNumber: 52,\n                            columnNumber: 11\n                        }, this),\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_ui_tabs__WEBPACK_IMPORTED_MODULE_1__.TabsTrigger, {\n                            value: \"paid\",\n                            children: [\n                                \"Paid \",\n                                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_ui_badge__WEBPACK_IMPORTED_MODULE_9__.Badge, {\n                                    className: \"ml-2\",\n                                    children: paidCount\n                                }, void 0, false, {\n                                    fileName: \"C:\\\\Users\\\\ASUS\\\\Documents\\\\booking-system\\\\src\\\\app\\\\page.tsx\",\n                                    lineNumber: 57,\n                                    columnNumber: 18\n                                }, this)\n                            ]\n                        }, void 0, true, {\n                            fileName: \"C:\\\\Users\\\\ASUS\\\\Documents\\\\booking-system\\\\src\\\\app\\\\page.tsx\",\n                            lineNumber: 56,\n                            columnNumber: 11\n                        }, this),\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_ui_tabs__WEBPACK_IMPORTED_MODULE_1__.TabsTrigger, {\n                            value: \"cancelled\",\n                            children: [\n                                \"Cancelled \",\n                                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_ui_badge__WEBPACK_IMPORTED_MODULE_9__.Badge, {\n                                    className: \"ml-2\",\n                                    children: cancelledCount\n                                }, void 0, false, {\n                                    fileName: \"C:\\\\Users\\\\ASUS\\\\Documents\\\\booking-system\\\\src\\\\app\\\\page.tsx\",\n                                    lineNumber: 60,\n                                    columnNumber: 23\n                                }, this)\n                            ]\n                        }, void 0, true, {\n                            fileName: \"C:\\\\Users\\\\ASUS\\\\Documents\\\\booking-system\\\\src\\\\app\\\\page.tsx\",\n                            lineNumber: 59,\n                            columnNumber: 11\n                        }, this)\n                    ]\n                }, void 0, true, {\n                    fileName: \"C:\\\\Users\\\\ASUS\\\\Documents\\\\booking-system\\\\src\\\\app\\\\page.tsx\",\n                    lineNumber: 25,\n                    columnNumber: 9\n                }, this),\n                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_ui_tabs__WEBPACK_IMPORTED_MODULE_1__.TabsContent, {\n                    value: \"running\",\n                    children: [\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                            className: \"my-5\",\n                            children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_NewOrder__WEBPACK_IMPORTED_MODULE_2__[\"default\"], {}, void 0, false, {\n                                fileName: \"C:\\\\Users\\\\ASUS\\\\Documents\\\\booking-system\\\\src\\\\app\\\\page.tsx\",\n                                lineNumber: 65,\n                                columnNumber: 13\n                            }, this)\n                        }, void 0, false, {\n                            fileName: \"C:\\\\Users\\\\ASUS\\\\Documents\\\\booking-system\\\\src\\\\app\\\\page.tsx\",\n                            lineNumber: 64,\n                            columnNumber: 11\n                        }, this),\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                            className: \"hidden md:block\",\n                            children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_RunningTask__WEBPACK_IMPORTED_MODULE_3__[\"default\"], {}, void 0, false, {\n                                fileName: \"C:\\\\Users\\\\ASUS\\\\Documents\\\\booking-system\\\\src\\\\app\\\\page.tsx\",\n                                lineNumber: 68,\n                                columnNumber: 13\n                            }, this)\n                        }, void 0, false, {\n                            fileName: \"C:\\\\Users\\\\ASUS\\\\Documents\\\\booking-system\\\\src\\\\app\\\\page.tsx\",\n                            lineNumber: 67,\n                            columnNumber: 11\n                        }, this),\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                            className: \"block md:hidden\",\n                            children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_RunningMobile__WEBPACK_IMPORTED_MODULE_4__[\"default\"], {}, void 0, false, {\n                                fileName: \"C:\\\\Users\\\\ASUS\\\\Documents\\\\booking-system\\\\src\\\\app\\\\page.tsx\",\n                                lineNumber: 71,\n                                columnNumber: 13\n                            }, this)\n                        }, void 0, false, {\n                            fileName: \"C:\\\\Users\\\\ASUS\\\\Documents\\\\booking-system\\\\src\\\\app\\\\page.tsx\",\n                            lineNumber: 70,\n                            columnNumber: 11\n                        }, this)\n                    ]\n                }, void 0, true, {\n                    fileName: \"C:\\\\Users\\\\ASUS\\\\Documents\\\\booking-system\\\\src\\\\app\\\\page.tsx\",\n                    lineNumber: 63,\n                    columnNumber: 9\n                }, this),\n                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_ui_tabs__WEBPACK_IMPORTED_MODULE_1__.TabsContent, {\n                    value: \"paused\",\n                    children: [\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                            className: \"my-5\",\n                            children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_NewOrder__WEBPACK_IMPORTED_MODULE_2__[\"default\"], {}, void 0, false, {\n                                fileName: \"C:\\\\Users\\\\ASUS\\\\Documents\\\\booking-system\\\\src\\\\app\\\\page.tsx\",\n                                lineNumber: 76,\n                                columnNumber: 13\n                            }, this)\n                        }, void 0, false, {\n                            fileName: \"C:\\\\Users\\\\ASUS\\\\Documents\\\\booking-system\\\\src\\\\app\\\\page.tsx\",\n                            lineNumber: 75,\n                            columnNumber: 11\n                        }, this),\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_PauseTask__WEBPACK_IMPORTED_MODULE_6__[\"default\"], {}, void 0, false, {\n                            fileName: \"C:\\\\Users\\\\ASUS\\\\Documents\\\\booking-system\\\\src\\\\app\\\\page.tsx\",\n                            lineNumber: 78,\n                            columnNumber: 11\n                        }, this)\n                    ]\n                }, void 0, true, {\n                    fileName: \"C:\\\\Users\\\\ASUS\\\\Documents\\\\booking-system\\\\src\\\\app\\\\page.tsx\",\n                    lineNumber: 74,\n                    columnNumber: 9\n                }, this),\n                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_ui_tabs__WEBPACK_IMPORTED_MODULE_1__.TabsContent, {\n                    value: \"unpaid\",\n                    children: [\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                            className: \"my-5\",\n                            children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_NewOrder__WEBPACK_IMPORTED_MODULE_2__[\"default\"], {}, void 0, false, {\n                                fileName: \"C:\\\\Users\\\\ASUS\\\\Documents\\\\booking-system\\\\src\\\\app\\\\page.tsx\",\n                                lineNumber: 82,\n                                columnNumber: 13\n                            }, this)\n                        }, void 0, false, {\n                            fileName: \"C:\\\\Users\\\\ASUS\\\\Documents\\\\booking-system\\\\src\\\\app\\\\page.tsx\",\n                            lineNumber: 81,\n                            columnNumber: 11\n                        }, this),\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_UnpaidTask__WEBPACK_IMPORTED_MODULE_8__[\"default\"], {}, void 0, false, {\n                            fileName: \"C:\\\\Users\\\\ASUS\\\\Documents\\\\booking-system\\\\src\\\\app\\\\page.tsx\",\n                            lineNumber: 84,\n                            columnNumber: 11\n                        }, this)\n                    ]\n                }, void 0, true, {\n                    fileName: \"C:\\\\Users\\\\ASUS\\\\Documents\\\\booking-system\\\\src\\\\app\\\\page.tsx\",\n                    lineNumber: 80,\n                    columnNumber: 9\n                }, this),\n                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_ui_tabs__WEBPACK_IMPORTED_MODULE_1__.TabsContent, {\n                    value: \"paid\",\n                    children: [\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                            className: \"my-5\",\n                            children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_NewOrder__WEBPACK_IMPORTED_MODULE_2__[\"default\"], {}, void 0, false, {\n                                fileName: \"C:\\\\Users\\\\ASUS\\\\Documents\\\\booking-system\\\\src\\\\app\\\\page.tsx\",\n                                lineNumber: 88,\n                                columnNumber: 13\n                            }, this)\n                        }, void 0, false, {\n                            fileName: \"C:\\\\Users\\\\ASUS\\\\Documents\\\\booking-system\\\\src\\\\app\\\\page.tsx\",\n                            lineNumber: 87,\n                            columnNumber: 11\n                        }, this),\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_PaidTask__WEBPACK_IMPORTED_MODULE_7__[\"default\"], {}, void 0, false, {\n                            fileName: \"C:\\\\Users\\\\ASUS\\\\Documents\\\\booking-system\\\\src\\\\app\\\\page.tsx\",\n                            lineNumber: 90,\n                            columnNumber: 11\n                        }, this)\n                    ]\n                }, void 0, true, {\n                    fileName: \"C:\\\\Users\\\\ASUS\\\\Documents\\\\booking-system\\\\src\\\\app\\\\page.tsx\",\n                    lineNumber: 86,\n                    columnNumber: 9\n                }, this),\n                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_ui_tabs__WEBPACK_IMPORTED_MODULE_1__.TabsContent, {\n                    value: \"cancelled\",\n                    children: [\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                            className: \"my-5\",\n                            children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_NewOrder__WEBPACK_IMPORTED_MODULE_2__[\"default\"], {}, void 0, false, {\n                                fileName: \"C:\\\\Users\\\\ASUS\\\\Documents\\\\booking-system\\\\src\\\\app\\\\page.tsx\",\n                                lineNumber: 94,\n                                columnNumber: 13\n                            }, this)\n                        }, void 0, false, {\n                            fileName: \"C:\\\\Users\\\\ASUS\\\\Documents\\\\booking-system\\\\src\\\\app\\\\page.tsx\",\n                            lineNumber: 93,\n                            columnNumber: 11\n                        }, this),\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_CancelledTask__WEBPACK_IMPORTED_MODULE_5__[\"default\"], {}, void 0, false, {\n                            fileName: \"C:\\\\Users\\\\ASUS\\\\Documents\\\\booking-system\\\\src\\\\app\\\\page.tsx\",\n                            lineNumber: 96,\n                            columnNumber: 11\n                        }, this)\n                    ]\n                }, void 0, true, {\n                    fileName: \"C:\\\\Users\\\\ASUS\\\\Documents\\\\booking-system\\\\src\\\\app\\\\page.tsx\",\n                    lineNumber: 92,\n                    columnNumber: 9\n                }, this),\n                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_ui_tabs__WEBPACK_IMPORTED_MODULE_1__.TabsContent, {\n                    value: \"failed\"\n                }, void 0, false, {\n                    fileName: \"C:\\\\Users\\\\ASUS\\\\Documents\\\\booking-system\\\\src\\\\app\\\\page.tsx\",\n                    lineNumber: 98,\n                    columnNumber: 9\n                }, this)\n            ]\n        }, void 0, true, {\n            fileName: \"C:\\\\Users\\\\ASUS\\\\Documents\\\\booking-system\\\\src\\\\app\\\\page.tsx\",\n            lineNumber: 24,\n            columnNumber: 7\n        }, this)\n    }, void 0, false, {\n        fileName: \"C:\\\\Users\\\\ASUS\\\\Documents\\\\booking-system\\\\src\\\\app\\\\page.tsx\",\n        lineNumber: 23,\n        columnNumber: 5\n    }, this);\n}\n_c = Home;\nvar _c;\n$RefreshReg$(_c, \"Home\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports on update so we can compare the boundary\n                // signatures.\n                module.hot.dispose(function (data) {\n                    data.prevExports = currentExports;\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevExports !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevExports !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,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X0UvLi9zcmMvYXBwL3BhZ2UudHN4P2Y2OGEiXSwic291cmNlc0NvbnRlbnQiOlsiXCJ1c2UgY2xpZW50XCJcclxuaW1wb3J0IHsgVGFicywgVGFic0NvbnRlbnQsIFRhYnNMaXN0LCBUYWJzVHJpZ2dlciB9IGZyb20gXCJAL2NvbXBvbmVudHMvdWkvdGFic1wiXHJcbmltcG9ydCBOZXdPcmRlciBmcm9tIFwiQC9jb21wb25lbnRzL05ld09yZGVyXCJcclxuaW1wb3J0IFJ1bm5pbmdUYXNrIGZyb20gXCJAL2NvbXBvbmVudHMvUnVubmluZ1Rhc2tcIlxyXG5pbXBvcnQgUnVubmluZ01vYmlsZSBmcm9tIFwiQC9jb21wb25lbnRzL1J1bm5pbmdNb2JpbGVcIlxyXG5pbXBvcnQgQ2FuY2VsbGVkVGFzayBmcm9tIFwiQC9jb21wb25lbnRzL0NhbmNlbGxlZFRhc2tcIlxyXG5pbXBvcnQgUGF1c2VUYXNrIGZyb20gXCJAL2NvbXBvbmVudHMvUGF1c2VUYXNrXCJcclxuaW1wb3J0IFBhaWRUYXNrIGZyb20gXCJAL2NvbXBvbmVudHMvUGFpZFRhc2tcIlxyXG5pbXBvcnQgVW5wYWlkVGFzayBmcm9tIFwiQC9jb21wb25lbnRzL1VucGFpZFRhc2tcIlxyXG5pbXBvcnQgeyBCYWRnZSB9IGZyb20gXCJAL2NvbXBvbmVudHMvdWkvYmFkZ2VcIlxyXG5pbXBvcnQgeyBjbiB9IGZyb20gXCJAL2xpYi91dGlsc1wiXHJcblxyXG4vLyBmb2xsb3dpbmcgbnVtYmVycyB3aWxsIGJlIHJlcGxhY2VkIGJ5IEFQSVxyXG5jb25zdCBydW5uaW5nQ291bnQgPSA0XHJcbmNvbnN0IHBhdXNlQ291bnQgPSA0XHJcbmNvbnN0IHVucGFpZENvdW50ID0gNFxyXG5jb25zdCBwYWlkQ291bnQgPSA0XHJcbmNvbnN0IGNhbmNlbGxlZENvdW50ID0gNFxyXG5jb25zdCBmYWlsZWRDb3VudCA9IDBcclxuXHJcbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIEhvbWUoKSB7XHJcbiAgcmV0dXJuIChcclxuICAgIDxtYWluIGNsYXNzTmFtZT1cIm10LTMgcHgtMyBtZDptdC01IG1kOnB4LTVcIj5cclxuICAgICAgPFRhYnMgZGVmYXVsdFZhbHVlPVwicnVubmluZ1wiPlxyXG4gICAgICAgIDxUYWJzTGlzdCBjbGFzc05hbWU9XCJncmlkIGdyaWQtY29scy0zIGdyaWQtcm93cy0yIG1kOmdyaWQtY29scy02IG1kOmdyaWQtcm93cy1ub25lIHctZnVsbCBnYXAtMyBoLWZ1bGxcIj5cclxuICAgICAgICAgIDxUYWJzVHJpZ2dlciB2YWx1ZT1cInJ1bm5pbmdcIj5cclxuICAgICAgICAgICAgUnVubmluZ1xyXG4gICAgICAgICAgICA8QmFkZ2VcclxuICAgICAgICAgICAgICBjbGFzc05hbWU9e2NuKFxyXG4gICAgICAgICAgICAgICAgcnVubmluZ0NvdW50ID4gMCA/IFwibWwtMiBiZy1ncmVlbi00MDBcIiA6IFwibWwtMiBiZy10cmFuc3BhcmVudFwiXHJcbiAgICAgICAgICAgICAgKX1cclxuICAgICAgICAgICAgPlxyXG4gICAgICAgICAgICAgIHtydW5uaW5nQ291bnR9XHJcbiAgICAgICAgICAgIDwvQmFkZ2U+XHJcbiAgICAgICAgICA8L1RhYnNUcmlnZ2VyPlxyXG4gICAgICAgICAgPFRhYnNUcmlnZ2VyIHZhbHVlPVwicGF1c2VkXCI+XHJcbiAgICAgICAgICAgIFBhdXNlZFxyXG4gICAgICAgICAgICA8QmFkZ2VcclxuICAgICAgICAgICAgICBjbGFzc05hbWU9e2NuKFxyXG4gICAgICAgICAgICAgICAgcGF1c2VDb3VudCA+IDAgPyBcIm1sLTIgYmcteWVsbG93LTQwMFwiIDogXCJtbC0yIGJnLXRyYW5zcGFyZW50XCJcclxuICAgICAgICAgICAgICApfVxyXG4gICAgICAgICAgICA+XHJcbiAgICAgICAgICAgICAge3BhdXNlQ291bnR9XHJcbiAgICAgICAgICAgIDwvQmFkZ2U+XHJcbiAgICAgICAgICA8L1RhYnNUcmlnZ2VyPlxyXG4gICAgICAgICAgPFRhYnNUcmlnZ2VyIHZhbHVlPVwiZmFpbGVkXCI+XHJcbiAgICAgICAgICAgIEZhaWxlZFxyXG4gICAgICAgICAgICA8QmFkZ2UgY2xhc3NOYW1lPXtjbihmYWlsZWRDb3VudCA+IDAgPyBcIm1sLTIgYmctcmVkLTUwMFwiIDogXCJtbC0yXCIpfT5cclxuICAgICAgICAgICAgICB7ZmFpbGVkQ291bnR9XHJcbiAgICAgICAgICAgIDwvQmFkZ2U+XHJcbiAgICAgICAgICA8L1RhYnNUcmlnZ2VyPlxyXG4gICAgICAgICAgPFRhYnNUcmlnZ2VyIHZhbHVlPVwidW5wYWlkXCI+XHJcbiAgICAgICAgICAgIFVucGFpZFxyXG4gICAgICAgICAgICA8QmFkZ2UgY2xhc3NOYW1lPVwibWwtMlwiPnt1bnBhaWRDb3VudH08L0JhZGdlPlxyXG4gICAgICAgICAgPC9UYWJzVHJpZ2dlcj5cclxuICAgICAgICAgIDxUYWJzVHJpZ2dlciB2YWx1ZT1cInBhaWRcIj5cclxuICAgICAgICAgICAgUGFpZCA8QmFkZ2UgY2xhc3NOYW1lPVwibWwtMlwiPntwYWlkQ291bnR9PC9CYWRnZT5cclxuICAgICAgICAgIDwvVGFic1RyaWdnZXI+XHJcbiAgICAgICAgICA8VGFic1RyaWdnZXIgdmFsdWU9XCJjYW5jZWxsZWRcIj5cclxuICAgICAgICAgICAgQ2FuY2VsbGVkIDxCYWRnZSBjbGFzc05hbWU9XCJtbC0yXCI+e2NhbmNlbGxlZENvdW50fTwvQmFkZ2U+XHJcbiAgICAgICAgICA8L1RhYnNUcmlnZ2VyPlxyXG4gICAgICAgIDwvVGFic0xpc3Q+XHJcbiAgICAgICAgPFRhYnNDb250ZW50IHZhbHVlPVwicnVubmluZ1wiPlxyXG4gICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJteS01XCI+XHJcbiAgICAgICAgICAgIDxOZXdPcmRlciAvPlxyXG4gICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImhpZGRlbiBtZDpibG9ja1wiPlxyXG4gICAgICAgICAgICA8UnVubmluZ1Rhc2sgLz5cclxuICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJibG9jayBtZDpoaWRkZW5cIj5cclxuICAgICAgICAgICAgPFJ1bm5pbmdNb2JpbGUgLz5cclxuICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgIDwvVGFic0NvbnRlbnQ+XHJcbiAgICAgICAgPFRhYnNDb250ZW50IHZhbHVlPVwicGF1c2VkXCI+XHJcbiAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cIm15LTVcIj5cclxuICAgICAgICAgICAgPE5ld09yZGVyIC8+XHJcbiAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgIDxQYXVzZVRhc2sgLz5cclxuICAgICAgICA8L1RhYnNDb250ZW50PlxyXG4gICAgICAgIDxUYWJzQ29udGVudCB2YWx1ZT1cInVucGFpZFwiPlxyXG4gICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJteS01XCI+XHJcbiAgICAgICAgICAgIDxOZXdPcmRlciAvPlxyXG4gICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICA8VW5wYWlkVGFzayAvPlxyXG4gICAgICAgIDwvVGFic0NvbnRlbnQ+XHJcbiAgICAgICAgPFRhYnNDb250ZW50IHZhbHVlPVwicGFpZFwiPlxyXG4gICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJteS01XCI+XHJcbiAgICAgICAgICAgIDxOZXdPcmRlciAvPlxyXG4gICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICA8UGFpZFRhc2sgLz5cclxuICAgICAgICA8L1RhYnNDb250ZW50PlxyXG4gICAgICAgIDxUYWJzQ29udGVudCB2YWx1ZT1cImNhbmNlbGxlZFwiPlxyXG4gICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJteS01XCI+XHJcbiAgICAgICAgICAgIDxOZXdPcmRlciAvPlxyXG4gICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICA8Q2FuY2VsbGVkVGFzayAvPlxyXG4gICAgICAgIDwvVGFic0NvbnRlbnQ+XHJcbiAgICAgICAgPFRhYnNDb250ZW50IHZhbHVlPVwiZmFpbGVkXCI+PC9UYWJzQ29udGVudD5cclxuICAgICAgPC9UYWJzPlxyXG4gICAgPC9tYWluPlxyXG4gIClcclxufVxyXG4iXSwibmFtZXMiOlsiVGFicyIsIlRhYnNDb250ZW50IiwiVGFic0xpc3QiLCJUYWJzVHJpZ2dlciIsIk5ld09yZGVyIiwiUnVubmluZ1Rhc2siLCJSdW5uaW5nTW9iaWxlIiwiQ2FuY2VsbGVkVGFzayIsIlBhdXNlVGFzayIsIlBhaWRUYXNrIiwiVW5wYWlkVGFzayIsIkJhZGdlIiwiY24iLCJydW5uaW5nQ291bnQiLCJwYXVzZUNvdW50IiwidW5wYWlkQ291bnQiLCJwYWlkQ291bnQiLCJjYW5jZWxsZWRDb3VudCIsImZhaWxlZENvdW50IiwiSG9tZSIsIm1haW4iLCJjbGFzc05hbWUiLCJkZWZhdWx0VmFsdWUiLCJ2YWx1ZSIsImRpdiJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///(app-pages-browser)/./src/app/page.tsx\n"));

/***/ })

});