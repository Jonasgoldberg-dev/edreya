"use strict";
/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
self["webpackHotUpdate_N_E"]("pages/index",{

/***/ "./src/layouts/Header.js":
/*!*******************************!*\
  !*** ./src/layouts/Header.js ***!
  \*******************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _context_context__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../context/context */ \"./src/context/context.js\");\n/* harmony import */ var react_social_icons__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! react-social-icons */ \"./node_modules/react-social-icons/build/react-social-icons.js\");\nvar _this = undefined;\n\n\n\n\nvar _s = $RefreshSig$();\nvar Header = function() {\n    _s();\n    var navContext = (0,react__WEBPACK_IMPORTED_MODULE_1__.useContext)(_context_context__WEBPACK_IMPORTED_MODULE_2__.context);\n    var nav = navContext.nav, changeNav = navContext.changeNav;\n    var activeNav = function(value) {\n        return value == nav ? \"active\" : \"\";\n    };\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n        className: \"edrea_tm_header\",\n        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n            className: \"header_inner\",\n            children: [\n                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                    className: \"logo\",\n                    children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"p\", {\n                        children: \"J. Goldberg Consult\"\n                    }, void 0, false, {\n                        fileName: \"/Users/mac/Desktop/Portfolio site/edreya/src/layouts/Header.js\",\n                        lineNumber: 15,\n                        columnNumber: 11\n                    }, _this)\n                }, void 0, false, {\n                    fileName: \"/Users/mac/Desktop/Portfolio site/edreya/src/layouts/Header.js\",\n                    lineNumber: 14,\n                    columnNumber: 9\n                }, _this),\n                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                    className: \"menu\",\n                    children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"ul\", {\n                        className: \"transition_link\",\n                        children: [\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"li\", {\n                                className: activeNav(\"home\"),\n                                children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"a\", {\n                                    href: \"#home\",\n                                    onClick: function() {\n                                        return changeNav(\"home\");\n                                    },\n                                    children: \"Forside\"\n                                }, void 0, false, {\n                                    fileName: \"/Users/mac/Desktop/Portfolio site/edreya/src/layouts/Header.js\",\n                                    lineNumber: 20,\n                                    columnNumber: 15\n                                }, _this)\n                            }, void 0, false, {\n                                fileName: \"/Users/mac/Desktop/Portfolio site/edreya/src/layouts/Header.js\",\n                                lineNumber: 19,\n                                columnNumber: 13\n                            }, _this),\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"li\", {\n                                className: activeNav(\"about\"),\n                                children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"a\", {\n                                    href: \"#about\",\n                                    onClick: function() {\n                                        return changeNav(\"about\");\n                                    },\n                                    children: \"Om\"\n                                }, void 0, false, {\n                                    fileName: \"/Users/mac/Desktop/Portfolio site/edreya/src/layouts/Header.js\",\n                                    lineNumber: 25,\n                                    columnNumber: 15\n                                }, _this)\n                            }, void 0, false, {\n                                fileName: \"/Users/mac/Desktop/Portfolio site/edreya/src/layouts/Header.js\",\n                                lineNumber: 24,\n                                columnNumber: 13\n                            }, _this),\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"li\", {\n                                className: activeNav(\"portfolio\"),\n                                children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"a\", {\n                                    href: \"#portfolio\",\n                                    onClick: function() {\n                                        return changeNav(\"portfolio\");\n                                    },\n                                    children: \"Portef\\xf8lje\"\n                                }, void 0, false, {\n                                    fileName: \"/Users/mac/Desktop/Portfolio site/edreya/src/layouts/Header.js\",\n                                    lineNumber: 30,\n                                    columnNumber: 15\n                                }, _this)\n                            }, void 0, false, {\n                                fileName: \"/Users/mac/Desktop/Portfolio site/edreya/src/layouts/Header.js\",\n                                lineNumber: 29,\n                                columnNumber: 13\n                            }, _this),\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"li\", {\n                                className: activeNav(\"news\"),\n                                children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"a\", {\n                                    href: \"#news\",\n                                    onClick: function() {\n                                        return changeNav(\"news\");\n                                    },\n                                    children: \"News\"\n                                }, void 0, false, {\n                                    fileName: \"/Users/mac/Desktop/Portfolio site/edreya/src/layouts/Header.js\",\n                                    lineNumber: 35,\n                                    columnNumber: 15\n                                }, _this)\n                            }, void 0, false, {\n                                fileName: \"/Users/mac/Desktop/Portfolio site/edreya/src/layouts/Header.js\",\n                                lineNumber: 34,\n                                columnNumber: 13\n                            }, _this),\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"li\", {\n                                className: activeNav(\"contact\"),\n                                children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"a\", {\n                                    href: \"#contact\",\n                                    onClick: function() {\n                                        return changeNav(\"contact\");\n                                    },\n                                    children: \"Contact\"\n                                }, void 0, false, {\n                                    fileName: \"/Users/mac/Desktop/Portfolio site/edreya/src/layouts/Header.js\",\n                                    lineNumber: 40,\n                                    columnNumber: 15\n                                }, _this)\n                            }, void 0, false, {\n                                fileName: \"/Users/mac/Desktop/Portfolio site/edreya/src/layouts/Header.js\",\n                                lineNumber: 39,\n                                columnNumber: 13\n                            }, _this)\n                        ]\n                    }, void 0, true, {\n                        fileName: \"/Users/mac/Desktop/Portfolio site/edreya/src/layouts/Header.js\",\n                        lineNumber: 18,\n                        columnNumber: 11\n                    }, _this)\n                }, void 0, false, {\n                    fileName: \"/Users/mac/Desktop/Portfolio site/edreya/src/layouts/Header.js\",\n                    lineNumber: 17,\n                    columnNumber: 9\n                }, _this),\n                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                    className: \"SocialIcons\",\n                    children: [\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(react_social_icons__WEBPACK_IMPORTED_MODULE_3__.SocialIcon, {\n                            url: \"https://github.com/Jonasgoldberg-dev\"\n                        }, void 0, false, {\n                            fileName: \"/Users/mac/Desktop/Portfolio site/edreya/src/layouts/Header.js\",\n                            lineNumber: 47,\n                            columnNumber: 13\n                        }, _this),\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(react_social_icons__WEBPACK_IMPORTED_MODULE_3__.SocialIcon, {\n                            url: \"https://www.linkedin.com/in/jonas-goldberg-4a7577103/\"\n                        }, void 0, false, {\n                            fileName: \"/Users/mac/Desktop/Portfolio site/edreya/src/layouts/Header.js\",\n                            lineNumber: 48,\n                            columnNumber: 13\n                        }, _this)\n                    ]\n                }, void 0, true, {\n                    fileName: \"/Users/mac/Desktop/Portfolio site/edreya/src/layouts/Header.js\",\n                    lineNumber: 46,\n                    columnNumber: 9\n                }, _this)\n            ]\n        }, void 0, true, {\n            fileName: \"/Users/mac/Desktop/Portfolio site/edreya/src/layouts/Header.js\",\n            lineNumber: 13,\n            columnNumber: 7\n        }, _this)\n    }, void 0, false, {\n        fileName: \"/Users/mac/Desktop/Portfolio site/edreya/src/layouts/Header.js\",\n        lineNumber: 12,\n        columnNumber: 5\n    }, _this);\n};\n_s(Header, \"8G05RIizZzUWAWMLZt15OnGrJ+Q=\");\n_c = Header;\n/* harmony default export */ __webpack_exports__[\"default\"] = (Header);\nvar _c;\n$RefreshReg$(_c, \"Header\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports on update so we can compare the boundary\n                // signatures.\n                module.hot.dispose(function (data) {\n                    data.prevExports = currentExports;\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevExports !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevExports !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,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YjYiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgdXNlQ29udGV4dCB9IGZyb20gXCJyZWFjdFwiO1xyXG5pbXBvcnQgeyBjb250ZXh0IH0gZnJvbSBcIi4uL2NvbnRleHQvY29udGV4dFwiO1xyXG5pbXBvcnQgeyBTb2NpYWxJY29uIH0gZnJvbSAncmVhY3Qtc29jaWFsLWljb25zJztcclxuXHJcbmNvbnN0IEhlYWRlciA9ICgpID0+IHtcclxuICBjb25zdCBuYXZDb250ZXh0ID0gdXNlQ29udGV4dChjb250ZXh0KTtcclxuICBjb25zdCB7IG5hdiwgY2hhbmdlTmF2IH0gPSBuYXZDb250ZXh0O1xyXG5cclxuICBjb25zdCBhY3RpdmVOYXYgPSAodmFsdWUpID0+ICh2YWx1ZSA9PSBuYXYgPyBcImFjdGl2ZVwiIDogXCJcIik7XHJcblxyXG4gIHJldHVybiAoXHJcbiAgICA8ZGl2IGNsYXNzTmFtZT1cImVkcmVhX3RtX2hlYWRlclwiPlxyXG4gICAgICA8ZGl2IGNsYXNzTmFtZT1cImhlYWRlcl9pbm5lclwiPlxyXG4gICAgICAgIDxkaXYgY2xhc3NOYW1lPVwibG9nb1wiPlxyXG4gICAgICAgICAgPHA+Si4gR29sZGJlcmcgQ29uc3VsdDwvcD5cclxuICAgICAgICA8L2Rpdj5cclxuICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cIm1lbnVcIj5cclxuICAgICAgICAgIDx1bCBjbGFzc05hbWU9XCJ0cmFuc2l0aW9uX2xpbmtcIj5cclxuICAgICAgICAgICAgPGxpIGNsYXNzTmFtZT17YWN0aXZlTmF2KFwiaG9tZVwiKX0+XHJcbiAgICAgICAgICAgICAgPGEgaHJlZj1cIiNob21lXCIgb25DbGljaz17KCkgPT4gY2hhbmdlTmF2KFwiaG9tZVwiKX0+XHJcbiAgICAgICAgICAgICAgICBGb3JzaWRlXHJcbiAgICAgICAgICAgICAgPC9hPlxyXG4gICAgICAgICAgICA8L2xpPlxyXG4gICAgICAgICAgICA8bGkgY2xhc3NOYW1lPXthY3RpdmVOYXYoXCJhYm91dFwiKX0+XHJcbiAgICAgICAgICAgICAgPGEgaHJlZj1cIiNhYm91dFwiIG9uQ2xpY2s9eygpID0+IGNoYW5nZU5hdihcImFib3V0XCIpfT5cclxuICAgICAgICAgICAgICAgIE9tXHJcbiAgICAgICAgICAgICAgPC9hPlxyXG4gICAgICAgICAgICA8L2xpPlxyXG4gICAgICAgICAgICA8bGkgY2xhc3NOYW1lPXthY3RpdmVOYXYoXCJwb3J0Zm9saW9cIil9PlxyXG4gICAgICAgICAgICAgIDxhIGhyZWY9XCIjcG9ydGZvbGlvXCIgb25DbGljaz17KCkgPT4gY2hhbmdlTmF2KFwicG9ydGZvbGlvXCIpfT5cclxuICAgICAgICAgICAgICAgIFBvcnRlZsO4bGplXHJcbiAgICAgICAgICAgICAgPC9hPlxyXG4gICAgICAgICAgICA8L2xpPlxyXG4gICAgICAgICAgICA8bGkgY2xhc3NOYW1lPXthY3RpdmVOYXYoXCJuZXdzXCIpfT5cclxuICAgICAgICAgICAgICA8YSBocmVmPVwiI25ld3NcIiBvbkNsaWNrPXsoKSA9PiBjaGFuZ2VOYXYoXCJuZXdzXCIpfT5cclxuICAgICAgICAgICAgICAgIE5ld3NcclxuICAgICAgICAgICAgICA8L2E+XHJcbiAgICAgICAgICAgIDwvbGk+XHJcbiAgICAgICAgICAgIDxsaSBjbGFzc05hbWU9e2FjdGl2ZU5hdihcImNvbnRhY3RcIil9PlxyXG4gICAgICAgICAgICAgIDxhIGhyZWY9XCIjY29udGFjdFwiIG9uQ2xpY2s9eygpID0+IGNoYW5nZU5hdihcImNvbnRhY3RcIil9PlxyXG4gICAgICAgICAgICAgICAgQ29udGFjdFxyXG4gICAgICAgICAgICAgIDwvYT5cclxuICAgICAgICAgICAgPC9saT5cclxuICAgICAgICAgIDwvdWw+XHJcbiAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJTb2NpYWxJY29uc1wiPlxyXG4gICAgICAgICAgICA8U29jaWFsSWNvbiB1cmw9XCJodHRwczovL2dpdGh1Yi5jb20vSm9uYXNnb2xkYmVyZy1kZXZcIiAvPlxyXG4gICAgICAgICAgICA8U29jaWFsSWNvbiB1cmw9XCJodHRwczovL3d3dy5saW5rZWRpbi5jb20vaW4vam9uYXMtZ29sZGJlcmctNGE3NTc3MTAzL1wiIC8+XHJcbiAgICAgICAgPC9kaXY+XHJcbiAgICAgIDwvZGl2PlxyXG4gICAgPC9kaXY+XHJcbiAgKTtcclxufTtcclxuZXhwb3J0IGRlZmF1bHQgSGVhZGVyO1xyXG4iXSwibmFtZXMiOlsidXNlQ29udGV4dCIsImNvbnRleHQiLCJTb2NpYWxJY29uIiwiSGVhZGVyIiwibmF2Q29udGV4dCIsIm5hdiIsImNoYW5nZU5hdiIsImFjdGl2ZU5hdiIsInZhbHVlIiwiZGl2IiwiY2xhc3NOYW1lIiwicCIsInVsIiwibGkiLCJhIiwiaHJlZiIsIm9uQ2xpY2siLCJ1cmwiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./src/layouts/Header.js\n");

/***/ })

});