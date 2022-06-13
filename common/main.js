(global["webpackJsonp"] = global["webpackJsonp"] || []).push([["common/main"],[
/* 0 */
/*!***************************************!*\
  !*** D:/Desktop/云云取图/云云取图-前端/main.js ***!
  \***************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/* WEBPACK VAR INJECTION */(function(wx, createApp) {__webpack_require__(/*! uni-pages */ 5);var _App = _interopRequireDefault(__webpack_require__(/*! ./App */ 6));


var _vue = _interopRequireDefault(__webpack_require__(/*! vue */ 4));function _interopRequireDefault(obj) {return obj && obj.__esModule ? obj : { default: obj };}function ownKeys(object, enumerableOnly) {var keys = Object.keys(object);if (Object.getOwnPropertySymbols) {var symbols = Object.getOwnPropertySymbols(object);if (enumerableOnly) symbols = symbols.filter(function (sym) {return Object.getOwnPropertyDescriptor(object, sym).enumerable;});keys.push.apply(keys, symbols);}return keys;}function _objectSpread(target) {for (var i = 1; i < arguments.length; i++) {var source = arguments[i] != null ? arguments[i] : {};if (i % 2) {ownKeys(Object(source), true).forEach(function (key) {_defineProperty(target, key, source[key]);});} else if (Object.getOwnPropertyDescriptors) {Object.defineProperties(target, Object.getOwnPropertyDescriptors(source));} else {ownKeys(Object(source)).forEach(function (key) {Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key));});}}return target;}function _defineProperty(obj, key, value) {if (key in obj) {Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true });} else {obj[key] = value;}return obj;}wx.__webpack_require_UNI_MP_PLUGIN__ = __webpack_require__;
_vue.default.config.productionTip = false;
_App.default.mpType = 'app';
var app = new _vue.default(_objectSpread({},
_App.default));

createApp(app).$mount();
/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./node_modules/@dcloudio/uni-mp-toutiao/dist/index.js */ 1)["default"], __webpack_require__(/*! ./node_modules/@dcloudio/uni-mp-toutiao/dist/index.js */ 1)["createApp"]))

/***/ }),
/* 1 */,
/* 2 */,
/* 3 */,
/* 4 */,
/* 5 */,
/* 6 */
/*!***************************************!*\
  !*** D:/Desktop/云云取图/云云取图-前端/App.vue ***!
  \***************************************/
/*! no static exports found */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _App_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./App.vue?vue&type=script&lang=js& */ 7);
/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _App_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__) if(__WEBPACK_IMPORT_KEY__ !== 'default') (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _App_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__[key]; }) }(__WEBPACK_IMPORT_KEY__));
/* harmony import */ var _App_vue_vue_type_style_index_0_lang_css___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./App.vue?vue&type=style&index=0&lang=css& */ 14);
/* harmony import */ var _HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../HBuilderX/plugins/uniapp-cli/node_modules/@dcloudio/vue-cli-plugin-uni/packages/vue-loader/lib/runtime/componentNormalizer.js */ 16);
var render, staticRenderFns, recyclableRender, components
var renderjs





/* normalize component */

var component = Object(_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__["default"])(
  _App_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__["default"],
  render,
  staticRenderFns,
  false,
  null,
  null,
  null,
  false,
  components,
  renderjs
)

component.options.__file = "App.vue"
/* harmony default export */ __webpack_exports__["default"] = (component.exports);

/***/ }),
/* 7 */
/*!****************************************************************!*\
  !*** D:/Desktop/云云取图/云云取图-前端/App.vue?vue&type=script&lang=js& ***!
  \****************************************************************/
/*! no static exports found */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _HBuilderX_plugins_uniapp_cli_node_modules_babel_loader_lib_index_js_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_12_1_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_script_js_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_style_js_App_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../HBuilderX/plugins/uniapp-cli/node_modules/babel-loader/lib!../../../HBuilderX/plugins/uniapp-cli/node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-preprocess-loader??ref--12-1!../../../HBuilderX/plugins/uniapp-cli/node_modules/@dcloudio/webpack-uni-mp-loader/lib/script.js!../../../HBuilderX/plugins/uniapp-cli/node_modules/@dcloudio/vue-cli-plugin-uni/packages/vue-loader/lib??vue-loader-options!../../../HBuilderX/plugins/uniapp-cli/node_modules/@dcloudio/webpack-uni-mp-loader/lib/style.js!./App.vue?vue&type=script&lang=js& */ 8);
/* harmony import */ var _HBuilderX_plugins_uniapp_cli_node_modules_babel_loader_lib_index_js_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_12_1_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_script_js_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_style_js_App_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_HBuilderX_plugins_uniapp_cli_node_modules_babel_loader_lib_index_js_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_12_1_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_script_js_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_style_js_App_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__);
/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _HBuilderX_plugins_uniapp_cli_node_modules_babel_loader_lib_index_js_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_12_1_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_script_js_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_style_js_App_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__) if(__WEBPACK_IMPORT_KEY__ !== 'default') (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _HBuilderX_plugins_uniapp_cli_node_modules_babel_loader_lib_index_js_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_12_1_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_script_js_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_style_js_App_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__[key]; }) }(__WEBPACK_IMPORT_KEY__));
 /* harmony default export */ __webpack_exports__["default"] = (_HBuilderX_plugins_uniapp_cli_node_modules_babel_loader_lib_index_js_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_12_1_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_script_js_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_style_js_App_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0___default.a); 

/***/ }),
/* 8 */
/*!***********************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-preprocess-loader??ref--12-1!./node_modules/@dcloudio/webpack-uni-mp-loader/lib/script.js!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/vue-loader/lib??vue-loader-options!./node_modules/@dcloudio/webpack-uni-mp-loader/lib/style.js!D:/Desktop/云云取图/云云取图-前端/App.vue?vue&type=script&lang=js& ***!
  \***********************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/* WEBPACK VAR INJECTION */(function(uni) {Object.defineProperty(exports, "__esModule", { value: true });exports.default = void 0;var _regenerator = _interopRequireDefault(__webpack_require__(/*! ./node_modules/@babel/runtime/regenerator */ 9));
var _config = _interopRequireDefault(__webpack_require__(/*! ./utils/config.js */ 12));
var _request = _interopRequireDefault(__webpack_require__(/*! ./utils/request.js */ 13));function _interopRequireDefault(obj) {return obj && obj.__esModule ? obj : { default: obj };}function asyncGeneratorStep(gen, resolve, reject, _next, _throw, key, arg) {try {var info = gen[key](arg);var value = info.value;} catch (error) {reject(error);return;}if (info.done) {resolve(value);} else {Promise.resolve(value).then(_next, _throw);}}function _asyncToGenerator(fn) {return function () {var self = this,args = arguments;return new Promise(function (resolve, reject) {var gen = fn.apply(self, args);function _next(value) {asyncGeneratorStep(gen, resolve, reject, _next, _throw, "next", value);}function _throw(err) {asyncGeneratorStep(gen, resolve, reject, _next, _throw, "throw", err);}_next(undefined);});};}var _default =
{
  onLaunch: function onLaunch() {var _this2 = this;
    var _this = this;
    uni.getStorage({
      key: 'userLogin',
      success: function success(r) {
        _this.globalData.hasLogin = true;
      } });


    this.getAdInfo();
    this.getShareId(); //获取分享信息-kkkgogogo
    this.checkSession(function (openid) {//获取用户openid-gogokkk
      _this2.globalData.openid = openid;
      //获取当前用户可看广告的数据
      _this2.getAdLogInfo();
      _this2.saveAnalysisInfo(1);
    }, this.globalData.projectId);


  },
  onShow: function onShow() {

  },
  onHide: function onHide() {

  },
  methods: {
    // 获取分享信息
    getShareId: function getShareId() {var _this3 = this;return _asyncToGenerator( /*#__PURE__*/_regenerator.default.mark(function _callee() {var _this, r;return _regenerator.default.wrap(function _callee$(_context) {while (1) {switch (_context.prev = _context.next) {case 0:
                _this = _this3;_context.next = 3;return (
                  (0, _request.default)({
                    url: "".concat(_config.default.API, "api/w/getShareInfo"),
                    method: 'POST' }));case 3:r = _context.sent;

                if (r.error_code === 0) {
                  _this.globalData.shareInfo = r.data;
                }case 5:case "end":return _context.stop();}}}, _callee);}))();
    },

    //检查openid
    checkSession: function checkSession(callback, projectId) {
      var _this = this;
      uni.checkSession({
        success: function success(r) {
          uni.getStorage({
            key: 'openid',
            success: function success(r) {
              if (!r.data) {
                _this.loginAction(callback, projectId);
              } else {
                callback && callback(r.data);
              }
            },
            fail: function fail(err) {
              _this.loginAction(callback, projectId);
            } });

        },
        fail: function fail(err) {
          _this.loginAction(callback, projectId);
        } });

      // _this.loginAction(callback,projectId);
    },
    //获取openid
    loginAction: function loginAction(callback, projectId) {
      uni.login({
        success: function success(r) {return _asyncToGenerator( /*#__PURE__*/_regenerator.default.mark(function _callee2() {return _regenerator.default.wrap(function _callee2$(_context2) {while (1) {switch (_context2.prev = _context2.next) {case 0:
                    uni.request({
                      url: "".concat(_config.default.API, "api/user/openid/bind"),
                      data: {
                        code: r.code,
                        projectId: projectId },

                      success: function success(r2) {
                        if (r2.data.error_code === 0) {
                          uni.setStorage({
                            key: 'openid',
                            data: r2.data.data.openid });

                          callback && callback(r2.data.data.openid);
                        } else {
                          uni.showToast({
                            title: '获取openid失败',
                            icon: 'none' });

                        }
                      },
                      fail: function fail(err) {
                        console.log(err);
                      } });case 1:case "end":return _context2.stop();}}}, _callee2);}))();

        } });

    },
    //存储用户信息
    saveUserInfo: function saveUserInfo(avatarUrl, nickName) {var _this4 = this;return _asyncToGenerator( /*#__PURE__*/_regenerator.default.mark(function _callee3() {var r;return _regenerator.default.wrap(function _callee3$(_context3) {while (1) {switch (_context3.prev = _context3.next) {case 0:_context3.next = 2;return (
                  (0, _request.default)({
                    url: "".concat(_config.default.API, "api/user/saveInfo"),
                    method: 'POST',
                    data: {
                      openid: _this4.globalData.openid,
                      avatarUrl: avatarUrl,
                      nickName: nickName,
                      platform: _this4.globalData.projectId } }));case 2:r = _context3.sent;


                console.log(r);case 4:case "end":return _context3.stop();}}}, _callee3);}))();
    },
    //获取广告
    getAdInfo: function getAdInfo() {
      var _this = this;
      uni.request({
        url: "".concat(_config.default.API, "api/w/getAdInfo"),
        data: {
          projectId: this.globalData.projectId },

        method: 'POST',
        success: function success(res) {
          _this.globalData.adInfo = res.data.data;
          _this.globalData.canShowAd = res.data.data.open_ad == 1 ? true : false;
          console.log(_this.globalData.adInfo);
        } });

    },

    // 获取看广告信息
    getAdLogInfo: function getAdLogInfo() {var _this5 = this;return _asyncToGenerator( /*#__PURE__*/_regenerator.default.mark(function _callee4() {var _this, r;return _regenerator.default.wrap(function _callee4$(_context4) {while (1) {switch (_context4.prev = _context4.next) {case 0:
                _this = _this5;_context4.next = 3;return (
                  (0, _request.default)({
                    url: "".concat(_config.default.API, "api/ad/logSearch"),
                    method: 'POST',
                    data: {
                      openid: _this5.globalData.openid,
                      platform: _this5.globalData.projectId } }));case 3:r = _context4.sent;


                _this.globalData.ad_number = r.data.ad_number;
                _this.globalData.illegal_ad_number = r.data.illegal_ad_number;
                _this.globalData.free_ad_num = r.data.free_ad_num;
                _this.globalData.illfree_ad_num = r.data.illfree_ad_num;
                _this.globalData.de_ad_number = r.data.de_ad_number;
                _this.globalData.adRequestRes = true;case 10:case "end":return _context4.stop();}}}, _callee4);}))();

    },

    // 增加看广告信息
    addAdLog: function addAdLog() {var _this6 = this;return _asyncToGenerator( /*#__PURE__*/_regenerator.default.mark(function _callee5() {var _this, r;return _regenerator.default.wrap(function _callee5$(_context5) {while (1) {switch (_context5.prev = _context5.next) {case 0:
                _this = _this6;_context5.next = 3;return (
                  (0, _request.default)({
                    url: "".concat(_config.default.API, "api/ad/logAdd"),
                    method: 'POST',
                    data: {
                      openid: _this6.globalData.openid,
                      platform: _this6.globalData.projectId } }));case 3:r = _context5.sent;



                _this.globalData.illegal_ad_number++;case 5:case "end":return _context5.stop();}}}, _callee5);}))();
    },
    // 增加免费不看广告信息
    addFreeAdLog: function addFreeAdLog() {var _this7 = this;return _asyncToGenerator( /*#__PURE__*/_regenerator.default.mark(function _callee6() {var _this, r;return _regenerator.default.wrap(function _callee6$(_context6) {while (1) {switch (_context6.prev = _context6.next) {case 0:
                _this = _this7;_context6.next = 3;return (
                  (0, _request.default)({
                    url: "".concat(_config.default.API, "api/ad/logAdd"),
                    method: 'POST',
                    data: {
                      openid: _this7.globalData.openid,
                      platform: _this7.globalData.projectId,
                      type: 2 } }));case 3:r = _context6.sent;



                _this.globalData.illfree_ad_num++;case 5:case "end":return _context6.stop();}}}, _callee6);}))();
    },


    //存储数据埋点分析内容
    //type : 具体埋点位置内容
    // 1=>'进入小程序',2=>'进入素材详情页',3=>'点击看广告下载的次数',4=>'点击普通下载的次数'
    //        ,5=>'真实看完广告的次数',6=>'未正常看完广告的次数',7=>'广告加载异常次数',
    saveAnalysisInfo: function saveAnalysisInfo(analysis_type) {var _arguments = arguments,_this8 = this;return _asyncToGenerator( /*#__PURE__*/_regenerator.default.mark(function _callee7() {var wallpaperId, r;return _regenerator.default.wrap(function _callee7$(_context7) {while (1) {switch (_context7.prev = _context7.next) {case 0:wallpaperId = _arguments.length > 1 && _arguments[1] !== undefined ? _arguments[1] : 0;_context7.next = 3;return (
                  (0, _request.default)({
                    url: "".concat(_config.default.API, "api/w/data/analysis/save"),
                    method: 'POST',
                    data: {
                      openid: _this8.globalData.openid,
                      platform: _this8.globalData.projectId,
                      type: analysis_type,
                      wallpaper_id: wallpaperId } }));case 3:r = _context7.sent;


                console.log(r);case 5:case "end":return _context7.stop();}}}, _callee7);}))();
    },

    //处理看广告分销功能
    dealPp: function dealPp(id, nickName, avatarUrl) {var _this9 = this;return _asyncToGenerator( /*#__PURE__*/_regenerator.default.mark(function _callee8() {var r;return _regenerator.default.wrap(function _callee8$(_context8) {while (1) {switch (_context8.prev = _context8.next) {case 0:_context8.next = 2;return (
                  (0, _request.default)({
                    url: "".concat(_config.default.API, "api/w/dealPp"),
                    method: 'POST',
                    data: {
                      id: id,
                      platform: _this9.globalData.projectId,
                      openid: _this9.globalData.openid,
                      nickname: nickName,
                      avatar_url: avatarUrl } }));case 2:r = _context8.sent;case 3:case "end":return _context8.stop();}}}, _callee8);}))();



    } },

  globalData: {
    //环境区分类型







    projectId: 'dy',




    canShowAd: false, //是否能显示广告组件



    shareInfo: null, //分享信息
    adInfo: null, //广告信息
    openid: '', //用户openid
    hasLogin: false, //是否登录了

    ad_number: 0, //记录可看广告次数
    illegal_ad_number: 0, //记录已看广告次数
    free_ad_num: 0, //免费赠送的广告下载次数
    illfree_ad_num: 0, //已使用免费下载次数
    de_ad_number: 0, //原始可看广告次数
    adRequestRes: false //请求当前用户看广告的响应
  } };exports.default = _default;
/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./node_modules/@dcloudio/uni-mp-toutiao/dist/index.js */ 1)["default"]))

/***/ }),
/* 9 */,
/* 10 */,
/* 11 */,
/* 12 */,
/* 13 */,
/* 14 */
/*!************************************************************************!*\
  !*** D:/Desktop/云云取图/云云取图-前端/App.vue?vue&type=style&index=0&lang=css& ***!
  \************************************************************************/
/*! no static exports found */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _HBuilderX_plugins_uniapp_cli_node_modules_mini_css_extract_plugin_dist_loader_js_ref_6_oneOf_1_0_HBuilderX_plugins_uniapp_cli_node_modules_css_loader_dist_cjs_js_ref_6_oneOf_1_1_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_loaders_stylePostLoader_js_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_6_oneOf_1_2_HBuilderX_plugins_uniapp_cli_node_modules_postcss_loader_src_index_js_ref_6_oneOf_1_3_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_style_js_App_vue_vue_type_style_index_0_lang_css___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../HBuilderX/plugins/uniapp-cli/node_modules/mini-css-extract-plugin/dist/loader.js??ref--6-oneOf-1-0!../../../HBuilderX/plugins/uniapp-cli/node_modules/css-loader/dist/cjs.js??ref--6-oneOf-1-1!../../../HBuilderX/plugins/uniapp-cli/node_modules/@dcloudio/vue-cli-plugin-uni/packages/vue-loader/lib/loaders/stylePostLoader.js!../../../HBuilderX/plugins/uniapp-cli/node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-preprocess-loader??ref--6-oneOf-1-2!../../../HBuilderX/plugins/uniapp-cli/node_modules/postcss-loader/src??ref--6-oneOf-1-3!../../../HBuilderX/plugins/uniapp-cli/node_modules/@dcloudio/vue-cli-plugin-uni/packages/vue-loader/lib??vue-loader-options!../../../HBuilderX/plugins/uniapp-cli/node_modules/@dcloudio/webpack-uni-mp-loader/lib/style.js!./App.vue?vue&type=style&index=0&lang=css& */ 15);
/* harmony import */ var _HBuilderX_plugins_uniapp_cli_node_modules_mini_css_extract_plugin_dist_loader_js_ref_6_oneOf_1_0_HBuilderX_plugins_uniapp_cli_node_modules_css_loader_dist_cjs_js_ref_6_oneOf_1_1_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_loaders_stylePostLoader_js_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_6_oneOf_1_2_HBuilderX_plugins_uniapp_cli_node_modules_postcss_loader_src_index_js_ref_6_oneOf_1_3_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_style_js_App_vue_vue_type_style_index_0_lang_css___WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_HBuilderX_plugins_uniapp_cli_node_modules_mini_css_extract_plugin_dist_loader_js_ref_6_oneOf_1_0_HBuilderX_plugins_uniapp_cli_node_modules_css_loader_dist_cjs_js_ref_6_oneOf_1_1_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_loaders_stylePostLoader_js_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_6_oneOf_1_2_HBuilderX_plugins_uniapp_cli_node_modules_postcss_loader_src_index_js_ref_6_oneOf_1_3_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_style_js_App_vue_vue_type_style_index_0_lang_css___WEBPACK_IMPORTED_MODULE_0__);
/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _HBuilderX_plugins_uniapp_cli_node_modules_mini_css_extract_plugin_dist_loader_js_ref_6_oneOf_1_0_HBuilderX_plugins_uniapp_cli_node_modules_css_loader_dist_cjs_js_ref_6_oneOf_1_1_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_loaders_stylePostLoader_js_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_6_oneOf_1_2_HBuilderX_plugins_uniapp_cli_node_modules_postcss_loader_src_index_js_ref_6_oneOf_1_3_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_style_js_App_vue_vue_type_style_index_0_lang_css___WEBPACK_IMPORTED_MODULE_0__) if(__WEBPACK_IMPORT_KEY__ !== 'default') (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _HBuilderX_plugins_uniapp_cli_node_modules_mini_css_extract_plugin_dist_loader_js_ref_6_oneOf_1_0_HBuilderX_plugins_uniapp_cli_node_modules_css_loader_dist_cjs_js_ref_6_oneOf_1_1_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_loaders_stylePostLoader_js_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_6_oneOf_1_2_HBuilderX_plugins_uniapp_cli_node_modules_postcss_loader_src_index_js_ref_6_oneOf_1_3_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_style_js_App_vue_vue_type_style_index_0_lang_css___WEBPACK_IMPORTED_MODULE_0__[key]; }) }(__WEBPACK_IMPORT_KEY__));
 /* harmony default export */ __webpack_exports__["default"] = (_HBuilderX_plugins_uniapp_cli_node_modules_mini_css_extract_plugin_dist_loader_js_ref_6_oneOf_1_0_HBuilderX_plugins_uniapp_cli_node_modules_css_loader_dist_cjs_js_ref_6_oneOf_1_1_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_loaders_stylePostLoader_js_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_6_oneOf_1_2_HBuilderX_plugins_uniapp_cli_node_modules_postcss_loader_src_index_js_ref_6_oneOf_1_3_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_style_js_App_vue_vue_type_style_index_0_lang_css___WEBPACK_IMPORTED_MODULE_0___default.a); 

/***/ }),
/* 15 */
/*!****************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/mini-css-extract-plugin/dist/loader.js??ref--6-oneOf-1-0!./node_modules/css-loader/dist/cjs.js??ref--6-oneOf-1-1!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-preprocess-loader??ref--6-oneOf-1-2!./node_modules/postcss-loader/src??ref--6-oneOf-1-3!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/vue-loader/lib??vue-loader-options!./node_modules/@dcloudio/webpack-uni-mp-loader/lib/style.js!D:/Desktop/云云取图/云云取图-前端/App.vue?vue&type=style&index=0&lang=css& ***!
  \****************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

// extracted by mini-css-extract-plugin
    if(false) { var cssReload; }
  

/***/ })
],[[0,"common/runtime","common/vendor"]]]);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInVuaS1hcHA6Ly8vbWFpbi5qcyIsIndlYnBhY2s6Ly8vRDovRGVza3RvcC/kupHkupHlj5blm74v5LqR5LqR5Y+W5Zu+LeWJjeerry9BcHAudnVlPzI4ODYiLCJ3ZWJwYWNrOi8vL0Q6L0Rlc2t0b3Av5LqR5LqR5Y+W5Zu+L+S6keS6keWPluWbvi3liY3nq68vQXBwLnZ1ZT9mMDI1IiwidW5pLWFwcDovLy9BcHAudnVlIiwid2VicGFjazovLy9EOi9EZXNrdG9wL+S6keS6keWPluWbvi/kupHkupHlj5blm74t5YmN56uvL0FwcC52dWU/MDI3ZSIsIndlYnBhY2s6Ly8vRDovRGVza3RvcC/kupHkupHlj5blm74v5LqR5LqR5Y+W5Zu+LeWJjeerry9BcHAudnVlPzhmNjQiXSwibmFtZXMiOlsid3giLCJfX3dlYnBhY2tfcmVxdWlyZV9VTklfTVBfUExVR0lOX18iLCJfX3dlYnBhY2tfcmVxdWlyZV9fIiwiVnVlIiwiY29uZmlnIiwicHJvZHVjdGlvblRpcCIsIkFwcCIsIm1wVHlwZSIsImFwcCIsIiRtb3VudCJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7O3FEQUFBLHdDQUE4RTs7O0FBRzlFLHFFLHduQ0FIbUJBLEVBQUUsQ0FBQ0MsaUNBQUgsR0FBdUNDLG1CQUF2QztBQUluQkMsYUFBSUMsTUFBSixDQUFXQyxhQUFYLEdBQTJCLEtBQTNCO0FBQ0FDLGFBQUlDLE1BQUosR0FBYSxLQUFiO0FBQ0EsSUFBTUMsR0FBRyxHQUFHLElBQUlMLFlBQUo7QUFDTEcsWUFESyxFQUFaOztBQUdBLFVBQUFFLEdBQUcsRUFBQ0MsTUFBSixHOzs7Ozs7Ozs7Ozs7Ozs7OztBQ1RBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUNBO0FBQ3VEO0FBQ0w7QUFDYTs7O0FBRy9EO0FBQ2dLO0FBQ2hLLGdCQUFnQiw2S0FBVTtBQUMxQixFQUFFLHlFQUFNO0FBQ1I7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDZSxnRjs7Ozs7Ozs7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QUNBO0FBQ0E7QUFDQTtBQUNBLG9CQTNKQSw0QkEySkEsYUEzSkEsRUEySkE7QUFDQTtBQUNBLG1GQURBO0FBRUEsa0NBRkE7QUFHQTtBQUNBLHNEQURBO0FBRUEsMkRBRkE7QUFHQSx5Q0FIQTtBQUlBLCtDQUpBLEVBSEEsR0FEQSxTQUNBLENBREE7OztBQVdBLCtCQVhBO0FBWUEsS0F2S0E7O0FBeUtBO0FBQ0EsVUExS0Esa0JBMEtBLEVBMUtBLEVBMEtBLFFBMUtBLEVBMEtBLFNBMUtBLEVBMEtBO0FBQ0E7QUFDQSx1RUFEQTtBQUVBLGtDQUZBO0FBR0E7QUFDQSw0QkFEQTtBQUVBLDJEQUZBO0FBR0Esc0RBSEE7QUFJQSx3Q0FKQTtBQUtBLDJDQUxBLEVBSEEsR0FEQSxTQUNBLENBREE7Ozs7QUFhQSxLQXZMQSxFQTNCQTs7QUFvTkE7QUFDQTs7Ozs7Ozs7QUFRQSxtQkFUQTs7Ozs7QUFjQSxvQkFkQSxFQWNBOzs7O0FBSUEsbUJBbEJBLEVBa0JBO0FBQ0EsZ0JBbkJBLEVBbUJBO0FBQ0EsY0FwQkEsRUFvQkE7QUFDQSxtQkFyQkEsRUFxQkE7O0FBRUEsZ0JBdkJBLEVBdUJBO0FBQ0Esd0JBeEJBLEVBd0JBO0FBQ0Esa0JBekJBLEVBeUJBO0FBQ0EscUJBMUJBLEVBMEJBO0FBQ0EsbUJBM0JBLEVBMkJBO0FBQ0EsdUJBNUJBLENBNEJBO0FBNUJBLEdBcE5BLEU7Ozs7Ozs7Ozs7Ozs7Ozs7O0FDSEE7QUFBQTtBQUFBO0FBQUE7QUFBODFCLENBQWdCLGsyQkFBRyxFQUFDLEM7Ozs7Ozs7Ozs7QUNBbDNCO0FBQ0EsT0FBTyxLQUFVLEVBQUUsa0JBS2QiLCJmaWxlIjoiY29tbW9uL21haW4uanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgJ3VuaS1wYWdlcyc7d3guX193ZWJwYWNrX3JlcXVpcmVfVU5JX01QX1BMVUdJTl9fID0gX193ZWJwYWNrX3JlcXVpcmVfXztpbXBvcnQgQXBwIGZyb20gJy4vQXBwJ1xyXG5cclxuXHJcbmltcG9ydCBWdWUgZnJvbSAndnVlJ1xyXG5WdWUuY29uZmlnLnByb2R1Y3Rpb25UaXAgPSBmYWxzZVxyXG5BcHAubXBUeXBlID0gJ2FwcCdcclxuY29uc3QgYXBwID0gbmV3IFZ1ZSh7XHJcbiAgICAuLi5BcHBcclxufSlcclxuYXBwLiRtb3VudCgpIiwidmFyIHJlbmRlciwgc3RhdGljUmVuZGVyRm5zLCByZWN5Y2xhYmxlUmVuZGVyLCBjb21wb25lbnRzXG52YXIgcmVuZGVyanNcbmltcG9ydCBzY3JpcHQgZnJvbSBcIi4vQXBwLnZ1ZT92dWUmdHlwZT1zY3JpcHQmbGFuZz1qcyZcIlxuZXhwb3J0ICogZnJvbSBcIi4vQXBwLnZ1ZT92dWUmdHlwZT1zY3JpcHQmbGFuZz1qcyZcIlxuaW1wb3J0IHN0eWxlMCBmcm9tIFwiLi9BcHAudnVlP3Z1ZSZ0eXBlPXN0eWxlJmluZGV4PTAmbGFuZz1jc3MmXCJcblxuXG4vKiBub3JtYWxpemUgY29tcG9uZW50ICovXG5pbXBvcnQgbm9ybWFsaXplciBmcm9tIFwiIS4uLy4uLy4uL0hCdWlsZGVyWC9wbHVnaW5zL3VuaWFwcC1jbGkvbm9kZV9tb2R1bGVzL0BkY2xvdWRpby92dWUtY2xpLXBsdWdpbi11bmkvcGFja2FnZXMvdnVlLWxvYWRlci9saWIvcnVudGltZS9jb21wb25lbnROb3JtYWxpemVyLmpzXCJcbnZhciBjb21wb25lbnQgPSBub3JtYWxpemVyKFxuICBzY3JpcHQsXG4gIHJlbmRlcixcbiAgc3RhdGljUmVuZGVyRm5zLFxuICBmYWxzZSxcbiAgbnVsbCxcbiAgbnVsbCxcbiAgbnVsbCxcbiAgZmFsc2UsXG4gIGNvbXBvbmVudHMsXG4gIHJlbmRlcmpzXG4pXG5cbmNvbXBvbmVudC5vcHRpb25zLl9fZmlsZSA9IFwiQXBwLnZ1ZVwiXG5leHBvcnQgZGVmYXVsdCBjb21wb25lbnQuZXhwb3J0cyIsImltcG9ydCBtb2QgZnJvbSBcIi0hLi4vLi4vLi4vSEJ1aWxkZXJYL3BsdWdpbnMvdW5pYXBwLWNsaS9ub2RlX21vZHVsZXMvYmFiZWwtbG9hZGVyL2xpYi9pbmRleC5qcyEuLi8uLi8uLi9IQnVpbGRlclgvcGx1Z2lucy91bmlhcHAtY2xpL25vZGVfbW9kdWxlcy9AZGNsb3VkaW8vdnVlLWNsaS1wbHVnaW4tdW5pL3BhY2thZ2VzL3dlYnBhY2stcHJlcHJvY2Vzcy1sb2FkZXIvaW5kZXguanM/P3JlZi0tMTItMSEuLi8uLi8uLi9IQnVpbGRlclgvcGx1Z2lucy91bmlhcHAtY2xpL25vZGVfbW9kdWxlcy9AZGNsb3VkaW8vd2VicGFjay11bmktbXAtbG9hZGVyL2xpYi9zY3JpcHQuanMhLi4vLi4vLi4vSEJ1aWxkZXJYL3BsdWdpbnMvdW5pYXBwLWNsaS9ub2RlX21vZHVsZXMvQGRjbG91ZGlvL3Z1ZS1jbGktcGx1Z2luLXVuaS9wYWNrYWdlcy92dWUtbG9hZGVyL2xpYi9pbmRleC5qcz8/dnVlLWxvYWRlci1vcHRpb25zIS4uLy4uLy4uL0hCdWlsZGVyWC9wbHVnaW5zL3VuaWFwcC1jbGkvbm9kZV9tb2R1bGVzL0BkY2xvdWRpby93ZWJwYWNrLXVuaS1tcC1sb2FkZXIvbGliL3N0eWxlLmpzIS4vQXBwLnZ1ZT92dWUmdHlwZT1zY3JpcHQmbGFuZz1qcyZcIjsgZXhwb3J0IGRlZmF1bHQgbW9kOyBleHBvcnQgKiBmcm9tIFwiLSEuLi8uLi8uLi9IQnVpbGRlclgvcGx1Z2lucy91bmlhcHAtY2xpL25vZGVfbW9kdWxlcy9iYWJlbC1sb2FkZXIvbGliL2luZGV4LmpzIS4uLy4uLy4uL0hCdWlsZGVyWC9wbHVnaW5zL3VuaWFwcC1jbGkvbm9kZV9tb2R1bGVzL0BkY2xvdWRpby92dWUtY2xpLXBsdWdpbi11bmkvcGFja2FnZXMvd2VicGFjay1wcmVwcm9jZXNzLWxvYWRlci9pbmRleC5qcz8/cmVmLS0xMi0xIS4uLy4uLy4uL0hCdWlsZGVyWC9wbHVnaW5zL3VuaWFwcC1jbGkvbm9kZV9tb2R1bGVzL0BkY2xvdWRpby93ZWJwYWNrLXVuaS1tcC1sb2FkZXIvbGliL3NjcmlwdC5qcyEuLi8uLi8uLi9IQnVpbGRlclgvcGx1Z2lucy91bmlhcHAtY2xpL25vZGVfbW9kdWxlcy9AZGNsb3VkaW8vdnVlLWNsaS1wbHVnaW4tdW5pL3BhY2thZ2VzL3Z1ZS1sb2FkZXIvbGliL2luZGV4LmpzPz92dWUtbG9hZGVyLW9wdGlvbnMhLi4vLi4vLi4vSEJ1aWxkZXJYL3BsdWdpbnMvdW5pYXBwLWNsaS9ub2RlX21vZHVsZXMvQGRjbG91ZGlvL3dlYnBhY2stdW5pLW1wLWxvYWRlci9saWIvc3R5bGUuanMhLi9BcHAudnVlP3Z1ZSZ0eXBlPXNjcmlwdCZsYW5nPWpzJlwiIiwiPHNjcmlwdD5cblx0aW1wb3J0IGNvbmZpZyBmcm9tICcuL3V0aWxzL2NvbmZpZy5qcyc7XG5cdGltcG9ydCByZXF1ZXN0IGZyb20gJy4vdXRpbHMvcmVxdWVzdC5qcyc7XHJcblx0ZXhwb3J0IGRlZmF1bHQge1xyXG5cdFx0b25MYXVuY2g6IGZ1bmN0aW9uKCkge1xuXHRcdFx0bGV0IF90aGlzICA9IHRoaXNcblx0XHRcdHVuaS5nZXRTdG9yYWdlKHtcblx0XHRcdFx0a2V5OiAndXNlckxvZ2luJyxcblx0XHRcdFx0c3VjY2VzcyhyKSB7XG5cdFx0XHRcdFx0X3RoaXMuZ2xvYmFsRGF0YS5oYXNMb2dpbiA9IHRydWVcblx0XHRcdFx0fSxcblx0XHRcdFx0XG5cdFx0XHR9KVxuXHRcdFx0dGhpcy5nZXRBZEluZm8oKVxyXG5cdFx0XHR0aGlzLmdldFNoYXJlSWQoKTsvL+iOt+WPluWIhuS6q+S/oeaBry1ra2tnb2dvZ29cblx0XHRcdHRoaXMuY2hlY2tTZXNzaW9uKG9wZW5pZCA9PiB7Ly/ojrflj5bnlKjmiLdvcGVuaWQtZ29nb2tra1xuXHRcdFx0XHR0aGlzLmdsb2JhbERhdGEub3BlbmlkID0gb3BlbmlkO1xuXHRcdFx0XHQvL+iOt+WPluW9k+WJjeeUqOaIt+WPr+eci+W5v+WRiueahOaVsOaNrlxuXHRcdFx0XHR0aGlzLmdldEFkTG9nSW5mbygpXG5cdFx0XHRcdHRoaXMuc2F2ZUFuYWx5c2lzSW5mbygxKVxuXHRcdFx0fSx0aGlzLmdsb2JhbERhdGEucHJvamVjdElkKTtcblx0XHRcdFxuXHRcdFx0XHJcblx0XHR9LFxyXG5cdFx0b25TaG93OiBmdW5jdGlvbigpIHtcclxuXHRcdFx0XHJcblx0XHR9LFxyXG5cdFx0b25IaWRlOiBmdW5jdGlvbigpIHtcclxuXHRcdFx0XHJcblx0XHR9LFxuXHRcdG1ldGhvZHM6e1xuXHRcdFx0Ly8g6I635Y+W5YiG5Lqr5L+h5oGvXG5cdFx0XHRhc3luYyBnZXRTaGFyZUlkKCkge1xuXHRcdFx0XHRsZXQgX3RoaXMgID0gdGhpc1xuXHRcdFx0XHRjb25zdCByID0gYXdhaXQgcmVxdWVzdCh7XG5cdFx0XHRcdFx0dXJsOiAgYCR7Y29uZmlnLkFQSX1hcGkvdy9nZXRTaGFyZUluZm9gLFxuXHRcdFx0XHRcdG1ldGhvZDogJ1BPU1QnXG5cdFx0XHRcdH0pO1xuXHRcdFx0XHRpZiAoci5lcnJvcl9jb2RlID09PSAwKSB7XG5cdFx0XHRcdFx0X3RoaXMuZ2xvYmFsRGF0YS5zaGFyZUluZm8gPSByLmRhdGFcblx0XHRcdFx0fVxuXHRcdFx0fSxcblx0XHRcdFxuXHRcdFx0Ly/mo4Dmn6VvcGVuaWRcblx0XHRcdGNoZWNrU2Vzc2lvbihjYWxsYmFjayxwcm9qZWN0SWQpe1xuXHRcdFx0XHRsZXQgX3RoaXMgPSB0aGlzXG5cdFx0XHRcdHVuaS5jaGVja1Nlc3Npb24oe1xuXHRcdFx0XHRcdHN1Y2Nlc3Mocikge1xuXHRcdFx0XHRcdFx0dW5pLmdldFN0b3JhZ2Uoe1xuXHRcdFx0XHRcdFx0XHRrZXk6ICdvcGVuaWQnLFxuXHRcdFx0XHRcdFx0XHRzdWNjZXNzKHIpIHtcblx0XHRcdFx0XHRcdFx0XHRpZiAoIXIuZGF0YSkge1xuXHRcdFx0XHRcdFx0XHRcdFx0X3RoaXMubG9naW5BY3Rpb24oY2FsbGJhY2sscHJvamVjdElkKTtcblx0XHRcdFx0XHRcdFx0XHR9IGVsc2Uge1xuXHRcdFx0XHRcdFx0XHRcdFx0Y2FsbGJhY2sgJiYgY2FsbGJhY2soci5kYXRhKTtcblx0XHRcdFx0XHRcdFx0XHR9XG5cdFx0XHRcdFx0XHRcdH0sXG5cdFx0XHRcdFx0XHRcdGZhaWwoZXJyKSB7XG5cdFx0XHRcdFx0XHRcdFx0X3RoaXMubG9naW5BY3Rpb24oY2FsbGJhY2sscHJvamVjdElkKTtcblx0XHRcdFx0XHRcdFx0fVxuXHRcdFx0XHRcdFx0fSlcblx0XHRcdFx0XHR9LFxuXHRcdFx0XHRcdGZhaWwoZXJyKSB7XG5cdFx0XHRcdFx0XHRfdGhpcy5sb2dpbkFjdGlvbihjYWxsYmFjayxwcm9qZWN0SWQpO1xuXHRcdFx0XHRcdH1cblx0XHRcdFx0fSk7XG5cdFx0XHRcdC8vIF90aGlzLmxvZ2luQWN0aW9uKGNhbGxiYWNrLHByb2plY3RJZCk7XG5cdFx0XHR9LFxuXHRcdFx0Ly/ojrflj5ZvcGVuaWRcblx0XHRcdGxvZ2luQWN0aW9uKGNhbGxiYWNrLHByb2plY3RJZCkge1xuXHRcdFx0XHR1bmkubG9naW4oe1xuXHRcdFx0XHRcdGFzeW5jIHN1Y2Nlc3Mocikge1xuXHRcdFx0XHRcdFx0dW5pLnJlcXVlc3Qoe1xuXHRcdFx0XHRcdFx0XHR1cmw6IGAke2NvbmZpZy5BUEl9YXBpL3VzZXIvb3BlbmlkL2JpbmRgLFxuXHRcdFx0XHRcdFx0XHRkYXRhOiB7XG5cdFx0XHRcdFx0XHRcdFx0Y29kZTogci5jb2RlLFxuXHRcdFx0XHRcdFx0XHRcdHByb2plY3RJZDpwcm9qZWN0SWRcblx0XHRcdFx0XHRcdFx0fSxcblx0XHRcdFx0XHRcdFx0c3VjY2VzcyhyMikge1xuXHRcdFx0XHRcdFx0XHRcdGlmIChyMi5kYXRhLmVycm9yX2NvZGUgPT09IDApIHtcblx0XHRcdFx0XHRcdFx0XHRcdHVuaS5zZXRTdG9yYWdlKHtcblx0XHRcdFx0XHRcdFx0XHRcdFx0a2V5OiAnb3BlbmlkJyxcblx0XHRcdFx0XHRcdFx0XHRcdFx0ZGF0YTogcjIuZGF0YS5kYXRhLm9wZW5pZFxuXHRcdFx0XHRcdFx0XHRcdFx0fSk7XG5cdFx0XHRcdFx0XHRcdFx0XHRjYWxsYmFjayAmJiBjYWxsYmFjayhyMi5kYXRhLmRhdGEub3BlbmlkKTtcblx0XHRcdFx0XHRcdFx0XHR9IGVsc2Uge1xuXHRcdFx0XHRcdFx0XHRcdFx0dW5pLnNob3dUb2FzdCh7XG5cdFx0XHRcdFx0XHRcdFx0XHRcdHRpdGxlOiAn6I635Y+Wb3Blbmlk5aSx6LSlJyxcblx0XHRcdFx0XHRcdFx0XHRcdFx0aWNvbjogJ25vbmUnXG5cdFx0XHRcdFx0XHRcdFx0XHR9KTtcblx0XHRcdFx0XHRcdFx0XHR9XG5cdFx0XHRcdFx0XHRcdH0sXG5cdFx0XHRcdFx0XHRcdGZhaWwoZXJyKSB7XG5cdFx0XHRcdFx0XHRcdFx0Y29uc29sZS5sb2coZXJyKTtcblx0XHRcdFx0XHRcdFx0fVxuXHRcdFx0XHRcdFx0fSk7XG5cdFx0XHRcdFx0fVxuXHRcdFx0XHR9KTtcblx0XHRcdH0sXG5cdFx0XHQvL+WtmOWCqOeUqOaIt+S/oeaBr1xuXHRcdFx0YXN5bmMgc2F2ZVVzZXJJbmZvKGF2YXRhclVybCxuaWNrTmFtZSkge1xuXHRcdFx0XHRjb25zdCByID0gYXdhaXQgcmVxdWVzdCh7XG5cdFx0XHRcdFx0dXJsOiBgJHtjb25maWcuQVBJfWFwaS91c2VyL3NhdmVJbmZvYCxcblx0XHRcdFx0XHRtZXRob2Q6J1BPU1QnLFxuXHRcdFx0XHRcdGRhdGE6IHtcblx0XHRcdFx0XHRcdG9wZW5pZDogdGhpcy5nbG9iYWxEYXRhLm9wZW5pZCxcblx0XHRcdFx0XHRcdGF2YXRhclVybDphdmF0YXJVcmwsXG5cdFx0XHRcdFx0XHRuaWNrTmFtZTpuaWNrTmFtZSxcblx0XHRcdFx0XHRcdHBsYXRmb3JtOnRoaXMuZ2xvYmFsRGF0YS5wcm9qZWN0SWRcblx0XHRcdFx0XHR9LFxuXHRcdFx0XHR9KTtcblx0XHRcdFx0Y29uc29sZS5sb2cocikgXG5cdFx0XHR9LFxuXHRcdFx0Ly/ojrflj5blub/lkYpcblx0XHRcdGdldEFkSW5mbygpe1xuXHRcdFx0XHRsZXQgX3RoaXMgPSB0aGlzXG5cdFx0XHRcdHVuaS5yZXF1ZXN0KHtcblx0XHRcdFx0XHR1cmw6IGAke2NvbmZpZy5BUEl9YXBpL3cvZ2V0QWRJbmZvYCxcblx0XHRcdFx0XHRkYXRhOiB7XG5cdFx0XHRcdFx0XHRwcm9qZWN0SWQ6dGhpcy5nbG9iYWxEYXRhLnByb2plY3RJZFxuXHRcdFx0XHRcdH0sXG5cdFx0XHRcdFx0bWV0aG9kOidQT1NUJyxcblx0XHRcdFx0XHRzdWNjZXNzKHJlcykge1xuXHRcdFx0XHRcdFx0X3RoaXMuZ2xvYmFsRGF0YS5hZEluZm8gPSByZXMuZGF0YS5kYXRhXG5cdFx0XHRcdFx0XHRfdGhpcy5nbG9iYWxEYXRhLmNhblNob3dBZCA9IHJlcy5kYXRhLmRhdGEub3Blbl9hZCA9PSAxP3RydWU6ZmFsc2Vcblx0XHRcdFx0XHRcdGNvbnNvbGUubG9nKF90aGlzLmdsb2JhbERhdGEuYWRJbmZvKVxuXHRcdFx0XHRcdH1cblx0XHRcdFx0fSlcblx0XHRcdH0sXG5cdFx0XHRcblx0XHRcdC8vIOiOt+WPlueci+W5v+WRiuS/oeaBr1xuXHRcdFx0YXN5bmMgZ2V0QWRMb2dJbmZvKCkge1xuXHRcdFx0XHRsZXQgX3RoaXMgID0gdGhpc1xuXHRcdFx0XHRjb25zdCByID0gYXdhaXQgcmVxdWVzdCh7XG5cdFx0XHRcdFx0dXJsOiAgYCR7Y29uZmlnLkFQSX1hcGkvYWQvbG9nU2VhcmNoYCxcblx0XHRcdFx0XHRtZXRob2Q6ICdQT1NUJyxcblx0XHRcdFx0XHRkYXRhOntcblx0XHRcdFx0XHRcdG9wZW5pZDp0aGlzLmdsb2JhbERhdGEub3BlbmlkLFxuXHRcdFx0XHRcdFx0cGxhdGZvcm06dGhpcy5nbG9iYWxEYXRhLnByb2plY3RJZFxuXHRcdFx0XHRcdH1cblx0XHRcdFx0fSk7XG5cdFx0XHRcdF90aGlzLmdsb2JhbERhdGEuYWRfbnVtYmVyID0gci5kYXRhLmFkX251bWJlclxuXHRcdFx0XHRfdGhpcy5nbG9iYWxEYXRhLmlsbGVnYWxfYWRfbnVtYmVyID0gci5kYXRhLmlsbGVnYWxfYWRfbnVtYmVyXG5cdFx0XHRcdF90aGlzLmdsb2JhbERhdGEuZnJlZV9hZF9udW0gPSByLmRhdGEuZnJlZV9hZF9udW1cblx0XHRcdFx0X3RoaXMuZ2xvYmFsRGF0YS5pbGxmcmVlX2FkX251bSA9IHIuZGF0YS5pbGxmcmVlX2FkX251bVxuXHRcdFx0XHRfdGhpcy5nbG9iYWxEYXRhLmRlX2FkX251bWJlciA9IHIuZGF0YS5kZV9hZF9udW1iZXJcblx0XHRcdFx0X3RoaXMuZ2xvYmFsRGF0YS5hZFJlcXVlc3RSZXMgPSB0cnVlXG5cdFx0XHRcdFxuXHRcdFx0fSxcblx0XHRcdFxuXHRcdFx0Ly8g5aKe5Yqg55yL5bm/5ZGK5L+h5oGvXG5cdFx0XHRhc3luYyBhZGRBZExvZygpIHtcblx0XHRcdFx0bGV0IF90aGlzICA9IHRoaXNcblx0XHRcdFx0Y29uc3QgciA9IGF3YWl0IHJlcXVlc3Qoe1xuXHRcdFx0XHRcdHVybDogIGAke2NvbmZpZy5BUEl9YXBpL2FkL2xvZ0FkZGAsXG5cdFx0XHRcdFx0bWV0aG9kOiAnUE9TVCcsXG5cdFx0XHRcdFx0ZGF0YTp7XG5cdFx0XHRcdFx0XHRvcGVuaWQ6dGhpcy5nbG9iYWxEYXRhLm9wZW5pZCxcblx0XHRcdFx0XHRcdHBsYXRmb3JtOnRoaXMuZ2xvYmFsRGF0YS5wcm9qZWN0SWRcblx0XHRcdFx0XHR9XG5cdFx0XHRcdH0pO1xuXG5cdFx0XHRcdF90aGlzLmdsb2JhbERhdGEuaWxsZWdhbF9hZF9udW1iZXIrK1xuXHRcdFx0fSxcblx0XHRcdC8vIOWinuWKoOWFjei0ueS4jeeci+W5v+WRiuS/oeaBr1xuXHRcdFx0YXN5bmMgYWRkRnJlZUFkTG9nKCkge1xuXHRcdFx0XHRsZXQgX3RoaXMgID0gdGhpc1xuXHRcdFx0XHRjb25zdCByID0gYXdhaXQgcmVxdWVzdCh7XG5cdFx0XHRcdFx0dXJsOiAgYCR7Y29uZmlnLkFQSX1hcGkvYWQvbG9nQWRkYCxcblx0XHRcdFx0XHRtZXRob2Q6ICdQT1NUJyxcblx0XHRcdFx0XHRkYXRhOntcblx0XHRcdFx0XHRcdG9wZW5pZDp0aGlzLmdsb2JhbERhdGEub3BlbmlkLFxuXHRcdFx0XHRcdFx0cGxhdGZvcm06dGhpcy5nbG9iYWxEYXRhLnByb2plY3RJZCxcblx0XHRcdFx0XHRcdHR5cGU6Mixcblx0XHRcdFx0XHR9XG5cdFx0XHRcdH0pO1xuXHRcdFx0XG5cdFx0XHRcdF90aGlzLmdsb2JhbERhdGEuaWxsZnJlZV9hZF9udW0rK1xuXHRcdFx0fSxcblx0XHRcdFxuXHRcdFx0XG5cdFx0XHQvL+WtmOWCqOaVsOaNruWfi+eCueWIhuaekOWGheWuuVxuXHRcdFx0Ly90eXBlIDog5YW35L2T5Z+L54K55L2N572u5YaF5a65XG5cdFx0XHQgLy8gMT0+J+i/m+WFpeWwj+eoi+W6jycsMj0+J+i/m+WFpee0oOadkOivpuaDhemhtScsMz0+J+eCueWHu+eci+W5v+WRiuS4i+i9veeahOasoeaVsCcsND0+J+eCueWHu+aZrumAmuS4i+i9veeahOasoeaVsCdcblx0XHRcdCAvLyAgICAgICAgLDU9PifnnJ/lrp7nnIvlrozlub/lkYrnmoTmrKHmlbAnLDY9PifmnKrmraPluLjnnIvlrozlub/lkYrnmoTmrKHmlbAnLDc9Piflub/lkYrliqDovb3lvILluLjmrKHmlbAnLFxuXHRcdFx0YXN5bmMgc2F2ZUFuYWx5c2lzSW5mbyhhbmFseXNpc190eXBlLHdhbGxwYXBlcklkPTApIHtcblx0XHRcdFx0Y29uc3QgciA9IGF3YWl0IHJlcXVlc3Qoe1xuXHRcdFx0XHRcdHVybDogYCR7Y29uZmlnLkFQSX1hcGkvdy9kYXRhL2FuYWx5c2lzL3NhdmVgLFxuXHRcdFx0XHRcdG1ldGhvZDonUE9TVCcsXG5cdFx0XHRcdFx0ZGF0YToge1xuXHRcdFx0XHRcdFx0b3BlbmlkOiB0aGlzLmdsb2JhbERhdGEub3BlbmlkLFxuXHRcdFx0XHRcdFx0cGxhdGZvcm06dGhpcy5nbG9iYWxEYXRhLnByb2plY3RJZCxcblx0XHRcdFx0XHRcdHR5cGU6YW5hbHlzaXNfdHlwZSxcblx0XHRcdFx0XHRcdHdhbGxwYXBlcl9pZDp3YWxscGFwZXJJZFxuXHRcdFx0XHRcdH0sXG5cdFx0XHRcdH0pO1xuXHRcdFx0XHRjb25zb2xlLmxvZyhyKSBcblx0XHRcdH0sXG5cdFx0XHRcblx0XHRcdC8v5aSE55CG55yL5bm/5ZGK5YiG6ZSA5Yqf6IO9XG5cdFx0XHRhc3luYyBkZWFsUHAoaWQsbmlja05hbWUsYXZhdGFyVXJsKSB7XG5cdFx0XHRcdGNvbnN0IHIgPSBhd2FpdCByZXF1ZXN0KHtcblx0XHRcdFx0XHR1cmw6IGAke2NvbmZpZy5BUEl9YXBpL3cvZGVhbFBwYCxcblx0XHRcdFx0XHRtZXRob2Q6ICdQT1NUJyxcblx0XHRcdFx0XHRkYXRhOiB7XG5cdFx0XHRcdFx0XHRpZDogaWQsXG5cdFx0XHRcdFx0XHRwbGF0Zm9ybTogdGhpcy5nbG9iYWxEYXRhLnByb2plY3RJZCxcblx0XHRcdFx0XHRcdG9wZW5pZDogdGhpcy5nbG9iYWxEYXRhLm9wZW5pZCxcblx0XHRcdFx0XHRcdG5pY2tuYW1lOiBuaWNrTmFtZSxcblx0XHRcdFx0XHRcdGF2YXRhcl91cmw6IGF2YXRhclVybCxcblx0XHRcdFx0XHR9XG5cdFx0XHRcdH0pO1xuXHRcdFx0XG5cdFx0XHR9LFxuXHRcdH0sXG5cdFx0Z2xvYmFsRGF0YTp7XG5cdFx0XHQvL+eOr+Wig+WMuuWIhuexu+Wei1xuXHRcdFx0Ly8gI2lmZGVmIE1QLVFRXG5cdFx0XHRwcm9qZWN0SWQ6J3FxJyxcblx0XHRcdC8vICNlbmRpZlxuXHRcdFx0Ly8gI2lmZGVmIE1QLVdFSVhJTlxuXHRcdFx0cHJvamVjdElkOid3eCcsXG5cdFx0XHQvLyAjZW5kaWZcblx0XHRcdC8vICNpZmRlZiBNUC1UT1VUSUFPXG5cdFx0XHRwcm9qZWN0SWQ6J2R5Jyxcblx0XHRcdC8vICNlbmRpZlxuXHRcdFx0Ly8gI2lmZGVmIE1QLUtVQUlTSE9VXG5cdFx0XHRwcm9qZWN0SWQ6J2tzJyxcblx0XHRcdC8vICNlbmRpZlxuXHRcdFx0Y2FuU2hvd0FkIDogZmFsc2UsLy/mmK/lkKbog73mmL7npLrlub/lkYrnu4Tku7Zcblx0XHRcdFxuXHRcdFx0XG5cdFx0XHRcblx0XHRcdHNoYXJlSW5mbzpudWxsLC8v5YiG5Lqr5L+h5oGvXG5cdFx0XHRhZEluZm86bnVsbCwvL+W5v+WRiuS/oeaBr1xuXHRcdFx0b3BlbmlkOicnLC8v55So5oi3b3BlbmlkXG5cdFx0XHRoYXNMb2dpbjpmYWxzZSwvL+aYr+WQpueZu+W9leS6hlxuXHRcdFx0XG5cdFx0XHRhZF9udW1iZXI6MCwvL+iusOW9leWPr+eci+W5v+WRiuasoeaVsFxuXHRcdFx0aWxsZWdhbF9hZF9udW1iZXI6MCwvL+iusOW9leW3sueci+W5v+WRiuasoeaVsFxuXHRcdFx0ZnJlZV9hZF9udW06MCwvL+WFjei0uei1oOmAgeeahOW5v+WRiuS4i+i9veasoeaVsFxuXHRcdFx0aWxsZnJlZV9hZF9udW06MCwvL+W3suS9v+eUqOWFjei0ueS4i+i9veasoeaVsFxuXHRcdFx0ZGVfYWRfbnVtYmVyOjAsLy/ljp/lp4vlj6/nnIvlub/lkYrmrKHmlbBcblx0XHRcdGFkUmVxdWVzdFJlczpmYWxzZSwvL+ivt+axguW9k+WJjeeUqOaIt+eci+W5v+WRiueahOWTjeW6lFxuXHRcdH1cclxuXHR9XHJcbjwvc2NyaXB0PlxyXG5cclxuPHN0eWxlPlxyXG5cdGltYWdlIHtcblx0XHRoZWlnaHQ6IGF1dG87XG5cdH1cblx0XG5cdC5sb2FkaW5nIHtcblx0XHRkaXNwbGF5OiBibG9jaztcblx0XHRwYWRkaW5nOiAyMHJweCAwO1xuXHRcdHRleHQtYWxpZ246IGNlbnRlcjtcblx0XHRjb2xvcjogIzk5OTtcblx0XHRmb250LXNpemU6IDI4cnB4O1xuXHR9XG5cdFxuXHQubG9hZGluZy1iZyB7XG5cdFx0cG9zaXRpb246IHJlbGF0aXZlO1xuXHR9XG5cdC5sb2FkaW5nLWJnIGltYWdlIHtcblx0XHRwb3NpdGlvbjogcmVsYXRpdmU7XG5cdFx0ei1pbmRleDogMTtcblx0fVxuXHQubG9hZGluZy1iZzpiZWZvcmUge1xuXHRcdGFuaW1hdGlvbjogbG9hZGluZ0FuaW1hdGlvbiBpbmZpbml0ZSAxcztcblx0XHRkaXNwbGF5OiBibG9jaztcblx0XHRjb250ZW50OiAnJztcblx0XHR3aWR0aDogNjBycHg7XG5cdFx0aGVpZ2h0OiA2MHJweDtcblx0XHRwb3NpdGlvbjogYWJzb2x1dGU7XG5cdFx0dG9wOiA1MCU7XG5cdFx0bGVmdDogNTAlO1xuXHRcdHotaW5kZXg6IDA7XG5cdFx0bWFyZ2luOiAtMzBycHggMCAwIC0zMHJweDtcblx0XHQvLyBiYWNrZ3JvdW5kOiB1cmwoJ2RhdGE6aW1hZ2UvcG5nO2Jhc2U2NCxpVkJPUncwS0dnb0FBQUFOU1VoRVVnQUFBRUFBQUFCQUNBWUFBQUNxYVhIZUFBQUFBWE5TUjBJQXJzNGM2UUFBQmJkSlJFRlVlRjd0bXY5UDIwWVV3TytkNHhDZ1VUcGdsZGFwbEcyMFNSeGpXQ05WbzZNU1c3WDlzUFhQM1ErVDFrbDBaV3E3S2l2RmprTlkxTEd5VVhXVTBnSkxZenUrbTY1S3F1RGE5QzY1RUNMaUg4bnorL0s1OTk2ZDN3SG9sRDl3eXVOSEF3Q0RERGpsQkFZbGNNb1RZTkFFQnlVd0tJRWVFekFNWTNSc2JNeFpXbHFxOThLVm5wZUFydXMzbTRGVFN2L0RHTmQ4My8rbldxMyt1N0d4VWVzMmxCTUZJQmdzcGZTWnFxcmJydXR1MmJidGRnUEdpUWJRa2hsVlZWVWZyNnlzYk1pRzBCY0FXb0orNGZ2K242VlM2YWtzRVAwRzRFM2NpcUtzUDNyMGFGMEdoSjREbUorZkg5N2QzUjJKeCtQREFERGllZDQ1alBIWjl3VW5DMExQQVlRRnlyWkdoTkE1UXNoRmhOQ1pLQmd5SUp4SUFNMkE4L204Nm5uZXA1VFN6eWlsT0F3RUFOaW1hVDUrWDhaRS9YNmlBYlNBU0xtdU8wY3BUWVlFUXV2MStyMjF0YldkZGlEMEJRQVdXRHFkVHNiajhTdGhFQWdoTDRlSGgrOFhDZ1ZQRkVKYkFIUmR2MkJaMXFhb3NVN2xqNElBQUgrWnBtbUsyaEFHTURjM2Q3WmVyeThBd0k3bmVldnRwcDZvbzAxNXd6QlljN3dhMFE5K05VMXpWMFMzTUFERE1IUkN5RlRMS1cyVFVscnExbEUxTEpoc05udEpVWlIwOERjQXFKaW11ZFkxQUt3ck80N3pGVUlvSGpSaVdkWVBJb1k3bGRVMDdTckcrRnlySGdEWU4wM3p0b2h1b1F6SVpESlRzVmhNRHpId3hMS3NWUkhEbmNxeVBvUVFtZzNxcWRWcXYxUXFsVDFlL1VJQWRGMDNFRUtUUWVWRFEwTjNDb1hDSzE2ak11UWEyYmlJRUJwcTFTZDZPQklDTURNek0wOHBIVzgxU0FqWnRtMzd2b3lnUkhVRSt4RjdId0NlbXFaWjROVWxCRURYOVcrRDlTOUtuTmN4SHJsc05udFJVWlNaVHZvQU40RHA2ZW1oUkNMeFRkQXhWVlh2UDN6NGNKdkhZZGt5K1h4K3duR2NMenBweU53QU1wbk1lQ3dXbXc4YW01aVkrTEZYOHp6MkpibS92MzhqNkpQbmViZkw1ZkkrRDNCdUFQbDhQdVU0enZXVEJJQ1Z2SzdyMzRlY0I3Z1BSTndBMkNjcUlZU2RBUTQ5eVdUeTU3dDM3Nzdtb1MxYkpxb3N1NUlCbXFiRk1jYXNDUjU2ZXJFRk5oM1FOTzBNeHBodGhZZWVnNE9EVzd3VFplNE1RQWhoWGRlL0MxbkZCNVpsUFpPOXVqejZjcm5jR0FCYzY2UXNSUUFnd3pCdUVFS0dXdzMyY2h1Y25aMjk3UHYrNVdQWkJaZ1JUZE0reHhoLzNHcVF6ZTZMeGVJRG5oV1RMWlBMNWI0RWdBOWE5V0tNbjYrdXJ0N2p0U1dhQVo4UVFuS3R5Z0dnWnBybUxWNkRzdVNpNnA5U3VsWXNGaXU4ZG9RQVJOVWNJV1RWdHUwbnZFWmx5RVdsZnl3V1cxNVpXWG5KYTBNSXdPTGlZbXhuWjJlUlVwcG9OVUFJZVdYYjloMWVvNTNLVFUxTkpaTEo1RUxRRDRUUWdXVlpTeUw2aFFBd3hibGNiaG9BTWtFang1a0ZVYXZ2KzM2NVZDcjkwVlVBTEF1MnQ3ZXZBd0NiM2I5OUFJQTRqdlBiK3ZyNmN4RUhSR1haU003My9XdkJNVG03V1U0a0VzdWlnMUhoREdBT0c0YnhUak5zQk9KWWx2V1RhRkFDOG1BWXh0ZkJyWmk5Mys3OVFGc0FtRDNETUJZSUlhbVFVbmhwMi9heVFGRGNvcHFtTFlSZG13SEFubW1hekNiaFZ0WVFiQmNBeTRMSTZTeEN5QVdBQjZJVDJpam4wK24wK1hnOFBrc3BWY0prUE0vN3ZWd3ViNGtHL3laejJubXArVTVVTTJyK3prNkpJeU1qbSsxK0xEVzYvU1ZLS2JzakRIMDZiYjRkQVdqMGd5dUVrUE5SRGxKS1BVcnAzNjdyYnZJT0sxbmdxVlJxa2hBeUdiTFZ2VFVsZXVnSjg3RmpBRXhwMUxBMGFKQmRwbUNNZDJxMTJ0UGd3SUoxZDhkeFVxekdNY1lmSGhVNDB5dHJGaWtGUUNNVGp1b0puVlRhTys5U1NoOFhpMFZiaGxKcEFCb1FSdXYxZWk1NFlTSERVYWFEVWxvbGhKUk8vTC9JTkM0dDJNWEZtS1RnWFl6eDF0N2VYb1YzME1GclYyb0dCSTFtczltUEFPQkN1eGxCS2QxVkZHV3JXcTF1VlNvVmh6Y29FYm11QW1nNndnYXFydXVPKzc0L29TaktlTlIremo2dEFlQUYrN2hTVlhYdk9NYnR4d0lndUNKc3hCNzgyK2pvNk90Q29WQVZXVDBac2owQklNTnhXVG9HQUdTUjdGYzlnd3pvMTVXVDVmY2dBMlNSN0ZjOWd3em8xNVdUNWZlcHo0RC9BYWJkaVY5Z3lHSHFBQUFBQUVsRlRrU3VRbUNDJykgbm8tcmVwZWF0IDEwMCUvMTAwJTtcblx0fVxuXHRcblx0LmxvYWRpbmctYmcud2hpdGU6YmVmb3JlIHtcblx0XHR3aWR0aDogMTAwcnB4O1xuXHRcdGhlaWdodDogMTAwcnB4O1xuXHRcdG1hcmdpbjogLTUwcnB4IDAgMCAtNTBycHg7XG5cdFx0Ly8gYmFja2dyb3VuZDogdXJsKCdkYXRhOmltYWdlL3BuZztiYXNlNjQsaVZCT1J3MEtHZ29BQUFBTlNVaEVVZ0FBQUVBQUFBQkFDQVlBQUFDcWFYSGVBQUFBQVhOU1IwSUFyczRjNlFBQUJIeEpSRUZVZUY3dG10bXJIRVVVeHIvUGZjVmRVSEdQQzdqN0lLNWdGSDFRLzF3ZmhFUklUSVRFb0E4Ullvd2hhcUlKTVZHemFSSVZQL213QmlaRjk5dzZQVFhkZlprK01Od0xVM09XWDUwNlZYMnFpVFVYcm5uOG1BQk1HYkRtQktZbHNPWUpNQlhCYVFsTVMyQmdBcEp1Qm5DWjVEOUR1REw0RXBEMDBWemdmd0M0Qk9CbkFMK1E5UDhybGJFQnlJTTlDZUFVZ09Nay8xb0ZpYkVEbU1YOEo0QWpKSCtvRFdHekFKakYvUnVBNzBtZXFBVmlzd0dZeFgySTVLRWFFTVlBNEVZQU53R1kvYjBYd08wRndWV0JNRGlBcGtEVDFtZ1FEd080WlFHTXBTR01Fc0FzWUVuWEFuZ013T01Bcm1vQmNZRGtrWUtNYVJ3eWFnQnpJRzREOENLQVd4dWlFSUE5SkgvdEFtRlRBSEJna2h6OHl5MFF6Z0RZUy9MdktJUk9BQ1E5U1BKWTFOaXk0emVBOENQSnI2TTJ3Z0FrdVVLL0NjQXA1eUxVS2ZXaWpzNHRCeGZIVjFwKy96bkozeU82dXdCNEZzQWpjMGFjQ2QrczZxamFza3M4QWVDcGh1OE9renk0TWdDcEttOEZjRjF1aE9USEVjUExqcFhrTEhBMnpNdDVranNqdWtNWklNa3o3d3pJNVNqSi9SSER5NDUxSFFMd1FvT2V6MGllSzlVZkJmQThnSWNhbE84aWViYlVhSTF4S1J2ZkJuQjlwaTkwT0lvQ2VBM0FYWm5CVXlUMzFnZ3Fxa05TWG8rczRnVEpMMHQxUlFHODM3RCtROFJMSFNzWko4bEg1ZWVXcVFQRkFDUTUxZDVyY013SEVEY3RlaGRKZHdONE5UY2NLY2dSQUU1OUw0RmNQaG1xbnlmSlQ1RHZOdmkwaytUNWtobUpBUEI1L0syUkFiRC9IemI0Vkh3Z2lnQnc5OVpuZ0Z3K0pYbXhoSGJ0TVF1VzVVb3l3SWNmRjhGY2V0OENadzVJY3EvQVcyRXUyMHM3eXBFTThQUDRCdzNHOXBGMDk3WjNrWFFuZ05lWFdaYkZBR3hFa2d1T0M4KzhETGtOUGduQW55dGtKYnRBQXZBU2dBY3lleWRKN3V0OSt2K2ZrRGNBM0pIWlBrMXlUNmsvMFF4NEZNQXptZkpMSkxlWEdxdzFic0g2UDBqeWNLbWRLSUMyTmJlZjVORlNvelhHU1dwTWZ3QzdTYnBEVkNSUkFOZWtxbnREcHYwc3lWMUZGaXNNa21UN2JzcmtmbHdndVNOaUlnUWcxWUV0QUo1dU1OSmJGaXlZL1c5SmZyZHFBTTRDbndoOU1KcVhmd0Y4UWZKMHhJSG8yTlNTODlhWHQ4bDlzK3owRHpWR3d4bVFzcUNwR1BvcjMvTnZpd1pWT2w2Uy9YMm5ZU3UyaWs3M0ExMEIrSGRlZzM0K3lPVU15ZDJsUVVYR1NiTE5wbXN6ZDRBOCs4N0NrSFFDa0xKZ1VYZldkL2srSVlZNnRHMmVTN28vdGIrdWJobnpGY25qb2NqVDRNNEFFb1MycldqbWkyOXdqM1Y5V0VyVjNoMWdOejdhWktuaXV4U0FCTUczTlo2aE5uRlIraW1CS0dwV3BzRGRlL1FuMytybTdZUU9QVTBPTGcwZ1FXaHJsdVkyZlluaWovdDJWelFzVW5WM1RmRWF2MmVEd0syM1NpK3lDb0NDbXRCbGVTNzZqVitYT1ZCRGFUVUFDWUxQQm41V3lDOHNhdmhxSFg1WHlMZFE0MzVGSmwxYStPTEN6dzQxeEx1S3E3eXZ2cXErT2xjMUEvSklKZDBId0NDNlpvUzNVUWZ1MStRdTF5Q1o2MWdwZ0preFNTNXU3aXE3amUyL2JmdTVaOWR2Z3ZtVzZWd2Y3ZlplQURSa1JuNjc1Q0VYU1hxTjl5cURBT2cxd2cyTVRRREdOQnREK0RKbHdCRFV4MlJ6eW9BeHpjWVF2a3daTUFUMU1kbGMrd3o0RDZWeWUxQWgyVW95QUFBQUFFbEZUa1N1UW1DQycpIG5vLXJlcGVhdCAxMDAlLzEwMCU7XG5cdH1cblx0XG5cdEBrZXlmcmFtZXMgbG9hZGluZ0FuaW1hdGlvbntcblx0XHRmcm9tIHtcblx0XHRcdHRyYW5zZm9ybTogcm90YXRlKDApO1xuXHRcdH1cblx0XHR0byB7XG5cdFx0XHR0cmFuc2Zvcm06IHJvdGF0ZSgzNjBkZWcpO1xuXHRcdH1cblx0fVxuXHRcblx0LmxhYmVsLXJlbCB7XG5cdFx0cG9zaXRpb246IHJlbGF0aXZlO1xuXHR9XG5cdC5sYWJlbC1naWYge1xuXHRcdHBvc2l0aW9uOiBhYnNvbHV0ZTtcblx0XHR6LWluZGV4OiA5O1xuXHRcdGJhY2tncm91bmQ6IHJnYmEoMCwgMCwgMCwgLjYpO1xuXHRcdGNvbG9yOiB3aGl0ZTtcblx0XHRmb250LXNpemU6IDI0cnB4O1xuXHRcdHJpZ2h0OiAwO1xuXHRcdGJvdHRvbTogMDtcblx0XHRmb250LXdlaWdodDogYm9sZDtcblx0XHRwYWRkaW5nOiAwIDE0cnB4O1xuXHRcdGJvcmRlci10b3AtbGVmdC1yYWRpdXM6IDEycnB4O1xuXHRcdGJvcmRlci1ib3R0b20tcmlnaHQtcmFkaXVzOiAxMnJweDtcblx0fVxyXG48L3N0eWxlPlxuIiwiaW1wb3J0IG1vZCBmcm9tIFwiLSEuLi8uLi8uLi9IQnVpbGRlclgvcGx1Z2lucy91bmlhcHAtY2xpL25vZGVfbW9kdWxlcy9taW5pLWNzcy1leHRyYWN0LXBsdWdpbi9kaXN0L2xvYWRlci5qcz8/cmVmLS02LW9uZU9mLTEtMCEuLi8uLi8uLi9IQnVpbGRlclgvcGx1Z2lucy91bmlhcHAtY2xpL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvY2pzLmpzPz9yZWYtLTYtb25lT2YtMS0xIS4uLy4uLy4uL0hCdWlsZGVyWC9wbHVnaW5zL3VuaWFwcC1jbGkvbm9kZV9tb2R1bGVzL0BkY2xvdWRpby92dWUtY2xpLXBsdWdpbi11bmkvcGFja2FnZXMvdnVlLWxvYWRlci9saWIvbG9hZGVycy9zdHlsZVBvc3RMb2FkZXIuanMhLi4vLi4vLi4vSEJ1aWxkZXJYL3BsdWdpbnMvdW5pYXBwLWNsaS9ub2RlX21vZHVsZXMvQGRjbG91ZGlvL3Z1ZS1jbGktcGx1Z2luLXVuaS9wYWNrYWdlcy93ZWJwYWNrLXByZXByb2Nlc3MtbG9hZGVyL2luZGV4LmpzPz9yZWYtLTYtb25lT2YtMS0yIS4uLy4uLy4uL0hCdWlsZGVyWC9wbHVnaW5zL3VuaWFwcC1jbGkvbm9kZV9tb2R1bGVzL3Bvc3Rjc3MtbG9hZGVyL3NyYy9pbmRleC5qcz8/cmVmLS02LW9uZU9mLTEtMyEuLi8uLi8uLi9IQnVpbGRlclgvcGx1Z2lucy91bmlhcHAtY2xpL25vZGVfbW9kdWxlcy9AZGNsb3VkaW8vdnVlLWNsaS1wbHVnaW4tdW5pL3BhY2thZ2VzL3Z1ZS1sb2FkZXIvbGliL2luZGV4LmpzPz92dWUtbG9hZGVyLW9wdGlvbnMhLi4vLi4vLi4vSEJ1aWxkZXJYL3BsdWdpbnMvdW5pYXBwLWNsaS9ub2RlX21vZHVsZXMvQGRjbG91ZGlvL3dlYnBhY2stdW5pLW1wLWxvYWRlci9saWIvc3R5bGUuanMhLi9BcHAudnVlP3Z1ZSZ0eXBlPXN0eWxlJmluZGV4PTAmbGFuZz1jc3MmXCI7IGV4cG9ydCBkZWZhdWx0IG1vZDsgZXhwb3J0ICogZnJvbSBcIi0hLi4vLi4vLi4vSEJ1aWxkZXJYL3BsdWdpbnMvdW5pYXBwLWNsaS9ub2RlX21vZHVsZXMvbWluaS1jc3MtZXh0cmFjdC1wbHVnaW4vZGlzdC9sb2FkZXIuanM/P3JlZi0tNi1vbmVPZi0xLTAhLi4vLi4vLi4vSEJ1aWxkZXJYL3BsdWdpbnMvdW5pYXBwLWNsaS9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L2Nqcy5qcz8/cmVmLS02LW9uZU9mLTEtMSEuLi8uLi8uLi9IQnVpbGRlclgvcGx1Z2lucy91bmlhcHAtY2xpL25vZGVfbW9kdWxlcy9AZGNsb3VkaW8vdnVlLWNsaS1wbHVnaW4tdW5pL3BhY2thZ2VzL3Z1ZS1sb2FkZXIvbGliL2xvYWRlcnMvc3R5bGVQb3N0TG9hZGVyLmpzIS4uLy4uLy4uL0hCdWlsZGVyWC9wbHVnaW5zL3VuaWFwcC1jbGkvbm9kZV9tb2R1bGVzL0BkY2xvdWRpby92dWUtY2xpLXBsdWdpbi11bmkvcGFja2FnZXMvd2VicGFjay1wcmVwcm9jZXNzLWxvYWRlci9pbmRleC5qcz8/cmVmLS02LW9uZU9mLTEtMiEuLi8uLi8uLi9IQnVpbGRlclgvcGx1Z2lucy91bmlhcHAtY2xpL25vZGVfbW9kdWxlcy9wb3N0Y3NzLWxvYWRlci9zcmMvaW5kZXguanM/P3JlZi0tNi1vbmVPZi0xLTMhLi4vLi4vLi4vSEJ1aWxkZXJYL3BsdWdpbnMvdW5pYXBwLWNsaS9ub2RlX21vZHVsZXMvQGRjbG91ZGlvL3Z1ZS1jbGktcGx1Z2luLXVuaS9wYWNrYWdlcy92dWUtbG9hZGVyL2xpYi9pbmRleC5qcz8/dnVlLWxvYWRlci1vcHRpb25zIS4uLy4uLy4uL0hCdWlsZGVyWC9wbHVnaW5zL3VuaWFwcC1jbGkvbm9kZV9tb2R1bGVzL0BkY2xvdWRpby93ZWJwYWNrLXVuaS1tcC1sb2FkZXIvbGliL3N0eWxlLmpzIS4vQXBwLnZ1ZT92dWUmdHlwZT1zdHlsZSZpbmRleD0wJmxhbmc9Y3NzJlwiIiwiLy8gZXh0cmFjdGVkIGJ5IG1pbmktY3NzLWV4dHJhY3QtcGx1Z2luXG4gICAgaWYobW9kdWxlLmhvdCkge1xuICAgICAgLy8gMTY1NDgzNzAwNTUwN1xuICAgICAgdmFyIGNzc1JlbG9hZCA9IHJlcXVpcmUoXCJEOi9IQnVpbGRlclgvcGx1Z2lucy91bmlhcHAtY2xpL25vZGVfbW9kdWxlcy9taW5pLWNzcy1leHRyYWN0LXBsdWdpbi9kaXN0L2htci9ob3RNb2R1bGVSZXBsYWNlbWVudC5qc1wiKShtb2R1bGUuaWQsIHtcImhtclwiOnRydWUsXCJwdWJsaWNQYXRoXCI6XCIuLi8uLi9cIixcImxvY2Fsc1wiOmZhbHNlfSk7XG4gICAgICBtb2R1bGUuaG90LmRpc3Bvc2UoY3NzUmVsb2FkKTtcbiAgICAgIG1vZHVsZS5ob3QuYWNjZXB0KHVuZGVmaW5lZCwgY3NzUmVsb2FkKTtcbiAgICB9XG4gICJdLCJzb3VyY2VSb290IjoiIn0=