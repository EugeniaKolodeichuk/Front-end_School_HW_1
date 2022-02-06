/*
 * ATTENTION: The "eval" devtool has been used (maybe by default in mode: "development").
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
exports.id = "src_components_AppBar_AppBar_tsx";
exports.ids = ["src_components_AppBar_AppBar_tsx"];
exports.modules = {

/***/ "./src/components/AppBar/AppBar.tsx":
/*!******************************************!*\
  !*** ./src/components/AppBar/AppBar.tsx ***!
  \******************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (/* binding */ AppBar)\n/* harmony export */ });\n/* harmony import */ var _StyledAppBar__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./StyledAppBar */ \"./src/components/AppBar/StyledAppBar.tsx\");\n/* harmony import */ var _Navigation_Navigation__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../Navigation/Navigation */ \"./src/components/Navigation/Navigation.tsx\");\n\n\nfunction AppBar() {\n  return /* @__PURE__ */ React.createElement(_StyledAppBar__WEBPACK_IMPORTED_MODULE_0__.default, {\n    \"data-testid\": \"header\"\n  }, /* @__PURE__ */ React.createElement(_Navigation_Navigation__WEBPACK_IMPORTED_MODULE_1__.default, null));\n}\n\n\n//# sourceURL=webpack://TikTuk/./src/components/AppBar/AppBar.tsx?");

/***/ }),

/***/ "./src/components/AppBar/StyledAppBar.tsx":
/*!************************************************!*\
  !*** ./src/components/AppBar/StyledAppBar.tsx ***!
  \************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! styled-components */ \"./node_modules/styled-components/dist/styled-components.esm.js\");\n\nconst StyledAppBar = styled_components__WEBPACK_IMPORTED_MODULE_0__.default.header`\n  display: flex;\n  justify-content: space-between;\n  align-items: center;\n  min-height: 80px;\n  margin-bottom: 16px;\n  border-bottom: 1px solid ${(properties) => properties.theme.color};\n  box-shadow: 0px 2px 1px -1px rgba(0, 0, 0, 0.12);\n`;\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (StyledAppBar);\n\n\n//# sourceURL=webpack://TikTuk/./src/components/AppBar/StyledAppBar.tsx?");

/***/ }),

/***/ "./src/components/Navigation/Navigation.tsx":
/*!**************************************************!*\
  !*** ./src/components/Navigation/Navigation.tsx ***!
  \**************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var _StyledNavigation__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./StyledNavigation */ \"./src/components/Navigation/StyledNavigation.tsx\");\n/* harmony import */ var _Theme_ThemeToggle__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../Theme/ThemeToggle */ \"./src/components/Theme/ThemeToggle.tsx\");\n\n\nconst Navigation = () => /* @__PURE__ */ React.createElement(React.Fragment, null, /* @__PURE__ */ React.createElement(_StyledNavigation__WEBPACK_IMPORTED_MODULE_0__.StyledNavigation, {\n  \"data-testid\": \"navigation\"\n}, /* @__PURE__ */ React.createElement(_StyledNavigation__WEBPACK_IMPORTED_MODULE_0__.StyledLink, {\n  exact: true,\n  to: \"/\"\n}, \"TikTuk trends\")), /* @__PURE__ */ React.createElement(_Theme_ThemeToggle__WEBPACK_IMPORTED_MODULE_1__.default, null));\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (Navigation);\n\n\n//# sourceURL=webpack://TikTuk/./src/components/Navigation/Navigation.tsx?");

/***/ }),

/***/ "./src/components/Navigation/StyledNavigation.tsx":
/*!********************************************************!*\
  !*** ./src/components/Navigation/StyledNavigation.tsx ***!
  \********************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"StyledLink\": () => (/* binding */ StyledLink),\n/* harmony export */   \"StyledNavigation\": () => (/* binding */ StyledNavigation)\n/* harmony export */ });\n/* harmony import */ var react_router_dom__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react-router-dom */ \"./node_modules/react-router-dom/esm/react-router-dom.js\");\n/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! styled-components */ \"./node_modules/styled-components/dist/styled-components.esm.js\");\n\n\nconst StyledLink = (0,styled_components__WEBPACK_IMPORTED_MODULE_0__.default)(react_router_dom__WEBPACK_IMPORTED_MODULE_1__.NavLink)`\n  display: flex;\n  text-decoration: none;\n  padding: 20px;\n  font-weight: 500;\n  color: ${(properties) => properties.theme.color};\n\n  &:hover {\n    color: #005eaa;\n  }\n`;\nconst StyledNavigation = styled_components__WEBPACK_IMPORTED_MODULE_0__.default.nav`\n  display: flex;\n  justify-content: space-between;\n  font-size: 36px;\n`;\n\n\n//# sourceURL=webpack://TikTuk/./src/components/Navigation/StyledNavigation.tsx?");

/***/ }),

/***/ "./src/components/Theme/StyledToggle.tsx":
/*!***********************************************!*\
  !*** ./src/components/Theme/StyledToggle.tsx ***!
  \***********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"StyledButton\": () => (/* binding */ StyledButton),\n/* harmony export */   \"ToggleContainer\": () => (/* binding */ ToggleContainer),\n/* harmony export */   \"StyledSunIcon\": () => (/* binding */ StyledSunIcon),\n/* harmony export */   \"StyledMoonIcon\": () => (/* binding */ StyledMoonIcon)\n/* harmony export */ });\n/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! styled-components */ \"./node_modules/styled-components/dist/styled-components.esm.js\");\n/* harmony import */ var _static_moon_svg__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../static/moon.svg */ \"./src/static/moon.svg\");\n/* harmony import */ var _static_moon_svg__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_static_moon_svg__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _static_sun_svg__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../static/sun.svg */ \"./src/static/sun.svg\");\n/* harmony import */ var _static_sun_svg__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_static_sun_svg__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _StyledTheme__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./StyledTheme */ \"./src/components/Theme/StyledTheme.tsx\");\n\n\n\n\nconst StyledButton = styled_components__WEBPACK_IMPORTED_MODULE_3__.default.div`\n  border: none;\n  cursor: pointer;\n  padding-right: 20px;\n  padding-left: auto;\n  background: ${(properties) => properties.theme.background};\n  color: ${(properties) => properties.theme.color};\n`;\nconst ToggleContainer = styled_components__WEBPACK_IMPORTED_MODULE_3__.default.button`\n  display: flex;\n  background: ${({ theme }) => theme.gradient};\n  border: 2px solid ${({ theme }) => theme.toggleBorder};\n  border-radius: 30px;\n  cursor: pointer;\n  display: flex;\n  font-size: 0.5rem;\n  justify-content: space-between;\n  overflow: hidden;\n  position: relative;\n  width: 4rem;\n  height: 2rem;\n`;\nconst StyledSunIcon = (0,styled_components__WEBPACK_IMPORTED_MODULE_3__.default)(_static_sun_svg__WEBPACK_IMPORTED_MODULE_1__.ReactComponent)`\n  height: auto;\n  width: 2rem;\n  transition: all 0.3s linear;\n  transform: ${(properties) => properties.theme === _StyledTheme__WEBPACK_IMPORTED_MODULE_2__.LightTheme ? \"translateY(0)\" : \"translateY(100px)\"};\n`;\nconst StyledMoonIcon = (0,styled_components__WEBPACK_IMPORTED_MODULE_3__.default)(_static_moon_svg__WEBPACK_IMPORTED_MODULE_0__.ReactComponent)`\n  height: auto;\n  width: 2rem;\n  transition: all 0.3s linear;\n  transform: ${(properties) => properties.theme === _StyledTheme__WEBPACK_IMPORTED_MODULE_2__.LightTheme ? \"translateY(-100px)\" : \"translateY(0)\"};\n`;\n\n\n//# sourceURL=webpack://TikTuk/./src/components/Theme/StyledToggle.tsx?");

/***/ }),

/***/ "./src/components/Theme/ThemeToggle.tsx":
/*!**********************************************!*\
  !*** ./src/components/Theme/ThemeToggle.tsx ***!
  \**********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (/* binding */ ThemeToggle)\n/* harmony export */ });\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var _App__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../App */ \"./src/App.tsx\");\n/* harmony import */ var _StyledToggle__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./StyledToggle */ \"./src/components/Theme/StyledToggle.tsx\");\n\n\n\nfunction ThemeToggle() {\n  const { value, setThemeValue } = (0,react__WEBPACK_IMPORTED_MODULE_0__.useContext)(_App__WEBPACK_IMPORTED_MODULE_1__.ThemeContext);\n  const toggleTheme = () => {\n    if (setThemeValue) {\n      if (value === \"light\") {\n        setThemeValue(\"dark\");\n      } else {\n        setThemeValue(\"light\");\n      }\n    }\n  };\n  return /* @__PURE__ */ React.createElement(_StyledToggle__WEBPACK_IMPORTED_MODULE_2__.StyledButton, {\n    onClick: toggleTheme\n  }, /* @__PURE__ */ React.createElement(_StyledToggle__WEBPACK_IMPORTED_MODULE_2__.ToggleContainer, null, /* @__PURE__ */ React.createElement(_StyledToggle__WEBPACK_IMPORTED_MODULE_2__.StyledSunIcon, null), /* @__PURE__ */ React.createElement(_StyledToggle__WEBPACK_IMPORTED_MODULE_2__.StyledMoonIcon, null)));\n}\n\n\n//# sourceURL=webpack://TikTuk/./src/components/Theme/ThemeToggle.tsx?");

/***/ }),

/***/ "./src/static/moon.svg":
/*!*****************************!*\
  !*** ./src/static/moon.svg ***!
  \*****************************/
/***/ (() => {

eval("/* @__PURE__ */ React.createElement(\"svg\", {\n  version: \"1.1\",\n  xmlns: \"http://www.w3.org/2000/svg\",\n  width: \"1024\",\n  height: \"1024\",\n  viewBox: \"0 0 1024 1024\"\n}, /* @__PURE__ */ React.createElement(\"title\", null), /* @__PURE__ */ React.createElement(\"g\", {\n  id: \"icomoon-ignore\"\n}), /* @__PURE__ */ React.createElement(\"path\", {\n  fill: \"#000\",\n  d: \"M582.857 376.381l-38.857 103.619-38.857-103.619-73.143-24.381 73.143-24.381 38.857-103.619 38.857 103.619 73.143 24.381-73.143 24.381zM710.857 583.619l-38.857-103.619-38.857 103.619-73.143 24.381 73.143 24.381 38.857 103.619 38.857-103.619 73.143-24.381-73.143-24.381zM474.768 714.595c-19.106 76.535-88.316 133.232-170.768 133.232-97.202 0-176-78.798-176-176 0-82.452 56.698-151.662 133.232-170.768 11.244-2.807 22.917-4.533 34.901-5.060-5.268 14.965-8.133 31.061-8.133 47.827 0 79.529 64.471 144 144 144 16.766 0 32.863-2.865 47.827-8.133-0.527 11.984-2.253 23.656-5.060 34.901v0zM859.755 397.714l52.245 18.286-52.245 18.286-27.755 77.714-27.755-77.714-52.245-18.286 52.245-18.286 27.755-77.714 27.755 77.714z\"\n}));\n\n\n//# sourceURL=webpack://TikTuk/./src/static/moon.svg?");

/***/ }),

/***/ "./src/static/sun.svg":
/*!****************************!*\
  !*** ./src/static/sun.svg ***!
  \****************************/
/***/ (() => {

eval("/* @__PURE__ */ React.createElement(\"svg\", {\n  version: \"1.1\",\n  xmlns: \"http://www.w3.org/2000/svg\",\n  width: \"1024\",\n  height: \"1024\",\n  viewBox: \"0 0 1024 1024\"\n}, /* @__PURE__ */ React.createElement(\"title\", null), /* @__PURE__ */ React.createElement(\"g\", {\n  id: \"icomoon-ignore\"\n}), /* @__PURE__ */ React.createElement(\"path\", {\n  fill: \"#000\",\n  d: \"M528.93 704c97.202 0 176-78.798 176-176s-78.798-176-176-176c-97.202 0-176 78.798-176 176s78.798 176 176 176v0zM528.93 224c-8.837 0-16 6.904-16 15.852v64.295c0 8.755 7.422 15.852 16 15.852 8.837 0 16-6.904 16-15.852v-64.295c0-8.755-7.422-15.852-16-15.852v0zM744.548 313.312c-6.248-6.248-16.196-6.432-22.523-0.104l-45.464 45.464c-6.191 6.191-5.961 16.457 0.104 22.523 6.248 6.248 16.196 6.432 22.523 0.104l45.464-45.464c6.191-6.191 5.961-16.457-0.104-22.523v0zM833.859 528.93c0-8.837-6.904-16-15.852-16h-64.295c-8.755 0-15.852 7.422-15.852 16 0 8.837 6.904 16 15.852 16h64.295c8.755 0 15.852-7.422 15.852-16v0zM744.548 744.548c6.248-6.248 6.432-16.196 0.104-22.523l-45.464-45.464c-6.191-6.191-16.457-5.961-22.523 0.104-6.248 6.248-6.432 16.196-0.104 22.523l45.464 45.464c6.191 6.191 16.457 5.961 22.523-0.104v0zM528.93 833.859c8.837 0 16-6.904 16-15.852v-64.295c0-8.755-7.422-15.852-16-15.852-8.837 0-16 6.904-16 15.852v64.295c0 8.755 7.422 15.852 16 15.852v0zM313.312 744.548c6.248 6.248 16.196 6.432 22.523 0.104l45.464-45.464c6.191-6.191 5.961-16.457-0.104-22.523-6.248-6.248-16.196-6.432-22.523-0.104l-45.464 45.464c-6.191 6.191-5.961 16.457 0.104 22.523v0zM224 528.93c0 8.837 6.904 16 15.852 16h64.295c8.755 0 15.852-7.422 15.852-16 0-8.837-6.904-16-15.852-16h-64.295c-8.755 0-15.852 7.422-15.852 16v0zM313.312 313.312c-6.248 6.248-6.432 16.196-0.104 22.523l45.464 45.464c6.191 6.191 16.457 5.961 22.523-0.104 6.248-6.248 6.432-16.196 0.104-22.523l-45.464-45.464c-6.191-6.191-16.457-5.961-22.523 0.104v0z\"\n}));\n\n\n//# sourceURL=webpack://TikTuk/./src/static/sun.svg?");

/***/ })

};
;