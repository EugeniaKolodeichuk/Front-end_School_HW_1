/*
 * ATTENTION: The "eval" devtool has been used (maybe by default in mode: "development").
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
exports.id = "src_service_app_tsx-src_static_default_jpg";
exports.ids = ["src_service_app_tsx-src_static_default_jpg"];
exports.modules = {

/***/ "./src/api/api.tsx":
/*!*************************!*\
  !*** ./src/api/api.tsx ***!
  \*************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! axios */ \"./node_modules/axios/index.js\");\n/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(axios__WEBPACK_IMPORTED_MODULE_0__);\n\nconst baseURL = \"https://tiktok33.p.rapidapi.com\";\nconst API = axios__WEBPACK_IMPORTED_MODULE_0___default().create({\n  baseURL,\n  headers: {\n    \"x-rapidapi-host\": `${process.env.REACT_APP_HOST}`,\n    \"x-rapidapi-key\": `${process.env.REACT_APP_API_KEY}`,\n    \"Content-Type\": \"application/json\"\n  }\n});\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (API);\n\n\n//# sourceURL=webpack://TikTuk/./src/api/api.tsx?");

/***/ }),

/***/ "./src/service/app.tsx":
/*!*****************************!*\
  !*** ./src/service/app.tsx ***!
  \*****************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"getTrendingFeed\": () => (/* binding */ getTrendingFeed),\n/* harmony export */   \"getUserInfo\": () => (/* binding */ getUserInfo),\n/* harmony export */   \"getUserFeed\": () => (/* binding */ getUserFeed)\n/* harmony export */ });\n/* harmony import */ var _api_api__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../api/api */ \"./src/api/api.tsx\");\nvar __async = (__this, __arguments, generator) => {\n  return new Promise((resolve, reject) => {\n    var fulfilled = (value) => {\n      try {\n        step(generator.next(value));\n      } catch (e) {\n        reject(e);\n      }\n    };\n    var rejected = (value) => {\n      try {\n        step(generator.throw(value));\n      } catch (e) {\n        reject(e);\n      }\n    };\n    var step = (x) => x.done ? resolve(x.value) : Promise.resolve(x.value).then(fulfilled, rejected);\n    step((generator = generator.apply(__this, __arguments)).next());\n  });\n};\n\nfunction getTrendingFeed(currentPage) {\n  return __async(this, null, function* () {\n    const response = yield _api_api__WEBPACK_IMPORTED_MODULE_0__.default.get(`/trending/feed/?limit=30&page=${currentPage}`);\n    return response.data;\n  });\n}\nfunction getUserInfo(uniqueId) {\n  return __async(this, null, function* () {\n    const response = yield _api_api__WEBPACK_IMPORTED_MODULE_0__.default.get(`/user/info/${uniqueId}`);\n    return response.data;\n  });\n}\nfunction getUserFeed(uniqueId) {\n  return __async(this, null, function* () {\n    const response = yield _api_api__WEBPACK_IMPORTED_MODULE_0__.default.get(`/user/feed/${uniqueId}`);\n    return response.data;\n  });\n}\n\n\n//# sourceURL=webpack://TikTuk/./src/service/app.tsx?");

/***/ }),

/***/ "./src/static/default.jpg":
/*!********************************!*\
  !*** ./src/static/default.jpg ***!
  \********************************/
/***/ (() => {

eval("throw new Error(\"Module parse failed: Unexpected character '�' (1:0)\\nYou may need an appropriate loader to handle this file type, currently no loaders are configured to process this file. See https://webpack.js.org/concepts#loaders\\n(Source code omitted for this binary file)\");\n\n//# sourceURL=webpack://TikTuk/./src/static/default.jpg?");

/***/ })

};
;