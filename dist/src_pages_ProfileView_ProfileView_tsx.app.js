/*
 * ATTENTION: The "eval" devtool has been used (maybe by default in mode: "development").
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
exports.id = "src_pages_ProfileView_ProfileView_tsx";
exports.ids = ["src_pages_ProfileView_ProfileView_tsx"];
exports.modules = {

/***/ "./src/api/api.tsx":
/*!*************************!*\
  !*** ./src/api/api.tsx ***!
  \*************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! axios */ \"./node_modules/axios/index.js\");\n/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(axios__WEBPACK_IMPORTED_MODULE_0__);\n\nconst baseURL = \"https://tiktok33.p.rapidapi.com\";\nconst API = axios__WEBPACK_IMPORTED_MODULE_0___default().create({\n  baseURL,\n  headers: {\n    \"x-rapidapi-host\": `${process.env.REACT_APP_HOST}`,\n    \"x-rapidapi-key\": `${process.env.REACT_APP_API_KEY}`,\n    \"Content-Type\": \"application/json\"\n  }\n});\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (API);\n\n\n//# sourceURL=webpack://TikTuk/./src/api/api.tsx?");

/***/ }),

/***/ "./src/components/UserAvatar/StyledUserAvatar.tsx":
/*!********************************************************!*\
  !*** ./src/components/UserAvatar/StyledUserAvatar.tsx ***!
  \********************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"StyledAvatar\": () => (/* binding */ StyledAvatar),\n/* harmony export */   \"StyledTitle\": () => (/* binding */ StyledTitle),\n/* harmony export */   \"StyledListNoorder\": () => (/* binding */ StyledListNoorder)\n/* harmony export */ });\n/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! styled-components */ \"./node_modules/styled-components/dist/styled-components.esm.js\");\n\nconst StyledAvatar = styled_components__WEBPACK_IMPORTED_MODULE_0__.default.img`\n  border-radius: 50%;\n`;\nconst StyledTitle = styled_components__WEBPACK_IMPORTED_MODULE_0__.default.h2`\n  display: flex;\n  justify-content: center;\n  align-items: center;\n  margin-bottom: 20px;\n`;\nconst StyledListNoorder = styled_components__WEBPACK_IMPORTED_MODULE_0__.default.div`\n  display: flex;\n  flex-wrap: wrap;\n  justify-content: space-evenly;\n  align-items: center;\n  flex-direction: column;\n  margin-top: 15px;\n  margin-bottom: 1.5em;\n  padding: 0.6em;\n  background: #fefefe8c;\n  color: #231f20;\n  width: 350px;\n  border-radius: 2px;\n  box-shadow: 0px 1px 3px 0px rgba(0, 0, 0, 0.2),\n    0px 1px 1px 0px rgba(0, 0, 0, 0.14), 0px 2px 1px 0px rgba(0, 0, 0, 0.12);\n`;\n\n\n//# sourceURL=webpack://TikTuk/./src/components/UserAvatar/StyledUserAvatar.tsx?");

/***/ }),

/***/ "./src/components/UserAvatar/UserAvatar.tsx":
/*!**************************************************!*\
  !*** ./src/components/UserAvatar/UserAvatar.tsx ***!
  \**************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var _StyledUserAvatar__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./StyledUserAvatar */ \"./src/components/UserAvatar/StyledUserAvatar.tsx\");\n/* harmony import */ var _static_default_jpg__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../static/default.jpg */ \"./src/static/default.jpg\");\n/* harmony import */ var _static_default_jpg__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_static_default_jpg__WEBPACK_IMPORTED_MODULE_1__);\n\n\nconst UserAvatar = ({ nickname, avatarMedium, signature }) => {\n  return /* @__PURE__ */ React.createElement(_StyledUserAvatar__WEBPACK_IMPORTED_MODULE_0__.StyledListNoorder, null, /* @__PURE__ */ React.createElement(_StyledUserAvatar__WEBPACK_IMPORTED_MODULE_0__.StyledAvatar, {\n    key: nickname,\n    width: \"150px\",\n    src: avatarMedium || (_static_default_jpg__WEBPACK_IMPORTED_MODULE_1___default()),\n    alt: nickname\n  }), /* @__PURE__ */ React.createElement(_StyledUserAvatar__WEBPACK_IMPORTED_MODULE_0__.StyledTitle, null, nickname), /* @__PURE__ */ React.createElement(\"p\", null, signature));\n};\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (UserAvatar);\n\n\n//# sourceURL=webpack://TikTuk/./src/components/UserAvatar/UserAvatar.tsx?");

/***/ }),

/***/ "./src/components/UserInfo/StyledUserInfo.tsx":
/*!****************************************************!*\
  !*** ./src/components/UserInfo/StyledUserInfo.tsx ***!
  \****************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"StyledProfile\": () => (/* binding */ StyledProfile),\n/* harmony export */   \"StyledTitle\": () => (/* binding */ StyledTitle)\n/* harmony export */ });\n/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! styled-components */ \"./node_modules/styled-components/dist/styled-components.esm.js\");\n\nconst StyledProfile = styled_components__WEBPACK_IMPORTED_MODULE_0__.default.div`\n  display: flex;\n  justify-content: center;\n  align-items: center;\n  flex-direction: column;\n`;\nconst StyledTitle = styled_components__WEBPACK_IMPORTED_MODULE_0__.default.h2`\n  display: flex;\n  justify-content: center;\n  align-items: center;\n  margin-bottom: 20px;\n`;\n\n\n//# sourceURL=webpack://TikTuk/./src/components/UserInfo/StyledUserInfo.tsx?");

/***/ }),

/***/ "./src/components/UserInfo/UserInfo.tsx":
/*!**********************************************!*\
  !*** ./src/components/UserInfo/UserInfo.tsx ***!
  \**********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var _UserAvatar_UserAvatar__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../UserAvatar/UserAvatar */ \"./src/components/UserAvatar/UserAvatar.tsx\");\n/* harmony import */ var _StyledUserInfo__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./StyledUserInfo */ \"./src/components/UserInfo/StyledUserInfo.tsx\");\n\n\nconst UserInfo = ({\n  uniqueId,\n  avatarMedium,\n  nickname,\n  signature\n}) => {\n  return /* @__PURE__ */ React.createElement(_StyledUserInfo__WEBPACK_IMPORTED_MODULE_1__.StyledProfile, {\n    key: uniqueId\n  }, /* @__PURE__ */ React.createElement(_UserAvatar_UserAvatar__WEBPACK_IMPORTED_MODULE_0__.default, {\n    avatarMedium,\n    nickname,\n    signature\n  }), /* @__PURE__ */ React.createElement(_StyledUserInfo__WEBPACK_IMPORTED_MODULE_1__.StyledTitle, null, \"Other posts created by \", nickname));\n};\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (UserInfo);\n\n\n//# sourceURL=webpack://TikTuk/./src/components/UserInfo/UserInfo.tsx?");

/***/ }),

/***/ "./src/components/UserVideos/StyledUserVideos.tsx":
/*!********************************************************!*\
  !*** ./src/components/UserVideos/StyledUserVideos.tsx ***!
  \********************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"StyledListNoorder\": () => (/* binding */ StyledListNoorder),\n/* harmony export */   \"StyledMainElement\": () => (/* binding */ StyledMainElement)\n/* harmony export */ });\n/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! styled-components */ \"./node_modules/styled-components/dist/styled-components.esm.js\");\n\nconst StyledListNoorder = styled_components__WEBPACK_IMPORTED_MODULE_0__.default.div`\n  display: flex;\n  flex-wrap: wrap;\n  justify-content: space-evenly;\n  align-items: center;\n  flex-direction: column;\n  margin-top: 15px;\n  margin-bottom: 1.5em;\n  padding: 0.6em;\n  background: #fefefe8c;\n  color: #231f20;\n  width: 350px;\n  border-radius: 2px;\n  box-shadow: 0px 1px 3px 0px rgba(0, 0, 0, 0.2),\n    0px 1px 1px 0px rgba(0, 0, 0, 0.14), 0px 2px 1px 0px rgba(0, 0, 0, 0.12);\n`;\nconst StyledMainElement = styled_components__WEBPACK_IMPORTED_MODULE_0__.default.img`\n  padding: 15px;\n  display: flex;\n  width: 300px;\n`;\n\n\n//# sourceURL=webpack://TikTuk/./src/components/UserVideos/StyledUserVideos.tsx?");

/***/ }),

/***/ "./src/components/UserVideos/UserVideos.tsx":
/*!**************************************************!*\
  !*** ./src/components/UserVideos/UserVideos.tsx ***!
  \**************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var _VideoStats_VideoStats__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../VideoStats/VideoStats */ \"./src/components/VideoStats/VideoStats.tsx\");\n/* harmony import */ var _StyledUserVideos__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./StyledUserVideos */ \"./src/components/UserVideos/StyledUserVideos.tsx\");\n\n\nconst UserVideos = ({ user }) => {\n  return /* @__PURE__ */ React.createElement(_StyledUserVideos__WEBPACK_IMPORTED_MODULE_1__.StyledListNoorder, null, /* @__PURE__ */ React.createElement(_VideoStats_VideoStats__WEBPACK_IMPORTED_MODULE_0__.default, {\n    playCount: user.stats.playCount,\n    diggCount: user.stats.diggCount,\n    commentCount: user.stats.commentCount\n  }), /* @__PURE__ */ React.createElement(_StyledUserVideos__WEBPACK_IMPORTED_MODULE_1__.StyledMainElement, {\n    key: user.video.id,\n    src: user.video.originCover,\n    alt: user.desc\n  }), /* @__PURE__ */ React.createElement(\"p\", null, user.desc));\n};\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (UserVideos);\n\n\n//# sourceURL=webpack://TikTuk/./src/components/UserVideos/UserVideos.tsx?");

/***/ }),

/***/ "./src/components/VideoStats/VideoStats.tsx":
/*!**************************************************!*\
  !*** ./src/components/VideoStats/VideoStats.tsx ***!
  \**************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\nconst VideoStats = ({\n  playCount = 0,\n  diggCount = 0,\n  commentCount = 0\n}) => {\n  return /* @__PURE__ */ React.createElement(\"ul\", null, /* @__PURE__ */ React.createElement(\"li\", null, /* @__PURE__ */ React.createElement(\"b\", null, playCount), \" views\"), /* @__PURE__ */ React.createElement(\"li\", null, /* @__PURE__ */ React.createElement(\"b\", null, diggCount), \" likes\"), /* @__PURE__ */ React.createElement(\"li\", null, /* @__PURE__ */ React.createElement(\"b\", null, commentCount), \" comments\"));\n};\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (VideoStats);\n\n\n//# sourceURL=webpack://TikTuk/./src/components/VideoStats/VideoStats.tsx?");

/***/ }),

/***/ "./src/pages/ProfileView/ProfileView.tsx":
/*!***********************************************!*\
  !*** ./src/pages/ProfileView/ProfileView.tsx ***!
  \***********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (/* binding */ ProfileView)\n/* harmony export */ });\n/* harmony import */ var react_router__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! react-router */ \"./node_modules/react-router/esm/react-router.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var _StyledProfileView__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./StyledProfileView */ \"./src/pages/ProfileView/StyledProfileView.tsx\");\n/* harmony import */ var _components_Loader_Loader__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../components/Loader/Loader */ \"./src/components/Loader/Loader.tsx\");\n/* harmony import */ var _service_app__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../service/app */ \"./src/service/app.tsx\");\n/* harmony import */ var _components_UserVideos_UserVideos__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../components/UserVideos/UserVideos */ \"./src/components/UserVideos/UserVideos.tsx\");\n/* harmony import */ var _components_UserInfo_UserInfo__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../components/UserInfo/UserInfo */ \"./src/components/UserInfo/UserInfo.tsx\");\n\n\n\n\n\n\n\nfunction ProfileView() {\n  const { uniqueId } = (0,react_router__WEBPACK_IMPORTED_MODULE_6__.useParams)();\n  const [userFeed, setUserFeed] = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)([]);\n  const [userInfo, setUserInfo] = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)(null);\n  (0,react__WEBPACK_IMPORTED_MODULE_0__.useEffect)(() => {\n    try {\n      (0,_service_app__WEBPACK_IMPORTED_MODULE_3__.getUserInfo)(uniqueId).then((data) => {\n        setUserInfo(data);\n      });\n    } catch (error) {\n      console.error(error);\n    }\n  }, [setUserInfo]);\n  (0,react__WEBPACK_IMPORTED_MODULE_0__.useEffect)(() => {\n    try {\n      (0,_service_app__WEBPACK_IMPORTED_MODULE_3__.getUserFeed)(uniqueId).then((data) => {\n        setUserFeed(data);\n      });\n    } catch (error) {\n      console.error(error);\n    }\n  }, [setUserFeed]);\n  if (!userInfo) {\n    return /* @__PURE__ */ React.createElement(_components_Loader_Loader__WEBPACK_IMPORTED_MODULE_2__.default, null);\n  }\n  return /* @__PURE__ */ React.createElement(\"div\", {\n    key: userInfo.id,\n    \"data-testid\": \"profile\"\n  }, /* @__PURE__ */ React.createElement(_components_UserInfo_UserInfo__WEBPACK_IMPORTED_MODULE_5__.default, {\n    uniqueId: userInfo.uniqueId,\n    nickname: userInfo.nickname,\n    avatarMedium: userInfo.avatarMedium,\n    signature: userInfo.signature\n  }), /* @__PURE__ */ React.createElement(_StyledProfileView__WEBPACK_IMPORTED_MODULE_1__.default, {\n    key: userInfo.id\n  }, userFeed ? userFeed.map((user) => /* @__PURE__ */ React.createElement(_components_UserVideos_UserVideos__WEBPACK_IMPORTED_MODULE_4__.default, {\n    key: user.createTime,\n    user\n  })) : /* @__PURE__ */ React.createElement(_components_Loader_Loader__WEBPACK_IMPORTED_MODULE_2__.default, null)));\n}\n\n\n//# sourceURL=webpack://TikTuk/./src/pages/ProfileView/ProfileView.tsx?");

/***/ }),

/***/ "./src/pages/ProfileView/StyledProfileView.tsx":
/*!*****************************************************!*\
  !*** ./src/pages/ProfileView/StyledProfileView.tsx ***!
  \*****************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! styled-components */ \"./node_modules/styled-components/dist/styled-components.esm.js\");\n\nconst StyledWrap = styled_components__WEBPACK_IMPORTED_MODULE_0__.default.div`\n  max-width: 1300px;\n  margin: 0 auto;\n  display: flex;\n  justify-content: space-evenly;\n  flex-wrap: wrap;\n`;\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (StyledWrap);\n\n\n//# sourceURL=webpack://TikTuk/./src/pages/ProfileView/StyledProfileView.tsx?");

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

eval("throw new Error(\"Module build failed (from ./node_modules/esbuild-loader/dist/index.js):\\nError: Transform failed with 1 error:\\nC:\\\\Users\\\\kolod\\\\Desktop\\\\Jane\\\\GoIT\\\\GitHub\\\\Front-end_School_HW_1\\\\src\\\\static\\\\default.jpg:1:0: ERROR: Unexpected \\\"�\\\"\\n    at failureErrorWithLog (C:\\\\Users\\\\kolod\\\\Desktop\\\\Jane\\\\GoIT\\\\GitHub\\\\Front-end_School_HW_1\\\\node_modules\\\\esbuild\\\\lib\\\\main.js:1601:15)\\n    at C:\\\\Users\\\\kolod\\\\Desktop\\\\Jane\\\\GoIT\\\\GitHub\\\\Front-end_School_HW_1\\\\node_modules\\\\esbuild\\\\lib\\\\main.js:1390:29\\n    at C:\\\\Users\\\\kolod\\\\Desktop\\\\Jane\\\\GoIT\\\\GitHub\\\\Front-end_School_HW_1\\\\node_modules\\\\esbuild\\\\lib\\\\main.js:664:9\\n    at handleIncomingPacket (C:\\\\Users\\\\kolod\\\\Desktop\\\\Jane\\\\GoIT\\\\GitHub\\\\Front-end_School_HW_1\\\\node_modules\\\\esbuild\\\\lib\\\\main.js:761:9)\\n    at Socket.readFromStdout (C:\\\\Users\\\\kolod\\\\Desktop\\\\Jane\\\\GoIT\\\\GitHub\\\\Front-end_School_HW_1\\\\node_modules\\\\esbuild\\\\lib\\\\main.js:631:7)\\n    at Socket.emit (events.js:400:28)\\n    at addChunk (internal/streams/readable.js:293:12)\\n    at readableAddChunk (internal/streams/readable.js:267:9)\\n    at Socket.Readable.push (internal/streams/readable.js:206:10)\\n    at Pipe.onStreamRead (internal/stream_base_commons.js:188:23)\");\n\n//# sourceURL=webpack://TikTuk/./src/static/default.jpg?");

/***/ })

};
;