(window["webpackJsonp"] = window["webpackJsonp"] || []).push([[48],{

/***/ "./src/layouts/auth.layout.jsx":
/*!*************************************!*\
  !*** ./src/layouts/auth.layout.jsx ***!
  \*************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var react_router_dom__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react-router-dom */ \"./node_modules/react-router-dom/esm/react-router-dom.js\");\n/* harmony import */ var _routes__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../routes */ \"./src/routes.js\");\nfunction _typeof(obj) { \"@babel/helpers - typeof\"; if (typeof Symbol === \"function\" && typeof Symbol.iterator === \"symbol\") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === \"function\" && obj.constructor === Symbol && obj !== Symbol.prototype ? \"symbol\" : typeof obj; }; } return _typeof(obj); }\n\nfunction _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError(\"Cannot call a class as a function\"); } }\n\nfunction _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if (\"value\" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }\n\nfunction _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }\n\nfunction _inherits(subClass, superClass) { if (typeof superClass !== \"function\" && superClass !== null) { throw new TypeError(\"Super expression must either be null or a function\"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }\n\nfunction _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }\n\nfunction _createSuper(Derived) { var hasNativeReflectConstruct = _isNativeReflectConstruct(); return function _createSuperInternal() { var Super = _getPrototypeOf(Derived), result; if (hasNativeReflectConstruct) { var NewTarget = _getPrototypeOf(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return _possibleConstructorReturn(this, result); }; }\n\nfunction _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === \"object\" || typeof call === \"function\")) { return call; } else if (call !== void 0) { throw new TypeError(\"Derived constructors may only return object or undefined\"); } return _assertThisInitialized(self); }\n\nfunction _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError(\"this hasn't been initialised - super() hasn't been called\"); } return self; }\n\nfunction _isNativeReflectConstruct() { if (typeof Reflect === \"undefined\" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === \"function\") return true; try { Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function () {})); return true; } catch (e) { return false; } }\n\nfunction _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }\n\nfunction _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }\n\n\n\n\n\nvar Auth = /*#__PURE__*/function (_React$Component) {\n  _inherits(Auth, _React$Component);\n\n  var _super = _createSuper(Auth);\n\n  function Auth() {\n    var _this;\n\n    _classCallCheck(this, Auth);\n\n    for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {\n      args[_key] = arguments[_key];\n    }\n\n    _this = _super.call.apply(_super, [this].concat(args));\n\n    _defineProperty(_assertThisInitialized(_this), \"getRoutes\", function (routes) {\n      return routes.map(function (prop, key) {\n        if (prop.layout === '/') {\n          return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_router_dom__WEBPACK_IMPORTED_MODULE_1__[\"Route\"], {\n            exact: true,\n            path: prop.layout + prop.path,\n            component: prop.component,\n            key: key\n          });\n        } else {\n          return null;\n        }\n      });\n    });\n\n    return _this;\n  }\n\n  _createClass(Auth, [{\n    key: \"render\",\n    value: function render() {\n      return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react__WEBPACK_IMPORTED_MODULE_0___default.a.Fragment, null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_router_dom__WEBPACK_IMPORTED_MODULE_1__[\"Switch\"], null, this.getRoutes(_routes__WEBPACK_IMPORTED_MODULE_2__[\"default\"])));\n    }\n  }]);\n\n  return Auth;\n}(react__WEBPACK_IMPORTED_MODULE_0___default.a.Component);\n\n/* harmony default export */ __webpack_exports__[\"default\"] = (Auth);\n\n//# sourceURL=webpack:///./src/layouts/auth.layout.jsx?");

/***/ }),

/***/ "./src/routes.js":
/*!***********************!*\
  !*** ./src/routes.js ***!
  \***********************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);\n // lazy load check\n\nfunction retry(fn) {\n  var retriesLeft = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : 5;\n  var interval = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : 1000;\n  return new Promise(function (resolve, reject) {\n    fn().then(resolve).catch(function (error) {\n      setTimeout(function () {\n        if (retriesLeft === 1) {\n          // reject('maximum retries exceeded');\n          reject(error);\n          return;\n        } // Passing on \"reject\" is the important part\n\n\n        retry(fn, retriesLeft - 1, interval).then(resolve, reject);\n      }, interval);\n    });\n  });\n}\n\nvar Home = /*#__PURE__*/Object(react__WEBPACK_IMPORTED_MODULE_0__[\"lazy\"])(function () {\n  return retry(function () {\n    return Promise.all(/*! import() */[__webpack_require__.e(0), __webpack_require__.e(15), __webpack_require__.e(1), __webpack_require__.e(51)]).then(__webpack_require__.bind(null, /*! ./Pages/home */ \"./src/Pages/home.jsx\"));\n  });\n});\nvar NFTMinting = /*#__PURE__*/Object(react__WEBPACK_IMPORTED_MODULE_0__[\"lazy\"])(function () {\n  return retry(function () {\n    return Promise.all(/*! import() */[__webpack_require__.e(0), __webpack_require__.e(2), __webpack_require__.e(3), __webpack_require__.e(8), __webpack_require__.e(13), __webpack_require__.e(21), __webpack_require__.e(1), __webpack_require__.e(4), __webpack_require__.e(23)]).then(__webpack_require__.bind(null, /*! ./Pages/nftminting */ \"./src/Pages/nftminting.jsx\"));\n  });\n});\nvar NftDetail = /*#__PURE__*/Object(react__WEBPACK_IMPORTED_MODULE_0__[\"lazy\"])(function () {\n  return retry(function () {\n    return Promise.all(/*! import() */[__webpack_require__.e(0), __webpack_require__.e(2), __webpack_require__.e(3), __webpack_require__.e(13), __webpack_require__.e(16), __webpack_require__.e(1), __webpack_require__.e(4), __webpack_require__.e(10), __webpack_require__.e(19)]).then(__webpack_require__.bind(null, /*! ./Pages/nftDetails */ \"./src/Pages/nftDetails.jsx\"));\n  });\n});\nvar MarketPlace = /*#__PURE__*/Object(react__WEBPACK_IMPORTED_MODULE_0__[\"lazy\"])(function () {\n  return retry(function () {\n    return Promise.all(/*! import() */[__webpack_require__.e(0), __webpack_require__.e(2), __webpack_require__.e(3), __webpack_require__.e(7), __webpack_require__.e(5), __webpack_require__.e(12), __webpack_require__.e(1), __webpack_require__.e(4), __webpack_require__.e(6), __webpack_require__.e(22)]).then(__webpack_require__.bind(null, /*! ./Pages/marketplace */ \"./src/Pages/marketplace.js\"));\n  });\n});\nvar Creators = /*#__PURE__*/Object(react__WEBPACK_IMPORTED_MODULE_0__[\"lazy\"])(function () {\n  return retry(function () {\n    return Promise.all(/*! import() */[__webpack_require__.e(0), __webpack_require__.e(2), __webpack_require__.e(12), __webpack_require__.e(34), __webpack_require__.e(1), __webpack_require__.e(25)]).then(__webpack_require__.bind(null, /*! ./Pages/creators.jsx */ \"./src/Pages/creators.jsx\"));\n  });\n});\nvar Profile = /*#__PURE__*/Object(react__WEBPACK_IMPORTED_MODULE_0__[\"lazy\"])(function () {\n  return retry(function () {\n    return Promise.all(/*! import() */[__webpack_require__.e(0), __webpack_require__.e(2), __webpack_require__.e(3), __webpack_require__.e(7), __webpack_require__.e(9), __webpack_require__.e(15), __webpack_require__.e(1), __webpack_require__.e(4), __webpack_require__.e(14), __webpack_require__.e(32)]).then(__webpack_require__.bind(null, /*! ./Pages/profile */ \"./src/Pages/profile.jsx\"));\n  });\n});\nvar EditProfile = /*#__PURE__*/Object(react__WEBPACK_IMPORTED_MODULE_0__[\"lazy\"])(function () {\n  return retry(function () {\n    return Promise.all(/*! import() */[__webpack_require__.e(0), __webpack_require__.e(8), __webpack_require__.e(1), __webpack_require__.e(24)]).then(__webpack_require__.bind(null, /*! ./Pages/profile-edit */ \"./src/Pages/profile-edit.jsx\"));\n  });\n});\nvar Collections = /*#__PURE__*/Object(react__WEBPACK_IMPORTED_MODULE_0__[\"lazy\"])(function () {\n  return retry(function () {\n    return Promise.all(/*! import() */[__webpack_require__.e(0), __webpack_require__.e(2), __webpack_require__.e(12), __webpack_require__.e(42), __webpack_require__.e(1), __webpack_require__.e(35)]).then(__webpack_require__.bind(null, /*! ./Pages/collections.jsx */ \"./src/Pages/collections.jsx\"));\n  });\n});\nvar CollectionDetail = /*#__PURE__*/Object(react__WEBPACK_IMPORTED_MODULE_0__[\"lazy\"])(function () {\n  return retry(function () {\n    return Promise.all(/*! import() */[__webpack_require__.e(0), __webpack_require__.e(3), __webpack_require__.e(5), __webpack_require__.e(43), __webpack_require__.e(1), __webpack_require__.e(4), __webpack_require__.e(6), __webpack_require__.e(46)]).then(__webpack_require__.bind(null, /*! ./Pages/collection-detail */ \"./src/Pages/collection-detail.jsx\"));\n  });\n});\nvar CollectionEdit = /*#__PURE__*/Object(react__WEBPACK_IMPORTED_MODULE_0__[\"lazy\"])(function () {\n  return retry(function () {\n    return Promise.all(/*! import() */[__webpack_require__.e(0), __webpack_require__.e(3), __webpack_require__.e(1), __webpack_require__.e(4), __webpack_require__.e(26)]).then(__webpack_require__.bind(null, /*! ./Pages/collection-edit */ \"./src/Pages/collection-edit.jsx\"));\n  });\n});\nvar HowToUse = /*#__PURE__*/Object(react__WEBPACK_IMPORTED_MODULE_0__[\"lazy\"])(function () {\n  return retry(function () {\n    return __webpack_require__.e(/*! import() */ 29).then(__webpack_require__.bind(null, /*! ./Pages/how-to-use */ \"./src/Pages/how-to-use.jsx\"));\n  });\n});\nvar About = /*#__PURE__*/Object(react__WEBPACK_IMPORTED_MODULE_0__[\"lazy\"])(function () {\n  return retry(function () {\n    return __webpack_require__.e(/*! import() */ 17).then(__webpack_require__.bind(null, /*! ./Pages/about */ \"./src/Pages/about.jsx\"));\n  });\n});\nvar Legal = /*#__PURE__*/Object(react__WEBPACK_IMPORTED_MODULE_0__[\"lazy\"])(function () {\n  return retry(function () {\n    return Promise.all(/*! import() */[__webpack_require__.e(8), __webpack_require__.e(40)]).then(__webpack_require__.bind(null, /*! ./Pages/legal */ \"./src/Pages/legal.jsx\"));\n  });\n});\nvar Faq = /*#__PURE__*/Object(react__WEBPACK_IMPORTED_MODULE_0__[\"lazy\"])(function () {\n  return retry(function () {\n    return Promise.all(/*! import() */[__webpack_require__.e(2), __webpack_require__.e(41), __webpack_require__.e(33)]).then(__webpack_require__.bind(null, /*! ./Pages/faq */ \"./src/Pages/faq.jsx\"));\n  });\n});\nvar BlogList = /*#__PURE__*/Object(react__WEBPACK_IMPORTED_MODULE_0__[\"lazy\"])(function () {\n  return retry(function () {\n    return Promise.all(/*! import() */[__webpack_require__.e(2), __webpack_require__.e(28)]).then(__webpack_require__.bind(null, /*! ./Pages/blog-list */ \"./src/Pages/blog-list.jsx\"));\n  });\n});\nvar CreatorProfile = /*#__PURE__*/Object(react__WEBPACK_IMPORTED_MODULE_0__[\"lazy\"])(function () {\n  return retry(function () {\n    return Promise.all(/*! import() */[__webpack_require__.e(0), __webpack_require__.e(2), __webpack_require__.e(3), __webpack_require__.e(7), __webpack_require__.e(9), __webpack_require__.e(16), __webpack_require__.e(1), __webpack_require__.e(4), __webpack_require__.e(14), __webpack_require__.e(47)]).then(__webpack_require__.bind(null, /*! ./Pages/creator-profile */ \"./src/Pages/creator-profile.jsx\"));\n  });\n}); // import Home from './Pages/home';\n// import NFTMinting from './Pages/nftminting';\n// import NftDetail from './Pages/nftDetails';\n// import MarketPlace from './Pages/marketplace';\n// import Creators from './Pages/creators.jsx';\n// import Profile from './Pages/profile';\n// import EditProfile from './Pages/profile-edit';\n// import Collection from './Pages/collection.jsx';\n// import CollectionDetail from './Pages/collection-detail';\n// import CollectionEdit from './Pages/collection-detail-edit';\n// import HowToUse from './Pages/how-to-use';\n// import About from './Pages/about';\n// import Legal from './Pages/legal';\n// import CreatorProfile from './Pages/creator-profile';\n\nvar routes = [{\n  path: '/',\n  name: 'Landing',\n  component: Home,\n  layout: '/'\n}, {\n  path: '/nftminting',\n  name: 'NFT Minting',\n  component: NFTMinting,\n  layout: '/user'\n}, {\n  path: 'marketplace',\n  name: 'MarketPlace',\n  component: MarketPlace,\n  layout: '/'\n}, {\n  path: 'creators',\n  name: 'Creators',\n  component: Creators,\n  layout: '/'\n}, {\n  path: '/edit-profile',\n  name: 'Edit Profile',\n  component: EditProfile,\n  layout: '/user'\n}, {\n  path: '/profile',\n  name: 'Profile',\n  component: Profile,\n  layout: '/user'\n}, {\n  path: 'creator/:id',\n  name: 'Creator Profile',\n  component: CreatorProfile,\n  layout: '/'\n}, {\n  path: 'nftDetails/:id',\n  name: 'NFT Detail',\n  component: NftDetail,\n  layout: '/'\n}, {\n  path: 'collections',\n  name: 'Collections',\n  component: Collections,\n  layout: '/'\n}, {\n  path: 'collection-detail/:id',\n  name: 'Collection Detail',\n  component: CollectionDetail,\n  layout: '/'\n}, {\n  path: '/collection-edit/:id',\n  name: 'Collection Edit',\n  component: CollectionEdit,\n  layout: '/user'\n}, {\n  path: 'how-to-use',\n  name: 'How to Use',\n  component: HowToUse,\n  layout: '/'\n}, {\n  path: 'about',\n  name: 'About Us',\n  component: About,\n  layout: '/'\n}, {\n  path: 'legal',\n  name: 'Legal',\n  component: Legal,\n  layout: '/'\n}, {\n  path: \"faq\",\n  name: \"Faq\",\n  component: Faq,\n  layout: \"/\"\n}, {\n  path: \"blog-list\",\n  name: \"Blog List\",\n  component: BlogList,\n  layout: \"/\"\n}, {\n  path: '/nftEdit/:id',\n  name: 'NFT Edit',\n  component: NFTMinting,\n  layout: '/user'\n}];\n/* harmony default export */ __webpack_exports__[\"default\"] = (routes);\n\n//# sourceURL=webpack:///./src/routes.js?");

/***/ })

}]);