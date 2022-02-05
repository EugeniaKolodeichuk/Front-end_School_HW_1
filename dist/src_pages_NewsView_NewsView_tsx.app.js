/*
 * ATTENTION: The "eval" devtool has been used (maybe by default in mode: "development").
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
exports.id = "src_pages_NewsView_NewsView_tsx";
exports.ids = ["src_pages_NewsView_NewsView_tsx"];
exports.modules = {

/***/ "./src/api/api.tsx":
/*!*************************!*\
  !*** ./src/api/api.tsx ***!
  \*************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! axios */ \"./node_modules/axios/index.js\");\n/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(axios__WEBPACK_IMPORTED_MODULE_0__);\n\nconst baseURL = \"https://tiktok33.p.rapidapi.com\";\nconst API = axios__WEBPACK_IMPORTED_MODULE_0___default().create({\n  baseURL,\n  headers: {\n    \"x-rapidapi-host\": `${process.env.REACT_APP_HOST}`,\n    \"x-rapidapi-key\": `${process.env.REACT_APP_API_KEY}`,\n    \"Content-Type\": \"application/json\"\n  }\n});\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (API);\n\n\n//# sourceURL=webpack://TikTuk/./src/api/api.tsx?");

/***/ }),

/***/ "./src/components/Avatar/Avatar.tsx":
/*!******************************************!*\
  !*** ./src/components/Avatar/Avatar.tsx ***!
  \******************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var _static_default_jpg__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../static/default.jpg */ \"./src/static/default.jpg\");\n/* harmony import */ var _static_default_jpg__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_static_default_jpg__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _StyledAvatar__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./StyledAvatar */ \"./src/components/Avatar/StyledAvatar.tsx\");\n\n\nconst Avatar = ({ avatarThumb, nickname }) => {\n  return /* @__PURE__ */ React.createElement(_StyledAvatar__WEBPACK_IMPORTED_MODULE_1__.default, {\n    width: \"70px\",\n    src: avatarThumb || (_static_default_jpg__WEBPACK_IMPORTED_MODULE_0___default()),\n    alt: nickname\n  });\n};\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (Avatar);\n\n\n//# sourceURL=webpack://TikTuk/./src/components/Avatar/Avatar.tsx?");

/***/ }),

/***/ "./src/components/Avatar/StyledAvatar.tsx":
/*!************************************************!*\
  !*** ./src/components/Avatar/StyledAvatar.tsx ***!
  \************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! styled-components */ \"./node_modules/styled-components/dist/styled-components.esm.js\");\n\nconst StyledAvatar = styled_components__WEBPACK_IMPORTED_MODULE_0__.default.img`\n  border-radius: 50%;\n  margin-right: 20px;\n`;\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (StyledAvatar);\n\n\n//# sourceURL=webpack://TikTuk/./src/components/Avatar/StyledAvatar.tsx?");

/***/ }),

/***/ "./src/components/NewsStats/NewsStats.tsx":
/*!************************************************!*\
  !*** ./src/components/NewsStats/NewsStats.tsx ***!
  \************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\nconst Stats = ({ commentCount = 0, diggCount = 0 }) => {\n  return /* @__PURE__ */ React.createElement(\"ul\", null, /* @__PURE__ */ React.createElement(\"li\", null, \"Comments: \", /* @__PURE__ */ React.createElement(\"b\", null, commentCount)), /* @__PURE__ */ React.createElement(\"li\", null, \"Likes: \", /* @__PURE__ */ React.createElement(\"b\", null, diggCount)));\n};\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (Stats);\n\n\n//# sourceURL=webpack://TikTuk/./src/components/NewsStats/NewsStats.tsx?");

/***/ }),

/***/ "./src/components/TrendingFeed/StyledTrendingFeed.tsx":
/*!************************************************************!*\
  !*** ./src/components/TrendingFeed/StyledTrendingFeed.tsx ***!
  \************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"StyledListNoorder\": () => (/* binding */ StyledListNoorder),\n/* harmony export */   \"StyledLink\": () => (/* binding */ StyledLink),\n/* harmony export */   \"StyledFeedInfo\": () => (/* binding */ StyledFeedInfo)\n/* harmony export */ });\n/* harmony import */ var react_router_dom__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react-router-dom */ \"./node_modules/react-router-dom/esm/react-router-dom.js\");\n/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! styled-components */ \"./node_modules/styled-components/dist/styled-components.esm.js\");\n\n\nconst StyledListNoorder = styled_components__WEBPACK_IMPORTED_MODULE_0__.default.div`\n  display: flex;\n  flex-wrap: wrap;\n  justify-content: space-evenly;\n  align-items: center;\n  flex-direction: column;\n  margin-top: 15px;\n  margin-bottom: 1.5em;\n  padding: 0.6em;\n  background: #fefefe8c;\n  color: #231f20;\n  width: 350px;\n  border-radius: 2px;\n  box-shadow: 0px 1px 3px 0px rgba(0, 0, 0, 0.2),\n    0px 1px 1px 0px rgba(0, 0, 0, 0.14), 0px 2px 1px 0px rgba(0, 0, 0, 0.12);\n`;\nconst StyledLink = (0,styled_components__WEBPACK_IMPORTED_MODULE_0__.default)(react_router_dom__WEBPACK_IMPORTED_MODULE_1__.Link)`\n  display: inline-block;\n  text-decoration: none;\n  padding: 10px;\n  color: inherit;\n\n  &:hover {\n    color: #005eaa;\n  }\n`;\nconst StyledFeedInfo = styled_components__WEBPACK_IMPORTED_MODULE_0__.default.div`\n  display: inline-flex;\n  align-items: center;\n  flex-direction: row;\n  margin-top: 15px;\n`;\n\n\n//# sourceURL=webpack://TikTuk/./src/components/TrendingFeed/StyledTrendingFeed.tsx?");

/***/ }),

/***/ "./src/components/TrendingFeed/TrendingFeed.tsx":
/*!******************************************************!*\
  !*** ./src/components/TrendingFeed/TrendingFeed.tsx ***!
  \******************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var _Avatar_Avatar__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../Avatar/Avatar */ \"./src/components/Avatar/Avatar.tsx\");\n/* harmony import */ var _NewsStats_NewsStats__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../NewsStats/NewsStats */ \"./src/components/NewsStats/NewsStats.tsx\");\n/* harmony import */ var _Video_Video__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../Video/Video */ \"./src/components/Video/Video.tsx\");\n/* harmony import */ var _Loader_Loader__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../Loader/Loader */ \"./src/components/Loader/Loader.tsx\");\n/* harmony import */ var _StyledTrendingFeed__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./StyledTrendingFeed */ \"./src/components/TrendingFeed/StyledTrendingFeed.tsx\");\n\n\n\n\n\nconst TrendingFeed = ({ feed }) => {\n  return feed.video.downloadAddr ? /* @__PURE__ */ React.createElement(_StyledTrendingFeed__WEBPACK_IMPORTED_MODULE_4__.StyledListNoorder, {\n    key: feed.author.nickname\n  }, /* @__PURE__ */ React.createElement(_Video_Video__WEBPACK_IMPORTED_MODULE_2__.default, {\n    downloadAddr: feed.video.downloadAddr\n  }), /* @__PURE__ */ React.createElement(\"p\", null, feed.author.signature), /* @__PURE__ */ React.createElement(_StyledTrendingFeed__WEBPACK_IMPORTED_MODULE_4__.StyledFeedInfo, null, /* @__PURE__ */ React.createElement(_Avatar_Avatar__WEBPACK_IMPORTED_MODULE_0__.default, {\n    avatarThumb: feed.author.avatarThumb,\n    nickname: feed.author.nickname\n  }), /* @__PURE__ */ React.createElement(\"p\", null, /* @__PURE__ */ React.createElement(_StyledTrendingFeed__WEBPACK_IMPORTED_MODULE_4__.StyledLink, {\n    to: `/profile/${feed.author.uniqueId}`\n  }, /* @__PURE__ */ React.createElement(\"b\", null, feed.author.nickname)))), /* @__PURE__ */ React.createElement(_NewsStats_NewsStats__WEBPACK_IMPORTED_MODULE_1__.default, {\n    commentCount: feed.stats.commentCount,\n    diggCount: feed.stats.diggCount\n  })) : /* @__PURE__ */ React.createElement(_Loader_Loader__WEBPACK_IMPORTED_MODULE_3__.default, null);\n};\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (TrendingFeed);\n\n\n//# sourceURL=webpack://TikTuk/./src/components/TrendingFeed/TrendingFeed.tsx?");

/***/ }),

/***/ "./src/components/Video/Video.tsx":
/*!****************************************!*\
  !*** ./src/components/Video/Video.tsx ***!
  \****************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var _Loader_Loader__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../Loader/Loader */ \"./src/components/Loader/Loader.tsx\");\n\nconst Video = ({ downloadAddr }) => {\n  return downloadAddr ? /* @__PURE__ */ React.createElement(\"video\", {\n    width: \"300px\",\n    controls: true,\n    \"data-testid\": \"video\"\n  }, /* @__PURE__ */ React.createElement(\"source\", {\n    src: downloadAddr,\n    type: \"video/mp4;\"\n  }), /* @__PURE__ */ React.createElement(\"track\", {\n    kind: \"captions\",\n    srcLang: \"en\",\n    label: \"english_captions\"\n  })) : /* @__PURE__ */ React.createElement(_Loader_Loader__WEBPACK_IMPORTED_MODULE_0__.default, null);\n};\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (Video);\n\n\n//# sourceURL=webpack://TikTuk/./src/components/Video/Video.tsx?");

/***/ }),

/***/ "./src/pages/NewsView/NewsView.tsx":
/*!*****************************************!*\
  !*** ./src/pages/NewsView/NewsView.tsx ***!
  \*****************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (/* binding */ NewsView)\n/* harmony export */ });\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var shortid__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! shortid */ \"./node_modules/shortid/index.js\");\n/* harmony import */ var shortid__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(shortid__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _StyledNewsView__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./StyledNewsView */ \"./src/pages/NewsView/StyledNewsView.tsx\");\n/* harmony import */ var _components_Loader_Loader__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../components/Loader/Loader */ \"./src/components/Loader/Loader.tsx\");\n/* harmony import */ var _service_app__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../service/app */ \"./src/service/app.tsx\");\n/* harmony import */ var _components_TrendingFeed_TrendingFeed__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../components/TrendingFeed/TrendingFeed */ \"./src/components/TrendingFeed/TrendingFeed.tsx\");\n\n\n\n\n\n\nfunction NewsView() {\n  const [trendingFeed, setTrendingFeed] = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)([]);\n  const [currentPage, setCurrentPage] = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)(1);\n  const [fetching, setFetching] = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)(true);\n  const scrollHandler = (event) => {\n    if (event.target.documentElement.scrollHeight - (event.target.documentElement.scrollTop + window.innerHeight) < 100) {\n      setFetching(true);\n    }\n  };\n  (0,react__WEBPACK_IMPORTED_MODULE_0__.useEffect)(() => {\n    document.addEventListener(\"scroll\", scrollHandler);\n    return function() {\n      document.removeEventListener(\"scroll\", scrollHandler);\n    };\n  }, []);\n  (0,react__WEBPACK_IMPORTED_MODULE_0__.useEffect)(() => {\n    try {\n      (0,_service_app__WEBPACK_IMPORTED_MODULE_4__.getTrendingFeed)(currentPage).then((data) => {\n        setTrendingFeed([...trendingFeed, ...data]);\n        setCurrentPage((previousState) => previousState + 1);\n      });\n    } catch (error) {\n      console.error(error);\n    } finally {\n      setFetching(false);\n    }\n  }, [fetching]);\n  return /* @__PURE__ */ React.createElement(_StyledNewsView__WEBPACK_IMPORTED_MODULE_2__.default, {\n    key: shortid__WEBPACK_IMPORTED_MODULE_1___default().generate()\n  }, trendingFeed.length > 0 ? trendingFeed.map((feed) => /* @__PURE__ */ React.createElement(_components_TrendingFeed_TrendingFeed__WEBPACK_IMPORTED_MODULE_5__.default, {\n    key: shortid__WEBPACK_IMPORTED_MODULE_1___default().generate(),\n    feed\n  })) : /* @__PURE__ */ React.createElement(_components_Loader_Loader__WEBPACK_IMPORTED_MODULE_3__.default, null));\n}\n\n\n//# sourceURL=webpack://TikTuk/./src/pages/NewsView/NewsView.tsx?");

/***/ }),

/***/ "./src/pages/NewsView/StyledNewsView.tsx":
/*!***********************************************!*\
  !*** ./src/pages/NewsView/StyledNewsView.tsx ***!
  \***********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! styled-components */ \"./node_modules/styled-components/dist/styled-components.esm.js\");\n\nconst StyledWrap = styled_components__WEBPACK_IMPORTED_MODULE_0__.default.div`\n  max-width: 1300px;\n  margin: 0 auto;\n  display: flex;\n  justify-content: space-evenly;\n  flex-wrap: wrap;\n`;\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (StyledWrap);\n\n\n//# sourceURL=webpack://TikTuk/./src/pages/NewsView/StyledNewsView.tsx?");

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

/***/ }),

/***/ "./node_modules/shortid/index.js":
/*!***************************************!*\
  !*** ./node_modules/shortid/index.js ***!
  \***************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";
eval("\nmodule.exports = __webpack_require__(/*! ./lib/index */ \"./node_modules/shortid/lib/index.js\");\n\n\n//# sourceURL=webpack://TikTuk/./node_modules/shortid/index.js?");

/***/ }),

/***/ "./node_modules/shortid/lib/alphabet.js":
/*!**********************************************!*\
  !*** ./node_modules/shortid/lib/alphabet.js ***!
  \**********************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";
eval("\n\nvar randomFromSeed = __webpack_require__(/*! ./random/random-from-seed */ \"./node_modules/shortid/lib/random/random-from-seed.js\");\n\nvar ORIGINAL = '0123456789abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ_-';\nvar alphabet;\nvar previousSeed;\n\nvar shuffled;\n\nfunction reset() {\n    shuffled = false;\n}\n\nfunction setCharacters(_alphabet_) {\n    if (!_alphabet_) {\n        if (alphabet !== ORIGINAL) {\n            alphabet = ORIGINAL;\n            reset();\n        }\n        return;\n    }\n\n    if (_alphabet_ === alphabet) {\n        return;\n    }\n\n    if (_alphabet_.length !== ORIGINAL.length) {\n        throw new Error('Custom alphabet for shortid must be ' + ORIGINAL.length + ' unique characters. You submitted ' + _alphabet_.length + ' characters: ' + _alphabet_);\n    }\n\n    var unique = _alphabet_.split('').filter(function(item, ind, arr){\n       return ind !== arr.lastIndexOf(item);\n    });\n\n    if (unique.length) {\n        throw new Error('Custom alphabet for shortid must be ' + ORIGINAL.length + ' unique characters. These characters were not unique: ' + unique.join(', '));\n    }\n\n    alphabet = _alphabet_;\n    reset();\n}\n\nfunction characters(_alphabet_) {\n    setCharacters(_alphabet_);\n    return alphabet;\n}\n\nfunction setSeed(seed) {\n    randomFromSeed.seed(seed);\n    if (previousSeed !== seed) {\n        reset();\n        previousSeed = seed;\n    }\n}\n\nfunction shuffle() {\n    if (!alphabet) {\n        setCharacters(ORIGINAL);\n    }\n\n    var sourceArray = alphabet.split('');\n    var targetArray = [];\n    var r = randomFromSeed.nextValue();\n    var characterIndex;\n\n    while (sourceArray.length > 0) {\n        r = randomFromSeed.nextValue();\n        characterIndex = Math.floor(r * sourceArray.length);\n        targetArray.push(sourceArray.splice(characterIndex, 1)[0]);\n    }\n    return targetArray.join('');\n}\n\nfunction getShuffled() {\n    if (shuffled) {\n        return shuffled;\n    }\n    shuffled = shuffle();\n    return shuffled;\n}\n\n/**\n * lookup shuffled letter\n * @param index\n * @returns {string}\n */\nfunction lookup(index) {\n    var alphabetShuffled = getShuffled();\n    return alphabetShuffled[index];\n}\n\nfunction get () {\n  return alphabet || ORIGINAL;\n}\n\nmodule.exports = {\n    get: get,\n    characters: characters,\n    seed: setSeed,\n    lookup: lookup,\n    shuffled: getShuffled\n};\n\n\n//# sourceURL=webpack://TikTuk/./node_modules/shortid/lib/alphabet.js?");

/***/ }),

/***/ "./node_modules/shortid/lib/build.js":
/*!*******************************************!*\
  !*** ./node_modules/shortid/lib/build.js ***!
  \*******************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";
eval("\n\nvar generate = __webpack_require__(/*! ./generate */ \"./node_modules/shortid/lib/generate.js\");\nvar alphabet = __webpack_require__(/*! ./alphabet */ \"./node_modules/shortid/lib/alphabet.js\");\n\n// Ignore all milliseconds before a certain time to reduce the size of the date entropy without sacrificing uniqueness.\n// This number should be updated every year or so to keep the generated id short.\n// To regenerate `new Date() - 0` and bump the version. Always bump the version!\nvar REDUCE_TIME = 1567752802062;\n\n// don't change unless we change the algos or REDUCE_TIME\n// must be an integer and less than 16\nvar version = 7;\n\n// Counter is used when shortid is called multiple times in one second.\nvar counter;\n\n// Remember the last time shortid was called in case counter is needed.\nvar previousSeconds;\n\n/**\n * Generate unique id\n * Returns string id\n */\nfunction build(clusterWorkerId) {\n    var str = '';\n\n    var seconds = Math.floor((Date.now() - REDUCE_TIME) * 0.001);\n\n    if (seconds === previousSeconds) {\n        counter++;\n    } else {\n        counter = 0;\n        previousSeconds = seconds;\n    }\n\n    str = str + generate(version);\n    str = str + generate(clusterWorkerId);\n    if (counter > 0) {\n        str = str + generate(counter);\n    }\n    str = str + generate(seconds);\n    return str;\n}\n\nmodule.exports = build;\n\n\n//# sourceURL=webpack://TikTuk/./node_modules/shortid/lib/build.js?");

/***/ }),

/***/ "./node_modules/shortid/lib/generate.js":
/*!**********************************************!*\
  !*** ./node_modules/shortid/lib/generate.js ***!
  \**********************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";
eval("\n\nvar alphabet = __webpack_require__(/*! ./alphabet */ \"./node_modules/shortid/lib/alphabet.js\");\nvar random = __webpack_require__(/*! ./random/random-byte */ \"./node_modules/shortid/lib/random/random-byte.js\");\nvar format = __webpack_require__(/*! nanoid/format */ \"./node_modules/shortid/node_modules/nanoid/format.js\");\n\nfunction generate(number) {\n    var loopCounter = 0;\n    var done;\n\n    var str = '';\n\n    while (!done) {\n        str = str + format(random, alphabet.get(), 1);\n        done = number < (Math.pow(16, loopCounter + 1 ) );\n        loopCounter++;\n    }\n    return str;\n}\n\nmodule.exports = generate;\n\n\n//# sourceURL=webpack://TikTuk/./node_modules/shortid/lib/generate.js?");

/***/ }),

/***/ "./node_modules/shortid/lib/index.js":
/*!*******************************************!*\
  !*** ./node_modules/shortid/lib/index.js ***!
  \*******************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";
eval("\n\nvar alphabet = __webpack_require__(/*! ./alphabet */ \"./node_modules/shortid/lib/alphabet.js\");\nvar build = __webpack_require__(/*! ./build */ \"./node_modules/shortid/lib/build.js\");\nvar isValid = __webpack_require__(/*! ./is-valid */ \"./node_modules/shortid/lib/is-valid.js\");\n\n// if you are using cluster or multiple servers use this to make each instance\n// has a unique value for worker\n// Note: I don't know if this is automatically set when using third\n// party cluster solutions such as pm2.\nvar clusterWorkerId = __webpack_require__(/*! ./util/cluster-worker-id */ \"./node_modules/shortid/lib/util/cluster-worker-id.js\") || 0;\n\n/**\n * Set the seed.\n * Highly recommended if you don't want people to try to figure out your id schema.\n * exposed as shortid.seed(int)\n * @param seed Integer value to seed the random alphabet.  ALWAYS USE THE SAME SEED or you might get overlaps.\n */\nfunction seed(seedValue) {\n    alphabet.seed(seedValue);\n    return module.exports;\n}\n\n/**\n * Set the cluster worker or machine id\n * exposed as shortid.worker(int)\n * @param workerId worker must be positive integer.  Number less than 16 is recommended.\n * returns shortid module so it can be chained.\n */\nfunction worker(workerId) {\n    clusterWorkerId = workerId;\n    return module.exports;\n}\n\n/**\n *\n * sets new characters to use in the alphabet\n * returns the shuffled alphabet\n */\nfunction characters(newCharacters) {\n    if (newCharacters !== undefined) {\n        alphabet.characters(newCharacters);\n    }\n\n    return alphabet.shuffled();\n}\n\n/**\n * Generate unique id\n * Returns string id\n */\nfunction generate() {\n  return build(clusterWorkerId);\n}\n\n// Export all other functions as properties of the generate function\nmodule.exports = generate;\nmodule.exports.generate = generate;\nmodule.exports.seed = seed;\nmodule.exports.worker = worker;\nmodule.exports.characters = characters;\nmodule.exports.isValid = isValid;\n\n\n//# sourceURL=webpack://TikTuk/./node_modules/shortid/lib/index.js?");

/***/ }),

/***/ "./node_modules/shortid/lib/is-valid.js":
/*!**********************************************!*\
  !*** ./node_modules/shortid/lib/is-valid.js ***!
  \**********************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";
eval("\nvar alphabet = __webpack_require__(/*! ./alphabet */ \"./node_modules/shortid/lib/alphabet.js\");\n\nfunction isShortId(id) {\n    if (!id || typeof id !== 'string' || id.length < 6 ) {\n        return false;\n    }\n\n    var nonAlphabetic = new RegExp('[^' +\n      alphabet.get().replace(/[|\\\\{}()[\\]^$+*?.-]/g, '\\\\$&') +\n    ']');\n    return !nonAlphabetic.test(id);\n}\n\nmodule.exports = isShortId;\n\n\n//# sourceURL=webpack://TikTuk/./node_modules/shortid/lib/is-valid.js?");

/***/ }),

/***/ "./node_modules/shortid/lib/random/random-byte.js":
/*!********************************************************!*\
  !*** ./node_modules/shortid/lib/random/random-byte.js ***!
  \********************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

eval("module.exports = __webpack_require__(/*! nanoid/random */ \"./node_modules/shortid/node_modules/nanoid/random.js\");\n\n\n//# sourceURL=webpack://TikTuk/./node_modules/shortid/lib/random/random-byte.js?");

/***/ }),

/***/ "./node_modules/shortid/lib/random/random-from-seed.js":
/*!*************************************************************!*\
  !*** ./node_modules/shortid/lib/random/random-from-seed.js ***!
  \*************************************************************/
/***/ ((module) => {

"use strict";
eval("\n\n// Found this seed-based random generator somewhere\n// Based on The Central Randomizer 1.3 (C) 1997 by Paul Houle (houle@msc.cornell.edu)\n\nvar seed = 1;\n\n/**\n * return a random number based on a seed\n * @param seed\n * @returns {number}\n */\nfunction getNextValue() {\n    seed = (seed * 9301 + 49297) % 233280;\n    return seed/(233280.0);\n}\n\nfunction setSeed(_seed_) {\n    seed = _seed_;\n}\n\nmodule.exports = {\n    nextValue: getNextValue,\n    seed: setSeed\n};\n\n\n//# sourceURL=webpack://TikTuk/./node_modules/shortid/lib/random/random-from-seed.js?");

/***/ }),

/***/ "./node_modules/shortid/lib/util/cluster-worker-id.js":
/*!************************************************************!*\
  !*** ./node_modules/shortid/lib/util/cluster-worker-id.js ***!
  \************************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";
eval("\n\nvar cluster = __webpack_require__(/*! cluster */ \"cluster\");\n\nvar clusterId = 0;\nif (!cluster.isMaster && cluster.worker) {\n    clusterId = cluster.worker.id;\n}\nmodule.exports = parseInt(process.env.NODE_UNIQUE_ID || clusterId, 10);\n\n\n//# sourceURL=webpack://TikTuk/./node_modules/shortid/lib/util/cluster-worker-id.js?");

/***/ }),

/***/ "./node_modules/shortid/node_modules/nanoid/format.js":
/*!************************************************************!*\
  !*** ./node_modules/shortid/node_modules/nanoid/format.js ***!
  \************************************************************/
/***/ ((module) => {

eval("/**\n * Secure random string generator with custom alphabet.\n *\n * Alphabet must contain 256 symbols or less. Otherwise, the generator\n * will not be secure.\n *\n * @param {generator} random The random bytes generator.\n * @param {string} alphabet Symbols to be used in new random string.\n * @param {size} size The number of symbols in new random string.\n *\n * @return {string} Random string.\n *\n * @example\n * const format = require('nanoid/format')\n *\n * function random (size) {\n *   const result = []\n *   for (let i = 0; i < size; i++) {\n *     result.push(randomByte())\n *   }\n *   return result\n * }\n *\n * format(random, \"abcdef\", 5) //=> \"fbaef\"\n *\n * @name format\n * @function\n */\nmodule.exports = function (random, alphabet, size) {\n  // We can’t use bytes bigger than the alphabet. To make bytes values closer\n  // to the alphabet, we apply bitmask on them. We look for the closest\n  // `2 ** x - 1` number, which will be bigger than alphabet size. If we have\n  // 30 symbols in the alphabet, we will take 31 (00011111).\n  var mask = (2 << 31 - Math.clz32((alphabet.length - 1) | 1)) - 1\n  // Bitmask is not a perfect solution (in our example it will pass 31 bytes,\n  // which is bigger than the alphabet). As a result, we will need more bytes,\n  // than ID size, because we will refuse bytes bigger than the alphabet.\n\n  // Every hardware random generator call is costly,\n  // because we need to wait for entropy collection. This is why often it will\n  // be faster to ask for few extra bytes in advance, to avoid additional calls.\n\n  // Here we calculate how many random bytes should we call in advance.\n  // It depends on ID length, mask / alphabet size and magic number 1.6\n  // (which was selected according benchmarks).\n  var step = Math.ceil(1.6 * mask * size / alphabet.length)\n  var id = ''\n\n  while (true) {\n    var bytes = random(step)\n    // Compact alternative for `for (var i = 0; i < step; i++)`\n    var i = step\n    while (i--) {\n      // If random byte is bigger than alphabet even after bitmask,\n      // we refuse it by `|| ''`.\n      id += alphabet[bytes[i] & mask] || ''\n      // More compact than `id.length + 1 === size`\n      if (id.length === +size) return id\n    }\n  }\n}\n\n/**\n * @callback generator\n * @param {number} bytes The number of bytes to generate.\n * @return {number[]} Random bytes.\n */\n\n\n//# sourceURL=webpack://TikTuk/./node_modules/shortid/node_modules/nanoid/format.js?");

/***/ }),

/***/ "./node_modules/shortid/node_modules/nanoid/random.js":
/*!************************************************************!*\
  !*** ./node_modules/shortid/node_modules/nanoid/random.js ***!
  \************************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

eval("var crypto = __webpack_require__(/*! crypto */ \"crypto\")\n\nif (crypto.randomFillSync) {\n  // We reuse buffers with the same size to avoid memory fragmentations\n  // for better performance\n  var buffers = { }\n  module.exports = function (bytes) {\n    var buffer = buffers[bytes]\n    if (!buffer) {\n      // `Buffer.allocUnsafe()` faster because it don’t clean memory.\n      // We do not need it, since we will fill memory with new bytes anyway.\n      buffer = Buffer.allocUnsafe(bytes)\n      if (bytes <= 255) buffers[bytes] = buffer\n    }\n    return crypto.randomFillSync(buffer)\n  }\n} else {\n  module.exports = crypto.randomBytes\n}\n\n\n//# sourceURL=webpack://TikTuk/./node_modules/shortid/node_modules/nanoid/random.js?");

/***/ })

};
;