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

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": function() { return /* binding */ Home; }\n/* harmony export */ });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"(app-pages-browser)/./node_modules/next/dist/compiled/react/jsx-dev-runtime.js\");\n/* harmony import */ var _components_ui_tabs__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @/components/ui/tabs */ \"(app-pages-browser)/./src/components/ui/tabs.tsx\");\n/* harmony import */ var _components_NewOrder__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @/components/NewOrder */ \"(app-pages-browser)/./src/components/NewOrder.tsx\");\n/* harmony import */ var _components_RunningTask__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @/components/RunningTask */ \"(app-pages-browser)/./src/components/RunningTask.tsx\");\n/* harmony import */ var _components_RunningMobile__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @/components/RunningMobile */ \"(app-pages-browser)/./src/components/RunningMobile.tsx\");\n/* harmony import */ var _components_CancelledTask__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @/components/CancelledTask */ \"(app-pages-browser)/./src/components/CancelledTask.tsx\");\n/* harmony import */ var _components_PauseTask__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @/components/PauseTask */ \"(app-pages-browser)/./src/components/PauseTask.tsx\");\n/* harmony import */ var _components_PaidTask__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @/components/PaidTask */ \"(app-pages-browser)/./src/components/PaidTask.tsx\");\n/* harmony import */ var _components_UnpaidTask__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @/components/UnpaidTask */ \"(app-pages-browser)/./src/components/UnpaidTask.tsx\");\n/* harmony import */ var _components_ui_badge__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @/components/ui/badge */ \"(app-pages-browser)/./src/components/ui/badge.tsx\");\n/* harmony import */ var _lib_utils__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @/lib/utils */ \"(app-pages-browser)/./src/lib/utils.ts\");\n/* harmony import */ var _nextui_org_react__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @nextui-org/react */ \"(app-pages-browser)/./node_modules/@nextui-org/system/dist/chunk-5DCY5R7Z.mjs\");\n/* __next_internal_client_entry_do_not_use__ default auto */ \n\n\n\n\n\n\n\n\n\n\n\n// following numbers will be replaced by API\nconst runningCount = 4;\nconst pauseCount = 4;\nconst unpaidCount = 4;\nconst paidCount = 4;\nconst cancelledCount = 4;\nconst failedCount = 1;\nfunction Home() {\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_nextui_org_react__WEBPACK_IMPORTED_MODULE_11__.NextUIProvider, {\n        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"main\", {\n            className: \"mt-3 px-1 md:mt-5 md:px-5\",\n            children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_ui_tabs__WEBPACK_IMPORTED_MODULE_1__.Tabs, {\n                defaultValue: \"running\",\n                children: [\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_ui_tabs__WEBPACK_IMPORTED_MODULE_1__.TabsList, {\n                        className: \"grid grid-cols-3 grid-rows-2 md:grid-cols-6 md:grid-rows-none w-full gap-3 h-full\",\n                        children: [\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_ui_tabs__WEBPACK_IMPORTED_MODULE_1__.TabsTrigger, {\n                                value: \"running\",\n                                className: \"hover:bg-slate-200\",\n                                children: [\n                                    \"Running\",\n                                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_ui_badge__WEBPACK_IMPORTED_MODULE_9__.Badge, {\n                                        className: (0,_lib_utils__WEBPACK_IMPORTED_MODULE_10__.cn)(runningCount > 0 ? \"ml-1 md:ml-2 bg-green-500 hover:bg-green-500\" : \"ml-1 md:ml-2 bg-transparent\"),\n                                        children: runningCount\n                                    }, void 0, false, {\n                                        fileName: \"C:\\\\Users\\\\ASUS\\\\Documents\\\\booking-system\\\\src\\\\app\\\\page.tsx\",\n                                        lineNumber: 30,\n                                        columnNumber: 15\n                                    }, this)\n                                ]\n                            }, void 0, true, {\n                                fileName: \"C:\\\\Users\\\\ASUS\\\\Documents\\\\booking-system\\\\src\\\\app\\\\page.tsx\",\n                                lineNumber: 28,\n                                columnNumber: 13\n                            }, this),\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_ui_tabs__WEBPACK_IMPORTED_MODULE_1__.TabsTrigger, {\n                                value: \"paused\",\n                                className: \"hover:bg-slate-200\",\n                                children: [\n                                    \"Paused\",\n                                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_ui_badge__WEBPACK_IMPORTED_MODULE_9__.Badge, {\n                                        className: (0,_lib_utils__WEBPACK_IMPORTED_MODULE_10__.cn)(pauseCount > 0 ? \"ml-1 md:ml-2 bg-yellow-400 hover:bg-yellow-400\" : \"ml-1 md:ml-2 bg-transparent\"),\n                                        children: pauseCount\n                                    }, void 0, false, {\n                                        fileName: \"C:\\\\Users\\\\ASUS\\\\Documents\\\\booking-system\\\\src\\\\app\\\\page.tsx\",\n                                        lineNumber: 42,\n                                        columnNumber: 15\n                                    }, this)\n                                ]\n                            }, void 0, true, {\n                                fileName: \"C:\\\\Users\\\\ASUS\\\\Documents\\\\booking-system\\\\src\\\\app\\\\page.tsx\",\n                                lineNumber: 40,\n                                columnNumber: 13\n                            }, this),\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_ui_tabs__WEBPACK_IMPORTED_MODULE_1__.TabsTrigger, {\n                                value: \"failed\",\n                                className: \"hover:bg-slate-200\",\n                                children: [\n                                    \"Failed\",\n                                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_ui_badge__WEBPACK_IMPORTED_MODULE_9__.Badge, {\n                                        className: (0,_lib_utils__WEBPACK_IMPORTED_MODULE_10__.cn)(failedCount > 0 ? \"ml-1 md:ml-2 bg-red-500 hover:bg-red-500\" : \"ml-1 md:ml-2\"),\n                                        children: failedCount\n                                    }, void 0, false, {\n                                        fileName: \"C:\\\\Users\\\\ASUS\\\\Documents\\\\booking-system\\\\src\\\\app\\\\page.tsx\",\n                                        lineNumber: 54,\n                                        columnNumber: 15\n                                    }, this)\n                                ]\n                            }, void 0, true, {\n                                fileName: \"C:\\\\Users\\\\ASUS\\\\Documents\\\\booking-system\\\\src\\\\app\\\\page.tsx\",\n                                lineNumber: 52,\n                                columnNumber: 13\n                            }, this),\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_ui_tabs__WEBPACK_IMPORTED_MODULE_1__.TabsTrigger, {\n                                value: \"unpaid\",\n                                className: \"hover:bg-slate-200\",\n                                children: [\n                                    \"Unpaid\",\n                                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_ui_badge__WEBPACK_IMPORTED_MODULE_9__.Badge, {\n                                        className: (0,_lib_utils__WEBPACK_IMPORTED_MODULE_10__.cn)(\"ml-1 md:ml-2 bg-gray-400 hover:bg-gray-400\"),\n                                        children: unpaidCount\n                                    }, void 0, false, {\n                                        fileName: \"C:\\\\Users\\\\ASUS\\\\Documents\\\\booking-system\\\\src\\\\app\\\\page.tsx\",\n                                        lineNumber: 66,\n                                        columnNumber: 15\n                                    }, this)\n                                ]\n                            }, void 0, true, {\n                                fileName: \"C:\\\\Users\\\\ASUS\\\\Documents\\\\booking-system\\\\src\\\\app\\\\page.tsx\",\n                                lineNumber: 64,\n                                columnNumber: 13\n                            }, this),\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_ui_tabs__WEBPACK_IMPORTED_MODULE_1__.TabsTrigger, {\n                                value: \"paid\",\n                                className: \"hover:bg-slate-200\",\n                                children: [\n                                    \"Paid\",\n                                    \" \",\n                                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_ui_badge__WEBPACK_IMPORTED_MODULE_9__.Badge, {\n                                        className: (0,_lib_utils__WEBPACK_IMPORTED_MODULE_10__.cn)(\"ml-1 md:ml-2 bg-gray-400 hover:bg-gray-400\"),\n                                        children: paidCount\n                                    }, void 0, false, {\n                                        fileName: \"C:\\\\Users\\\\ASUS\\\\Documents\\\\booking-system\\\\src\\\\app\\\\page.tsx\",\n                                        lineNumber: 74,\n                                        columnNumber: 15\n                                    }, this)\n                                ]\n                            }, void 0, true, {\n                                fileName: \"C:\\\\Users\\\\ASUS\\\\Documents\\\\booking-system\\\\src\\\\app\\\\page.tsx\",\n                                lineNumber: 72,\n                                columnNumber: 13\n                            }, this),\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_ui_tabs__WEBPACK_IMPORTED_MODULE_1__.TabsTrigger, {\n                                value: \"cancelled\",\n                                className: \"hover:bg-slate-200\",\n                                children: [\n                                    \"Cancelled\",\n                                    \" \",\n                                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_ui_badge__WEBPACK_IMPORTED_MODULE_9__.Badge, {\n                                        className: (0,_lib_utils__WEBPACK_IMPORTED_MODULE_10__.cn)(\"ml-1 md:ml-2 bg-gray-400 hover:bg-gray-400\"),\n                                        children: cancelledCount\n                                    }, void 0, false, {\n                                        fileName: \"C:\\\\Users\\\\ASUS\\\\Documents\\\\booking-system\\\\src\\\\app\\\\page.tsx\",\n                                        lineNumber: 82,\n                                        columnNumber: 15\n                                    }, this)\n                                ]\n                            }, void 0, true, {\n                                fileName: \"C:\\\\Users\\\\ASUS\\\\Documents\\\\booking-system\\\\src\\\\app\\\\page.tsx\",\n                                lineNumber: 80,\n                                columnNumber: 13\n                            }, this)\n                        ]\n                    }, void 0, true, {\n                        fileName: \"C:\\\\Users\\\\ASUS\\\\Documents\\\\booking-system\\\\src\\\\app\\\\page.tsx\",\n                        lineNumber: 27,\n                        columnNumber: 11\n                    }, this),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_ui_tabs__WEBPACK_IMPORTED_MODULE_1__.TabsContent, {\n                        value: \"running\",\n                        children: [\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                                className: \"my-5\",\n                                children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_NewOrder__WEBPACK_IMPORTED_MODULE_2__[\"default\"], {}, void 0, false, {\n                                    fileName: \"C:\\\\Users\\\\ASUS\\\\Documents\\\\booking-system\\\\src\\\\app\\\\page.tsx\",\n                                    lineNumber: 91,\n                                    columnNumber: 15\n                                }, this)\n                            }, void 0, false, {\n                                fileName: \"C:\\\\Users\\\\ASUS\\\\Documents\\\\booking-system\\\\src\\\\app\\\\page.tsx\",\n                                lineNumber: 90,\n                                columnNumber: 13\n                            }, this),\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                                className: \"hidden md:block\",\n                                children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_RunningTask__WEBPACK_IMPORTED_MODULE_3__[\"default\"], {}, void 0, false, {\n                                    fileName: \"C:\\\\Users\\\\ASUS\\\\Documents\\\\booking-system\\\\src\\\\app\\\\page.tsx\",\n                                    lineNumber: 94,\n                                    columnNumber: 15\n                                }, this)\n                            }, void 0, false, {\n                                fileName: \"C:\\\\Users\\\\ASUS\\\\Documents\\\\booking-system\\\\src\\\\app\\\\page.tsx\",\n                                lineNumber: 93,\n                                columnNumber: 13\n                            }, this),\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                                className: \"block md:hidden\",\n                                children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_RunningMobile__WEBPACK_IMPORTED_MODULE_4__[\"default\"], {}, void 0, false, {\n                                    fileName: \"C:\\\\Users\\\\ASUS\\\\Documents\\\\booking-system\\\\src\\\\app\\\\page.tsx\",\n                                    lineNumber: 97,\n                                    columnNumber: 15\n                                }, this)\n                            }, void 0, false, {\n                                fileName: \"C:\\\\Users\\\\ASUS\\\\Documents\\\\booking-system\\\\src\\\\app\\\\page.tsx\",\n                                lineNumber: 96,\n                                columnNumber: 13\n                            }, this)\n                        ]\n                    }, void 0, true, {\n                        fileName: \"C:\\\\Users\\\\ASUS\\\\Documents\\\\booking-system\\\\src\\\\app\\\\page.tsx\",\n                        lineNumber: 89,\n                        columnNumber: 11\n                    }, this),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_ui_tabs__WEBPACK_IMPORTED_MODULE_1__.TabsContent, {\n                        value: \"paused\",\n                        children: [\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                                className: \"my-5\",\n                                children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_NewOrder__WEBPACK_IMPORTED_MODULE_2__[\"default\"], {}, void 0, false, {\n                                    fileName: \"C:\\\\Users\\\\ASUS\\\\Documents\\\\booking-system\\\\src\\\\app\\\\page.tsx\",\n                                    lineNumber: 102,\n                                    columnNumber: 15\n                                }, this)\n                            }, void 0, false, {\n                                fileName: \"C:\\\\Users\\\\ASUS\\\\Documents\\\\booking-system\\\\src\\\\app\\\\page.tsx\",\n                                lineNumber: 101,\n                                columnNumber: 13\n                            }, this),\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_PauseTask__WEBPACK_IMPORTED_MODULE_6__[\"default\"], {}, void 0, false, {\n                                fileName: \"C:\\\\Users\\\\ASUS\\\\Documents\\\\booking-system\\\\src\\\\app\\\\page.tsx\",\n                                lineNumber: 104,\n                                columnNumber: 13\n                            }, this)\n                        ]\n                    }, void 0, true, {\n                        fileName: \"C:\\\\Users\\\\ASUS\\\\Documents\\\\booking-system\\\\src\\\\app\\\\page.tsx\",\n                        lineNumber: 100,\n                        columnNumber: 11\n                    }, this),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_ui_tabs__WEBPACK_IMPORTED_MODULE_1__.TabsContent, {\n                        value: \"unpaid\",\n                        children: [\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                                className: \"my-5\",\n                                children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_NewOrder__WEBPACK_IMPORTED_MODULE_2__[\"default\"], {}, void 0, false, {\n                                    fileName: \"C:\\\\Users\\\\ASUS\\\\Documents\\\\booking-system\\\\src\\\\app\\\\page.tsx\",\n                                    lineNumber: 108,\n                                    columnNumber: 15\n                                }, this)\n                            }, void 0, false, {\n                                fileName: \"C:\\\\Users\\\\ASUS\\\\Documents\\\\booking-system\\\\src\\\\app\\\\page.tsx\",\n                                lineNumber: 107,\n                                columnNumber: 13\n                            }, this),\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_UnpaidTask__WEBPACK_IMPORTED_MODULE_8__[\"default\"], {}, void 0, false, {\n                                fileName: \"C:\\\\Users\\\\ASUS\\\\Documents\\\\booking-system\\\\src\\\\app\\\\page.tsx\",\n                                lineNumber: 110,\n                                columnNumber: 13\n                            }, this)\n                        ]\n                    }, void 0, true, {\n                        fileName: \"C:\\\\Users\\\\ASUS\\\\Documents\\\\booking-system\\\\src\\\\app\\\\page.tsx\",\n                        lineNumber: 106,\n                        columnNumber: 11\n                    }, this),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_ui_tabs__WEBPACK_IMPORTED_MODULE_1__.TabsContent, {\n                        value: \"paid\",\n                        children: [\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                                className: \"my-5\",\n                                children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_NewOrder__WEBPACK_IMPORTED_MODULE_2__[\"default\"], {}, void 0, false, {\n                                    fileName: \"C:\\\\Users\\\\ASUS\\\\Documents\\\\booking-system\\\\src\\\\app\\\\page.tsx\",\n                                    lineNumber: 114,\n                                    columnNumber: 15\n                                }, this)\n                            }, void 0, false, {\n                                fileName: \"C:\\\\Users\\\\ASUS\\\\Documents\\\\booking-system\\\\src\\\\app\\\\page.tsx\",\n                                lineNumber: 113,\n                                columnNumber: 13\n                            }, this),\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_PaidTask__WEBPACK_IMPORTED_MODULE_7__[\"default\"], {}, void 0, false, {\n                                fileName: \"C:\\\\Users\\\\ASUS\\\\Documents\\\\booking-system\\\\src\\\\app\\\\page.tsx\",\n                                lineNumber: 116,\n                                columnNumber: 13\n                            }, this)\n                        ]\n                    }, void 0, true, {\n                        fileName: \"C:\\\\Users\\\\ASUS\\\\Documents\\\\booking-system\\\\src\\\\app\\\\page.tsx\",\n                        lineNumber: 112,\n                        columnNumber: 11\n                    }, this),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_ui_tabs__WEBPACK_IMPORTED_MODULE_1__.TabsContent, {\n                        value: \"cancelled\",\n                        children: [\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                                className: \"my-5\",\n                                children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_NewOrder__WEBPACK_IMPORTED_MODULE_2__[\"default\"], {}, void 0, false, {\n                                    fileName: \"C:\\\\Users\\\\ASUS\\\\Documents\\\\booking-system\\\\src\\\\app\\\\page.tsx\",\n                                    lineNumber: 120,\n                                    columnNumber: 15\n                                }, this)\n                            }, void 0, false, {\n                                fileName: \"C:\\\\Users\\\\ASUS\\\\Documents\\\\booking-system\\\\src\\\\app\\\\page.tsx\",\n                                lineNumber: 119,\n                                columnNumber: 13\n                            }, this),\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_CancelledTask__WEBPACK_IMPORTED_MODULE_5__[\"default\"], {}, void 0, false, {\n                                fileName: \"C:\\\\Users\\\\ASUS\\\\Documents\\\\booking-system\\\\src\\\\app\\\\page.tsx\",\n                                lineNumber: 122,\n                                columnNumber: 13\n                            }, this)\n                        ]\n                    }, void 0, true, {\n                        fileName: \"C:\\\\Users\\\\ASUS\\\\Documents\\\\booking-system\\\\src\\\\app\\\\page.tsx\",\n                        lineNumber: 118,\n                        columnNumber: 11\n                    }, this),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_ui_tabs__WEBPACK_IMPORTED_MODULE_1__.TabsContent, {\n                        value: \"failed\"\n                    }, void 0, false, {\n                        fileName: \"C:\\\\Users\\\\ASUS\\\\Documents\\\\booking-system\\\\src\\\\app\\\\page.tsx\",\n                        lineNumber: 124,\n                        columnNumber: 11\n                    }, this)\n                ]\n            }, void 0, true, {\n                fileName: \"C:\\\\Users\\\\ASUS\\\\Documents\\\\booking-system\\\\src\\\\app\\\\page.tsx\",\n                lineNumber: 26,\n                columnNumber: 9\n            }, this)\n        }, void 0, false, {\n            fileName: \"C:\\\\Users\\\\ASUS\\\\Documents\\\\booking-system\\\\src\\\\app\\\\page.tsx\",\n            lineNumber: 25,\n            columnNumber: 7\n        }, this)\n    }, void 0, false, {\n        fileName: \"C:\\\\Users\\\\ASUS\\\\Documents\\\\booking-system\\\\src\\\\app\\\\page.tsx\",\n        lineNumber: 24,\n        columnNumber: 5\n    }, this);\n}\n_c = Home;\nvar _c;\n$RefreshReg$(_c, \"Home\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports on update so we can compare the boundary\n                // signatures.\n                module.hot.dispose(function (data) {\n                    data.prevExports = currentExports;\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevExports !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevExports !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKGFwcC1wYWdlcy1icm93c2VyKS8uL3NyYy9hcHAvcGFnZS50c3giLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFDK0U7QUFDbkM7QUFDTTtBQUNJO0FBQ0E7QUFDUjtBQUNGO0FBQ0k7QUFDSDtBQUNiO0FBQ2tCO0FBRWxELDRDQUE0QztBQUM1QyxNQUFNYyxlQUFlO0FBQ3JCLE1BQU1DLGFBQWE7QUFDbkIsTUFBTUMsY0FBYztBQUNwQixNQUFNQyxZQUFZO0FBQ2xCLE1BQU1DLGlCQUFpQjtBQUN2QixNQUFNQyxjQUFjO0FBRUwsU0FBU0M7SUFDdEIscUJBQ0UsOERBQUNQLDhEQUFjQTtrQkFDYiw0RUFBQ1E7WUFBS0MsV0FBVTtzQkFDZCw0RUFBQ3RCLHFEQUFJQTtnQkFBQ3VCLGNBQWE7O2tDQUNqQiw4REFBQ3JCLHlEQUFRQTt3QkFBQ29CLFdBQVU7OzBDQUNsQiw4REFBQ25CLDREQUFXQTtnQ0FBQ3FCLE9BQU07Z0NBQVVGLFdBQVU7O29DQUFxQjtrREFFMUQsOERBQUNYLHVEQUFLQTt3Q0FDSlcsV0FBV1YsK0NBQUVBLENBQ1hFLGVBQWUsSUFDWCxpREFDQTtrREFHTEE7Ozs7Ozs7Ozs7OzswQ0FHTCw4REFBQ1gsNERBQVdBO2dDQUFDcUIsT0FBTTtnQ0FBU0YsV0FBVTs7b0NBQXFCO2tEQUV6RCw4REFBQ1gsdURBQUtBO3dDQUNKVyxXQUFXViwrQ0FBRUEsQ0FDWEcsYUFBYSxJQUNULG1EQUNBO2tEQUdMQTs7Ozs7Ozs7Ozs7OzBDQUdMLDhEQUFDWiw0REFBV0E7Z0NBQUNxQixPQUFNO2dDQUFTRixXQUFVOztvQ0FBcUI7a0RBRXpELDhEQUFDWCx1REFBS0E7d0NBQ0pXLFdBQVdWLCtDQUFFQSxDQUNYTyxjQUFjLElBQ1YsNkNBQ0E7a0RBR0xBOzs7Ozs7Ozs7Ozs7MENBR0wsOERBQUNoQiw0REFBV0E7Z0NBQUNxQixPQUFNO2dDQUFTRixXQUFVOztvQ0FBcUI7a0RBRXpELDhEQUFDWCx1REFBS0E7d0NBQ0pXLFdBQVdWLCtDQUFFQSxDQUFDO2tEQUViSTs7Ozs7Ozs7Ozs7OzBDQUdMLDhEQUFDYiw0REFBV0E7Z0NBQUNxQixPQUFNO2dDQUFPRixXQUFVOztvQ0FBcUI7b0NBQ2xEO2tEQUNMLDhEQUFDWCx1REFBS0E7d0NBQ0pXLFdBQVdWLCtDQUFFQSxDQUFDO2tEQUViSzs7Ozs7Ozs7Ozs7OzBDQUdMLDhEQUFDZCw0REFBV0E7Z0NBQUNxQixPQUFNO2dDQUFZRixXQUFVOztvQ0FBcUI7b0NBQ2xEO2tEQUNWLDhEQUFDWCx1REFBS0E7d0NBQ0pXLFdBQVdWLCtDQUFFQSxDQUFDO2tEQUViTTs7Ozs7Ozs7Ozs7Ozs7Ozs7O2tDQUlQLDhEQUFDakIsNERBQVdBO3dCQUFDdUIsT0FBTTs7MENBQ2pCLDhEQUFDQztnQ0FBSUgsV0FBVTswQ0FDYiw0RUFBQ2xCLDREQUFRQTs7Ozs7Ozs7OzswQ0FFWCw4REFBQ3FCO2dDQUFJSCxXQUFVOzBDQUNiLDRFQUFDakIsK0RBQVdBOzs7Ozs7Ozs7OzBDQUVkLDhEQUFDb0I7Z0NBQUlILFdBQVU7MENBQ2IsNEVBQUNoQixpRUFBYUE7Ozs7Ozs7Ozs7Ozs7Ozs7a0NBR2xCLDhEQUFDTCw0REFBV0E7d0JBQUN1QixPQUFNOzswQ0FDakIsOERBQUNDO2dDQUFJSCxXQUFVOzBDQUNiLDRFQUFDbEIsNERBQVFBOzs7Ozs7Ozs7OzBDQUVYLDhEQUFDSSw2REFBU0E7Ozs7Ozs7Ozs7O2tDQUVaLDhEQUFDUCw0REFBV0E7d0JBQUN1QixPQUFNOzswQ0FDakIsOERBQUNDO2dDQUFJSCxXQUFVOzBDQUNiLDRFQUFDbEIsNERBQVFBOzs7Ozs7Ozs7OzBDQUVYLDhEQUFDTSw4REFBVUE7Ozs7Ozs7Ozs7O2tDQUViLDhEQUFDVCw0REFBV0E7d0JBQUN1QixPQUFNOzswQ0FDakIsOERBQUNDO2dDQUFJSCxXQUFVOzBDQUNiLDRFQUFDbEIsNERBQVFBOzs7Ozs7Ozs7OzBDQUVYLDhEQUFDSyw0REFBUUE7Ozs7Ozs7Ozs7O2tDQUVYLDhEQUFDUiw0REFBV0E7d0JBQUN1QixPQUFNOzswQ0FDakIsOERBQUNDO2dDQUFJSCxXQUFVOzBDQUNiLDRFQUFDbEIsNERBQVFBOzs7Ozs7Ozs7OzBDQUVYLDhEQUFDRyxpRUFBYUE7Ozs7Ozs7Ozs7O2tDQUVoQiw4REFBQ04sNERBQVdBO3dCQUFDdUIsT0FBTTs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUs3QjtLQTNHd0JKIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vX05fRS8uL3NyYy9hcHAvcGFnZS50c3g/ZjY4YSJdLCJzb3VyY2VzQ29udGVudCI6WyJcInVzZSBjbGllbnRcIlxyXG5pbXBvcnQgeyBUYWJzLCBUYWJzQ29udGVudCwgVGFic0xpc3QsIFRhYnNUcmlnZ2VyIH0gZnJvbSBcIkAvY29tcG9uZW50cy91aS90YWJzXCJcclxuaW1wb3J0IE5ld09yZGVyIGZyb20gXCJAL2NvbXBvbmVudHMvTmV3T3JkZXJcIlxyXG5pbXBvcnQgUnVubmluZ1Rhc2sgZnJvbSBcIkAvY29tcG9uZW50cy9SdW5uaW5nVGFza1wiXHJcbmltcG9ydCBSdW5uaW5nTW9iaWxlIGZyb20gXCJAL2NvbXBvbmVudHMvUnVubmluZ01vYmlsZVwiXHJcbmltcG9ydCBDYW5jZWxsZWRUYXNrIGZyb20gXCJAL2NvbXBvbmVudHMvQ2FuY2VsbGVkVGFza1wiXHJcbmltcG9ydCBQYXVzZVRhc2sgZnJvbSBcIkAvY29tcG9uZW50cy9QYXVzZVRhc2tcIlxyXG5pbXBvcnQgUGFpZFRhc2sgZnJvbSBcIkAvY29tcG9uZW50cy9QYWlkVGFza1wiXHJcbmltcG9ydCBVbnBhaWRUYXNrIGZyb20gXCJAL2NvbXBvbmVudHMvVW5wYWlkVGFza1wiXHJcbmltcG9ydCB7IEJhZGdlIH0gZnJvbSBcIkAvY29tcG9uZW50cy91aS9iYWRnZVwiXHJcbmltcG9ydCB7IGNuIH0gZnJvbSBcIkAvbGliL3V0aWxzXCJcclxuaW1wb3J0IHsgTmV4dFVJUHJvdmlkZXIgfSBmcm9tIFwiQG5leHR1aS1vcmcvcmVhY3RcIlxyXG5cclxuLy8gZm9sbG93aW5nIG51bWJlcnMgd2lsbCBiZSByZXBsYWNlZCBieSBBUElcclxuY29uc3QgcnVubmluZ0NvdW50ID0gNFxyXG5jb25zdCBwYXVzZUNvdW50ID0gNFxyXG5jb25zdCB1bnBhaWRDb3VudCA9IDRcclxuY29uc3QgcGFpZENvdW50ID0gNFxyXG5jb25zdCBjYW5jZWxsZWRDb3VudCA9IDRcclxuY29uc3QgZmFpbGVkQ291bnQgPSAxXHJcblxyXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBIb21lKCkge1xyXG4gIHJldHVybiAoXHJcbiAgICA8TmV4dFVJUHJvdmlkZXI+XHJcbiAgICAgIDxtYWluIGNsYXNzTmFtZT1cIm10LTMgcHgtMSBtZDptdC01IG1kOnB4LTVcIj5cclxuICAgICAgICA8VGFicyBkZWZhdWx0VmFsdWU9XCJydW5uaW5nXCI+XHJcbiAgICAgICAgICA8VGFic0xpc3QgY2xhc3NOYW1lPVwiZ3JpZCBncmlkLWNvbHMtMyBncmlkLXJvd3MtMiBtZDpncmlkLWNvbHMtNiBtZDpncmlkLXJvd3Mtbm9uZSB3LWZ1bGwgZ2FwLTMgaC1mdWxsXCI+XHJcbiAgICAgICAgICAgIDxUYWJzVHJpZ2dlciB2YWx1ZT1cInJ1bm5pbmdcIiBjbGFzc05hbWU9XCJob3ZlcjpiZy1zbGF0ZS0yMDBcIj5cclxuICAgICAgICAgICAgICBSdW5uaW5nXHJcbiAgICAgICAgICAgICAgPEJhZGdlXHJcbiAgICAgICAgICAgICAgICBjbGFzc05hbWU9e2NuKFxyXG4gICAgICAgICAgICAgICAgICBydW5uaW5nQ291bnQgPiAwXHJcbiAgICAgICAgICAgICAgICAgICAgPyBcIm1sLTEgbWQ6bWwtMiBiZy1ncmVlbi01MDAgaG92ZXI6YmctZ3JlZW4tNTAwXCJcclxuICAgICAgICAgICAgICAgICAgICA6IFwibWwtMSBtZDptbC0yIGJnLXRyYW5zcGFyZW50XCJcclxuICAgICAgICAgICAgICAgICl9XHJcbiAgICAgICAgICAgICAgPlxyXG4gICAgICAgICAgICAgICAge3J1bm5pbmdDb3VudH1cclxuICAgICAgICAgICAgICA8L0JhZGdlPlxyXG4gICAgICAgICAgICA8L1RhYnNUcmlnZ2VyPlxyXG4gICAgICAgICAgICA8VGFic1RyaWdnZXIgdmFsdWU9XCJwYXVzZWRcIiBjbGFzc05hbWU9XCJob3ZlcjpiZy1zbGF0ZS0yMDBcIj5cclxuICAgICAgICAgICAgICBQYXVzZWRcclxuICAgICAgICAgICAgICA8QmFkZ2VcclxuICAgICAgICAgICAgICAgIGNsYXNzTmFtZT17Y24oXHJcbiAgICAgICAgICAgICAgICAgIHBhdXNlQ291bnQgPiAwXHJcbiAgICAgICAgICAgICAgICAgICAgPyBcIm1sLTEgbWQ6bWwtMiBiZy15ZWxsb3ctNDAwIGhvdmVyOmJnLXllbGxvdy00MDBcIlxyXG4gICAgICAgICAgICAgICAgICAgIDogXCJtbC0xIG1kOm1sLTIgYmctdHJhbnNwYXJlbnRcIlxyXG4gICAgICAgICAgICAgICAgKX1cclxuICAgICAgICAgICAgICA+XHJcbiAgICAgICAgICAgICAgICB7cGF1c2VDb3VudH1cclxuICAgICAgICAgICAgICA8L0JhZGdlPlxyXG4gICAgICAgICAgICA8L1RhYnNUcmlnZ2VyPlxyXG4gICAgICAgICAgICA8VGFic1RyaWdnZXIgdmFsdWU9XCJmYWlsZWRcIiBjbGFzc05hbWU9XCJob3ZlcjpiZy1zbGF0ZS0yMDBcIj5cclxuICAgICAgICAgICAgICBGYWlsZWRcclxuICAgICAgICAgICAgICA8QmFkZ2VcclxuICAgICAgICAgICAgICAgIGNsYXNzTmFtZT17Y24oXHJcbiAgICAgICAgICAgICAgICAgIGZhaWxlZENvdW50ID4gMFxyXG4gICAgICAgICAgICAgICAgICAgID8gXCJtbC0xIG1kOm1sLTIgYmctcmVkLTUwMCBob3ZlcjpiZy1yZWQtNTAwXCJcclxuICAgICAgICAgICAgICAgICAgICA6IFwibWwtMSBtZDptbC0yXCJcclxuICAgICAgICAgICAgICAgICl9XHJcbiAgICAgICAgICAgICAgPlxyXG4gICAgICAgICAgICAgICAge2ZhaWxlZENvdW50fVxyXG4gICAgICAgICAgICAgIDwvQmFkZ2U+XHJcbiAgICAgICAgICAgIDwvVGFic1RyaWdnZXI+XHJcbiAgICAgICAgICAgIDxUYWJzVHJpZ2dlciB2YWx1ZT1cInVucGFpZFwiIGNsYXNzTmFtZT1cImhvdmVyOmJnLXNsYXRlLTIwMFwiPlxyXG4gICAgICAgICAgICAgIFVucGFpZFxyXG4gICAgICAgICAgICAgIDxCYWRnZVxyXG4gICAgICAgICAgICAgICAgY2xhc3NOYW1lPXtjbihcIm1sLTEgbWQ6bWwtMiBiZy1ncmF5LTQwMCBob3ZlcjpiZy1ncmF5LTQwMFwiKX1cclxuICAgICAgICAgICAgICA+XHJcbiAgICAgICAgICAgICAgICB7dW5wYWlkQ291bnR9XHJcbiAgICAgICAgICAgICAgPC9CYWRnZT5cclxuICAgICAgICAgICAgPC9UYWJzVHJpZ2dlcj5cclxuICAgICAgICAgICAgPFRhYnNUcmlnZ2VyIHZhbHVlPVwicGFpZFwiIGNsYXNzTmFtZT1cImhvdmVyOmJnLXNsYXRlLTIwMFwiPlxyXG4gICAgICAgICAgICAgIFBhaWR7XCIgXCJ9XHJcbiAgICAgICAgICAgICAgPEJhZGdlXHJcbiAgICAgICAgICAgICAgICBjbGFzc05hbWU9e2NuKFwibWwtMSBtZDptbC0yIGJnLWdyYXktNDAwIGhvdmVyOmJnLWdyYXktNDAwXCIpfVxyXG4gICAgICAgICAgICAgID5cclxuICAgICAgICAgICAgICAgIHtwYWlkQ291bnR9XHJcbiAgICAgICAgICAgICAgPC9CYWRnZT5cclxuICAgICAgICAgICAgPC9UYWJzVHJpZ2dlcj5cclxuICAgICAgICAgICAgPFRhYnNUcmlnZ2VyIHZhbHVlPVwiY2FuY2VsbGVkXCIgY2xhc3NOYW1lPVwiaG92ZXI6Ymctc2xhdGUtMjAwXCI+XHJcbiAgICAgICAgICAgICAgQ2FuY2VsbGVke1wiIFwifVxyXG4gICAgICAgICAgICAgIDxCYWRnZVxyXG4gICAgICAgICAgICAgICAgY2xhc3NOYW1lPXtjbihcIm1sLTEgbWQ6bWwtMiBiZy1ncmF5LTQwMCBob3ZlcjpiZy1ncmF5LTQwMFwiKX1cclxuICAgICAgICAgICAgICA+XHJcbiAgICAgICAgICAgICAgICB7Y2FuY2VsbGVkQ291bnR9XHJcbiAgICAgICAgICAgICAgPC9CYWRnZT5cclxuICAgICAgICAgICAgPC9UYWJzVHJpZ2dlcj5cclxuICAgICAgICAgIDwvVGFic0xpc3Q+XHJcbiAgICAgICAgICA8VGFic0NvbnRlbnQgdmFsdWU9XCJydW5uaW5nXCI+XHJcbiAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwibXktNVwiPlxyXG4gICAgICAgICAgICAgIDxOZXdPcmRlciAvPlxyXG4gICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJoaWRkZW4gbWQ6YmxvY2tcIj5cclxuICAgICAgICAgICAgICA8UnVubmluZ1Rhc2sgLz5cclxuICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiYmxvY2sgbWQ6aGlkZGVuXCI+XHJcbiAgICAgICAgICAgICAgPFJ1bm5pbmdNb2JpbGUgLz5cclxuICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICA8L1RhYnNDb250ZW50PlxyXG4gICAgICAgICAgPFRhYnNDb250ZW50IHZhbHVlPVwicGF1c2VkXCI+XHJcbiAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwibXktNVwiPlxyXG4gICAgICAgICAgICAgIDxOZXdPcmRlciAvPlxyXG4gICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgPFBhdXNlVGFzayAvPlxyXG4gICAgICAgICAgPC9UYWJzQ29udGVudD5cclxuICAgICAgICAgIDxUYWJzQ29udGVudCB2YWx1ZT1cInVucGFpZFwiPlxyXG4gICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cIm15LTVcIj5cclxuICAgICAgICAgICAgICA8TmV3T3JkZXIgLz5cclxuICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgIDxVbnBhaWRUYXNrIC8+XHJcbiAgICAgICAgICA8L1RhYnNDb250ZW50PlxyXG4gICAgICAgICAgPFRhYnNDb250ZW50IHZhbHVlPVwicGFpZFwiPlxyXG4gICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cIm15LTVcIj5cclxuICAgICAgICAgICAgICA8TmV3T3JkZXIgLz5cclxuICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgIDxQYWlkVGFzayAvPlxyXG4gICAgICAgICAgPC9UYWJzQ29udGVudD5cclxuICAgICAgICAgIDxUYWJzQ29udGVudCB2YWx1ZT1cImNhbmNlbGxlZFwiPlxyXG4gICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cIm15LTVcIj5cclxuICAgICAgICAgICAgICA8TmV3T3JkZXIgLz5cclxuICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgIDxDYW5jZWxsZWRUYXNrIC8+XHJcbiAgICAgICAgICA8L1RhYnNDb250ZW50PlxyXG4gICAgICAgICAgPFRhYnNDb250ZW50IHZhbHVlPVwiZmFpbGVkXCI+PC9UYWJzQ29udGVudD5cclxuICAgICAgICA8L1RhYnM+XHJcbiAgICAgIDwvbWFpbj5cclxuICAgIDwvTmV4dFVJUHJvdmlkZXI+XHJcbiAgKVxyXG59XHJcbiJdLCJuYW1lcyI6WyJUYWJzIiwiVGFic0NvbnRlbnQiLCJUYWJzTGlzdCIsIlRhYnNUcmlnZ2VyIiwiTmV3T3JkZXIiLCJSdW5uaW5nVGFzayIsIlJ1bm5pbmdNb2JpbGUiLCJDYW5jZWxsZWRUYXNrIiwiUGF1c2VUYXNrIiwiUGFpZFRhc2siLCJVbnBhaWRUYXNrIiwiQmFkZ2UiLCJjbiIsIk5leHRVSVByb3ZpZGVyIiwicnVubmluZ0NvdW50IiwicGF1c2VDb3VudCIsInVucGFpZENvdW50IiwicGFpZENvdW50IiwiY2FuY2VsbGVkQ291bnQiLCJmYWlsZWRDb3VudCIsIkhvbWUiLCJtYWluIiwiY2xhc3NOYW1lIiwiZGVmYXVsdFZhbHVlIiwidmFsdWUiLCJkaXYiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///(app-pages-browser)/./src/app/page.tsx\n"));

/***/ })

});