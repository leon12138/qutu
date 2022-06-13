(global["webpackJsonp"] = global["webpackJsonp"] || []).push([["common/vendor"],[
/* 0 */,
/* 1 */
/*!*************************************************************!*\
  !*** ./node_modules/@dcloudio/uni-mp-toutiao/dist/index.js ***!
  \*************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/* WEBPACK VAR INJECTION */(function(global) {Object.defineProperty(exports, "__esModule", { value: true });exports.createApp = createApp;exports.createComponent = createComponent;exports.createPage = createPage;exports.createPlugin = createPlugin;exports.createSubpackageApp = createSubpackageApp;exports.default = void 0;var _uniI18n = __webpack_require__(/*! @dcloudio/uni-i18n */ 3);
var _vue = _interopRequireDefault(__webpack_require__(/*! vue */ 4));function _interopRequireDefault(obj) {return obj && obj.__esModule ? obj : { default: obj };}function ownKeys(object, enumerableOnly) {var keys = Object.keys(object);if (Object.getOwnPropertySymbols) {var symbols = Object.getOwnPropertySymbols(object);if (enumerableOnly) symbols = symbols.filter(function (sym) {return Object.getOwnPropertyDescriptor(object, sym).enumerable;});keys.push.apply(keys, symbols);}return keys;}function _objectSpread(target) {for (var i = 1; i < arguments.length; i++) {var source = arguments[i] != null ? arguments[i] : {};if (i % 2) {ownKeys(Object(source), true).forEach(function (key) {_defineProperty(target, key, source[key]);});} else if (Object.getOwnPropertyDescriptors) {Object.defineProperties(target, Object.getOwnPropertyDescriptors(source));} else {ownKeys(Object(source)).forEach(function (key) {Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key));});}}return target;}function _slicedToArray(arr, i) {return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _unsupportedIterableToArray(arr, i) || _nonIterableRest();}function _nonIterableRest() {throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.");}function _iterableToArrayLimit(arr, i) {if (typeof Symbol === "undefined" || !(Symbol.iterator in Object(arr))) return;var _arr = [];var _n = true;var _d = false;var _e = undefined;try {for (var _i = arr[Symbol.iterator](), _s; !(_n = (_s = _i.next()).done); _n = true) {_arr.push(_s.value);if (i && _arr.length === i) break;}} catch (err) {_d = true;_e = err;} finally {try {if (!_n && _i["return"] != null) _i["return"]();} finally {if (_d) throw _e;}}return _arr;}function _arrayWithHoles(arr) {if (Array.isArray(arr)) return arr;}function _defineProperty(obj, key, value) {if (key in obj) {Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true });} else {obj[key] = value;}return obj;}function _classCallCheck(instance, Constructor) {if (!(instance instanceof Constructor)) {throw new TypeError("Cannot call a class as a function");}}function _defineProperties(target, props) {for (var i = 0; i < props.length; i++) {var descriptor = props[i];descriptor.enumerable = descriptor.enumerable || false;descriptor.configurable = true;if ("value" in descriptor) descriptor.writable = true;Object.defineProperty(target, descriptor.key, descriptor);}}function _createClass(Constructor, protoProps, staticProps) {if (protoProps) _defineProperties(Constructor.prototype, protoProps);if (staticProps) _defineProperties(Constructor, staticProps);return Constructor;}function _toConsumableArray(arr) {return _arrayWithoutHoles(arr) || _iterableToArray(arr) || _unsupportedIterableToArray(arr) || _nonIterableSpread();}function _nonIterableSpread() {throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.");}function _unsupportedIterableToArray(o, minLen) {if (!o) return;if (typeof o === "string") return _arrayLikeToArray(o, minLen);var n = Object.prototype.toString.call(o).slice(8, -1);if (n === "Object" && o.constructor) n = o.constructor.name;if (n === "Map" || n === "Set") return Array.from(o);if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen);}function _iterableToArray(iter) {if (typeof Symbol !== "undefined" && Symbol.iterator in Object(iter)) return Array.from(iter);}function _arrayWithoutHoles(arr) {if (Array.isArray(arr)) return _arrayLikeToArray(arr);}function _arrayLikeToArray(arr, len) {if (len == null || len > arr.length) len = arr.length;for (var i = 0, arr2 = new Array(len); i < len; i++) {arr2[i] = arr[i];}return arr2;}

var realAtob;

var b64 = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/=';
var b64re = /^(?:[A-Za-z\d+/]{4})*?(?:[A-Za-z\d+/]{2}(?:==)?|[A-Za-z\d+/]{3}=?)?$/;

if (typeof atob !== 'function') {
  realAtob = function realAtob(str) {
    str = String(str).replace(/[\t\n\f\r ]+/g, '');
    if (!b64re.test(str)) {throw new Error("Failed to execute 'atob' on 'Window': The string to be decoded is not correctly encoded.");}

    // Adding the padding if missing, for semplicity
    str += '=='.slice(2 - (str.length & 3));
    var bitmap;var result = '';var r1;var r2;var i = 0;
    for (; i < str.length;) {
      bitmap = b64.indexOf(str.charAt(i++)) << 18 | b64.indexOf(str.charAt(i++)) << 12 |
      (r1 = b64.indexOf(str.charAt(i++))) << 6 | (r2 = b64.indexOf(str.charAt(i++)));

      result += r1 === 64 ? String.fromCharCode(bitmap >> 16 & 255) :
      r2 === 64 ? String.fromCharCode(bitmap >> 16 & 255, bitmap >> 8 & 255) :
      String.fromCharCode(bitmap >> 16 & 255, bitmap >> 8 & 255, bitmap & 255);
    }
    return result;
  };
} else {
  // 注意atob只能在全局对象上调用，例如：`const Base64 = {atob};Base64.atob('xxxx')`是错误的用法
  realAtob = atob;
}

function b64DecodeUnicode(str) {
  return decodeURIComponent(realAtob(str).split('').map(function (c) {
    return '%' + ('00' + c.charCodeAt(0).toString(16)).slice(-2);
  }).join(''));
}

function getCurrentUserInfo() {
  var token = tt.getStorageSync('uni_id_token') || '';
  var tokenArr = token.split('.');
  if (!token || tokenArr.length !== 3) {
    return {
      uid: null,
      role: [],
      permission: [],
      tokenExpired: 0 };

  }
  var userInfo;
  try {
    userInfo = JSON.parse(b64DecodeUnicode(tokenArr[1]));
  } catch (error) {
    throw new Error('获取当前用户信息出错，详细错误信息为：' + error.message);
  }
  userInfo.tokenExpired = userInfo.exp * 1000;
  delete userInfo.exp;
  delete userInfo.iat;
  return userInfo;
}

function uniIdMixin(Vue) {
  Vue.prototype.uniIDHasRole = function (roleId) {var _getCurrentUserInfo =


    getCurrentUserInfo(),role = _getCurrentUserInfo.role;
    return role.indexOf(roleId) > -1;
  };
  Vue.prototype.uniIDHasPermission = function (permissionId) {var _getCurrentUserInfo2 =


    getCurrentUserInfo(),permission = _getCurrentUserInfo2.permission;
    return this.uniIDHasRole('admin') || permission.indexOf(permissionId) > -1;
  };
  Vue.prototype.uniIDTokenValid = function () {var _getCurrentUserInfo3 =


    getCurrentUserInfo(),tokenExpired = _getCurrentUserInfo3.tokenExpired;
    return tokenExpired > Date.now();
  };
}

var _toString = Object.prototype.toString;
var hasOwnProperty = Object.prototype.hasOwnProperty;

function isFn(fn) {
  return typeof fn === 'function';
}

function isStr(str) {
  return typeof str === 'string';
}

function isPlainObject(obj) {
  return _toString.call(obj) === '[object Object]';
}

function hasOwn(obj, key) {
  return hasOwnProperty.call(obj, key);
}

function noop() {}

/**
                    * Create a cached version of a pure function.
                    */
function cached(fn) {
  var cache = Object.create(null);
  return function cachedFn(str) {
    var hit = cache[str];
    return hit || (cache[str] = fn(str));
  };
}

/**
   * Camelize a hyphen-delimited string.
   */
var camelizeRE = /-(\w)/g;
var camelize = cached(function (str) {
  return str.replace(camelizeRE, function (_, c) {return c ? c.toUpperCase() : '';});
});

var HOOKS = [
'invoke',
'success',
'fail',
'complete',
'returnValue'];


var globalInterceptors = {};
var scopedInterceptors = {};

function mergeHook(parentVal, childVal) {
  var res = childVal ?
  parentVal ?
  parentVal.concat(childVal) :
  Array.isArray(childVal) ?
  childVal : [childVal] :
  parentVal;
  return res ?
  dedupeHooks(res) :
  res;
}

function dedupeHooks(hooks) {
  var res = [];
  for (var i = 0; i < hooks.length; i++) {
    if (res.indexOf(hooks[i]) === -1) {
      res.push(hooks[i]);
    }
  }
  return res;
}

function removeHook(hooks, hook) {
  var index = hooks.indexOf(hook);
  if (index !== -1) {
    hooks.splice(index, 1);
  }
}

function mergeInterceptorHook(interceptor, option) {
  Object.keys(option).forEach(function (hook) {
    if (HOOKS.indexOf(hook) !== -1 && isFn(option[hook])) {
      interceptor[hook] = mergeHook(interceptor[hook], option[hook]);
    }
  });
}

function removeInterceptorHook(interceptor, option) {
  if (!interceptor || !option) {
    return;
  }
  Object.keys(option).forEach(function (hook) {
    if (HOOKS.indexOf(hook) !== -1 && isFn(option[hook])) {
      removeHook(interceptor[hook], option[hook]);
    }
  });
}

function addInterceptor(method, option) {
  if (typeof method === 'string' && isPlainObject(option)) {
    mergeInterceptorHook(scopedInterceptors[method] || (scopedInterceptors[method] = {}), option);
  } else if (isPlainObject(method)) {
    mergeInterceptorHook(globalInterceptors, method);
  }
}

function removeInterceptor(method, option) {
  if (typeof method === 'string') {
    if (isPlainObject(option)) {
      removeInterceptorHook(scopedInterceptors[method], option);
    } else {
      delete scopedInterceptors[method];
    }
  } else if (isPlainObject(method)) {
    removeInterceptorHook(globalInterceptors, method);
  }
}

function wrapperHook(hook) {
  return function (data) {
    return hook(data) || data;
  };
}

function isPromise(obj) {
  return !!obj && (typeof obj === 'object' || typeof obj === 'function') && typeof obj.then === 'function';
}

function queue(hooks, data) {
  var promise = false;
  for (var i = 0; i < hooks.length; i++) {
    var hook = hooks[i];
    if (promise) {
      promise = Promise.resolve(wrapperHook(hook));
    } else {
      var res = hook(data);
      if (isPromise(res)) {
        promise = Promise.resolve(res);
      }
      if (res === false) {
        return {
          then: function then() {} };

      }
    }
  }
  return promise || {
    then: function then(callback) {
      return callback(data);
    } };

}

function wrapperOptions(interceptor) {var options = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};
  ['success', 'fail', 'complete'].forEach(function (name) {
    if (Array.isArray(interceptor[name])) {
      var oldCallback = options[name];
      options[name] = function callbackInterceptor(res) {
        queue(interceptor[name], res).then(function (res) {
          /* eslint-disable no-mixed-operators */
          return isFn(oldCallback) && oldCallback(res) || res;
        });
      };
    }
  });
  return options;
}

function wrapperReturnValue(method, returnValue) {
  var returnValueHooks = [];
  if (Array.isArray(globalInterceptors.returnValue)) {
    returnValueHooks.push.apply(returnValueHooks, _toConsumableArray(globalInterceptors.returnValue));
  }
  var interceptor = scopedInterceptors[method];
  if (interceptor && Array.isArray(interceptor.returnValue)) {
    returnValueHooks.push.apply(returnValueHooks, _toConsumableArray(interceptor.returnValue));
  }
  returnValueHooks.forEach(function (hook) {
    returnValue = hook(returnValue) || returnValue;
  });
  return returnValue;
}

function getApiInterceptorHooks(method) {
  var interceptor = Object.create(null);
  Object.keys(globalInterceptors).forEach(function (hook) {
    if (hook !== 'returnValue') {
      interceptor[hook] = globalInterceptors[hook].slice();
    }
  });
  var scopedInterceptor = scopedInterceptors[method];
  if (scopedInterceptor) {
    Object.keys(scopedInterceptor).forEach(function (hook) {
      if (hook !== 'returnValue') {
        interceptor[hook] = (interceptor[hook] || []).concat(scopedInterceptor[hook]);
      }
    });
  }
  return interceptor;
}

function invokeApi(method, api, options) {for (var _len = arguments.length, params = new Array(_len > 3 ? _len - 3 : 0), _key = 3; _key < _len; _key++) {params[_key - 3] = arguments[_key];}
  var interceptor = getApiInterceptorHooks(method);
  if (interceptor && Object.keys(interceptor).length) {
    if (Array.isArray(interceptor.invoke)) {
      var res = queue(interceptor.invoke, options);
      return res.then(function (options) {
        return api.apply(void 0, [wrapperOptions(interceptor, options)].concat(params));
      });
    } else {
      return api.apply(void 0, [wrapperOptions(interceptor, options)].concat(params));
    }
  }
  return api.apply(void 0, [options].concat(params));
}

var promiseInterceptor = {
  returnValue: function returnValue(res) {
    if (!isPromise(res)) {
      return res;
    }
    return new Promise(function (resolve, reject) {
      res.then(function (res) {
        if (res[0]) {
          reject(res[0]);
        } else {
          resolve(res[1]);
        }
      });
    });
  } };


var SYNC_API_RE =
/^\$|Window$|WindowStyle$|sendHostEvent|sendNativeEvent|restoreGlobal|requireGlobal|getCurrentSubNVue|getMenuButtonBoundingClientRect|^report|interceptors|Interceptor$|getSubNVueById|requireNativePlugin|upx2px|hideKeyboard|canIUse|^create|Sync$|Manager$|base64ToArrayBuffer|arrayBufferToBase64|getLocale|setLocale|invokePushCallback|getWindowInfo|getDeviceInfo|getAppBaseInfo/;

var CONTEXT_API_RE = /^create|Manager$/;

// Context例外情况
var CONTEXT_API_RE_EXC = ['createBLEConnection'];

// 同步例外情况
var ASYNC_API = ['createBLEConnection'];

var CALLBACK_API_RE = /^on|^off/;

function isContextApi(name) {
  return CONTEXT_API_RE.test(name) && CONTEXT_API_RE_EXC.indexOf(name) === -1;
}
function isSyncApi(name) {
  return SYNC_API_RE.test(name) && ASYNC_API.indexOf(name) === -1;
}

function isCallbackApi(name) {
  return CALLBACK_API_RE.test(name) && name !== 'onPush';
}

function handlePromise(promise) {
  return promise.then(function (data) {
    return [null, data];
  }).
  catch(function (err) {return [err];});
}

function shouldPromise(name) {
  if (
  isContextApi(name) ||
  isSyncApi(name) ||
  isCallbackApi(name))
  {
    return false;
  }
  return true;
}

/* eslint-disable no-extend-native */
if (!Promise.prototype.finally) {
  Promise.prototype.finally = function (callback) {
    var promise = this.constructor;
    return this.then(
    function (value) {return promise.resolve(callback()).then(function () {return value;});},
    function (reason) {return promise.resolve(callback()).then(function () {
        throw reason;
      });});

  };
}

function promisify(name, api) {
  if (!shouldPromise(name)) {
    return api;
  }
  return function promiseApi() {var options = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};for (var _len2 = arguments.length, params = new Array(_len2 > 1 ? _len2 - 1 : 0), _key2 = 1; _key2 < _len2; _key2++) {params[_key2 - 1] = arguments[_key2];}
    if (isFn(options.success) || isFn(options.fail) || isFn(options.complete)) {
      return wrapperReturnValue(name, invokeApi.apply(void 0, [name, api, options].concat(params)));
    }
    return wrapperReturnValue(name, handlePromise(new Promise(function (resolve, reject) {
      invokeApi.apply(void 0, [name, api, Object.assign({}, options, {
        success: resolve,
        fail: reject })].concat(
      params));
    })));
  };
}

var EPS = 1e-4;
var BASE_DEVICE_WIDTH = 750;
var isIOS = false;
var deviceWidth = 0;
var deviceDPR = 0;

function checkDeviceWidth() {var _tt$getSystemInfoSync =




  tt.getSystemInfoSync(),platform = _tt$getSystemInfoSync.platform,pixelRatio = _tt$getSystemInfoSync.pixelRatio,windowWidth = _tt$getSystemInfoSync.windowWidth; // uni=>tt runtime 编译目标是 uni 对象，内部不允许直接使用 uni

  deviceWidth = windowWidth;
  deviceDPR = pixelRatio;
  isIOS = platform === 'ios';
}

function upx2px(number, newDeviceWidth) {
  if (deviceWidth === 0) {
    checkDeviceWidth();
  }

  number = Number(number);
  if (number === 0) {
    return 0;
  }
  var result = number / BASE_DEVICE_WIDTH * (newDeviceWidth || deviceWidth);
  if (result < 0) {
    result = -result;
  }
  result = Math.floor(result + EPS);
  if (result === 0) {
    if (deviceDPR === 1 || !isIOS) {
      result = 1;
    } else {
      result = 0.5;
    }
  }
  return number < 0 ? -result : result;
}

var LOCALE_ZH_HANS = 'zh-Hans';
var LOCALE_ZH_HANT = 'zh-Hant';
var LOCALE_EN = 'en';
var LOCALE_FR = 'fr';
var LOCALE_ES = 'es';

var messages = {};

var locale;

{
  locale = normalizeLocale(tt.getSystemInfoSync().language) || LOCALE_EN;
}

function initI18nMessages() {
  if (!isEnableLocale()) {
    return;
  }
  var localeKeys = Object.keys(__uniConfig.locales);
  if (localeKeys.length) {
    localeKeys.forEach(function (locale) {
      var curMessages = messages[locale];
      var userMessages = __uniConfig.locales[locale];
      if (curMessages) {
        Object.assign(curMessages, userMessages);
      } else {
        messages[locale] = userMessages;
      }
    });
  }
}

initI18nMessages();

var i18n = (0, _uniI18n.initVueI18n)(
locale,
{});

var t = i18n.t;
var i18nMixin = i18n.mixin = {
  beforeCreate: function beforeCreate() {var _this = this;
    var unwatch = i18n.i18n.watchLocale(function () {
      _this.$forceUpdate();
    });
    this.$once('hook:beforeDestroy', function () {
      unwatch();
    });
  },
  methods: {
    $$t: function $$t(key, values) {
      return t(key, values);
    } } };


var setLocale = i18n.setLocale;
var getLocale = i18n.getLocale;

function initAppLocale(Vue, appVm, locale) {
  var state = Vue.observable({
    locale: locale || i18n.getLocale() });

  var localeWatchers = [];
  appVm.$watchLocale = function (fn) {
    localeWatchers.push(fn);
  };
  Object.defineProperty(appVm, '$locale', {
    get: function get() {
      return state.locale;
    },
    set: function set(v) {
      state.locale = v;
      localeWatchers.forEach(function (watch) {return watch(v);});
    } });

}

function isEnableLocale() {
  return typeof __uniConfig !== 'undefined' && __uniConfig.locales && !!Object.keys(__uniConfig.locales).length;
}

function include(str, parts) {
  return !!parts.find(function (part) {return str.indexOf(part) !== -1;});
}

function startsWith(str, parts) {
  return parts.find(function (part) {return str.indexOf(part) === 0;});
}

function normalizeLocale(locale, messages) {
  if (!locale) {
    return;
  }
  locale = locale.trim().replace(/_/g, '-');
  if (messages && messages[locale]) {
    return locale;
  }
  locale = locale.toLowerCase();
  if (locale === 'chinese') {
    // 支付宝
    return LOCALE_ZH_HANS;
  }
  if (locale.indexOf('zh') === 0) {
    if (locale.indexOf('-hans') > -1) {
      return LOCALE_ZH_HANS;
    }
    if (locale.indexOf('-hant') > -1) {
      return LOCALE_ZH_HANT;
    }
    if (include(locale, ['-tw', '-hk', '-mo', '-cht'])) {
      return LOCALE_ZH_HANT;
    }
    return LOCALE_ZH_HANS;
  }
  var lang = startsWith(locale, [LOCALE_EN, LOCALE_FR, LOCALE_ES]);
  if (lang) {
    return lang;
  }
}
// export function initI18n() {
//   const localeKeys = Object.keys(__uniConfig.locales || {})
//   if (localeKeys.length) {
//     localeKeys.forEach((locale) =>
//       i18n.add(locale, __uniConfig.locales[locale])
//     )
//   }
// }

function getLocale$1() {
  // 优先使用 $locale
  var app = getApp({
    allowDefault: true });

  if (app && app.$vm) {
    return app.$vm.$locale;
  }
  return normalizeLocale(tt.getSystemInfoSync().language) || LOCALE_EN;
}

function setLocale$1(locale) {
  var app = getApp();
  if (!app) {
    return false;
  }
  var oldLocale = app.$vm.$locale;
  if (oldLocale !== locale) {
    app.$vm.$locale = locale;
    onLocaleChangeCallbacks.forEach(function (fn) {return fn({
        locale: locale });});

    return true;
  }
  return false;
}

var onLocaleChangeCallbacks = [];
function onLocaleChange(fn) {
  if (onLocaleChangeCallbacks.indexOf(fn) === -1) {
    onLocaleChangeCallbacks.push(fn);
  }
}

if (typeof global !== 'undefined') {
  global.getLocale = getLocale$1;
}

var interceptors = {
  promiseInterceptor: promiseInterceptor };


var baseApi = /*#__PURE__*/Object.freeze({
  __proto__: null,
  upx2px: upx2px,
  getLocale: getLocale$1,
  setLocale: setLocale$1,
  onLocaleChange: onLocaleChange,
  addInterceptor: addInterceptor,
  removeInterceptor: removeInterceptor,
  interceptors: interceptors });var


EventChannel = /*#__PURE__*/function () {
  function EventChannel(id, events) {var _this2 = this;_classCallCheck(this, EventChannel);
    this.id = id;
    this.listener = {};
    this.emitCache = {};
    if (events) {
      Object.keys(events).forEach(function (name) {
        _this2.on(name, events[name]);
      });
    }
  }_createClass(EventChannel, [{ key: "emit", value: function emit(

    eventName) {for (var _len3 = arguments.length, args = new Array(_len3 > 1 ? _len3 - 1 : 0), _key3 = 1; _key3 < _len3; _key3++) {args[_key3 - 1] = arguments[_key3];}
      var fns = this.listener[eventName];
      if (!fns) {
        return (this.emitCache[eventName] || (this.emitCache[eventName] = [])).push(args);
      }
      fns.forEach(function (opt) {
        opt.fn.apply(opt.fn, args);
      });
      this.listener[eventName] = fns.filter(function (opt) {return opt.type !== 'once';});
    } }, { key: "on", value: function on(

    eventName, fn) {
      this._addListener(eventName, 'on', fn);
      this._clearCache(eventName);
    } }, { key: "once", value: function once(

    eventName, fn) {
      this._addListener(eventName, 'once', fn);
      this._clearCache(eventName);
    } }, { key: "off", value: function off(

    eventName, fn) {
      var fns = this.listener[eventName];
      if (!fns) {
        return;
      }
      if (fn) {
        for (var i = 0; i < fns.length;) {
          if (fns[i].fn === fn) {
            fns.splice(i, 1);
            i--;
          }
          i++;
        }
      } else {
        delete this.listener[eventName];
      }
    } }, { key: "_clearCache", value: function _clearCache(

    eventName) {
      var cacheArgs = this.emitCache[eventName];
      if (cacheArgs) {
        for (; cacheArgs.length > 0;) {
          this.emit.apply(this, [eventName].concat(cacheArgs.shift()));
        }
      }
    } }, { key: "_addListener", value: function _addListener(

    eventName, type, fn) {
      (this.listener[eventName] || (this.listener[eventName] = [])).push({
        fn: fn,
        type: type });

    } }]);return EventChannel;}();


var eventChannels = {};

var eventChannelStack = [];

var id = 0;

function initEventChannel(events) {var cache = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : true;
  id++;
  var eventChannel = new EventChannel(id, events);
  if (cache) {
    eventChannels[id] = eventChannel;
    eventChannelStack.push(eventChannel);
  }
  return eventChannel;
}

function getEventChannel(id) {
  if (id) {
    var eventChannel = eventChannels[id];
    delete eventChannels[id];
    return eventChannel;
  }
  return eventChannelStack.shift();
}

var navigateTo = {
  args: function args(fromArgs, toArgs) {
    var id = initEventChannel(fromArgs.events).id;
    if (fromArgs.url) {
      fromArgs.url = fromArgs.url + (fromArgs.url.indexOf('?') === -1 ? '?' : '&') + '__id__=' + id;
    }
  },
  returnValue: function returnValue(fromRes, toRes) {
    fromRes.eventChannel = getEventChannel();
  } };


function findExistsPageIndex(url) {
  var pages = getCurrentPages();
  var len = pages.length;
  while (len--) {
    var page = pages[len];
    if (page.$page && page.$page.fullPath === url) {
      return len;
    }
  }
  return -1;
}

var redirectTo = {
  name: function name(fromArgs) {
    if (fromArgs.exists === 'back' && fromArgs.delta) {
      return 'navigateBack';
    }
    return 'redirectTo';
  },
  args: function args(fromArgs) {
    if (fromArgs.exists === 'back' && fromArgs.url) {
      var existsPageIndex = findExistsPageIndex(fromArgs.url);
      if (existsPageIndex !== -1) {
        var delta = getCurrentPages().length - 1 - existsPageIndex;
        if (delta > 0) {
          fromArgs.delta = delta;
        }
      }
    }
  } };


var previewImage = {
  args: function args(fromArgs) {
    var currentIndex = parseInt(fromArgs.current);
    if (isNaN(currentIndex)) {
      return;
    }
    var urls = fromArgs.urls;
    if (!Array.isArray(urls)) {
      return;
    }
    var len = urls.length;
    if (!len) {
      return;
    }
    if (currentIndex < 0) {
      currentIndex = 0;
    } else if (currentIndex >= len) {
      currentIndex = len - 1;
    }
    if (currentIndex > 0) {
      fromArgs.current = urls[currentIndex];
      fromArgs.urls = urls.filter(
      function (item, index) {return index < currentIndex ? item !== urls[currentIndex] : true;});

    } else {
      fromArgs.current = urls[0];
    }
    return {
      indicator: false,
      loop: false };

  } };


var UUID_KEY = '__DC_STAT_UUID';
var deviceId;
function useDeviceId(result) {
  deviceId = deviceId || tt.getStorageSync(UUID_KEY);
  if (!deviceId) {
    deviceId = Date.now() + '' + Math.floor(Math.random() * 1e7);
    tt.setStorage({
      key: UUID_KEY,
      data: deviceId });

  }
  result.deviceId = deviceId;
}

function addSafeAreaInsets(result) {
  if (result.safeArea) {
    var safeArea = result.safeArea;
    result.safeAreaInsets = {
      top: safeArea.top,
      left: safeArea.left,
      right: result.windowWidth - safeArea.right,
      bottom: result.screenHeight - safeArea.bottom };

  }
}

function populateParameters(result) {var _result$brand =





  result.brand,brand = _result$brand === void 0 ? '' : _result$brand,_result$model = result.model,model = _result$model === void 0 ? '' : _result$model,_result$system = result.system,system = _result$system === void 0 ? '' : _result$system,_result$language = result.language,language = _result$language === void 0 ? '' : _result$language,theme = result.theme,version = result.version,platform = result.platform,fontSizeSetting = result.fontSizeSetting,SDKVersion = result.SDKVersion,pixelRatio = result.pixelRatio,deviceOrientation = result.deviceOrientation;
  // const isQuickApp = "mp-toutiao".indexOf('quickapp-webview') !== -1

  // osName osVersion
  var osName = '';
  var osVersion = '';
  {
    osName = system.split(' ')[0] || '';
    osVersion = system.split(' ')[1] || '';
  }
  var hostVersion = version;

  // deviceType
  var deviceType = getGetDeviceType(result, model);

  // deviceModel
  var deviceBrand = getDeviceBrand(brand);

  // hostName
  var _hostName = getHostName(result);

  // deviceOrientation
  var _deviceOrientation = deviceOrientation; // 仅 微信 百度 支持

  // devicePixelRatio
  var _devicePixelRatio = pixelRatio;

  // SDKVersion
  var _SDKVersion = SDKVersion;

  // hostLanguage
  var hostLanguage = language.replace(/_/g, '-');

  // wx.getAccountInfoSync

  var parameters = {
    appId: "",
    appName: "仙图壁纸",
    appVersion: "1.0.0",
    appVersionCode: "100",
    appLanguage: getAppLanguage(hostLanguage),
    uniCompileVersion: "3.4.14",
    uniRuntimeVersion: "3.4.14",
    uniPlatform: undefined || "mp-toutiao",
    deviceBrand: deviceBrand,
    deviceModel: model,
    deviceType: deviceType,
    devicePixelRatio: _devicePixelRatio,
    deviceOrientation: _deviceOrientation,
    osName: osName.toLocaleLowerCase(),
    osVersion: osVersion,
    hostTheme: theme,
    hostVersion: hostVersion,
    hostLanguage: hostLanguage,
    hostName: _hostName,
    hostSDKVersion: _SDKVersion,
    hostFontSizeSetting: fontSizeSetting,
    windowTop: 0,
    windowBottom: 0,
    // TODO
    osLanguage: undefined,
    osTheme: undefined,
    ua: undefined,
    hostPackageName: undefined,
    browserName: undefined,
    browserVersion: undefined };


  Object.assign(result, parameters);
}

function getGetDeviceType(result, model) {
  var deviceType = result.deviceType || 'phone';
  {
    var deviceTypeMaps = {
      ipad: 'pad',
      windows: 'pc',
      mac: 'pc' };

    var deviceTypeMapsKeys = Object.keys(deviceTypeMaps);
    var _model = model.toLocaleLowerCase();
    for (var index = 0; index < deviceTypeMapsKeys.length; index++) {
      var _m = deviceTypeMapsKeys[index];
      if (_model.indexOf(_m) !== -1) {
        deviceType = deviceTypeMaps[_m];
        break;
      }
    }
  }
  return deviceType;
}

function getDeviceBrand(brand) {
  var deviceBrand = brand;
  if (deviceBrand) {
    deviceBrand = brand.toLocaleLowerCase();
  }
  return deviceBrand;
}

function getAppLanguage(defaultLanguage) {
  return getLocale$1 ?
  getLocale$1() :
  defaultLanguage;
}

function getHostName(result) {
  var _platform = "mp-toutiao".split('-')[1];
  var _hostName = result.hostName || _platform; // mp-jd
  {_hostName = result.appName;}

  return _hostName;
}

var getSystemInfo = {
  returnValue: function returnValue(result) {
    useDeviceId(result);
    addSafeAreaInsets(result);
    populateParameters(result);
  } };


var oName = 'getUserInfo';
var nName = 'getUserProfile';

var getUserProfile = {
  name: tt.canIUse(nName) ? nName : oName };


// 不支持的 API 列表
var todos = [
'preloadPage',
'unPreloadPage',
'loadSubPackage'
// 'createCameraContext',
// 'createLivePlayerContext',
// 'getSavedFileInfo',
// 'createMapContext',
// 'onMemoryWarning',
// 'onGyroscopeChange',
// 'startGyroscope',
// 'stopGyroscope',
// 'setScreenBrightness',
// 'getScreenBrightness',
// 'addPhoneContact',
// 'openBluetoothAdapter',
// 'startBluetoothDevicesDiscovery',
// 'onBluetoothDeviceFound',
// 'stopBluetoothDevicesDiscovery',
// 'onBluetoothAdapterStateChange',
// 'getConnectedBluetoothDevices',
// 'getBluetoothDevices',
// 'getBluetoothAdapterState',
// 'closeBluetoothAdapter',
// 'writeBLECharacteristicValue',
// 'readBLECharacteristicValue',
// 'onBLEConnectionStateChange',
// 'onBLECharacteristicValueChange',
// 'notifyBLECharacteristicValueChange',
// 'getBLEDeviceServices',
// 'getBLEDeviceCharacteristics',
// 'createBLEConnection',
// 'closeBLEConnection',
// 'onBeaconServiceChange',
// 'onBeaconUpdate',
// 'getBeacons',
// 'startBeaconDiscovery',
// 'stopBeaconDiscovery',
// 'showNavigationBarLoading',
// 'hideNavigationBarLoading',
// 'setTabBarItem',
// 'setTabBarStyle',
// 'hideTabBar',
// 'showTabBar',
// 'setTabBarBadge',
// 'removeTabBarBadge',
// 'showTabBarRedDot',
// 'hideTabBarRedDot',
// 'setBackgroundColor',
// 'setBackgroundTextStyle',
// 'chooseInvoiceTitle',
// 'addTemplate',
// 'deleteTemplate',
// 'getTemplateLibraryById',
// 'getTemplateLibraryList',
// 'getTemplateList',
// 'sendTemplateMessage',
// 'setEnableDebug',
// 'onWindowResize',
// 'offWindowResize',
// 'createOffscreenCanvas',
// 'vibrate'
];

// 存在兼容性的 API 列表
// 头条小程序自1.35.0+支持canIUses
var canIUses = [
  // 'createIntersectionObserver',
  // 'getSavedFileList',
  // 'removeSavedFile',
  // 'hideKeyboard',
  // 'getImageInfo',
  // 'createVideoContext',
  // 'onSocketOpen',
  // 'onSocketError',
  // 'sendSocketMessage',
  // 'onSocketMessage',
  // 'closeSocket',
  // 'onSocketClose',
  // 'getExtConfig',
  // 'getExtConfigSync',
  // 'navigateToMiniProgram',
  // 'navigateBackMiniProgram',
  // 'compressImage',
  // 'chooseLocation',
  // 'openDocument',
  // 'onUserCaptureScreen',
  // 'getBackgroundAudioManager',
  // 'setNavigationBarColor',
];

// 需要做转换的 API 列表
var protocols = {
  chooseImage: {
    args: {
      sizeType: false } },


  navigateTo: navigateTo,
  redirectTo: redirectTo,
  previewImage: previewImage,
  getSystemInfo: getSystemInfo,
  getSystemInfoSync: getSystemInfo,
  getUserProfile: getUserProfile,
  connectSocket: {
    args: {
      method: false } },


  chooseVideo: {
    args: {
      camera: false } },


  scanCode: {
    args: {
      onlyFromCamera: false,
      scanType: false } },


  startAccelerometer: {
    args: {
      interval: false } },


  showToast: {
    args: {
      image: false,
      mask: false } },


  showLoading: {
    args: {
      mask: false } },


  showModal: {
    args: {
      cancelColor: false,
      confirmColor: false } },


  showActionSheet: {
    args: {
      itemColor: false } },


  login: {
    args: {
      scopes: false,
      timeout: false } },


  getUserInfo: {
    args: {
      lang: false,
      timeout: false } },


  requestPayment: {
    name: tt.pay ? 'pay' : 'requestPayment',
    args: {
      orderInfo: tt.pay ? 'orderInfo' : 'data' } },


  getFileInfo: {
    args: {
      digestAlgorithm: false } } };




var CALLBACKS = ['success', 'fail', 'cancel', 'complete'];

function processCallback(methodName, method, returnValue) {
  return function (res) {
    return method(processReturnValue(methodName, res, returnValue));
  };
}

function processArgs(methodName, fromArgs) {var argsOption = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : {};var returnValue = arguments.length > 3 && arguments[3] !== undefined ? arguments[3] : {};var keepFromArgs = arguments.length > 4 && arguments[4] !== undefined ? arguments[4] : false;
  if (isPlainObject(fromArgs)) {// 一般 api 的参数解析
    var toArgs = keepFromArgs === true ? fromArgs : {}; // returnValue 为 false 时，说明是格式化返回值，直接在返回值对象上修改赋值
    if (isFn(argsOption)) {
      argsOption = argsOption(fromArgs, toArgs) || {};
    }
    for (var key in fromArgs) {
      if (hasOwn(argsOption, key)) {
        var keyOption = argsOption[key];
        if (isFn(keyOption)) {
          keyOption = keyOption(fromArgs[key], fromArgs, toArgs);
        }
        if (!keyOption) {// 不支持的参数
          console.warn("The '".concat(methodName, "' method of platform '\u5934\u6761\u5C0F\u7A0B\u5E8F' does not support option '").concat(key, "'"));
        } else if (isStr(keyOption)) {// 重写参数 key
          toArgs[keyOption] = fromArgs[key];
        } else if (isPlainObject(keyOption)) {// {name:newName,value:value}可重新指定参数 key:value
          toArgs[keyOption.name ? keyOption.name : key] = keyOption.value;
        }
      } else if (CALLBACKS.indexOf(key) !== -1) {
        if (isFn(fromArgs[key])) {
          toArgs[key] = processCallback(methodName, fromArgs[key], returnValue);
        }
      } else {
        if (!keepFromArgs) {
          toArgs[key] = fromArgs[key];
        }
      }
    }
    return toArgs;
  } else if (isFn(fromArgs)) {
    fromArgs = processCallback(methodName, fromArgs, returnValue);
  }
  return fromArgs;
}

function processReturnValue(methodName, res, returnValue) {var keepReturnValue = arguments.length > 3 && arguments[3] !== undefined ? arguments[3] : false;
  if (isFn(protocols.returnValue)) {// 处理通用 returnValue
    res = protocols.returnValue(methodName, res);
  }
  return processArgs(methodName, res, returnValue, {}, keepReturnValue);
}

function wrapper(methodName, method) {
  if (hasOwn(protocols, methodName)) {
    var protocol = protocols[methodName];
    if (!protocol) {// 暂不支持的 api
      return function () {
        console.error("Platform '\u5934\u6761\u5C0F\u7A0B\u5E8F' does not support '".concat(methodName, "'."));
      };
    }
    return function (arg1, arg2) {// 目前 api 最多两个参数
      var options = protocol;
      if (isFn(protocol)) {
        options = protocol(arg1);
      }

      arg1 = processArgs(methodName, arg1, options.args, options.returnValue);

      var args = [arg1];
      if (typeof arg2 !== 'undefined') {
        args.push(arg2);
      }
      if (isFn(options.name)) {
        methodName = options.name(arg1);
      } else if (isStr(options.name)) {
        methodName = options.name;
      }
      var returnValue = tt[methodName].apply(tt, args);
      if (isSyncApi(methodName)) {// 同步 api
        return processReturnValue(methodName, returnValue, options.returnValue, isContextApi(methodName));
      }
      return returnValue;
    };
  }
  return method;
}

var todoApis = Object.create(null);

var TODOS = [
'onTabBarMidButtonTap',
'subscribePush',
'unsubscribePush',
'onPush',
'offPush',
'share'];


function createTodoApi(name) {
  return function todoApi(_ref)


  {var fail = _ref.fail,complete = _ref.complete;
    var res = {
      errMsg: "".concat(name, ":fail method '").concat(name, "' not supported") };

    isFn(fail) && fail(res);
    isFn(complete) && complete(res);
  };
}

TODOS.forEach(function (name) {
  todoApis[name] = createTodoApi(name);
});

var providers = {
  oauth: ['toutiao'],
  share: ['toutiao'],
  payment: ['toutiao'],
  push: ['toutiao'] };


function getProvider(_ref2)




{var service = _ref2.service,success = _ref2.success,fail = _ref2.fail,complete = _ref2.complete;
  var res = false;
  if (providers[service]) {
    res = {
      errMsg: 'getProvider:ok',
      service: service,
      provider: providers[service] };

    isFn(success) && success(res);
  } else {
    res = {
      errMsg: 'getProvider:fail service not found' };

    isFn(fail) && fail(res);
  }
  isFn(complete) && complete(res);
}

var extraApi = /*#__PURE__*/Object.freeze({
  __proto__: null,
  getProvider: getProvider });


var getEmitter = function () {
  var Emitter;
  return function getUniEmitter() {
    if (!Emitter) {
      Emitter = new _vue.default();
    }
    return Emitter;
  };
}();

function apply(ctx, method, args) {
  return ctx[method].apply(ctx, args);
}

function $on() {
  return apply(getEmitter(), '$on', Array.prototype.slice.call(arguments));
}
function $off() {
  return apply(getEmitter(), '$off', Array.prototype.slice.call(arguments));
}
function $once() {
  return apply(getEmitter(), '$once', Array.prototype.slice.call(arguments));
}
function $emit() {
  return apply(getEmitter(), '$emit', Array.prototype.slice.call(arguments));
}

var eventApi = /*#__PURE__*/Object.freeze({
  __proto__: null,
  $on: $on,
  $off: $off,
  $once: $once,
  $emit: $emit });


function createMediaQueryObserver() {
  var mediaQueryObserver = {};var _tt$getSystemInfoSync2 =



  tt.getSystemInfoSync(),windowWidth = _tt$getSystemInfoSync2.windowWidth,windowHeight = _tt$getSystemInfoSync2.windowHeight;

  var orientation = windowWidth < windowHeight ? 'portrait' : 'landscape';

  mediaQueryObserver.observe = function (options, callback) {
    var matches = true;
    for (var item in options) {
      var itemValue = item === 'orientation' ? options[item] : Number(options[item]);
      if (options[item] !== '') {
        if (item === 'width') {
          if (itemValue === windowWidth) {
            matches = true;
          } else {
            matches = false;
            callback(matches);
            return matches;
          }
        }
        if (item === 'minWidth') {
          if (windowWidth >= itemValue) {
            matches = true;
          } else {
            matches = false;
            callback(matches);
            return matches;
          }
        }
        if (item === 'maxWidth') {
          if (windowWidth <= itemValue) {
            matches = true;
          } else {
            matches = false;
            callback(matches);
            return matches;
          }
        }

        if (item === 'height') {
          if (itemValue === windowHeight) {
            matches = true;
          } else {
            matches = false;
            callback(matches);
            return matches;
          }
        }
        if (item === 'minHeight') {
          if (windowHeight >= itemValue) {
            matches = true;
          } else {
            matches = false;
            callback(matches);
            return matches;
          }
        }
        if (item === 'maxHeight') {
          if (windowHeight <= itemValue) {
            matches = true;
          } else {
            matches = false;
            callback(matches);
            return matches;
          }
        }

        if (item === 'orientation') {
          if (options[item] === orientation) {
            matches = true;
          } else {
            matches = false;
            callback(matches);
            return matches;
          }
        }
      }
    }
    callback(matches);

    return matches;
  };

  mediaQueryObserver.disconnect = function () {
  };

  return mediaQueryObserver;
}

/**
   * 框架内 try-catch
   */
/**
       * 开发者 try-catch
       */
function tryCatch(fn) {
  return function () {
    try {
      return fn.apply(fn, arguments);
    } catch (e) {
      // TODO
      console.error(e);
    }
  };
}

function getApiCallbacks(params) {
  var apiCallbacks = {};
  for (var name in params) {
    var param = params[name];
    if (isFn(param)) {
      apiCallbacks[name] = tryCatch(param);
      delete params[name];
    }
  }
  return apiCallbacks;
}

var cid;
var cidErrMsg;

function normalizePushMessage(message) {
  try {
    return JSON.parse(message);
  } catch (e) {}
  return message;
}

function invokePushCallback(
args)
{
  if (args.type === 'clientId') {
    cid = args.cid;
    cidErrMsg = args.errMsg;
    invokeGetPushCidCallbacks(cid, args.errMsg);
  } else if (args.type === 'pushMsg') {
    onPushMessageCallbacks.forEach(function (callback) {
      callback({
        type: 'receive',
        data: normalizePushMessage(args.message) });

    });
  } else if (args.type === 'click') {
    onPushMessageCallbacks.forEach(function (callback) {
      callback({
        type: 'click',
        data: normalizePushMessage(args.message) });

    });
  }
}

var getPushCidCallbacks = [];

function invokeGetPushCidCallbacks(cid, errMsg) {
  getPushCidCallbacks.forEach(function (callback) {
    callback(cid, errMsg);
  });
  getPushCidCallbacks.length = 0;
}

function getPushClientid(args) {
  if (!isPlainObject(args)) {
    args = {};
  }var _getApiCallbacks =




  getApiCallbacks(args),success = _getApiCallbacks.success,fail = _getApiCallbacks.fail,complete = _getApiCallbacks.complete;
  var hasSuccess = isFn(success);
  var hasFail = isFn(fail);
  var hasComplete = isFn(complete);
  getPushCidCallbacks.push(function (cid, errMsg) {
    var res;
    if (cid) {
      res = {
        errMsg: 'getPushClientid:ok',
        cid: cid };

      hasSuccess && success(res);
    } else {
      res = {
        errMsg: 'getPushClientid:fail' + (errMsg ? ' ' + errMsg : '') };

      hasFail && fail(res);
    }
    hasComplete && complete(res);
  });
  if (typeof cid !== 'undefined') {
    Promise.resolve().then(function () {return invokeGetPushCidCallbacks(cid, cidErrMsg);});
  }
}

var onPushMessageCallbacks = [];
// 不使用 defineOnApi 实现，是因为 defineOnApi 依赖 UniServiceJSBridge ，该对象目前在小程序上未提供，故简单实现
var onPushMessage = function onPushMessage(fn) {
  if (onPushMessageCallbacks.indexOf(fn) === -1) {
    onPushMessageCallbacks.push(fn);
  }
};

var offPushMessage = function offPushMessage(fn) {
  if (!fn) {
    onPushMessageCallbacks.length = 0;
  } else {
    var index = onPushMessageCallbacks.indexOf(fn);
    if (index > -1) {
      onPushMessageCallbacks.splice(index, 1);
    }
  }
};

var api = /*#__PURE__*/Object.freeze({
  __proto__: null,
  createMediaQueryObserver: createMediaQueryObserver,
  getPushClientid: getPushClientid,
  onPushMessage: onPushMessage,
  offPushMessage: offPushMessage,
  invokePushCallback: invokePushCallback });


var MPPage = Page;
var MPComponent = Component;

var customizeRE = /:/g;

var customize = cached(function (str) {
  return camelize(str.replace(customizeRE, '-'));
});

function initTriggerEvent(mpInstance) {
  var oldTriggerEvent = mpInstance.triggerEvent;
  var newTriggerEvent = function newTriggerEvent(event) {for (var _len4 = arguments.length, args = new Array(_len4 > 1 ? _len4 - 1 : 0), _key4 = 1; _key4 < _len4; _key4++) {args[_key4 - 1] = arguments[_key4];}
    return oldTriggerEvent.apply(mpInstance, [customize(event)].concat(args));
  };
  try {
    // 京东小程序 triggerEvent 为只读
    mpInstance.triggerEvent = newTriggerEvent;
  } catch (error) {
    mpInstance._triggerEvent = newTriggerEvent;
  }
}

function initHook(name, options, isComponent) {
  {
    // fix by Lxh 字节自定义组件Component构造器文档上写有created，但是实测只触发了lifetimes上的created
    isComponent && options.lifetimes && options.lifetimes[name] && (options = options.lifetimes);
  }
  var oldHook = options[name];
  if (!oldHook) {
    options[name] = function () {
      initTriggerEvent(this);
    };
  } else {
    options[name] = function () {
      initTriggerEvent(this);for (var _len5 = arguments.length, args = new Array(_len5), _key5 = 0; _key5 < _len5; _key5++) {args[_key5] = arguments[_key5];}
      return oldHook.apply(this, args);
    };
  }
}
if (!MPPage.__$wrappered) {
  MPPage.__$wrappered = true;
  Page = function Page() {var options = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};
    initHook('onLoad', options);
    return MPPage(options);
  };
  Page.after = MPPage.after;

  Component = function Component() {var options = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};
    initHook('created', options, true);
    return MPComponent(options);
  };
}

var PAGE_EVENT_HOOKS = [
'onPullDownRefresh',
'onReachBottom',
'onAddToFavorites',
'onShareTimeline',
'onShareAppMessage',
'onPageScroll',
'onResize',
'onTabItemTap'];


function initMocks(vm, mocks) {
  var mpInstance = vm.$mp[vm.mpType];
  mocks.forEach(function (mock) {
    if (hasOwn(mpInstance, mock)) {
      vm[mock] = mpInstance[mock];
    }
  });
}

function hasHook(hook, vueOptions) {
  if (!vueOptions) {
    return true;
  }

  if (_vue.default.options && Array.isArray(_vue.default.options[hook])) {
    return true;
  }

  vueOptions = vueOptions.default || vueOptions;

  if (isFn(vueOptions)) {
    if (isFn(vueOptions.extendOptions[hook])) {
      return true;
    }
    if (vueOptions.super &&
    vueOptions.super.options &&
    Array.isArray(vueOptions.super.options[hook])) {
      return true;
    }
    return false;
  }

  if (isFn(vueOptions[hook])) {
    return true;
  }
  var mixins = vueOptions.mixins;
  if (Array.isArray(mixins)) {
    return !!mixins.find(function (mixin) {return hasHook(hook, mixin);});
  }
}

function initHooks(mpOptions, hooks, vueOptions) {
  hooks.forEach(function (hook) {
    if (hasHook(hook, vueOptions)) {
      mpOptions[hook] = function (args) {
        return this.$vm && this.$vm.__call_hook(hook, args);
      };
    }
  });
}

function initVueComponent(Vue, vueOptions) {
  vueOptions = vueOptions.default || vueOptions;
  var VueComponent;
  if (isFn(vueOptions)) {
    VueComponent = vueOptions;
  } else {
    VueComponent = Vue.extend(vueOptions);
  }
  vueOptions = VueComponent.options;
  return [VueComponent, vueOptions];
}

function initSlots(vm, vueSlots) {
  if (Array.isArray(vueSlots) && vueSlots.length) {
    var $slots = Object.create(null);
    vueSlots.forEach(function (slotName) {
      $slots[slotName] = true;
    });
    vm.$scopedSlots = vm.$slots = $slots;
  }
}

function initVueIds(vueIds, mpInstance) {
  vueIds = (vueIds || '').split(',');
  var len = vueIds.length;

  if (len === 1) {
    mpInstance._$vueId = vueIds[0];
  } else if (len === 2) {
    mpInstance._$vueId = vueIds[0];
    mpInstance._$vuePid = vueIds[1];
  }
}

function initData(vueOptions, context) {
  var data = vueOptions.data || {};
  var methods = vueOptions.methods || {};

  if (typeof data === 'function') {
    try {
      data = data.call(context); // 支持 Vue.prototype 上挂的数据
    } catch (e) {
      if (Object({"VUE_APP_NAME":"仙图壁纸","VUE_APP_PLATFORM":"mp-toutiao","NODE_ENV":"development","BASE_URL":"/"}).VUE_APP_DEBUG) {
        console.warn('根据 Vue 的 data 函数初始化小程序 data 失败，请尽量确保 data 函数中不访问 vm 对象，否则可能影响首次数据渲染速度。', data);
      }
    }
  } else {
    try {
      // 对 data 格式化
      data = JSON.parse(JSON.stringify(data));
    } catch (e) {}
  }

  if (!isPlainObject(data)) {
    data = {};
  }

  Object.keys(methods).forEach(function (methodName) {
    if (context.__lifecycle_hooks__.indexOf(methodName) === -1 && !hasOwn(data, methodName)) {
      data[methodName] = methods[methodName];
    }
  });

  return data;
}

var PROP_TYPES = [String, Number, Boolean, Object, Array, null];

function createObserver(name) {
  return function observer(newVal, oldVal) {
    if (this.$vm) {
      this.$vm[name] = newVal; // 为了触发其他非 render watcher
    }
  };
}

function initBehaviors(vueOptions, initBehavior) {
  var vueBehaviors = vueOptions.behaviors;
  var vueExtends = vueOptions.extends;
  var vueMixins = vueOptions.mixins;

  var vueProps = vueOptions.props;

  if (!vueProps) {
    vueOptions.props = vueProps = [];
  }

  var behaviors = [];
  if (Array.isArray(vueBehaviors)) {
    vueBehaviors.forEach(function (behavior) {
      behaviors.push(behavior.replace('uni://', "tt".concat("://")));
      if (behavior === 'uni://form-field') {
        if (Array.isArray(vueProps)) {
          vueProps.push('name');
          vueProps.push('value');
        } else {
          vueProps.name = {
            type: String,
            default: '' };

          vueProps.value = {
            type: [String, Number, Boolean, Array, Object, Date],
            default: '' };

        }
      }
    });
  }
  if (isPlainObject(vueExtends) && vueExtends.props) {
    behaviors.push(
    initBehavior({
      properties: initProperties(vueExtends.props, true) }));


  }
  if (Array.isArray(vueMixins)) {
    vueMixins.forEach(function (vueMixin) {
      if (isPlainObject(vueMixin) && vueMixin.props) {
        behaviors.push(
        initBehavior({
          properties: initProperties(vueMixin.props, true) }));


      }
    });
  }
  return behaviors;
}

function parsePropType(key, type, defaultValue, file) {
  // [String]=>String
  if (Array.isArray(type) && type.length === 1) {
    return type[0];
  }
  return type;
}

function initProperties(props) {var isBehavior = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : false;var file = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : '';
  var properties = {};
  if (!isBehavior) {
    properties.vueId = {
      type: String,
      value: '' };

    // 用于字节跳动小程序模拟抽象节点
    properties.generic = {
      type: Object,
      value: null };

    // scopedSlotsCompiler auto
    properties.scopedSlotsCompiler = {
      type: String,
      value: '' };

    properties.vueSlots = { // 小程序不能直接定义 $slots 的 props，所以通过 vueSlots 转换到 $slots
      type: null,
      value: [],
      observer: function observer(newVal, oldVal) {
        var $slots = Object.create(null);
        newVal.forEach(function (slotName) {
          $slots[slotName] = true;
        });
        this.setData({
          $slots: $slots });

      } };

  }
  if (Array.isArray(props)) {// ['title']
    props.forEach(function (key) {
      properties[key] = {
        type: null,
        observer: createObserver(key) };

    });
  } else if (isPlainObject(props)) {// {title:{type:String,default:''},content:String}
    Object.keys(props).forEach(function (key) {
      var opts = props[key];
      if (isPlainObject(opts)) {// title:{type:String,default:''}
        var value = opts.default;
        if (isFn(value)) {
          value = value();
        }

        opts.type = parsePropType(key, opts.type);

        properties[key] = {
          type: PROP_TYPES.indexOf(opts.type) !== -1 ? opts.type : null,
          value: value,
          observer: createObserver(key) };

      } else {// content:String
        var type = parsePropType(key, opts);
        properties[key] = {
          type: PROP_TYPES.indexOf(type) !== -1 ? type : null,
          observer: createObserver(key) };

      }
    });
  }
  return properties;
}

function wrapper$1(event) {
  // TODO 又得兼容 mpvue 的 mp 对象
  try {
    event.mp = JSON.parse(JSON.stringify(event));
  } catch (e) {}

  event.stopPropagation = noop;
  event.preventDefault = noop;

  event.target = event.target || {};

  if (!hasOwn(event, 'detail')) {
    event.detail = {};
  }

  if (hasOwn(event, 'markerId')) {
    event.detail = typeof event.detail === 'object' ? event.detail : {};
    event.detail.markerId = event.markerId;
  }

  if (isPlainObject(event.detail)) {
    event.target = Object.assign({}, event.target, event.detail);
  }

  return event;
}

function getExtraValue(vm, dataPathsArray) {
  var context = vm;
  dataPathsArray.forEach(function (dataPathArray) {
    var dataPath = dataPathArray[0];
    var value = dataPathArray[2];
    if (dataPath || typeof value !== 'undefined') {// ['','',index,'disable']
      var propPath = dataPathArray[1];
      var valuePath = dataPathArray[3];

      var vFor;
      if (Number.isInteger(dataPath)) {
        vFor = dataPath;
      } else if (!dataPath) {
        vFor = context;
      } else if (typeof dataPath === 'string' && dataPath) {
        if (dataPath.indexOf('#s#') === 0) {
          vFor = dataPath.substr(3);
        } else {
          vFor = vm.__get_value(dataPath, context);
        }
      }

      if (Number.isInteger(vFor)) {
        context = value;
      } else if (!propPath) {
        context = vFor[value];
      } else {
        if (Array.isArray(vFor)) {
          context = vFor.find(function (vForItem) {
            return vm.__get_value(propPath, vForItem) === value;
          });
        } else if (isPlainObject(vFor)) {
          context = Object.keys(vFor).find(function (vForKey) {
            return vm.__get_value(propPath, vFor[vForKey]) === value;
          });
        } else {
          console.error('v-for 暂不支持循环数据：', vFor);
        }
      }

      if (valuePath) {
        context = vm.__get_value(valuePath, context);
      }
    }
  });
  return context;
}

function processEventExtra(vm, extra, event) {
  var extraObj = {};

  if (Array.isArray(extra) && extra.length) {
    /**
                                              *[
                                              *    ['data.items', 'data.id', item.data.id],
                                              *    ['metas', 'id', meta.id]
                                              *],
                                              *[
                                              *    ['data.items', 'data.id', item.data.id],
                                              *    ['metas', 'id', meta.id]
                                              *],
                                              *'test'
                                              */
    extra.forEach(function (dataPath, index) {
      if (typeof dataPath === 'string') {
        if (!dataPath) {// model,prop.sync
          extraObj['$' + index] = vm;
        } else {
          if (dataPath === '$event') {// $event
            extraObj['$' + index] = event;
          } else if (dataPath === 'arguments') {
            if (event.detail && event.detail.__args__) {
              extraObj['$' + index] = event.detail.__args__;
            } else {
              extraObj['$' + index] = [event];
            }
          } else if (dataPath.indexOf('$event.') === 0) {// $event.target.value
            extraObj['$' + index] = vm.__get_value(dataPath.replace('$event.', ''), event);
          } else {
            extraObj['$' + index] = vm.__get_value(dataPath);
          }
        }
      } else {
        extraObj['$' + index] = getExtraValue(vm, dataPath);
      }
    });
  }

  return extraObj;
}

function getObjByArray(arr) {
  var obj = {};
  for (var i = 1; i < arr.length; i++) {
    var element = arr[i];
    obj[element[0]] = element[1];
  }
  return obj;
}

function processEventArgs(vm, event) {var args = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : [];var extra = arguments.length > 3 && arguments[3] !== undefined ? arguments[3] : [];var isCustom = arguments.length > 4 ? arguments[4] : undefined;var methodName = arguments.length > 5 ? arguments[5] : undefined;
  var isCustomMPEvent = false; // wxcomponent 组件，传递原始 event 对象
  if (isCustom) {// 自定义事件
    isCustomMPEvent = event.currentTarget &&
    event.currentTarget.dataset &&
    event.currentTarget.dataset.comType === 'wx';
    if (!args.length) {// 无参数，直接传入 event 或 detail 数组
      if (isCustomMPEvent) {
        return [event];
      }
      return event.detail.__args__ || event.detail;
    }
  }

  var extraObj = processEventExtra(vm, extra, event);

  var ret = [];
  args.forEach(function (arg) {
    if (arg === '$event') {
      if (methodName === '__set_model' && !isCustom) {// input v-model value
        ret.push(event.target.value);
      } else {
        if (isCustom && !isCustomMPEvent) {
          ret.push(event.detail.__args__[0]);
        } else {// wxcomponent 组件或内置组件
          ret.push(event);
        }
      }
    } else {
      if (Array.isArray(arg) && arg[0] === 'o') {
        ret.push(getObjByArray(arg));
      } else if (typeof arg === 'string' && hasOwn(extraObj, arg)) {
        ret.push(extraObj[arg]);
      } else {
        ret.push(arg);
      }
    }
  });

  return ret;
}

var ONCE = '~';
var CUSTOM = '^';

function isMatchEventType(eventType, optType) {
  return eventType === optType ||

  optType === 'regionchange' && (

  eventType === 'begin' ||
  eventType === 'end');


}

function getContextVm(vm) {
  var $parent = vm.$parent;
  // 父组件是 scoped slots 或者其他自定义组件时继续查找
  while ($parent && $parent.$parent && ($parent.$options.generic || $parent.$parent.$options.generic || $parent.$scope._$vuePid)) {
    $parent = $parent.$parent;
  }
  return $parent && $parent.$parent;
}

function handleEvent(event) {var _this3 = this;
  event = wrapper$1(event);

  // [['tap',[['handle',[1,2,a]],['handle1',[1,2,a]]]]]
  var dataset = (event.currentTarget || event.target).dataset;
  if (!dataset) {
    return console.warn('事件信息不存在');
  }
  var eventOpts = dataset.eventOpts || dataset['event-opts']; // 支付宝 web-view 组件 dataset 非驼峰
  if (!eventOpts) {
    return console.warn('事件信息不存在');
  }

  // [['handle',[1,2,a]],['handle1',[1,2,a]]]
  var eventType = event.type;

  var ret = [];

  eventOpts.forEach(function (eventOpt) {
    var type = eventOpt[0];
    var eventsArray = eventOpt[1];

    var isCustom = type.charAt(0) === CUSTOM;
    type = isCustom ? type.slice(1) : type;
    var isOnce = type.charAt(0) === ONCE;
    type = isOnce ? type.slice(1) : type;

    if (eventsArray && isMatchEventType(eventType, type)) {
      eventsArray.forEach(function (eventArray) {
        var methodName = eventArray[0];
        if (methodName) {
          var handlerCtx = _this3.$vm;
          if (handlerCtx.$options.generic) {// mp-weixin,mp-toutiao 抽象节点模拟 scoped slots
            handlerCtx = getContextVm(handlerCtx) || handlerCtx;
          }
          if (methodName === '$emit') {
            handlerCtx.$emit.apply(handlerCtx,
            processEventArgs(
            _this3.$vm,
            event,
            eventArray[1],
            eventArray[2],
            isCustom,
            methodName));

            return;
          }
          var handler = handlerCtx[methodName];
          if (!isFn(handler)) {
            throw new Error(" _vm.".concat(methodName, " is not a function"));
          }
          if (isOnce) {
            if (handler.once) {
              return;
            }
            handler.once = true;
          }
          var params = processEventArgs(
          _this3.$vm,
          event,
          eventArray[1],
          eventArray[2],
          isCustom,
          methodName);

          params = Array.isArray(params) ? params : [];
          // 参数尾部增加原始事件对象用于复杂表达式内获取额外数据
          if (/=\s*\S+\.eventParams\s*\|\|\s*\S+\[['"]event-params['"]\]/.test(handler.toString())) {
            // eslint-disable-next-line no-sparse-arrays
            params = params.concat([,,,,,,,,,, event]);
          }
          ret.push(handler.apply(handlerCtx, params));
        }
      });
    }
  });

  if (
  eventType === 'input' &&
  ret.length === 1 &&
  typeof ret[0] !== 'undefined')
  {
    return ret[0];
  }
}

var hooks = [
'onShow',
'onHide',
'onError',
'onPageNotFound',
'onThemeChange',
'onUnhandledRejection'];


function initEventChannel$1() {
  _vue.default.prototype.getOpenerEventChannel = function () {
    if (!this.__eventChannel__) {
      this.__eventChannel__ = new EventChannel();
    }
    return this.__eventChannel__;
  };
  var callHook = _vue.default.prototype.__call_hook;
  _vue.default.prototype.__call_hook = function (hook, args) {
    if (hook === 'onLoad' && args && args.__id__) {
      this.__eventChannel__ = getEventChannel(args.__id__);
      delete args.__id__;
    }
    return callHook.call(this, hook, args);
  };
}

function initScopedSlotsParams() {
  var center = {};
  var parents = {};

  _vue.default.prototype.$hasScopedSlotsParams = function (vueId) {
    var has = center[vueId];
    if (!has) {
      parents[vueId] = this;
      this.$on('hook:destroyed', function () {
        delete parents[vueId];
      });
    }
    return has;
  };

  _vue.default.prototype.$getScopedSlotsParams = function (vueId, name, key) {
    var data = center[vueId];
    if (data) {
      var object = data[name] || {};
      return key ? object[key] : object;
    } else {
      parents[vueId] = this;
      this.$on('hook:destroyed', function () {
        delete parents[vueId];
      });
    }
  };

  _vue.default.prototype.$setScopedSlotsParams = function (name, value) {
    var vueIds = this.$options.propsData.vueId;
    if (vueIds) {
      var vueId = vueIds.split(',')[0];
      var object = center[vueId] = center[vueId] || {};
      object[name] = value;
      if (parents[vueId]) {
        parents[vueId].$forceUpdate();
      }
    }
  };

  _vue.default.mixin({
    destroyed: function destroyed() {
      var propsData = this.$options.propsData;
      var vueId = propsData && propsData.vueId;
      if (vueId) {
        delete center[vueId];
        delete parents[vueId];
      }
    } });

}

function parseBaseApp(vm, _ref3)


{var mocks = _ref3.mocks,initRefs = _ref3.initRefs;
  initEventChannel$1();
  {
    initScopedSlotsParams();
  }
  if (vm.$options.store) {
    _vue.default.prototype.$store = vm.$options.store;
  }
  uniIdMixin(_vue.default);

  _vue.default.prototype.mpHost = "mp-toutiao";

  _vue.default.mixin({
    beforeCreate: function beforeCreate() {
      if (!this.$options.mpType) {
        return;
      }

      this.mpType = this.$options.mpType;

      this.$mp = _defineProperty({
        data: {} },
      this.mpType, this.$options.mpInstance);


      this.$scope = this.$options.mpInstance;

      delete this.$options.mpType;
      delete this.$options.mpInstance;
      if (this.mpType === 'page' && typeof getApp === 'function') {// hack vue-i18n
        var app = getApp();
        if (app.$vm && app.$vm.$i18n) {
          this._i18n = app.$vm.$i18n;
        }
      }
      if (this.mpType !== 'app') {
        initRefs(this);
        initMocks(this, mocks);
      }
    } });


  var appOptions = {
    onLaunch: function onLaunch(args) {
      if (this.$vm) {// 已经初始化过了，主要是为了百度，百度 onShow 在 onLaunch 之前
        return;
      }

      this.$vm = vm;

      this.$vm.$mp = {
        app: this };


      this.$vm.$scope = this;
      // vm 上也挂载 globalData
      this.$vm.globalData = this.globalData;

      this.$vm._isMounted = true;
      this.$vm.__call_hook('mounted', args);

      this.$vm.__call_hook('onLaunch', args);
    } };


  // 兼容旧版本 globalData
  appOptions.globalData = vm.$options.globalData || {};
  // 将 methods 中的方法挂在 getApp() 中
  var methods = vm.$options.methods;
  if (methods) {
    Object.keys(methods).forEach(function (name) {
      appOptions[name] = methods[name];
    });
  }

  initAppLocale(_vue.default, vm, normalizeLocale(tt.getSystemInfoSync().language) || LOCALE_EN);

  initHooks(appOptions, hooks);

  return appOptions;
}

function findVmByVueId(vm, vuePid) {
  var $children = vm.$children;
  // 优先查找直属(反向查找:https://github.com/dcloudio/uni-app/issues/1200)
  for (var i = $children.length - 1; i >= 0; i--) {
    var childVm = $children[i];
    if (childVm.$scope._$vueId === vuePid) {
      return childVm;
    }
  }
  // 反向递归查找
  var parentVm;
  for (var _i = $children.length - 1; _i >= 0; _i--) {
    parentVm = findVmByVueId($children[_i], vuePid);
    if (parentVm) {
      return parentVm;
    }
  }
}

function initBehavior(options) {
  return Behavior(options);
}

function handleLink(event) {var _ref4 =



  event.detail || event.value,vuePid = _ref4.vuePid,vueOptions = _ref4.vueOptions; // detail 是微信,value 是百度(dipatch)

  var parentVm;

  if (vuePid) {
    parentVm = findVmByVueId(this.$vm, vuePid);
  }

  if (!parentVm) {
    parentVm = this.$vm;
  }

  vueOptions.parent = parentVm;
}

var mocks = ['__route__', '__webviewId__', '__nodeid__', '__nodeId__'];

function isPage() {
  return this.__nodeid__ === 0 || this.__nodeId__ === 0;
}

function initRefs(vm) {
  var mpInstance = vm.$scope;
  /* eslint-disable no-undef */
  var minorVersion = parseInt(tt.getSystemInfoSync().SDKVersion.split('.')[1]);
  if (minorVersion > 16) {
    Object.defineProperty(vm, '$refs', {
      get: function get() {
        var $refs = {};
        var components = mpInstance.selectAllComponents('.vue-ref');
        components.forEach(function (component) {
          var ref = component.dataset.ref;
          $refs[ref] = component.$vm || component;
        });
        var forComponents = mpInstance.selectAllComponents('.vue-ref-in-for');
        forComponents.forEach(function (component) {
          var ref = component.dataset.ref;
          if (!$refs[ref]) {
            $refs[ref] = [];
          }
          $refs[ref].push(component.$vm || component);
        });
        return $refs;
      } });

  } else {
    mpInstance.selectAllComponents('.vue-ref', function (components) {
      components.forEach(function (component) {
        var ref = component.dataset.ref;
        vm.$refs[ref] = component.$vm || component;
      });
    });
    mpInstance.selectAllComponents('.vue-ref-in-for', function (forComponents) {
      forComponents.forEach(function (component) {
        var ref = component.dataset.ref;
        if (!vm.$refs[ref]) {
          vm.$refs[ref] = [];
        }
        vm.$refs[ref].push(component.$vm || component);
      });
    });
  }
}

var instances = Object.create(null);

function initRelation(_ref5)


{var vuePid = _ref5.vuePid,mpInstance = _ref5.mpInstance;
  // 头条 triggerEvent 后，接收事件时机特别晚，已经到了 ready 之后
  var nodeId = (mpInstance.__nodeId__ || mpInstance.__nodeid__) + '';
  var webviewId = mpInstance.__webviewId__ + '';

  instances[webviewId + '_' + nodeId] = mpInstance.$vm;

  this.triggerEvent('__l', {
    vuePid: vuePid,
    nodeId: nodeId,
    webviewId: webviewId });

}

function handleLink$1(_ref6)





{var _ref6$detail = _ref6.detail,vuePid = _ref6$detail.vuePid,nodeId = _ref6$detail.nodeId,webviewId = _ref6$detail.webviewId;
  var vm = instances[webviewId + '_' + nodeId];
  if (!vm) {
    return;
  }

  var parentVm;

  if (vuePid) {
    parentVm = findVmByVueId(this.$vm, vuePid);
  }

  if (!parentVm) {
    parentVm = this.$vm;
  }

  vm.$parent = parentVm;
  vm.$root = parentVm.$root;
  parentVm.$children.push(vm);

  vm.__call_hook('created');
  vm.__call_hook('beforeMount');
  vm._isMounted = true;
  vm.__call_hook('mounted');
  vm.__call_hook('onReady');
}

function parseApp(vm) {
  _vue.default.prototype._$fallback = true; // 降级（调整原 vue 的部分生命周期，如 created，beforeMount,inject,provide）

  _vue.default.mixin({
    created: function created() {// 处理 injections,头条 triggerEvent 是异步，且触发时机很慢，故延迟 relation 设置
      if (this.mpType !== 'app') {
        if (
        this.mpType === 'page' &&
        !this.$scope.route &&
        this.$scope.__route__)
        {
          this.$scope.route = this.$scope.__route__;
        }

        initRefs(this);

        this.__init_injections(this);
        this.__init_provide(this);
      }
    } });


  return parseBaseApp(vm, {
    mocks: mocks,
    initRefs: function initRefs() {} // attached 时，可能查询不到
  });
}

function createApp(vm) {
  App(parseApp(vm));
  return vm;
}

var encodeReserveRE = /[!'()*]/g;
var encodeReserveReplacer = function encodeReserveReplacer(c) {return '%' + c.charCodeAt(0).toString(16);};
var commaRE = /%2C/g;

// fixed encodeURIComponent which is more conformant to RFC3986:
// - escapes [!'()*]
// - preserve commas
var encode = function encode(str) {return encodeURIComponent(str).
  replace(encodeReserveRE, encodeReserveReplacer).
  replace(commaRE, ',');};

function stringifyQuery(obj) {var encodeStr = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : encode;
  var res = obj ? Object.keys(obj).map(function (key) {
    var val = obj[key];

    if (val === undefined) {
      return '';
    }

    if (val === null) {
      return encodeStr(key);
    }

    if (Array.isArray(val)) {
      var result = [];
      val.forEach(function (val2) {
        if (val2 === undefined) {
          return;
        }
        if (val2 === null) {
          result.push(encodeStr(key));
        } else {
          result.push(encodeStr(key) + '=' + encodeStr(val2));
        }
      });
      return result.join('&');
    }

    return encodeStr(key) + '=' + encodeStr(val);
  }).filter(function (x) {return x.length > 0;}).join('&') : null;
  return res ? "?".concat(res) : '';
}

function parseBaseComponent(vueComponentOptions)


{var _ref7 = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {},isPage = _ref7.isPage,initRelation = _ref7.initRelation;var _initVueComponent =
  initVueComponent(_vue.default, vueComponentOptions),_initVueComponent2 = _slicedToArray(_initVueComponent, 2),VueComponent = _initVueComponent2[0],vueOptions = _initVueComponent2[1];

  var options = _objectSpread({
    multipleSlots: true,
    addGlobalClass: true },
  vueOptions.options || {});


  var componentOptions = {
    options: options,
    data: initData(vueOptions, _vue.default.prototype),
    behaviors: initBehaviors(vueOptions, initBehavior),
    properties: initProperties(vueOptions.props, false, vueOptions.__file),
    lifetimes: {
      attached: function attached() {
        var properties = this.properties;

        var options = {
          mpType: isPage.call(this) ? 'page' : 'component',
          mpInstance: this,
          propsData: properties };


        initVueIds(properties.vueId, this);

        // 处理父子关系
        initRelation.call(this, {
          vuePid: this._$vuePid,
          vueOptions: options });


        // 初始化 vue 实例
        this.$vm = new VueComponent(options);

        // 处理$slots,$scopedSlots（暂不支持动态变化$slots）
        initSlots(this.$vm, properties.vueSlots);

        // 触发首次 setData
        this.$vm.$mount();
      },
      ready: function ready() {
        // 当组件 props 默认值为 true，初始化时传入 false 会导致 created,ready 触发, 但 attached 不触发
        // https://developers.weixin.qq.com/community/develop/doc/00066ae2844cc0f8eb883e2a557800
        if (this.$vm) {
          this.$vm._isMounted = true;
          this.$vm.__call_hook('mounted');
          this.$vm.__call_hook('onReady');
        }
      },
      detached: function detached() {
        this.$vm && this.$vm.$destroy();
      } },

    pageLifetimes: {
      show: function show(args) {
        this.$vm && this.$vm.__call_hook('onPageShow', args);
      },
      hide: function hide() {
        this.$vm && this.$vm.__call_hook('onPageHide');
      },
      resize: function resize(size) {
        this.$vm && this.$vm.__call_hook('onPageResize', size);
      } },

    methods: {
      __l: handleLink,
      __e: handleEvent } };


  // externalClasses
  if (vueOptions.externalClasses) {
    componentOptions.externalClasses = vueOptions.externalClasses;
  }

  if (Array.isArray(vueOptions.wxsCallMethods)) {
    vueOptions.wxsCallMethods.forEach(function (callMethod) {
      componentOptions.methods[callMethod] = function (args) {
        return this.$vm[callMethod](args);
      };
    });
  }

  if (isPage) {
    return componentOptions;
  }
  return [componentOptions, VueComponent];
}

var components = [];

function parseComponent(vueOptions) {var _parseBaseComponent =
  parseBaseComponent(vueOptions),_parseBaseComponent2 = _slicedToArray(_parseBaseComponent, 2),componentOptions = _parseBaseComponent2[0],VueComponent = _parseBaseComponent2[1];

  // 基础库 2.0 以上 attached 顺序错乱，按照 created 顺序强制纠正
  componentOptions.lifetimes.created = function created() {
    components.push(this);
  };

  componentOptions.lifetimes.attached = function attached() {
    this.__lifetimes_attached = function () {
      var properties = this.properties;

      var options = {
        mpType: isPage.call(this) ? 'page' : 'component',
        mpInstance: this,
        propsData: properties };


      initVueIds(properties.vueId, this);

      // 初始化 vue 实例
      this.$vm = new VueComponent(options);

      // 处理$slots,$scopedSlots（暂不支持动态变化$slots）
      initSlots(this.$vm, properties.vueSlots);

      // 处理父子关系
      initRelation.call(this, {
        vuePid: this._$vuePid,
        mpInstance: this });


      // 触发首次 setData
      this.$vm.$mount();
    };
    var component = this;
    while (component && component.__lifetimes_attached && components[0] && component === components[0]) {
      components.shift();
      component.__lifetimes_attached();
      delete component.__lifetimes_attached;
      component = components[0];
    }
  };

  // ready 比 handleLink 还早，初始化逻辑放到 handleLink 中
  delete componentOptions.lifetimes.ready;

  componentOptions.methods.__l = handleLink$1;

  return componentOptions;
}

var hooks$1 = [
'onShow',
'onHide',
'onUnload'];


hooks$1.push.apply(hooks$1, PAGE_EVENT_HOOKS);

function parseBasePage(vuePageOptions, _ref8)


{var isPage = _ref8.isPage,initRelation = _ref8.initRelation;
  var pageOptions = parseComponent(vuePageOptions);

  initHooks(pageOptions.methods, hooks$1, vuePageOptions);

  pageOptions.methods.onLoad = function (query) {
    this.options = query;
    var copyQuery = Object.assign({}, query);
    delete copyQuery.__id__;
    this.$page = {
      fullPath: '/' + (this.route || this.is) + stringifyQuery(copyQuery) };

    this.$vm.$mp.query = query; // 兼容 mpvue
    this.$vm.__call_hook('onLoad', query);
  };

  return pageOptions;
}

function parsePage(vuePageOptions) {
  var pageOptions = parseBasePage(vuePageOptions, {
    isPage: isPage,
    initRelation: initRelation });

  // 页面需要在 ready 中触发，其他组件是在 handleLink 中触发
  pageOptions.lifetimes.ready = function ready() {
    if (this.$vm && this.$vm.mpType === 'page') {
      this.$vm.__call_hook('created');
      this.$vm.__call_hook('beforeMount');
      this.$vm._isMounted = true;
      this.$vm.__call_hook('mounted');
      this.$vm.__call_hook('onReady');
    } else {
      this.is && console.warn(this.is + ' is not ready');
    }
  };

  pageOptions.lifetimes.detached = function detached() {
    this.$vm && this.$vm.$destroy();
    // 清理
    var webviewId = this.__webviewId__;
    webviewId && Object.keys(instances).forEach(function (key) {
      if (key.indexOf(webviewId + '_') === 0) {
        delete instances[key];
      }
    });
  };

  return pageOptions;
}

function createPage(vuePageOptions) {
  {
    return Component(parsePage(vuePageOptions));
  }
}

function createComponent(vueOptions) {
  {
    return Component(parseComponent(vueOptions));
  }
}

function createSubpackageApp(vm) {
  var appOptions = parseApp(vm);
  var app = getApp({
    allowDefault: true });

  vm.$scope = app;
  var globalData = app.globalData;
  if (globalData) {
    Object.keys(appOptions.globalData).forEach(function (name) {
      if (!hasOwn(globalData, name)) {
        globalData[name] = appOptions.globalData[name];
      }
    });
  }
  Object.keys(appOptions).forEach(function (name) {
    if (!hasOwn(app, name)) {
      app[name] = appOptions[name];
    }
  });
  if (isFn(appOptions.onShow) && tt.onAppShow) {
    tt.onAppShow(function () {for (var _len6 = arguments.length, args = new Array(_len6), _key6 = 0; _key6 < _len6; _key6++) {args[_key6] = arguments[_key6];}
      vm.__call_hook('onShow', args);
    });
  }
  if (isFn(appOptions.onHide) && tt.onAppHide) {
    tt.onAppHide(function () {for (var _len7 = arguments.length, args = new Array(_len7), _key7 = 0; _key7 < _len7; _key7++) {args[_key7] = arguments[_key7];}
      vm.__call_hook('onHide', args);
    });
  }
  if (isFn(appOptions.onLaunch)) {
    var args = tt.getLaunchOptionsSync && tt.getLaunchOptionsSync();
    vm.__call_hook('onLaunch', args);
  }
  return vm;
}

function createPlugin(vm) {
  var appOptions = parseApp(vm);
  if (isFn(appOptions.onShow) && tt.onAppShow) {
    tt.onAppShow(function () {for (var _len8 = arguments.length, args = new Array(_len8), _key8 = 0; _key8 < _len8; _key8++) {args[_key8] = arguments[_key8];}
      vm.__call_hook('onShow', args);
    });
  }
  if (isFn(appOptions.onHide) && tt.onAppHide) {
    tt.onAppHide(function () {for (var _len9 = arguments.length, args = new Array(_len9), _key9 = 0; _key9 < _len9; _key9++) {args[_key9] = arguments[_key9];}
      vm.__call_hook('onHide', args);
    });
  }
  if (isFn(appOptions.onLaunch)) {
    var args = tt.getLaunchOptionsSync && tt.getLaunchOptionsSync();
    vm.__call_hook('onLaunch', args);
  }
  return vm;
}

todos.forEach(function (todoApi) {
  protocols[todoApi] = false;
});

canIUses.forEach(function (canIUseApi) {
  var apiName = protocols[canIUseApi] && protocols[canIUseApi].name ? protocols[canIUseApi].name :
  canIUseApi;
  if (!tt.canIUse(apiName)) {
    protocols[canIUseApi] = false;
  }
});

var uni = {};

if (typeof Proxy !== 'undefined' && "mp-toutiao" !== 'app-plus') {
  uni = new Proxy({}, {
    get: function get(target, name) {
      if (hasOwn(target, name)) {
        return target[name];
      }
      if (baseApi[name]) {
        return baseApi[name];
      }
      if (api[name]) {
        return promisify(name, api[name]);
      }
      {
        if (extraApi[name]) {
          return promisify(name, extraApi[name]);
        }
        if (todoApis[name]) {
          return promisify(name, todoApis[name]);
        }
      }
      if (eventApi[name]) {
        return eventApi[name];
      }
      if (!hasOwn(tt, name) && !hasOwn(protocols, name)) {
        return;
      }
      return promisify(name, wrapper(name, tt[name]));
    },
    set: function set(target, name, value) {
      target[name] = value;
      return true;
    } });

} else {
  Object.keys(baseApi).forEach(function (name) {
    uni[name] = baseApi[name];
  });

  {
    Object.keys(todoApis).forEach(function (name) {
      uni[name] = promisify(name, todoApis[name]);
    });
    Object.keys(extraApi).forEach(function (name) {
      uni[name] = promisify(name, todoApis[name]);
    });
  }

  Object.keys(eventApi).forEach(function (name) {
    uni[name] = eventApi[name];
  });

  Object.keys(api).forEach(function (name) {
    uni[name] = promisify(name, api[name]);
  });

  Object.keys(tt).forEach(function (name) {
    if (hasOwn(tt, name) || hasOwn(protocols, name)) {
      uni[name] = promisify(name, wrapper(name, tt[name]));
    }
  });
}

tt.createApp = createApp;
tt.createPage = createPage;
tt.createComponent = createComponent;
tt.createSubpackageApp = createSubpackageApp;
tt.createPlugin = createPlugin;

var uni$1 = uni;var _default =

uni$1;exports.default = _default;
/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../../../webpack/buildin/global.js */ 2)))

/***/ }),
/* 2 */
/*!***********************************!*\
  !*** (webpack)/buildin/global.js ***!
  \***********************************/
/*! no static exports found */
/***/ (function(module, exports) {

var g;

// This works in non-strict mode
g = (function() {
	return this;
})();

try {
	// This works if eval is allowed (see CSP)
	g = g || new Function("return this")();
} catch (e) {
	// This works if the window reference is available
	if (typeof window === "object") g = window;
}

// g can still be undefined, but nothing to do about it...
// We return undefined, instead of nothing here, so it's
// easier to handle this case. if(!global) { ...}

module.exports = g;


/***/ }),
/* 3 */
/*!*************************************************************!*\
  !*** ./node_modules/@dcloudio/uni-i18n/dist/uni-i18n.es.js ***!
  \*************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/* WEBPACK VAR INJECTION */(function(uni, global) {Object.defineProperty(exports, "__esModule", { value: true });exports.compileI18nJsonStr = compileI18nJsonStr;exports.hasI18nJson = hasI18nJson;exports.initVueI18n = initVueI18n;exports.isI18nStr = isI18nStr;exports.normalizeLocale = normalizeLocale;exports.parseI18nJson = parseI18nJson;exports.resolveLocale = resolveLocale;exports.isString = exports.LOCALE_ZH_HANT = exports.LOCALE_ZH_HANS = exports.LOCALE_FR = exports.LOCALE_ES = exports.LOCALE_EN = exports.I18n = exports.Formatter = void 0;function _slicedToArray(arr, i) {return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _unsupportedIterableToArray(arr, i) || _nonIterableRest();}function _nonIterableRest() {throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.");}function _unsupportedIterableToArray(o, minLen) {if (!o) return;if (typeof o === "string") return _arrayLikeToArray(o, minLen);var n = Object.prototype.toString.call(o).slice(8, -1);if (n === "Object" && o.constructor) n = o.constructor.name;if (n === "Map" || n === "Set") return Array.from(o);if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen);}function _arrayLikeToArray(arr, len) {if (len == null || len > arr.length) len = arr.length;for (var i = 0, arr2 = new Array(len); i < len; i++) {arr2[i] = arr[i];}return arr2;}function _iterableToArrayLimit(arr, i) {if (typeof Symbol === "undefined" || !(Symbol.iterator in Object(arr))) return;var _arr = [];var _n = true;var _d = false;var _e = undefined;try {for (var _i = arr[Symbol.iterator](), _s; !(_n = (_s = _i.next()).done); _n = true) {_arr.push(_s.value);if (i && _arr.length === i) break;}} catch (err) {_d = true;_e = err;} finally {try {if (!_n && _i["return"] != null) _i["return"]();} finally {if (_d) throw _e;}}return _arr;}function _arrayWithHoles(arr) {if (Array.isArray(arr)) return arr;}function _classCallCheck(instance, Constructor) {if (!(instance instanceof Constructor)) {throw new TypeError("Cannot call a class as a function");}}function _defineProperties(target, props) {for (var i = 0; i < props.length; i++) {var descriptor = props[i];descriptor.enumerable = descriptor.enumerable || false;descriptor.configurable = true;if ("value" in descriptor) descriptor.writable = true;Object.defineProperty(target, descriptor.key, descriptor);}}function _createClass(Constructor, protoProps, staticProps) {if (protoProps) _defineProperties(Constructor.prototype, protoProps);if (staticProps) _defineProperties(Constructor, staticProps);return Constructor;}var isArray = Array.isArray;
var isObject = function isObject(val) {return val !== null && typeof val === 'object';};
var defaultDelimiters = ['{', '}'];var
BaseFormatter = /*#__PURE__*/function () {
  function BaseFormatter() {_classCallCheck(this, BaseFormatter);
    this._caches = Object.create(null);
  }_createClass(BaseFormatter, [{ key: "interpolate", value: function interpolate(
    message, values) {var delimiters = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : defaultDelimiters;
      if (!values) {
        return [message];
      }
      var tokens = this._caches[message];
      if (!tokens) {
        tokens = parse(message, delimiters);
        this._caches[message] = tokens;
      }
      return compile(tokens, values);
    } }]);return BaseFormatter;}();exports.Formatter = BaseFormatter;

var RE_TOKEN_LIST_VALUE = /^(?:\d)+/;
var RE_TOKEN_NAMED_VALUE = /^(?:\w)+/;
function parse(format, _ref) {var _ref2 = _slicedToArray(_ref, 2),startDelimiter = _ref2[0],endDelimiter = _ref2[1];
  var tokens = [];
  var position = 0;
  var text = '';
  while (position < format.length) {
    var char = format[position++];
    if (char === startDelimiter) {
      if (text) {
        tokens.push({ type: 'text', value: text });
      }
      text = '';
      var sub = '';
      char = format[position++];
      while (char !== undefined && char !== endDelimiter) {
        sub += char;
        char = format[position++];
      }
      var isClosed = char === endDelimiter;
      var type = RE_TOKEN_LIST_VALUE.test(sub) ?
      'list' :
      isClosed && RE_TOKEN_NAMED_VALUE.test(sub) ?
      'named' :
      'unknown';
      tokens.push({ value: sub, type: type });
    }
    //  else if (char === '%') {
    //   // when found rails i18n syntax, skip text capture
    //   if (format[position] !== '{') {
    //     text += char
    //   }
    // }
    else {
        text += char;
      }
  }
  text && tokens.push({ type: 'text', value: text });
  return tokens;
}
function compile(tokens, values) {
  var compiled = [];
  var index = 0;
  var mode = isArray(values) ?
  'list' :
  isObject(values) ?
  'named' :
  'unknown';
  if (mode === 'unknown') {
    return compiled;
  }
  while (index < tokens.length) {
    var token = tokens[index];
    switch (token.type) {
      case 'text':
        compiled.push(token.value);
        break;
      case 'list':
        compiled.push(values[parseInt(token.value, 10)]);
        break;
      case 'named':
        if (mode === 'named') {
          compiled.push(values[token.value]);
        } else
        {
          if (true) {
            console.warn("Type of token '".concat(token.type, "' and format of value '").concat(mode, "' don't match!"));
          }
        }
        break;
      case 'unknown':
        if (true) {
          console.warn("Detect 'unknown' type of token!");
        }
        break;}

    index++;
  }
  return compiled;
}

var LOCALE_ZH_HANS = 'zh-Hans';exports.LOCALE_ZH_HANS = LOCALE_ZH_HANS;
var LOCALE_ZH_HANT = 'zh-Hant';exports.LOCALE_ZH_HANT = LOCALE_ZH_HANT;
var LOCALE_EN = 'en';exports.LOCALE_EN = LOCALE_EN;
var LOCALE_FR = 'fr';exports.LOCALE_FR = LOCALE_FR;
var LOCALE_ES = 'es';exports.LOCALE_ES = LOCALE_ES;
var hasOwnProperty = Object.prototype.hasOwnProperty;
var hasOwn = function hasOwn(val, key) {return hasOwnProperty.call(val, key);};
var defaultFormatter = new BaseFormatter();
function include(str, parts) {
  return !!parts.find(function (part) {return str.indexOf(part) !== -1;});
}
function startsWith(str, parts) {
  return parts.find(function (part) {return str.indexOf(part) === 0;});
}
function normalizeLocale(locale, messages) {
  if (!locale) {
    return;
  }
  locale = locale.trim().replace(/_/g, '-');
  if (messages && messages[locale]) {
    return locale;
  }
  locale = locale.toLowerCase();
  if (locale.indexOf('zh') === 0) {
    if (locale.indexOf('-hans') > -1) {
      return LOCALE_ZH_HANS;
    }
    if (locale.indexOf('-hant') > -1) {
      return LOCALE_ZH_HANT;
    }
    if (include(locale, ['-tw', '-hk', '-mo', '-cht'])) {
      return LOCALE_ZH_HANT;
    }
    return LOCALE_ZH_HANS;
  }
  var lang = startsWith(locale, [LOCALE_EN, LOCALE_FR, LOCALE_ES]);
  if (lang) {
    return lang;
  }
}var
I18n = /*#__PURE__*/function () {
  function I18n(_ref3) {var locale = _ref3.locale,fallbackLocale = _ref3.fallbackLocale,messages = _ref3.messages,watcher = _ref3.watcher,formater = _ref3.formater;_classCallCheck(this, I18n);
    this.locale = LOCALE_EN;
    this.fallbackLocale = LOCALE_EN;
    this.message = {};
    this.messages = {};
    this.watchers = [];
    if (fallbackLocale) {
      this.fallbackLocale = fallbackLocale;
    }
    this.formater = formater || defaultFormatter;
    this.messages = messages || {};
    this.setLocale(locale || LOCALE_EN);
    if (watcher) {
      this.watchLocale(watcher);
    }
  }_createClass(I18n, [{ key: "setLocale", value: function setLocale(
    locale) {var _this = this;
      var oldLocale = this.locale;
      this.locale = normalizeLocale(locale, this.messages) || this.fallbackLocale;
      if (!this.messages[this.locale]) {
        // 可能初始化时不存在
        this.messages[this.locale] = {};
      }
      this.message = this.messages[this.locale];
      // 仅发生变化时，通知
      if (oldLocale !== this.locale) {
        this.watchers.forEach(function (watcher) {
          watcher(_this.locale, oldLocale);
        });
      }
    } }, { key: "getLocale", value: function getLocale()
    {
      return this.locale;
    } }, { key: "watchLocale", value: function watchLocale(
    fn) {var _this2 = this;
      var index = this.watchers.push(fn) - 1;
      return function () {
        _this2.watchers.splice(index, 1);
      };
    } }, { key: "add", value: function add(
    locale, message) {var override = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : true;
      var curMessages = this.messages[locale];
      if (curMessages) {
        if (override) {
          Object.assign(curMessages, message);
        } else
        {
          Object.keys(message).forEach(function (key) {
            if (!hasOwn(curMessages, key)) {
              curMessages[key] = message[key];
            }
          });
        }
      } else
      {
        this.messages[locale] = message;
      }
    } }, { key: "f", value: function f(
    message, values, delimiters) {
      return this.formater.interpolate(message, values, delimiters).join('');
    } }, { key: "t", value: function t(
    key, locale, values) {
      var message = this.message;
      if (typeof locale === 'string') {
        locale = normalizeLocale(locale, this.messages);
        locale && (message = this.messages[locale]);
      } else
      {
        values = locale;
      }
      if (!hasOwn(message, key)) {
        console.warn("Cannot translate the value of keypath ".concat(key, ". Use the value of keypath as default."));
        return key;
      }
      return this.formater.interpolate(message[key], values).join('');
    } }]);return I18n;}();exports.I18n = I18n;


function watchAppLocale(appVm, i18n) {
  // 需要保证 watch 的触发在组件渲染之前
  if (appVm.$watchLocale) {
    // vue2
    appVm.$watchLocale(function (newLocale) {
      i18n.setLocale(newLocale);
    });
  } else
  {
    appVm.$watch(function () {return appVm.$locale;}, function (newLocale) {
      i18n.setLocale(newLocale);
    });
  }
}
function getDefaultLocale() {
  if (typeof uni !== 'undefined' && uni.getLocale) {
    return uni.getLocale();
  }
  // 小程序平台，uni 和 uni-i18n 互相引用，导致访问不到 uni，故在 global 上挂了 getLocale
  if (typeof global !== 'undefined' && global.getLocale) {
    return global.getLocale();
  }
  return LOCALE_EN;
}
function initVueI18n(locale) {var messages = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};var fallbackLocale = arguments.length > 2 ? arguments[2] : undefined;var watcher = arguments.length > 3 ? arguments[3] : undefined;
  // 兼容旧版本入参
  if (typeof locale !== 'string') {var _ref4 =
    [
    messages,
    locale];locale = _ref4[0];messages = _ref4[1];

  }
  if (typeof locale !== 'string') {
    // 因为小程序平台，uni-i18n 和 uni 互相引用，导致此时访问 uni 时，为 undefined
    locale = getDefaultLocale();
  }
  if (typeof fallbackLocale !== 'string') {
    fallbackLocale =
    typeof __uniConfig !== 'undefined' && __uniConfig.fallbackLocale ||
    LOCALE_EN;
  }
  var i18n = new I18n({
    locale: locale,
    fallbackLocale: fallbackLocale,
    messages: messages,
    watcher: watcher });

  var _t = function t(key, values) {
    if (typeof getApp !== 'function') {
      // app view
      /* eslint-disable no-func-assign */
      _t = function t(key, values) {
        return i18n.t(key, values);
      };
    } else
    {
      var isWatchedAppLocale = false;
      _t = function t(key, values) {
        var appVm = getApp().$vm;
        // 可能$vm还不存在，比如在支付宝小程序中，组件定义较早，在props的default里使用了t()函数（如uni-goods-nav），此时app还未初始化
        // options: {
        // 	type: Array,
        // 	default () {
        // 		return [{
        // 			icon: 'shop',
        // 			text: t("uni-goods-nav.options.shop"),
        // 		}, {
        // 			icon: 'cart',
        // 			text: t("uni-goods-nav.options.cart")
        // 		}]
        // 	}
        // },
        if (appVm) {
          // 触发响应式
          appVm.$locale;
          if (!isWatchedAppLocale) {
            isWatchedAppLocale = true;
            watchAppLocale(appVm, i18n);
          }
        }
        return i18n.t(key, values);
      };
    }
    return _t(key, values);
  };
  return {
    i18n: i18n,
    f: function f(message, values, delimiters) {
      return i18n.f(message, values, delimiters);
    },
    t: function t(key, values) {
      return _t(key, values);
    },
    add: function add(locale, message) {var override = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : true;
      return i18n.add(locale, message, override);
    },
    watch: function watch(fn) {
      return i18n.watchLocale(fn);
    },
    getLocale: function getLocale() {
      return i18n.getLocale();
    },
    setLocale: function setLocale(newLocale) {
      return i18n.setLocale(newLocale);
    } };

}

var isString = function isString(val) {return typeof val === 'string';};exports.isString = isString;
var formater;
function hasI18nJson(jsonObj, delimiters) {
  if (!formater) {
    formater = new BaseFormatter();
  }
  return walkJsonObj(jsonObj, function (jsonObj, key) {
    var value = jsonObj[key];
    if (isString(value)) {
      if (isI18nStr(value, delimiters)) {
        return true;
      }
    } else
    {
      return hasI18nJson(value, delimiters);
    }
  });
}
function parseI18nJson(jsonObj, values, delimiters) {
  if (!formater) {
    formater = new BaseFormatter();
  }
  walkJsonObj(jsonObj, function (jsonObj, key) {
    var value = jsonObj[key];
    if (isString(value)) {
      if (isI18nStr(value, delimiters)) {
        jsonObj[key] = compileStr(value, values, delimiters);
      }
    } else
    {
      parseI18nJson(value, values, delimiters);
    }
  });
  return jsonObj;
}
function compileI18nJsonStr(jsonStr, _ref5) {var locale = _ref5.locale,locales = _ref5.locales,delimiters = _ref5.delimiters;
  if (!isI18nStr(jsonStr, delimiters)) {
    return jsonStr;
  }
  if (!formater) {
    formater = new BaseFormatter();
  }
  var localeValues = [];
  Object.keys(locales).forEach(function (name) {
    if (name !== locale) {
      localeValues.push({
        locale: name,
        values: locales[name] });

    }
  });
  localeValues.unshift({ locale: locale, values: locales[locale] });
  try {
    return JSON.stringify(compileJsonObj(JSON.parse(jsonStr), localeValues, delimiters), null, 2);
  }
  catch (e) {}
  return jsonStr;
}
function isI18nStr(value, delimiters) {
  return value.indexOf(delimiters[0]) > -1;
}
function compileStr(value, values, delimiters) {
  return formater.interpolate(value, values, delimiters).join('');
}
function compileValue(jsonObj, key, localeValues, delimiters) {
  var value = jsonObj[key];
  if (isString(value)) {
    // 存在国际化
    if (isI18nStr(value, delimiters)) {
      jsonObj[key] = compileStr(value, localeValues[0].values, delimiters);
      if (localeValues.length > 1) {
        // 格式化国际化语言
        var valueLocales = jsonObj[key + 'Locales'] = {};
        localeValues.forEach(function (localValue) {
          valueLocales[localValue.locale] = compileStr(value, localValue.values, delimiters);
        });
      }
    }
  } else
  {
    compileJsonObj(value, localeValues, delimiters);
  }
}
function compileJsonObj(jsonObj, localeValues, delimiters) {
  walkJsonObj(jsonObj, function (jsonObj, key) {
    compileValue(jsonObj, key, localeValues, delimiters);
  });
  return jsonObj;
}
function walkJsonObj(jsonObj, walk) {
  if (isArray(jsonObj)) {
    for (var i = 0; i < jsonObj.length; i++) {
      if (walk(jsonObj, i)) {
        return true;
      }
    }
  } else
  if (isObject(jsonObj)) {
    for (var key in jsonObj) {
      if (walk(jsonObj, key)) {
        return true;
      }
    }
  }
  return false;
}

function resolveLocale(locales) {
  return function (locale) {
    if (!locale) {
      return locale;
    }
    locale = normalizeLocale(locale) || locale;
    return resolveLocaleChain(locale).find(function (locale) {return locales.indexOf(locale) > -1;});
  };
}
function resolveLocaleChain(locale) {
  var chain = [];
  var tokens = locale.split('-');
  while (tokens.length) {
    chain.push(tokens.join('-'));
    tokens.pop();
  }
  return chain;
}
/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./node_modules/@dcloudio/uni-mp-toutiao/dist/index.js */ 1)["default"], __webpack_require__(/*! ./../../../webpack/buildin/global.js */ 2)))

/***/ }),
/* 4 */
/*!******************************************************************************************!*\
  !*** ./node_modules/@dcloudio/vue-cli-plugin-uni/packages/mp-vue/dist/mp.runtime.esm.js ***!
  \******************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* WEBPACK VAR INJECTION */(function(global) {/*!
 * Vue.js v2.6.11
 * (c) 2014-2022 Evan You
 * Released under the MIT License.
 */
/*  */

var emptyObject = Object.freeze({});

// These helpers produce better VM code in JS engines due to their
// explicitness and function inlining.
function isUndef (v) {
  return v === undefined || v === null
}

function isDef (v) {
  return v !== undefined && v !== null
}

function isTrue (v) {
  return v === true
}

function isFalse (v) {
  return v === false
}

/**
 * Check if value is primitive.
 */
function isPrimitive (value) {
  return (
    typeof value === 'string' ||
    typeof value === 'number' ||
    // $flow-disable-line
    typeof value === 'symbol' ||
    typeof value === 'boolean'
  )
}

/**
 * Quick object check - this is primarily used to tell
 * Objects from primitive values when we know the value
 * is a JSON-compliant type.
 */
function isObject (obj) {
  return obj !== null && typeof obj === 'object'
}

/**
 * Get the raw type string of a value, e.g., [object Object].
 */
var _toString = Object.prototype.toString;

function toRawType (value) {
  return _toString.call(value).slice(8, -1)
}

/**
 * Strict object type check. Only returns true
 * for plain JavaScript objects.
 */
function isPlainObject (obj) {
  return _toString.call(obj) === '[object Object]'
}

function isRegExp (v) {
  return _toString.call(v) === '[object RegExp]'
}

/**
 * Check if val is a valid array index.
 */
function isValidArrayIndex (val) {
  var n = parseFloat(String(val));
  return n >= 0 && Math.floor(n) === n && isFinite(val)
}

function isPromise (val) {
  return (
    isDef(val) &&
    typeof val.then === 'function' &&
    typeof val.catch === 'function'
  )
}

/**
 * Convert a value to a string that is actually rendered.
 */
function toString (val) {
  return val == null
    ? ''
    : Array.isArray(val) || (isPlainObject(val) && val.toString === _toString)
      ? JSON.stringify(val, null, 2)
      : String(val)
}

/**
 * Convert an input value to a number for persistence.
 * If the conversion fails, return original string.
 */
function toNumber (val) {
  var n = parseFloat(val);
  return isNaN(n) ? val : n
}

/**
 * Make a map and return a function for checking if a key
 * is in that map.
 */
function makeMap (
  str,
  expectsLowerCase
) {
  var map = Object.create(null);
  var list = str.split(',');
  for (var i = 0; i < list.length; i++) {
    map[list[i]] = true;
  }
  return expectsLowerCase
    ? function (val) { return map[val.toLowerCase()]; }
    : function (val) { return map[val]; }
}

/**
 * Check if a tag is a built-in tag.
 */
var isBuiltInTag = makeMap('slot,component', true);

/**
 * Check if an attribute is a reserved attribute.
 */
var isReservedAttribute = makeMap('key,ref,slot,slot-scope,is');

/**
 * Remove an item from an array.
 */
function remove (arr, item) {
  if (arr.length) {
    var index = arr.indexOf(item);
    if (index > -1) {
      return arr.splice(index, 1)
    }
  }
}

/**
 * Check whether an object has the property.
 */
var hasOwnProperty = Object.prototype.hasOwnProperty;
function hasOwn (obj, key) {
  return hasOwnProperty.call(obj, key)
}

/**
 * Create a cached version of a pure function.
 */
function cached (fn) {
  var cache = Object.create(null);
  return (function cachedFn (str) {
    var hit = cache[str];
    return hit || (cache[str] = fn(str))
  })
}

/**
 * Camelize a hyphen-delimited string.
 */
var camelizeRE = /-(\w)/g;
var camelize = cached(function (str) {
  return str.replace(camelizeRE, function (_, c) { return c ? c.toUpperCase() : ''; })
});

/**
 * Capitalize a string.
 */
var capitalize = cached(function (str) {
  return str.charAt(0).toUpperCase() + str.slice(1)
});

/**
 * Hyphenate a camelCase string.
 */
var hyphenateRE = /\B([A-Z])/g;
var hyphenate = cached(function (str) {
  return str.replace(hyphenateRE, '-$1').toLowerCase()
});

/**
 * Simple bind polyfill for environments that do not support it,
 * e.g., PhantomJS 1.x. Technically, we don't need this anymore
 * since native bind is now performant enough in most browsers.
 * But removing it would mean breaking code that was able to run in
 * PhantomJS 1.x, so this must be kept for backward compatibility.
 */

/* istanbul ignore next */
function polyfillBind (fn, ctx) {
  function boundFn (a) {
    var l = arguments.length;
    return l
      ? l > 1
        ? fn.apply(ctx, arguments)
        : fn.call(ctx, a)
      : fn.call(ctx)
  }

  boundFn._length = fn.length;
  return boundFn
}

function nativeBind (fn, ctx) {
  return fn.bind(ctx)
}

var bind = Function.prototype.bind
  ? nativeBind
  : polyfillBind;

/**
 * Convert an Array-like object to a real Array.
 */
function toArray (list, start) {
  start = start || 0;
  var i = list.length - start;
  var ret = new Array(i);
  while (i--) {
    ret[i] = list[i + start];
  }
  return ret
}

/**
 * Mix properties into target object.
 */
function extend (to, _from) {
  for (var key in _from) {
    to[key] = _from[key];
  }
  return to
}

/**
 * Merge an Array of Objects into a single Object.
 */
function toObject (arr) {
  var res = {};
  for (var i = 0; i < arr.length; i++) {
    if (arr[i]) {
      extend(res, arr[i]);
    }
  }
  return res
}

/* eslint-disable no-unused-vars */

/**
 * Perform no operation.
 * Stubbing args to make Flow happy without leaving useless transpiled code
 * with ...rest (https://flow.org/blog/2017/05/07/Strict-Function-Call-Arity/).
 */
function noop (a, b, c) {}

/**
 * Always return false.
 */
var no = function (a, b, c) { return false; };

/* eslint-enable no-unused-vars */

/**
 * Return the same value.
 */
var identity = function (_) { return _; };

/**
 * Check if two values are loosely equal - that is,
 * if they are plain objects, do they have the same shape?
 */
function looseEqual (a, b) {
  if (a === b) { return true }
  var isObjectA = isObject(a);
  var isObjectB = isObject(b);
  if (isObjectA && isObjectB) {
    try {
      var isArrayA = Array.isArray(a);
      var isArrayB = Array.isArray(b);
      if (isArrayA && isArrayB) {
        return a.length === b.length && a.every(function (e, i) {
          return looseEqual(e, b[i])
        })
      } else if (a instanceof Date && b instanceof Date) {
        return a.getTime() === b.getTime()
      } else if (!isArrayA && !isArrayB) {
        var keysA = Object.keys(a);
        var keysB = Object.keys(b);
        return keysA.length === keysB.length && keysA.every(function (key) {
          return looseEqual(a[key], b[key])
        })
      } else {
        /* istanbul ignore next */
        return false
      }
    } catch (e) {
      /* istanbul ignore next */
      return false
    }
  } else if (!isObjectA && !isObjectB) {
    return String(a) === String(b)
  } else {
    return false
  }
}

/**
 * Return the first index at which a loosely equal value can be
 * found in the array (if value is a plain object, the array must
 * contain an object of the same shape), or -1 if it is not present.
 */
function looseIndexOf (arr, val) {
  for (var i = 0; i < arr.length; i++) {
    if (looseEqual(arr[i], val)) { return i }
  }
  return -1
}

/**
 * Ensure a function is called only once.
 */
function once (fn) {
  var called = false;
  return function () {
    if (!called) {
      called = true;
      fn.apply(this, arguments);
    }
  }
}

var ASSET_TYPES = [
  'component',
  'directive',
  'filter'
];

var LIFECYCLE_HOOKS = [
  'beforeCreate',
  'created',
  'beforeMount',
  'mounted',
  'beforeUpdate',
  'updated',
  'beforeDestroy',
  'destroyed',
  'activated',
  'deactivated',
  'errorCaptured',
  'serverPrefetch'
];

/*  */



var config = ({
  /**
   * Option merge strategies (used in core/util/options)
   */
  // $flow-disable-line
  optionMergeStrategies: Object.create(null),

  /**
   * Whether to suppress warnings.
   */
  silent: false,

  /**
   * Show production mode tip message on boot?
   */
  productionTip: "development" !== 'production',

  /**
   * Whether to enable devtools
   */
  devtools: "development" !== 'production',

  /**
   * Whether to record perf
   */
  performance: false,

  /**
   * Error handler for watcher errors
   */
  errorHandler: null,

  /**
   * Warn handler for watcher warns
   */
  warnHandler: null,

  /**
   * Ignore certain custom elements
   */
  ignoredElements: [],

  /**
   * Custom user key aliases for v-on
   */
  // $flow-disable-line
  keyCodes: Object.create(null),

  /**
   * Check if a tag is reserved so that it cannot be registered as a
   * component. This is platform-dependent and may be overwritten.
   */
  isReservedTag: no,

  /**
   * Check if an attribute is reserved so that it cannot be used as a component
   * prop. This is platform-dependent and may be overwritten.
   */
  isReservedAttr: no,

  /**
   * Check if a tag is an unknown element.
   * Platform-dependent.
   */
  isUnknownElement: no,

  /**
   * Get the namespace of an element
   */
  getTagNamespace: noop,

  /**
   * Parse the real tag name for the specific platform.
   */
  parsePlatformTagName: identity,

  /**
   * Check if an attribute must be bound using property, e.g. value
   * Platform-dependent.
   */
  mustUseProp: no,

  /**
   * Perform updates asynchronously. Intended to be used by Vue Test Utils
   * This will significantly reduce performance if set to false.
   */
  async: true,

  /**
   * Exposed for legacy reasons
   */
  _lifecycleHooks: LIFECYCLE_HOOKS
});

/*  */

/**
 * unicode letters used for parsing html tags, component names and property paths.
 * using https://www.w3.org/TR/html53/semantics-scripting.html#potentialcustomelementname
 * skipping \u10000-\uEFFFF due to it freezing up PhantomJS
 */
var unicodeRegExp = /a-zA-Z\u00B7\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u037D\u037F-\u1FFF\u200C-\u200D\u203F-\u2040\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD/;

/**
 * Check if a string starts with $ or _
 */
function isReserved (str) {
  var c = (str + '').charCodeAt(0);
  return c === 0x24 || c === 0x5F
}

/**
 * Define a property.
 */
function def (obj, key, val, enumerable) {
  Object.defineProperty(obj, key, {
    value: val,
    enumerable: !!enumerable,
    writable: true,
    configurable: true
  });
}

/**
 * Parse simple path.
 */
var bailRE = new RegExp(("[^" + (unicodeRegExp.source) + ".$_\\d]"));
function parsePath (path) {
  if (bailRE.test(path)) {
    return
  }
  var segments = path.split('.');
  return function (obj) {
    for (var i = 0; i < segments.length; i++) {
      if (!obj) { return }
      obj = obj[segments[i]];
    }
    return obj
  }
}

/*  */

// can we use __proto__?
var hasProto = '__proto__' in {};

// Browser environment sniffing
var inBrowser = typeof window !== 'undefined';
var inWeex = typeof WXEnvironment !== 'undefined' && !!WXEnvironment.platform;
var weexPlatform = inWeex && WXEnvironment.platform.toLowerCase();
var UA = inBrowser && window.navigator.userAgent.toLowerCase();
var isIE = UA && /msie|trident/.test(UA);
var isIE9 = UA && UA.indexOf('msie 9.0') > 0;
var isEdge = UA && UA.indexOf('edge/') > 0;
var isAndroid = (UA && UA.indexOf('android') > 0) || (weexPlatform === 'android');
var isIOS = (UA && /iphone|ipad|ipod|ios/.test(UA)) || (weexPlatform === 'ios');
var isChrome = UA && /chrome\/\d+/.test(UA) && !isEdge;
var isPhantomJS = UA && /phantomjs/.test(UA);
var isFF = UA && UA.match(/firefox\/(\d+)/);

// Firefox has a "watch" function on Object.prototype...
var nativeWatch = ({}).watch;
if (inBrowser) {
  try {
    var opts = {};
    Object.defineProperty(opts, 'passive', ({
      get: function get () {
      }
    })); // https://github.com/facebook/flow/issues/285
    window.addEventListener('test-passive', null, opts);
  } catch (e) {}
}

// this needs to be lazy-evaled because vue may be required before
// vue-server-renderer can set VUE_ENV
var _isServer;
var isServerRendering = function () {
  if (_isServer === undefined) {
    /* istanbul ignore if */
    if (!inBrowser && !inWeex && typeof global !== 'undefined') {
      // detect presence of vue-server-renderer and avoid
      // Webpack shimming the process
      _isServer = global['process'] && global['process'].env.VUE_ENV === 'server';
    } else {
      _isServer = false;
    }
  }
  return _isServer
};

// detect devtools
var devtools = inBrowser && window.__VUE_DEVTOOLS_GLOBAL_HOOK__;

/* istanbul ignore next */
function isNative (Ctor) {
  return typeof Ctor === 'function' && /native code/.test(Ctor.toString())
}

var hasSymbol =
  typeof Symbol !== 'undefined' && isNative(Symbol) &&
  typeof Reflect !== 'undefined' && isNative(Reflect.ownKeys);

var _Set;
/* istanbul ignore if */ // $flow-disable-line
if (typeof Set !== 'undefined' && isNative(Set)) {
  // use native Set when available.
  _Set = Set;
} else {
  // a non-standard Set polyfill that only works with primitive keys.
  _Set = /*@__PURE__*/(function () {
    function Set () {
      this.set = Object.create(null);
    }
    Set.prototype.has = function has (key) {
      return this.set[key] === true
    };
    Set.prototype.add = function add (key) {
      this.set[key] = true;
    };
    Set.prototype.clear = function clear () {
      this.set = Object.create(null);
    };

    return Set;
  }());
}

/*  */

var warn = noop;
var tip = noop;
var generateComponentTrace = (noop); // work around flow check
var formatComponentName = (noop);

if (true) {
  var hasConsole = typeof console !== 'undefined';
  var classifyRE = /(?:^|[-_])(\w)/g;
  var classify = function (str) { return str
    .replace(classifyRE, function (c) { return c.toUpperCase(); })
    .replace(/[-_]/g, ''); };

  warn = function (msg, vm) {
    var trace = vm ? generateComponentTrace(vm) : '';

    if (config.warnHandler) {
      config.warnHandler.call(null, msg, vm, trace);
    } else if (hasConsole && (!config.silent)) {
      console.error(("[Vue warn]: " + msg + trace));
    }
  };

  tip = function (msg, vm) {
    if (hasConsole && (!config.silent)) {
      console.warn("[Vue tip]: " + msg + (
        vm ? generateComponentTrace(vm) : ''
      ));
    }
  };

  formatComponentName = function (vm, includeFile) {
    if (vm.$root === vm) {
      if (vm.$options && vm.$options.__file) { // fixed by xxxxxx
        return ('') + vm.$options.__file
      }
      return '<Root>'
    }
    var options = typeof vm === 'function' && vm.cid != null
      ? vm.options
      : vm._isVue
        ? vm.$options || vm.constructor.options
        : vm;
    var name = options.name || options._componentTag;
    var file = options.__file;
    if (!name && file) {
      var match = file.match(/([^/\\]+)\.vue$/);
      name = match && match[1];
    }

    return (
      (name ? ("<" + (classify(name)) + ">") : "<Anonymous>") +
      (file && includeFile !== false ? (" at " + file) : '')
    )
  };

  var repeat = function (str, n) {
    var res = '';
    while (n) {
      if (n % 2 === 1) { res += str; }
      if (n > 1) { str += str; }
      n >>= 1;
    }
    return res
  };

  generateComponentTrace = function (vm) {
    if (vm._isVue && vm.$parent) {
      var tree = [];
      var currentRecursiveSequence = 0;
      while (vm && vm.$options.name !== 'PageBody') {
        if (tree.length > 0) {
          var last = tree[tree.length - 1];
          if (last.constructor === vm.constructor) {
            currentRecursiveSequence++;
            vm = vm.$parent;
            continue
          } else if (currentRecursiveSequence > 0) {
            tree[tree.length - 1] = [last, currentRecursiveSequence];
            currentRecursiveSequence = 0;
          }
        }
        !vm.$options.isReserved && tree.push(vm);
        vm = vm.$parent;
      }
      return '\n\nfound in\n\n' + tree
        .map(function (vm, i) { return ("" + (i === 0 ? '---> ' : repeat(' ', 5 + i * 2)) + (Array.isArray(vm)
            ? ((formatComponentName(vm[0])) + "... (" + (vm[1]) + " recursive calls)")
            : formatComponentName(vm))); })
        .join('\n')
    } else {
      return ("\n\n(found in " + (formatComponentName(vm)) + ")")
    }
  };
}

/*  */

var uid = 0;

/**
 * A dep is an observable that can have multiple
 * directives subscribing to it.
 */
var Dep = function Dep () {
  this.id = uid++;
  this.subs = [];
};

Dep.prototype.addSub = function addSub (sub) {
  this.subs.push(sub);
};

Dep.prototype.removeSub = function removeSub (sub) {
  remove(this.subs, sub);
};

Dep.prototype.depend = function depend () {
  if (Dep.SharedObject.target) {
    Dep.SharedObject.target.addDep(this);
  }
};

Dep.prototype.notify = function notify () {
  // stabilize the subscriber list first
  var subs = this.subs.slice();
  if ( true && !config.async) {
    // subs aren't sorted in scheduler if not running async
    // we need to sort them now to make sure they fire in correct
    // order
    subs.sort(function (a, b) { return a.id - b.id; });
  }
  for (var i = 0, l = subs.length; i < l; i++) {
    subs[i].update();
  }
};

// The current target watcher being evaluated.
// This is globally unique because only one watcher
// can be evaluated at a time.
// fixed by xxxxxx (nvue shared vuex)
/* eslint-disable no-undef */
Dep.SharedObject = {};
Dep.SharedObject.target = null;
Dep.SharedObject.targetStack = [];

function pushTarget (target) {
  Dep.SharedObject.targetStack.push(target);
  Dep.SharedObject.target = target;
  Dep.target = target;
}

function popTarget () {
  Dep.SharedObject.targetStack.pop();
  Dep.SharedObject.target = Dep.SharedObject.targetStack[Dep.SharedObject.targetStack.length - 1];
  Dep.target = Dep.SharedObject.target;
}

/*  */

var VNode = function VNode (
  tag,
  data,
  children,
  text,
  elm,
  context,
  componentOptions,
  asyncFactory
) {
  this.tag = tag;
  this.data = data;
  this.children = children;
  this.text = text;
  this.elm = elm;
  this.ns = undefined;
  this.context = context;
  this.fnContext = undefined;
  this.fnOptions = undefined;
  this.fnScopeId = undefined;
  this.key = data && data.key;
  this.componentOptions = componentOptions;
  this.componentInstance = undefined;
  this.parent = undefined;
  this.raw = false;
  this.isStatic = false;
  this.isRootInsert = true;
  this.isComment = false;
  this.isCloned = false;
  this.isOnce = false;
  this.asyncFactory = asyncFactory;
  this.asyncMeta = undefined;
  this.isAsyncPlaceholder = false;
};

var prototypeAccessors = { child: { configurable: true } };

// DEPRECATED: alias for componentInstance for backwards compat.
/* istanbul ignore next */
prototypeAccessors.child.get = function () {
  return this.componentInstance
};

Object.defineProperties( VNode.prototype, prototypeAccessors );

var createEmptyVNode = function (text) {
  if ( text === void 0 ) text = '';

  var node = new VNode();
  node.text = text;
  node.isComment = true;
  return node
};

function createTextVNode (val) {
  return new VNode(undefined, undefined, undefined, String(val))
}

// optimized shallow clone
// used for static nodes and slot nodes because they may be reused across
// multiple renders, cloning them avoids errors when DOM manipulations rely
// on their elm reference.
function cloneVNode (vnode) {
  var cloned = new VNode(
    vnode.tag,
    vnode.data,
    // #7975
    // clone children array to avoid mutating original in case of cloning
    // a child.
    vnode.children && vnode.children.slice(),
    vnode.text,
    vnode.elm,
    vnode.context,
    vnode.componentOptions,
    vnode.asyncFactory
  );
  cloned.ns = vnode.ns;
  cloned.isStatic = vnode.isStatic;
  cloned.key = vnode.key;
  cloned.isComment = vnode.isComment;
  cloned.fnContext = vnode.fnContext;
  cloned.fnOptions = vnode.fnOptions;
  cloned.fnScopeId = vnode.fnScopeId;
  cloned.asyncMeta = vnode.asyncMeta;
  cloned.isCloned = true;
  return cloned
}

/*
 * not type checking this file because flow doesn't play well with
 * dynamically accessing methods on Array prototype
 */

var arrayProto = Array.prototype;
var arrayMethods = Object.create(arrayProto);

var methodsToPatch = [
  'push',
  'pop',
  'shift',
  'unshift',
  'splice',
  'sort',
  'reverse'
];

/**
 * Intercept mutating methods and emit events
 */
methodsToPatch.forEach(function (method) {
  // cache original method
  var original = arrayProto[method];
  def(arrayMethods, method, function mutator () {
    var args = [], len = arguments.length;
    while ( len-- ) args[ len ] = arguments[ len ];

    var result = original.apply(this, args);
    var ob = this.__ob__;
    var inserted;
    switch (method) {
      case 'push':
      case 'unshift':
        inserted = args;
        break
      case 'splice':
        inserted = args.slice(2);
        break
    }
    if (inserted) { ob.observeArray(inserted); }
    // notify change
    ob.dep.notify();
    return result
  });
});

/*  */

var arrayKeys = Object.getOwnPropertyNames(arrayMethods);

/**
 * In some cases we may want to disable observation inside a component's
 * update computation.
 */
var shouldObserve = true;

function toggleObserving (value) {
  shouldObserve = value;
}

/**
 * Observer class that is attached to each observed
 * object. Once attached, the observer converts the target
 * object's property keys into getter/setters that
 * collect dependencies and dispatch updates.
 */
var Observer = function Observer (value) {
  this.value = value;
  this.dep = new Dep();
  this.vmCount = 0;
  def(value, '__ob__', this);
  if (Array.isArray(value)) {
    if (hasProto) {
      {// fixed by xxxxxx 微信小程序使用 plugins 之后，数组方法被直接挂载到了数组对象上，需要执行 copyAugment 逻辑
        if(value.push !== value.__proto__.push){
          copyAugment(value, arrayMethods, arrayKeys);
        } else {
          protoAugment(value, arrayMethods);
        }
      }
    } else {
      copyAugment(value, arrayMethods, arrayKeys);
    }
    this.observeArray(value);
  } else {
    this.walk(value);
  }
};

/**
 * Walk through all properties and convert them into
 * getter/setters. This method should only be called when
 * value type is Object.
 */
Observer.prototype.walk = function walk (obj) {
  var keys = Object.keys(obj);
  for (var i = 0; i < keys.length; i++) {
    defineReactive$$1(obj, keys[i]);
  }
};

/**
 * Observe a list of Array items.
 */
Observer.prototype.observeArray = function observeArray (items) {
  for (var i = 0, l = items.length; i < l; i++) {
    observe(items[i]);
  }
};

// helpers

/**
 * Augment a target Object or Array by intercepting
 * the prototype chain using __proto__
 */
function protoAugment (target, src) {
  /* eslint-disable no-proto */
  target.__proto__ = src;
  /* eslint-enable no-proto */
}

/**
 * Augment a target Object or Array by defining
 * hidden properties.
 */
/* istanbul ignore next */
function copyAugment (target, src, keys) {
  for (var i = 0, l = keys.length; i < l; i++) {
    var key = keys[i];
    def(target, key, src[key]);
  }
}

/**
 * Attempt to create an observer instance for a value,
 * returns the new observer if successfully observed,
 * or the existing observer if the value already has one.
 */
function observe (value, asRootData) {
  if (!isObject(value) || value instanceof VNode) {
    return
  }
  var ob;
  if (hasOwn(value, '__ob__') && value.__ob__ instanceof Observer) {
    ob = value.__ob__;
  } else if (
    shouldObserve &&
    !isServerRendering() &&
    (Array.isArray(value) || isPlainObject(value)) &&
    Object.isExtensible(value) &&
    !value._isVue
  ) {
    ob = new Observer(value);
  }
  if (asRootData && ob) {
    ob.vmCount++;
  }
  return ob
}

/**
 * Define a reactive property on an Object.
 */
function defineReactive$$1 (
  obj,
  key,
  val,
  customSetter,
  shallow
) {
  var dep = new Dep();

  var property = Object.getOwnPropertyDescriptor(obj, key);
  if (property && property.configurable === false) {
    return
  }

  // cater for pre-defined getter/setters
  var getter = property && property.get;
  var setter = property && property.set;
  if ((!getter || setter) && arguments.length === 2) {
    val = obj[key];
  }

  var childOb = !shallow && observe(val);
  Object.defineProperty(obj, key, {
    enumerable: true,
    configurable: true,
    get: function reactiveGetter () {
      var value = getter ? getter.call(obj) : val;
      if (Dep.SharedObject.target) { // fixed by xxxxxx
        dep.depend();
        if (childOb) {
          childOb.dep.depend();
          if (Array.isArray(value)) {
            dependArray(value);
          }
        }
      }
      return value
    },
    set: function reactiveSetter (newVal) {
      var value = getter ? getter.call(obj) : val;
      /* eslint-disable no-self-compare */
      if (newVal === value || (newVal !== newVal && value !== value)) {
        return
      }
      /* eslint-enable no-self-compare */
      if ( true && customSetter) {
        customSetter();
      }
      // #7981: for accessor properties without setter
      if (getter && !setter) { return }
      if (setter) {
        setter.call(obj, newVal);
      } else {
        val = newVal;
      }
      childOb = !shallow && observe(newVal);
      dep.notify();
    }
  });
}

/**
 * Set a property on an object. Adds the new property and
 * triggers change notification if the property doesn't
 * already exist.
 */
function set (target, key, val) {
  if ( true &&
    (isUndef(target) || isPrimitive(target))
  ) {
    warn(("Cannot set reactive property on undefined, null, or primitive value: " + ((target))));
  }
  if (Array.isArray(target) && isValidArrayIndex(key)) {
    target.length = Math.max(target.length, key);
    target.splice(key, 1, val);
    return val
  }
  if (key in target && !(key in Object.prototype)) {
    target[key] = val;
    return val
  }
  var ob = (target).__ob__;
  if (target._isVue || (ob && ob.vmCount)) {
     true && warn(
      'Avoid adding reactive properties to a Vue instance or its root $data ' +
      'at runtime - declare it upfront in the data option.'
    );
    return val
  }
  if (!ob) {
    target[key] = val;
    return val
  }
  defineReactive$$1(ob.value, key, val);
  ob.dep.notify();
  return val
}

/**
 * Delete a property and trigger change if necessary.
 */
function del (target, key) {
  if ( true &&
    (isUndef(target) || isPrimitive(target))
  ) {
    warn(("Cannot delete reactive property on undefined, null, or primitive value: " + ((target))));
  }
  if (Array.isArray(target) && isValidArrayIndex(key)) {
    target.splice(key, 1);
    return
  }
  var ob = (target).__ob__;
  if (target._isVue || (ob && ob.vmCount)) {
     true && warn(
      'Avoid deleting properties on a Vue instance or its root $data ' +
      '- just set it to null.'
    );
    return
  }
  if (!hasOwn(target, key)) {
    return
  }
  delete target[key];
  if (!ob) {
    return
  }
  ob.dep.notify();
}

/**
 * Collect dependencies on array elements when the array is touched, since
 * we cannot intercept array element access like property getters.
 */
function dependArray (value) {
  for (var e = (void 0), i = 0, l = value.length; i < l; i++) {
    e = value[i];
    e && e.__ob__ && e.__ob__.dep.depend();
    if (Array.isArray(e)) {
      dependArray(e);
    }
  }
}

/*  */

/**
 * Option overwriting strategies are functions that handle
 * how to merge a parent option value and a child option
 * value into the final value.
 */
var strats = config.optionMergeStrategies;

/**
 * Options with restrictions
 */
if (true) {
  strats.el = strats.propsData = function (parent, child, vm, key) {
    if (!vm) {
      warn(
        "option \"" + key + "\" can only be used during instance " +
        'creation with the `new` keyword.'
      );
    }
    return defaultStrat(parent, child)
  };
}

/**
 * Helper that recursively merges two data objects together.
 */
function mergeData (to, from) {
  if (!from) { return to }
  var key, toVal, fromVal;

  var keys = hasSymbol
    ? Reflect.ownKeys(from)
    : Object.keys(from);

  for (var i = 0; i < keys.length; i++) {
    key = keys[i];
    // in case the object is already observed...
    if (key === '__ob__') { continue }
    toVal = to[key];
    fromVal = from[key];
    if (!hasOwn(to, key)) {
      set(to, key, fromVal);
    } else if (
      toVal !== fromVal &&
      isPlainObject(toVal) &&
      isPlainObject(fromVal)
    ) {
      mergeData(toVal, fromVal);
    }
  }
  return to
}

/**
 * Data
 */
function mergeDataOrFn (
  parentVal,
  childVal,
  vm
) {
  if (!vm) {
    // in a Vue.extend merge, both should be functions
    if (!childVal) {
      return parentVal
    }
    if (!parentVal) {
      return childVal
    }
    // when parentVal & childVal are both present,
    // we need to return a function that returns the
    // merged result of both functions... no need to
    // check if parentVal is a function here because
    // it has to be a function to pass previous merges.
    return function mergedDataFn () {
      return mergeData(
        typeof childVal === 'function' ? childVal.call(this, this) : childVal,
        typeof parentVal === 'function' ? parentVal.call(this, this) : parentVal
      )
    }
  } else {
    return function mergedInstanceDataFn () {
      // instance merge
      var instanceData = typeof childVal === 'function'
        ? childVal.call(vm, vm)
        : childVal;
      var defaultData = typeof parentVal === 'function'
        ? parentVal.call(vm, vm)
        : parentVal;
      if (instanceData) {
        return mergeData(instanceData, defaultData)
      } else {
        return defaultData
      }
    }
  }
}

strats.data = function (
  parentVal,
  childVal,
  vm
) {
  if (!vm) {
    if (childVal && typeof childVal !== 'function') {
       true && warn(
        'The "data" option should be a function ' +
        'that returns a per-instance value in component ' +
        'definitions.',
        vm
      );

      return parentVal
    }
    return mergeDataOrFn(parentVal, childVal)
  }

  return mergeDataOrFn(parentVal, childVal, vm)
};

/**
 * Hooks and props are merged as arrays.
 */
function mergeHook (
  parentVal,
  childVal
) {
  var res = childVal
    ? parentVal
      ? parentVal.concat(childVal)
      : Array.isArray(childVal)
        ? childVal
        : [childVal]
    : parentVal;
  return res
    ? dedupeHooks(res)
    : res
}

function dedupeHooks (hooks) {
  var res = [];
  for (var i = 0; i < hooks.length; i++) {
    if (res.indexOf(hooks[i]) === -1) {
      res.push(hooks[i]);
    }
  }
  return res
}

LIFECYCLE_HOOKS.forEach(function (hook) {
  strats[hook] = mergeHook;
});

/**
 * Assets
 *
 * When a vm is present (instance creation), we need to do
 * a three-way merge between constructor options, instance
 * options and parent options.
 */
function mergeAssets (
  parentVal,
  childVal,
  vm,
  key
) {
  var res = Object.create(parentVal || null);
  if (childVal) {
     true && assertObjectType(key, childVal, vm);
    return extend(res, childVal)
  } else {
    return res
  }
}

ASSET_TYPES.forEach(function (type) {
  strats[type + 's'] = mergeAssets;
});

/**
 * Watchers.
 *
 * Watchers hashes should not overwrite one
 * another, so we merge them as arrays.
 */
strats.watch = function (
  parentVal,
  childVal,
  vm,
  key
) {
  // work around Firefox's Object.prototype.watch...
  if (parentVal === nativeWatch) { parentVal = undefined; }
  if (childVal === nativeWatch) { childVal = undefined; }
  /* istanbul ignore if */
  if (!childVal) { return Object.create(parentVal || null) }
  if (true) {
    assertObjectType(key, childVal, vm);
  }
  if (!parentVal) { return childVal }
  var ret = {};
  extend(ret, parentVal);
  for (var key$1 in childVal) {
    var parent = ret[key$1];
    var child = childVal[key$1];
    if (parent && !Array.isArray(parent)) {
      parent = [parent];
    }
    ret[key$1] = parent
      ? parent.concat(child)
      : Array.isArray(child) ? child : [child];
  }
  return ret
};

/**
 * Other object hashes.
 */
strats.props =
strats.methods =
strats.inject =
strats.computed = function (
  parentVal,
  childVal,
  vm,
  key
) {
  if (childVal && "development" !== 'production') {
    assertObjectType(key, childVal, vm);
  }
  if (!parentVal) { return childVal }
  var ret = Object.create(null);
  extend(ret, parentVal);
  if (childVal) { extend(ret, childVal); }
  return ret
};
strats.provide = mergeDataOrFn;

/**
 * Default strategy.
 */
var defaultStrat = function (parentVal, childVal) {
  return childVal === undefined
    ? parentVal
    : childVal
};

/**
 * Validate component names
 */
function checkComponents (options) {
  for (var key in options.components) {
    validateComponentName(key);
  }
}

function validateComponentName (name) {
  if (!new RegExp(("^[a-zA-Z][\\-\\.0-9_" + (unicodeRegExp.source) + "]*$")).test(name)) {
    warn(
      'Invalid component name: "' + name + '". Component names ' +
      'should conform to valid custom element name in html5 specification.'
    );
  }
  if (isBuiltInTag(name) || config.isReservedTag(name)) {
    warn(
      'Do not use built-in or reserved HTML elements as component ' +
      'id: ' + name
    );
  }
}

/**
 * Ensure all props option syntax are normalized into the
 * Object-based format.
 */
function normalizeProps (options, vm) {
  var props = options.props;
  if (!props) { return }
  var res = {};
  var i, val, name;
  if (Array.isArray(props)) {
    i = props.length;
    while (i--) {
      val = props[i];
      if (typeof val === 'string') {
        name = camelize(val);
        res[name] = { type: null };
      } else if (true) {
        warn('props must be strings when using array syntax.');
      }
    }
  } else if (isPlainObject(props)) {
    for (var key in props) {
      val = props[key];
      name = camelize(key);
      res[name] = isPlainObject(val)
        ? val
        : { type: val };
    }
  } else if (true) {
    warn(
      "Invalid value for option \"props\": expected an Array or an Object, " +
      "but got " + (toRawType(props)) + ".",
      vm
    );
  }
  options.props = res;
}

/**
 * Normalize all injections into Object-based format
 */
function normalizeInject (options, vm) {
  var inject = options.inject;
  if (!inject) { return }
  var normalized = options.inject = {};
  if (Array.isArray(inject)) {
    for (var i = 0; i < inject.length; i++) {
      normalized[inject[i]] = { from: inject[i] };
    }
  } else if (isPlainObject(inject)) {
    for (var key in inject) {
      var val = inject[key];
      normalized[key] = isPlainObject(val)
        ? extend({ from: key }, val)
        : { from: val };
    }
  } else if (true) {
    warn(
      "Invalid value for option \"inject\": expected an Array or an Object, " +
      "but got " + (toRawType(inject)) + ".",
      vm
    );
  }
}

/**
 * Normalize raw function directives into object format.
 */
function normalizeDirectives (options) {
  var dirs = options.directives;
  if (dirs) {
    for (var key in dirs) {
      var def$$1 = dirs[key];
      if (typeof def$$1 === 'function') {
        dirs[key] = { bind: def$$1, update: def$$1 };
      }
    }
  }
}

function assertObjectType (name, value, vm) {
  if (!isPlainObject(value)) {
    warn(
      "Invalid value for option \"" + name + "\": expected an Object, " +
      "but got " + (toRawType(value)) + ".",
      vm
    );
  }
}

/**
 * Merge two option objects into a new one.
 * Core utility used in both instantiation and inheritance.
 */
function mergeOptions (
  parent,
  child,
  vm
) {
  if (true) {
    checkComponents(child);
  }

  if (typeof child === 'function') {
    child = child.options;
  }

  normalizeProps(child, vm);
  normalizeInject(child, vm);
  normalizeDirectives(child);

  // Apply extends and mixins on the child options,
  // but only if it is a raw options object that isn't
  // the result of another mergeOptions call.
  // Only merged options has the _base property.
  if (!child._base) {
    if (child.extends) {
      parent = mergeOptions(parent, child.extends, vm);
    }
    if (child.mixins) {
      for (var i = 0, l = child.mixins.length; i < l; i++) {
        parent = mergeOptions(parent, child.mixins[i], vm);
      }
    }
  }

  var options = {};
  var key;
  for (key in parent) {
    mergeField(key);
  }
  for (key in child) {
    if (!hasOwn(parent, key)) {
      mergeField(key);
    }
  }
  function mergeField (key) {
    var strat = strats[key] || defaultStrat;
    options[key] = strat(parent[key], child[key], vm, key);
  }
  return options
}

/**
 * Resolve an asset.
 * This function is used because child instances need access
 * to assets defined in its ancestor chain.
 */
function resolveAsset (
  options,
  type,
  id,
  warnMissing
) {
  /* istanbul ignore if */
  if (typeof id !== 'string') {
    return
  }
  var assets = options[type];
  // check local registration variations first
  if (hasOwn(assets, id)) { return assets[id] }
  var camelizedId = camelize(id);
  if (hasOwn(assets, camelizedId)) { return assets[camelizedId] }
  var PascalCaseId = capitalize(camelizedId);
  if (hasOwn(assets, PascalCaseId)) { return assets[PascalCaseId] }
  // fallback to prototype chain
  var res = assets[id] || assets[camelizedId] || assets[PascalCaseId];
  if ( true && warnMissing && !res) {
    warn(
      'Failed to resolve ' + type.slice(0, -1) + ': ' + id,
      options
    );
  }
  return res
}

/*  */



function validateProp (
  key,
  propOptions,
  propsData,
  vm
) {
  var prop = propOptions[key];
  var absent = !hasOwn(propsData, key);
  var value = propsData[key];
  // boolean casting
  var booleanIndex = getTypeIndex(Boolean, prop.type);
  if (booleanIndex > -1) {
    if (absent && !hasOwn(prop, 'default')) {
      value = false;
    } else if (value === '' || value === hyphenate(key)) {
      // only cast empty string / same name to boolean if
      // boolean has higher priority
      var stringIndex = getTypeIndex(String, prop.type);
      if (stringIndex < 0 || booleanIndex < stringIndex) {
        value = true;
      }
    }
  }
  // check default value
  if (value === undefined) {
    value = getPropDefaultValue(vm, prop, key);
    // since the default value is a fresh copy,
    // make sure to observe it.
    var prevShouldObserve = shouldObserve;
    toggleObserving(true);
    observe(value);
    toggleObserving(prevShouldObserve);
  }
  if (
    true
  ) {
    assertProp(prop, key, value, vm, absent);
  }
  return value
}

/**
 * Get the default value of a prop.
 */
function getPropDefaultValue (vm, prop, key) {
  // no default, return undefined
  if (!hasOwn(prop, 'default')) {
    return undefined
  }
  var def = prop.default;
  // warn against non-factory defaults for Object & Array
  if ( true && isObject(def)) {
    warn(
      'Invalid default value for prop "' + key + '": ' +
      'Props with type Object/Array must use a factory function ' +
      'to return the default value.',
      vm
    );
  }
  // the raw prop value was also undefined from previous render,
  // return previous default value to avoid unnecessary watcher trigger
  if (vm && vm.$options.propsData &&
    vm.$options.propsData[key] === undefined &&
    vm._props[key] !== undefined
  ) {
    return vm._props[key]
  }
  // call factory function for non-Function types
  // a value is Function if its prototype is function even across different execution context
  return typeof def === 'function' && getType(prop.type) !== 'Function'
    ? def.call(vm)
    : def
}

/**
 * Assert whether a prop is valid.
 */
function assertProp (
  prop,
  name,
  value,
  vm,
  absent
) {
  if (prop.required && absent) {
    warn(
      'Missing required prop: "' + name + '"',
      vm
    );
    return
  }
  if (value == null && !prop.required) {
    return
  }
  var type = prop.type;
  var valid = !type || type === true;
  var expectedTypes = [];
  if (type) {
    if (!Array.isArray(type)) {
      type = [type];
    }
    for (var i = 0; i < type.length && !valid; i++) {
      var assertedType = assertType(value, type[i]);
      expectedTypes.push(assertedType.expectedType || '');
      valid = assertedType.valid;
    }
  }

  if (!valid) {
    warn(
      getInvalidTypeMessage(name, value, expectedTypes),
      vm
    );
    return
  }
  var validator = prop.validator;
  if (validator) {
    if (!validator(value)) {
      warn(
        'Invalid prop: custom validator check failed for prop "' + name + '".',
        vm
      );
    }
  }
}

var simpleCheckRE = /^(String|Number|Boolean|Function|Symbol)$/;

function assertType (value, type) {
  var valid;
  var expectedType = getType(type);
  if (simpleCheckRE.test(expectedType)) {
    var t = typeof value;
    valid = t === expectedType.toLowerCase();
    // for primitive wrapper objects
    if (!valid && t === 'object') {
      valid = value instanceof type;
    }
  } else if (expectedType === 'Object') {
    valid = isPlainObject(value);
  } else if (expectedType === 'Array') {
    valid = Array.isArray(value);
  } else {
    valid = value instanceof type;
  }
  return {
    valid: valid,
    expectedType: expectedType
  }
}

/**
 * Use function string name to check built-in types,
 * because a simple equality check will fail when running
 * across different vms / iframes.
 */
function getType (fn) {
  var match = fn && fn.toString().match(/^\s*function (\w+)/);
  return match ? match[1] : ''
}

function isSameType (a, b) {
  return getType(a) === getType(b)
}

function getTypeIndex (type, expectedTypes) {
  if (!Array.isArray(expectedTypes)) {
    return isSameType(expectedTypes, type) ? 0 : -1
  }
  for (var i = 0, len = expectedTypes.length; i < len; i++) {
    if (isSameType(expectedTypes[i], type)) {
      return i
    }
  }
  return -1
}

function getInvalidTypeMessage (name, value, expectedTypes) {
  var message = "Invalid prop: type check failed for prop \"" + name + "\"." +
    " Expected " + (expectedTypes.map(capitalize).join(', '));
  var expectedType = expectedTypes[0];
  var receivedType = toRawType(value);
  var expectedValue = styleValue(value, expectedType);
  var receivedValue = styleValue(value, receivedType);
  // check if we need to specify expected value
  if (expectedTypes.length === 1 &&
      isExplicable(expectedType) &&
      !isBoolean(expectedType, receivedType)) {
    message += " with value " + expectedValue;
  }
  message += ", got " + receivedType + " ";
  // check if we need to specify received value
  if (isExplicable(receivedType)) {
    message += "with value " + receivedValue + ".";
  }
  return message
}

function styleValue (value, type) {
  if (type === 'String') {
    return ("\"" + value + "\"")
  } else if (type === 'Number') {
    return ("" + (Number(value)))
  } else {
    return ("" + value)
  }
}

function isExplicable (value) {
  var explicitTypes = ['string', 'number', 'boolean'];
  return explicitTypes.some(function (elem) { return value.toLowerCase() === elem; })
}

function isBoolean () {
  var args = [], len = arguments.length;
  while ( len-- ) args[ len ] = arguments[ len ];

  return args.some(function (elem) { return elem.toLowerCase() === 'boolean'; })
}

/*  */

function handleError (err, vm, info) {
  // Deactivate deps tracking while processing error handler to avoid possible infinite rendering.
  // See: https://github.com/vuejs/vuex/issues/1505
  pushTarget();
  try {
    if (vm) {
      var cur = vm;
      while ((cur = cur.$parent)) {
        var hooks = cur.$options.errorCaptured;
        if (hooks) {
          for (var i = 0; i < hooks.length; i++) {
            try {
              var capture = hooks[i].call(cur, err, vm, info) === false;
              if (capture) { return }
            } catch (e) {
              globalHandleError(e, cur, 'errorCaptured hook');
            }
          }
        }
      }
    }
    globalHandleError(err, vm, info);
  } finally {
    popTarget();
  }
}

function invokeWithErrorHandling (
  handler,
  context,
  args,
  vm,
  info
) {
  var res;
  try {
    res = args ? handler.apply(context, args) : handler.call(context);
    if (res && !res._isVue && isPromise(res) && !res._handled) {
      res.catch(function (e) { return handleError(e, vm, info + " (Promise/async)"); });
      // issue #9511
      // avoid catch triggering multiple times when nested calls
      res._handled = true;
    }
  } catch (e) {
    handleError(e, vm, info);
  }
  return res
}

function globalHandleError (err, vm, info) {
  if (config.errorHandler) {
    try {
      return config.errorHandler.call(null, err, vm, info)
    } catch (e) {
      // if the user intentionally throws the original error in the handler,
      // do not log it twice
      if (e !== err) {
        logError(e, null, 'config.errorHandler');
      }
    }
  }
  logError(err, vm, info);
}

function logError (err, vm, info) {
  if (true) {
    warn(("Error in " + info + ": \"" + (err.toString()) + "\""), vm);
  }
  /* istanbul ignore else */
  if ((inBrowser || inWeex) && typeof console !== 'undefined') {
    console.error(err);
  } else {
    throw err
  }
}

/*  */

var callbacks = [];
var pending = false;

function flushCallbacks () {
  pending = false;
  var copies = callbacks.slice(0);
  callbacks.length = 0;
  for (var i = 0; i < copies.length; i++) {
    copies[i]();
  }
}

// Here we have async deferring wrappers using microtasks.
// In 2.5 we used (macro) tasks (in combination with microtasks).
// However, it has subtle problems when state is changed right before repaint
// (e.g. #6813, out-in transitions).
// Also, using (macro) tasks in event handler would cause some weird behaviors
// that cannot be circumvented (e.g. #7109, #7153, #7546, #7834, #8109).
// So we now use microtasks everywhere, again.
// A major drawback of this tradeoff is that there are some scenarios
// where microtasks have too high a priority and fire in between supposedly
// sequential events (e.g. #4521, #6690, which have workarounds)
// or even between bubbling of the same event (#6566).
var timerFunc;

// The nextTick behavior leverages the microtask queue, which can be accessed
// via either native Promise.then or MutationObserver.
// MutationObserver has wider support, however it is seriously bugged in
// UIWebView in iOS >= 9.3.3 when triggered in touch event handlers. It
// completely stops working after triggering a few times... so, if native
// Promise is available, we will use it:
/* istanbul ignore next, $flow-disable-line */
if (typeof Promise !== 'undefined' && isNative(Promise)) {
  var p = Promise.resolve();
  timerFunc = function () {
    p.then(flushCallbacks);
    // In problematic UIWebViews, Promise.then doesn't completely break, but
    // it can get stuck in a weird state where callbacks are pushed into the
    // microtask queue but the queue isn't being flushed, until the browser
    // needs to do some other work, e.g. handle a timer. Therefore we can
    // "force" the microtask queue to be flushed by adding an empty timer.
    if (isIOS) { setTimeout(noop); }
  };
} else if (!isIE && typeof MutationObserver !== 'undefined' && (
  isNative(MutationObserver) ||
  // PhantomJS and iOS 7.x
  MutationObserver.toString() === '[object MutationObserverConstructor]'
)) {
  // Use MutationObserver where native Promise is not available,
  // e.g. PhantomJS, iOS7, Android 4.4
  // (#6466 MutationObserver is unreliable in IE11)
  var counter = 1;
  var observer = new MutationObserver(flushCallbacks);
  var textNode = document.createTextNode(String(counter));
  observer.observe(textNode, {
    characterData: true
  });
  timerFunc = function () {
    counter = (counter + 1) % 2;
    textNode.data = String(counter);
  };
} else if (typeof setImmediate !== 'undefined' && isNative(setImmediate)) {
  // Fallback to setImmediate.
  // Technically it leverages the (macro) task queue,
  // but it is still a better choice than setTimeout.
  timerFunc = function () {
    setImmediate(flushCallbacks);
  };
} else {
  // Fallback to setTimeout.
  timerFunc = function () {
    setTimeout(flushCallbacks, 0);
  };
}

function nextTick (cb, ctx) {
  var _resolve;
  callbacks.push(function () {
    if (cb) {
      try {
        cb.call(ctx);
      } catch (e) {
        handleError(e, ctx, 'nextTick');
      }
    } else if (_resolve) {
      _resolve(ctx);
    }
  });
  if (!pending) {
    pending = true;
    timerFunc();
  }
  // $flow-disable-line
  if (!cb && typeof Promise !== 'undefined') {
    return new Promise(function (resolve) {
      _resolve = resolve;
    })
  }
}

/*  */

/* not type checking this file because flow doesn't play well with Proxy */

var initProxy;

if (true) {
  var allowedGlobals = makeMap(
    'Infinity,undefined,NaN,isFinite,isNaN,' +
    'parseFloat,parseInt,decodeURI,decodeURIComponent,encodeURI,encodeURIComponent,' +
    'Math,Number,Date,Array,Object,Boolean,String,RegExp,Map,Set,JSON,Intl,' +
    'require' // for Webpack/Browserify
  );

  var warnNonPresent = function (target, key) {
    warn(
      "Property or method \"" + key + "\" is not defined on the instance but " +
      'referenced during render. Make sure that this property is reactive, ' +
      'either in the data option, or for class-based components, by ' +
      'initializing the property. ' +
      'See: https://vuejs.org/v2/guide/reactivity.html#Declaring-Reactive-Properties.',
      target
    );
  };

  var warnReservedPrefix = function (target, key) {
    warn(
      "Property \"" + key + "\" must be accessed with \"$data." + key + "\" because " +
      'properties starting with "$" or "_" are not proxied in the Vue instance to ' +
      'prevent conflicts with Vue internals. ' +
      'See: https://vuejs.org/v2/api/#data',
      target
    );
  };

  var hasProxy =
    typeof Proxy !== 'undefined' && isNative(Proxy);

  if (hasProxy) {
    var isBuiltInModifier = makeMap('stop,prevent,self,ctrl,shift,alt,meta,exact');
    config.keyCodes = new Proxy(config.keyCodes, {
      set: function set (target, key, value) {
        if (isBuiltInModifier(key)) {
          warn(("Avoid overwriting built-in modifier in config.keyCodes: ." + key));
          return false
        } else {
          target[key] = value;
          return true
        }
      }
    });
  }

  var hasHandler = {
    has: function has (target, key) {
      var has = key in target;
      var isAllowed = allowedGlobals(key) ||
        (typeof key === 'string' && key.charAt(0) === '_' && !(key in target.$data));
      if (!has && !isAllowed) {
        if (key in target.$data) { warnReservedPrefix(target, key); }
        else { warnNonPresent(target, key); }
      }
      return has || !isAllowed
    }
  };

  var getHandler = {
    get: function get (target, key) {
      if (typeof key === 'string' && !(key in target)) {
        if (key in target.$data) { warnReservedPrefix(target, key); }
        else { warnNonPresent(target, key); }
      }
      return target[key]
    }
  };

  initProxy = function initProxy (vm) {
    if (hasProxy) {
      // determine which proxy handler to use
      var options = vm.$options;
      var handlers = options.render && options.render._withStripped
        ? getHandler
        : hasHandler;
      vm._renderProxy = new Proxy(vm, handlers);
    } else {
      vm._renderProxy = vm;
    }
  };
}

/*  */

var seenObjects = new _Set();

/**
 * Recursively traverse an object to evoke all converted
 * getters, so that every nested property inside the object
 * is collected as a "deep" dependency.
 */
function traverse (val) {
  _traverse(val, seenObjects);
  seenObjects.clear();
}

function _traverse (val, seen) {
  var i, keys;
  var isA = Array.isArray(val);
  if ((!isA && !isObject(val)) || Object.isFrozen(val) || val instanceof VNode) {
    return
  }
  if (val.__ob__) {
    var depId = val.__ob__.dep.id;
    if (seen.has(depId)) {
      return
    }
    seen.add(depId);
  }
  if (isA) {
    i = val.length;
    while (i--) { _traverse(val[i], seen); }
  } else {
    keys = Object.keys(val);
    i = keys.length;
    while (i--) { _traverse(val[keys[i]], seen); }
  }
}

var mark;
var measure;

if (true) {
  var perf = inBrowser && window.performance;
  /* istanbul ignore if */
  if (
    perf &&
    perf.mark &&
    perf.measure &&
    perf.clearMarks &&
    perf.clearMeasures
  ) {
    mark = function (tag) { return perf.mark(tag); };
    measure = function (name, startTag, endTag) {
      perf.measure(name, startTag, endTag);
      perf.clearMarks(startTag);
      perf.clearMarks(endTag);
      // perf.clearMeasures(name)
    };
  }
}

/*  */

var normalizeEvent = cached(function (name) {
  var passive = name.charAt(0) === '&';
  name = passive ? name.slice(1) : name;
  var once$$1 = name.charAt(0) === '~'; // Prefixed last, checked first
  name = once$$1 ? name.slice(1) : name;
  var capture = name.charAt(0) === '!';
  name = capture ? name.slice(1) : name;
  return {
    name: name,
    once: once$$1,
    capture: capture,
    passive: passive
  }
});

function createFnInvoker (fns, vm) {
  function invoker () {
    var arguments$1 = arguments;

    var fns = invoker.fns;
    if (Array.isArray(fns)) {
      var cloned = fns.slice();
      for (var i = 0; i < cloned.length; i++) {
        invokeWithErrorHandling(cloned[i], null, arguments$1, vm, "v-on handler");
      }
    } else {
      // return handler return value for single handlers
      return invokeWithErrorHandling(fns, null, arguments, vm, "v-on handler")
    }
  }
  invoker.fns = fns;
  return invoker
}

function updateListeners (
  on,
  oldOn,
  add,
  remove$$1,
  createOnceHandler,
  vm
) {
  var name, def$$1, cur, old, event;
  for (name in on) {
    def$$1 = cur = on[name];
    old = oldOn[name];
    event = normalizeEvent(name);
    if (isUndef(cur)) {
       true && warn(
        "Invalid handler for event \"" + (event.name) + "\": got " + String(cur),
        vm
      );
    } else if (isUndef(old)) {
      if (isUndef(cur.fns)) {
        cur = on[name] = createFnInvoker(cur, vm);
      }
      if (isTrue(event.once)) {
        cur = on[name] = createOnceHandler(event.name, cur, event.capture);
      }
      add(event.name, cur, event.capture, event.passive, event.params);
    } else if (cur !== old) {
      old.fns = cur;
      on[name] = old;
    }
  }
  for (name in oldOn) {
    if (isUndef(on[name])) {
      event = normalizeEvent(name);
      remove$$1(event.name, oldOn[name], event.capture);
    }
  }
}

/*  */

/*  */

// fixed by xxxxxx (mp properties)
function extractPropertiesFromVNodeData(data, Ctor, res, context) {
  var propOptions = Ctor.options.mpOptions && Ctor.options.mpOptions.properties;
  if (isUndef(propOptions)) {
    return res
  }
  var externalClasses = Ctor.options.mpOptions.externalClasses || [];
  var attrs = data.attrs;
  var props = data.props;
  if (isDef(attrs) || isDef(props)) {
    for (var key in propOptions) {
      var altKey = hyphenate(key);
      var result = checkProp(res, props, key, altKey, true) ||
          checkProp(res, attrs, key, altKey, false);
      // externalClass
      if (
        result &&
        res[key] &&
        externalClasses.indexOf(altKey) !== -1 &&
        context[camelize(res[key])]
      ) {
        // 赋值 externalClass 真正的值(模板里 externalClass 的值可能是字符串)
        res[key] = context[camelize(res[key])];
      }
    }
  }
  return res
}

function extractPropsFromVNodeData (
  data,
  Ctor,
  tag,
  context// fixed by xxxxxx
) {
  // we are only extracting raw values here.
  // validation and default values are handled in the child
  // component itself.
  var propOptions = Ctor.options.props;
  if (isUndef(propOptions)) {
    // fixed by xxxxxx
    return extractPropertiesFromVNodeData(data, Ctor, {}, context)
  }
  var res = {};
  var attrs = data.attrs;
  var props = data.props;
  if (isDef(attrs) || isDef(props)) {
    for (var key in propOptions) {
      var altKey = hyphenate(key);
      if (true) {
        var keyInLowerCase = key.toLowerCase();
        if (
          key !== keyInLowerCase &&
          attrs && hasOwn(attrs, keyInLowerCase)
        ) {
          tip(
            "Prop \"" + keyInLowerCase + "\" is passed to component " +
            (formatComponentName(tag || Ctor)) + ", but the declared prop name is" +
            " \"" + key + "\". " +
            "Note that HTML attributes are case-insensitive and camelCased " +
            "props need to use their kebab-case equivalents when using in-DOM " +
            "templates. You should probably use \"" + altKey + "\" instead of \"" + key + "\"."
          );
        }
      }
      checkProp(res, props, key, altKey, true) ||
      checkProp(res, attrs, key, altKey, false);
    }
  }
  // fixed by xxxxxx
  return extractPropertiesFromVNodeData(data, Ctor, res, context)
}

function checkProp (
  res,
  hash,
  key,
  altKey,
  preserve
) {
  if (isDef(hash)) {
    if (hasOwn(hash, key)) {
      res[key] = hash[key];
      if (!preserve) {
        delete hash[key];
      }
      return true
    } else if (hasOwn(hash, altKey)) {
      res[key] = hash[altKey];
      if (!preserve) {
        delete hash[altKey];
      }
      return true
    }
  }
  return false
}

/*  */

// The template compiler attempts to minimize the need for normalization by
// statically analyzing the template at compile time.
//
// For plain HTML markup, normalization can be completely skipped because the
// generated render function is guaranteed to return Array<VNode>. There are
// two cases where extra normalization is needed:

// 1. When the children contains components - because a functional component
// may return an Array instead of a single root. In this case, just a simple
// normalization is needed - if any child is an Array, we flatten the whole
// thing with Array.prototype.concat. It is guaranteed to be only 1-level deep
// because functional components already normalize their own children.
function simpleNormalizeChildren (children) {
  for (var i = 0; i < children.length; i++) {
    if (Array.isArray(children[i])) {
      return Array.prototype.concat.apply([], children)
    }
  }
  return children
}

// 2. When the children contains constructs that always generated nested Arrays,
// e.g. <template>, <slot>, v-for, or when the children is provided by user
// with hand-written render functions / JSX. In such cases a full normalization
// is needed to cater to all possible types of children values.
function normalizeChildren (children) {
  return isPrimitive(children)
    ? [createTextVNode(children)]
    : Array.isArray(children)
      ? normalizeArrayChildren(children)
      : undefined
}

function isTextNode (node) {
  return isDef(node) && isDef(node.text) && isFalse(node.isComment)
}

function normalizeArrayChildren (children, nestedIndex) {
  var res = [];
  var i, c, lastIndex, last;
  for (i = 0; i < children.length; i++) {
    c = children[i];
    if (isUndef(c) || typeof c === 'boolean') { continue }
    lastIndex = res.length - 1;
    last = res[lastIndex];
    //  nested
    if (Array.isArray(c)) {
      if (c.length > 0) {
        c = normalizeArrayChildren(c, ((nestedIndex || '') + "_" + i));
        // merge adjacent text nodes
        if (isTextNode(c[0]) && isTextNode(last)) {
          res[lastIndex] = createTextVNode(last.text + (c[0]).text);
          c.shift();
        }
        res.push.apply(res, c);
      }
    } else if (isPrimitive(c)) {
      if (isTextNode(last)) {
        // merge adjacent text nodes
        // this is necessary for SSR hydration because text nodes are
        // essentially merged when rendered to HTML strings
        res[lastIndex] = createTextVNode(last.text + c);
      } else if (c !== '') {
        // convert primitive to vnode
        res.push(createTextVNode(c));
      }
    } else {
      if (isTextNode(c) && isTextNode(last)) {
        // merge adjacent text nodes
        res[lastIndex] = createTextVNode(last.text + c.text);
      } else {
        // default key for nested array children (likely generated by v-for)
        if (isTrue(children._isVList) &&
          isDef(c.tag) &&
          isUndef(c.key) &&
          isDef(nestedIndex)) {
          c.key = "__vlist" + nestedIndex + "_" + i + "__";
        }
        res.push(c);
      }
    }
  }
  return res
}

/*  */

function initProvide (vm) {
  var provide = vm.$options.provide;
  if (provide) {
    vm._provided = typeof provide === 'function'
      ? provide.call(vm)
      : provide;
  }
}

function initInjections (vm) {
  var result = resolveInject(vm.$options.inject, vm);
  if (result) {
    toggleObserving(false);
    Object.keys(result).forEach(function (key) {
      /* istanbul ignore else */
      if (true) {
        defineReactive$$1(vm, key, result[key], function () {
          warn(
            "Avoid mutating an injected value directly since the changes will be " +
            "overwritten whenever the provided component re-renders. " +
            "injection being mutated: \"" + key + "\"",
            vm
          );
        });
      } else {}
    });
    toggleObserving(true);
  }
}

function resolveInject (inject, vm) {
  if (inject) {
    // inject is :any because flow is not smart enough to figure out cached
    var result = Object.create(null);
    var keys = hasSymbol
      ? Reflect.ownKeys(inject)
      : Object.keys(inject);

    for (var i = 0; i < keys.length; i++) {
      var key = keys[i];
      // #6574 in case the inject object is observed...
      if (key === '__ob__') { continue }
      var provideKey = inject[key].from;
      var source = vm;
      while (source) {
        if (source._provided && hasOwn(source._provided, provideKey)) {
          result[key] = source._provided[provideKey];
          break
        }
        source = source.$parent;
      }
      if (!source) {
        if ('default' in inject[key]) {
          var provideDefault = inject[key].default;
          result[key] = typeof provideDefault === 'function'
            ? provideDefault.call(vm)
            : provideDefault;
        } else if (true) {
          warn(("Injection \"" + key + "\" not found"), vm);
        }
      }
    }
    return result
  }
}

/*  */



/**
 * Runtime helper for resolving raw children VNodes into a slot object.
 */
function resolveSlots (
  children,
  context
) {
  if (!children || !children.length) {
    return {}
  }
  var slots = {};
  for (var i = 0, l = children.length; i < l; i++) {
    var child = children[i];
    var data = child.data;
    // remove slot attribute if the node is resolved as a Vue slot node
    if (data && data.attrs && data.attrs.slot) {
      delete data.attrs.slot;
    }
    // named slots should only be respected if the vnode was rendered in the
    // same context.
    if ((child.context === context || child.fnContext === context) &&
      data && data.slot != null
    ) {
      var name = data.slot;
      var slot = (slots[name] || (slots[name] = []));
      if (child.tag === 'template') {
        slot.push.apply(slot, child.children || []);
      } else {
        slot.push(child);
      }
    } else {
      // fixed by xxxxxx 临时 hack 掉 uni-app 中的异步 name slot page
      if(child.asyncMeta && child.asyncMeta.data && child.asyncMeta.data.slot === 'page'){
        (slots['page'] || (slots['page'] = [])).push(child);
      }else{
        (slots.default || (slots.default = [])).push(child);
      }
    }
  }
  // ignore slots that contains only whitespace
  for (var name$1 in slots) {
    if (slots[name$1].every(isWhitespace)) {
      delete slots[name$1];
    }
  }
  return slots
}

function isWhitespace (node) {
  return (node.isComment && !node.asyncFactory) || node.text === ' '
}

/*  */

function normalizeScopedSlots (
  slots,
  normalSlots,
  prevSlots
) {
  var res;
  var hasNormalSlots = Object.keys(normalSlots).length > 0;
  var isStable = slots ? !!slots.$stable : !hasNormalSlots;
  var key = slots && slots.$key;
  if (!slots) {
    res = {};
  } else if (slots._normalized) {
    // fast path 1: child component re-render only, parent did not change
    return slots._normalized
  } else if (
    isStable &&
    prevSlots &&
    prevSlots !== emptyObject &&
    key === prevSlots.$key &&
    !hasNormalSlots &&
    !prevSlots.$hasNormal
  ) {
    // fast path 2: stable scoped slots w/ no normal slots to proxy,
    // only need to normalize once
    return prevSlots
  } else {
    res = {};
    for (var key$1 in slots) {
      if (slots[key$1] && key$1[0] !== '$') {
        res[key$1] = normalizeScopedSlot(normalSlots, key$1, slots[key$1]);
      }
    }
  }
  // expose normal slots on scopedSlots
  for (var key$2 in normalSlots) {
    if (!(key$2 in res)) {
      res[key$2] = proxyNormalSlot(normalSlots, key$2);
    }
  }
  // avoriaz seems to mock a non-extensible $scopedSlots object
  // and when that is passed down this would cause an error
  if (slots && Object.isExtensible(slots)) {
    (slots)._normalized = res;
  }
  def(res, '$stable', isStable);
  def(res, '$key', key);
  def(res, '$hasNormal', hasNormalSlots);
  return res
}

function normalizeScopedSlot(normalSlots, key, fn) {
  var normalized = function () {
    var res = arguments.length ? fn.apply(null, arguments) : fn({});
    res = res && typeof res === 'object' && !Array.isArray(res)
      ? [res] // single vnode
      : normalizeChildren(res);
    return res && (
      res.length === 0 ||
      (res.length === 1 && res[0].isComment) // #9658
    ) ? undefined
      : res
  };
  // this is a slot using the new v-slot syntax without scope. although it is
  // compiled as a scoped slot, render fn users would expect it to be present
  // on this.$slots because the usage is semantically a normal slot.
  if (fn.proxy) {
    Object.defineProperty(normalSlots, key, {
      get: normalized,
      enumerable: true,
      configurable: true
    });
  }
  return normalized
}

function proxyNormalSlot(slots, key) {
  return function () { return slots[key]; }
}

/*  */

/**
 * Runtime helper for rendering v-for lists.
 */
function renderList (
  val,
  render
) {
  var ret, i, l, keys, key;
  if (Array.isArray(val) || typeof val === 'string') {
    ret = new Array(val.length);
    for (i = 0, l = val.length; i < l; i++) {
      ret[i] = render(val[i], i, i, i); // fixed by xxxxxx
    }
  } else if (typeof val === 'number') {
    ret = new Array(val);
    for (i = 0; i < val; i++) {
      ret[i] = render(i + 1, i, i, i); // fixed by xxxxxx
    }
  } else if (isObject(val)) {
    if (hasSymbol && val[Symbol.iterator]) {
      ret = [];
      var iterator = val[Symbol.iterator]();
      var result = iterator.next();
      while (!result.done) {
        ret.push(render(result.value, ret.length, i, i++)); // fixed by xxxxxx
        result = iterator.next();
      }
    } else {
      keys = Object.keys(val);
      ret = new Array(keys.length);
      for (i = 0, l = keys.length; i < l; i++) {
        key = keys[i];
        ret[i] = render(val[key], key, i, i); // fixed by xxxxxx
      }
    }
  }
  if (!isDef(ret)) {
    ret = [];
  }
  (ret)._isVList = true;
  return ret
}

/*  */

/**
 * Runtime helper for rendering <slot>
 */
function renderSlot (
  name,
  fallback,
  props,
  bindObject
) {
  var scopedSlotFn = this.$scopedSlots[name];
  var nodes;
  if (scopedSlotFn) { // scoped slot
    props = props || {};
    if (bindObject) {
      if ( true && !isObject(bindObject)) {
        warn(
          'slot v-bind without argument expects an Object',
          this
        );
      }
      props = extend(extend({}, bindObject), props);
    }
    // fixed by xxxxxx app-plus scopedSlot
    nodes = scopedSlotFn(props, this, props._i) || fallback;
  } else {
    nodes = this.$slots[name] || fallback;
  }

  var target = props && props.slot;
  if (target) {
    return this.$createElement('template', { slot: target }, nodes)
  } else {
    return nodes
  }
}

/*  */

/**
 * Runtime helper for resolving filters
 */
function resolveFilter (id) {
  return resolveAsset(this.$options, 'filters', id, true) || identity
}

/*  */

function isKeyNotMatch (expect, actual) {
  if (Array.isArray(expect)) {
    return expect.indexOf(actual) === -1
  } else {
    return expect !== actual
  }
}

/**
 * Runtime helper for checking keyCodes from config.
 * exposed as Vue.prototype._k
 * passing in eventKeyName as last argument separately for backwards compat
 */
function checkKeyCodes (
  eventKeyCode,
  key,
  builtInKeyCode,
  eventKeyName,
  builtInKeyName
) {
  var mappedKeyCode = config.keyCodes[key] || builtInKeyCode;
  if (builtInKeyName && eventKeyName && !config.keyCodes[key]) {
    return isKeyNotMatch(builtInKeyName, eventKeyName)
  } else if (mappedKeyCode) {
    return isKeyNotMatch(mappedKeyCode, eventKeyCode)
  } else if (eventKeyName) {
    return hyphenate(eventKeyName) !== key
  }
}

/*  */

/**
 * Runtime helper for merging v-bind="object" into a VNode's data.
 */
function bindObjectProps (
  data,
  tag,
  value,
  asProp,
  isSync
) {
  if (value) {
    if (!isObject(value)) {
       true && warn(
        'v-bind without argument expects an Object or Array value',
        this
      );
    } else {
      if (Array.isArray(value)) {
        value = toObject(value);
      }
      var hash;
      var loop = function ( key ) {
        if (
          key === 'class' ||
          key === 'style' ||
          isReservedAttribute(key)
        ) {
          hash = data;
        } else {
          var type = data.attrs && data.attrs.type;
          hash = asProp || config.mustUseProp(tag, type, key)
            ? data.domProps || (data.domProps = {})
            : data.attrs || (data.attrs = {});
        }
        var camelizedKey = camelize(key);
        var hyphenatedKey = hyphenate(key);
        if (!(camelizedKey in hash) && !(hyphenatedKey in hash)) {
          hash[key] = value[key];

          if (isSync) {
            var on = data.on || (data.on = {});
            on[("update:" + key)] = function ($event) {
              value[key] = $event;
            };
          }
        }
      };

      for (var key in value) loop( key );
    }
  }
  return data
}

/*  */

/**
 * Runtime helper for rendering static trees.
 */
function renderStatic (
  index,
  isInFor
) {
  var cached = this._staticTrees || (this._staticTrees = []);
  var tree = cached[index];
  // if has already-rendered static tree and not inside v-for,
  // we can reuse the same tree.
  if (tree && !isInFor) {
    return tree
  }
  // otherwise, render a fresh tree.
  tree = cached[index] = this.$options.staticRenderFns[index].call(
    this._renderProxy,
    null,
    this // for render fns generated for functional component templates
  );
  markStatic(tree, ("__static__" + index), false);
  return tree
}

/**
 * Runtime helper for v-once.
 * Effectively it means marking the node as static with a unique key.
 */
function markOnce (
  tree,
  index,
  key
) {
  markStatic(tree, ("__once__" + index + (key ? ("_" + key) : "")), true);
  return tree
}

function markStatic (
  tree,
  key,
  isOnce
) {
  if (Array.isArray(tree)) {
    for (var i = 0; i < tree.length; i++) {
      if (tree[i] && typeof tree[i] !== 'string') {
        markStaticNode(tree[i], (key + "_" + i), isOnce);
      }
    }
  } else {
    markStaticNode(tree, key, isOnce);
  }
}

function markStaticNode (node, key, isOnce) {
  node.isStatic = true;
  node.key = key;
  node.isOnce = isOnce;
}

/*  */

function bindObjectListeners (data, value) {
  if (value) {
    if (!isPlainObject(value)) {
       true && warn(
        'v-on without argument expects an Object value',
        this
      );
    } else {
      var on = data.on = data.on ? extend({}, data.on) : {};
      for (var key in value) {
        var existing = on[key];
        var ours = value[key];
        on[key] = existing ? [].concat(existing, ours) : ours;
      }
    }
  }
  return data
}

/*  */

function resolveScopedSlots (
  fns, // see flow/vnode
  res,
  // the following are added in 2.6
  hasDynamicKeys,
  contentHashKey
) {
  res = res || { $stable: !hasDynamicKeys };
  for (var i = 0; i < fns.length; i++) {
    var slot = fns[i];
    if (Array.isArray(slot)) {
      resolveScopedSlots(slot, res, hasDynamicKeys);
    } else if (slot) {
      // marker for reverse proxying v-slot without scope on this.$slots
      if (slot.proxy) {
        slot.fn.proxy = true;
      }
      res[slot.key] = slot.fn;
    }
  }
  if (contentHashKey) {
    (res).$key = contentHashKey;
  }
  return res
}

/*  */

function bindDynamicKeys (baseObj, values) {
  for (var i = 0; i < values.length; i += 2) {
    var key = values[i];
    if (typeof key === 'string' && key) {
      baseObj[values[i]] = values[i + 1];
    } else if ( true && key !== '' && key !== null) {
      // null is a special value for explicitly removing a binding
      warn(
        ("Invalid value for dynamic directive argument (expected string or null): " + key),
        this
      );
    }
  }
  return baseObj
}

// helper to dynamically append modifier runtime markers to event names.
// ensure only append when value is already string, otherwise it will be cast
// to string and cause the type check to miss.
function prependModifier (value, symbol) {
  return typeof value === 'string' ? symbol + value : value
}

/*  */

function installRenderHelpers (target) {
  target._o = markOnce;
  target._n = toNumber;
  target._s = toString;
  target._l = renderList;
  target._t = renderSlot;
  target._q = looseEqual;
  target._i = looseIndexOf;
  target._m = renderStatic;
  target._f = resolveFilter;
  target._k = checkKeyCodes;
  target._b = bindObjectProps;
  target._v = createTextVNode;
  target._e = createEmptyVNode;
  target._u = resolveScopedSlots;
  target._g = bindObjectListeners;
  target._d = bindDynamicKeys;
  target._p = prependModifier;
}

/*  */

function FunctionalRenderContext (
  data,
  props,
  children,
  parent,
  Ctor
) {
  var this$1 = this;

  var options = Ctor.options;
  // ensure the createElement function in functional components
  // gets a unique context - this is necessary for correct named slot check
  var contextVm;
  if (hasOwn(parent, '_uid')) {
    contextVm = Object.create(parent);
    // $flow-disable-line
    contextVm._original = parent;
  } else {
    // the context vm passed in is a functional context as well.
    // in this case we want to make sure we are able to get a hold to the
    // real context instance.
    contextVm = parent;
    // $flow-disable-line
    parent = parent._original;
  }
  var isCompiled = isTrue(options._compiled);
  var needNormalization = !isCompiled;

  this.data = data;
  this.props = props;
  this.children = children;
  this.parent = parent;
  this.listeners = data.on || emptyObject;
  this.injections = resolveInject(options.inject, parent);
  this.slots = function () {
    if (!this$1.$slots) {
      normalizeScopedSlots(
        data.scopedSlots,
        this$1.$slots = resolveSlots(children, parent)
      );
    }
    return this$1.$slots
  };

  Object.defineProperty(this, 'scopedSlots', ({
    enumerable: true,
    get: function get () {
      return normalizeScopedSlots(data.scopedSlots, this.slots())
    }
  }));

  // support for compiled functional template
  if (isCompiled) {
    // exposing $options for renderStatic()
    this.$options = options;
    // pre-resolve slots for renderSlot()
    this.$slots = this.slots();
    this.$scopedSlots = normalizeScopedSlots(data.scopedSlots, this.$slots);
  }

  if (options._scopeId) {
    this._c = function (a, b, c, d) {
      var vnode = createElement(contextVm, a, b, c, d, needNormalization);
      if (vnode && !Array.isArray(vnode)) {
        vnode.fnScopeId = options._scopeId;
        vnode.fnContext = parent;
      }
      return vnode
    };
  } else {
    this._c = function (a, b, c, d) { return createElement(contextVm, a, b, c, d, needNormalization); };
  }
}

installRenderHelpers(FunctionalRenderContext.prototype);

function createFunctionalComponent (
  Ctor,
  propsData,
  data,
  contextVm,
  children
) {
  var options = Ctor.options;
  var props = {};
  var propOptions = options.props;
  if (isDef(propOptions)) {
    for (var key in propOptions) {
      props[key] = validateProp(key, propOptions, propsData || emptyObject);
    }
  } else {
    if (isDef(data.attrs)) { mergeProps(props, data.attrs); }
    if (isDef(data.props)) { mergeProps(props, data.props); }
  }

  var renderContext = new FunctionalRenderContext(
    data,
    props,
    children,
    contextVm,
    Ctor
  );

  var vnode = options.render.call(null, renderContext._c, renderContext);

  if (vnode instanceof VNode) {
    return cloneAndMarkFunctionalResult(vnode, data, renderContext.parent, options, renderContext)
  } else if (Array.isArray(vnode)) {
    var vnodes = normalizeChildren(vnode) || [];
    var res = new Array(vnodes.length);
    for (var i = 0; i < vnodes.length; i++) {
      res[i] = cloneAndMarkFunctionalResult(vnodes[i], data, renderContext.parent, options, renderContext);
    }
    return res
  }
}

function cloneAndMarkFunctionalResult (vnode, data, contextVm, options, renderContext) {
  // #7817 clone node before setting fnContext, otherwise if the node is reused
  // (e.g. it was from a cached normal slot) the fnContext causes named slots
  // that should not be matched to match.
  var clone = cloneVNode(vnode);
  clone.fnContext = contextVm;
  clone.fnOptions = options;
  if (true) {
    (clone.devtoolsMeta = clone.devtoolsMeta || {}).renderContext = renderContext;
  }
  if (data.slot) {
    (clone.data || (clone.data = {})).slot = data.slot;
  }
  return clone
}

function mergeProps (to, from) {
  for (var key in from) {
    to[camelize(key)] = from[key];
  }
}

/*  */

/*  */

/*  */

/*  */

// inline hooks to be invoked on component VNodes during patch
var componentVNodeHooks = {
  init: function init (vnode, hydrating) {
    if (
      vnode.componentInstance &&
      !vnode.componentInstance._isDestroyed &&
      vnode.data.keepAlive
    ) {
      // kept-alive components, treat as a patch
      var mountedNode = vnode; // work around flow
      componentVNodeHooks.prepatch(mountedNode, mountedNode);
    } else {
      var child = vnode.componentInstance = createComponentInstanceForVnode(
        vnode,
        activeInstance
      );
      child.$mount(hydrating ? vnode.elm : undefined, hydrating);
    }
  },

  prepatch: function prepatch (oldVnode, vnode) {
    var options = vnode.componentOptions;
    var child = vnode.componentInstance = oldVnode.componentInstance;
    updateChildComponent(
      child,
      options.propsData, // updated props
      options.listeners, // updated listeners
      vnode, // new parent vnode
      options.children // new children
    );
  },

  insert: function insert (vnode) {
    var context = vnode.context;
    var componentInstance = vnode.componentInstance;
    if (!componentInstance._isMounted) {
      callHook(componentInstance, 'onServiceCreated');
      callHook(componentInstance, 'onServiceAttached');
      componentInstance._isMounted = true;
      callHook(componentInstance, 'mounted');
    }
    if (vnode.data.keepAlive) {
      if (context._isMounted) {
        // vue-router#1212
        // During updates, a kept-alive component's child components may
        // change, so directly walking the tree here may call activated hooks
        // on incorrect children. Instead we push them into a queue which will
        // be processed after the whole patch process ended.
        queueActivatedComponent(componentInstance);
      } else {
        activateChildComponent(componentInstance, true /* direct */);
      }
    }
  },

  destroy: function destroy (vnode) {
    var componentInstance = vnode.componentInstance;
    if (!componentInstance._isDestroyed) {
      if (!vnode.data.keepAlive) {
        componentInstance.$destroy();
      } else {
        deactivateChildComponent(componentInstance, true /* direct */);
      }
    }
  }
};

var hooksToMerge = Object.keys(componentVNodeHooks);

function createComponent (
  Ctor,
  data,
  context,
  children,
  tag
) {
  if (isUndef(Ctor)) {
    return
  }

  var baseCtor = context.$options._base;

  // plain options object: turn it into a constructor
  if (isObject(Ctor)) {
    Ctor = baseCtor.extend(Ctor);
  }

  // if at this stage it's not a constructor or an async component factory,
  // reject.
  if (typeof Ctor !== 'function') {
    if (true) {
      warn(("Invalid Component definition: " + (String(Ctor))), context);
    }
    return
  }

  // async component
  var asyncFactory;
  if (isUndef(Ctor.cid)) {
    asyncFactory = Ctor;
    Ctor = resolveAsyncComponent(asyncFactory, baseCtor);
    if (Ctor === undefined) {
      // return a placeholder node for async component, which is rendered
      // as a comment node but preserves all the raw information for the node.
      // the information will be used for async server-rendering and hydration.
      return createAsyncPlaceholder(
        asyncFactory,
        data,
        context,
        children,
        tag
      )
    }
  }

  data = data || {};

  // resolve constructor options in case global mixins are applied after
  // component constructor creation
  resolveConstructorOptions(Ctor);

  // transform component v-model data into props & events
  if (isDef(data.model)) {
    transformModel(Ctor.options, data);
  }

  // extract props
  var propsData = extractPropsFromVNodeData(data, Ctor, tag, context); // fixed by xxxxxx

  // functional component
  if (isTrue(Ctor.options.functional)) {
    return createFunctionalComponent(Ctor, propsData, data, context, children)
  }

  // extract listeners, since these needs to be treated as
  // child component listeners instead of DOM listeners
  var listeners = data.on;
  // replace with listeners with .native modifier
  // so it gets processed during parent component patch.
  data.on = data.nativeOn;

  if (isTrue(Ctor.options.abstract)) {
    // abstract components do not keep anything
    // other than props & listeners & slot

    // work around flow
    var slot = data.slot;
    data = {};
    if (slot) {
      data.slot = slot;
    }
  }

  // install component management hooks onto the placeholder node
  installComponentHooks(data);

  // return a placeholder vnode
  var name = Ctor.options.name || tag;
  var vnode = new VNode(
    ("vue-component-" + (Ctor.cid) + (name ? ("-" + name) : '')),
    data, undefined, undefined, undefined, context,
    { Ctor: Ctor, propsData: propsData, listeners: listeners, tag: tag, children: children },
    asyncFactory
  );

  return vnode
}

function createComponentInstanceForVnode (
  vnode, // we know it's MountedComponentVNode but flow doesn't
  parent // activeInstance in lifecycle state
) {
  var options = {
    _isComponent: true,
    _parentVnode: vnode,
    parent: parent
  };
  // check inline-template render functions
  var inlineTemplate = vnode.data.inlineTemplate;
  if (isDef(inlineTemplate)) {
    options.render = inlineTemplate.render;
    options.staticRenderFns = inlineTemplate.staticRenderFns;
  }
  return new vnode.componentOptions.Ctor(options)
}

function installComponentHooks (data) {
  var hooks = data.hook || (data.hook = {});
  for (var i = 0; i < hooksToMerge.length; i++) {
    var key = hooksToMerge[i];
    var existing = hooks[key];
    var toMerge = componentVNodeHooks[key];
    if (existing !== toMerge && !(existing && existing._merged)) {
      hooks[key] = existing ? mergeHook$1(toMerge, existing) : toMerge;
    }
  }
}

function mergeHook$1 (f1, f2) {
  var merged = function (a, b) {
    // flow complains about extra args which is why we use any
    f1(a, b);
    f2(a, b);
  };
  merged._merged = true;
  return merged
}

// transform component v-model info (value and callback) into
// prop and event handler respectively.
function transformModel (options, data) {
  var prop = (options.model && options.model.prop) || 'value';
  var event = (options.model && options.model.event) || 'input'
  ;(data.attrs || (data.attrs = {}))[prop] = data.model.value;
  var on = data.on || (data.on = {});
  var existing = on[event];
  var callback = data.model.callback;
  if (isDef(existing)) {
    if (
      Array.isArray(existing)
        ? existing.indexOf(callback) === -1
        : existing !== callback
    ) {
      on[event] = [callback].concat(existing);
    }
  } else {
    on[event] = callback;
  }
}

/*  */

var SIMPLE_NORMALIZE = 1;
var ALWAYS_NORMALIZE = 2;

// wrapper function for providing a more flexible interface
// without getting yelled at by flow
function createElement (
  context,
  tag,
  data,
  children,
  normalizationType,
  alwaysNormalize
) {
  if (Array.isArray(data) || isPrimitive(data)) {
    normalizationType = children;
    children = data;
    data = undefined;
  }
  if (isTrue(alwaysNormalize)) {
    normalizationType = ALWAYS_NORMALIZE;
  }
  return _createElement(context, tag, data, children, normalizationType)
}

function _createElement (
  context,
  tag,
  data,
  children,
  normalizationType
) {
  if (isDef(data) && isDef((data).__ob__)) {
     true && warn(
      "Avoid using observed data object as vnode data: " + (JSON.stringify(data)) + "\n" +
      'Always create fresh vnode data objects in each render!',
      context
    );
    return createEmptyVNode()
  }
  // object syntax in v-bind
  if (isDef(data) && isDef(data.is)) {
    tag = data.is;
  }
  if (!tag) {
    // in case of component :is set to falsy value
    return createEmptyVNode()
  }
  // warn against non-primitive key
  if ( true &&
    isDef(data) && isDef(data.key) && !isPrimitive(data.key)
  ) {
    {
      warn(
        'Avoid using non-primitive value as key, ' +
        'use string/number value instead.',
        context
      );
    }
  }
  // support single function children as default scoped slot
  if (Array.isArray(children) &&
    typeof children[0] === 'function'
  ) {
    data = data || {};
    data.scopedSlots = { default: children[0] };
    children.length = 0;
  }
  if (normalizationType === ALWAYS_NORMALIZE) {
    children = normalizeChildren(children);
  } else if (normalizationType === SIMPLE_NORMALIZE) {
    children = simpleNormalizeChildren(children);
  }
  var vnode, ns;
  if (typeof tag === 'string') {
    var Ctor;
    ns = (context.$vnode && context.$vnode.ns) || config.getTagNamespace(tag);
    if (config.isReservedTag(tag)) {
      // platform built-in elements
      if ( true && isDef(data) && isDef(data.nativeOn)) {
        warn(
          ("The .native modifier for v-on is only valid on components but it was used on <" + tag + ">."),
          context
        );
      }
      vnode = new VNode(
        config.parsePlatformTagName(tag), data, children,
        undefined, undefined, context
      );
    } else if ((!data || !data.pre) && isDef(Ctor = resolveAsset(context.$options, 'components', tag))) {
      // component
      vnode = createComponent(Ctor, data, context, children, tag);
    } else {
      // unknown or unlisted namespaced elements
      // check at runtime because it may get assigned a namespace when its
      // parent normalizes children
      vnode = new VNode(
        tag, data, children,
        undefined, undefined, context
      );
    }
  } else {
    // direct component options / constructor
    vnode = createComponent(tag, data, context, children);
  }
  if (Array.isArray(vnode)) {
    return vnode
  } else if (isDef(vnode)) {
    if (isDef(ns)) { applyNS(vnode, ns); }
    if (isDef(data)) { registerDeepBindings(data); }
    return vnode
  } else {
    return createEmptyVNode()
  }
}

function applyNS (vnode, ns, force) {
  vnode.ns = ns;
  if (vnode.tag === 'foreignObject') {
    // use default namespace inside foreignObject
    ns = undefined;
    force = true;
  }
  if (isDef(vnode.children)) {
    for (var i = 0, l = vnode.children.length; i < l; i++) {
      var child = vnode.children[i];
      if (isDef(child.tag) && (
        isUndef(child.ns) || (isTrue(force) && child.tag !== 'svg'))) {
        applyNS(child, ns, force);
      }
    }
  }
}

// ref #5318
// necessary to ensure parent re-render when deep bindings like :style and
// :class are used on slot nodes
function registerDeepBindings (data) {
  if (isObject(data.style)) {
    traverse(data.style);
  }
  if (isObject(data.class)) {
    traverse(data.class);
  }
}

/*  */

function initRender (vm) {
  vm._vnode = null; // the root of the child tree
  vm._staticTrees = null; // v-once cached trees
  var options = vm.$options;
  var parentVnode = vm.$vnode = options._parentVnode; // the placeholder node in parent tree
  var renderContext = parentVnode && parentVnode.context;
  vm.$slots = resolveSlots(options._renderChildren, renderContext);
  vm.$scopedSlots = emptyObject;
  // bind the createElement fn to this instance
  // so that we get proper render context inside it.
  // args order: tag, data, children, normalizationType, alwaysNormalize
  // internal version is used by render functions compiled from templates
  vm._c = function (a, b, c, d) { return createElement(vm, a, b, c, d, false); };
  // normalization is always applied for the public version, used in
  // user-written render functions.
  vm.$createElement = function (a, b, c, d) { return createElement(vm, a, b, c, d, true); };

  // $attrs & $listeners are exposed for easier HOC creation.
  // they need to be reactive so that HOCs using them are always updated
  var parentData = parentVnode && parentVnode.data;

  /* istanbul ignore else */
  if (true) {
    defineReactive$$1(vm, '$attrs', parentData && parentData.attrs || emptyObject, function () {
      !isUpdatingChildComponent && warn("$attrs is readonly.", vm);
    }, true);
    defineReactive$$1(vm, '$listeners', options._parentListeners || emptyObject, function () {
      !isUpdatingChildComponent && warn("$listeners is readonly.", vm);
    }, true);
  } else {}
}

var currentRenderingInstance = null;

function renderMixin (Vue) {
  // install runtime convenience helpers
  installRenderHelpers(Vue.prototype);

  Vue.prototype.$nextTick = function (fn) {
    return nextTick(fn, this)
  };

  Vue.prototype._render = function () {
    var vm = this;
    var ref = vm.$options;
    var render = ref.render;
    var _parentVnode = ref._parentVnode;

    if (_parentVnode) {
      vm.$scopedSlots = normalizeScopedSlots(
        _parentVnode.data.scopedSlots,
        vm.$slots,
        vm.$scopedSlots
      );
    }

    // set parent vnode. this allows render functions to have access
    // to the data on the placeholder node.
    vm.$vnode = _parentVnode;
    // render self
    var vnode;
    try {
      // There's no need to maintain a stack because all render fns are called
      // separately from one another. Nested component's render fns are called
      // when parent component is patched.
      currentRenderingInstance = vm;
      vnode = render.call(vm._renderProxy, vm.$createElement);
    } catch (e) {
      handleError(e, vm, "render");
      // return error render result,
      // or previous vnode to prevent render error causing blank component
      /* istanbul ignore else */
      if ( true && vm.$options.renderError) {
        try {
          vnode = vm.$options.renderError.call(vm._renderProxy, vm.$createElement, e);
        } catch (e) {
          handleError(e, vm, "renderError");
          vnode = vm._vnode;
        }
      } else {
        vnode = vm._vnode;
      }
    } finally {
      currentRenderingInstance = null;
    }
    // if the returned array contains only a single node, allow it
    if (Array.isArray(vnode) && vnode.length === 1) {
      vnode = vnode[0];
    }
    // return empty vnode in case the render function errored out
    if (!(vnode instanceof VNode)) {
      if ( true && Array.isArray(vnode)) {
        warn(
          'Multiple root nodes returned from render function. Render function ' +
          'should return a single root node.',
          vm
        );
      }
      vnode = createEmptyVNode();
    }
    // set parent
    vnode.parent = _parentVnode;
    return vnode
  };
}

/*  */

function ensureCtor (comp, base) {
  if (
    comp.__esModule ||
    (hasSymbol && comp[Symbol.toStringTag] === 'Module')
  ) {
    comp = comp.default;
  }
  return isObject(comp)
    ? base.extend(comp)
    : comp
}

function createAsyncPlaceholder (
  factory,
  data,
  context,
  children,
  tag
) {
  var node = createEmptyVNode();
  node.asyncFactory = factory;
  node.asyncMeta = { data: data, context: context, children: children, tag: tag };
  return node
}

function resolveAsyncComponent (
  factory,
  baseCtor
) {
  if (isTrue(factory.error) && isDef(factory.errorComp)) {
    return factory.errorComp
  }

  if (isDef(factory.resolved)) {
    return factory.resolved
  }

  var owner = currentRenderingInstance;
  if (owner && isDef(factory.owners) && factory.owners.indexOf(owner) === -1) {
    // already pending
    factory.owners.push(owner);
  }

  if (isTrue(factory.loading) && isDef(factory.loadingComp)) {
    return factory.loadingComp
  }

  if (owner && !isDef(factory.owners)) {
    var owners = factory.owners = [owner];
    var sync = true;
    var timerLoading = null;
    var timerTimeout = null

    ;(owner).$on('hook:destroyed', function () { return remove(owners, owner); });

    var forceRender = function (renderCompleted) {
      for (var i = 0, l = owners.length; i < l; i++) {
        (owners[i]).$forceUpdate();
      }

      if (renderCompleted) {
        owners.length = 0;
        if (timerLoading !== null) {
          clearTimeout(timerLoading);
          timerLoading = null;
        }
        if (timerTimeout !== null) {
          clearTimeout(timerTimeout);
          timerTimeout = null;
        }
      }
    };

    var resolve = once(function (res) {
      // cache resolved
      factory.resolved = ensureCtor(res, baseCtor);
      // invoke callbacks only if this is not a synchronous resolve
      // (async resolves are shimmed as synchronous during SSR)
      if (!sync) {
        forceRender(true);
      } else {
        owners.length = 0;
      }
    });

    var reject = once(function (reason) {
       true && warn(
        "Failed to resolve async component: " + (String(factory)) +
        (reason ? ("\nReason: " + reason) : '')
      );
      if (isDef(factory.errorComp)) {
        factory.error = true;
        forceRender(true);
      }
    });

    var res = factory(resolve, reject);

    if (isObject(res)) {
      if (isPromise(res)) {
        // () => Promise
        if (isUndef(factory.resolved)) {
          res.then(resolve, reject);
        }
      } else if (isPromise(res.component)) {
        res.component.then(resolve, reject);

        if (isDef(res.error)) {
          factory.errorComp = ensureCtor(res.error, baseCtor);
        }

        if (isDef(res.loading)) {
          factory.loadingComp = ensureCtor(res.loading, baseCtor);
          if (res.delay === 0) {
            factory.loading = true;
          } else {
            timerLoading = setTimeout(function () {
              timerLoading = null;
              if (isUndef(factory.resolved) && isUndef(factory.error)) {
                factory.loading = true;
                forceRender(false);
              }
            }, res.delay || 200);
          }
        }

        if (isDef(res.timeout)) {
          timerTimeout = setTimeout(function () {
            timerTimeout = null;
            if (isUndef(factory.resolved)) {
              reject(
                 true
                  ? ("timeout (" + (res.timeout) + "ms)")
                  : undefined
              );
            }
          }, res.timeout);
        }
      }
    }

    sync = false;
    // return in case resolved synchronously
    return factory.loading
      ? factory.loadingComp
      : factory.resolved
  }
}

/*  */

function isAsyncPlaceholder (node) {
  return node.isComment && node.asyncFactory
}

/*  */

function getFirstComponentChild (children) {
  if (Array.isArray(children)) {
    for (var i = 0; i < children.length; i++) {
      var c = children[i];
      if (isDef(c) && (isDef(c.componentOptions) || isAsyncPlaceholder(c))) {
        return c
      }
    }
  }
}

/*  */

/*  */

function initEvents (vm) {
  vm._events = Object.create(null);
  vm._hasHookEvent = false;
  // init parent attached events
  var listeners = vm.$options._parentListeners;
  if (listeners) {
    updateComponentListeners(vm, listeners);
  }
}

var target;

function add (event, fn) {
  target.$on(event, fn);
}

function remove$1 (event, fn) {
  target.$off(event, fn);
}

function createOnceHandler (event, fn) {
  var _target = target;
  return function onceHandler () {
    var res = fn.apply(null, arguments);
    if (res !== null) {
      _target.$off(event, onceHandler);
    }
  }
}

function updateComponentListeners (
  vm,
  listeners,
  oldListeners
) {
  target = vm;
  updateListeners(listeners, oldListeners || {}, add, remove$1, createOnceHandler, vm);
  target = undefined;
}

function eventsMixin (Vue) {
  var hookRE = /^hook:/;
  Vue.prototype.$on = function (event, fn) {
    var vm = this;
    if (Array.isArray(event)) {
      for (var i = 0, l = event.length; i < l; i++) {
        vm.$on(event[i], fn);
      }
    } else {
      (vm._events[event] || (vm._events[event] = [])).push(fn);
      // optimize hook:event cost by using a boolean flag marked at registration
      // instead of a hash lookup
      if (hookRE.test(event)) {
        vm._hasHookEvent = true;
      }
    }
    return vm
  };

  Vue.prototype.$once = function (event, fn) {
    var vm = this;
    function on () {
      vm.$off(event, on);
      fn.apply(vm, arguments);
    }
    on.fn = fn;
    vm.$on(event, on);
    return vm
  };

  Vue.prototype.$off = function (event, fn) {
    var vm = this;
    // all
    if (!arguments.length) {
      vm._events = Object.create(null);
      return vm
    }
    // array of events
    if (Array.isArray(event)) {
      for (var i$1 = 0, l = event.length; i$1 < l; i$1++) {
        vm.$off(event[i$1], fn);
      }
      return vm
    }
    // specific event
    var cbs = vm._events[event];
    if (!cbs) {
      return vm
    }
    if (!fn) {
      vm._events[event] = null;
      return vm
    }
    // specific handler
    var cb;
    var i = cbs.length;
    while (i--) {
      cb = cbs[i];
      if (cb === fn || cb.fn === fn) {
        cbs.splice(i, 1);
        break
      }
    }
    return vm
  };

  Vue.prototype.$emit = function (event) {
    var vm = this;
    if (true) {
      var lowerCaseEvent = event.toLowerCase();
      if (lowerCaseEvent !== event && vm._events[lowerCaseEvent]) {
        tip(
          "Event \"" + lowerCaseEvent + "\" is emitted in component " +
          (formatComponentName(vm)) + " but the handler is registered for \"" + event + "\". " +
          "Note that HTML attributes are case-insensitive and you cannot use " +
          "v-on to listen to camelCase events when using in-DOM templates. " +
          "You should probably use \"" + (hyphenate(event)) + "\" instead of \"" + event + "\"."
        );
      }
    }
    var cbs = vm._events[event];
    if (cbs) {
      cbs = cbs.length > 1 ? toArray(cbs) : cbs;
      var args = toArray(arguments, 1);
      var info = "event handler for \"" + event + "\"";
      for (var i = 0, l = cbs.length; i < l; i++) {
        invokeWithErrorHandling(cbs[i], vm, args, vm, info);
      }
    }
    return vm
  };
}

/*  */

var activeInstance = null;
var isUpdatingChildComponent = false;

function setActiveInstance(vm) {
  var prevActiveInstance = activeInstance;
  activeInstance = vm;
  return function () {
    activeInstance = prevActiveInstance;
  }
}

function initLifecycle (vm) {
  var options = vm.$options;

  // locate first non-abstract parent
  var parent = options.parent;
  if (parent && !options.abstract) {
    while (parent.$options.abstract && parent.$parent) {
      parent = parent.$parent;
    }
    parent.$children.push(vm);
  }

  vm.$parent = parent;
  vm.$root = parent ? parent.$root : vm;

  vm.$children = [];
  vm.$refs = {};

  vm._watcher = null;
  vm._inactive = null;
  vm._directInactive = false;
  vm._isMounted = false;
  vm._isDestroyed = false;
  vm._isBeingDestroyed = false;
}

function lifecycleMixin (Vue) {
  Vue.prototype._update = function (vnode, hydrating) {
    var vm = this;
    var prevEl = vm.$el;
    var prevVnode = vm._vnode;
    var restoreActiveInstance = setActiveInstance(vm);
    vm._vnode = vnode;
    // Vue.prototype.__patch__ is injected in entry points
    // based on the rendering backend used.
    if (!prevVnode) {
      // initial render
      vm.$el = vm.__patch__(vm.$el, vnode, hydrating, false /* removeOnly */);
    } else {
      // updates
      vm.$el = vm.__patch__(prevVnode, vnode);
    }
    restoreActiveInstance();
    // update __vue__ reference
    if (prevEl) {
      prevEl.__vue__ = null;
    }
    if (vm.$el) {
      vm.$el.__vue__ = vm;
    }
    // if parent is an HOC, update its $el as well
    if (vm.$vnode && vm.$parent && vm.$vnode === vm.$parent._vnode) {
      vm.$parent.$el = vm.$el;
    }
    // updated hook is called by the scheduler to ensure that children are
    // updated in a parent's updated hook.
  };

  Vue.prototype.$forceUpdate = function () {
    var vm = this;
    if (vm._watcher) {
      vm._watcher.update();
    }
  };

  Vue.prototype.$destroy = function () {
    var vm = this;
    if (vm._isBeingDestroyed) {
      return
    }
    callHook(vm, 'beforeDestroy');
    vm._isBeingDestroyed = true;
    // remove self from parent
    var parent = vm.$parent;
    if (parent && !parent._isBeingDestroyed && !vm.$options.abstract) {
      remove(parent.$children, vm);
    }
    // teardown watchers
    if (vm._watcher) {
      vm._watcher.teardown();
    }
    var i = vm._watchers.length;
    while (i--) {
      vm._watchers[i].teardown();
    }
    // remove reference from data ob
    // frozen object may not have observer.
    if (vm._data.__ob__) {
      vm._data.__ob__.vmCount--;
    }
    // call the last hook...
    vm._isDestroyed = true;
    // invoke destroy hooks on current rendered tree
    vm.__patch__(vm._vnode, null);
    // fire destroyed hook
    callHook(vm, 'destroyed');
    // turn off all instance listeners.
    vm.$off();
    // remove __vue__ reference
    if (vm.$el) {
      vm.$el.__vue__ = null;
    }
    // release circular reference (#6759)
    if (vm.$vnode) {
      vm.$vnode.parent = null;
    }
  };
}

function updateChildComponent (
  vm,
  propsData,
  listeners,
  parentVnode,
  renderChildren
) {
  if (true) {
    isUpdatingChildComponent = true;
  }

  // determine whether component has slot children
  // we need to do this before overwriting $options._renderChildren.

  // check if there are dynamic scopedSlots (hand-written or compiled but with
  // dynamic slot names). Static scoped slots compiled from template has the
  // "$stable" marker.
  var newScopedSlots = parentVnode.data.scopedSlots;
  var oldScopedSlots = vm.$scopedSlots;
  var hasDynamicScopedSlot = !!(
    (newScopedSlots && !newScopedSlots.$stable) ||
    (oldScopedSlots !== emptyObject && !oldScopedSlots.$stable) ||
    (newScopedSlots && vm.$scopedSlots.$key !== newScopedSlots.$key)
  );

  // Any static slot children from the parent may have changed during parent's
  // update. Dynamic scoped slots may also have changed. In such cases, a forced
  // update is necessary to ensure correctness.
  var needsForceUpdate = !!(
    renderChildren ||               // has new static slots
    vm.$options._renderChildren ||  // has old static slots
    hasDynamicScopedSlot
  );

  vm.$options._parentVnode = parentVnode;
  vm.$vnode = parentVnode; // update vm's placeholder node without re-render

  if (vm._vnode) { // update child tree's parent
    vm._vnode.parent = parentVnode;
  }
  vm.$options._renderChildren = renderChildren;

  // update $attrs and $listeners hash
  // these are also reactive so they may trigger child update if the child
  // used them during render
  vm.$attrs = parentVnode.data.attrs || emptyObject;
  vm.$listeners = listeners || emptyObject;

  // update props
  if (propsData && vm.$options.props) {
    toggleObserving(false);
    var props = vm._props;
    var propKeys = vm.$options._propKeys || [];
    for (var i = 0; i < propKeys.length; i++) {
      var key = propKeys[i];
      var propOptions = vm.$options.props; // wtf flow?
      props[key] = validateProp(key, propOptions, propsData, vm);
    }
    toggleObserving(true);
    // keep a copy of raw propsData
    vm.$options.propsData = propsData;
  }
  
  // fixed by xxxxxx update properties(mp runtime)
  vm._$updateProperties && vm._$updateProperties(vm);
  
  // update listeners
  listeners = listeners || emptyObject;
  var oldListeners = vm.$options._parentListeners;
  vm.$options._parentListeners = listeners;
  updateComponentListeners(vm, listeners, oldListeners);

  // resolve slots + force update if has children
  if (needsForceUpdate) {
    vm.$slots = resolveSlots(renderChildren, parentVnode.context);
    vm.$forceUpdate();
  }

  if (true) {
    isUpdatingChildComponent = false;
  }
}

function isInInactiveTree (vm) {
  while (vm && (vm = vm.$parent)) {
    if (vm._inactive) { return true }
  }
  return false
}

function activateChildComponent (vm, direct) {
  if (direct) {
    vm._directInactive = false;
    if (isInInactiveTree(vm)) {
      return
    }
  } else if (vm._directInactive) {
    return
  }
  if (vm._inactive || vm._inactive === null) {
    vm._inactive = false;
    for (var i = 0; i < vm.$children.length; i++) {
      activateChildComponent(vm.$children[i]);
    }
    callHook(vm, 'activated');
  }
}

function deactivateChildComponent (vm, direct) {
  if (direct) {
    vm._directInactive = true;
    if (isInInactiveTree(vm)) {
      return
    }
  }
  if (!vm._inactive) {
    vm._inactive = true;
    for (var i = 0; i < vm.$children.length; i++) {
      deactivateChildComponent(vm.$children[i]);
    }
    callHook(vm, 'deactivated');
  }
}

function callHook (vm, hook) {
  // #7573 disable dep collection when invoking lifecycle hooks
  pushTarget();
  var handlers = vm.$options[hook];
  var info = hook + " hook";
  if (handlers) {
    for (var i = 0, j = handlers.length; i < j; i++) {
      invokeWithErrorHandling(handlers[i], vm, null, vm, info);
    }
  }
  if (vm._hasHookEvent) {
    vm.$emit('hook:' + hook);
  }
  popTarget();
}

/*  */

var MAX_UPDATE_COUNT = 100;

var queue = [];
var activatedChildren = [];
var has = {};
var circular = {};
var waiting = false;
var flushing = false;
var index = 0;

/**
 * Reset the scheduler's state.
 */
function resetSchedulerState () {
  index = queue.length = activatedChildren.length = 0;
  has = {};
  if (true) {
    circular = {};
  }
  waiting = flushing = false;
}

// Async edge case #6566 requires saving the timestamp when event listeners are
// attached. However, calling performance.now() has a perf overhead especially
// if the page has thousands of event listeners. Instead, we take a timestamp
// every time the scheduler flushes and use that for all event listeners
// attached during that flush.
var currentFlushTimestamp = 0;

// Async edge case fix requires storing an event listener's attach timestamp.
var getNow = Date.now;

// Determine what event timestamp the browser is using. Annoyingly, the
// timestamp can either be hi-res (relative to page load) or low-res
// (relative to UNIX epoch), so in order to compare time we have to use the
// same timestamp type when saving the flush timestamp.
// All IE versions use low-res event timestamps, and have problematic clock
// implementations (#9632)
if (inBrowser && !isIE) {
  var performance = window.performance;
  if (
    performance &&
    typeof performance.now === 'function' &&
    getNow() > document.createEvent('Event').timeStamp
  ) {
    // if the event timestamp, although evaluated AFTER the Date.now(), is
    // smaller than it, it means the event is using a hi-res timestamp,
    // and we need to use the hi-res version for event listener timestamps as
    // well.
    getNow = function () { return performance.now(); };
  }
}

/**
 * Flush both queues and run the watchers.
 */
function flushSchedulerQueue () {
  currentFlushTimestamp = getNow();
  flushing = true;
  var watcher, id;

  // Sort queue before flush.
  // This ensures that:
  // 1. Components are updated from parent to child. (because parent is always
  //    created before the child)
  // 2. A component's user watchers are run before its render watcher (because
  //    user watchers are created before the render watcher)
  // 3. If a component is destroyed during a parent component's watcher run,
  //    its watchers can be skipped.
  queue.sort(function (a, b) { return a.id - b.id; });

  // do not cache length because more watchers might be pushed
  // as we run existing watchers
  for (index = 0; index < queue.length; index++) {
    watcher = queue[index];
    if (watcher.before) {
      watcher.before();
    }
    id = watcher.id;
    has[id] = null;
    watcher.run();
    // in dev build, check and stop circular updates.
    if ( true && has[id] != null) {
      circular[id] = (circular[id] || 0) + 1;
      if (circular[id] > MAX_UPDATE_COUNT) {
        warn(
          'You may have an infinite update loop ' + (
            watcher.user
              ? ("in watcher with expression \"" + (watcher.expression) + "\"")
              : "in a component render function."
          ),
          watcher.vm
        );
        break
      }
    }
  }

  // keep copies of post queues before resetting state
  var activatedQueue = activatedChildren.slice();
  var updatedQueue = queue.slice();

  resetSchedulerState();

  // call component updated and activated hooks
  callActivatedHooks(activatedQueue);
  callUpdatedHooks(updatedQueue);

  // devtool hook
  /* istanbul ignore if */
  if (devtools && config.devtools) {
    devtools.emit('flush');
  }
}

function callUpdatedHooks (queue) {
  var i = queue.length;
  while (i--) {
    var watcher = queue[i];
    var vm = watcher.vm;
    if (vm._watcher === watcher && vm._isMounted && !vm._isDestroyed) {
      callHook(vm, 'updated');
    }
  }
}

/**
 * Queue a kept-alive component that was activated during patch.
 * The queue will be processed after the entire tree has been patched.
 */
function queueActivatedComponent (vm) {
  // setting _inactive to false here so that a render function can
  // rely on checking whether it's in an inactive tree (e.g. router-view)
  vm._inactive = false;
  activatedChildren.push(vm);
}

function callActivatedHooks (queue) {
  for (var i = 0; i < queue.length; i++) {
    queue[i]._inactive = true;
    activateChildComponent(queue[i], true /* true */);
  }
}

/**
 * Push a watcher into the watcher queue.
 * Jobs with duplicate IDs will be skipped unless it's
 * pushed when the queue is being flushed.
 */
function queueWatcher (watcher) {
  var id = watcher.id;
  if (has[id] == null) {
    has[id] = true;
    if (!flushing) {
      queue.push(watcher);
    } else {
      // if already flushing, splice the watcher based on its id
      // if already past its id, it will be run next immediately.
      var i = queue.length - 1;
      while (i > index && queue[i].id > watcher.id) {
        i--;
      }
      queue.splice(i + 1, 0, watcher);
    }
    // queue the flush
    if (!waiting) {
      waiting = true;

      if ( true && !config.async) {
        flushSchedulerQueue();
        return
      }
      nextTick(flushSchedulerQueue);
    }
  }
}

/*  */



var uid$2 = 0;

/**
 * A watcher parses an expression, collects dependencies,
 * and fires callback when the expression value changes.
 * This is used for both the $watch() api and directives.
 */
var Watcher = function Watcher (
  vm,
  expOrFn,
  cb,
  options,
  isRenderWatcher
) {
  this.vm = vm;
  if (isRenderWatcher) {
    vm._watcher = this;
  }
  vm._watchers.push(this);
  // options
  if (options) {
    this.deep = !!options.deep;
    this.user = !!options.user;
    this.lazy = !!options.lazy;
    this.sync = !!options.sync;
    this.before = options.before;
  } else {
    this.deep = this.user = this.lazy = this.sync = false;
  }
  this.cb = cb;
  this.id = ++uid$2; // uid for batching
  this.active = true;
  this.dirty = this.lazy; // for lazy watchers
  this.deps = [];
  this.newDeps = [];
  this.depIds = new _Set();
  this.newDepIds = new _Set();
  this.expression =  true
    ? expOrFn.toString()
    : undefined;
  // parse expression for getter
  if (typeof expOrFn === 'function') {
    this.getter = expOrFn;
  } else {
    this.getter = parsePath(expOrFn);
    if (!this.getter) {
      this.getter = noop;
       true && warn(
        "Failed watching path: \"" + expOrFn + "\" " +
        'Watcher only accepts simple dot-delimited paths. ' +
        'For full control, use a function instead.',
        vm
      );
    }
  }
  this.value = this.lazy
    ? undefined
    : this.get();
};

/**
 * Evaluate the getter, and re-collect dependencies.
 */
Watcher.prototype.get = function get () {
  pushTarget(this);
  var value;
  var vm = this.vm;
  try {
    value = this.getter.call(vm, vm);
  } catch (e) {
    if (this.user) {
      handleError(e, vm, ("getter for watcher \"" + (this.expression) + "\""));
    } else {
      throw e
    }
  } finally {
    // "touch" every property so they are all tracked as
    // dependencies for deep watching
    if (this.deep) {
      traverse(value);
    }
    popTarget();
    this.cleanupDeps();
  }
  return value
};

/**
 * Add a dependency to this directive.
 */
Watcher.prototype.addDep = function addDep (dep) {
  var id = dep.id;
  if (!this.newDepIds.has(id)) {
    this.newDepIds.add(id);
    this.newDeps.push(dep);
    if (!this.depIds.has(id)) {
      dep.addSub(this);
    }
  }
};

/**
 * Clean up for dependency collection.
 */
Watcher.prototype.cleanupDeps = function cleanupDeps () {
  var i = this.deps.length;
  while (i--) {
    var dep = this.deps[i];
    if (!this.newDepIds.has(dep.id)) {
      dep.removeSub(this);
    }
  }
  var tmp = this.depIds;
  this.depIds = this.newDepIds;
  this.newDepIds = tmp;
  this.newDepIds.clear();
  tmp = this.deps;
  this.deps = this.newDeps;
  this.newDeps = tmp;
  this.newDeps.length = 0;
};

/**
 * Subscriber interface.
 * Will be called when a dependency changes.
 */
Watcher.prototype.update = function update () {
  /* istanbul ignore else */
  if (this.lazy) {
    this.dirty = true;
  } else if (this.sync) {
    this.run();
  } else {
    queueWatcher(this);
  }
};

/**
 * Scheduler job interface.
 * Will be called by the scheduler.
 */
Watcher.prototype.run = function run () {
  if (this.active) {
    var value = this.get();
    if (
      value !== this.value ||
      // Deep watchers and watchers on Object/Arrays should fire even
      // when the value is the same, because the value may
      // have mutated.
      isObject(value) ||
      this.deep
    ) {
      // set new value
      var oldValue = this.value;
      this.value = value;
      if (this.user) {
        try {
          this.cb.call(this.vm, value, oldValue);
        } catch (e) {
          handleError(e, this.vm, ("callback for watcher \"" + (this.expression) + "\""));
        }
      } else {
        this.cb.call(this.vm, value, oldValue);
      }
    }
  }
};

/**
 * Evaluate the value of the watcher.
 * This only gets called for lazy watchers.
 */
Watcher.prototype.evaluate = function evaluate () {
  this.value = this.get();
  this.dirty = false;
};

/**
 * Depend on all deps collected by this watcher.
 */
Watcher.prototype.depend = function depend () {
  var i = this.deps.length;
  while (i--) {
    this.deps[i].depend();
  }
};

/**
 * Remove self from all dependencies' subscriber list.
 */
Watcher.prototype.teardown = function teardown () {
  if (this.active) {
    // remove self from vm's watcher list
    // this is a somewhat expensive operation so we skip it
    // if the vm is being destroyed.
    if (!this.vm._isBeingDestroyed) {
      remove(this.vm._watchers, this);
    }
    var i = this.deps.length;
    while (i--) {
      this.deps[i].removeSub(this);
    }
    this.active = false;
  }
};

/*  */

var sharedPropertyDefinition = {
  enumerable: true,
  configurable: true,
  get: noop,
  set: noop
};

function proxy (target, sourceKey, key) {
  sharedPropertyDefinition.get = function proxyGetter () {
    return this[sourceKey][key]
  };
  sharedPropertyDefinition.set = function proxySetter (val) {
    this[sourceKey][key] = val;
  };
  Object.defineProperty(target, key, sharedPropertyDefinition);
}

function initState (vm) {
  vm._watchers = [];
  var opts = vm.$options;
  if (opts.props) { initProps(vm, opts.props); }
  if (opts.methods) { initMethods(vm, opts.methods); }
  if (opts.data) {
    initData(vm);
  } else {
    observe(vm._data = {}, true /* asRootData */);
  }
  if (opts.computed) { initComputed(vm, opts.computed); }
  if (opts.watch && opts.watch !== nativeWatch) {
    initWatch(vm, opts.watch);
  }
}

function initProps (vm, propsOptions) {
  var propsData = vm.$options.propsData || {};
  var props = vm._props = {};
  // cache prop keys so that future props updates can iterate using Array
  // instead of dynamic object key enumeration.
  var keys = vm.$options._propKeys = [];
  var isRoot = !vm.$parent;
  // root instance props should be converted
  if (!isRoot) {
    toggleObserving(false);
  }
  var loop = function ( key ) {
    keys.push(key);
    var value = validateProp(key, propsOptions, propsData, vm);
    /* istanbul ignore else */
    if (true) {
      var hyphenatedKey = hyphenate(key);
      if (isReservedAttribute(hyphenatedKey) ||
          config.isReservedAttr(hyphenatedKey)) {
        warn(
          ("\"" + hyphenatedKey + "\" is a reserved attribute and cannot be used as component prop."),
          vm
        );
      }
      defineReactive$$1(props, key, value, function () {
        if (!isRoot && !isUpdatingChildComponent) {
          {
            if(vm.mpHost === 'mp-baidu' || vm.mpHost === 'mp-kuaishou' || vm.mpHost === 'mp-xhs'){//百度、快手、小红书 observer 在 setData callback 之后触发，直接忽略该 warn
                return
            }
            //fixed by xxxxxx __next_tick_pending,uni://form-field 时不告警
            if(
                key === 'value' && 
                Array.isArray(vm.$options.behaviors) &&
                vm.$options.behaviors.indexOf('uni://form-field') !== -1
              ){
              return
            }
            if(vm._getFormData){
              return
            }
            var $parent = vm.$parent;
            while($parent){
              if($parent.__next_tick_pending){
                return  
              }
              $parent = $parent.$parent;
            }
          }
          warn(
            "Avoid mutating a prop directly since the value will be " +
            "overwritten whenever the parent component re-renders. " +
            "Instead, use a data or computed property based on the prop's " +
            "value. Prop being mutated: \"" + key + "\"",
            vm
          );
        }
      });
    } else {}
    // static props are already proxied on the component's prototype
    // during Vue.extend(). We only need to proxy props defined at
    // instantiation here.
    if (!(key in vm)) {
      proxy(vm, "_props", key);
    }
  };

  for (var key in propsOptions) loop( key );
  toggleObserving(true);
}

function initData (vm) {
  var data = vm.$options.data;
  data = vm._data = typeof data === 'function'
    ? getData(data, vm)
    : data || {};
  if (!isPlainObject(data)) {
    data = {};
     true && warn(
      'data functions should return an object:\n' +
      'https://vuejs.org/v2/guide/components.html#data-Must-Be-a-Function',
      vm
    );
  }
  // proxy data on instance
  var keys = Object.keys(data);
  var props = vm.$options.props;
  var methods = vm.$options.methods;
  var i = keys.length;
  while (i--) {
    var key = keys[i];
    if (true) {
      if (methods && hasOwn(methods, key)) {
        warn(
          ("Method \"" + key + "\" has already been defined as a data property."),
          vm
        );
      }
    }
    if (props && hasOwn(props, key)) {
       true && warn(
        "The data property \"" + key + "\" is already declared as a prop. " +
        "Use prop default value instead.",
        vm
      );
    } else if (!isReserved(key)) {
      proxy(vm, "_data", key);
    }
  }
  // observe data
  observe(data, true /* asRootData */);
}

function getData (data, vm) {
  // #7573 disable dep collection when invoking data getters
  pushTarget();
  try {
    return data.call(vm, vm)
  } catch (e) {
    handleError(e, vm, "data()");
    return {}
  } finally {
    popTarget();
  }
}

var computedWatcherOptions = { lazy: true };

function initComputed (vm, computed) {
  // $flow-disable-line
  var watchers = vm._computedWatchers = Object.create(null);
  // computed properties are just getters during SSR
  var isSSR = isServerRendering();

  for (var key in computed) {
    var userDef = computed[key];
    var getter = typeof userDef === 'function' ? userDef : userDef.get;
    if ( true && getter == null) {
      warn(
        ("Getter is missing for computed property \"" + key + "\"."),
        vm
      );
    }

    if (!isSSR) {
      // create internal watcher for the computed property.
      watchers[key] = new Watcher(
        vm,
        getter || noop,
        noop,
        computedWatcherOptions
      );
    }

    // component-defined computed properties are already defined on the
    // component prototype. We only need to define computed properties defined
    // at instantiation here.
    if (!(key in vm)) {
      defineComputed(vm, key, userDef);
    } else if (true) {
      if (key in vm.$data) {
        warn(("The computed property \"" + key + "\" is already defined in data."), vm);
      } else if (vm.$options.props && key in vm.$options.props) {
        warn(("The computed property \"" + key + "\" is already defined as a prop."), vm);
      }
    }
  }
}

function defineComputed (
  target,
  key,
  userDef
) {
  var shouldCache = !isServerRendering();
  if (typeof userDef === 'function') {
    sharedPropertyDefinition.get = shouldCache
      ? createComputedGetter(key)
      : createGetterInvoker(userDef);
    sharedPropertyDefinition.set = noop;
  } else {
    sharedPropertyDefinition.get = userDef.get
      ? shouldCache && userDef.cache !== false
        ? createComputedGetter(key)
        : createGetterInvoker(userDef.get)
      : noop;
    sharedPropertyDefinition.set = userDef.set || noop;
  }
  if ( true &&
      sharedPropertyDefinition.set === noop) {
    sharedPropertyDefinition.set = function () {
      warn(
        ("Computed property \"" + key + "\" was assigned to but it has no setter."),
        this
      );
    };
  }
  Object.defineProperty(target, key, sharedPropertyDefinition);
}

function createComputedGetter (key) {
  return function computedGetter () {
    var watcher = this._computedWatchers && this._computedWatchers[key];
    if (watcher) {
      if (watcher.dirty) {
        watcher.evaluate();
      }
      if (Dep.SharedObject.target) {// fixed by xxxxxx
        watcher.depend();
      }
      return watcher.value
    }
  }
}

function createGetterInvoker(fn) {
  return function computedGetter () {
    return fn.call(this, this)
  }
}

function initMethods (vm, methods) {
  var props = vm.$options.props;
  for (var key in methods) {
    if (true) {
      if (typeof methods[key] !== 'function') {
        warn(
          "Method \"" + key + "\" has type \"" + (typeof methods[key]) + "\" in the component definition. " +
          "Did you reference the function correctly?",
          vm
        );
      }
      if (props && hasOwn(props, key)) {
        warn(
          ("Method \"" + key + "\" has already been defined as a prop."),
          vm
        );
      }
      if ((key in vm) && isReserved(key)) {
        warn(
          "Method \"" + key + "\" conflicts with an existing Vue instance method. " +
          "Avoid defining component methods that start with _ or $."
        );
      }
    }
    vm[key] = typeof methods[key] !== 'function' ? noop : bind(methods[key], vm);
  }
}

function initWatch (vm, watch) {
  for (var key in watch) {
    var handler = watch[key];
    if (Array.isArray(handler)) {
      for (var i = 0; i < handler.length; i++) {
        createWatcher(vm, key, handler[i]);
      }
    } else {
      createWatcher(vm, key, handler);
    }
  }
}

function createWatcher (
  vm,
  expOrFn,
  handler,
  options
) {
  if (isPlainObject(handler)) {
    options = handler;
    handler = handler.handler;
  }
  if (typeof handler === 'string') {
    handler = vm[handler];
  }
  return vm.$watch(expOrFn, handler, options)
}

function stateMixin (Vue) {
  // flow somehow has problems with directly declared definition object
  // when using Object.defineProperty, so we have to procedurally build up
  // the object here.
  var dataDef = {};
  dataDef.get = function () { return this._data };
  var propsDef = {};
  propsDef.get = function () { return this._props };
  if (true) {
    dataDef.set = function () {
      warn(
        'Avoid replacing instance root $data. ' +
        'Use nested data properties instead.',
        this
      );
    };
    propsDef.set = function () {
      warn("$props is readonly.", this);
    };
  }
  Object.defineProperty(Vue.prototype, '$data', dataDef);
  Object.defineProperty(Vue.prototype, '$props', propsDef);

  Vue.prototype.$set = set;
  Vue.prototype.$delete = del;

  Vue.prototype.$watch = function (
    expOrFn,
    cb,
    options
  ) {
    var vm = this;
    if (isPlainObject(cb)) {
      return createWatcher(vm, expOrFn, cb, options)
    }
    options = options || {};
    options.user = true;
    var watcher = new Watcher(vm, expOrFn, cb, options);
    if (options.immediate) {
      try {
        cb.call(vm, watcher.value);
      } catch (error) {
        handleError(error, vm, ("callback for immediate watcher \"" + (watcher.expression) + "\""));
      }
    }
    return function unwatchFn () {
      watcher.teardown();
    }
  };
}

/*  */

var uid$3 = 0;

function initMixin (Vue) {
  Vue.prototype._init = function (options) {
    var vm = this;
    // a uid
    vm._uid = uid$3++;

    var startTag, endTag;
    /* istanbul ignore if */
    if ( true && config.performance && mark) {
      startTag = "vue-perf-start:" + (vm._uid);
      endTag = "vue-perf-end:" + (vm._uid);
      mark(startTag);
    }

    // a flag to avoid this being observed
    vm._isVue = true;
    // merge options
    if (options && options._isComponent) {
      // optimize internal component instantiation
      // since dynamic options merging is pretty slow, and none of the
      // internal component options needs special treatment.
      initInternalComponent(vm, options);
    } else {
      vm.$options = mergeOptions(
        resolveConstructorOptions(vm.constructor),
        options || {},
        vm
      );
    }
    /* istanbul ignore else */
    if (true) {
      initProxy(vm);
    } else {}
    // expose real self
    vm._self = vm;
    initLifecycle(vm);
    initEvents(vm);
    initRender(vm);
    callHook(vm, 'beforeCreate');
    !vm._$fallback && initInjections(vm); // resolve injections before data/props  
    initState(vm);
    !vm._$fallback && initProvide(vm); // resolve provide after data/props
    !vm._$fallback && callHook(vm, 'created');      

    /* istanbul ignore if */
    if ( true && config.performance && mark) {
      vm._name = formatComponentName(vm, false);
      mark(endTag);
      measure(("vue " + (vm._name) + " init"), startTag, endTag);
    }

    if (vm.$options.el) {
      vm.$mount(vm.$options.el);
    }
  };
}

function initInternalComponent (vm, options) {
  var opts = vm.$options = Object.create(vm.constructor.options);
  // doing this because it's faster than dynamic enumeration.
  var parentVnode = options._parentVnode;
  opts.parent = options.parent;
  opts._parentVnode = parentVnode;

  var vnodeComponentOptions = parentVnode.componentOptions;
  opts.propsData = vnodeComponentOptions.propsData;
  opts._parentListeners = vnodeComponentOptions.listeners;
  opts._renderChildren = vnodeComponentOptions.children;
  opts._componentTag = vnodeComponentOptions.tag;

  if (options.render) {
    opts.render = options.render;
    opts.staticRenderFns = options.staticRenderFns;
  }
}

function resolveConstructorOptions (Ctor) {
  var options = Ctor.options;
  if (Ctor.super) {
    var superOptions = resolveConstructorOptions(Ctor.super);
    var cachedSuperOptions = Ctor.superOptions;
    if (superOptions !== cachedSuperOptions) {
      // super option changed,
      // need to resolve new options.
      Ctor.superOptions = superOptions;
      // check if there are any late-modified/attached options (#4976)
      var modifiedOptions = resolveModifiedOptions(Ctor);
      // update base extend options
      if (modifiedOptions) {
        extend(Ctor.extendOptions, modifiedOptions);
      }
      options = Ctor.options = mergeOptions(superOptions, Ctor.extendOptions);
      if (options.name) {
        options.components[options.name] = Ctor;
      }
    }
  }
  return options
}

function resolveModifiedOptions (Ctor) {
  var modified;
  var latest = Ctor.options;
  var sealed = Ctor.sealedOptions;
  for (var key in latest) {
    if (latest[key] !== sealed[key]) {
      if (!modified) { modified = {}; }
      modified[key] = latest[key];
    }
  }
  return modified
}

function Vue (options) {
  if ( true &&
    !(this instanceof Vue)
  ) {
    warn('Vue is a constructor and should be called with the `new` keyword');
  }
  this._init(options);
}

initMixin(Vue);
stateMixin(Vue);
eventsMixin(Vue);
lifecycleMixin(Vue);
renderMixin(Vue);

/*  */

function initUse (Vue) {
  Vue.use = function (plugin) {
    var installedPlugins = (this._installedPlugins || (this._installedPlugins = []));
    if (installedPlugins.indexOf(plugin) > -1) {
      return this
    }

    // additional parameters
    var args = toArray(arguments, 1);
    args.unshift(this);
    if (typeof plugin.install === 'function') {
      plugin.install.apply(plugin, args);
    } else if (typeof plugin === 'function') {
      plugin.apply(null, args);
    }
    installedPlugins.push(plugin);
    return this
  };
}

/*  */

function initMixin$1 (Vue) {
  Vue.mixin = function (mixin) {
    this.options = mergeOptions(this.options, mixin);
    return this
  };
}

/*  */

function initExtend (Vue) {
  /**
   * Each instance constructor, including Vue, has a unique
   * cid. This enables us to create wrapped "child
   * constructors" for prototypal inheritance and cache them.
   */
  Vue.cid = 0;
  var cid = 1;

  /**
   * Class inheritance
   */
  Vue.extend = function (extendOptions) {
    extendOptions = extendOptions || {};
    var Super = this;
    var SuperId = Super.cid;
    var cachedCtors = extendOptions._Ctor || (extendOptions._Ctor = {});
    if (cachedCtors[SuperId]) {
      return cachedCtors[SuperId]
    }

    var name = extendOptions.name || Super.options.name;
    if ( true && name) {
      validateComponentName(name);
    }

    var Sub = function VueComponent (options) {
      this._init(options);
    };
    Sub.prototype = Object.create(Super.prototype);
    Sub.prototype.constructor = Sub;
    Sub.cid = cid++;
    Sub.options = mergeOptions(
      Super.options,
      extendOptions
    );
    Sub['super'] = Super;

    // For props and computed properties, we define the proxy getters on
    // the Vue instances at extension time, on the extended prototype. This
    // avoids Object.defineProperty calls for each instance created.
    if (Sub.options.props) {
      initProps$1(Sub);
    }
    if (Sub.options.computed) {
      initComputed$1(Sub);
    }

    // allow further extension/mixin/plugin usage
    Sub.extend = Super.extend;
    Sub.mixin = Super.mixin;
    Sub.use = Super.use;

    // create asset registers, so extended classes
    // can have their private assets too.
    ASSET_TYPES.forEach(function (type) {
      Sub[type] = Super[type];
    });
    // enable recursive self-lookup
    if (name) {
      Sub.options.components[name] = Sub;
    }

    // keep a reference to the super options at extension time.
    // later at instantiation we can check if Super's options have
    // been updated.
    Sub.superOptions = Super.options;
    Sub.extendOptions = extendOptions;
    Sub.sealedOptions = extend({}, Sub.options);

    // cache constructor
    cachedCtors[SuperId] = Sub;
    return Sub
  };
}

function initProps$1 (Comp) {
  var props = Comp.options.props;
  for (var key in props) {
    proxy(Comp.prototype, "_props", key);
  }
}

function initComputed$1 (Comp) {
  var computed = Comp.options.computed;
  for (var key in computed) {
    defineComputed(Comp.prototype, key, computed[key]);
  }
}

/*  */

function initAssetRegisters (Vue) {
  /**
   * Create asset registration methods.
   */
  ASSET_TYPES.forEach(function (type) {
    Vue[type] = function (
      id,
      definition
    ) {
      if (!definition) {
        return this.options[type + 's'][id]
      } else {
        /* istanbul ignore if */
        if ( true && type === 'component') {
          validateComponentName(id);
        }
        if (type === 'component' && isPlainObject(definition)) {
          definition.name = definition.name || id;
          definition = this.options._base.extend(definition);
        }
        if (type === 'directive' && typeof definition === 'function') {
          definition = { bind: definition, update: definition };
        }
        this.options[type + 's'][id] = definition;
        return definition
      }
    };
  });
}

/*  */



function getComponentName (opts) {
  return opts && (opts.Ctor.options.name || opts.tag)
}

function matches (pattern, name) {
  if (Array.isArray(pattern)) {
    return pattern.indexOf(name) > -1
  } else if (typeof pattern === 'string') {
    return pattern.split(',').indexOf(name) > -1
  } else if (isRegExp(pattern)) {
    return pattern.test(name)
  }
  /* istanbul ignore next */
  return false
}

function pruneCache (keepAliveInstance, filter) {
  var cache = keepAliveInstance.cache;
  var keys = keepAliveInstance.keys;
  var _vnode = keepAliveInstance._vnode;
  for (var key in cache) {
    var cachedNode = cache[key];
    if (cachedNode) {
      var name = getComponentName(cachedNode.componentOptions);
      if (name && !filter(name)) {
        pruneCacheEntry(cache, key, keys, _vnode);
      }
    }
  }
}

function pruneCacheEntry (
  cache,
  key,
  keys,
  current
) {
  var cached$$1 = cache[key];
  if (cached$$1 && (!current || cached$$1.tag !== current.tag)) {
    cached$$1.componentInstance.$destroy();
  }
  cache[key] = null;
  remove(keys, key);
}

var patternTypes = [String, RegExp, Array];

var KeepAlive = {
  name: 'keep-alive',
  abstract: true,

  props: {
    include: patternTypes,
    exclude: patternTypes,
    max: [String, Number]
  },

  created: function created () {
    this.cache = Object.create(null);
    this.keys = [];
  },

  destroyed: function destroyed () {
    for (var key in this.cache) {
      pruneCacheEntry(this.cache, key, this.keys);
    }
  },

  mounted: function mounted () {
    var this$1 = this;

    this.$watch('include', function (val) {
      pruneCache(this$1, function (name) { return matches(val, name); });
    });
    this.$watch('exclude', function (val) {
      pruneCache(this$1, function (name) { return !matches(val, name); });
    });
  },

  render: function render () {
    var slot = this.$slots.default;
    var vnode = getFirstComponentChild(slot);
    var componentOptions = vnode && vnode.componentOptions;
    if (componentOptions) {
      // check pattern
      var name = getComponentName(componentOptions);
      var ref = this;
      var include = ref.include;
      var exclude = ref.exclude;
      if (
        // not included
        (include && (!name || !matches(include, name))) ||
        // excluded
        (exclude && name && matches(exclude, name))
      ) {
        return vnode
      }

      var ref$1 = this;
      var cache = ref$1.cache;
      var keys = ref$1.keys;
      var key = vnode.key == null
        // same constructor may get registered as different local components
        // so cid alone is not enough (#3269)
        ? componentOptions.Ctor.cid + (componentOptions.tag ? ("::" + (componentOptions.tag)) : '')
        : vnode.key;
      if (cache[key]) {
        vnode.componentInstance = cache[key].componentInstance;
        // make current key freshest
        remove(keys, key);
        keys.push(key);
      } else {
        cache[key] = vnode;
        keys.push(key);
        // prune oldest entry
        if (this.max && keys.length > parseInt(this.max)) {
          pruneCacheEntry(cache, keys[0], keys, this._vnode);
        }
      }

      vnode.data.keepAlive = true;
    }
    return vnode || (slot && slot[0])
  }
};

var builtInComponents = {
  KeepAlive: KeepAlive
};

/*  */

function initGlobalAPI (Vue) {
  // config
  var configDef = {};
  configDef.get = function () { return config; };
  if (true) {
    configDef.set = function () {
      warn(
        'Do not replace the Vue.config object, set individual fields instead.'
      );
    };
  }
  Object.defineProperty(Vue, 'config', configDef);

  // exposed util methods.
  // NOTE: these are not considered part of the public API - avoid relying on
  // them unless you are aware of the risk.
  Vue.util = {
    warn: warn,
    extend: extend,
    mergeOptions: mergeOptions,
    defineReactive: defineReactive$$1
  };

  Vue.set = set;
  Vue.delete = del;
  Vue.nextTick = nextTick;

  // 2.6 explicit observable API
  Vue.observable = function (obj) {
    observe(obj);
    return obj
  };

  Vue.options = Object.create(null);
  ASSET_TYPES.forEach(function (type) {
    Vue.options[type + 's'] = Object.create(null);
  });

  // this is used to identify the "base" constructor to extend all plain-object
  // components with in Weex's multi-instance scenarios.
  Vue.options._base = Vue;

  extend(Vue.options.components, builtInComponents);

  initUse(Vue);
  initMixin$1(Vue);
  initExtend(Vue);
  initAssetRegisters(Vue);
}

initGlobalAPI(Vue);

Object.defineProperty(Vue.prototype, '$isServer', {
  get: isServerRendering
});

Object.defineProperty(Vue.prototype, '$ssrContext', {
  get: function get () {
    /* istanbul ignore next */
    return this.$vnode && this.$vnode.ssrContext
  }
});

// expose FunctionalRenderContext for ssr runtime helper installation
Object.defineProperty(Vue, 'FunctionalRenderContext', {
  value: FunctionalRenderContext
});

Vue.version = '2.6.11';

/**
 * https://raw.githubusercontent.com/Tencent/westore/master/packages/westore/utils/diff.js
 */
var ARRAYTYPE = '[object Array]';
var OBJECTTYPE = '[object Object]';
// const FUNCTIONTYPE = '[object Function]'

function diff(current, pre) {
    var result = {};
    syncKeys(current, pre);
    _diff(current, pre, '', result);
    return result
}

function syncKeys(current, pre) {
    if (current === pre) { return }
    var rootCurrentType = type(current);
    var rootPreType = type(pre);
    if (rootCurrentType == OBJECTTYPE && rootPreType == OBJECTTYPE) {
        if(Object.keys(current).length >= Object.keys(pre).length){
            for (var key in pre) {
                var currentValue = current[key];
                if (currentValue === undefined) {
                    current[key] = null;
                } else {
                    syncKeys(currentValue, pre[key]);
                }
            }
        }
    } else if (rootCurrentType == ARRAYTYPE && rootPreType == ARRAYTYPE) {
        if (current.length >= pre.length) {
            pre.forEach(function (item, index) {
                syncKeys(current[index], item);
            });
        }
    }
}

function _diff(current, pre, path, result) {
    if (current === pre) { return }
    var rootCurrentType = type(current);
    var rootPreType = type(pre);
    if (rootCurrentType == OBJECTTYPE) {
        if (rootPreType != OBJECTTYPE || Object.keys(current).length < Object.keys(pre).length) {
            setResult(result, path, current);
        } else {
            var loop = function ( key ) {
                var currentValue = current[key];
                var preValue = pre[key];
                var currentType = type(currentValue);
                var preType = type(preValue);
                if (currentType != ARRAYTYPE && currentType != OBJECTTYPE) {
                    if (currentValue !== pre[key]) {
                        setResult(result, (path == '' ? '' : path + ".") + key, currentValue);
                    }
                } else if (currentType == ARRAYTYPE) {
                    if (preType != ARRAYTYPE) {
                        setResult(result, (path == '' ? '' : path + ".") + key, currentValue);
                    } else {
                        if (currentValue.length < preValue.length) {
                            setResult(result, (path == '' ? '' : path + ".") + key, currentValue);
                        } else {
                            currentValue.forEach(function (item, index) {
                                _diff(item, preValue[index], (path == '' ? '' : path + ".") + key + '[' + index + ']', result);
                            });
                        }
                    }
                } else if (currentType == OBJECTTYPE) {
                    if (preType != OBJECTTYPE || Object.keys(currentValue).length < Object.keys(preValue).length) {
                        setResult(result, (path == '' ? '' : path + ".") + key, currentValue);
                    } else {
                        for (var subKey in currentValue) {
                            _diff(currentValue[subKey], preValue[subKey], (path == '' ? '' : path + ".") + key + '.' + subKey, result);
                        }
                    }
                }
            };

            for (var key in current) loop( key );
        }
    } else if (rootCurrentType == ARRAYTYPE) {
        if (rootPreType != ARRAYTYPE) {
            setResult(result, path, current);
        } else {
            if (current.length < pre.length) {
                setResult(result, path, current);
            } else {
                current.forEach(function (item, index) {
                    _diff(item, pre[index], path + '[' + index + ']', result);
                });
            }
        }
    } else {
        setResult(result, path, current);
    }
}

function setResult(result, k, v) {
    // if (type(v) != FUNCTIONTYPE) {
        result[k] = v;
    // }
}

function type(obj) {
    return Object.prototype.toString.call(obj)
}

/*  */

function flushCallbacks$1(vm) {
    if (vm.__next_tick_callbacks && vm.__next_tick_callbacks.length) {
        if (Object({"VUE_APP_NAME":"仙图壁纸","VUE_APP_PLATFORM":"mp-toutiao","NODE_ENV":"development","BASE_URL":"/"}).VUE_APP_DEBUG) {
            var mpInstance = vm.$scope;
            console.log('[' + (+new Date) + '][' + (mpInstance.is || mpInstance.route) + '][' + vm._uid +
                ']:flushCallbacks[' + vm.__next_tick_callbacks.length + ']');
        }
        var copies = vm.__next_tick_callbacks.slice(0);
        vm.__next_tick_callbacks.length = 0;
        for (var i = 0; i < copies.length; i++) {
            copies[i]();
        }
    }
}

function hasRenderWatcher(vm) {
    return queue.find(function (watcher) { return vm._watcher === watcher; })
}

function nextTick$1(vm, cb) {
    //1.nextTick 之前 已 setData 且 setData 还未回调完成
    //2.nextTick 之前存在 render watcher
    if (!vm.__next_tick_pending && !hasRenderWatcher(vm)) {
        if(Object({"VUE_APP_NAME":"仙图壁纸","VUE_APP_PLATFORM":"mp-toutiao","NODE_ENV":"development","BASE_URL":"/"}).VUE_APP_DEBUG){
            var mpInstance = vm.$scope;
            console.log('[' + (+new Date) + '][' + (mpInstance.is || mpInstance.route) + '][' + vm._uid +
                ']:nextVueTick');
        }
        return nextTick(cb, vm)
    }else{
        if(Object({"VUE_APP_NAME":"仙图壁纸","VUE_APP_PLATFORM":"mp-toutiao","NODE_ENV":"development","BASE_URL":"/"}).VUE_APP_DEBUG){
            var mpInstance$1 = vm.$scope;
            console.log('[' + (+new Date) + '][' + (mpInstance$1.is || mpInstance$1.route) + '][' + vm._uid +
                ']:nextMPTick');
        }
    }
    var _resolve;
    if (!vm.__next_tick_callbacks) {
        vm.__next_tick_callbacks = [];
    }
    vm.__next_tick_callbacks.push(function () {
        if (cb) {
            try {
                cb.call(vm);
            } catch (e) {
                handleError(e, vm, 'nextTick');
            }
        } else if (_resolve) {
            _resolve(vm);
        }
    });
    // $flow-disable-line
    if (!cb && typeof Promise !== 'undefined') {
        return new Promise(function (resolve) {
            _resolve = resolve;
        })
    }
}

/*  */

function cloneWithData(vm) {
  // 确保当前 vm 所有数据被同步
  var ret = Object.create(null);
  var dataKeys = [].concat(
    Object.keys(vm._data || {}),
    Object.keys(vm._computedWatchers || {}));

  dataKeys.reduce(function(ret, key) {
    ret[key] = vm[key];
    return ret
  }, ret);

  // vue-composition-api
  var compositionApiState = vm.__composition_api_state__ || vm.__secret_vfa_state__;
  var rawBindings = compositionApiState && compositionApiState.rawBindings;
  if (rawBindings) {
    Object.keys(rawBindings).forEach(function (key) {
      ret[key] = vm[key];
    });
  }

  //TODO 需要把无用数据处理掉，比如 list=>l0 则 list 需要移除，否则多传输一份数据
  Object.assign(ret, vm.$mp.data || {});
  if (
    Array.isArray(vm.$options.behaviors) &&
    vm.$options.behaviors.indexOf('uni://form-field') !== -1
  ) { //form-field
    ret['name'] = vm.name;
    ret['value'] = vm.value;
  }

  return JSON.parse(JSON.stringify(ret))
}

var patch = function(oldVnode, vnode) {
  var this$1 = this;

  if (vnode === null) { //destroy
    return
  }
  if (this.mpType === 'page' || this.mpType === 'component') {
    var mpInstance = this.$scope;
    var data = Object.create(null);
    try {
      data = cloneWithData(this);
    } catch (err) {
      console.error(err);
    }
    data.__webviewId__ = mpInstance.data.__webviewId__;
    var mpData = Object.create(null);
    Object.keys(data).forEach(function (key) { //仅同步 data 中有的数据
      mpData[key] = mpInstance.data[key];
    });
    var diffData = this.$shouldDiffData === false ? data : diff(data, mpData);
    if (Object.keys(diffData).length) {
      if (Object({"VUE_APP_NAME":"仙图壁纸","VUE_APP_PLATFORM":"mp-toutiao","NODE_ENV":"development","BASE_URL":"/"}).VUE_APP_DEBUG) {
        console.log('[' + (+new Date) + '][' + (mpInstance.is || mpInstance.route) + '][' + this._uid +
          ']差量更新',
          JSON.stringify(diffData));
      }
      this.__next_tick_pending = true;
      mpInstance.setData(diffData, function () {
        this$1.__next_tick_pending = false;
        flushCallbacks$1(this$1);
      });
    } else {
      flushCallbacks$1(this);
    }
  }
};

/*  */

function createEmptyRender() {

}

function mountComponent$1(
  vm,
  el,
  hydrating
) {
  if (!vm.mpType) {//main.js 中的 new Vue
    return vm
  }
  if (vm.mpType === 'app') {
    vm.$options.render = createEmptyRender;
  }
  if (!vm.$options.render) {
    vm.$options.render = createEmptyRender;
    if (true) {
      /* istanbul ignore if */
      if ((vm.$options.template && vm.$options.template.charAt(0) !== '#') ||
        vm.$options.el || el) {
        warn(
          'You are using the runtime-only build of Vue where the template ' +
          'compiler is not available. Either pre-compile the templates into ' +
          'render functions, or use the compiler-included build.',
          vm
        );
      } else {
        warn(
          'Failed to mount component: template or render function not defined.',
          vm
        );
      }
    }
  }
  
  !vm._$fallback && callHook(vm, 'beforeMount');

  var updateComponent = function () {
    vm._update(vm._render(), hydrating);
  };

  // we set this to vm._watcher inside the watcher's constructor
  // since the watcher's initial patch may call $forceUpdate (e.g. inside child
  // component's mounted hook), which relies on vm._watcher being already defined
  new Watcher(vm, updateComponent, noop, {
    before: function before() {
      if (vm._isMounted && !vm._isDestroyed) {
        callHook(vm, 'beforeUpdate');
      }
    }
  }, true /* isRenderWatcher */);
  hydrating = false;
  return vm
}

/*  */

function renderClass (
  staticClass,
  dynamicClass
) {
  if (isDef(staticClass) || isDef(dynamicClass)) {
    return concat(staticClass, stringifyClass(dynamicClass))
  }
  /* istanbul ignore next */
  return ''
}

function concat (a, b) {
  return a ? b ? (a + ' ' + b) : a : (b || '')
}

function stringifyClass (value) {
  if (Array.isArray(value)) {
    return stringifyArray(value)
  }
  if (isObject(value)) {
    return stringifyObject(value)
  }
  if (typeof value === 'string') {
    return value
  }
  /* istanbul ignore next */
  return ''
}

function stringifyArray (value) {
  var res = '';
  var stringified;
  for (var i = 0, l = value.length; i < l; i++) {
    if (isDef(stringified = stringifyClass(value[i])) && stringified !== '') {
      if (res) { res += ' '; }
      res += stringified;
    }
  }
  return res
}

function stringifyObject (value) {
  var res = '';
  for (var key in value) {
    if (value[key]) {
      if (res) { res += ' '; }
      res += key;
    }
  }
  return res
}

/*  */

var parseStyleText = cached(function (cssText) {
  var res = {};
  var listDelimiter = /;(?![^(]*\))/g;
  var propertyDelimiter = /:(.+)/;
  cssText.split(listDelimiter).forEach(function (item) {
    if (item) {
      var tmp = item.split(propertyDelimiter);
      tmp.length > 1 && (res[tmp[0].trim()] = tmp[1].trim());
    }
  });
  return res
});

// normalize possible array / string values into Object
function normalizeStyleBinding (bindingStyle) {
  if (Array.isArray(bindingStyle)) {
    return toObject(bindingStyle)
  }
  if (typeof bindingStyle === 'string') {
    return parseStyleText(bindingStyle)
  }
  return bindingStyle
}

/*  */

var MP_METHODS = ['createSelectorQuery', 'createIntersectionObserver', 'selectAllComponents', 'selectComponent'];

function getTarget(obj, path) {
  var parts = path.split('.');
  var key = parts[0];
  if (key.indexOf('__$n') === 0) { //number index
    key = parseInt(key.replace('__$n', ''));
  }
  if (parts.length === 1) {
    return obj[key]
  }
  return getTarget(obj[key], parts.slice(1).join('.'))
}

function internalMixin(Vue) {

  Vue.config.errorHandler = function(err, vm, info) {
    Vue.util.warn(("Error in " + info + ": \"" + (err.toString()) + "\""), vm);
    console.error(err);
    /* eslint-disable no-undef */
    var app = typeof getApp === 'function' && getApp();
    if (app && app.onError) {
      app.onError(err);
    }
  };

  var oldEmit = Vue.prototype.$emit;

  Vue.prototype.$emit = function(event) {
    if (this.$scope && event) {
      (this.$scope['_triggerEvent'] || this.$scope['triggerEvent']).call(this.$scope, event, {
        __args__: toArray(arguments, 1)
      });
    }
    return oldEmit.apply(this, arguments)
  };

  Vue.prototype.$nextTick = function(fn) {
    return nextTick$1(this, fn)
  };

  MP_METHODS.forEach(function (method) {
    Vue.prototype[method] = function(args) {
      if (this.$scope && this.$scope[method]) {
        return this.$scope[method](args)
      }
      // mp-alipay
      if (typeof my === 'undefined') {
        return
      }
      if (method === 'createSelectorQuery') {
        /* eslint-disable no-undef */
        return my.createSelectorQuery(args)
      } else if (method === 'createIntersectionObserver') {
        /* eslint-disable no-undef */
        return my.createIntersectionObserver(args)
      }
      // TODO mp-alipay 暂不支持 selectAllComponents,selectComponent
    };
  });

  Vue.prototype.__init_provide = initProvide;

  Vue.prototype.__init_injections = initInjections;

  Vue.prototype.__call_hook = function(hook, args) {
    var vm = this;
    // #7573 disable dep collection when invoking lifecycle hooks
    pushTarget();
    var handlers = vm.$options[hook];
    var info = hook + " hook";
    var ret;
    if (handlers) {
      for (var i = 0, j = handlers.length; i < j; i++) {
        ret = invokeWithErrorHandling(handlers[i], vm, args ? [args] : null, vm, info);
      }
    }
    if (vm._hasHookEvent) {
      vm.$emit('hook:' + hook, args);
    }
    popTarget();
    return ret
  };

  Vue.prototype.__set_model = function(target, key, value, modifiers) {
    if (Array.isArray(modifiers)) {
      if (modifiers.indexOf('trim') !== -1) {
        value = value.trim();
      }
      if (modifiers.indexOf('number') !== -1) {
        value = this._n(value);
      }
    }
    if (!target) {
      target = this;
    }
    // 解决动态属性添加
    Vue.set(target, key, value);
  };

  Vue.prototype.__set_sync = function(target, key, value) {
    if (!target) {
      target = this;
    }
    // 解决动态属性添加
    Vue.set(target, key, value);
  };

  Vue.prototype.__get_orig = function(item) {
    if (isPlainObject(item)) {
      return item['$orig'] || item
    }
    return item
  };

  Vue.prototype.__get_value = function(dataPath, target) {
    return getTarget(target || this, dataPath)
  };


  Vue.prototype.__get_class = function(dynamicClass, staticClass) {
    return renderClass(staticClass, dynamicClass)
  };

  Vue.prototype.__get_style = function(dynamicStyle, staticStyle) {
    if (!dynamicStyle && !staticStyle) {
      return ''
    }
    var dynamicStyleObj = normalizeStyleBinding(dynamicStyle);
    var styleObj = staticStyle ? extend(staticStyle, dynamicStyleObj) : dynamicStyleObj;
    return Object.keys(styleObj).map(function (name) { return ((hyphenate(name)) + ":" + (styleObj[name])); }).join(';')
  };

  Vue.prototype.__map = function(val, iteratee) {
    //TODO 暂不考虑 string
    var ret, i, l, keys, key;
    if (Array.isArray(val)) {
      ret = new Array(val.length);
      for (i = 0, l = val.length; i < l; i++) {
        ret[i] = iteratee(val[i], i);
      }
      return ret
    } else if (isObject(val)) {
      keys = Object.keys(val);
      ret = Object.create(null);
      for (i = 0, l = keys.length; i < l; i++) {
        key = keys[i];
        ret[key] = iteratee(val[key], key, i);
      }
      return ret
    } else if (typeof val === 'number') {
      ret = new Array(val);
      for (i = 0, l = val; i < l; i++) {
        // 第一个参数暂时仍和小程序一致
        ret[i] = iteratee(i, i);
      }
      return ret
    }
    return []
  };

}

/*  */

var LIFECYCLE_HOOKS$1 = [
    //App
    'onLaunch',
    'onShow',
    'onHide',
    'onUniNViewMessage',
    'onPageNotFound',
    'onThemeChange',
    'onError',
    'onUnhandledRejection',
    //Page
    'onInit',
    'onLoad',
    // 'onShow',
    'onReady',
    // 'onHide',
    'onUnload',
    'onPullDownRefresh',
    'onReachBottom',
    'onTabItemTap',
    'onAddToFavorites',
    'onShareTimeline',
    'onShareAppMessage',
    'onResize',
    'onPageScroll',
    'onNavigationBarButtonTap',
    'onBackPress',
    'onNavigationBarSearchInputChanged',
    'onNavigationBarSearchInputConfirmed',
    'onNavigationBarSearchInputClicked',
    //Component
    // 'onReady', // 兼容旧版本，应该移除该事件
    'onPageShow',
    'onPageHide',
    'onPageResize'
];
function lifecycleMixin$1(Vue) {

    //fixed vue-class-component
    var oldExtend = Vue.extend;
    Vue.extend = function(extendOptions) {
        extendOptions = extendOptions || {};

        var methods = extendOptions.methods;
        if (methods) {
            Object.keys(methods).forEach(function (methodName) {
                if (LIFECYCLE_HOOKS$1.indexOf(methodName)!==-1) {
                    extendOptions[methodName] = methods[methodName];
                    delete methods[methodName];
                }
            });
        }

        return oldExtend.call(this, extendOptions)
    };

    var strategies = Vue.config.optionMergeStrategies;
    var mergeHook = strategies.created;
    LIFECYCLE_HOOKS$1.forEach(function (hook) {
        strategies[hook] = mergeHook;
    });

    Vue.prototype.__lifecycle_hooks__ = LIFECYCLE_HOOKS$1;
}

/*  */

// install platform patch function
Vue.prototype.__patch__ = patch;

// public mount method
Vue.prototype.$mount = function(
    el ,
    hydrating 
) {
    return mountComponent$1(this, el, hydrating)
};

lifecycleMixin$1(Vue);
internalMixin(Vue);

/*  */

/* harmony default export */ __webpack_exports__["default"] = (Vue);

/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../../../../../webpack/buildin/global.js */ 2)))

/***/ }),
/* 5 */
/*!******************************************!*\
  !*** D:/Desktop/云云取图/云云取图-前端/pages.json ***!
  \******************************************/
/*! no static exports found */
/***/ (function(module, exports) {



/***/ }),
/* 6 */,
/* 7 */,
/* 8 */,
/* 9 */
/*!**********************************************************!*\
  !*** ./node_modules/@babel/runtime/regenerator/index.js ***!
  \**********************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! regenerator-runtime */ 10);

/***/ }),
/* 10 */
/*!************************************************************!*\
  !*** ./node_modules/regenerator-runtime/runtime-module.js ***!
  \************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

/**
 * Copyright (c) 2014-present, Facebook, Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */

// This method of obtaining a reference to the global object needs to be
// kept identical to the way it is obtained in runtime.js
var g = (function() {
  return this || (typeof self === "object" && self);
})() || Function("return this")();

// Use `getOwnPropertyNames` because not all browsers support calling
// `hasOwnProperty` on the global `self` object in a worker. See #183.
var hadRuntime = g.regeneratorRuntime &&
  Object.getOwnPropertyNames(g).indexOf("regeneratorRuntime") >= 0;

// Save the old regeneratorRuntime in case it needs to be restored later.
var oldRuntime = hadRuntime && g.regeneratorRuntime;

// Force reevalutation of runtime.js.
g.regeneratorRuntime = undefined;

module.exports = __webpack_require__(/*! ./runtime */ 11);

if (hadRuntime) {
  // Restore the original runtime.
  g.regeneratorRuntime = oldRuntime;
} else {
  // Remove the global property added by runtime.js.
  try {
    delete g.regeneratorRuntime;
  } catch(e) {
    g.regeneratorRuntime = undefined;
  }
}


/***/ }),
/* 11 */
/*!*****************************************************!*\
  !*** ./node_modules/regenerator-runtime/runtime.js ***!
  \*****************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

/**
 * Copyright (c) 2014-present, Facebook, Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */

!(function(global) {
  "use strict";

  var Op = Object.prototype;
  var hasOwn = Op.hasOwnProperty;
  var undefined; // More compressible than void 0.
  var $Symbol = typeof Symbol === "function" ? Symbol : {};
  var iteratorSymbol = $Symbol.iterator || "@@iterator";
  var asyncIteratorSymbol = $Symbol.asyncIterator || "@@asyncIterator";
  var toStringTagSymbol = $Symbol.toStringTag || "@@toStringTag";

  var inModule = typeof module === "object";
  var runtime = global.regeneratorRuntime;
  if (runtime) {
    if (inModule) {
      // If regeneratorRuntime is defined globally and we're in a module,
      // make the exports object identical to regeneratorRuntime.
      module.exports = runtime;
    }
    // Don't bother evaluating the rest of this file if the runtime was
    // already defined globally.
    return;
  }

  // Define the runtime globally (as expected by generated code) as either
  // module.exports (if we're in a module) or a new, empty object.
  runtime = global.regeneratorRuntime = inModule ? module.exports : {};

  function wrap(innerFn, outerFn, self, tryLocsList) {
    // If outerFn provided and outerFn.prototype is a Generator, then outerFn.prototype instanceof Generator.
    var protoGenerator = outerFn && outerFn.prototype instanceof Generator ? outerFn : Generator;
    var generator = Object.create(protoGenerator.prototype);
    var context = new Context(tryLocsList || []);

    // The ._invoke method unifies the implementations of the .next,
    // .throw, and .return methods.
    generator._invoke = makeInvokeMethod(innerFn, self, context);

    return generator;
  }
  runtime.wrap = wrap;

  // Try/catch helper to minimize deoptimizations. Returns a completion
  // record like context.tryEntries[i].completion. This interface could
  // have been (and was previously) designed to take a closure to be
  // invoked without arguments, but in all the cases we care about we
  // already have an existing method we want to call, so there's no need
  // to create a new function object. We can even get away with assuming
  // the method takes exactly one argument, since that happens to be true
  // in every case, so we don't have to touch the arguments object. The
  // only additional allocation required is the completion record, which
  // has a stable shape and so hopefully should be cheap to allocate.
  function tryCatch(fn, obj, arg) {
    try {
      return { type: "normal", arg: fn.call(obj, arg) };
    } catch (err) {
      return { type: "throw", arg: err };
    }
  }

  var GenStateSuspendedStart = "suspendedStart";
  var GenStateSuspendedYield = "suspendedYield";
  var GenStateExecuting = "executing";
  var GenStateCompleted = "completed";

  // Returning this object from the innerFn has the same effect as
  // breaking out of the dispatch switch statement.
  var ContinueSentinel = {};

  // Dummy constructor functions that we use as the .constructor and
  // .constructor.prototype properties for functions that return Generator
  // objects. For full spec compliance, you may wish to configure your
  // minifier not to mangle the names of these two functions.
  function Generator() {}
  function GeneratorFunction() {}
  function GeneratorFunctionPrototype() {}

  // This is a polyfill for %IteratorPrototype% for environments that
  // don't natively support it.
  var IteratorPrototype = {};
  IteratorPrototype[iteratorSymbol] = function () {
    return this;
  };

  var getProto = Object.getPrototypeOf;
  var NativeIteratorPrototype = getProto && getProto(getProto(values([])));
  if (NativeIteratorPrototype &&
      NativeIteratorPrototype !== Op &&
      hasOwn.call(NativeIteratorPrototype, iteratorSymbol)) {
    // This environment has a native %IteratorPrototype%; use it instead
    // of the polyfill.
    IteratorPrototype = NativeIteratorPrototype;
  }

  var Gp = GeneratorFunctionPrototype.prototype =
    Generator.prototype = Object.create(IteratorPrototype);
  GeneratorFunction.prototype = Gp.constructor = GeneratorFunctionPrototype;
  GeneratorFunctionPrototype.constructor = GeneratorFunction;
  GeneratorFunctionPrototype[toStringTagSymbol] =
    GeneratorFunction.displayName = "GeneratorFunction";

  // Helper for defining the .next, .throw, and .return methods of the
  // Iterator interface in terms of a single ._invoke method.
  function defineIteratorMethods(prototype) {
    ["next", "throw", "return"].forEach(function(method) {
      prototype[method] = function(arg) {
        return this._invoke(method, arg);
      };
    });
  }

  runtime.isGeneratorFunction = function(genFun) {
    var ctor = typeof genFun === "function" && genFun.constructor;
    return ctor
      ? ctor === GeneratorFunction ||
        // For the native GeneratorFunction constructor, the best we can
        // do is to check its .name property.
        (ctor.displayName || ctor.name) === "GeneratorFunction"
      : false;
  };

  runtime.mark = function(genFun) {
    if (Object.setPrototypeOf) {
      Object.setPrototypeOf(genFun, GeneratorFunctionPrototype);
    } else {
      genFun.__proto__ = GeneratorFunctionPrototype;
      if (!(toStringTagSymbol in genFun)) {
        genFun[toStringTagSymbol] = "GeneratorFunction";
      }
    }
    genFun.prototype = Object.create(Gp);
    return genFun;
  };

  // Within the body of any async function, `await x` is transformed to
  // `yield regeneratorRuntime.awrap(x)`, so that the runtime can test
  // `hasOwn.call(value, "__await")` to determine if the yielded value is
  // meant to be awaited.
  runtime.awrap = function(arg) {
    return { __await: arg };
  };

  function AsyncIterator(generator) {
    function invoke(method, arg, resolve, reject) {
      var record = tryCatch(generator[method], generator, arg);
      if (record.type === "throw") {
        reject(record.arg);
      } else {
        var result = record.arg;
        var value = result.value;
        if (value &&
            typeof value === "object" &&
            hasOwn.call(value, "__await")) {
          return Promise.resolve(value.__await).then(function(value) {
            invoke("next", value, resolve, reject);
          }, function(err) {
            invoke("throw", err, resolve, reject);
          });
        }

        return Promise.resolve(value).then(function(unwrapped) {
          // When a yielded Promise is resolved, its final value becomes
          // the .value of the Promise<{value,done}> result for the
          // current iteration.
          result.value = unwrapped;
          resolve(result);
        }, function(error) {
          // If a rejected Promise was yielded, throw the rejection back
          // into the async generator function so it can be handled there.
          return invoke("throw", error, resolve, reject);
        });
      }
    }

    var previousPromise;

    function enqueue(method, arg) {
      function callInvokeWithMethodAndArg() {
        return new Promise(function(resolve, reject) {
          invoke(method, arg, resolve, reject);
        });
      }

      return previousPromise =
        // If enqueue has been called before, then we want to wait until
        // all previous Promises have been resolved before calling invoke,
        // so that results are always delivered in the correct order. If
        // enqueue has not been called before, then it is important to
        // call invoke immediately, without waiting on a callback to fire,
        // so that the async generator function has the opportunity to do
        // any necessary setup in a predictable way. This predictability
        // is why the Promise constructor synchronously invokes its
        // executor callback, and why async functions synchronously
        // execute code before the first await. Since we implement simple
        // async functions in terms of async generators, it is especially
        // important to get this right, even though it requires care.
        previousPromise ? previousPromise.then(
          callInvokeWithMethodAndArg,
          // Avoid propagating failures to Promises returned by later
          // invocations of the iterator.
          callInvokeWithMethodAndArg
        ) : callInvokeWithMethodAndArg();
    }

    // Define the unified helper method that is used to implement .next,
    // .throw, and .return (see defineIteratorMethods).
    this._invoke = enqueue;
  }

  defineIteratorMethods(AsyncIterator.prototype);
  AsyncIterator.prototype[asyncIteratorSymbol] = function () {
    return this;
  };
  runtime.AsyncIterator = AsyncIterator;

  // Note that simple async functions are implemented on top of
  // AsyncIterator objects; they just return a Promise for the value of
  // the final result produced by the iterator.
  runtime.async = function(innerFn, outerFn, self, tryLocsList) {
    var iter = new AsyncIterator(
      wrap(innerFn, outerFn, self, tryLocsList)
    );

    return runtime.isGeneratorFunction(outerFn)
      ? iter // If outerFn is a generator, return the full iterator.
      : iter.next().then(function(result) {
          return result.done ? result.value : iter.next();
        });
  };

  function makeInvokeMethod(innerFn, self, context) {
    var state = GenStateSuspendedStart;

    return function invoke(method, arg) {
      if (state === GenStateExecuting) {
        throw new Error("Generator is already running");
      }

      if (state === GenStateCompleted) {
        if (method === "throw") {
          throw arg;
        }

        // Be forgiving, per 25.3.3.3.3 of the spec:
        // https://people.mozilla.org/~jorendorff/es6-draft.html#sec-generatorresume
        return doneResult();
      }

      context.method = method;
      context.arg = arg;

      while (true) {
        var delegate = context.delegate;
        if (delegate) {
          var delegateResult = maybeInvokeDelegate(delegate, context);
          if (delegateResult) {
            if (delegateResult === ContinueSentinel) continue;
            return delegateResult;
          }
        }

        if (context.method === "next") {
          // Setting context._sent for legacy support of Babel's
          // function.sent implementation.
          context.sent = context._sent = context.arg;

        } else if (context.method === "throw") {
          if (state === GenStateSuspendedStart) {
            state = GenStateCompleted;
            throw context.arg;
          }

          context.dispatchException(context.arg);

        } else if (context.method === "return") {
          context.abrupt("return", context.arg);
        }

        state = GenStateExecuting;

        var record = tryCatch(innerFn, self, context);
        if (record.type === "normal") {
          // If an exception is thrown from innerFn, we leave state ===
          // GenStateExecuting and loop back for another invocation.
          state = context.done
            ? GenStateCompleted
            : GenStateSuspendedYield;

          if (record.arg === ContinueSentinel) {
            continue;
          }

          return {
            value: record.arg,
            done: context.done
          };

        } else if (record.type === "throw") {
          state = GenStateCompleted;
          // Dispatch the exception by looping back around to the
          // context.dispatchException(context.arg) call above.
          context.method = "throw";
          context.arg = record.arg;
        }
      }
    };
  }

  // Call delegate.iterator[context.method](context.arg) and handle the
  // result, either by returning a { value, done } result from the
  // delegate iterator, or by modifying context.method and context.arg,
  // setting context.delegate to null, and returning the ContinueSentinel.
  function maybeInvokeDelegate(delegate, context) {
    var method = delegate.iterator[context.method];
    if (method === undefined) {
      // A .throw or .return when the delegate iterator has no .throw
      // method always terminates the yield* loop.
      context.delegate = null;

      if (context.method === "throw") {
        if (delegate.iterator.return) {
          // If the delegate iterator has a return method, give it a
          // chance to clean up.
          context.method = "return";
          context.arg = undefined;
          maybeInvokeDelegate(delegate, context);

          if (context.method === "throw") {
            // If maybeInvokeDelegate(context) changed context.method from
            // "return" to "throw", let that override the TypeError below.
            return ContinueSentinel;
          }
        }

        context.method = "throw";
        context.arg = new TypeError(
          "The iterator does not provide a 'throw' method");
      }

      return ContinueSentinel;
    }

    var record = tryCatch(method, delegate.iterator, context.arg);

    if (record.type === "throw") {
      context.method = "throw";
      context.arg = record.arg;
      context.delegate = null;
      return ContinueSentinel;
    }

    var info = record.arg;

    if (! info) {
      context.method = "throw";
      context.arg = new TypeError("iterator result is not an object");
      context.delegate = null;
      return ContinueSentinel;
    }

    if (info.done) {
      // Assign the result of the finished delegate to the temporary
      // variable specified by delegate.resultName (see delegateYield).
      context[delegate.resultName] = info.value;

      // Resume execution at the desired location (see delegateYield).
      context.next = delegate.nextLoc;

      // If context.method was "throw" but the delegate handled the
      // exception, let the outer generator proceed normally. If
      // context.method was "next", forget context.arg since it has been
      // "consumed" by the delegate iterator. If context.method was
      // "return", allow the original .return call to continue in the
      // outer generator.
      if (context.method !== "return") {
        context.method = "next";
        context.arg = undefined;
      }

    } else {
      // Re-yield the result returned by the delegate method.
      return info;
    }

    // The delegate iterator is finished, so forget it and continue with
    // the outer generator.
    context.delegate = null;
    return ContinueSentinel;
  }

  // Define Generator.prototype.{next,throw,return} in terms of the
  // unified ._invoke helper method.
  defineIteratorMethods(Gp);

  Gp[toStringTagSymbol] = "Generator";

  // A Generator should always return itself as the iterator object when the
  // @@iterator function is called on it. Some browsers' implementations of the
  // iterator prototype chain incorrectly implement this, causing the Generator
  // object to not be returned from this call. This ensures that doesn't happen.
  // See https://github.com/facebook/regenerator/issues/274 for more details.
  Gp[iteratorSymbol] = function() {
    return this;
  };

  Gp.toString = function() {
    return "[object Generator]";
  };

  function pushTryEntry(locs) {
    var entry = { tryLoc: locs[0] };

    if (1 in locs) {
      entry.catchLoc = locs[1];
    }

    if (2 in locs) {
      entry.finallyLoc = locs[2];
      entry.afterLoc = locs[3];
    }

    this.tryEntries.push(entry);
  }

  function resetTryEntry(entry) {
    var record = entry.completion || {};
    record.type = "normal";
    delete record.arg;
    entry.completion = record;
  }

  function Context(tryLocsList) {
    // The root entry object (effectively a try statement without a catch
    // or a finally block) gives us a place to store values thrown from
    // locations where there is no enclosing try statement.
    this.tryEntries = [{ tryLoc: "root" }];
    tryLocsList.forEach(pushTryEntry, this);
    this.reset(true);
  }

  runtime.keys = function(object) {
    var keys = [];
    for (var key in object) {
      keys.push(key);
    }
    keys.reverse();

    // Rather than returning an object with a next method, we keep
    // things simple and return the next function itself.
    return function next() {
      while (keys.length) {
        var key = keys.pop();
        if (key in object) {
          next.value = key;
          next.done = false;
          return next;
        }
      }

      // To avoid creating an additional object, we just hang the .value
      // and .done properties off the next function object itself. This
      // also ensures that the minifier will not anonymize the function.
      next.done = true;
      return next;
    };
  };

  function values(iterable) {
    if (iterable) {
      var iteratorMethod = iterable[iteratorSymbol];
      if (iteratorMethod) {
        return iteratorMethod.call(iterable);
      }

      if (typeof iterable.next === "function") {
        return iterable;
      }

      if (!isNaN(iterable.length)) {
        var i = -1, next = function next() {
          while (++i < iterable.length) {
            if (hasOwn.call(iterable, i)) {
              next.value = iterable[i];
              next.done = false;
              return next;
            }
          }

          next.value = undefined;
          next.done = true;

          return next;
        };

        return next.next = next;
      }
    }

    // Return an iterator with no values.
    return { next: doneResult };
  }
  runtime.values = values;

  function doneResult() {
    return { value: undefined, done: true };
  }

  Context.prototype = {
    constructor: Context,

    reset: function(skipTempReset) {
      this.prev = 0;
      this.next = 0;
      // Resetting context._sent for legacy support of Babel's
      // function.sent implementation.
      this.sent = this._sent = undefined;
      this.done = false;
      this.delegate = null;

      this.method = "next";
      this.arg = undefined;

      this.tryEntries.forEach(resetTryEntry);

      if (!skipTempReset) {
        for (var name in this) {
          // Not sure about the optimal order of these conditions:
          if (name.charAt(0) === "t" &&
              hasOwn.call(this, name) &&
              !isNaN(+name.slice(1))) {
            this[name] = undefined;
          }
        }
      }
    },

    stop: function() {
      this.done = true;

      var rootEntry = this.tryEntries[0];
      var rootRecord = rootEntry.completion;
      if (rootRecord.type === "throw") {
        throw rootRecord.arg;
      }

      return this.rval;
    },

    dispatchException: function(exception) {
      if (this.done) {
        throw exception;
      }

      var context = this;
      function handle(loc, caught) {
        record.type = "throw";
        record.arg = exception;
        context.next = loc;

        if (caught) {
          // If the dispatched exception was caught by a catch block,
          // then let that catch block handle the exception normally.
          context.method = "next";
          context.arg = undefined;
        }

        return !! caught;
      }

      for (var i = this.tryEntries.length - 1; i >= 0; --i) {
        var entry = this.tryEntries[i];
        var record = entry.completion;

        if (entry.tryLoc === "root") {
          // Exception thrown outside of any try block that could handle
          // it, so set the completion value of the entire function to
          // throw the exception.
          return handle("end");
        }

        if (entry.tryLoc <= this.prev) {
          var hasCatch = hasOwn.call(entry, "catchLoc");
          var hasFinally = hasOwn.call(entry, "finallyLoc");

          if (hasCatch && hasFinally) {
            if (this.prev < entry.catchLoc) {
              return handle(entry.catchLoc, true);
            } else if (this.prev < entry.finallyLoc) {
              return handle(entry.finallyLoc);
            }

          } else if (hasCatch) {
            if (this.prev < entry.catchLoc) {
              return handle(entry.catchLoc, true);
            }

          } else if (hasFinally) {
            if (this.prev < entry.finallyLoc) {
              return handle(entry.finallyLoc);
            }

          } else {
            throw new Error("try statement without catch or finally");
          }
        }
      }
    },

    abrupt: function(type, arg) {
      for (var i = this.tryEntries.length - 1; i >= 0; --i) {
        var entry = this.tryEntries[i];
        if (entry.tryLoc <= this.prev &&
            hasOwn.call(entry, "finallyLoc") &&
            this.prev < entry.finallyLoc) {
          var finallyEntry = entry;
          break;
        }
      }

      if (finallyEntry &&
          (type === "break" ||
           type === "continue") &&
          finallyEntry.tryLoc <= arg &&
          arg <= finallyEntry.finallyLoc) {
        // Ignore the finally entry if control is not jumping to a
        // location outside the try/catch block.
        finallyEntry = null;
      }

      var record = finallyEntry ? finallyEntry.completion : {};
      record.type = type;
      record.arg = arg;

      if (finallyEntry) {
        this.method = "next";
        this.next = finallyEntry.finallyLoc;
        return ContinueSentinel;
      }

      return this.complete(record);
    },

    complete: function(record, afterLoc) {
      if (record.type === "throw") {
        throw record.arg;
      }

      if (record.type === "break" ||
          record.type === "continue") {
        this.next = record.arg;
      } else if (record.type === "return") {
        this.rval = this.arg = record.arg;
        this.method = "return";
        this.next = "end";
      } else if (record.type === "normal" && afterLoc) {
        this.next = afterLoc;
      }

      return ContinueSentinel;
    },

    finish: function(finallyLoc) {
      for (var i = this.tryEntries.length - 1; i >= 0; --i) {
        var entry = this.tryEntries[i];
        if (entry.finallyLoc === finallyLoc) {
          this.complete(entry.completion, entry.afterLoc);
          resetTryEntry(entry);
          return ContinueSentinel;
        }
      }
    },

    "catch": function(tryLoc) {
      for (var i = this.tryEntries.length - 1; i >= 0; --i) {
        var entry = this.tryEntries[i];
        if (entry.tryLoc === tryLoc) {
          var record = entry.completion;
          if (record.type === "throw") {
            var thrown = record.arg;
            resetTryEntry(entry);
          }
          return thrown;
        }
      }

      // The context.catch method must only be called with a location
      // argument that corresponds to a known catch block.
      throw new Error("illegal catch attempt");
    },

    delegateYield: function(iterable, resultName, nextLoc) {
      this.delegate = {
        iterator: values(iterable),
        resultName: resultName,
        nextLoc: nextLoc
      };

      if (this.method === "next") {
        // Deliberately forget the last sent value so that we don't
        // accidentally pass it on to the delegate.
        this.arg = undefined;
      }

      return ContinueSentinel;
    }
  };
})(
  // In sloppy mode, unbound `this` refers to the global object, fallback to
  // Function constructor if we're in global strict mode. That is sadly a form
  // of indirect eval which violates Content Security Policy.
  (function() {
    return this || (typeof self === "object" && self);
  })() || Function("return this")()
);


/***/ }),
/* 12 */
/*!***********************************************!*\
  !*** D:/Desktop/云云取图/云云取图-前端/utils/config.js ***!
  \***********************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
Object.defineProperty(exports, "__esModule", { value: true });exports.default = void 0;var API;
if (true) {
  API = 'https://xingxing.qutubao.com/';
} else {}var _default =
{
  API: API };exports.default = _default;

/***/ }),
/* 13 */
/*!************************************************!*\
  !*** D:/Desktop/云云取图/云云取图-前端/utils/request.js ***!
  \************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/* WEBPACK VAR INJECTION */(function(uni) {Object.defineProperty(exports, "__esModule", { value: true });exports.default = void 0;var _regenerator = _interopRequireDefault(__webpack_require__(/*! ./node_modules/@babel/runtime/regenerator */ 9));function _interopRequireDefault(obj) {return obj && obj.__esModule ? obj : { default: obj };}function asyncGeneratorStep(gen, resolve, reject, _next, _throw, key, arg) {try {var info = gen[key](arg);var value = info.value;} catch (error) {reject(error);return;}if (info.done) {resolve(value);} else {Promise.resolve(value).then(_next, _throw);}}function _asyncToGenerator(fn) {return function () {var self = this,args = arguments;return new Promise(function (resolve, reject) {var gen = fn.apply(self, args);function _next(value) {asyncGeneratorStep(gen, resolve, reject, _next, _throw, "next", value);}function _throw(err) {asyncGeneratorStep(gen, resolve, reject, _next, _throw, "throw", err);}_next(undefined);});};}var _default = /*#__PURE__*/function () {var _ref = _asyncToGenerator( /*#__PURE__*/_regenerator.default.mark(function _callee(options) {var r;return _regenerator.default.wrap(function _callee$(_context) {while (1) {switch (_context.prev = _context.next) {case 0:if (
            options.url) {_context.next = 2;break;}return _context.abrupt("return",
            console.warn('请传入url'));case 2:_context.next = 4;return (

              uni.request(options));case 4:r = _context.sent;return _context.abrupt("return",
            r && r.data ? r.data : r[1] ? r[1].data : {});case 6:case "end":return _context.stop();}}}, _callee);}));return function (_x) {return _ref.apply(this, arguments);};}();exports.default = _default;
/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./node_modules/@dcloudio/uni-mp-toutiao/dist/index.js */ 1)["default"]))

/***/ }),
/* 14 */,
/* 15 */,
/* 16 */
/*!**********************************************************************************************************!*\
  !*** ./node_modules/@dcloudio/vue-cli-plugin-uni/packages/vue-loader/lib/runtime/componentNormalizer.js ***!
  \**********************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return normalizeComponent; });
/* globals __VUE_SSR_CONTEXT__ */

// IMPORTANT: Do NOT use ES2015 features in this file (except for modules).
// This module is a runtime utility for cleaner component module output and will
// be included in the final webpack user bundle.

function normalizeComponent (
  scriptExports,
  render,
  staticRenderFns,
  functionalTemplate,
  injectStyles,
  scopeId,
  moduleIdentifier, /* server only */
  shadowMode, /* vue-cli only */
  components, // fixed by xxxxxx auto components
  renderjs // fixed by xxxxxx renderjs
) {
  // Vue.extend constructor export interop
  var options = typeof scriptExports === 'function'
    ? scriptExports.options
    : scriptExports

  // fixed by xxxxxx auto components
  if (components) {
    if (!options.components) {
      options.components = {}
    }
    var hasOwn = Object.prototype.hasOwnProperty
    for (var name in components) {
      if (hasOwn.call(components, name) && !hasOwn.call(options.components, name)) {
        options.components[name] = components[name]
      }
    }
  }
  // fixed by xxxxxx renderjs
  if (renderjs) {
    (renderjs.beforeCreate || (renderjs.beforeCreate = [])).unshift(function() {
      this[renderjs.__module] = this
    });
    (options.mixins || (options.mixins = [])).push(renderjs)
  }

  // render functions
  if (render) {
    options.render = render
    options.staticRenderFns = staticRenderFns
    options._compiled = true
  }

  // functional template
  if (functionalTemplate) {
    options.functional = true
  }

  // scopedId
  if (scopeId) {
    options._scopeId = 'data-v-' + scopeId
  }

  var hook
  if (moduleIdentifier) { // server build
    hook = function (context) {
      // 2.3 injection
      context =
        context || // cached call
        (this.$vnode && this.$vnode.ssrContext) || // stateful
        (this.parent && this.parent.$vnode && this.parent.$vnode.ssrContext) // functional
      // 2.2 with runInNewContext: true
      if (!context && typeof __VUE_SSR_CONTEXT__ !== 'undefined') {
        context = __VUE_SSR_CONTEXT__
      }
      // inject component styles
      if (injectStyles) {
        injectStyles.call(this, context)
      }
      // register component module identifier for async chunk inferrence
      if (context && context._registeredComponents) {
        context._registeredComponents.add(moduleIdentifier)
      }
    }
    // used by ssr in case component is cached and beforeCreate
    // never gets called
    options._ssrRegister = hook
  } else if (injectStyles) {
    hook = shadowMode
      ? function () { injectStyles.call(this, this.$root.$options.shadowRoot) }
      : injectStyles
  }

  if (hook) {
    if (options.functional) {
      // for template-only hot-reload because in that case the render fn doesn't
      // go through the normalizer
      options._injectStyles = hook
      // register for functioal component in vue file
      var originalRender = options.render
      options.render = function renderWithStyleInjection (h, context) {
        hook.call(context)
        return originalRender(h, context)
      }
    } else {
      // inject component registration as beforeCreate hook
      var existing = options.beforeCreate
      options.beforeCreate = existing
        ? [].concat(existing, hook)
        : [hook]
    }
  }

  return {
    exports: scriptExports,
    options: options
  }
}


/***/ }),
/* 17 */,
/* 18 */,
/* 19 */,
/* 20 */,
/* 21 */,
/* 22 */,
/* 23 */
/*!**********************************************!*\
  !*** D:/Desktop/云云取图/云云取图-前端/utils/utils.js ***!
  \**********************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/* WEBPACK VAR INJECTION */(function(uni) {Object.defineProperty(exports, "__esModule", { value: true });exports.default = void 0;var _default = {
  systemInfo: function systemInfo() {
    try {
      var systeminfo = uni.getSystemInfoSync();
      return {
        windowWidth: systeminfo.windowWidth,
        windowHeight: systeminfo.windowHeight,
        pixedRatio: systeminfo.pixelRatio };

    } catch (e) {
      return {};
    }
  },

  toast: function toast(text) {
    return uni.showToast({
      title: text,
      icon: 'none' });

  } };exports.default = _default;
/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./node_modules/@dcloudio/uni-mp-toutiao/dist/index.js */ 1)["default"]))

/***/ })
]]);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvQGRjbG91ZGlvL3VuaS1tcC10b3V0aWFvL2Rpc3QvaW5kZXguanM/ZjI2NiIsIndlYnBhY2s6Ly8vKHdlYnBhY2spL2J1aWxkaW4vZ2xvYmFsLmpzP2NkMDAiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL0BkY2xvdWRpby91bmktaTE4bi9kaXN0L3VuaS1pMThuLmVzLmpzPzM3ZGMiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL0BkY2xvdWRpby92dWUtY2xpLXBsdWdpbi11bmkvcGFja2FnZXMvbXAtdnVlL2Rpc3QvbXAucnVudGltZS5lc20uanM/NjZmZCIsIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvQGJhYmVsL3J1bnRpbWUvcmVnZW5lcmF0b3IvaW5kZXguanM/YTM0YSIsIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvcmVnZW5lcmF0b3ItcnVudGltZS9ydW50aW1lLW1vZHVsZS5qcz9iYmRkIiwid2VicGFjazovLy8uL25vZGVfbW9kdWxlcy9yZWdlbmVyYXRvci1ydW50aW1lL3J1bnRpbWUuanM/OTZjZiIsInVuaS1hcHA6Ly8vdXRpbHMvY29uZmlnLmpzIiwidW5pLWFwcDovLy91dGlscy9yZXF1ZXN0LmpzIiwid2VicGFjazovLy8uL25vZGVfbW9kdWxlcy9AZGNsb3VkaW8vdnVlLWNsaS1wbHVnaW4tdW5pL3BhY2thZ2VzL3Z1ZS1sb2FkZXIvbGliL3J1bnRpbWUvY29tcG9uZW50Tm9ybWFsaXplci5qcz9mMGM1IiwidW5pLWFwcDovLy91dGlscy91dGlscy5qcyJdLCJuYW1lcyI6WyJyZWFsQXRvYiIsImI2NCIsImI2NHJlIiwiYXRvYiIsInN0ciIsIlN0cmluZyIsInJlcGxhY2UiLCJ0ZXN0IiwiRXJyb3IiLCJzbGljZSIsImxlbmd0aCIsImJpdG1hcCIsInJlc3VsdCIsInIxIiwicjIiLCJpIiwiaW5kZXhPZiIsImNoYXJBdCIsImZyb21DaGFyQ29kZSIsImI2NERlY29kZVVuaWNvZGUiLCJkZWNvZGVVUklDb21wb25lbnQiLCJzcGxpdCIsIm1hcCIsImMiLCJjaGFyQ29kZUF0IiwidG9TdHJpbmciLCJqb2luIiwiZ2V0Q3VycmVudFVzZXJJbmZvIiwidG9rZW4iLCJ0dCIsImdldFN0b3JhZ2VTeW5jIiwidG9rZW5BcnIiLCJ1aWQiLCJyb2xlIiwicGVybWlzc2lvbiIsInRva2VuRXhwaXJlZCIsInVzZXJJbmZvIiwiSlNPTiIsInBhcnNlIiwiZXJyb3IiLCJtZXNzYWdlIiwiZXhwIiwiaWF0IiwidW5pSWRNaXhpbiIsIlZ1ZSIsInByb3RvdHlwZSIsInVuaUlESGFzUm9sZSIsInJvbGVJZCIsInVuaUlESGFzUGVybWlzc2lvbiIsInBlcm1pc3Npb25JZCIsInVuaUlEVG9rZW5WYWxpZCIsIkRhdGUiLCJub3ciLCJfdG9TdHJpbmciLCJPYmplY3QiLCJoYXNPd25Qcm9wZXJ0eSIsImlzRm4iLCJmbiIsImlzU3RyIiwiaXNQbGFpbk9iamVjdCIsIm9iaiIsImNhbGwiLCJoYXNPd24iLCJrZXkiLCJub29wIiwiY2FjaGVkIiwiY2FjaGUiLCJjcmVhdGUiLCJjYWNoZWRGbiIsImhpdCIsImNhbWVsaXplUkUiLCJjYW1lbGl6ZSIsIl8iLCJ0b1VwcGVyQ2FzZSIsIkhPT0tTIiwiZ2xvYmFsSW50ZXJjZXB0b3JzIiwic2NvcGVkSW50ZXJjZXB0b3JzIiwibWVyZ2VIb29rIiwicGFyZW50VmFsIiwiY2hpbGRWYWwiLCJyZXMiLCJjb25jYXQiLCJBcnJheSIsImlzQXJyYXkiLCJkZWR1cGVIb29rcyIsImhvb2tzIiwicHVzaCIsInJlbW92ZUhvb2siLCJob29rIiwiaW5kZXgiLCJzcGxpY2UiLCJtZXJnZUludGVyY2VwdG9ySG9vayIsImludGVyY2VwdG9yIiwib3B0aW9uIiwia2V5cyIsImZvckVhY2giLCJyZW1vdmVJbnRlcmNlcHRvckhvb2siLCJhZGRJbnRlcmNlcHRvciIsIm1ldGhvZCIsInJlbW92ZUludGVyY2VwdG9yIiwid3JhcHBlckhvb2siLCJkYXRhIiwiaXNQcm9taXNlIiwidGhlbiIsInF1ZXVlIiwicHJvbWlzZSIsIlByb21pc2UiLCJyZXNvbHZlIiwiY2FsbGJhY2siLCJ3cmFwcGVyT3B0aW9ucyIsIm9wdGlvbnMiLCJuYW1lIiwib2xkQ2FsbGJhY2siLCJjYWxsYmFja0ludGVyY2VwdG9yIiwid3JhcHBlclJldHVyblZhbHVlIiwicmV0dXJuVmFsdWUiLCJyZXR1cm5WYWx1ZUhvb2tzIiwiZ2V0QXBpSW50ZXJjZXB0b3JIb29rcyIsInNjb3BlZEludGVyY2VwdG9yIiwiaW52b2tlQXBpIiwiYXBpIiwicGFyYW1zIiwiaW52b2tlIiwicHJvbWlzZUludGVyY2VwdG9yIiwicmVqZWN0IiwiU1lOQ19BUElfUkUiLCJDT05URVhUX0FQSV9SRSIsIkNPTlRFWFRfQVBJX1JFX0VYQyIsIkFTWU5DX0FQSSIsIkNBTExCQUNLX0FQSV9SRSIsImlzQ29udGV4dEFwaSIsImlzU3luY0FwaSIsImlzQ2FsbGJhY2tBcGkiLCJoYW5kbGVQcm9taXNlIiwiY2F0Y2giLCJlcnIiLCJzaG91bGRQcm9taXNlIiwiZmluYWxseSIsImNvbnN0cnVjdG9yIiwidmFsdWUiLCJyZWFzb24iLCJwcm9taXNpZnkiLCJwcm9taXNlQXBpIiwic3VjY2VzcyIsImZhaWwiLCJjb21wbGV0ZSIsImFzc2lnbiIsIkVQUyIsIkJBU0VfREVWSUNFX1dJRFRIIiwiaXNJT1MiLCJkZXZpY2VXaWR0aCIsImRldmljZURQUiIsImNoZWNrRGV2aWNlV2lkdGgiLCJnZXRTeXN0ZW1JbmZvU3luYyIsInBsYXRmb3JtIiwicGl4ZWxSYXRpbyIsIndpbmRvd1dpZHRoIiwidXB4MnB4IiwibnVtYmVyIiwibmV3RGV2aWNlV2lkdGgiLCJOdW1iZXIiLCJNYXRoIiwiZmxvb3IiLCJMT0NBTEVfWkhfSEFOUyIsIkxPQ0FMRV9aSF9IQU5UIiwiTE9DQUxFX0VOIiwiTE9DQUxFX0ZSIiwiTE9DQUxFX0VTIiwibWVzc2FnZXMiLCJsb2NhbGUiLCJub3JtYWxpemVMb2NhbGUiLCJsYW5ndWFnZSIsImluaXRJMThuTWVzc2FnZXMiLCJpc0VuYWJsZUxvY2FsZSIsImxvY2FsZUtleXMiLCJfX3VuaUNvbmZpZyIsImxvY2FsZXMiLCJjdXJNZXNzYWdlcyIsInVzZXJNZXNzYWdlcyIsImkxOG4iLCJ0IiwiaTE4bk1peGluIiwibWl4aW4iLCJiZWZvcmVDcmVhdGUiLCJ1bndhdGNoIiwid2F0Y2hMb2NhbGUiLCIkZm9yY2VVcGRhdGUiLCIkb25jZSIsIm1ldGhvZHMiLCIkJHQiLCJ2YWx1ZXMiLCJzZXRMb2NhbGUiLCJnZXRMb2NhbGUiLCJpbml0QXBwTG9jYWxlIiwiYXBwVm0iLCJzdGF0ZSIsIm9ic2VydmFibGUiLCJsb2NhbGVXYXRjaGVycyIsIiR3YXRjaExvY2FsZSIsImRlZmluZVByb3BlcnR5IiwiZ2V0Iiwic2V0IiwidiIsIndhdGNoIiwiaW5jbHVkZSIsInBhcnRzIiwiZmluZCIsInBhcnQiLCJzdGFydHNXaXRoIiwidHJpbSIsInRvTG93ZXJDYXNlIiwibGFuZyIsImdldExvY2FsZSQxIiwiYXBwIiwiZ2V0QXBwIiwiYWxsb3dEZWZhdWx0IiwiJHZtIiwiJGxvY2FsZSIsInNldExvY2FsZSQxIiwib2xkTG9jYWxlIiwib25Mb2NhbGVDaGFuZ2VDYWxsYmFja3MiLCJvbkxvY2FsZUNoYW5nZSIsImdsb2JhbCIsImludGVyY2VwdG9ycyIsImJhc2VBcGkiLCJmcmVlemUiLCJfX3Byb3RvX18iLCJFdmVudENoYW5uZWwiLCJpZCIsImV2ZW50cyIsImxpc3RlbmVyIiwiZW1pdENhY2hlIiwib24iLCJldmVudE5hbWUiLCJhcmdzIiwiZm5zIiwib3B0IiwiYXBwbHkiLCJmaWx0ZXIiLCJ0eXBlIiwiX2FkZExpc3RlbmVyIiwiX2NsZWFyQ2FjaGUiLCJjYWNoZUFyZ3MiLCJlbWl0Iiwic2hpZnQiLCJldmVudENoYW5uZWxzIiwiZXZlbnRDaGFubmVsU3RhY2siLCJpbml0RXZlbnRDaGFubmVsIiwiZXZlbnRDaGFubmVsIiwiZ2V0RXZlbnRDaGFubmVsIiwibmF2aWdhdGVUbyIsImZyb21BcmdzIiwidG9BcmdzIiwidXJsIiwiZnJvbVJlcyIsInRvUmVzIiwiZmluZEV4aXN0c1BhZ2VJbmRleCIsInBhZ2VzIiwiZ2V0Q3VycmVudFBhZ2VzIiwibGVuIiwicGFnZSIsIiRwYWdlIiwiZnVsbFBhdGgiLCJyZWRpcmVjdFRvIiwiZXhpc3RzIiwiZGVsdGEiLCJleGlzdHNQYWdlSW5kZXgiLCJwcmV2aWV3SW1hZ2UiLCJjdXJyZW50SW5kZXgiLCJwYXJzZUludCIsImN1cnJlbnQiLCJpc05hTiIsInVybHMiLCJpdGVtIiwiaW5kaWNhdG9yIiwibG9vcCIsIlVVSURfS0VZIiwiZGV2aWNlSWQiLCJ1c2VEZXZpY2VJZCIsInJhbmRvbSIsInNldFN0b3JhZ2UiLCJhZGRTYWZlQXJlYUluc2V0cyIsInNhZmVBcmVhIiwic2FmZUFyZWFJbnNldHMiLCJ0b3AiLCJsZWZ0IiwicmlnaHQiLCJib3R0b20iLCJzY3JlZW5IZWlnaHQiLCJwb3B1bGF0ZVBhcmFtZXRlcnMiLCJicmFuZCIsIm1vZGVsIiwic3lzdGVtIiwidGhlbWUiLCJ2ZXJzaW9uIiwiZm9udFNpemVTZXR0aW5nIiwiU0RLVmVyc2lvbiIsImRldmljZU9yaWVudGF0aW9uIiwib3NOYW1lIiwib3NWZXJzaW9uIiwiaG9zdFZlcnNpb24iLCJkZXZpY2VUeXBlIiwiZ2V0R2V0RGV2aWNlVHlwZSIsImRldmljZUJyYW5kIiwiZ2V0RGV2aWNlQnJhbmQiLCJfaG9zdE5hbWUiLCJnZXRIb3N0TmFtZSIsIl9kZXZpY2VPcmllbnRhdGlvbiIsIl9kZXZpY2VQaXhlbFJhdGlvIiwiX1NES1ZlcnNpb24iLCJob3N0TGFuZ3VhZ2UiLCJwYXJhbWV0ZXJzIiwiYXBwSWQiLCJwcm9jZXNzIiwiYXBwTmFtZSIsImFwcFZlcnNpb24iLCJhcHBWZXJzaW9uQ29kZSIsImFwcExhbmd1YWdlIiwiZ2V0QXBwTGFuZ3VhZ2UiLCJ1bmlDb21waWxlVmVyc2lvbiIsInVuaVJ1bnRpbWVWZXJzaW9uIiwidW5pUGxhdGZvcm0iLCJkZXZpY2VNb2RlbCIsImRldmljZVBpeGVsUmF0aW8iLCJ0b0xvY2FsZUxvd2VyQ2FzZSIsImhvc3RUaGVtZSIsImhvc3ROYW1lIiwiaG9zdFNES1ZlcnNpb24iLCJob3N0Rm9udFNpemVTZXR0aW5nIiwid2luZG93VG9wIiwid2luZG93Qm90dG9tIiwib3NMYW5ndWFnZSIsInVuZGVmaW5lZCIsIm9zVGhlbWUiLCJ1YSIsImhvc3RQYWNrYWdlTmFtZSIsImJyb3dzZXJOYW1lIiwiYnJvd3NlclZlcnNpb24iLCJkZXZpY2VUeXBlTWFwcyIsImlwYWQiLCJ3aW5kb3dzIiwibWFjIiwiZGV2aWNlVHlwZU1hcHNLZXlzIiwiX21vZGVsIiwiX20iLCJkZWZhdWx0TGFuZ3VhZ2UiLCJfcGxhdGZvcm0iLCJnZXRTeXN0ZW1JbmZvIiwib05hbWUiLCJuTmFtZSIsImdldFVzZXJQcm9maWxlIiwiY2FuSVVzZSIsInRvZG9zIiwiY2FuSVVzZXMiLCJwcm90b2NvbHMiLCJjaG9vc2VJbWFnZSIsInNpemVUeXBlIiwiY29ubmVjdFNvY2tldCIsImNob29zZVZpZGVvIiwiY2FtZXJhIiwic2NhbkNvZGUiLCJvbmx5RnJvbUNhbWVyYSIsInNjYW5UeXBlIiwic3RhcnRBY2NlbGVyb21ldGVyIiwiaW50ZXJ2YWwiLCJzaG93VG9hc3QiLCJpbWFnZSIsIm1hc2siLCJzaG93TG9hZGluZyIsInNob3dNb2RhbCIsImNhbmNlbENvbG9yIiwiY29uZmlybUNvbG9yIiwic2hvd0FjdGlvblNoZWV0IiwiaXRlbUNvbG9yIiwibG9naW4iLCJzY29wZXMiLCJ0aW1lb3V0IiwiZ2V0VXNlckluZm8iLCJyZXF1ZXN0UGF5bWVudCIsInBheSIsIm9yZGVySW5mbyIsImdldEZpbGVJbmZvIiwiZGlnZXN0QWxnb3JpdGhtIiwiQ0FMTEJBQ0tTIiwicHJvY2Vzc0NhbGxiYWNrIiwibWV0aG9kTmFtZSIsInByb2Nlc3NSZXR1cm5WYWx1ZSIsInByb2Nlc3NBcmdzIiwiYXJnc09wdGlvbiIsImtlZXBGcm9tQXJncyIsImtleU9wdGlvbiIsImNvbnNvbGUiLCJ3YXJuIiwia2VlcFJldHVyblZhbHVlIiwid3JhcHBlciIsInByb3RvY29sIiwiYXJnMSIsImFyZzIiLCJ0b2RvQXBpcyIsIlRPRE9TIiwiY3JlYXRlVG9kb0FwaSIsInRvZG9BcGkiLCJlcnJNc2ciLCJwcm92aWRlcnMiLCJvYXV0aCIsInNoYXJlIiwicGF5bWVudCIsImdldFByb3ZpZGVyIiwic2VydmljZSIsInByb3ZpZGVyIiwiZXh0cmFBcGkiLCJnZXRFbWl0dGVyIiwiRW1pdHRlciIsImdldFVuaUVtaXR0ZXIiLCJjdHgiLCIkb24iLCJhcmd1bWVudHMiLCIkb2ZmIiwiJGVtaXQiLCJldmVudEFwaSIsImNyZWF0ZU1lZGlhUXVlcnlPYnNlcnZlciIsIm1lZGlhUXVlcnlPYnNlcnZlciIsIndpbmRvd0hlaWdodCIsIm9yaWVudGF0aW9uIiwib2JzZXJ2ZSIsIm1hdGNoZXMiLCJpdGVtVmFsdWUiLCJkaXNjb25uZWN0IiwidHJ5Q2F0Y2giLCJlIiwiZ2V0QXBpQ2FsbGJhY2tzIiwiYXBpQ2FsbGJhY2tzIiwicGFyYW0iLCJjaWQiLCJjaWRFcnJNc2ciLCJub3JtYWxpemVQdXNoTWVzc2FnZSIsImludm9rZVB1c2hDYWxsYmFjayIsImludm9rZUdldFB1c2hDaWRDYWxsYmFja3MiLCJvblB1c2hNZXNzYWdlQ2FsbGJhY2tzIiwiZ2V0UHVzaENpZENhbGxiYWNrcyIsImdldFB1c2hDbGllbnRpZCIsImhhc1N1Y2Nlc3MiLCJoYXNGYWlsIiwiaGFzQ29tcGxldGUiLCJvblB1c2hNZXNzYWdlIiwib2ZmUHVzaE1lc3NhZ2UiLCJNUFBhZ2UiLCJQYWdlIiwiTVBDb21wb25lbnQiLCJDb21wb25lbnQiLCJjdXN0b21pemVSRSIsImN1c3RvbWl6ZSIsImluaXRUcmlnZ2VyRXZlbnQiLCJtcEluc3RhbmNlIiwib2xkVHJpZ2dlckV2ZW50IiwidHJpZ2dlckV2ZW50IiwibmV3VHJpZ2dlckV2ZW50IiwiZXZlbnQiLCJfdHJpZ2dlckV2ZW50IiwiaW5pdEhvb2siLCJpc0NvbXBvbmVudCIsImxpZmV0aW1lcyIsIm9sZEhvb2siLCJfXyR3cmFwcGVyZWQiLCJhZnRlciIsIlBBR0VfRVZFTlRfSE9PS1MiLCJpbml0TW9ja3MiLCJ2bSIsIm1vY2tzIiwiJG1wIiwibXBUeXBlIiwibW9jayIsImhhc0hvb2siLCJ2dWVPcHRpb25zIiwiZGVmYXVsdCIsImV4dGVuZE9wdGlvbnMiLCJzdXBlciIsIm1peGlucyIsImluaXRIb29rcyIsIm1wT3B0aW9ucyIsIl9fY2FsbF9ob29rIiwiaW5pdFZ1ZUNvbXBvbmVudCIsIlZ1ZUNvbXBvbmVudCIsImV4dGVuZCIsImluaXRTbG90cyIsInZ1ZVNsb3RzIiwiJHNsb3RzIiwic2xvdE5hbWUiLCIkc2NvcGVkU2xvdHMiLCJpbml0VnVlSWRzIiwidnVlSWRzIiwiXyR2dWVJZCIsIl8kdnVlUGlkIiwiaW5pdERhdGEiLCJjb250ZXh0IiwiVlVFX0FQUF9ERUJVRyIsInN0cmluZ2lmeSIsIl9fbGlmZWN5Y2xlX2hvb2tzX18iLCJQUk9QX1RZUEVTIiwiQm9vbGVhbiIsImNyZWF0ZU9ic2VydmVyIiwib2JzZXJ2ZXIiLCJuZXdWYWwiLCJvbGRWYWwiLCJpbml0QmVoYXZpb3JzIiwiaW5pdEJlaGF2aW9yIiwidnVlQmVoYXZpb3JzIiwiYmVoYXZpb3JzIiwidnVlRXh0ZW5kcyIsImV4dGVuZHMiLCJ2dWVNaXhpbnMiLCJ2dWVQcm9wcyIsInByb3BzIiwiYmVoYXZpb3IiLCJwcm9wZXJ0aWVzIiwiaW5pdFByb3BlcnRpZXMiLCJ2dWVNaXhpbiIsInBhcnNlUHJvcFR5cGUiLCJkZWZhdWx0VmFsdWUiLCJmaWxlIiwiaXNCZWhhdmlvciIsInZ1ZUlkIiwiZ2VuZXJpYyIsInNjb3BlZFNsb3RzQ29tcGlsZXIiLCJzZXREYXRhIiwib3B0cyIsIndyYXBwZXIkMSIsIm1wIiwic3RvcFByb3BhZ2F0aW9uIiwicHJldmVudERlZmF1bHQiLCJ0YXJnZXQiLCJkZXRhaWwiLCJtYXJrZXJJZCIsImdldEV4dHJhVmFsdWUiLCJkYXRhUGF0aHNBcnJheSIsImRhdGFQYXRoQXJyYXkiLCJkYXRhUGF0aCIsInByb3BQYXRoIiwidmFsdWVQYXRoIiwidkZvciIsImlzSW50ZWdlciIsInN1YnN0ciIsIl9fZ2V0X3ZhbHVlIiwidkZvckl0ZW0iLCJ2Rm9yS2V5IiwicHJvY2Vzc0V2ZW50RXh0cmEiLCJleHRyYSIsImV4dHJhT2JqIiwiX19hcmdzX18iLCJnZXRPYmpCeUFycmF5IiwiYXJyIiwiZWxlbWVudCIsInByb2Nlc3NFdmVudEFyZ3MiLCJpc0N1c3RvbSIsImlzQ3VzdG9tTVBFdmVudCIsImN1cnJlbnRUYXJnZXQiLCJkYXRhc2V0IiwiY29tVHlwZSIsInJldCIsImFyZyIsIk9OQ0UiLCJDVVNUT00iLCJpc01hdGNoRXZlbnRUeXBlIiwiZXZlbnRUeXBlIiwib3B0VHlwZSIsImdldENvbnRleHRWbSIsIiRwYXJlbnQiLCIkb3B0aW9ucyIsIiRzY29wZSIsImhhbmRsZUV2ZW50IiwiZXZlbnRPcHRzIiwiZXZlbnRPcHQiLCJldmVudHNBcnJheSIsImlzT25jZSIsImV2ZW50QXJyYXkiLCJoYW5kbGVyQ3R4IiwiaGFuZGxlciIsIm9uY2UiLCJpbml0RXZlbnRDaGFubmVsJDEiLCJnZXRPcGVuZXJFdmVudENoYW5uZWwiLCJfX2V2ZW50Q2hhbm5lbF9fIiwiY2FsbEhvb2siLCJfX2lkX18iLCJpbml0U2NvcGVkU2xvdHNQYXJhbXMiLCJjZW50ZXIiLCJwYXJlbnRzIiwiJGhhc1Njb3BlZFNsb3RzUGFyYW1zIiwiaGFzIiwiJGdldFNjb3BlZFNsb3RzUGFyYW1zIiwib2JqZWN0IiwiJHNldFNjb3BlZFNsb3RzUGFyYW1zIiwicHJvcHNEYXRhIiwiZGVzdHJveWVkIiwicGFyc2VCYXNlQXBwIiwiaW5pdFJlZnMiLCJzdG9yZSIsIiRzdG9yZSIsIm1wSG9zdCIsIiRpMThuIiwiX2kxOG4iLCJhcHBPcHRpb25zIiwib25MYXVuY2giLCJnbG9iYWxEYXRhIiwiX2lzTW91bnRlZCIsImZpbmRWbUJ5VnVlSWQiLCJ2dWVQaWQiLCIkY2hpbGRyZW4iLCJjaGlsZFZtIiwicGFyZW50Vm0iLCJCZWhhdmlvciIsImhhbmRsZUxpbmsiLCJwYXJlbnQiLCJpc1BhZ2UiLCJfX25vZGVpZF9fIiwiX19ub2RlSWRfXyIsIm1pbm9yVmVyc2lvbiIsIiRyZWZzIiwiY29tcG9uZW50cyIsInNlbGVjdEFsbENvbXBvbmVudHMiLCJjb21wb25lbnQiLCJyZWYiLCJmb3JDb21wb25lbnRzIiwiaW5zdGFuY2VzIiwiaW5pdFJlbGF0aW9uIiwibm9kZUlkIiwid2Vidmlld0lkIiwiX193ZWJ2aWV3SWRfXyIsImhhbmRsZUxpbmskMSIsIiRyb290IiwicGFyc2VBcHAiLCJfJGZhbGxiYWNrIiwiY3JlYXRlZCIsInJvdXRlIiwiX19yb3V0ZV9fIiwiX19pbml0X2luamVjdGlvbnMiLCJfX2luaXRfcHJvdmlkZSIsImNyZWF0ZUFwcCIsIkFwcCIsImVuY29kZVJlc2VydmVSRSIsImVuY29kZVJlc2VydmVSZXBsYWNlciIsImNvbW1hUkUiLCJlbmNvZGUiLCJlbmNvZGVVUklDb21wb25lbnQiLCJzdHJpbmdpZnlRdWVyeSIsImVuY29kZVN0ciIsInZhbCIsInZhbDIiLCJ4IiwicGFyc2VCYXNlQ29tcG9uZW50IiwidnVlQ29tcG9uZW50T3B0aW9ucyIsIm11bHRpcGxlU2xvdHMiLCJhZGRHbG9iYWxDbGFzcyIsImNvbXBvbmVudE9wdGlvbnMiLCJfX2ZpbGUiLCJhdHRhY2hlZCIsIiRtb3VudCIsInJlYWR5IiwiZGV0YWNoZWQiLCIkZGVzdHJveSIsInBhZ2VMaWZldGltZXMiLCJzaG93IiwiaGlkZSIsInJlc2l6ZSIsInNpemUiLCJfX2wiLCJfX2UiLCJleHRlcm5hbENsYXNzZXMiLCJ3eHNDYWxsTWV0aG9kcyIsImNhbGxNZXRob2QiLCJwYXJzZUNvbXBvbmVudCIsIl9fbGlmZXRpbWVzX2F0dGFjaGVkIiwiaG9va3MkMSIsInBhcnNlQmFzZVBhZ2UiLCJ2dWVQYWdlT3B0aW9ucyIsInBhZ2VPcHRpb25zIiwib25Mb2FkIiwicXVlcnkiLCJjb3B5UXVlcnkiLCJpcyIsInBhcnNlUGFnZSIsImNyZWF0ZVBhZ2UiLCJjcmVhdGVDb21wb25lbnQiLCJjcmVhdGVTdWJwYWNrYWdlQXBwIiwib25TaG93Iiwib25BcHBTaG93Iiwib25IaWRlIiwib25BcHBIaWRlIiwiZ2V0TGF1bmNoT3B0aW9uc1N5bmMiLCJjcmVhdGVQbHVnaW4iLCJjYW5JVXNlQXBpIiwiYXBpTmFtZSIsInVuaSIsIlByb3h5IiwidW5pJDEiLCJpc09iamVjdCIsImRlZmF1bHREZWxpbWl0ZXJzIiwiQmFzZUZvcm1hdHRlciIsIl9jYWNoZXMiLCJkZWxpbWl0ZXJzIiwidG9rZW5zIiwiY29tcGlsZSIsIlJFX1RPS0VOX0xJU1RfVkFMVUUiLCJSRV9UT0tFTl9OQU1FRF9WQUxVRSIsImZvcm1hdCIsInN0YXJ0RGVsaW1pdGVyIiwiZW5kRGVsaW1pdGVyIiwicG9zaXRpb24iLCJ0ZXh0IiwiY2hhciIsInN1YiIsImlzQ2xvc2VkIiwiY29tcGlsZWQiLCJtb2RlIiwiZGVmYXVsdEZvcm1hdHRlciIsIkkxOG4iLCJmYWxsYmFja0xvY2FsZSIsIndhdGNoZXIiLCJmb3JtYXRlciIsIndhdGNoZXJzIiwib3ZlcnJpZGUiLCJpbnRlcnBvbGF0ZSIsIndhdGNoQXBwTG9jYWxlIiwibmV3TG9jYWxlIiwiJHdhdGNoIiwiZ2V0RGVmYXVsdExvY2FsZSIsImluaXRWdWVJMThuIiwiaXNXYXRjaGVkQXBwTG9jYWxlIiwiZiIsImFkZCIsImlzU3RyaW5nIiwiaGFzSTE4bkpzb24iLCJqc29uT2JqIiwid2Fsa0pzb25PYmoiLCJpc0kxOG5TdHIiLCJwYXJzZUkxOG5Kc29uIiwiY29tcGlsZVN0ciIsImNvbXBpbGVJMThuSnNvblN0ciIsImpzb25TdHIiLCJsb2NhbGVWYWx1ZXMiLCJ1bnNoaWZ0IiwiY29tcGlsZUpzb25PYmoiLCJjb21waWxlVmFsdWUiLCJ2YWx1ZUxvY2FsZXMiLCJsb2NhbFZhbHVlIiwid2FsayIsInJlc29sdmVMb2NhbGUiLCJyZXNvbHZlTG9jYWxlQ2hhaW4iLCJjaGFpbiIsInBvcCIsIm1vZHVsZSIsImV4cG9ydHMiLCJyZXF1aXJlIiwiQVBJIiwicmVxdWVzdCIsInIiLCJzeXN0ZW1JbmZvIiwic3lzdGVtaW5mbyIsInBpeGVkUmF0aW8iLCJ0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QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsaUJBQWlCLGlCQUFpQjtBQUNsQztBQUNBO0FBQ0E7QUFDQSxzQkFBc0IsK0JBQStCO0FBQ3JELHNCQUFzQixpQkFBaUI7QUFDdkM7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsR0FBRztBQUNIOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxrREFBa0QsaUNBQWlDLEVBQUU7QUFDckYsQ0FBQzs7QUFFRDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsQ0FBQzs7QUFFRDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxDQUFDOztBQUVEO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNB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Q0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUEsMEJBQTBCLFNBQVMscUJBQXFCOztBQUV4RDtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsbUJBQW1CLDJCQUEyQjtBQUM5QztBQUNBO0FBQ0E7QUFDQSxHQUFHO0FBQ0gsQ0FBQzs7QUFFRDs7QUFFQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLE9BQU87QUFDUDtBQUNBO0FBQ0EsU0FBUztBQUNUO0FBQ0E7QUFDQTtBQUNBLEtBQUs7QUFDTDtBQUNBO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsaUJBQWlCLGlCQUFpQjtBQUNsQztBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQSxtQ0FBbUMsT0FBTztBQUMxQztBQUNBO0FBQ0E7O0FBRUE7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLGtDQUFrQyxPQUFPO0FBQ3pDO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEdBQUc7QUFDSDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxvQ0FBb0M7QUFDcEM7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsS0FBSztBQUNMO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsVUFBVSxLQUFxQztBQUMvQztBQUNBO0FBQ0E7QUFDQSw4QkFBOEI7QUFDOUI7QUFDQTtBQUNBLE9BQU87QUFDUDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsR0FBRztBQUNIOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLE1BQU0sS0FBcUM7QUFDM0M7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsSUFBSSxLQUFxQztBQUN6QztBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLE1BQU0sS0FBcUM7QUFDM0M7QUFD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QUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTs7OztBQUlBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxJQUFJLElBRVE7QUFDWjtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsTUFBTSxLQUFxQztBQUMzQztBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsbUJBQW1CLDJCQUEyQjtBQUM5QztBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7QUFDQSxHQUFHO0FBQ0g7QUFDQSxHQUFHO0FBQ0g7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FB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O0FBQzNDLGtEQUFrRDtBQUNsRDtBQUNBO0FBQ0EsbUNBQW1DO0FBQ25DO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBOztBQUVBOztBQUVBOztBQUVBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLDhCQUE4QjtBQUM5QjtBQUNBLEtBQUs7QUFDTDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxHQUFHOztBQUVIO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsR0FBRzs7QUFFSDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsT0FBTztBQUNQO0FBQ0E7QUFDQTtBQUNBLEdBQUc7O0FBRUg7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLE9BQU87QUFDUDtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBLFFBQVEsSUFBcUM7QUFDN0M7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBLHNFQUFzRTs7QUFFdEU7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxLQUFL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QUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTs7QUFFQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsK0NBQStDO0FBQy9DO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLHVDQUF1QyxPQUFPO0FBQzlDO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLHlDQUF5QyxTQUFTO0FBQ2xEO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQSxRQUFRLElBQXFDO0FBQzdDO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EscUNBQXFDLE9BQU87QUFDNUM7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLE1BQU0sSUFBcUM7QUFDM0M7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQSwwQkFBMEI7O0FBRTFCLGtCQUFrQjtBQUNsQjtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsbUJBQW1CLHFCQUFxQjtBQUN4QztBQUNBLDBDQUEwQztBQUMxQztBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUEsTUFBTSxJQUFxQztBQUMzQztBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBLHVCQUF1QjtBQUN2QjtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsR0FBRztBQUNIO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsbUJBQW1CLHlCQUF5QjtBQUM1QztBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLG1CQUFtQix5QkFBeUI7QUFDNUM7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSx3Q0FBd0MsT0FBTztBQUMvQztBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBOztBQUVBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLE1BQU0sSUFBcUM7QUFDM0M7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLDBCQUEwQiwwQkFBMEI7QUFDcEQ7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsOEJBQThCLG9CQUFvQixFQUFFOztBQUVwRDtBQUNBO0FBQ0EsaUJBQWlCLHNCQUFzQjtBQUN2QztBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsUUFBUSxLQUFxQztBQUM3QztBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0EsaUJBQWlCLGtCQUFrQjtBQUNuQztBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsS0FBSztBQUNMO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUEsVUFBVSxLQUFxQztBQUMvQztBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTs7OztBQUlBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEdBQUc7QUFDSDtBQUNBO0FBQ0E7QUFDQSxvQkFBb0I7QUFDcEI7QUFDQSx5QkFBeUI7QUFDekI7QUFDQTtBQUNBO0FBQ0E7QUFDQSxvQkFBb0IsS0FBcUM7QUFDekQ7QUFDQSxNQUFNLFNBQUU7QUFDUjtBQUNBO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7QUFDQTtBQUNBO0FBQ0EsTUFBTSxLQUFxQztBQUMzQztBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEdBQUc7QUFDSDtBQUNBO0FBQ0EsS0FBSztBQUNMO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsR0FBRztBQUNIO0FBQ0EsR0FBRztBQUNIO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxTQUFTO0FBQ1Q7QUFDQTtBQUNBLE9BQU87QUFDUDtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBLG1CQUFtQiwyQkFBMkI7QUFDOUMscUJBQXFCLCtCQUErQjtBQUNwRDtBQUNBO0FBQ0EsR0FBRztBQUNILHlCQUF5QjtBQUN6QjtBQUNBLHNCQUFzQixpQ0FBaUM7QUFDdkQ7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsUUFBUSxJQUFxQztBQUM3QztBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0Esa0dBQWtHO0FBQ2xHO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxPQUFPO0FBQ1AsS0FBSyxNQUFNLEVBRU47QUFDTDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxJQUFJLEtBQXFDO0FBQ3pDO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFFBQVEsSUFBcUM7QUFDN0M7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLE1BQU0sS0FBcUM7QUFDM0M7QUFDQTtBQUNBO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7QUFDQTtBQUNBLEdBQUc7QUFDSDtBQUNBO0FBQ0E7O0FBRUEsOEJBQThCOztBQUU5QjtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBLFFBQVEsS0FBcUM7QUFDN0M7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEtBQUssVUFBVSxJQUFxQztBQUNwRDtBQUNBO0FBQ0EsT0FBTztBQUNQO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEdBQUc7QUFDSDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLE1BQU0sS0FBcUM7QUFDM0M7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxvQ0FBb0M7QUFDcEM7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0EsUUFBUSxJQUFxQztBQUM3QztBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EscUJBQXFCLG9CQUFvQjtBQUN6QztBQUNBO0FBQ0EsS0FBSztBQUNMO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsNkJBQTZCO0FBQzdCO0FBQ0EsOEJBQThCO0FBQzlCLE1BQU0sSUFBcUM7QUFDM0M7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxPQUFPO0FBQ1A7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTs7QUFFQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQSxRQUFRLEtBQXFDO0FBQzdDO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7QUFDQTtBQUNBLHFCQUFxQjtBQUNyQjtBQUNBO0FBQ0E7QUFDQTtBQUNBLFFBQVEsSUFBcUM7QUFDN0M7QUFDQSxLQUFLLE1BQU0sRUFFTjtBQUNMO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLHlDQUF5QztBQUN6QztBQUNBLHNDQUFzQztBQUN0Qyw4Qzs7QUFFQTtBQUNBLFFBQVEsS0FBcUM7QUFDN0M7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0Esc0JBQXNCLGVBQWU7QUFDckM7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBLE1BQU0sS0FBcUM7QUFDM0M7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0Esc0VBQXNFO0FBQ3RFO0FBQ0E7QUFDQTs7QUFFQTtBQUNBLFFBQVEsS0FBcUM7QUFDN0M7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEtBQUs7QUFDTDtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsaUNBQWlDOztBQUVqQztBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLE9BQU87QUFDUDtBQUNBLFlBQVksS0FBcUM7QUFDakQ7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSx3QkFBd0I7QUFDeEI7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEdBQUc7QUFDSDs7QUFFQTs7OztBQUlBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7QUFDQSxHQUFHO0FBQ0g7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEdBQUc7O0FBRUg7QUFDQTtBQUNBO0FBQ0EsR0FBRzs7QUFFSDtBQUNBO0FBQ0E7QUFDQTtBQUNBLEdBQUc7O0FBRUg7QUFDQTs7QUFFQTtBQUNBLDBDQUEwQywyQkFBMkIsRUFBRTtBQUN2RSxLQUFLO0FBQ0w7QUFDQSwwQ0FBMEMsNEJBQTRCLEVBQUU7QUFDeEUsS0FBSztBQUNMLEdBQUc7O0FBRUg7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztB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Q0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUEsU0FBUztBQUNUO0FBQ0E7QUFDQTtBQUNBOztBQUVBOztBQUVBLFNBQVM7QUFDVDtBQUNBOztBQUVBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQSxTQUFTO0FBQ1Q7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0Esb0NBQW9DLGNBQWM7QUFDbEQ7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUEsS0FBSztBQUNMO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBLGlDQUFpQyxrQkFBa0I7QUFDbkQ7QUFDQTs7QUFFQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBLGlCQUFpQjs7QUFFakI7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0Esd0JBQXdCLGlCQUFpQjtBQUN6QztBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBLFlBQVk7QUFDWjtBQUNBOztBQUVBO0FBQ0EsWUFBWTtBQUNaOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsS0FBSzs7QUFFTDtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQSxLQUFLOztBQUVMO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUEsOENBQThDLFFBQVE7QUFDdEQ7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBLGFBQWE7QUFDYjtBQUNBOztBQUVBLFdBQVc7QUFDWDtBQUNBO0FBQ0E7O0FBRUEsV0FBVztBQUNYO0FBQ0E7QUFDQTs7QUFFQSxXQUFXO0FBQ1g7QUFDQTtBQUNBO0FBQ0E7QUFDQSxLQUFLOztBQUVMO0FBQ0EsOENBQThDLFFBQVE7QUFDdEQ7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtB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SUFkUSxFQWNGO0FBQ1gsV0FBT2hCLEdBQUcsQ0FBQ3RVLFNBQUosQ0FBYztBQUNwQjBZLFdBQUssRUFBRXBELElBRGE7QUFFcEJxRCxVQUFJLEVBQUUsTUFGYyxFQUFkLENBQVA7O0FBSUEsR0FuQmEsRSIsImZpbGUiOiJjb21tb24vdmVuZG9yLmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgaW5pdFZ1ZUkxOG4gfSBmcm9tICdAZGNsb3VkaW8vdW5pLWkxOG4nO1xyXG5pbXBvcnQgVnVlIGZyb20gJ3Z1ZSc7XHJcblxyXG5sZXQgcmVhbEF0b2I7XHJcblxyXG5jb25zdCBiNjQgPSAnQUJDREVGR0hJSktMTU5PUFFSU1RVVldYWVphYmNkZWZnaGlqa2xtbm9wcXJzdHV2d3h5ejAxMjM0NTY3ODkrLz0nO1xyXG5jb25zdCBiNjRyZSA9IC9eKD86W0EtWmEtelxcZCsvXXs0fSkqPyg/OltBLVphLXpcXGQrL117Mn0oPzo9PSk/fFtBLVphLXpcXGQrL117M309Pyk/JC87XHJcblxyXG5pZiAodHlwZW9mIGF0b2IgIT09ICdmdW5jdGlvbicpIHtcclxuICByZWFsQXRvYiA9IGZ1bmN0aW9uIChzdHIpIHtcclxuICAgIHN0ciA9IFN0cmluZyhzdHIpLnJlcGxhY2UoL1tcXHRcXG5cXGZcXHIgXSsvZywgJycpO1xyXG4gICAgaWYgKCFiNjRyZS50ZXN0KHN0cikpIHsgdGhyb3cgbmV3IEVycm9yKFwiRmFpbGVkIHRvIGV4ZWN1dGUgJ2F0b2InIG9uICdXaW5kb3cnOiBUaGUgc3RyaW5nIHRvIGJlIGRlY29kZWQgaXMgbm90IGNvcnJlY3RseSBlbmNvZGVkLlwiKSB9XHJcblxyXG4gICAgLy8gQWRkaW5nIHRoZSBwYWRkaW5nIGlmIG1pc3NpbmcsIGZvciBzZW1wbGljaXR5XHJcbiAgICBzdHIgKz0gJz09Jy5zbGljZSgyIC0gKHN0ci5sZW5ndGggJiAzKSk7XHJcbiAgICB2YXIgYml0bWFwOyB2YXIgcmVzdWx0ID0gJyc7IHZhciByMTsgdmFyIHIyOyB2YXIgaSA9IDA7XHJcbiAgICBmb3IgKDsgaSA8IHN0ci5sZW5ndGg7KSB7XHJcbiAgICAgIGJpdG1hcCA9IGI2NC5pbmRleE9mKHN0ci5jaGFyQXQoaSsrKSkgPDwgMTggfCBiNjQuaW5kZXhPZihzdHIuY2hhckF0KGkrKykpIDw8IDEyIHxcclxuICAgICAgICAgICAgICAgICAgICAocjEgPSBiNjQuaW5kZXhPZihzdHIuY2hhckF0KGkrKykpKSA8PCA2IHwgKHIyID0gYjY0LmluZGV4T2Yoc3RyLmNoYXJBdChpKyspKSk7XHJcblxyXG4gICAgICByZXN1bHQgKz0gcjEgPT09IDY0ID8gU3RyaW5nLmZyb21DaGFyQ29kZShiaXRtYXAgPj4gMTYgJiAyNTUpXHJcbiAgICAgICAgOiByMiA9PT0gNjQgPyBTdHJpbmcuZnJvbUNoYXJDb2RlKGJpdG1hcCA+PiAxNiAmIDI1NSwgYml0bWFwID4+IDggJiAyNTUpXHJcbiAgICAgICAgICA6IFN0cmluZy5mcm9tQ2hhckNvZGUoYml0bWFwID4+IDE2ICYgMjU1LCBiaXRtYXAgPj4gOCAmIDI1NSwgYml0bWFwICYgMjU1KTtcclxuICAgIH1cclxuICAgIHJldHVybiByZXN1bHRcclxuICB9O1xyXG59IGVsc2Uge1xyXG4gIC8vIOazqOaEj2F0b2Llj6rog73lnKjlhajlsYDlr7nosaHkuIrosIPnlKjvvIzkvovlpoLvvJpgY29uc3QgQmFzZTY0ID0ge2F0b2J9O0Jhc2U2NC5hdG9iKCd4eHh4Jylg5piv6ZSZ6K+v55qE55So5rOVXHJcbiAgcmVhbEF0b2IgPSBhdG9iO1xyXG59XHJcblxyXG5mdW5jdGlvbiBiNjREZWNvZGVVbmljb2RlIChzdHIpIHtcclxuICByZXR1cm4gZGVjb2RlVVJJQ29tcG9uZW50KHJlYWxBdG9iKHN0cikuc3BsaXQoJycpLm1hcChmdW5jdGlvbiAoYykge1xyXG4gICAgcmV0dXJuICclJyArICgnMDAnICsgYy5jaGFyQ29kZUF0KDApLnRvU3RyaW5nKDE2KSkuc2xpY2UoLTIpXHJcbiAgfSkuam9pbignJykpXHJcbn1cclxuXHJcbmZ1bmN0aW9uIGdldEN1cnJlbnRVc2VySW5mbyAoKSB7XHJcbiAgY29uc3QgdG9rZW4gPSAoIHR0KS5nZXRTdG9yYWdlU3luYygndW5pX2lkX3Rva2VuJykgfHwgJyc7XHJcbiAgY29uc3QgdG9rZW5BcnIgPSB0b2tlbi5zcGxpdCgnLicpO1xyXG4gIGlmICghdG9rZW4gfHwgdG9rZW5BcnIubGVuZ3RoICE9PSAzKSB7XHJcbiAgICByZXR1cm4ge1xyXG4gICAgICB1aWQ6IG51bGwsXHJcbiAgICAgIHJvbGU6IFtdLFxyXG4gICAgICBwZXJtaXNzaW9uOiBbXSxcclxuICAgICAgdG9rZW5FeHBpcmVkOiAwXHJcbiAgICB9XHJcbiAgfVxyXG4gIGxldCB1c2VySW5mbztcclxuICB0cnkge1xyXG4gICAgdXNlckluZm8gPSBKU09OLnBhcnNlKGI2NERlY29kZVVuaWNvZGUodG9rZW5BcnJbMV0pKTtcclxuICB9IGNhdGNoIChlcnJvcikge1xyXG4gICAgdGhyb3cgbmV3IEVycm9yKCfojrflj5blvZPliY3nlKjmiLfkv6Hmga/lh7rplJnvvIzor6bnu4bplJnor6/kv6Hmga/kuLrvvJonICsgZXJyb3IubWVzc2FnZSlcclxuICB9XHJcbiAgdXNlckluZm8udG9rZW5FeHBpcmVkID0gdXNlckluZm8uZXhwICogMTAwMDtcclxuICBkZWxldGUgdXNlckluZm8uZXhwO1xyXG4gIGRlbGV0ZSB1c2VySW5mby5pYXQ7XHJcbiAgcmV0dXJuIHVzZXJJbmZvXHJcbn1cclxuXHJcbmZ1bmN0aW9uIHVuaUlkTWl4aW4gKFZ1ZSkge1xyXG4gIFZ1ZS5wcm90b3R5cGUudW5pSURIYXNSb2xlID0gZnVuY3Rpb24gKHJvbGVJZCkge1xyXG4gICAgY29uc3Qge1xyXG4gICAgICByb2xlXHJcbiAgICB9ID0gZ2V0Q3VycmVudFVzZXJJbmZvKCk7XHJcbiAgICByZXR1cm4gcm9sZS5pbmRleE9mKHJvbGVJZCkgPiAtMVxyXG4gIH07XHJcbiAgVnVlLnByb3RvdHlwZS51bmlJREhhc1Blcm1pc3Npb24gPSBmdW5jdGlvbiAocGVybWlzc2lvbklkKSB7XHJcbiAgICBjb25zdCB7XHJcbiAgICAgIHBlcm1pc3Npb25cclxuICAgIH0gPSBnZXRDdXJyZW50VXNlckluZm8oKTtcclxuICAgIHJldHVybiB0aGlzLnVuaUlESGFzUm9sZSgnYWRtaW4nKSB8fCBwZXJtaXNzaW9uLmluZGV4T2YocGVybWlzc2lvbklkKSA+IC0xXHJcbiAgfTtcclxuICBWdWUucHJvdG90eXBlLnVuaUlEVG9rZW5WYWxpZCA9IGZ1bmN0aW9uICgpIHtcclxuICAgIGNvbnN0IHtcclxuICAgICAgdG9rZW5FeHBpcmVkXHJcbiAgICB9ID0gZ2V0Q3VycmVudFVzZXJJbmZvKCk7XHJcbiAgICByZXR1cm4gdG9rZW5FeHBpcmVkID4gRGF0ZS5ub3coKVxyXG4gIH07XHJcbn1cclxuXHJcbmNvbnN0IF90b1N0cmluZyA9IE9iamVjdC5wcm90b3R5cGUudG9TdHJpbmc7XHJcbmNvbnN0IGhhc093blByb3BlcnR5ID0gT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eTtcclxuXHJcbmZ1bmN0aW9uIGlzRm4gKGZuKSB7XHJcbiAgcmV0dXJuIHR5cGVvZiBmbiA9PT0gJ2Z1bmN0aW9uJ1xyXG59XHJcblxyXG5mdW5jdGlvbiBpc1N0ciAoc3RyKSB7XHJcbiAgcmV0dXJuIHR5cGVvZiBzdHIgPT09ICdzdHJpbmcnXHJcbn1cclxuXHJcbmZ1bmN0aW9uIGlzUGxhaW5PYmplY3QgKG9iaikge1xyXG4gIHJldHVybiBfdG9TdHJpbmcuY2FsbChvYmopID09PSAnW29iamVjdCBPYmplY3RdJ1xyXG59XHJcblxyXG5mdW5jdGlvbiBoYXNPd24gKG9iaiwga2V5KSB7XHJcbiAgcmV0dXJuIGhhc093blByb3BlcnR5LmNhbGwob2JqLCBrZXkpXHJcbn1cclxuXHJcbmZ1bmN0aW9uIG5vb3AgKCkgeyB9XHJcblxyXG4vKipcclxuICogQ3JlYXRlIGEgY2FjaGVkIHZlcnNpb24gb2YgYSBwdXJlIGZ1bmN0aW9uLlxyXG4gKi9cclxuZnVuY3Rpb24gY2FjaGVkIChmbikge1xyXG4gIGNvbnN0IGNhY2hlID0gT2JqZWN0LmNyZWF0ZShudWxsKTtcclxuICByZXR1cm4gZnVuY3Rpb24gY2FjaGVkRm4gKHN0cikge1xyXG4gICAgY29uc3QgaGl0ID0gY2FjaGVbc3RyXTtcclxuICAgIHJldHVybiBoaXQgfHwgKGNhY2hlW3N0cl0gPSBmbihzdHIpKVxyXG4gIH1cclxufVxyXG5cclxuLyoqXHJcbiAqIENhbWVsaXplIGEgaHlwaGVuLWRlbGltaXRlZCBzdHJpbmcuXHJcbiAqL1xyXG5jb25zdCBjYW1lbGl6ZVJFID0gLy0oXFx3KS9nO1xyXG5jb25zdCBjYW1lbGl6ZSA9IGNhY2hlZCgoc3RyKSA9PiB7XHJcbiAgcmV0dXJuIHN0ci5yZXBsYWNlKGNhbWVsaXplUkUsIChfLCBjKSA9PiBjID8gYy50b1VwcGVyQ2FzZSgpIDogJycpXHJcbn0pO1xyXG5cclxuY29uc3QgSE9PS1MgPSBbXHJcbiAgJ2ludm9rZScsXHJcbiAgJ3N1Y2Nlc3MnLFxyXG4gICdmYWlsJyxcclxuICAnY29tcGxldGUnLFxyXG4gICdyZXR1cm5WYWx1ZSdcclxuXTtcclxuXHJcbmNvbnN0IGdsb2JhbEludGVyY2VwdG9ycyA9IHt9O1xyXG5jb25zdCBzY29wZWRJbnRlcmNlcHRvcnMgPSB7fTtcclxuXHJcbmZ1bmN0aW9uIG1lcmdlSG9vayAocGFyZW50VmFsLCBjaGlsZFZhbCkge1xyXG4gIGNvbnN0IHJlcyA9IGNoaWxkVmFsXHJcbiAgICA/IHBhcmVudFZhbFxyXG4gICAgICA/IHBhcmVudFZhbC5jb25jYXQoY2hpbGRWYWwpXHJcbiAgICAgIDogQXJyYXkuaXNBcnJheShjaGlsZFZhbClcclxuICAgICAgICA/IGNoaWxkVmFsIDogW2NoaWxkVmFsXVxyXG4gICAgOiBwYXJlbnRWYWw7XHJcbiAgcmV0dXJuIHJlc1xyXG4gICAgPyBkZWR1cGVIb29rcyhyZXMpXHJcbiAgICA6IHJlc1xyXG59XHJcblxyXG5mdW5jdGlvbiBkZWR1cGVIb29rcyAoaG9va3MpIHtcclxuICBjb25zdCByZXMgPSBbXTtcclxuICBmb3IgKGxldCBpID0gMDsgaSA8IGhvb2tzLmxlbmd0aDsgaSsrKSB7XHJcbiAgICBpZiAocmVzLmluZGV4T2YoaG9va3NbaV0pID09PSAtMSkge1xyXG4gICAgICByZXMucHVzaChob29rc1tpXSk7XHJcbiAgICB9XHJcbiAgfVxyXG4gIHJldHVybiByZXNcclxufVxyXG5cclxuZnVuY3Rpb24gcmVtb3ZlSG9vayAoaG9va3MsIGhvb2spIHtcclxuICBjb25zdCBpbmRleCA9IGhvb2tzLmluZGV4T2YoaG9vayk7XHJcbiAgaWYgKGluZGV4ICE9PSAtMSkge1xyXG4gICAgaG9va3Muc3BsaWNlKGluZGV4LCAxKTtcclxuICB9XHJcbn1cclxuXHJcbmZ1bmN0aW9uIG1lcmdlSW50ZXJjZXB0b3JIb29rIChpbnRlcmNlcHRvciwgb3B0aW9uKSB7XHJcbiAgT2JqZWN0LmtleXMob3B0aW9uKS5mb3JFYWNoKGhvb2sgPT4ge1xyXG4gICAgaWYgKEhPT0tTLmluZGV4T2YoaG9vaykgIT09IC0xICYmIGlzRm4ob3B0aW9uW2hvb2tdKSkge1xyXG4gICAgICBpbnRlcmNlcHRvcltob29rXSA9IG1lcmdlSG9vayhpbnRlcmNlcHRvcltob29rXSwgb3B0aW9uW2hvb2tdKTtcclxuICAgIH1cclxuICB9KTtcclxufVxyXG5cclxuZnVuY3Rpb24gcmVtb3ZlSW50ZXJjZXB0b3JIb29rIChpbnRlcmNlcHRvciwgb3B0aW9uKSB7XHJcbiAgaWYgKCFpbnRlcmNlcHRvciB8fCAhb3B0aW9uKSB7XHJcbiAgICByZXR1cm5cclxuICB9XHJcbiAgT2JqZWN0LmtleXMob3B0aW9uKS5mb3JFYWNoKGhvb2sgPT4ge1xyXG4gICAgaWYgKEhPT0tTLmluZGV4T2YoaG9vaykgIT09IC0xICYmIGlzRm4ob3B0aW9uW2hvb2tdKSkge1xyXG4gICAgICByZW1vdmVIb29rKGludGVyY2VwdG9yW2hvb2tdLCBvcHRpb25baG9va10pO1xyXG4gICAgfVxyXG4gIH0pO1xyXG59XHJcblxyXG5mdW5jdGlvbiBhZGRJbnRlcmNlcHRvciAobWV0aG9kLCBvcHRpb24pIHtcclxuICBpZiAodHlwZW9mIG1ldGhvZCA9PT0gJ3N0cmluZycgJiYgaXNQbGFpbk9iamVjdChvcHRpb24pKSB7XHJcbiAgICBtZXJnZUludGVyY2VwdG9ySG9vayhzY29wZWRJbnRlcmNlcHRvcnNbbWV0aG9kXSB8fCAoc2NvcGVkSW50ZXJjZXB0b3JzW21ldGhvZF0gPSB7fSksIG9wdGlvbik7XHJcbiAgfSBlbHNlIGlmIChpc1BsYWluT2JqZWN0KG1ldGhvZCkpIHtcclxuICAgIG1lcmdlSW50ZXJjZXB0b3JIb29rKGdsb2JhbEludGVyY2VwdG9ycywgbWV0aG9kKTtcclxuICB9XHJcbn1cclxuXHJcbmZ1bmN0aW9uIHJlbW92ZUludGVyY2VwdG9yIChtZXRob2QsIG9wdGlvbikge1xyXG4gIGlmICh0eXBlb2YgbWV0aG9kID09PSAnc3RyaW5nJykge1xyXG4gICAgaWYgKGlzUGxhaW5PYmplY3Qob3B0aW9uKSkge1xyXG4gICAgICByZW1vdmVJbnRlcmNlcHRvckhvb2soc2NvcGVkSW50ZXJjZXB0b3JzW21ldGhvZF0sIG9wdGlvbik7XHJcbiAgICB9IGVsc2Uge1xyXG4gICAgICBkZWxldGUgc2NvcGVkSW50ZXJjZXB0b3JzW21ldGhvZF07XHJcbiAgICB9XHJcbiAgfSBlbHNlIGlmIChpc1BsYWluT2JqZWN0KG1ldGhvZCkpIHtcclxuICAgIHJlbW92ZUludGVyY2VwdG9ySG9vayhnbG9iYWxJbnRlcmNlcHRvcnMsIG1ldGhvZCk7XHJcbiAgfVxyXG59XHJcblxyXG5mdW5jdGlvbiB3cmFwcGVySG9vayAoaG9vaykge1xyXG4gIHJldHVybiBmdW5jdGlvbiAoZGF0YSkge1xyXG4gICAgcmV0dXJuIGhvb2soZGF0YSkgfHwgZGF0YVxyXG4gIH1cclxufVxyXG5cclxuZnVuY3Rpb24gaXNQcm9taXNlIChvYmopIHtcclxuICByZXR1cm4gISFvYmogJiYgKHR5cGVvZiBvYmogPT09ICdvYmplY3QnIHx8IHR5cGVvZiBvYmogPT09ICdmdW5jdGlvbicpICYmIHR5cGVvZiBvYmoudGhlbiA9PT0gJ2Z1bmN0aW9uJ1xyXG59XHJcblxyXG5mdW5jdGlvbiBxdWV1ZSAoaG9va3MsIGRhdGEpIHtcclxuICBsZXQgcHJvbWlzZSA9IGZhbHNlO1xyXG4gIGZvciAobGV0IGkgPSAwOyBpIDwgaG9va3MubGVuZ3RoOyBpKyspIHtcclxuICAgIGNvbnN0IGhvb2sgPSBob29rc1tpXTtcclxuICAgIGlmIChwcm9taXNlKSB7XHJcbiAgICAgIHByb21pc2UgPSBQcm9taXNlLnJlc29sdmUod3JhcHBlckhvb2soaG9vaykpO1xyXG4gICAgfSBlbHNlIHtcclxuICAgICAgY29uc3QgcmVzID0gaG9vayhkYXRhKTtcclxuICAgICAgaWYgKGlzUHJvbWlzZShyZXMpKSB7XHJcbiAgICAgICAgcHJvbWlzZSA9IFByb21pc2UucmVzb2x2ZShyZXMpO1xyXG4gICAgICB9XHJcbiAgICAgIGlmIChyZXMgPT09IGZhbHNlKSB7XHJcbiAgICAgICAgcmV0dXJuIHtcclxuICAgICAgICAgIHRoZW4gKCkgeyB9XHJcbiAgICAgICAgfVxyXG4gICAgICB9XHJcbiAgICB9XHJcbiAgfVxyXG4gIHJldHVybiBwcm9taXNlIHx8IHtcclxuICAgIHRoZW4gKGNhbGxiYWNrKSB7XHJcbiAgICAgIHJldHVybiBjYWxsYmFjayhkYXRhKVxyXG4gICAgfVxyXG4gIH1cclxufVxyXG5cclxuZnVuY3Rpb24gd3JhcHBlck9wdGlvbnMgKGludGVyY2VwdG9yLCBvcHRpb25zID0ge30pIHtcclxuICBbJ3N1Y2Nlc3MnLCAnZmFpbCcsICdjb21wbGV0ZSddLmZvckVhY2gobmFtZSA9PiB7XHJcbiAgICBpZiAoQXJyYXkuaXNBcnJheShpbnRlcmNlcHRvcltuYW1lXSkpIHtcclxuICAgICAgY29uc3Qgb2xkQ2FsbGJhY2sgPSBvcHRpb25zW25hbWVdO1xyXG4gICAgICBvcHRpb25zW25hbWVdID0gZnVuY3Rpb24gY2FsbGJhY2tJbnRlcmNlcHRvciAocmVzKSB7XHJcbiAgICAgICAgcXVldWUoaW50ZXJjZXB0b3JbbmFtZV0sIHJlcykudGhlbigocmVzKSA9PiB7XHJcbiAgICAgICAgICAvKiBlc2xpbnQtZGlzYWJsZSBuby1taXhlZC1vcGVyYXRvcnMgKi9cclxuICAgICAgICAgIHJldHVybiBpc0ZuKG9sZENhbGxiYWNrKSAmJiBvbGRDYWxsYmFjayhyZXMpIHx8IHJlc1xyXG4gICAgICAgIH0pO1xyXG4gICAgICB9O1xyXG4gICAgfVxyXG4gIH0pO1xyXG4gIHJldHVybiBvcHRpb25zXHJcbn1cclxuXHJcbmZ1bmN0aW9uIHdyYXBwZXJSZXR1cm5WYWx1ZSAobWV0aG9kLCByZXR1cm5WYWx1ZSkge1xyXG4gIGNvbnN0IHJldHVyblZhbHVlSG9va3MgPSBbXTtcclxuICBpZiAoQXJyYXkuaXNBcnJheShnbG9iYWxJbnRlcmNlcHRvcnMucmV0dXJuVmFsdWUpKSB7XHJcbiAgICByZXR1cm5WYWx1ZUhvb2tzLnB1c2goLi4uZ2xvYmFsSW50ZXJjZXB0b3JzLnJldHVyblZhbHVlKTtcclxuICB9XHJcbiAgY29uc3QgaW50ZXJjZXB0b3IgPSBzY29wZWRJbnRlcmNlcHRvcnNbbWV0aG9kXTtcclxuICBpZiAoaW50ZXJjZXB0b3IgJiYgQXJyYXkuaXNBcnJheShpbnRlcmNlcHRvci5yZXR1cm5WYWx1ZSkpIHtcclxuICAgIHJldHVyblZhbHVlSG9va3MucHVzaCguLi5pbnRlcmNlcHRvci5yZXR1cm5WYWx1ZSk7XHJcbiAgfVxyXG4gIHJldHVyblZhbHVlSG9va3MuZm9yRWFjaChob29rID0+IHtcclxuICAgIHJldHVyblZhbHVlID0gaG9vayhyZXR1cm5WYWx1ZSkgfHwgcmV0dXJuVmFsdWU7XHJcbiAgfSk7XHJcbiAgcmV0dXJuIHJldHVyblZhbHVlXHJcbn1cclxuXHJcbmZ1bmN0aW9uIGdldEFwaUludGVyY2VwdG9ySG9va3MgKG1ldGhvZCkge1xyXG4gIGNvbnN0IGludGVyY2VwdG9yID0gT2JqZWN0LmNyZWF0ZShudWxsKTtcclxuICBPYmplY3Qua2V5cyhnbG9iYWxJbnRlcmNlcHRvcnMpLmZvckVhY2goaG9vayA9PiB7XHJcbiAgICBpZiAoaG9vayAhPT0gJ3JldHVyblZhbHVlJykge1xyXG4gICAgICBpbnRlcmNlcHRvcltob29rXSA9IGdsb2JhbEludGVyY2VwdG9yc1tob29rXS5zbGljZSgpO1xyXG4gICAgfVxyXG4gIH0pO1xyXG4gIGNvbnN0IHNjb3BlZEludGVyY2VwdG9yID0gc2NvcGVkSW50ZXJjZXB0b3JzW21ldGhvZF07XHJcbiAgaWYgKHNjb3BlZEludGVyY2VwdG9yKSB7XHJcbiAgICBPYmplY3Qua2V5cyhzY29wZWRJbnRlcmNlcHRvcikuZm9yRWFjaChob29rID0+IHtcclxuICAgICAgaWYgKGhvb2sgIT09ICdyZXR1cm5WYWx1ZScpIHtcclxuICAgICAgICBpbnRlcmNlcHRvcltob29rXSA9IChpbnRlcmNlcHRvcltob29rXSB8fCBbXSkuY29uY2F0KHNjb3BlZEludGVyY2VwdG9yW2hvb2tdKTtcclxuICAgICAgfVxyXG4gICAgfSk7XHJcbiAgfVxyXG4gIHJldHVybiBpbnRlcmNlcHRvclxyXG59XHJcblxyXG5mdW5jdGlvbiBpbnZva2VBcGkgKG1ldGhvZCwgYXBpLCBvcHRpb25zLCAuLi5wYXJhbXMpIHtcclxuICBjb25zdCBpbnRlcmNlcHRvciA9IGdldEFwaUludGVyY2VwdG9ySG9va3MobWV0aG9kKTtcclxuICBpZiAoaW50ZXJjZXB0b3IgJiYgT2JqZWN0LmtleXMoaW50ZXJjZXB0b3IpLmxlbmd0aCkge1xyXG4gICAgaWYgKEFycmF5LmlzQXJyYXkoaW50ZXJjZXB0b3IuaW52b2tlKSkge1xyXG4gICAgICBjb25zdCByZXMgPSBxdWV1ZShpbnRlcmNlcHRvci5pbnZva2UsIG9wdGlvbnMpO1xyXG4gICAgICByZXR1cm4gcmVzLnRoZW4oKG9wdGlvbnMpID0+IHtcclxuICAgICAgICByZXR1cm4gYXBpKHdyYXBwZXJPcHRpb25zKGludGVyY2VwdG9yLCBvcHRpb25zKSwgLi4ucGFyYW1zKVxyXG4gICAgICB9KVxyXG4gICAgfSBlbHNlIHtcclxuICAgICAgcmV0dXJuIGFwaSh3cmFwcGVyT3B0aW9ucyhpbnRlcmNlcHRvciwgb3B0aW9ucyksIC4uLnBhcmFtcylcclxuICAgIH1cclxuICB9XHJcbiAgcmV0dXJuIGFwaShvcHRpb25zLCAuLi5wYXJhbXMpXHJcbn1cclxuXHJcbmNvbnN0IHByb21pc2VJbnRlcmNlcHRvciA9IHtcclxuICByZXR1cm5WYWx1ZSAocmVzKSB7XHJcbiAgICBpZiAoIWlzUHJvbWlzZShyZXMpKSB7XHJcbiAgICAgIHJldHVybiByZXNcclxuICAgIH1cclxuICAgIHJldHVybiBuZXcgUHJvbWlzZSgocmVzb2x2ZSwgcmVqZWN0KSA9PiB7XHJcbiAgICAgIHJlcy50aGVuKHJlcyA9PiB7XHJcbiAgICAgICAgaWYgKHJlc1swXSkge1xyXG4gICAgICAgICAgcmVqZWN0KHJlc1swXSk7XHJcbiAgICAgICAgfSBlbHNlIHtcclxuICAgICAgICAgIHJlc29sdmUocmVzWzFdKTtcclxuICAgICAgICB9XHJcbiAgICAgIH0pO1xyXG4gICAgfSlcclxuICB9XHJcbn07XHJcblxyXG5jb25zdCBTWU5DX0FQSV9SRSA9XHJcbiAgL15cXCR8V2luZG93JHxXaW5kb3dTdHlsZSR8c2VuZEhvc3RFdmVudHxzZW5kTmF0aXZlRXZlbnR8cmVzdG9yZUdsb2JhbHxyZXF1aXJlR2xvYmFsfGdldEN1cnJlbnRTdWJOVnVlfGdldE1lbnVCdXR0b25Cb3VuZGluZ0NsaWVudFJlY3R8XnJlcG9ydHxpbnRlcmNlcHRvcnN8SW50ZXJjZXB0b3IkfGdldFN1Yk5WdWVCeUlkfHJlcXVpcmVOYXRpdmVQbHVnaW58dXB4MnB4fGhpZGVLZXlib2FyZHxjYW5JVXNlfF5jcmVhdGV8U3luYyR8TWFuYWdlciR8YmFzZTY0VG9BcnJheUJ1ZmZlcnxhcnJheUJ1ZmZlclRvQmFzZTY0fGdldExvY2FsZXxzZXRMb2NhbGV8aW52b2tlUHVzaENhbGxiYWNrfGdldFdpbmRvd0luZm98Z2V0RGV2aWNlSW5mb3xnZXRBcHBCYXNlSW5mby87XHJcblxyXG5jb25zdCBDT05URVhUX0FQSV9SRSA9IC9eY3JlYXRlfE1hbmFnZXIkLztcclxuXHJcbi8vIENvbnRleHTkvovlpJbmg4XlhrVcclxuY29uc3QgQ09OVEVYVF9BUElfUkVfRVhDID0gWydjcmVhdGVCTEVDb25uZWN0aW9uJ107XHJcblxyXG4vLyDlkIzmraXkvovlpJbmg4XlhrVcclxuY29uc3QgQVNZTkNfQVBJID0gWydjcmVhdGVCTEVDb25uZWN0aW9uJ107XHJcblxyXG5jb25zdCBDQUxMQkFDS19BUElfUkUgPSAvXm9ufF5vZmYvO1xyXG5cclxuZnVuY3Rpb24gaXNDb250ZXh0QXBpIChuYW1lKSB7XHJcbiAgcmV0dXJuIENPTlRFWFRfQVBJX1JFLnRlc3QobmFtZSkgJiYgQ09OVEVYVF9BUElfUkVfRVhDLmluZGV4T2YobmFtZSkgPT09IC0xXHJcbn1cclxuZnVuY3Rpb24gaXNTeW5jQXBpIChuYW1lKSB7XHJcbiAgcmV0dXJuIFNZTkNfQVBJX1JFLnRlc3QobmFtZSkgJiYgQVNZTkNfQVBJLmluZGV4T2YobmFtZSkgPT09IC0xXHJcbn1cclxuXHJcbmZ1bmN0aW9uIGlzQ2FsbGJhY2tBcGkgKG5hbWUpIHtcclxuICByZXR1cm4gQ0FMTEJBQ0tfQVBJX1JFLnRlc3QobmFtZSkgJiYgbmFtZSAhPT0gJ29uUHVzaCdcclxufVxyXG5cclxuZnVuY3Rpb24gaGFuZGxlUHJvbWlzZSAocHJvbWlzZSkge1xyXG4gIHJldHVybiBwcm9taXNlLnRoZW4oZGF0YSA9PiB7XHJcbiAgICByZXR1cm4gW251bGwsIGRhdGFdXHJcbiAgfSlcclxuICAgIC5jYXRjaChlcnIgPT4gW2Vycl0pXHJcbn1cclxuXHJcbmZ1bmN0aW9uIHNob3VsZFByb21pc2UgKG5hbWUpIHtcclxuICBpZiAoXHJcbiAgICBpc0NvbnRleHRBcGkobmFtZSkgfHxcclxuICAgIGlzU3luY0FwaShuYW1lKSB8fFxyXG4gICAgaXNDYWxsYmFja0FwaShuYW1lKVxyXG4gICkge1xyXG4gICAgcmV0dXJuIGZhbHNlXHJcbiAgfVxyXG4gIHJldHVybiB0cnVlXHJcbn1cclxuXHJcbi8qIGVzbGludC1kaXNhYmxlIG5vLWV4dGVuZC1uYXRpdmUgKi9cclxuaWYgKCFQcm9taXNlLnByb3RvdHlwZS5maW5hbGx5KSB7XHJcbiAgUHJvbWlzZS5wcm90b3R5cGUuZmluYWxseSA9IGZ1bmN0aW9uIChjYWxsYmFjaykge1xyXG4gICAgY29uc3QgcHJvbWlzZSA9IHRoaXMuY29uc3RydWN0b3I7XHJcbiAgICByZXR1cm4gdGhpcy50aGVuKFxyXG4gICAgICB2YWx1ZSA9PiBwcm9taXNlLnJlc29sdmUoY2FsbGJhY2soKSkudGhlbigoKSA9PiB2YWx1ZSksXHJcbiAgICAgIHJlYXNvbiA9PiBwcm9taXNlLnJlc29sdmUoY2FsbGJhY2soKSkudGhlbigoKSA9PiB7XHJcbiAgICAgICAgdGhyb3cgcmVhc29uXHJcbiAgICAgIH0pXHJcbiAgICApXHJcbiAgfTtcclxufVxyXG5cclxuZnVuY3Rpb24gcHJvbWlzaWZ5IChuYW1lLCBhcGkpIHtcclxuICBpZiAoIXNob3VsZFByb21pc2UobmFtZSkpIHtcclxuICAgIHJldHVybiBhcGlcclxuICB9XHJcbiAgcmV0dXJuIGZ1bmN0aW9uIHByb21pc2VBcGkgKG9wdGlvbnMgPSB7fSwgLi4ucGFyYW1zKSB7XHJcbiAgICBpZiAoaXNGbihvcHRpb25zLnN1Y2Nlc3MpIHx8IGlzRm4ob3B0aW9ucy5mYWlsKSB8fCBpc0ZuKG9wdGlvbnMuY29tcGxldGUpKSB7XHJcbiAgICAgIHJldHVybiB3cmFwcGVyUmV0dXJuVmFsdWUobmFtZSwgaW52b2tlQXBpKG5hbWUsIGFwaSwgb3B0aW9ucywgLi4ucGFyYW1zKSlcclxuICAgIH1cclxuICAgIHJldHVybiB3cmFwcGVyUmV0dXJuVmFsdWUobmFtZSwgaGFuZGxlUHJvbWlzZShuZXcgUHJvbWlzZSgocmVzb2x2ZSwgcmVqZWN0KSA9PiB7XHJcbiAgICAgIGludm9rZUFwaShuYW1lLCBhcGksIE9iamVjdC5hc3NpZ24oe30sIG9wdGlvbnMsIHtcclxuICAgICAgICBzdWNjZXNzOiByZXNvbHZlLFxyXG4gICAgICAgIGZhaWw6IHJlamVjdFxyXG4gICAgICB9KSwgLi4ucGFyYW1zKTtcclxuICAgIH0pKSlcclxuICB9XHJcbn1cclxuXHJcbmNvbnN0IEVQUyA9IDFlLTQ7XHJcbmNvbnN0IEJBU0VfREVWSUNFX1dJRFRIID0gNzUwO1xyXG5sZXQgaXNJT1MgPSBmYWxzZTtcclxubGV0IGRldmljZVdpZHRoID0gMDtcclxubGV0IGRldmljZURQUiA9IDA7XHJcblxyXG5mdW5jdGlvbiBjaGVja0RldmljZVdpZHRoICgpIHtcclxuICBjb25zdCB7XHJcbiAgICBwbGF0Zm9ybSxcclxuICAgIHBpeGVsUmF0aW8sXHJcbiAgICB3aW5kb3dXaWR0aFxyXG4gIH0gPSB0dC5nZXRTeXN0ZW1JbmZvU3luYygpOyAvLyB1bmk9PnR0IHJ1bnRpbWUg57yW6K+R55uu5qCH5pivIHVuaSDlr7nosaHvvIzlhoXpg6jkuI3lhYHorrjnm7TmjqXkvb/nlKggdW5pXHJcblxyXG4gIGRldmljZVdpZHRoID0gd2luZG93V2lkdGg7XHJcbiAgZGV2aWNlRFBSID0gcGl4ZWxSYXRpbztcclxuICBpc0lPUyA9IHBsYXRmb3JtID09PSAnaW9zJztcclxufVxyXG5cclxuZnVuY3Rpb24gdXB4MnB4IChudW1iZXIsIG5ld0RldmljZVdpZHRoKSB7XHJcbiAgaWYgKGRldmljZVdpZHRoID09PSAwKSB7XHJcbiAgICBjaGVja0RldmljZVdpZHRoKCk7XHJcbiAgfVxyXG5cclxuICBudW1iZXIgPSBOdW1iZXIobnVtYmVyKTtcclxuICBpZiAobnVtYmVyID09PSAwKSB7XHJcbiAgICByZXR1cm4gMFxyXG4gIH1cclxuICBsZXQgcmVzdWx0ID0gKG51bWJlciAvIEJBU0VfREVWSUNFX1dJRFRIKSAqIChuZXdEZXZpY2VXaWR0aCB8fCBkZXZpY2VXaWR0aCk7XHJcbiAgaWYgKHJlc3VsdCA8IDApIHtcclxuICAgIHJlc3VsdCA9IC1yZXN1bHQ7XHJcbiAgfVxyXG4gIHJlc3VsdCA9IE1hdGguZmxvb3IocmVzdWx0ICsgRVBTKTtcclxuICBpZiAocmVzdWx0ID09PSAwKSB7XHJcbiAgICBpZiAoZGV2aWNlRFBSID09PSAxIHx8ICFpc0lPUykge1xyXG4gICAgICByZXN1bHQgPSAxO1xyXG4gICAgfSBlbHNlIHtcclxuICAgICAgcmVzdWx0ID0gMC41O1xyXG4gICAgfVxyXG4gIH1cclxuICByZXR1cm4gbnVtYmVyIDwgMCA/IC1yZXN1bHQgOiByZXN1bHRcclxufVxyXG5cclxuY29uc3QgTE9DQUxFX1pIX0hBTlMgPSAnemgtSGFucyc7XHJcbmNvbnN0IExPQ0FMRV9aSF9IQU5UID0gJ3poLUhhbnQnO1xyXG5jb25zdCBMT0NBTEVfRU4gPSAnZW4nO1xyXG5jb25zdCBMT0NBTEVfRlIgPSAnZnInO1xyXG5jb25zdCBMT0NBTEVfRVMgPSAnZXMnO1xyXG5cclxuY29uc3QgbWVzc2FnZXMgPSB7fTtcclxuXHJcbmxldCBsb2NhbGU7XHJcblxyXG57XHJcbiAgbG9jYWxlID0gbm9ybWFsaXplTG9jYWxlKHR0LmdldFN5c3RlbUluZm9TeW5jKCkubGFuZ3VhZ2UpIHx8IExPQ0FMRV9FTjtcclxufVxyXG5cclxuZnVuY3Rpb24gaW5pdEkxOG5NZXNzYWdlcyAoKSB7XHJcbiAgaWYgKCFpc0VuYWJsZUxvY2FsZSgpKSB7XHJcbiAgICByZXR1cm5cclxuICB9XHJcbiAgY29uc3QgbG9jYWxlS2V5cyA9IE9iamVjdC5rZXlzKF9fdW5pQ29uZmlnLmxvY2FsZXMpO1xyXG4gIGlmIChsb2NhbGVLZXlzLmxlbmd0aCkge1xyXG4gICAgbG9jYWxlS2V5cy5mb3JFYWNoKChsb2NhbGUpID0+IHtcclxuICAgICAgY29uc3QgY3VyTWVzc2FnZXMgPSBtZXNzYWdlc1tsb2NhbGVdO1xyXG4gICAgICBjb25zdCB1c2VyTWVzc2FnZXMgPSBfX3VuaUNvbmZpZy5sb2NhbGVzW2xvY2FsZV07XHJcbiAgICAgIGlmIChjdXJNZXNzYWdlcykge1xyXG4gICAgICAgIE9iamVjdC5hc3NpZ24oY3VyTWVzc2FnZXMsIHVzZXJNZXNzYWdlcyk7XHJcbiAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgbWVzc2FnZXNbbG9jYWxlXSA9IHVzZXJNZXNzYWdlcztcclxuICAgICAgfVxyXG4gICAgfSk7XHJcbiAgfVxyXG59XHJcblxyXG5pbml0STE4bk1lc3NhZ2VzKCk7XHJcblxyXG5jb25zdCBpMThuID0gaW5pdFZ1ZUkxOG4oXHJcbiAgbG9jYWxlLFxyXG4gICB7fVxyXG4pO1xyXG5jb25zdCB0ID0gaTE4bi50O1xyXG5jb25zdCBpMThuTWl4aW4gPSAoaTE4bi5taXhpbiA9IHtcclxuICBiZWZvcmVDcmVhdGUgKCkge1xyXG4gICAgY29uc3QgdW53YXRjaCA9IGkxOG4uaTE4bi53YXRjaExvY2FsZSgoKSA9PiB7XHJcbiAgICAgIHRoaXMuJGZvcmNlVXBkYXRlKCk7XHJcbiAgICB9KTtcclxuICAgIHRoaXMuJG9uY2UoJ2hvb2s6YmVmb3JlRGVzdHJveScsIGZ1bmN0aW9uICgpIHtcclxuICAgICAgdW53YXRjaCgpO1xyXG4gICAgfSk7XHJcbiAgfSxcclxuICBtZXRob2RzOiB7XHJcbiAgICAkJHQgKGtleSwgdmFsdWVzKSB7XHJcbiAgICAgIHJldHVybiB0KGtleSwgdmFsdWVzKVxyXG4gICAgfVxyXG4gIH1cclxufSk7XHJcbmNvbnN0IHNldExvY2FsZSA9IGkxOG4uc2V0TG9jYWxlO1xyXG5jb25zdCBnZXRMb2NhbGUgPSBpMThuLmdldExvY2FsZTtcclxuXHJcbmZ1bmN0aW9uIGluaXRBcHBMb2NhbGUgKFZ1ZSwgYXBwVm0sIGxvY2FsZSkge1xyXG4gIGNvbnN0IHN0YXRlID0gVnVlLm9ic2VydmFibGUoe1xyXG4gICAgbG9jYWxlOiBsb2NhbGUgfHwgaTE4bi5nZXRMb2NhbGUoKVxyXG4gIH0pO1xyXG4gIGNvbnN0IGxvY2FsZVdhdGNoZXJzID0gW107XHJcbiAgYXBwVm0uJHdhdGNoTG9jYWxlID0gZm4gPT4ge1xyXG4gICAgbG9jYWxlV2F0Y2hlcnMucHVzaChmbik7XHJcbiAgfTtcclxuICBPYmplY3QuZGVmaW5lUHJvcGVydHkoYXBwVm0sICckbG9jYWxlJywge1xyXG4gICAgZ2V0ICgpIHtcclxuICAgICAgcmV0dXJuIHN0YXRlLmxvY2FsZVxyXG4gICAgfSxcclxuICAgIHNldCAodikge1xyXG4gICAgICBzdGF0ZS5sb2NhbGUgPSB2O1xyXG4gICAgICBsb2NhbGVXYXRjaGVycy5mb3JFYWNoKHdhdGNoID0+IHdhdGNoKHYpKTtcclxuICAgIH1cclxuICB9KTtcclxufVxyXG5cclxuZnVuY3Rpb24gaXNFbmFibGVMb2NhbGUgKCkge1xyXG4gIHJldHVybiB0eXBlb2YgX191bmlDb25maWcgIT09ICd1bmRlZmluZWQnICYmIF9fdW5pQ29uZmlnLmxvY2FsZXMgJiYgISFPYmplY3Qua2V5cyhfX3VuaUNvbmZpZy5sb2NhbGVzKS5sZW5ndGhcclxufVxyXG5cclxuZnVuY3Rpb24gaW5jbHVkZSAoc3RyLCBwYXJ0cykge1xyXG4gIHJldHVybiAhIXBhcnRzLmZpbmQoKHBhcnQpID0+IHN0ci5pbmRleE9mKHBhcnQpICE9PSAtMSlcclxufVxyXG5cclxuZnVuY3Rpb24gc3RhcnRzV2l0aCAoc3RyLCBwYXJ0cykge1xyXG4gIHJldHVybiBwYXJ0cy5maW5kKChwYXJ0KSA9PiBzdHIuaW5kZXhPZihwYXJ0KSA9PT0gMClcclxufVxyXG5cclxuZnVuY3Rpb24gbm9ybWFsaXplTG9jYWxlIChsb2NhbGUsIG1lc3NhZ2VzKSB7XHJcbiAgaWYgKCFsb2NhbGUpIHtcclxuICAgIHJldHVyblxyXG4gIH1cclxuICBsb2NhbGUgPSBsb2NhbGUudHJpbSgpLnJlcGxhY2UoL18vZywgJy0nKTtcclxuICBpZiAobWVzc2FnZXMgJiYgbWVzc2FnZXNbbG9jYWxlXSkge1xyXG4gICAgcmV0dXJuIGxvY2FsZVxyXG4gIH1cclxuICBsb2NhbGUgPSBsb2NhbGUudG9Mb3dlckNhc2UoKTtcclxuICBpZiAobG9jYWxlID09PSAnY2hpbmVzZScpIHtcclxuICAgIC8vIOaUr+S7mOWunVxyXG4gICAgcmV0dXJuIExPQ0FMRV9aSF9IQU5TXHJcbiAgfVxyXG4gIGlmIChsb2NhbGUuaW5kZXhPZignemgnKSA9PT0gMCkge1xyXG4gICAgaWYgKGxvY2FsZS5pbmRleE9mKCctaGFucycpID4gLTEpIHtcclxuICAgICAgcmV0dXJuIExPQ0FMRV9aSF9IQU5TXHJcbiAgICB9XHJcbiAgICBpZiAobG9jYWxlLmluZGV4T2YoJy1oYW50JykgPiAtMSkge1xyXG4gICAgICByZXR1cm4gTE9DQUxFX1pIX0hBTlRcclxuICAgIH1cclxuICAgIGlmIChpbmNsdWRlKGxvY2FsZSwgWyctdHcnLCAnLWhrJywgJy1tbycsICctY2h0J10pKSB7XHJcbiAgICAgIHJldHVybiBMT0NBTEVfWkhfSEFOVFxyXG4gICAgfVxyXG4gICAgcmV0dXJuIExPQ0FMRV9aSF9IQU5TXHJcbiAgfVxyXG4gIGNvbnN0IGxhbmcgPSBzdGFydHNXaXRoKGxvY2FsZSwgW0xPQ0FMRV9FTiwgTE9DQUxFX0ZSLCBMT0NBTEVfRVNdKTtcclxuICBpZiAobGFuZykge1xyXG4gICAgcmV0dXJuIGxhbmdcclxuICB9XHJcbn1cclxuLy8gZXhwb3J0IGZ1bmN0aW9uIGluaXRJMThuKCkge1xyXG4vLyAgIGNvbnN0IGxvY2FsZUtleXMgPSBPYmplY3Qua2V5cyhfX3VuaUNvbmZpZy5sb2NhbGVzIHx8IHt9KVxyXG4vLyAgIGlmIChsb2NhbGVLZXlzLmxlbmd0aCkge1xyXG4vLyAgICAgbG9jYWxlS2V5cy5mb3JFYWNoKChsb2NhbGUpID0+XHJcbi8vICAgICAgIGkxOG4uYWRkKGxvY2FsZSwgX191bmlDb25maWcubG9jYWxlc1tsb2NhbGVdKVxyXG4vLyAgICAgKVxyXG4vLyAgIH1cclxuLy8gfVxyXG5cclxuZnVuY3Rpb24gZ2V0TG9jYWxlJDEgKCkge1xyXG4gIC8vIOS8mOWFiOS9v+eUqCAkbG9jYWxlXHJcbiAgY29uc3QgYXBwID0gZ2V0QXBwKHtcclxuICAgIGFsbG93RGVmYXVsdDogdHJ1ZVxyXG4gIH0pO1xyXG4gIGlmIChhcHAgJiYgYXBwLiR2bSkge1xyXG4gICAgcmV0dXJuIGFwcC4kdm0uJGxvY2FsZVxyXG4gIH1cclxuICByZXR1cm4gbm9ybWFsaXplTG9jYWxlKHR0LmdldFN5c3RlbUluZm9TeW5jKCkubGFuZ3VhZ2UpIHx8IExPQ0FMRV9FTlxyXG59XHJcblxyXG5mdW5jdGlvbiBzZXRMb2NhbGUkMSAobG9jYWxlKSB7XHJcbiAgY29uc3QgYXBwID0gZ2V0QXBwKCk7XHJcbiAgaWYgKCFhcHApIHtcclxuICAgIHJldHVybiBmYWxzZVxyXG4gIH1cclxuICBjb25zdCBvbGRMb2NhbGUgPSBhcHAuJHZtLiRsb2NhbGU7XHJcbiAgaWYgKG9sZExvY2FsZSAhPT0gbG9jYWxlKSB7XHJcbiAgICBhcHAuJHZtLiRsb2NhbGUgPSBsb2NhbGU7XHJcbiAgICBvbkxvY2FsZUNoYW5nZUNhbGxiYWNrcy5mb3JFYWNoKChmbikgPT4gZm4oe1xyXG4gICAgICBsb2NhbGVcclxuICAgIH0pKTtcclxuICAgIHJldHVybiB0cnVlXHJcbiAgfVxyXG4gIHJldHVybiBmYWxzZVxyXG59XHJcblxyXG5jb25zdCBvbkxvY2FsZUNoYW5nZUNhbGxiYWNrcyA9IFtdO1xyXG5mdW5jdGlvbiBvbkxvY2FsZUNoYW5nZSAoZm4pIHtcclxuICBpZiAob25Mb2NhbGVDaGFuZ2VDYWxsYmFja3MuaW5kZXhPZihmbikgPT09IC0xKSB7XHJcbiAgICBvbkxvY2FsZUNoYW5nZUNhbGxiYWNrcy5wdXNoKGZuKTtcclxuICB9XHJcbn1cclxuXHJcbmlmICh0eXBlb2YgZ2xvYmFsICE9PSAndW5kZWZpbmVkJykge1xyXG4gIGdsb2JhbC5nZXRMb2NhbGUgPSBnZXRMb2NhbGUkMTtcclxufVxyXG5cclxuY29uc3QgaW50ZXJjZXB0b3JzID0ge1xyXG4gIHByb21pc2VJbnRlcmNlcHRvclxyXG59O1xyXG5cclxudmFyIGJhc2VBcGkgPSAvKiNfX1BVUkVfXyovT2JqZWN0LmZyZWV6ZSh7XHJcbiAgX19wcm90b19fOiBudWxsLFxyXG4gIHVweDJweDogdXB4MnB4LFxyXG4gIGdldExvY2FsZTogZ2V0TG9jYWxlJDEsXHJcbiAgc2V0TG9jYWxlOiBzZXRMb2NhbGUkMSxcclxuICBvbkxvY2FsZUNoYW5nZTogb25Mb2NhbGVDaGFuZ2UsXHJcbiAgYWRkSW50ZXJjZXB0b3I6IGFkZEludGVyY2VwdG9yLFxyXG4gIHJlbW92ZUludGVyY2VwdG9yOiByZW1vdmVJbnRlcmNlcHRvcixcclxuICBpbnRlcmNlcHRvcnM6IGludGVyY2VwdG9yc1xyXG59KTtcclxuXHJcbmNsYXNzIEV2ZW50Q2hhbm5lbCB7XHJcbiAgY29uc3RydWN0b3IgKGlkLCBldmVudHMpIHtcclxuICAgIHRoaXMuaWQgPSBpZDtcclxuICAgIHRoaXMubGlzdGVuZXIgPSB7fTtcclxuICAgIHRoaXMuZW1pdENhY2hlID0ge307XHJcbiAgICBpZiAoZXZlbnRzKSB7XHJcbiAgICAgIE9iamVjdC5rZXlzKGV2ZW50cykuZm9yRWFjaChuYW1lID0+IHtcclxuICAgICAgICB0aGlzLm9uKG5hbWUsIGV2ZW50c1tuYW1lXSk7XHJcbiAgICAgIH0pO1xyXG4gICAgfVxyXG4gIH1cclxuXHJcbiAgZW1pdCAoZXZlbnROYW1lLCAuLi5hcmdzKSB7XHJcbiAgICBjb25zdCBmbnMgPSB0aGlzLmxpc3RlbmVyW2V2ZW50TmFtZV07XHJcbiAgICBpZiAoIWZucykge1xyXG4gICAgICByZXR1cm4gKHRoaXMuZW1pdENhY2hlW2V2ZW50TmFtZV0gfHwgKHRoaXMuZW1pdENhY2hlW2V2ZW50TmFtZV0gPSBbXSkpLnB1c2goYXJncylcclxuICAgIH1cclxuICAgIGZucy5mb3JFYWNoKG9wdCA9PiB7XHJcbiAgICAgIG9wdC5mbi5hcHBseShvcHQuZm4sIGFyZ3MpO1xyXG4gICAgfSk7XHJcbiAgICB0aGlzLmxpc3RlbmVyW2V2ZW50TmFtZV0gPSBmbnMuZmlsdGVyKG9wdCA9PiBvcHQudHlwZSAhPT0gJ29uY2UnKTtcclxuICB9XHJcblxyXG4gIG9uIChldmVudE5hbWUsIGZuKSB7XHJcbiAgICB0aGlzLl9hZGRMaXN0ZW5lcihldmVudE5hbWUsICdvbicsIGZuKTtcclxuICAgIHRoaXMuX2NsZWFyQ2FjaGUoZXZlbnROYW1lKTtcclxuICB9XHJcblxyXG4gIG9uY2UgKGV2ZW50TmFtZSwgZm4pIHtcclxuICAgIHRoaXMuX2FkZExpc3RlbmVyKGV2ZW50TmFtZSwgJ29uY2UnLCBmbik7XHJcbiAgICB0aGlzLl9jbGVhckNhY2hlKGV2ZW50TmFtZSk7XHJcbiAgfVxyXG5cclxuICBvZmYgKGV2ZW50TmFtZSwgZm4pIHtcclxuICAgIGNvbnN0IGZucyA9IHRoaXMubGlzdGVuZXJbZXZlbnROYW1lXTtcclxuICAgIGlmICghZm5zKSB7XHJcbiAgICAgIHJldHVyblxyXG4gICAgfVxyXG4gICAgaWYgKGZuKSB7XHJcbiAgICAgIGZvciAobGV0IGkgPSAwOyBpIDwgZm5zLmxlbmd0aDspIHtcclxuICAgICAgICBpZiAoZm5zW2ldLmZuID09PSBmbikge1xyXG4gICAgICAgICAgZm5zLnNwbGljZShpLCAxKTtcclxuICAgICAgICAgIGktLTtcclxuICAgICAgICB9XHJcbiAgICAgICAgaSsrO1xyXG4gICAgICB9XHJcbiAgICB9IGVsc2Uge1xyXG4gICAgICBkZWxldGUgdGhpcy5saXN0ZW5lcltldmVudE5hbWVdO1xyXG4gICAgfVxyXG4gIH1cclxuXHJcbiAgX2NsZWFyQ2FjaGUgKGV2ZW50TmFtZSkge1xyXG4gICAgY29uc3QgY2FjaGVBcmdzID0gdGhpcy5lbWl0Q2FjaGVbZXZlbnROYW1lXTtcclxuICAgIGlmIChjYWNoZUFyZ3MpIHtcclxuICAgICAgZm9yICg7IGNhY2hlQXJncy5sZW5ndGggPiAwOykge1xyXG4gICAgICAgIHRoaXMuZW1pdC5hcHBseSh0aGlzLCBbZXZlbnROYW1lXS5jb25jYXQoY2FjaGVBcmdzLnNoaWZ0KCkpKTtcclxuICAgICAgfVxyXG4gICAgfVxyXG4gIH1cclxuXHJcbiAgX2FkZExpc3RlbmVyIChldmVudE5hbWUsIHR5cGUsIGZuKSB7XHJcbiAgICAodGhpcy5saXN0ZW5lcltldmVudE5hbWVdIHx8ICh0aGlzLmxpc3RlbmVyW2V2ZW50TmFtZV0gPSBbXSkpLnB1c2goe1xyXG4gICAgICBmbixcclxuICAgICAgdHlwZVxyXG4gICAgfSk7XHJcbiAgfVxyXG59XHJcblxyXG5jb25zdCBldmVudENoYW5uZWxzID0ge307XHJcblxyXG5jb25zdCBldmVudENoYW5uZWxTdGFjayA9IFtdO1xyXG5cclxubGV0IGlkID0gMDtcclxuXHJcbmZ1bmN0aW9uIGluaXRFdmVudENoYW5uZWwgKGV2ZW50cywgY2FjaGUgPSB0cnVlKSB7XHJcbiAgaWQrKztcclxuICBjb25zdCBldmVudENoYW5uZWwgPSBuZXcgRXZlbnRDaGFubmVsKGlkLCBldmVudHMpO1xyXG4gIGlmIChjYWNoZSkge1xyXG4gICAgZXZlbnRDaGFubmVsc1tpZF0gPSBldmVudENoYW5uZWw7XHJcbiAgICBldmVudENoYW5uZWxTdGFjay5wdXNoKGV2ZW50Q2hhbm5lbCk7XHJcbiAgfVxyXG4gIHJldHVybiBldmVudENoYW5uZWxcclxufVxyXG5cclxuZnVuY3Rpb24gZ2V0RXZlbnRDaGFubmVsIChpZCkge1xyXG4gIGlmIChpZCkge1xyXG4gICAgY29uc3QgZXZlbnRDaGFubmVsID0gZXZlbnRDaGFubmVsc1tpZF07XHJcbiAgICBkZWxldGUgZXZlbnRDaGFubmVsc1tpZF07XHJcbiAgICByZXR1cm4gZXZlbnRDaGFubmVsXHJcbiAgfVxyXG4gIHJldHVybiBldmVudENoYW5uZWxTdGFjay5zaGlmdCgpXHJcbn1cclxuXHJcbnZhciBuYXZpZ2F0ZVRvID0ge1xyXG4gIGFyZ3MgKGZyb21BcmdzLCB0b0FyZ3MpIHtcclxuICAgIGNvbnN0IGlkID0gaW5pdEV2ZW50Q2hhbm5lbChmcm9tQXJncy5ldmVudHMpLmlkO1xyXG4gICAgaWYgKGZyb21BcmdzLnVybCkge1xyXG4gICAgICBmcm9tQXJncy51cmwgPSBmcm9tQXJncy51cmwgKyAoZnJvbUFyZ3MudXJsLmluZGV4T2YoJz8nKSA9PT0gLTEgPyAnPycgOiAnJicpICsgJ19faWRfXz0nICsgaWQ7XHJcbiAgICB9XHJcbiAgfSxcclxuICByZXR1cm5WYWx1ZSAoZnJvbVJlcywgdG9SZXMpIHtcclxuICAgIGZyb21SZXMuZXZlbnRDaGFubmVsID0gZ2V0RXZlbnRDaGFubmVsKCk7XHJcbiAgfVxyXG59O1xyXG5cclxuZnVuY3Rpb24gZmluZEV4aXN0c1BhZ2VJbmRleCAodXJsKSB7XHJcbiAgY29uc3QgcGFnZXMgPSBnZXRDdXJyZW50UGFnZXMoKTtcclxuICBsZXQgbGVuID0gcGFnZXMubGVuZ3RoO1xyXG4gIHdoaWxlIChsZW4tLSkge1xyXG4gICAgY29uc3QgcGFnZSA9IHBhZ2VzW2xlbl07XHJcbiAgICBpZiAocGFnZS4kcGFnZSAmJiBwYWdlLiRwYWdlLmZ1bGxQYXRoID09PSB1cmwpIHtcclxuICAgICAgcmV0dXJuIGxlblxyXG4gICAgfVxyXG4gIH1cclxuICByZXR1cm4gLTFcclxufVxyXG5cclxudmFyIHJlZGlyZWN0VG8gPSB7XHJcbiAgbmFtZSAoZnJvbUFyZ3MpIHtcclxuICAgIGlmIChmcm9tQXJncy5leGlzdHMgPT09ICdiYWNrJyAmJiBmcm9tQXJncy5kZWx0YSkge1xyXG4gICAgICByZXR1cm4gJ25hdmlnYXRlQmFjaydcclxuICAgIH1cclxuICAgIHJldHVybiAncmVkaXJlY3RUbydcclxuICB9LFxyXG4gIGFyZ3MgKGZyb21BcmdzKSB7XHJcbiAgICBpZiAoZnJvbUFyZ3MuZXhpc3RzID09PSAnYmFjaycgJiYgZnJvbUFyZ3MudXJsKSB7XHJcbiAgICAgIGNvbnN0IGV4aXN0c1BhZ2VJbmRleCA9IGZpbmRFeGlzdHNQYWdlSW5kZXgoZnJvbUFyZ3MudXJsKTtcclxuICAgICAgaWYgKGV4aXN0c1BhZ2VJbmRleCAhPT0gLTEpIHtcclxuICAgICAgICBjb25zdCBkZWx0YSA9IGdldEN1cnJlbnRQYWdlcygpLmxlbmd0aCAtIDEgLSBleGlzdHNQYWdlSW5kZXg7XHJcbiAgICAgICAgaWYgKGRlbHRhID4gMCkge1xyXG4gICAgICAgICAgZnJvbUFyZ3MuZGVsdGEgPSBkZWx0YTtcclxuICAgICAgICB9XHJcbiAgICAgIH1cclxuICAgIH1cclxuICB9XHJcbn07XHJcblxyXG52YXIgcHJldmlld0ltYWdlID0ge1xyXG4gIGFyZ3MgKGZyb21BcmdzKSB7XHJcbiAgICBsZXQgY3VycmVudEluZGV4ID0gcGFyc2VJbnQoZnJvbUFyZ3MuY3VycmVudCk7XHJcbiAgICBpZiAoaXNOYU4oY3VycmVudEluZGV4KSkge1xyXG4gICAgICByZXR1cm5cclxuICAgIH1cclxuICAgIGNvbnN0IHVybHMgPSBmcm9tQXJncy51cmxzO1xyXG4gICAgaWYgKCFBcnJheS5pc0FycmF5KHVybHMpKSB7XHJcbiAgICAgIHJldHVyblxyXG4gICAgfVxyXG4gICAgY29uc3QgbGVuID0gdXJscy5sZW5ndGg7XHJcbiAgICBpZiAoIWxlbikge1xyXG4gICAgICByZXR1cm5cclxuICAgIH1cclxuICAgIGlmIChjdXJyZW50SW5kZXggPCAwKSB7XHJcbiAgICAgIGN1cnJlbnRJbmRleCA9IDA7XHJcbiAgICB9IGVsc2UgaWYgKGN1cnJlbnRJbmRleCA+PSBsZW4pIHtcclxuICAgICAgY3VycmVudEluZGV4ID0gbGVuIC0gMTtcclxuICAgIH1cclxuICAgIGlmIChjdXJyZW50SW5kZXggPiAwKSB7XHJcbiAgICAgIGZyb21BcmdzLmN1cnJlbnQgPSB1cmxzW2N1cnJlbnRJbmRleF07XHJcbiAgICAgIGZyb21BcmdzLnVybHMgPSB1cmxzLmZpbHRlcihcclxuICAgICAgICAoaXRlbSwgaW5kZXgpID0+IGluZGV4IDwgY3VycmVudEluZGV4ID8gaXRlbSAhPT0gdXJsc1tjdXJyZW50SW5kZXhdIDogdHJ1ZVxyXG4gICAgICApO1xyXG4gICAgfSBlbHNlIHtcclxuICAgICAgZnJvbUFyZ3MuY3VycmVudCA9IHVybHNbMF07XHJcbiAgICB9XHJcbiAgICByZXR1cm4ge1xyXG4gICAgICBpbmRpY2F0b3I6IGZhbHNlLFxyXG4gICAgICBsb29wOiBmYWxzZVxyXG4gICAgfVxyXG4gIH1cclxufTtcclxuXHJcbmNvbnN0IFVVSURfS0VZID0gJ19fRENfU1RBVF9VVUlEJztcclxubGV0IGRldmljZUlkO1xyXG5mdW5jdGlvbiB1c2VEZXZpY2VJZCAocmVzdWx0KSB7XHJcbiAgZGV2aWNlSWQgPSBkZXZpY2VJZCB8fCB0dC5nZXRTdG9yYWdlU3luYyhVVUlEX0tFWSk7XHJcbiAgaWYgKCFkZXZpY2VJZCkge1xyXG4gICAgZGV2aWNlSWQgPSBEYXRlLm5vdygpICsgJycgKyBNYXRoLmZsb29yKE1hdGgucmFuZG9tKCkgKiAxZTcpO1xyXG4gICAgdHQuc2V0U3RvcmFnZSh7XHJcbiAgICAgIGtleTogVVVJRF9LRVksXHJcbiAgICAgIGRhdGE6IGRldmljZUlkXHJcbiAgICB9KTtcclxuICB9XHJcbiAgcmVzdWx0LmRldmljZUlkID0gZGV2aWNlSWQ7XHJcbn1cclxuXHJcbmZ1bmN0aW9uIGFkZFNhZmVBcmVhSW5zZXRzIChyZXN1bHQpIHtcclxuICBpZiAocmVzdWx0LnNhZmVBcmVhKSB7XHJcbiAgICBjb25zdCBzYWZlQXJlYSA9IHJlc3VsdC5zYWZlQXJlYTtcclxuICAgIHJlc3VsdC5zYWZlQXJlYUluc2V0cyA9IHtcclxuICAgICAgdG9wOiBzYWZlQXJlYS50b3AsXHJcbiAgICAgIGxlZnQ6IHNhZmVBcmVhLmxlZnQsXHJcbiAgICAgIHJpZ2h0OiByZXN1bHQud2luZG93V2lkdGggLSBzYWZlQXJlYS5yaWdodCxcclxuICAgICAgYm90dG9tOiByZXN1bHQuc2NyZWVuSGVpZ2h0IC0gc2FmZUFyZWEuYm90dG9tXHJcbiAgICB9O1xyXG4gIH1cclxufVxyXG5cclxuZnVuY3Rpb24gcG9wdWxhdGVQYXJhbWV0ZXJzIChyZXN1bHQpIHtcclxuICBjb25zdCB7XHJcbiAgICBicmFuZCA9ICcnLCBtb2RlbCA9ICcnLCBzeXN0ZW0gPSAnJyxcclxuICAgIGxhbmd1YWdlID0gJycsIHRoZW1lLCB2ZXJzaW9uLFxyXG4gICAgcGxhdGZvcm0sIGZvbnRTaXplU2V0dGluZyxcclxuICAgIFNES1ZlcnNpb24sIHBpeGVsUmF0aW8sIGRldmljZU9yaWVudGF0aW9uXHJcbiAgfSA9IHJlc3VsdDtcclxuICAvLyBjb25zdCBpc1F1aWNrQXBwID0gXCJtcC10b3V0aWFvXCIuaW5kZXhPZigncXVpY2thcHAtd2VidmlldycpICE9PSAtMVxyXG5cclxuICAvLyBvc05hbWUgb3NWZXJzaW9uXHJcbiAgbGV0IG9zTmFtZSA9ICcnO1xyXG4gIGxldCBvc1ZlcnNpb24gPSAnJztcclxuICB7XHJcbiAgICBvc05hbWUgPSBzeXN0ZW0uc3BsaXQoJyAnKVswXSB8fCAnJztcclxuICAgIG9zVmVyc2lvbiA9IHN5c3RlbS5zcGxpdCgnICcpWzFdIHx8ICcnO1xyXG4gIH1cclxuICBsZXQgaG9zdFZlcnNpb24gPSB2ZXJzaW9uO1xyXG5cclxuICAvLyBkZXZpY2VUeXBlXHJcbiAgY29uc3QgZGV2aWNlVHlwZSA9IGdldEdldERldmljZVR5cGUocmVzdWx0LCBtb2RlbCk7XHJcblxyXG4gIC8vIGRldmljZU1vZGVsXHJcbiAgY29uc3QgZGV2aWNlQnJhbmQgPSBnZXREZXZpY2VCcmFuZChicmFuZCk7XHJcblxyXG4gIC8vIGhvc3ROYW1lXHJcbiAgY29uc3QgX2hvc3ROYW1lID0gZ2V0SG9zdE5hbWUocmVzdWx0KTtcclxuXHJcbiAgLy8gZGV2aWNlT3JpZW50YXRpb25cclxuICBsZXQgX2RldmljZU9yaWVudGF0aW9uID0gZGV2aWNlT3JpZW50YXRpb247IC8vIOS7hSDlvq7kv6Eg55m+5bqmIOaUr+aMgVxyXG5cclxuICAvLyBkZXZpY2VQaXhlbFJhdGlvXHJcbiAgbGV0IF9kZXZpY2VQaXhlbFJhdGlvID0gcGl4ZWxSYXRpbztcclxuXHJcbiAgLy8gU0RLVmVyc2lvblxyXG4gIGxldCBfU0RLVmVyc2lvbiA9IFNES1ZlcnNpb247XHJcblxyXG4gIC8vIGhvc3RMYW5ndWFnZVxyXG4gIGNvbnN0IGhvc3RMYW5ndWFnZSA9IGxhbmd1YWdlLnJlcGxhY2UoL18vZywgJy0nKTtcclxuXHJcbiAgLy8gd3guZ2V0QWNjb3VudEluZm9TeW5jXHJcblxyXG4gIGNvbnN0IHBhcmFtZXRlcnMgPSB7XHJcbiAgICBhcHBJZDogcHJvY2Vzcy5lbnYuVU5JX0FQUF9JRCxcclxuICAgIGFwcE5hbWU6IHByb2Nlc3MuZW52LlVOSV9BUFBfTkFNRSxcclxuICAgIGFwcFZlcnNpb246IHByb2Nlc3MuZW52LlVOSV9BUFBfVkVSU0lPTl9OQU1FLFxyXG4gICAgYXBwVmVyc2lvbkNvZGU6IHByb2Nlc3MuZW52LlVOSV9BUFBfVkVSU0lPTl9DT0RFLFxyXG4gICAgYXBwTGFuZ3VhZ2U6IGdldEFwcExhbmd1YWdlKGhvc3RMYW5ndWFnZSksXHJcbiAgICB1bmlDb21waWxlVmVyc2lvbjogcHJvY2Vzcy5lbnYuVU5JX0NPTVBJTEVSX1ZFUlNJT04sXHJcbiAgICB1bmlSdW50aW1lVmVyc2lvbjogcHJvY2Vzcy5lbnYuVU5JX0NPTVBJTEVSX1ZFUlNJT04sXHJcbiAgICB1bmlQbGF0Zm9ybTogcHJvY2Vzcy5lbnYuVU5JX1NVQl9QTEFURk9STSB8fCBwcm9jZXNzLmVudi5VTklfUExBVEZPUk0sXHJcbiAgICBkZXZpY2VCcmFuZCxcclxuICAgIGRldmljZU1vZGVsOiBtb2RlbCxcclxuICAgIGRldmljZVR5cGUsXHJcbiAgICBkZXZpY2VQaXhlbFJhdGlvOiBfZGV2aWNlUGl4ZWxSYXRpbyxcclxuICAgIGRldmljZU9yaWVudGF0aW9uOiBfZGV2aWNlT3JpZW50YXRpb24sXHJcbiAgICBvc05hbWU6IG9zTmFtZS50b0xvY2FsZUxvd2VyQ2FzZSgpLFxyXG4gICAgb3NWZXJzaW9uLFxyXG4gICAgaG9zdFRoZW1lOiB0aGVtZSxcclxuICAgIGhvc3RWZXJzaW9uLFxyXG4gICAgaG9zdExhbmd1YWdlLFxyXG4gICAgaG9zdE5hbWU6IF9ob3N0TmFtZSxcclxuICAgIGhvc3RTREtWZXJzaW9uOiBfU0RLVmVyc2lvbixcclxuICAgIGhvc3RGb250U2l6ZVNldHRpbmc6IGZvbnRTaXplU2V0dGluZyxcclxuICAgIHdpbmRvd1RvcDogMCxcclxuICAgIHdpbmRvd0JvdHRvbTogMCxcclxuICAgIC8vIFRPRE9cclxuICAgIG9zTGFuZ3VhZ2U6IHVuZGVmaW5lZCxcclxuICAgIG9zVGhlbWU6IHVuZGVmaW5lZCxcclxuICAgIHVhOiB1bmRlZmluZWQsXHJcbiAgICBob3N0UGFja2FnZU5hbWU6IHVuZGVmaW5lZCxcclxuICAgIGJyb3dzZXJOYW1lOiB1bmRlZmluZWQsXHJcbiAgICBicm93c2VyVmVyc2lvbjogdW5kZWZpbmVkXHJcbiAgfTtcclxuXHJcbiAgT2JqZWN0LmFzc2lnbihyZXN1bHQsIHBhcmFtZXRlcnMpO1xyXG59XHJcblxyXG5mdW5jdGlvbiBnZXRHZXREZXZpY2VUeXBlIChyZXN1bHQsIG1vZGVsKSB7XHJcbiAgbGV0IGRldmljZVR5cGUgPSByZXN1bHQuZGV2aWNlVHlwZSB8fCAncGhvbmUnO1xyXG4gIHtcclxuICAgIGNvbnN0IGRldmljZVR5cGVNYXBzID0ge1xyXG4gICAgICBpcGFkOiAncGFkJyxcclxuICAgICAgd2luZG93czogJ3BjJyxcclxuICAgICAgbWFjOiAncGMnXHJcbiAgICB9O1xyXG4gICAgY29uc3QgZGV2aWNlVHlwZU1hcHNLZXlzID0gT2JqZWN0LmtleXMoZGV2aWNlVHlwZU1hcHMpO1xyXG4gICAgY29uc3QgX21vZGVsID0gbW9kZWwudG9Mb2NhbGVMb3dlckNhc2UoKTtcclxuICAgIGZvciAobGV0IGluZGV4ID0gMDsgaW5kZXggPCBkZXZpY2VUeXBlTWFwc0tleXMubGVuZ3RoOyBpbmRleCsrKSB7XHJcbiAgICAgIGNvbnN0IF9tID0gZGV2aWNlVHlwZU1hcHNLZXlzW2luZGV4XTtcclxuICAgICAgaWYgKF9tb2RlbC5pbmRleE9mKF9tKSAhPT0gLTEpIHtcclxuICAgICAgICBkZXZpY2VUeXBlID0gZGV2aWNlVHlwZU1hcHNbX21dO1xyXG4gICAgICAgIGJyZWFrXHJcbiAgICAgIH1cclxuICAgIH1cclxuICB9XHJcbiAgcmV0dXJuIGRldmljZVR5cGVcclxufVxyXG5cclxuZnVuY3Rpb24gZ2V0RGV2aWNlQnJhbmQgKGJyYW5kKSB7XHJcbiAgbGV0IGRldmljZUJyYW5kID0gYnJhbmQ7XHJcbiAgaWYgKGRldmljZUJyYW5kKSB7XHJcbiAgICBkZXZpY2VCcmFuZCA9IGJyYW5kLnRvTG9jYWxlTG93ZXJDYXNlKCk7XHJcbiAgfVxyXG4gIHJldHVybiBkZXZpY2VCcmFuZFxyXG59XHJcblxyXG5mdW5jdGlvbiBnZXRBcHBMYW5ndWFnZSAoZGVmYXVsdExhbmd1YWdlKSB7XHJcbiAgcmV0dXJuIGdldExvY2FsZSQxXHJcbiAgICA/IGdldExvY2FsZSQxKClcclxuICAgIDogZGVmYXVsdExhbmd1YWdlXHJcbn1cclxuXHJcbmZ1bmN0aW9uIGdldEhvc3ROYW1lIChyZXN1bHQpIHtcclxuICBjb25zdCBfcGxhdGZvcm0gPSAgXCJtcC10b3V0aWFvXCIuc3BsaXQoJy0nKVsxXTtcclxuICBsZXQgX2hvc3ROYW1lID0gcmVzdWx0Lmhvc3ROYW1lIHx8IF9wbGF0Zm9ybTsgLy8gbXAtamRcclxuICB7IF9ob3N0TmFtZSA9IHJlc3VsdC5hcHBOYW1lOyB9XHJcblxyXG4gIHJldHVybiBfaG9zdE5hbWVcclxufVxyXG5cclxudmFyIGdldFN5c3RlbUluZm8gPSB7XHJcbiAgcmV0dXJuVmFsdWU6IGZ1bmN0aW9uIChyZXN1bHQpIHtcclxuICAgIHVzZURldmljZUlkKHJlc3VsdCk7XHJcbiAgICBhZGRTYWZlQXJlYUluc2V0cyhyZXN1bHQpO1xyXG4gICAgcG9wdWxhdGVQYXJhbWV0ZXJzKHJlc3VsdCk7XHJcbiAgfVxyXG59O1xyXG5cclxuY29uc3Qgb05hbWUgPSAnZ2V0VXNlckluZm8nO1xyXG5jb25zdCBuTmFtZSA9ICdnZXRVc2VyUHJvZmlsZSc7XHJcblxyXG52YXIgZ2V0VXNlclByb2ZpbGUgPSB7XHJcbiAgbmFtZTogdHQuY2FuSVVzZShuTmFtZSkgPyBuTmFtZSA6IG9OYW1lXHJcbn07XHJcblxyXG4vLyDkuI3mlK/mjIHnmoQgQVBJIOWIl+ihqFxyXG5jb25zdCB0b2RvcyA9IFtcclxuICAncHJlbG9hZFBhZ2UnLFxyXG4gICd1blByZWxvYWRQYWdlJyxcclxuICAnbG9hZFN1YlBhY2thZ2UnXHJcbiAgLy8gJ2NyZWF0ZUNhbWVyYUNvbnRleHQnLFxyXG4gIC8vICdjcmVhdGVMaXZlUGxheWVyQ29udGV4dCcsXHJcbiAgLy8gJ2dldFNhdmVkRmlsZUluZm8nLFxyXG4gIC8vICdjcmVhdGVNYXBDb250ZXh0JyxcclxuICAvLyAnb25NZW1vcnlXYXJuaW5nJyxcclxuICAvLyAnb25HeXJvc2NvcGVDaGFuZ2UnLFxyXG4gIC8vICdzdGFydEd5cm9zY29wZScsXHJcbiAgLy8gJ3N0b3BHeXJvc2NvcGUnLFxyXG4gIC8vICdzZXRTY3JlZW5CcmlnaHRuZXNzJyxcclxuICAvLyAnZ2V0U2NyZWVuQnJpZ2h0bmVzcycsXHJcbiAgLy8gJ2FkZFBob25lQ29udGFjdCcsXHJcbiAgLy8gJ29wZW5CbHVldG9vdGhBZGFwdGVyJyxcclxuICAvLyAnc3RhcnRCbHVldG9vdGhEZXZpY2VzRGlzY292ZXJ5JyxcclxuICAvLyAnb25CbHVldG9vdGhEZXZpY2VGb3VuZCcsXHJcbiAgLy8gJ3N0b3BCbHVldG9vdGhEZXZpY2VzRGlzY292ZXJ5JyxcclxuICAvLyAnb25CbHVldG9vdGhBZGFwdGVyU3RhdGVDaGFuZ2UnLFxyXG4gIC8vICdnZXRDb25uZWN0ZWRCbHVldG9vdGhEZXZpY2VzJyxcclxuICAvLyAnZ2V0Qmx1ZXRvb3RoRGV2aWNlcycsXHJcbiAgLy8gJ2dldEJsdWV0b290aEFkYXB0ZXJTdGF0ZScsXHJcbiAgLy8gJ2Nsb3NlQmx1ZXRvb3RoQWRhcHRlcicsXHJcbiAgLy8gJ3dyaXRlQkxFQ2hhcmFjdGVyaXN0aWNWYWx1ZScsXHJcbiAgLy8gJ3JlYWRCTEVDaGFyYWN0ZXJpc3RpY1ZhbHVlJyxcclxuICAvLyAnb25CTEVDb25uZWN0aW9uU3RhdGVDaGFuZ2UnLFxyXG4gIC8vICdvbkJMRUNoYXJhY3RlcmlzdGljVmFsdWVDaGFuZ2UnLFxyXG4gIC8vICdub3RpZnlCTEVDaGFyYWN0ZXJpc3RpY1ZhbHVlQ2hhbmdlJyxcclxuICAvLyAnZ2V0QkxFRGV2aWNlU2VydmljZXMnLFxyXG4gIC8vICdnZXRCTEVEZXZpY2VDaGFyYWN0ZXJpc3RpY3MnLFxyXG4gIC8vICdjcmVhdGVCTEVDb25uZWN0aW9uJyxcclxuICAvLyAnY2xvc2VCTEVDb25uZWN0aW9uJyxcclxuICAvLyAnb25CZWFjb25TZXJ2aWNlQ2hhbmdlJyxcclxuICAvLyAnb25CZWFjb25VcGRhdGUnLFxyXG4gIC8vICdnZXRCZWFjb25zJyxcclxuICAvLyAnc3RhcnRCZWFjb25EaXNjb3ZlcnknLFxyXG4gIC8vICdzdG9wQmVhY29uRGlzY292ZXJ5JyxcclxuICAvLyAnc2hvd05hdmlnYXRpb25CYXJMb2FkaW5nJyxcclxuICAvLyAnaGlkZU5hdmlnYXRpb25CYXJMb2FkaW5nJyxcclxuICAvLyAnc2V0VGFiQmFySXRlbScsXHJcbiAgLy8gJ3NldFRhYkJhclN0eWxlJyxcclxuICAvLyAnaGlkZVRhYkJhcicsXHJcbiAgLy8gJ3Nob3dUYWJCYXInLFxyXG4gIC8vICdzZXRUYWJCYXJCYWRnZScsXHJcbiAgLy8gJ3JlbW92ZVRhYkJhckJhZGdlJyxcclxuICAvLyAnc2hvd1RhYkJhclJlZERvdCcsXHJcbiAgLy8gJ2hpZGVUYWJCYXJSZWREb3QnLFxyXG4gIC8vICdzZXRCYWNrZ3JvdW5kQ29sb3InLFxyXG4gIC8vICdzZXRCYWNrZ3JvdW5kVGV4dFN0eWxlJyxcclxuICAvLyAnY2hvb3NlSW52b2ljZVRpdGxlJyxcclxuICAvLyAnYWRkVGVtcGxhdGUnLFxyXG4gIC8vICdkZWxldGVUZW1wbGF0ZScsXHJcbiAgLy8gJ2dldFRlbXBsYXRlTGlicmFyeUJ5SWQnLFxyXG4gIC8vICdnZXRUZW1wbGF0ZUxpYnJhcnlMaXN0JyxcclxuICAvLyAnZ2V0VGVtcGxhdGVMaXN0JyxcclxuICAvLyAnc2VuZFRlbXBsYXRlTWVzc2FnZScsXHJcbiAgLy8gJ3NldEVuYWJsZURlYnVnJyxcclxuICAvLyAnb25XaW5kb3dSZXNpemUnLFxyXG4gIC8vICdvZmZXaW5kb3dSZXNpemUnLFxyXG4gIC8vICdjcmVhdGVPZmZzY3JlZW5DYW52YXMnLFxyXG4gIC8vICd2aWJyYXRlJ1xyXG5dO1xyXG5cclxuLy8g5a2Y5Zyo5YW85a655oCn55qEIEFQSSDliJfooahcclxuLy8g5aS05p2h5bCP56iL5bqP6IeqMS4zNS4wK+aUr+aMgWNhbklVc2VzXHJcbmNvbnN0IGNhbklVc2VzID0gW1xyXG4gIC8vICdjcmVhdGVJbnRlcnNlY3Rpb25PYnNlcnZlcicsXHJcbiAgLy8gJ2dldFNhdmVkRmlsZUxpc3QnLFxyXG4gIC8vICdyZW1vdmVTYXZlZEZpbGUnLFxyXG4gIC8vICdoaWRlS2V5Ym9hcmQnLFxyXG4gIC8vICdnZXRJbWFnZUluZm8nLFxyXG4gIC8vICdjcmVhdGVWaWRlb0NvbnRleHQnLFxyXG4gIC8vICdvblNvY2tldE9wZW4nLFxyXG4gIC8vICdvblNvY2tldEVycm9yJyxcclxuICAvLyAnc2VuZFNvY2tldE1lc3NhZ2UnLFxyXG4gIC8vICdvblNvY2tldE1lc3NhZ2UnLFxyXG4gIC8vICdjbG9zZVNvY2tldCcsXHJcbiAgLy8gJ29uU29ja2V0Q2xvc2UnLFxyXG4gIC8vICdnZXRFeHRDb25maWcnLFxyXG4gIC8vICdnZXRFeHRDb25maWdTeW5jJyxcclxuICAvLyAnbmF2aWdhdGVUb01pbmlQcm9ncmFtJyxcclxuICAvLyAnbmF2aWdhdGVCYWNrTWluaVByb2dyYW0nLFxyXG4gIC8vICdjb21wcmVzc0ltYWdlJyxcclxuICAvLyAnY2hvb3NlTG9jYXRpb24nLFxyXG4gIC8vICdvcGVuRG9jdW1lbnQnLFxyXG4gIC8vICdvblVzZXJDYXB0dXJlU2NyZWVuJyxcclxuICAvLyAnZ2V0QmFja2dyb3VuZEF1ZGlvTWFuYWdlcicsXHJcbiAgLy8gJ3NldE5hdmlnYXRpb25CYXJDb2xvcicsXHJcbl07XHJcblxyXG4vLyDpnIDopoHlgZrovazmjaLnmoQgQVBJIOWIl+ihqFxyXG5jb25zdCBwcm90b2NvbHMgPSB7XHJcbiAgY2hvb3NlSW1hZ2U6IHtcclxuICAgIGFyZ3M6IHtcclxuICAgICAgc2l6ZVR5cGU6IGZhbHNlXHJcbiAgICB9XHJcbiAgfSxcclxuICBuYXZpZ2F0ZVRvLFxyXG4gIHJlZGlyZWN0VG8sXHJcbiAgcHJldmlld0ltYWdlLFxyXG4gIGdldFN5c3RlbUluZm8sXHJcbiAgZ2V0U3lzdGVtSW5mb1N5bmM6IGdldFN5c3RlbUluZm8sXHJcbiAgZ2V0VXNlclByb2ZpbGUsXHJcbiAgY29ubmVjdFNvY2tldDoge1xyXG4gICAgYXJnczoge1xyXG4gICAgICBtZXRob2Q6IGZhbHNlXHJcbiAgICB9XHJcbiAgfSxcclxuICBjaG9vc2VWaWRlbzoge1xyXG4gICAgYXJnczoge1xyXG4gICAgICBjYW1lcmE6IGZhbHNlXHJcbiAgICB9XHJcbiAgfSxcclxuICBzY2FuQ29kZToge1xyXG4gICAgYXJnczoge1xyXG4gICAgICBvbmx5RnJvbUNhbWVyYTogZmFsc2UsXHJcbiAgICAgIHNjYW5UeXBlOiBmYWxzZVxyXG4gICAgfVxyXG4gIH0sXHJcbiAgc3RhcnRBY2NlbGVyb21ldGVyOiB7XHJcbiAgICBhcmdzOiB7XHJcbiAgICAgIGludGVydmFsOiBmYWxzZVxyXG4gICAgfVxyXG4gIH0sXHJcbiAgc2hvd1RvYXN0OiB7XHJcbiAgICBhcmdzOiB7XHJcbiAgICAgIGltYWdlOiBmYWxzZSxcclxuICAgICAgbWFzazogZmFsc2VcclxuICAgIH1cclxuICB9LFxyXG4gIHNob3dMb2FkaW5nOiB7XHJcbiAgICBhcmdzOiB7XHJcbiAgICAgIG1hc2s6IGZhbHNlXHJcbiAgICB9XHJcbiAgfSxcclxuICBzaG93TW9kYWw6IHtcclxuICAgIGFyZ3M6IHtcclxuICAgICAgY2FuY2VsQ29sb3I6IGZhbHNlLFxyXG4gICAgICBjb25maXJtQ29sb3I6IGZhbHNlXHJcbiAgICB9XHJcbiAgfSxcclxuICBzaG93QWN0aW9uU2hlZXQ6IHtcclxuICAgIGFyZ3M6IHtcclxuICAgICAgaXRlbUNvbG9yOiBmYWxzZVxyXG4gICAgfVxyXG4gIH0sXHJcbiAgbG9naW46IHtcclxuICAgIGFyZ3M6IHtcclxuICAgICAgc2NvcGVzOiBmYWxzZSxcclxuICAgICAgdGltZW91dDogZmFsc2VcclxuICAgIH1cclxuICB9LFxyXG4gIGdldFVzZXJJbmZvOiB7XHJcbiAgICBhcmdzOiB7XHJcbiAgICAgIGxhbmc6IGZhbHNlLFxyXG4gICAgICB0aW1lb3V0OiBmYWxzZVxyXG4gICAgfVxyXG4gIH0sXHJcbiAgcmVxdWVzdFBheW1lbnQ6IHtcclxuICAgIG5hbWU6IHR0LnBheSA/ICdwYXknIDogJ3JlcXVlc3RQYXltZW50JyxcclxuICAgIGFyZ3M6IHtcclxuICAgICAgb3JkZXJJbmZvOiB0dC5wYXkgPyAnb3JkZXJJbmZvJyA6ICdkYXRhJ1xyXG4gICAgfVxyXG4gIH0sXHJcbiAgZ2V0RmlsZUluZm86IHtcclxuICAgIGFyZ3M6IHtcclxuICAgICAgZGlnZXN0QWxnb3JpdGhtOiBmYWxzZVxyXG4gICAgfVxyXG4gIH1cclxufTtcclxuXHJcbmNvbnN0IENBTExCQUNLUyA9IFsnc3VjY2VzcycsICdmYWlsJywgJ2NhbmNlbCcsICdjb21wbGV0ZSddO1xyXG5cclxuZnVuY3Rpb24gcHJvY2Vzc0NhbGxiYWNrIChtZXRob2ROYW1lLCBtZXRob2QsIHJldHVyblZhbHVlKSB7XHJcbiAgcmV0dXJuIGZ1bmN0aW9uIChyZXMpIHtcclxuICAgIHJldHVybiBtZXRob2QocHJvY2Vzc1JldHVyblZhbHVlKG1ldGhvZE5hbWUsIHJlcywgcmV0dXJuVmFsdWUpKVxyXG4gIH1cclxufVxyXG5cclxuZnVuY3Rpb24gcHJvY2Vzc0FyZ3MgKG1ldGhvZE5hbWUsIGZyb21BcmdzLCBhcmdzT3B0aW9uID0ge30sIHJldHVyblZhbHVlID0ge30sIGtlZXBGcm9tQXJncyA9IGZhbHNlKSB7XHJcbiAgaWYgKGlzUGxhaW5PYmplY3QoZnJvbUFyZ3MpKSB7IC8vIOS4gOiIrCBhcGkg55qE5Y+C5pWw6Kej5p6QXHJcbiAgICBjb25zdCB0b0FyZ3MgPSBrZWVwRnJvbUFyZ3MgPT09IHRydWUgPyBmcm9tQXJncyA6IHt9OyAvLyByZXR1cm5WYWx1ZSDkuLogZmFsc2Ug5pe277yM6K+05piO5piv5qC85byP5YyW6L+U5Zue5YC877yM55u05o6l5Zyo6L+U5Zue5YC85a+56LGh5LiK5L+u5pS56LWL5YC8XHJcbiAgICBpZiAoaXNGbihhcmdzT3B0aW9uKSkge1xyXG4gICAgICBhcmdzT3B0aW9uID0gYXJnc09wdGlvbihmcm9tQXJncywgdG9BcmdzKSB8fCB7fTtcclxuICAgIH1cclxuICAgIGZvciAoY29uc3Qga2V5IGluIGZyb21BcmdzKSB7XHJcbiAgICAgIGlmIChoYXNPd24oYXJnc09wdGlvbiwga2V5KSkge1xyXG4gICAgICAgIGxldCBrZXlPcHRpb24gPSBhcmdzT3B0aW9uW2tleV07XHJcbiAgICAgICAgaWYgKGlzRm4oa2V5T3B0aW9uKSkge1xyXG4gICAgICAgICAga2V5T3B0aW9uID0ga2V5T3B0aW9uKGZyb21BcmdzW2tleV0sIGZyb21BcmdzLCB0b0FyZ3MpO1xyXG4gICAgICAgIH1cclxuICAgICAgICBpZiAoIWtleU9wdGlvbikgeyAvLyDkuI3mlK/mjIHnmoTlj4LmlbBcclxuICAgICAgICAgIGNvbnNvbGUud2FybihgVGhlICcke21ldGhvZE5hbWV9JyBtZXRob2Qgb2YgcGxhdGZvcm0gJ+WktOadoeWwj+eoi+W6jycgZG9lcyBub3Qgc3VwcG9ydCBvcHRpb24gJyR7a2V5fSdgKTtcclxuICAgICAgICB9IGVsc2UgaWYgKGlzU3RyKGtleU9wdGlvbikpIHsgLy8g6YeN5YaZ5Y+C5pWwIGtleVxyXG4gICAgICAgICAgdG9BcmdzW2tleU9wdGlvbl0gPSBmcm9tQXJnc1trZXldO1xyXG4gICAgICAgIH0gZWxzZSBpZiAoaXNQbGFpbk9iamVjdChrZXlPcHRpb24pKSB7IC8vIHtuYW1lOm5ld05hbWUsdmFsdWU6dmFsdWV95Y+v6YeN5paw5oyH5a6a5Y+C5pWwIGtleTp2YWx1ZVxyXG4gICAgICAgICAgdG9BcmdzW2tleU9wdGlvbi5uYW1lID8ga2V5T3B0aW9uLm5hbWUgOiBrZXldID0ga2V5T3B0aW9uLnZhbHVlO1xyXG4gICAgICAgIH1cclxuICAgICAgfSBlbHNlIGlmIChDQUxMQkFDS1MuaW5kZXhPZihrZXkpICE9PSAtMSkge1xyXG4gICAgICAgIGlmIChpc0ZuKGZyb21BcmdzW2tleV0pKSB7XHJcbiAgICAgICAgICB0b0FyZ3Nba2V5XSA9IHByb2Nlc3NDYWxsYmFjayhtZXRob2ROYW1lLCBmcm9tQXJnc1trZXldLCByZXR1cm5WYWx1ZSk7XHJcbiAgICAgICAgfVxyXG4gICAgICB9IGVsc2Uge1xyXG4gICAgICAgIGlmICgha2VlcEZyb21BcmdzKSB7XHJcbiAgICAgICAgICB0b0FyZ3Nba2V5XSA9IGZyb21BcmdzW2tleV07XHJcbiAgICAgICAgfVxyXG4gICAgICB9XHJcbiAgICB9XHJcbiAgICByZXR1cm4gdG9BcmdzXHJcbiAgfSBlbHNlIGlmIChpc0ZuKGZyb21BcmdzKSkge1xyXG4gICAgZnJvbUFyZ3MgPSBwcm9jZXNzQ2FsbGJhY2sobWV0aG9kTmFtZSwgZnJvbUFyZ3MsIHJldHVyblZhbHVlKTtcclxuICB9XHJcbiAgcmV0dXJuIGZyb21BcmdzXHJcbn1cclxuXHJcbmZ1bmN0aW9uIHByb2Nlc3NSZXR1cm5WYWx1ZSAobWV0aG9kTmFtZSwgcmVzLCByZXR1cm5WYWx1ZSwga2VlcFJldHVyblZhbHVlID0gZmFsc2UpIHtcclxuICBpZiAoaXNGbihwcm90b2NvbHMucmV0dXJuVmFsdWUpKSB7IC8vIOWkhOeQhumAmueUqCByZXR1cm5WYWx1ZVxyXG4gICAgcmVzID0gcHJvdG9jb2xzLnJldHVyblZhbHVlKG1ldGhvZE5hbWUsIHJlcyk7XHJcbiAgfVxyXG4gIHJldHVybiBwcm9jZXNzQXJncyhtZXRob2ROYW1lLCByZXMsIHJldHVyblZhbHVlLCB7fSwga2VlcFJldHVyblZhbHVlKVxyXG59XHJcblxyXG5mdW5jdGlvbiB3cmFwcGVyIChtZXRob2ROYW1lLCBtZXRob2QpIHtcclxuICBpZiAoaGFzT3duKHByb3RvY29scywgbWV0aG9kTmFtZSkpIHtcclxuICAgIGNvbnN0IHByb3RvY29sID0gcHJvdG9jb2xzW21ldGhvZE5hbWVdO1xyXG4gICAgaWYgKCFwcm90b2NvbCkgeyAvLyDmmoLkuI3mlK/mjIHnmoQgYXBpXHJcbiAgICAgIHJldHVybiBmdW5jdGlvbiAoKSB7XHJcbiAgICAgICAgY29uc29sZS5lcnJvcihgUGxhdGZvcm0gJ+WktOadoeWwj+eoi+W6jycgZG9lcyBub3Qgc3VwcG9ydCAnJHttZXRob2ROYW1lfScuYCk7XHJcbiAgICAgIH1cclxuICAgIH1cclxuICAgIHJldHVybiBmdW5jdGlvbiAoYXJnMSwgYXJnMikgeyAvLyDnm67liY0gYXBpIOacgOWkmuS4pOS4quWPguaVsFxyXG4gICAgICBsZXQgb3B0aW9ucyA9IHByb3RvY29sO1xyXG4gICAgICBpZiAoaXNGbihwcm90b2NvbCkpIHtcclxuICAgICAgICBvcHRpb25zID0gcHJvdG9jb2woYXJnMSk7XHJcbiAgICAgIH1cclxuXHJcbiAgICAgIGFyZzEgPSBwcm9jZXNzQXJncyhtZXRob2ROYW1lLCBhcmcxLCBvcHRpb25zLmFyZ3MsIG9wdGlvbnMucmV0dXJuVmFsdWUpO1xyXG5cclxuICAgICAgY29uc3QgYXJncyA9IFthcmcxXTtcclxuICAgICAgaWYgKHR5cGVvZiBhcmcyICE9PSAndW5kZWZpbmVkJykge1xyXG4gICAgICAgIGFyZ3MucHVzaChhcmcyKTtcclxuICAgICAgfVxyXG4gICAgICBpZiAoaXNGbihvcHRpb25zLm5hbWUpKSB7XHJcbiAgICAgICAgbWV0aG9kTmFtZSA9IG9wdGlvbnMubmFtZShhcmcxKTtcclxuICAgICAgfSBlbHNlIGlmIChpc1N0cihvcHRpb25zLm5hbWUpKSB7XHJcbiAgICAgICAgbWV0aG9kTmFtZSA9IG9wdGlvbnMubmFtZTtcclxuICAgICAgfVxyXG4gICAgICBjb25zdCByZXR1cm5WYWx1ZSA9IHR0W21ldGhvZE5hbWVdLmFwcGx5KHR0LCBhcmdzKTtcclxuICAgICAgaWYgKGlzU3luY0FwaShtZXRob2ROYW1lKSkgeyAvLyDlkIzmraUgYXBpXHJcbiAgICAgICAgcmV0dXJuIHByb2Nlc3NSZXR1cm5WYWx1ZShtZXRob2ROYW1lLCByZXR1cm5WYWx1ZSwgb3B0aW9ucy5yZXR1cm5WYWx1ZSwgaXNDb250ZXh0QXBpKG1ldGhvZE5hbWUpKVxyXG4gICAgICB9XHJcbiAgICAgIHJldHVybiByZXR1cm5WYWx1ZVxyXG4gICAgfVxyXG4gIH1cclxuICByZXR1cm4gbWV0aG9kXHJcbn1cclxuXHJcbmNvbnN0IHRvZG9BcGlzID0gT2JqZWN0LmNyZWF0ZShudWxsKTtcclxuXHJcbmNvbnN0IFRPRE9TID0gW1xyXG4gICdvblRhYkJhck1pZEJ1dHRvblRhcCcsXHJcbiAgJ3N1YnNjcmliZVB1c2gnLFxyXG4gICd1bnN1YnNjcmliZVB1c2gnLFxyXG4gICdvblB1c2gnLFxyXG4gICdvZmZQdXNoJyxcclxuICAnc2hhcmUnXHJcbl07XHJcblxyXG5mdW5jdGlvbiBjcmVhdGVUb2RvQXBpIChuYW1lKSB7XHJcbiAgcmV0dXJuIGZ1bmN0aW9uIHRvZG9BcGkgKHtcclxuICAgIGZhaWwsXHJcbiAgICBjb21wbGV0ZVxyXG4gIH0pIHtcclxuICAgIGNvbnN0IHJlcyA9IHtcclxuICAgICAgZXJyTXNnOiBgJHtuYW1lfTpmYWlsIG1ldGhvZCAnJHtuYW1lfScgbm90IHN1cHBvcnRlZGBcclxuICAgIH07XHJcbiAgICBpc0ZuKGZhaWwpICYmIGZhaWwocmVzKTtcclxuICAgIGlzRm4oY29tcGxldGUpICYmIGNvbXBsZXRlKHJlcyk7XHJcbiAgfVxyXG59XHJcblxyXG5UT0RPUy5mb3JFYWNoKGZ1bmN0aW9uIChuYW1lKSB7XHJcbiAgdG9kb0FwaXNbbmFtZV0gPSBjcmVhdGVUb2RvQXBpKG5hbWUpO1xyXG59KTtcclxuXHJcbnZhciBwcm92aWRlcnMgPSB7XHJcbiAgb2F1dGg6IFsndG91dGlhbyddLFxyXG4gIHNoYXJlOiBbJ3RvdXRpYW8nXSxcclxuICBwYXltZW50OiBbJ3RvdXRpYW8nXSxcclxuICBwdXNoOiBbJ3RvdXRpYW8nXVxyXG59O1xyXG5cclxuZnVuY3Rpb24gZ2V0UHJvdmlkZXIgKHtcclxuICBzZXJ2aWNlLFxyXG4gIHN1Y2Nlc3MsXHJcbiAgZmFpbCxcclxuICBjb21wbGV0ZVxyXG59KSB7XHJcbiAgbGV0IHJlcyA9IGZhbHNlO1xyXG4gIGlmIChwcm92aWRlcnNbc2VydmljZV0pIHtcclxuICAgIHJlcyA9IHtcclxuICAgICAgZXJyTXNnOiAnZ2V0UHJvdmlkZXI6b2snLFxyXG4gICAgICBzZXJ2aWNlLFxyXG4gICAgICBwcm92aWRlcjogcHJvdmlkZXJzW3NlcnZpY2VdXHJcbiAgICB9O1xyXG4gICAgaXNGbihzdWNjZXNzKSAmJiBzdWNjZXNzKHJlcyk7XHJcbiAgfSBlbHNlIHtcclxuICAgIHJlcyA9IHtcclxuICAgICAgZXJyTXNnOiAnZ2V0UHJvdmlkZXI6ZmFpbCBzZXJ2aWNlIG5vdCBmb3VuZCdcclxuICAgIH07XHJcbiAgICBpc0ZuKGZhaWwpICYmIGZhaWwocmVzKTtcclxuICB9XHJcbiAgaXNGbihjb21wbGV0ZSkgJiYgY29tcGxldGUocmVzKTtcclxufVxyXG5cclxudmFyIGV4dHJhQXBpID0gLyojX19QVVJFX18qL09iamVjdC5mcmVlemUoe1xyXG4gIF9fcHJvdG9fXzogbnVsbCxcclxuICBnZXRQcm92aWRlcjogZ2V0UHJvdmlkZXJcclxufSk7XHJcblxyXG5jb25zdCBnZXRFbWl0dGVyID0gKGZ1bmN0aW9uICgpIHtcclxuICBsZXQgRW1pdHRlcjtcclxuICByZXR1cm4gZnVuY3Rpb24gZ2V0VW5pRW1pdHRlciAoKSB7XHJcbiAgICBpZiAoIUVtaXR0ZXIpIHtcclxuICAgICAgRW1pdHRlciA9IG5ldyBWdWUoKTtcclxuICAgIH1cclxuICAgIHJldHVybiBFbWl0dGVyXHJcbiAgfVxyXG59KSgpO1xyXG5cclxuZnVuY3Rpb24gYXBwbHkgKGN0eCwgbWV0aG9kLCBhcmdzKSB7XHJcbiAgcmV0dXJuIGN0eFttZXRob2RdLmFwcGx5KGN0eCwgYXJncylcclxufVxyXG5cclxuZnVuY3Rpb24gJG9uICgpIHtcclxuICByZXR1cm4gYXBwbHkoZ2V0RW1pdHRlcigpLCAnJG9uJywgWy4uLmFyZ3VtZW50c10pXHJcbn1cclxuZnVuY3Rpb24gJG9mZiAoKSB7XHJcbiAgcmV0dXJuIGFwcGx5KGdldEVtaXR0ZXIoKSwgJyRvZmYnLCBbLi4uYXJndW1lbnRzXSlcclxufVxyXG5mdW5jdGlvbiAkb25jZSAoKSB7XHJcbiAgcmV0dXJuIGFwcGx5KGdldEVtaXR0ZXIoKSwgJyRvbmNlJywgWy4uLmFyZ3VtZW50c10pXHJcbn1cclxuZnVuY3Rpb24gJGVtaXQgKCkge1xyXG4gIHJldHVybiBhcHBseShnZXRFbWl0dGVyKCksICckZW1pdCcsIFsuLi5hcmd1bWVudHNdKVxyXG59XHJcblxyXG52YXIgZXZlbnRBcGkgPSAvKiNfX1BVUkVfXyovT2JqZWN0LmZyZWV6ZSh7XHJcbiAgX19wcm90b19fOiBudWxsLFxyXG4gICRvbjogJG9uLFxyXG4gICRvZmY6ICRvZmYsXHJcbiAgJG9uY2U6ICRvbmNlLFxyXG4gICRlbWl0OiAkZW1pdFxyXG59KTtcclxuXHJcbmZ1bmN0aW9uIGNyZWF0ZU1lZGlhUXVlcnlPYnNlcnZlciAoKSB7XHJcbiAgY29uc3QgbWVkaWFRdWVyeU9ic2VydmVyID0ge307XHJcbiAgY29uc3Qge1xyXG4gICAgd2luZG93V2lkdGgsXHJcbiAgICB3aW5kb3dIZWlnaHRcclxuICB9ID0gdHQuZ2V0U3lzdGVtSW5mb1N5bmMoKTtcclxuXHJcbiAgY29uc3Qgb3JpZW50YXRpb24gPSB3aW5kb3dXaWR0aCA8IHdpbmRvd0hlaWdodCA/ICdwb3J0cmFpdCcgOiAnbGFuZHNjYXBlJztcclxuXHJcbiAgbWVkaWFRdWVyeU9ic2VydmVyLm9ic2VydmUgPSAob3B0aW9ucywgY2FsbGJhY2spID0+IHtcclxuICAgIGxldCBtYXRjaGVzID0gdHJ1ZTtcclxuICAgIGZvciAoY29uc3QgaXRlbSBpbiBvcHRpb25zKSB7XHJcbiAgICAgIGNvbnN0IGl0ZW1WYWx1ZSA9IGl0ZW0gPT09ICdvcmllbnRhdGlvbicgPyBvcHRpb25zW2l0ZW1dIDogTnVtYmVyKG9wdGlvbnNbaXRlbV0pO1xyXG4gICAgICBpZiAob3B0aW9uc1tpdGVtXSAhPT0gJycpIHtcclxuICAgICAgICBpZiAoaXRlbSA9PT0gJ3dpZHRoJykge1xyXG4gICAgICAgICAgaWYgKGl0ZW1WYWx1ZSA9PT0gd2luZG93V2lkdGgpIHtcclxuICAgICAgICAgICAgbWF0Y2hlcyA9IHRydWU7XHJcbiAgICAgICAgICB9IGVsc2Uge1xyXG4gICAgICAgICAgICBtYXRjaGVzID0gZmFsc2U7XHJcbiAgICAgICAgICAgIGNhbGxiYWNrKG1hdGNoZXMpO1xyXG4gICAgICAgICAgICByZXR1cm4gbWF0Y2hlc1xyXG4gICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuICAgICAgICBpZiAoaXRlbSA9PT0gJ21pbldpZHRoJykge1xyXG4gICAgICAgICAgaWYgKHdpbmRvd1dpZHRoID49IGl0ZW1WYWx1ZSkge1xyXG4gICAgICAgICAgICBtYXRjaGVzID0gdHJ1ZTtcclxuICAgICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgICAgIG1hdGNoZXMgPSBmYWxzZTtcclxuICAgICAgICAgICAgY2FsbGJhY2sobWF0Y2hlcyk7XHJcbiAgICAgICAgICAgIHJldHVybiBtYXRjaGVzXHJcbiAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG4gICAgICAgIGlmIChpdGVtID09PSAnbWF4V2lkdGgnKSB7XHJcbiAgICAgICAgICBpZiAod2luZG93V2lkdGggPD0gaXRlbVZhbHVlKSB7XHJcbiAgICAgICAgICAgIG1hdGNoZXMgPSB0cnVlO1xyXG4gICAgICAgICAgfSBlbHNlIHtcclxuICAgICAgICAgICAgbWF0Y2hlcyA9IGZhbHNlO1xyXG4gICAgICAgICAgICBjYWxsYmFjayhtYXRjaGVzKTtcclxuICAgICAgICAgICAgcmV0dXJuIG1hdGNoZXNcclxuICAgICAgICAgIH1cclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIGlmIChpdGVtID09PSAnaGVpZ2h0Jykge1xyXG4gICAgICAgICAgaWYgKGl0ZW1WYWx1ZSA9PT0gd2luZG93SGVpZ2h0KSB7XHJcbiAgICAgICAgICAgIG1hdGNoZXMgPSB0cnVlO1xyXG4gICAgICAgICAgfSBlbHNlIHtcclxuICAgICAgICAgICAgbWF0Y2hlcyA9IGZhbHNlO1xyXG4gICAgICAgICAgICBjYWxsYmFjayhtYXRjaGVzKTtcclxuICAgICAgICAgICAgcmV0dXJuIG1hdGNoZXNcclxuICAgICAgICAgIH1cclxuICAgICAgICB9XHJcbiAgICAgICAgaWYgKGl0ZW0gPT09ICdtaW5IZWlnaHQnKSB7XHJcbiAgICAgICAgICBpZiAod2luZG93SGVpZ2h0ID49IGl0ZW1WYWx1ZSkge1xyXG4gICAgICAgICAgICBtYXRjaGVzID0gdHJ1ZTtcclxuICAgICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgICAgIG1hdGNoZXMgPSBmYWxzZTtcclxuICAgICAgICAgICAgY2FsbGJhY2sobWF0Y2hlcyk7XHJcbiAgICAgICAgICAgIHJldHVybiBtYXRjaGVzXHJcbiAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG4gICAgICAgIGlmIChpdGVtID09PSAnbWF4SGVpZ2h0Jykge1xyXG4gICAgICAgICAgaWYgKHdpbmRvd0hlaWdodCA8PSBpdGVtVmFsdWUpIHtcclxuICAgICAgICAgICAgbWF0Y2hlcyA9IHRydWU7XHJcbiAgICAgICAgICB9IGVsc2Uge1xyXG4gICAgICAgICAgICBtYXRjaGVzID0gZmFsc2U7XHJcbiAgICAgICAgICAgIGNhbGxiYWNrKG1hdGNoZXMpO1xyXG4gICAgICAgICAgICByZXR1cm4gbWF0Y2hlc1xyXG4gICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgaWYgKGl0ZW0gPT09ICdvcmllbnRhdGlvbicpIHtcclxuICAgICAgICAgIGlmIChvcHRpb25zW2l0ZW1dID09PSBvcmllbnRhdGlvbikge1xyXG4gICAgICAgICAgICBtYXRjaGVzID0gdHJ1ZTtcclxuICAgICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgICAgIG1hdGNoZXMgPSBmYWxzZTtcclxuICAgICAgICAgICAgY2FsbGJhY2sobWF0Y2hlcyk7XHJcbiAgICAgICAgICAgIHJldHVybiBtYXRjaGVzXHJcbiAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG4gICAgICB9XHJcbiAgICB9XHJcbiAgICBjYWxsYmFjayhtYXRjaGVzKTtcclxuXHJcbiAgICByZXR1cm4gbWF0Y2hlc1xyXG4gIH07XHJcblxyXG4gIG1lZGlhUXVlcnlPYnNlcnZlci5kaXNjb25uZWN0ID0gKCkgPT4ge1xyXG4gIH07XHJcblxyXG4gIHJldHVybiBtZWRpYVF1ZXJ5T2JzZXJ2ZXJcclxufVxyXG5cclxuLyoqXHJcbiAqIOahhuaetuWGhSB0cnktY2F0Y2hcclxuICovXHJcbi8qKlxyXG4gKiDlvIDlj5HogIUgdHJ5LWNhdGNoXHJcbiAqL1xyXG5mdW5jdGlvbiB0cnlDYXRjaCAoZm4pIHtcclxuICByZXR1cm4gZnVuY3Rpb24gKCkge1xyXG4gICAgdHJ5IHtcclxuICAgICAgcmV0dXJuIGZuLmFwcGx5KGZuLCBhcmd1bWVudHMpXHJcbiAgICB9IGNhdGNoIChlKSB7XHJcbiAgICAgIC8vIFRPRE9cclxuICAgICAgY29uc29sZS5lcnJvcihlKTtcclxuICAgIH1cclxuICB9XHJcbn1cclxuXHJcbmZ1bmN0aW9uIGdldEFwaUNhbGxiYWNrcyAocGFyYW1zKSB7XHJcbiAgY29uc3QgYXBpQ2FsbGJhY2tzID0ge307XHJcbiAgZm9yIChjb25zdCBuYW1lIGluIHBhcmFtcykge1xyXG4gICAgY29uc3QgcGFyYW0gPSBwYXJhbXNbbmFtZV07XHJcbiAgICBpZiAoaXNGbihwYXJhbSkpIHtcclxuICAgICAgYXBpQ2FsbGJhY2tzW25hbWVdID0gdHJ5Q2F0Y2gocGFyYW0pO1xyXG4gICAgICBkZWxldGUgcGFyYW1zW25hbWVdO1xyXG4gICAgfVxyXG4gIH1cclxuICByZXR1cm4gYXBpQ2FsbGJhY2tzXHJcbn1cclxuXHJcbmxldCBjaWQ7XHJcbmxldCBjaWRFcnJNc2c7XHJcblxyXG5mdW5jdGlvbiBub3JtYWxpemVQdXNoTWVzc2FnZSAobWVzc2FnZSkge1xyXG4gIHRyeSB7XHJcbiAgICByZXR1cm4gSlNPTi5wYXJzZShtZXNzYWdlKVxyXG4gIH0gY2F0Y2ggKGUpIHt9XHJcbiAgcmV0dXJuIG1lc3NhZ2VcclxufVxyXG5cclxuZnVuY3Rpb24gaW52b2tlUHVzaENhbGxiYWNrIChcclxuICBhcmdzXHJcbikge1xyXG4gIGlmIChhcmdzLnR5cGUgPT09ICdjbGllbnRJZCcpIHtcclxuICAgIGNpZCA9IGFyZ3MuY2lkO1xyXG4gICAgY2lkRXJyTXNnID0gYXJncy5lcnJNc2c7XHJcbiAgICBpbnZva2VHZXRQdXNoQ2lkQ2FsbGJhY2tzKGNpZCwgYXJncy5lcnJNc2cpO1xyXG4gIH0gZWxzZSBpZiAoYXJncy50eXBlID09PSAncHVzaE1zZycpIHtcclxuICAgIG9uUHVzaE1lc3NhZ2VDYWxsYmFja3MuZm9yRWFjaCgoY2FsbGJhY2spID0+IHtcclxuICAgICAgY2FsbGJhY2soe1xyXG4gICAgICAgIHR5cGU6ICdyZWNlaXZlJyxcclxuICAgICAgICBkYXRhOiBub3JtYWxpemVQdXNoTWVzc2FnZShhcmdzLm1lc3NhZ2UpXHJcbiAgICAgIH0pO1xyXG4gICAgfSk7XHJcbiAgfSBlbHNlIGlmIChhcmdzLnR5cGUgPT09ICdjbGljaycpIHtcclxuICAgIG9uUHVzaE1lc3NhZ2VDYWxsYmFja3MuZm9yRWFjaCgoY2FsbGJhY2spID0+IHtcclxuICAgICAgY2FsbGJhY2soe1xyXG4gICAgICAgIHR5cGU6ICdjbGljaycsXHJcbiAgICAgICAgZGF0YTogbm9ybWFsaXplUHVzaE1lc3NhZ2UoYXJncy5tZXNzYWdlKVxyXG4gICAgICB9KTtcclxuICAgIH0pO1xyXG4gIH1cclxufVxyXG5cclxuY29uc3QgZ2V0UHVzaENpZENhbGxiYWNrcyA9IFtdO1xyXG5cclxuZnVuY3Rpb24gaW52b2tlR2V0UHVzaENpZENhbGxiYWNrcyAoY2lkLCBlcnJNc2cpIHtcclxuICBnZXRQdXNoQ2lkQ2FsbGJhY2tzLmZvckVhY2goKGNhbGxiYWNrKSA9PiB7XHJcbiAgICBjYWxsYmFjayhjaWQsIGVyck1zZyk7XHJcbiAgfSk7XHJcbiAgZ2V0UHVzaENpZENhbGxiYWNrcy5sZW5ndGggPSAwO1xyXG59XHJcblxyXG5mdW5jdGlvbiBnZXRQdXNoQ2xpZW50aWQgKGFyZ3MpIHtcclxuICBpZiAoIWlzUGxhaW5PYmplY3QoYXJncykpIHtcclxuICAgIGFyZ3MgPSB7fTtcclxuICB9XHJcbiAgY29uc3Qge1xyXG4gICAgc3VjY2VzcyxcclxuICAgIGZhaWwsXHJcbiAgICBjb21wbGV0ZVxyXG4gIH0gPSBnZXRBcGlDYWxsYmFja3MoYXJncyk7XHJcbiAgY29uc3QgaGFzU3VjY2VzcyA9IGlzRm4oc3VjY2Vzcyk7XHJcbiAgY29uc3QgaGFzRmFpbCA9IGlzRm4oZmFpbCk7XHJcbiAgY29uc3QgaGFzQ29tcGxldGUgPSBpc0ZuKGNvbXBsZXRlKTtcclxuICBnZXRQdXNoQ2lkQ2FsbGJhY2tzLnB1c2goKGNpZCwgZXJyTXNnKSA9PiB7XHJcbiAgICBsZXQgcmVzO1xyXG4gICAgaWYgKGNpZCkge1xyXG4gICAgICByZXMgPSB7XHJcbiAgICAgICAgZXJyTXNnOiAnZ2V0UHVzaENsaWVudGlkOm9rJyxcclxuICAgICAgICBjaWRcclxuICAgICAgfTtcclxuICAgICAgaGFzU3VjY2VzcyAmJiBzdWNjZXNzKHJlcyk7XHJcbiAgICB9IGVsc2Uge1xyXG4gICAgICByZXMgPSB7XHJcbiAgICAgICAgZXJyTXNnOiAnZ2V0UHVzaENsaWVudGlkOmZhaWwnICsgKGVyck1zZyA/ICcgJyArIGVyck1zZyA6ICcnKVxyXG4gICAgICB9O1xyXG4gICAgICBoYXNGYWlsICYmIGZhaWwocmVzKTtcclxuICAgIH1cclxuICAgIGhhc0NvbXBsZXRlICYmIGNvbXBsZXRlKHJlcyk7XHJcbiAgfSk7XHJcbiAgaWYgKHR5cGVvZiBjaWQgIT09ICd1bmRlZmluZWQnKSB7XHJcbiAgICBQcm9taXNlLnJlc29sdmUoKS50aGVuKCgpID0+IGludm9rZUdldFB1c2hDaWRDYWxsYmFja3MoY2lkLCBjaWRFcnJNc2cpKTtcclxuICB9XHJcbn1cclxuXHJcbmNvbnN0IG9uUHVzaE1lc3NhZ2VDYWxsYmFja3MgPSBbXTtcclxuLy8g5LiN5L2/55SoIGRlZmluZU9uQXBpIOWunueOsO+8jOaYr+WboOS4uiBkZWZpbmVPbkFwaSDkvp3otZYgVW5pU2VydmljZUpTQnJpZGdlIO+8jOivpeWvueixoeebruWJjeWcqOWwj+eoi+W6j+S4iuacquaPkOS+m++8jOaVheeugOWNleWunueOsFxyXG5jb25zdCBvblB1c2hNZXNzYWdlID0gKGZuKSA9PiB7XHJcbiAgaWYgKG9uUHVzaE1lc3NhZ2VDYWxsYmFja3MuaW5kZXhPZihmbikgPT09IC0xKSB7XHJcbiAgICBvblB1c2hNZXNzYWdlQ2FsbGJhY2tzLnB1c2goZm4pO1xyXG4gIH1cclxufTtcclxuXHJcbmNvbnN0IG9mZlB1c2hNZXNzYWdlID0gKGZuKSA9PiB7XHJcbiAgaWYgKCFmbikge1xyXG4gICAgb25QdXNoTWVzc2FnZUNhbGxiYWNrcy5sZW5ndGggPSAwO1xyXG4gIH0gZWxzZSB7XHJcbiAgICBjb25zdCBpbmRleCA9IG9uUHVzaE1lc3NhZ2VDYWxsYmFja3MuaW5kZXhPZihmbik7XHJcbiAgICBpZiAoaW5kZXggPiAtMSkge1xyXG4gICAgICBvblB1c2hNZXNzYWdlQ2FsbGJhY2tzLnNwbGljZShpbmRleCwgMSk7XHJcbiAgICB9XHJcbiAgfVxyXG59O1xyXG5cclxudmFyIGFwaSA9IC8qI19fUFVSRV9fKi9PYmplY3QuZnJlZXplKHtcclxuICBfX3Byb3RvX186IG51bGwsXHJcbiAgY3JlYXRlTWVkaWFRdWVyeU9ic2VydmVyOiBjcmVhdGVNZWRpYVF1ZXJ5T2JzZXJ2ZXIsXHJcbiAgZ2V0UHVzaENsaWVudGlkOiBnZXRQdXNoQ2xpZW50aWQsXHJcbiAgb25QdXNoTWVzc2FnZTogb25QdXNoTWVzc2FnZSxcclxuICBvZmZQdXNoTWVzc2FnZTogb2ZmUHVzaE1lc3NhZ2UsXHJcbiAgaW52b2tlUHVzaENhbGxiYWNrOiBpbnZva2VQdXNoQ2FsbGJhY2tcclxufSk7XHJcblxyXG5jb25zdCBNUFBhZ2UgPSBQYWdlO1xyXG5jb25zdCBNUENvbXBvbmVudCA9IENvbXBvbmVudDtcclxuXHJcbmNvbnN0IGN1c3RvbWl6ZVJFID0gLzovZztcclxuXHJcbmNvbnN0IGN1c3RvbWl6ZSA9IGNhY2hlZCgoc3RyKSA9PiB7XHJcbiAgcmV0dXJuIGNhbWVsaXplKHN0ci5yZXBsYWNlKGN1c3RvbWl6ZVJFLCAnLScpKVxyXG59KTtcclxuXHJcbmZ1bmN0aW9uIGluaXRUcmlnZ2VyRXZlbnQgKG1wSW5zdGFuY2UpIHtcclxuICBjb25zdCBvbGRUcmlnZ2VyRXZlbnQgPSBtcEluc3RhbmNlLnRyaWdnZXJFdmVudDtcclxuICBjb25zdCBuZXdUcmlnZ2VyRXZlbnQgPSBmdW5jdGlvbiAoZXZlbnQsIC4uLmFyZ3MpIHtcclxuICAgIHJldHVybiBvbGRUcmlnZ2VyRXZlbnQuYXBwbHkobXBJbnN0YW5jZSwgW2N1c3RvbWl6ZShldmVudCksIC4uLmFyZ3NdKVxyXG4gIH07XHJcbiAgdHJ5IHtcclxuICAgIC8vIOS6rOS4nOWwj+eoi+W6jyB0cmlnZ2VyRXZlbnQg5Li65Y+q6K+7XHJcbiAgICBtcEluc3RhbmNlLnRyaWdnZXJFdmVudCA9IG5ld1RyaWdnZXJFdmVudDtcclxuICB9IGNhdGNoIChlcnJvcikge1xyXG4gICAgbXBJbnN0YW5jZS5fdHJpZ2dlckV2ZW50ID0gbmV3VHJpZ2dlckV2ZW50O1xyXG4gIH1cclxufVxyXG5cclxuZnVuY3Rpb24gaW5pdEhvb2sgKG5hbWUsIG9wdGlvbnMsIGlzQ29tcG9uZW50KSB7XHJcbiAge1xyXG4gICAgLy8gZml4IGJ5IEx4aCDlrZfoioLoh6rlrprkuYnnu4Tku7ZDb21wb25lbnTmnoTpgKDlmajmlofmoaPkuIrlhpnmnIljcmVhdGVk77yM5L2G5piv5a6e5rWL5Y+q6Kem5Y+R5LqGbGlmZXRpbWVz5LiK55qEY3JlYXRlZFxyXG4gICAgaXNDb21wb25lbnQgJiYgb3B0aW9ucy5saWZldGltZXMgJiYgb3B0aW9ucy5saWZldGltZXNbbmFtZV0gJiYgKG9wdGlvbnMgPSBvcHRpb25zLmxpZmV0aW1lcyk7XHJcbiAgfVxyXG4gIGNvbnN0IG9sZEhvb2sgPSBvcHRpb25zW25hbWVdO1xyXG4gIGlmICghb2xkSG9vaykge1xyXG4gICAgb3B0aW9uc1tuYW1lXSA9IGZ1bmN0aW9uICgpIHtcclxuICAgICAgaW5pdFRyaWdnZXJFdmVudCh0aGlzKTtcclxuICAgIH07XHJcbiAgfSBlbHNlIHtcclxuICAgIG9wdGlvbnNbbmFtZV0gPSBmdW5jdGlvbiAoLi4uYXJncykge1xyXG4gICAgICBpbml0VHJpZ2dlckV2ZW50KHRoaXMpO1xyXG4gICAgICByZXR1cm4gb2xkSG9vay5hcHBseSh0aGlzLCBhcmdzKVxyXG4gICAgfTtcclxuICB9XHJcbn1cclxuaWYgKCFNUFBhZ2UuX18kd3JhcHBlcmVkKSB7XHJcbiAgTVBQYWdlLl9fJHdyYXBwZXJlZCA9IHRydWU7XHJcbiAgUGFnZSA9IGZ1bmN0aW9uIChvcHRpb25zID0ge30pIHtcclxuICAgIGluaXRIb29rKCdvbkxvYWQnLCBvcHRpb25zKTtcclxuICAgIHJldHVybiBNUFBhZ2Uob3B0aW9ucylcclxuICB9O1xyXG4gIFBhZ2UuYWZ0ZXIgPSBNUFBhZ2UuYWZ0ZXI7XHJcblxyXG4gIENvbXBvbmVudCA9IGZ1bmN0aW9uIChvcHRpb25zID0ge30pIHtcclxuICAgIGluaXRIb29rKCdjcmVhdGVkJywgb3B0aW9ucywgdHJ1ZSk7XHJcbiAgICByZXR1cm4gTVBDb21wb25lbnQob3B0aW9ucylcclxuICB9O1xyXG59XHJcblxyXG5jb25zdCBQQUdFX0VWRU5UX0hPT0tTID0gW1xyXG4gICdvblB1bGxEb3duUmVmcmVzaCcsXHJcbiAgJ29uUmVhY2hCb3R0b20nLFxyXG4gICdvbkFkZFRvRmF2b3JpdGVzJyxcclxuICAnb25TaGFyZVRpbWVsaW5lJyxcclxuICAnb25TaGFyZUFwcE1lc3NhZ2UnLFxyXG4gICdvblBhZ2VTY3JvbGwnLFxyXG4gICdvblJlc2l6ZScsXHJcbiAgJ29uVGFiSXRlbVRhcCdcclxuXTtcclxuXHJcbmZ1bmN0aW9uIGluaXRNb2NrcyAodm0sIG1vY2tzKSB7XHJcbiAgY29uc3QgbXBJbnN0YW5jZSA9IHZtLiRtcFt2bS5tcFR5cGVdO1xyXG4gIG1vY2tzLmZvckVhY2gobW9jayA9PiB7XHJcbiAgICBpZiAoaGFzT3duKG1wSW5zdGFuY2UsIG1vY2spKSB7XHJcbiAgICAgIHZtW21vY2tdID0gbXBJbnN0YW5jZVttb2NrXTtcclxuICAgIH1cclxuICB9KTtcclxufVxyXG5cclxuZnVuY3Rpb24gaGFzSG9vayAoaG9vaywgdnVlT3B0aW9ucykge1xyXG4gIGlmICghdnVlT3B0aW9ucykge1xyXG4gICAgcmV0dXJuIHRydWVcclxuICB9XHJcblxyXG4gIGlmIChWdWUub3B0aW9ucyAmJiBBcnJheS5pc0FycmF5KFZ1ZS5vcHRpb25zW2hvb2tdKSkge1xyXG4gICAgcmV0dXJuIHRydWVcclxuICB9XHJcblxyXG4gIHZ1ZU9wdGlvbnMgPSB2dWVPcHRpb25zLmRlZmF1bHQgfHwgdnVlT3B0aW9ucztcclxuXHJcbiAgaWYgKGlzRm4odnVlT3B0aW9ucykpIHtcclxuICAgIGlmIChpc0ZuKHZ1ZU9wdGlvbnMuZXh0ZW5kT3B0aW9uc1tob29rXSkpIHtcclxuICAgICAgcmV0dXJuIHRydWVcclxuICAgIH1cclxuICAgIGlmICh2dWVPcHRpb25zLnN1cGVyICYmXHJcbiAgICAgIHZ1ZU9wdGlvbnMuc3VwZXIub3B0aW9ucyAmJlxyXG4gICAgICBBcnJheS5pc0FycmF5KHZ1ZU9wdGlvbnMuc3VwZXIub3B0aW9uc1tob29rXSkpIHtcclxuICAgICAgcmV0dXJuIHRydWVcclxuICAgIH1cclxuICAgIHJldHVybiBmYWxzZVxyXG4gIH1cclxuXHJcbiAgaWYgKGlzRm4odnVlT3B0aW9uc1tob29rXSkpIHtcclxuICAgIHJldHVybiB0cnVlXHJcbiAgfVxyXG4gIGNvbnN0IG1peGlucyA9IHZ1ZU9wdGlvbnMubWl4aW5zO1xyXG4gIGlmIChBcnJheS5pc0FycmF5KG1peGlucykpIHtcclxuICAgIHJldHVybiAhIW1peGlucy5maW5kKG1peGluID0+IGhhc0hvb2soaG9vaywgbWl4aW4pKVxyXG4gIH1cclxufVxyXG5cclxuZnVuY3Rpb24gaW5pdEhvb2tzIChtcE9wdGlvbnMsIGhvb2tzLCB2dWVPcHRpb25zKSB7XHJcbiAgaG9va3MuZm9yRWFjaChob29rID0+IHtcclxuICAgIGlmIChoYXNIb29rKGhvb2ssIHZ1ZU9wdGlvbnMpKSB7XHJcbiAgICAgIG1wT3B0aW9uc1tob29rXSA9IGZ1bmN0aW9uIChhcmdzKSB7XHJcbiAgICAgICAgcmV0dXJuIHRoaXMuJHZtICYmIHRoaXMuJHZtLl9fY2FsbF9ob29rKGhvb2ssIGFyZ3MpXHJcbiAgICAgIH07XHJcbiAgICB9XHJcbiAgfSk7XHJcbn1cclxuXHJcbmZ1bmN0aW9uIGluaXRWdWVDb21wb25lbnQgKFZ1ZSwgdnVlT3B0aW9ucykge1xyXG4gIHZ1ZU9wdGlvbnMgPSB2dWVPcHRpb25zLmRlZmF1bHQgfHwgdnVlT3B0aW9ucztcclxuICBsZXQgVnVlQ29tcG9uZW50O1xyXG4gIGlmIChpc0ZuKHZ1ZU9wdGlvbnMpKSB7XHJcbiAgICBWdWVDb21wb25lbnQgPSB2dWVPcHRpb25zO1xyXG4gIH0gZWxzZSB7XHJcbiAgICBWdWVDb21wb25lbnQgPSBWdWUuZXh0ZW5kKHZ1ZU9wdGlvbnMpO1xyXG4gIH1cclxuICB2dWVPcHRpb25zID0gVnVlQ29tcG9uZW50Lm9wdGlvbnM7XHJcbiAgcmV0dXJuIFtWdWVDb21wb25lbnQsIHZ1ZU9wdGlvbnNdXHJcbn1cclxuXHJcbmZ1bmN0aW9uIGluaXRTbG90cyAodm0sIHZ1ZVNsb3RzKSB7XHJcbiAgaWYgKEFycmF5LmlzQXJyYXkodnVlU2xvdHMpICYmIHZ1ZVNsb3RzLmxlbmd0aCkge1xyXG4gICAgY29uc3QgJHNsb3RzID0gT2JqZWN0LmNyZWF0ZShudWxsKTtcclxuICAgIHZ1ZVNsb3RzLmZvckVhY2goc2xvdE5hbWUgPT4ge1xyXG4gICAgICAkc2xvdHNbc2xvdE5hbWVdID0gdHJ1ZTtcclxuICAgIH0pO1xyXG4gICAgdm0uJHNjb3BlZFNsb3RzID0gdm0uJHNsb3RzID0gJHNsb3RzO1xyXG4gIH1cclxufVxyXG5cclxuZnVuY3Rpb24gaW5pdFZ1ZUlkcyAodnVlSWRzLCBtcEluc3RhbmNlKSB7XHJcbiAgdnVlSWRzID0gKHZ1ZUlkcyB8fCAnJykuc3BsaXQoJywnKTtcclxuICBjb25zdCBsZW4gPSB2dWVJZHMubGVuZ3RoO1xyXG5cclxuICBpZiAobGVuID09PSAxKSB7XHJcbiAgICBtcEluc3RhbmNlLl8kdnVlSWQgPSB2dWVJZHNbMF07XHJcbiAgfSBlbHNlIGlmIChsZW4gPT09IDIpIHtcclxuICAgIG1wSW5zdGFuY2UuXyR2dWVJZCA9IHZ1ZUlkc1swXTtcclxuICAgIG1wSW5zdGFuY2UuXyR2dWVQaWQgPSB2dWVJZHNbMV07XHJcbiAgfVxyXG59XHJcblxyXG5mdW5jdGlvbiBpbml0RGF0YSAodnVlT3B0aW9ucywgY29udGV4dCkge1xyXG4gIGxldCBkYXRhID0gdnVlT3B0aW9ucy5kYXRhIHx8IHt9O1xyXG4gIGNvbnN0IG1ldGhvZHMgPSB2dWVPcHRpb25zLm1ldGhvZHMgfHwge307XHJcblxyXG4gIGlmICh0eXBlb2YgZGF0YSA9PT0gJ2Z1bmN0aW9uJykge1xyXG4gICAgdHJ5IHtcclxuICAgICAgZGF0YSA9IGRhdGEuY2FsbChjb250ZXh0KTsgLy8g5pSv5oyBIFZ1ZS5wcm90b3R5cGUg5LiK5oyC55qE5pWw5o2uXHJcbiAgICB9IGNhdGNoIChlKSB7XHJcbiAgICAgIGlmIChwcm9jZXNzLmVudi5WVUVfQVBQX0RFQlVHKSB7XHJcbiAgICAgICAgY29uc29sZS53YXJuKCfmoLnmja4gVnVlIOeahCBkYXRhIOWHveaVsOWIneWni+WMluWwj+eoi+W6jyBkYXRhIOWksei0pe+8jOivt+WwvemHj+ehruS/nSBkYXRhIOWHveaVsOS4reS4jeiuv+mXriB2bSDlr7nosaHvvIzlkKbliJnlj6/og73lvbHlk43pppbmrKHmlbDmja7muLLmn5PpgJ/luqbjgIInLCBkYXRhKTtcclxuICAgICAgfVxyXG4gICAgfVxyXG4gIH0gZWxzZSB7XHJcbiAgICB0cnkge1xyXG4gICAgICAvLyDlr7kgZGF0YSDmoLzlvI/ljJZcclxuICAgICAgZGF0YSA9IEpTT04ucGFyc2UoSlNPTi5zdHJpbmdpZnkoZGF0YSkpO1xyXG4gICAgfSBjYXRjaCAoZSkge31cclxuICB9XHJcblxyXG4gIGlmICghaXNQbGFpbk9iamVjdChkYXRhKSkge1xyXG4gICAgZGF0YSA9IHt9O1xyXG4gIH1cclxuXHJcbiAgT2JqZWN0LmtleXMobWV0aG9kcykuZm9yRWFjaChtZXRob2ROYW1lID0+IHtcclxuICAgIGlmIChjb250ZXh0Ll9fbGlmZWN5Y2xlX2hvb2tzX18uaW5kZXhPZihtZXRob2ROYW1lKSA9PT0gLTEgJiYgIWhhc093bihkYXRhLCBtZXRob2ROYW1lKSkge1xyXG4gICAgICBkYXRhW21ldGhvZE5hbWVdID0gbWV0aG9kc1ttZXRob2ROYW1lXTtcclxuICAgIH1cclxuICB9KTtcclxuXHJcbiAgcmV0dXJuIGRhdGFcclxufVxyXG5cclxuY29uc3QgUFJPUF9UWVBFUyA9IFtTdHJpbmcsIE51bWJlciwgQm9vbGVhbiwgT2JqZWN0LCBBcnJheSwgbnVsbF07XHJcblxyXG5mdW5jdGlvbiBjcmVhdGVPYnNlcnZlciAobmFtZSkge1xyXG4gIHJldHVybiBmdW5jdGlvbiBvYnNlcnZlciAobmV3VmFsLCBvbGRWYWwpIHtcclxuICAgIGlmICh0aGlzLiR2bSkge1xyXG4gICAgICB0aGlzLiR2bVtuYW1lXSA9IG5ld1ZhbDsgLy8g5Li65LqG6Kem5Y+R5YW25LuW6Z2eIHJlbmRlciB3YXRjaGVyXHJcbiAgICB9XHJcbiAgfVxyXG59XHJcblxyXG5mdW5jdGlvbiBpbml0QmVoYXZpb3JzICh2dWVPcHRpb25zLCBpbml0QmVoYXZpb3IpIHtcclxuICBjb25zdCB2dWVCZWhhdmlvcnMgPSB2dWVPcHRpb25zLmJlaGF2aW9ycztcclxuICBjb25zdCB2dWVFeHRlbmRzID0gdnVlT3B0aW9ucy5leHRlbmRzO1xyXG4gIGNvbnN0IHZ1ZU1peGlucyA9IHZ1ZU9wdGlvbnMubWl4aW5zO1xyXG5cclxuICBsZXQgdnVlUHJvcHMgPSB2dWVPcHRpb25zLnByb3BzO1xyXG5cclxuICBpZiAoIXZ1ZVByb3BzKSB7XHJcbiAgICB2dWVPcHRpb25zLnByb3BzID0gdnVlUHJvcHMgPSBbXTtcclxuICB9XHJcblxyXG4gIGNvbnN0IGJlaGF2aW9ycyA9IFtdO1xyXG4gIGlmIChBcnJheS5pc0FycmF5KHZ1ZUJlaGF2aW9ycykpIHtcclxuICAgIHZ1ZUJlaGF2aW9ycy5mb3JFYWNoKGJlaGF2aW9yID0+IHtcclxuICAgICAgYmVoYXZpb3JzLnB1c2goYmVoYXZpb3IucmVwbGFjZSgndW5pOi8vJywgYCR7XCJ0dFwifTovL2ApKTtcclxuICAgICAgaWYgKGJlaGF2aW9yID09PSAndW5pOi8vZm9ybS1maWVsZCcpIHtcclxuICAgICAgICBpZiAoQXJyYXkuaXNBcnJheSh2dWVQcm9wcykpIHtcclxuICAgICAgICAgIHZ1ZVByb3BzLnB1c2goJ25hbWUnKTtcclxuICAgICAgICAgIHZ1ZVByb3BzLnB1c2goJ3ZhbHVlJyk7XHJcbiAgICAgICAgfSBlbHNlIHtcclxuICAgICAgICAgIHZ1ZVByb3BzLm5hbWUgPSB7XHJcbiAgICAgICAgICAgIHR5cGU6IFN0cmluZyxcclxuICAgICAgICAgICAgZGVmYXVsdDogJydcclxuICAgICAgICAgIH07XHJcbiAgICAgICAgICB2dWVQcm9wcy52YWx1ZSA9IHtcclxuICAgICAgICAgICAgdHlwZTogW1N0cmluZywgTnVtYmVyLCBCb29sZWFuLCBBcnJheSwgT2JqZWN0LCBEYXRlXSxcclxuICAgICAgICAgICAgZGVmYXVsdDogJydcclxuICAgICAgICAgIH07XHJcbiAgICAgICAgfVxyXG4gICAgICB9XHJcbiAgICB9KTtcclxuICB9XHJcbiAgaWYgKGlzUGxhaW5PYmplY3QodnVlRXh0ZW5kcykgJiYgdnVlRXh0ZW5kcy5wcm9wcykge1xyXG4gICAgYmVoYXZpb3JzLnB1c2goXHJcbiAgICAgIGluaXRCZWhhdmlvcih7XHJcbiAgICAgICAgcHJvcGVydGllczogaW5pdFByb3BlcnRpZXModnVlRXh0ZW5kcy5wcm9wcywgdHJ1ZSlcclxuICAgICAgfSlcclxuICAgICk7XHJcbiAgfVxyXG4gIGlmIChBcnJheS5pc0FycmF5KHZ1ZU1peGlucykpIHtcclxuICAgIHZ1ZU1peGlucy5mb3JFYWNoKHZ1ZU1peGluID0+IHtcclxuICAgICAgaWYgKGlzUGxhaW5PYmplY3QodnVlTWl4aW4pICYmIHZ1ZU1peGluLnByb3BzKSB7XHJcbiAgICAgICAgYmVoYXZpb3JzLnB1c2goXHJcbiAgICAgICAgICBpbml0QmVoYXZpb3Ioe1xyXG4gICAgICAgICAgICBwcm9wZXJ0aWVzOiBpbml0UHJvcGVydGllcyh2dWVNaXhpbi5wcm9wcywgdHJ1ZSlcclxuICAgICAgICAgIH0pXHJcbiAgICAgICAgKTtcclxuICAgICAgfVxyXG4gICAgfSk7XHJcbiAgfVxyXG4gIHJldHVybiBiZWhhdmlvcnNcclxufVxyXG5cclxuZnVuY3Rpb24gcGFyc2VQcm9wVHlwZSAoa2V5LCB0eXBlLCBkZWZhdWx0VmFsdWUsIGZpbGUpIHtcclxuICAvLyBbU3RyaW5nXT0+U3RyaW5nXHJcbiAgaWYgKEFycmF5LmlzQXJyYXkodHlwZSkgJiYgdHlwZS5sZW5ndGggPT09IDEpIHtcclxuICAgIHJldHVybiB0eXBlWzBdXHJcbiAgfVxyXG4gIHJldHVybiB0eXBlXHJcbn1cclxuXHJcbmZ1bmN0aW9uIGluaXRQcm9wZXJ0aWVzIChwcm9wcywgaXNCZWhhdmlvciA9IGZhbHNlLCBmaWxlID0gJycpIHtcclxuICBjb25zdCBwcm9wZXJ0aWVzID0ge307XHJcbiAgaWYgKCFpc0JlaGF2aW9yKSB7XHJcbiAgICBwcm9wZXJ0aWVzLnZ1ZUlkID0ge1xyXG4gICAgICB0eXBlOiBTdHJpbmcsXHJcbiAgICAgIHZhbHVlOiAnJ1xyXG4gICAgfTtcclxuICAgIC8vIOeUqOS6juWtl+iKgui3s+WKqOWwj+eoi+W6j+aooeaLn+aKveixoeiKgueCuVxyXG4gICAgcHJvcGVydGllcy5nZW5lcmljID0ge1xyXG4gICAgICB0eXBlOiBPYmplY3QsXHJcbiAgICAgIHZhbHVlOiBudWxsXHJcbiAgICB9O1xyXG4gICAgLy8gc2NvcGVkU2xvdHNDb21waWxlciBhdXRvXHJcbiAgICBwcm9wZXJ0aWVzLnNjb3BlZFNsb3RzQ29tcGlsZXIgPSB7XHJcbiAgICAgIHR5cGU6IFN0cmluZyxcclxuICAgICAgdmFsdWU6ICcnXHJcbiAgICB9O1xyXG4gICAgcHJvcGVydGllcy52dWVTbG90cyA9IHsgLy8g5bCP56iL5bqP5LiN6IO955u05o6l5a6a5LmJICRzbG90cyDnmoQgcHJvcHPvvIzmiYDku6XpgJrov4cgdnVlU2xvdHMg6L2s5o2i5YiwICRzbG90c1xyXG4gICAgICB0eXBlOiBudWxsLFxyXG4gICAgICB2YWx1ZTogW10sXHJcbiAgICAgIG9ic2VydmVyOiBmdW5jdGlvbiAobmV3VmFsLCBvbGRWYWwpIHtcclxuICAgICAgICBjb25zdCAkc2xvdHMgPSBPYmplY3QuY3JlYXRlKG51bGwpO1xyXG4gICAgICAgIG5ld1ZhbC5mb3JFYWNoKHNsb3ROYW1lID0+IHtcclxuICAgICAgICAgICRzbG90c1tzbG90TmFtZV0gPSB0cnVlO1xyXG4gICAgICAgIH0pO1xyXG4gICAgICAgIHRoaXMuc2V0RGF0YSh7XHJcbiAgICAgICAgICAkc2xvdHNcclxuICAgICAgICB9KTtcclxuICAgICAgfVxyXG4gICAgfTtcclxuICB9XHJcbiAgaWYgKEFycmF5LmlzQXJyYXkocHJvcHMpKSB7IC8vIFsndGl0bGUnXVxyXG4gICAgcHJvcHMuZm9yRWFjaChrZXkgPT4ge1xyXG4gICAgICBwcm9wZXJ0aWVzW2tleV0gPSB7XHJcbiAgICAgICAgdHlwZTogbnVsbCxcclxuICAgICAgICBvYnNlcnZlcjogY3JlYXRlT2JzZXJ2ZXIoa2V5KVxyXG4gICAgICB9O1xyXG4gICAgfSk7XHJcbiAgfSBlbHNlIGlmIChpc1BsYWluT2JqZWN0KHByb3BzKSkgeyAvLyB7dGl0bGU6e3R5cGU6U3RyaW5nLGRlZmF1bHQ6Jyd9LGNvbnRlbnQ6U3RyaW5nfVxyXG4gICAgT2JqZWN0LmtleXMocHJvcHMpLmZvckVhY2goa2V5ID0+IHtcclxuICAgICAgY29uc3Qgb3B0cyA9IHByb3BzW2tleV07XHJcbiAgICAgIGlmIChpc1BsYWluT2JqZWN0KG9wdHMpKSB7IC8vIHRpdGxlOnt0eXBlOlN0cmluZyxkZWZhdWx0OicnfVxyXG4gICAgICAgIGxldCB2YWx1ZSA9IG9wdHMuZGVmYXVsdDtcclxuICAgICAgICBpZiAoaXNGbih2YWx1ZSkpIHtcclxuICAgICAgICAgIHZhbHVlID0gdmFsdWUoKTtcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIG9wdHMudHlwZSA9IHBhcnNlUHJvcFR5cGUoa2V5LCBvcHRzLnR5cGUpO1xyXG5cclxuICAgICAgICBwcm9wZXJ0aWVzW2tleV0gPSB7XHJcbiAgICAgICAgICB0eXBlOiBQUk9QX1RZUEVTLmluZGV4T2Yob3B0cy50eXBlKSAhPT0gLTEgPyBvcHRzLnR5cGUgOiBudWxsLFxyXG4gICAgICAgICAgdmFsdWUsXHJcbiAgICAgICAgICBvYnNlcnZlcjogY3JlYXRlT2JzZXJ2ZXIoa2V5KVxyXG4gICAgICAgIH07XHJcbiAgICAgIH0gZWxzZSB7IC8vIGNvbnRlbnQ6U3RyaW5nXHJcbiAgICAgICAgY29uc3QgdHlwZSA9IHBhcnNlUHJvcFR5cGUoa2V5LCBvcHRzKTtcclxuICAgICAgICBwcm9wZXJ0aWVzW2tleV0gPSB7XHJcbiAgICAgICAgICB0eXBlOiBQUk9QX1RZUEVTLmluZGV4T2YodHlwZSkgIT09IC0xID8gdHlwZSA6IG51bGwsXHJcbiAgICAgICAgICBvYnNlcnZlcjogY3JlYXRlT2JzZXJ2ZXIoa2V5KVxyXG4gICAgICAgIH07XHJcbiAgICAgIH1cclxuICAgIH0pO1xyXG4gIH1cclxuICByZXR1cm4gcHJvcGVydGllc1xyXG59XHJcblxyXG5mdW5jdGlvbiB3cmFwcGVyJDEgKGV2ZW50KSB7XHJcbiAgLy8gVE9ETyDlj4jlvpflhbzlrrkgbXB2dWUg55qEIG1wIOWvueixoVxyXG4gIHRyeSB7XHJcbiAgICBldmVudC5tcCA9IEpTT04ucGFyc2UoSlNPTi5zdHJpbmdpZnkoZXZlbnQpKTtcclxuICB9IGNhdGNoIChlKSB7fVxyXG5cclxuICBldmVudC5zdG9wUHJvcGFnYXRpb24gPSBub29wO1xyXG4gIGV2ZW50LnByZXZlbnREZWZhdWx0ID0gbm9vcDtcclxuXHJcbiAgZXZlbnQudGFyZ2V0ID0gZXZlbnQudGFyZ2V0IHx8IHt9O1xyXG5cclxuICBpZiAoIWhhc093bihldmVudCwgJ2RldGFpbCcpKSB7XHJcbiAgICBldmVudC5kZXRhaWwgPSB7fTtcclxuICB9XHJcblxyXG4gIGlmIChoYXNPd24oZXZlbnQsICdtYXJrZXJJZCcpKSB7XHJcbiAgICBldmVudC5kZXRhaWwgPSB0eXBlb2YgZXZlbnQuZGV0YWlsID09PSAnb2JqZWN0JyA/IGV2ZW50LmRldGFpbCA6IHt9O1xyXG4gICAgZXZlbnQuZGV0YWlsLm1hcmtlcklkID0gZXZlbnQubWFya2VySWQ7XHJcbiAgfVxyXG5cclxuICBpZiAoaXNQbGFpbk9iamVjdChldmVudC5kZXRhaWwpKSB7XHJcbiAgICBldmVudC50YXJnZXQgPSBPYmplY3QuYXNzaWduKHt9LCBldmVudC50YXJnZXQsIGV2ZW50LmRldGFpbCk7XHJcbiAgfVxyXG5cclxuICByZXR1cm4gZXZlbnRcclxufVxyXG5cclxuZnVuY3Rpb24gZ2V0RXh0cmFWYWx1ZSAodm0sIGRhdGFQYXRoc0FycmF5KSB7XHJcbiAgbGV0IGNvbnRleHQgPSB2bTtcclxuICBkYXRhUGF0aHNBcnJheS5mb3JFYWNoKGRhdGFQYXRoQXJyYXkgPT4ge1xyXG4gICAgY29uc3QgZGF0YVBhdGggPSBkYXRhUGF0aEFycmF5WzBdO1xyXG4gICAgY29uc3QgdmFsdWUgPSBkYXRhUGF0aEFycmF5WzJdO1xyXG4gICAgaWYgKGRhdGFQYXRoIHx8IHR5cGVvZiB2YWx1ZSAhPT0gJ3VuZGVmaW5lZCcpIHsgLy8gWycnLCcnLGluZGV4LCdkaXNhYmxlJ11cclxuICAgICAgY29uc3QgcHJvcFBhdGggPSBkYXRhUGF0aEFycmF5WzFdO1xyXG4gICAgICBjb25zdCB2YWx1ZVBhdGggPSBkYXRhUGF0aEFycmF5WzNdO1xyXG5cclxuICAgICAgbGV0IHZGb3I7XHJcbiAgICAgIGlmIChOdW1iZXIuaXNJbnRlZ2VyKGRhdGFQYXRoKSkge1xyXG4gICAgICAgIHZGb3IgPSBkYXRhUGF0aDtcclxuICAgICAgfSBlbHNlIGlmICghZGF0YVBhdGgpIHtcclxuICAgICAgICB2Rm9yID0gY29udGV4dDtcclxuICAgICAgfSBlbHNlIGlmICh0eXBlb2YgZGF0YVBhdGggPT09ICdzdHJpbmcnICYmIGRhdGFQYXRoKSB7XHJcbiAgICAgICAgaWYgKGRhdGFQYXRoLmluZGV4T2YoJyNzIycpID09PSAwKSB7XHJcbiAgICAgICAgICB2Rm9yID0gZGF0YVBhdGguc3Vic3RyKDMpO1xyXG4gICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgICB2Rm9yID0gdm0uX19nZXRfdmFsdWUoZGF0YVBhdGgsIGNvbnRleHQpO1xyXG4gICAgICAgIH1cclxuICAgICAgfVxyXG5cclxuICAgICAgaWYgKE51bWJlci5pc0ludGVnZXIodkZvcikpIHtcclxuICAgICAgICBjb250ZXh0ID0gdmFsdWU7XHJcbiAgICAgIH0gZWxzZSBpZiAoIXByb3BQYXRoKSB7XHJcbiAgICAgICAgY29udGV4dCA9IHZGb3JbdmFsdWVdO1xyXG4gICAgICB9IGVsc2Uge1xyXG4gICAgICAgIGlmIChBcnJheS5pc0FycmF5KHZGb3IpKSB7XHJcbiAgICAgICAgICBjb250ZXh0ID0gdkZvci5maW5kKHZGb3JJdGVtID0+IHtcclxuICAgICAgICAgICAgcmV0dXJuIHZtLl9fZ2V0X3ZhbHVlKHByb3BQYXRoLCB2Rm9ySXRlbSkgPT09IHZhbHVlXHJcbiAgICAgICAgICB9KTtcclxuICAgICAgICB9IGVsc2UgaWYgKGlzUGxhaW5PYmplY3QodkZvcikpIHtcclxuICAgICAgICAgIGNvbnRleHQgPSBPYmplY3Qua2V5cyh2Rm9yKS5maW5kKHZGb3JLZXkgPT4ge1xyXG4gICAgICAgICAgICByZXR1cm4gdm0uX19nZXRfdmFsdWUocHJvcFBhdGgsIHZGb3JbdkZvcktleV0pID09PSB2YWx1ZVxyXG4gICAgICAgICAgfSk7XHJcbiAgICAgICAgfSBlbHNlIHtcclxuICAgICAgICAgIGNvbnNvbGUuZXJyb3IoJ3YtZm9yIOaaguS4jeaUr+aMgeW+queOr+aVsOaNru+8micsIHZGb3IpO1xyXG4gICAgICAgIH1cclxuICAgICAgfVxyXG5cclxuICAgICAgaWYgKHZhbHVlUGF0aCkge1xyXG4gICAgICAgIGNvbnRleHQgPSB2bS5fX2dldF92YWx1ZSh2YWx1ZVBhdGgsIGNvbnRleHQpO1xyXG4gICAgICB9XHJcbiAgICB9XHJcbiAgfSk7XHJcbiAgcmV0dXJuIGNvbnRleHRcclxufVxyXG5cclxuZnVuY3Rpb24gcHJvY2Vzc0V2ZW50RXh0cmEgKHZtLCBleHRyYSwgZXZlbnQpIHtcclxuICBjb25zdCBleHRyYU9iaiA9IHt9O1xyXG5cclxuICBpZiAoQXJyYXkuaXNBcnJheShleHRyYSkgJiYgZXh0cmEubGVuZ3RoKSB7XHJcbiAgICAvKipcclxuICAgICAqW1xyXG4gICAgICogICAgWydkYXRhLml0ZW1zJywgJ2RhdGEuaWQnLCBpdGVtLmRhdGEuaWRdLFxyXG4gICAgICogICAgWydtZXRhcycsICdpZCcsIG1ldGEuaWRdXHJcbiAgICAgKl0sXHJcbiAgICAgKltcclxuICAgICAqICAgIFsnZGF0YS5pdGVtcycsICdkYXRhLmlkJywgaXRlbS5kYXRhLmlkXSxcclxuICAgICAqICAgIFsnbWV0YXMnLCAnaWQnLCBtZXRhLmlkXVxyXG4gICAgICpdLFxyXG4gICAgICondGVzdCdcclxuICAgICAqL1xyXG4gICAgZXh0cmEuZm9yRWFjaCgoZGF0YVBhdGgsIGluZGV4KSA9PiB7XHJcbiAgICAgIGlmICh0eXBlb2YgZGF0YVBhdGggPT09ICdzdHJpbmcnKSB7XHJcbiAgICAgICAgaWYgKCFkYXRhUGF0aCkgeyAvLyBtb2RlbCxwcm9wLnN5bmNcclxuICAgICAgICAgIGV4dHJhT2JqWyckJyArIGluZGV4XSA9IHZtO1xyXG4gICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgICBpZiAoZGF0YVBhdGggPT09ICckZXZlbnQnKSB7IC8vICRldmVudFxyXG4gICAgICAgICAgICBleHRyYU9ialsnJCcgKyBpbmRleF0gPSBldmVudDtcclxuICAgICAgICAgIH0gZWxzZSBpZiAoZGF0YVBhdGggPT09ICdhcmd1bWVudHMnKSB7XHJcbiAgICAgICAgICAgIGlmIChldmVudC5kZXRhaWwgJiYgZXZlbnQuZGV0YWlsLl9fYXJnc19fKSB7XHJcbiAgICAgICAgICAgICAgZXh0cmFPYmpbJyQnICsgaW5kZXhdID0gZXZlbnQuZGV0YWlsLl9fYXJnc19fO1xyXG4gICAgICAgICAgICB9IGVsc2Uge1xyXG4gICAgICAgICAgICAgIGV4dHJhT2JqWyckJyArIGluZGV4XSA9IFtldmVudF07XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgIH0gZWxzZSBpZiAoZGF0YVBhdGguaW5kZXhPZignJGV2ZW50LicpID09PSAwKSB7IC8vICRldmVudC50YXJnZXQudmFsdWVcclxuICAgICAgICAgICAgZXh0cmFPYmpbJyQnICsgaW5kZXhdID0gdm0uX19nZXRfdmFsdWUoZGF0YVBhdGgucmVwbGFjZSgnJGV2ZW50LicsICcnKSwgZXZlbnQpO1xyXG4gICAgICAgICAgfSBlbHNlIHtcclxuICAgICAgICAgICAgZXh0cmFPYmpbJyQnICsgaW5kZXhdID0gdm0uX19nZXRfdmFsdWUoZGF0YVBhdGgpO1xyXG4gICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuICAgICAgfSBlbHNlIHtcclxuICAgICAgICBleHRyYU9ialsnJCcgKyBpbmRleF0gPSBnZXRFeHRyYVZhbHVlKHZtLCBkYXRhUGF0aCk7XHJcbiAgICAgIH1cclxuICAgIH0pO1xyXG4gIH1cclxuXHJcbiAgcmV0dXJuIGV4dHJhT2JqXHJcbn1cclxuXHJcbmZ1bmN0aW9uIGdldE9iakJ5QXJyYXkgKGFycikge1xyXG4gIGNvbnN0IG9iaiA9IHt9O1xyXG4gIGZvciAobGV0IGkgPSAxOyBpIDwgYXJyLmxlbmd0aDsgaSsrKSB7XHJcbiAgICBjb25zdCBlbGVtZW50ID0gYXJyW2ldO1xyXG4gICAgb2JqW2VsZW1lbnRbMF1dID0gZWxlbWVudFsxXTtcclxuICB9XHJcbiAgcmV0dXJuIG9ialxyXG59XHJcblxyXG5mdW5jdGlvbiBwcm9jZXNzRXZlbnRBcmdzICh2bSwgZXZlbnQsIGFyZ3MgPSBbXSwgZXh0cmEgPSBbXSwgaXNDdXN0b20sIG1ldGhvZE5hbWUpIHtcclxuICBsZXQgaXNDdXN0b21NUEV2ZW50ID0gZmFsc2U7IC8vIHd4Y29tcG9uZW50IOe7hOS7tu+8jOS8oOmAkuWOn+WniyBldmVudCDlr7nosaFcclxuICBpZiAoaXNDdXN0b20pIHsgLy8g6Ieq5a6a5LmJ5LqL5Lu2XHJcbiAgICBpc0N1c3RvbU1QRXZlbnQgPSBldmVudC5jdXJyZW50VGFyZ2V0ICYmXHJcbiAgICAgIGV2ZW50LmN1cnJlbnRUYXJnZXQuZGF0YXNldCAmJlxyXG4gICAgICBldmVudC5jdXJyZW50VGFyZ2V0LmRhdGFzZXQuY29tVHlwZSA9PT0gJ3d4JztcclxuICAgIGlmICghYXJncy5sZW5ndGgpIHsgLy8g5peg5Y+C5pWw77yM55u05o6l5Lyg5YWlIGV2ZW50IOaIliBkZXRhaWwg5pWw57uEXHJcbiAgICAgIGlmIChpc0N1c3RvbU1QRXZlbnQpIHtcclxuICAgICAgICByZXR1cm4gW2V2ZW50XVxyXG4gICAgICB9XHJcbiAgICAgIHJldHVybiBldmVudC5kZXRhaWwuX19hcmdzX18gfHwgZXZlbnQuZGV0YWlsXHJcbiAgICB9XHJcbiAgfVxyXG5cclxuICBjb25zdCBleHRyYU9iaiA9IHByb2Nlc3NFdmVudEV4dHJhKHZtLCBleHRyYSwgZXZlbnQpO1xyXG5cclxuICBjb25zdCByZXQgPSBbXTtcclxuICBhcmdzLmZvckVhY2goYXJnID0+IHtcclxuICAgIGlmIChhcmcgPT09ICckZXZlbnQnKSB7XHJcbiAgICAgIGlmIChtZXRob2ROYW1lID09PSAnX19zZXRfbW9kZWwnICYmICFpc0N1c3RvbSkgeyAvLyBpbnB1dCB2LW1vZGVsIHZhbHVlXHJcbiAgICAgICAgcmV0LnB1c2goZXZlbnQudGFyZ2V0LnZhbHVlKTtcclxuICAgICAgfSBlbHNlIHtcclxuICAgICAgICBpZiAoaXNDdXN0b20gJiYgIWlzQ3VzdG9tTVBFdmVudCkge1xyXG4gICAgICAgICAgcmV0LnB1c2goZXZlbnQuZGV0YWlsLl9fYXJnc19fWzBdKTtcclxuICAgICAgICB9IGVsc2UgeyAvLyB3eGNvbXBvbmVudCDnu4Tku7bmiJblhoXnva7nu4Tku7ZcclxuICAgICAgICAgIHJldC5wdXNoKGV2ZW50KTtcclxuICAgICAgICB9XHJcbiAgICAgIH1cclxuICAgIH0gZWxzZSB7XHJcbiAgICAgIGlmIChBcnJheS5pc0FycmF5KGFyZykgJiYgYXJnWzBdID09PSAnbycpIHtcclxuICAgICAgICByZXQucHVzaChnZXRPYmpCeUFycmF5KGFyZykpO1xyXG4gICAgICB9IGVsc2UgaWYgKHR5cGVvZiBhcmcgPT09ICdzdHJpbmcnICYmIGhhc093bihleHRyYU9iaiwgYXJnKSkge1xyXG4gICAgICAgIHJldC5wdXNoKGV4dHJhT2JqW2FyZ10pO1xyXG4gICAgICB9IGVsc2Uge1xyXG4gICAgICAgIHJldC5wdXNoKGFyZyk7XHJcbiAgICAgIH1cclxuICAgIH1cclxuICB9KTtcclxuXHJcbiAgcmV0dXJuIHJldFxyXG59XHJcblxyXG5jb25zdCBPTkNFID0gJ34nO1xyXG5jb25zdCBDVVNUT00gPSAnXic7XHJcblxyXG5mdW5jdGlvbiBpc01hdGNoRXZlbnRUeXBlIChldmVudFR5cGUsIG9wdFR5cGUpIHtcclxuICByZXR1cm4gKGV2ZW50VHlwZSA9PT0gb3B0VHlwZSkgfHxcclxuICAgIChcclxuICAgICAgb3B0VHlwZSA9PT0gJ3JlZ2lvbmNoYW5nZScgJiZcclxuICAgICAgKFxyXG4gICAgICAgIGV2ZW50VHlwZSA9PT0gJ2JlZ2luJyB8fFxyXG4gICAgICAgIGV2ZW50VHlwZSA9PT0gJ2VuZCdcclxuICAgICAgKVxyXG4gICAgKVxyXG59XHJcblxyXG5mdW5jdGlvbiBnZXRDb250ZXh0Vm0gKHZtKSB7XHJcbiAgbGV0ICRwYXJlbnQgPSB2bS4kcGFyZW50O1xyXG4gIC8vIOeItue7hOS7tuaYryBzY29wZWQgc2xvdHMg5oiW6ICF5YW25LuW6Ieq5a6a5LmJ57uE5Lu25pe257un57ut5p+l5om+XHJcbiAgd2hpbGUgKCRwYXJlbnQgJiYgJHBhcmVudC4kcGFyZW50ICYmICgkcGFyZW50LiRvcHRpb25zLmdlbmVyaWMgfHwgJHBhcmVudC4kcGFyZW50LiRvcHRpb25zLmdlbmVyaWMgfHwgJHBhcmVudC4kc2NvcGUuXyR2dWVQaWQpKSB7XHJcbiAgICAkcGFyZW50ID0gJHBhcmVudC4kcGFyZW50O1xyXG4gIH1cclxuICByZXR1cm4gJHBhcmVudCAmJiAkcGFyZW50LiRwYXJlbnRcclxufVxyXG5cclxuZnVuY3Rpb24gaGFuZGxlRXZlbnQgKGV2ZW50KSB7XHJcbiAgZXZlbnQgPSB3cmFwcGVyJDEoZXZlbnQpO1xyXG5cclxuICAvLyBbWyd0YXAnLFtbJ2hhbmRsZScsWzEsMixhXV0sWydoYW5kbGUxJyxbMSwyLGFdXV1dXVxyXG4gIGNvbnN0IGRhdGFzZXQgPSAoZXZlbnQuY3VycmVudFRhcmdldCB8fCBldmVudC50YXJnZXQpLmRhdGFzZXQ7XHJcbiAgaWYgKCFkYXRhc2V0KSB7XHJcbiAgICByZXR1cm4gY29uc29sZS53YXJuKCfkuovku7bkv6Hmga/kuI3lrZjlnKgnKVxyXG4gIH1cclxuICBjb25zdCBldmVudE9wdHMgPSBkYXRhc2V0LmV2ZW50T3B0cyB8fCBkYXRhc2V0WydldmVudC1vcHRzJ107IC8vIOaUr+S7mOWunSB3ZWItdmlldyDnu4Tku7YgZGF0YXNldCDpnZ7pqbzls7BcclxuICBpZiAoIWV2ZW50T3B0cykge1xyXG4gICAgcmV0dXJuIGNvbnNvbGUud2Fybign5LqL5Lu25L+h5oGv5LiN5a2Y5ZyoJylcclxuICB9XHJcblxyXG4gIC8vIFtbJ2hhbmRsZScsWzEsMixhXV0sWydoYW5kbGUxJyxbMSwyLGFdXV1cclxuICBjb25zdCBldmVudFR5cGUgPSBldmVudC50eXBlO1xyXG5cclxuICBjb25zdCByZXQgPSBbXTtcclxuXHJcbiAgZXZlbnRPcHRzLmZvckVhY2goZXZlbnRPcHQgPT4ge1xyXG4gICAgbGV0IHR5cGUgPSBldmVudE9wdFswXTtcclxuICAgIGNvbnN0IGV2ZW50c0FycmF5ID0gZXZlbnRPcHRbMV07XHJcblxyXG4gICAgY29uc3QgaXNDdXN0b20gPSB0eXBlLmNoYXJBdCgwKSA9PT0gQ1VTVE9NO1xyXG4gICAgdHlwZSA9IGlzQ3VzdG9tID8gdHlwZS5zbGljZSgxKSA6IHR5cGU7XHJcbiAgICBjb25zdCBpc09uY2UgPSB0eXBlLmNoYXJBdCgwKSA9PT0gT05DRTtcclxuICAgIHR5cGUgPSBpc09uY2UgPyB0eXBlLnNsaWNlKDEpIDogdHlwZTtcclxuXHJcbiAgICBpZiAoZXZlbnRzQXJyYXkgJiYgaXNNYXRjaEV2ZW50VHlwZShldmVudFR5cGUsIHR5cGUpKSB7XHJcbiAgICAgIGV2ZW50c0FycmF5LmZvckVhY2goZXZlbnRBcnJheSA9PiB7XHJcbiAgICAgICAgY29uc3QgbWV0aG9kTmFtZSA9IGV2ZW50QXJyYXlbMF07XHJcbiAgICAgICAgaWYgKG1ldGhvZE5hbWUpIHtcclxuICAgICAgICAgIGxldCBoYW5kbGVyQ3R4ID0gdGhpcy4kdm07XHJcbiAgICAgICAgICBpZiAoaGFuZGxlckN0eC4kb3B0aW9ucy5nZW5lcmljKSB7IC8vIG1wLXdlaXhpbixtcC10b3V0aWFvIOaKveixoeiKgueCueaooeaLnyBzY29wZWQgc2xvdHNcclxuICAgICAgICAgICAgaGFuZGxlckN0eCA9IGdldENvbnRleHRWbShoYW5kbGVyQ3R4KSB8fCBoYW5kbGVyQ3R4O1xyXG4gICAgICAgICAgfVxyXG4gICAgICAgICAgaWYgKG1ldGhvZE5hbWUgPT09ICckZW1pdCcpIHtcclxuICAgICAgICAgICAgaGFuZGxlckN0eC4kZW1pdC5hcHBseShoYW5kbGVyQ3R4LFxyXG4gICAgICAgICAgICAgIHByb2Nlc3NFdmVudEFyZ3MoXHJcbiAgICAgICAgICAgICAgICB0aGlzLiR2bSxcclxuICAgICAgICAgICAgICAgIGV2ZW50LFxyXG4gICAgICAgICAgICAgICAgZXZlbnRBcnJheVsxXSxcclxuICAgICAgICAgICAgICAgIGV2ZW50QXJyYXlbMl0sXHJcbiAgICAgICAgICAgICAgICBpc0N1c3RvbSxcclxuICAgICAgICAgICAgICAgIG1ldGhvZE5hbWVcclxuICAgICAgICAgICAgICApKTtcclxuICAgICAgICAgICAgcmV0dXJuXHJcbiAgICAgICAgICB9XHJcbiAgICAgICAgICBjb25zdCBoYW5kbGVyID0gaGFuZGxlckN0eFttZXRob2ROYW1lXTtcclxuICAgICAgICAgIGlmICghaXNGbihoYW5kbGVyKSkge1xyXG4gICAgICAgICAgICB0aHJvdyBuZXcgRXJyb3IoYCBfdm0uJHttZXRob2ROYW1lfSBpcyBub3QgYSBmdW5jdGlvbmApXHJcbiAgICAgICAgICB9XHJcbiAgICAgICAgICBpZiAoaXNPbmNlKSB7XHJcbiAgICAgICAgICAgIGlmIChoYW5kbGVyLm9uY2UpIHtcclxuICAgICAgICAgICAgICByZXR1cm5cclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICBoYW5kbGVyLm9uY2UgPSB0cnVlO1xyXG4gICAgICAgICAgfVxyXG4gICAgICAgICAgbGV0IHBhcmFtcyA9IHByb2Nlc3NFdmVudEFyZ3MoXHJcbiAgICAgICAgICAgIHRoaXMuJHZtLFxyXG4gICAgICAgICAgICBldmVudCxcclxuICAgICAgICAgICAgZXZlbnRBcnJheVsxXSxcclxuICAgICAgICAgICAgZXZlbnRBcnJheVsyXSxcclxuICAgICAgICAgICAgaXNDdXN0b20sXHJcbiAgICAgICAgICAgIG1ldGhvZE5hbWVcclxuICAgICAgICAgICk7XHJcbiAgICAgICAgICBwYXJhbXMgPSBBcnJheS5pc0FycmF5KHBhcmFtcykgPyBwYXJhbXMgOiBbXTtcclxuICAgICAgICAgIC8vIOWPguaVsOWwvumDqOWinuWKoOWOn+Wni+S6i+S7tuWvueixoeeUqOS6juWkjeadguihqOi+vuW8j+WGheiOt+WPlumineWkluaVsOaNrlxyXG4gICAgICAgICAgaWYgKC89XFxzKlxcUytcXC5ldmVudFBhcmFtc1xccypcXHxcXHxcXHMqXFxTK1xcW1snXCJdZXZlbnQtcGFyYW1zWydcIl1cXF0vLnRlc3QoaGFuZGxlci50b1N0cmluZygpKSkge1xyXG4gICAgICAgICAgICAvLyBlc2xpbnQtZGlzYWJsZS1uZXh0LWxpbmUgbm8tc3BhcnNlLWFycmF5c1xyXG4gICAgICAgICAgICBwYXJhbXMgPSBwYXJhbXMuY29uY2F0KFssICwgLCAsICwgLCAsICwgLCAsIGV2ZW50XSk7XHJcbiAgICAgICAgICB9XHJcbiAgICAgICAgICByZXQucHVzaChoYW5kbGVyLmFwcGx5KGhhbmRsZXJDdHgsIHBhcmFtcykpO1xyXG4gICAgICAgIH1cclxuICAgICAgfSk7XHJcbiAgICB9XHJcbiAgfSk7XHJcblxyXG4gIGlmIChcclxuICAgIGV2ZW50VHlwZSA9PT0gJ2lucHV0JyAmJlxyXG4gICAgcmV0Lmxlbmd0aCA9PT0gMSAmJlxyXG4gICAgdHlwZW9mIHJldFswXSAhPT0gJ3VuZGVmaW5lZCdcclxuICApIHtcclxuICAgIHJldHVybiByZXRbMF1cclxuICB9XHJcbn1cclxuXHJcbmNvbnN0IGhvb2tzID0gW1xyXG4gICdvblNob3cnLFxyXG4gICdvbkhpZGUnLFxyXG4gICdvbkVycm9yJyxcclxuICAnb25QYWdlTm90Rm91bmQnLFxyXG4gICdvblRoZW1lQ2hhbmdlJyxcclxuICAnb25VbmhhbmRsZWRSZWplY3Rpb24nXHJcbl07XHJcblxyXG5mdW5jdGlvbiBpbml0RXZlbnRDaGFubmVsJDEgKCkge1xyXG4gIFZ1ZS5wcm90b3R5cGUuZ2V0T3BlbmVyRXZlbnRDaGFubmVsID0gZnVuY3Rpb24gKCkge1xyXG4gICAgaWYgKCF0aGlzLl9fZXZlbnRDaGFubmVsX18pIHtcclxuICAgICAgdGhpcy5fX2V2ZW50Q2hhbm5lbF9fID0gbmV3IEV2ZW50Q2hhbm5lbCgpO1xyXG4gICAgfVxyXG4gICAgcmV0dXJuIHRoaXMuX19ldmVudENoYW5uZWxfX1xyXG4gIH07XHJcbiAgY29uc3QgY2FsbEhvb2sgPSBWdWUucHJvdG90eXBlLl9fY2FsbF9ob29rO1xyXG4gIFZ1ZS5wcm90b3R5cGUuX19jYWxsX2hvb2sgPSBmdW5jdGlvbiAoaG9vaywgYXJncykge1xyXG4gICAgaWYgKGhvb2sgPT09ICdvbkxvYWQnICYmIGFyZ3MgJiYgYXJncy5fX2lkX18pIHtcclxuICAgICAgdGhpcy5fX2V2ZW50Q2hhbm5lbF9fID0gZ2V0RXZlbnRDaGFubmVsKGFyZ3MuX19pZF9fKTtcclxuICAgICAgZGVsZXRlIGFyZ3MuX19pZF9fO1xyXG4gICAgfVxyXG4gICAgcmV0dXJuIGNhbGxIb29rLmNhbGwodGhpcywgaG9vaywgYXJncylcclxuICB9O1xyXG59XHJcblxyXG5mdW5jdGlvbiBpbml0U2NvcGVkU2xvdHNQYXJhbXMgKCkge1xyXG4gIGNvbnN0IGNlbnRlciA9IHt9O1xyXG4gIGNvbnN0IHBhcmVudHMgPSB7fTtcclxuXHJcbiAgVnVlLnByb3RvdHlwZS4kaGFzU2NvcGVkU2xvdHNQYXJhbXMgPSBmdW5jdGlvbiAodnVlSWQpIHtcclxuICAgIGNvbnN0IGhhcyA9IGNlbnRlclt2dWVJZF07XHJcbiAgICBpZiAoIWhhcykge1xyXG4gICAgICBwYXJlbnRzW3Z1ZUlkXSA9IHRoaXM7XHJcbiAgICAgIHRoaXMuJG9uKCdob29rOmRlc3Ryb3llZCcsICgpID0+IHtcclxuICAgICAgICBkZWxldGUgcGFyZW50c1t2dWVJZF07XHJcbiAgICAgIH0pO1xyXG4gICAgfVxyXG4gICAgcmV0dXJuIGhhc1xyXG4gIH07XHJcblxyXG4gIFZ1ZS5wcm90b3R5cGUuJGdldFNjb3BlZFNsb3RzUGFyYW1zID0gZnVuY3Rpb24gKHZ1ZUlkLCBuYW1lLCBrZXkpIHtcclxuICAgIGNvbnN0IGRhdGEgPSBjZW50ZXJbdnVlSWRdO1xyXG4gICAgaWYgKGRhdGEpIHtcclxuICAgICAgY29uc3Qgb2JqZWN0ID0gZGF0YVtuYW1lXSB8fCB7fTtcclxuICAgICAgcmV0dXJuIGtleSA/IG9iamVjdFtrZXldIDogb2JqZWN0XHJcbiAgICB9IGVsc2Uge1xyXG4gICAgICBwYXJlbnRzW3Z1ZUlkXSA9IHRoaXM7XHJcbiAgICAgIHRoaXMuJG9uKCdob29rOmRlc3Ryb3llZCcsICgpID0+IHtcclxuICAgICAgICBkZWxldGUgcGFyZW50c1t2dWVJZF07XHJcbiAgICAgIH0pO1xyXG4gICAgfVxyXG4gIH07XHJcblxyXG4gIFZ1ZS5wcm90b3R5cGUuJHNldFNjb3BlZFNsb3RzUGFyYW1zID0gZnVuY3Rpb24gKG5hbWUsIHZhbHVlKSB7XHJcbiAgICBjb25zdCB2dWVJZHMgPSB0aGlzLiRvcHRpb25zLnByb3BzRGF0YS52dWVJZDtcclxuICAgIGlmICh2dWVJZHMpIHtcclxuICAgICAgY29uc3QgdnVlSWQgPSB2dWVJZHMuc3BsaXQoJywnKVswXTtcclxuICAgICAgY29uc3Qgb2JqZWN0ID0gY2VudGVyW3Z1ZUlkXSA9IGNlbnRlclt2dWVJZF0gfHwge307XHJcbiAgICAgIG9iamVjdFtuYW1lXSA9IHZhbHVlO1xyXG4gICAgICBpZiAocGFyZW50c1t2dWVJZF0pIHtcclxuICAgICAgICBwYXJlbnRzW3Z1ZUlkXS4kZm9yY2VVcGRhdGUoKTtcclxuICAgICAgfVxyXG4gICAgfVxyXG4gIH07XHJcblxyXG4gIFZ1ZS5taXhpbih7XHJcbiAgICBkZXN0cm95ZWQgKCkge1xyXG4gICAgICBjb25zdCBwcm9wc0RhdGEgPSB0aGlzLiRvcHRpb25zLnByb3BzRGF0YTtcclxuICAgICAgY29uc3QgdnVlSWQgPSBwcm9wc0RhdGEgJiYgcHJvcHNEYXRhLnZ1ZUlkO1xyXG4gICAgICBpZiAodnVlSWQpIHtcclxuICAgICAgICBkZWxldGUgY2VudGVyW3Z1ZUlkXTtcclxuICAgICAgICBkZWxldGUgcGFyZW50c1t2dWVJZF07XHJcbiAgICAgIH1cclxuICAgIH1cclxuICB9KTtcclxufVxyXG5cclxuZnVuY3Rpb24gcGFyc2VCYXNlQXBwICh2bSwge1xyXG4gIG1vY2tzLFxyXG4gIGluaXRSZWZzXHJcbn0pIHtcclxuICBpbml0RXZlbnRDaGFubmVsJDEoKTtcclxuICB7XHJcbiAgICBpbml0U2NvcGVkU2xvdHNQYXJhbXMoKTtcclxuICB9XHJcbiAgaWYgKHZtLiRvcHRpb25zLnN0b3JlKSB7XHJcbiAgICBWdWUucHJvdG90eXBlLiRzdG9yZSA9IHZtLiRvcHRpb25zLnN0b3JlO1xyXG4gIH1cclxuICB1bmlJZE1peGluKFZ1ZSk7XHJcblxyXG4gIFZ1ZS5wcm90b3R5cGUubXBIb3N0ID0gXCJtcC10b3V0aWFvXCI7XHJcblxyXG4gIFZ1ZS5taXhpbih7XHJcbiAgICBiZWZvcmVDcmVhdGUgKCkge1xyXG4gICAgICBpZiAoIXRoaXMuJG9wdGlvbnMubXBUeXBlKSB7XHJcbiAgICAgICAgcmV0dXJuXHJcbiAgICAgIH1cclxuXHJcbiAgICAgIHRoaXMubXBUeXBlID0gdGhpcy4kb3B0aW9ucy5tcFR5cGU7XHJcblxyXG4gICAgICB0aGlzLiRtcCA9IHtcclxuICAgICAgICBkYXRhOiB7fSxcclxuICAgICAgICBbdGhpcy5tcFR5cGVdOiB0aGlzLiRvcHRpb25zLm1wSW5zdGFuY2VcclxuICAgICAgfTtcclxuXHJcbiAgICAgIHRoaXMuJHNjb3BlID0gdGhpcy4kb3B0aW9ucy5tcEluc3RhbmNlO1xyXG5cclxuICAgICAgZGVsZXRlIHRoaXMuJG9wdGlvbnMubXBUeXBlO1xyXG4gICAgICBkZWxldGUgdGhpcy4kb3B0aW9ucy5tcEluc3RhbmNlO1xyXG4gICAgICBpZiAodGhpcy5tcFR5cGUgPT09ICdwYWdlJyAmJiB0eXBlb2YgZ2V0QXBwID09PSAnZnVuY3Rpb24nKSB7IC8vIGhhY2sgdnVlLWkxOG5cclxuICAgICAgICBjb25zdCBhcHAgPSBnZXRBcHAoKTtcclxuICAgICAgICBpZiAoYXBwLiR2bSAmJiBhcHAuJHZtLiRpMThuKSB7XHJcbiAgICAgICAgICB0aGlzLl9pMThuID0gYXBwLiR2bS4kaTE4bjtcclxuICAgICAgICB9XHJcbiAgICAgIH1cclxuICAgICAgaWYgKHRoaXMubXBUeXBlICE9PSAnYXBwJykge1xyXG4gICAgICAgIGluaXRSZWZzKHRoaXMpO1xyXG4gICAgICAgIGluaXRNb2Nrcyh0aGlzLCBtb2Nrcyk7XHJcbiAgICAgIH1cclxuICAgIH1cclxuICB9KTtcclxuXHJcbiAgY29uc3QgYXBwT3B0aW9ucyA9IHtcclxuICAgIG9uTGF1bmNoIChhcmdzKSB7XHJcbiAgICAgIGlmICh0aGlzLiR2bSkgeyAvLyDlt7Lnu4/liJ3lp4vljJbov4fkuobvvIzkuLvopoHmmK/kuLrkuobnmb7luqbvvIznmb7luqYgb25TaG93IOWcqCBvbkxhdW5jaCDkuYvliY1cclxuICAgICAgICByZXR1cm5cclxuICAgICAgfVxyXG5cclxuICAgICAgdGhpcy4kdm0gPSB2bTtcclxuXHJcbiAgICAgIHRoaXMuJHZtLiRtcCA9IHtcclxuICAgICAgICBhcHA6IHRoaXNcclxuICAgICAgfTtcclxuXHJcbiAgICAgIHRoaXMuJHZtLiRzY29wZSA9IHRoaXM7XHJcbiAgICAgIC8vIHZtIOS4iuS5n+aMgui9vSBnbG9iYWxEYXRhXHJcbiAgICAgIHRoaXMuJHZtLmdsb2JhbERhdGEgPSB0aGlzLmdsb2JhbERhdGE7XHJcblxyXG4gICAgICB0aGlzLiR2bS5faXNNb3VudGVkID0gdHJ1ZTtcclxuICAgICAgdGhpcy4kdm0uX19jYWxsX2hvb2soJ21vdW50ZWQnLCBhcmdzKTtcclxuXHJcbiAgICAgIHRoaXMuJHZtLl9fY2FsbF9ob29rKCdvbkxhdW5jaCcsIGFyZ3MpO1xyXG4gICAgfVxyXG4gIH07XHJcblxyXG4gIC8vIOWFvOWuueaXp+eJiOacrCBnbG9iYWxEYXRhXHJcbiAgYXBwT3B0aW9ucy5nbG9iYWxEYXRhID0gdm0uJG9wdGlvbnMuZ2xvYmFsRGF0YSB8fCB7fTtcclxuICAvLyDlsIYgbWV0aG9kcyDkuK3nmoTmlrnms5XmjILlnKggZ2V0QXBwKCkg5LitXHJcbiAgY29uc3QgbWV0aG9kcyA9IHZtLiRvcHRpb25zLm1ldGhvZHM7XHJcbiAgaWYgKG1ldGhvZHMpIHtcclxuICAgIE9iamVjdC5rZXlzKG1ldGhvZHMpLmZvckVhY2gobmFtZSA9PiB7XHJcbiAgICAgIGFwcE9wdGlvbnNbbmFtZV0gPSBtZXRob2RzW25hbWVdO1xyXG4gICAgfSk7XHJcbiAgfVxyXG5cclxuICBpbml0QXBwTG9jYWxlKFZ1ZSwgdm0sIG5vcm1hbGl6ZUxvY2FsZSh0dC5nZXRTeXN0ZW1JbmZvU3luYygpLmxhbmd1YWdlKSB8fCBMT0NBTEVfRU4pO1xyXG5cclxuICBpbml0SG9va3MoYXBwT3B0aW9ucywgaG9va3MpO1xyXG5cclxuICByZXR1cm4gYXBwT3B0aW9uc1xyXG59XHJcblxyXG5mdW5jdGlvbiBmaW5kVm1CeVZ1ZUlkICh2bSwgdnVlUGlkKSB7XHJcbiAgY29uc3QgJGNoaWxkcmVuID0gdm0uJGNoaWxkcmVuO1xyXG4gIC8vIOS8mOWFiOafpeaJvuebtOWxnijlj43lkJHmn6Xmib46aHR0cHM6Ly9naXRodWIuY29tL2RjbG91ZGlvL3VuaS1hcHAvaXNzdWVzLzEyMDApXHJcbiAgZm9yIChsZXQgaSA9ICRjaGlsZHJlbi5sZW5ndGggLSAxOyBpID49IDA7IGktLSkge1xyXG4gICAgY29uc3QgY2hpbGRWbSA9ICRjaGlsZHJlbltpXTtcclxuICAgIGlmIChjaGlsZFZtLiRzY29wZS5fJHZ1ZUlkID09PSB2dWVQaWQpIHtcclxuICAgICAgcmV0dXJuIGNoaWxkVm1cclxuICAgIH1cclxuICB9XHJcbiAgLy8g5Y+N5ZCR6YCS5b2S5p+l5om+XHJcbiAgbGV0IHBhcmVudFZtO1xyXG4gIGZvciAobGV0IGkgPSAkY2hpbGRyZW4ubGVuZ3RoIC0gMTsgaSA+PSAwOyBpLS0pIHtcclxuICAgIHBhcmVudFZtID0gZmluZFZtQnlWdWVJZCgkY2hpbGRyZW5baV0sIHZ1ZVBpZCk7XHJcbiAgICBpZiAocGFyZW50Vm0pIHtcclxuICAgICAgcmV0dXJuIHBhcmVudFZtXHJcbiAgICB9XHJcbiAgfVxyXG59XHJcblxyXG5mdW5jdGlvbiBpbml0QmVoYXZpb3IgKG9wdGlvbnMpIHtcclxuICByZXR1cm4gQmVoYXZpb3Iob3B0aW9ucylcclxufVxyXG5cclxuZnVuY3Rpb24gaGFuZGxlTGluayAoZXZlbnQpIHtcclxuICBjb25zdCB7XHJcbiAgICB2dWVQaWQsXHJcbiAgICB2dWVPcHRpb25zXHJcbiAgfSA9IGV2ZW50LmRldGFpbCB8fCBldmVudC52YWx1ZTsgLy8gZGV0YWlsIOaYr+W+ruS/oSx2YWx1ZSDmmK/nmb7luqYoZGlwYXRjaClcclxuXHJcbiAgbGV0IHBhcmVudFZtO1xyXG5cclxuICBpZiAodnVlUGlkKSB7XHJcbiAgICBwYXJlbnRWbSA9IGZpbmRWbUJ5VnVlSWQodGhpcy4kdm0sIHZ1ZVBpZCk7XHJcbiAgfVxyXG5cclxuICBpZiAoIXBhcmVudFZtKSB7XHJcbiAgICBwYXJlbnRWbSA9IHRoaXMuJHZtO1xyXG4gIH1cclxuXHJcbiAgdnVlT3B0aW9ucy5wYXJlbnQgPSBwYXJlbnRWbTtcclxufVxyXG5cclxuY29uc3QgbW9ja3MgPSBbJ19fcm91dGVfXycsICdfX3dlYnZpZXdJZF9fJywgJ19fbm9kZWlkX18nLCAnX19ub2RlSWRfXyddO1xyXG5cclxuZnVuY3Rpb24gaXNQYWdlICgpIHtcclxuICByZXR1cm4gdGhpcy5fX25vZGVpZF9fID09PSAwIHx8IHRoaXMuX19ub2RlSWRfXyA9PT0gMFxyXG59XHJcblxyXG5mdW5jdGlvbiBpbml0UmVmcyAodm0pIHtcclxuICBjb25zdCBtcEluc3RhbmNlID0gdm0uJHNjb3BlO1xyXG4gIC8qIGVzbGludC1kaXNhYmxlIG5vLXVuZGVmICovXHJcbiAgY29uc3QgbWlub3JWZXJzaW9uID0gcGFyc2VJbnQodHQuZ2V0U3lzdGVtSW5mb1N5bmMoKS5TREtWZXJzaW9uLnNwbGl0KCcuJylbMV0pO1xyXG4gIGlmIChtaW5vclZlcnNpb24gPiAxNikge1xyXG4gICAgT2JqZWN0LmRlZmluZVByb3BlcnR5KHZtLCAnJHJlZnMnLCB7XHJcbiAgICAgIGdldCAoKSB7XHJcbiAgICAgICAgY29uc3QgJHJlZnMgPSB7fTtcclxuICAgICAgICBjb25zdCBjb21wb25lbnRzID0gbXBJbnN0YW5jZS5zZWxlY3RBbGxDb21wb25lbnRzKCcudnVlLXJlZicpO1xyXG4gICAgICAgIGNvbXBvbmVudHMuZm9yRWFjaChjb21wb25lbnQgPT4ge1xyXG4gICAgICAgICAgY29uc3QgcmVmID0gY29tcG9uZW50LmRhdGFzZXQucmVmO1xyXG4gICAgICAgICAgJHJlZnNbcmVmXSA9IGNvbXBvbmVudC4kdm0gfHwgY29tcG9uZW50O1xyXG4gICAgICAgIH0pO1xyXG4gICAgICAgIGNvbnN0IGZvckNvbXBvbmVudHMgPSBtcEluc3RhbmNlLnNlbGVjdEFsbENvbXBvbmVudHMoJy52dWUtcmVmLWluLWZvcicpO1xyXG4gICAgICAgIGZvckNvbXBvbmVudHMuZm9yRWFjaChjb21wb25lbnQgPT4ge1xyXG4gICAgICAgICAgY29uc3QgcmVmID0gY29tcG9uZW50LmRhdGFzZXQucmVmO1xyXG4gICAgICAgICAgaWYgKCEkcmVmc1tyZWZdKSB7XHJcbiAgICAgICAgICAgICRyZWZzW3JlZl0gPSBbXTtcclxuICAgICAgICAgIH1cclxuICAgICAgICAgICRyZWZzW3JlZl0ucHVzaChjb21wb25lbnQuJHZtIHx8IGNvbXBvbmVudCk7XHJcbiAgICAgICAgfSk7XHJcbiAgICAgICAgcmV0dXJuICRyZWZzXHJcbiAgICAgIH1cclxuICAgIH0pO1xyXG4gIH0gZWxzZSB7XHJcbiAgICBtcEluc3RhbmNlLnNlbGVjdEFsbENvbXBvbmVudHMoJy52dWUtcmVmJywgKGNvbXBvbmVudHMpID0+IHtcclxuICAgICAgY29tcG9uZW50cy5mb3JFYWNoKGNvbXBvbmVudCA9PiB7XHJcbiAgICAgICAgY29uc3QgcmVmID0gY29tcG9uZW50LmRhdGFzZXQucmVmO1xyXG4gICAgICAgIHZtLiRyZWZzW3JlZl0gPSBjb21wb25lbnQuJHZtIHx8IGNvbXBvbmVudDtcclxuICAgICAgfSk7XHJcbiAgICB9KTtcclxuICAgIG1wSW5zdGFuY2Uuc2VsZWN0QWxsQ29tcG9uZW50cygnLnZ1ZS1yZWYtaW4tZm9yJywgKGZvckNvbXBvbmVudHMpID0+IHtcclxuICAgICAgZm9yQ29tcG9uZW50cy5mb3JFYWNoKGNvbXBvbmVudCA9PiB7XHJcbiAgICAgICAgY29uc3QgcmVmID0gY29tcG9uZW50LmRhdGFzZXQucmVmO1xyXG4gICAgICAgIGlmICghdm0uJHJlZnNbcmVmXSkge1xyXG4gICAgICAgICAgdm0uJHJlZnNbcmVmXSA9IFtdO1xyXG4gICAgICAgIH1cclxuICAgICAgICB2bS4kcmVmc1tyZWZdLnB1c2goY29tcG9uZW50LiR2bSB8fCBjb21wb25lbnQpO1xyXG4gICAgICB9KTtcclxuICAgIH0pO1xyXG4gIH1cclxufVxyXG5cclxuY29uc3QgaW5zdGFuY2VzID0gT2JqZWN0LmNyZWF0ZShudWxsKTtcclxuXHJcbmZ1bmN0aW9uIGluaXRSZWxhdGlvbiAoe1xyXG4gIHZ1ZVBpZCxcclxuICBtcEluc3RhbmNlXHJcbn0pIHtcclxuICAvLyDlpLTmnaEgdHJpZ2dlckV2ZW50IOWQju+8jOaOpeaUtuS6i+S7tuaXtuacuueJueWIq+aZmu+8jOW3sue7j+WIsOS6hiByZWFkeSDkuYvlkI5cclxuICBjb25zdCBub2RlSWQgPSAobXBJbnN0YW5jZS5fX25vZGVJZF9fIHx8IG1wSW5zdGFuY2UuX19ub2RlaWRfXykgKyAnJztcclxuICBjb25zdCB3ZWJ2aWV3SWQgPSBtcEluc3RhbmNlLl9fd2Vidmlld0lkX18gKyAnJztcclxuXHJcbiAgaW5zdGFuY2VzW3dlYnZpZXdJZCArICdfJyArIG5vZGVJZF0gPSBtcEluc3RhbmNlLiR2bTtcclxuXHJcbiAgdGhpcy50cmlnZ2VyRXZlbnQoJ19fbCcsIHtcclxuICAgIHZ1ZVBpZCxcclxuICAgIG5vZGVJZCxcclxuICAgIHdlYnZpZXdJZFxyXG4gIH0pO1xyXG59XHJcblxyXG5mdW5jdGlvbiBoYW5kbGVMaW5rJDEgKHtcclxuICBkZXRhaWw6IHtcclxuICAgIHZ1ZVBpZCxcclxuICAgIG5vZGVJZCxcclxuICAgIHdlYnZpZXdJZFxyXG4gIH1cclxufSkge1xyXG4gIGNvbnN0IHZtID0gaW5zdGFuY2VzW3dlYnZpZXdJZCArICdfJyArIG5vZGVJZF07XHJcbiAgaWYgKCF2bSkge1xyXG4gICAgcmV0dXJuXHJcbiAgfVxyXG5cclxuICBsZXQgcGFyZW50Vm07XHJcblxyXG4gIGlmICh2dWVQaWQpIHtcclxuICAgIHBhcmVudFZtID0gZmluZFZtQnlWdWVJZCh0aGlzLiR2bSwgdnVlUGlkKTtcclxuICB9XHJcblxyXG4gIGlmICghcGFyZW50Vm0pIHtcclxuICAgIHBhcmVudFZtID0gdGhpcy4kdm07XHJcbiAgfVxyXG5cclxuICB2bS4kcGFyZW50ID0gcGFyZW50Vm07XHJcbiAgdm0uJHJvb3QgPSBwYXJlbnRWbS4kcm9vdDtcclxuICBwYXJlbnRWbS4kY2hpbGRyZW4ucHVzaCh2bSk7XHJcblxyXG4gIHZtLl9fY2FsbF9ob29rKCdjcmVhdGVkJyk7XHJcbiAgdm0uX19jYWxsX2hvb2soJ2JlZm9yZU1vdW50Jyk7XHJcbiAgdm0uX2lzTW91bnRlZCA9IHRydWU7XHJcbiAgdm0uX19jYWxsX2hvb2soJ21vdW50ZWQnKTtcclxuICB2bS5fX2NhbGxfaG9vaygnb25SZWFkeScpO1xyXG59XHJcblxyXG5mdW5jdGlvbiBwYXJzZUFwcCAodm0pIHtcclxuICBWdWUucHJvdG90eXBlLl8kZmFsbGJhY2sgPSB0cnVlOyAvLyDpmY3nuqfvvIjosIPmlbTljp8gdnVlIOeahOmDqOWIhueUn+WRveWRqOacn++8jOWmgiBjcmVhdGVk77yMYmVmb3JlTW91bnQsaW5qZWN0LHByb3ZpZGXvvIlcclxuXHJcbiAgVnVlLm1peGluKHtcclxuICAgIGNyZWF0ZWQgKCkgeyAvLyDlpITnkIYgaW5qZWN0aW9ucyzlpLTmnaEgdHJpZ2dlckV2ZW50IOaYr+W8guatpe+8jOS4lOinpuWPkeaXtuacuuW+iOaFou+8jOaVheW7tui/nyByZWxhdGlvbiDorr7nva5cclxuICAgICAgaWYgKHRoaXMubXBUeXBlICE9PSAnYXBwJykge1xyXG4gICAgICAgIGlmIChcclxuICAgICAgICAgIHRoaXMubXBUeXBlID09PSAncGFnZScgJiZcclxuICAgICAgICAgICAgICAgICAgICAhdGhpcy4kc2NvcGUucm91dGUgJiZcclxuICAgICAgICAgICAgICAgICAgICB0aGlzLiRzY29wZS5fX3JvdXRlX19cclxuICAgICAgICApIHtcclxuICAgICAgICAgIHRoaXMuJHNjb3BlLnJvdXRlID0gdGhpcy4kc2NvcGUuX19yb3V0ZV9fO1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgaW5pdFJlZnModGhpcyk7XHJcblxyXG4gICAgICAgIHRoaXMuX19pbml0X2luamVjdGlvbnModGhpcyk7XHJcbiAgICAgICAgdGhpcy5fX2luaXRfcHJvdmlkZSh0aGlzKTtcclxuICAgICAgfVxyXG4gICAgfVxyXG4gIH0pO1xyXG5cclxuICByZXR1cm4gcGFyc2VCYXNlQXBwKHZtLCB7XHJcbiAgICBtb2NrcyxcclxuICAgIGluaXRSZWZzOiBmdW5jdGlvbiAoKSB7fSAvLyBhdHRhY2hlZCDml7bvvIzlj6/og73mn6Xor6LkuI3liLBcclxuICB9KVxyXG59XHJcblxyXG5mdW5jdGlvbiBjcmVhdGVBcHAgKHZtKSB7XHJcbiAgQXBwKHBhcnNlQXBwKHZtKSk7XHJcbiAgcmV0dXJuIHZtXHJcbn1cclxuXHJcbmNvbnN0IGVuY29kZVJlc2VydmVSRSA9IC9bIScoKSpdL2c7XHJcbmNvbnN0IGVuY29kZVJlc2VydmVSZXBsYWNlciA9IGMgPT4gJyUnICsgYy5jaGFyQ29kZUF0KDApLnRvU3RyaW5nKDE2KTtcclxuY29uc3QgY29tbWFSRSA9IC8lMkMvZztcclxuXHJcbi8vIGZpeGVkIGVuY29kZVVSSUNvbXBvbmVudCB3aGljaCBpcyBtb3JlIGNvbmZvcm1hbnQgdG8gUkZDMzk4NjpcclxuLy8gLSBlc2NhcGVzIFshJygpKl1cclxuLy8gLSBwcmVzZXJ2ZSBjb21tYXNcclxuY29uc3QgZW5jb2RlID0gc3RyID0+IGVuY29kZVVSSUNvbXBvbmVudChzdHIpXHJcbiAgLnJlcGxhY2UoZW5jb2RlUmVzZXJ2ZVJFLCBlbmNvZGVSZXNlcnZlUmVwbGFjZXIpXHJcbiAgLnJlcGxhY2UoY29tbWFSRSwgJywnKTtcclxuXHJcbmZ1bmN0aW9uIHN0cmluZ2lmeVF1ZXJ5IChvYmosIGVuY29kZVN0ciA9IGVuY29kZSkge1xyXG4gIGNvbnN0IHJlcyA9IG9iaiA/IE9iamVjdC5rZXlzKG9iaikubWFwKGtleSA9PiB7XHJcbiAgICBjb25zdCB2YWwgPSBvYmpba2V5XTtcclxuXHJcbiAgICBpZiAodmFsID09PSB1bmRlZmluZWQpIHtcclxuICAgICAgcmV0dXJuICcnXHJcbiAgICB9XHJcblxyXG4gICAgaWYgKHZhbCA9PT0gbnVsbCkge1xyXG4gICAgICByZXR1cm4gZW5jb2RlU3RyKGtleSlcclxuICAgIH1cclxuXHJcbiAgICBpZiAoQXJyYXkuaXNBcnJheSh2YWwpKSB7XHJcbiAgICAgIGNvbnN0IHJlc3VsdCA9IFtdO1xyXG4gICAgICB2YWwuZm9yRWFjaCh2YWwyID0+IHtcclxuICAgICAgICBpZiAodmFsMiA9PT0gdW5kZWZpbmVkKSB7XHJcbiAgICAgICAgICByZXR1cm5cclxuICAgICAgICB9XHJcbiAgICAgICAgaWYgKHZhbDIgPT09IG51bGwpIHtcclxuICAgICAgICAgIHJlc3VsdC5wdXNoKGVuY29kZVN0cihrZXkpKTtcclxuICAgICAgICB9IGVsc2Uge1xyXG4gICAgICAgICAgcmVzdWx0LnB1c2goZW5jb2RlU3RyKGtleSkgKyAnPScgKyBlbmNvZGVTdHIodmFsMikpO1xyXG4gICAgICAgIH1cclxuICAgICAgfSk7XHJcbiAgICAgIHJldHVybiByZXN1bHQuam9pbignJicpXHJcbiAgICB9XHJcblxyXG4gICAgcmV0dXJuIGVuY29kZVN0cihrZXkpICsgJz0nICsgZW5jb2RlU3RyKHZhbClcclxuICB9KS5maWx0ZXIoeCA9PiB4Lmxlbmd0aCA+IDApLmpvaW4oJyYnKSA6IG51bGw7XHJcbiAgcmV0dXJuIHJlcyA/IGA/JHtyZXN9YCA6ICcnXHJcbn1cclxuXHJcbmZ1bmN0aW9uIHBhcnNlQmFzZUNvbXBvbmVudCAodnVlQ29tcG9uZW50T3B0aW9ucywge1xyXG4gIGlzUGFnZSxcclxuICBpbml0UmVsYXRpb25cclxufSA9IHt9KSB7XHJcbiAgY29uc3QgW1Z1ZUNvbXBvbmVudCwgdnVlT3B0aW9uc10gPSBpbml0VnVlQ29tcG9uZW50KFZ1ZSwgdnVlQ29tcG9uZW50T3B0aW9ucyk7XHJcblxyXG4gIGNvbnN0IG9wdGlvbnMgPSB7XHJcbiAgICBtdWx0aXBsZVNsb3RzOiB0cnVlLFxyXG4gICAgYWRkR2xvYmFsQ2xhc3M6IHRydWUsXHJcbiAgICAuLi4odnVlT3B0aW9ucy5vcHRpb25zIHx8IHt9KVxyXG4gIH07XHJcblxyXG4gIGNvbnN0IGNvbXBvbmVudE9wdGlvbnMgPSB7XHJcbiAgICBvcHRpb25zLFxyXG4gICAgZGF0YTogaW5pdERhdGEodnVlT3B0aW9ucywgVnVlLnByb3RvdHlwZSksXHJcbiAgICBiZWhhdmlvcnM6IGluaXRCZWhhdmlvcnModnVlT3B0aW9ucywgaW5pdEJlaGF2aW9yKSxcclxuICAgIHByb3BlcnRpZXM6IGluaXRQcm9wZXJ0aWVzKHZ1ZU9wdGlvbnMucHJvcHMsIGZhbHNlLCB2dWVPcHRpb25zLl9fZmlsZSksXHJcbiAgICBsaWZldGltZXM6IHtcclxuICAgICAgYXR0YWNoZWQgKCkge1xyXG4gICAgICAgIGNvbnN0IHByb3BlcnRpZXMgPSB0aGlzLnByb3BlcnRpZXM7XHJcblxyXG4gICAgICAgIGNvbnN0IG9wdGlvbnMgPSB7XHJcbiAgICAgICAgICBtcFR5cGU6IGlzUGFnZS5jYWxsKHRoaXMpID8gJ3BhZ2UnIDogJ2NvbXBvbmVudCcsXHJcbiAgICAgICAgICBtcEluc3RhbmNlOiB0aGlzLFxyXG4gICAgICAgICAgcHJvcHNEYXRhOiBwcm9wZXJ0aWVzXHJcbiAgICAgICAgfTtcclxuXHJcbiAgICAgICAgaW5pdFZ1ZUlkcyhwcm9wZXJ0aWVzLnZ1ZUlkLCB0aGlzKTtcclxuXHJcbiAgICAgICAgLy8g5aSE55CG54i25a2Q5YWz57O7XHJcbiAgICAgICAgaW5pdFJlbGF0aW9uLmNhbGwodGhpcywge1xyXG4gICAgICAgICAgdnVlUGlkOiB0aGlzLl8kdnVlUGlkLFxyXG4gICAgICAgICAgdnVlT3B0aW9uczogb3B0aW9uc1xyXG4gICAgICAgIH0pO1xyXG5cclxuICAgICAgICAvLyDliJ3lp4vljJYgdnVlIOWunuS+i1xyXG4gICAgICAgIHRoaXMuJHZtID0gbmV3IFZ1ZUNvbXBvbmVudChvcHRpb25zKTtcclxuXHJcbiAgICAgICAgLy8g5aSE55CGJHNsb3RzLCRzY29wZWRTbG90c++8iOaaguS4jeaUr+aMgeWKqOaAgeWPmOWMliRzbG90c++8iVxyXG4gICAgICAgIGluaXRTbG90cyh0aGlzLiR2bSwgcHJvcGVydGllcy52dWVTbG90cyk7XHJcblxyXG4gICAgICAgIC8vIOinpuWPkemmluasoSBzZXREYXRhXHJcbiAgICAgICAgdGhpcy4kdm0uJG1vdW50KCk7XHJcbiAgICAgIH0sXHJcbiAgICAgIHJlYWR5ICgpIHtcclxuICAgICAgICAvLyDlvZPnu4Tku7YgcHJvcHMg6buY6K6k5YC85Li6IHRydWXvvIzliJ3lp4vljJbml7bkvKDlhaUgZmFsc2Ug5Lya5a+86Ie0IGNyZWF0ZWQscmVhZHkg6Kem5Y+RLCDkvYYgYXR0YWNoZWQg5LiN6Kem5Y+RXHJcbiAgICAgICAgLy8gaHR0cHM6Ly9kZXZlbG9wZXJzLndlaXhpbi5xcS5jb20vY29tbXVuaXR5L2RldmVsb3AvZG9jLzAwMDY2YWUyODQ0Y2MwZjhlYjg4M2UyYTU1NzgwMFxyXG4gICAgICAgIGlmICh0aGlzLiR2bSkge1xyXG4gICAgICAgICAgdGhpcy4kdm0uX2lzTW91bnRlZCA9IHRydWU7XHJcbiAgICAgICAgICB0aGlzLiR2bS5fX2NhbGxfaG9vaygnbW91bnRlZCcpO1xyXG4gICAgICAgICAgdGhpcy4kdm0uX19jYWxsX2hvb2soJ29uUmVhZHknKTtcclxuICAgICAgICB9XHJcbiAgICAgIH0sXHJcbiAgICAgIGRldGFjaGVkICgpIHtcclxuICAgICAgICB0aGlzLiR2bSAmJiB0aGlzLiR2bS4kZGVzdHJveSgpO1xyXG4gICAgICB9XHJcbiAgICB9LFxyXG4gICAgcGFnZUxpZmV0aW1lczoge1xyXG4gICAgICBzaG93IChhcmdzKSB7XHJcbiAgICAgICAgdGhpcy4kdm0gJiYgdGhpcy4kdm0uX19jYWxsX2hvb2soJ29uUGFnZVNob3cnLCBhcmdzKTtcclxuICAgICAgfSxcclxuICAgICAgaGlkZSAoKSB7XHJcbiAgICAgICAgdGhpcy4kdm0gJiYgdGhpcy4kdm0uX19jYWxsX2hvb2soJ29uUGFnZUhpZGUnKTtcclxuICAgICAgfSxcclxuICAgICAgcmVzaXplIChzaXplKSB7XHJcbiAgICAgICAgdGhpcy4kdm0gJiYgdGhpcy4kdm0uX19jYWxsX2hvb2soJ29uUGFnZVJlc2l6ZScsIHNpemUpO1xyXG4gICAgICB9XHJcbiAgICB9LFxyXG4gICAgbWV0aG9kczoge1xyXG4gICAgICBfX2w6IGhhbmRsZUxpbmssXHJcbiAgICAgIF9fZTogaGFuZGxlRXZlbnRcclxuICAgIH1cclxuICB9O1xyXG4gIC8vIGV4dGVybmFsQ2xhc3Nlc1xyXG4gIGlmICh2dWVPcHRpb25zLmV4dGVybmFsQ2xhc3Nlcykge1xyXG4gICAgY29tcG9uZW50T3B0aW9ucy5leHRlcm5hbENsYXNzZXMgPSB2dWVPcHRpb25zLmV4dGVybmFsQ2xhc3NlcztcclxuICB9XHJcblxyXG4gIGlmIChBcnJheS5pc0FycmF5KHZ1ZU9wdGlvbnMud3hzQ2FsbE1ldGhvZHMpKSB7XHJcbiAgICB2dWVPcHRpb25zLnd4c0NhbGxNZXRob2RzLmZvckVhY2goY2FsbE1ldGhvZCA9PiB7XHJcbiAgICAgIGNvbXBvbmVudE9wdGlvbnMubWV0aG9kc1tjYWxsTWV0aG9kXSA9IGZ1bmN0aW9uIChhcmdzKSB7XHJcbiAgICAgICAgcmV0dXJuIHRoaXMuJHZtW2NhbGxNZXRob2RdKGFyZ3MpXHJcbiAgICAgIH07XHJcbiAgICB9KTtcclxuICB9XHJcblxyXG4gIGlmIChpc1BhZ2UpIHtcclxuICAgIHJldHVybiBjb21wb25lbnRPcHRpb25zXHJcbiAgfVxyXG4gIHJldHVybiBbY29tcG9uZW50T3B0aW9ucywgVnVlQ29tcG9uZW50XVxyXG59XHJcblxyXG5jb25zdCBjb21wb25lbnRzID0gW107XHJcblxyXG5mdW5jdGlvbiBwYXJzZUNvbXBvbmVudCAodnVlT3B0aW9ucykge1xyXG4gIGNvbnN0IFtjb21wb25lbnRPcHRpb25zLCBWdWVDb21wb25lbnRdID0gcGFyc2VCYXNlQ29tcG9uZW50KHZ1ZU9wdGlvbnMpO1xyXG5cclxuICAvLyDln7rnoYDlupMgMi4wIOS7peS4iiBhdHRhY2hlZCDpobrluo/plJnkubHvvIzmjInnhacgY3JlYXRlZCDpobrluo/lvLrliLbnuqDmraNcclxuICBjb21wb25lbnRPcHRpb25zLmxpZmV0aW1lcy5jcmVhdGVkID0gZnVuY3Rpb24gY3JlYXRlZCAoKSB7XHJcbiAgICBjb21wb25lbnRzLnB1c2godGhpcyk7XHJcbiAgfTtcclxuXHJcbiAgY29tcG9uZW50T3B0aW9ucy5saWZldGltZXMuYXR0YWNoZWQgPSBmdW5jdGlvbiBhdHRhY2hlZCAoKSB7XHJcbiAgICB0aGlzLl9fbGlmZXRpbWVzX2F0dGFjaGVkID0gZnVuY3Rpb24gKCkge1xyXG4gICAgICBjb25zdCBwcm9wZXJ0aWVzID0gdGhpcy5wcm9wZXJ0aWVzO1xyXG5cclxuICAgICAgY29uc3Qgb3B0aW9ucyA9IHtcclxuICAgICAgICBtcFR5cGU6IGlzUGFnZS5jYWxsKHRoaXMpID8gJ3BhZ2UnIDogJ2NvbXBvbmVudCcsXHJcbiAgICAgICAgbXBJbnN0YW5jZTogdGhpcyxcclxuICAgICAgICBwcm9wc0RhdGE6IHByb3BlcnRpZXNcclxuICAgICAgfTtcclxuXHJcbiAgICAgIGluaXRWdWVJZHMocHJvcGVydGllcy52dWVJZCwgdGhpcyk7XHJcblxyXG4gICAgICAvLyDliJ3lp4vljJYgdnVlIOWunuS+i1xyXG4gICAgICB0aGlzLiR2bSA9IG5ldyBWdWVDb21wb25lbnQob3B0aW9ucyk7XHJcblxyXG4gICAgICAvLyDlpITnkIYkc2xvdHMsJHNjb3BlZFNsb3Rz77yI5pqC5LiN5pSv5oyB5Yqo5oCB5Y+Y5YyWJHNsb3Rz77yJXHJcbiAgICAgIGluaXRTbG90cyh0aGlzLiR2bSwgcHJvcGVydGllcy52dWVTbG90cyk7XHJcblxyXG4gICAgICAvLyDlpITnkIbniLblrZDlhbPns7tcclxuICAgICAgaW5pdFJlbGF0aW9uLmNhbGwodGhpcywge1xyXG4gICAgICAgIHZ1ZVBpZDogdGhpcy5fJHZ1ZVBpZCxcclxuICAgICAgICBtcEluc3RhbmNlOiB0aGlzXHJcbiAgICAgIH0pO1xyXG5cclxuICAgICAgLy8g6Kem5Y+R6aaW5qyhIHNldERhdGFcclxuICAgICAgdGhpcy4kdm0uJG1vdW50KCk7XHJcbiAgICB9O1xyXG4gICAgbGV0IGNvbXBvbmVudCA9IHRoaXM7XHJcbiAgICB3aGlsZSAoY29tcG9uZW50ICYmIGNvbXBvbmVudC5fX2xpZmV0aW1lc19hdHRhY2hlZCAmJiBjb21wb25lbnRzWzBdICYmIGNvbXBvbmVudCA9PT0gY29tcG9uZW50c1swXSkge1xyXG4gICAgICBjb21wb25lbnRzLnNoaWZ0KCk7XHJcbiAgICAgIGNvbXBvbmVudC5fX2xpZmV0aW1lc19hdHRhY2hlZCgpO1xyXG4gICAgICBkZWxldGUgY29tcG9uZW50Ll9fbGlmZXRpbWVzX2F0dGFjaGVkO1xyXG4gICAgICBjb21wb25lbnQgPSBjb21wb25lbnRzWzBdO1xyXG4gICAgfVxyXG4gIH07XHJcblxyXG4gIC8vIHJlYWR5IOavlCBoYW5kbGVMaW5rIOi/mOaXqe+8jOWIneWni+WMlumAu+i+keaUvuWIsCBoYW5kbGVMaW5rIOS4rVxyXG4gIGRlbGV0ZSBjb21wb25lbnRPcHRpb25zLmxpZmV0aW1lcy5yZWFkeTtcclxuXHJcbiAgY29tcG9uZW50T3B0aW9ucy5tZXRob2RzLl9fbCA9IGhhbmRsZUxpbmskMTtcclxuXHJcbiAgcmV0dXJuIGNvbXBvbmVudE9wdGlvbnNcclxufVxyXG5cclxuY29uc3QgaG9va3MkMSA9IFtcclxuICAnb25TaG93JyxcclxuICAnb25IaWRlJyxcclxuICAnb25VbmxvYWQnXHJcbl07XHJcblxyXG5ob29rcyQxLnB1c2goLi4uUEFHRV9FVkVOVF9IT09LUyk7XHJcblxyXG5mdW5jdGlvbiBwYXJzZUJhc2VQYWdlICh2dWVQYWdlT3B0aW9ucywge1xyXG4gIGlzUGFnZSxcclxuICBpbml0UmVsYXRpb25cclxufSkge1xyXG4gIGNvbnN0IHBhZ2VPcHRpb25zID0gcGFyc2VDb21wb25lbnQodnVlUGFnZU9wdGlvbnMpO1xyXG5cclxuICBpbml0SG9va3MocGFnZU9wdGlvbnMubWV0aG9kcywgaG9va3MkMSwgdnVlUGFnZU9wdGlvbnMpO1xyXG5cclxuICBwYWdlT3B0aW9ucy5tZXRob2RzLm9uTG9hZCA9IGZ1bmN0aW9uIChxdWVyeSkge1xyXG4gICAgdGhpcy5vcHRpb25zID0gcXVlcnk7XHJcbiAgICBjb25zdCBjb3B5UXVlcnkgPSBPYmplY3QuYXNzaWduKHt9LCBxdWVyeSk7XHJcbiAgICBkZWxldGUgY29weVF1ZXJ5Ll9faWRfXztcclxuICAgIHRoaXMuJHBhZ2UgPSB7XHJcbiAgICAgIGZ1bGxQYXRoOiAnLycgKyAodGhpcy5yb3V0ZSB8fCB0aGlzLmlzKSArIHN0cmluZ2lmeVF1ZXJ5KGNvcHlRdWVyeSlcclxuICAgIH07XHJcbiAgICB0aGlzLiR2bS4kbXAucXVlcnkgPSBxdWVyeTsgLy8g5YW85a65IG1wdnVlXHJcbiAgICB0aGlzLiR2bS5fX2NhbGxfaG9vaygnb25Mb2FkJywgcXVlcnkpO1xyXG4gIH07XHJcblxyXG4gIHJldHVybiBwYWdlT3B0aW9uc1xyXG59XHJcblxyXG5mdW5jdGlvbiBwYXJzZVBhZ2UgKHZ1ZVBhZ2VPcHRpb25zKSB7XHJcbiAgY29uc3QgcGFnZU9wdGlvbnMgPSBwYXJzZUJhc2VQYWdlKHZ1ZVBhZ2VPcHRpb25zLCB7XHJcbiAgICBpc1BhZ2UsXHJcbiAgICBpbml0UmVsYXRpb25cclxuICB9KTtcclxuICAvLyDpobXpnaLpnIDopoHlnKggcmVhZHkg5Lit6Kem5Y+R77yM5YW25LuW57uE5Lu25piv5ZyoIGhhbmRsZUxpbmsg5Lit6Kem5Y+RXHJcbiAgcGFnZU9wdGlvbnMubGlmZXRpbWVzLnJlYWR5ID0gZnVuY3Rpb24gcmVhZHkgKCkge1xyXG4gICAgaWYgKHRoaXMuJHZtICYmIHRoaXMuJHZtLm1wVHlwZSA9PT0gJ3BhZ2UnKSB7XHJcbiAgICAgIHRoaXMuJHZtLl9fY2FsbF9ob29rKCdjcmVhdGVkJyk7XHJcbiAgICAgIHRoaXMuJHZtLl9fY2FsbF9ob29rKCdiZWZvcmVNb3VudCcpO1xyXG4gICAgICB0aGlzLiR2bS5faXNNb3VudGVkID0gdHJ1ZTtcclxuICAgICAgdGhpcy4kdm0uX19jYWxsX2hvb2soJ21vdW50ZWQnKTtcclxuICAgICAgdGhpcy4kdm0uX19jYWxsX2hvb2soJ29uUmVhZHknKTtcclxuICAgIH0gZWxzZSB7XHJcbiAgICAgIHRoaXMuaXMgJiYgY29uc29sZS53YXJuKHRoaXMuaXMgKyAnIGlzIG5vdCByZWFkeScpO1xyXG4gICAgfVxyXG4gIH07XHJcblxyXG4gIHBhZ2VPcHRpb25zLmxpZmV0aW1lcy5kZXRhY2hlZCA9IGZ1bmN0aW9uIGRldGFjaGVkICgpIHtcclxuICAgIHRoaXMuJHZtICYmIHRoaXMuJHZtLiRkZXN0cm95KCk7XHJcbiAgICAvLyDmuIXnkIZcclxuICAgIGNvbnN0IHdlYnZpZXdJZCA9IHRoaXMuX193ZWJ2aWV3SWRfXztcclxuICAgIHdlYnZpZXdJZCAmJiBPYmplY3Qua2V5cyhpbnN0YW5jZXMpLmZvckVhY2goa2V5ID0+IHtcclxuICAgICAgaWYgKGtleS5pbmRleE9mKHdlYnZpZXdJZCArICdfJykgPT09IDApIHtcclxuICAgICAgICBkZWxldGUgaW5zdGFuY2VzW2tleV07XHJcbiAgICAgIH1cclxuICAgIH0pO1xyXG4gIH07XHJcblxyXG4gIHJldHVybiBwYWdlT3B0aW9uc1xyXG59XHJcblxyXG5mdW5jdGlvbiBjcmVhdGVQYWdlICh2dWVQYWdlT3B0aW9ucykge1xyXG4gIHtcclxuICAgIHJldHVybiBDb21wb25lbnQocGFyc2VQYWdlKHZ1ZVBhZ2VPcHRpb25zKSlcclxuICB9XHJcbn1cclxuXHJcbmZ1bmN0aW9uIGNyZWF0ZUNvbXBvbmVudCAodnVlT3B0aW9ucykge1xyXG4gIHtcclxuICAgIHJldHVybiBDb21wb25lbnQocGFyc2VDb21wb25lbnQodnVlT3B0aW9ucykpXHJcbiAgfVxyXG59XHJcblxyXG5mdW5jdGlvbiBjcmVhdGVTdWJwYWNrYWdlQXBwICh2bSkge1xyXG4gIGNvbnN0IGFwcE9wdGlvbnMgPSBwYXJzZUFwcCh2bSk7XHJcbiAgY29uc3QgYXBwID0gZ2V0QXBwKHtcclxuICAgIGFsbG93RGVmYXVsdDogdHJ1ZVxyXG4gIH0pO1xyXG4gIHZtLiRzY29wZSA9IGFwcDtcclxuICBjb25zdCBnbG9iYWxEYXRhID0gYXBwLmdsb2JhbERhdGE7XHJcbiAgaWYgKGdsb2JhbERhdGEpIHtcclxuICAgIE9iamVjdC5rZXlzKGFwcE9wdGlvbnMuZ2xvYmFsRGF0YSkuZm9yRWFjaChuYW1lID0+IHtcclxuICAgICAgaWYgKCFoYXNPd24oZ2xvYmFsRGF0YSwgbmFtZSkpIHtcclxuICAgICAgICBnbG9iYWxEYXRhW25hbWVdID0gYXBwT3B0aW9ucy5nbG9iYWxEYXRhW25hbWVdO1xyXG4gICAgICB9XHJcbiAgICB9KTtcclxuICB9XHJcbiAgT2JqZWN0LmtleXMoYXBwT3B0aW9ucykuZm9yRWFjaChuYW1lID0+IHtcclxuICAgIGlmICghaGFzT3duKGFwcCwgbmFtZSkpIHtcclxuICAgICAgYXBwW25hbWVdID0gYXBwT3B0aW9uc1tuYW1lXTtcclxuICAgIH1cclxuICB9KTtcclxuICBpZiAoaXNGbihhcHBPcHRpb25zLm9uU2hvdykgJiYgdHQub25BcHBTaG93KSB7XHJcbiAgICB0dC5vbkFwcFNob3coKC4uLmFyZ3MpID0+IHtcclxuICAgICAgdm0uX19jYWxsX2hvb2soJ29uU2hvdycsIGFyZ3MpO1xyXG4gICAgfSk7XHJcbiAgfVxyXG4gIGlmIChpc0ZuKGFwcE9wdGlvbnMub25IaWRlKSAmJiB0dC5vbkFwcEhpZGUpIHtcclxuICAgIHR0Lm9uQXBwSGlkZSgoLi4uYXJncykgPT4ge1xyXG4gICAgICB2bS5fX2NhbGxfaG9vaygnb25IaWRlJywgYXJncyk7XHJcbiAgICB9KTtcclxuICB9XHJcbiAgaWYgKGlzRm4oYXBwT3B0aW9ucy5vbkxhdW5jaCkpIHtcclxuICAgIGNvbnN0IGFyZ3MgPSB0dC5nZXRMYXVuY2hPcHRpb25zU3luYyAmJiB0dC5nZXRMYXVuY2hPcHRpb25zU3luYygpO1xyXG4gICAgdm0uX19jYWxsX2hvb2soJ29uTGF1bmNoJywgYXJncyk7XHJcbiAgfVxyXG4gIHJldHVybiB2bVxyXG59XHJcblxyXG5mdW5jdGlvbiBjcmVhdGVQbHVnaW4gKHZtKSB7XHJcbiAgY29uc3QgYXBwT3B0aW9ucyA9IHBhcnNlQXBwKHZtKTtcclxuICBpZiAoaXNGbihhcHBPcHRpb25zLm9uU2hvdykgJiYgdHQub25BcHBTaG93KSB7XHJcbiAgICB0dC5vbkFwcFNob3coKC4uLmFyZ3MpID0+IHtcclxuICAgICAgdm0uX19jYWxsX2hvb2soJ29uU2hvdycsIGFyZ3MpO1xyXG4gICAgfSk7XHJcbiAgfVxyXG4gIGlmIChpc0ZuKGFwcE9wdGlvbnMub25IaWRlKSAmJiB0dC5vbkFwcEhpZGUpIHtcclxuICAgIHR0Lm9uQXBwSGlkZSgoLi4uYXJncykgPT4ge1xyXG4gICAgICB2bS5fX2NhbGxfaG9vaygnb25IaWRlJywgYXJncyk7XHJcbiAgICB9KTtcclxuICB9XHJcbiAgaWYgKGlzRm4oYXBwT3B0aW9ucy5vbkxhdW5jaCkpIHtcclxuICAgIGNvbnN0IGFyZ3MgPSB0dC5nZXRMYXVuY2hPcHRpb25zU3luYyAmJiB0dC5nZXRMYXVuY2hPcHRpb25zU3luYygpO1xyXG4gICAgdm0uX19jYWxsX2hvb2soJ29uTGF1bmNoJywgYXJncyk7XHJcbiAgfVxyXG4gIHJldHVybiB2bVxyXG59XHJcblxyXG50b2Rvcy5mb3JFYWNoKHRvZG9BcGkgPT4ge1xyXG4gIHByb3RvY29sc1t0b2RvQXBpXSA9IGZhbHNlO1xyXG59KTtcclxuXHJcbmNhbklVc2VzLmZvckVhY2goY2FuSVVzZUFwaSA9PiB7XHJcbiAgY29uc3QgYXBpTmFtZSA9IHByb3RvY29sc1tjYW5JVXNlQXBpXSAmJiBwcm90b2NvbHNbY2FuSVVzZUFwaV0ubmFtZSA/IHByb3RvY29sc1tjYW5JVXNlQXBpXS5uYW1lXHJcbiAgICA6IGNhbklVc2VBcGk7XHJcbiAgaWYgKCF0dC5jYW5JVXNlKGFwaU5hbWUpKSB7XHJcbiAgICBwcm90b2NvbHNbY2FuSVVzZUFwaV0gPSBmYWxzZTtcclxuICB9XHJcbn0pO1xyXG5cclxubGV0IHVuaSA9IHt9O1xyXG5cclxuaWYgKHR5cGVvZiBQcm94eSAhPT0gJ3VuZGVmaW5lZCcgJiYgXCJtcC10b3V0aWFvXCIgIT09ICdhcHAtcGx1cycpIHtcclxuICB1bmkgPSBuZXcgUHJveHkoe30sIHtcclxuICAgIGdldCAodGFyZ2V0LCBuYW1lKSB7XHJcbiAgICAgIGlmIChoYXNPd24odGFyZ2V0LCBuYW1lKSkge1xyXG4gICAgICAgIHJldHVybiB0YXJnZXRbbmFtZV1cclxuICAgICAgfVxyXG4gICAgICBpZiAoYmFzZUFwaVtuYW1lXSkge1xyXG4gICAgICAgIHJldHVybiBiYXNlQXBpW25hbWVdXHJcbiAgICAgIH1cclxuICAgICAgaWYgKGFwaVtuYW1lXSkge1xyXG4gICAgICAgIHJldHVybiBwcm9taXNpZnkobmFtZSwgYXBpW25hbWVdKVxyXG4gICAgICB9XHJcbiAgICAgIHtcclxuICAgICAgICBpZiAoZXh0cmFBcGlbbmFtZV0pIHtcclxuICAgICAgICAgIHJldHVybiBwcm9taXNpZnkobmFtZSwgZXh0cmFBcGlbbmFtZV0pXHJcbiAgICAgICAgfVxyXG4gICAgICAgIGlmICh0b2RvQXBpc1tuYW1lXSkge1xyXG4gICAgICAgICAgcmV0dXJuIHByb21pc2lmeShuYW1lLCB0b2RvQXBpc1tuYW1lXSlcclxuICAgICAgICB9XHJcbiAgICAgIH1cclxuICAgICAgaWYgKGV2ZW50QXBpW25hbWVdKSB7XHJcbiAgICAgICAgcmV0dXJuIGV2ZW50QXBpW25hbWVdXHJcbiAgICAgIH1cclxuICAgICAgaWYgKCFoYXNPd24odHQsIG5hbWUpICYmICFoYXNPd24ocHJvdG9jb2xzLCBuYW1lKSkge1xyXG4gICAgICAgIHJldHVyblxyXG4gICAgICB9XHJcbiAgICAgIHJldHVybiBwcm9taXNpZnkobmFtZSwgd3JhcHBlcihuYW1lLCB0dFtuYW1lXSkpXHJcbiAgICB9LFxyXG4gICAgc2V0ICh0YXJnZXQsIG5hbWUsIHZhbHVlKSB7XHJcbiAgICAgIHRhcmdldFtuYW1lXSA9IHZhbHVlO1xyXG4gICAgICByZXR1cm4gdHJ1ZVxyXG4gICAgfVxyXG4gIH0pO1xyXG59IGVsc2Uge1xyXG4gIE9iamVjdC5rZXlzKGJhc2VBcGkpLmZvckVhY2gobmFtZSA9PiB7XHJcbiAgICB1bmlbbmFtZV0gPSBiYXNlQXBpW25hbWVdO1xyXG4gIH0pO1xyXG5cclxuICB7XHJcbiAgICBPYmplY3Qua2V5cyh0b2RvQXBpcykuZm9yRWFjaChuYW1lID0+IHtcclxuICAgICAgdW5pW25hbWVdID0gcHJvbWlzaWZ5KG5hbWUsIHRvZG9BcGlzW25hbWVdKTtcclxuICAgIH0pO1xyXG4gICAgT2JqZWN0LmtleXMoZXh0cmFBcGkpLmZvckVhY2gobmFtZSA9PiB7XHJcbiAgICAgIHVuaVtuYW1lXSA9IHByb21pc2lmeShuYW1lLCB0b2RvQXBpc1tuYW1lXSk7XHJcbiAgICB9KTtcclxuICB9XHJcblxyXG4gIE9iamVjdC5rZXlzKGV2ZW50QXBpKS5mb3JFYWNoKG5hbWUgPT4ge1xyXG4gICAgdW5pW25hbWVdID0gZXZlbnRBcGlbbmFtZV07XHJcbiAgfSk7XHJcblxyXG4gIE9iamVjdC5rZXlzKGFwaSkuZm9yRWFjaChuYW1lID0+IHtcclxuICAgIHVuaVtuYW1lXSA9IHByb21pc2lmeShuYW1lLCBhcGlbbmFtZV0pO1xyXG4gIH0pO1xyXG5cclxuICBPYmplY3Qua2V5cyh0dCkuZm9yRWFjaChuYW1lID0+IHtcclxuICAgIGlmIChoYXNPd24odHQsIG5hbWUpIHx8IGhhc093bihwcm90b2NvbHMsIG5hbWUpKSB7XHJcbiAgICAgIHVuaVtuYW1lXSA9IHByb21pc2lmeShuYW1lLCB3cmFwcGVyKG5hbWUsIHR0W25hbWVdKSk7XHJcbiAgICB9XHJcbiAgfSk7XHJcbn1cclxuXHJcbnR0LmNyZWF0ZUFwcCA9IGNyZWF0ZUFwcDtcclxudHQuY3JlYXRlUGFnZSA9IGNyZWF0ZVBhZ2U7XHJcbnR0LmNyZWF0ZUNvbXBvbmVudCA9IGNyZWF0ZUNvbXBvbmVudDtcclxudHQuY3JlYXRlU3VicGFja2FnZUFwcCA9IGNyZWF0ZVN1YnBhY2thZ2VBcHA7XHJcbnR0LmNyZWF0ZVBsdWdpbiA9IGNyZWF0ZVBsdWdpbjtcclxuXHJcbnZhciB1bmkkMSA9IHVuaTtcclxuXHJcbmV4cG9ydCBkZWZhdWx0IHVuaSQxO1xyXG5leHBvcnQgeyBjcmVhdGVBcHAsIGNyZWF0ZUNvbXBvbmVudCwgY3JlYXRlUGFnZSwgY3JlYXRlUGx1Z2luLCBjcmVhdGVTdWJwYWNrYWdlQXBwIH07XHJcbiIsInZhciBnO1xuXG4vLyBUaGlzIHdvcmtzIGluIG5vbi1zdHJpY3QgbW9kZVxuZyA9IChmdW5jdGlvbigpIHtcblx0cmV0dXJuIHRoaXM7XG59KSgpO1xuXG50cnkge1xuXHQvLyBUaGlzIHdvcmtzIGlmIGV2YWwgaXMgYWxsb3dlZCAoc2VlIENTUClcblx0ZyA9IGcgfHwgbmV3IEZ1bmN0aW9uKFwicmV0dXJuIHRoaXNcIikoKTtcbn0gY2F0Y2ggKGUpIHtcblx0Ly8gVGhpcyB3b3JrcyBpZiB0aGUgd2luZG93IHJlZmVyZW5jZSBpcyBhdmFpbGFibGVcblx0aWYgKHR5cGVvZiB3aW5kb3cgPT09IFwib2JqZWN0XCIpIGcgPSB3aW5kb3c7XG59XG5cbi8vIGcgY2FuIHN0aWxsIGJlIHVuZGVmaW5lZCwgYnV0IG5vdGhpbmcgdG8gZG8gYWJvdXQgaXQuLi5cbi8vIFdlIHJldHVybiB1bmRlZmluZWQsIGluc3RlYWQgb2Ygbm90aGluZyBoZXJlLCBzbyBpdCdzXG4vLyBlYXNpZXIgdG8gaGFuZGxlIHRoaXMgY2FzZS4gaWYoIWdsb2JhbCkgeyAuLi59XG5cbm1vZHVsZS5leHBvcnRzID0gZztcbiIsImNvbnN0IGlzQXJyYXkgPSBBcnJheS5pc0FycmF5O1xyXG5jb25zdCBpc09iamVjdCA9ICh2YWwpID0+IHZhbCAhPT0gbnVsbCAmJiB0eXBlb2YgdmFsID09PSAnb2JqZWN0JztcclxuY29uc3QgZGVmYXVsdERlbGltaXRlcnMgPSBbJ3snLCAnfSddO1xyXG5jbGFzcyBCYXNlRm9ybWF0dGVyIHtcclxuICAgIGNvbnN0cnVjdG9yKCkge1xyXG4gICAgICAgIHRoaXMuX2NhY2hlcyA9IE9iamVjdC5jcmVhdGUobnVsbCk7XHJcbiAgICB9XHJcbiAgICBpbnRlcnBvbGF0ZShtZXNzYWdlLCB2YWx1ZXMsIGRlbGltaXRlcnMgPSBkZWZhdWx0RGVsaW1pdGVycykge1xyXG4gICAgICAgIGlmICghdmFsdWVzKSB7XHJcbiAgICAgICAgICAgIHJldHVybiBbbWVzc2FnZV07XHJcbiAgICAgICAgfVxyXG4gICAgICAgIGxldCB0b2tlbnMgPSB0aGlzLl9jYWNoZXNbbWVzc2FnZV07XHJcbiAgICAgICAgaWYgKCF0b2tlbnMpIHtcclxuICAgICAgICAgICAgdG9rZW5zID0gcGFyc2UobWVzc2FnZSwgZGVsaW1pdGVycyk7XHJcbiAgICAgICAgICAgIHRoaXMuX2NhY2hlc1ttZXNzYWdlXSA9IHRva2VucztcclxuICAgICAgICB9XHJcbiAgICAgICAgcmV0dXJuIGNvbXBpbGUodG9rZW5zLCB2YWx1ZXMpO1xyXG4gICAgfVxyXG59XHJcbmNvbnN0IFJFX1RPS0VOX0xJU1RfVkFMVUUgPSAvXig/OlxcZCkrLztcclxuY29uc3QgUkVfVE9LRU5fTkFNRURfVkFMVUUgPSAvXig/OlxcdykrLztcclxuZnVuY3Rpb24gcGFyc2UoZm9ybWF0LCBbc3RhcnREZWxpbWl0ZXIsIGVuZERlbGltaXRlcl0pIHtcclxuICAgIGNvbnN0IHRva2VucyA9IFtdO1xyXG4gICAgbGV0IHBvc2l0aW9uID0gMDtcclxuICAgIGxldCB0ZXh0ID0gJyc7XHJcbiAgICB3aGlsZSAocG9zaXRpb24gPCBmb3JtYXQubGVuZ3RoKSB7XHJcbiAgICAgICAgbGV0IGNoYXIgPSBmb3JtYXRbcG9zaXRpb24rK107XHJcbiAgICAgICAgaWYgKGNoYXIgPT09IHN0YXJ0RGVsaW1pdGVyKSB7XHJcbiAgICAgICAgICAgIGlmICh0ZXh0KSB7XHJcbiAgICAgICAgICAgICAgICB0b2tlbnMucHVzaCh7IHR5cGU6ICd0ZXh0JywgdmFsdWU6IHRleHQgfSk7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgdGV4dCA9ICcnO1xyXG4gICAgICAgICAgICBsZXQgc3ViID0gJyc7XHJcbiAgICAgICAgICAgIGNoYXIgPSBmb3JtYXRbcG9zaXRpb24rK107XHJcbiAgICAgICAgICAgIHdoaWxlIChjaGFyICE9PSB1bmRlZmluZWQgJiYgY2hhciAhPT0gZW5kRGVsaW1pdGVyKSB7XHJcbiAgICAgICAgICAgICAgICBzdWIgKz0gY2hhcjtcclxuICAgICAgICAgICAgICAgIGNoYXIgPSBmb3JtYXRbcG9zaXRpb24rK107XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgY29uc3QgaXNDbG9zZWQgPSBjaGFyID09PSBlbmREZWxpbWl0ZXI7XHJcbiAgICAgICAgICAgIGNvbnN0IHR5cGUgPSBSRV9UT0tFTl9MSVNUX1ZBTFVFLnRlc3Qoc3ViKVxyXG4gICAgICAgICAgICAgICAgPyAnbGlzdCdcclxuICAgICAgICAgICAgICAgIDogaXNDbG9zZWQgJiYgUkVfVE9LRU5fTkFNRURfVkFMVUUudGVzdChzdWIpXHJcbiAgICAgICAgICAgICAgICAgICAgPyAnbmFtZWQnXHJcbiAgICAgICAgICAgICAgICAgICAgOiAndW5rbm93bic7XHJcbiAgICAgICAgICAgIHRva2Vucy5wdXNoKHsgdmFsdWU6IHN1YiwgdHlwZSB9KTtcclxuICAgICAgICB9XHJcbiAgICAgICAgLy8gIGVsc2UgaWYgKGNoYXIgPT09ICclJykge1xyXG4gICAgICAgIC8vICAgLy8gd2hlbiBmb3VuZCByYWlscyBpMThuIHN5bnRheCwgc2tpcCB0ZXh0IGNhcHR1cmVcclxuICAgICAgICAvLyAgIGlmIChmb3JtYXRbcG9zaXRpb25dICE9PSAneycpIHtcclxuICAgICAgICAvLyAgICAgdGV4dCArPSBjaGFyXHJcbiAgICAgICAgLy8gICB9XHJcbiAgICAgICAgLy8gfVxyXG4gICAgICAgIGVsc2Uge1xyXG4gICAgICAgICAgICB0ZXh0ICs9IGNoYXI7XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG4gICAgdGV4dCAmJiB0b2tlbnMucHVzaCh7IHR5cGU6ICd0ZXh0JywgdmFsdWU6IHRleHQgfSk7XHJcbiAgICByZXR1cm4gdG9rZW5zO1xyXG59XHJcbmZ1bmN0aW9uIGNvbXBpbGUodG9rZW5zLCB2YWx1ZXMpIHtcclxuICAgIGNvbnN0IGNvbXBpbGVkID0gW107XHJcbiAgICBsZXQgaW5kZXggPSAwO1xyXG4gICAgY29uc3QgbW9kZSA9IGlzQXJyYXkodmFsdWVzKVxyXG4gICAgICAgID8gJ2xpc3QnXHJcbiAgICAgICAgOiBpc09iamVjdCh2YWx1ZXMpXHJcbiAgICAgICAgICAgID8gJ25hbWVkJ1xyXG4gICAgICAgICAgICA6ICd1bmtub3duJztcclxuICAgIGlmIChtb2RlID09PSAndW5rbm93bicpIHtcclxuICAgICAgICByZXR1cm4gY29tcGlsZWQ7XHJcbiAgICB9XHJcbiAgICB3aGlsZSAoaW5kZXggPCB0b2tlbnMubGVuZ3RoKSB7XHJcbiAgICAgICAgY29uc3QgdG9rZW4gPSB0b2tlbnNbaW5kZXhdO1xyXG4gICAgICAgIHN3aXRjaCAodG9rZW4udHlwZSkge1xyXG4gICAgICAgICAgICBjYXNlICd0ZXh0JzpcclxuICAgICAgICAgICAgICAgIGNvbXBpbGVkLnB1c2godG9rZW4udmFsdWUpO1xyXG4gICAgICAgICAgICAgICAgYnJlYWs7XHJcbiAgICAgICAgICAgIGNhc2UgJ2xpc3QnOlxyXG4gICAgICAgICAgICAgICAgY29tcGlsZWQucHVzaCh2YWx1ZXNbcGFyc2VJbnQodG9rZW4udmFsdWUsIDEwKV0pO1xyXG4gICAgICAgICAgICAgICAgYnJlYWs7XHJcbiAgICAgICAgICAgIGNhc2UgJ25hbWVkJzpcclxuICAgICAgICAgICAgICAgIGlmIChtb2RlID09PSAnbmFtZWQnKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgY29tcGlsZWQucHVzaCh2YWx1ZXNbdG9rZW4udmFsdWVdKTtcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgIGVsc2Uge1xyXG4gICAgICAgICAgICAgICAgICAgIGlmIChwcm9jZXNzLmVudi5OT0RFX0VOViAhPT0gJ3Byb2R1Y3Rpb24nKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGNvbnNvbGUud2FybihgVHlwZSBvZiB0b2tlbiAnJHt0b2tlbi50eXBlfScgYW5kIGZvcm1hdCBvZiB2YWx1ZSAnJHttb2RlfScgZG9uJ3QgbWF0Y2ghYCk7XHJcbiAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgYnJlYWs7XHJcbiAgICAgICAgICAgIGNhc2UgJ3Vua25vd24nOlxyXG4gICAgICAgICAgICAgICAgaWYgKHByb2Nlc3MuZW52Lk5PREVfRU5WICE9PSAncHJvZHVjdGlvbicpIHtcclxuICAgICAgICAgICAgICAgICAgICBjb25zb2xlLndhcm4oYERldGVjdCAndW5rbm93bicgdHlwZSBvZiB0b2tlbiFgKTtcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgIGJyZWFrO1xyXG4gICAgICAgIH1cclxuICAgICAgICBpbmRleCsrO1xyXG4gICAgfVxyXG4gICAgcmV0dXJuIGNvbXBpbGVkO1xyXG59XHJcblxyXG5jb25zdCBMT0NBTEVfWkhfSEFOUyA9ICd6aC1IYW5zJztcclxuY29uc3QgTE9DQUxFX1pIX0hBTlQgPSAnemgtSGFudCc7XHJcbmNvbnN0IExPQ0FMRV9FTiA9ICdlbic7XHJcbmNvbnN0IExPQ0FMRV9GUiA9ICdmcic7XHJcbmNvbnN0IExPQ0FMRV9FUyA9ICdlcyc7XHJcbmNvbnN0IGhhc093blByb3BlcnR5ID0gT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eTtcclxuY29uc3QgaGFzT3duID0gKHZhbCwga2V5KSA9PiBoYXNPd25Qcm9wZXJ0eS5jYWxsKHZhbCwga2V5KTtcclxuY29uc3QgZGVmYXVsdEZvcm1hdHRlciA9IG5ldyBCYXNlRm9ybWF0dGVyKCk7XHJcbmZ1bmN0aW9uIGluY2x1ZGUoc3RyLCBwYXJ0cykge1xyXG4gICAgcmV0dXJuICEhcGFydHMuZmluZCgocGFydCkgPT4gc3RyLmluZGV4T2YocGFydCkgIT09IC0xKTtcclxufVxyXG5mdW5jdGlvbiBzdGFydHNXaXRoKHN0ciwgcGFydHMpIHtcclxuICAgIHJldHVybiBwYXJ0cy5maW5kKChwYXJ0KSA9PiBzdHIuaW5kZXhPZihwYXJ0KSA9PT0gMCk7XHJcbn1cclxuZnVuY3Rpb24gbm9ybWFsaXplTG9jYWxlKGxvY2FsZSwgbWVzc2FnZXMpIHtcclxuICAgIGlmICghbG9jYWxlKSB7XHJcbiAgICAgICAgcmV0dXJuO1xyXG4gICAgfVxyXG4gICAgbG9jYWxlID0gbG9jYWxlLnRyaW0oKS5yZXBsYWNlKC9fL2csICctJyk7XHJcbiAgICBpZiAobWVzc2FnZXMgJiYgbWVzc2FnZXNbbG9jYWxlXSkge1xyXG4gICAgICAgIHJldHVybiBsb2NhbGU7XHJcbiAgICB9XHJcbiAgICBsb2NhbGUgPSBsb2NhbGUudG9Mb3dlckNhc2UoKTtcclxuICAgIGlmIChsb2NhbGUuaW5kZXhPZignemgnKSA9PT0gMCkge1xyXG4gICAgICAgIGlmIChsb2NhbGUuaW5kZXhPZignLWhhbnMnKSA+IC0xKSB7XHJcbiAgICAgICAgICAgIHJldHVybiBMT0NBTEVfWkhfSEFOUztcclxuICAgICAgICB9XHJcbiAgICAgICAgaWYgKGxvY2FsZS5pbmRleE9mKCctaGFudCcpID4gLTEpIHtcclxuICAgICAgICAgICAgcmV0dXJuIExPQ0FMRV9aSF9IQU5UO1xyXG4gICAgICAgIH1cclxuICAgICAgICBpZiAoaW5jbHVkZShsb2NhbGUsIFsnLXR3JywgJy1oaycsICctbW8nLCAnLWNodCddKSkge1xyXG4gICAgICAgICAgICByZXR1cm4gTE9DQUxFX1pIX0hBTlQ7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIHJldHVybiBMT0NBTEVfWkhfSEFOUztcclxuICAgIH1cclxuICAgIGNvbnN0IGxhbmcgPSBzdGFydHNXaXRoKGxvY2FsZSwgW0xPQ0FMRV9FTiwgTE9DQUxFX0ZSLCBMT0NBTEVfRVNdKTtcclxuICAgIGlmIChsYW5nKSB7XHJcbiAgICAgICAgcmV0dXJuIGxhbmc7XHJcbiAgICB9XHJcbn1cclxuY2xhc3MgSTE4biB7XHJcbiAgICBjb25zdHJ1Y3Rvcih7IGxvY2FsZSwgZmFsbGJhY2tMb2NhbGUsIG1lc3NhZ2VzLCB3YXRjaGVyLCBmb3JtYXRlciwgfSkge1xyXG4gICAgICAgIHRoaXMubG9jYWxlID0gTE9DQUxFX0VOO1xyXG4gICAgICAgIHRoaXMuZmFsbGJhY2tMb2NhbGUgPSBMT0NBTEVfRU47XHJcbiAgICAgICAgdGhpcy5tZXNzYWdlID0ge307XHJcbiAgICAgICAgdGhpcy5tZXNzYWdlcyA9IHt9O1xyXG4gICAgICAgIHRoaXMud2F0Y2hlcnMgPSBbXTtcclxuICAgICAgICBpZiAoZmFsbGJhY2tMb2NhbGUpIHtcclxuICAgICAgICAgICAgdGhpcy5mYWxsYmFja0xvY2FsZSA9IGZhbGxiYWNrTG9jYWxlO1xyXG4gICAgICAgIH1cclxuICAgICAgICB0aGlzLmZvcm1hdGVyID0gZm9ybWF0ZXIgfHwgZGVmYXVsdEZvcm1hdHRlcjtcclxuICAgICAgICB0aGlzLm1lc3NhZ2VzID0gbWVzc2FnZXMgfHwge307XHJcbiAgICAgICAgdGhpcy5zZXRMb2NhbGUobG9jYWxlIHx8IExPQ0FMRV9FTik7XHJcbiAgICAgICAgaWYgKHdhdGNoZXIpIHtcclxuICAgICAgICAgICAgdGhpcy53YXRjaExvY2FsZSh3YXRjaGVyKTtcclxuICAgICAgICB9XHJcbiAgICB9XHJcbiAgICBzZXRMb2NhbGUobG9jYWxlKSB7XHJcbiAgICAgICAgY29uc3Qgb2xkTG9jYWxlID0gdGhpcy5sb2NhbGU7XHJcbiAgICAgICAgdGhpcy5sb2NhbGUgPSBub3JtYWxpemVMb2NhbGUobG9jYWxlLCB0aGlzLm1lc3NhZ2VzKSB8fCB0aGlzLmZhbGxiYWNrTG9jYWxlO1xyXG4gICAgICAgIGlmICghdGhpcy5tZXNzYWdlc1t0aGlzLmxvY2FsZV0pIHtcclxuICAgICAgICAgICAgLy8g5Y+v6IO95Yid5aeL5YyW5pe25LiN5a2Y5ZyoXHJcbiAgICAgICAgICAgIHRoaXMubWVzc2FnZXNbdGhpcy5sb2NhbGVdID0ge307XHJcbiAgICAgICAgfVxyXG4gICAgICAgIHRoaXMubWVzc2FnZSA9IHRoaXMubWVzc2FnZXNbdGhpcy5sb2NhbGVdO1xyXG4gICAgICAgIC8vIOS7heWPkeeUn+WPmOWMluaXtu+8jOmAmuefpVxyXG4gICAgICAgIGlmIChvbGRMb2NhbGUgIT09IHRoaXMubG9jYWxlKSB7XHJcbiAgICAgICAgICAgIHRoaXMud2F0Y2hlcnMuZm9yRWFjaCgod2F0Y2hlcikgPT4ge1xyXG4gICAgICAgICAgICAgICAgd2F0Y2hlcih0aGlzLmxvY2FsZSwgb2xkTG9jYWxlKTtcclxuICAgICAgICAgICAgfSk7XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG4gICAgZ2V0TG9jYWxlKCkge1xyXG4gICAgICAgIHJldHVybiB0aGlzLmxvY2FsZTtcclxuICAgIH1cclxuICAgIHdhdGNoTG9jYWxlKGZuKSB7XHJcbiAgICAgICAgY29uc3QgaW5kZXggPSB0aGlzLndhdGNoZXJzLnB1c2goZm4pIC0gMTtcclxuICAgICAgICByZXR1cm4gKCkgPT4ge1xyXG4gICAgICAgICAgICB0aGlzLndhdGNoZXJzLnNwbGljZShpbmRleCwgMSk7XHJcbiAgICAgICAgfTtcclxuICAgIH1cclxuICAgIGFkZChsb2NhbGUsIG1lc3NhZ2UsIG92ZXJyaWRlID0gdHJ1ZSkge1xyXG4gICAgICAgIGNvbnN0IGN1ck1lc3NhZ2VzID0gdGhpcy5tZXNzYWdlc1tsb2NhbGVdO1xyXG4gICAgICAgIGlmIChjdXJNZXNzYWdlcykge1xyXG4gICAgICAgICAgICBpZiAob3ZlcnJpZGUpIHtcclxuICAgICAgICAgICAgICAgIE9iamVjdC5hc3NpZ24oY3VyTWVzc2FnZXMsIG1lc3NhZ2UpO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIGVsc2Uge1xyXG4gICAgICAgICAgICAgICAgT2JqZWN0LmtleXMobWVzc2FnZSkuZm9yRWFjaCgoa2V5KSA9PiB7XHJcbiAgICAgICAgICAgICAgICAgICAgaWYgKCFoYXNPd24oY3VyTWVzc2FnZXMsIGtleSkpIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgY3VyTWVzc2FnZXNba2V5XSA9IG1lc3NhZ2Vba2V5XTtcclxuICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICB9KTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuICAgICAgICBlbHNlIHtcclxuICAgICAgICAgICAgdGhpcy5tZXNzYWdlc1tsb2NhbGVdID0gbWVzc2FnZTtcclxuICAgICAgICB9XHJcbiAgICB9XHJcbiAgICBmKG1lc3NhZ2UsIHZhbHVlcywgZGVsaW1pdGVycykge1xyXG4gICAgICAgIHJldHVybiB0aGlzLmZvcm1hdGVyLmludGVycG9sYXRlKG1lc3NhZ2UsIHZhbHVlcywgZGVsaW1pdGVycykuam9pbignJyk7XHJcbiAgICB9XHJcbiAgICB0KGtleSwgbG9jYWxlLCB2YWx1ZXMpIHtcclxuICAgICAgICBsZXQgbWVzc2FnZSA9IHRoaXMubWVzc2FnZTtcclxuICAgICAgICBpZiAodHlwZW9mIGxvY2FsZSA9PT0gJ3N0cmluZycpIHtcclxuICAgICAgICAgICAgbG9jYWxlID0gbm9ybWFsaXplTG9jYWxlKGxvY2FsZSwgdGhpcy5tZXNzYWdlcyk7XHJcbiAgICAgICAgICAgIGxvY2FsZSAmJiAobWVzc2FnZSA9IHRoaXMubWVzc2FnZXNbbG9jYWxlXSk7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIGVsc2Uge1xyXG4gICAgICAgICAgICB2YWx1ZXMgPSBsb2NhbGU7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIGlmICghaGFzT3duKG1lc3NhZ2UsIGtleSkpIHtcclxuICAgICAgICAgICAgY29uc29sZS53YXJuKGBDYW5ub3QgdHJhbnNsYXRlIHRoZSB2YWx1ZSBvZiBrZXlwYXRoICR7a2V5fS4gVXNlIHRoZSB2YWx1ZSBvZiBrZXlwYXRoIGFzIGRlZmF1bHQuYCk7XHJcbiAgICAgICAgICAgIHJldHVybiBrZXk7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIHJldHVybiB0aGlzLmZvcm1hdGVyLmludGVycG9sYXRlKG1lc3NhZ2Vba2V5XSwgdmFsdWVzKS5qb2luKCcnKTtcclxuICAgIH1cclxufVxyXG5cclxuZnVuY3Rpb24gd2F0Y2hBcHBMb2NhbGUoYXBwVm0sIGkxOG4pIHtcclxuICAgIC8vIOmcgOimgeS/neivgSB3YXRjaCDnmoTop6blj5HlnKjnu4Tku7bmuLLmn5PkuYvliY1cclxuICAgIGlmIChhcHBWbS4kd2F0Y2hMb2NhbGUpIHtcclxuICAgICAgICAvLyB2dWUyXHJcbiAgICAgICAgYXBwVm0uJHdhdGNoTG9jYWxlKChuZXdMb2NhbGUpID0+IHtcclxuICAgICAgICAgICAgaTE4bi5zZXRMb2NhbGUobmV3TG9jYWxlKTtcclxuICAgICAgICB9KTtcclxuICAgIH1cclxuICAgIGVsc2Uge1xyXG4gICAgICAgIGFwcFZtLiR3YXRjaCgoKSA9PiBhcHBWbS4kbG9jYWxlLCAobmV3TG9jYWxlKSA9PiB7XHJcbiAgICAgICAgICAgIGkxOG4uc2V0TG9jYWxlKG5ld0xvY2FsZSk7XHJcbiAgICAgICAgfSk7XHJcbiAgICB9XHJcbn1cclxuZnVuY3Rpb24gZ2V0RGVmYXVsdExvY2FsZSgpIHtcclxuICAgIGlmICh0eXBlb2YgdW5pICE9PSAndW5kZWZpbmVkJyAmJiB1bmkuZ2V0TG9jYWxlKSB7XHJcbiAgICAgICAgcmV0dXJuIHVuaS5nZXRMb2NhbGUoKTtcclxuICAgIH1cclxuICAgIC8vIOWwj+eoi+W6j+W5s+WPsO+8jHVuaSDlkowgdW5pLWkxOG4g5LqS55u45byV55So77yM5a+86Ie06K6/6Zeu5LiN5YiwIHVuae+8jOaVheWcqCBnbG9iYWwg5LiK5oyC5LqGIGdldExvY2FsZVxyXG4gICAgaWYgKHR5cGVvZiBnbG9iYWwgIT09ICd1bmRlZmluZWQnICYmIGdsb2JhbC5nZXRMb2NhbGUpIHtcclxuICAgICAgICByZXR1cm4gZ2xvYmFsLmdldExvY2FsZSgpO1xyXG4gICAgfVxyXG4gICAgcmV0dXJuIExPQ0FMRV9FTjtcclxufVxyXG5mdW5jdGlvbiBpbml0VnVlSTE4bihsb2NhbGUsIG1lc3NhZ2VzID0ge30sIGZhbGxiYWNrTG9jYWxlLCB3YXRjaGVyKSB7XHJcbiAgICAvLyDlhbzlrrnml6fniYjmnKzlhaXlj4JcclxuICAgIGlmICh0eXBlb2YgbG9jYWxlICE9PSAnc3RyaW5nJykge1xyXG4gICAgICAgIFtsb2NhbGUsIG1lc3NhZ2VzXSA9IFtcclxuICAgICAgICAgICAgbWVzc2FnZXMsXHJcbiAgICAgICAgICAgIGxvY2FsZSxcclxuICAgICAgICBdO1xyXG4gICAgfVxyXG4gICAgaWYgKHR5cGVvZiBsb2NhbGUgIT09ICdzdHJpbmcnKSB7XHJcbiAgICAgICAgLy8g5Zug5Li65bCP56iL5bqP5bmz5Y+w77yMdW5pLWkxOG4g5ZKMIHVuaSDkupLnm7jlvJXnlKjvvIzlr7zoh7TmraTml7borr/pl64gdW5pIOaXtu+8jOS4uiB1bmRlZmluZWRcclxuICAgICAgICBsb2NhbGUgPSBnZXREZWZhdWx0TG9jYWxlKCk7XHJcbiAgICB9XHJcbiAgICBpZiAodHlwZW9mIGZhbGxiYWNrTG9jYWxlICE9PSAnc3RyaW5nJykge1xyXG4gICAgICAgIGZhbGxiYWNrTG9jYWxlID1cclxuICAgICAgICAgICAgKHR5cGVvZiBfX3VuaUNvbmZpZyAhPT0gJ3VuZGVmaW5lZCcgJiYgX191bmlDb25maWcuZmFsbGJhY2tMb2NhbGUpIHx8XHJcbiAgICAgICAgICAgICAgICBMT0NBTEVfRU47XHJcbiAgICB9XHJcbiAgICBjb25zdCBpMThuID0gbmV3IEkxOG4oe1xyXG4gICAgICAgIGxvY2FsZSxcclxuICAgICAgICBmYWxsYmFja0xvY2FsZSxcclxuICAgICAgICBtZXNzYWdlcyxcclxuICAgICAgICB3YXRjaGVyLFxyXG4gICAgfSk7XHJcbiAgICBsZXQgdCA9IChrZXksIHZhbHVlcykgPT4ge1xyXG4gICAgICAgIGlmICh0eXBlb2YgZ2V0QXBwICE9PSAnZnVuY3Rpb24nKSB7XHJcbiAgICAgICAgICAgIC8vIGFwcCB2aWV3XHJcbiAgICAgICAgICAgIC8qIGVzbGludC1kaXNhYmxlIG5vLWZ1bmMtYXNzaWduICovXHJcbiAgICAgICAgICAgIHQgPSBmdW5jdGlvbiAoa2V5LCB2YWx1ZXMpIHtcclxuICAgICAgICAgICAgICAgIHJldHVybiBpMThuLnQoa2V5LCB2YWx1ZXMpO1xyXG4gICAgICAgICAgICB9O1xyXG4gICAgICAgIH1cclxuICAgICAgICBlbHNlIHtcclxuICAgICAgICAgICAgbGV0IGlzV2F0Y2hlZEFwcExvY2FsZSA9IGZhbHNlO1xyXG4gICAgICAgICAgICB0ID0gZnVuY3Rpb24gKGtleSwgdmFsdWVzKSB7XHJcbiAgICAgICAgICAgICAgICBjb25zdCBhcHBWbSA9IGdldEFwcCgpLiR2bTtcclxuICAgICAgICAgICAgICAgIC8vIOWPr+iDvSR2bei/mOS4jeWtmOWcqO+8jOavlOWmguWcqOaUr+S7mOWuneWwj+eoi+W6j+S4re+8jOe7hOS7tuWumuS5iei+g+aXqe+8jOWcqHByb3Bz55qEZGVmYXVsdOmHjOS9v+eUqOS6hnQoKeWHveaVsO+8iOWmgnVuaS1nb29kcy1uYXbvvInvvIzmraTml7ZhcHDov5jmnKrliJ3lp4vljJZcclxuICAgICAgICAgICAgICAgIC8vIG9wdGlvbnM6IHtcclxuICAgICAgICAgICAgICAgIC8vIFx0dHlwZTogQXJyYXksXHJcbiAgICAgICAgICAgICAgICAvLyBcdGRlZmF1bHQgKCkge1xyXG4gICAgICAgICAgICAgICAgLy8gXHRcdHJldHVybiBbe1xyXG4gICAgICAgICAgICAgICAgLy8gXHRcdFx0aWNvbjogJ3Nob3AnLFxyXG4gICAgICAgICAgICAgICAgLy8gXHRcdFx0dGV4dDogdChcInVuaS1nb29kcy1uYXYub3B0aW9ucy5zaG9wXCIpLFxyXG4gICAgICAgICAgICAgICAgLy8gXHRcdH0sIHtcclxuICAgICAgICAgICAgICAgIC8vIFx0XHRcdGljb246ICdjYXJ0JyxcclxuICAgICAgICAgICAgICAgIC8vIFx0XHRcdHRleHQ6IHQoXCJ1bmktZ29vZHMtbmF2Lm9wdGlvbnMuY2FydFwiKVxyXG4gICAgICAgICAgICAgICAgLy8gXHRcdH1dXHJcbiAgICAgICAgICAgICAgICAvLyBcdH1cclxuICAgICAgICAgICAgICAgIC8vIH0sXHJcbiAgICAgICAgICAgICAgICBpZiAoYXBwVm0pIHtcclxuICAgICAgICAgICAgICAgICAgICAvLyDop6blj5Hlk43lupTlvI9cclxuICAgICAgICAgICAgICAgICAgICBhcHBWbS4kbG9jYWxlO1xyXG4gICAgICAgICAgICAgICAgICAgIGlmICghaXNXYXRjaGVkQXBwTG9jYWxlKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGlzV2F0Y2hlZEFwcExvY2FsZSA9IHRydWU7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHdhdGNoQXBwTG9jYWxlKGFwcFZtLCBpMThuKTtcclxuICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICByZXR1cm4gaTE4bi50KGtleSwgdmFsdWVzKTtcclxuICAgICAgICAgICAgfTtcclxuICAgICAgICB9XHJcbiAgICAgICAgcmV0dXJuIHQoa2V5LCB2YWx1ZXMpO1xyXG4gICAgfTtcclxuICAgIHJldHVybiB7XHJcbiAgICAgICAgaTE4bixcclxuICAgICAgICBmKG1lc3NhZ2UsIHZhbHVlcywgZGVsaW1pdGVycykge1xyXG4gICAgICAgICAgICByZXR1cm4gaTE4bi5mKG1lc3NhZ2UsIHZhbHVlcywgZGVsaW1pdGVycyk7XHJcbiAgICAgICAgfSxcclxuICAgICAgICB0KGtleSwgdmFsdWVzKSB7XHJcbiAgICAgICAgICAgIHJldHVybiB0KGtleSwgdmFsdWVzKTtcclxuICAgICAgICB9LFxyXG4gICAgICAgIGFkZChsb2NhbGUsIG1lc3NhZ2UsIG92ZXJyaWRlID0gdHJ1ZSkge1xyXG4gICAgICAgICAgICByZXR1cm4gaTE4bi5hZGQobG9jYWxlLCBtZXNzYWdlLCBvdmVycmlkZSk7XHJcbiAgICAgICAgfSxcclxuICAgICAgICB3YXRjaChmbikge1xyXG4gICAgICAgICAgICByZXR1cm4gaTE4bi53YXRjaExvY2FsZShmbik7XHJcbiAgICAgICAgfSxcclxuICAgICAgICBnZXRMb2NhbGUoKSB7XHJcbiAgICAgICAgICAgIHJldHVybiBpMThuLmdldExvY2FsZSgpO1xyXG4gICAgICAgIH0sXHJcbiAgICAgICAgc2V0TG9jYWxlKG5ld0xvY2FsZSkge1xyXG4gICAgICAgICAgICByZXR1cm4gaTE4bi5zZXRMb2NhbGUobmV3TG9jYWxlKTtcclxuICAgICAgICB9LFxyXG4gICAgfTtcclxufVxyXG5cclxuY29uc3QgaXNTdHJpbmcgPSAodmFsKSA9PiB0eXBlb2YgdmFsID09PSAnc3RyaW5nJztcclxubGV0IGZvcm1hdGVyO1xyXG5mdW5jdGlvbiBoYXNJMThuSnNvbihqc29uT2JqLCBkZWxpbWl0ZXJzKSB7XHJcbiAgICBpZiAoIWZvcm1hdGVyKSB7XHJcbiAgICAgICAgZm9ybWF0ZXIgPSBuZXcgQmFzZUZvcm1hdHRlcigpO1xyXG4gICAgfVxyXG4gICAgcmV0dXJuIHdhbGtKc29uT2JqKGpzb25PYmosIChqc29uT2JqLCBrZXkpID0+IHtcclxuICAgICAgICBjb25zdCB2YWx1ZSA9IGpzb25PYmpba2V5XTtcclxuICAgICAgICBpZiAoaXNTdHJpbmcodmFsdWUpKSB7XHJcbiAgICAgICAgICAgIGlmIChpc0kxOG5TdHIodmFsdWUsIGRlbGltaXRlcnMpKSB7XHJcbiAgICAgICAgICAgICAgICByZXR1cm4gdHJ1ZTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuICAgICAgICBlbHNlIHtcclxuICAgICAgICAgICAgcmV0dXJuIGhhc0kxOG5Kc29uKHZhbHVlLCBkZWxpbWl0ZXJzKTtcclxuICAgICAgICB9XHJcbiAgICB9KTtcclxufVxyXG5mdW5jdGlvbiBwYXJzZUkxOG5Kc29uKGpzb25PYmosIHZhbHVlcywgZGVsaW1pdGVycykge1xyXG4gICAgaWYgKCFmb3JtYXRlcikge1xyXG4gICAgICAgIGZvcm1hdGVyID0gbmV3IEJhc2VGb3JtYXR0ZXIoKTtcclxuICAgIH1cclxuICAgIHdhbGtKc29uT2JqKGpzb25PYmosIChqc29uT2JqLCBrZXkpID0+IHtcclxuICAgICAgICBjb25zdCB2YWx1ZSA9IGpzb25PYmpba2V5XTtcclxuICAgICAgICBpZiAoaXNTdHJpbmcodmFsdWUpKSB7XHJcbiAgICAgICAgICAgIGlmIChpc0kxOG5TdHIodmFsdWUsIGRlbGltaXRlcnMpKSB7XHJcbiAgICAgICAgICAgICAgICBqc29uT2JqW2tleV0gPSBjb21waWxlU3RyKHZhbHVlLCB2YWx1ZXMsIGRlbGltaXRlcnMpO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG4gICAgICAgIGVsc2Uge1xyXG4gICAgICAgICAgICBwYXJzZUkxOG5Kc29uKHZhbHVlLCB2YWx1ZXMsIGRlbGltaXRlcnMpO1xyXG4gICAgICAgIH1cclxuICAgIH0pO1xyXG4gICAgcmV0dXJuIGpzb25PYmo7XHJcbn1cclxuZnVuY3Rpb24gY29tcGlsZUkxOG5Kc29uU3RyKGpzb25TdHIsIHsgbG9jYWxlLCBsb2NhbGVzLCBkZWxpbWl0ZXJzLCB9KSB7XHJcbiAgICBpZiAoIWlzSTE4blN0cihqc29uU3RyLCBkZWxpbWl0ZXJzKSkge1xyXG4gICAgICAgIHJldHVybiBqc29uU3RyO1xyXG4gICAgfVxyXG4gICAgaWYgKCFmb3JtYXRlcikge1xyXG4gICAgICAgIGZvcm1hdGVyID0gbmV3IEJhc2VGb3JtYXR0ZXIoKTtcclxuICAgIH1cclxuICAgIGNvbnN0IGxvY2FsZVZhbHVlcyA9IFtdO1xyXG4gICAgT2JqZWN0LmtleXMobG9jYWxlcykuZm9yRWFjaCgobmFtZSkgPT4ge1xyXG4gICAgICAgIGlmIChuYW1lICE9PSBsb2NhbGUpIHtcclxuICAgICAgICAgICAgbG9jYWxlVmFsdWVzLnB1c2goe1xyXG4gICAgICAgICAgICAgICAgbG9jYWxlOiBuYW1lLFxyXG4gICAgICAgICAgICAgICAgdmFsdWVzOiBsb2NhbGVzW25hbWVdLFxyXG4gICAgICAgICAgICB9KTtcclxuICAgICAgICB9XHJcbiAgICB9KTtcclxuICAgIGxvY2FsZVZhbHVlcy51bnNoaWZ0KHsgbG9jYWxlLCB2YWx1ZXM6IGxvY2FsZXNbbG9jYWxlXSB9KTtcclxuICAgIHRyeSB7XHJcbiAgICAgICAgcmV0dXJuIEpTT04uc3RyaW5naWZ5KGNvbXBpbGVKc29uT2JqKEpTT04ucGFyc2UoanNvblN0ciksIGxvY2FsZVZhbHVlcywgZGVsaW1pdGVycyksIG51bGwsIDIpO1xyXG4gICAgfVxyXG4gICAgY2F0Y2ggKGUpIHsgfVxyXG4gICAgcmV0dXJuIGpzb25TdHI7XHJcbn1cclxuZnVuY3Rpb24gaXNJMThuU3RyKHZhbHVlLCBkZWxpbWl0ZXJzKSB7XHJcbiAgICByZXR1cm4gdmFsdWUuaW5kZXhPZihkZWxpbWl0ZXJzWzBdKSA+IC0xO1xyXG59XHJcbmZ1bmN0aW9uIGNvbXBpbGVTdHIodmFsdWUsIHZhbHVlcywgZGVsaW1pdGVycykge1xyXG4gICAgcmV0dXJuIGZvcm1hdGVyLmludGVycG9sYXRlKHZhbHVlLCB2YWx1ZXMsIGRlbGltaXRlcnMpLmpvaW4oJycpO1xyXG59XHJcbmZ1bmN0aW9uIGNvbXBpbGVWYWx1ZShqc29uT2JqLCBrZXksIGxvY2FsZVZhbHVlcywgZGVsaW1pdGVycykge1xyXG4gICAgY29uc3QgdmFsdWUgPSBqc29uT2JqW2tleV07XHJcbiAgICBpZiAoaXNTdHJpbmcodmFsdWUpKSB7XHJcbiAgICAgICAgLy8g5a2Y5Zyo5Zu96ZmF5YyWXHJcbiAgICAgICAgaWYgKGlzSTE4blN0cih2YWx1ZSwgZGVsaW1pdGVycykpIHtcclxuICAgICAgICAgICAganNvbk9ialtrZXldID0gY29tcGlsZVN0cih2YWx1ZSwgbG9jYWxlVmFsdWVzWzBdLnZhbHVlcywgZGVsaW1pdGVycyk7XHJcbiAgICAgICAgICAgIGlmIChsb2NhbGVWYWx1ZXMubGVuZ3RoID4gMSkge1xyXG4gICAgICAgICAgICAgICAgLy8g5qC85byP5YyW5Zu96ZmF5YyW6K+t6KiAXHJcbiAgICAgICAgICAgICAgICBjb25zdCB2YWx1ZUxvY2FsZXMgPSAoanNvbk9ialtrZXkgKyAnTG9jYWxlcyddID0ge30pO1xyXG4gICAgICAgICAgICAgICAgbG9jYWxlVmFsdWVzLmZvckVhY2goKGxvY2FsVmFsdWUpID0+IHtcclxuICAgICAgICAgICAgICAgICAgICB2YWx1ZUxvY2FsZXNbbG9jYWxWYWx1ZS5sb2NhbGVdID0gY29tcGlsZVN0cih2YWx1ZSwgbG9jYWxWYWx1ZS52YWx1ZXMsIGRlbGltaXRlcnMpO1xyXG4gICAgICAgICAgICAgICAgfSk7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9XHJcbiAgICB9XHJcbiAgICBlbHNlIHtcclxuICAgICAgICBjb21waWxlSnNvbk9iaih2YWx1ZSwgbG9jYWxlVmFsdWVzLCBkZWxpbWl0ZXJzKTtcclxuICAgIH1cclxufVxyXG5mdW5jdGlvbiBjb21waWxlSnNvbk9iaihqc29uT2JqLCBsb2NhbGVWYWx1ZXMsIGRlbGltaXRlcnMpIHtcclxuICAgIHdhbGtKc29uT2JqKGpzb25PYmosIChqc29uT2JqLCBrZXkpID0+IHtcclxuICAgICAgICBjb21waWxlVmFsdWUoanNvbk9iaiwga2V5LCBsb2NhbGVWYWx1ZXMsIGRlbGltaXRlcnMpO1xyXG4gICAgfSk7XHJcbiAgICByZXR1cm4ganNvbk9iajtcclxufVxyXG5mdW5jdGlvbiB3YWxrSnNvbk9iaihqc29uT2JqLCB3YWxrKSB7XHJcbiAgICBpZiAoaXNBcnJheShqc29uT2JqKSkge1xyXG4gICAgICAgIGZvciAobGV0IGkgPSAwOyBpIDwganNvbk9iai5sZW5ndGg7IGkrKykge1xyXG4gICAgICAgICAgICBpZiAod2Fsayhqc29uT2JqLCBpKSkge1xyXG4gICAgICAgICAgICAgICAgcmV0dXJuIHRydWU7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9XHJcbiAgICB9XHJcbiAgICBlbHNlIGlmIChpc09iamVjdChqc29uT2JqKSkge1xyXG4gICAgICAgIGZvciAoY29uc3Qga2V5IGluIGpzb25PYmopIHtcclxuICAgICAgICAgICAgaWYgKHdhbGsoanNvbk9iaiwga2V5KSkge1xyXG4gICAgICAgICAgICAgICAgcmV0dXJuIHRydWU7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9XHJcbiAgICB9XHJcbiAgICByZXR1cm4gZmFsc2U7XHJcbn1cclxuXHJcbmZ1bmN0aW9uIHJlc29sdmVMb2NhbGUobG9jYWxlcykge1xyXG4gICAgcmV0dXJuIChsb2NhbGUpID0+IHtcclxuICAgICAgICBpZiAoIWxvY2FsZSkge1xyXG4gICAgICAgICAgICByZXR1cm4gbG9jYWxlO1xyXG4gICAgICAgIH1cclxuICAgICAgICBsb2NhbGUgPSBub3JtYWxpemVMb2NhbGUobG9jYWxlKSB8fCBsb2NhbGU7XHJcbiAgICAgICAgcmV0dXJuIHJlc29sdmVMb2NhbGVDaGFpbihsb2NhbGUpLmZpbmQoKGxvY2FsZSkgPT4gbG9jYWxlcy5pbmRleE9mKGxvY2FsZSkgPiAtMSk7XHJcbiAgICB9O1xyXG59XHJcbmZ1bmN0aW9uIHJlc29sdmVMb2NhbGVDaGFpbihsb2NhbGUpIHtcclxuICAgIGNvbnN0IGNoYWluID0gW107XHJcbiAgICBjb25zdCB0b2tlbnMgPSBsb2NhbGUuc3BsaXQoJy0nKTtcclxuICAgIHdoaWxlICh0b2tlbnMubGVuZ3RoKSB7XHJcbiAgICAgICAgY2hhaW4ucHVzaCh0b2tlbnMuam9pbignLScpKTtcclxuICAgICAgICB0b2tlbnMucG9wKCk7XHJcbiAgICB9XHJcbiAgICByZXR1cm4gY2hhaW47XHJcbn1cclxuXHJcbmV4cG9ydCB7IEJhc2VGb3JtYXR0ZXIgYXMgRm9ybWF0dGVyLCBJMThuLCBMT0NBTEVfRU4sIExPQ0FMRV9FUywgTE9DQUxFX0ZSLCBMT0NBTEVfWkhfSEFOUywgTE9DQUxFX1pIX0hBTlQsIGNvbXBpbGVJMThuSnNvblN0ciwgaGFzSTE4bkpzb24sIGluaXRWdWVJMThuLCBpc0kxOG5TdHIsIGlzU3RyaW5nLCBub3JtYWxpemVMb2NhbGUsIHBhcnNlSTE4bkpzb24sIHJlc29sdmVMb2NhbGUgfTtcclxuIiwiLyohXG4gKiBWdWUuanMgdjIuNi4xMVxuICogKGMpIDIwMTQtMjAyMiBFdmFuIFlvdVxuICogUmVsZWFzZWQgdW5kZXIgdGhlIE1JVCBMaWNlbnNlLlxuICovXG4vKiAgKi9cblxudmFyIGVtcHR5T2JqZWN0ID0gT2JqZWN0LmZyZWV6ZSh7fSk7XG5cbi8vIFRoZXNlIGhlbHBlcnMgcHJvZHVjZSBiZXR0ZXIgVk0gY29kZSBpbiBKUyBlbmdpbmVzIGR1ZSB0byB0aGVpclxuLy8gZXhwbGljaXRuZXNzIGFuZCBmdW5jdGlvbiBpbmxpbmluZy5cbmZ1bmN0aW9uIGlzVW5kZWYgKHYpIHtcbiAgcmV0dXJuIHYgPT09IHVuZGVmaW5lZCB8fCB2ID09PSBudWxsXG59XG5cbmZ1bmN0aW9uIGlzRGVmICh2KSB7XG4gIHJldHVybiB2ICE9PSB1bmRlZmluZWQgJiYgdiAhPT0gbnVsbFxufVxuXG5mdW5jdGlvbiBpc1RydWUgKHYpIHtcbiAgcmV0dXJuIHYgPT09IHRydWVcbn1cblxuZnVuY3Rpb24gaXNGYWxzZSAodikge1xuICByZXR1cm4gdiA9PT0gZmFsc2Vcbn1cblxuLyoqXG4gKiBDaGVjayBpZiB2YWx1ZSBpcyBwcmltaXRpdmUuXG4gKi9cbmZ1bmN0aW9uIGlzUHJpbWl0aXZlICh2YWx1ZSkge1xuICByZXR1cm4gKFxuICAgIHR5cGVvZiB2YWx1ZSA9PT0gJ3N0cmluZycgfHxcbiAgICB0eXBlb2YgdmFsdWUgPT09ICdudW1iZXInIHx8XG4gICAgLy8gJGZsb3ctZGlzYWJsZS1saW5lXG4gICAgdHlwZW9mIHZhbHVlID09PSAnc3ltYm9sJyB8fFxuICAgIHR5cGVvZiB2YWx1ZSA9PT0gJ2Jvb2xlYW4nXG4gIClcbn1cblxuLyoqXG4gKiBRdWljayBvYmplY3QgY2hlY2sgLSB0aGlzIGlzIHByaW1hcmlseSB1c2VkIHRvIHRlbGxcbiAqIE9iamVjdHMgZnJvbSBwcmltaXRpdmUgdmFsdWVzIHdoZW4gd2Uga25vdyB0aGUgdmFsdWVcbiAqIGlzIGEgSlNPTi1jb21wbGlhbnQgdHlwZS5cbiAqL1xuZnVuY3Rpb24gaXNPYmplY3QgKG9iaikge1xuICByZXR1cm4gb2JqICE9PSBudWxsICYmIHR5cGVvZiBvYmogPT09ICdvYmplY3QnXG59XG5cbi8qKlxuICogR2V0IHRoZSByYXcgdHlwZSBzdHJpbmcgb2YgYSB2YWx1ZSwgZS5nLiwgW29iamVjdCBPYmplY3RdLlxuICovXG52YXIgX3RvU3RyaW5nID0gT2JqZWN0LnByb3RvdHlwZS50b1N0cmluZztcblxuZnVuY3Rpb24gdG9SYXdUeXBlICh2YWx1ZSkge1xuICByZXR1cm4gX3RvU3RyaW5nLmNhbGwodmFsdWUpLnNsaWNlKDgsIC0xKVxufVxuXG4vKipcbiAqIFN0cmljdCBvYmplY3QgdHlwZSBjaGVjay4gT25seSByZXR1cm5zIHRydWVcbiAqIGZvciBwbGFpbiBKYXZhU2NyaXB0IG9iamVjdHMuXG4gKi9cbmZ1bmN0aW9uIGlzUGxhaW5PYmplY3QgKG9iaikge1xuICByZXR1cm4gX3RvU3RyaW5nLmNhbGwob2JqKSA9PT0gJ1tvYmplY3QgT2JqZWN0XSdcbn1cblxuZnVuY3Rpb24gaXNSZWdFeHAgKHYpIHtcbiAgcmV0dXJuIF90b1N0cmluZy5jYWxsKHYpID09PSAnW29iamVjdCBSZWdFeHBdJ1xufVxuXG4vKipcbiAqIENoZWNrIGlmIHZhbCBpcyBhIHZhbGlkIGFycmF5IGluZGV4LlxuICovXG5mdW5jdGlvbiBpc1ZhbGlkQXJyYXlJbmRleCAodmFsKSB7XG4gIHZhciBuID0gcGFyc2VGbG9hdChTdHJpbmcodmFsKSk7XG4gIHJldHVybiBuID49IDAgJiYgTWF0aC5mbG9vcihuKSA9PT0gbiAmJiBpc0Zpbml0ZSh2YWwpXG59XG5cbmZ1bmN0aW9uIGlzUHJvbWlzZSAodmFsKSB7XG4gIHJldHVybiAoXG4gICAgaXNEZWYodmFsKSAmJlxuICAgIHR5cGVvZiB2YWwudGhlbiA9PT0gJ2Z1bmN0aW9uJyAmJlxuICAgIHR5cGVvZiB2YWwuY2F0Y2ggPT09ICdmdW5jdGlvbidcbiAgKVxufVxuXG4vKipcbiAqIENvbnZlcnQgYSB2YWx1ZSB0byBhIHN0cmluZyB0aGF0IGlzIGFjdHVhbGx5IHJlbmRlcmVkLlxuICovXG5mdW5jdGlvbiB0b1N0cmluZyAodmFsKSB7XG4gIHJldHVybiB2YWwgPT0gbnVsbFxuICAgID8gJydcbiAgICA6IEFycmF5LmlzQXJyYXkodmFsKSB8fCAoaXNQbGFpbk9iamVjdCh2YWwpICYmIHZhbC50b1N0cmluZyA9PT0gX3RvU3RyaW5nKVxuICAgICAgPyBKU09OLnN0cmluZ2lmeSh2YWwsIG51bGwsIDIpXG4gICAgICA6IFN0cmluZyh2YWwpXG59XG5cbi8qKlxuICogQ29udmVydCBhbiBpbnB1dCB2YWx1ZSB0byBhIG51bWJlciBmb3IgcGVyc2lzdGVuY2UuXG4gKiBJZiB0aGUgY29udmVyc2lvbiBmYWlscywgcmV0dXJuIG9yaWdpbmFsIHN0cmluZy5cbiAqL1xuZnVuY3Rpb24gdG9OdW1iZXIgKHZhbCkge1xuICB2YXIgbiA9IHBhcnNlRmxvYXQodmFsKTtcbiAgcmV0dXJuIGlzTmFOKG4pID8gdmFsIDogblxufVxuXG4vKipcbiAqIE1ha2UgYSBtYXAgYW5kIHJldHVybiBhIGZ1bmN0aW9uIGZvciBjaGVja2luZyBpZiBhIGtleVxuICogaXMgaW4gdGhhdCBtYXAuXG4gKi9cbmZ1bmN0aW9uIG1ha2VNYXAgKFxuICBzdHIsXG4gIGV4cGVjdHNMb3dlckNhc2Vcbikge1xuICB2YXIgbWFwID0gT2JqZWN0LmNyZWF0ZShudWxsKTtcbiAgdmFyIGxpc3QgPSBzdHIuc3BsaXQoJywnKTtcbiAgZm9yICh2YXIgaSA9IDA7IGkgPCBsaXN0Lmxlbmd0aDsgaSsrKSB7XG4gICAgbWFwW2xpc3RbaV1dID0gdHJ1ZTtcbiAgfVxuICByZXR1cm4gZXhwZWN0c0xvd2VyQ2FzZVxuICAgID8gZnVuY3Rpb24gKHZhbCkgeyByZXR1cm4gbWFwW3ZhbC50b0xvd2VyQ2FzZSgpXTsgfVxuICAgIDogZnVuY3Rpb24gKHZhbCkgeyByZXR1cm4gbWFwW3ZhbF07IH1cbn1cblxuLyoqXG4gKiBDaGVjayBpZiBhIHRhZyBpcyBhIGJ1aWx0LWluIHRhZy5cbiAqL1xudmFyIGlzQnVpbHRJblRhZyA9IG1ha2VNYXAoJ3Nsb3QsY29tcG9uZW50JywgdHJ1ZSk7XG5cbi8qKlxuICogQ2hlY2sgaWYgYW4gYXR0cmlidXRlIGlzIGEgcmVzZXJ2ZWQgYXR0cmlidXRlLlxuICovXG52YXIgaXNSZXNlcnZlZEF0dHJpYnV0ZSA9IG1ha2VNYXAoJ2tleSxyZWYsc2xvdCxzbG90LXNjb3BlLGlzJyk7XG5cbi8qKlxuICogUmVtb3ZlIGFuIGl0ZW0gZnJvbSBhbiBhcnJheS5cbiAqL1xuZnVuY3Rpb24gcmVtb3ZlIChhcnIsIGl0ZW0pIHtcbiAgaWYgKGFyci5sZW5ndGgpIHtcbiAgICB2YXIgaW5kZXggPSBhcnIuaW5kZXhPZihpdGVtKTtcbiAgICBpZiAoaW5kZXggPiAtMSkge1xuICAgICAgcmV0dXJuIGFyci5zcGxpY2UoaW5kZXgsIDEpXG4gICAgfVxuICB9XG59XG5cbi8qKlxuICogQ2hlY2sgd2hldGhlciBhbiBvYmplY3QgaGFzIHRoZSBwcm9wZXJ0eS5cbiAqL1xudmFyIGhhc093blByb3BlcnR5ID0gT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eTtcbmZ1bmN0aW9uIGhhc093biAob2JqLCBrZXkpIHtcbiAgcmV0dXJuIGhhc093blByb3BlcnR5LmNhbGwob2JqLCBrZXkpXG59XG5cbi8qKlxuICogQ3JlYXRlIGEgY2FjaGVkIHZlcnNpb24gb2YgYSBwdXJlIGZ1bmN0aW9uLlxuICovXG5mdW5jdGlvbiBjYWNoZWQgKGZuKSB7XG4gIHZhciBjYWNoZSA9IE9iamVjdC5jcmVhdGUobnVsbCk7XG4gIHJldHVybiAoZnVuY3Rpb24gY2FjaGVkRm4gKHN0cikge1xuICAgIHZhciBoaXQgPSBjYWNoZVtzdHJdO1xuICAgIHJldHVybiBoaXQgfHwgKGNhY2hlW3N0cl0gPSBmbihzdHIpKVxuICB9KVxufVxuXG4vKipcbiAqIENhbWVsaXplIGEgaHlwaGVuLWRlbGltaXRlZCBzdHJpbmcuXG4gKi9cbnZhciBjYW1lbGl6ZVJFID0gLy0oXFx3KS9nO1xudmFyIGNhbWVsaXplID0gY2FjaGVkKGZ1bmN0aW9uIChzdHIpIHtcbiAgcmV0dXJuIHN0ci5yZXBsYWNlKGNhbWVsaXplUkUsIGZ1bmN0aW9uIChfLCBjKSB7IHJldHVybiBjID8gYy50b1VwcGVyQ2FzZSgpIDogJyc7IH0pXG59KTtcblxuLyoqXG4gKiBDYXBpdGFsaXplIGEgc3RyaW5nLlxuICovXG52YXIgY2FwaXRhbGl6ZSA9IGNhY2hlZChmdW5jdGlvbiAoc3RyKSB7XG4gIHJldHVybiBzdHIuY2hhckF0KDApLnRvVXBwZXJDYXNlKCkgKyBzdHIuc2xpY2UoMSlcbn0pO1xuXG4vKipcbiAqIEh5cGhlbmF0ZSBhIGNhbWVsQ2FzZSBzdHJpbmcuXG4gKi9cbnZhciBoeXBoZW5hdGVSRSA9IC9cXEIoW0EtWl0pL2c7XG52YXIgaHlwaGVuYXRlID0gY2FjaGVkKGZ1bmN0aW9uIChzdHIpIHtcbiAgcmV0dXJuIHN0ci5yZXBsYWNlKGh5cGhlbmF0ZVJFLCAnLSQxJykudG9Mb3dlckNhc2UoKVxufSk7XG5cbi8qKlxuICogU2ltcGxlIGJpbmQgcG9seWZpbGwgZm9yIGVudmlyb25tZW50cyB0aGF0IGRvIG5vdCBzdXBwb3J0IGl0LFxuICogZS5nLiwgUGhhbnRvbUpTIDEueC4gVGVjaG5pY2FsbHksIHdlIGRvbid0IG5lZWQgdGhpcyBhbnltb3JlXG4gKiBzaW5jZSBuYXRpdmUgYmluZCBpcyBub3cgcGVyZm9ybWFudCBlbm91Z2ggaW4gbW9zdCBicm93c2Vycy5cbiAqIEJ1dCByZW1vdmluZyBpdCB3b3VsZCBtZWFuIGJyZWFraW5nIGNvZGUgdGhhdCB3YXMgYWJsZSB0byBydW4gaW5cbiAqIFBoYW50b21KUyAxLngsIHNvIHRoaXMgbXVzdCBiZSBrZXB0IGZvciBiYWNrd2FyZCBjb21wYXRpYmlsaXR5LlxuICovXG5cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICovXG5mdW5jdGlvbiBwb2x5ZmlsbEJpbmQgKGZuLCBjdHgpIHtcbiAgZnVuY3Rpb24gYm91bmRGbiAoYSkge1xuICAgIHZhciBsID0gYXJndW1lbnRzLmxlbmd0aDtcbiAgICByZXR1cm4gbFxuICAgICAgPyBsID4gMVxuICAgICAgICA/IGZuLmFwcGx5KGN0eCwgYXJndW1lbnRzKVxuICAgICAgICA6IGZuLmNhbGwoY3R4LCBhKVxuICAgICAgOiBmbi5jYWxsKGN0eClcbiAgfVxuXG4gIGJvdW5kRm4uX2xlbmd0aCA9IGZuLmxlbmd0aDtcbiAgcmV0dXJuIGJvdW5kRm5cbn1cblxuZnVuY3Rpb24gbmF0aXZlQmluZCAoZm4sIGN0eCkge1xuICByZXR1cm4gZm4uYmluZChjdHgpXG59XG5cbnZhciBiaW5kID0gRnVuY3Rpb24ucHJvdG90eXBlLmJpbmRcbiAgPyBuYXRpdmVCaW5kXG4gIDogcG9seWZpbGxCaW5kO1xuXG4vKipcbiAqIENvbnZlcnQgYW4gQXJyYXktbGlrZSBvYmplY3QgdG8gYSByZWFsIEFycmF5LlxuICovXG5mdW5jdGlvbiB0b0FycmF5IChsaXN0LCBzdGFydCkge1xuICBzdGFydCA9IHN0YXJ0IHx8IDA7XG4gIHZhciBpID0gbGlzdC5sZW5ndGggLSBzdGFydDtcbiAgdmFyIHJldCA9IG5ldyBBcnJheShpKTtcbiAgd2hpbGUgKGktLSkge1xuICAgIHJldFtpXSA9IGxpc3RbaSArIHN0YXJ0XTtcbiAgfVxuICByZXR1cm4gcmV0XG59XG5cbi8qKlxuICogTWl4IHByb3BlcnRpZXMgaW50byB0YXJnZXQgb2JqZWN0LlxuICovXG5mdW5jdGlvbiBleHRlbmQgKHRvLCBfZnJvbSkge1xuICBmb3IgKHZhciBrZXkgaW4gX2Zyb20pIHtcbiAgICB0b1trZXldID0gX2Zyb21ba2V5XTtcbiAgfVxuICByZXR1cm4gdG9cbn1cblxuLyoqXG4gKiBNZXJnZSBhbiBBcnJheSBvZiBPYmplY3RzIGludG8gYSBzaW5nbGUgT2JqZWN0LlxuICovXG5mdW5jdGlvbiB0b09iamVjdCAoYXJyKSB7XG4gIHZhciByZXMgPSB7fTtcbiAgZm9yICh2YXIgaSA9IDA7IGkgPCBhcnIubGVuZ3RoOyBpKyspIHtcbiAgICBpZiAoYXJyW2ldKSB7XG4gICAgICBleHRlbmQocmVzLCBhcnJbaV0pO1xuICAgIH1cbiAgfVxuICByZXR1cm4gcmVzXG59XG5cbi8qIGVzbGludC1kaXNhYmxlIG5vLXVudXNlZC12YXJzICovXG5cbi8qKlxuICogUGVyZm9ybSBubyBvcGVyYXRpb24uXG4gKiBTdHViYmluZyBhcmdzIHRvIG1ha2UgRmxvdyBoYXBweSB3aXRob3V0IGxlYXZpbmcgdXNlbGVzcyB0cmFuc3BpbGVkIGNvZGVcbiAqIHdpdGggLi4ucmVzdCAoaHR0cHM6Ly9mbG93Lm9yZy9ibG9nLzIwMTcvMDUvMDcvU3RyaWN0LUZ1bmN0aW9uLUNhbGwtQXJpdHkvKS5cbiAqL1xuZnVuY3Rpb24gbm9vcCAoYSwgYiwgYykge31cblxuLyoqXG4gKiBBbHdheXMgcmV0dXJuIGZhbHNlLlxuICovXG52YXIgbm8gPSBmdW5jdGlvbiAoYSwgYiwgYykgeyByZXR1cm4gZmFsc2U7IH07XG5cbi8qIGVzbGludC1lbmFibGUgbm8tdW51c2VkLXZhcnMgKi9cblxuLyoqXG4gKiBSZXR1cm4gdGhlIHNhbWUgdmFsdWUuXG4gKi9cbnZhciBpZGVudGl0eSA9IGZ1bmN0aW9uIChfKSB7IHJldHVybiBfOyB9O1xuXG4vKipcbiAqIENoZWNrIGlmIHR3byB2YWx1ZXMgYXJlIGxvb3NlbHkgZXF1YWwgLSB0aGF0IGlzLFxuICogaWYgdGhleSBhcmUgcGxhaW4gb2JqZWN0cywgZG8gdGhleSBoYXZlIHRoZSBzYW1lIHNoYXBlP1xuICovXG5mdW5jdGlvbiBsb29zZUVxdWFsIChhLCBiKSB7XG4gIGlmIChhID09PSBiKSB7IHJldHVybiB0cnVlIH1cbiAgdmFyIGlzT2JqZWN0QSA9IGlzT2JqZWN0KGEpO1xuICB2YXIgaXNPYmplY3RCID0gaXNPYmplY3QoYik7XG4gIGlmIChpc09iamVjdEEgJiYgaXNPYmplY3RCKSB7XG4gICAgdHJ5IHtcbiAgICAgIHZhciBpc0FycmF5QSA9IEFycmF5LmlzQXJyYXkoYSk7XG4gICAgICB2YXIgaXNBcnJheUIgPSBBcnJheS5pc0FycmF5KGIpO1xuICAgICAgaWYgKGlzQXJyYXlBICYmIGlzQXJyYXlCKSB7XG4gICAgICAgIHJldHVybiBhLmxlbmd0aCA9PT0gYi5sZW5ndGggJiYgYS5ldmVyeShmdW5jdGlvbiAoZSwgaSkge1xuICAgICAgICAgIHJldHVybiBsb29zZUVxdWFsKGUsIGJbaV0pXG4gICAgICAgIH0pXG4gICAgICB9IGVsc2UgaWYgKGEgaW5zdGFuY2VvZiBEYXRlICYmIGIgaW5zdGFuY2VvZiBEYXRlKSB7XG4gICAgICAgIHJldHVybiBhLmdldFRpbWUoKSA9PT0gYi5nZXRUaW1lKClcbiAgICAgIH0gZWxzZSBpZiAoIWlzQXJyYXlBICYmICFpc0FycmF5Qikge1xuICAgICAgICB2YXIga2V5c0EgPSBPYmplY3Qua2V5cyhhKTtcbiAgICAgICAgdmFyIGtleXNCID0gT2JqZWN0LmtleXMoYik7XG4gICAgICAgIHJldHVybiBrZXlzQS5sZW5ndGggPT09IGtleXNCLmxlbmd0aCAmJiBrZXlzQS5ldmVyeShmdW5jdGlvbiAoa2V5KSB7XG4gICAgICAgICAgcmV0dXJuIGxvb3NlRXF1YWwoYVtrZXldLCBiW2tleV0pXG4gICAgICAgIH0pXG4gICAgICB9IGVsc2Uge1xuICAgICAgICAvKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAqL1xuICAgICAgICByZXR1cm4gZmFsc2VcbiAgICAgIH1cbiAgICB9IGNhdGNoIChlKSB7XG4gICAgICAvKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAqL1xuICAgICAgcmV0dXJuIGZhbHNlXG4gICAgfVxuICB9IGVsc2UgaWYgKCFpc09iamVjdEEgJiYgIWlzT2JqZWN0Qikge1xuICAgIHJldHVybiBTdHJpbmcoYSkgPT09IFN0cmluZyhiKVxuICB9IGVsc2Uge1xuICAgIHJldHVybiBmYWxzZVxuICB9XG59XG5cbi8qKlxuICogUmV0dXJuIHRoZSBmaXJzdCBpbmRleCBhdCB3aGljaCBhIGxvb3NlbHkgZXF1YWwgdmFsdWUgY2FuIGJlXG4gKiBmb3VuZCBpbiB0aGUgYXJyYXkgKGlmIHZhbHVlIGlzIGEgcGxhaW4gb2JqZWN0LCB0aGUgYXJyYXkgbXVzdFxuICogY29udGFpbiBhbiBvYmplY3Qgb2YgdGhlIHNhbWUgc2hhcGUpLCBvciAtMSBpZiBpdCBpcyBub3QgcHJlc2VudC5cbiAqL1xuZnVuY3Rpb24gbG9vc2VJbmRleE9mIChhcnIsIHZhbCkge1xuICBmb3IgKHZhciBpID0gMDsgaSA8IGFyci5sZW5ndGg7IGkrKykge1xuICAgIGlmIChsb29zZUVxdWFsKGFycltpXSwgdmFsKSkgeyByZXR1cm4gaSB9XG4gIH1cbiAgcmV0dXJuIC0xXG59XG5cbi8qKlxuICogRW5zdXJlIGEgZnVuY3Rpb24gaXMgY2FsbGVkIG9ubHkgb25jZS5cbiAqL1xuZnVuY3Rpb24gb25jZSAoZm4pIHtcbiAgdmFyIGNhbGxlZCA9IGZhbHNlO1xuICByZXR1cm4gZnVuY3Rpb24gKCkge1xuICAgIGlmICghY2FsbGVkKSB7XG4gICAgICBjYWxsZWQgPSB0cnVlO1xuICAgICAgZm4uYXBwbHkodGhpcywgYXJndW1lbnRzKTtcbiAgICB9XG4gIH1cbn1cblxudmFyIEFTU0VUX1RZUEVTID0gW1xuICAnY29tcG9uZW50JyxcbiAgJ2RpcmVjdGl2ZScsXG4gICdmaWx0ZXInXG5dO1xuXG52YXIgTElGRUNZQ0xFX0hPT0tTID0gW1xuICAnYmVmb3JlQ3JlYXRlJyxcbiAgJ2NyZWF0ZWQnLFxuICAnYmVmb3JlTW91bnQnLFxuICAnbW91bnRlZCcsXG4gICdiZWZvcmVVcGRhdGUnLFxuICAndXBkYXRlZCcsXG4gICdiZWZvcmVEZXN0cm95JyxcbiAgJ2Rlc3Ryb3llZCcsXG4gICdhY3RpdmF0ZWQnLFxuICAnZGVhY3RpdmF0ZWQnLFxuICAnZXJyb3JDYXB0dXJlZCcsXG4gICdzZXJ2ZXJQcmVmZXRjaCdcbl07XG5cbi8qICAqL1xuXG5cblxudmFyIGNvbmZpZyA9ICh7XG4gIC8qKlxuICAgKiBPcHRpb24gbWVyZ2Ugc3RyYXRlZ2llcyAodXNlZCBpbiBjb3JlL3V0aWwvb3B0aW9ucylcbiAgICovXG4gIC8vICRmbG93LWRpc2FibGUtbGluZVxuICBvcHRpb25NZXJnZVN0cmF0ZWdpZXM6IE9iamVjdC5jcmVhdGUobnVsbCksXG5cbiAgLyoqXG4gICAqIFdoZXRoZXIgdG8gc3VwcHJlc3Mgd2FybmluZ3MuXG4gICAqL1xuICBzaWxlbnQ6IGZhbHNlLFxuXG4gIC8qKlxuICAgKiBTaG93IHByb2R1Y3Rpb24gbW9kZSB0aXAgbWVzc2FnZSBvbiBib290P1xuICAgKi9cbiAgcHJvZHVjdGlvblRpcDogcHJvY2Vzcy5lbnYuTk9ERV9FTlYgIT09ICdwcm9kdWN0aW9uJyxcblxuICAvKipcbiAgICogV2hldGhlciB0byBlbmFibGUgZGV2dG9vbHNcbiAgICovXG4gIGRldnRvb2xzOiBwcm9jZXNzLmVudi5OT0RFX0VOViAhPT0gJ3Byb2R1Y3Rpb24nLFxuXG4gIC8qKlxuICAgKiBXaGV0aGVyIHRvIHJlY29yZCBwZXJmXG4gICAqL1xuICBwZXJmb3JtYW5jZTogZmFsc2UsXG5cbiAgLyoqXG4gICAqIEVycm9yIGhhbmRsZXIgZm9yIHdhdGNoZXIgZXJyb3JzXG4gICAqL1xuICBlcnJvckhhbmRsZXI6IG51bGwsXG5cbiAgLyoqXG4gICAqIFdhcm4gaGFuZGxlciBmb3Igd2F0Y2hlciB3YXJuc1xuICAgKi9cbiAgd2FybkhhbmRsZXI6IG51bGwsXG5cbiAgLyoqXG4gICAqIElnbm9yZSBjZXJ0YWluIGN1c3RvbSBlbGVtZW50c1xuICAgKi9cbiAgaWdub3JlZEVsZW1lbnRzOiBbXSxcblxuICAvKipcbiAgICogQ3VzdG9tIHVzZXIga2V5IGFsaWFzZXMgZm9yIHYtb25cbiAgICovXG4gIC8vICRmbG93LWRpc2FibGUtbGluZVxuICBrZXlDb2RlczogT2JqZWN0LmNyZWF0ZShudWxsKSxcblxuICAvKipcbiAgICogQ2hlY2sgaWYgYSB0YWcgaXMgcmVzZXJ2ZWQgc28gdGhhdCBpdCBjYW5ub3QgYmUgcmVnaXN0ZXJlZCBhcyBhXG4gICAqIGNvbXBvbmVudC4gVGhpcyBpcyBwbGF0Zm9ybS1kZXBlbmRlbnQgYW5kIG1heSBiZSBvdmVyd3JpdHRlbi5cbiAgICovXG4gIGlzUmVzZXJ2ZWRUYWc6IG5vLFxuXG4gIC8qKlxuICAgKiBDaGVjayBpZiBhbiBhdHRyaWJ1dGUgaXMgcmVzZXJ2ZWQgc28gdGhhdCBpdCBjYW5ub3QgYmUgdXNlZCBhcyBhIGNvbXBvbmVudFxuICAgKiBwcm9wLiBUaGlzIGlzIHBsYXRmb3JtLWRlcGVuZGVudCBhbmQgbWF5IGJlIG92ZXJ3cml0dGVuLlxuICAgKi9cbiAgaXNSZXNlcnZlZEF0dHI6IG5vLFxuXG4gIC8qKlxuICAgKiBDaGVjayBpZiBhIHRhZyBpcyBhbiB1bmtub3duIGVsZW1lbnQuXG4gICAqIFBsYXRmb3JtLWRlcGVuZGVudC5cbiAgICovXG4gIGlzVW5rbm93bkVsZW1lbnQ6IG5vLFxuXG4gIC8qKlxuICAgKiBHZXQgdGhlIG5hbWVzcGFjZSBvZiBhbiBlbGVtZW50XG4gICAqL1xuICBnZXRUYWdOYW1lc3BhY2U6IG5vb3AsXG5cbiAgLyoqXG4gICAqIFBhcnNlIHRoZSByZWFsIHRhZyBuYW1lIGZvciB0aGUgc3BlY2lmaWMgcGxhdGZvcm0uXG4gICAqL1xuICBwYXJzZVBsYXRmb3JtVGFnTmFtZTogaWRlbnRpdHksXG5cbiAgLyoqXG4gICAqIENoZWNrIGlmIGFuIGF0dHJpYnV0ZSBtdXN0IGJlIGJvdW5kIHVzaW5nIHByb3BlcnR5LCBlLmcuIHZhbHVlXG4gICAqIFBsYXRmb3JtLWRlcGVuZGVudC5cbiAgICovXG4gIG11c3RVc2VQcm9wOiBubyxcblxuICAvKipcbiAgICogUGVyZm9ybSB1cGRhdGVzIGFzeW5jaHJvbm91c2x5LiBJbnRlbmRlZCB0byBiZSB1c2VkIGJ5IFZ1ZSBUZXN0IFV0aWxzXG4gICAqIFRoaXMgd2lsbCBzaWduaWZpY2FudGx5IHJlZHVjZSBwZXJmb3JtYW5jZSBpZiBzZXQgdG8gZmFsc2UuXG4gICAqL1xuICBhc3luYzogdHJ1ZSxcblxuICAvKipcbiAgICogRXhwb3NlZCBmb3IgbGVnYWN5IHJlYXNvbnNcbiAgICovXG4gIF9saWZlY3ljbGVIb29rczogTElGRUNZQ0xFX0hPT0tTXG59KTtcblxuLyogICovXG5cbi8qKlxuICogdW5pY29kZSBsZXR0ZXJzIHVzZWQgZm9yIHBhcnNpbmcgaHRtbCB0YWdzLCBjb21wb25lbnQgbmFtZXMgYW5kIHByb3BlcnR5IHBhdGhzLlxuICogdXNpbmcgaHR0cHM6Ly93d3cudzMub3JnL1RSL2h0bWw1My9zZW1hbnRpY3Mtc2NyaXB0aW5nLmh0bWwjcG90ZW50aWFsY3VzdG9tZWxlbWVudG5hbWVcbiAqIHNraXBwaW5nIFxcdTEwMDAwLVxcdUVGRkZGIGR1ZSB0byBpdCBmcmVlemluZyB1cCBQaGFudG9tSlNcbiAqL1xudmFyIHVuaWNvZGVSZWdFeHAgPSAvYS16QS1aXFx1MDBCN1xcdTAwQzAtXFx1MDBENlxcdTAwRDgtXFx1MDBGNlxcdTAwRjgtXFx1MDM3RFxcdTAzN0YtXFx1MUZGRlxcdTIwMEMtXFx1MjAwRFxcdTIwM0YtXFx1MjA0MFxcdTIwNzAtXFx1MjE4RlxcdTJDMDAtXFx1MkZFRlxcdTMwMDEtXFx1RDdGRlxcdUY5MDAtXFx1RkRDRlxcdUZERjAtXFx1RkZGRC87XG5cbi8qKlxuICogQ2hlY2sgaWYgYSBzdHJpbmcgc3RhcnRzIHdpdGggJCBvciBfXG4gKi9cbmZ1bmN0aW9uIGlzUmVzZXJ2ZWQgKHN0cikge1xuICB2YXIgYyA9IChzdHIgKyAnJykuY2hhckNvZGVBdCgwKTtcbiAgcmV0dXJuIGMgPT09IDB4MjQgfHwgYyA9PT0gMHg1RlxufVxuXG4vKipcbiAqIERlZmluZSBhIHByb3BlcnR5LlxuICovXG5mdW5jdGlvbiBkZWYgKG9iaiwga2V5LCB2YWwsIGVudW1lcmFibGUpIHtcbiAgT2JqZWN0LmRlZmluZVByb3BlcnR5KG9iaiwga2V5LCB7XG4gICAgdmFsdWU6IHZhbCxcbiAgICBlbnVtZXJhYmxlOiAhIWVudW1lcmFibGUsXG4gICAgd3JpdGFibGU6IHRydWUsXG4gICAgY29uZmlndXJhYmxlOiB0cnVlXG4gIH0pO1xufVxuXG4vKipcbiAqIFBhcnNlIHNpbXBsZSBwYXRoLlxuICovXG52YXIgYmFpbFJFID0gbmV3IFJlZ0V4cCgoXCJbXlwiICsgKHVuaWNvZGVSZWdFeHAuc291cmNlKSArIFwiLiRfXFxcXGRdXCIpKTtcbmZ1bmN0aW9uIHBhcnNlUGF0aCAocGF0aCkge1xuICBpZiAoYmFpbFJFLnRlc3QocGF0aCkpIHtcbiAgICByZXR1cm5cbiAgfVxuICB2YXIgc2VnbWVudHMgPSBwYXRoLnNwbGl0KCcuJyk7XG4gIHJldHVybiBmdW5jdGlvbiAob2JqKSB7XG4gICAgZm9yICh2YXIgaSA9IDA7IGkgPCBzZWdtZW50cy5sZW5ndGg7IGkrKykge1xuICAgICAgaWYgKCFvYmopIHsgcmV0dXJuIH1cbiAgICAgIG9iaiA9IG9ialtzZWdtZW50c1tpXV07XG4gICAgfVxuICAgIHJldHVybiBvYmpcbiAgfVxufVxuXG4vKiAgKi9cblxuLy8gY2FuIHdlIHVzZSBfX3Byb3RvX18/XG52YXIgaGFzUHJvdG8gPSAnX19wcm90b19fJyBpbiB7fTtcblxuLy8gQnJvd3NlciBlbnZpcm9ubWVudCBzbmlmZmluZ1xudmFyIGluQnJvd3NlciA9IHR5cGVvZiB3aW5kb3cgIT09ICd1bmRlZmluZWQnO1xudmFyIGluV2VleCA9IHR5cGVvZiBXWEVudmlyb25tZW50ICE9PSAndW5kZWZpbmVkJyAmJiAhIVdYRW52aXJvbm1lbnQucGxhdGZvcm07XG52YXIgd2VleFBsYXRmb3JtID0gaW5XZWV4ICYmIFdYRW52aXJvbm1lbnQucGxhdGZvcm0udG9Mb3dlckNhc2UoKTtcbnZhciBVQSA9IGluQnJvd3NlciAmJiB3aW5kb3cubmF2aWdhdG9yLnVzZXJBZ2VudC50b0xvd2VyQ2FzZSgpO1xudmFyIGlzSUUgPSBVQSAmJiAvbXNpZXx0cmlkZW50Ly50ZXN0KFVBKTtcbnZhciBpc0lFOSA9IFVBICYmIFVBLmluZGV4T2YoJ21zaWUgOS4wJykgPiAwO1xudmFyIGlzRWRnZSA9IFVBICYmIFVBLmluZGV4T2YoJ2VkZ2UvJykgPiAwO1xudmFyIGlzQW5kcm9pZCA9IChVQSAmJiBVQS5pbmRleE9mKCdhbmRyb2lkJykgPiAwKSB8fCAod2VleFBsYXRmb3JtID09PSAnYW5kcm9pZCcpO1xudmFyIGlzSU9TID0gKFVBICYmIC9pcGhvbmV8aXBhZHxpcG9kfGlvcy8udGVzdChVQSkpIHx8ICh3ZWV4UGxhdGZvcm0gPT09ICdpb3MnKTtcbnZhciBpc0Nocm9tZSA9IFVBICYmIC9jaHJvbWVcXC9cXGQrLy50ZXN0KFVBKSAmJiAhaXNFZGdlO1xudmFyIGlzUGhhbnRvbUpTID0gVUEgJiYgL3BoYW50b21qcy8udGVzdChVQSk7XG52YXIgaXNGRiA9IFVBICYmIFVBLm1hdGNoKC9maXJlZm94XFwvKFxcZCspLyk7XG5cbi8vIEZpcmVmb3ggaGFzIGEgXCJ3YXRjaFwiIGZ1bmN0aW9uIG9uIE9iamVjdC5wcm90b3R5cGUuLi5cbnZhciBuYXRpdmVXYXRjaCA9ICh7fSkud2F0Y2g7XG5pZiAoaW5Ccm93c2VyKSB7XG4gIHRyeSB7XG4gICAgdmFyIG9wdHMgPSB7fTtcbiAgICBPYmplY3QuZGVmaW5lUHJvcGVydHkob3B0cywgJ3Bhc3NpdmUnLCAoe1xuICAgICAgZ2V0OiBmdW5jdGlvbiBnZXQgKCkge1xuICAgICAgfVxuICAgIH0pKTsgLy8gaHR0cHM6Ly9naXRodWIuY29tL2ZhY2Vib29rL2Zsb3cvaXNzdWVzLzI4NVxuICAgIHdpbmRvdy5hZGRFdmVudExpc3RlbmVyKCd0ZXN0LXBhc3NpdmUnLCBudWxsLCBvcHRzKTtcbiAgfSBjYXRjaCAoZSkge31cbn1cblxuLy8gdGhpcyBuZWVkcyB0byBiZSBsYXp5LWV2YWxlZCBiZWNhdXNlIHZ1ZSBtYXkgYmUgcmVxdWlyZWQgYmVmb3JlXG4vLyB2dWUtc2VydmVyLXJlbmRlcmVyIGNhbiBzZXQgVlVFX0VOVlxudmFyIF9pc1NlcnZlcjtcbnZhciBpc1NlcnZlclJlbmRlcmluZyA9IGZ1bmN0aW9uICgpIHtcbiAgaWYgKF9pc1NlcnZlciA9PT0gdW5kZWZpbmVkKSB7XG4gICAgLyogaXN0YW5idWwgaWdub3JlIGlmICovXG4gICAgaWYgKCFpbkJyb3dzZXIgJiYgIWluV2VleCAmJiB0eXBlb2YgZ2xvYmFsICE9PSAndW5kZWZpbmVkJykge1xuICAgICAgLy8gZGV0ZWN0IHByZXNlbmNlIG9mIHZ1ZS1zZXJ2ZXItcmVuZGVyZXIgYW5kIGF2b2lkXG4gICAgICAvLyBXZWJwYWNrIHNoaW1taW5nIHRoZSBwcm9jZXNzXG4gICAgICBfaXNTZXJ2ZXIgPSBnbG9iYWxbJ3Byb2Nlc3MnXSAmJiBnbG9iYWxbJ3Byb2Nlc3MnXS5lbnYuVlVFX0VOViA9PT0gJ3NlcnZlcic7XG4gICAgfSBlbHNlIHtcbiAgICAgIF9pc1NlcnZlciA9IGZhbHNlO1xuICAgIH1cbiAgfVxuICByZXR1cm4gX2lzU2VydmVyXG59O1xuXG4vLyBkZXRlY3QgZGV2dG9vbHNcbnZhciBkZXZ0b29scyA9IGluQnJvd3NlciAmJiB3aW5kb3cuX19WVUVfREVWVE9PTFNfR0xPQkFMX0hPT0tfXztcblxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgKi9cbmZ1bmN0aW9uIGlzTmF0aXZlIChDdG9yKSB7XG4gIHJldHVybiB0eXBlb2YgQ3RvciA9PT0gJ2Z1bmN0aW9uJyAmJiAvbmF0aXZlIGNvZGUvLnRlc3QoQ3Rvci50b1N0cmluZygpKVxufVxuXG52YXIgaGFzU3ltYm9sID1cbiAgdHlwZW9mIFN5bWJvbCAhPT0gJ3VuZGVmaW5lZCcgJiYgaXNOYXRpdmUoU3ltYm9sKSAmJlxuICB0eXBlb2YgUmVmbGVjdCAhPT0gJ3VuZGVmaW5lZCcgJiYgaXNOYXRpdmUoUmVmbGVjdC5vd25LZXlzKTtcblxudmFyIF9TZXQ7XG4vKiBpc3RhbmJ1bCBpZ25vcmUgaWYgKi8gLy8gJGZsb3ctZGlzYWJsZS1saW5lXG5pZiAodHlwZW9mIFNldCAhPT0gJ3VuZGVmaW5lZCcgJiYgaXNOYXRpdmUoU2V0KSkge1xuICAvLyB1c2UgbmF0aXZlIFNldCB3aGVuIGF2YWlsYWJsZS5cbiAgX1NldCA9IFNldDtcbn0gZWxzZSB7XG4gIC8vIGEgbm9uLXN0YW5kYXJkIFNldCBwb2x5ZmlsbCB0aGF0IG9ubHkgd29ya3Mgd2l0aCBwcmltaXRpdmUga2V5cy5cbiAgX1NldCA9IC8qQF9fUFVSRV9fKi8oZnVuY3Rpb24gKCkge1xuICAgIGZ1bmN0aW9uIFNldCAoKSB7XG4gICAgICB0aGlzLnNldCA9IE9iamVjdC5jcmVhdGUobnVsbCk7XG4gICAgfVxuICAgIFNldC5wcm90b3R5cGUuaGFzID0gZnVuY3Rpb24gaGFzIChrZXkpIHtcbiAgICAgIHJldHVybiB0aGlzLnNldFtrZXldID09PSB0cnVlXG4gICAgfTtcbiAgICBTZXQucHJvdG90eXBlLmFkZCA9IGZ1bmN0aW9uIGFkZCAoa2V5KSB7XG4gICAgICB0aGlzLnNldFtrZXldID0gdHJ1ZTtcbiAgICB9O1xuICAgIFNldC5wcm90b3R5cGUuY2xlYXIgPSBmdW5jdGlvbiBjbGVhciAoKSB7XG4gICAgICB0aGlzLnNldCA9IE9iamVjdC5jcmVhdGUobnVsbCk7XG4gICAgfTtcblxuICAgIHJldHVybiBTZXQ7XG4gIH0oKSk7XG59XG5cbi8qICAqL1xuXG52YXIgd2FybiA9IG5vb3A7XG52YXIgdGlwID0gbm9vcDtcbnZhciBnZW5lcmF0ZUNvbXBvbmVudFRyYWNlID0gKG5vb3ApOyAvLyB3b3JrIGFyb3VuZCBmbG93IGNoZWNrXG52YXIgZm9ybWF0Q29tcG9uZW50TmFtZSA9IChub29wKTtcblxuaWYgKHByb2Nlc3MuZW52Lk5PREVfRU5WICE9PSAncHJvZHVjdGlvbicpIHtcbiAgdmFyIGhhc0NvbnNvbGUgPSB0eXBlb2YgY29uc29sZSAhPT0gJ3VuZGVmaW5lZCc7XG4gIHZhciBjbGFzc2lmeVJFID0gLyg/Ol58Wy1fXSkoXFx3KS9nO1xuICB2YXIgY2xhc3NpZnkgPSBmdW5jdGlvbiAoc3RyKSB7IHJldHVybiBzdHJcbiAgICAucmVwbGFjZShjbGFzc2lmeVJFLCBmdW5jdGlvbiAoYykgeyByZXR1cm4gYy50b1VwcGVyQ2FzZSgpOyB9KVxuICAgIC5yZXBsYWNlKC9bLV9dL2csICcnKTsgfTtcblxuICB3YXJuID0gZnVuY3Rpb24gKG1zZywgdm0pIHtcbiAgICB2YXIgdHJhY2UgPSB2bSA/IGdlbmVyYXRlQ29tcG9uZW50VHJhY2Uodm0pIDogJyc7XG5cbiAgICBpZiAoY29uZmlnLndhcm5IYW5kbGVyKSB7XG4gICAgICBjb25maWcud2FybkhhbmRsZXIuY2FsbChudWxsLCBtc2csIHZtLCB0cmFjZSk7XG4gICAgfSBlbHNlIGlmIChoYXNDb25zb2xlICYmICghY29uZmlnLnNpbGVudCkpIHtcbiAgICAgIGNvbnNvbGUuZXJyb3IoKFwiW1Z1ZSB3YXJuXTogXCIgKyBtc2cgKyB0cmFjZSkpO1xuICAgIH1cbiAgfTtcblxuICB0aXAgPSBmdW5jdGlvbiAobXNnLCB2bSkge1xuICAgIGlmIChoYXNDb25zb2xlICYmICghY29uZmlnLnNpbGVudCkpIHtcbiAgICAgIGNvbnNvbGUud2FybihcIltWdWUgdGlwXTogXCIgKyBtc2cgKyAoXG4gICAgICAgIHZtID8gZ2VuZXJhdGVDb21wb25lbnRUcmFjZSh2bSkgOiAnJ1xuICAgICAgKSk7XG4gICAgfVxuICB9O1xuXG4gIGZvcm1hdENvbXBvbmVudE5hbWUgPSBmdW5jdGlvbiAodm0sIGluY2x1ZGVGaWxlKSB7XG4gICAgaWYgKHZtLiRyb290ID09PSB2bSkge1xuICAgICAgaWYgKHZtLiRvcHRpb25zICYmIHZtLiRvcHRpb25zLl9fZmlsZSkgeyAvLyBmaXhlZCBieSB4eHh4eHhcbiAgICAgICAgcmV0dXJuICgnJykgKyB2bS4kb3B0aW9ucy5fX2ZpbGVcbiAgICAgIH1cbiAgICAgIHJldHVybiAnPFJvb3Q+J1xuICAgIH1cbiAgICB2YXIgb3B0aW9ucyA9IHR5cGVvZiB2bSA9PT0gJ2Z1bmN0aW9uJyAmJiB2bS5jaWQgIT0gbnVsbFxuICAgICAgPyB2bS5vcHRpb25zXG4gICAgICA6IHZtLl9pc1Z1ZVxuICAgICAgICA/IHZtLiRvcHRpb25zIHx8IHZtLmNvbnN0cnVjdG9yLm9wdGlvbnNcbiAgICAgICAgOiB2bTtcbiAgICB2YXIgbmFtZSA9IG9wdGlvbnMubmFtZSB8fCBvcHRpb25zLl9jb21wb25lbnRUYWc7XG4gICAgdmFyIGZpbGUgPSBvcHRpb25zLl9fZmlsZTtcbiAgICBpZiAoIW5hbWUgJiYgZmlsZSkge1xuICAgICAgdmFyIG1hdGNoID0gZmlsZS5tYXRjaCgvKFteL1xcXFxdKylcXC52dWUkLyk7XG4gICAgICBuYW1lID0gbWF0Y2ggJiYgbWF0Y2hbMV07XG4gICAgfVxuXG4gICAgcmV0dXJuIChcbiAgICAgIChuYW1lID8gKFwiPFwiICsgKGNsYXNzaWZ5KG5hbWUpKSArIFwiPlwiKSA6IFwiPEFub255bW91cz5cIikgK1xuICAgICAgKGZpbGUgJiYgaW5jbHVkZUZpbGUgIT09IGZhbHNlID8gKFwiIGF0IFwiICsgZmlsZSkgOiAnJylcbiAgICApXG4gIH07XG5cbiAgdmFyIHJlcGVhdCA9IGZ1bmN0aW9uIChzdHIsIG4pIHtcbiAgICB2YXIgcmVzID0gJyc7XG4gICAgd2hpbGUgKG4pIHtcbiAgICAgIGlmIChuICUgMiA9PT0gMSkgeyByZXMgKz0gc3RyOyB9XG4gICAgICBpZiAobiA+IDEpIHsgc3RyICs9IHN0cjsgfVxuICAgICAgbiA+Pj0gMTtcbiAgICB9XG4gICAgcmV0dXJuIHJlc1xuICB9O1xuXG4gIGdlbmVyYXRlQ29tcG9uZW50VHJhY2UgPSBmdW5jdGlvbiAodm0pIHtcbiAgICBpZiAodm0uX2lzVnVlICYmIHZtLiRwYXJlbnQpIHtcbiAgICAgIHZhciB0cmVlID0gW107XG4gICAgICB2YXIgY3VycmVudFJlY3Vyc2l2ZVNlcXVlbmNlID0gMDtcbiAgICAgIHdoaWxlICh2bSAmJiB2bS4kb3B0aW9ucy5uYW1lICE9PSAnUGFnZUJvZHknKSB7XG4gICAgICAgIGlmICh0cmVlLmxlbmd0aCA+IDApIHtcbiAgICAgICAgICB2YXIgbGFzdCA9IHRyZWVbdHJlZS5sZW5ndGggLSAxXTtcbiAgICAgICAgICBpZiAobGFzdC5jb25zdHJ1Y3RvciA9PT0gdm0uY29uc3RydWN0b3IpIHtcbiAgICAgICAgICAgIGN1cnJlbnRSZWN1cnNpdmVTZXF1ZW5jZSsrO1xuICAgICAgICAgICAgdm0gPSB2bS4kcGFyZW50O1xuICAgICAgICAgICAgY29udGludWVcbiAgICAgICAgICB9IGVsc2UgaWYgKGN1cnJlbnRSZWN1cnNpdmVTZXF1ZW5jZSA+IDApIHtcbiAgICAgICAgICAgIHRyZWVbdHJlZS5sZW5ndGggLSAxXSA9IFtsYXN0LCBjdXJyZW50UmVjdXJzaXZlU2VxdWVuY2VdO1xuICAgICAgICAgICAgY3VycmVudFJlY3Vyc2l2ZVNlcXVlbmNlID0gMDtcbiAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICAgICAgIXZtLiRvcHRpb25zLmlzUmVzZXJ2ZWQgJiYgdHJlZS5wdXNoKHZtKTtcbiAgICAgICAgdm0gPSB2bS4kcGFyZW50O1xuICAgICAgfVxuICAgICAgcmV0dXJuICdcXG5cXG5mb3VuZCBpblxcblxcbicgKyB0cmVlXG4gICAgICAgIC5tYXAoZnVuY3Rpb24gKHZtLCBpKSB7IHJldHVybiAoXCJcIiArIChpID09PSAwID8gJy0tLT4gJyA6IHJlcGVhdCgnICcsIDUgKyBpICogMikpICsgKEFycmF5LmlzQXJyYXkodm0pXG4gICAgICAgICAgICA/ICgoZm9ybWF0Q29tcG9uZW50TmFtZSh2bVswXSkpICsgXCIuLi4gKFwiICsgKHZtWzFdKSArIFwiIHJlY3Vyc2l2ZSBjYWxscylcIilcbiAgICAgICAgICAgIDogZm9ybWF0Q29tcG9uZW50TmFtZSh2bSkpKTsgfSlcbiAgICAgICAgLmpvaW4oJ1xcbicpXG4gICAgfSBlbHNlIHtcbiAgICAgIHJldHVybiAoXCJcXG5cXG4oZm91bmQgaW4gXCIgKyAoZm9ybWF0Q29tcG9uZW50TmFtZSh2bSkpICsgXCIpXCIpXG4gICAgfVxuICB9O1xufVxuXG4vKiAgKi9cblxudmFyIHVpZCA9IDA7XG5cbi8qKlxuICogQSBkZXAgaXMgYW4gb2JzZXJ2YWJsZSB0aGF0IGNhbiBoYXZlIG11bHRpcGxlXG4gKiBkaXJlY3RpdmVzIHN1YnNjcmliaW5nIHRvIGl0LlxuICovXG52YXIgRGVwID0gZnVuY3Rpb24gRGVwICgpIHtcbiAgdGhpcy5pZCA9IHVpZCsrO1xuICB0aGlzLnN1YnMgPSBbXTtcbn07XG5cbkRlcC5wcm90b3R5cGUuYWRkU3ViID0gZnVuY3Rpb24gYWRkU3ViIChzdWIpIHtcbiAgdGhpcy5zdWJzLnB1c2goc3ViKTtcbn07XG5cbkRlcC5wcm90b3R5cGUucmVtb3ZlU3ViID0gZnVuY3Rpb24gcmVtb3ZlU3ViIChzdWIpIHtcbiAgcmVtb3ZlKHRoaXMuc3Vicywgc3ViKTtcbn07XG5cbkRlcC5wcm90b3R5cGUuZGVwZW5kID0gZnVuY3Rpb24gZGVwZW5kICgpIHtcbiAgaWYgKERlcC5TaGFyZWRPYmplY3QudGFyZ2V0KSB7XG4gICAgRGVwLlNoYXJlZE9iamVjdC50YXJnZXQuYWRkRGVwKHRoaXMpO1xuICB9XG59O1xuXG5EZXAucHJvdG90eXBlLm5vdGlmeSA9IGZ1bmN0aW9uIG5vdGlmeSAoKSB7XG4gIC8vIHN0YWJpbGl6ZSB0aGUgc3Vic2NyaWJlciBsaXN0IGZpcnN0XG4gIHZhciBzdWJzID0gdGhpcy5zdWJzLnNsaWNlKCk7XG4gIGlmIChwcm9jZXNzLmVudi5OT0RFX0VOViAhPT0gJ3Byb2R1Y3Rpb24nICYmICFjb25maWcuYXN5bmMpIHtcbiAgICAvLyBzdWJzIGFyZW4ndCBzb3J0ZWQgaW4gc2NoZWR1bGVyIGlmIG5vdCBydW5uaW5nIGFzeW5jXG4gICAgLy8gd2UgbmVlZCB0byBzb3J0IHRoZW0gbm93IHRvIG1ha2Ugc3VyZSB0aGV5IGZpcmUgaW4gY29ycmVjdFxuICAgIC8vIG9yZGVyXG4gICAgc3Vicy5zb3J0KGZ1bmN0aW9uIChhLCBiKSB7IHJldHVybiBhLmlkIC0gYi5pZDsgfSk7XG4gIH1cbiAgZm9yICh2YXIgaSA9IDAsIGwgPSBzdWJzLmxlbmd0aDsgaSA8IGw7IGkrKykge1xuICAgIHN1YnNbaV0udXBkYXRlKCk7XG4gIH1cbn07XG5cbi8vIFRoZSBjdXJyZW50IHRhcmdldCB3YXRjaGVyIGJlaW5nIGV2YWx1YXRlZC5cbi8vIFRoaXMgaXMgZ2xvYmFsbHkgdW5pcXVlIGJlY2F1c2Ugb25seSBvbmUgd2F0Y2hlclxuLy8gY2FuIGJlIGV2YWx1YXRlZCBhdCBhIHRpbWUuXG4vLyBmaXhlZCBieSB4eHh4eHggKG52dWUgc2hhcmVkIHZ1ZXgpXG4vKiBlc2xpbnQtZGlzYWJsZSBuby11bmRlZiAqL1xuRGVwLlNoYXJlZE9iamVjdCA9IHt9O1xuRGVwLlNoYXJlZE9iamVjdC50YXJnZXQgPSBudWxsO1xuRGVwLlNoYXJlZE9iamVjdC50YXJnZXRTdGFjayA9IFtdO1xuXG5mdW5jdGlvbiBwdXNoVGFyZ2V0ICh0YXJnZXQpIHtcbiAgRGVwLlNoYXJlZE9iamVjdC50YXJnZXRTdGFjay5wdXNoKHRhcmdldCk7XG4gIERlcC5TaGFyZWRPYmplY3QudGFyZ2V0ID0gdGFyZ2V0O1xuICBEZXAudGFyZ2V0ID0gdGFyZ2V0O1xufVxuXG5mdW5jdGlvbiBwb3BUYXJnZXQgKCkge1xuICBEZXAuU2hhcmVkT2JqZWN0LnRhcmdldFN0YWNrLnBvcCgpO1xuICBEZXAuU2hhcmVkT2JqZWN0LnRhcmdldCA9IERlcC5TaGFyZWRPYmplY3QudGFyZ2V0U3RhY2tbRGVwLlNoYXJlZE9iamVjdC50YXJnZXRTdGFjay5sZW5ndGggLSAxXTtcbiAgRGVwLnRhcmdldCA9IERlcC5TaGFyZWRPYmplY3QudGFyZ2V0O1xufVxuXG4vKiAgKi9cblxudmFyIFZOb2RlID0gZnVuY3Rpb24gVk5vZGUgKFxuICB0YWcsXG4gIGRhdGEsXG4gIGNoaWxkcmVuLFxuICB0ZXh0LFxuICBlbG0sXG4gIGNvbnRleHQsXG4gIGNvbXBvbmVudE9wdGlvbnMsXG4gIGFzeW5jRmFjdG9yeVxuKSB7XG4gIHRoaXMudGFnID0gdGFnO1xuICB0aGlzLmRhdGEgPSBkYXRhO1xuICB0aGlzLmNoaWxkcmVuID0gY2hpbGRyZW47XG4gIHRoaXMudGV4dCA9IHRleHQ7XG4gIHRoaXMuZWxtID0gZWxtO1xuICB0aGlzLm5zID0gdW5kZWZpbmVkO1xuICB0aGlzLmNvbnRleHQgPSBjb250ZXh0O1xuICB0aGlzLmZuQ29udGV4dCA9IHVuZGVmaW5lZDtcbiAgdGhpcy5mbk9wdGlvbnMgPSB1bmRlZmluZWQ7XG4gIHRoaXMuZm5TY29wZUlkID0gdW5kZWZpbmVkO1xuICB0aGlzLmtleSA9IGRhdGEgJiYgZGF0YS5rZXk7XG4gIHRoaXMuY29tcG9uZW50T3B0aW9ucyA9IGNvbXBvbmVudE9wdGlvbnM7XG4gIHRoaXMuY29tcG9uZW50SW5zdGFuY2UgPSB1bmRlZmluZWQ7XG4gIHRoaXMucGFyZW50ID0gdW5kZWZpbmVkO1xuICB0aGlzLnJhdyA9IGZhbHNlO1xuICB0aGlzLmlzU3RhdGljID0gZmFsc2U7XG4gIHRoaXMuaXNSb290SW5zZXJ0ID0gdHJ1ZTtcbiAgdGhpcy5pc0NvbW1lbnQgPSBmYWxzZTtcbiAgdGhpcy5pc0Nsb25lZCA9IGZhbHNlO1xuICB0aGlzLmlzT25jZSA9IGZhbHNlO1xuICB0aGlzLmFzeW5jRmFjdG9yeSA9IGFzeW5jRmFjdG9yeTtcbiAgdGhpcy5hc3luY01ldGEgPSB1bmRlZmluZWQ7XG4gIHRoaXMuaXNBc3luY1BsYWNlaG9sZGVyID0gZmFsc2U7XG59O1xuXG52YXIgcHJvdG90eXBlQWNjZXNzb3JzID0geyBjaGlsZDogeyBjb25maWd1cmFibGU6IHRydWUgfSB9O1xuXG4vLyBERVBSRUNBVEVEOiBhbGlhcyBmb3IgY29tcG9uZW50SW5zdGFuY2UgZm9yIGJhY2t3YXJkcyBjb21wYXQuXG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAqL1xucHJvdG90eXBlQWNjZXNzb3JzLmNoaWxkLmdldCA9IGZ1bmN0aW9uICgpIHtcbiAgcmV0dXJuIHRoaXMuY29tcG9uZW50SW5zdGFuY2Vcbn07XG5cbk9iamVjdC5kZWZpbmVQcm9wZXJ0aWVzKCBWTm9kZS5wcm90b3R5cGUsIHByb3RvdHlwZUFjY2Vzc29ycyApO1xuXG52YXIgY3JlYXRlRW1wdHlWTm9kZSA9IGZ1bmN0aW9uICh0ZXh0KSB7XG4gIGlmICggdGV4dCA9PT0gdm9pZCAwICkgdGV4dCA9ICcnO1xuXG4gIHZhciBub2RlID0gbmV3IFZOb2RlKCk7XG4gIG5vZGUudGV4dCA9IHRleHQ7XG4gIG5vZGUuaXNDb21tZW50ID0gdHJ1ZTtcbiAgcmV0dXJuIG5vZGVcbn07XG5cbmZ1bmN0aW9uIGNyZWF0ZVRleHRWTm9kZSAodmFsKSB7XG4gIHJldHVybiBuZXcgVk5vZGUodW5kZWZpbmVkLCB1bmRlZmluZWQsIHVuZGVmaW5lZCwgU3RyaW5nKHZhbCkpXG59XG5cbi8vIG9wdGltaXplZCBzaGFsbG93IGNsb25lXG4vLyB1c2VkIGZvciBzdGF0aWMgbm9kZXMgYW5kIHNsb3Qgbm9kZXMgYmVjYXVzZSB0aGV5IG1heSBiZSByZXVzZWQgYWNyb3NzXG4vLyBtdWx0aXBsZSByZW5kZXJzLCBjbG9uaW5nIHRoZW0gYXZvaWRzIGVycm9ycyB3aGVuIERPTSBtYW5pcHVsYXRpb25zIHJlbHlcbi8vIG9uIHRoZWlyIGVsbSByZWZlcmVuY2UuXG5mdW5jdGlvbiBjbG9uZVZOb2RlICh2bm9kZSkge1xuICB2YXIgY2xvbmVkID0gbmV3IFZOb2RlKFxuICAgIHZub2RlLnRhZyxcbiAgICB2bm9kZS5kYXRhLFxuICAgIC8vICM3OTc1XG4gICAgLy8gY2xvbmUgY2hpbGRyZW4gYXJyYXkgdG8gYXZvaWQgbXV0YXRpbmcgb3JpZ2luYWwgaW4gY2FzZSBvZiBjbG9uaW5nXG4gICAgLy8gYSBjaGlsZC5cbiAgICB2bm9kZS5jaGlsZHJlbiAmJiB2bm9kZS5jaGlsZHJlbi5zbGljZSgpLFxuICAgIHZub2RlLnRleHQsXG4gICAgdm5vZGUuZWxtLFxuICAgIHZub2RlLmNvbnRleHQsXG4gICAgdm5vZGUuY29tcG9uZW50T3B0aW9ucyxcbiAgICB2bm9kZS5hc3luY0ZhY3RvcnlcbiAgKTtcbiAgY2xvbmVkLm5zID0gdm5vZGUubnM7XG4gIGNsb25lZC5pc1N0YXRpYyA9IHZub2RlLmlzU3RhdGljO1xuICBjbG9uZWQua2V5ID0gdm5vZGUua2V5O1xuICBjbG9uZWQuaXNDb21tZW50ID0gdm5vZGUuaXNDb21tZW50O1xuICBjbG9uZWQuZm5Db250ZXh0ID0gdm5vZGUuZm5Db250ZXh0O1xuICBjbG9uZWQuZm5PcHRpb25zID0gdm5vZGUuZm5PcHRpb25zO1xuICBjbG9uZWQuZm5TY29wZUlkID0gdm5vZGUuZm5TY29wZUlkO1xuICBjbG9uZWQuYXN5bmNNZXRhID0gdm5vZGUuYXN5bmNNZXRhO1xuICBjbG9uZWQuaXNDbG9uZWQgPSB0cnVlO1xuICByZXR1cm4gY2xvbmVkXG59XG5cbi8qXG4gKiBub3QgdHlwZSBjaGVja2luZyB0aGlzIGZpbGUgYmVjYXVzZSBmbG93IGRvZXNuJ3QgcGxheSB3ZWxsIHdpdGhcbiAqIGR5bmFtaWNhbGx5IGFjY2Vzc2luZyBtZXRob2RzIG9uIEFycmF5IHByb3RvdHlwZVxuICovXG5cbnZhciBhcnJheVByb3RvID0gQXJyYXkucHJvdG90eXBlO1xudmFyIGFycmF5TWV0aG9kcyA9IE9iamVjdC5jcmVhdGUoYXJyYXlQcm90byk7XG5cbnZhciBtZXRob2RzVG9QYXRjaCA9IFtcbiAgJ3B1c2gnLFxuICAncG9wJyxcbiAgJ3NoaWZ0JyxcbiAgJ3Vuc2hpZnQnLFxuICAnc3BsaWNlJyxcbiAgJ3NvcnQnLFxuICAncmV2ZXJzZSdcbl07XG5cbi8qKlxuICogSW50ZXJjZXB0IG11dGF0aW5nIG1ldGhvZHMgYW5kIGVtaXQgZXZlbnRzXG4gKi9cbm1ldGhvZHNUb1BhdGNoLmZvckVhY2goZnVuY3Rpb24gKG1ldGhvZCkge1xuICAvLyBjYWNoZSBvcmlnaW5hbCBtZXRob2RcbiAgdmFyIG9yaWdpbmFsID0gYXJyYXlQcm90b1ttZXRob2RdO1xuICBkZWYoYXJyYXlNZXRob2RzLCBtZXRob2QsIGZ1bmN0aW9uIG11dGF0b3IgKCkge1xuICAgIHZhciBhcmdzID0gW10sIGxlbiA9IGFyZ3VtZW50cy5sZW5ndGg7XG4gICAgd2hpbGUgKCBsZW4tLSApIGFyZ3NbIGxlbiBdID0gYXJndW1lbnRzWyBsZW4gXTtcblxuICAgIHZhciByZXN1bHQgPSBvcmlnaW5hbC5hcHBseSh0aGlzLCBhcmdzKTtcbiAgICB2YXIgb2IgPSB0aGlzLl9fb2JfXztcbiAgICB2YXIgaW5zZXJ0ZWQ7XG4gICAgc3dpdGNoIChtZXRob2QpIHtcbiAgICAgIGNhc2UgJ3B1c2gnOlxuICAgICAgY2FzZSAndW5zaGlmdCc6XG4gICAgICAgIGluc2VydGVkID0gYXJncztcbiAgICAgICAgYnJlYWtcbiAgICAgIGNhc2UgJ3NwbGljZSc6XG4gICAgICAgIGluc2VydGVkID0gYXJncy5zbGljZSgyKTtcbiAgICAgICAgYnJlYWtcbiAgICB9XG4gICAgaWYgKGluc2VydGVkKSB7IG9iLm9ic2VydmVBcnJheShpbnNlcnRlZCk7IH1cbiAgICAvLyBub3RpZnkgY2hhbmdlXG4gICAgb2IuZGVwLm5vdGlmeSgpO1xuICAgIHJldHVybiByZXN1bHRcbiAgfSk7XG59KTtcblxuLyogICovXG5cbnZhciBhcnJheUtleXMgPSBPYmplY3QuZ2V0T3duUHJvcGVydHlOYW1lcyhhcnJheU1ldGhvZHMpO1xuXG4vKipcbiAqIEluIHNvbWUgY2FzZXMgd2UgbWF5IHdhbnQgdG8gZGlzYWJsZSBvYnNlcnZhdGlvbiBpbnNpZGUgYSBjb21wb25lbnQnc1xuICogdXBkYXRlIGNvbXB1dGF0aW9uLlxuICovXG52YXIgc2hvdWxkT2JzZXJ2ZSA9IHRydWU7XG5cbmZ1bmN0aW9uIHRvZ2dsZU9ic2VydmluZyAodmFsdWUpIHtcbiAgc2hvdWxkT2JzZXJ2ZSA9IHZhbHVlO1xufVxuXG4vKipcbiAqIE9ic2VydmVyIGNsYXNzIHRoYXQgaXMgYXR0YWNoZWQgdG8gZWFjaCBvYnNlcnZlZFxuICogb2JqZWN0LiBPbmNlIGF0dGFjaGVkLCB0aGUgb2JzZXJ2ZXIgY29udmVydHMgdGhlIHRhcmdldFxuICogb2JqZWN0J3MgcHJvcGVydHkga2V5cyBpbnRvIGdldHRlci9zZXR0ZXJzIHRoYXRcbiAqIGNvbGxlY3QgZGVwZW5kZW5jaWVzIGFuZCBkaXNwYXRjaCB1cGRhdGVzLlxuICovXG52YXIgT2JzZXJ2ZXIgPSBmdW5jdGlvbiBPYnNlcnZlciAodmFsdWUpIHtcbiAgdGhpcy52YWx1ZSA9IHZhbHVlO1xuICB0aGlzLmRlcCA9IG5ldyBEZXAoKTtcbiAgdGhpcy52bUNvdW50ID0gMDtcbiAgZGVmKHZhbHVlLCAnX19vYl9fJywgdGhpcyk7XG4gIGlmIChBcnJheS5pc0FycmF5KHZhbHVlKSkge1xuICAgIGlmIChoYXNQcm90bykge1xuICAgICAgey8vIGZpeGVkIGJ5IHh4eHh4eCDlvq7kv6HlsI/nqIvluo/kvb/nlKggcGx1Z2lucyDkuYvlkI7vvIzmlbDnu4Tmlrnms5Xooqvnm7TmjqXmjILovb3liLDkuobmlbDnu4Tlr7nosaHkuIrvvIzpnIDopoHmiafooYwgY29weUF1Z21lbnQg6YC76L6RXG4gICAgICAgIGlmKHZhbHVlLnB1c2ggIT09IHZhbHVlLl9fcHJvdG9fXy5wdXNoKXtcbiAgICAgICAgICBjb3B5QXVnbWVudCh2YWx1ZSwgYXJyYXlNZXRob2RzLCBhcnJheUtleXMpO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIHByb3RvQXVnbWVudCh2YWx1ZSwgYXJyYXlNZXRob2RzKTtcbiAgICAgICAgfVxuICAgICAgfVxuICAgIH0gZWxzZSB7XG4gICAgICBjb3B5QXVnbWVudCh2YWx1ZSwgYXJyYXlNZXRob2RzLCBhcnJheUtleXMpO1xuICAgIH1cbiAgICB0aGlzLm9ic2VydmVBcnJheSh2YWx1ZSk7XG4gIH0gZWxzZSB7XG4gICAgdGhpcy53YWxrKHZhbHVlKTtcbiAgfVxufTtcblxuLyoqXG4gKiBXYWxrIHRocm91Z2ggYWxsIHByb3BlcnRpZXMgYW5kIGNvbnZlcnQgdGhlbSBpbnRvXG4gKiBnZXR0ZXIvc2V0dGVycy4gVGhpcyBtZXRob2Qgc2hvdWxkIG9ubHkgYmUgY2FsbGVkIHdoZW5cbiAqIHZhbHVlIHR5cGUgaXMgT2JqZWN0LlxuICovXG5PYnNlcnZlci5wcm90b3R5cGUud2FsayA9IGZ1bmN0aW9uIHdhbGsgKG9iaikge1xuICB2YXIga2V5cyA9IE9iamVjdC5rZXlzKG9iaik7XG4gIGZvciAodmFyIGkgPSAwOyBpIDwga2V5cy5sZW5ndGg7IGkrKykge1xuICAgIGRlZmluZVJlYWN0aXZlJCQxKG9iaiwga2V5c1tpXSk7XG4gIH1cbn07XG5cbi8qKlxuICogT2JzZXJ2ZSBhIGxpc3Qgb2YgQXJyYXkgaXRlbXMuXG4gKi9cbk9ic2VydmVyLnByb3RvdHlwZS5vYnNlcnZlQXJyYXkgPSBmdW5jdGlvbiBvYnNlcnZlQXJyYXkgKGl0ZW1zKSB7XG4gIGZvciAodmFyIGkgPSAwLCBsID0gaXRlbXMubGVuZ3RoOyBpIDwgbDsgaSsrKSB7XG4gICAgb2JzZXJ2ZShpdGVtc1tpXSk7XG4gIH1cbn07XG5cbi8vIGhlbHBlcnNcblxuLyoqXG4gKiBBdWdtZW50IGEgdGFyZ2V0IE9iamVjdCBvciBBcnJheSBieSBpbnRlcmNlcHRpbmdcbiAqIHRoZSBwcm90b3R5cGUgY2hhaW4gdXNpbmcgX19wcm90b19fXG4gKi9cbmZ1bmN0aW9uIHByb3RvQXVnbWVudCAodGFyZ2V0LCBzcmMpIHtcbiAgLyogZXNsaW50LWRpc2FibGUgbm8tcHJvdG8gKi9cbiAgdGFyZ2V0Ll9fcHJvdG9fXyA9IHNyYztcbiAgLyogZXNsaW50LWVuYWJsZSBuby1wcm90byAqL1xufVxuXG4vKipcbiAqIEF1Z21lbnQgYSB0YXJnZXQgT2JqZWN0IG9yIEFycmF5IGJ5IGRlZmluaW5nXG4gKiBoaWRkZW4gcHJvcGVydGllcy5cbiAqL1xuLyogaXN0YW5idWwgaWdub3JlIG5leHQgKi9cbmZ1bmN0aW9uIGNvcHlBdWdtZW50ICh0YXJnZXQsIHNyYywga2V5cykge1xuICBmb3IgKHZhciBpID0gMCwgbCA9IGtleXMubGVuZ3RoOyBpIDwgbDsgaSsrKSB7XG4gICAgdmFyIGtleSA9IGtleXNbaV07XG4gICAgZGVmKHRhcmdldCwga2V5LCBzcmNba2V5XSk7XG4gIH1cbn1cblxuLyoqXG4gKiBBdHRlbXB0IHRvIGNyZWF0ZSBhbiBvYnNlcnZlciBpbnN0YW5jZSBmb3IgYSB2YWx1ZSxcbiAqIHJldHVybnMgdGhlIG5ldyBvYnNlcnZlciBpZiBzdWNjZXNzZnVsbHkgb2JzZXJ2ZWQsXG4gKiBvciB0aGUgZXhpc3Rpbmcgb2JzZXJ2ZXIgaWYgdGhlIHZhbHVlIGFscmVhZHkgaGFzIG9uZS5cbiAqL1xuZnVuY3Rpb24gb2JzZXJ2ZSAodmFsdWUsIGFzUm9vdERhdGEpIHtcbiAgaWYgKCFpc09iamVjdCh2YWx1ZSkgfHwgdmFsdWUgaW5zdGFuY2VvZiBWTm9kZSkge1xuICAgIHJldHVyblxuICB9XG4gIHZhciBvYjtcbiAgaWYgKGhhc093bih2YWx1ZSwgJ19fb2JfXycpICYmIHZhbHVlLl9fb2JfXyBpbnN0YW5jZW9mIE9ic2VydmVyKSB7XG4gICAgb2IgPSB2YWx1ZS5fX29iX187XG4gIH0gZWxzZSBpZiAoXG4gICAgc2hvdWxkT2JzZXJ2ZSAmJlxuICAgICFpc1NlcnZlclJlbmRlcmluZygpICYmXG4gICAgKEFycmF5LmlzQXJyYXkodmFsdWUpIHx8IGlzUGxhaW5PYmplY3QodmFsdWUpKSAmJlxuICAgIE9iamVjdC5pc0V4dGVuc2libGUodmFsdWUpICYmXG4gICAgIXZhbHVlLl9pc1Z1ZVxuICApIHtcbiAgICBvYiA9IG5ldyBPYnNlcnZlcih2YWx1ZSk7XG4gIH1cbiAgaWYgKGFzUm9vdERhdGEgJiYgb2IpIHtcbiAgICBvYi52bUNvdW50Kys7XG4gIH1cbiAgcmV0dXJuIG9iXG59XG5cbi8qKlxuICogRGVmaW5lIGEgcmVhY3RpdmUgcHJvcGVydHkgb24gYW4gT2JqZWN0LlxuICovXG5mdW5jdGlvbiBkZWZpbmVSZWFjdGl2ZSQkMSAoXG4gIG9iaixcbiAga2V5LFxuICB2YWwsXG4gIGN1c3RvbVNldHRlcixcbiAgc2hhbGxvd1xuKSB7XG4gIHZhciBkZXAgPSBuZXcgRGVwKCk7XG5cbiAgdmFyIHByb3BlcnR5ID0gT2JqZWN0LmdldE93blByb3BlcnR5RGVzY3JpcHRvcihvYmosIGtleSk7XG4gIGlmIChwcm9wZXJ0eSAmJiBwcm9wZXJ0eS5jb25maWd1cmFibGUgPT09IGZhbHNlKSB7XG4gICAgcmV0dXJuXG4gIH1cblxuICAvLyBjYXRlciBmb3IgcHJlLWRlZmluZWQgZ2V0dGVyL3NldHRlcnNcbiAgdmFyIGdldHRlciA9IHByb3BlcnR5ICYmIHByb3BlcnR5LmdldDtcbiAgdmFyIHNldHRlciA9IHByb3BlcnR5ICYmIHByb3BlcnR5LnNldDtcbiAgaWYgKCghZ2V0dGVyIHx8IHNldHRlcikgJiYgYXJndW1lbnRzLmxlbmd0aCA9PT0gMikge1xuICAgIHZhbCA9IG9ialtrZXldO1xuICB9XG5cbiAgdmFyIGNoaWxkT2IgPSAhc2hhbGxvdyAmJiBvYnNlcnZlKHZhbCk7XG4gIE9iamVjdC5kZWZpbmVQcm9wZXJ0eShvYmosIGtleSwge1xuICAgIGVudW1lcmFibGU6IHRydWUsXG4gICAgY29uZmlndXJhYmxlOiB0cnVlLFxuICAgIGdldDogZnVuY3Rpb24gcmVhY3RpdmVHZXR0ZXIgKCkge1xuICAgICAgdmFyIHZhbHVlID0gZ2V0dGVyID8gZ2V0dGVyLmNhbGwob2JqKSA6IHZhbDtcbiAgICAgIGlmIChEZXAuU2hhcmVkT2JqZWN0LnRhcmdldCkgeyAvLyBmaXhlZCBieSB4eHh4eHhcbiAgICAgICAgZGVwLmRlcGVuZCgpO1xuICAgICAgICBpZiAoY2hpbGRPYikge1xuICAgICAgICAgIGNoaWxkT2IuZGVwLmRlcGVuZCgpO1xuICAgICAgICAgIGlmIChBcnJheS5pc0FycmF5KHZhbHVlKSkge1xuICAgICAgICAgICAgZGVwZW5kQXJyYXkodmFsdWUpO1xuICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgICAgfVxuICAgICAgcmV0dXJuIHZhbHVlXG4gICAgfSxcbiAgICBzZXQ6IGZ1bmN0aW9uIHJlYWN0aXZlU2V0dGVyIChuZXdWYWwpIHtcbiAgICAgIHZhciB2YWx1ZSA9IGdldHRlciA/IGdldHRlci5jYWxsKG9iaikgOiB2YWw7XG4gICAgICAvKiBlc2xpbnQtZGlzYWJsZSBuby1zZWxmLWNvbXBhcmUgKi9cbiAgICAgIGlmIChuZXdWYWwgPT09IHZhbHVlIHx8IChuZXdWYWwgIT09IG5ld1ZhbCAmJiB2YWx1ZSAhPT0gdmFsdWUpKSB7XG4gICAgICAgIHJldHVyblxuICAgICAgfVxuICAgICAgLyogZXNsaW50LWVuYWJsZSBuby1zZWxmLWNvbXBhcmUgKi9cbiAgICAgIGlmIChwcm9jZXNzLmVudi5OT0RFX0VOViAhPT0gJ3Byb2R1Y3Rpb24nICYmIGN1c3RvbVNldHRlcikge1xuICAgICAgICBjdXN0b21TZXR0ZXIoKTtcbiAgICAgIH1cbiAgICAgIC8vICM3OTgxOiBmb3IgYWNjZXNzb3IgcHJvcGVydGllcyB3aXRob3V0IHNldHRlclxuICAgICAgaWYgKGdldHRlciAmJiAhc2V0dGVyKSB7IHJldHVybiB9XG4gICAgICBpZiAoc2V0dGVyKSB7XG4gICAgICAgIHNldHRlci5jYWxsKG9iaiwgbmV3VmFsKTtcbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIHZhbCA9IG5ld1ZhbDtcbiAgICAgIH1cbiAgICAgIGNoaWxkT2IgPSAhc2hhbGxvdyAmJiBvYnNlcnZlKG5ld1ZhbCk7XG4gICAgICBkZXAubm90aWZ5KCk7XG4gICAgfVxuICB9KTtcbn1cblxuLyoqXG4gKiBTZXQgYSBwcm9wZXJ0eSBvbiBhbiBvYmplY3QuIEFkZHMgdGhlIG5ldyBwcm9wZXJ0eSBhbmRcbiAqIHRyaWdnZXJzIGNoYW5nZSBub3RpZmljYXRpb24gaWYgdGhlIHByb3BlcnR5IGRvZXNuJ3RcbiAqIGFscmVhZHkgZXhpc3QuXG4gKi9cbmZ1bmN0aW9uIHNldCAodGFyZ2V0LCBrZXksIHZhbCkge1xuICBpZiAocHJvY2Vzcy5lbnYuTk9ERV9FTlYgIT09ICdwcm9kdWN0aW9uJyAmJlxuICAgIChpc1VuZGVmKHRhcmdldCkgfHwgaXNQcmltaXRpdmUodGFyZ2V0KSlcbiAgKSB7XG4gICAgd2FybigoXCJDYW5ub3Qgc2V0IHJlYWN0aXZlIHByb3BlcnR5IG9uIHVuZGVmaW5lZCwgbnVsbCwgb3IgcHJpbWl0aXZlIHZhbHVlOiBcIiArICgodGFyZ2V0KSkpKTtcbiAgfVxuICBpZiAoQXJyYXkuaXNBcnJheSh0YXJnZXQpICYmIGlzVmFsaWRBcnJheUluZGV4KGtleSkpIHtcbiAgICB0YXJnZXQubGVuZ3RoID0gTWF0aC5tYXgodGFyZ2V0Lmxlbmd0aCwga2V5KTtcbiAgICB0YXJnZXQuc3BsaWNlKGtleSwgMSwgdmFsKTtcbiAgICByZXR1cm4gdmFsXG4gIH1cbiAgaWYgKGtleSBpbiB0YXJnZXQgJiYgIShrZXkgaW4gT2JqZWN0LnByb3RvdHlwZSkpIHtcbiAgICB0YXJnZXRba2V5XSA9IHZhbDtcbiAgICByZXR1cm4gdmFsXG4gIH1cbiAgdmFyIG9iID0gKHRhcmdldCkuX19vYl9fO1xuICBpZiAodGFyZ2V0Ll9pc1Z1ZSB8fCAob2IgJiYgb2Iudm1Db3VudCkpIHtcbiAgICBwcm9jZXNzLmVudi5OT0RFX0VOViAhPT0gJ3Byb2R1Y3Rpb24nICYmIHdhcm4oXG4gICAgICAnQXZvaWQgYWRkaW5nIHJlYWN0aXZlIHByb3BlcnRpZXMgdG8gYSBWdWUgaW5zdGFuY2Ugb3IgaXRzIHJvb3QgJGRhdGEgJyArXG4gICAgICAnYXQgcnVudGltZSAtIGRlY2xhcmUgaXQgdXBmcm9udCBpbiB0aGUgZGF0YSBvcHRpb24uJ1xuICAgICk7XG4gICAgcmV0dXJuIHZhbFxuICB9XG4gIGlmICghb2IpIHtcbiAgICB0YXJnZXRba2V5XSA9IHZhbDtcbiAgICByZXR1cm4gdmFsXG4gIH1cbiAgZGVmaW5lUmVhY3RpdmUkJDEob2IudmFsdWUsIGtleSwgdmFsKTtcbiAgb2IuZGVwLm5vdGlmeSgpO1xuICByZXR1cm4gdmFsXG59XG5cbi8qKlxuICogRGVsZXRlIGEgcHJvcGVydHkgYW5kIHRyaWdnZXIgY2hhbmdlIGlmIG5lY2Vzc2FyeS5cbiAqL1xuZnVuY3Rpb24gZGVsICh0YXJnZXQsIGtleSkge1xuICBpZiAocHJvY2Vzcy5lbnYuTk9ERV9FTlYgIT09ICdwcm9kdWN0aW9uJyAmJlxuICAgIChpc1VuZGVmKHRhcmdldCkgfHwgaXNQcmltaXRpdmUodGFyZ2V0KSlcbiAgKSB7XG4gICAgd2FybigoXCJDYW5ub3QgZGVsZXRlIHJlYWN0aXZlIHByb3BlcnR5IG9uIHVuZGVmaW5lZCwgbnVsbCwgb3IgcHJpbWl0aXZlIHZhbHVlOiBcIiArICgodGFyZ2V0KSkpKTtcbiAgfVxuICBpZiAoQXJyYXkuaXNBcnJheSh0YXJnZXQpICYmIGlzVmFsaWRBcnJheUluZGV4KGtleSkpIHtcbiAgICB0YXJnZXQuc3BsaWNlKGtleSwgMSk7XG4gICAgcmV0dXJuXG4gIH1cbiAgdmFyIG9iID0gKHRhcmdldCkuX19vYl9fO1xuICBpZiAodGFyZ2V0Ll9pc1Z1ZSB8fCAob2IgJiYgb2Iudm1Db3VudCkpIHtcbiAgICBwcm9jZXNzLmVudi5OT0RFX0VOViAhPT0gJ3Byb2R1Y3Rpb24nICYmIHdhcm4oXG4gICAgICAnQXZvaWQgZGVsZXRpbmcgcHJvcGVydGllcyBvbiBhIFZ1ZSBpbnN0YW5jZSBvciBpdHMgcm9vdCAkZGF0YSAnICtcbiAgICAgICctIGp1c3Qgc2V0IGl0IHRvIG51bGwuJ1xuICAgICk7XG4gICAgcmV0dXJuXG4gIH1cbiAgaWYgKCFoYXNPd24odGFyZ2V0LCBrZXkpKSB7XG4gICAgcmV0dXJuXG4gIH1cbiAgZGVsZXRlIHRhcmdldFtrZXldO1xuICBpZiAoIW9iKSB7XG4gICAgcmV0dXJuXG4gIH1cbiAgb2IuZGVwLm5vdGlmeSgpO1xufVxuXG4vKipcbiAqIENvbGxlY3QgZGVwZW5kZW5jaWVzIG9uIGFycmF5IGVsZW1lbnRzIHdoZW4gdGhlIGFycmF5IGlzIHRvdWNoZWQsIHNpbmNlXG4gKiB3ZSBjYW5ub3QgaW50ZXJjZXB0IGFycmF5IGVsZW1lbnQgYWNjZXNzIGxpa2UgcHJvcGVydHkgZ2V0dGVycy5cbiAqL1xuZnVuY3Rpb24gZGVwZW5kQXJyYXkgKHZhbHVlKSB7XG4gIGZvciAodmFyIGUgPSAodm9pZCAwKSwgaSA9IDAsIGwgPSB2YWx1ZS5sZW5ndGg7IGkgPCBsOyBpKyspIHtcbiAgICBlID0gdmFsdWVbaV07XG4gICAgZSAmJiBlLl9fb2JfXyAmJiBlLl9fb2JfXy5kZXAuZGVwZW5kKCk7XG4gICAgaWYgKEFycmF5LmlzQXJyYXkoZSkpIHtcbiAgICAgIGRlcGVuZEFycmF5KGUpO1xuICAgIH1cbiAgfVxufVxuXG4vKiAgKi9cblxuLyoqXG4gKiBPcHRpb24gb3ZlcndyaXRpbmcgc3RyYXRlZ2llcyBhcmUgZnVuY3Rpb25zIHRoYXQgaGFuZGxlXG4gKiBob3cgdG8gbWVyZ2UgYSBwYXJlbnQgb3B0aW9uIHZhbHVlIGFuZCBhIGNoaWxkIG9wdGlvblxuICogdmFsdWUgaW50byB0aGUgZmluYWwgdmFsdWUuXG4gKi9cbnZhciBzdHJhdHMgPSBjb25maWcub3B0aW9uTWVyZ2VTdHJhdGVnaWVzO1xuXG4vKipcbiAqIE9wdGlvbnMgd2l0aCByZXN0cmljdGlvbnNcbiAqL1xuaWYgKHByb2Nlc3MuZW52Lk5PREVfRU5WICE9PSAncHJvZHVjdGlvbicpIHtcbiAgc3RyYXRzLmVsID0gc3RyYXRzLnByb3BzRGF0YSA9IGZ1bmN0aW9uIChwYXJlbnQsIGNoaWxkLCB2bSwga2V5KSB7XG4gICAgaWYgKCF2bSkge1xuICAgICAgd2FybihcbiAgICAgICAgXCJvcHRpb24gXFxcIlwiICsga2V5ICsgXCJcXFwiIGNhbiBvbmx5IGJlIHVzZWQgZHVyaW5nIGluc3RhbmNlIFwiICtcbiAgICAgICAgJ2NyZWF0aW9uIHdpdGggdGhlIGBuZXdgIGtleXdvcmQuJ1xuICAgICAgKTtcbiAgICB9XG4gICAgcmV0dXJuIGRlZmF1bHRTdHJhdChwYXJlbnQsIGNoaWxkKVxuICB9O1xufVxuXG4vKipcbiAqIEhlbHBlciB0aGF0IHJlY3Vyc2l2ZWx5IG1lcmdlcyB0d28gZGF0YSBvYmplY3RzIHRvZ2V0aGVyLlxuICovXG5mdW5jdGlvbiBtZXJnZURhdGEgKHRvLCBmcm9tKSB7XG4gIGlmICghZnJvbSkgeyByZXR1cm4gdG8gfVxuICB2YXIga2V5LCB0b1ZhbCwgZnJvbVZhbDtcblxuICB2YXIga2V5cyA9IGhhc1N5bWJvbFxuICAgID8gUmVmbGVjdC5vd25LZXlzKGZyb20pXG4gICAgOiBPYmplY3Qua2V5cyhmcm9tKTtcblxuICBmb3IgKHZhciBpID0gMDsgaSA8IGtleXMubGVuZ3RoOyBpKyspIHtcbiAgICBrZXkgPSBrZXlzW2ldO1xuICAgIC8vIGluIGNhc2UgdGhlIG9iamVjdCBpcyBhbHJlYWR5IG9ic2VydmVkLi4uXG4gICAgaWYgKGtleSA9PT0gJ19fb2JfXycpIHsgY29udGludWUgfVxuICAgIHRvVmFsID0gdG9ba2V5XTtcbiAgICBmcm9tVmFsID0gZnJvbVtrZXldO1xuICAgIGlmICghaGFzT3duKHRvLCBrZXkpKSB7XG4gICAgICBzZXQodG8sIGtleSwgZnJvbVZhbCk7XG4gICAgfSBlbHNlIGlmIChcbiAgICAgIHRvVmFsICE9PSBmcm9tVmFsICYmXG4gICAgICBpc1BsYWluT2JqZWN0KHRvVmFsKSAmJlxuICAgICAgaXNQbGFpbk9iamVjdChmcm9tVmFsKVxuICAgICkge1xuICAgICAgbWVyZ2VEYXRhKHRvVmFsLCBmcm9tVmFsKTtcbiAgICB9XG4gIH1cbiAgcmV0dXJuIHRvXG59XG5cbi8qKlxuICogRGF0YVxuICovXG5mdW5jdGlvbiBtZXJnZURhdGFPckZuIChcbiAgcGFyZW50VmFsLFxuICBjaGlsZFZhbCxcbiAgdm1cbikge1xuICBpZiAoIXZtKSB7XG4gICAgLy8gaW4gYSBWdWUuZXh0ZW5kIG1lcmdlLCBib3RoIHNob3VsZCBiZSBmdW5jdGlvbnNcbiAgICBpZiAoIWNoaWxkVmFsKSB7XG4gICAgICByZXR1cm4gcGFyZW50VmFsXG4gICAgfVxuICAgIGlmICghcGFyZW50VmFsKSB7XG4gICAgICByZXR1cm4gY2hpbGRWYWxcbiAgICB9XG4gICAgLy8gd2hlbiBwYXJlbnRWYWwgJiBjaGlsZFZhbCBhcmUgYm90aCBwcmVzZW50LFxuICAgIC8vIHdlIG5lZWQgdG8gcmV0dXJuIGEgZnVuY3Rpb24gdGhhdCByZXR1cm5zIHRoZVxuICAgIC8vIG1lcmdlZCByZXN1bHQgb2YgYm90aCBmdW5jdGlvbnMuLi4gbm8gbmVlZCB0b1xuICAgIC8vIGNoZWNrIGlmIHBhcmVudFZhbCBpcyBhIGZ1bmN0aW9uIGhlcmUgYmVjYXVzZVxuICAgIC8vIGl0IGhhcyB0byBiZSBhIGZ1bmN0aW9uIHRvIHBhc3MgcHJldmlvdXMgbWVyZ2VzLlxuICAgIHJldHVybiBmdW5jdGlvbiBtZXJnZWREYXRhRm4gKCkge1xuICAgICAgcmV0dXJuIG1lcmdlRGF0YShcbiAgICAgICAgdHlwZW9mIGNoaWxkVmFsID09PSAnZnVuY3Rpb24nID8gY2hpbGRWYWwuY2FsbCh0aGlzLCB0aGlzKSA6IGNoaWxkVmFsLFxuICAgICAgICB0eXBlb2YgcGFyZW50VmFsID09PSAnZnVuY3Rpb24nID8gcGFyZW50VmFsLmNhbGwodGhpcywgdGhpcykgOiBwYXJlbnRWYWxcbiAgICAgIClcbiAgICB9XG4gIH0gZWxzZSB7XG4gICAgcmV0dXJuIGZ1bmN0aW9uIG1lcmdlZEluc3RhbmNlRGF0YUZuICgpIHtcbiAgICAgIC8vIGluc3RhbmNlIG1lcmdlXG4gICAgICB2YXIgaW5zdGFuY2VEYXRhID0gdHlwZW9mIGNoaWxkVmFsID09PSAnZnVuY3Rpb24nXG4gICAgICAgID8gY2hpbGRWYWwuY2FsbCh2bSwgdm0pXG4gICAgICAgIDogY2hpbGRWYWw7XG4gICAgICB2YXIgZGVmYXVsdERhdGEgPSB0eXBlb2YgcGFyZW50VmFsID09PSAnZnVuY3Rpb24nXG4gICAgICAgID8gcGFyZW50VmFsLmNhbGwodm0sIHZtKVxuICAgICAgICA6IHBhcmVudFZhbDtcbiAgICAgIGlmIChpbnN0YW5jZURhdGEpIHtcbiAgICAgICAgcmV0dXJuIG1lcmdlRGF0YShpbnN0YW5jZURhdGEsIGRlZmF1bHREYXRhKVxuICAgICAgfSBlbHNlIHtcbiAgICAgICAgcmV0dXJuIGRlZmF1bHREYXRhXG4gICAgICB9XG4gICAgfVxuICB9XG59XG5cbnN0cmF0cy5kYXRhID0gZnVuY3Rpb24gKFxuICBwYXJlbnRWYWwsXG4gIGNoaWxkVmFsLFxuICB2bVxuKSB7XG4gIGlmICghdm0pIHtcbiAgICBpZiAoY2hpbGRWYWwgJiYgdHlwZW9mIGNoaWxkVmFsICE9PSAnZnVuY3Rpb24nKSB7XG4gICAgICBwcm9jZXNzLmVudi5OT0RFX0VOViAhPT0gJ3Byb2R1Y3Rpb24nICYmIHdhcm4oXG4gICAgICAgICdUaGUgXCJkYXRhXCIgb3B0aW9uIHNob3VsZCBiZSBhIGZ1bmN0aW9uICcgK1xuICAgICAgICAndGhhdCByZXR1cm5zIGEgcGVyLWluc3RhbmNlIHZhbHVlIGluIGNvbXBvbmVudCAnICtcbiAgICAgICAgJ2RlZmluaXRpb25zLicsXG4gICAgICAgIHZtXG4gICAgICApO1xuXG4gICAgICByZXR1cm4gcGFyZW50VmFsXG4gICAgfVxuICAgIHJldHVybiBtZXJnZURhdGFPckZuKHBhcmVudFZhbCwgY2hpbGRWYWwpXG4gIH1cblxuICByZXR1cm4gbWVyZ2VEYXRhT3JGbihwYXJlbnRWYWwsIGNoaWxkVmFsLCB2bSlcbn07XG5cbi8qKlxuICogSG9va3MgYW5kIHByb3BzIGFyZSBtZXJnZWQgYXMgYXJyYXlzLlxuICovXG5mdW5jdGlvbiBtZXJnZUhvb2sgKFxuICBwYXJlbnRWYWwsXG4gIGNoaWxkVmFsXG4pIHtcbiAgdmFyIHJlcyA9IGNoaWxkVmFsXG4gICAgPyBwYXJlbnRWYWxcbiAgICAgID8gcGFyZW50VmFsLmNvbmNhdChjaGlsZFZhbClcbiAgICAgIDogQXJyYXkuaXNBcnJheShjaGlsZFZhbClcbiAgICAgICAgPyBjaGlsZFZhbFxuICAgICAgICA6IFtjaGlsZFZhbF1cbiAgICA6IHBhcmVudFZhbDtcbiAgcmV0dXJuIHJlc1xuICAgID8gZGVkdXBlSG9va3MocmVzKVxuICAgIDogcmVzXG59XG5cbmZ1bmN0aW9uIGRlZHVwZUhvb2tzIChob29rcykge1xuICB2YXIgcmVzID0gW107XG4gIGZvciAodmFyIGkgPSAwOyBpIDwgaG9va3MubGVuZ3RoOyBpKyspIHtcbiAgICBpZiAocmVzLmluZGV4T2YoaG9va3NbaV0pID09PSAtMSkge1xuICAgICAgcmVzLnB1c2goaG9va3NbaV0pO1xuICAgIH1cbiAgfVxuICByZXR1cm4gcmVzXG59XG5cbkxJRkVDWUNMRV9IT09LUy5mb3JFYWNoKGZ1bmN0aW9uIChob29rKSB7XG4gIHN0cmF0c1tob29rXSA9IG1lcmdlSG9vaztcbn0pO1xuXG4vKipcbiAqIEFzc2V0c1xuICpcbiAqIFdoZW4gYSB2bSBpcyBwcmVzZW50IChpbnN0YW5jZSBjcmVhdGlvbiksIHdlIG5lZWQgdG8gZG9cbiAqIGEgdGhyZWUtd2F5IG1lcmdlIGJldHdlZW4gY29uc3RydWN0b3Igb3B0aW9ucywgaW5zdGFuY2VcbiAqIG9wdGlvbnMgYW5kIHBhcmVudCBvcHRpb25zLlxuICovXG5mdW5jdGlvbiBtZXJnZUFzc2V0cyAoXG4gIHBhcmVudFZhbCxcbiAgY2hpbGRWYWwsXG4gIHZtLFxuICBrZXlcbikge1xuICB2YXIgcmVzID0gT2JqZWN0LmNyZWF0ZShwYXJlbnRWYWwgfHwgbnVsbCk7XG4gIGlmIChjaGlsZFZhbCkge1xuICAgIHByb2Nlc3MuZW52Lk5PREVfRU5WICE9PSAncHJvZHVjdGlvbicgJiYgYXNzZXJ0T2JqZWN0VHlwZShrZXksIGNoaWxkVmFsLCB2bSk7XG4gICAgcmV0dXJuIGV4dGVuZChyZXMsIGNoaWxkVmFsKVxuICB9IGVsc2Uge1xuICAgIHJldHVybiByZXNcbiAgfVxufVxuXG5BU1NFVF9UWVBFUy5mb3JFYWNoKGZ1bmN0aW9uICh0eXBlKSB7XG4gIHN0cmF0c1t0eXBlICsgJ3MnXSA9IG1lcmdlQXNzZXRzO1xufSk7XG5cbi8qKlxuICogV2F0Y2hlcnMuXG4gKlxuICogV2F0Y2hlcnMgaGFzaGVzIHNob3VsZCBub3Qgb3ZlcndyaXRlIG9uZVxuICogYW5vdGhlciwgc28gd2UgbWVyZ2UgdGhlbSBhcyBhcnJheXMuXG4gKi9cbnN0cmF0cy53YXRjaCA9IGZ1bmN0aW9uIChcbiAgcGFyZW50VmFsLFxuICBjaGlsZFZhbCxcbiAgdm0sXG4gIGtleVxuKSB7XG4gIC8vIHdvcmsgYXJvdW5kIEZpcmVmb3gncyBPYmplY3QucHJvdG90eXBlLndhdGNoLi4uXG4gIGlmIChwYXJlbnRWYWwgPT09IG5hdGl2ZVdhdGNoKSB7IHBhcmVudFZhbCA9IHVuZGVmaW5lZDsgfVxuICBpZiAoY2hpbGRWYWwgPT09IG5hdGl2ZVdhdGNoKSB7IGNoaWxkVmFsID0gdW5kZWZpbmVkOyB9XG4gIC8qIGlzdGFuYnVsIGlnbm9yZSBpZiAqL1xuICBpZiAoIWNoaWxkVmFsKSB7IHJldHVybiBPYmplY3QuY3JlYXRlKHBhcmVudFZhbCB8fCBudWxsKSB9XG4gIGlmIChwcm9jZXNzLmVudi5OT0RFX0VOViAhPT0gJ3Byb2R1Y3Rpb24nKSB7XG4gICAgYXNzZXJ0T2JqZWN0VHlwZShrZXksIGNoaWxkVmFsLCB2bSk7XG4gIH1cbiAgaWYgKCFwYXJlbnRWYWwpIHsgcmV0dXJuIGNoaWxkVmFsIH1cbiAgdmFyIHJldCA9IHt9O1xuICBleHRlbmQocmV0LCBwYXJlbnRWYWwpO1xuICBmb3IgKHZhciBrZXkkMSBpbiBjaGlsZFZhbCkge1xuICAgIHZhciBwYXJlbnQgPSByZXRba2V5JDFdO1xuICAgIHZhciBjaGlsZCA9IGNoaWxkVmFsW2tleSQxXTtcbiAgICBpZiAocGFyZW50ICYmICFBcnJheS5pc0FycmF5KHBhcmVudCkpIHtcbiAgICAgIHBhcmVudCA9IFtwYXJlbnRdO1xuICAgIH1cbiAgICByZXRba2V5JDFdID0gcGFyZW50XG4gICAgICA/IHBhcmVudC5jb25jYXQoY2hpbGQpXG4gICAgICA6IEFycmF5LmlzQXJyYXkoY2hpbGQpID8gY2hpbGQgOiBbY2hpbGRdO1xuICB9XG4gIHJldHVybiByZXRcbn07XG5cbi8qKlxuICogT3RoZXIgb2JqZWN0IGhhc2hlcy5cbiAqL1xuc3RyYXRzLnByb3BzID1cbnN0cmF0cy5tZXRob2RzID1cbnN0cmF0cy5pbmplY3QgPVxuc3RyYXRzLmNvbXB1dGVkID0gZnVuY3Rpb24gKFxuICBwYXJlbnRWYWwsXG4gIGNoaWxkVmFsLFxuICB2bSxcbiAga2V5XG4pIHtcbiAgaWYgKGNoaWxkVmFsICYmIHByb2Nlc3MuZW52Lk5PREVfRU5WICE9PSAncHJvZHVjdGlvbicpIHtcbiAgICBhc3NlcnRPYmplY3RUeXBlKGtleSwgY2hpbGRWYWwsIHZtKTtcbiAgfVxuICBpZiAoIXBhcmVudFZhbCkgeyByZXR1cm4gY2hpbGRWYWwgfVxuICB2YXIgcmV0ID0gT2JqZWN0LmNyZWF0ZShudWxsKTtcbiAgZXh0ZW5kKHJldCwgcGFyZW50VmFsKTtcbiAgaWYgKGNoaWxkVmFsKSB7IGV4dGVuZChyZXQsIGNoaWxkVmFsKTsgfVxuICByZXR1cm4gcmV0XG59O1xuc3RyYXRzLnByb3ZpZGUgPSBtZXJnZURhdGFPckZuO1xuXG4vKipcbiAqIERlZmF1bHQgc3RyYXRlZ3kuXG4gKi9cbnZhciBkZWZhdWx0U3RyYXQgPSBmdW5jdGlvbiAocGFyZW50VmFsLCBjaGlsZFZhbCkge1xuICByZXR1cm4gY2hpbGRWYWwgPT09IHVuZGVmaW5lZFxuICAgID8gcGFyZW50VmFsXG4gICAgOiBjaGlsZFZhbFxufTtcblxuLyoqXG4gKiBWYWxpZGF0ZSBjb21wb25lbnQgbmFtZXNcbiAqL1xuZnVuY3Rpb24gY2hlY2tDb21wb25lbnRzIChvcHRpb25zKSB7XG4gIGZvciAodmFyIGtleSBpbiBvcHRpb25zLmNvbXBvbmVudHMpIHtcbiAgICB2YWxpZGF0ZUNvbXBvbmVudE5hbWUoa2V5KTtcbiAgfVxufVxuXG5mdW5jdGlvbiB2YWxpZGF0ZUNvbXBvbmVudE5hbWUgKG5hbWUpIHtcbiAgaWYgKCFuZXcgUmVnRXhwKChcIl5bYS16QS1aXVtcXFxcLVxcXFwuMC05X1wiICsgKHVuaWNvZGVSZWdFeHAuc291cmNlKSArIFwiXSokXCIpKS50ZXN0KG5hbWUpKSB7XG4gICAgd2FybihcbiAgICAgICdJbnZhbGlkIGNvbXBvbmVudCBuYW1lOiBcIicgKyBuYW1lICsgJ1wiLiBDb21wb25lbnQgbmFtZXMgJyArXG4gICAgICAnc2hvdWxkIGNvbmZvcm0gdG8gdmFsaWQgY3VzdG9tIGVsZW1lbnQgbmFtZSBpbiBodG1sNSBzcGVjaWZpY2F0aW9uLidcbiAgICApO1xuICB9XG4gIGlmIChpc0J1aWx0SW5UYWcobmFtZSkgfHwgY29uZmlnLmlzUmVzZXJ2ZWRUYWcobmFtZSkpIHtcbiAgICB3YXJuKFxuICAgICAgJ0RvIG5vdCB1c2UgYnVpbHQtaW4gb3IgcmVzZXJ2ZWQgSFRNTCBlbGVtZW50cyBhcyBjb21wb25lbnQgJyArXG4gICAgICAnaWQ6ICcgKyBuYW1lXG4gICAgKTtcbiAgfVxufVxuXG4vKipcbiAqIEVuc3VyZSBhbGwgcHJvcHMgb3B0aW9uIHN5bnRheCBhcmUgbm9ybWFsaXplZCBpbnRvIHRoZVxuICogT2JqZWN0LWJhc2VkIGZvcm1hdC5cbiAqL1xuZnVuY3Rpb24gbm9ybWFsaXplUHJvcHMgKG9wdGlvbnMsIHZtKSB7XG4gIHZhciBwcm9wcyA9IG9wdGlvbnMucHJvcHM7XG4gIGlmICghcHJvcHMpIHsgcmV0dXJuIH1cbiAgdmFyIHJlcyA9IHt9O1xuICB2YXIgaSwgdmFsLCBuYW1lO1xuICBpZiAoQXJyYXkuaXNBcnJheShwcm9wcykpIHtcbiAgICBpID0gcHJvcHMubGVuZ3RoO1xuICAgIHdoaWxlIChpLS0pIHtcbiAgICAgIHZhbCA9IHByb3BzW2ldO1xuICAgICAgaWYgKHR5cGVvZiB2YWwgPT09ICdzdHJpbmcnKSB7XG4gICAgICAgIG5hbWUgPSBjYW1lbGl6ZSh2YWwpO1xuICAgICAgICByZXNbbmFtZV0gPSB7IHR5cGU6IG51bGwgfTtcbiAgICAgIH0gZWxzZSBpZiAocHJvY2Vzcy5lbnYuTk9ERV9FTlYgIT09ICdwcm9kdWN0aW9uJykge1xuICAgICAgICB3YXJuKCdwcm9wcyBtdXN0IGJlIHN0cmluZ3Mgd2hlbiB1c2luZyBhcnJheSBzeW50YXguJyk7XG4gICAgICB9XG4gICAgfVxuICB9IGVsc2UgaWYgKGlzUGxhaW5PYmplY3QocHJvcHMpKSB7XG4gICAgZm9yICh2YXIga2V5IGluIHByb3BzKSB7XG4gICAgICB2YWwgPSBwcm9wc1trZXldO1xuICAgICAgbmFtZSA9IGNhbWVsaXplKGtleSk7XG4gICAgICByZXNbbmFtZV0gPSBpc1BsYWluT2JqZWN0KHZhbClcbiAgICAgICAgPyB2YWxcbiAgICAgICAgOiB7IHR5cGU6IHZhbCB9O1xuICAgIH1cbiAgfSBlbHNlIGlmIChwcm9jZXNzLmVudi5OT0RFX0VOViAhPT0gJ3Byb2R1Y3Rpb24nKSB7XG4gICAgd2FybihcbiAgICAgIFwiSW52YWxpZCB2YWx1ZSBmb3Igb3B0aW9uIFxcXCJwcm9wc1xcXCI6IGV4cGVjdGVkIGFuIEFycmF5IG9yIGFuIE9iamVjdCwgXCIgK1xuICAgICAgXCJidXQgZ290IFwiICsgKHRvUmF3VHlwZShwcm9wcykpICsgXCIuXCIsXG4gICAgICB2bVxuICAgICk7XG4gIH1cbiAgb3B0aW9ucy5wcm9wcyA9IHJlcztcbn1cblxuLyoqXG4gKiBOb3JtYWxpemUgYWxsIGluamVjdGlvbnMgaW50byBPYmplY3QtYmFzZWQgZm9ybWF0XG4gKi9cbmZ1bmN0aW9uIG5vcm1hbGl6ZUluamVjdCAob3B0aW9ucywgdm0pIHtcbiAgdmFyIGluamVjdCA9IG9wdGlvbnMuaW5qZWN0O1xuICBpZiAoIWluamVjdCkgeyByZXR1cm4gfVxuICB2YXIgbm9ybWFsaXplZCA9IG9wdGlvbnMuaW5qZWN0ID0ge307XG4gIGlmIChBcnJheS5pc0FycmF5KGluamVjdCkpIHtcbiAgICBmb3IgKHZhciBpID0gMDsgaSA8IGluamVjdC5sZW5ndGg7IGkrKykge1xuICAgICAgbm9ybWFsaXplZFtpbmplY3RbaV1dID0geyBmcm9tOiBpbmplY3RbaV0gfTtcbiAgICB9XG4gIH0gZWxzZSBpZiAoaXNQbGFpbk9iamVjdChpbmplY3QpKSB7XG4gICAgZm9yICh2YXIga2V5IGluIGluamVjdCkge1xuICAgICAgdmFyIHZhbCA9IGluamVjdFtrZXldO1xuICAgICAgbm9ybWFsaXplZFtrZXldID0gaXNQbGFpbk9iamVjdCh2YWwpXG4gICAgICAgID8gZXh0ZW5kKHsgZnJvbToga2V5IH0sIHZhbClcbiAgICAgICAgOiB7IGZyb206IHZhbCB9O1xuICAgIH1cbiAgfSBlbHNlIGlmIChwcm9jZXNzLmVudi5OT0RFX0VOViAhPT0gJ3Byb2R1Y3Rpb24nKSB7XG4gICAgd2FybihcbiAgICAgIFwiSW52YWxpZCB2YWx1ZSBmb3Igb3B0aW9uIFxcXCJpbmplY3RcXFwiOiBleHBlY3RlZCBhbiBBcnJheSBvciBhbiBPYmplY3QsIFwiICtcbiAgICAgIFwiYnV0IGdvdCBcIiArICh0b1Jhd1R5cGUoaW5qZWN0KSkgKyBcIi5cIixcbiAgICAgIHZtXG4gICAgKTtcbiAgfVxufVxuXG4vKipcbiAqIE5vcm1hbGl6ZSByYXcgZnVuY3Rpb24gZGlyZWN0aXZlcyBpbnRvIG9iamVjdCBmb3JtYXQuXG4gKi9cbmZ1bmN0aW9uIG5vcm1hbGl6ZURpcmVjdGl2ZXMgKG9wdGlvbnMpIHtcbiAgdmFyIGRpcnMgPSBvcHRpb25zLmRpcmVjdGl2ZXM7XG4gIGlmIChkaXJzKSB7XG4gICAgZm9yICh2YXIga2V5IGluIGRpcnMpIHtcbiAgICAgIHZhciBkZWYkJDEgPSBkaXJzW2tleV07XG4gICAgICBpZiAodHlwZW9mIGRlZiQkMSA9PT0gJ2Z1bmN0aW9uJykge1xuICAgICAgICBkaXJzW2tleV0gPSB7IGJpbmQ6IGRlZiQkMSwgdXBkYXRlOiBkZWYkJDEgfTtcbiAgICAgIH1cbiAgICB9XG4gIH1cbn1cblxuZnVuY3Rpb24gYXNzZXJ0T2JqZWN0VHlwZSAobmFtZSwgdmFsdWUsIHZtKSB7XG4gIGlmICghaXNQbGFpbk9iamVjdCh2YWx1ZSkpIHtcbiAgICB3YXJuKFxuICAgICAgXCJJbnZhbGlkIHZhbHVlIGZvciBvcHRpb24gXFxcIlwiICsgbmFtZSArIFwiXFxcIjogZXhwZWN0ZWQgYW4gT2JqZWN0LCBcIiArXG4gICAgICBcImJ1dCBnb3QgXCIgKyAodG9SYXdUeXBlKHZhbHVlKSkgKyBcIi5cIixcbiAgICAgIHZtXG4gICAgKTtcbiAgfVxufVxuXG4vKipcbiAqIE1lcmdlIHR3byBvcHRpb24gb2JqZWN0cyBpbnRvIGEgbmV3IG9uZS5cbiAqIENvcmUgdXRpbGl0eSB1c2VkIGluIGJvdGggaW5zdGFudGlhdGlvbiBhbmQgaW5oZXJpdGFuY2UuXG4gKi9cbmZ1bmN0aW9uIG1lcmdlT3B0aW9ucyAoXG4gIHBhcmVudCxcbiAgY2hpbGQsXG4gIHZtXG4pIHtcbiAgaWYgKHByb2Nlc3MuZW52Lk5PREVfRU5WICE9PSAncHJvZHVjdGlvbicpIHtcbiAgICBjaGVja0NvbXBvbmVudHMoY2hpbGQpO1xuICB9XG5cbiAgaWYgKHR5cGVvZiBjaGlsZCA9PT0gJ2Z1bmN0aW9uJykge1xuICAgIGNoaWxkID0gY2hpbGQub3B0aW9ucztcbiAgfVxuXG4gIG5vcm1hbGl6ZVByb3BzKGNoaWxkLCB2bSk7XG4gIG5vcm1hbGl6ZUluamVjdChjaGlsZCwgdm0pO1xuICBub3JtYWxpemVEaXJlY3RpdmVzKGNoaWxkKTtcblxuICAvLyBBcHBseSBleHRlbmRzIGFuZCBtaXhpbnMgb24gdGhlIGNoaWxkIG9wdGlvbnMsXG4gIC8vIGJ1dCBvbmx5IGlmIGl0IGlzIGEgcmF3IG9wdGlvbnMgb2JqZWN0IHRoYXQgaXNuJ3RcbiAgLy8gdGhlIHJlc3VsdCBvZiBhbm90aGVyIG1lcmdlT3B0aW9ucyBjYWxsLlxuICAvLyBPbmx5IG1lcmdlZCBvcHRpb25zIGhhcyB0aGUgX2Jhc2UgcHJvcGVydHkuXG4gIGlmICghY2hpbGQuX2Jhc2UpIHtcbiAgICBpZiAoY2hpbGQuZXh0ZW5kcykge1xuICAgICAgcGFyZW50ID0gbWVyZ2VPcHRpb25zKHBhcmVudCwgY2hpbGQuZXh0ZW5kcywgdm0pO1xuICAgIH1cbiAgICBpZiAoY2hpbGQubWl4aW5zKSB7XG4gICAgICBmb3IgKHZhciBpID0gMCwgbCA9IGNoaWxkLm1peGlucy5sZW5ndGg7IGkgPCBsOyBpKyspIHtcbiAgICAgICAgcGFyZW50ID0gbWVyZ2VPcHRpb25zKHBhcmVudCwgY2hpbGQubWl4aW5zW2ldLCB2bSk7XG4gICAgICB9XG4gICAgfVxuICB9XG5cbiAgdmFyIG9wdGlvbnMgPSB7fTtcbiAgdmFyIGtleTtcbiAgZm9yIChrZXkgaW4gcGFyZW50KSB7XG4gICAgbWVyZ2VGaWVsZChrZXkpO1xuICB9XG4gIGZvciAoa2V5IGluIGNoaWxkKSB7XG4gICAgaWYgKCFoYXNPd24ocGFyZW50LCBrZXkpKSB7XG4gICAgICBtZXJnZUZpZWxkKGtleSk7XG4gICAgfVxuICB9XG4gIGZ1bmN0aW9uIG1lcmdlRmllbGQgKGtleSkge1xuICAgIHZhciBzdHJhdCA9IHN0cmF0c1trZXldIHx8IGRlZmF1bHRTdHJhdDtcbiAgICBvcHRpb25zW2tleV0gPSBzdHJhdChwYXJlbnRba2V5XSwgY2hpbGRba2V5XSwgdm0sIGtleSk7XG4gIH1cbiAgcmV0dXJuIG9wdGlvbnNcbn1cblxuLyoqXG4gKiBSZXNvbHZlIGFuIGFzc2V0LlxuICogVGhpcyBmdW5jdGlvbiBpcyB1c2VkIGJlY2F1c2UgY2hpbGQgaW5zdGFuY2VzIG5lZWQgYWNjZXNzXG4gKiB0byBhc3NldHMgZGVmaW5lZCBpbiBpdHMgYW5jZXN0b3IgY2hhaW4uXG4gKi9cbmZ1bmN0aW9uIHJlc29sdmVBc3NldCAoXG4gIG9wdGlvbnMsXG4gIHR5cGUsXG4gIGlkLFxuICB3YXJuTWlzc2luZ1xuKSB7XG4gIC8qIGlzdGFuYnVsIGlnbm9yZSBpZiAqL1xuICBpZiAodHlwZW9mIGlkICE9PSAnc3RyaW5nJykge1xuICAgIHJldHVyblxuICB9XG4gIHZhciBhc3NldHMgPSBvcHRpb25zW3R5cGVdO1xuICAvLyBjaGVjayBsb2NhbCByZWdpc3RyYXRpb24gdmFyaWF0aW9ucyBmaXJzdFxuICBpZiAoaGFzT3duKGFzc2V0cywgaWQpKSB7IHJldHVybiBhc3NldHNbaWRdIH1cbiAgdmFyIGNhbWVsaXplZElkID0gY2FtZWxpemUoaWQpO1xuICBpZiAoaGFzT3duKGFzc2V0cywgY2FtZWxpemVkSWQpKSB7IHJldHVybiBhc3NldHNbY2FtZWxpemVkSWRdIH1cbiAgdmFyIFBhc2NhbENhc2VJZCA9IGNhcGl0YWxpemUoY2FtZWxpemVkSWQpO1xuICBpZiAoaGFzT3duKGFzc2V0cywgUGFzY2FsQ2FzZUlkKSkgeyByZXR1cm4gYXNzZXRzW1Bhc2NhbENhc2VJZF0gfVxuICAvLyBmYWxsYmFjayB0byBwcm90b3R5cGUgY2hhaW5cbiAgdmFyIHJlcyA9IGFzc2V0c1tpZF0gfHwgYXNzZXRzW2NhbWVsaXplZElkXSB8fCBhc3NldHNbUGFzY2FsQ2FzZUlkXTtcbiAgaWYgKHByb2Nlc3MuZW52Lk5PREVfRU5WICE9PSAncHJvZHVjdGlvbicgJiYgd2Fybk1pc3NpbmcgJiYgIXJlcykge1xuICAgIHdhcm4oXG4gICAgICAnRmFpbGVkIHRvIHJlc29sdmUgJyArIHR5cGUuc2xpY2UoMCwgLTEpICsgJzogJyArIGlkLFxuICAgICAgb3B0aW9uc1xuICAgICk7XG4gIH1cbiAgcmV0dXJuIHJlc1xufVxuXG4vKiAgKi9cblxuXG5cbmZ1bmN0aW9uIHZhbGlkYXRlUHJvcCAoXG4gIGtleSxcbiAgcHJvcE9wdGlvbnMsXG4gIHByb3BzRGF0YSxcbiAgdm1cbikge1xuICB2YXIgcHJvcCA9IHByb3BPcHRpb25zW2tleV07XG4gIHZhciBhYnNlbnQgPSAhaGFzT3duKHByb3BzRGF0YSwga2V5KTtcbiAgdmFyIHZhbHVlID0gcHJvcHNEYXRhW2tleV07XG4gIC8vIGJvb2xlYW4gY2FzdGluZ1xuICB2YXIgYm9vbGVhbkluZGV4ID0gZ2V0VHlwZUluZGV4KEJvb2xlYW4sIHByb3AudHlwZSk7XG4gIGlmIChib29sZWFuSW5kZXggPiAtMSkge1xuICAgIGlmIChhYnNlbnQgJiYgIWhhc093bihwcm9wLCAnZGVmYXVsdCcpKSB7XG4gICAgICB2YWx1ZSA9IGZhbHNlO1xuICAgIH0gZWxzZSBpZiAodmFsdWUgPT09ICcnIHx8IHZhbHVlID09PSBoeXBoZW5hdGUoa2V5KSkge1xuICAgICAgLy8gb25seSBjYXN0IGVtcHR5IHN0cmluZyAvIHNhbWUgbmFtZSB0byBib29sZWFuIGlmXG4gICAgICAvLyBib29sZWFuIGhhcyBoaWdoZXIgcHJpb3JpdHlcbiAgICAgIHZhciBzdHJpbmdJbmRleCA9IGdldFR5cGVJbmRleChTdHJpbmcsIHByb3AudHlwZSk7XG4gICAgICBpZiAoc3RyaW5nSW5kZXggPCAwIHx8IGJvb2xlYW5JbmRleCA8IHN0cmluZ0luZGV4KSB7XG4gICAgICAgIHZhbHVlID0gdHJ1ZTtcbiAgICAgIH1cbiAgICB9XG4gIH1cbiAgLy8gY2hlY2sgZGVmYXVsdCB2YWx1ZVxuICBpZiAodmFsdWUgPT09IHVuZGVmaW5lZCkge1xuICAgIHZhbHVlID0gZ2V0UHJvcERlZmF1bHRWYWx1ZSh2bSwgcHJvcCwga2V5KTtcbiAgICAvLyBzaW5jZSB0aGUgZGVmYXVsdCB2YWx1ZSBpcyBhIGZyZXNoIGNvcHksXG4gICAgLy8gbWFrZSBzdXJlIHRvIG9ic2VydmUgaXQuXG4gICAgdmFyIHByZXZTaG91bGRPYnNlcnZlID0gc2hvdWxkT2JzZXJ2ZTtcbiAgICB0b2dnbGVPYnNlcnZpbmcodHJ1ZSk7XG4gICAgb2JzZXJ2ZSh2YWx1ZSk7XG4gICAgdG9nZ2xlT2JzZXJ2aW5nKHByZXZTaG91bGRPYnNlcnZlKTtcbiAgfVxuICBpZiAoXG4gICAgcHJvY2Vzcy5lbnYuTk9ERV9FTlYgIT09ICdwcm9kdWN0aW9uJyAmJlxuICAgIC8vIHNraXAgdmFsaWRhdGlvbiBmb3Igd2VleCByZWN5Y2xlLWxpc3QgY2hpbGQgY29tcG9uZW50IHByb3BzXG4gICAgIShmYWxzZSlcbiAgKSB7XG4gICAgYXNzZXJ0UHJvcChwcm9wLCBrZXksIHZhbHVlLCB2bSwgYWJzZW50KTtcbiAgfVxuICByZXR1cm4gdmFsdWVcbn1cblxuLyoqXG4gKiBHZXQgdGhlIGRlZmF1bHQgdmFsdWUgb2YgYSBwcm9wLlxuICovXG5mdW5jdGlvbiBnZXRQcm9wRGVmYXVsdFZhbHVlICh2bSwgcHJvcCwga2V5KSB7XG4gIC8vIG5vIGRlZmF1bHQsIHJldHVybiB1bmRlZmluZWRcbiAgaWYgKCFoYXNPd24ocHJvcCwgJ2RlZmF1bHQnKSkge1xuICAgIHJldHVybiB1bmRlZmluZWRcbiAgfVxuICB2YXIgZGVmID0gcHJvcC5kZWZhdWx0O1xuICAvLyB3YXJuIGFnYWluc3Qgbm9uLWZhY3RvcnkgZGVmYXVsdHMgZm9yIE9iamVjdCAmIEFycmF5XG4gIGlmIChwcm9jZXNzLmVudi5OT0RFX0VOViAhPT0gJ3Byb2R1Y3Rpb24nICYmIGlzT2JqZWN0KGRlZikpIHtcbiAgICB3YXJuKFxuICAgICAgJ0ludmFsaWQgZGVmYXVsdCB2YWx1ZSBmb3IgcHJvcCBcIicgKyBrZXkgKyAnXCI6ICcgK1xuICAgICAgJ1Byb3BzIHdpdGggdHlwZSBPYmplY3QvQXJyYXkgbXVzdCB1c2UgYSBmYWN0b3J5IGZ1bmN0aW9uICcgK1xuICAgICAgJ3RvIHJldHVybiB0aGUgZGVmYXVsdCB2YWx1ZS4nLFxuICAgICAgdm1cbiAgICApO1xuICB9XG4gIC8vIHRoZSByYXcgcHJvcCB2YWx1ZSB3YXMgYWxzbyB1bmRlZmluZWQgZnJvbSBwcmV2aW91cyByZW5kZXIsXG4gIC8vIHJldHVybiBwcmV2aW91cyBkZWZhdWx0IHZhbHVlIHRvIGF2b2lkIHVubmVjZXNzYXJ5IHdhdGNoZXIgdHJpZ2dlclxuICBpZiAodm0gJiYgdm0uJG9wdGlvbnMucHJvcHNEYXRhICYmXG4gICAgdm0uJG9wdGlvbnMucHJvcHNEYXRhW2tleV0gPT09IHVuZGVmaW5lZCAmJlxuICAgIHZtLl9wcm9wc1trZXldICE9PSB1bmRlZmluZWRcbiAgKSB7XG4gICAgcmV0dXJuIHZtLl9wcm9wc1trZXldXG4gIH1cbiAgLy8gY2FsbCBmYWN0b3J5IGZ1bmN0aW9uIGZvciBub24tRnVuY3Rpb24gdHlwZXNcbiAgLy8gYSB2YWx1ZSBpcyBGdW5jdGlvbiBpZiBpdHMgcHJvdG90eXBlIGlzIGZ1bmN0aW9uIGV2ZW4gYWNyb3NzIGRpZmZlcmVudCBleGVjdXRpb24gY29udGV4dFxuICByZXR1cm4gdHlwZW9mIGRlZiA9PT0gJ2Z1bmN0aW9uJyAmJiBnZXRUeXBlKHByb3AudHlwZSkgIT09ICdGdW5jdGlvbidcbiAgICA/IGRlZi5jYWxsKHZtKVxuICAgIDogZGVmXG59XG5cbi8qKlxuICogQXNzZXJ0IHdoZXRoZXIgYSBwcm9wIGlzIHZhbGlkLlxuICovXG5mdW5jdGlvbiBhc3NlcnRQcm9wIChcbiAgcHJvcCxcbiAgbmFtZSxcbiAgdmFsdWUsXG4gIHZtLFxuICBhYnNlbnRcbikge1xuICBpZiAocHJvcC5yZXF1aXJlZCAmJiBhYnNlbnQpIHtcbiAgICB3YXJuKFxuICAgICAgJ01pc3NpbmcgcmVxdWlyZWQgcHJvcDogXCInICsgbmFtZSArICdcIicsXG4gICAgICB2bVxuICAgICk7XG4gICAgcmV0dXJuXG4gIH1cbiAgaWYgKHZhbHVlID09IG51bGwgJiYgIXByb3AucmVxdWlyZWQpIHtcbiAgICByZXR1cm5cbiAgfVxuICB2YXIgdHlwZSA9IHByb3AudHlwZTtcbiAgdmFyIHZhbGlkID0gIXR5cGUgfHwgdHlwZSA9PT0gdHJ1ZTtcbiAgdmFyIGV4cGVjdGVkVHlwZXMgPSBbXTtcbiAgaWYgKHR5cGUpIHtcbiAgICBpZiAoIUFycmF5LmlzQXJyYXkodHlwZSkpIHtcbiAgICAgIHR5cGUgPSBbdHlwZV07XG4gICAgfVxuICAgIGZvciAodmFyIGkgPSAwOyBpIDwgdHlwZS5sZW5ndGggJiYgIXZhbGlkOyBpKyspIHtcbiAgICAgIHZhciBhc3NlcnRlZFR5cGUgPSBhc3NlcnRUeXBlKHZhbHVlLCB0eXBlW2ldKTtcbiAgICAgIGV4cGVjdGVkVHlwZXMucHVzaChhc3NlcnRlZFR5cGUuZXhwZWN0ZWRUeXBlIHx8ICcnKTtcbiAgICAgIHZhbGlkID0gYXNzZXJ0ZWRUeXBlLnZhbGlkO1xuICAgIH1cbiAgfVxuXG4gIGlmICghdmFsaWQpIHtcbiAgICB3YXJuKFxuICAgICAgZ2V0SW52YWxpZFR5cGVNZXNzYWdlKG5hbWUsIHZhbHVlLCBleHBlY3RlZFR5cGVzKSxcbiAgICAgIHZtXG4gICAgKTtcbiAgICByZXR1cm5cbiAgfVxuICB2YXIgdmFsaWRhdG9yID0gcHJvcC52YWxpZGF0b3I7XG4gIGlmICh2YWxpZGF0b3IpIHtcbiAgICBpZiAoIXZhbGlkYXRvcih2YWx1ZSkpIHtcbiAgICAgIHdhcm4oXG4gICAgICAgICdJbnZhbGlkIHByb3A6IGN1c3RvbSB2YWxpZGF0b3IgY2hlY2sgZmFpbGVkIGZvciBwcm9wIFwiJyArIG5hbWUgKyAnXCIuJyxcbiAgICAgICAgdm1cbiAgICAgICk7XG4gICAgfVxuICB9XG59XG5cbnZhciBzaW1wbGVDaGVja1JFID0gL14oU3RyaW5nfE51bWJlcnxCb29sZWFufEZ1bmN0aW9ufFN5bWJvbCkkLztcblxuZnVuY3Rpb24gYXNzZXJ0VHlwZSAodmFsdWUsIHR5cGUpIHtcbiAgdmFyIHZhbGlkO1xuICB2YXIgZXhwZWN0ZWRUeXBlID0gZ2V0VHlwZSh0eXBlKTtcbiAgaWYgKHNpbXBsZUNoZWNrUkUudGVzdChleHBlY3RlZFR5cGUpKSB7XG4gICAgdmFyIHQgPSB0eXBlb2YgdmFsdWU7XG4gICAgdmFsaWQgPSB0ID09PSBleHBlY3RlZFR5cGUudG9Mb3dlckNhc2UoKTtcbiAgICAvLyBmb3IgcHJpbWl0aXZlIHdyYXBwZXIgb2JqZWN0c1xuICAgIGlmICghdmFsaWQgJiYgdCA9PT0gJ29iamVjdCcpIHtcbiAgICAgIHZhbGlkID0gdmFsdWUgaW5zdGFuY2VvZiB0eXBlO1xuICAgIH1cbiAgfSBlbHNlIGlmIChleHBlY3RlZFR5cGUgPT09ICdPYmplY3QnKSB7XG4gICAgdmFsaWQgPSBpc1BsYWluT2JqZWN0KHZhbHVlKTtcbiAgfSBlbHNlIGlmIChleHBlY3RlZFR5cGUgPT09ICdBcnJheScpIHtcbiAgICB2YWxpZCA9IEFycmF5LmlzQXJyYXkodmFsdWUpO1xuICB9IGVsc2Uge1xuICAgIHZhbGlkID0gdmFsdWUgaW5zdGFuY2VvZiB0eXBlO1xuICB9XG4gIHJldHVybiB7XG4gICAgdmFsaWQ6IHZhbGlkLFxuICAgIGV4cGVjdGVkVHlwZTogZXhwZWN0ZWRUeXBlXG4gIH1cbn1cblxuLyoqXG4gKiBVc2UgZnVuY3Rpb24gc3RyaW5nIG5hbWUgdG8gY2hlY2sgYnVpbHQtaW4gdHlwZXMsXG4gKiBiZWNhdXNlIGEgc2ltcGxlIGVxdWFsaXR5IGNoZWNrIHdpbGwgZmFpbCB3aGVuIHJ1bm5pbmdcbiAqIGFjcm9zcyBkaWZmZXJlbnQgdm1zIC8gaWZyYW1lcy5cbiAqL1xuZnVuY3Rpb24gZ2V0VHlwZSAoZm4pIHtcbiAgdmFyIG1hdGNoID0gZm4gJiYgZm4udG9TdHJpbmcoKS5tYXRjaCgvXlxccypmdW5jdGlvbiAoXFx3KykvKTtcbiAgcmV0dXJuIG1hdGNoID8gbWF0Y2hbMV0gOiAnJ1xufVxuXG5mdW5jdGlvbiBpc1NhbWVUeXBlIChhLCBiKSB7XG4gIHJldHVybiBnZXRUeXBlKGEpID09PSBnZXRUeXBlKGIpXG59XG5cbmZ1bmN0aW9uIGdldFR5cGVJbmRleCAodHlwZSwgZXhwZWN0ZWRUeXBlcykge1xuICBpZiAoIUFycmF5LmlzQXJyYXkoZXhwZWN0ZWRUeXBlcykpIHtcbiAgICByZXR1cm4gaXNTYW1lVHlwZShleHBlY3RlZFR5cGVzLCB0eXBlKSA/IDAgOiAtMVxuICB9XG4gIGZvciAodmFyIGkgPSAwLCBsZW4gPSBleHBlY3RlZFR5cGVzLmxlbmd0aDsgaSA8IGxlbjsgaSsrKSB7XG4gICAgaWYgKGlzU2FtZVR5cGUoZXhwZWN0ZWRUeXBlc1tpXSwgdHlwZSkpIHtcbiAgICAgIHJldHVybiBpXG4gICAgfVxuICB9XG4gIHJldHVybiAtMVxufVxuXG5mdW5jdGlvbiBnZXRJbnZhbGlkVHlwZU1lc3NhZ2UgKG5hbWUsIHZhbHVlLCBleHBlY3RlZFR5cGVzKSB7XG4gIHZhciBtZXNzYWdlID0gXCJJbnZhbGlkIHByb3A6IHR5cGUgY2hlY2sgZmFpbGVkIGZvciBwcm9wIFxcXCJcIiArIG5hbWUgKyBcIlxcXCIuXCIgK1xuICAgIFwiIEV4cGVjdGVkIFwiICsgKGV4cGVjdGVkVHlwZXMubWFwKGNhcGl0YWxpemUpLmpvaW4oJywgJykpO1xuICB2YXIgZXhwZWN0ZWRUeXBlID0gZXhwZWN0ZWRUeXBlc1swXTtcbiAgdmFyIHJlY2VpdmVkVHlwZSA9IHRvUmF3VHlwZSh2YWx1ZSk7XG4gIHZhciBleHBlY3RlZFZhbHVlID0gc3R5bGVWYWx1ZSh2YWx1ZSwgZXhwZWN0ZWRUeXBlKTtcbiAgdmFyIHJlY2VpdmVkVmFsdWUgPSBzdHlsZVZhbHVlKHZhbHVlLCByZWNlaXZlZFR5cGUpO1xuICAvLyBjaGVjayBpZiB3ZSBuZWVkIHRvIHNwZWNpZnkgZXhwZWN0ZWQgdmFsdWVcbiAgaWYgKGV4cGVjdGVkVHlwZXMubGVuZ3RoID09PSAxICYmXG4gICAgICBpc0V4cGxpY2FibGUoZXhwZWN0ZWRUeXBlKSAmJlxuICAgICAgIWlzQm9vbGVhbihleHBlY3RlZFR5cGUsIHJlY2VpdmVkVHlwZSkpIHtcbiAgICBtZXNzYWdlICs9IFwiIHdpdGggdmFsdWUgXCIgKyBleHBlY3RlZFZhbHVlO1xuICB9XG4gIG1lc3NhZ2UgKz0gXCIsIGdvdCBcIiArIHJlY2VpdmVkVHlwZSArIFwiIFwiO1xuICAvLyBjaGVjayBpZiB3ZSBuZWVkIHRvIHNwZWNpZnkgcmVjZWl2ZWQgdmFsdWVcbiAgaWYgKGlzRXhwbGljYWJsZShyZWNlaXZlZFR5cGUpKSB7XG4gICAgbWVzc2FnZSArPSBcIndpdGggdmFsdWUgXCIgKyByZWNlaXZlZFZhbHVlICsgXCIuXCI7XG4gIH1cbiAgcmV0dXJuIG1lc3NhZ2Vcbn1cblxuZnVuY3Rpb24gc3R5bGVWYWx1ZSAodmFsdWUsIHR5cGUpIHtcbiAgaWYgKHR5cGUgPT09ICdTdHJpbmcnKSB7XG4gICAgcmV0dXJuIChcIlxcXCJcIiArIHZhbHVlICsgXCJcXFwiXCIpXG4gIH0gZWxzZSBpZiAodHlwZSA9PT0gJ051bWJlcicpIHtcbiAgICByZXR1cm4gKFwiXCIgKyAoTnVtYmVyKHZhbHVlKSkpXG4gIH0gZWxzZSB7XG4gICAgcmV0dXJuIChcIlwiICsgdmFsdWUpXG4gIH1cbn1cblxuZnVuY3Rpb24gaXNFeHBsaWNhYmxlICh2YWx1ZSkge1xuICB2YXIgZXhwbGljaXRUeXBlcyA9IFsnc3RyaW5nJywgJ251bWJlcicsICdib29sZWFuJ107XG4gIHJldHVybiBleHBsaWNpdFR5cGVzLnNvbWUoZnVuY3Rpb24gKGVsZW0pIHsgcmV0dXJuIHZhbHVlLnRvTG93ZXJDYXNlKCkgPT09IGVsZW07IH0pXG59XG5cbmZ1bmN0aW9uIGlzQm9vbGVhbiAoKSB7XG4gIHZhciBhcmdzID0gW10sIGxlbiA9IGFyZ3VtZW50cy5sZW5ndGg7XG4gIHdoaWxlICggbGVuLS0gKSBhcmdzWyBsZW4gXSA9IGFyZ3VtZW50c1sgbGVuIF07XG5cbiAgcmV0dXJuIGFyZ3Muc29tZShmdW5jdGlvbiAoZWxlbSkgeyByZXR1cm4gZWxlbS50b0xvd2VyQ2FzZSgpID09PSAnYm9vbGVhbic7IH0pXG59XG5cbi8qICAqL1xuXG5mdW5jdGlvbiBoYW5kbGVFcnJvciAoZXJyLCB2bSwgaW5mbykge1xuICAvLyBEZWFjdGl2YXRlIGRlcHMgdHJhY2tpbmcgd2hpbGUgcHJvY2Vzc2luZyBlcnJvciBoYW5kbGVyIHRvIGF2b2lkIHBvc3NpYmxlIGluZmluaXRlIHJlbmRlcmluZy5cbiAgLy8gU2VlOiBodHRwczovL2dpdGh1Yi5jb20vdnVlanMvdnVleC9pc3N1ZXMvMTUwNVxuICBwdXNoVGFyZ2V0KCk7XG4gIHRyeSB7XG4gICAgaWYgKHZtKSB7XG4gICAgICB2YXIgY3VyID0gdm07XG4gICAgICB3aGlsZSAoKGN1ciA9IGN1ci4kcGFyZW50KSkge1xuICAgICAgICB2YXIgaG9va3MgPSBjdXIuJG9wdGlvbnMuZXJyb3JDYXB0dXJlZDtcbiAgICAgICAgaWYgKGhvb2tzKSB7XG4gICAgICAgICAgZm9yICh2YXIgaSA9IDA7IGkgPCBob29rcy5sZW5ndGg7IGkrKykge1xuICAgICAgICAgICAgdHJ5IHtcbiAgICAgICAgICAgICAgdmFyIGNhcHR1cmUgPSBob29rc1tpXS5jYWxsKGN1ciwgZXJyLCB2bSwgaW5mbykgPT09IGZhbHNlO1xuICAgICAgICAgICAgICBpZiAoY2FwdHVyZSkgeyByZXR1cm4gfVxuICAgICAgICAgICAgfSBjYXRjaCAoZSkge1xuICAgICAgICAgICAgICBnbG9iYWxIYW5kbGVFcnJvcihlLCBjdXIsICdlcnJvckNhcHR1cmVkIGhvb2snKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICB9XG4gICAgZ2xvYmFsSGFuZGxlRXJyb3IoZXJyLCB2bSwgaW5mbyk7XG4gIH0gZmluYWxseSB7XG4gICAgcG9wVGFyZ2V0KCk7XG4gIH1cbn1cblxuZnVuY3Rpb24gaW52b2tlV2l0aEVycm9ySGFuZGxpbmcgKFxuICBoYW5kbGVyLFxuICBjb250ZXh0LFxuICBhcmdzLFxuICB2bSxcbiAgaW5mb1xuKSB7XG4gIHZhciByZXM7XG4gIHRyeSB7XG4gICAgcmVzID0gYXJncyA/IGhhbmRsZXIuYXBwbHkoY29udGV4dCwgYXJncykgOiBoYW5kbGVyLmNhbGwoY29udGV4dCk7XG4gICAgaWYgKHJlcyAmJiAhcmVzLl9pc1Z1ZSAmJiBpc1Byb21pc2UocmVzKSAmJiAhcmVzLl9oYW5kbGVkKSB7XG4gICAgICByZXMuY2F0Y2goZnVuY3Rpb24gKGUpIHsgcmV0dXJuIGhhbmRsZUVycm9yKGUsIHZtLCBpbmZvICsgXCIgKFByb21pc2UvYXN5bmMpXCIpOyB9KTtcbiAgICAgIC8vIGlzc3VlICM5NTExXG4gICAgICAvLyBhdm9pZCBjYXRjaCB0cmlnZ2VyaW5nIG11bHRpcGxlIHRpbWVzIHdoZW4gbmVzdGVkIGNhbGxzXG4gICAgICByZXMuX2hhbmRsZWQgPSB0cnVlO1xuICAgIH1cbiAgfSBjYXRjaCAoZSkge1xuICAgIGhhbmRsZUVycm9yKGUsIHZtLCBpbmZvKTtcbiAgfVxuICByZXR1cm4gcmVzXG59XG5cbmZ1bmN0aW9uIGdsb2JhbEhhbmRsZUVycm9yIChlcnIsIHZtLCBpbmZvKSB7XG4gIGlmIChjb25maWcuZXJyb3JIYW5kbGVyKSB7XG4gICAgdHJ5IHtcbiAgICAgIHJldHVybiBjb25maWcuZXJyb3JIYW5kbGVyLmNhbGwobnVsbCwgZXJyLCB2bSwgaW5mbylcbiAgICB9IGNhdGNoIChlKSB7XG4gICAgICAvLyBpZiB0aGUgdXNlciBpbnRlbnRpb25hbGx5IHRocm93cyB0aGUgb3JpZ2luYWwgZXJyb3IgaW4gdGhlIGhhbmRsZXIsXG4gICAgICAvLyBkbyBub3QgbG9nIGl0IHR3aWNlXG4gICAgICBpZiAoZSAhPT0gZXJyKSB7XG4gICAgICAgIGxvZ0Vycm9yKGUsIG51bGwsICdjb25maWcuZXJyb3JIYW5kbGVyJyk7XG4gICAgICB9XG4gICAgfVxuICB9XG4gIGxvZ0Vycm9yKGVyciwgdm0sIGluZm8pO1xufVxuXG5mdW5jdGlvbiBsb2dFcnJvciAoZXJyLCB2bSwgaW5mbykge1xuICBpZiAocHJvY2Vzcy5lbnYuTk9ERV9FTlYgIT09ICdwcm9kdWN0aW9uJykge1xuICAgIHdhcm4oKFwiRXJyb3IgaW4gXCIgKyBpbmZvICsgXCI6IFxcXCJcIiArIChlcnIudG9TdHJpbmcoKSkgKyBcIlxcXCJcIiksIHZtKTtcbiAgfVxuICAvKiBpc3RhbmJ1bCBpZ25vcmUgZWxzZSAqL1xuICBpZiAoKGluQnJvd3NlciB8fCBpbldlZXgpICYmIHR5cGVvZiBjb25zb2xlICE9PSAndW5kZWZpbmVkJykge1xuICAgIGNvbnNvbGUuZXJyb3IoZXJyKTtcbiAgfSBlbHNlIHtcbiAgICB0aHJvdyBlcnJcbiAgfVxufVxuXG4vKiAgKi9cblxudmFyIGNhbGxiYWNrcyA9IFtdO1xudmFyIHBlbmRpbmcgPSBmYWxzZTtcblxuZnVuY3Rpb24gZmx1c2hDYWxsYmFja3MgKCkge1xuICBwZW5kaW5nID0gZmFsc2U7XG4gIHZhciBjb3BpZXMgPSBjYWxsYmFja3Muc2xpY2UoMCk7XG4gIGNhbGxiYWNrcy5sZW5ndGggPSAwO1xuICBmb3IgKHZhciBpID0gMDsgaSA8IGNvcGllcy5sZW5ndGg7IGkrKykge1xuICAgIGNvcGllc1tpXSgpO1xuICB9XG59XG5cbi8vIEhlcmUgd2UgaGF2ZSBhc3luYyBkZWZlcnJpbmcgd3JhcHBlcnMgdXNpbmcgbWljcm90YXNrcy5cbi8vIEluIDIuNSB3ZSB1c2VkIChtYWNybykgdGFza3MgKGluIGNvbWJpbmF0aW9uIHdpdGggbWljcm90YXNrcykuXG4vLyBIb3dldmVyLCBpdCBoYXMgc3VidGxlIHByb2JsZW1zIHdoZW4gc3RhdGUgaXMgY2hhbmdlZCByaWdodCBiZWZvcmUgcmVwYWludFxuLy8gKGUuZy4gIzY4MTMsIG91dC1pbiB0cmFuc2l0aW9ucykuXG4vLyBBbHNvLCB1c2luZyAobWFjcm8pIHRhc2tzIGluIGV2ZW50IGhhbmRsZXIgd291bGQgY2F1c2Ugc29tZSB3ZWlyZCBiZWhhdmlvcnNcbi8vIHRoYXQgY2Fubm90IGJlIGNpcmN1bXZlbnRlZCAoZS5nLiAjNzEwOSwgIzcxNTMsICM3NTQ2LCAjNzgzNCwgIzgxMDkpLlxuLy8gU28gd2Ugbm93IHVzZSBtaWNyb3Rhc2tzIGV2ZXJ5d2hlcmUsIGFnYWluLlxuLy8gQSBtYWpvciBkcmF3YmFjayBvZiB0aGlzIHRyYWRlb2ZmIGlzIHRoYXQgdGhlcmUgYXJlIHNvbWUgc2NlbmFyaW9zXG4vLyB3aGVyZSBtaWNyb3Rhc2tzIGhhdmUgdG9vIGhpZ2ggYSBwcmlvcml0eSBhbmQgZmlyZSBpbiBiZXR3ZWVuIHN1cHBvc2VkbHlcbi8vIHNlcXVlbnRpYWwgZXZlbnRzIChlLmcuICM0NTIxLCAjNjY5MCwgd2hpY2ggaGF2ZSB3b3JrYXJvdW5kcylcbi8vIG9yIGV2ZW4gYmV0d2VlbiBidWJibGluZyBvZiB0aGUgc2FtZSBldmVudCAoIzY1NjYpLlxudmFyIHRpbWVyRnVuYztcblxuLy8gVGhlIG5leHRUaWNrIGJlaGF2aW9yIGxldmVyYWdlcyB0aGUgbWljcm90YXNrIHF1ZXVlLCB3aGljaCBjYW4gYmUgYWNjZXNzZWRcbi8vIHZpYSBlaXRoZXIgbmF0aXZlIFByb21pc2UudGhlbiBvciBNdXRhdGlvbk9ic2VydmVyLlxuLy8gTXV0YXRpb25PYnNlcnZlciBoYXMgd2lkZXIgc3VwcG9ydCwgaG93ZXZlciBpdCBpcyBzZXJpb3VzbHkgYnVnZ2VkIGluXG4vLyBVSVdlYlZpZXcgaW4gaU9TID49IDkuMy4zIHdoZW4gdHJpZ2dlcmVkIGluIHRvdWNoIGV2ZW50IGhhbmRsZXJzLiBJdFxuLy8gY29tcGxldGVseSBzdG9wcyB3b3JraW5nIGFmdGVyIHRyaWdnZXJpbmcgYSBmZXcgdGltZXMuLi4gc28sIGlmIG5hdGl2ZVxuLy8gUHJvbWlzZSBpcyBhdmFpbGFibGUsIHdlIHdpbGwgdXNlIGl0OlxuLyogaXN0YW5idWwgaWdub3JlIG5leHQsICRmbG93LWRpc2FibGUtbGluZSAqL1xuaWYgKHR5cGVvZiBQcm9taXNlICE9PSAndW5kZWZpbmVkJyAmJiBpc05hdGl2ZShQcm9taXNlKSkge1xuICB2YXIgcCA9IFByb21pc2UucmVzb2x2ZSgpO1xuICB0aW1lckZ1bmMgPSBmdW5jdGlvbiAoKSB7XG4gICAgcC50aGVuKGZsdXNoQ2FsbGJhY2tzKTtcbiAgICAvLyBJbiBwcm9ibGVtYXRpYyBVSVdlYlZpZXdzLCBQcm9taXNlLnRoZW4gZG9lc24ndCBjb21wbGV0ZWx5IGJyZWFrLCBidXRcbiAgICAvLyBpdCBjYW4gZ2V0IHN0dWNrIGluIGEgd2VpcmQgc3RhdGUgd2hlcmUgY2FsbGJhY2tzIGFyZSBwdXNoZWQgaW50byB0aGVcbiAgICAvLyBtaWNyb3Rhc2sgcXVldWUgYnV0IHRoZSBxdWV1ZSBpc24ndCBiZWluZyBmbHVzaGVkLCB1bnRpbCB0aGUgYnJvd3NlclxuICAgIC8vIG5lZWRzIHRvIGRvIHNvbWUgb3RoZXIgd29yaywgZS5nLiBoYW5kbGUgYSB0aW1lci4gVGhlcmVmb3JlIHdlIGNhblxuICAgIC8vIFwiZm9yY2VcIiB0aGUgbWljcm90YXNrIHF1ZXVlIHRvIGJlIGZsdXNoZWQgYnkgYWRkaW5nIGFuIGVtcHR5IHRpbWVyLlxuICAgIGlmIChpc0lPUykgeyBzZXRUaW1lb3V0KG5vb3ApOyB9XG4gIH07XG59IGVsc2UgaWYgKCFpc0lFICYmIHR5cGVvZiBNdXRhdGlvbk9ic2VydmVyICE9PSAndW5kZWZpbmVkJyAmJiAoXG4gIGlzTmF0aXZlKE11dGF0aW9uT2JzZXJ2ZXIpIHx8XG4gIC8vIFBoYW50b21KUyBhbmQgaU9TIDcueFxuICBNdXRhdGlvbk9ic2VydmVyLnRvU3RyaW5nKCkgPT09ICdbb2JqZWN0IE11dGF0aW9uT2JzZXJ2ZXJDb25zdHJ1Y3Rvcl0nXG4pKSB7XG4gIC8vIFVzZSBNdXRhdGlvbk9ic2VydmVyIHdoZXJlIG5hdGl2ZSBQcm9taXNlIGlzIG5vdCBhdmFpbGFibGUsXG4gIC8vIGUuZy4gUGhhbnRvbUpTLCBpT1M3LCBBbmRyb2lkIDQuNFxuICAvLyAoIzY0NjYgTXV0YXRpb25PYnNlcnZlciBpcyB1bnJlbGlhYmxlIGluIElFMTEpXG4gIHZhciBjb3VudGVyID0gMTtcbiAgdmFyIG9ic2VydmVyID0gbmV3IE11dGF0aW9uT2JzZXJ2ZXIoZmx1c2hDYWxsYmFja3MpO1xuICB2YXIgdGV4dE5vZGUgPSBkb2N1bWVudC5jcmVhdGVUZXh0Tm9kZShTdHJpbmcoY291bnRlcikpO1xuICBvYnNlcnZlci5vYnNlcnZlKHRleHROb2RlLCB7XG4gICAgY2hhcmFjdGVyRGF0YTogdHJ1ZVxuICB9KTtcbiAgdGltZXJGdW5jID0gZnVuY3Rpb24gKCkge1xuICAgIGNvdW50ZXIgPSAoY291bnRlciArIDEpICUgMjtcbiAgICB0ZXh0Tm9kZS5kYXRhID0gU3RyaW5nKGNvdW50ZXIpO1xuICB9O1xufSBlbHNlIGlmICh0eXBlb2Ygc2V0SW1tZWRpYXRlICE9PSAndW5kZWZpbmVkJyAmJiBpc05hdGl2ZShzZXRJbW1lZGlhdGUpKSB7XG4gIC8vIEZhbGxiYWNrIHRvIHNldEltbWVkaWF0ZS5cbiAgLy8gVGVjaG5pY2FsbHkgaXQgbGV2ZXJhZ2VzIHRoZSAobWFjcm8pIHRhc2sgcXVldWUsXG4gIC8vIGJ1dCBpdCBpcyBzdGlsbCBhIGJldHRlciBjaG9pY2UgdGhhbiBzZXRUaW1lb3V0LlxuICB0aW1lckZ1bmMgPSBmdW5jdGlvbiAoKSB7XG4gICAgc2V0SW1tZWRpYXRlKGZsdXNoQ2FsbGJhY2tzKTtcbiAgfTtcbn0gZWxzZSB7XG4gIC8vIEZhbGxiYWNrIHRvIHNldFRpbWVvdXQuXG4gIHRpbWVyRnVuYyA9IGZ1bmN0aW9uICgpIHtcbiAgICBzZXRUaW1lb3V0KGZsdXNoQ2FsbGJhY2tzLCAwKTtcbiAgfTtcbn1cblxuZnVuY3Rpb24gbmV4dFRpY2sgKGNiLCBjdHgpIHtcbiAgdmFyIF9yZXNvbHZlO1xuICBjYWxsYmFja3MucHVzaChmdW5jdGlvbiAoKSB7XG4gICAgaWYgKGNiKSB7XG4gICAgICB0cnkge1xuICAgICAgICBjYi5jYWxsKGN0eCk7XG4gICAgICB9IGNhdGNoIChlKSB7XG4gICAgICAgIGhhbmRsZUVycm9yKGUsIGN0eCwgJ25leHRUaWNrJyk7XG4gICAgICB9XG4gICAgfSBlbHNlIGlmIChfcmVzb2x2ZSkge1xuICAgICAgX3Jlc29sdmUoY3R4KTtcbiAgICB9XG4gIH0pO1xuICBpZiAoIXBlbmRpbmcpIHtcbiAgICBwZW5kaW5nID0gdHJ1ZTtcbiAgICB0aW1lckZ1bmMoKTtcbiAgfVxuICAvLyAkZmxvdy1kaXNhYmxlLWxpbmVcbiAgaWYgKCFjYiAmJiB0eXBlb2YgUHJvbWlzZSAhPT0gJ3VuZGVmaW5lZCcpIHtcbiAgICByZXR1cm4gbmV3IFByb21pc2UoZnVuY3Rpb24gKHJlc29sdmUpIHtcbiAgICAgIF9yZXNvbHZlID0gcmVzb2x2ZTtcbiAgICB9KVxuICB9XG59XG5cbi8qICAqL1xuXG4vKiBub3QgdHlwZSBjaGVja2luZyB0aGlzIGZpbGUgYmVjYXVzZSBmbG93IGRvZXNuJ3QgcGxheSB3ZWxsIHdpdGggUHJveHkgKi9cblxudmFyIGluaXRQcm94eTtcblxuaWYgKHByb2Nlc3MuZW52Lk5PREVfRU5WICE9PSAncHJvZHVjdGlvbicpIHtcbiAgdmFyIGFsbG93ZWRHbG9iYWxzID0gbWFrZU1hcChcbiAgICAnSW5maW5pdHksdW5kZWZpbmVkLE5hTixpc0Zpbml0ZSxpc05hTiwnICtcbiAgICAncGFyc2VGbG9hdCxwYXJzZUludCxkZWNvZGVVUkksZGVjb2RlVVJJQ29tcG9uZW50LGVuY29kZVVSSSxlbmNvZGVVUklDb21wb25lbnQsJyArXG4gICAgJ01hdGgsTnVtYmVyLERhdGUsQXJyYXksT2JqZWN0LEJvb2xlYW4sU3RyaW5nLFJlZ0V4cCxNYXAsU2V0LEpTT04sSW50bCwnICtcbiAgICAncmVxdWlyZScgLy8gZm9yIFdlYnBhY2svQnJvd3NlcmlmeVxuICApO1xuXG4gIHZhciB3YXJuTm9uUHJlc2VudCA9IGZ1bmN0aW9uICh0YXJnZXQsIGtleSkge1xuICAgIHdhcm4oXG4gICAgICBcIlByb3BlcnR5IG9yIG1ldGhvZCBcXFwiXCIgKyBrZXkgKyBcIlxcXCIgaXMgbm90IGRlZmluZWQgb24gdGhlIGluc3RhbmNlIGJ1dCBcIiArXG4gICAgICAncmVmZXJlbmNlZCBkdXJpbmcgcmVuZGVyLiBNYWtlIHN1cmUgdGhhdCB0aGlzIHByb3BlcnR5IGlzIHJlYWN0aXZlLCAnICtcbiAgICAgICdlaXRoZXIgaW4gdGhlIGRhdGEgb3B0aW9uLCBvciBmb3IgY2xhc3MtYmFzZWQgY29tcG9uZW50cywgYnkgJyArXG4gICAgICAnaW5pdGlhbGl6aW5nIHRoZSBwcm9wZXJ0eS4gJyArXG4gICAgICAnU2VlOiBodHRwczovL3Z1ZWpzLm9yZy92Mi9ndWlkZS9yZWFjdGl2aXR5Lmh0bWwjRGVjbGFyaW5nLVJlYWN0aXZlLVByb3BlcnRpZXMuJyxcbiAgICAgIHRhcmdldFxuICAgICk7XG4gIH07XG5cbiAgdmFyIHdhcm5SZXNlcnZlZFByZWZpeCA9IGZ1bmN0aW9uICh0YXJnZXQsIGtleSkge1xuICAgIHdhcm4oXG4gICAgICBcIlByb3BlcnR5IFxcXCJcIiArIGtleSArIFwiXFxcIiBtdXN0IGJlIGFjY2Vzc2VkIHdpdGggXFxcIiRkYXRhLlwiICsga2V5ICsgXCJcXFwiIGJlY2F1c2UgXCIgK1xuICAgICAgJ3Byb3BlcnRpZXMgc3RhcnRpbmcgd2l0aCBcIiRcIiBvciBcIl9cIiBhcmUgbm90IHByb3hpZWQgaW4gdGhlIFZ1ZSBpbnN0YW5jZSB0byAnICtcbiAgICAgICdwcmV2ZW50IGNvbmZsaWN0cyB3aXRoIFZ1ZSBpbnRlcm5hbHMuICcgK1xuICAgICAgJ1NlZTogaHR0cHM6Ly92dWVqcy5vcmcvdjIvYXBpLyNkYXRhJyxcbiAgICAgIHRhcmdldFxuICAgICk7XG4gIH07XG5cbiAgdmFyIGhhc1Byb3h5ID1cbiAgICB0eXBlb2YgUHJveHkgIT09ICd1bmRlZmluZWQnICYmIGlzTmF0aXZlKFByb3h5KTtcblxuICBpZiAoaGFzUHJveHkpIHtcbiAgICB2YXIgaXNCdWlsdEluTW9kaWZpZXIgPSBtYWtlTWFwKCdzdG9wLHByZXZlbnQsc2VsZixjdHJsLHNoaWZ0LGFsdCxtZXRhLGV4YWN0Jyk7XG4gICAgY29uZmlnLmtleUNvZGVzID0gbmV3IFByb3h5KGNvbmZpZy5rZXlDb2Rlcywge1xuICAgICAgc2V0OiBmdW5jdGlvbiBzZXQgKHRhcmdldCwga2V5LCB2YWx1ZSkge1xuICAgICAgICBpZiAoaXNCdWlsdEluTW9kaWZpZXIoa2V5KSkge1xuICAgICAgICAgIHdhcm4oKFwiQXZvaWQgb3ZlcndyaXRpbmcgYnVpbHQtaW4gbW9kaWZpZXIgaW4gY29uZmlnLmtleUNvZGVzOiAuXCIgKyBrZXkpKTtcbiAgICAgICAgICByZXR1cm4gZmFsc2VcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICB0YXJnZXRba2V5XSA9IHZhbHVlO1xuICAgICAgICAgIHJldHVybiB0cnVlXG4gICAgICAgIH1cbiAgICAgIH1cbiAgICB9KTtcbiAgfVxuXG4gIHZhciBoYXNIYW5kbGVyID0ge1xuICAgIGhhczogZnVuY3Rpb24gaGFzICh0YXJnZXQsIGtleSkge1xuICAgICAgdmFyIGhhcyA9IGtleSBpbiB0YXJnZXQ7XG4gICAgICB2YXIgaXNBbGxvd2VkID0gYWxsb3dlZEdsb2JhbHMoa2V5KSB8fFxuICAgICAgICAodHlwZW9mIGtleSA9PT0gJ3N0cmluZycgJiYga2V5LmNoYXJBdCgwKSA9PT0gJ18nICYmICEoa2V5IGluIHRhcmdldC4kZGF0YSkpO1xuICAgICAgaWYgKCFoYXMgJiYgIWlzQWxsb3dlZCkge1xuICAgICAgICBpZiAoa2V5IGluIHRhcmdldC4kZGF0YSkgeyB3YXJuUmVzZXJ2ZWRQcmVmaXgodGFyZ2V0LCBrZXkpOyB9XG4gICAgICAgIGVsc2UgeyB3YXJuTm9uUHJlc2VudCh0YXJnZXQsIGtleSk7IH1cbiAgICAgIH1cbiAgICAgIHJldHVybiBoYXMgfHwgIWlzQWxsb3dlZFxuICAgIH1cbiAgfTtcblxuICB2YXIgZ2V0SGFuZGxlciA9IHtcbiAgICBnZXQ6IGZ1bmN0aW9uIGdldCAodGFyZ2V0LCBrZXkpIHtcbiAgICAgIGlmICh0eXBlb2Yga2V5ID09PSAnc3RyaW5nJyAmJiAhKGtleSBpbiB0YXJnZXQpKSB7XG4gICAgICAgIGlmIChrZXkgaW4gdGFyZ2V0LiRkYXRhKSB7IHdhcm5SZXNlcnZlZFByZWZpeCh0YXJnZXQsIGtleSk7IH1cbiAgICAgICAgZWxzZSB7IHdhcm5Ob25QcmVzZW50KHRhcmdldCwga2V5KTsgfVxuICAgICAgfVxuICAgICAgcmV0dXJuIHRhcmdldFtrZXldXG4gICAgfVxuICB9O1xuXG4gIGluaXRQcm94eSA9IGZ1bmN0aW9uIGluaXRQcm94eSAodm0pIHtcbiAgICBpZiAoaGFzUHJveHkpIHtcbiAgICAgIC8vIGRldGVybWluZSB3aGljaCBwcm94eSBoYW5kbGVyIHRvIHVzZVxuICAgICAgdmFyIG9wdGlvbnMgPSB2bS4kb3B0aW9ucztcbiAgICAgIHZhciBoYW5kbGVycyA9IG9wdGlvbnMucmVuZGVyICYmIG9wdGlvbnMucmVuZGVyLl93aXRoU3RyaXBwZWRcbiAgICAgICAgPyBnZXRIYW5kbGVyXG4gICAgICAgIDogaGFzSGFuZGxlcjtcbiAgICAgIHZtLl9yZW5kZXJQcm94eSA9IG5ldyBQcm94eSh2bSwgaGFuZGxlcnMpO1xuICAgIH0gZWxzZSB7XG4gICAgICB2bS5fcmVuZGVyUHJveHkgPSB2bTtcbiAgICB9XG4gIH07XG59XG5cbi8qICAqL1xuXG52YXIgc2Vlbk9iamVjdHMgPSBuZXcgX1NldCgpO1xuXG4vKipcbiAqIFJlY3Vyc2l2ZWx5IHRyYXZlcnNlIGFuIG9iamVjdCB0byBldm9rZSBhbGwgY29udmVydGVkXG4gKiBnZXR0ZXJzLCBzbyB0aGF0IGV2ZXJ5IG5lc3RlZCBwcm9wZXJ0eSBpbnNpZGUgdGhlIG9iamVjdFxuICogaXMgY29sbGVjdGVkIGFzIGEgXCJkZWVwXCIgZGVwZW5kZW5jeS5cbiAqL1xuZnVuY3Rpb24gdHJhdmVyc2UgKHZhbCkge1xuICBfdHJhdmVyc2UodmFsLCBzZWVuT2JqZWN0cyk7XG4gIHNlZW5PYmplY3RzLmNsZWFyKCk7XG59XG5cbmZ1bmN0aW9uIF90cmF2ZXJzZSAodmFsLCBzZWVuKSB7XG4gIHZhciBpLCBrZXlzO1xuICB2YXIgaXNBID0gQXJyYXkuaXNBcnJheSh2YWwpO1xuICBpZiAoKCFpc0EgJiYgIWlzT2JqZWN0KHZhbCkpIHx8IE9iamVjdC5pc0Zyb3plbih2YWwpIHx8IHZhbCBpbnN0YW5jZW9mIFZOb2RlKSB7XG4gICAgcmV0dXJuXG4gIH1cbiAgaWYgKHZhbC5fX29iX18pIHtcbiAgICB2YXIgZGVwSWQgPSB2YWwuX19vYl9fLmRlcC5pZDtcbiAgICBpZiAoc2Vlbi5oYXMoZGVwSWQpKSB7XG4gICAgICByZXR1cm5cbiAgICB9XG4gICAgc2Vlbi5hZGQoZGVwSWQpO1xuICB9XG4gIGlmIChpc0EpIHtcbiAgICBpID0gdmFsLmxlbmd0aDtcbiAgICB3aGlsZSAoaS0tKSB7IF90cmF2ZXJzZSh2YWxbaV0sIHNlZW4pOyB9XG4gIH0gZWxzZSB7XG4gICAga2V5cyA9IE9iamVjdC5rZXlzKHZhbCk7XG4gICAgaSA9IGtleXMubGVuZ3RoO1xuICAgIHdoaWxlIChpLS0pIHsgX3RyYXZlcnNlKHZhbFtrZXlzW2ldXSwgc2Vlbik7IH1cbiAgfVxufVxuXG52YXIgbWFyaztcbnZhciBtZWFzdXJlO1xuXG5pZiAocHJvY2Vzcy5lbnYuTk9ERV9FTlYgIT09ICdwcm9kdWN0aW9uJykge1xuICB2YXIgcGVyZiA9IGluQnJvd3NlciAmJiB3aW5kb3cucGVyZm9ybWFuY2U7XG4gIC8qIGlzdGFuYnVsIGlnbm9yZSBpZiAqL1xuICBpZiAoXG4gICAgcGVyZiAmJlxuICAgIHBlcmYubWFyayAmJlxuICAgIHBlcmYubWVhc3VyZSAmJlxuICAgIHBlcmYuY2xlYXJNYXJrcyAmJlxuICAgIHBlcmYuY2xlYXJNZWFzdXJlc1xuICApIHtcbiAgICBtYXJrID0gZnVuY3Rpb24gKHRhZykgeyByZXR1cm4gcGVyZi5tYXJrKHRhZyk7IH07XG4gICAgbWVhc3VyZSA9IGZ1bmN0aW9uIChuYW1lLCBzdGFydFRhZywgZW5kVGFnKSB7XG4gICAgICBwZXJmLm1lYXN1cmUobmFtZSwgc3RhcnRUYWcsIGVuZFRhZyk7XG4gICAgICBwZXJmLmNsZWFyTWFya3Moc3RhcnRUYWcpO1xuICAgICAgcGVyZi5jbGVhck1hcmtzKGVuZFRhZyk7XG4gICAgICAvLyBwZXJmLmNsZWFyTWVhc3VyZXMobmFtZSlcbiAgICB9O1xuICB9XG59XG5cbi8qICAqL1xuXG52YXIgbm9ybWFsaXplRXZlbnQgPSBjYWNoZWQoZnVuY3Rpb24gKG5hbWUpIHtcbiAgdmFyIHBhc3NpdmUgPSBuYW1lLmNoYXJBdCgwKSA9PT0gJyYnO1xuICBuYW1lID0gcGFzc2l2ZSA/IG5hbWUuc2xpY2UoMSkgOiBuYW1lO1xuICB2YXIgb25jZSQkMSA9IG5hbWUuY2hhckF0KDApID09PSAnfic7IC8vIFByZWZpeGVkIGxhc3QsIGNoZWNrZWQgZmlyc3RcbiAgbmFtZSA9IG9uY2UkJDEgPyBuYW1lLnNsaWNlKDEpIDogbmFtZTtcbiAgdmFyIGNhcHR1cmUgPSBuYW1lLmNoYXJBdCgwKSA9PT0gJyEnO1xuICBuYW1lID0gY2FwdHVyZSA/IG5hbWUuc2xpY2UoMSkgOiBuYW1lO1xuICByZXR1cm4ge1xuICAgIG5hbWU6IG5hbWUsXG4gICAgb25jZTogb25jZSQkMSxcbiAgICBjYXB0dXJlOiBjYXB0dXJlLFxuICAgIHBhc3NpdmU6IHBhc3NpdmVcbiAgfVxufSk7XG5cbmZ1bmN0aW9uIGNyZWF0ZUZuSW52b2tlciAoZm5zLCB2bSkge1xuICBmdW5jdGlvbiBpbnZva2VyICgpIHtcbiAgICB2YXIgYXJndW1lbnRzJDEgPSBhcmd1bWVudHM7XG5cbiAgICB2YXIgZm5zID0gaW52b2tlci5mbnM7XG4gICAgaWYgKEFycmF5LmlzQXJyYXkoZm5zKSkge1xuICAgICAgdmFyIGNsb25lZCA9IGZucy5zbGljZSgpO1xuICAgICAgZm9yICh2YXIgaSA9IDA7IGkgPCBjbG9uZWQubGVuZ3RoOyBpKyspIHtcbiAgICAgICAgaW52b2tlV2l0aEVycm9ySGFuZGxpbmcoY2xvbmVkW2ldLCBudWxsLCBhcmd1bWVudHMkMSwgdm0sIFwidi1vbiBoYW5kbGVyXCIpO1xuICAgICAgfVxuICAgIH0gZWxzZSB7XG4gICAgICAvLyByZXR1cm4gaGFuZGxlciByZXR1cm4gdmFsdWUgZm9yIHNpbmdsZSBoYW5kbGVyc1xuICAgICAgcmV0dXJuIGludm9rZVdpdGhFcnJvckhhbmRsaW5nKGZucywgbnVsbCwgYXJndW1lbnRzLCB2bSwgXCJ2LW9uIGhhbmRsZXJcIilcbiAgICB9XG4gIH1cbiAgaW52b2tlci5mbnMgPSBmbnM7XG4gIHJldHVybiBpbnZva2VyXG59XG5cbmZ1bmN0aW9uIHVwZGF0ZUxpc3RlbmVycyAoXG4gIG9uLFxuICBvbGRPbixcbiAgYWRkLFxuICByZW1vdmUkJDEsXG4gIGNyZWF0ZU9uY2VIYW5kbGVyLFxuICB2bVxuKSB7XG4gIHZhciBuYW1lLCBkZWYkJDEsIGN1ciwgb2xkLCBldmVudDtcbiAgZm9yIChuYW1lIGluIG9uKSB7XG4gICAgZGVmJCQxID0gY3VyID0gb25bbmFtZV07XG4gICAgb2xkID0gb2xkT25bbmFtZV07XG4gICAgZXZlbnQgPSBub3JtYWxpemVFdmVudChuYW1lKTtcbiAgICBpZiAoaXNVbmRlZihjdXIpKSB7XG4gICAgICBwcm9jZXNzLmVudi5OT0RFX0VOViAhPT0gJ3Byb2R1Y3Rpb24nICYmIHdhcm4oXG4gICAgICAgIFwiSW52YWxpZCBoYW5kbGVyIGZvciBldmVudCBcXFwiXCIgKyAoZXZlbnQubmFtZSkgKyBcIlxcXCI6IGdvdCBcIiArIFN0cmluZyhjdXIpLFxuICAgICAgICB2bVxuICAgICAgKTtcbiAgICB9IGVsc2UgaWYgKGlzVW5kZWYob2xkKSkge1xuICAgICAgaWYgKGlzVW5kZWYoY3VyLmZucykpIHtcbiAgICAgICAgY3VyID0gb25bbmFtZV0gPSBjcmVhdGVGbkludm9rZXIoY3VyLCB2bSk7XG4gICAgICB9XG4gICAgICBpZiAoaXNUcnVlKGV2ZW50Lm9uY2UpKSB7XG4gICAgICAgIGN1ciA9IG9uW25hbWVdID0gY3JlYXRlT25jZUhhbmRsZXIoZXZlbnQubmFtZSwgY3VyLCBldmVudC5jYXB0dXJlKTtcbiAgICAgIH1cbiAgICAgIGFkZChldmVudC5uYW1lLCBjdXIsIGV2ZW50LmNhcHR1cmUsIGV2ZW50LnBhc3NpdmUsIGV2ZW50LnBhcmFtcyk7XG4gICAgfSBlbHNlIGlmIChjdXIgIT09IG9sZCkge1xuICAgICAgb2xkLmZucyA9IGN1cjtcbiAgICAgIG9uW25hbWVdID0gb2xkO1xuICAgIH1cbiAgfVxuICBmb3IgKG5hbWUgaW4gb2xkT24pIHtcbiAgICBpZiAoaXNVbmRlZihvbltuYW1lXSkpIHtcbiAgICAgIGV2ZW50ID0gbm9ybWFsaXplRXZlbnQobmFtZSk7XG4gICAgICByZW1vdmUkJDEoZXZlbnQubmFtZSwgb2xkT25bbmFtZV0sIGV2ZW50LmNhcHR1cmUpO1xuICAgIH1cbiAgfVxufVxuXG4vKiAgKi9cblxuLyogICovXG5cbi8vIGZpeGVkIGJ5IHh4eHh4eCAobXAgcHJvcGVydGllcylcbmZ1bmN0aW9uIGV4dHJhY3RQcm9wZXJ0aWVzRnJvbVZOb2RlRGF0YShkYXRhLCBDdG9yLCByZXMsIGNvbnRleHQpIHtcbiAgdmFyIHByb3BPcHRpb25zID0gQ3Rvci5vcHRpb25zLm1wT3B0aW9ucyAmJiBDdG9yLm9wdGlvbnMubXBPcHRpb25zLnByb3BlcnRpZXM7XG4gIGlmIChpc1VuZGVmKHByb3BPcHRpb25zKSkge1xuICAgIHJldHVybiByZXNcbiAgfVxuICB2YXIgZXh0ZXJuYWxDbGFzc2VzID0gQ3Rvci5vcHRpb25zLm1wT3B0aW9ucy5leHRlcm5hbENsYXNzZXMgfHwgW107XG4gIHZhciBhdHRycyA9IGRhdGEuYXR0cnM7XG4gIHZhciBwcm9wcyA9IGRhdGEucHJvcHM7XG4gIGlmIChpc0RlZihhdHRycykgfHwgaXNEZWYocHJvcHMpKSB7XG4gICAgZm9yICh2YXIga2V5IGluIHByb3BPcHRpb25zKSB7XG4gICAgICB2YXIgYWx0S2V5ID0gaHlwaGVuYXRlKGtleSk7XG4gICAgICB2YXIgcmVzdWx0ID0gY2hlY2tQcm9wKHJlcywgcHJvcHMsIGtleSwgYWx0S2V5LCB0cnVlKSB8fFxuICAgICAgICAgIGNoZWNrUHJvcChyZXMsIGF0dHJzLCBrZXksIGFsdEtleSwgZmFsc2UpO1xuICAgICAgLy8gZXh0ZXJuYWxDbGFzc1xuICAgICAgaWYgKFxuICAgICAgICByZXN1bHQgJiZcbiAgICAgICAgcmVzW2tleV0gJiZcbiAgICAgICAgZXh0ZXJuYWxDbGFzc2VzLmluZGV4T2YoYWx0S2V5KSAhPT0gLTEgJiZcbiAgICAgICAgY29udGV4dFtjYW1lbGl6ZShyZXNba2V5XSldXG4gICAgICApIHtcbiAgICAgICAgLy8g6LWL5YC8IGV4dGVybmFsQ2xhc3Mg55yf5q2j55qE5YC8KOaooeadv+mHjCBleHRlcm5hbENsYXNzIOeahOWAvOWPr+iDveaYr+Wtl+espuS4silcbiAgICAgICAgcmVzW2tleV0gPSBjb250ZXh0W2NhbWVsaXplKHJlc1trZXldKV07XG4gICAgICB9XG4gICAgfVxuICB9XG4gIHJldHVybiByZXNcbn1cblxuZnVuY3Rpb24gZXh0cmFjdFByb3BzRnJvbVZOb2RlRGF0YSAoXG4gIGRhdGEsXG4gIEN0b3IsXG4gIHRhZyxcbiAgY29udGV4dC8vIGZpeGVkIGJ5IHh4eHh4eFxuKSB7XG4gIC8vIHdlIGFyZSBvbmx5IGV4dHJhY3RpbmcgcmF3IHZhbHVlcyBoZXJlLlxuICAvLyB2YWxpZGF0aW9uIGFuZCBkZWZhdWx0IHZhbHVlcyBhcmUgaGFuZGxlZCBpbiB0aGUgY2hpbGRcbiAgLy8gY29tcG9uZW50IGl0c2VsZi5cbiAgdmFyIHByb3BPcHRpb25zID0gQ3Rvci5vcHRpb25zLnByb3BzO1xuICBpZiAoaXNVbmRlZihwcm9wT3B0aW9ucykpIHtcbiAgICAvLyBmaXhlZCBieSB4eHh4eHhcbiAgICByZXR1cm4gZXh0cmFjdFByb3BlcnRpZXNGcm9tVk5vZGVEYXRhKGRhdGEsIEN0b3IsIHt9LCBjb250ZXh0KVxuICB9XG4gIHZhciByZXMgPSB7fTtcbiAgdmFyIGF0dHJzID0gZGF0YS5hdHRycztcbiAgdmFyIHByb3BzID0gZGF0YS5wcm9wcztcbiAgaWYgKGlzRGVmKGF0dHJzKSB8fCBpc0RlZihwcm9wcykpIHtcbiAgICBmb3IgKHZhciBrZXkgaW4gcHJvcE9wdGlvbnMpIHtcbiAgICAgIHZhciBhbHRLZXkgPSBoeXBoZW5hdGUoa2V5KTtcbiAgICAgIGlmIChwcm9jZXNzLmVudi5OT0RFX0VOViAhPT0gJ3Byb2R1Y3Rpb24nKSB7XG4gICAgICAgIHZhciBrZXlJbkxvd2VyQ2FzZSA9IGtleS50b0xvd2VyQ2FzZSgpO1xuICAgICAgICBpZiAoXG4gICAgICAgICAga2V5ICE9PSBrZXlJbkxvd2VyQ2FzZSAmJlxuICAgICAgICAgIGF0dHJzICYmIGhhc093bihhdHRycywga2V5SW5Mb3dlckNhc2UpXG4gICAgICAgICkge1xuICAgICAgICAgIHRpcChcbiAgICAgICAgICAgIFwiUHJvcCBcXFwiXCIgKyBrZXlJbkxvd2VyQ2FzZSArIFwiXFxcIiBpcyBwYXNzZWQgdG8gY29tcG9uZW50IFwiICtcbiAgICAgICAgICAgIChmb3JtYXRDb21wb25lbnROYW1lKHRhZyB8fCBDdG9yKSkgKyBcIiwgYnV0IHRoZSBkZWNsYXJlZCBwcm9wIG5hbWUgaXNcIiArXG4gICAgICAgICAgICBcIiBcXFwiXCIgKyBrZXkgKyBcIlxcXCIuIFwiICtcbiAgICAgICAgICAgIFwiTm90ZSB0aGF0IEhUTUwgYXR0cmlidXRlcyBhcmUgY2FzZS1pbnNlbnNpdGl2ZSBhbmQgY2FtZWxDYXNlZCBcIiArXG4gICAgICAgICAgICBcInByb3BzIG5lZWQgdG8gdXNlIHRoZWlyIGtlYmFiLWNhc2UgZXF1aXZhbGVudHMgd2hlbiB1c2luZyBpbi1ET00gXCIgK1xuICAgICAgICAgICAgXCJ0ZW1wbGF0ZXMuIFlvdSBzaG91bGQgcHJvYmFibHkgdXNlIFxcXCJcIiArIGFsdEtleSArIFwiXFxcIiBpbnN0ZWFkIG9mIFxcXCJcIiArIGtleSArIFwiXFxcIi5cIlxuICAgICAgICAgICk7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICAgIGNoZWNrUHJvcChyZXMsIHByb3BzLCBrZXksIGFsdEtleSwgdHJ1ZSkgfHxcbiAgICAgIGNoZWNrUHJvcChyZXMsIGF0dHJzLCBrZXksIGFsdEtleSwgZmFsc2UpO1xuICAgIH1cbiAgfVxuICAvLyBmaXhlZCBieSB4eHh4eHhcbiAgcmV0dXJuIGV4dHJhY3RQcm9wZXJ0aWVzRnJvbVZOb2RlRGF0YShkYXRhLCBDdG9yLCByZXMsIGNvbnRleHQpXG59XG5cbmZ1bmN0aW9uIGNoZWNrUHJvcCAoXG4gIHJlcyxcbiAgaGFzaCxcbiAga2V5LFxuICBhbHRLZXksXG4gIHByZXNlcnZlXG4pIHtcbiAgaWYgKGlzRGVmKGhhc2gpKSB7XG4gICAgaWYgKGhhc093bihoYXNoLCBrZXkpKSB7XG4gICAgICByZXNba2V5XSA9IGhhc2hba2V5XTtcbiAgICAgIGlmICghcHJlc2VydmUpIHtcbiAgICAgICAgZGVsZXRlIGhhc2hba2V5XTtcbiAgICAgIH1cbiAgICAgIHJldHVybiB0cnVlXG4gICAgfSBlbHNlIGlmIChoYXNPd24oaGFzaCwgYWx0S2V5KSkge1xuICAgICAgcmVzW2tleV0gPSBoYXNoW2FsdEtleV07XG4gICAgICBpZiAoIXByZXNlcnZlKSB7XG4gICAgICAgIGRlbGV0ZSBoYXNoW2FsdEtleV07XG4gICAgICB9XG4gICAgICByZXR1cm4gdHJ1ZVxuICAgIH1cbiAgfVxuICByZXR1cm4gZmFsc2Vcbn1cblxuLyogICovXG5cbi8vIFRoZSB0ZW1wbGF0ZSBjb21waWxlciBhdHRlbXB0cyB0byBtaW5pbWl6ZSB0aGUgbmVlZCBmb3Igbm9ybWFsaXphdGlvbiBieVxuLy8gc3RhdGljYWxseSBhbmFseXppbmcgdGhlIHRlbXBsYXRlIGF0IGNvbXBpbGUgdGltZS5cbi8vXG4vLyBGb3IgcGxhaW4gSFRNTCBtYXJrdXAsIG5vcm1hbGl6YXRpb24gY2FuIGJlIGNvbXBsZXRlbHkgc2tpcHBlZCBiZWNhdXNlIHRoZVxuLy8gZ2VuZXJhdGVkIHJlbmRlciBmdW5jdGlvbiBpcyBndWFyYW50ZWVkIHRvIHJldHVybiBBcnJheTxWTm9kZT4uIFRoZXJlIGFyZVxuLy8gdHdvIGNhc2VzIHdoZXJlIGV4dHJhIG5vcm1hbGl6YXRpb24gaXMgbmVlZGVkOlxuXG4vLyAxLiBXaGVuIHRoZSBjaGlsZHJlbiBjb250YWlucyBjb21wb25lbnRzIC0gYmVjYXVzZSBhIGZ1bmN0aW9uYWwgY29tcG9uZW50XG4vLyBtYXkgcmV0dXJuIGFuIEFycmF5IGluc3RlYWQgb2YgYSBzaW5nbGUgcm9vdC4gSW4gdGhpcyBjYXNlLCBqdXN0IGEgc2ltcGxlXG4vLyBub3JtYWxpemF0aW9uIGlzIG5lZWRlZCAtIGlmIGFueSBjaGlsZCBpcyBhbiBBcnJheSwgd2UgZmxhdHRlbiB0aGUgd2hvbGVcbi8vIHRoaW5nIHdpdGggQXJyYXkucHJvdG90eXBlLmNvbmNhdC4gSXQgaXMgZ3VhcmFudGVlZCB0byBiZSBvbmx5IDEtbGV2ZWwgZGVlcFxuLy8gYmVjYXVzZSBmdW5jdGlvbmFsIGNvbXBvbmVudHMgYWxyZWFkeSBub3JtYWxpemUgdGhlaXIgb3duIGNoaWxkcmVuLlxuZnVuY3Rpb24gc2ltcGxlTm9ybWFsaXplQ2hpbGRyZW4gKGNoaWxkcmVuKSB7XG4gIGZvciAodmFyIGkgPSAwOyBpIDwgY2hpbGRyZW4ubGVuZ3RoOyBpKyspIHtcbiAgICBpZiAoQXJyYXkuaXNBcnJheShjaGlsZHJlbltpXSkpIHtcbiAgICAgIHJldHVybiBBcnJheS5wcm90b3R5cGUuY29uY2F0LmFwcGx5KFtdLCBjaGlsZHJlbilcbiAgICB9XG4gIH1cbiAgcmV0dXJuIGNoaWxkcmVuXG59XG5cbi8vIDIuIFdoZW4gdGhlIGNoaWxkcmVuIGNvbnRhaW5zIGNvbnN0cnVjdHMgdGhhdCBhbHdheXMgZ2VuZXJhdGVkIG5lc3RlZCBBcnJheXMsXG4vLyBlLmcuIDx0ZW1wbGF0ZT4sIDxzbG90Piwgdi1mb3IsIG9yIHdoZW4gdGhlIGNoaWxkcmVuIGlzIHByb3ZpZGVkIGJ5IHVzZXJcbi8vIHdpdGggaGFuZC13cml0dGVuIHJlbmRlciBmdW5jdGlvbnMgLyBKU1guIEluIHN1Y2ggY2FzZXMgYSBmdWxsIG5vcm1hbGl6YXRpb25cbi8vIGlzIG5lZWRlZCB0byBjYXRlciB0byBhbGwgcG9zc2libGUgdHlwZXMgb2YgY2hpbGRyZW4gdmFsdWVzLlxuZnVuY3Rpb24gbm9ybWFsaXplQ2hpbGRyZW4gKGNoaWxkcmVuKSB7XG4gIHJldHVybiBpc1ByaW1pdGl2ZShjaGlsZHJlbilcbiAgICA/IFtjcmVhdGVUZXh0Vk5vZGUoY2hpbGRyZW4pXVxuICAgIDogQXJyYXkuaXNBcnJheShjaGlsZHJlbilcbiAgICAgID8gbm9ybWFsaXplQXJyYXlDaGlsZHJlbihjaGlsZHJlbilcbiAgICAgIDogdW5kZWZpbmVkXG59XG5cbmZ1bmN0aW9uIGlzVGV4dE5vZGUgKG5vZGUpIHtcbiAgcmV0dXJuIGlzRGVmKG5vZGUpICYmIGlzRGVmKG5vZGUudGV4dCkgJiYgaXNGYWxzZShub2RlLmlzQ29tbWVudClcbn1cblxuZnVuY3Rpb24gbm9ybWFsaXplQXJyYXlDaGlsZHJlbiAoY2hpbGRyZW4sIG5lc3RlZEluZGV4KSB7XG4gIHZhciByZXMgPSBbXTtcbiAgdmFyIGksIGMsIGxhc3RJbmRleCwgbGFzdDtcbiAgZm9yIChpID0gMDsgaSA8IGNoaWxkcmVuLmxlbmd0aDsgaSsrKSB7XG4gICAgYyA9IGNoaWxkcmVuW2ldO1xuICAgIGlmIChpc1VuZGVmKGMpIHx8IHR5cGVvZiBjID09PSAnYm9vbGVhbicpIHsgY29udGludWUgfVxuICAgIGxhc3RJbmRleCA9IHJlcy5sZW5ndGggLSAxO1xuICAgIGxhc3QgPSByZXNbbGFzdEluZGV4XTtcbiAgICAvLyAgbmVzdGVkXG4gICAgaWYgKEFycmF5LmlzQXJyYXkoYykpIHtcbiAgICAgIGlmIChjLmxlbmd0aCA+IDApIHtcbiAgICAgICAgYyA9IG5vcm1hbGl6ZUFycmF5Q2hpbGRyZW4oYywgKChuZXN0ZWRJbmRleCB8fCAnJykgKyBcIl9cIiArIGkpKTtcbiAgICAgICAgLy8gbWVyZ2UgYWRqYWNlbnQgdGV4dCBub2Rlc1xuICAgICAgICBpZiAoaXNUZXh0Tm9kZShjWzBdKSAmJiBpc1RleHROb2RlKGxhc3QpKSB7XG4gICAgICAgICAgcmVzW2xhc3RJbmRleF0gPSBjcmVhdGVUZXh0Vk5vZGUobGFzdC50ZXh0ICsgKGNbMF0pLnRleHQpO1xuICAgICAgICAgIGMuc2hpZnQoKTtcbiAgICAgICAgfVxuICAgICAgICByZXMucHVzaC5hcHBseShyZXMsIGMpO1xuICAgICAgfVxuICAgIH0gZWxzZSBpZiAoaXNQcmltaXRpdmUoYykpIHtcbiAgICAgIGlmIChpc1RleHROb2RlKGxhc3QpKSB7XG4gICAgICAgIC8vIG1lcmdlIGFkamFjZW50IHRleHQgbm9kZXNcbiAgICAgICAgLy8gdGhpcyBpcyBuZWNlc3NhcnkgZm9yIFNTUiBoeWRyYXRpb24gYmVjYXVzZSB0ZXh0IG5vZGVzIGFyZVxuICAgICAgICAvLyBlc3NlbnRpYWxseSBtZXJnZWQgd2hlbiByZW5kZXJlZCB0byBIVE1MIHN0cmluZ3NcbiAgICAgICAgcmVzW2xhc3RJbmRleF0gPSBjcmVhdGVUZXh0Vk5vZGUobGFzdC50ZXh0ICsgYyk7XG4gICAgICB9IGVsc2UgaWYgKGMgIT09ICcnKSB7XG4gICAgICAgIC8vIGNvbnZlcnQgcHJpbWl0aXZlIHRvIHZub2RlXG4gICAgICAgIHJlcy5wdXNoKGNyZWF0ZVRleHRWTm9kZShjKSk7XG4gICAgICB9XG4gICAgfSBlbHNlIHtcbiAgICAgIGlmIChpc1RleHROb2RlKGMpICYmIGlzVGV4dE5vZGUobGFzdCkpIHtcbiAgICAgICAgLy8gbWVyZ2UgYWRqYWNlbnQgdGV4dCBub2Rlc1xuICAgICAgICByZXNbbGFzdEluZGV4XSA9IGNyZWF0ZVRleHRWTm9kZShsYXN0LnRleHQgKyBjLnRleHQpO1xuICAgICAgfSBlbHNlIHtcbiAgICAgICAgLy8gZGVmYXVsdCBrZXkgZm9yIG5lc3RlZCBhcnJheSBjaGlsZHJlbiAobGlrZWx5IGdlbmVyYXRlZCBieSB2LWZvcilcbiAgICAgICAgaWYgKGlzVHJ1ZShjaGlsZHJlbi5faXNWTGlzdCkgJiZcbiAgICAgICAgICBpc0RlZihjLnRhZykgJiZcbiAgICAgICAgICBpc1VuZGVmKGMua2V5KSAmJlxuICAgICAgICAgIGlzRGVmKG5lc3RlZEluZGV4KSkge1xuICAgICAgICAgIGMua2V5ID0gXCJfX3ZsaXN0XCIgKyBuZXN0ZWRJbmRleCArIFwiX1wiICsgaSArIFwiX19cIjtcbiAgICAgICAgfVxuICAgICAgICByZXMucHVzaChjKTtcbiAgICAgIH1cbiAgICB9XG4gIH1cbiAgcmV0dXJuIHJlc1xufVxuXG4vKiAgKi9cblxuZnVuY3Rpb24gaW5pdFByb3ZpZGUgKHZtKSB7XG4gIHZhciBwcm92aWRlID0gdm0uJG9wdGlvbnMucHJvdmlkZTtcbiAgaWYgKHByb3ZpZGUpIHtcbiAgICB2bS5fcHJvdmlkZWQgPSB0eXBlb2YgcHJvdmlkZSA9PT0gJ2Z1bmN0aW9uJ1xuICAgICAgPyBwcm92aWRlLmNhbGwodm0pXG4gICAgICA6IHByb3ZpZGU7XG4gIH1cbn1cblxuZnVuY3Rpb24gaW5pdEluamVjdGlvbnMgKHZtKSB7XG4gIHZhciByZXN1bHQgPSByZXNvbHZlSW5qZWN0KHZtLiRvcHRpb25zLmluamVjdCwgdm0pO1xuICBpZiAocmVzdWx0KSB7XG4gICAgdG9nZ2xlT2JzZXJ2aW5nKGZhbHNlKTtcbiAgICBPYmplY3Qua2V5cyhyZXN1bHQpLmZvckVhY2goZnVuY3Rpb24gKGtleSkge1xuICAgICAgLyogaXN0YW5idWwgaWdub3JlIGVsc2UgKi9cbiAgICAgIGlmIChwcm9jZXNzLmVudi5OT0RFX0VOViAhPT0gJ3Byb2R1Y3Rpb24nKSB7XG4gICAgICAgIGRlZmluZVJlYWN0aXZlJCQxKHZtLCBrZXksIHJlc3VsdFtrZXldLCBmdW5jdGlvbiAoKSB7XG4gICAgICAgICAgd2FybihcbiAgICAgICAgICAgIFwiQXZvaWQgbXV0YXRpbmcgYW4gaW5qZWN0ZWQgdmFsdWUgZGlyZWN0bHkgc2luY2UgdGhlIGNoYW5nZXMgd2lsbCBiZSBcIiArXG4gICAgICAgICAgICBcIm92ZXJ3cml0dGVuIHdoZW5ldmVyIHRoZSBwcm92aWRlZCBjb21wb25lbnQgcmUtcmVuZGVycy4gXCIgK1xuICAgICAgICAgICAgXCJpbmplY3Rpb24gYmVpbmcgbXV0YXRlZDogXFxcIlwiICsga2V5ICsgXCJcXFwiXCIsXG4gICAgICAgICAgICB2bVxuICAgICAgICAgICk7XG4gICAgICAgIH0pO1xuICAgICAgfSBlbHNlIHtcbiAgICAgICAgZGVmaW5lUmVhY3RpdmUkJDEodm0sIGtleSwgcmVzdWx0W2tleV0pO1xuICAgICAgfVxuICAgIH0pO1xuICAgIHRvZ2dsZU9ic2VydmluZyh0cnVlKTtcbiAgfVxufVxuXG5mdW5jdGlvbiByZXNvbHZlSW5qZWN0IChpbmplY3QsIHZtKSB7XG4gIGlmIChpbmplY3QpIHtcbiAgICAvLyBpbmplY3QgaXMgOmFueSBiZWNhdXNlIGZsb3cgaXMgbm90IHNtYXJ0IGVub3VnaCB0byBmaWd1cmUgb3V0IGNhY2hlZFxuICAgIHZhciByZXN1bHQgPSBPYmplY3QuY3JlYXRlKG51bGwpO1xuICAgIHZhciBrZXlzID0gaGFzU3ltYm9sXG4gICAgICA/IFJlZmxlY3Qub3duS2V5cyhpbmplY3QpXG4gICAgICA6IE9iamVjdC5rZXlzKGluamVjdCk7XG5cbiAgICBmb3IgKHZhciBpID0gMDsgaSA8IGtleXMubGVuZ3RoOyBpKyspIHtcbiAgICAgIHZhciBrZXkgPSBrZXlzW2ldO1xuICAgICAgLy8gIzY1NzQgaW4gY2FzZSB0aGUgaW5qZWN0IG9iamVjdCBpcyBvYnNlcnZlZC4uLlxuICAgICAgaWYgKGtleSA9PT0gJ19fb2JfXycpIHsgY29udGludWUgfVxuICAgICAgdmFyIHByb3ZpZGVLZXkgPSBpbmplY3Rba2V5XS5mcm9tO1xuICAgICAgdmFyIHNvdXJjZSA9IHZtO1xuICAgICAgd2hpbGUgKHNvdXJjZSkge1xuICAgICAgICBpZiAoc291cmNlLl9wcm92aWRlZCAmJiBoYXNPd24oc291cmNlLl9wcm92aWRlZCwgcHJvdmlkZUtleSkpIHtcbiAgICAgICAgICByZXN1bHRba2V5XSA9IHNvdXJjZS5fcHJvdmlkZWRbcHJvdmlkZUtleV07XG4gICAgICAgICAgYnJlYWtcbiAgICAgICAgfVxuICAgICAgICBzb3VyY2UgPSBzb3VyY2UuJHBhcmVudDtcbiAgICAgIH1cbiAgICAgIGlmICghc291cmNlKSB7XG4gICAgICAgIGlmICgnZGVmYXVsdCcgaW4gaW5qZWN0W2tleV0pIHtcbiAgICAgICAgICB2YXIgcHJvdmlkZURlZmF1bHQgPSBpbmplY3Rba2V5XS5kZWZhdWx0O1xuICAgICAgICAgIHJlc3VsdFtrZXldID0gdHlwZW9mIHByb3ZpZGVEZWZhdWx0ID09PSAnZnVuY3Rpb24nXG4gICAgICAgICAgICA/IHByb3ZpZGVEZWZhdWx0LmNhbGwodm0pXG4gICAgICAgICAgICA6IHByb3ZpZGVEZWZhdWx0O1xuICAgICAgICB9IGVsc2UgaWYgKHByb2Nlc3MuZW52Lk5PREVfRU5WICE9PSAncHJvZHVjdGlvbicpIHtcbiAgICAgICAgICB3YXJuKChcIkluamVjdGlvbiBcXFwiXCIgKyBrZXkgKyBcIlxcXCIgbm90IGZvdW5kXCIpLCB2bSk7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICB9XG4gICAgcmV0dXJuIHJlc3VsdFxuICB9XG59XG5cbi8qICAqL1xuXG5cblxuLyoqXG4gKiBSdW50aW1lIGhlbHBlciBmb3IgcmVzb2x2aW5nIHJhdyBjaGlsZHJlbiBWTm9kZXMgaW50byBhIHNsb3Qgb2JqZWN0LlxuICovXG5mdW5jdGlvbiByZXNvbHZlU2xvdHMgKFxuICBjaGlsZHJlbixcbiAgY29udGV4dFxuKSB7XG4gIGlmICghY2hpbGRyZW4gfHwgIWNoaWxkcmVuLmxlbmd0aCkge1xuICAgIHJldHVybiB7fVxuICB9XG4gIHZhciBzbG90cyA9IHt9O1xuICBmb3IgKHZhciBpID0gMCwgbCA9IGNoaWxkcmVuLmxlbmd0aDsgaSA8IGw7IGkrKykge1xuICAgIHZhciBjaGlsZCA9IGNoaWxkcmVuW2ldO1xuICAgIHZhciBkYXRhID0gY2hpbGQuZGF0YTtcbiAgICAvLyByZW1vdmUgc2xvdCBhdHRyaWJ1dGUgaWYgdGhlIG5vZGUgaXMgcmVzb2x2ZWQgYXMgYSBWdWUgc2xvdCBub2RlXG4gICAgaWYgKGRhdGEgJiYgZGF0YS5hdHRycyAmJiBkYXRhLmF0dHJzLnNsb3QpIHtcbiAgICAgIGRlbGV0ZSBkYXRhLmF0dHJzLnNsb3Q7XG4gICAgfVxuICAgIC8vIG5hbWVkIHNsb3RzIHNob3VsZCBvbmx5IGJlIHJlc3BlY3RlZCBpZiB0aGUgdm5vZGUgd2FzIHJlbmRlcmVkIGluIHRoZVxuICAgIC8vIHNhbWUgY29udGV4dC5cbiAgICBpZiAoKGNoaWxkLmNvbnRleHQgPT09IGNvbnRleHQgfHwgY2hpbGQuZm5Db250ZXh0ID09PSBjb250ZXh0KSAmJlxuICAgICAgZGF0YSAmJiBkYXRhLnNsb3QgIT0gbnVsbFxuICAgICkge1xuICAgICAgdmFyIG5hbWUgPSBkYXRhLnNsb3Q7XG4gICAgICB2YXIgc2xvdCA9IChzbG90c1tuYW1lXSB8fCAoc2xvdHNbbmFtZV0gPSBbXSkpO1xuICAgICAgaWYgKGNoaWxkLnRhZyA9PT0gJ3RlbXBsYXRlJykge1xuICAgICAgICBzbG90LnB1c2guYXBwbHkoc2xvdCwgY2hpbGQuY2hpbGRyZW4gfHwgW10pO1xuICAgICAgfSBlbHNlIHtcbiAgICAgICAgc2xvdC5wdXNoKGNoaWxkKTtcbiAgICAgIH1cbiAgICB9IGVsc2Uge1xuICAgICAgLy8gZml4ZWQgYnkgeHh4eHh4IOS4tOaXtiBoYWNrIOaOiSB1bmktYXBwIOS4reeahOW8guatpSBuYW1lIHNsb3QgcGFnZVxuICAgICAgaWYoY2hpbGQuYXN5bmNNZXRhICYmIGNoaWxkLmFzeW5jTWV0YS5kYXRhICYmIGNoaWxkLmFzeW5jTWV0YS5kYXRhLnNsb3QgPT09ICdwYWdlJyl7XG4gICAgICAgIChzbG90c1sncGFnZSddIHx8IChzbG90c1sncGFnZSddID0gW10pKS5wdXNoKGNoaWxkKTtcbiAgICAgIH1lbHNle1xuICAgICAgICAoc2xvdHMuZGVmYXVsdCB8fCAoc2xvdHMuZGVmYXVsdCA9IFtdKSkucHVzaChjaGlsZCk7XG4gICAgICB9XG4gICAgfVxuICB9XG4gIC8vIGlnbm9yZSBzbG90cyB0aGF0IGNvbnRhaW5zIG9ubHkgd2hpdGVzcGFjZVxuICBmb3IgKHZhciBuYW1lJDEgaW4gc2xvdHMpIHtcbiAgICBpZiAoc2xvdHNbbmFtZSQxXS5ldmVyeShpc1doaXRlc3BhY2UpKSB7XG4gICAgICBkZWxldGUgc2xvdHNbbmFtZSQxXTtcbiAgICB9XG4gIH1cbiAgcmV0dXJuIHNsb3RzXG59XG5cbmZ1bmN0aW9uIGlzV2hpdGVzcGFjZSAobm9kZSkge1xuICByZXR1cm4gKG5vZGUuaXNDb21tZW50ICYmICFub2RlLmFzeW5jRmFjdG9yeSkgfHwgbm9kZS50ZXh0ID09PSAnICdcbn1cblxuLyogICovXG5cbmZ1bmN0aW9uIG5vcm1hbGl6ZVNjb3BlZFNsb3RzIChcbiAgc2xvdHMsXG4gIG5vcm1hbFNsb3RzLFxuICBwcmV2U2xvdHNcbikge1xuICB2YXIgcmVzO1xuICB2YXIgaGFzTm9ybWFsU2xvdHMgPSBPYmplY3Qua2V5cyhub3JtYWxTbG90cykubGVuZ3RoID4gMDtcbiAgdmFyIGlzU3RhYmxlID0gc2xvdHMgPyAhIXNsb3RzLiRzdGFibGUgOiAhaGFzTm9ybWFsU2xvdHM7XG4gIHZhciBrZXkgPSBzbG90cyAmJiBzbG90cy4ka2V5O1xuICBpZiAoIXNsb3RzKSB7XG4gICAgcmVzID0ge307XG4gIH0gZWxzZSBpZiAoc2xvdHMuX25vcm1hbGl6ZWQpIHtcbiAgICAvLyBmYXN0IHBhdGggMTogY2hpbGQgY29tcG9uZW50IHJlLXJlbmRlciBvbmx5LCBwYXJlbnQgZGlkIG5vdCBjaGFuZ2VcbiAgICByZXR1cm4gc2xvdHMuX25vcm1hbGl6ZWRcbiAgfSBlbHNlIGlmIChcbiAgICBpc1N0YWJsZSAmJlxuICAgIHByZXZTbG90cyAmJlxuICAgIHByZXZTbG90cyAhPT0gZW1wdHlPYmplY3QgJiZcbiAgICBrZXkgPT09IHByZXZTbG90cy4ka2V5ICYmXG4gICAgIWhhc05vcm1hbFNsb3RzICYmXG4gICAgIXByZXZTbG90cy4kaGFzTm9ybWFsXG4gICkge1xuICAgIC8vIGZhc3QgcGF0aCAyOiBzdGFibGUgc2NvcGVkIHNsb3RzIHcvIG5vIG5vcm1hbCBzbG90cyB0byBwcm94eSxcbiAgICAvLyBvbmx5IG5lZWQgdG8gbm9ybWFsaXplIG9uY2VcbiAgICByZXR1cm4gcHJldlNsb3RzXG4gIH0gZWxzZSB7XG4gICAgcmVzID0ge307XG4gICAgZm9yICh2YXIga2V5JDEgaW4gc2xvdHMpIHtcbiAgICAgIGlmIChzbG90c1trZXkkMV0gJiYga2V5JDFbMF0gIT09ICckJykge1xuICAgICAgICByZXNba2V5JDFdID0gbm9ybWFsaXplU2NvcGVkU2xvdChub3JtYWxTbG90cywga2V5JDEsIHNsb3RzW2tleSQxXSk7XG4gICAgICB9XG4gICAgfVxuICB9XG4gIC8vIGV4cG9zZSBub3JtYWwgc2xvdHMgb24gc2NvcGVkU2xvdHNcbiAgZm9yICh2YXIga2V5JDIgaW4gbm9ybWFsU2xvdHMpIHtcbiAgICBpZiAoIShrZXkkMiBpbiByZXMpKSB7XG4gICAgICByZXNba2V5JDJdID0gcHJveHlOb3JtYWxTbG90KG5vcm1hbFNsb3RzLCBrZXkkMik7XG4gICAgfVxuICB9XG4gIC8vIGF2b3JpYXogc2VlbXMgdG8gbW9jayBhIG5vbi1leHRlbnNpYmxlICRzY29wZWRTbG90cyBvYmplY3RcbiAgLy8gYW5kIHdoZW4gdGhhdCBpcyBwYXNzZWQgZG93biB0aGlzIHdvdWxkIGNhdXNlIGFuIGVycm9yXG4gIGlmIChzbG90cyAmJiBPYmplY3QuaXNFeHRlbnNpYmxlKHNsb3RzKSkge1xuICAgIChzbG90cykuX25vcm1hbGl6ZWQgPSByZXM7XG4gIH1cbiAgZGVmKHJlcywgJyRzdGFibGUnLCBpc1N0YWJsZSk7XG4gIGRlZihyZXMsICcka2V5Jywga2V5KTtcbiAgZGVmKHJlcywgJyRoYXNOb3JtYWwnLCBoYXNOb3JtYWxTbG90cyk7XG4gIHJldHVybiByZXNcbn1cblxuZnVuY3Rpb24gbm9ybWFsaXplU2NvcGVkU2xvdChub3JtYWxTbG90cywga2V5LCBmbikge1xuICB2YXIgbm9ybWFsaXplZCA9IGZ1bmN0aW9uICgpIHtcbiAgICB2YXIgcmVzID0gYXJndW1lbnRzLmxlbmd0aCA/IGZuLmFwcGx5KG51bGwsIGFyZ3VtZW50cykgOiBmbih7fSk7XG4gICAgcmVzID0gcmVzICYmIHR5cGVvZiByZXMgPT09ICdvYmplY3QnICYmICFBcnJheS5pc0FycmF5KHJlcylcbiAgICAgID8gW3Jlc10gLy8gc2luZ2xlIHZub2RlXG4gICAgICA6IG5vcm1hbGl6ZUNoaWxkcmVuKHJlcyk7XG4gICAgcmV0dXJuIHJlcyAmJiAoXG4gICAgICByZXMubGVuZ3RoID09PSAwIHx8XG4gICAgICAocmVzLmxlbmd0aCA9PT0gMSAmJiByZXNbMF0uaXNDb21tZW50KSAvLyAjOTY1OFxuICAgICkgPyB1bmRlZmluZWRcbiAgICAgIDogcmVzXG4gIH07XG4gIC8vIHRoaXMgaXMgYSBzbG90IHVzaW5nIHRoZSBuZXcgdi1zbG90IHN5bnRheCB3aXRob3V0IHNjb3BlLiBhbHRob3VnaCBpdCBpc1xuICAvLyBjb21waWxlZCBhcyBhIHNjb3BlZCBzbG90LCByZW5kZXIgZm4gdXNlcnMgd291bGQgZXhwZWN0IGl0IHRvIGJlIHByZXNlbnRcbiAgLy8gb24gdGhpcy4kc2xvdHMgYmVjYXVzZSB0aGUgdXNhZ2UgaXMgc2VtYW50aWNhbGx5IGEgbm9ybWFsIHNsb3QuXG4gIGlmIChmbi5wcm94eSkge1xuICAgIE9iamVjdC5kZWZpbmVQcm9wZXJ0eShub3JtYWxTbG90cywga2V5LCB7XG4gICAgICBnZXQ6IG5vcm1hbGl6ZWQsXG4gICAgICBlbnVtZXJhYmxlOiB0cnVlLFxuICAgICAgY29uZmlndXJhYmxlOiB0cnVlXG4gICAgfSk7XG4gIH1cbiAgcmV0dXJuIG5vcm1hbGl6ZWRcbn1cblxuZnVuY3Rpb24gcHJveHlOb3JtYWxTbG90KHNsb3RzLCBrZXkpIHtcbiAgcmV0dXJuIGZ1bmN0aW9uICgpIHsgcmV0dXJuIHNsb3RzW2tleV07IH1cbn1cblxuLyogICovXG5cbi8qKlxuICogUnVudGltZSBoZWxwZXIgZm9yIHJlbmRlcmluZyB2LWZvciBsaXN0cy5cbiAqL1xuZnVuY3Rpb24gcmVuZGVyTGlzdCAoXG4gIHZhbCxcbiAgcmVuZGVyXG4pIHtcbiAgdmFyIHJldCwgaSwgbCwga2V5cywga2V5O1xuICBpZiAoQXJyYXkuaXNBcnJheSh2YWwpIHx8IHR5cGVvZiB2YWwgPT09ICdzdHJpbmcnKSB7XG4gICAgcmV0ID0gbmV3IEFycmF5KHZhbC5sZW5ndGgpO1xuICAgIGZvciAoaSA9IDAsIGwgPSB2YWwubGVuZ3RoOyBpIDwgbDsgaSsrKSB7XG4gICAgICByZXRbaV0gPSByZW5kZXIodmFsW2ldLCBpLCBpLCBpKTsgLy8gZml4ZWQgYnkgeHh4eHh4XG4gICAgfVxuICB9IGVsc2UgaWYgKHR5cGVvZiB2YWwgPT09ICdudW1iZXInKSB7XG4gICAgcmV0ID0gbmV3IEFycmF5KHZhbCk7XG4gICAgZm9yIChpID0gMDsgaSA8IHZhbDsgaSsrKSB7XG4gICAgICByZXRbaV0gPSByZW5kZXIoaSArIDEsIGksIGksIGkpOyAvLyBmaXhlZCBieSB4eHh4eHhcbiAgICB9XG4gIH0gZWxzZSBpZiAoaXNPYmplY3QodmFsKSkge1xuICAgIGlmIChoYXNTeW1ib2wgJiYgdmFsW1N5bWJvbC5pdGVyYXRvcl0pIHtcbiAgICAgIHJldCA9IFtdO1xuICAgICAgdmFyIGl0ZXJhdG9yID0gdmFsW1N5bWJvbC5pdGVyYXRvcl0oKTtcbiAgICAgIHZhciByZXN1bHQgPSBpdGVyYXRvci5uZXh0KCk7XG4gICAgICB3aGlsZSAoIXJlc3VsdC5kb25lKSB7XG4gICAgICAgIHJldC5wdXNoKHJlbmRlcihyZXN1bHQudmFsdWUsIHJldC5sZW5ndGgsIGksIGkrKykpOyAvLyBmaXhlZCBieSB4eHh4eHhcbiAgICAgICAgcmVzdWx0ID0gaXRlcmF0b3IubmV4dCgpO1xuICAgICAgfVxuICAgIH0gZWxzZSB7XG4gICAgICBrZXlzID0gT2JqZWN0LmtleXModmFsKTtcbiAgICAgIHJldCA9IG5ldyBBcnJheShrZXlzLmxlbmd0aCk7XG4gICAgICBmb3IgKGkgPSAwLCBsID0ga2V5cy5sZW5ndGg7IGkgPCBsOyBpKyspIHtcbiAgICAgICAga2V5ID0ga2V5c1tpXTtcbiAgICAgICAgcmV0W2ldID0gcmVuZGVyKHZhbFtrZXldLCBrZXksIGksIGkpOyAvLyBmaXhlZCBieSB4eHh4eHhcbiAgICAgIH1cbiAgICB9XG4gIH1cbiAgaWYgKCFpc0RlZihyZXQpKSB7XG4gICAgcmV0ID0gW107XG4gIH1cbiAgKHJldCkuX2lzVkxpc3QgPSB0cnVlO1xuICByZXR1cm4gcmV0XG59XG5cbi8qICAqL1xuXG4vKipcbiAqIFJ1bnRpbWUgaGVscGVyIGZvciByZW5kZXJpbmcgPHNsb3Q+XG4gKi9cbmZ1bmN0aW9uIHJlbmRlclNsb3QgKFxuICBuYW1lLFxuICBmYWxsYmFjayxcbiAgcHJvcHMsXG4gIGJpbmRPYmplY3Rcbikge1xuICB2YXIgc2NvcGVkU2xvdEZuID0gdGhpcy4kc2NvcGVkU2xvdHNbbmFtZV07XG4gIHZhciBub2RlcztcbiAgaWYgKHNjb3BlZFNsb3RGbikgeyAvLyBzY29wZWQgc2xvdFxuICAgIHByb3BzID0gcHJvcHMgfHwge307XG4gICAgaWYgKGJpbmRPYmplY3QpIHtcbiAgICAgIGlmIChwcm9jZXNzLmVudi5OT0RFX0VOViAhPT0gJ3Byb2R1Y3Rpb24nICYmICFpc09iamVjdChiaW5kT2JqZWN0KSkge1xuICAgICAgICB3YXJuKFxuICAgICAgICAgICdzbG90IHYtYmluZCB3aXRob3V0IGFyZ3VtZW50IGV4cGVjdHMgYW4gT2JqZWN0JyxcbiAgICAgICAgICB0aGlzXG4gICAgICAgICk7XG4gICAgICB9XG4gICAgICBwcm9wcyA9IGV4dGVuZChleHRlbmQoe30sIGJpbmRPYmplY3QpLCBwcm9wcyk7XG4gICAgfVxuICAgIC8vIGZpeGVkIGJ5IHh4eHh4eCBhcHAtcGx1cyBzY29wZWRTbG90XG4gICAgbm9kZXMgPSBzY29wZWRTbG90Rm4ocHJvcHMsIHRoaXMsIHByb3BzLl9pKSB8fCBmYWxsYmFjaztcbiAgfSBlbHNlIHtcbiAgICBub2RlcyA9IHRoaXMuJHNsb3RzW25hbWVdIHx8IGZhbGxiYWNrO1xuICB9XG5cbiAgdmFyIHRhcmdldCA9IHByb3BzICYmIHByb3BzLnNsb3Q7XG4gIGlmICh0YXJnZXQpIHtcbiAgICByZXR1cm4gdGhpcy4kY3JlYXRlRWxlbWVudCgndGVtcGxhdGUnLCB7IHNsb3Q6IHRhcmdldCB9LCBub2RlcylcbiAgfSBlbHNlIHtcbiAgICByZXR1cm4gbm9kZXNcbiAgfVxufVxuXG4vKiAgKi9cblxuLyoqXG4gKiBSdW50aW1lIGhlbHBlciBmb3IgcmVzb2x2aW5nIGZpbHRlcnNcbiAqL1xuZnVuY3Rpb24gcmVzb2x2ZUZpbHRlciAoaWQpIHtcbiAgcmV0dXJuIHJlc29sdmVBc3NldCh0aGlzLiRvcHRpb25zLCAnZmlsdGVycycsIGlkLCB0cnVlKSB8fCBpZGVudGl0eVxufVxuXG4vKiAgKi9cblxuZnVuY3Rpb24gaXNLZXlOb3RNYXRjaCAoZXhwZWN0LCBhY3R1YWwpIHtcbiAgaWYgKEFycmF5LmlzQXJyYXkoZXhwZWN0KSkge1xuICAgIHJldHVybiBleHBlY3QuaW5kZXhPZihhY3R1YWwpID09PSAtMVxuICB9IGVsc2Uge1xuICAgIHJldHVybiBleHBlY3QgIT09IGFjdHVhbFxuICB9XG59XG5cbi8qKlxuICogUnVudGltZSBoZWxwZXIgZm9yIGNoZWNraW5nIGtleUNvZGVzIGZyb20gY29uZmlnLlxuICogZXhwb3NlZCBhcyBWdWUucHJvdG90eXBlLl9rXG4gKiBwYXNzaW5nIGluIGV2ZW50S2V5TmFtZSBhcyBsYXN0IGFyZ3VtZW50IHNlcGFyYXRlbHkgZm9yIGJhY2t3YXJkcyBjb21wYXRcbiAqL1xuZnVuY3Rpb24gY2hlY2tLZXlDb2RlcyAoXG4gIGV2ZW50S2V5Q29kZSxcbiAga2V5LFxuICBidWlsdEluS2V5Q29kZSxcbiAgZXZlbnRLZXlOYW1lLFxuICBidWlsdEluS2V5TmFtZVxuKSB7XG4gIHZhciBtYXBwZWRLZXlDb2RlID0gY29uZmlnLmtleUNvZGVzW2tleV0gfHwgYnVpbHRJbktleUNvZGU7XG4gIGlmIChidWlsdEluS2V5TmFtZSAmJiBldmVudEtleU5hbWUgJiYgIWNvbmZpZy5rZXlDb2Rlc1trZXldKSB7XG4gICAgcmV0dXJuIGlzS2V5Tm90TWF0Y2goYnVpbHRJbktleU5hbWUsIGV2ZW50S2V5TmFtZSlcbiAgfSBlbHNlIGlmIChtYXBwZWRLZXlDb2RlKSB7XG4gICAgcmV0dXJuIGlzS2V5Tm90TWF0Y2gobWFwcGVkS2V5Q29kZSwgZXZlbnRLZXlDb2RlKVxuICB9IGVsc2UgaWYgKGV2ZW50S2V5TmFtZSkge1xuICAgIHJldHVybiBoeXBoZW5hdGUoZXZlbnRLZXlOYW1lKSAhPT0ga2V5XG4gIH1cbn1cblxuLyogICovXG5cbi8qKlxuICogUnVudGltZSBoZWxwZXIgZm9yIG1lcmdpbmcgdi1iaW5kPVwib2JqZWN0XCIgaW50byBhIFZOb2RlJ3MgZGF0YS5cbiAqL1xuZnVuY3Rpb24gYmluZE9iamVjdFByb3BzIChcbiAgZGF0YSxcbiAgdGFnLFxuICB2YWx1ZSxcbiAgYXNQcm9wLFxuICBpc1N5bmNcbikge1xuICBpZiAodmFsdWUpIHtcbiAgICBpZiAoIWlzT2JqZWN0KHZhbHVlKSkge1xuICAgICAgcHJvY2Vzcy5lbnYuTk9ERV9FTlYgIT09ICdwcm9kdWN0aW9uJyAmJiB3YXJuKFxuICAgICAgICAndi1iaW5kIHdpdGhvdXQgYXJndW1lbnQgZXhwZWN0cyBhbiBPYmplY3Qgb3IgQXJyYXkgdmFsdWUnLFxuICAgICAgICB0aGlzXG4gICAgICApO1xuICAgIH0gZWxzZSB7XG4gICAgICBpZiAoQXJyYXkuaXNBcnJheSh2YWx1ZSkpIHtcbiAgICAgICAgdmFsdWUgPSB0b09iamVjdCh2YWx1ZSk7XG4gICAgICB9XG4gICAgICB2YXIgaGFzaDtcbiAgICAgIHZhciBsb29wID0gZnVuY3Rpb24gKCBrZXkgKSB7XG4gICAgICAgIGlmIChcbiAgICAgICAgICBrZXkgPT09ICdjbGFzcycgfHxcbiAgICAgICAgICBrZXkgPT09ICdzdHlsZScgfHxcbiAgICAgICAgICBpc1Jlc2VydmVkQXR0cmlidXRlKGtleSlcbiAgICAgICAgKSB7XG4gICAgICAgICAgaGFzaCA9IGRhdGE7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgdmFyIHR5cGUgPSBkYXRhLmF0dHJzICYmIGRhdGEuYXR0cnMudHlwZTtcbiAgICAgICAgICBoYXNoID0gYXNQcm9wIHx8IGNvbmZpZy5tdXN0VXNlUHJvcCh0YWcsIHR5cGUsIGtleSlcbiAgICAgICAgICAgID8gZGF0YS5kb21Qcm9wcyB8fCAoZGF0YS5kb21Qcm9wcyA9IHt9KVxuICAgICAgICAgICAgOiBkYXRhLmF0dHJzIHx8IChkYXRhLmF0dHJzID0ge30pO1xuICAgICAgICB9XG4gICAgICAgIHZhciBjYW1lbGl6ZWRLZXkgPSBjYW1lbGl6ZShrZXkpO1xuICAgICAgICB2YXIgaHlwaGVuYXRlZEtleSA9IGh5cGhlbmF0ZShrZXkpO1xuICAgICAgICBpZiAoIShjYW1lbGl6ZWRLZXkgaW4gaGFzaCkgJiYgIShoeXBoZW5hdGVkS2V5IGluIGhhc2gpKSB7XG4gICAgICAgICAgaGFzaFtrZXldID0gdmFsdWVba2V5XTtcblxuICAgICAgICAgIGlmIChpc1N5bmMpIHtcbiAgICAgICAgICAgIHZhciBvbiA9IGRhdGEub24gfHwgKGRhdGEub24gPSB7fSk7XG4gICAgICAgICAgICBvblsoXCJ1cGRhdGU6XCIgKyBrZXkpXSA9IGZ1bmN0aW9uICgkZXZlbnQpIHtcbiAgICAgICAgICAgICAgdmFsdWVba2V5XSA9ICRldmVudDtcbiAgICAgICAgICAgIH07XG4gICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICB9O1xuXG4gICAgICBmb3IgKHZhciBrZXkgaW4gdmFsdWUpIGxvb3AoIGtleSApO1xuICAgIH1cbiAgfVxuICByZXR1cm4gZGF0YVxufVxuXG4vKiAgKi9cblxuLyoqXG4gKiBSdW50aW1lIGhlbHBlciBmb3IgcmVuZGVyaW5nIHN0YXRpYyB0cmVlcy5cbiAqL1xuZnVuY3Rpb24gcmVuZGVyU3RhdGljIChcbiAgaW5kZXgsXG4gIGlzSW5Gb3Jcbikge1xuICB2YXIgY2FjaGVkID0gdGhpcy5fc3RhdGljVHJlZXMgfHwgKHRoaXMuX3N0YXRpY1RyZWVzID0gW10pO1xuICB2YXIgdHJlZSA9IGNhY2hlZFtpbmRleF07XG4gIC8vIGlmIGhhcyBhbHJlYWR5LXJlbmRlcmVkIHN0YXRpYyB0cmVlIGFuZCBub3QgaW5zaWRlIHYtZm9yLFxuICAvLyB3ZSBjYW4gcmV1c2UgdGhlIHNhbWUgdHJlZS5cbiAgaWYgKHRyZWUgJiYgIWlzSW5Gb3IpIHtcbiAgICByZXR1cm4gdHJlZVxuICB9XG4gIC8vIG90aGVyd2lzZSwgcmVuZGVyIGEgZnJlc2ggdHJlZS5cbiAgdHJlZSA9IGNhY2hlZFtpbmRleF0gPSB0aGlzLiRvcHRpb25zLnN0YXRpY1JlbmRlckZuc1tpbmRleF0uY2FsbChcbiAgICB0aGlzLl9yZW5kZXJQcm94eSxcbiAgICBudWxsLFxuICAgIHRoaXMgLy8gZm9yIHJlbmRlciBmbnMgZ2VuZXJhdGVkIGZvciBmdW5jdGlvbmFsIGNvbXBvbmVudCB0ZW1wbGF0ZXNcbiAgKTtcbiAgbWFya1N0YXRpYyh0cmVlLCAoXCJfX3N0YXRpY19fXCIgKyBpbmRleCksIGZhbHNlKTtcbiAgcmV0dXJuIHRyZWVcbn1cblxuLyoqXG4gKiBSdW50aW1lIGhlbHBlciBmb3Igdi1vbmNlLlxuICogRWZmZWN0aXZlbHkgaXQgbWVhbnMgbWFya2luZyB0aGUgbm9kZSBhcyBzdGF0aWMgd2l0aCBhIHVuaXF1ZSBrZXkuXG4gKi9cbmZ1bmN0aW9uIG1hcmtPbmNlIChcbiAgdHJlZSxcbiAgaW5kZXgsXG4gIGtleVxuKSB7XG4gIG1hcmtTdGF0aWModHJlZSwgKFwiX19vbmNlX19cIiArIGluZGV4ICsgKGtleSA/IChcIl9cIiArIGtleSkgOiBcIlwiKSksIHRydWUpO1xuICByZXR1cm4gdHJlZVxufVxuXG5mdW5jdGlvbiBtYXJrU3RhdGljIChcbiAgdHJlZSxcbiAga2V5LFxuICBpc09uY2Vcbikge1xuICBpZiAoQXJyYXkuaXNBcnJheSh0cmVlKSkge1xuICAgIGZvciAodmFyIGkgPSAwOyBpIDwgdHJlZS5sZW5ndGg7IGkrKykge1xuICAgICAgaWYgKHRyZWVbaV0gJiYgdHlwZW9mIHRyZWVbaV0gIT09ICdzdHJpbmcnKSB7XG4gICAgICAgIG1hcmtTdGF0aWNOb2RlKHRyZWVbaV0sIChrZXkgKyBcIl9cIiArIGkpLCBpc09uY2UpO1xuICAgICAgfVxuICAgIH1cbiAgfSBlbHNlIHtcbiAgICBtYXJrU3RhdGljTm9kZSh0cmVlLCBrZXksIGlzT25jZSk7XG4gIH1cbn1cblxuZnVuY3Rpb24gbWFya1N0YXRpY05vZGUgKG5vZGUsIGtleSwgaXNPbmNlKSB7XG4gIG5vZGUuaXNTdGF0aWMgPSB0cnVlO1xuICBub2RlLmtleSA9IGtleTtcbiAgbm9kZS5pc09uY2UgPSBpc09uY2U7XG59XG5cbi8qICAqL1xuXG5mdW5jdGlvbiBiaW5kT2JqZWN0TGlzdGVuZXJzIChkYXRhLCB2YWx1ZSkge1xuICBpZiAodmFsdWUpIHtcbiAgICBpZiAoIWlzUGxhaW5PYmplY3QodmFsdWUpKSB7XG4gICAgICBwcm9jZXNzLmVudi5OT0RFX0VOViAhPT0gJ3Byb2R1Y3Rpb24nICYmIHdhcm4oXG4gICAgICAgICd2LW9uIHdpdGhvdXQgYXJndW1lbnQgZXhwZWN0cyBhbiBPYmplY3QgdmFsdWUnLFxuICAgICAgICB0aGlzXG4gICAgICApO1xuICAgIH0gZWxzZSB7XG4gICAgICB2YXIgb24gPSBkYXRhLm9uID0gZGF0YS5vbiA/IGV4dGVuZCh7fSwgZGF0YS5vbikgOiB7fTtcbiAgICAgIGZvciAodmFyIGtleSBpbiB2YWx1ZSkge1xuICAgICAgICB2YXIgZXhpc3RpbmcgPSBvbltrZXldO1xuICAgICAgICB2YXIgb3VycyA9IHZhbHVlW2tleV07XG4gICAgICAgIG9uW2tleV0gPSBleGlzdGluZyA/IFtdLmNvbmNhdChleGlzdGluZywgb3VycykgOiBvdXJzO1xuICAgICAgfVxuICAgIH1cbiAgfVxuICByZXR1cm4gZGF0YVxufVxuXG4vKiAgKi9cblxuZnVuY3Rpb24gcmVzb2x2ZVNjb3BlZFNsb3RzIChcbiAgZm5zLCAvLyBzZWUgZmxvdy92bm9kZVxuICByZXMsXG4gIC8vIHRoZSBmb2xsb3dpbmcgYXJlIGFkZGVkIGluIDIuNlxuICBoYXNEeW5hbWljS2V5cyxcbiAgY29udGVudEhhc2hLZXlcbikge1xuICByZXMgPSByZXMgfHwgeyAkc3RhYmxlOiAhaGFzRHluYW1pY0tleXMgfTtcbiAgZm9yICh2YXIgaSA9IDA7IGkgPCBmbnMubGVuZ3RoOyBpKyspIHtcbiAgICB2YXIgc2xvdCA9IGZuc1tpXTtcbiAgICBpZiAoQXJyYXkuaXNBcnJheShzbG90KSkge1xuICAgICAgcmVzb2x2ZVNjb3BlZFNsb3RzKHNsb3QsIHJlcywgaGFzRHluYW1pY0tleXMpO1xuICAgIH0gZWxzZSBpZiAoc2xvdCkge1xuICAgICAgLy8gbWFya2VyIGZvciByZXZlcnNlIHByb3h5aW5nIHYtc2xvdCB3aXRob3V0IHNjb3BlIG9uIHRoaXMuJHNsb3RzXG4gICAgICBpZiAoc2xvdC5wcm94eSkge1xuICAgICAgICBzbG90LmZuLnByb3h5ID0gdHJ1ZTtcbiAgICAgIH1cbiAgICAgIHJlc1tzbG90LmtleV0gPSBzbG90LmZuO1xuICAgIH1cbiAgfVxuICBpZiAoY29udGVudEhhc2hLZXkpIHtcbiAgICAocmVzKS4ka2V5ID0gY29udGVudEhhc2hLZXk7XG4gIH1cbiAgcmV0dXJuIHJlc1xufVxuXG4vKiAgKi9cblxuZnVuY3Rpb24gYmluZER5bmFtaWNLZXlzIChiYXNlT2JqLCB2YWx1ZXMpIHtcbiAgZm9yICh2YXIgaSA9IDA7IGkgPCB2YWx1ZXMubGVuZ3RoOyBpICs9IDIpIHtcbiAgICB2YXIga2V5ID0gdmFsdWVzW2ldO1xuICAgIGlmICh0eXBlb2Yga2V5ID09PSAnc3RyaW5nJyAmJiBrZXkpIHtcbiAgICAgIGJhc2VPYmpbdmFsdWVzW2ldXSA9IHZhbHVlc1tpICsgMV07XG4gICAgfSBlbHNlIGlmIChwcm9jZXNzLmVudi5OT0RFX0VOViAhPT0gJ3Byb2R1Y3Rpb24nICYmIGtleSAhPT0gJycgJiYga2V5ICE9PSBudWxsKSB7XG4gICAgICAvLyBudWxsIGlzIGEgc3BlY2lhbCB2YWx1ZSBmb3IgZXhwbGljaXRseSByZW1vdmluZyBhIGJpbmRpbmdcbiAgICAgIHdhcm4oXG4gICAgICAgIChcIkludmFsaWQgdmFsdWUgZm9yIGR5bmFtaWMgZGlyZWN0aXZlIGFyZ3VtZW50IChleHBlY3RlZCBzdHJpbmcgb3IgbnVsbCk6IFwiICsga2V5KSxcbiAgICAgICAgdGhpc1xuICAgICAgKTtcbiAgICB9XG4gIH1cbiAgcmV0dXJuIGJhc2VPYmpcbn1cblxuLy8gaGVscGVyIHRvIGR5bmFtaWNhbGx5IGFwcGVuZCBtb2RpZmllciBydW50aW1lIG1hcmtlcnMgdG8gZXZlbnQgbmFtZXMuXG4vLyBlbnN1cmUgb25seSBhcHBlbmQgd2hlbiB2YWx1ZSBpcyBhbHJlYWR5IHN0cmluZywgb3RoZXJ3aXNlIGl0IHdpbGwgYmUgY2FzdFxuLy8gdG8gc3RyaW5nIGFuZCBjYXVzZSB0aGUgdHlwZSBjaGVjayB0byBtaXNzLlxuZnVuY3Rpb24gcHJlcGVuZE1vZGlmaWVyICh2YWx1ZSwgc3ltYm9sKSB7XG4gIHJldHVybiB0eXBlb2YgdmFsdWUgPT09ICdzdHJpbmcnID8gc3ltYm9sICsgdmFsdWUgOiB2YWx1ZVxufVxuXG4vKiAgKi9cblxuZnVuY3Rpb24gaW5zdGFsbFJlbmRlckhlbHBlcnMgKHRhcmdldCkge1xuICB0YXJnZXQuX28gPSBtYXJrT25jZTtcbiAgdGFyZ2V0Ll9uID0gdG9OdW1iZXI7XG4gIHRhcmdldC5fcyA9IHRvU3RyaW5nO1xuICB0YXJnZXQuX2wgPSByZW5kZXJMaXN0O1xuICB0YXJnZXQuX3QgPSByZW5kZXJTbG90O1xuICB0YXJnZXQuX3EgPSBsb29zZUVxdWFsO1xuICB0YXJnZXQuX2kgPSBsb29zZUluZGV4T2Y7XG4gIHRhcmdldC5fbSA9IHJlbmRlclN0YXRpYztcbiAgdGFyZ2V0Ll9mID0gcmVzb2x2ZUZpbHRlcjtcbiAgdGFyZ2V0Ll9rID0gY2hlY2tLZXlDb2RlcztcbiAgdGFyZ2V0Ll9iID0gYmluZE9iamVjdFByb3BzO1xuICB0YXJnZXQuX3YgPSBjcmVhdGVUZXh0Vk5vZGU7XG4gIHRhcmdldC5fZSA9IGNyZWF0ZUVtcHR5Vk5vZGU7XG4gIHRhcmdldC5fdSA9IHJlc29sdmVTY29wZWRTbG90cztcbiAgdGFyZ2V0Ll9nID0gYmluZE9iamVjdExpc3RlbmVycztcbiAgdGFyZ2V0Ll9kID0gYmluZER5bmFtaWNLZXlzO1xuICB0YXJnZXQuX3AgPSBwcmVwZW5kTW9kaWZpZXI7XG59XG5cbi8qICAqL1xuXG5mdW5jdGlvbiBGdW5jdGlvbmFsUmVuZGVyQ29udGV4dCAoXG4gIGRhdGEsXG4gIHByb3BzLFxuICBjaGlsZHJlbixcbiAgcGFyZW50LFxuICBDdG9yXG4pIHtcbiAgdmFyIHRoaXMkMSA9IHRoaXM7XG5cbiAgdmFyIG9wdGlvbnMgPSBDdG9yLm9wdGlvbnM7XG4gIC8vIGVuc3VyZSB0aGUgY3JlYXRlRWxlbWVudCBmdW5jdGlvbiBpbiBmdW5jdGlvbmFsIGNvbXBvbmVudHNcbiAgLy8gZ2V0cyBhIHVuaXF1ZSBjb250ZXh0IC0gdGhpcyBpcyBuZWNlc3NhcnkgZm9yIGNvcnJlY3QgbmFtZWQgc2xvdCBjaGVja1xuICB2YXIgY29udGV4dFZtO1xuICBpZiAoaGFzT3duKHBhcmVudCwgJ191aWQnKSkge1xuICAgIGNvbnRleHRWbSA9IE9iamVjdC5jcmVhdGUocGFyZW50KTtcbiAgICAvLyAkZmxvdy1kaXNhYmxlLWxpbmVcbiAgICBjb250ZXh0Vm0uX29yaWdpbmFsID0gcGFyZW50O1xuICB9IGVsc2Uge1xuICAgIC8vIHRoZSBjb250ZXh0IHZtIHBhc3NlZCBpbiBpcyBhIGZ1bmN0aW9uYWwgY29udGV4dCBhcyB3ZWxsLlxuICAgIC8vIGluIHRoaXMgY2FzZSB3ZSB3YW50IHRvIG1ha2Ugc3VyZSB3ZSBhcmUgYWJsZSB0byBnZXQgYSBob2xkIHRvIHRoZVxuICAgIC8vIHJlYWwgY29udGV4dCBpbnN0YW5jZS5cbiAgICBjb250ZXh0Vm0gPSBwYXJlbnQ7XG4gICAgLy8gJGZsb3ctZGlzYWJsZS1saW5lXG4gICAgcGFyZW50ID0gcGFyZW50Ll9vcmlnaW5hbDtcbiAgfVxuICB2YXIgaXNDb21waWxlZCA9IGlzVHJ1ZShvcHRpb25zLl9jb21waWxlZCk7XG4gIHZhciBuZWVkTm9ybWFsaXphdGlvbiA9ICFpc0NvbXBpbGVkO1xuXG4gIHRoaXMuZGF0YSA9IGRhdGE7XG4gIHRoaXMucHJvcHMgPSBwcm9wcztcbiAgdGhpcy5jaGlsZHJlbiA9IGNoaWxkcmVuO1xuICB0aGlzLnBhcmVudCA9IHBhcmVudDtcbiAgdGhpcy5saXN0ZW5lcnMgPSBkYXRhLm9uIHx8IGVtcHR5T2JqZWN0O1xuICB0aGlzLmluamVjdGlvbnMgPSByZXNvbHZlSW5qZWN0KG9wdGlvbnMuaW5qZWN0LCBwYXJlbnQpO1xuICB0aGlzLnNsb3RzID0gZnVuY3Rpb24gKCkge1xuICAgIGlmICghdGhpcyQxLiRzbG90cykge1xuICAgICAgbm9ybWFsaXplU2NvcGVkU2xvdHMoXG4gICAgICAgIGRhdGEuc2NvcGVkU2xvdHMsXG4gICAgICAgIHRoaXMkMS4kc2xvdHMgPSByZXNvbHZlU2xvdHMoY2hpbGRyZW4sIHBhcmVudClcbiAgICAgICk7XG4gICAgfVxuICAgIHJldHVybiB0aGlzJDEuJHNsb3RzXG4gIH07XG5cbiAgT2JqZWN0LmRlZmluZVByb3BlcnR5KHRoaXMsICdzY29wZWRTbG90cycsICh7XG4gICAgZW51bWVyYWJsZTogdHJ1ZSxcbiAgICBnZXQ6IGZ1bmN0aW9uIGdldCAoKSB7XG4gICAgICByZXR1cm4gbm9ybWFsaXplU2NvcGVkU2xvdHMoZGF0YS5zY29wZWRTbG90cywgdGhpcy5zbG90cygpKVxuICAgIH1cbiAgfSkpO1xuXG4gIC8vIHN1cHBvcnQgZm9yIGNvbXBpbGVkIGZ1bmN0aW9uYWwgdGVtcGxhdGVcbiAgaWYgKGlzQ29tcGlsZWQpIHtcbiAgICAvLyBleHBvc2luZyAkb3B0aW9ucyBmb3IgcmVuZGVyU3RhdGljKClcbiAgICB0aGlzLiRvcHRpb25zID0gb3B0aW9ucztcbiAgICAvLyBwcmUtcmVzb2x2ZSBzbG90cyBmb3IgcmVuZGVyU2xvdCgpXG4gICAgdGhpcy4kc2xvdHMgPSB0aGlzLnNsb3RzKCk7XG4gICAgdGhpcy4kc2NvcGVkU2xvdHMgPSBub3JtYWxpemVTY29wZWRTbG90cyhkYXRhLnNjb3BlZFNsb3RzLCB0aGlzLiRzbG90cyk7XG4gIH1cblxuICBpZiAob3B0aW9ucy5fc2NvcGVJZCkge1xuICAgIHRoaXMuX2MgPSBmdW5jdGlvbiAoYSwgYiwgYywgZCkge1xuICAgICAgdmFyIHZub2RlID0gY3JlYXRlRWxlbWVudChjb250ZXh0Vm0sIGEsIGIsIGMsIGQsIG5lZWROb3JtYWxpemF0aW9uKTtcbiAgICAgIGlmICh2bm9kZSAmJiAhQXJyYXkuaXNBcnJheSh2bm9kZSkpIHtcbiAgICAgICAgdm5vZGUuZm5TY29wZUlkID0gb3B0aW9ucy5fc2NvcGVJZDtcbiAgICAgICAgdm5vZGUuZm5Db250ZXh0ID0gcGFyZW50O1xuICAgICAgfVxuICAgICAgcmV0dXJuIHZub2RlXG4gICAgfTtcbiAgfSBlbHNlIHtcbiAgICB0aGlzLl9jID0gZnVuY3Rpb24gKGEsIGIsIGMsIGQpIHsgcmV0dXJuIGNyZWF0ZUVsZW1lbnQoY29udGV4dFZtLCBhLCBiLCBjLCBkLCBuZWVkTm9ybWFsaXphdGlvbik7IH07XG4gIH1cbn1cblxuaW5zdGFsbFJlbmRlckhlbHBlcnMoRnVuY3Rpb25hbFJlbmRlckNvbnRleHQucHJvdG90eXBlKTtcblxuZnVuY3Rpb24gY3JlYXRlRnVuY3Rpb25hbENvbXBvbmVudCAoXG4gIEN0b3IsXG4gIHByb3BzRGF0YSxcbiAgZGF0YSxcbiAgY29udGV4dFZtLFxuICBjaGlsZHJlblxuKSB7XG4gIHZhciBvcHRpb25zID0gQ3Rvci5vcHRpb25zO1xuICB2YXIgcHJvcHMgPSB7fTtcbiAgdmFyIHByb3BPcHRpb25zID0gb3B0aW9ucy5wcm9wcztcbiAgaWYgKGlzRGVmKHByb3BPcHRpb25zKSkge1xuICAgIGZvciAodmFyIGtleSBpbiBwcm9wT3B0aW9ucykge1xuICAgICAgcHJvcHNba2V5XSA9IHZhbGlkYXRlUHJvcChrZXksIHByb3BPcHRpb25zLCBwcm9wc0RhdGEgfHwgZW1wdHlPYmplY3QpO1xuICAgIH1cbiAgfSBlbHNlIHtcbiAgICBpZiAoaXNEZWYoZGF0YS5hdHRycykpIHsgbWVyZ2VQcm9wcyhwcm9wcywgZGF0YS5hdHRycyk7IH1cbiAgICBpZiAoaXNEZWYoZGF0YS5wcm9wcykpIHsgbWVyZ2VQcm9wcyhwcm9wcywgZGF0YS5wcm9wcyk7IH1cbiAgfVxuXG4gIHZhciByZW5kZXJDb250ZXh0ID0gbmV3IEZ1bmN0aW9uYWxSZW5kZXJDb250ZXh0KFxuICAgIGRhdGEsXG4gICAgcHJvcHMsXG4gICAgY2hpbGRyZW4sXG4gICAgY29udGV4dFZtLFxuICAgIEN0b3JcbiAgKTtcblxuICB2YXIgdm5vZGUgPSBvcHRpb25zLnJlbmRlci5jYWxsKG51bGwsIHJlbmRlckNvbnRleHQuX2MsIHJlbmRlckNvbnRleHQpO1xuXG4gIGlmICh2bm9kZSBpbnN0YW5jZW9mIFZOb2RlKSB7XG4gICAgcmV0dXJuIGNsb25lQW5kTWFya0Z1bmN0aW9uYWxSZXN1bHQodm5vZGUsIGRhdGEsIHJlbmRlckNvbnRleHQucGFyZW50LCBvcHRpb25zLCByZW5kZXJDb250ZXh0KVxuICB9IGVsc2UgaWYgKEFycmF5LmlzQXJyYXkodm5vZGUpKSB7XG4gICAgdmFyIHZub2RlcyA9IG5vcm1hbGl6ZUNoaWxkcmVuKHZub2RlKSB8fCBbXTtcbiAgICB2YXIgcmVzID0gbmV3IEFycmF5KHZub2Rlcy5sZW5ndGgpO1xuICAgIGZvciAodmFyIGkgPSAwOyBpIDwgdm5vZGVzLmxlbmd0aDsgaSsrKSB7XG4gICAgICByZXNbaV0gPSBjbG9uZUFuZE1hcmtGdW5jdGlvbmFsUmVzdWx0KHZub2Rlc1tpXSwgZGF0YSwgcmVuZGVyQ29udGV4dC5wYXJlbnQsIG9wdGlvbnMsIHJlbmRlckNvbnRleHQpO1xuICAgIH1cbiAgICByZXR1cm4gcmVzXG4gIH1cbn1cblxuZnVuY3Rpb24gY2xvbmVBbmRNYXJrRnVuY3Rpb25hbFJlc3VsdCAodm5vZGUsIGRhdGEsIGNvbnRleHRWbSwgb3B0aW9ucywgcmVuZGVyQ29udGV4dCkge1xuICAvLyAjNzgxNyBjbG9uZSBub2RlIGJlZm9yZSBzZXR0aW5nIGZuQ29udGV4dCwgb3RoZXJ3aXNlIGlmIHRoZSBub2RlIGlzIHJldXNlZFxuICAvLyAoZS5nLiBpdCB3YXMgZnJvbSBhIGNhY2hlZCBub3JtYWwgc2xvdCkgdGhlIGZuQ29udGV4dCBjYXVzZXMgbmFtZWQgc2xvdHNcbiAgLy8gdGhhdCBzaG91bGQgbm90IGJlIG1hdGNoZWQgdG8gbWF0Y2guXG4gIHZhciBjbG9uZSA9IGNsb25lVk5vZGUodm5vZGUpO1xuICBjbG9uZS5mbkNvbnRleHQgPSBjb250ZXh0Vm07XG4gIGNsb25lLmZuT3B0aW9ucyA9IG9wdGlvbnM7XG4gIGlmIChwcm9jZXNzLmVudi5OT0RFX0VOViAhPT0gJ3Byb2R1Y3Rpb24nKSB7XG4gICAgKGNsb25lLmRldnRvb2xzTWV0YSA9IGNsb25lLmRldnRvb2xzTWV0YSB8fCB7fSkucmVuZGVyQ29udGV4dCA9IHJlbmRlckNvbnRleHQ7XG4gIH1cbiAgaWYgKGRhdGEuc2xvdCkge1xuICAgIChjbG9uZS5kYXRhIHx8IChjbG9uZS5kYXRhID0ge30pKS5zbG90ID0gZGF0YS5zbG90O1xuICB9XG4gIHJldHVybiBjbG9uZVxufVxuXG5mdW5jdGlvbiBtZXJnZVByb3BzICh0bywgZnJvbSkge1xuICBmb3IgKHZhciBrZXkgaW4gZnJvbSkge1xuICAgIHRvW2NhbWVsaXplKGtleSldID0gZnJvbVtrZXldO1xuICB9XG59XG5cbi8qICAqL1xuXG4vKiAgKi9cblxuLyogICovXG5cbi8qICAqL1xuXG4vLyBpbmxpbmUgaG9va3MgdG8gYmUgaW52b2tlZCBvbiBjb21wb25lbnQgVk5vZGVzIGR1cmluZyBwYXRjaFxudmFyIGNvbXBvbmVudFZOb2RlSG9va3MgPSB7XG4gIGluaXQ6IGZ1bmN0aW9uIGluaXQgKHZub2RlLCBoeWRyYXRpbmcpIHtcbiAgICBpZiAoXG4gICAgICB2bm9kZS5jb21wb25lbnRJbnN0YW5jZSAmJlxuICAgICAgIXZub2RlLmNvbXBvbmVudEluc3RhbmNlLl9pc0Rlc3Ryb3llZCAmJlxuICAgICAgdm5vZGUuZGF0YS5rZWVwQWxpdmVcbiAgICApIHtcbiAgICAgIC8vIGtlcHQtYWxpdmUgY29tcG9uZW50cywgdHJlYXQgYXMgYSBwYXRjaFxuICAgICAgdmFyIG1vdW50ZWROb2RlID0gdm5vZGU7IC8vIHdvcmsgYXJvdW5kIGZsb3dcbiAgICAgIGNvbXBvbmVudFZOb2RlSG9va3MucHJlcGF0Y2gobW91bnRlZE5vZGUsIG1vdW50ZWROb2RlKTtcbiAgICB9IGVsc2Uge1xuICAgICAgdmFyIGNoaWxkID0gdm5vZGUuY29tcG9uZW50SW5zdGFuY2UgPSBjcmVhdGVDb21wb25lbnRJbnN0YW5jZUZvclZub2RlKFxuICAgICAgICB2bm9kZSxcbiAgICAgICAgYWN0aXZlSW5zdGFuY2VcbiAgICAgICk7XG4gICAgICBjaGlsZC4kbW91bnQoaHlkcmF0aW5nID8gdm5vZGUuZWxtIDogdW5kZWZpbmVkLCBoeWRyYXRpbmcpO1xuICAgIH1cbiAgfSxcblxuICBwcmVwYXRjaDogZnVuY3Rpb24gcHJlcGF0Y2ggKG9sZFZub2RlLCB2bm9kZSkge1xuICAgIHZhciBvcHRpb25zID0gdm5vZGUuY29tcG9uZW50T3B0aW9ucztcbiAgICB2YXIgY2hpbGQgPSB2bm9kZS5jb21wb25lbnRJbnN0YW5jZSA9IG9sZFZub2RlLmNvbXBvbmVudEluc3RhbmNlO1xuICAgIHVwZGF0ZUNoaWxkQ29tcG9uZW50KFxuICAgICAgY2hpbGQsXG4gICAgICBvcHRpb25zLnByb3BzRGF0YSwgLy8gdXBkYXRlZCBwcm9wc1xuICAgICAgb3B0aW9ucy5saXN0ZW5lcnMsIC8vIHVwZGF0ZWQgbGlzdGVuZXJzXG4gICAgICB2bm9kZSwgLy8gbmV3IHBhcmVudCB2bm9kZVxuICAgICAgb3B0aW9ucy5jaGlsZHJlbiAvLyBuZXcgY2hpbGRyZW5cbiAgICApO1xuICB9LFxuXG4gIGluc2VydDogZnVuY3Rpb24gaW5zZXJ0ICh2bm9kZSkge1xuICAgIHZhciBjb250ZXh0ID0gdm5vZGUuY29udGV4dDtcbiAgICB2YXIgY29tcG9uZW50SW5zdGFuY2UgPSB2bm9kZS5jb21wb25lbnRJbnN0YW5jZTtcbiAgICBpZiAoIWNvbXBvbmVudEluc3RhbmNlLl9pc01vdW50ZWQpIHtcbiAgICAgIGNhbGxIb29rKGNvbXBvbmVudEluc3RhbmNlLCAnb25TZXJ2aWNlQ3JlYXRlZCcpO1xuICAgICAgY2FsbEhvb2soY29tcG9uZW50SW5zdGFuY2UsICdvblNlcnZpY2VBdHRhY2hlZCcpO1xuICAgICAgY29tcG9uZW50SW5zdGFuY2UuX2lzTW91bnRlZCA9IHRydWU7XG4gICAgICBjYWxsSG9vayhjb21wb25lbnRJbnN0YW5jZSwgJ21vdW50ZWQnKTtcbiAgICB9XG4gICAgaWYgKHZub2RlLmRhdGEua2VlcEFsaXZlKSB7XG4gICAgICBpZiAoY29udGV4dC5faXNNb3VudGVkKSB7XG4gICAgICAgIC8vIHZ1ZS1yb3V0ZXIjMTIxMlxuICAgICAgICAvLyBEdXJpbmcgdXBkYXRlcywgYSBrZXB0LWFsaXZlIGNvbXBvbmVudCdzIGNoaWxkIGNvbXBvbmVudHMgbWF5XG4gICAgICAgIC8vIGNoYW5nZSwgc28gZGlyZWN0bHkgd2Fsa2luZyB0aGUgdHJlZSBoZXJlIG1heSBjYWxsIGFjdGl2YXRlZCBob29rc1xuICAgICAgICAvLyBvbiBpbmNvcnJlY3QgY2hpbGRyZW4uIEluc3RlYWQgd2UgcHVzaCB0aGVtIGludG8gYSBxdWV1ZSB3aGljaCB3aWxsXG4gICAgICAgIC8vIGJlIHByb2Nlc3NlZCBhZnRlciB0aGUgd2hvbGUgcGF0Y2ggcHJvY2VzcyBlbmRlZC5cbiAgICAgICAgcXVldWVBY3RpdmF0ZWRDb21wb25lbnQoY29tcG9uZW50SW5zdGFuY2UpO1xuICAgICAgfSBlbHNlIHtcbiAgICAgICAgYWN0aXZhdGVDaGlsZENvbXBvbmVudChjb21wb25lbnRJbnN0YW5jZSwgdHJ1ZSAvKiBkaXJlY3QgKi8pO1xuICAgICAgfVxuICAgIH1cbiAgfSxcblxuICBkZXN0cm95OiBmdW5jdGlvbiBkZXN0cm95ICh2bm9kZSkge1xuICAgIHZhciBjb21wb25lbnRJbnN0YW5jZSA9IHZub2RlLmNvbXBvbmVudEluc3RhbmNlO1xuICAgIGlmICghY29tcG9uZW50SW5zdGFuY2UuX2lzRGVzdHJveWVkKSB7XG4gICAgICBpZiAoIXZub2RlLmRhdGEua2VlcEFsaXZlKSB7XG4gICAgICAgIGNvbXBvbmVudEluc3RhbmNlLiRkZXN0cm95KCk7XG4gICAgICB9IGVsc2Uge1xuICAgICAgICBkZWFjdGl2YXRlQ2hpbGRDb21wb25lbnQoY29tcG9uZW50SW5zdGFuY2UsIHRydWUgLyogZGlyZWN0ICovKTtcbiAgICAgIH1cbiAgICB9XG4gIH1cbn07XG5cbnZhciBob29rc1RvTWVyZ2UgPSBPYmplY3Qua2V5cyhjb21wb25lbnRWTm9kZUhvb2tzKTtcblxuZnVuY3Rpb24gY3JlYXRlQ29tcG9uZW50IChcbiAgQ3RvcixcbiAgZGF0YSxcbiAgY29udGV4dCxcbiAgY2hpbGRyZW4sXG4gIHRhZ1xuKSB7XG4gIGlmIChpc1VuZGVmKEN0b3IpKSB7XG4gICAgcmV0dXJuXG4gIH1cblxuICB2YXIgYmFzZUN0b3IgPSBjb250ZXh0LiRvcHRpb25zLl9iYXNlO1xuXG4gIC8vIHBsYWluIG9wdGlvbnMgb2JqZWN0OiB0dXJuIGl0IGludG8gYSBjb25zdHJ1Y3RvclxuICBpZiAoaXNPYmplY3QoQ3RvcikpIHtcbiAgICBDdG9yID0gYmFzZUN0b3IuZXh0ZW5kKEN0b3IpO1xuICB9XG5cbiAgLy8gaWYgYXQgdGhpcyBzdGFnZSBpdCdzIG5vdCBhIGNvbnN0cnVjdG9yIG9yIGFuIGFzeW5jIGNvbXBvbmVudCBmYWN0b3J5LFxuICAvLyByZWplY3QuXG4gIGlmICh0eXBlb2YgQ3RvciAhPT0gJ2Z1bmN0aW9uJykge1xuICAgIGlmIChwcm9jZXNzLmVudi5OT0RFX0VOViAhPT0gJ3Byb2R1Y3Rpb24nKSB7XG4gICAgICB3YXJuKChcIkludmFsaWQgQ29tcG9uZW50IGRlZmluaXRpb246IFwiICsgKFN0cmluZyhDdG9yKSkpLCBjb250ZXh0KTtcbiAgICB9XG4gICAgcmV0dXJuXG4gIH1cblxuICAvLyBhc3luYyBjb21wb25lbnRcbiAgdmFyIGFzeW5jRmFjdG9yeTtcbiAgaWYgKGlzVW5kZWYoQ3Rvci5jaWQpKSB7XG4gICAgYXN5bmNGYWN0b3J5ID0gQ3RvcjtcbiAgICBDdG9yID0gcmVzb2x2ZUFzeW5jQ29tcG9uZW50KGFzeW5jRmFjdG9yeSwgYmFzZUN0b3IpO1xuICAgIGlmIChDdG9yID09PSB1bmRlZmluZWQpIHtcbiAgICAgIC8vIHJldHVybiBhIHBsYWNlaG9sZGVyIG5vZGUgZm9yIGFzeW5jIGNvbXBvbmVudCwgd2hpY2ggaXMgcmVuZGVyZWRcbiAgICAgIC8vIGFzIGEgY29tbWVudCBub2RlIGJ1dCBwcmVzZXJ2ZXMgYWxsIHRoZSByYXcgaW5mb3JtYXRpb24gZm9yIHRoZSBub2RlLlxuICAgICAgLy8gdGhlIGluZm9ybWF0aW9uIHdpbGwgYmUgdXNlZCBmb3IgYXN5bmMgc2VydmVyLXJlbmRlcmluZyBhbmQgaHlkcmF0aW9uLlxuICAgICAgcmV0dXJuIGNyZWF0ZUFzeW5jUGxhY2Vob2xkZXIoXG4gICAgICAgIGFzeW5jRmFjdG9yeSxcbiAgICAgICAgZGF0YSxcbiAgICAgICAgY29udGV4dCxcbiAgICAgICAgY2hpbGRyZW4sXG4gICAgICAgIHRhZ1xuICAgICAgKVxuICAgIH1cbiAgfVxuXG4gIGRhdGEgPSBkYXRhIHx8IHt9O1xuXG4gIC8vIHJlc29sdmUgY29uc3RydWN0b3Igb3B0aW9ucyBpbiBjYXNlIGdsb2JhbCBtaXhpbnMgYXJlIGFwcGxpZWQgYWZ0ZXJcbiAgLy8gY29tcG9uZW50IGNvbnN0cnVjdG9yIGNyZWF0aW9uXG4gIHJlc29sdmVDb25zdHJ1Y3Rvck9wdGlvbnMoQ3Rvcik7XG5cbiAgLy8gdHJhbnNmb3JtIGNvbXBvbmVudCB2LW1vZGVsIGRhdGEgaW50byBwcm9wcyAmIGV2ZW50c1xuICBpZiAoaXNEZWYoZGF0YS5tb2RlbCkpIHtcbiAgICB0cmFuc2Zvcm1Nb2RlbChDdG9yLm9wdGlvbnMsIGRhdGEpO1xuICB9XG5cbiAgLy8gZXh0cmFjdCBwcm9wc1xuICB2YXIgcHJvcHNEYXRhID0gZXh0cmFjdFByb3BzRnJvbVZOb2RlRGF0YShkYXRhLCBDdG9yLCB0YWcsIGNvbnRleHQpOyAvLyBmaXhlZCBieSB4eHh4eHhcblxuICAvLyBmdW5jdGlvbmFsIGNvbXBvbmVudFxuICBpZiAoaXNUcnVlKEN0b3Iub3B0aW9ucy5mdW5jdGlvbmFsKSkge1xuICAgIHJldHVybiBjcmVhdGVGdW5jdGlvbmFsQ29tcG9uZW50KEN0b3IsIHByb3BzRGF0YSwgZGF0YSwgY29udGV4dCwgY2hpbGRyZW4pXG4gIH1cblxuICAvLyBleHRyYWN0IGxpc3RlbmVycywgc2luY2UgdGhlc2UgbmVlZHMgdG8gYmUgdHJlYXRlZCBhc1xuICAvLyBjaGlsZCBjb21wb25lbnQgbGlzdGVuZXJzIGluc3RlYWQgb2YgRE9NIGxpc3RlbmVyc1xuICB2YXIgbGlzdGVuZXJzID0gZGF0YS5vbjtcbiAgLy8gcmVwbGFjZSB3aXRoIGxpc3RlbmVycyB3aXRoIC5uYXRpdmUgbW9kaWZpZXJcbiAgLy8gc28gaXQgZ2V0cyBwcm9jZXNzZWQgZHVyaW5nIHBhcmVudCBjb21wb25lbnQgcGF0Y2guXG4gIGRhdGEub24gPSBkYXRhLm5hdGl2ZU9uO1xuXG4gIGlmIChpc1RydWUoQ3Rvci5vcHRpb25zLmFic3RyYWN0KSkge1xuICAgIC8vIGFic3RyYWN0IGNvbXBvbmVudHMgZG8gbm90IGtlZXAgYW55dGhpbmdcbiAgICAvLyBvdGhlciB0aGFuIHByb3BzICYgbGlzdGVuZXJzICYgc2xvdFxuXG4gICAgLy8gd29yayBhcm91bmQgZmxvd1xuICAgIHZhciBzbG90ID0gZGF0YS5zbG90O1xuICAgIGRhdGEgPSB7fTtcbiAgICBpZiAoc2xvdCkge1xuICAgICAgZGF0YS5zbG90ID0gc2xvdDtcbiAgICB9XG4gIH1cblxuICAvLyBpbnN0YWxsIGNvbXBvbmVudCBtYW5hZ2VtZW50IGhvb2tzIG9udG8gdGhlIHBsYWNlaG9sZGVyIG5vZGVcbiAgaW5zdGFsbENvbXBvbmVudEhvb2tzKGRhdGEpO1xuXG4gIC8vIHJldHVybiBhIHBsYWNlaG9sZGVyIHZub2RlXG4gIHZhciBuYW1lID0gQ3Rvci5vcHRpb25zLm5hbWUgfHwgdGFnO1xuICB2YXIgdm5vZGUgPSBuZXcgVk5vZGUoXG4gICAgKFwidnVlLWNvbXBvbmVudC1cIiArIChDdG9yLmNpZCkgKyAobmFtZSA/IChcIi1cIiArIG5hbWUpIDogJycpKSxcbiAgICBkYXRhLCB1bmRlZmluZWQsIHVuZGVmaW5lZCwgdW5kZWZpbmVkLCBjb250ZXh0LFxuICAgIHsgQ3RvcjogQ3RvciwgcHJvcHNEYXRhOiBwcm9wc0RhdGEsIGxpc3RlbmVyczogbGlzdGVuZXJzLCB0YWc6IHRhZywgY2hpbGRyZW46IGNoaWxkcmVuIH0sXG4gICAgYXN5bmNGYWN0b3J5XG4gICk7XG5cbiAgcmV0dXJuIHZub2RlXG59XG5cbmZ1bmN0aW9uIGNyZWF0ZUNvbXBvbmVudEluc3RhbmNlRm9yVm5vZGUgKFxuICB2bm9kZSwgLy8gd2Uga25vdyBpdCdzIE1vdW50ZWRDb21wb25lbnRWTm9kZSBidXQgZmxvdyBkb2Vzbid0XG4gIHBhcmVudCAvLyBhY3RpdmVJbnN0YW5jZSBpbiBsaWZlY3ljbGUgc3RhdGVcbikge1xuICB2YXIgb3B0aW9ucyA9IHtcbiAgICBfaXNDb21wb25lbnQ6IHRydWUsXG4gICAgX3BhcmVudFZub2RlOiB2bm9kZSxcbiAgICBwYXJlbnQ6IHBhcmVudFxuICB9O1xuICAvLyBjaGVjayBpbmxpbmUtdGVtcGxhdGUgcmVuZGVyIGZ1bmN0aW9uc1xuICB2YXIgaW5saW5lVGVtcGxhdGUgPSB2bm9kZS5kYXRhLmlubGluZVRlbXBsYXRlO1xuICBpZiAoaXNEZWYoaW5saW5lVGVtcGxhdGUpKSB7XG4gICAgb3B0aW9ucy5yZW5kZXIgPSBpbmxpbmVUZW1wbGF0ZS5yZW5kZXI7XG4gICAgb3B0aW9ucy5zdGF0aWNSZW5kZXJGbnMgPSBpbmxpbmVUZW1wbGF0ZS5zdGF0aWNSZW5kZXJGbnM7XG4gIH1cbiAgcmV0dXJuIG5ldyB2bm9kZS5jb21wb25lbnRPcHRpb25zLkN0b3Iob3B0aW9ucylcbn1cblxuZnVuY3Rpb24gaW5zdGFsbENvbXBvbmVudEhvb2tzIChkYXRhKSB7XG4gIHZhciBob29rcyA9IGRhdGEuaG9vayB8fCAoZGF0YS5ob29rID0ge30pO1xuICBmb3IgKHZhciBpID0gMDsgaSA8IGhvb2tzVG9NZXJnZS5sZW5ndGg7IGkrKykge1xuICAgIHZhciBrZXkgPSBob29rc1RvTWVyZ2VbaV07XG4gICAgdmFyIGV4aXN0aW5nID0gaG9va3Nba2V5XTtcbiAgICB2YXIgdG9NZXJnZSA9IGNvbXBvbmVudFZOb2RlSG9va3Nba2V5XTtcbiAgICBpZiAoZXhpc3RpbmcgIT09IHRvTWVyZ2UgJiYgIShleGlzdGluZyAmJiBleGlzdGluZy5fbWVyZ2VkKSkge1xuICAgICAgaG9va3Nba2V5XSA9IGV4aXN0aW5nID8gbWVyZ2VIb29rJDEodG9NZXJnZSwgZXhpc3RpbmcpIDogdG9NZXJnZTtcbiAgICB9XG4gIH1cbn1cblxuZnVuY3Rpb24gbWVyZ2VIb29rJDEgKGYxLCBmMikge1xuICB2YXIgbWVyZ2VkID0gZnVuY3Rpb24gKGEsIGIpIHtcbiAgICAvLyBmbG93IGNvbXBsYWlucyBhYm91dCBleHRyYSBhcmdzIHdoaWNoIGlzIHdoeSB3ZSB1c2UgYW55XG4gICAgZjEoYSwgYik7XG4gICAgZjIoYSwgYik7XG4gIH07XG4gIG1lcmdlZC5fbWVyZ2VkID0gdHJ1ZTtcbiAgcmV0dXJuIG1lcmdlZFxufVxuXG4vLyB0cmFuc2Zvcm0gY29tcG9uZW50IHYtbW9kZWwgaW5mbyAodmFsdWUgYW5kIGNhbGxiYWNrKSBpbnRvXG4vLyBwcm9wIGFuZCBldmVudCBoYW5kbGVyIHJlc3BlY3RpdmVseS5cbmZ1bmN0aW9uIHRyYW5zZm9ybU1vZGVsIChvcHRpb25zLCBkYXRhKSB7XG4gIHZhciBwcm9wID0gKG9wdGlvbnMubW9kZWwgJiYgb3B0aW9ucy5tb2RlbC5wcm9wKSB8fCAndmFsdWUnO1xuICB2YXIgZXZlbnQgPSAob3B0aW9ucy5tb2RlbCAmJiBvcHRpb25zLm1vZGVsLmV2ZW50KSB8fCAnaW5wdXQnXG4gIDsoZGF0YS5hdHRycyB8fCAoZGF0YS5hdHRycyA9IHt9KSlbcHJvcF0gPSBkYXRhLm1vZGVsLnZhbHVlO1xuICB2YXIgb24gPSBkYXRhLm9uIHx8IChkYXRhLm9uID0ge30pO1xuICB2YXIgZXhpc3RpbmcgPSBvbltldmVudF07XG4gIHZhciBjYWxsYmFjayA9IGRhdGEubW9kZWwuY2FsbGJhY2s7XG4gIGlmIChpc0RlZihleGlzdGluZykpIHtcbiAgICBpZiAoXG4gICAgICBBcnJheS5pc0FycmF5KGV4aXN0aW5nKVxuICAgICAgICA/IGV4aXN0aW5nLmluZGV4T2YoY2FsbGJhY2spID09PSAtMVxuICAgICAgICA6IGV4aXN0aW5nICE9PSBjYWxsYmFja1xuICAgICkge1xuICAgICAgb25bZXZlbnRdID0gW2NhbGxiYWNrXS5jb25jYXQoZXhpc3RpbmcpO1xuICAgIH1cbiAgfSBlbHNlIHtcbiAgICBvbltldmVudF0gPSBjYWxsYmFjaztcbiAgfVxufVxuXG4vKiAgKi9cblxudmFyIFNJTVBMRV9OT1JNQUxJWkUgPSAxO1xudmFyIEFMV0FZU19OT1JNQUxJWkUgPSAyO1xuXG4vLyB3cmFwcGVyIGZ1bmN0aW9uIGZvciBwcm92aWRpbmcgYSBtb3JlIGZsZXhpYmxlIGludGVyZmFjZVxuLy8gd2l0aG91dCBnZXR0aW5nIHllbGxlZCBhdCBieSBmbG93XG5mdW5jdGlvbiBjcmVhdGVFbGVtZW50IChcbiAgY29udGV4dCxcbiAgdGFnLFxuICBkYXRhLFxuICBjaGlsZHJlbixcbiAgbm9ybWFsaXphdGlvblR5cGUsXG4gIGFsd2F5c05vcm1hbGl6ZVxuKSB7XG4gIGlmIChBcnJheS5pc0FycmF5KGRhdGEpIHx8IGlzUHJpbWl0aXZlKGRhdGEpKSB7XG4gICAgbm9ybWFsaXphdGlvblR5cGUgPSBjaGlsZHJlbjtcbiAgICBjaGlsZHJlbiA9IGRhdGE7XG4gICAgZGF0YSA9IHVuZGVmaW5lZDtcbiAgfVxuICBpZiAoaXNUcnVlKGFsd2F5c05vcm1hbGl6ZSkpIHtcbiAgICBub3JtYWxpemF0aW9uVHlwZSA9IEFMV0FZU19OT1JNQUxJWkU7XG4gIH1cbiAgcmV0dXJuIF9jcmVhdGVFbGVtZW50KGNvbnRleHQsIHRhZywgZGF0YSwgY2hpbGRyZW4sIG5vcm1hbGl6YXRpb25UeXBlKVxufVxuXG5mdW5jdGlvbiBfY3JlYXRlRWxlbWVudCAoXG4gIGNvbnRleHQsXG4gIHRhZyxcbiAgZGF0YSxcbiAgY2hpbGRyZW4sXG4gIG5vcm1hbGl6YXRpb25UeXBlXG4pIHtcbiAgaWYgKGlzRGVmKGRhdGEpICYmIGlzRGVmKChkYXRhKS5fX29iX18pKSB7XG4gICAgcHJvY2Vzcy5lbnYuTk9ERV9FTlYgIT09ICdwcm9kdWN0aW9uJyAmJiB3YXJuKFxuICAgICAgXCJBdm9pZCB1c2luZyBvYnNlcnZlZCBkYXRhIG9iamVjdCBhcyB2bm9kZSBkYXRhOiBcIiArIChKU09OLnN0cmluZ2lmeShkYXRhKSkgKyBcIlxcblwiICtcbiAgICAgICdBbHdheXMgY3JlYXRlIGZyZXNoIHZub2RlIGRhdGEgb2JqZWN0cyBpbiBlYWNoIHJlbmRlciEnLFxuICAgICAgY29udGV4dFxuICAgICk7XG4gICAgcmV0dXJuIGNyZWF0ZUVtcHR5Vk5vZGUoKVxuICB9XG4gIC8vIG9iamVjdCBzeW50YXggaW4gdi1iaW5kXG4gIGlmIChpc0RlZihkYXRhKSAmJiBpc0RlZihkYXRhLmlzKSkge1xuICAgIHRhZyA9IGRhdGEuaXM7XG4gIH1cbiAgaWYgKCF0YWcpIHtcbiAgICAvLyBpbiBjYXNlIG9mIGNvbXBvbmVudCA6aXMgc2V0IHRvIGZhbHN5IHZhbHVlXG4gICAgcmV0dXJuIGNyZWF0ZUVtcHR5Vk5vZGUoKVxuICB9XG4gIC8vIHdhcm4gYWdhaW5zdCBub24tcHJpbWl0aXZlIGtleVxuICBpZiAocHJvY2Vzcy5lbnYuTk9ERV9FTlYgIT09ICdwcm9kdWN0aW9uJyAmJlxuICAgIGlzRGVmKGRhdGEpICYmIGlzRGVmKGRhdGEua2V5KSAmJiAhaXNQcmltaXRpdmUoZGF0YS5rZXkpXG4gICkge1xuICAgIHtcbiAgICAgIHdhcm4oXG4gICAgICAgICdBdm9pZCB1c2luZyBub24tcHJpbWl0aXZlIHZhbHVlIGFzIGtleSwgJyArXG4gICAgICAgICd1c2Ugc3RyaW5nL251bWJlciB2YWx1ZSBpbnN0ZWFkLicsXG4gICAgICAgIGNvbnRleHRcbiAgICAgICk7XG4gICAgfVxuICB9XG4gIC8vIHN1cHBvcnQgc2luZ2xlIGZ1bmN0aW9uIGNoaWxkcmVuIGFzIGRlZmF1bHQgc2NvcGVkIHNsb3RcbiAgaWYgKEFycmF5LmlzQXJyYXkoY2hpbGRyZW4pICYmXG4gICAgdHlwZW9mIGNoaWxkcmVuWzBdID09PSAnZnVuY3Rpb24nXG4gICkge1xuICAgIGRhdGEgPSBkYXRhIHx8IHt9O1xuICAgIGRhdGEuc2NvcGVkU2xvdHMgPSB7IGRlZmF1bHQ6IGNoaWxkcmVuWzBdIH07XG4gICAgY2hpbGRyZW4ubGVuZ3RoID0gMDtcbiAgfVxuICBpZiAobm9ybWFsaXphdGlvblR5cGUgPT09IEFMV0FZU19OT1JNQUxJWkUpIHtcbiAgICBjaGlsZHJlbiA9IG5vcm1hbGl6ZUNoaWxkcmVuKGNoaWxkcmVuKTtcbiAgfSBlbHNlIGlmIChub3JtYWxpemF0aW9uVHlwZSA9PT0gU0lNUExFX05PUk1BTElaRSkge1xuICAgIGNoaWxkcmVuID0gc2ltcGxlTm9ybWFsaXplQ2hpbGRyZW4oY2hpbGRyZW4pO1xuICB9XG4gIHZhciB2bm9kZSwgbnM7XG4gIGlmICh0eXBlb2YgdGFnID09PSAnc3RyaW5nJykge1xuICAgIHZhciBDdG9yO1xuICAgIG5zID0gKGNvbnRleHQuJHZub2RlICYmIGNvbnRleHQuJHZub2RlLm5zKSB8fCBjb25maWcuZ2V0VGFnTmFtZXNwYWNlKHRhZyk7XG4gICAgaWYgKGNvbmZpZy5pc1Jlc2VydmVkVGFnKHRhZykpIHtcbiAgICAgIC8vIHBsYXRmb3JtIGJ1aWx0LWluIGVsZW1lbnRzXG4gICAgICBpZiAocHJvY2Vzcy5lbnYuTk9ERV9FTlYgIT09ICdwcm9kdWN0aW9uJyAmJiBpc0RlZihkYXRhKSAmJiBpc0RlZihkYXRhLm5hdGl2ZU9uKSkge1xuICAgICAgICB3YXJuKFxuICAgICAgICAgIChcIlRoZSAubmF0aXZlIG1vZGlmaWVyIGZvciB2LW9uIGlzIG9ubHkgdmFsaWQgb24gY29tcG9uZW50cyBidXQgaXQgd2FzIHVzZWQgb24gPFwiICsgdGFnICsgXCI+LlwiKSxcbiAgICAgICAgICBjb250ZXh0XG4gICAgICAgICk7XG4gICAgICB9XG4gICAgICB2bm9kZSA9IG5ldyBWTm9kZShcbiAgICAgICAgY29uZmlnLnBhcnNlUGxhdGZvcm1UYWdOYW1lKHRhZyksIGRhdGEsIGNoaWxkcmVuLFxuICAgICAgICB1bmRlZmluZWQsIHVuZGVmaW5lZCwgY29udGV4dFxuICAgICAgKTtcbiAgICB9IGVsc2UgaWYgKCghZGF0YSB8fCAhZGF0YS5wcmUpICYmIGlzRGVmKEN0b3IgPSByZXNvbHZlQXNzZXQoY29udGV4dC4kb3B0aW9ucywgJ2NvbXBvbmVudHMnLCB0YWcpKSkge1xuICAgICAgLy8gY29tcG9uZW50XG4gICAgICB2bm9kZSA9IGNyZWF0ZUNvbXBvbmVudChDdG9yLCBkYXRhLCBjb250ZXh0LCBjaGlsZHJlbiwgdGFnKTtcbiAgICB9IGVsc2Uge1xuICAgICAgLy8gdW5rbm93biBvciB1bmxpc3RlZCBuYW1lc3BhY2VkIGVsZW1lbnRzXG4gICAgICAvLyBjaGVjayBhdCBydW50aW1lIGJlY2F1c2UgaXQgbWF5IGdldCBhc3NpZ25lZCBhIG5hbWVzcGFjZSB3aGVuIGl0c1xuICAgICAgLy8gcGFyZW50IG5vcm1hbGl6ZXMgY2hpbGRyZW5cbiAgICAgIHZub2RlID0gbmV3IFZOb2RlKFxuICAgICAgICB0YWcsIGRhdGEsIGNoaWxkcmVuLFxuICAgICAgICB1bmRlZmluZWQsIHVuZGVmaW5lZCwgY29udGV4dFxuICAgICAgKTtcbiAgICB9XG4gIH0gZWxzZSB7XG4gICAgLy8gZGlyZWN0IGNvbXBvbmVudCBvcHRpb25zIC8gY29uc3RydWN0b3JcbiAgICB2bm9kZSA9IGNyZWF0ZUNvbXBvbmVudCh0YWcsIGRhdGEsIGNvbnRleHQsIGNoaWxkcmVuKTtcbiAgfVxuICBpZiAoQXJyYXkuaXNBcnJheSh2bm9kZSkpIHtcbiAgICByZXR1cm4gdm5vZGVcbiAgfSBlbHNlIGlmIChpc0RlZih2bm9kZSkpIHtcbiAgICBpZiAoaXNEZWYobnMpKSB7IGFwcGx5TlModm5vZGUsIG5zKTsgfVxuICAgIGlmIChpc0RlZihkYXRhKSkgeyByZWdpc3RlckRlZXBCaW5kaW5ncyhkYXRhKTsgfVxuICAgIHJldHVybiB2bm9kZVxuICB9IGVsc2Uge1xuICAgIHJldHVybiBjcmVhdGVFbXB0eVZOb2RlKClcbiAgfVxufVxuXG5mdW5jdGlvbiBhcHBseU5TICh2bm9kZSwgbnMsIGZvcmNlKSB7XG4gIHZub2RlLm5zID0gbnM7XG4gIGlmICh2bm9kZS50YWcgPT09ICdmb3JlaWduT2JqZWN0Jykge1xuICAgIC8vIHVzZSBkZWZhdWx0IG5hbWVzcGFjZSBpbnNpZGUgZm9yZWlnbk9iamVjdFxuICAgIG5zID0gdW5kZWZpbmVkO1xuICAgIGZvcmNlID0gdHJ1ZTtcbiAgfVxuICBpZiAoaXNEZWYodm5vZGUuY2hpbGRyZW4pKSB7XG4gICAgZm9yICh2YXIgaSA9IDAsIGwgPSB2bm9kZS5jaGlsZHJlbi5sZW5ndGg7IGkgPCBsOyBpKyspIHtcbiAgICAgIHZhciBjaGlsZCA9IHZub2RlLmNoaWxkcmVuW2ldO1xuICAgICAgaWYgKGlzRGVmKGNoaWxkLnRhZykgJiYgKFxuICAgICAgICBpc1VuZGVmKGNoaWxkLm5zKSB8fCAoaXNUcnVlKGZvcmNlKSAmJiBjaGlsZC50YWcgIT09ICdzdmcnKSkpIHtcbiAgICAgICAgYXBwbHlOUyhjaGlsZCwgbnMsIGZvcmNlKTtcbiAgICAgIH1cbiAgICB9XG4gIH1cbn1cblxuLy8gcmVmICM1MzE4XG4vLyBuZWNlc3NhcnkgdG8gZW5zdXJlIHBhcmVudCByZS1yZW5kZXIgd2hlbiBkZWVwIGJpbmRpbmdzIGxpa2UgOnN0eWxlIGFuZFxuLy8gOmNsYXNzIGFyZSB1c2VkIG9uIHNsb3Qgbm9kZXNcbmZ1bmN0aW9uIHJlZ2lzdGVyRGVlcEJpbmRpbmdzIChkYXRhKSB7XG4gIGlmIChpc09iamVjdChkYXRhLnN0eWxlKSkge1xuICAgIHRyYXZlcnNlKGRhdGEuc3R5bGUpO1xuICB9XG4gIGlmIChpc09iamVjdChkYXRhLmNsYXNzKSkge1xuICAgIHRyYXZlcnNlKGRhdGEuY2xhc3MpO1xuICB9XG59XG5cbi8qICAqL1xuXG5mdW5jdGlvbiBpbml0UmVuZGVyICh2bSkge1xuICB2bS5fdm5vZGUgPSBudWxsOyAvLyB0aGUgcm9vdCBvZiB0aGUgY2hpbGQgdHJlZVxuICB2bS5fc3RhdGljVHJlZXMgPSBudWxsOyAvLyB2LW9uY2UgY2FjaGVkIHRyZWVzXG4gIHZhciBvcHRpb25zID0gdm0uJG9wdGlvbnM7XG4gIHZhciBwYXJlbnRWbm9kZSA9IHZtLiR2bm9kZSA9IG9wdGlvbnMuX3BhcmVudFZub2RlOyAvLyB0aGUgcGxhY2Vob2xkZXIgbm9kZSBpbiBwYXJlbnQgdHJlZVxuICB2YXIgcmVuZGVyQ29udGV4dCA9IHBhcmVudFZub2RlICYmIHBhcmVudFZub2RlLmNvbnRleHQ7XG4gIHZtLiRzbG90cyA9IHJlc29sdmVTbG90cyhvcHRpb25zLl9yZW5kZXJDaGlsZHJlbiwgcmVuZGVyQ29udGV4dCk7XG4gIHZtLiRzY29wZWRTbG90cyA9IGVtcHR5T2JqZWN0O1xuICAvLyBiaW5kIHRoZSBjcmVhdGVFbGVtZW50IGZuIHRvIHRoaXMgaW5zdGFuY2VcbiAgLy8gc28gdGhhdCB3ZSBnZXQgcHJvcGVyIHJlbmRlciBjb250ZXh0IGluc2lkZSBpdC5cbiAgLy8gYXJncyBvcmRlcjogdGFnLCBkYXRhLCBjaGlsZHJlbiwgbm9ybWFsaXphdGlvblR5cGUsIGFsd2F5c05vcm1hbGl6ZVxuICAvLyBpbnRlcm5hbCB2ZXJzaW9uIGlzIHVzZWQgYnkgcmVuZGVyIGZ1bmN0aW9ucyBjb21waWxlZCBmcm9tIHRlbXBsYXRlc1xuICB2bS5fYyA9IGZ1bmN0aW9uIChhLCBiLCBjLCBkKSB7IHJldHVybiBjcmVhdGVFbGVtZW50KHZtLCBhLCBiLCBjLCBkLCBmYWxzZSk7IH07XG4gIC8vIG5vcm1hbGl6YXRpb24gaXMgYWx3YXlzIGFwcGxpZWQgZm9yIHRoZSBwdWJsaWMgdmVyc2lvbiwgdXNlZCBpblxuICAvLyB1c2VyLXdyaXR0ZW4gcmVuZGVyIGZ1bmN0aW9ucy5cbiAgdm0uJGNyZWF0ZUVsZW1lbnQgPSBmdW5jdGlvbiAoYSwgYiwgYywgZCkgeyByZXR1cm4gY3JlYXRlRWxlbWVudCh2bSwgYSwgYiwgYywgZCwgdHJ1ZSk7IH07XG5cbiAgLy8gJGF0dHJzICYgJGxpc3RlbmVycyBhcmUgZXhwb3NlZCBmb3IgZWFzaWVyIEhPQyBjcmVhdGlvbi5cbiAgLy8gdGhleSBuZWVkIHRvIGJlIHJlYWN0aXZlIHNvIHRoYXQgSE9DcyB1c2luZyB0aGVtIGFyZSBhbHdheXMgdXBkYXRlZFxuICB2YXIgcGFyZW50RGF0YSA9IHBhcmVudFZub2RlICYmIHBhcmVudFZub2RlLmRhdGE7XG5cbiAgLyogaXN0YW5idWwgaWdub3JlIGVsc2UgKi9cbiAgaWYgKHByb2Nlc3MuZW52Lk5PREVfRU5WICE9PSAncHJvZHVjdGlvbicpIHtcbiAgICBkZWZpbmVSZWFjdGl2ZSQkMSh2bSwgJyRhdHRycycsIHBhcmVudERhdGEgJiYgcGFyZW50RGF0YS5hdHRycyB8fCBlbXB0eU9iamVjdCwgZnVuY3Rpb24gKCkge1xuICAgICAgIWlzVXBkYXRpbmdDaGlsZENvbXBvbmVudCAmJiB3YXJuKFwiJGF0dHJzIGlzIHJlYWRvbmx5LlwiLCB2bSk7XG4gICAgfSwgdHJ1ZSk7XG4gICAgZGVmaW5lUmVhY3RpdmUkJDEodm0sICckbGlzdGVuZXJzJywgb3B0aW9ucy5fcGFyZW50TGlzdGVuZXJzIHx8IGVtcHR5T2JqZWN0LCBmdW5jdGlvbiAoKSB7XG4gICAgICAhaXNVcGRhdGluZ0NoaWxkQ29tcG9uZW50ICYmIHdhcm4oXCIkbGlzdGVuZXJzIGlzIHJlYWRvbmx5LlwiLCB2bSk7XG4gICAgfSwgdHJ1ZSk7XG4gIH0gZWxzZSB7XG4gICAgZGVmaW5lUmVhY3RpdmUkJDEodm0sICckYXR0cnMnLCBwYXJlbnREYXRhICYmIHBhcmVudERhdGEuYXR0cnMgfHwgZW1wdHlPYmplY3QsIG51bGwsIHRydWUpO1xuICAgIGRlZmluZVJlYWN0aXZlJCQxKHZtLCAnJGxpc3RlbmVycycsIG9wdGlvbnMuX3BhcmVudExpc3RlbmVycyB8fCBlbXB0eU9iamVjdCwgbnVsbCwgdHJ1ZSk7XG4gIH1cbn1cblxudmFyIGN1cnJlbnRSZW5kZXJpbmdJbnN0YW5jZSA9IG51bGw7XG5cbmZ1bmN0aW9uIHJlbmRlck1peGluIChWdWUpIHtcbiAgLy8gaW5zdGFsbCBydW50aW1lIGNvbnZlbmllbmNlIGhlbHBlcnNcbiAgaW5zdGFsbFJlbmRlckhlbHBlcnMoVnVlLnByb3RvdHlwZSk7XG5cbiAgVnVlLnByb3RvdHlwZS4kbmV4dFRpY2sgPSBmdW5jdGlvbiAoZm4pIHtcbiAgICByZXR1cm4gbmV4dFRpY2soZm4sIHRoaXMpXG4gIH07XG5cbiAgVnVlLnByb3RvdHlwZS5fcmVuZGVyID0gZnVuY3Rpb24gKCkge1xuICAgIHZhciB2bSA9IHRoaXM7XG4gICAgdmFyIHJlZiA9IHZtLiRvcHRpb25zO1xuICAgIHZhciByZW5kZXIgPSByZWYucmVuZGVyO1xuICAgIHZhciBfcGFyZW50Vm5vZGUgPSByZWYuX3BhcmVudFZub2RlO1xuXG4gICAgaWYgKF9wYXJlbnRWbm9kZSkge1xuICAgICAgdm0uJHNjb3BlZFNsb3RzID0gbm9ybWFsaXplU2NvcGVkU2xvdHMoXG4gICAgICAgIF9wYXJlbnRWbm9kZS5kYXRhLnNjb3BlZFNsb3RzLFxuICAgICAgICB2bS4kc2xvdHMsXG4gICAgICAgIHZtLiRzY29wZWRTbG90c1xuICAgICAgKTtcbiAgICB9XG5cbiAgICAvLyBzZXQgcGFyZW50IHZub2RlLiB0aGlzIGFsbG93cyByZW5kZXIgZnVuY3Rpb25zIHRvIGhhdmUgYWNjZXNzXG4gICAgLy8gdG8gdGhlIGRhdGEgb24gdGhlIHBsYWNlaG9sZGVyIG5vZGUuXG4gICAgdm0uJHZub2RlID0gX3BhcmVudFZub2RlO1xuICAgIC8vIHJlbmRlciBzZWxmXG4gICAgdmFyIHZub2RlO1xuICAgIHRyeSB7XG4gICAgICAvLyBUaGVyZSdzIG5vIG5lZWQgdG8gbWFpbnRhaW4gYSBzdGFjayBiZWNhdXNlIGFsbCByZW5kZXIgZm5zIGFyZSBjYWxsZWRcbiAgICAgIC8vIHNlcGFyYXRlbHkgZnJvbSBvbmUgYW5vdGhlci4gTmVzdGVkIGNvbXBvbmVudCdzIHJlbmRlciBmbnMgYXJlIGNhbGxlZFxuICAgICAgLy8gd2hlbiBwYXJlbnQgY29tcG9uZW50IGlzIHBhdGNoZWQuXG4gICAgICBjdXJyZW50UmVuZGVyaW5nSW5zdGFuY2UgPSB2bTtcbiAgICAgIHZub2RlID0gcmVuZGVyLmNhbGwodm0uX3JlbmRlclByb3h5LCB2bS4kY3JlYXRlRWxlbWVudCk7XG4gICAgfSBjYXRjaCAoZSkge1xuICAgICAgaGFuZGxlRXJyb3IoZSwgdm0sIFwicmVuZGVyXCIpO1xuICAgICAgLy8gcmV0dXJuIGVycm9yIHJlbmRlciByZXN1bHQsXG4gICAgICAvLyBvciBwcmV2aW91cyB2bm9kZSB0byBwcmV2ZW50IHJlbmRlciBlcnJvciBjYXVzaW5nIGJsYW5rIGNvbXBvbmVudFxuICAgICAgLyogaXN0YW5idWwgaWdub3JlIGVsc2UgKi9cbiAgICAgIGlmIChwcm9jZXNzLmVudi5OT0RFX0VOViAhPT0gJ3Byb2R1Y3Rpb24nICYmIHZtLiRvcHRpb25zLnJlbmRlckVycm9yKSB7XG4gICAgICAgIHRyeSB7XG4gICAgICAgICAgdm5vZGUgPSB2bS4kb3B0aW9ucy5yZW5kZXJFcnJvci5jYWxsKHZtLl9yZW5kZXJQcm94eSwgdm0uJGNyZWF0ZUVsZW1lbnQsIGUpO1xuICAgICAgICB9IGNhdGNoIChlKSB7XG4gICAgICAgICAgaGFuZGxlRXJyb3IoZSwgdm0sIFwicmVuZGVyRXJyb3JcIik7XG4gICAgICAgICAgdm5vZGUgPSB2bS5fdm5vZGU7XG4gICAgICAgIH1cbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIHZub2RlID0gdm0uX3Zub2RlO1xuICAgICAgfVxuICAgIH0gZmluYWxseSB7XG4gICAgICBjdXJyZW50UmVuZGVyaW5nSW5zdGFuY2UgPSBudWxsO1xuICAgIH1cbiAgICAvLyBpZiB0aGUgcmV0dXJuZWQgYXJyYXkgY29udGFpbnMgb25seSBhIHNpbmdsZSBub2RlLCBhbGxvdyBpdFxuICAgIGlmIChBcnJheS5pc0FycmF5KHZub2RlKSAmJiB2bm9kZS5sZW5ndGggPT09IDEpIHtcbiAgICAgIHZub2RlID0gdm5vZGVbMF07XG4gICAgfVxuICAgIC8vIHJldHVybiBlbXB0eSB2bm9kZSBpbiBjYXNlIHRoZSByZW5kZXIgZnVuY3Rpb24gZXJyb3JlZCBvdXRcbiAgICBpZiAoISh2bm9kZSBpbnN0YW5jZW9mIFZOb2RlKSkge1xuICAgICAgaWYgKHByb2Nlc3MuZW52Lk5PREVfRU5WICE9PSAncHJvZHVjdGlvbicgJiYgQXJyYXkuaXNBcnJheSh2bm9kZSkpIHtcbiAgICAgICAgd2FybihcbiAgICAgICAgICAnTXVsdGlwbGUgcm9vdCBub2RlcyByZXR1cm5lZCBmcm9tIHJlbmRlciBmdW5jdGlvbi4gUmVuZGVyIGZ1bmN0aW9uICcgK1xuICAgICAgICAgICdzaG91bGQgcmV0dXJuIGEgc2luZ2xlIHJvb3Qgbm9kZS4nLFxuICAgICAgICAgIHZtXG4gICAgICAgICk7XG4gICAgICB9XG4gICAgICB2bm9kZSA9IGNyZWF0ZUVtcHR5Vk5vZGUoKTtcbiAgICB9XG4gICAgLy8gc2V0IHBhcmVudFxuICAgIHZub2RlLnBhcmVudCA9IF9wYXJlbnRWbm9kZTtcbiAgICByZXR1cm4gdm5vZGVcbiAgfTtcbn1cblxuLyogICovXG5cbmZ1bmN0aW9uIGVuc3VyZUN0b3IgKGNvbXAsIGJhc2UpIHtcbiAgaWYgKFxuICAgIGNvbXAuX19lc01vZHVsZSB8fFxuICAgIChoYXNTeW1ib2wgJiYgY29tcFtTeW1ib2wudG9TdHJpbmdUYWddID09PSAnTW9kdWxlJylcbiAgKSB7XG4gICAgY29tcCA9IGNvbXAuZGVmYXVsdDtcbiAgfVxuICByZXR1cm4gaXNPYmplY3QoY29tcClcbiAgICA/IGJhc2UuZXh0ZW5kKGNvbXApXG4gICAgOiBjb21wXG59XG5cbmZ1bmN0aW9uIGNyZWF0ZUFzeW5jUGxhY2Vob2xkZXIgKFxuICBmYWN0b3J5LFxuICBkYXRhLFxuICBjb250ZXh0LFxuICBjaGlsZHJlbixcbiAgdGFnXG4pIHtcbiAgdmFyIG5vZGUgPSBjcmVhdGVFbXB0eVZOb2RlKCk7XG4gIG5vZGUuYXN5bmNGYWN0b3J5ID0gZmFjdG9yeTtcbiAgbm9kZS5hc3luY01ldGEgPSB7IGRhdGE6IGRhdGEsIGNvbnRleHQ6IGNvbnRleHQsIGNoaWxkcmVuOiBjaGlsZHJlbiwgdGFnOiB0YWcgfTtcbiAgcmV0dXJuIG5vZGVcbn1cblxuZnVuY3Rpb24gcmVzb2x2ZUFzeW5jQ29tcG9uZW50IChcbiAgZmFjdG9yeSxcbiAgYmFzZUN0b3Jcbikge1xuICBpZiAoaXNUcnVlKGZhY3RvcnkuZXJyb3IpICYmIGlzRGVmKGZhY3RvcnkuZXJyb3JDb21wKSkge1xuICAgIHJldHVybiBmYWN0b3J5LmVycm9yQ29tcFxuICB9XG5cbiAgaWYgKGlzRGVmKGZhY3RvcnkucmVzb2x2ZWQpKSB7XG4gICAgcmV0dXJuIGZhY3RvcnkucmVzb2x2ZWRcbiAgfVxuXG4gIHZhciBvd25lciA9IGN1cnJlbnRSZW5kZXJpbmdJbnN0YW5jZTtcbiAgaWYgKG93bmVyICYmIGlzRGVmKGZhY3Rvcnkub3duZXJzKSAmJiBmYWN0b3J5Lm93bmVycy5pbmRleE9mKG93bmVyKSA9PT0gLTEpIHtcbiAgICAvLyBhbHJlYWR5IHBlbmRpbmdcbiAgICBmYWN0b3J5Lm93bmVycy5wdXNoKG93bmVyKTtcbiAgfVxuXG4gIGlmIChpc1RydWUoZmFjdG9yeS5sb2FkaW5nKSAmJiBpc0RlZihmYWN0b3J5LmxvYWRpbmdDb21wKSkge1xuICAgIHJldHVybiBmYWN0b3J5LmxvYWRpbmdDb21wXG4gIH1cblxuICBpZiAob3duZXIgJiYgIWlzRGVmKGZhY3Rvcnkub3duZXJzKSkge1xuICAgIHZhciBvd25lcnMgPSBmYWN0b3J5Lm93bmVycyA9IFtvd25lcl07XG4gICAgdmFyIHN5bmMgPSB0cnVlO1xuICAgIHZhciB0aW1lckxvYWRpbmcgPSBudWxsO1xuICAgIHZhciB0aW1lclRpbWVvdXQgPSBudWxsXG5cbiAgICA7KG93bmVyKS4kb24oJ2hvb2s6ZGVzdHJveWVkJywgZnVuY3Rpb24gKCkgeyByZXR1cm4gcmVtb3ZlKG93bmVycywgb3duZXIpOyB9KTtcblxuICAgIHZhciBmb3JjZVJlbmRlciA9IGZ1bmN0aW9uIChyZW5kZXJDb21wbGV0ZWQpIHtcbiAgICAgIGZvciAodmFyIGkgPSAwLCBsID0gb3duZXJzLmxlbmd0aDsgaSA8IGw7IGkrKykge1xuICAgICAgICAob3duZXJzW2ldKS4kZm9yY2VVcGRhdGUoKTtcbiAgICAgIH1cblxuICAgICAgaWYgKHJlbmRlckNvbXBsZXRlZCkge1xuICAgICAgICBvd25lcnMubGVuZ3RoID0gMDtcbiAgICAgICAgaWYgKHRpbWVyTG9hZGluZyAhPT0gbnVsbCkge1xuICAgICAgICAgIGNsZWFyVGltZW91dCh0aW1lckxvYWRpbmcpO1xuICAgICAgICAgIHRpbWVyTG9hZGluZyA9IG51bGw7XG4gICAgICAgIH1cbiAgICAgICAgaWYgKHRpbWVyVGltZW91dCAhPT0gbnVsbCkge1xuICAgICAgICAgIGNsZWFyVGltZW91dCh0aW1lclRpbWVvdXQpO1xuICAgICAgICAgIHRpbWVyVGltZW91dCA9IG51bGw7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICB9O1xuXG4gICAgdmFyIHJlc29sdmUgPSBvbmNlKGZ1bmN0aW9uIChyZXMpIHtcbiAgICAgIC8vIGNhY2hlIHJlc29sdmVkXG4gICAgICBmYWN0b3J5LnJlc29sdmVkID0gZW5zdXJlQ3RvcihyZXMsIGJhc2VDdG9yKTtcbiAgICAgIC8vIGludm9rZSBjYWxsYmFja3Mgb25seSBpZiB0aGlzIGlzIG5vdCBhIHN5bmNocm9ub3VzIHJlc29sdmVcbiAgICAgIC8vIChhc3luYyByZXNvbHZlcyBhcmUgc2hpbW1lZCBhcyBzeW5jaHJvbm91cyBkdXJpbmcgU1NSKVxuICAgICAgaWYgKCFzeW5jKSB7XG4gICAgICAgIGZvcmNlUmVuZGVyKHRydWUpO1xuICAgICAgfSBlbHNlIHtcbiAgICAgICAgb3duZXJzLmxlbmd0aCA9IDA7XG4gICAgICB9XG4gICAgfSk7XG5cbiAgICB2YXIgcmVqZWN0ID0gb25jZShmdW5jdGlvbiAocmVhc29uKSB7XG4gICAgICBwcm9jZXNzLmVudi5OT0RFX0VOViAhPT0gJ3Byb2R1Y3Rpb24nICYmIHdhcm4oXG4gICAgICAgIFwiRmFpbGVkIHRvIHJlc29sdmUgYXN5bmMgY29tcG9uZW50OiBcIiArIChTdHJpbmcoZmFjdG9yeSkpICtcbiAgICAgICAgKHJlYXNvbiA/IChcIlxcblJlYXNvbjogXCIgKyByZWFzb24pIDogJycpXG4gICAgICApO1xuICAgICAgaWYgKGlzRGVmKGZhY3RvcnkuZXJyb3JDb21wKSkge1xuICAgICAgICBmYWN0b3J5LmVycm9yID0gdHJ1ZTtcbiAgICAgICAgZm9yY2VSZW5kZXIodHJ1ZSk7XG4gICAgICB9XG4gICAgfSk7XG5cbiAgICB2YXIgcmVzID0gZmFjdG9yeShyZXNvbHZlLCByZWplY3QpO1xuXG4gICAgaWYgKGlzT2JqZWN0KHJlcykpIHtcbiAgICAgIGlmIChpc1Byb21pc2UocmVzKSkge1xuICAgICAgICAvLyAoKSA9PiBQcm9taXNlXG4gICAgICAgIGlmIChpc1VuZGVmKGZhY3RvcnkucmVzb2x2ZWQpKSB7XG4gICAgICAgICAgcmVzLnRoZW4ocmVzb2x2ZSwgcmVqZWN0KTtcbiAgICAgICAgfVxuICAgICAgfSBlbHNlIGlmIChpc1Byb21pc2UocmVzLmNvbXBvbmVudCkpIHtcbiAgICAgICAgcmVzLmNvbXBvbmVudC50aGVuKHJlc29sdmUsIHJlamVjdCk7XG5cbiAgICAgICAgaWYgKGlzRGVmKHJlcy5lcnJvcikpIHtcbiAgICAgICAgICBmYWN0b3J5LmVycm9yQ29tcCA9IGVuc3VyZUN0b3IocmVzLmVycm9yLCBiYXNlQ3Rvcik7XG4gICAgICAgIH1cblxuICAgICAgICBpZiAoaXNEZWYocmVzLmxvYWRpbmcpKSB7XG4gICAgICAgICAgZmFjdG9yeS5sb2FkaW5nQ29tcCA9IGVuc3VyZUN0b3IocmVzLmxvYWRpbmcsIGJhc2VDdG9yKTtcbiAgICAgICAgICBpZiAocmVzLmRlbGF5ID09PSAwKSB7XG4gICAgICAgICAgICBmYWN0b3J5LmxvYWRpbmcgPSB0cnVlO1xuICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICB0aW1lckxvYWRpbmcgPSBzZXRUaW1lb3V0KGZ1bmN0aW9uICgpIHtcbiAgICAgICAgICAgICAgdGltZXJMb2FkaW5nID0gbnVsbDtcbiAgICAgICAgICAgICAgaWYgKGlzVW5kZWYoZmFjdG9yeS5yZXNvbHZlZCkgJiYgaXNVbmRlZihmYWN0b3J5LmVycm9yKSkge1xuICAgICAgICAgICAgICAgIGZhY3RvcnkubG9hZGluZyA9IHRydWU7XG4gICAgICAgICAgICAgICAgZm9yY2VSZW5kZXIoZmFsc2UpO1xuICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9LCByZXMuZGVsYXkgfHwgMjAwKTtcbiAgICAgICAgICB9XG4gICAgICAgIH1cblxuICAgICAgICBpZiAoaXNEZWYocmVzLnRpbWVvdXQpKSB7XG4gICAgICAgICAgdGltZXJUaW1lb3V0ID0gc2V0VGltZW91dChmdW5jdGlvbiAoKSB7XG4gICAgICAgICAgICB0aW1lclRpbWVvdXQgPSBudWxsO1xuICAgICAgICAgICAgaWYgKGlzVW5kZWYoZmFjdG9yeS5yZXNvbHZlZCkpIHtcbiAgICAgICAgICAgICAgcmVqZWN0KFxuICAgICAgICAgICAgICAgIHByb2Nlc3MuZW52Lk5PREVfRU5WICE9PSAncHJvZHVjdGlvbidcbiAgICAgICAgICAgICAgICAgID8gKFwidGltZW91dCAoXCIgKyAocmVzLnRpbWVvdXQpICsgXCJtcylcIilcbiAgICAgICAgICAgICAgICAgIDogbnVsbFxuICAgICAgICAgICAgICApO1xuICAgICAgICAgICAgfVxuICAgICAgICAgIH0sIHJlcy50aW1lb3V0KTtcbiAgICAgICAgfVxuICAgICAgfVxuICAgIH1cblxuICAgIHN5bmMgPSBmYWxzZTtcbiAgICAvLyByZXR1cm4gaW4gY2FzZSByZXNvbHZlZCBzeW5jaHJvbm91c2x5XG4gICAgcmV0dXJuIGZhY3RvcnkubG9hZGluZ1xuICAgICAgPyBmYWN0b3J5LmxvYWRpbmdDb21wXG4gICAgICA6IGZhY3RvcnkucmVzb2x2ZWRcbiAgfVxufVxuXG4vKiAgKi9cblxuZnVuY3Rpb24gaXNBc3luY1BsYWNlaG9sZGVyIChub2RlKSB7XG4gIHJldHVybiBub2RlLmlzQ29tbWVudCAmJiBub2RlLmFzeW5jRmFjdG9yeVxufVxuXG4vKiAgKi9cblxuZnVuY3Rpb24gZ2V0Rmlyc3RDb21wb25lbnRDaGlsZCAoY2hpbGRyZW4pIHtcbiAgaWYgKEFycmF5LmlzQXJyYXkoY2hpbGRyZW4pKSB7XG4gICAgZm9yICh2YXIgaSA9IDA7IGkgPCBjaGlsZHJlbi5sZW5ndGg7IGkrKykge1xuICAgICAgdmFyIGMgPSBjaGlsZHJlbltpXTtcbiAgICAgIGlmIChpc0RlZihjKSAmJiAoaXNEZWYoYy5jb21wb25lbnRPcHRpb25zKSB8fCBpc0FzeW5jUGxhY2Vob2xkZXIoYykpKSB7XG4gICAgICAgIHJldHVybiBjXG4gICAgICB9XG4gICAgfVxuICB9XG59XG5cbi8qICAqL1xuXG4vKiAgKi9cblxuZnVuY3Rpb24gaW5pdEV2ZW50cyAodm0pIHtcbiAgdm0uX2V2ZW50cyA9IE9iamVjdC5jcmVhdGUobnVsbCk7XG4gIHZtLl9oYXNIb29rRXZlbnQgPSBmYWxzZTtcbiAgLy8gaW5pdCBwYXJlbnQgYXR0YWNoZWQgZXZlbnRzXG4gIHZhciBsaXN0ZW5lcnMgPSB2bS4kb3B0aW9ucy5fcGFyZW50TGlzdGVuZXJzO1xuICBpZiAobGlzdGVuZXJzKSB7XG4gICAgdXBkYXRlQ29tcG9uZW50TGlzdGVuZXJzKHZtLCBsaXN0ZW5lcnMpO1xuICB9XG59XG5cbnZhciB0YXJnZXQ7XG5cbmZ1bmN0aW9uIGFkZCAoZXZlbnQsIGZuKSB7XG4gIHRhcmdldC4kb24oZXZlbnQsIGZuKTtcbn1cblxuZnVuY3Rpb24gcmVtb3ZlJDEgKGV2ZW50LCBmbikge1xuICB0YXJnZXQuJG9mZihldmVudCwgZm4pO1xufVxuXG5mdW5jdGlvbiBjcmVhdGVPbmNlSGFuZGxlciAoZXZlbnQsIGZuKSB7XG4gIHZhciBfdGFyZ2V0ID0gdGFyZ2V0O1xuICByZXR1cm4gZnVuY3Rpb24gb25jZUhhbmRsZXIgKCkge1xuICAgIHZhciByZXMgPSBmbi5hcHBseShudWxsLCBhcmd1bWVudHMpO1xuICAgIGlmIChyZXMgIT09IG51bGwpIHtcbiAgICAgIF90YXJnZXQuJG9mZihldmVudCwgb25jZUhhbmRsZXIpO1xuICAgIH1cbiAgfVxufVxuXG5mdW5jdGlvbiB1cGRhdGVDb21wb25lbnRMaXN0ZW5lcnMgKFxuICB2bSxcbiAgbGlzdGVuZXJzLFxuICBvbGRMaXN0ZW5lcnNcbikge1xuICB0YXJnZXQgPSB2bTtcbiAgdXBkYXRlTGlzdGVuZXJzKGxpc3RlbmVycywgb2xkTGlzdGVuZXJzIHx8IHt9LCBhZGQsIHJlbW92ZSQxLCBjcmVhdGVPbmNlSGFuZGxlciwgdm0pO1xuICB0YXJnZXQgPSB1bmRlZmluZWQ7XG59XG5cbmZ1bmN0aW9uIGV2ZW50c01peGluIChWdWUpIHtcbiAgdmFyIGhvb2tSRSA9IC9eaG9vazovO1xuICBWdWUucHJvdG90eXBlLiRvbiA9IGZ1bmN0aW9uIChldmVudCwgZm4pIHtcbiAgICB2YXIgdm0gPSB0aGlzO1xuICAgIGlmIChBcnJheS5pc0FycmF5KGV2ZW50KSkge1xuICAgICAgZm9yICh2YXIgaSA9IDAsIGwgPSBldmVudC5sZW5ndGg7IGkgPCBsOyBpKyspIHtcbiAgICAgICAgdm0uJG9uKGV2ZW50W2ldLCBmbik7XG4gICAgICB9XG4gICAgfSBlbHNlIHtcbiAgICAgICh2bS5fZXZlbnRzW2V2ZW50XSB8fCAodm0uX2V2ZW50c1tldmVudF0gPSBbXSkpLnB1c2goZm4pO1xuICAgICAgLy8gb3B0aW1pemUgaG9vazpldmVudCBjb3N0IGJ5IHVzaW5nIGEgYm9vbGVhbiBmbGFnIG1hcmtlZCBhdCByZWdpc3RyYXRpb25cbiAgICAgIC8vIGluc3RlYWQgb2YgYSBoYXNoIGxvb2t1cFxuICAgICAgaWYgKGhvb2tSRS50ZXN0KGV2ZW50KSkge1xuICAgICAgICB2bS5faGFzSG9va0V2ZW50ID0gdHJ1ZTtcbiAgICAgIH1cbiAgICB9XG4gICAgcmV0dXJuIHZtXG4gIH07XG5cbiAgVnVlLnByb3RvdHlwZS4kb25jZSA9IGZ1bmN0aW9uIChldmVudCwgZm4pIHtcbiAgICB2YXIgdm0gPSB0aGlzO1xuICAgIGZ1bmN0aW9uIG9uICgpIHtcbiAgICAgIHZtLiRvZmYoZXZlbnQsIG9uKTtcbiAgICAgIGZuLmFwcGx5KHZtLCBhcmd1bWVudHMpO1xuICAgIH1cbiAgICBvbi5mbiA9IGZuO1xuICAgIHZtLiRvbihldmVudCwgb24pO1xuICAgIHJldHVybiB2bVxuICB9O1xuXG4gIFZ1ZS5wcm90b3R5cGUuJG9mZiA9IGZ1bmN0aW9uIChldmVudCwgZm4pIHtcbiAgICB2YXIgdm0gPSB0aGlzO1xuICAgIC8vIGFsbFxuICAgIGlmICghYXJndW1lbnRzLmxlbmd0aCkge1xuICAgICAgdm0uX2V2ZW50cyA9IE9iamVjdC5jcmVhdGUobnVsbCk7XG4gICAgICByZXR1cm4gdm1cbiAgICB9XG4gICAgLy8gYXJyYXkgb2YgZXZlbnRzXG4gICAgaWYgKEFycmF5LmlzQXJyYXkoZXZlbnQpKSB7XG4gICAgICBmb3IgKHZhciBpJDEgPSAwLCBsID0gZXZlbnQubGVuZ3RoOyBpJDEgPCBsOyBpJDErKykge1xuICAgICAgICB2bS4kb2ZmKGV2ZW50W2kkMV0sIGZuKTtcbiAgICAgIH1cbiAgICAgIHJldHVybiB2bVxuICAgIH1cbiAgICAvLyBzcGVjaWZpYyBldmVudFxuICAgIHZhciBjYnMgPSB2bS5fZXZlbnRzW2V2ZW50XTtcbiAgICBpZiAoIWNicykge1xuICAgICAgcmV0dXJuIHZtXG4gICAgfVxuICAgIGlmICghZm4pIHtcbiAgICAgIHZtLl9ldmVudHNbZXZlbnRdID0gbnVsbDtcbiAgICAgIHJldHVybiB2bVxuICAgIH1cbiAgICAvLyBzcGVjaWZpYyBoYW5kbGVyXG4gICAgdmFyIGNiO1xuICAgIHZhciBpID0gY2JzLmxlbmd0aDtcbiAgICB3aGlsZSAoaS0tKSB7XG4gICAgICBjYiA9IGNic1tpXTtcbiAgICAgIGlmIChjYiA9PT0gZm4gfHwgY2IuZm4gPT09IGZuKSB7XG4gICAgICAgIGNicy5zcGxpY2UoaSwgMSk7XG4gICAgICAgIGJyZWFrXG4gICAgICB9XG4gICAgfVxuICAgIHJldHVybiB2bVxuICB9O1xuXG4gIFZ1ZS5wcm90b3R5cGUuJGVtaXQgPSBmdW5jdGlvbiAoZXZlbnQpIHtcbiAgICB2YXIgdm0gPSB0aGlzO1xuICAgIGlmIChwcm9jZXNzLmVudi5OT0RFX0VOViAhPT0gJ3Byb2R1Y3Rpb24nKSB7XG4gICAgICB2YXIgbG93ZXJDYXNlRXZlbnQgPSBldmVudC50b0xvd2VyQ2FzZSgpO1xuICAgICAgaWYgKGxvd2VyQ2FzZUV2ZW50ICE9PSBldmVudCAmJiB2bS5fZXZlbnRzW2xvd2VyQ2FzZUV2ZW50XSkge1xuICAgICAgICB0aXAoXG4gICAgICAgICAgXCJFdmVudCBcXFwiXCIgKyBsb3dlckNhc2VFdmVudCArIFwiXFxcIiBpcyBlbWl0dGVkIGluIGNvbXBvbmVudCBcIiArXG4gICAgICAgICAgKGZvcm1hdENvbXBvbmVudE5hbWUodm0pKSArIFwiIGJ1dCB0aGUgaGFuZGxlciBpcyByZWdpc3RlcmVkIGZvciBcXFwiXCIgKyBldmVudCArIFwiXFxcIi4gXCIgK1xuICAgICAgICAgIFwiTm90ZSB0aGF0IEhUTUwgYXR0cmlidXRlcyBhcmUgY2FzZS1pbnNlbnNpdGl2ZSBhbmQgeW91IGNhbm5vdCB1c2UgXCIgK1xuICAgICAgICAgIFwidi1vbiB0byBsaXN0ZW4gdG8gY2FtZWxDYXNlIGV2ZW50cyB3aGVuIHVzaW5nIGluLURPTSB0ZW1wbGF0ZXMuIFwiICtcbiAgICAgICAgICBcIllvdSBzaG91bGQgcHJvYmFibHkgdXNlIFxcXCJcIiArIChoeXBoZW5hdGUoZXZlbnQpKSArIFwiXFxcIiBpbnN0ZWFkIG9mIFxcXCJcIiArIGV2ZW50ICsgXCJcXFwiLlwiXG4gICAgICAgICk7XG4gICAgICB9XG4gICAgfVxuICAgIHZhciBjYnMgPSB2bS5fZXZlbnRzW2V2ZW50XTtcbiAgICBpZiAoY2JzKSB7XG4gICAgICBjYnMgPSBjYnMubGVuZ3RoID4gMSA/IHRvQXJyYXkoY2JzKSA6IGNicztcbiAgICAgIHZhciBhcmdzID0gdG9BcnJheShhcmd1bWVudHMsIDEpO1xuICAgICAgdmFyIGluZm8gPSBcImV2ZW50IGhhbmRsZXIgZm9yIFxcXCJcIiArIGV2ZW50ICsgXCJcXFwiXCI7XG4gICAgICBmb3IgKHZhciBpID0gMCwgbCA9IGNicy5sZW5ndGg7IGkgPCBsOyBpKyspIHtcbiAgICAgICAgaW52b2tlV2l0aEVycm9ySGFuZGxpbmcoY2JzW2ldLCB2bSwgYXJncywgdm0sIGluZm8pO1xuICAgICAgfVxuICAgIH1cbiAgICByZXR1cm4gdm1cbiAgfTtcbn1cblxuLyogICovXG5cbnZhciBhY3RpdmVJbnN0YW5jZSA9IG51bGw7XG52YXIgaXNVcGRhdGluZ0NoaWxkQ29tcG9uZW50ID0gZmFsc2U7XG5cbmZ1bmN0aW9uIHNldEFjdGl2ZUluc3RhbmNlKHZtKSB7XG4gIHZhciBwcmV2QWN0aXZlSW5zdGFuY2UgPSBhY3RpdmVJbnN0YW5jZTtcbiAgYWN0aXZlSW5zdGFuY2UgPSB2bTtcbiAgcmV0dXJuIGZ1bmN0aW9uICgpIHtcbiAgICBhY3RpdmVJbnN0YW5jZSA9IHByZXZBY3RpdmVJbnN0YW5jZTtcbiAgfVxufVxuXG5mdW5jdGlvbiBpbml0TGlmZWN5Y2xlICh2bSkge1xuICB2YXIgb3B0aW9ucyA9IHZtLiRvcHRpb25zO1xuXG4gIC8vIGxvY2F0ZSBmaXJzdCBub24tYWJzdHJhY3QgcGFyZW50XG4gIHZhciBwYXJlbnQgPSBvcHRpb25zLnBhcmVudDtcbiAgaWYgKHBhcmVudCAmJiAhb3B0aW9ucy5hYnN0cmFjdCkge1xuICAgIHdoaWxlIChwYXJlbnQuJG9wdGlvbnMuYWJzdHJhY3QgJiYgcGFyZW50LiRwYXJlbnQpIHtcbiAgICAgIHBhcmVudCA9IHBhcmVudC4kcGFyZW50O1xuICAgIH1cbiAgICBwYXJlbnQuJGNoaWxkcmVuLnB1c2godm0pO1xuICB9XG5cbiAgdm0uJHBhcmVudCA9IHBhcmVudDtcbiAgdm0uJHJvb3QgPSBwYXJlbnQgPyBwYXJlbnQuJHJvb3QgOiB2bTtcblxuICB2bS4kY2hpbGRyZW4gPSBbXTtcbiAgdm0uJHJlZnMgPSB7fTtcblxuICB2bS5fd2F0Y2hlciA9IG51bGw7XG4gIHZtLl9pbmFjdGl2ZSA9IG51bGw7XG4gIHZtLl9kaXJlY3RJbmFjdGl2ZSA9IGZhbHNlO1xuICB2bS5faXNNb3VudGVkID0gZmFsc2U7XG4gIHZtLl9pc0Rlc3Ryb3llZCA9IGZhbHNlO1xuICB2bS5faXNCZWluZ0Rlc3Ryb3llZCA9IGZhbHNlO1xufVxuXG5mdW5jdGlvbiBsaWZlY3ljbGVNaXhpbiAoVnVlKSB7XG4gIFZ1ZS5wcm90b3R5cGUuX3VwZGF0ZSA9IGZ1bmN0aW9uICh2bm9kZSwgaHlkcmF0aW5nKSB7XG4gICAgdmFyIHZtID0gdGhpcztcbiAgICB2YXIgcHJldkVsID0gdm0uJGVsO1xuICAgIHZhciBwcmV2Vm5vZGUgPSB2bS5fdm5vZGU7XG4gICAgdmFyIHJlc3RvcmVBY3RpdmVJbnN0YW5jZSA9IHNldEFjdGl2ZUluc3RhbmNlKHZtKTtcbiAgICB2bS5fdm5vZGUgPSB2bm9kZTtcbiAgICAvLyBWdWUucHJvdG90eXBlLl9fcGF0Y2hfXyBpcyBpbmplY3RlZCBpbiBlbnRyeSBwb2ludHNcbiAgICAvLyBiYXNlZCBvbiB0aGUgcmVuZGVyaW5nIGJhY2tlbmQgdXNlZC5cbiAgICBpZiAoIXByZXZWbm9kZSkge1xuICAgICAgLy8gaW5pdGlhbCByZW5kZXJcbiAgICAgIHZtLiRlbCA9IHZtLl9fcGF0Y2hfXyh2bS4kZWwsIHZub2RlLCBoeWRyYXRpbmcsIGZhbHNlIC8qIHJlbW92ZU9ubHkgKi8pO1xuICAgIH0gZWxzZSB7XG4gICAgICAvLyB1cGRhdGVzXG4gICAgICB2bS4kZWwgPSB2bS5fX3BhdGNoX18ocHJldlZub2RlLCB2bm9kZSk7XG4gICAgfVxuICAgIHJlc3RvcmVBY3RpdmVJbnN0YW5jZSgpO1xuICAgIC8vIHVwZGF0ZSBfX3Z1ZV9fIHJlZmVyZW5jZVxuICAgIGlmIChwcmV2RWwpIHtcbiAgICAgIHByZXZFbC5fX3Z1ZV9fID0gbnVsbDtcbiAgICB9XG4gICAgaWYgKHZtLiRlbCkge1xuICAgICAgdm0uJGVsLl9fdnVlX18gPSB2bTtcbiAgICB9XG4gICAgLy8gaWYgcGFyZW50IGlzIGFuIEhPQywgdXBkYXRlIGl0cyAkZWwgYXMgd2VsbFxuICAgIGlmICh2bS4kdm5vZGUgJiYgdm0uJHBhcmVudCAmJiB2bS4kdm5vZGUgPT09IHZtLiRwYXJlbnQuX3Zub2RlKSB7XG4gICAgICB2bS4kcGFyZW50LiRlbCA9IHZtLiRlbDtcbiAgICB9XG4gICAgLy8gdXBkYXRlZCBob29rIGlzIGNhbGxlZCBieSB0aGUgc2NoZWR1bGVyIHRvIGVuc3VyZSB0aGF0IGNoaWxkcmVuIGFyZVxuICAgIC8vIHVwZGF0ZWQgaW4gYSBwYXJlbnQncyB1cGRhdGVkIGhvb2suXG4gIH07XG5cbiAgVnVlLnByb3RvdHlwZS4kZm9yY2VVcGRhdGUgPSBmdW5jdGlvbiAoKSB7XG4gICAgdmFyIHZtID0gdGhpcztcbiAgICBpZiAodm0uX3dhdGNoZXIpIHtcbiAgICAgIHZtLl93YXRjaGVyLnVwZGF0ZSgpO1xuICAgIH1cbiAgfTtcblxuICBWdWUucHJvdG90eXBlLiRkZXN0cm95ID0gZnVuY3Rpb24gKCkge1xuICAgIHZhciB2bSA9IHRoaXM7XG4gICAgaWYgKHZtLl9pc0JlaW5nRGVzdHJveWVkKSB7XG4gICAgICByZXR1cm5cbiAgICB9XG4gICAgY2FsbEhvb2sodm0sICdiZWZvcmVEZXN0cm95Jyk7XG4gICAgdm0uX2lzQmVpbmdEZXN0cm95ZWQgPSB0cnVlO1xuICAgIC8vIHJlbW92ZSBzZWxmIGZyb20gcGFyZW50XG4gICAgdmFyIHBhcmVudCA9IHZtLiRwYXJlbnQ7XG4gICAgaWYgKHBhcmVudCAmJiAhcGFyZW50Ll9pc0JlaW5nRGVzdHJveWVkICYmICF2bS4kb3B0aW9ucy5hYnN0cmFjdCkge1xuICAgICAgcmVtb3ZlKHBhcmVudC4kY2hpbGRyZW4sIHZtKTtcbiAgICB9XG4gICAgLy8gdGVhcmRvd24gd2F0Y2hlcnNcbiAgICBpZiAodm0uX3dhdGNoZXIpIHtcbiAgICAgIHZtLl93YXRjaGVyLnRlYXJkb3duKCk7XG4gICAgfVxuICAgIHZhciBpID0gdm0uX3dhdGNoZXJzLmxlbmd0aDtcbiAgICB3aGlsZSAoaS0tKSB7XG4gICAgICB2bS5fd2F0Y2hlcnNbaV0udGVhcmRvd24oKTtcbiAgICB9XG4gICAgLy8gcmVtb3ZlIHJlZmVyZW5jZSBmcm9tIGRhdGEgb2JcbiAgICAvLyBmcm96ZW4gb2JqZWN0IG1heSBub3QgaGF2ZSBvYnNlcnZlci5cbiAgICBpZiAodm0uX2RhdGEuX19vYl9fKSB7XG4gICAgICB2bS5fZGF0YS5fX29iX18udm1Db3VudC0tO1xuICAgIH1cbiAgICAvLyBjYWxsIHRoZSBsYXN0IGhvb2suLi5cbiAgICB2bS5faXNEZXN0cm95ZWQgPSB0cnVlO1xuICAgIC8vIGludm9rZSBkZXN0cm95IGhvb2tzIG9uIGN1cnJlbnQgcmVuZGVyZWQgdHJlZVxuICAgIHZtLl9fcGF0Y2hfXyh2bS5fdm5vZGUsIG51bGwpO1xuICAgIC8vIGZpcmUgZGVzdHJveWVkIGhvb2tcbiAgICBjYWxsSG9vayh2bSwgJ2Rlc3Ryb3llZCcpO1xuICAgIC8vIHR1cm4gb2ZmIGFsbCBpbnN0YW5jZSBsaXN0ZW5lcnMuXG4gICAgdm0uJG9mZigpO1xuICAgIC8vIHJlbW92ZSBfX3Z1ZV9fIHJlZmVyZW5jZVxuICAgIGlmICh2bS4kZWwpIHtcbiAgICAgIHZtLiRlbC5fX3Z1ZV9fID0gbnVsbDtcbiAgICB9XG4gICAgLy8gcmVsZWFzZSBjaXJjdWxhciByZWZlcmVuY2UgKCM2NzU5KVxuICAgIGlmICh2bS4kdm5vZGUpIHtcbiAgICAgIHZtLiR2bm9kZS5wYXJlbnQgPSBudWxsO1xuICAgIH1cbiAgfTtcbn1cblxuZnVuY3Rpb24gdXBkYXRlQ2hpbGRDb21wb25lbnQgKFxuICB2bSxcbiAgcHJvcHNEYXRhLFxuICBsaXN0ZW5lcnMsXG4gIHBhcmVudFZub2RlLFxuICByZW5kZXJDaGlsZHJlblxuKSB7XG4gIGlmIChwcm9jZXNzLmVudi5OT0RFX0VOViAhPT0gJ3Byb2R1Y3Rpb24nKSB7XG4gICAgaXNVcGRhdGluZ0NoaWxkQ29tcG9uZW50ID0gdHJ1ZTtcbiAgfVxuXG4gIC8vIGRldGVybWluZSB3aGV0aGVyIGNvbXBvbmVudCBoYXMgc2xvdCBjaGlsZHJlblxuICAvLyB3ZSBuZWVkIHRvIGRvIHRoaXMgYmVmb3JlIG92ZXJ3cml0aW5nICRvcHRpb25zLl9yZW5kZXJDaGlsZHJlbi5cblxuICAvLyBjaGVjayBpZiB0aGVyZSBhcmUgZHluYW1pYyBzY29wZWRTbG90cyAoaGFuZC13cml0dGVuIG9yIGNvbXBpbGVkIGJ1dCB3aXRoXG4gIC8vIGR5bmFtaWMgc2xvdCBuYW1lcykuIFN0YXRpYyBzY29wZWQgc2xvdHMgY29tcGlsZWQgZnJvbSB0ZW1wbGF0ZSBoYXMgdGhlXG4gIC8vIFwiJHN0YWJsZVwiIG1hcmtlci5cbiAgdmFyIG5ld1Njb3BlZFNsb3RzID0gcGFyZW50Vm5vZGUuZGF0YS5zY29wZWRTbG90cztcbiAgdmFyIG9sZFNjb3BlZFNsb3RzID0gdm0uJHNjb3BlZFNsb3RzO1xuICB2YXIgaGFzRHluYW1pY1Njb3BlZFNsb3QgPSAhIShcbiAgICAobmV3U2NvcGVkU2xvdHMgJiYgIW5ld1Njb3BlZFNsb3RzLiRzdGFibGUpIHx8XG4gICAgKG9sZFNjb3BlZFNsb3RzICE9PSBlbXB0eU9iamVjdCAmJiAhb2xkU2NvcGVkU2xvdHMuJHN0YWJsZSkgfHxcbiAgICAobmV3U2NvcGVkU2xvdHMgJiYgdm0uJHNjb3BlZFNsb3RzLiRrZXkgIT09IG5ld1Njb3BlZFNsb3RzLiRrZXkpXG4gICk7XG5cbiAgLy8gQW55IHN0YXRpYyBzbG90IGNoaWxkcmVuIGZyb20gdGhlIHBhcmVudCBtYXkgaGF2ZSBjaGFuZ2VkIGR1cmluZyBwYXJlbnQnc1xuICAvLyB1cGRhdGUuIER5bmFtaWMgc2NvcGVkIHNsb3RzIG1heSBhbHNvIGhhdmUgY2hhbmdlZC4gSW4gc3VjaCBjYXNlcywgYSBmb3JjZWRcbiAgLy8gdXBkYXRlIGlzIG5lY2Vzc2FyeSB0byBlbnN1cmUgY29ycmVjdG5lc3MuXG4gIHZhciBuZWVkc0ZvcmNlVXBkYXRlID0gISEoXG4gICAgcmVuZGVyQ2hpbGRyZW4gfHwgICAgICAgICAgICAgICAvLyBoYXMgbmV3IHN0YXRpYyBzbG90c1xuICAgIHZtLiRvcHRpb25zLl9yZW5kZXJDaGlsZHJlbiB8fCAgLy8gaGFzIG9sZCBzdGF0aWMgc2xvdHNcbiAgICBoYXNEeW5hbWljU2NvcGVkU2xvdFxuICApO1xuXG4gIHZtLiRvcHRpb25zLl9wYXJlbnRWbm9kZSA9IHBhcmVudFZub2RlO1xuICB2bS4kdm5vZGUgPSBwYXJlbnRWbm9kZTsgLy8gdXBkYXRlIHZtJ3MgcGxhY2Vob2xkZXIgbm9kZSB3aXRob3V0IHJlLXJlbmRlclxuXG4gIGlmICh2bS5fdm5vZGUpIHsgLy8gdXBkYXRlIGNoaWxkIHRyZWUncyBwYXJlbnRcbiAgICB2bS5fdm5vZGUucGFyZW50ID0gcGFyZW50Vm5vZGU7XG4gIH1cbiAgdm0uJG9wdGlvbnMuX3JlbmRlckNoaWxkcmVuID0gcmVuZGVyQ2hpbGRyZW47XG5cbiAgLy8gdXBkYXRlICRhdHRycyBhbmQgJGxpc3RlbmVycyBoYXNoXG4gIC8vIHRoZXNlIGFyZSBhbHNvIHJlYWN0aXZlIHNvIHRoZXkgbWF5IHRyaWdnZXIgY2hpbGQgdXBkYXRlIGlmIHRoZSBjaGlsZFxuICAvLyB1c2VkIHRoZW0gZHVyaW5nIHJlbmRlclxuICB2bS4kYXR0cnMgPSBwYXJlbnRWbm9kZS5kYXRhLmF0dHJzIHx8IGVtcHR5T2JqZWN0O1xuICB2bS4kbGlzdGVuZXJzID0gbGlzdGVuZXJzIHx8IGVtcHR5T2JqZWN0O1xuXG4gIC8vIHVwZGF0ZSBwcm9wc1xuICBpZiAocHJvcHNEYXRhICYmIHZtLiRvcHRpb25zLnByb3BzKSB7XG4gICAgdG9nZ2xlT2JzZXJ2aW5nKGZhbHNlKTtcbiAgICB2YXIgcHJvcHMgPSB2bS5fcHJvcHM7XG4gICAgdmFyIHByb3BLZXlzID0gdm0uJG9wdGlvbnMuX3Byb3BLZXlzIHx8IFtdO1xuICAgIGZvciAodmFyIGkgPSAwOyBpIDwgcHJvcEtleXMubGVuZ3RoOyBpKyspIHtcbiAgICAgIHZhciBrZXkgPSBwcm9wS2V5c1tpXTtcbiAgICAgIHZhciBwcm9wT3B0aW9ucyA9IHZtLiRvcHRpb25zLnByb3BzOyAvLyB3dGYgZmxvdz9cbiAgICAgIHByb3BzW2tleV0gPSB2YWxpZGF0ZVByb3Aoa2V5LCBwcm9wT3B0aW9ucywgcHJvcHNEYXRhLCB2bSk7XG4gICAgfVxuICAgIHRvZ2dsZU9ic2VydmluZyh0cnVlKTtcbiAgICAvLyBrZWVwIGEgY29weSBvZiByYXcgcHJvcHNEYXRhXG4gICAgdm0uJG9wdGlvbnMucHJvcHNEYXRhID0gcHJvcHNEYXRhO1xuICB9XG4gIFxuICAvLyBmaXhlZCBieSB4eHh4eHggdXBkYXRlIHByb3BlcnRpZXMobXAgcnVudGltZSlcbiAgdm0uXyR1cGRhdGVQcm9wZXJ0aWVzICYmIHZtLl8kdXBkYXRlUHJvcGVydGllcyh2bSk7XG4gIFxuICAvLyB1cGRhdGUgbGlzdGVuZXJzXG4gIGxpc3RlbmVycyA9IGxpc3RlbmVycyB8fCBlbXB0eU9iamVjdDtcbiAgdmFyIG9sZExpc3RlbmVycyA9IHZtLiRvcHRpb25zLl9wYXJlbnRMaXN0ZW5lcnM7XG4gIHZtLiRvcHRpb25zLl9wYXJlbnRMaXN0ZW5lcnMgPSBsaXN0ZW5lcnM7XG4gIHVwZGF0ZUNvbXBvbmVudExpc3RlbmVycyh2bSwgbGlzdGVuZXJzLCBvbGRMaXN0ZW5lcnMpO1xuXG4gIC8vIHJlc29sdmUgc2xvdHMgKyBmb3JjZSB1cGRhdGUgaWYgaGFzIGNoaWxkcmVuXG4gIGlmIChuZWVkc0ZvcmNlVXBkYXRlKSB7XG4gICAgdm0uJHNsb3RzID0gcmVzb2x2ZVNsb3RzKHJlbmRlckNoaWxkcmVuLCBwYXJlbnRWbm9kZS5jb250ZXh0KTtcbiAgICB2bS4kZm9yY2VVcGRhdGUoKTtcbiAgfVxuXG4gIGlmIChwcm9jZXNzLmVudi5OT0RFX0VOViAhPT0gJ3Byb2R1Y3Rpb24nKSB7XG4gICAgaXNVcGRhdGluZ0NoaWxkQ29tcG9uZW50ID0gZmFsc2U7XG4gIH1cbn1cblxuZnVuY3Rpb24gaXNJbkluYWN0aXZlVHJlZSAodm0pIHtcbiAgd2hpbGUgKHZtICYmICh2bSA9IHZtLiRwYXJlbnQpKSB7XG4gICAgaWYgKHZtLl9pbmFjdGl2ZSkgeyByZXR1cm4gdHJ1ZSB9XG4gIH1cbiAgcmV0dXJuIGZhbHNlXG59XG5cbmZ1bmN0aW9uIGFjdGl2YXRlQ2hpbGRDb21wb25lbnQgKHZtLCBkaXJlY3QpIHtcbiAgaWYgKGRpcmVjdCkge1xuICAgIHZtLl9kaXJlY3RJbmFjdGl2ZSA9IGZhbHNlO1xuICAgIGlmIChpc0luSW5hY3RpdmVUcmVlKHZtKSkge1xuICAgICAgcmV0dXJuXG4gICAgfVxuICB9IGVsc2UgaWYgKHZtLl9kaXJlY3RJbmFjdGl2ZSkge1xuICAgIHJldHVyblxuICB9XG4gIGlmICh2bS5faW5hY3RpdmUgfHwgdm0uX2luYWN0aXZlID09PSBudWxsKSB7XG4gICAgdm0uX2luYWN0aXZlID0gZmFsc2U7XG4gICAgZm9yICh2YXIgaSA9IDA7IGkgPCB2bS4kY2hpbGRyZW4ubGVuZ3RoOyBpKyspIHtcbiAgICAgIGFjdGl2YXRlQ2hpbGRDb21wb25lbnQodm0uJGNoaWxkcmVuW2ldKTtcbiAgICB9XG4gICAgY2FsbEhvb2sodm0sICdhY3RpdmF0ZWQnKTtcbiAgfVxufVxuXG5mdW5jdGlvbiBkZWFjdGl2YXRlQ2hpbGRDb21wb25lbnQgKHZtLCBkaXJlY3QpIHtcbiAgaWYgKGRpcmVjdCkge1xuICAgIHZtLl9kaXJlY3RJbmFjdGl2ZSA9IHRydWU7XG4gICAgaWYgKGlzSW5JbmFjdGl2ZVRyZWUodm0pKSB7XG4gICAgICByZXR1cm5cbiAgICB9XG4gIH1cbiAgaWYgKCF2bS5faW5hY3RpdmUpIHtcbiAgICB2bS5faW5hY3RpdmUgPSB0cnVlO1xuICAgIGZvciAodmFyIGkgPSAwOyBpIDwgdm0uJGNoaWxkcmVuLmxlbmd0aDsgaSsrKSB7XG4gICAgICBkZWFjdGl2YXRlQ2hpbGRDb21wb25lbnQodm0uJGNoaWxkcmVuW2ldKTtcbiAgICB9XG4gICAgY2FsbEhvb2sodm0sICdkZWFjdGl2YXRlZCcpO1xuICB9XG59XG5cbmZ1bmN0aW9uIGNhbGxIb29rICh2bSwgaG9vaykge1xuICAvLyAjNzU3MyBkaXNhYmxlIGRlcCBjb2xsZWN0aW9uIHdoZW4gaW52b2tpbmcgbGlmZWN5Y2xlIGhvb2tzXG4gIHB1c2hUYXJnZXQoKTtcbiAgdmFyIGhhbmRsZXJzID0gdm0uJG9wdGlvbnNbaG9va107XG4gIHZhciBpbmZvID0gaG9vayArIFwiIGhvb2tcIjtcbiAgaWYgKGhhbmRsZXJzKSB7XG4gICAgZm9yICh2YXIgaSA9IDAsIGogPSBoYW5kbGVycy5sZW5ndGg7IGkgPCBqOyBpKyspIHtcbiAgICAgIGludm9rZVdpdGhFcnJvckhhbmRsaW5nKGhhbmRsZXJzW2ldLCB2bSwgbnVsbCwgdm0sIGluZm8pO1xuICAgIH1cbiAgfVxuICBpZiAodm0uX2hhc0hvb2tFdmVudCkge1xuICAgIHZtLiRlbWl0KCdob29rOicgKyBob29rKTtcbiAgfVxuICBwb3BUYXJnZXQoKTtcbn1cblxuLyogICovXG5cbnZhciBNQVhfVVBEQVRFX0NPVU5UID0gMTAwO1xuXG52YXIgcXVldWUgPSBbXTtcbnZhciBhY3RpdmF0ZWRDaGlsZHJlbiA9IFtdO1xudmFyIGhhcyA9IHt9O1xudmFyIGNpcmN1bGFyID0ge307XG52YXIgd2FpdGluZyA9IGZhbHNlO1xudmFyIGZsdXNoaW5nID0gZmFsc2U7XG52YXIgaW5kZXggPSAwO1xuXG4vKipcbiAqIFJlc2V0IHRoZSBzY2hlZHVsZXIncyBzdGF0ZS5cbiAqL1xuZnVuY3Rpb24gcmVzZXRTY2hlZHVsZXJTdGF0ZSAoKSB7XG4gIGluZGV4ID0gcXVldWUubGVuZ3RoID0gYWN0aXZhdGVkQ2hpbGRyZW4ubGVuZ3RoID0gMDtcbiAgaGFzID0ge307XG4gIGlmIChwcm9jZXNzLmVudi5OT0RFX0VOViAhPT0gJ3Byb2R1Y3Rpb24nKSB7XG4gICAgY2lyY3VsYXIgPSB7fTtcbiAgfVxuICB3YWl0aW5nID0gZmx1c2hpbmcgPSBmYWxzZTtcbn1cblxuLy8gQXN5bmMgZWRnZSBjYXNlICM2NTY2IHJlcXVpcmVzIHNhdmluZyB0aGUgdGltZXN0YW1wIHdoZW4gZXZlbnQgbGlzdGVuZXJzIGFyZVxuLy8gYXR0YWNoZWQuIEhvd2V2ZXIsIGNhbGxpbmcgcGVyZm9ybWFuY2Uubm93KCkgaGFzIGEgcGVyZiBvdmVyaGVhZCBlc3BlY2lhbGx5XG4vLyBpZiB0aGUgcGFnZSBoYXMgdGhvdXNhbmRzIG9mIGV2ZW50IGxpc3RlbmVycy4gSW5zdGVhZCwgd2UgdGFrZSBhIHRpbWVzdGFtcFxuLy8gZXZlcnkgdGltZSB0aGUgc2NoZWR1bGVyIGZsdXNoZXMgYW5kIHVzZSB0aGF0IGZvciBhbGwgZXZlbnQgbGlzdGVuZXJzXG4vLyBhdHRhY2hlZCBkdXJpbmcgdGhhdCBmbHVzaC5cbnZhciBjdXJyZW50Rmx1c2hUaW1lc3RhbXAgPSAwO1xuXG4vLyBBc3luYyBlZGdlIGNhc2UgZml4IHJlcXVpcmVzIHN0b3JpbmcgYW4gZXZlbnQgbGlzdGVuZXIncyBhdHRhY2ggdGltZXN0YW1wLlxudmFyIGdldE5vdyA9IERhdGUubm93O1xuXG4vLyBEZXRlcm1pbmUgd2hhdCBldmVudCB0aW1lc3RhbXAgdGhlIGJyb3dzZXIgaXMgdXNpbmcuIEFubm95aW5nbHksIHRoZVxuLy8gdGltZXN0YW1wIGNhbiBlaXRoZXIgYmUgaGktcmVzIChyZWxhdGl2ZSB0byBwYWdlIGxvYWQpIG9yIGxvdy1yZXNcbi8vIChyZWxhdGl2ZSB0byBVTklYIGVwb2NoKSwgc28gaW4gb3JkZXIgdG8gY29tcGFyZSB0aW1lIHdlIGhhdmUgdG8gdXNlIHRoZVxuLy8gc2FtZSB0aW1lc3RhbXAgdHlwZSB3aGVuIHNhdmluZyB0aGUgZmx1c2ggdGltZXN0YW1wLlxuLy8gQWxsIElFIHZlcnNpb25zIHVzZSBsb3ctcmVzIGV2ZW50IHRpbWVzdGFtcHMsIGFuZCBoYXZlIHByb2JsZW1hdGljIGNsb2NrXG4vLyBpbXBsZW1lbnRhdGlvbnMgKCM5NjMyKVxuaWYgKGluQnJvd3NlciAmJiAhaXNJRSkge1xuICB2YXIgcGVyZm9ybWFuY2UgPSB3aW5kb3cucGVyZm9ybWFuY2U7XG4gIGlmIChcbiAgICBwZXJmb3JtYW5jZSAmJlxuICAgIHR5cGVvZiBwZXJmb3JtYW5jZS5ub3cgPT09ICdmdW5jdGlvbicgJiZcbiAgICBnZXROb3coKSA+IGRvY3VtZW50LmNyZWF0ZUV2ZW50KCdFdmVudCcpLnRpbWVTdGFtcFxuICApIHtcbiAgICAvLyBpZiB0aGUgZXZlbnQgdGltZXN0YW1wLCBhbHRob3VnaCBldmFsdWF0ZWQgQUZURVIgdGhlIERhdGUubm93KCksIGlzXG4gICAgLy8gc21hbGxlciB0aGFuIGl0LCBpdCBtZWFucyB0aGUgZXZlbnQgaXMgdXNpbmcgYSBoaS1yZXMgdGltZXN0YW1wLFxuICAgIC8vIGFuZCB3ZSBuZWVkIHRvIHVzZSB0aGUgaGktcmVzIHZlcnNpb24gZm9yIGV2ZW50IGxpc3RlbmVyIHRpbWVzdGFtcHMgYXNcbiAgICAvLyB3ZWxsLlxuICAgIGdldE5vdyA9IGZ1bmN0aW9uICgpIHsgcmV0dXJuIHBlcmZvcm1hbmNlLm5vdygpOyB9O1xuICB9XG59XG5cbi8qKlxuICogRmx1c2ggYm90aCBxdWV1ZXMgYW5kIHJ1biB0aGUgd2F0Y2hlcnMuXG4gKi9cbmZ1bmN0aW9uIGZsdXNoU2NoZWR1bGVyUXVldWUgKCkge1xuICBjdXJyZW50Rmx1c2hUaW1lc3RhbXAgPSBnZXROb3coKTtcbiAgZmx1c2hpbmcgPSB0cnVlO1xuICB2YXIgd2F0Y2hlciwgaWQ7XG5cbiAgLy8gU29ydCBxdWV1ZSBiZWZvcmUgZmx1c2guXG4gIC8vIFRoaXMgZW5zdXJlcyB0aGF0OlxuICAvLyAxLiBDb21wb25lbnRzIGFyZSB1cGRhdGVkIGZyb20gcGFyZW50IHRvIGNoaWxkLiAoYmVjYXVzZSBwYXJlbnQgaXMgYWx3YXlzXG4gIC8vICAgIGNyZWF0ZWQgYmVmb3JlIHRoZSBjaGlsZClcbiAgLy8gMi4gQSBjb21wb25lbnQncyB1c2VyIHdhdGNoZXJzIGFyZSBydW4gYmVmb3JlIGl0cyByZW5kZXIgd2F0Y2hlciAoYmVjYXVzZVxuICAvLyAgICB1c2VyIHdhdGNoZXJzIGFyZSBjcmVhdGVkIGJlZm9yZSB0aGUgcmVuZGVyIHdhdGNoZXIpXG4gIC8vIDMuIElmIGEgY29tcG9uZW50IGlzIGRlc3Ryb3llZCBkdXJpbmcgYSBwYXJlbnQgY29tcG9uZW50J3Mgd2F0Y2hlciBydW4sXG4gIC8vICAgIGl0cyB3YXRjaGVycyBjYW4gYmUgc2tpcHBlZC5cbiAgcXVldWUuc29ydChmdW5jdGlvbiAoYSwgYikgeyByZXR1cm4gYS5pZCAtIGIuaWQ7IH0pO1xuXG4gIC8vIGRvIG5vdCBjYWNoZSBsZW5ndGggYmVjYXVzZSBtb3JlIHdhdGNoZXJzIG1pZ2h0IGJlIHB1c2hlZFxuICAvLyBhcyB3ZSBydW4gZXhpc3Rpbmcgd2F0Y2hlcnNcbiAgZm9yIChpbmRleCA9IDA7IGluZGV4IDwgcXVldWUubGVuZ3RoOyBpbmRleCsrKSB7XG4gICAgd2F0Y2hlciA9IHF1ZXVlW2luZGV4XTtcbiAgICBpZiAod2F0Y2hlci5iZWZvcmUpIHtcbiAgICAgIHdhdGNoZXIuYmVmb3JlKCk7XG4gICAgfVxuICAgIGlkID0gd2F0Y2hlci5pZDtcbiAgICBoYXNbaWRdID0gbnVsbDtcbiAgICB3YXRjaGVyLnJ1bigpO1xuICAgIC8vIGluIGRldiBidWlsZCwgY2hlY2sgYW5kIHN0b3AgY2lyY3VsYXIgdXBkYXRlcy5cbiAgICBpZiAocHJvY2Vzcy5lbnYuTk9ERV9FTlYgIT09ICdwcm9kdWN0aW9uJyAmJiBoYXNbaWRdICE9IG51bGwpIHtcbiAgICAgIGNpcmN1bGFyW2lkXSA9IChjaXJjdWxhcltpZF0gfHwgMCkgKyAxO1xuICAgICAgaWYgKGNpcmN1bGFyW2lkXSA+IE1BWF9VUERBVEVfQ09VTlQpIHtcbiAgICAgICAgd2FybihcbiAgICAgICAgICAnWW91IG1heSBoYXZlIGFuIGluZmluaXRlIHVwZGF0ZSBsb29wICcgKyAoXG4gICAgICAgICAgICB3YXRjaGVyLnVzZXJcbiAgICAgICAgICAgICAgPyAoXCJpbiB3YXRjaGVyIHdpdGggZXhwcmVzc2lvbiBcXFwiXCIgKyAod2F0Y2hlci5leHByZXNzaW9uKSArIFwiXFxcIlwiKVxuICAgICAgICAgICAgICA6IFwiaW4gYSBjb21wb25lbnQgcmVuZGVyIGZ1bmN0aW9uLlwiXG4gICAgICAgICAgKSxcbiAgICAgICAgICB3YXRjaGVyLnZtXG4gICAgICAgICk7XG4gICAgICAgIGJyZWFrXG4gICAgICB9XG4gICAgfVxuICB9XG5cbiAgLy8ga2VlcCBjb3BpZXMgb2YgcG9zdCBxdWV1ZXMgYmVmb3JlIHJlc2V0dGluZyBzdGF0ZVxuICB2YXIgYWN0aXZhdGVkUXVldWUgPSBhY3RpdmF0ZWRDaGlsZHJlbi5zbGljZSgpO1xuICB2YXIgdXBkYXRlZFF1ZXVlID0gcXVldWUuc2xpY2UoKTtcblxuICByZXNldFNjaGVkdWxlclN0YXRlKCk7XG5cbiAgLy8gY2FsbCBjb21wb25lbnQgdXBkYXRlZCBhbmQgYWN0aXZhdGVkIGhvb2tzXG4gIGNhbGxBY3RpdmF0ZWRIb29rcyhhY3RpdmF0ZWRRdWV1ZSk7XG4gIGNhbGxVcGRhdGVkSG9va3ModXBkYXRlZFF1ZXVlKTtcblxuICAvLyBkZXZ0b29sIGhvb2tcbiAgLyogaXN0YW5idWwgaWdub3JlIGlmICovXG4gIGlmIChkZXZ0b29scyAmJiBjb25maWcuZGV2dG9vbHMpIHtcbiAgICBkZXZ0b29scy5lbWl0KCdmbHVzaCcpO1xuICB9XG59XG5cbmZ1bmN0aW9uIGNhbGxVcGRhdGVkSG9va3MgKHF1ZXVlKSB7XG4gIHZhciBpID0gcXVldWUubGVuZ3RoO1xuICB3aGlsZSAoaS0tKSB7XG4gICAgdmFyIHdhdGNoZXIgPSBxdWV1ZVtpXTtcbiAgICB2YXIgdm0gPSB3YXRjaGVyLnZtO1xuICAgIGlmICh2bS5fd2F0Y2hlciA9PT0gd2F0Y2hlciAmJiB2bS5faXNNb3VudGVkICYmICF2bS5faXNEZXN0cm95ZWQpIHtcbiAgICAgIGNhbGxIb29rKHZtLCAndXBkYXRlZCcpO1xuICAgIH1cbiAgfVxufVxuXG4vKipcbiAqIFF1ZXVlIGEga2VwdC1hbGl2ZSBjb21wb25lbnQgdGhhdCB3YXMgYWN0aXZhdGVkIGR1cmluZyBwYXRjaC5cbiAqIFRoZSBxdWV1ZSB3aWxsIGJlIHByb2Nlc3NlZCBhZnRlciB0aGUgZW50aXJlIHRyZWUgaGFzIGJlZW4gcGF0Y2hlZC5cbiAqL1xuZnVuY3Rpb24gcXVldWVBY3RpdmF0ZWRDb21wb25lbnQgKHZtKSB7XG4gIC8vIHNldHRpbmcgX2luYWN0aXZlIHRvIGZhbHNlIGhlcmUgc28gdGhhdCBhIHJlbmRlciBmdW5jdGlvbiBjYW5cbiAgLy8gcmVseSBvbiBjaGVja2luZyB3aGV0aGVyIGl0J3MgaW4gYW4gaW5hY3RpdmUgdHJlZSAoZS5nLiByb3V0ZXItdmlldylcbiAgdm0uX2luYWN0aXZlID0gZmFsc2U7XG4gIGFjdGl2YXRlZENoaWxkcmVuLnB1c2godm0pO1xufVxuXG5mdW5jdGlvbiBjYWxsQWN0aXZhdGVkSG9va3MgKHF1ZXVlKSB7XG4gIGZvciAodmFyIGkgPSAwOyBpIDwgcXVldWUubGVuZ3RoOyBpKyspIHtcbiAgICBxdWV1ZVtpXS5faW5hY3RpdmUgPSB0cnVlO1xuICAgIGFjdGl2YXRlQ2hpbGRDb21wb25lbnQocXVldWVbaV0sIHRydWUgLyogdHJ1ZSAqLyk7XG4gIH1cbn1cblxuLyoqXG4gKiBQdXNoIGEgd2F0Y2hlciBpbnRvIHRoZSB3YXRjaGVyIHF1ZXVlLlxuICogSm9icyB3aXRoIGR1cGxpY2F0ZSBJRHMgd2lsbCBiZSBza2lwcGVkIHVubGVzcyBpdCdzXG4gKiBwdXNoZWQgd2hlbiB0aGUgcXVldWUgaXMgYmVpbmcgZmx1c2hlZC5cbiAqL1xuZnVuY3Rpb24gcXVldWVXYXRjaGVyICh3YXRjaGVyKSB7XG4gIHZhciBpZCA9IHdhdGNoZXIuaWQ7XG4gIGlmIChoYXNbaWRdID09IG51bGwpIHtcbiAgICBoYXNbaWRdID0gdHJ1ZTtcbiAgICBpZiAoIWZsdXNoaW5nKSB7XG4gICAgICBxdWV1ZS5wdXNoKHdhdGNoZXIpO1xuICAgIH0gZWxzZSB7XG4gICAgICAvLyBpZiBhbHJlYWR5IGZsdXNoaW5nLCBzcGxpY2UgdGhlIHdhdGNoZXIgYmFzZWQgb24gaXRzIGlkXG4gICAgICAvLyBpZiBhbHJlYWR5IHBhc3QgaXRzIGlkLCBpdCB3aWxsIGJlIHJ1biBuZXh0IGltbWVkaWF0ZWx5LlxuICAgICAgdmFyIGkgPSBxdWV1ZS5sZW5ndGggLSAxO1xuICAgICAgd2hpbGUgKGkgPiBpbmRleCAmJiBxdWV1ZVtpXS5pZCA+IHdhdGNoZXIuaWQpIHtcbiAgICAgICAgaS0tO1xuICAgICAgfVxuICAgICAgcXVldWUuc3BsaWNlKGkgKyAxLCAwLCB3YXRjaGVyKTtcbiAgICB9XG4gICAgLy8gcXVldWUgdGhlIGZsdXNoXG4gICAgaWYgKCF3YWl0aW5nKSB7XG4gICAgICB3YWl0aW5nID0gdHJ1ZTtcblxuICAgICAgaWYgKHByb2Nlc3MuZW52Lk5PREVfRU5WICE9PSAncHJvZHVjdGlvbicgJiYgIWNvbmZpZy5hc3luYykge1xuICAgICAgICBmbHVzaFNjaGVkdWxlclF1ZXVlKCk7XG4gICAgICAgIHJldHVyblxuICAgICAgfVxuICAgICAgbmV4dFRpY2soZmx1c2hTY2hlZHVsZXJRdWV1ZSk7XG4gICAgfVxuICB9XG59XG5cbi8qICAqL1xuXG5cblxudmFyIHVpZCQyID0gMDtcblxuLyoqXG4gKiBBIHdhdGNoZXIgcGFyc2VzIGFuIGV4cHJlc3Npb24sIGNvbGxlY3RzIGRlcGVuZGVuY2llcyxcbiAqIGFuZCBmaXJlcyBjYWxsYmFjayB3aGVuIHRoZSBleHByZXNzaW9uIHZhbHVlIGNoYW5nZXMuXG4gKiBUaGlzIGlzIHVzZWQgZm9yIGJvdGggdGhlICR3YXRjaCgpIGFwaSBhbmQgZGlyZWN0aXZlcy5cbiAqL1xudmFyIFdhdGNoZXIgPSBmdW5jdGlvbiBXYXRjaGVyIChcbiAgdm0sXG4gIGV4cE9yRm4sXG4gIGNiLFxuICBvcHRpb25zLFxuICBpc1JlbmRlcldhdGNoZXJcbikge1xuICB0aGlzLnZtID0gdm07XG4gIGlmIChpc1JlbmRlcldhdGNoZXIpIHtcbiAgICB2bS5fd2F0Y2hlciA9IHRoaXM7XG4gIH1cbiAgdm0uX3dhdGNoZXJzLnB1c2godGhpcyk7XG4gIC8vIG9wdGlvbnNcbiAgaWYgKG9wdGlvbnMpIHtcbiAgICB0aGlzLmRlZXAgPSAhIW9wdGlvbnMuZGVlcDtcbiAgICB0aGlzLnVzZXIgPSAhIW9wdGlvbnMudXNlcjtcbiAgICB0aGlzLmxhenkgPSAhIW9wdGlvbnMubGF6eTtcbiAgICB0aGlzLnN5bmMgPSAhIW9wdGlvbnMuc3luYztcbiAgICB0aGlzLmJlZm9yZSA9IG9wdGlvbnMuYmVmb3JlO1xuICB9IGVsc2Uge1xuICAgIHRoaXMuZGVlcCA9IHRoaXMudXNlciA9IHRoaXMubGF6eSA9IHRoaXMuc3luYyA9IGZhbHNlO1xuICB9XG4gIHRoaXMuY2IgPSBjYjtcbiAgdGhpcy5pZCA9ICsrdWlkJDI7IC8vIHVpZCBmb3IgYmF0Y2hpbmdcbiAgdGhpcy5hY3RpdmUgPSB0cnVlO1xuICB0aGlzLmRpcnR5ID0gdGhpcy5sYXp5OyAvLyBmb3IgbGF6eSB3YXRjaGVyc1xuICB0aGlzLmRlcHMgPSBbXTtcbiAgdGhpcy5uZXdEZXBzID0gW107XG4gIHRoaXMuZGVwSWRzID0gbmV3IF9TZXQoKTtcbiAgdGhpcy5uZXdEZXBJZHMgPSBuZXcgX1NldCgpO1xuICB0aGlzLmV4cHJlc3Npb24gPSBwcm9jZXNzLmVudi5OT0RFX0VOViAhPT0gJ3Byb2R1Y3Rpb24nXG4gICAgPyBleHBPckZuLnRvU3RyaW5nKClcbiAgICA6ICcnO1xuICAvLyBwYXJzZSBleHByZXNzaW9uIGZvciBnZXR0ZXJcbiAgaWYgKHR5cGVvZiBleHBPckZuID09PSAnZnVuY3Rpb24nKSB7XG4gICAgdGhpcy5nZXR0ZXIgPSBleHBPckZuO1xuICB9IGVsc2Uge1xuICAgIHRoaXMuZ2V0dGVyID0gcGFyc2VQYXRoKGV4cE9yRm4pO1xuICAgIGlmICghdGhpcy5nZXR0ZXIpIHtcbiAgICAgIHRoaXMuZ2V0dGVyID0gbm9vcDtcbiAgICAgIHByb2Nlc3MuZW52Lk5PREVfRU5WICE9PSAncHJvZHVjdGlvbicgJiYgd2FybihcbiAgICAgICAgXCJGYWlsZWQgd2F0Y2hpbmcgcGF0aDogXFxcIlwiICsgZXhwT3JGbiArIFwiXFxcIiBcIiArXG4gICAgICAgICdXYXRjaGVyIG9ubHkgYWNjZXB0cyBzaW1wbGUgZG90LWRlbGltaXRlZCBwYXRocy4gJyArXG4gICAgICAgICdGb3IgZnVsbCBjb250cm9sLCB1c2UgYSBmdW5jdGlvbiBpbnN0ZWFkLicsXG4gICAgICAgIHZtXG4gICAgICApO1xuICAgIH1cbiAgfVxuICB0aGlzLnZhbHVlID0gdGhpcy5sYXp5XG4gICAgPyB1bmRlZmluZWRcbiAgICA6IHRoaXMuZ2V0KCk7XG59O1xuXG4vKipcbiAqIEV2YWx1YXRlIHRoZSBnZXR0ZXIsIGFuZCByZS1jb2xsZWN0IGRlcGVuZGVuY2llcy5cbiAqL1xuV2F0Y2hlci5wcm90b3R5cGUuZ2V0ID0gZnVuY3Rpb24gZ2V0ICgpIHtcbiAgcHVzaFRhcmdldCh0aGlzKTtcbiAgdmFyIHZhbHVlO1xuICB2YXIgdm0gPSB0aGlzLnZtO1xuICB0cnkge1xuICAgIHZhbHVlID0gdGhpcy5nZXR0ZXIuY2FsbCh2bSwgdm0pO1xuICB9IGNhdGNoIChlKSB7XG4gICAgaWYgKHRoaXMudXNlcikge1xuICAgICAgaGFuZGxlRXJyb3IoZSwgdm0sIChcImdldHRlciBmb3Igd2F0Y2hlciBcXFwiXCIgKyAodGhpcy5leHByZXNzaW9uKSArIFwiXFxcIlwiKSk7XG4gICAgfSBlbHNlIHtcbiAgICAgIHRocm93IGVcbiAgICB9XG4gIH0gZmluYWxseSB7XG4gICAgLy8gXCJ0b3VjaFwiIGV2ZXJ5IHByb3BlcnR5IHNvIHRoZXkgYXJlIGFsbCB0cmFja2VkIGFzXG4gICAgLy8gZGVwZW5kZW5jaWVzIGZvciBkZWVwIHdhdGNoaW5nXG4gICAgaWYgKHRoaXMuZGVlcCkge1xuICAgICAgdHJhdmVyc2UodmFsdWUpO1xuICAgIH1cbiAgICBwb3BUYXJnZXQoKTtcbiAgICB0aGlzLmNsZWFudXBEZXBzKCk7XG4gIH1cbiAgcmV0dXJuIHZhbHVlXG59O1xuXG4vKipcbiAqIEFkZCBhIGRlcGVuZGVuY3kgdG8gdGhpcyBkaXJlY3RpdmUuXG4gKi9cbldhdGNoZXIucHJvdG90eXBlLmFkZERlcCA9IGZ1bmN0aW9uIGFkZERlcCAoZGVwKSB7XG4gIHZhciBpZCA9IGRlcC5pZDtcbiAgaWYgKCF0aGlzLm5ld0RlcElkcy5oYXMoaWQpKSB7XG4gICAgdGhpcy5uZXdEZXBJZHMuYWRkKGlkKTtcbiAgICB0aGlzLm5ld0RlcHMucHVzaChkZXApO1xuICAgIGlmICghdGhpcy5kZXBJZHMuaGFzKGlkKSkge1xuICAgICAgZGVwLmFkZFN1Yih0aGlzKTtcbiAgICB9XG4gIH1cbn07XG5cbi8qKlxuICogQ2xlYW4gdXAgZm9yIGRlcGVuZGVuY3kgY29sbGVjdGlvbi5cbiAqL1xuV2F0Y2hlci5wcm90b3R5cGUuY2xlYW51cERlcHMgPSBmdW5jdGlvbiBjbGVhbnVwRGVwcyAoKSB7XG4gIHZhciBpID0gdGhpcy5kZXBzLmxlbmd0aDtcbiAgd2hpbGUgKGktLSkge1xuICAgIHZhciBkZXAgPSB0aGlzLmRlcHNbaV07XG4gICAgaWYgKCF0aGlzLm5ld0RlcElkcy5oYXMoZGVwLmlkKSkge1xuICAgICAgZGVwLnJlbW92ZVN1Yih0aGlzKTtcbiAgICB9XG4gIH1cbiAgdmFyIHRtcCA9IHRoaXMuZGVwSWRzO1xuICB0aGlzLmRlcElkcyA9IHRoaXMubmV3RGVwSWRzO1xuICB0aGlzLm5ld0RlcElkcyA9IHRtcDtcbiAgdGhpcy5uZXdEZXBJZHMuY2xlYXIoKTtcbiAgdG1wID0gdGhpcy5kZXBzO1xuICB0aGlzLmRlcHMgPSB0aGlzLm5ld0RlcHM7XG4gIHRoaXMubmV3RGVwcyA9IHRtcDtcbiAgdGhpcy5uZXdEZXBzLmxlbmd0aCA9IDA7XG59O1xuXG4vKipcbiAqIFN1YnNjcmliZXIgaW50ZXJmYWNlLlxuICogV2lsbCBiZSBjYWxsZWQgd2hlbiBhIGRlcGVuZGVuY3kgY2hhbmdlcy5cbiAqL1xuV2F0Y2hlci5wcm90b3R5cGUudXBkYXRlID0gZnVuY3Rpb24gdXBkYXRlICgpIHtcbiAgLyogaXN0YW5idWwgaWdub3JlIGVsc2UgKi9cbiAgaWYgKHRoaXMubGF6eSkge1xuICAgIHRoaXMuZGlydHkgPSB0cnVlO1xuICB9IGVsc2UgaWYgKHRoaXMuc3luYykge1xuICAgIHRoaXMucnVuKCk7XG4gIH0gZWxzZSB7XG4gICAgcXVldWVXYXRjaGVyKHRoaXMpO1xuICB9XG59O1xuXG4vKipcbiAqIFNjaGVkdWxlciBqb2IgaW50ZXJmYWNlLlxuICogV2lsbCBiZSBjYWxsZWQgYnkgdGhlIHNjaGVkdWxlci5cbiAqL1xuV2F0Y2hlci5wcm90b3R5cGUucnVuID0gZnVuY3Rpb24gcnVuICgpIHtcbiAgaWYgKHRoaXMuYWN0aXZlKSB7XG4gICAgdmFyIHZhbHVlID0gdGhpcy5nZXQoKTtcbiAgICBpZiAoXG4gICAgICB2YWx1ZSAhPT0gdGhpcy52YWx1ZSB8fFxuICAgICAgLy8gRGVlcCB3YXRjaGVycyBhbmQgd2F0Y2hlcnMgb24gT2JqZWN0L0FycmF5cyBzaG91bGQgZmlyZSBldmVuXG4gICAgICAvLyB3aGVuIHRoZSB2YWx1ZSBpcyB0aGUgc2FtZSwgYmVjYXVzZSB0aGUgdmFsdWUgbWF5XG4gICAgICAvLyBoYXZlIG11dGF0ZWQuXG4gICAgICBpc09iamVjdCh2YWx1ZSkgfHxcbiAgICAgIHRoaXMuZGVlcFxuICAgICkge1xuICAgICAgLy8gc2V0IG5ldyB2YWx1ZVxuICAgICAgdmFyIG9sZFZhbHVlID0gdGhpcy52YWx1ZTtcbiAgICAgIHRoaXMudmFsdWUgPSB2YWx1ZTtcbiAgICAgIGlmICh0aGlzLnVzZXIpIHtcbiAgICAgICAgdHJ5IHtcbiAgICAgICAgICB0aGlzLmNiLmNhbGwodGhpcy52bSwgdmFsdWUsIG9sZFZhbHVlKTtcbiAgICAgICAgfSBjYXRjaCAoZSkge1xuICAgICAgICAgIGhhbmRsZUVycm9yKGUsIHRoaXMudm0sIChcImNhbGxiYWNrIGZvciB3YXRjaGVyIFxcXCJcIiArICh0aGlzLmV4cHJlc3Npb24pICsgXCJcXFwiXCIpKTtcbiAgICAgICAgfVxuICAgICAgfSBlbHNlIHtcbiAgICAgICAgdGhpcy5jYi5jYWxsKHRoaXMudm0sIHZhbHVlLCBvbGRWYWx1ZSk7XG4gICAgICB9XG4gICAgfVxuICB9XG59O1xuXG4vKipcbiAqIEV2YWx1YXRlIHRoZSB2YWx1ZSBvZiB0aGUgd2F0Y2hlci5cbiAqIFRoaXMgb25seSBnZXRzIGNhbGxlZCBmb3IgbGF6eSB3YXRjaGVycy5cbiAqL1xuV2F0Y2hlci5wcm90b3R5cGUuZXZhbHVhdGUgPSBmdW5jdGlvbiBldmFsdWF0ZSAoKSB7XG4gIHRoaXMudmFsdWUgPSB0aGlzLmdldCgpO1xuICB0aGlzLmRpcnR5ID0gZmFsc2U7XG59O1xuXG4vKipcbiAqIERlcGVuZCBvbiBhbGwgZGVwcyBjb2xsZWN0ZWQgYnkgdGhpcyB3YXRjaGVyLlxuICovXG5XYXRjaGVyLnByb3RvdHlwZS5kZXBlbmQgPSBmdW5jdGlvbiBkZXBlbmQgKCkge1xuICB2YXIgaSA9IHRoaXMuZGVwcy5sZW5ndGg7XG4gIHdoaWxlIChpLS0pIHtcbiAgICB0aGlzLmRlcHNbaV0uZGVwZW5kKCk7XG4gIH1cbn07XG5cbi8qKlxuICogUmVtb3ZlIHNlbGYgZnJvbSBhbGwgZGVwZW5kZW5jaWVzJyBzdWJzY3JpYmVyIGxpc3QuXG4gKi9cbldhdGNoZXIucHJvdG90eXBlLnRlYXJkb3duID0gZnVuY3Rpb24gdGVhcmRvd24gKCkge1xuICBpZiAodGhpcy5hY3RpdmUpIHtcbiAgICAvLyByZW1vdmUgc2VsZiBmcm9tIHZtJ3Mgd2F0Y2hlciBsaXN0XG4gICAgLy8gdGhpcyBpcyBhIHNvbWV3aGF0IGV4cGVuc2l2ZSBvcGVyYXRpb24gc28gd2Ugc2tpcCBpdFxuICAgIC8vIGlmIHRoZSB2bSBpcyBiZWluZyBkZXN0cm95ZWQuXG4gICAgaWYgKCF0aGlzLnZtLl9pc0JlaW5nRGVzdHJveWVkKSB7XG4gICAgICByZW1vdmUodGhpcy52bS5fd2F0Y2hlcnMsIHRoaXMpO1xuICAgIH1cbiAgICB2YXIgaSA9IHRoaXMuZGVwcy5sZW5ndGg7XG4gICAgd2hpbGUgKGktLSkge1xuICAgICAgdGhpcy5kZXBzW2ldLnJlbW92ZVN1Yih0aGlzKTtcbiAgICB9XG4gICAgdGhpcy5hY3RpdmUgPSBmYWxzZTtcbiAgfVxufTtcblxuLyogICovXG5cbnZhciBzaGFyZWRQcm9wZXJ0eURlZmluaXRpb24gPSB7XG4gIGVudW1lcmFibGU6IHRydWUsXG4gIGNvbmZpZ3VyYWJsZTogdHJ1ZSxcbiAgZ2V0OiBub29wLFxuICBzZXQ6IG5vb3Bcbn07XG5cbmZ1bmN0aW9uIHByb3h5ICh0YXJnZXQsIHNvdXJjZUtleSwga2V5KSB7XG4gIHNoYXJlZFByb3BlcnR5RGVmaW5pdGlvbi5nZXQgPSBmdW5jdGlvbiBwcm94eUdldHRlciAoKSB7XG4gICAgcmV0dXJuIHRoaXNbc291cmNlS2V5XVtrZXldXG4gIH07XG4gIHNoYXJlZFByb3BlcnR5RGVmaW5pdGlvbi5zZXQgPSBmdW5jdGlvbiBwcm94eVNldHRlciAodmFsKSB7XG4gICAgdGhpc1tzb3VyY2VLZXldW2tleV0gPSB2YWw7XG4gIH07XG4gIE9iamVjdC5kZWZpbmVQcm9wZXJ0eSh0YXJnZXQsIGtleSwgc2hhcmVkUHJvcGVydHlEZWZpbml0aW9uKTtcbn1cblxuZnVuY3Rpb24gaW5pdFN0YXRlICh2bSkge1xuICB2bS5fd2F0Y2hlcnMgPSBbXTtcbiAgdmFyIG9wdHMgPSB2bS4kb3B0aW9ucztcbiAgaWYgKG9wdHMucHJvcHMpIHsgaW5pdFByb3BzKHZtLCBvcHRzLnByb3BzKTsgfVxuICBpZiAob3B0cy5tZXRob2RzKSB7IGluaXRNZXRob2RzKHZtLCBvcHRzLm1ldGhvZHMpOyB9XG4gIGlmIChvcHRzLmRhdGEpIHtcbiAgICBpbml0RGF0YSh2bSk7XG4gIH0gZWxzZSB7XG4gICAgb2JzZXJ2ZSh2bS5fZGF0YSA9IHt9LCB0cnVlIC8qIGFzUm9vdERhdGEgKi8pO1xuICB9XG4gIGlmIChvcHRzLmNvbXB1dGVkKSB7IGluaXRDb21wdXRlZCh2bSwgb3B0cy5jb21wdXRlZCk7IH1cbiAgaWYgKG9wdHMud2F0Y2ggJiYgb3B0cy53YXRjaCAhPT0gbmF0aXZlV2F0Y2gpIHtcbiAgICBpbml0V2F0Y2godm0sIG9wdHMud2F0Y2gpO1xuICB9XG59XG5cbmZ1bmN0aW9uIGluaXRQcm9wcyAodm0sIHByb3BzT3B0aW9ucykge1xuICB2YXIgcHJvcHNEYXRhID0gdm0uJG9wdGlvbnMucHJvcHNEYXRhIHx8IHt9O1xuICB2YXIgcHJvcHMgPSB2bS5fcHJvcHMgPSB7fTtcbiAgLy8gY2FjaGUgcHJvcCBrZXlzIHNvIHRoYXQgZnV0dXJlIHByb3BzIHVwZGF0ZXMgY2FuIGl0ZXJhdGUgdXNpbmcgQXJyYXlcbiAgLy8gaW5zdGVhZCBvZiBkeW5hbWljIG9iamVjdCBrZXkgZW51bWVyYXRpb24uXG4gIHZhciBrZXlzID0gdm0uJG9wdGlvbnMuX3Byb3BLZXlzID0gW107XG4gIHZhciBpc1Jvb3QgPSAhdm0uJHBhcmVudDtcbiAgLy8gcm9vdCBpbnN0YW5jZSBwcm9wcyBzaG91bGQgYmUgY29udmVydGVkXG4gIGlmICghaXNSb290KSB7XG4gICAgdG9nZ2xlT2JzZXJ2aW5nKGZhbHNlKTtcbiAgfVxuICB2YXIgbG9vcCA9IGZ1bmN0aW9uICgga2V5ICkge1xuICAgIGtleXMucHVzaChrZXkpO1xuICAgIHZhciB2YWx1ZSA9IHZhbGlkYXRlUHJvcChrZXksIHByb3BzT3B0aW9ucywgcHJvcHNEYXRhLCB2bSk7XG4gICAgLyogaXN0YW5idWwgaWdub3JlIGVsc2UgKi9cbiAgICBpZiAocHJvY2Vzcy5lbnYuTk9ERV9FTlYgIT09ICdwcm9kdWN0aW9uJykge1xuICAgICAgdmFyIGh5cGhlbmF0ZWRLZXkgPSBoeXBoZW5hdGUoa2V5KTtcbiAgICAgIGlmIChpc1Jlc2VydmVkQXR0cmlidXRlKGh5cGhlbmF0ZWRLZXkpIHx8XG4gICAgICAgICAgY29uZmlnLmlzUmVzZXJ2ZWRBdHRyKGh5cGhlbmF0ZWRLZXkpKSB7XG4gICAgICAgIHdhcm4oXG4gICAgICAgICAgKFwiXFxcIlwiICsgaHlwaGVuYXRlZEtleSArIFwiXFxcIiBpcyBhIHJlc2VydmVkIGF0dHJpYnV0ZSBhbmQgY2Fubm90IGJlIHVzZWQgYXMgY29tcG9uZW50IHByb3AuXCIpLFxuICAgICAgICAgIHZtXG4gICAgICAgICk7XG4gICAgICB9XG4gICAgICBkZWZpbmVSZWFjdGl2ZSQkMShwcm9wcywga2V5LCB2YWx1ZSwgZnVuY3Rpb24gKCkge1xuICAgICAgICBpZiAoIWlzUm9vdCAmJiAhaXNVcGRhdGluZ0NoaWxkQ29tcG9uZW50KSB7XG4gICAgICAgICAge1xuICAgICAgICAgICAgaWYodm0ubXBIb3N0ID09PSAnbXAtYmFpZHUnIHx8IHZtLm1wSG9zdCA9PT0gJ21wLWt1YWlzaG91JyB8fCB2bS5tcEhvc3QgPT09ICdtcC14aHMnKXsvL+eZvuW6puOAgeW/q+aJi+OAgeWwj+e6ouS5piBvYnNlcnZlciDlnKggc2V0RGF0YSBjYWxsYmFjayDkuYvlkI7op6blj5HvvIznm7TmjqXlv73nlaXor6Ugd2FyblxuICAgICAgICAgICAgICAgIHJldHVyblxuICAgICAgICAgICAgfVxuICAgICAgICAgICAgLy9maXhlZCBieSB4eHh4eHggX19uZXh0X3RpY2tfcGVuZGluZyx1bmk6Ly9mb3JtLWZpZWxkIOaXtuS4jeWRiuitplxuICAgICAgICAgICAgaWYoXG4gICAgICAgICAgICAgICAga2V5ID09PSAndmFsdWUnICYmIFxuICAgICAgICAgICAgICAgIEFycmF5LmlzQXJyYXkodm0uJG9wdGlvbnMuYmVoYXZpb3JzKSAmJlxuICAgICAgICAgICAgICAgIHZtLiRvcHRpb25zLmJlaGF2aW9ycy5pbmRleE9mKCd1bmk6Ly9mb3JtLWZpZWxkJykgIT09IC0xXG4gICAgICAgICAgICAgICl7XG4gICAgICAgICAgICAgIHJldHVyblxuICAgICAgICAgICAgfVxuICAgICAgICAgICAgaWYodm0uX2dldEZvcm1EYXRhKXtcbiAgICAgICAgICAgICAgcmV0dXJuXG4gICAgICAgICAgICB9XG4gICAgICAgICAgICB2YXIgJHBhcmVudCA9IHZtLiRwYXJlbnQ7XG4gICAgICAgICAgICB3aGlsZSgkcGFyZW50KXtcbiAgICAgICAgICAgICAgaWYoJHBhcmVudC5fX25leHRfdGlja19wZW5kaW5nKXtcbiAgICAgICAgICAgICAgICByZXR1cm4gIFxuICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICRwYXJlbnQgPSAkcGFyZW50LiRwYXJlbnQ7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgfVxuICAgICAgICAgIHdhcm4oXG4gICAgICAgICAgICBcIkF2b2lkIG11dGF0aW5nIGEgcHJvcCBkaXJlY3RseSBzaW5jZSB0aGUgdmFsdWUgd2lsbCBiZSBcIiArXG4gICAgICAgICAgICBcIm92ZXJ3cml0dGVuIHdoZW5ldmVyIHRoZSBwYXJlbnQgY29tcG9uZW50IHJlLXJlbmRlcnMuIFwiICtcbiAgICAgICAgICAgIFwiSW5zdGVhZCwgdXNlIGEgZGF0YSBvciBjb21wdXRlZCBwcm9wZXJ0eSBiYXNlZCBvbiB0aGUgcHJvcCdzIFwiICtcbiAgICAgICAgICAgIFwidmFsdWUuIFByb3AgYmVpbmcgbXV0YXRlZDogXFxcIlwiICsga2V5ICsgXCJcXFwiXCIsXG4gICAgICAgICAgICB2bVxuICAgICAgICAgICk7XG4gICAgICAgIH1cbiAgICAgIH0pO1xuICAgIH0gZWxzZSB7XG4gICAgICBkZWZpbmVSZWFjdGl2ZSQkMShwcm9wcywga2V5LCB2YWx1ZSk7XG4gICAgfVxuICAgIC8vIHN0YXRpYyBwcm9wcyBhcmUgYWxyZWFkeSBwcm94aWVkIG9uIHRoZSBjb21wb25lbnQncyBwcm90b3R5cGVcbiAgICAvLyBkdXJpbmcgVnVlLmV4dGVuZCgpLiBXZSBvbmx5IG5lZWQgdG8gcHJveHkgcHJvcHMgZGVmaW5lZCBhdFxuICAgIC8vIGluc3RhbnRpYXRpb24gaGVyZS5cbiAgICBpZiAoIShrZXkgaW4gdm0pKSB7XG4gICAgICBwcm94eSh2bSwgXCJfcHJvcHNcIiwga2V5KTtcbiAgICB9XG4gIH07XG5cbiAgZm9yICh2YXIga2V5IGluIHByb3BzT3B0aW9ucykgbG9vcCgga2V5ICk7XG4gIHRvZ2dsZU9ic2VydmluZyh0cnVlKTtcbn1cblxuZnVuY3Rpb24gaW5pdERhdGEgKHZtKSB7XG4gIHZhciBkYXRhID0gdm0uJG9wdGlvbnMuZGF0YTtcbiAgZGF0YSA9IHZtLl9kYXRhID0gdHlwZW9mIGRhdGEgPT09ICdmdW5jdGlvbidcbiAgICA/IGdldERhdGEoZGF0YSwgdm0pXG4gICAgOiBkYXRhIHx8IHt9O1xuICBpZiAoIWlzUGxhaW5PYmplY3QoZGF0YSkpIHtcbiAgICBkYXRhID0ge307XG4gICAgcHJvY2Vzcy5lbnYuTk9ERV9FTlYgIT09ICdwcm9kdWN0aW9uJyAmJiB3YXJuKFxuICAgICAgJ2RhdGEgZnVuY3Rpb25zIHNob3VsZCByZXR1cm4gYW4gb2JqZWN0OlxcbicgK1xuICAgICAgJ2h0dHBzOi8vdnVlanMub3JnL3YyL2d1aWRlL2NvbXBvbmVudHMuaHRtbCNkYXRhLU11c3QtQmUtYS1GdW5jdGlvbicsXG4gICAgICB2bVxuICAgICk7XG4gIH1cbiAgLy8gcHJveHkgZGF0YSBvbiBpbnN0YW5jZVxuICB2YXIga2V5cyA9IE9iamVjdC5rZXlzKGRhdGEpO1xuICB2YXIgcHJvcHMgPSB2bS4kb3B0aW9ucy5wcm9wcztcbiAgdmFyIG1ldGhvZHMgPSB2bS4kb3B0aW9ucy5tZXRob2RzO1xuICB2YXIgaSA9IGtleXMubGVuZ3RoO1xuICB3aGlsZSAoaS0tKSB7XG4gICAgdmFyIGtleSA9IGtleXNbaV07XG4gICAgaWYgKHByb2Nlc3MuZW52Lk5PREVfRU5WICE9PSAncHJvZHVjdGlvbicpIHtcbiAgICAgIGlmIChtZXRob2RzICYmIGhhc093bihtZXRob2RzLCBrZXkpKSB7XG4gICAgICAgIHdhcm4oXG4gICAgICAgICAgKFwiTWV0aG9kIFxcXCJcIiArIGtleSArIFwiXFxcIiBoYXMgYWxyZWFkeSBiZWVuIGRlZmluZWQgYXMgYSBkYXRhIHByb3BlcnR5LlwiKSxcbiAgICAgICAgICB2bVxuICAgICAgICApO1xuICAgICAgfVxuICAgIH1cbiAgICBpZiAocHJvcHMgJiYgaGFzT3duKHByb3BzLCBrZXkpKSB7XG4gICAgICBwcm9jZXNzLmVudi5OT0RFX0VOViAhPT0gJ3Byb2R1Y3Rpb24nICYmIHdhcm4oXG4gICAgICAgIFwiVGhlIGRhdGEgcHJvcGVydHkgXFxcIlwiICsga2V5ICsgXCJcXFwiIGlzIGFscmVhZHkgZGVjbGFyZWQgYXMgYSBwcm9wLiBcIiArXG4gICAgICAgIFwiVXNlIHByb3AgZGVmYXVsdCB2YWx1ZSBpbnN0ZWFkLlwiLFxuICAgICAgICB2bVxuICAgICAgKTtcbiAgICB9IGVsc2UgaWYgKCFpc1Jlc2VydmVkKGtleSkpIHtcbiAgICAgIHByb3h5KHZtLCBcIl9kYXRhXCIsIGtleSk7XG4gICAgfVxuICB9XG4gIC8vIG9ic2VydmUgZGF0YVxuICBvYnNlcnZlKGRhdGEsIHRydWUgLyogYXNSb290RGF0YSAqLyk7XG59XG5cbmZ1bmN0aW9uIGdldERhdGEgKGRhdGEsIHZtKSB7XG4gIC8vICM3NTczIGRpc2FibGUgZGVwIGNvbGxlY3Rpb24gd2hlbiBpbnZva2luZyBkYXRhIGdldHRlcnNcbiAgcHVzaFRhcmdldCgpO1xuICB0cnkge1xuICAgIHJldHVybiBkYXRhLmNhbGwodm0sIHZtKVxuICB9IGNhdGNoIChlKSB7XG4gICAgaGFuZGxlRXJyb3IoZSwgdm0sIFwiZGF0YSgpXCIpO1xuICAgIHJldHVybiB7fVxuICB9IGZpbmFsbHkge1xuICAgIHBvcFRhcmdldCgpO1xuICB9XG59XG5cbnZhciBjb21wdXRlZFdhdGNoZXJPcHRpb25zID0geyBsYXp5OiB0cnVlIH07XG5cbmZ1bmN0aW9uIGluaXRDb21wdXRlZCAodm0sIGNvbXB1dGVkKSB7XG4gIC8vICRmbG93LWRpc2FibGUtbGluZVxuICB2YXIgd2F0Y2hlcnMgPSB2bS5fY29tcHV0ZWRXYXRjaGVycyA9IE9iamVjdC5jcmVhdGUobnVsbCk7XG4gIC8vIGNvbXB1dGVkIHByb3BlcnRpZXMgYXJlIGp1c3QgZ2V0dGVycyBkdXJpbmcgU1NSXG4gIHZhciBpc1NTUiA9IGlzU2VydmVyUmVuZGVyaW5nKCk7XG5cbiAgZm9yICh2YXIga2V5IGluIGNvbXB1dGVkKSB7XG4gICAgdmFyIHVzZXJEZWYgPSBjb21wdXRlZFtrZXldO1xuICAgIHZhciBnZXR0ZXIgPSB0eXBlb2YgdXNlckRlZiA9PT0gJ2Z1bmN0aW9uJyA/IHVzZXJEZWYgOiB1c2VyRGVmLmdldDtcbiAgICBpZiAocHJvY2Vzcy5lbnYuTk9ERV9FTlYgIT09ICdwcm9kdWN0aW9uJyAmJiBnZXR0ZXIgPT0gbnVsbCkge1xuICAgICAgd2FybihcbiAgICAgICAgKFwiR2V0dGVyIGlzIG1pc3NpbmcgZm9yIGNvbXB1dGVkIHByb3BlcnR5IFxcXCJcIiArIGtleSArIFwiXFxcIi5cIiksXG4gICAgICAgIHZtXG4gICAgICApO1xuICAgIH1cblxuICAgIGlmICghaXNTU1IpIHtcbiAgICAgIC8vIGNyZWF0ZSBpbnRlcm5hbCB3YXRjaGVyIGZvciB0aGUgY29tcHV0ZWQgcHJvcGVydHkuXG4gICAgICB3YXRjaGVyc1trZXldID0gbmV3IFdhdGNoZXIoXG4gICAgICAgIHZtLFxuICAgICAgICBnZXR0ZXIgfHwgbm9vcCxcbiAgICAgICAgbm9vcCxcbiAgICAgICAgY29tcHV0ZWRXYXRjaGVyT3B0aW9uc1xuICAgICAgKTtcbiAgICB9XG5cbiAgICAvLyBjb21wb25lbnQtZGVmaW5lZCBjb21wdXRlZCBwcm9wZXJ0aWVzIGFyZSBhbHJlYWR5IGRlZmluZWQgb24gdGhlXG4gICAgLy8gY29tcG9uZW50IHByb3RvdHlwZS4gV2Ugb25seSBuZWVkIHRvIGRlZmluZSBjb21wdXRlZCBwcm9wZXJ0aWVzIGRlZmluZWRcbiAgICAvLyBhdCBpbnN0YW50aWF0aW9uIGhlcmUuXG4gICAgaWYgKCEoa2V5IGluIHZtKSkge1xuICAgICAgZGVmaW5lQ29tcHV0ZWQodm0sIGtleSwgdXNlckRlZik7XG4gICAgfSBlbHNlIGlmIChwcm9jZXNzLmVudi5OT0RFX0VOViAhPT0gJ3Byb2R1Y3Rpb24nKSB7XG4gICAgICBpZiAoa2V5IGluIHZtLiRkYXRhKSB7XG4gICAgICAgIHdhcm4oKFwiVGhlIGNvbXB1dGVkIHByb3BlcnR5IFxcXCJcIiArIGtleSArIFwiXFxcIiBpcyBhbHJlYWR5IGRlZmluZWQgaW4gZGF0YS5cIiksIHZtKTtcbiAgICAgIH0gZWxzZSBpZiAodm0uJG9wdGlvbnMucHJvcHMgJiYga2V5IGluIHZtLiRvcHRpb25zLnByb3BzKSB7XG4gICAgICAgIHdhcm4oKFwiVGhlIGNvbXB1dGVkIHByb3BlcnR5IFxcXCJcIiArIGtleSArIFwiXFxcIiBpcyBhbHJlYWR5IGRlZmluZWQgYXMgYSBwcm9wLlwiKSwgdm0pO1xuICAgICAgfVxuICAgIH1cbiAgfVxufVxuXG5mdW5jdGlvbiBkZWZpbmVDb21wdXRlZCAoXG4gIHRhcmdldCxcbiAga2V5LFxuICB1c2VyRGVmXG4pIHtcbiAgdmFyIHNob3VsZENhY2hlID0gIWlzU2VydmVyUmVuZGVyaW5nKCk7XG4gIGlmICh0eXBlb2YgdXNlckRlZiA9PT0gJ2Z1bmN0aW9uJykge1xuICAgIHNoYXJlZFByb3BlcnR5RGVmaW5pdGlvbi5nZXQgPSBzaG91bGRDYWNoZVxuICAgICAgPyBjcmVhdGVDb21wdXRlZEdldHRlcihrZXkpXG4gICAgICA6IGNyZWF0ZUdldHRlckludm9rZXIodXNlckRlZik7XG4gICAgc2hhcmVkUHJvcGVydHlEZWZpbml0aW9uLnNldCA9IG5vb3A7XG4gIH0gZWxzZSB7XG4gICAgc2hhcmVkUHJvcGVydHlEZWZpbml0aW9uLmdldCA9IHVzZXJEZWYuZ2V0XG4gICAgICA/IHNob3VsZENhY2hlICYmIHVzZXJEZWYuY2FjaGUgIT09IGZhbHNlXG4gICAgICAgID8gY3JlYXRlQ29tcHV0ZWRHZXR0ZXIoa2V5KVxuICAgICAgICA6IGNyZWF0ZUdldHRlckludm9rZXIodXNlckRlZi5nZXQpXG4gICAgICA6IG5vb3A7XG4gICAgc2hhcmVkUHJvcGVydHlEZWZpbml0aW9uLnNldCA9IHVzZXJEZWYuc2V0IHx8IG5vb3A7XG4gIH1cbiAgaWYgKHByb2Nlc3MuZW52Lk5PREVfRU5WICE9PSAncHJvZHVjdGlvbicgJiZcbiAgICAgIHNoYXJlZFByb3BlcnR5RGVmaW5pdGlvbi5zZXQgPT09IG5vb3ApIHtcbiAgICBzaGFyZWRQcm9wZXJ0eURlZmluaXRpb24uc2V0ID0gZnVuY3Rpb24gKCkge1xuICAgICAgd2FybihcbiAgICAgICAgKFwiQ29tcHV0ZWQgcHJvcGVydHkgXFxcIlwiICsga2V5ICsgXCJcXFwiIHdhcyBhc3NpZ25lZCB0byBidXQgaXQgaGFzIG5vIHNldHRlci5cIiksXG4gICAgICAgIHRoaXNcbiAgICAgICk7XG4gICAgfTtcbiAgfVxuICBPYmplY3QuZGVmaW5lUHJvcGVydHkodGFyZ2V0LCBrZXksIHNoYXJlZFByb3BlcnR5RGVmaW5pdGlvbik7XG59XG5cbmZ1bmN0aW9uIGNyZWF0ZUNvbXB1dGVkR2V0dGVyIChrZXkpIHtcbiAgcmV0dXJuIGZ1bmN0aW9uIGNvbXB1dGVkR2V0dGVyICgpIHtcbiAgICB2YXIgd2F0Y2hlciA9IHRoaXMuX2NvbXB1dGVkV2F0Y2hlcnMgJiYgdGhpcy5fY29tcHV0ZWRXYXRjaGVyc1trZXldO1xuICAgIGlmICh3YXRjaGVyKSB7XG4gICAgICBpZiAod2F0Y2hlci5kaXJ0eSkge1xuICAgICAgICB3YXRjaGVyLmV2YWx1YXRlKCk7XG4gICAgICB9XG4gICAgICBpZiAoRGVwLlNoYXJlZE9iamVjdC50YXJnZXQpIHsvLyBmaXhlZCBieSB4eHh4eHhcbiAgICAgICAgd2F0Y2hlci5kZXBlbmQoKTtcbiAgICAgIH1cbiAgICAgIHJldHVybiB3YXRjaGVyLnZhbHVlXG4gICAgfVxuICB9XG59XG5cbmZ1bmN0aW9uIGNyZWF0ZUdldHRlckludm9rZXIoZm4pIHtcbiAgcmV0dXJuIGZ1bmN0aW9uIGNvbXB1dGVkR2V0dGVyICgpIHtcbiAgICByZXR1cm4gZm4uY2FsbCh0aGlzLCB0aGlzKVxuICB9XG59XG5cbmZ1bmN0aW9uIGluaXRNZXRob2RzICh2bSwgbWV0aG9kcykge1xuICB2YXIgcHJvcHMgPSB2bS4kb3B0aW9ucy5wcm9wcztcbiAgZm9yICh2YXIga2V5IGluIG1ldGhvZHMpIHtcbiAgICBpZiAocHJvY2Vzcy5lbnYuTk9ERV9FTlYgIT09ICdwcm9kdWN0aW9uJykge1xuICAgICAgaWYgKHR5cGVvZiBtZXRob2RzW2tleV0gIT09ICdmdW5jdGlvbicpIHtcbiAgICAgICAgd2FybihcbiAgICAgICAgICBcIk1ldGhvZCBcXFwiXCIgKyBrZXkgKyBcIlxcXCIgaGFzIHR5cGUgXFxcIlwiICsgKHR5cGVvZiBtZXRob2RzW2tleV0pICsgXCJcXFwiIGluIHRoZSBjb21wb25lbnQgZGVmaW5pdGlvbi4gXCIgK1xuICAgICAgICAgIFwiRGlkIHlvdSByZWZlcmVuY2UgdGhlIGZ1bmN0aW9uIGNvcnJlY3RseT9cIixcbiAgICAgICAgICB2bVxuICAgICAgICApO1xuICAgICAgfVxuICAgICAgaWYgKHByb3BzICYmIGhhc093bihwcm9wcywga2V5KSkge1xuICAgICAgICB3YXJuKFxuICAgICAgICAgIChcIk1ldGhvZCBcXFwiXCIgKyBrZXkgKyBcIlxcXCIgaGFzIGFscmVhZHkgYmVlbiBkZWZpbmVkIGFzIGEgcHJvcC5cIiksXG4gICAgICAgICAgdm1cbiAgICAgICAgKTtcbiAgICAgIH1cbiAgICAgIGlmICgoa2V5IGluIHZtKSAmJiBpc1Jlc2VydmVkKGtleSkpIHtcbiAgICAgICAgd2FybihcbiAgICAgICAgICBcIk1ldGhvZCBcXFwiXCIgKyBrZXkgKyBcIlxcXCIgY29uZmxpY3RzIHdpdGggYW4gZXhpc3RpbmcgVnVlIGluc3RhbmNlIG1ldGhvZC4gXCIgK1xuICAgICAgICAgIFwiQXZvaWQgZGVmaW5pbmcgY29tcG9uZW50IG1ldGhvZHMgdGhhdCBzdGFydCB3aXRoIF8gb3IgJC5cIlxuICAgICAgICApO1xuICAgICAgfVxuICAgIH1cbiAgICB2bVtrZXldID0gdHlwZW9mIG1ldGhvZHNba2V5XSAhPT0gJ2Z1bmN0aW9uJyA/IG5vb3AgOiBiaW5kKG1ldGhvZHNba2V5XSwgdm0pO1xuICB9XG59XG5cbmZ1bmN0aW9uIGluaXRXYXRjaCAodm0sIHdhdGNoKSB7XG4gIGZvciAodmFyIGtleSBpbiB3YXRjaCkge1xuICAgIHZhciBoYW5kbGVyID0gd2F0Y2hba2V5XTtcbiAgICBpZiAoQXJyYXkuaXNBcnJheShoYW5kbGVyKSkge1xuICAgICAgZm9yICh2YXIgaSA9IDA7IGkgPCBoYW5kbGVyLmxlbmd0aDsgaSsrKSB7XG4gICAgICAgIGNyZWF0ZVdhdGNoZXIodm0sIGtleSwgaGFuZGxlcltpXSk7XG4gICAgICB9XG4gICAgfSBlbHNlIHtcbiAgICAgIGNyZWF0ZVdhdGNoZXIodm0sIGtleSwgaGFuZGxlcik7XG4gICAgfVxuICB9XG59XG5cbmZ1bmN0aW9uIGNyZWF0ZVdhdGNoZXIgKFxuICB2bSxcbiAgZXhwT3JGbixcbiAgaGFuZGxlcixcbiAgb3B0aW9uc1xuKSB7XG4gIGlmIChpc1BsYWluT2JqZWN0KGhhbmRsZXIpKSB7XG4gICAgb3B0aW9ucyA9IGhhbmRsZXI7XG4gICAgaGFuZGxlciA9IGhhbmRsZXIuaGFuZGxlcjtcbiAgfVxuICBpZiAodHlwZW9mIGhhbmRsZXIgPT09ICdzdHJpbmcnKSB7XG4gICAgaGFuZGxlciA9IHZtW2hhbmRsZXJdO1xuICB9XG4gIHJldHVybiB2bS4kd2F0Y2goZXhwT3JGbiwgaGFuZGxlciwgb3B0aW9ucylcbn1cblxuZnVuY3Rpb24gc3RhdGVNaXhpbiAoVnVlKSB7XG4gIC8vIGZsb3cgc29tZWhvdyBoYXMgcHJvYmxlbXMgd2l0aCBkaXJlY3RseSBkZWNsYXJlZCBkZWZpbml0aW9uIG9iamVjdFxuICAvLyB3aGVuIHVzaW5nIE9iamVjdC5kZWZpbmVQcm9wZXJ0eSwgc28gd2UgaGF2ZSB0byBwcm9jZWR1cmFsbHkgYnVpbGQgdXBcbiAgLy8gdGhlIG9iamVjdCBoZXJlLlxuICB2YXIgZGF0YURlZiA9IHt9O1xuICBkYXRhRGVmLmdldCA9IGZ1bmN0aW9uICgpIHsgcmV0dXJuIHRoaXMuX2RhdGEgfTtcbiAgdmFyIHByb3BzRGVmID0ge307XG4gIHByb3BzRGVmLmdldCA9IGZ1bmN0aW9uICgpIHsgcmV0dXJuIHRoaXMuX3Byb3BzIH07XG4gIGlmIChwcm9jZXNzLmVudi5OT0RFX0VOViAhPT0gJ3Byb2R1Y3Rpb24nKSB7XG4gICAgZGF0YURlZi5zZXQgPSBmdW5jdGlvbiAoKSB7XG4gICAgICB3YXJuKFxuICAgICAgICAnQXZvaWQgcmVwbGFjaW5nIGluc3RhbmNlIHJvb3QgJGRhdGEuICcgK1xuICAgICAgICAnVXNlIG5lc3RlZCBkYXRhIHByb3BlcnRpZXMgaW5zdGVhZC4nLFxuICAgICAgICB0aGlzXG4gICAgICApO1xuICAgIH07XG4gICAgcHJvcHNEZWYuc2V0ID0gZnVuY3Rpb24gKCkge1xuICAgICAgd2FybihcIiRwcm9wcyBpcyByZWFkb25seS5cIiwgdGhpcyk7XG4gICAgfTtcbiAgfVxuICBPYmplY3QuZGVmaW5lUHJvcGVydHkoVnVlLnByb3RvdHlwZSwgJyRkYXRhJywgZGF0YURlZik7XG4gIE9iamVjdC5kZWZpbmVQcm9wZXJ0eShWdWUucHJvdG90eXBlLCAnJHByb3BzJywgcHJvcHNEZWYpO1xuXG4gIFZ1ZS5wcm90b3R5cGUuJHNldCA9IHNldDtcbiAgVnVlLnByb3RvdHlwZS4kZGVsZXRlID0gZGVsO1xuXG4gIFZ1ZS5wcm90b3R5cGUuJHdhdGNoID0gZnVuY3Rpb24gKFxuICAgIGV4cE9yRm4sXG4gICAgY2IsXG4gICAgb3B0aW9uc1xuICApIHtcbiAgICB2YXIgdm0gPSB0aGlzO1xuICAgIGlmIChpc1BsYWluT2JqZWN0KGNiKSkge1xuICAgICAgcmV0dXJuIGNyZWF0ZVdhdGNoZXIodm0sIGV4cE9yRm4sIGNiLCBvcHRpb25zKVxuICAgIH1cbiAgICBvcHRpb25zID0gb3B0aW9ucyB8fCB7fTtcbiAgICBvcHRpb25zLnVzZXIgPSB0cnVlO1xuICAgIHZhciB3YXRjaGVyID0gbmV3IFdhdGNoZXIodm0sIGV4cE9yRm4sIGNiLCBvcHRpb25zKTtcbiAgICBpZiAob3B0aW9ucy5pbW1lZGlhdGUpIHtcbiAgICAgIHRyeSB7XG4gICAgICAgIGNiLmNhbGwodm0sIHdhdGNoZXIudmFsdWUpO1xuICAgICAgfSBjYXRjaCAoZXJyb3IpIHtcbiAgICAgICAgaGFuZGxlRXJyb3IoZXJyb3IsIHZtLCAoXCJjYWxsYmFjayBmb3IgaW1tZWRpYXRlIHdhdGNoZXIgXFxcIlwiICsgKHdhdGNoZXIuZXhwcmVzc2lvbikgKyBcIlxcXCJcIikpO1xuICAgICAgfVxuICAgIH1cbiAgICByZXR1cm4gZnVuY3Rpb24gdW53YXRjaEZuICgpIHtcbiAgICAgIHdhdGNoZXIudGVhcmRvd24oKTtcbiAgICB9XG4gIH07XG59XG5cbi8qICAqL1xuXG52YXIgdWlkJDMgPSAwO1xuXG5mdW5jdGlvbiBpbml0TWl4aW4gKFZ1ZSkge1xuICBWdWUucHJvdG90eXBlLl9pbml0ID0gZnVuY3Rpb24gKG9wdGlvbnMpIHtcbiAgICB2YXIgdm0gPSB0aGlzO1xuICAgIC8vIGEgdWlkXG4gICAgdm0uX3VpZCA9IHVpZCQzKys7XG5cbiAgICB2YXIgc3RhcnRUYWcsIGVuZFRhZztcbiAgICAvKiBpc3RhbmJ1bCBpZ25vcmUgaWYgKi9cbiAgICBpZiAocHJvY2Vzcy5lbnYuTk9ERV9FTlYgIT09ICdwcm9kdWN0aW9uJyAmJiBjb25maWcucGVyZm9ybWFuY2UgJiYgbWFyaykge1xuICAgICAgc3RhcnRUYWcgPSBcInZ1ZS1wZXJmLXN0YXJ0OlwiICsgKHZtLl91aWQpO1xuICAgICAgZW5kVGFnID0gXCJ2dWUtcGVyZi1lbmQ6XCIgKyAodm0uX3VpZCk7XG4gICAgICBtYXJrKHN0YXJ0VGFnKTtcbiAgICB9XG5cbiAgICAvLyBhIGZsYWcgdG8gYXZvaWQgdGhpcyBiZWluZyBvYnNlcnZlZFxuICAgIHZtLl9pc1Z1ZSA9IHRydWU7XG4gICAgLy8gbWVyZ2Ugb3B0aW9uc1xuICAgIGlmIChvcHRpb25zICYmIG9wdGlvbnMuX2lzQ29tcG9uZW50KSB7XG4gICAgICAvLyBvcHRpbWl6ZSBpbnRlcm5hbCBjb21wb25lbnQgaW5zdGFudGlhdGlvblxuICAgICAgLy8gc2luY2UgZHluYW1pYyBvcHRpb25zIG1lcmdpbmcgaXMgcHJldHR5IHNsb3csIGFuZCBub25lIG9mIHRoZVxuICAgICAgLy8gaW50ZXJuYWwgY29tcG9uZW50IG9wdGlvbnMgbmVlZHMgc3BlY2lhbCB0cmVhdG1lbnQuXG4gICAgICBpbml0SW50ZXJuYWxDb21wb25lbnQodm0sIG9wdGlvbnMpO1xuICAgIH0gZWxzZSB7XG4gICAgICB2bS4kb3B0aW9ucyA9IG1lcmdlT3B0aW9ucyhcbiAgICAgICAgcmVzb2x2ZUNvbnN0cnVjdG9yT3B0aW9ucyh2bS5jb25zdHJ1Y3RvciksXG4gICAgICAgIG9wdGlvbnMgfHwge30sXG4gICAgICAgIHZtXG4gICAgICApO1xuICAgIH1cbiAgICAvKiBpc3RhbmJ1bCBpZ25vcmUgZWxzZSAqL1xuICAgIGlmIChwcm9jZXNzLmVudi5OT0RFX0VOViAhPT0gJ3Byb2R1Y3Rpb24nKSB7XG4gICAgICBpbml0UHJveHkodm0pO1xuICAgIH0gZWxzZSB7XG4gICAgICB2bS5fcmVuZGVyUHJveHkgPSB2bTtcbiAgICB9XG4gICAgLy8gZXhwb3NlIHJlYWwgc2VsZlxuICAgIHZtLl9zZWxmID0gdm07XG4gICAgaW5pdExpZmVjeWNsZSh2bSk7XG4gICAgaW5pdEV2ZW50cyh2bSk7XG4gICAgaW5pdFJlbmRlcih2bSk7XG4gICAgY2FsbEhvb2sodm0sICdiZWZvcmVDcmVhdGUnKTtcbiAgICAhdm0uXyRmYWxsYmFjayAmJiBpbml0SW5qZWN0aW9ucyh2bSk7IC8vIHJlc29sdmUgaW5qZWN0aW9ucyBiZWZvcmUgZGF0YS9wcm9wcyAgXG4gICAgaW5pdFN0YXRlKHZtKTtcbiAgICAhdm0uXyRmYWxsYmFjayAmJiBpbml0UHJvdmlkZSh2bSk7IC8vIHJlc29sdmUgcHJvdmlkZSBhZnRlciBkYXRhL3Byb3BzXG4gICAgIXZtLl8kZmFsbGJhY2sgJiYgY2FsbEhvb2sodm0sICdjcmVhdGVkJyk7ICAgICAgXG5cbiAgICAvKiBpc3RhbmJ1bCBpZ25vcmUgaWYgKi9cbiAgICBpZiAocHJvY2Vzcy5lbnYuTk9ERV9FTlYgIT09ICdwcm9kdWN0aW9uJyAmJiBjb25maWcucGVyZm9ybWFuY2UgJiYgbWFyaykge1xuICAgICAgdm0uX25hbWUgPSBmb3JtYXRDb21wb25lbnROYW1lKHZtLCBmYWxzZSk7XG4gICAgICBtYXJrKGVuZFRhZyk7XG4gICAgICBtZWFzdXJlKChcInZ1ZSBcIiArICh2bS5fbmFtZSkgKyBcIiBpbml0XCIpLCBzdGFydFRhZywgZW5kVGFnKTtcbiAgICB9XG5cbiAgICBpZiAodm0uJG9wdGlvbnMuZWwpIHtcbiAgICAgIHZtLiRtb3VudCh2bS4kb3B0aW9ucy5lbCk7XG4gICAgfVxuICB9O1xufVxuXG5mdW5jdGlvbiBpbml0SW50ZXJuYWxDb21wb25lbnQgKHZtLCBvcHRpb25zKSB7XG4gIHZhciBvcHRzID0gdm0uJG9wdGlvbnMgPSBPYmplY3QuY3JlYXRlKHZtLmNvbnN0cnVjdG9yLm9wdGlvbnMpO1xuICAvLyBkb2luZyB0aGlzIGJlY2F1c2UgaXQncyBmYXN0ZXIgdGhhbiBkeW5hbWljIGVudW1lcmF0aW9uLlxuICB2YXIgcGFyZW50Vm5vZGUgPSBvcHRpb25zLl9wYXJlbnRWbm9kZTtcbiAgb3B0cy5wYXJlbnQgPSBvcHRpb25zLnBhcmVudDtcbiAgb3B0cy5fcGFyZW50Vm5vZGUgPSBwYXJlbnRWbm9kZTtcblxuICB2YXIgdm5vZGVDb21wb25lbnRPcHRpb25zID0gcGFyZW50Vm5vZGUuY29tcG9uZW50T3B0aW9ucztcbiAgb3B0cy5wcm9wc0RhdGEgPSB2bm9kZUNvbXBvbmVudE9wdGlvbnMucHJvcHNEYXRhO1xuICBvcHRzLl9wYXJlbnRMaXN0ZW5lcnMgPSB2bm9kZUNvbXBvbmVudE9wdGlvbnMubGlzdGVuZXJzO1xuICBvcHRzLl9yZW5kZXJDaGlsZHJlbiA9IHZub2RlQ29tcG9uZW50T3B0aW9ucy5jaGlsZHJlbjtcbiAgb3B0cy5fY29tcG9uZW50VGFnID0gdm5vZGVDb21wb25lbnRPcHRpb25zLnRhZztcblxuICBpZiAob3B0aW9ucy5yZW5kZXIpIHtcbiAgICBvcHRzLnJlbmRlciA9IG9wdGlvbnMucmVuZGVyO1xuICAgIG9wdHMuc3RhdGljUmVuZGVyRm5zID0gb3B0aW9ucy5zdGF0aWNSZW5kZXJGbnM7XG4gIH1cbn1cblxuZnVuY3Rpb24gcmVzb2x2ZUNvbnN0cnVjdG9yT3B0aW9ucyAoQ3Rvcikge1xuICB2YXIgb3B0aW9ucyA9IEN0b3Iub3B0aW9ucztcbiAgaWYgKEN0b3Iuc3VwZXIpIHtcbiAgICB2YXIgc3VwZXJPcHRpb25zID0gcmVzb2x2ZUNvbnN0cnVjdG9yT3B0aW9ucyhDdG9yLnN1cGVyKTtcbiAgICB2YXIgY2FjaGVkU3VwZXJPcHRpb25zID0gQ3Rvci5zdXBlck9wdGlvbnM7XG4gICAgaWYgKHN1cGVyT3B0aW9ucyAhPT0gY2FjaGVkU3VwZXJPcHRpb25zKSB7XG4gICAgICAvLyBzdXBlciBvcHRpb24gY2hhbmdlZCxcbiAgICAgIC8vIG5lZWQgdG8gcmVzb2x2ZSBuZXcgb3B0aW9ucy5cbiAgICAgIEN0b3Iuc3VwZXJPcHRpb25zID0gc3VwZXJPcHRpb25zO1xuICAgICAgLy8gY2hlY2sgaWYgdGhlcmUgYXJlIGFueSBsYXRlLW1vZGlmaWVkL2F0dGFjaGVkIG9wdGlvbnMgKCM0OTc2KVxuICAgICAgdmFyIG1vZGlmaWVkT3B0aW9ucyA9IHJlc29sdmVNb2RpZmllZE9wdGlvbnMoQ3Rvcik7XG4gICAgICAvLyB1cGRhdGUgYmFzZSBleHRlbmQgb3B0aW9uc1xuICAgICAgaWYgKG1vZGlmaWVkT3B0aW9ucykge1xuICAgICAgICBleHRlbmQoQ3Rvci5leHRlbmRPcHRpb25zLCBtb2RpZmllZE9wdGlvbnMpO1xuICAgICAgfVxuICAgICAgb3B0aW9ucyA9IEN0b3Iub3B0aW9ucyA9IG1lcmdlT3B0aW9ucyhzdXBlck9wdGlvbnMsIEN0b3IuZXh0ZW5kT3B0aW9ucyk7XG4gICAgICBpZiAob3B0aW9ucy5uYW1lKSB7XG4gICAgICAgIG9wdGlvbnMuY29tcG9uZW50c1tvcHRpb25zLm5hbWVdID0gQ3RvcjtcbiAgICAgIH1cbiAgICB9XG4gIH1cbiAgcmV0dXJuIG9wdGlvbnNcbn1cblxuZnVuY3Rpb24gcmVzb2x2ZU1vZGlmaWVkT3B0aW9ucyAoQ3Rvcikge1xuICB2YXIgbW9kaWZpZWQ7XG4gIHZhciBsYXRlc3QgPSBDdG9yLm9wdGlvbnM7XG4gIHZhciBzZWFsZWQgPSBDdG9yLnNlYWxlZE9wdGlvbnM7XG4gIGZvciAodmFyIGtleSBpbiBsYXRlc3QpIHtcbiAgICBpZiAobGF0ZXN0W2tleV0gIT09IHNlYWxlZFtrZXldKSB7XG4gICAgICBpZiAoIW1vZGlmaWVkKSB7IG1vZGlmaWVkID0ge307IH1cbiAgICAgIG1vZGlmaWVkW2tleV0gPSBsYXRlc3Rba2V5XTtcbiAgICB9XG4gIH1cbiAgcmV0dXJuIG1vZGlmaWVkXG59XG5cbmZ1bmN0aW9uIFZ1ZSAob3B0aW9ucykge1xuICBpZiAocHJvY2Vzcy5lbnYuTk9ERV9FTlYgIT09ICdwcm9kdWN0aW9uJyAmJlxuICAgICEodGhpcyBpbnN0YW5jZW9mIFZ1ZSlcbiAgKSB7XG4gICAgd2FybignVnVlIGlzIGEgY29uc3RydWN0b3IgYW5kIHNob3VsZCBiZSBjYWxsZWQgd2l0aCB0aGUgYG5ld2Aga2V5d29yZCcpO1xuICB9XG4gIHRoaXMuX2luaXQob3B0aW9ucyk7XG59XG5cbmluaXRNaXhpbihWdWUpO1xuc3RhdGVNaXhpbihWdWUpO1xuZXZlbnRzTWl4aW4oVnVlKTtcbmxpZmVjeWNsZU1peGluKFZ1ZSk7XG5yZW5kZXJNaXhpbihWdWUpO1xuXG4vKiAgKi9cblxuZnVuY3Rpb24gaW5pdFVzZSAoVnVlKSB7XG4gIFZ1ZS51c2UgPSBmdW5jdGlvbiAocGx1Z2luKSB7XG4gICAgdmFyIGluc3RhbGxlZFBsdWdpbnMgPSAodGhpcy5faW5zdGFsbGVkUGx1Z2lucyB8fCAodGhpcy5faW5zdGFsbGVkUGx1Z2lucyA9IFtdKSk7XG4gICAgaWYgKGluc3RhbGxlZFBsdWdpbnMuaW5kZXhPZihwbHVnaW4pID4gLTEpIHtcbiAgICAgIHJldHVybiB0aGlzXG4gICAgfVxuXG4gICAgLy8gYWRkaXRpb25hbCBwYXJhbWV0ZXJzXG4gICAgdmFyIGFyZ3MgPSB0b0FycmF5KGFyZ3VtZW50cywgMSk7XG4gICAgYXJncy51bnNoaWZ0KHRoaXMpO1xuICAgIGlmICh0eXBlb2YgcGx1Z2luLmluc3RhbGwgPT09ICdmdW5jdGlvbicpIHtcbiAgICAgIHBsdWdpbi5pbnN0YWxsLmFwcGx5KHBsdWdpbiwgYXJncyk7XG4gICAgfSBlbHNlIGlmICh0eXBlb2YgcGx1Z2luID09PSAnZnVuY3Rpb24nKSB7XG4gICAgICBwbHVnaW4uYXBwbHkobnVsbCwgYXJncyk7XG4gICAgfVxuICAgIGluc3RhbGxlZFBsdWdpbnMucHVzaChwbHVnaW4pO1xuICAgIHJldHVybiB0aGlzXG4gIH07XG59XG5cbi8qICAqL1xuXG5mdW5jdGlvbiBpbml0TWl4aW4kMSAoVnVlKSB7XG4gIFZ1ZS5taXhpbiA9IGZ1bmN0aW9uIChtaXhpbikge1xuICAgIHRoaXMub3B0aW9ucyA9IG1lcmdlT3B0aW9ucyh0aGlzLm9wdGlvbnMsIG1peGluKTtcbiAgICByZXR1cm4gdGhpc1xuICB9O1xufVxuXG4vKiAgKi9cblxuZnVuY3Rpb24gaW5pdEV4dGVuZCAoVnVlKSB7XG4gIC8qKlxuICAgKiBFYWNoIGluc3RhbmNlIGNvbnN0cnVjdG9yLCBpbmNsdWRpbmcgVnVlLCBoYXMgYSB1bmlxdWVcbiAgICogY2lkLiBUaGlzIGVuYWJsZXMgdXMgdG8gY3JlYXRlIHdyYXBwZWQgXCJjaGlsZFxuICAgKiBjb25zdHJ1Y3RvcnNcIiBmb3IgcHJvdG90eXBhbCBpbmhlcml0YW5jZSBhbmQgY2FjaGUgdGhlbS5cbiAgICovXG4gIFZ1ZS5jaWQgPSAwO1xuICB2YXIgY2lkID0gMTtcblxuICAvKipcbiAgICogQ2xhc3MgaW5oZXJpdGFuY2VcbiAgICovXG4gIFZ1ZS5leHRlbmQgPSBmdW5jdGlvbiAoZXh0ZW5kT3B0aW9ucykge1xuICAgIGV4dGVuZE9wdGlvbnMgPSBleHRlbmRPcHRpb25zIHx8IHt9O1xuICAgIHZhciBTdXBlciA9IHRoaXM7XG4gICAgdmFyIFN1cGVySWQgPSBTdXBlci5jaWQ7XG4gICAgdmFyIGNhY2hlZEN0b3JzID0gZXh0ZW5kT3B0aW9ucy5fQ3RvciB8fCAoZXh0ZW5kT3B0aW9ucy5fQ3RvciA9IHt9KTtcbiAgICBpZiAoY2FjaGVkQ3RvcnNbU3VwZXJJZF0pIHtcbiAgICAgIHJldHVybiBjYWNoZWRDdG9yc1tTdXBlcklkXVxuICAgIH1cblxuICAgIHZhciBuYW1lID0gZXh0ZW5kT3B0aW9ucy5uYW1lIHx8IFN1cGVyLm9wdGlvbnMubmFtZTtcbiAgICBpZiAocHJvY2Vzcy5lbnYuTk9ERV9FTlYgIT09ICdwcm9kdWN0aW9uJyAmJiBuYW1lKSB7XG4gICAgICB2YWxpZGF0ZUNvbXBvbmVudE5hbWUobmFtZSk7XG4gICAgfVxuXG4gICAgdmFyIFN1YiA9IGZ1bmN0aW9uIFZ1ZUNvbXBvbmVudCAob3B0aW9ucykge1xuICAgICAgdGhpcy5faW5pdChvcHRpb25zKTtcbiAgICB9O1xuICAgIFN1Yi5wcm90b3R5cGUgPSBPYmplY3QuY3JlYXRlKFN1cGVyLnByb3RvdHlwZSk7XG4gICAgU3ViLnByb3RvdHlwZS5jb25zdHJ1Y3RvciA9IFN1YjtcbiAgICBTdWIuY2lkID0gY2lkKys7XG4gICAgU3ViLm9wdGlvbnMgPSBtZXJnZU9wdGlvbnMoXG4gICAgICBTdXBlci5vcHRpb25zLFxuICAgICAgZXh0ZW5kT3B0aW9uc1xuICAgICk7XG4gICAgU3ViWydzdXBlciddID0gU3VwZXI7XG5cbiAgICAvLyBGb3IgcHJvcHMgYW5kIGNvbXB1dGVkIHByb3BlcnRpZXMsIHdlIGRlZmluZSB0aGUgcHJveHkgZ2V0dGVycyBvblxuICAgIC8vIHRoZSBWdWUgaW5zdGFuY2VzIGF0IGV4dGVuc2lvbiB0aW1lLCBvbiB0aGUgZXh0ZW5kZWQgcHJvdG90eXBlLiBUaGlzXG4gICAgLy8gYXZvaWRzIE9iamVjdC5kZWZpbmVQcm9wZXJ0eSBjYWxscyBmb3IgZWFjaCBpbnN0YW5jZSBjcmVhdGVkLlxuICAgIGlmIChTdWIub3B0aW9ucy5wcm9wcykge1xuICAgICAgaW5pdFByb3BzJDEoU3ViKTtcbiAgICB9XG4gICAgaWYgKFN1Yi5vcHRpb25zLmNvbXB1dGVkKSB7XG4gICAgICBpbml0Q29tcHV0ZWQkMShTdWIpO1xuICAgIH1cblxuICAgIC8vIGFsbG93IGZ1cnRoZXIgZXh0ZW5zaW9uL21peGluL3BsdWdpbiB1c2FnZVxuICAgIFN1Yi5leHRlbmQgPSBTdXBlci5leHRlbmQ7XG4gICAgU3ViLm1peGluID0gU3VwZXIubWl4aW47XG4gICAgU3ViLnVzZSA9IFN1cGVyLnVzZTtcblxuICAgIC8vIGNyZWF0ZSBhc3NldCByZWdpc3RlcnMsIHNvIGV4dGVuZGVkIGNsYXNzZXNcbiAgICAvLyBjYW4gaGF2ZSB0aGVpciBwcml2YXRlIGFzc2V0cyB0b28uXG4gICAgQVNTRVRfVFlQRVMuZm9yRWFjaChmdW5jdGlvbiAodHlwZSkge1xuICAgICAgU3ViW3R5cGVdID0gU3VwZXJbdHlwZV07XG4gICAgfSk7XG4gICAgLy8gZW5hYmxlIHJlY3Vyc2l2ZSBzZWxmLWxvb2t1cFxuICAgIGlmIChuYW1lKSB7XG4gICAgICBTdWIub3B0aW9ucy5jb21wb25lbnRzW25hbWVdID0gU3ViO1xuICAgIH1cblxuICAgIC8vIGtlZXAgYSByZWZlcmVuY2UgdG8gdGhlIHN1cGVyIG9wdGlvbnMgYXQgZXh0ZW5zaW9uIHRpbWUuXG4gICAgLy8gbGF0ZXIgYXQgaW5zdGFudGlhdGlvbiB3ZSBjYW4gY2hlY2sgaWYgU3VwZXIncyBvcHRpb25zIGhhdmVcbiAgICAvLyBiZWVuIHVwZGF0ZWQuXG4gICAgU3ViLnN1cGVyT3B0aW9ucyA9IFN1cGVyLm9wdGlvbnM7XG4gICAgU3ViLmV4dGVuZE9wdGlvbnMgPSBleHRlbmRPcHRpb25zO1xuICAgIFN1Yi5zZWFsZWRPcHRpb25zID0gZXh0ZW5kKHt9LCBTdWIub3B0aW9ucyk7XG5cbiAgICAvLyBjYWNoZSBjb25zdHJ1Y3RvclxuICAgIGNhY2hlZEN0b3JzW1N1cGVySWRdID0gU3ViO1xuICAgIHJldHVybiBTdWJcbiAgfTtcbn1cblxuZnVuY3Rpb24gaW5pdFByb3BzJDEgKENvbXApIHtcbiAgdmFyIHByb3BzID0gQ29tcC5vcHRpb25zLnByb3BzO1xuICBmb3IgKHZhciBrZXkgaW4gcHJvcHMpIHtcbiAgICBwcm94eShDb21wLnByb3RvdHlwZSwgXCJfcHJvcHNcIiwga2V5KTtcbiAgfVxufVxuXG5mdW5jdGlvbiBpbml0Q29tcHV0ZWQkMSAoQ29tcCkge1xuICB2YXIgY29tcHV0ZWQgPSBDb21wLm9wdGlvbnMuY29tcHV0ZWQ7XG4gIGZvciAodmFyIGtleSBpbiBjb21wdXRlZCkge1xuICAgIGRlZmluZUNvbXB1dGVkKENvbXAucHJvdG90eXBlLCBrZXksIGNvbXB1dGVkW2tleV0pO1xuICB9XG59XG5cbi8qICAqL1xuXG5mdW5jdGlvbiBpbml0QXNzZXRSZWdpc3RlcnMgKFZ1ZSkge1xuICAvKipcbiAgICogQ3JlYXRlIGFzc2V0IHJlZ2lzdHJhdGlvbiBtZXRob2RzLlxuICAgKi9cbiAgQVNTRVRfVFlQRVMuZm9yRWFjaChmdW5jdGlvbiAodHlwZSkge1xuICAgIFZ1ZVt0eXBlXSA9IGZ1bmN0aW9uIChcbiAgICAgIGlkLFxuICAgICAgZGVmaW5pdGlvblxuICAgICkge1xuICAgICAgaWYgKCFkZWZpbml0aW9uKSB7XG4gICAgICAgIHJldHVybiB0aGlzLm9wdGlvbnNbdHlwZSArICdzJ11baWRdXG4gICAgICB9IGVsc2Uge1xuICAgICAgICAvKiBpc3RhbmJ1bCBpZ25vcmUgaWYgKi9cbiAgICAgICAgaWYgKHByb2Nlc3MuZW52Lk5PREVfRU5WICE9PSAncHJvZHVjdGlvbicgJiYgdHlwZSA9PT0gJ2NvbXBvbmVudCcpIHtcbiAgICAgICAgICB2YWxpZGF0ZUNvbXBvbmVudE5hbWUoaWQpO1xuICAgICAgICB9XG4gICAgICAgIGlmICh0eXBlID09PSAnY29tcG9uZW50JyAmJiBpc1BsYWluT2JqZWN0KGRlZmluaXRpb24pKSB7XG4gICAgICAgICAgZGVmaW5pdGlvbi5uYW1lID0gZGVmaW5pdGlvbi5uYW1lIHx8IGlkO1xuICAgICAgICAgIGRlZmluaXRpb24gPSB0aGlzLm9wdGlvbnMuX2Jhc2UuZXh0ZW5kKGRlZmluaXRpb24pO1xuICAgICAgICB9XG4gICAgICAgIGlmICh0eXBlID09PSAnZGlyZWN0aXZlJyAmJiB0eXBlb2YgZGVmaW5pdGlvbiA9PT0gJ2Z1bmN0aW9uJykge1xuICAgICAgICAgIGRlZmluaXRpb24gPSB7IGJpbmQ6IGRlZmluaXRpb24sIHVwZGF0ZTogZGVmaW5pdGlvbiB9O1xuICAgICAgICB9XG4gICAgICAgIHRoaXMub3B0aW9uc1t0eXBlICsgJ3MnXVtpZF0gPSBkZWZpbml0aW9uO1xuICAgICAgICByZXR1cm4gZGVmaW5pdGlvblxuICAgICAgfVxuICAgIH07XG4gIH0pO1xufVxuXG4vKiAgKi9cblxuXG5cbmZ1bmN0aW9uIGdldENvbXBvbmVudE5hbWUgKG9wdHMpIHtcbiAgcmV0dXJuIG9wdHMgJiYgKG9wdHMuQ3Rvci5vcHRpb25zLm5hbWUgfHwgb3B0cy50YWcpXG59XG5cbmZ1bmN0aW9uIG1hdGNoZXMgKHBhdHRlcm4sIG5hbWUpIHtcbiAgaWYgKEFycmF5LmlzQXJyYXkocGF0dGVybikpIHtcbiAgICByZXR1cm4gcGF0dGVybi5pbmRleE9mKG5hbWUpID4gLTFcbiAgfSBlbHNlIGlmICh0eXBlb2YgcGF0dGVybiA9PT0gJ3N0cmluZycpIHtcbiAgICByZXR1cm4gcGF0dGVybi5zcGxpdCgnLCcpLmluZGV4T2YobmFtZSkgPiAtMVxuICB9IGVsc2UgaWYgKGlzUmVnRXhwKHBhdHRlcm4pKSB7XG4gICAgcmV0dXJuIHBhdHRlcm4udGVzdChuYW1lKVxuICB9XG4gIC8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICovXG4gIHJldHVybiBmYWxzZVxufVxuXG5mdW5jdGlvbiBwcnVuZUNhY2hlIChrZWVwQWxpdmVJbnN0YW5jZSwgZmlsdGVyKSB7XG4gIHZhciBjYWNoZSA9IGtlZXBBbGl2ZUluc3RhbmNlLmNhY2hlO1xuICB2YXIga2V5cyA9IGtlZXBBbGl2ZUluc3RhbmNlLmtleXM7XG4gIHZhciBfdm5vZGUgPSBrZWVwQWxpdmVJbnN0YW5jZS5fdm5vZGU7XG4gIGZvciAodmFyIGtleSBpbiBjYWNoZSkge1xuICAgIHZhciBjYWNoZWROb2RlID0gY2FjaGVba2V5XTtcbiAgICBpZiAoY2FjaGVkTm9kZSkge1xuICAgICAgdmFyIG5hbWUgPSBnZXRDb21wb25lbnROYW1lKGNhY2hlZE5vZGUuY29tcG9uZW50T3B0aW9ucyk7XG4gICAgICBpZiAobmFtZSAmJiAhZmlsdGVyKG5hbWUpKSB7XG4gICAgICAgIHBydW5lQ2FjaGVFbnRyeShjYWNoZSwga2V5LCBrZXlzLCBfdm5vZGUpO1xuICAgICAgfVxuICAgIH1cbiAgfVxufVxuXG5mdW5jdGlvbiBwcnVuZUNhY2hlRW50cnkgKFxuICBjYWNoZSxcbiAga2V5LFxuICBrZXlzLFxuICBjdXJyZW50XG4pIHtcbiAgdmFyIGNhY2hlZCQkMSA9IGNhY2hlW2tleV07XG4gIGlmIChjYWNoZWQkJDEgJiYgKCFjdXJyZW50IHx8IGNhY2hlZCQkMS50YWcgIT09IGN1cnJlbnQudGFnKSkge1xuICAgIGNhY2hlZCQkMS5jb21wb25lbnRJbnN0YW5jZS4kZGVzdHJveSgpO1xuICB9XG4gIGNhY2hlW2tleV0gPSBudWxsO1xuICByZW1vdmUoa2V5cywga2V5KTtcbn1cblxudmFyIHBhdHRlcm5UeXBlcyA9IFtTdHJpbmcsIFJlZ0V4cCwgQXJyYXldO1xuXG52YXIgS2VlcEFsaXZlID0ge1xuICBuYW1lOiAna2VlcC1hbGl2ZScsXG4gIGFic3RyYWN0OiB0cnVlLFxuXG4gIHByb3BzOiB7XG4gICAgaW5jbHVkZTogcGF0dGVyblR5cGVzLFxuICAgIGV4Y2x1ZGU6IHBhdHRlcm5UeXBlcyxcbiAgICBtYXg6IFtTdHJpbmcsIE51bWJlcl1cbiAgfSxcblxuICBjcmVhdGVkOiBmdW5jdGlvbiBjcmVhdGVkICgpIHtcbiAgICB0aGlzLmNhY2hlID0gT2JqZWN0LmNyZWF0ZShudWxsKTtcbiAgICB0aGlzLmtleXMgPSBbXTtcbiAgfSxcblxuICBkZXN0cm95ZWQ6IGZ1bmN0aW9uIGRlc3Ryb3llZCAoKSB7XG4gICAgZm9yICh2YXIga2V5IGluIHRoaXMuY2FjaGUpIHtcbiAgICAgIHBydW5lQ2FjaGVFbnRyeSh0aGlzLmNhY2hlLCBrZXksIHRoaXMua2V5cyk7XG4gICAgfVxuICB9LFxuXG4gIG1vdW50ZWQ6IGZ1bmN0aW9uIG1vdW50ZWQgKCkge1xuICAgIHZhciB0aGlzJDEgPSB0aGlzO1xuXG4gICAgdGhpcy4kd2F0Y2goJ2luY2x1ZGUnLCBmdW5jdGlvbiAodmFsKSB7XG4gICAgICBwcnVuZUNhY2hlKHRoaXMkMSwgZnVuY3Rpb24gKG5hbWUpIHsgcmV0dXJuIG1hdGNoZXModmFsLCBuYW1lKTsgfSk7XG4gICAgfSk7XG4gICAgdGhpcy4kd2F0Y2goJ2V4Y2x1ZGUnLCBmdW5jdGlvbiAodmFsKSB7XG4gICAgICBwcnVuZUNhY2hlKHRoaXMkMSwgZnVuY3Rpb24gKG5hbWUpIHsgcmV0dXJuICFtYXRjaGVzKHZhbCwgbmFtZSk7IH0pO1xuICAgIH0pO1xuICB9LFxuXG4gIHJlbmRlcjogZnVuY3Rpb24gcmVuZGVyICgpIHtcbiAgICB2YXIgc2xvdCA9IHRoaXMuJHNsb3RzLmRlZmF1bHQ7XG4gICAgdmFyIHZub2RlID0gZ2V0Rmlyc3RDb21wb25lbnRDaGlsZChzbG90KTtcbiAgICB2YXIgY29tcG9uZW50T3B0aW9ucyA9IHZub2RlICYmIHZub2RlLmNvbXBvbmVudE9wdGlvbnM7XG4gICAgaWYgKGNvbXBvbmVudE9wdGlvbnMpIHtcbiAgICAgIC8vIGNoZWNrIHBhdHRlcm5cbiAgICAgIHZhciBuYW1lID0gZ2V0Q29tcG9uZW50TmFtZShjb21wb25lbnRPcHRpb25zKTtcbiAgICAgIHZhciByZWYgPSB0aGlzO1xuICAgICAgdmFyIGluY2x1ZGUgPSByZWYuaW5jbHVkZTtcbiAgICAgIHZhciBleGNsdWRlID0gcmVmLmV4Y2x1ZGU7XG4gICAgICBpZiAoXG4gICAgICAgIC8vIG5vdCBpbmNsdWRlZFxuICAgICAgICAoaW5jbHVkZSAmJiAoIW5hbWUgfHwgIW1hdGNoZXMoaW5jbHVkZSwgbmFtZSkpKSB8fFxuICAgICAgICAvLyBleGNsdWRlZFxuICAgICAgICAoZXhjbHVkZSAmJiBuYW1lICYmIG1hdGNoZXMoZXhjbHVkZSwgbmFtZSkpXG4gICAgICApIHtcbiAgICAgICAgcmV0dXJuIHZub2RlXG4gICAgICB9XG5cbiAgICAgIHZhciByZWYkMSA9IHRoaXM7XG4gICAgICB2YXIgY2FjaGUgPSByZWYkMS5jYWNoZTtcbiAgICAgIHZhciBrZXlzID0gcmVmJDEua2V5cztcbiAgICAgIHZhciBrZXkgPSB2bm9kZS5rZXkgPT0gbnVsbFxuICAgICAgICAvLyBzYW1lIGNvbnN0cnVjdG9yIG1heSBnZXQgcmVnaXN0ZXJlZCBhcyBkaWZmZXJlbnQgbG9jYWwgY29tcG9uZW50c1xuICAgICAgICAvLyBzbyBjaWQgYWxvbmUgaXMgbm90IGVub3VnaCAoIzMyNjkpXG4gICAgICAgID8gY29tcG9uZW50T3B0aW9ucy5DdG9yLmNpZCArIChjb21wb25lbnRPcHRpb25zLnRhZyA/IChcIjo6XCIgKyAoY29tcG9uZW50T3B0aW9ucy50YWcpKSA6ICcnKVxuICAgICAgICA6IHZub2RlLmtleTtcbiAgICAgIGlmIChjYWNoZVtrZXldKSB7XG4gICAgICAgIHZub2RlLmNvbXBvbmVudEluc3RhbmNlID0gY2FjaGVba2V5XS5jb21wb25lbnRJbnN0YW5jZTtcbiAgICAgICAgLy8gbWFrZSBjdXJyZW50IGtleSBmcmVzaGVzdFxuICAgICAgICByZW1vdmUoa2V5cywga2V5KTtcbiAgICAgICAga2V5cy5wdXNoKGtleSk7XG4gICAgICB9IGVsc2Uge1xuICAgICAgICBjYWNoZVtrZXldID0gdm5vZGU7XG4gICAgICAgIGtleXMucHVzaChrZXkpO1xuICAgICAgICAvLyBwcnVuZSBvbGRlc3QgZW50cnlcbiAgICAgICAgaWYgKHRoaXMubWF4ICYmIGtleXMubGVuZ3RoID4gcGFyc2VJbnQodGhpcy5tYXgpKSB7XG4gICAgICAgICAgcHJ1bmVDYWNoZUVudHJ5KGNhY2hlLCBrZXlzWzBdLCBrZXlzLCB0aGlzLl92bm9kZSk7XG4gICAgICAgIH1cbiAgICAgIH1cblxuICAgICAgdm5vZGUuZGF0YS5rZWVwQWxpdmUgPSB0cnVlO1xuICAgIH1cbiAgICByZXR1cm4gdm5vZGUgfHwgKHNsb3QgJiYgc2xvdFswXSlcbiAgfVxufTtcblxudmFyIGJ1aWx0SW5Db21wb25lbnRzID0ge1xuICBLZWVwQWxpdmU6IEtlZXBBbGl2ZVxufTtcblxuLyogICovXG5cbmZ1bmN0aW9uIGluaXRHbG9iYWxBUEkgKFZ1ZSkge1xuICAvLyBjb25maWdcbiAgdmFyIGNvbmZpZ0RlZiA9IHt9O1xuICBjb25maWdEZWYuZ2V0ID0gZnVuY3Rpb24gKCkgeyByZXR1cm4gY29uZmlnOyB9O1xuICBpZiAocHJvY2Vzcy5lbnYuTk9ERV9FTlYgIT09ICdwcm9kdWN0aW9uJykge1xuICAgIGNvbmZpZ0RlZi5zZXQgPSBmdW5jdGlvbiAoKSB7XG4gICAgICB3YXJuKFxuICAgICAgICAnRG8gbm90IHJlcGxhY2UgdGhlIFZ1ZS5jb25maWcgb2JqZWN0LCBzZXQgaW5kaXZpZHVhbCBmaWVsZHMgaW5zdGVhZC4nXG4gICAgICApO1xuICAgIH07XG4gIH1cbiAgT2JqZWN0LmRlZmluZVByb3BlcnR5KFZ1ZSwgJ2NvbmZpZycsIGNvbmZpZ0RlZik7XG5cbiAgLy8gZXhwb3NlZCB1dGlsIG1ldGhvZHMuXG4gIC8vIE5PVEU6IHRoZXNlIGFyZSBub3QgY29uc2lkZXJlZCBwYXJ0IG9mIHRoZSBwdWJsaWMgQVBJIC0gYXZvaWQgcmVseWluZyBvblxuICAvLyB0aGVtIHVubGVzcyB5b3UgYXJlIGF3YXJlIG9mIHRoZSByaXNrLlxuICBWdWUudXRpbCA9IHtcbiAgICB3YXJuOiB3YXJuLFxuICAgIGV4dGVuZDogZXh0ZW5kLFxuICAgIG1lcmdlT3B0aW9uczogbWVyZ2VPcHRpb25zLFxuICAgIGRlZmluZVJlYWN0aXZlOiBkZWZpbmVSZWFjdGl2ZSQkMVxuICB9O1xuXG4gIFZ1ZS5zZXQgPSBzZXQ7XG4gIFZ1ZS5kZWxldGUgPSBkZWw7XG4gIFZ1ZS5uZXh0VGljayA9IG5leHRUaWNrO1xuXG4gIC8vIDIuNiBleHBsaWNpdCBvYnNlcnZhYmxlIEFQSVxuICBWdWUub2JzZXJ2YWJsZSA9IGZ1bmN0aW9uIChvYmopIHtcbiAgICBvYnNlcnZlKG9iaik7XG4gICAgcmV0dXJuIG9ialxuICB9O1xuXG4gIFZ1ZS5vcHRpb25zID0gT2JqZWN0LmNyZWF0ZShudWxsKTtcbiAgQVNTRVRfVFlQRVMuZm9yRWFjaChmdW5jdGlvbiAodHlwZSkge1xuICAgIFZ1ZS5vcHRpb25zW3R5cGUgKyAncyddID0gT2JqZWN0LmNyZWF0ZShudWxsKTtcbiAgfSk7XG5cbiAgLy8gdGhpcyBpcyB1c2VkIHRvIGlkZW50aWZ5IHRoZSBcImJhc2VcIiBjb25zdHJ1Y3RvciB0byBleHRlbmQgYWxsIHBsYWluLW9iamVjdFxuICAvLyBjb21wb25lbnRzIHdpdGggaW4gV2VleCdzIG11bHRpLWluc3RhbmNlIHNjZW5hcmlvcy5cbiAgVnVlLm9wdGlvbnMuX2Jhc2UgPSBWdWU7XG5cbiAgZXh0ZW5kKFZ1ZS5vcHRpb25zLmNvbXBvbmVudHMsIGJ1aWx0SW5Db21wb25lbnRzKTtcblxuICBpbml0VXNlKFZ1ZSk7XG4gIGluaXRNaXhpbiQxKFZ1ZSk7XG4gIGluaXRFeHRlbmQoVnVlKTtcbiAgaW5pdEFzc2V0UmVnaXN0ZXJzKFZ1ZSk7XG59XG5cbmluaXRHbG9iYWxBUEkoVnVlKTtcblxuT2JqZWN0LmRlZmluZVByb3BlcnR5KFZ1ZS5wcm90b3R5cGUsICckaXNTZXJ2ZXInLCB7XG4gIGdldDogaXNTZXJ2ZXJSZW5kZXJpbmdcbn0pO1xuXG5PYmplY3QuZGVmaW5lUHJvcGVydHkoVnVlLnByb3RvdHlwZSwgJyRzc3JDb250ZXh0Jywge1xuICBnZXQ6IGZ1bmN0aW9uIGdldCAoKSB7XG4gICAgLyogaXN0YW5idWwgaWdub3JlIG5leHQgKi9cbiAgICByZXR1cm4gdGhpcy4kdm5vZGUgJiYgdGhpcy4kdm5vZGUuc3NyQ29udGV4dFxuICB9XG59KTtcblxuLy8gZXhwb3NlIEZ1bmN0aW9uYWxSZW5kZXJDb250ZXh0IGZvciBzc3IgcnVudGltZSBoZWxwZXIgaW5zdGFsbGF0aW9uXG5PYmplY3QuZGVmaW5lUHJvcGVydHkoVnVlLCAnRnVuY3Rpb25hbFJlbmRlckNvbnRleHQnLCB7XG4gIHZhbHVlOiBGdW5jdGlvbmFsUmVuZGVyQ29udGV4dFxufSk7XG5cblZ1ZS52ZXJzaW9uID0gJzIuNi4xMSc7XG5cbi8qKlxuICogaHR0cHM6Ly9yYXcuZ2l0aHVidXNlcmNvbnRlbnQuY29tL1RlbmNlbnQvd2VzdG9yZS9tYXN0ZXIvcGFja2FnZXMvd2VzdG9yZS91dGlscy9kaWZmLmpzXG4gKi9cbnZhciBBUlJBWVRZUEUgPSAnW29iamVjdCBBcnJheV0nO1xudmFyIE9CSkVDVFRZUEUgPSAnW29iamVjdCBPYmplY3RdJztcbi8vIGNvbnN0IEZVTkNUSU9OVFlQRSA9ICdbb2JqZWN0IEZ1bmN0aW9uXSdcblxuZnVuY3Rpb24gZGlmZihjdXJyZW50LCBwcmUpIHtcbiAgICB2YXIgcmVzdWx0ID0ge307XG4gICAgc3luY0tleXMoY3VycmVudCwgcHJlKTtcbiAgICBfZGlmZihjdXJyZW50LCBwcmUsICcnLCByZXN1bHQpO1xuICAgIHJldHVybiByZXN1bHRcbn1cblxuZnVuY3Rpb24gc3luY0tleXMoY3VycmVudCwgcHJlKSB7XG4gICAgaWYgKGN1cnJlbnQgPT09IHByZSkgeyByZXR1cm4gfVxuICAgIHZhciByb290Q3VycmVudFR5cGUgPSB0eXBlKGN1cnJlbnQpO1xuICAgIHZhciByb290UHJlVHlwZSA9IHR5cGUocHJlKTtcbiAgICBpZiAocm9vdEN1cnJlbnRUeXBlID09IE9CSkVDVFRZUEUgJiYgcm9vdFByZVR5cGUgPT0gT0JKRUNUVFlQRSkge1xuICAgICAgICBpZihPYmplY3Qua2V5cyhjdXJyZW50KS5sZW5ndGggPj0gT2JqZWN0LmtleXMocHJlKS5sZW5ndGgpe1xuICAgICAgICAgICAgZm9yICh2YXIga2V5IGluIHByZSkge1xuICAgICAgICAgICAgICAgIHZhciBjdXJyZW50VmFsdWUgPSBjdXJyZW50W2tleV07XG4gICAgICAgICAgICAgICAgaWYgKGN1cnJlbnRWYWx1ZSA9PT0gdW5kZWZpbmVkKSB7XG4gICAgICAgICAgICAgICAgICAgIGN1cnJlbnRba2V5XSA9IG51bGw7XG4gICAgICAgICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgICAgICAgICAgc3luY0tleXMoY3VycmVudFZhbHVlLCBwcmVba2V5XSk7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgfSBlbHNlIGlmIChyb290Q3VycmVudFR5cGUgPT0gQVJSQVlUWVBFICYmIHJvb3RQcmVUeXBlID09IEFSUkFZVFlQRSkge1xuICAgICAgICBpZiAoY3VycmVudC5sZW5ndGggPj0gcHJlLmxlbmd0aCkge1xuICAgICAgICAgICAgcHJlLmZvckVhY2goZnVuY3Rpb24gKGl0ZW0sIGluZGV4KSB7XG4gICAgICAgICAgICAgICAgc3luY0tleXMoY3VycmVudFtpbmRleF0sIGl0ZW0pO1xuICAgICAgICAgICAgfSk7XG4gICAgICAgIH1cbiAgICB9XG59XG5cbmZ1bmN0aW9uIF9kaWZmKGN1cnJlbnQsIHByZSwgcGF0aCwgcmVzdWx0KSB7XG4gICAgaWYgKGN1cnJlbnQgPT09IHByZSkgeyByZXR1cm4gfVxuICAgIHZhciByb290Q3VycmVudFR5cGUgPSB0eXBlKGN1cnJlbnQpO1xuICAgIHZhciByb290UHJlVHlwZSA9IHR5cGUocHJlKTtcbiAgICBpZiAocm9vdEN1cnJlbnRUeXBlID09IE9CSkVDVFRZUEUpIHtcbiAgICAgICAgaWYgKHJvb3RQcmVUeXBlICE9IE9CSkVDVFRZUEUgfHwgT2JqZWN0LmtleXMoY3VycmVudCkubGVuZ3RoIDwgT2JqZWN0LmtleXMocHJlKS5sZW5ndGgpIHtcbiAgICAgICAgICAgIHNldFJlc3VsdChyZXN1bHQsIHBhdGgsIGN1cnJlbnQpO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgdmFyIGxvb3AgPSBmdW5jdGlvbiAoIGtleSApIHtcbiAgICAgICAgICAgICAgICB2YXIgY3VycmVudFZhbHVlID0gY3VycmVudFtrZXldO1xuICAgICAgICAgICAgICAgIHZhciBwcmVWYWx1ZSA9IHByZVtrZXldO1xuICAgICAgICAgICAgICAgIHZhciBjdXJyZW50VHlwZSA9IHR5cGUoY3VycmVudFZhbHVlKTtcbiAgICAgICAgICAgICAgICB2YXIgcHJlVHlwZSA9IHR5cGUocHJlVmFsdWUpO1xuICAgICAgICAgICAgICAgIGlmIChjdXJyZW50VHlwZSAhPSBBUlJBWVRZUEUgJiYgY3VycmVudFR5cGUgIT0gT0JKRUNUVFlQRSkge1xuICAgICAgICAgICAgICAgICAgICBpZiAoY3VycmVudFZhbHVlICE9PSBwcmVba2V5XSkge1xuICAgICAgICAgICAgICAgICAgICAgICAgc2V0UmVzdWx0KHJlc3VsdCwgKHBhdGggPT0gJycgPyAnJyA6IHBhdGggKyBcIi5cIikgKyBrZXksIGN1cnJlbnRWYWx1ZSk7XG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICB9IGVsc2UgaWYgKGN1cnJlbnRUeXBlID09IEFSUkFZVFlQRSkge1xuICAgICAgICAgICAgICAgICAgICBpZiAocHJlVHlwZSAhPSBBUlJBWVRZUEUpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIHNldFJlc3VsdChyZXN1bHQsIChwYXRoID09ICcnID8gJycgOiBwYXRoICsgXCIuXCIpICsga2V5LCBjdXJyZW50VmFsdWUpO1xuICAgICAgICAgICAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgICAgICAgICAgICAgaWYgKGN1cnJlbnRWYWx1ZS5sZW5ndGggPCBwcmVWYWx1ZS5sZW5ndGgpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBzZXRSZXN1bHQocmVzdWx0LCAocGF0aCA9PSAnJyA/ICcnIDogcGF0aCArIFwiLlwiKSArIGtleSwgY3VycmVudFZhbHVlKTtcbiAgICAgICAgICAgICAgICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgY3VycmVudFZhbHVlLmZvckVhY2goZnVuY3Rpb24gKGl0ZW0sIGluZGV4KSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIF9kaWZmKGl0ZW0sIHByZVZhbHVlW2luZGV4XSwgKHBhdGggPT0gJycgPyAnJyA6IHBhdGggKyBcIi5cIikgKyBrZXkgKyAnWycgKyBpbmRleCArICddJywgcmVzdWx0KTtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB9KTtcbiAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIH0gZWxzZSBpZiAoY3VycmVudFR5cGUgPT0gT0JKRUNUVFlQRSkge1xuICAgICAgICAgICAgICAgICAgICBpZiAocHJlVHlwZSAhPSBPQkpFQ1RUWVBFIHx8IE9iamVjdC5rZXlzKGN1cnJlbnRWYWx1ZSkubGVuZ3RoIDwgT2JqZWN0LmtleXMocHJlVmFsdWUpLmxlbmd0aCkge1xuICAgICAgICAgICAgICAgICAgICAgICAgc2V0UmVzdWx0KHJlc3VsdCwgKHBhdGggPT0gJycgPyAnJyA6IHBhdGggKyBcIi5cIikgKyBrZXksIGN1cnJlbnRWYWx1ZSk7XG4gICAgICAgICAgICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAgICAgICAgICAgICBmb3IgKHZhciBzdWJLZXkgaW4gY3VycmVudFZhbHVlKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgX2RpZmYoY3VycmVudFZhbHVlW3N1YktleV0sIHByZVZhbHVlW3N1YktleV0sIChwYXRoID09ICcnID8gJycgOiBwYXRoICsgXCIuXCIpICsga2V5ICsgJy4nICsgc3ViS2V5LCByZXN1bHQpO1xuICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfTtcblxuICAgICAgICAgICAgZm9yICh2YXIga2V5IGluIGN1cnJlbnQpIGxvb3AoIGtleSApO1xuICAgICAgICB9XG4gICAgfSBlbHNlIGlmIChyb290Q3VycmVudFR5cGUgPT0gQVJSQVlUWVBFKSB7XG4gICAgICAgIGlmIChyb290UHJlVHlwZSAhPSBBUlJBWVRZUEUpIHtcbiAgICAgICAgICAgIHNldFJlc3VsdChyZXN1bHQsIHBhdGgsIGN1cnJlbnQpO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgaWYgKGN1cnJlbnQubGVuZ3RoIDwgcHJlLmxlbmd0aCkge1xuICAgICAgICAgICAgICAgIHNldFJlc3VsdChyZXN1bHQsIHBhdGgsIGN1cnJlbnQpO1xuICAgICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgICAgICBjdXJyZW50LmZvckVhY2goZnVuY3Rpb24gKGl0ZW0sIGluZGV4KSB7XG4gICAgICAgICAgICAgICAgICAgIF9kaWZmKGl0ZW0sIHByZVtpbmRleF0sIHBhdGggKyAnWycgKyBpbmRleCArICddJywgcmVzdWx0KTtcbiAgICAgICAgICAgICAgICB9KTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgIH0gZWxzZSB7XG4gICAgICAgIHNldFJlc3VsdChyZXN1bHQsIHBhdGgsIGN1cnJlbnQpO1xuICAgIH1cbn1cblxuZnVuY3Rpb24gc2V0UmVzdWx0KHJlc3VsdCwgaywgdikge1xuICAgIC8vIGlmICh0eXBlKHYpICE9IEZVTkNUSU9OVFlQRSkge1xuICAgICAgICByZXN1bHRba10gPSB2O1xuICAgIC8vIH1cbn1cblxuZnVuY3Rpb24gdHlwZShvYmopIHtcbiAgICByZXR1cm4gT2JqZWN0LnByb3RvdHlwZS50b1N0cmluZy5jYWxsKG9iailcbn1cblxuLyogICovXG5cbmZ1bmN0aW9uIGZsdXNoQ2FsbGJhY2tzJDEodm0pIHtcbiAgICBpZiAodm0uX19uZXh0X3RpY2tfY2FsbGJhY2tzICYmIHZtLl9fbmV4dF90aWNrX2NhbGxiYWNrcy5sZW5ndGgpIHtcbiAgICAgICAgaWYgKHByb2Nlc3MuZW52LlZVRV9BUFBfREVCVUcpIHtcbiAgICAgICAgICAgIHZhciBtcEluc3RhbmNlID0gdm0uJHNjb3BlO1xuICAgICAgICAgICAgY29uc29sZS5sb2coJ1snICsgKCtuZXcgRGF0ZSkgKyAnXVsnICsgKG1wSW5zdGFuY2UuaXMgfHwgbXBJbnN0YW5jZS5yb3V0ZSkgKyAnXVsnICsgdm0uX3VpZCArXG4gICAgICAgICAgICAgICAgJ106Zmx1c2hDYWxsYmFja3NbJyArIHZtLl9fbmV4dF90aWNrX2NhbGxiYWNrcy5sZW5ndGggKyAnXScpO1xuICAgICAgICB9XG4gICAgICAgIHZhciBjb3BpZXMgPSB2bS5fX25leHRfdGlja19jYWxsYmFja3Muc2xpY2UoMCk7XG4gICAgICAgIHZtLl9fbmV4dF90aWNrX2NhbGxiYWNrcy5sZW5ndGggPSAwO1xuICAgICAgICBmb3IgKHZhciBpID0gMDsgaSA8IGNvcGllcy5sZW5ndGg7IGkrKykge1xuICAgICAgICAgICAgY29waWVzW2ldKCk7XG4gICAgICAgIH1cbiAgICB9XG59XG5cbmZ1bmN0aW9uIGhhc1JlbmRlcldhdGNoZXIodm0pIHtcbiAgICByZXR1cm4gcXVldWUuZmluZChmdW5jdGlvbiAod2F0Y2hlcikgeyByZXR1cm4gdm0uX3dhdGNoZXIgPT09IHdhdGNoZXI7IH0pXG59XG5cbmZ1bmN0aW9uIG5leHRUaWNrJDEodm0sIGNiKSB7XG4gICAgLy8xLm5leHRUaWNrIOS5i+WJjSDlt7Igc2V0RGF0YSDkuJQgc2V0RGF0YSDov5jmnKrlm57osIPlrozmiJBcbiAgICAvLzIubmV4dFRpY2sg5LmL5YmN5a2Y5ZyoIHJlbmRlciB3YXRjaGVyXG4gICAgaWYgKCF2bS5fX25leHRfdGlja19wZW5kaW5nICYmICFoYXNSZW5kZXJXYXRjaGVyKHZtKSkge1xuICAgICAgICBpZihwcm9jZXNzLmVudi5WVUVfQVBQX0RFQlVHKXtcbiAgICAgICAgICAgIHZhciBtcEluc3RhbmNlID0gdm0uJHNjb3BlO1xuICAgICAgICAgICAgY29uc29sZS5sb2coJ1snICsgKCtuZXcgRGF0ZSkgKyAnXVsnICsgKG1wSW5zdGFuY2UuaXMgfHwgbXBJbnN0YW5jZS5yb3V0ZSkgKyAnXVsnICsgdm0uX3VpZCArXG4gICAgICAgICAgICAgICAgJ106bmV4dFZ1ZVRpY2snKTtcbiAgICAgICAgfVxuICAgICAgICByZXR1cm4gbmV4dFRpY2soY2IsIHZtKVxuICAgIH1lbHNle1xuICAgICAgICBpZihwcm9jZXNzLmVudi5WVUVfQVBQX0RFQlVHKXtcbiAgICAgICAgICAgIHZhciBtcEluc3RhbmNlJDEgPSB2bS4kc2NvcGU7XG4gICAgICAgICAgICBjb25zb2xlLmxvZygnWycgKyAoK25ldyBEYXRlKSArICddWycgKyAobXBJbnN0YW5jZSQxLmlzIHx8IG1wSW5zdGFuY2UkMS5yb3V0ZSkgKyAnXVsnICsgdm0uX3VpZCArXG4gICAgICAgICAgICAgICAgJ106bmV4dE1QVGljaycpO1xuICAgICAgICB9XG4gICAgfVxuICAgIHZhciBfcmVzb2x2ZTtcbiAgICBpZiAoIXZtLl9fbmV4dF90aWNrX2NhbGxiYWNrcykge1xuICAgICAgICB2bS5fX25leHRfdGlja19jYWxsYmFja3MgPSBbXTtcbiAgICB9XG4gICAgdm0uX19uZXh0X3RpY2tfY2FsbGJhY2tzLnB1c2goZnVuY3Rpb24gKCkge1xuICAgICAgICBpZiAoY2IpIHtcbiAgICAgICAgICAgIHRyeSB7XG4gICAgICAgICAgICAgICAgY2IuY2FsbCh2bSk7XG4gICAgICAgICAgICB9IGNhdGNoIChlKSB7XG4gICAgICAgICAgICAgICAgaGFuZGxlRXJyb3IoZSwgdm0sICduZXh0VGljaycpO1xuICAgICAgICAgICAgfVxuICAgICAgICB9IGVsc2UgaWYgKF9yZXNvbHZlKSB7XG4gICAgICAgICAgICBfcmVzb2x2ZSh2bSk7XG4gICAgICAgIH1cbiAgICB9KTtcbiAgICAvLyAkZmxvdy1kaXNhYmxlLWxpbmVcbiAgICBpZiAoIWNiICYmIHR5cGVvZiBQcm9taXNlICE9PSAndW5kZWZpbmVkJykge1xuICAgICAgICByZXR1cm4gbmV3IFByb21pc2UoZnVuY3Rpb24gKHJlc29sdmUpIHtcbiAgICAgICAgICAgIF9yZXNvbHZlID0gcmVzb2x2ZTtcbiAgICAgICAgfSlcbiAgICB9XG59XG5cbi8qICAqL1xuXG5mdW5jdGlvbiBjbG9uZVdpdGhEYXRhKHZtKSB7XG4gIC8vIOehruS/neW9k+WJjSB2bSDmiYDmnInmlbDmja7ooqvlkIzmraVcbiAgdmFyIHJldCA9IE9iamVjdC5jcmVhdGUobnVsbCk7XG4gIHZhciBkYXRhS2V5cyA9IFtdLmNvbmNhdChcbiAgICBPYmplY3Qua2V5cyh2bS5fZGF0YSB8fCB7fSksXG4gICAgT2JqZWN0LmtleXModm0uX2NvbXB1dGVkV2F0Y2hlcnMgfHwge30pKTtcblxuICBkYXRhS2V5cy5yZWR1Y2UoZnVuY3Rpb24ocmV0LCBrZXkpIHtcbiAgICByZXRba2V5XSA9IHZtW2tleV07XG4gICAgcmV0dXJuIHJldFxuICB9LCByZXQpO1xuXG4gIC8vIHZ1ZS1jb21wb3NpdGlvbi1hcGlcbiAgdmFyIGNvbXBvc2l0aW9uQXBpU3RhdGUgPSB2bS5fX2NvbXBvc2l0aW9uX2FwaV9zdGF0ZV9fIHx8IHZtLl9fc2VjcmV0X3ZmYV9zdGF0ZV9fO1xuICB2YXIgcmF3QmluZGluZ3MgPSBjb21wb3NpdGlvbkFwaVN0YXRlICYmIGNvbXBvc2l0aW9uQXBpU3RhdGUucmF3QmluZGluZ3M7XG4gIGlmIChyYXdCaW5kaW5ncykge1xuICAgIE9iamVjdC5rZXlzKHJhd0JpbmRpbmdzKS5mb3JFYWNoKGZ1bmN0aW9uIChrZXkpIHtcbiAgICAgIHJldFtrZXldID0gdm1ba2V5XTtcbiAgICB9KTtcbiAgfVxuXG4gIC8vVE9ETyDpnIDopoHmiorml6DnlKjmlbDmja7lpITnkIbmjonvvIzmr5TlpoIgbGlzdD0+bDAg5YiZIGxpc3Qg6ZyA6KaB56e76Zmk77yM5ZCm5YiZ5aSa5Lyg6L6T5LiA5Lu95pWw5o2uXG4gIE9iamVjdC5hc3NpZ24ocmV0LCB2bS4kbXAuZGF0YSB8fCB7fSk7XG4gIGlmIChcbiAgICBBcnJheS5pc0FycmF5KHZtLiRvcHRpb25zLmJlaGF2aW9ycykgJiZcbiAgICB2bS4kb3B0aW9ucy5iZWhhdmlvcnMuaW5kZXhPZigndW5pOi8vZm9ybS1maWVsZCcpICE9PSAtMVxuICApIHsgLy9mb3JtLWZpZWxkXG4gICAgcmV0WyduYW1lJ10gPSB2bS5uYW1lO1xuICAgIHJldFsndmFsdWUnXSA9IHZtLnZhbHVlO1xuICB9XG5cbiAgcmV0dXJuIEpTT04ucGFyc2UoSlNPTi5zdHJpbmdpZnkocmV0KSlcbn1cblxudmFyIHBhdGNoID0gZnVuY3Rpb24ob2xkVm5vZGUsIHZub2RlKSB7XG4gIHZhciB0aGlzJDEgPSB0aGlzO1xuXG4gIGlmICh2bm9kZSA9PT0gbnVsbCkgeyAvL2Rlc3Ryb3lcbiAgICByZXR1cm5cbiAgfVxuICBpZiAodGhpcy5tcFR5cGUgPT09ICdwYWdlJyB8fCB0aGlzLm1wVHlwZSA9PT0gJ2NvbXBvbmVudCcpIHtcbiAgICB2YXIgbXBJbnN0YW5jZSA9IHRoaXMuJHNjb3BlO1xuICAgIHZhciBkYXRhID0gT2JqZWN0LmNyZWF0ZShudWxsKTtcbiAgICB0cnkge1xuICAgICAgZGF0YSA9IGNsb25lV2l0aERhdGEodGhpcyk7XG4gICAgfSBjYXRjaCAoZXJyKSB7XG4gICAgICBjb25zb2xlLmVycm9yKGVycik7XG4gICAgfVxuICAgIGRhdGEuX193ZWJ2aWV3SWRfXyA9IG1wSW5zdGFuY2UuZGF0YS5fX3dlYnZpZXdJZF9fO1xuICAgIHZhciBtcERhdGEgPSBPYmplY3QuY3JlYXRlKG51bGwpO1xuICAgIE9iamVjdC5rZXlzKGRhdGEpLmZvckVhY2goZnVuY3Rpb24gKGtleSkgeyAvL+S7heWQjOatpSBkYXRhIOS4reacieeahOaVsOaNrlxuICAgICAgbXBEYXRhW2tleV0gPSBtcEluc3RhbmNlLmRhdGFba2V5XTtcbiAgICB9KTtcbiAgICB2YXIgZGlmZkRhdGEgPSB0aGlzLiRzaG91bGREaWZmRGF0YSA9PT0gZmFsc2UgPyBkYXRhIDogZGlmZihkYXRhLCBtcERhdGEpO1xuICAgIGlmIChPYmplY3Qua2V5cyhkaWZmRGF0YSkubGVuZ3RoKSB7XG4gICAgICBpZiAocHJvY2Vzcy5lbnYuVlVFX0FQUF9ERUJVRykge1xuICAgICAgICBjb25zb2xlLmxvZygnWycgKyAoK25ldyBEYXRlKSArICddWycgKyAobXBJbnN0YW5jZS5pcyB8fCBtcEluc3RhbmNlLnJvdXRlKSArICddWycgKyB0aGlzLl91aWQgK1xuICAgICAgICAgICdd5beu6YeP5pu05pawJyxcbiAgICAgICAgICBKU09OLnN0cmluZ2lmeShkaWZmRGF0YSkpO1xuICAgICAgfVxuICAgICAgdGhpcy5fX25leHRfdGlja19wZW5kaW5nID0gdHJ1ZTtcbiAgICAgIG1wSW5zdGFuY2Uuc2V0RGF0YShkaWZmRGF0YSwgZnVuY3Rpb24gKCkge1xuICAgICAgICB0aGlzJDEuX19uZXh0X3RpY2tfcGVuZGluZyA9IGZhbHNlO1xuICAgICAgICBmbHVzaENhbGxiYWNrcyQxKHRoaXMkMSk7XG4gICAgICB9KTtcbiAgICB9IGVsc2Uge1xuICAgICAgZmx1c2hDYWxsYmFja3MkMSh0aGlzKTtcbiAgICB9XG4gIH1cbn07XG5cbi8qICAqL1xuXG5mdW5jdGlvbiBjcmVhdGVFbXB0eVJlbmRlcigpIHtcblxufVxuXG5mdW5jdGlvbiBtb3VudENvbXBvbmVudCQxKFxuICB2bSxcbiAgZWwsXG4gIGh5ZHJhdGluZ1xuKSB7XG4gIGlmICghdm0ubXBUeXBlKSB7Ly9tYWluLmpzIOS4reeahCBuZXcgVnVlXG4gICAgcmV0dXJuIHZtXG4gIH1cbiAgaWYgKHZtLm1wVHlwZSA9PT0gJ2FwcCcpIHtcbiAgICB2bS4kb3B0aW9ucy5yZW5kZXIgPSBjcmVhdGVFbXB0eVJlbmRlcjtcbiAgfVxuICBpZiAoIXZtLiRvcHRpb25zLnJlbmRlcikge1xuICAgIHZtLiRvcHRpb25zLnJlbmRlciA9IGNyZWF0ZUVtcHR5UmVuZGVyO1xuICAgIGlmIChwcm9jZXNzLmVudi5OT0RFX0VOViAhPT0gJ3Byb2R1Y3Rpb24nKSB7XG4gICAgICAvKiBpc3RhbmJ1bCBpZ25vcmUgaWYgKi9cbiAgICAgIGlmICgodm0uJG9wdGlvbnMudGVtcGxhdGUgJiYgdm0uJG9wdGlvbnMudGVtcGxhdGUuY2hhckF0KDApICE9PSAnIycpIHx8XG4gICAgICAgIHZtLiRvcHRpb25zLmVsIHx8IGVsKSB7XG4gICAgICAgIHdhcm4oXG4gICAgICAgICAgJ1lvdSBhcmUgdXNpbmcgdGhlIHJ1bnRpbWUtb25seSBidWlsZCBvZiBWdWUgd2hlcmUgdGhlIHRlbXBsYXRlICcgK1xuICAgICAgICAgICdjb21waWxlciBpcyBub3QgYXZhaWxhYmxlLiBFaXRoZXIgcHJlLWNvbXBpbGUgdGhlIHRlbXBsYXRlcyBpbnRvICcgK1xuICAgICAgICAgICdyZW5kZXIgZnVuY3Rpb25zLCBvciB1c2UgdGhlIGNvbXBpbGVyLWluY2x1ZGVkIGJ1aWxkLicsXG4gICAgICAgICAgdm1cbiAgICAgICAgKTtcbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIHdhcm4oXG4gICAgICAgICAgJ0ZhaWxlZCB0byBtb3VudCBjb21wb25lbnQ6IHRlbXBsYXRlIG9yIHJlbmRlciBmdW5jdGlvbiBub3QgZGVmaW5lZC4nLFxuICAgICAgICAgIHZtXG4gICAgICAgICk7XG4gICAgICB9XG4gICAgfVxuICB9XG4gIFxuICAhdm0uXyRmYWxsYmFjayAmJiBjYWxsSG9vayh2bSwgJ2JlZm9yZU1vdW50Jyk7XG5cbiAgdmFyIHVwZGF0ZUNvbXBvbmVudCA9IGZ1bmN0aW9uICgpIHtcbiAgICB2bS5fdXBkYXRlKHZtLl9yZW5kZXIoKSwgaHlkcmF0aW5nKTtcbiAgfTtcblxuICAvLyB3ZSBzZXQgdGhpcyB0byB2bS5fd2F0Y2hlciBpbnNpZGUgdGhlIHdhdGNoZXIncyBjb25zdHJ1Y3RvclxuICAvLyBzaW5jZSB0aGUgd2F0Y2hlcidzIGluaXRpYWwgcGF0Y2ggbWF5IGNhbGwgJGZvcmNlVXBkYXRlIChlLmcuIGluc2lkZSBjaGlsZFxuICAvLyBjb21wb25lbnQncyBtb3VudGVkIGhvb2spLCB3aGljaCByZWxpZXMgb24gdm0uX3dhdGNoZXIgYmVpbmcgYWxyZWFkeSBkZWZpbmVkXG4gIG5ldyBXYXRjaGVyKHZtLCB1cGRhdGVDb21wb25lbnQsIG5vb3AsIHtcbiAgICBiZWZvcmU6IGZ1bmN0aW9uIGJlZm9yZSgpIHtcbiAgICAgIGlmICh2bS5faXNNb3VudGVkICYmICF2bS5faXNEZXN0cm95ZWQpIHtcbiAgICAgICAgY2FsbEhvb2sodm0sICdiZWZvcmVVcGRhdGUnKTtcbiAgICAgIH1cbiAgICB9XG4gIH0sIHRydWUgLyogaXNSZW5kZXJXYXRjaGVyICovKTtcbiAgaHlkcmF0aW5nID0gZmFsc2U7XG4gIHJldHVybiB2bVxufVxuXG4vKiAgKi9cblxuZnVuY3Rpb24gcmVuZGVyQ2xhc3MgKFxuICBzdGF0aWNDbGFzcyxcbiAgZHluYW1pY0NsYXNzXG4pIHtcbiAgaWYgKGlzRGVmKHN0YXRpY0NsYXNzKSB8fCBpc0RlZihkeW5hbWljQ2xhc3MpKSB7XG4gICAgcmV0dXJuIGNvbmNhdChzdGF0aWNDbGFzcywgc3RyaW5naWZ5Q2xhc3MoZHluYW1pY0NsYXNzKSlcbiAgfVxuICAvKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAqL1xuICByZXR1cm4gJydcbn1cblxuZnVuY3Rpb24gY29uY2F0IChhLCBiKSB7XG4gIHJldHVybiBhID8gYiA/IChhICsgJyAnICsgYikgOiBhIDogKGIgfHwgJycpXG59XG5cbmZ1bmN0aW9uIHN0cmluZ2lmeUNsYXNzICh2YWx1ZSkge1xuICBpZiAoQXJyYXkuaXNBcnJheSh2YWx1ZSkpIHtcbiAgICByZXR1cm4gc3RyaW5naWZ5QXJyYXkodmFsdWUpXG4gIH1cbiAgaWYgKGlzT2JqZWN0KHZhbHVlKSkge1xuICAgIHJldHVybiBzdHJpbmdpZnlPYmplY3QodmFsdWUpXG4gIH1cbiAgaWYgKHR5cGVvZiB2YWx1ZSA9PT0gJ3N0cmluZycpIHtcbiAgICByZXR1cm4gdmFsdWVcbiAgfVxuICAvKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAqL1xuICByZXR1cm4gJydcbn1cblxuZnVuY3Rpb24gc3RyaW5naWZ5QXJyYXkgKHZhbHVlKSB7XG4gIHZhciByZXMgPSAnJztcbiAgdmFyIHN0cmluZ2lmaWVkO1xuICBmb3IgKHZhciBpID0gMCwgbCA9IHZhbHVlLmxlbmd0aDsgaSA8IGw7IGkrKykge1xuICAgIGlmIChpc0RlZihzdHJpbmdpZmllZCA9IHN0cmluZ2lmeUNsYXNzKHZhbHVlW2ldKSkgJiYgc3RyaW5naWZpZWQgIT09ICcnKSB7XG4gICAgICBpZiAocmVzKSB7IHJlcyArPSAnICc7IH1cbiAgICAgIHJlcyArPSBzdHJpbmdpZmllZDtcbiAgICB9XG4gIH1cbiAgcmV0dXJuIHJlc1xufVxuXG5mdW5jdGlvbiBzdHJpbmdpZnlPYmplY3QgKHZhbHVlKSB7XG4gIHZhciByZXMgPSAnJztcbiAgZm9yICh2YXIga2V5IGluIHZhbHVlKSB7XG4gICAgaWYgKHZhbHVlW2tleV0pIHtcbiAgICAgIGlmIChyZXMpIHsgcmVzICs9ICcgJzsgfVxuICAgICAgcmVzICs9IGtleTtcbiAgICB9XG4gIH1cbiAgcmV0dXJuIHJlc1xufVxuXG4vKiAgKi9cblxudmFyIHBhcnNlU3R5bGVUZXh0ID0gY2FjaGVkKGZ1bmN0aW9uIChjc3NUZXh0KSB7XG4gIHZhciByZXMgPSB7fTtcbiAgdmFyIGxpc3REZWxpbWl0ZXIgPSAvOyg/IVteKF0qXFwpKS9nO1xuICB2YXIgcHJvcGVydHlEZWxpbWl0ZXIgPSAvOiguKykvO1xuICBjc3NUZXh0LnNwbGl0KGxpc3REZWxpbWl0ZXIpLmZvckVhY2goZnVuY3Rpb24gKGl0ZW0pIHtcbiAgICBpZiAoaXRlbSkge1xuICAgICAgdmFyIHRtcCA9IGl0ZW0uc3BsaXQocHJvcGVydHlEZWxpbWl0ZXIpO1xuICAgICAgdG1wLmxlbmd0aCA+IDEgJiYgKHJlc1t0bXBbMF0udHJpbSgpXSA9IHRtcFsxXS50cmltKCkpO1xuICAgIH1cbiAgfSk7XG4gIHJldHVybiByZXNcbn0pO1xuXG4vLyBub3JtYWxpemUgcG9zc2libGUgYXJyYXkgLyBzdHJpbmcgdmFsdWVzIGludG8gT2JqZWN0XG5mdW5jdGlvbiBub3JtYWxpemVTdHlsZUJpbmRpbmcgKGJpbmRpbmdTdHlsZSkge1xuICBpZiAoQXJyYXkuaXNBcnJheShiaW5kaW5nU3R5bGUpKSB7XG4gICAgcmV0dXJuIHRvT2JqZWN0KGJpbmRpbmdTdHlsZSlcbiAgfVxuICBpZiAodHlwZW9mIGJpbmRpbmdTdHlsZSA9PT0gJ3N0cmluZycpIHtcbiAgICByZXR1cm4gcGFyc2VTdHlsZVRleHQoYmluZGluZ1N0eWxlKVxuICB9XG4gIHJldHVybiBiaW5kaW5nU3R5bGVcbn1cblxuLyogICovXG5cbnZhciBNUF9NRVRIT0RTID0gWydjcmVhdGVTZWxlY3RvclF1ZXJ5JywgJ2NyZWF0ZUludGVyc2VjdGlvbk9ic2VydmVyJywgJ3NlbGVjdEFsbENvbXBvbmVudHMnLCAnc2VsZWN0Q29tcG9uZW50J107XG5cbmZ1bmN0aW9uIGdldFRhcmdldChvYmosIHBhdGgpIHtcbiAgdmFyIHBhcnRzID0gcGF0aC5zcGxpdCgnLicpO1xuICB2YXIga2V5ID0gcGFydHNbMF07XG4gIGlmIChrZXkuaW5kZXhPZignX18kbicpID09PSAwKSB7IC8vbnVtYmVyIGluZGV4XG4gICAga2V5ID0gcGFyc2VJbnQoa2V5LnJlcGxhY2UoJ19fJG4nLCAnJykpO1xuICB9XG4gIGlmIChwYXJ0cy5sZW5ndGggPT09IDEpIHtcbiAgICByZXR1cm4gb2JqW2tleV1cbiAgfVxuICByZXR1cm4gZ2V0VGFyZ2V0KG9ialtrZXldLCBwYXJ0cy5zbGljZSgxKS5qb2luKCcuJykpXG59XG5cbmZ1bmN0aW9uIGludGVybmFsTWl4aW4oVnVlKSB7XG5cbiAgVnVlLmNvbmZpZy5lcnJvckhhbmRsZXIgPSBmdW5jdGlvbihlcnIsIHZtLCBpbmZvKSB7XG4gICAgVnVlLnV0aWwud2FybigoXCJFcnJvciBpbiBcIiArIGluZm8gKyBcIjogXFxcIlwiICsgKGVyci50b1N0cmluZygpKSArIFwiXFxcIlwiKSwgdm0pO1xuICAgIGNvbnNvbGUuZXJyb3IoZXJyKTtcbiAgICAvKiBlc2xpbnQtZGlzYWJsZSBuby11bmRlZiAqL1xuICAgIHZhciBhcHAgPSB0eXBlb2YgZ2V0QXBwID09PSAnZnVuY3Rpb24nICYmIGdldEFwcCgpO1xuICAgIGlmIChhcHAgJiYgYXBwLm9uRXJyb3IpIHtcbiAgICAgIGFwcC5vbkVycm9yKGVycik7XG4gICAgfVxuICB9O1xuXG4gIHZhciBvbGRFbWl0ID0gVnVlLnByb3RvdHlwZS4kZW1pdDtcblxuICBWdWUucHJvdG90eXBlLiRlbWl0ID0gZnVuY3Rpb24oZXZlbnQpIHtcbiAgICBpZiAodGhpcy4kc2NvcGUgJiYgZXZlbnQpIHtcbiAgICAgICh0aGlzLiRzY29wZVsnX3RyaWdnZXJFdmVudCddIHx8IHRoaXMuJHNjb3BlWyd0cmlnZ2VyRXZlbnQnXSkuY2FsbCh0aGlzLiRzY29wZSwgZXZlbnQsIHtcbiAgICAgICAgX19hcmdzX186IHRvQXJyYXkoYXJndW1lbnRzLCAxKVxuICAgICAgfSk7XG4gICAgfVxuICAgIHJldHVybiBvbGRFbWl0LmFwcGx5KHRoaXMsIGFyZ3VtZW50cylcbiAgfTtcblxuICBWdWUucHJvdG90eXBlLiRuZXh0VGljayA9IGZ1bmN0aW9uKGZuKSB7XG4gICAgcmV0dXJuIG5leHRUaWNrJDEodGhpcywgZm4pXG4gIH07XG5cbiAgTVBfTUVUSE9EUy5mb3JFYWNoKGZ1bmN0aW9uIChtZXRob2QpIHtcbiAgICBWdWUucHJvdG90eXBlW21ldGhvZF0gPSBmdW5jdGlvbihhcmdzKSB7XG4gICAgICBpZiAodGhpcy4kc2NvcGUgJiYgdGhpcy4kc2NvcGVbbWV0aG9kXSkge1xuICAgICAgICByZXR1cm4gdGhpcy4kc2NvcGVbbWV0aG9kXShhcmdzKVxuICAgICAgfVxuICAgICAgLy8gbXAtYWxpcGF5XG4gICAgICBpZiAodHlwZW9mIG15ID09PSAndW5kZWZpbmVkJykge1xuICAgICAgICByZXR1cm5cbiAgICAgIH1cbiAgICAgIGlmIChtZXRob2QgPT09ICdjcmVhdGVTZWxlY3RvclF1ZXJ5Jykge1xuICAgICAgICAvKiBlc2xpbnQtZGlzYWJsZSBuby11bmRlZiAqL1xuICAgICAgICByZXR1cm4gbXkuY3JlYXRlU2VsZWN0b3JRdWVyeShhcmdzKVxuICAgICAgfSBlbHNlIGlmIChtZXRob2QgPT09ICdjcmVhdGVJbnRlcnNlY3Rpb25PYnNlcnZlcicpIHtcbiAgICAgICAgLyogZXNsaW50LWRpc2FibGUgbm8tdW5kZWYgKi9cbiAgICAgICAgcmV0dXJuIG15LmNyZWF0ZUludGVyc2VjdGlvbk9ic2VydmVyKGFyZ3MpXG4gICAgICB9XG4gICAgICAvLyBUT0RPIG1wLWFsaXBheSDmmoLkuI3mlK/mjIEgc2VsZWN0QWxsQ29tcG9uZW50cyxzZWxlY3RDb21wb25lbnRcbiAgICB9O1xuICB9KTtcblxuICBWdWUucHJvdG90eXBlLl9faW5pdF9wcm92aWRlID0gaW5pdFByb3ZpZGU7XG5cbiAgVnVlLnByb3RvdHlwZS5fX2luaXRfaW5qZWN0aW9ucyA9IGluaXRJbmplY3Rpb25zO1xuXG4gIFZ1ZS5wcm90b3R5cGUuX19jYWxsX2hvb2sgPSBmdW5jdGlvbihob29rLCBhcmdzKSB7XG4gICAgdmFyIHZtID0gdGhpcztcbiAgICAvLyAjNzU3MyBkaXNhYmxlIGRlcCBjb2xsZWN0aW9uIHdoZW4gaW52b2tpbmcgbGlmZWN5Y2xlIGhvb2tzXG4gICAgcHVzaFRhcmdldCgpO1xuICAgIHZhciBoYW5kbGVycyA9IHZtLiRvcHRpb25zW2hvb2tdO1xuICAgIHZhciBpbmZvID0gaG9vayArIFwiIGhvb2tcIjtcbiAgICB2YXIgcmV0O1xuICAgIGlmIChoYW5kbGVycykge1xuICAgICAgZm9yICh2YXIgaSA9IDAsIGogPSBoYW5kbGVycy5sZW5ndGg7IGkgPCBqOyBpKyspIHtcbiAgICAgICAgcmV0ID0gaW52b2tlV2l0aEVycm9ySGFuZGxpbmcoaGFuZGxlcnNbaV0sIHZtLCBhcmdzID8gW2FyZ3NdIDogbnVsbCwgdm0sIGluZm8pO1xuICAgICAgfVxuICAgIH1cbiAgICBpZiAodm0uX2hhc0hvb2tFdmVudCkge1xuICAgICAgdm0uJGVtaXQoJ2hvb2s6JyArIGhvb2ssIGFyZ3MpO1xuICAgIH1cbiAgICBwb3BUYXJnZXQoKTtcbiAgICByZXR1cm4gcmV0XG4gIH07XG5cbiAgVnVlLnByb3RvdHlwZS5fX3NldF9tb2RlbCA9IGZ1bmN0aW9uKHRhcmdldCwga2V5LCB2YWx1ZSwgbW9kaWZpZXJzKSB7XG4gICAgaWYgKEFycmF5LmlzQXJyYXkobW9kaWZpZXJzKSkge1xuICAgICAgaWYgKG1vZGlmaWVycy5pbmRleE9mKCd0cmltJykgIT09IC0xKSB7XG4gICAgICAgIHZhbHVlID0gdmFsdWUudHJpbSgpO1xuICAgICAgfVxuICAgICAgaWYgKG1vZGlmaWVycy5pbmRleE9mKCdudW1iZXInKSAhPT0gLTEpIHtcbiAgICAgICAgdmFsdWUgPSB0aGlzLl9uKHZhbHVlKTtcbiAgICAgIH1cbiAgICB9XG4gICAgaWYgKCF0YXJnZXQpIHtcbiAgICAgIHRhcmdldCA9IHRoaXM7XG4gICAgfVxuICAgIC8vIOino+WGs+WKqOaAgeWxnuaAp+a3u+WKoFxuICAgIFZ1ZS5zZXQodGFyZ2V0LCBrZXksIHZhbHVlKTtcbiAgfTtcblxuICBWdWUucHJvdG90eXBlLl9fc2V0X3N5bmMgPSBmdW5jdGlvbih0YXJnZXQsIGtleSwgdmFsdWUpIHtcbiAgICBpZiAoIXRhcmdldCkge1xuICAgICAgdGFyZ2V0ID0gdGhpcztcbiAgICB9XG4gICAgLy8g6Kej5Yaz5Yqo5oCB5bGe5oCn5re75YqgXG4gICAgVnVlLnNldCh0YXJnZXQsIGtleSwgdmFsdWUpO1xuICB9O1xuXG4gIFZ1ZS5wcm90b3R5cGUuX19nZXRfb3JpZyA9IGZ1bmN0aW9uKGl0ZW0pIHtcbiAgICBpZiAoaXNQbGFpbk9iamVjdChpdGVtKSkge1xuICAgICAgcmV0dXJuIGl0ZW1bJyRvcmlnJ10gfHwgaXRlbVxuICAgIH1cbiAgICByZXR1cm4gaXRlbVxuICB9O1xuXG4gIFZ1ZS5wcm90b3R5cGUuX19nZXRfdmFsdWUgPSBmdW5jdGlvbihkYXRhUGF0aCwgdGFyZ2V0KSB7XG4gICAgcmV0dXJuIGdldFRhcmdldCh0YXJnZXQgfHwgdGhpcywgZGF0YVBhdGgpXG4gIH07XG5cblxuICBWdWUucHJvdG90eXBlLl9fZ2V0X2NsYXNzID0gZnVuY3Rpb24oZHluYW1pY0NsYXNzLCBzdGF0aWNDbGFzcykge1xuICAgIHJldHVybiByZW5kZXJDbGFzcyhzdGF0aWNDbGFzcywgZHluYW1pY0NsYXNzKVxuICB9O1xuXG4gIFZ1ZS5wcm90b3R5cGUuX19nZXRfc3R5bGUgPSBmdW5jdGlvbihkeW5hbWljU3R5bGUsIHN0YXRpY1N0eWxlKSB7XG4gICAgaWYgKCFkeW5hbWljU3R5bGUgJiYgIXN0YXRpY1N0eWxlKSB7XG4gICAgICByZXR1cm4gJydcbiAgICB9XG4gICAgdmFyIGR5bmFtaWNTdHlsZU9iaiA9IG5vcm1hbGl6ZVN0eWxlQmluZGluZyhkeW5hbWljU3R5bGUpO1xuICAgIHZhciBzdHlsZU9iaiA9IHN0YXRpY1N0eWxlID8gZXh0ZW5kKHN0YXRpY1N0eWxlLCBkeW5hbWljU3R5bGVPYmopIDogZHluYW1pY1N0eWxlT2JqO1xuICAgIHJldHVybiBPYmplY3Qua2V5cyhzdHlsZU9iaikubWFwKGZ1bmN0aW9uIChuYW1lKSB7IHJldHVybiAoKGh5cGhlbmF0ZShuYW1lKSkgKyBcIjpcIiArIChzdHlsZU9ialtuYW1lXSkpOyB9KS5qb2luKCc7JylcbiAgfTtcblxuICBWdWUucHJvdG90eXBlLl9fbWFwID0gZnVuY3Rpb24odmFsLCBpdGVyYXRlZSkge1xuICAgIC8vVE9ETyDmmoLkuI3ogIPomZEgc3RyaW5nXG4gICAgdmFyIHJldCwgaSwgbCwga2V5cywga2V5O1xuICAgIGlmIChBcnJheS5pc0FycmF5KHZhbCkpIHtcbiAgICAgIHJldCA9IG5ldyBBcnJheSh2YWwubGVuZ3RoKTtcbiAgICAgIGZvciAoaSA9IDAsIGwgPSB2YWwubGVuZ3RoOyBpIDwgbDsgaSsrKSB7XG4gICAgICAgIHJldFtpXSA9IGl0ZXJhdGVlKHZhbFtpXSwgaSk7XG4gICAgICB9XG4gICAgICByZXR1cm4gcmV0XG4gICAgfSBlbHNlIGlmIChpc09iamVjdCh2YWwpKSB7XG4gICAgICBrZXlzID0gT2JqZWN0LmtleXModmFsKTtcbiAgICAgIHJldCA9IE9iamVjdC5jcmVhdGUobnVsbCk7XG4gICAgICBmb3IgKGkgPSAwLCBsID0ga2V5cy5sZW5ndGg7IGkgPCBsOyBpKyspIHtcbiAgICAgICAga2V5ID0ga2V5c1tpXTtcbiAgICAgICAgcmV0W2tleV0gPSBpdGVyYXRlZSh2YWxba2V5XSwga2V5LCBpKTtcbiAgICAgIH1cbiAgICAgIHJldHVybiByZXRcbiAgICB9IGVsc2UgaWYgKHR5cGVvZiB2YWwgPT09ICdudW1iZXInKSB7XG4gICAgICByZXQgPSBuZXcgQXJyYXkodmFsKTtcbiAgICAgIGZvciAoaSA9IDAsIGwgPSB2YWw7IGkgPCBsOyBpKyspIHtcbiAgICAgICAgLy8g56ys5LiA5Liq5Y+C5pWw5pqC5pe25LuN5ZKM5bCP56iL5bqP5LiA6Ie0XG4gICAgICAgIHJldFtpXSA9IGl0ZXJhdGVlKGksIGkpO1xuICAgICAgfVxuICAgICAgcmV0dXJuIHJldFxuICAgIH1cbiAgICByZXR1cm4gW11cbiAgfTtcblxufVxuXG4vKiAgKi9cblxudmFyIExJRkVDWUNMRV9IT09LUyQxID0gW1xuICAgIC8vQXBwXG4gICAgJ29uTGF1bmNoJyxcbiAgICAnb25TaG93JyxcbiAgICAnb25IaWRlJyxcbiAgICAnb25VbmlOVmlld01lc3NhZ2UnLFxuICAgICdvblBhZ2VOb3RGb3VuZCcsXG4gICAgJ29uVGhlbWVDaGFuZ2UnLFxuICAgICdvbkVycm9yJyxcbiAgICAnb25VbmhhbmRsZWRSZWplY3Rpb24nLFxuICAgIC8vUGFnZVxuICAgICdvbkluaXQnLFxuICAgICdvbkxvYWQnLFxuICAgIC8vICdvblNob3cnLFxuICAgICdvblJlYWR5JyxcbiAgICAvLyAnb25IaWRlJyxcbiAgICAnb25VbmxvYWQnLFxuICAgICdvblB1bGxEb3duUmVmcmVzaCcsXG4gICAgJ29uUmVhY2hCb3R0b20nLFxuICAgICdvblRhYkl0ZW1UYXAnLFxuICAgICdvbkFkZFRvRmF2b3JpdGVzJyxcbiAgICAnb25TaGFyZVRpbWVsaW5lJyxcbiAgICAnb25TaGFyZUFwcE1lc3NhZ2UnLFxuICAgICdvblJlc2l6ZScsXG4gICAgJ29uUGFnZVNjcm9sbCcsXG4gICAgJ29uTmF2aWdhdGlvbkJhckJ1dHRvblRhcCcsXG4gICAgJ29uQmFja1ByZXNzJyxcbiAgICAnb25OYXZpZ2F0aW9uQmFyU2VhcmNoSW5wdXRDaGFuZ2VkJyxcbiAgICAnb25OYXZpZ2F0aW9uQmFyU2VhcmNoSW5wdXRDb25maXJtZWQnLFxuICAgICdvbk5hdmlnYXRpb25CYXJTZWFyY2hJbnB1dENsaWNrZWQnLFxuICAgIC8vQ29tcG9uZW50XG4gICAgLy8gJ29uUmVhZHknLCAvLyDlhbzlrrnml6fniYjmnKzvvIzlupTor6Xnp7vpmaTor6Xkuovku7ZcbiAgICAnb25QYWdlU2hvdycsXG4gICAgJ29uUGFnZUhpZGUnLFxuICAgICdvblBhZ2VSZXNpemUnXG5dO1xuZnVuY3Rpb24gbGlmZWN5Y2xlTWl4aW4kMShWdWUpIHtcblxuICAgIC8vZml4ZWQgdnVlLWNsYXNzLWNvbXBvbmVudFxuICAgIHZhciBvbGRFeHRlbmQgPSBWdWUuZXh0ZW5kO1xuICAgIFZ1ZS5leHRlbmQgPSBmdW5jdGlvbihleHRlbmRPcHRpb25zKSB7XG4gICAgICAgIGV4dGVuZE9wdGlvbnMgPSBleHRlbmRPcHRpb25zIHx8IHt9O1xuXG4gICAgICAgIHZhciBtZXRob2RzID0gZXh0ZW5kT3B0aW9ucy5tZXRob2RzO1xuICAgICAgICBpZiAobWV0aG9kcykge1xuICAgICAgICAgICAgT2JqZWN0LmtleXMobWV0aG9kcykuZm9yRWFjaChmdW5jdGlvbiAobWV0aG9kTmFtZSkge1xuICAgICAgICAgICAgICAgIGlmIChMSUZFQ1lDTEVfSE9PS1MkMS5pbmRleE9mKG1ldGhvZE5hbWUpIT09LTEpIHtcbiAgICAgICAgICAgICAgICAgICAgZXh0ZW5kT3B0aW9uc1ttZXRob2ROYW1lXSA9IG1ldGhvZHNbbWV0aG9kTmFtZV07XG4gICAgICAgICAgICAgICAgICAgIGRlbGV0ZSBtZXRob2RzW21ldGhvZE5hbWVdO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH0pO1xuICAgICAgICB9XG5cbiAgICAgICAgcmV0dXJuIG9sZEV4dGVuZC5jYWxsKHRoaXMsIGV4dGVuZE9wdGlvbnMpXG4gICAgfTtcblxuICAgIHZhciBzdHJhdGVnaWVzID0gVnVlLmNvbmZpZy5vcHRpb25NZXJnZVN0cmF0ZWdpZXM7XG4gICAgdmFyIG1lcmdlSG9vayA9IHN0cmF0ZWdpZXMuY3JlYXRlZDtcbiAgICBMSUZFQ1lDTEVfSE9PS1MkMS5mb3JFYWNoKGZ1bmN0aW9uIChob29rKSB7XG4gICAgICAgIHN0cmF0ZWdpZXNbaG9va10gPSBtZXJnZUhvb2s7XG4gICAgfSk7XG5cbiAgICBWdWUucHJvdG90eXBlLl9fbGlmZWN5Y2xlX2hvb2tzX18gPSBMSUZFQ1lDTEVfSE9PS1MkMTtcbn1cblxuLyogICovXG5cbi8vIGluc3RhbGwgcGxhdGZvcm0gcGF0Y2ggZnVuY3Rpb25cblZ1ZS5wcm90b3R5cGUuX19wYXRjaF9fID0gcGF0Y2g7XG5cbi8vIHB1YmxpYyBtb3VudCBtZXRob2RcblZ1ZS5wcm90b3R5cGUuJG1vdW50ID0gZnVuY3Rpb24oXG4gICAgZWwgLFxuICAgIGh5ZHJhdGluZyBcbikge1xuICAgIHJldHVybiBtb3VudENvbXBvbmVudCQxKHRoaXMsIGVsLCBoeWRyYXRpbmcpXG59O1xuXG5saWZlY3ljbGVNaXhpbiQxKFZ1ZSk7XG5pbnRlcm5hbE1peGluKFZ1ZSk7XG5cbi8qICAqL1xuXG5leHBvcnQgZGVmYXVsdCBWdWU7XG4iLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJyZWdlbmVyYXRvci1ydW50aW1lXCIpO1xuIiwiLyoqXG4gKiBDb3B5cmlnaHQgKGMpIDIwMTQtcHJlc2VudCwgRmFjZWJvb2ssIEluYy5cbiAqXG4gKiBUaGlzIHNvdXJjZSBjb2RlIGlzIGxpY2Vuc2VkIHVuZGVyIHRoZSBNSVQgbGljZW5zZSBmb3VuZCBpbiB0aGVcbiAqIExJQ0VOU0UgZmlsZSBpbiB0aGUgcm9vdCBkaXJlY3Rvcnkgb2YgdGhpcyBzb3VyY2UgdHJlZS5cbiAqL1xuXG4vLyBUaGlzIG1ldGhvZCBvZiBvYnRhaW5pbmcgYSByZWZlcmVuY2UgdG8gdGhlIGdsb2JhbCBvYmplY3QgbmVlZHMgdG8gYmVcbi8vIGtlcHQgaWRlbnRpY2FsIHRvIHRoZSB3YXkgaXQgaXMgb2J0YWluZWQgaW4gcnVudGltZS5qc1xudmFyIGcgPSAoZnVuY3Rpb24oKSB7XG4gIHJldHVybiB0aGlzIHx8ICh0eXBlb2Ygc2VsZiA9PT0gXCJvYmplY3RcIiAmJiBzZWxmKTtcbn0pKCkgfHwgRnVuY3Rpb24oXCJyZXR1cm4gdGhpc1wiKSgpO1xuXG4vLyBVc2UgYGdldE93blByb3BlcnR5TmFtZXNgIGJlY2F1c2Ugbm90IGFsbCBicm93c2VycyBzdXBwb3J0IGNhbGxpbmdcbi8vIGBoYXNPd25Qcm9wZXJ0eWAgb24gdGhlIGdsb2JhbCBgc2VsZmAgb2JqZWN0IGluIGEgd29ya2VyLiBTZWUgIzE4My5cbnZhciBoYWRSdW50aW1lID0gZy5yZWdlbmVyYXRvclJ1bnRpbWUgJiZcbiAgT2JqZWN0LmdldE93blByb3BlcnR5TmFtZXMoZykuaW5kZXhPZihcInJlZ2VuZXJhdG9yUnVudGltZVwiKSA+PSAwO1xuXG4vLyBTYXZlIHRoZSBvbGQgcmVnZW5lcmF0b3JSdW50aW1lIGluIGNhc2UgaXQgbmVlZHMgdG8gYmUgcmVzdG9yZWQgbGF0ZXIuXG52YXIgb2xkUnVudGltZSA9IGhhZFJ1bnRpbWUgJiYgZy5yZWdlbmVyYXRvclJ1bnRpbWU7XG5cbi8vIEZvcmNlIHJlZXZhbHV0YXRpb24gb2YgcnVudGltZS5qcy5cbmcucmVnZW5lcmF0b3JSdW50aW1lID0gdW5kZWZpbmVkO1xuXG5tb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCIuL3J1bnRpbWVcIik7XG5cbmlmIChoYWRSdW50aW1lKSB7XG4gIC8vIFJlc3RvcmUgdGhlIG9yaWdpbmFsIHJ1bnRpbWUuXG4gIGcucmVnZW5lcmF0b3JSdW50aW1lID0gb2xkUnVudGltZTtcbn0gZWxzZSB7XG4gIC8vIFJlbW92ZSB0aGUgZ2xvYmFsIHByb3BlcnR5IGFkZGVkIGJ5IHJ1bnRpbWUuanMuXG4gIHRyeSB7XG4gICAgZGVsZXRlIGcucmVnZW5lcmF0b3JSdW50aW1lO1xuICB9IGNhdGNoKGUpIHtcbiAgICBnLnJlZ2VuZXJhdG9yUnVudGltZSA9IHVuZGVmaW5lZDtcbiAgfVxufVxuIiwiLyoqXG4gKiBDb3B5cmlnaHQgKGMpIDIwMTQtcHJlc2VudCwgRmFjZWJvb2ssIEluYy5cbiAqXG4gKiBUaGlzIHNvdXJjZSBjb2RlIGlzIGxpY2Vuc2VkIHVuZGVyIHRoZSBNSVQgbGljZW5zZSBmb3VuZCBpbiB0aGVcbiAqIExJQ0VOU0UgZmlsZSBpbiB0aGUgcm9vdCBkaXJlY3Rvcnkgb2YgdGhpcyBzb3VyY2UgdHJlZS5cbiAqL1xuXG4hKGZ1bmN0aW9uKGdsb2JhbCkge1xuICBcInVzZSBzdHJpY3RcIjtcblxuICB2YXIgT3AgPSBPYmplY3QucHJvdG90eXBlO1xuICB2YXIgaGFzT3duID0gT3AuaGFzT3duUHJvcGVydHk7XG4gIHZhciB1bmRlZmluZWQ7IC8vIE1vcmUgY29tcHJlc3NpYmxlIHRoYW4gdm9pZCAwLlxuICB2YXIgJFN5bWJvbCA9IHR5cGVvZiBTeW1ib2wgPT09IFwiZnVuY3Rpb25cIiA/IFN5bWJvbCA6IHt9O1xuICB2YXIgaXRlcmF0b3JTeW1ib2wgPSAkU3ltYm9sLml0ZXJhdG9yIHx8IFwiQEBpdGVyYXRvclwiO1xuICB2YXIgYXN5bmNJdGVyYXRvclN5bWJvbCA9ICRTeW1ib2wuYXN5bmNJdGVyYXRvciB8fCBcIkBAYXN5bmNJdGVyYXRvclwiO1xuICB2YXIgdG9TdHJpbmdUYWdTeW1ib2wgPSAkU3ltYm9sLnRvU3RyaW5nVGFnIHx8IFwiQEB0b1N0cmluZ1RhZ1wiO1xuXG4gIHZhciBpbk1vZHVsZSA9IHR5cGVvZiBtb2R1bGUgPT09IFwib2JqZWN0XCI7XG4gIHZhciBydW50aW1lID0gZ2xvYmFsLnJlZ2VuZXJhdG9yUnVudGltZTtcbiAgaWYgKHJ1bnRpbWUpIHtcbiAgICBpZiAoaW5Nb2R1bGUpIHtcbiAgICAgIC8vIElmIHJlZ2VuZXJhdG9yUnVudGltZSBpcyBkZWZpbmVkIGdsb2JhbGx5IGFuZCB3ZSdyZSBpbiBhIG1vZHVsZSxcbiAgICAgIC8vIG1ha2UgdGhlIGV4cG9ydHMgb2JqZWN0IGlkZW50aWNhbCB0byByZWdlbmVyYXRvclJ1bnRpbWUuXG4gICAgICBtb2R1bGUuZXhwb3J0cyA9IHJ1bnRpbWU7XG4gICAgfVxuICAgIC8vIERvbid0IGJvdGhlciBldmFsdWF0aW5nIHRoZSByZXN0IG9mIHRoaXMgZmlsZSBpZiB0aGUgcnVudGltZSB3YXNcbiAgICAvLyBhbHJlYWR5IGRlZmluZWQgZ2xvYmFsbHkuXG4gICAgcmV0dXJuO1xuICB9XG5cbiAgLy8gRGVmaW5lIHRoZSBydW50aW1lIGdsb2JhbGx5IChhcyBleHBlY3RlZCBieSBnZW5lcmF0ZWQgY29kZSkgYXMgZWl0aGVyXG4gIC8vIG1vZHVsZS5leHBvcnRzIChpZiB3ZSdyZSBpbiBhIG1vZHVsZSkgb3IgYSBuZXcsIGVtcHR5IG9iamVjdC5cbiAgcnVudGltZSA9IGdsb2JhbC5yZWdlbmVyYXRvclJ1bnRpbWUgPSBpbk1vZHVsZSA/IG1vZHVsZS5leHBvcnRzIDoge307XG5cbiAgZnVuY3Rpb24gd3JhcChpbm5lckZuLCBvdXRlckZuLCBzZWxmLCB0cnlMb2NzTGlzdCkge1xuICAgIC8vIElmIG91dGVyRm4gcHJvdmlkZWQgYW5kIG91dGVyRm4ucHJvdG90eXBlIGlzIGEgR2VuZXJhdG9yLCB0aGVuIG91dGVyRm4ucHJvdG90eXBlIGluc3RhbmNlb2YgR2VuZXJhdG9yLlxuICAgIHZhciBwcm90b0dlbmVyYXRvciA9IG91dGVyRm4gJiYgb3V0ZXJGbi5wcm90b3R5cGUgaW5zdGFuY2VvZiBHZW5lcmF0b3IgPyBvdXRlckZuIDogR2VuZXJhdG9yO1xuICAgIHZhciBnZW5lcmF0b3IgPSBPYmplY3QuY3JlYXRlKHByb3RvR2VuZXJhdG9yLnByb3RvdHlwZSk7XG4gICAgdmFyIGNvbnRleHQgPSBuZXcgQ29udGV4dCh0cnlMb2NzTGlzdCB8fCBbXSk7XG5cbiAgICAvLyBUaGUgLl9pbnZva2UgbWV0aG9kIHVuaWZpZXMgdGhlIGltcGxlbWVudGF0aW9ucyBvZiB0aGUgLm5leHQsXG4gICAgLy8gLnRocm93LCBhbmQgLnJldHVybiBtZXRob2RzLlxuICAgIGdlbmVyYXRvci5faW52b2tlID0gbWFrZUludm9rZU1ldGhvZChpbm5lckZuLCBzZWxmLCBjb250ZXh0KTtcblxuICAgIHJldHVybiBnZW5lcmF0b3I7XG4gIH1cbiAgcnVudGltZS53cmFwID0gd3JhcDtcblxuICAvLyBUcnkvY2F0Y2ggaGVscGVyIHRvIG1pbmltaXplIGRlb3B0aW1pemF0aW9ucy4gUmV0dXJucyBhIGNvbXBsZXRpb25cbiAgLy8gcmVjb3JkIGxpa2UgY29udGV4dC50cnlFbnRyaWVzW2ldLmNvbXBsZXRpb24uIFRoaXMgaW50ZXJmYWNlIGNvdWxkXG4gIC8vIGhhdmUgYmVlbiAoYW5kIHdhcyBwcmV2aW91c2x5KSBkZXNpZ25lZCB0byB0YWtlIGEgY2xvc3VyZSB0byBiZVxuICAvLyBpbnZva2VkIHdpdGhvdXQgYXJndW1lbnRzLCBidXQgaW4gYWxsIHRoZSBjYXNlcyB3ZSBjYXJlIGFib3V0IHdlXG4gIC8vIGFscmVhZHkgaGF2ZSBhbiBleGlzdGluZyBtZXRob2Qgd2Ugd2FudCB0byBjYWxsLCBzbyB0aGVyZSdzIG5vIG5lZWRcbiAgLy8gdG8gY3JlYXRlIGEgbmV3IGZ1bmN0aW9uIG9iamVjdC4gV2UgY2FuIGV2ZW4gZ2V0IGF3YXkgd2l0aCBhc3N1bWluZ1xuICAvLyB0aGUgbWV0aG9kIHRha2VzIGV4YWN0bHkgb25lIGFyZ3VtZW50LCBzaW5jZSB0aGF0IGhhcHBlbnMgdG8gYmUgdHJ1ZVxuICAvLyBpbiBldmVyeSBjYXNlLCBzbyB3ZSBkb24ndCBoYXZlIHRvIHRvdWNoIHRoZSBhcmd1bWVudHMgb2JqZWN0LiBUaGVcbiAgLy8gb25seSBhZGRpdGlvbmFsIGFsbG9jYXRpb24gcmVxdWlyZWQgaXMgdGhlIGNvbXBsZXRpb24gcmVjb3JkLCB3aGljaFxuICAvLyBoYXMgYSBzdGFibGUgc2hhcGUgYW5kIHNvIGhvcGVmdWxseSBzaG91bGQgYmUgY2hlYXAgdG8gYWxsb2NhdGUuXG4gIGZ1bmN0aW9uIHRyeUNhdGNoKGZuLCBvYmosIGFyZykge1xuICAgIHRyeSB7XG4gICAgICByZXR1cm4geyB0eXBlOiBcIm5vcm1hbFwiLCBhcmc6IGZuLmNhbGwob2JqLCBhcmcpIH07XG4gICAgfSBjYXRjaCAoZXJyKSB7XG4gICAgICByZXR1cm4geyB0eXBlOiBcInRocm93XCIsIGFyZzogZXJyIH07XG4gICAgfVxuICB9XG5cbiAgdmFyIEdlblN0YXRlU3VzcGVuZGVkU3RhcnQgPSBcInN1c3BlbmRlZFN0YXJ0XCI7XG4gIHZhciBHZW5TdGF0ZVN1c3BlbmRlZFlpZWxkID0gXCJzdXNwZW5kZWRZaWVsZFwiO1xuICB2YXIgR2VuU3RhdGVFeGVjdXRpbmcgPSBcImV4ZWN1dGluZ1wiO1xuICB2YXIgR2VuU3RhdGVDb21wbGV0ZWQgPSBcImNvbXBsZXRlZFwiO1xuXG4gIC8vIFJldHVybmluZyB0aGlzIG9iamVjdCBmcm9tIHRoZSBpbm5lckZuIGhhcyB0aGUgc2FtZSBlZmZlY3QgYXNcbiAgLy8gYnJlYWtpbmcgb3V0IG9mIHRoZSBkaXNwYXRjaCBzd2l0Y2ggc3RhdGVtZW50LlxuICB2YXIgQ29udGludWVTZW50aW5lbCA9IHt9O1xuXG4gIC8vIER1bW15IGNvbnN0cnVjdG9yIGZ1bmN0aW9ucyB0aGF0IHdlIHVzZSBhcyB0aGUgLmNvbnN0cnVjdG9yIGFuZFxuICAvLyAuY29uc3RydWN0b3IucHJvdG90eXBlIHByb3BlcnRpZXMgZm9yIGZ1bmN0aW9ucyB0aGF0IHJldHVybiBHZW5lcmF0b3JcbiAgLy8gb2JqZWN0cy4gRm9yIGZ1bGwgc3BlYyBjb21wbGlhbmNlLCB5b3UgbWF5IHdpc2ggdG8gY29uZmlndXJlIHlvdXJcbiAgLy8gbWluaWZpZXIgbm90IHRvIG1hbmdsZSB0aGUgbmFtZXMgb2YgdGhlc2UgdHdvIGZ1bmN0aW9ucy5cbiAgZnVuY3Rpb24gR2VuZXJhdG9yKCkge31cbiAgZnVuY3Rpb24gR2VuZXJhdG9yRnVuY3Rpb24oKSB7fVxuICBmdW5jdGlvbiBHZW5lcmF0b3JGdW5jdGlvblByb3RvdHlwZSgpIHt9XG5cbiAgLy8gVGhpcyBpcyBhIHBvbHlmaWxsIGZvciAlSXRlcmF0b3JQcm90b3R5cGUlIGZvciBlbnZpcm9ubWVudHMgdGhhdFxuICAvLyBkb24ndCBuYXRpdmVseSBzdXBwb3J0IGl0LlxuICB2YXIgSXRlcmF0b3JQcm90b3R5cGUgPSB7fTtcbiAgSXRlcmF0b3JQcm90b3R5cGVbaXRlcmF0b3JTeW1ib2xdID0gZnVuY3Rpb24gKCkge1xuICAgIHJldHVybiB0aGlzO1xuICB9O1xuXG4gIHZhciBnZXRQcm90byA9IE9iamVjdC5nZXRQcm90b3R5cGVPZjtcbiAgdmFyIE5hdGl2ZUl0ZXJhdG9yUHJvdG90eXBlID0gZ2V0UHJvdG8gJiYgZ2V0UHJvdG8oZ2V0UHJvdG8odmFsdWVzKFtdKSkpO1xuICBpZiAoTmF0aXZlSXRlcmF0b3JQcm90b3R5cGUgJiZcbiAgICAgIE5hdGl2ZUl0ZXJhdG9yUHJvdG90eXBlICE9PSBPcCAmJlxuICAgICAgaGFzT3duLmNhbGwoTmF0aXZlSXRlcmF0b3JQcm90b3R5cGUsIGl0ZXJhdG9yU3ltYm9sKSkge1xuICAgIC8vIFRoaXMgZW52aXJvbm1lbnQgaGFzIGEgbmF0aXZlICVJdGVyYXRvclByb3RvdHlwZSU7IHVzZSBpdCBpbnN0ZWFkXG4gICAgLy8gb2YgdGhlIHBvbHlmaWxsLlxuICAgIEl0ZXJhdG9yUHJvdG90eXBlID0gTmF0aXZlSXRlcmF0b3JQcm90b3R5cGU7XG4gIH1cblxuICB2YXIgR3AgPSBHZW5lcmF0b3JGdW5jdGlvblByb3RvdHlwZS5wcm90b3R5cGUgPVxuICAgIEdlbmVyYXRvci5wcm90b3R5cGUgPSBPYmplY3QuY3JlYXRlKEl0ZXJhdG9yUHJvdG90eXBlKTtcbiAgR2VuZXJhdG9yRnVuY3Rpb24ucHJvdG90eXBlID0gR3AuY29uc3RydWN0b3IgPSBHZW5lcmF0b3JGdW5jdGlvblByb3RvdHlwZTtcbiAgR2VuZXJhdG9yRnVuY3Rpb25Qcm90b3R5cGUuY29uc3RydWN0b3IgPSBHZW5lcmF0b3JGdW5jdGlvbjtcbiAgR2VuZXJhdG9yRnVuY3Rpb25Qcm90b3R5cGVbdG9TdHJpbmdUYWdTeW1ib2xdID1cbiAgICBHZW5lcmF0b3JGdW5jdGlvbi5kaXNwbGF5TmFtZSA9IFwiR2VuZXJhdG9yRnVuY3Rpb25cIjtcblxuICAvLyBIZWxwZXIgZm9yIGRlZmluaW5nIHRoZSAubmV4dCwgLnRocm93LCBhbmQgLnJldHVybiBtZXRob2RzIG9mIHRoZVxuICAvLyBJdGVyYXRvciBpbnRlcmZhY2UgaW4gdGVybXMgb2YgYSBzaW5nbGUgLl9pbnZva2UgbWV0aG9kLlxuICBmdW5jdGlvbiBkZWZpbmVJdGVyYXRvck1ldGhvZHMocHJvdG90eXBlKSB7XG4gICAgW1wibmV4dFwiLCBcInRocm93XCIsIFwicmV0dXJuXCJdLmZvckVhY2goZnVuY3Rpb24obWV0aG9kKSB7XG4gICAgICBwcm90b3R5cGVbbWV0aG9kXSA9IGZ1bmN0aW9uKGFyZykge1xuICAgICAgICByZXR1cm4gdGhpcy5faW52b2tlKG1ldGhvZCwgYXJnKTtcbiAgICAgIH07XG4gICAgfSk7XG4gIH1cblxuICBydW50aW1lLmlzR2VuZXJhdG9yRnVuY3Rpb24gPSBmdW5jdGlvbihnZW5GdW4pIHtcbiAgICB2YXIgY3RvciA9IHR5cGVvZiBnZW5GdW4gPT09IFwiZnVuY3Rpb25cIiAmJiBnZW5GdW4uY29uc3RydWN0b3I7XG4gICAgcmV0dXJuIGN0b3JcbiAgICAgID8gY3RvciA9PT0gR2VuZXJhdG9yRnVuY3Rpb24gfHxcbiAgICAgICAgLy8gRm9yIHRoZSBuYXRpdmUgR2VuZXJhdG9yRnVuY3Rpb24gY29uc3RydWN0b3IsIHRoZSBiZXN0IHdlIGNhblxuICAgICAgICAvLyBkbyBpcyB0byBjaGVjayBpdHMgLm5hbWUgcHJvcGVydHkuXG4gICAgICAgIChjdG9yLmRpc3BsYXlOYW1lIHx8IGN0b3IubmFtZSkgPT09IFwiR2VuZXJhdG9yRnVuY3Rpb25cIlxuICAgICAgOiBmYWxzZTtcbiAgfTtcblxuICBydW50aW1lLm1hcmsgPSBmdW5jdGlvbihnZW5GdW4pIHtcbiAgICBpZiAoT2JqZWN0LnNldFByb3RvdHlwZU9mKSB7XG4gICAgICBPYmplY3Quc2V0UHJvdG90eXBlT2YoZ2VuRnVuLCBHZW5lcmF0b3JGdW5jdGlvblByb3RvdHlwZSk7XG4gICAgfSBlbHNlIHtcbiAgICAgIGdlbkZ1bi5fX3Byb3RvX18gPSBHZW5lcmF0b3JGdW5jdGlvblByb3RvdHlwZTtcbiAgICAgIGlmICghKHRvU3RyaW5nVGFnU3ltYm9sIGluIGdlbkZ1bikpIHtcbiAgICAgICAgZ2VuRnVuW3RvU3RyaW5nVGFnU3ltYm9sXSA9IFwiR2VuZXJhdG9yRnVuY3Rpb25cIjtcbiAgICAgIH1cbiAgICB9XG4gICAgZ2VuRnVuLnByb3RvdHlwZSA9IE9iamVjdC5jcmVhdGUoR3ApO1xuICAgIHJldHVybiBnZW5GdW47XG4gIH07XG5cbiAgLy8gV2l0aGluIHRoZSBib2R5IG9mIGFueSBhc3luYyBmdW5jdGlvbiwgYGF3YWl0IHhgIGlzIHRyYW5zZm9ybWVkIHRvXG4gIC8vIGB5aWVsZCByZWdlbmVyYXRvclJ1bnRpbWUuYXdyYXAoeClgLCBzbyB0aGF0IHRoZSBydW50aW1lIGNhbiB0ZXN0XG4gIC8vIGBoYXNPd24uY2FsbCh2YWx1ZSwgXCJfX2F3YWl0XCIpYCB0byBkZXRlcm1pbmUgaWYgdGhlIHlpZWxkZWQgdmFsdWUgaXNcbiAgLy8gbWVhbnQgdG8gYmUgYXdhaXRlZC5cbiAgcnVudGltZS5hd3JhcCA9IGZ1bmN0aW9uKGFyZykge1xuICAgIHJldHVybiB7IF9fYXdhaXQ6IGFyZyB9O1xuICB9O1xuXG4gIGZ1bmN0aW9uIEFzeW5jSXRlcmF0b3IoZ2VuZXJhdG9yKSB7XG4gICAgZnVuY3Rpb24gaW52b2tlKG1ldGhvZCwgYXJnLCByZXNvbHZlLCByZWplY3QpIHtcbiAgICAgIHZhciByZWNvcmQgPSB0cnlDYXRjaChnZW5lcmF0b3JbbWV0aG9kXSwgZ2VuZXJhdG9yLCBhcmcpO1xuICAgICAgaWYgKHJlY29yZC50eXBlID09PSBcInRocm93XCIpIHtcbiAgICAgICAgcmVqZWN0KHJlY29yZC5hcmcpO1xuICAgICAgfSBlbHNlIHtcbiAgICAgICAgdmFyIHJlc3VsdCA9IHJlY29yZC5hcmc7XG4gICAgICAgIHZhciB2YWx1ZSA9IHJlc3VsdC52YWx1ZTtcbiAgICAgICAgaWYgKHZhbHVlICYmXG4gICAgICAgICAgICB0eXBlb2YgdmFsdWUgPT09IFwib2JqZWN0XCIgJiZcbiAgICAgICAgICAgIGhhc093bi5jYWxsKHZhbHVlLCBcIl9fYXdhaXRcIikpIHtcbiAgICAgICAgICByZXR1cm4gUHJvbWlzZS5yZXNvbHZlKHZhbHVlLl9fYXdhaXQpLnRoZW4oZnVuY3Rpb24odmFsdWUpIHtcbiAgICAgICAgICAgIGludm9rZShcIm5leHRcIiwgdmFsdWUsIHJlc29sdmUsIHJlamVjdCk7XG4gICAgICAgICAgfSwgZnVuY3Rpb24oZXJyKSB7XG4gICAgICAgICAgICBpbnZva2UoXCJ0aHJvd1wiLCBlcnIsIHJlc29sdmUsIHJlamVjdCk7XG4gICAgICAgICAgfSk7XG4gICAgICAgIH1cblxuICAgICAgICByZXR1cm4gUHJvbWlzZS5yZXNvbHZlKHZhbHVlKS50aGVuKGZ1bmN0aW9uKHVud3JhcHBlZCkge1xuICAgICAgICAgIC8vIFdoZW4gYSB5aWVsZGVkIFByb21pc2UgaXMgcmVzb2x2ZWQsIGl0cyBmaW5hbCB2YWx1ZSBiZWNvbWVzXG4gICAgICAgICAgLy8gdGhlIC52YWx1ZSBvZiB0aGUgUHJvbWlzZTx7dmFsdWUsZG9uZX0+IHJlc3VsdCBmb3IgdGhlXG4gICAgICAgICAgLy8gY3VycmVudCBpdGVyYXRpb24uXG4gICAgICAgICAgcmVzdWx0LnZhbHVlID0gdW53cmFwcGVkO1xuICAgICAgICAgIHJlc29sdmUocmVzdWx0KTtcbiAgICAgICAgfSwgZnVuY3Rpb24oZXJyb3IpIHtcbiAgICAgICAgICAvLyBJZiBhIHJlamVjdGVkIFByb21pc2Ugd2FzIHlpZWxkZWQsIHRocm93IHRoZSByZWplY3Rpb24gYmFja1xuICAgICAgICAgIC8vIGludG8gdGhlIGFzeW5jIGdlbmVyYXRvciBmdW5jdGlvbiBzbyBpdCBjYW4gYmUgaGFuZGxlZCB0aGVyZS5cbiAgICAgICAgICByZXR1cm4gaW52b2tlKFwidGhyb3dcIiwgZXJyb3IsIHJlc29sdmUsIHJlamVjdCk7XG4gICAgICAgIH0pO1xuICAgICAgfVxuICAgIH1cblxuICAgIHZhciBwcmV2aW91c1Byb21pc2U7XG5cbiAgICBmdW5jdGlvbiBlbnF1ZXVlKG1ldGhvZCwgYXJnKSB7XG4gICAgICBmdW5jdGlvbiBjYWxsSW52b2tlV2l0aE1ldGhvZEFuZEFyZygpIHtcbiAgICAgICAgcmV0dXJuIG5ldyBQcm9taXNlKGZ1bmN0aW9uKHJlc29sdmUsIHJlamVjdCkge1xuICAgICAgICAgIGludm9rZShtZXRob2QsIGFyZywgcmVzb2x2ZSwgcmVqZWN0KTtcbiAgICAgICAgfSk7XG4gICAgICB9XG5cbiAgICAgIHJldHVybiBwcmV2aW91c1Byb21pc2UgPVxuICAgICAgICAvLyBJZiBlbnF1ZXVlIGhhcyBiZWVuIGNhbGxlZCBiZWZvcmUsIHRoZW4gd2Ugd2FudCB0byB3YWl0IHVudGlsXG4gICAgICAgIC8vIGFsbCBwcmV2aW91cyBQcm9taXNlcyBoYXZlIGJlZW4gcmVzb2x2ZWQgYmVmb3JlIGNhbGxpbmcgaW52b2tlLFxuICAgICAgICAvLyBzbyB0aGF0IHJlc3VsdHMgYXJlIGFsd2F5cyBkZWxpdmVyZWQgaW4gdGhlIGNvcnJlY3Qgb3JkZXIuIElmXG4gICAgICAgIC8vIGVucXVldWUgaGFzIG5vdCBiZWVuIGNhbGxlZCBiZWZvcmUsIHRoZW4gaXQgaXMgaW1wb3J0YW50IHRvXG4gICAgICAgIC8vIGNhbGwgaW52b2tlIGltbWVkaWF0ZWx5LCB3aXRob3V0IHdhaXRpbmcgb24gYSBjYWxsYmFjayB0byBmaXJlLFxuICAgICAgICAvLyBzbyB0aGF0IHRoZSBhc3luYyBnZW5lcmF0b3IgZnVuY3Rpb24gaGFzIHRoZSBvcHBvcnR1bml0eSB0byBkb1xuICAgICAgICAvLyBhbnkgbmVjZXNzYXJ5IHNldHVwIGluIGEgcHJlZGljdGFibGUgd2F5LiBUaGlzIHByZWRpY3RhYmlsaXR5XG4gICAgICAgIC8vIGlzIHdoeSB0aGUgUHJvbWlzZSBjb25zdHJ1Y3RvciBzeW5jaHJvbm91c2x5IGludm9rZXMgaXRzXG4gICAgICAgIC8vIGV4ZWN1dG9yIGNhbGxiYWNrLCBhbmQgd2h5IGFzeW5jIGZ1bmN0aW9ucyBzeW5jaHJvbm91c2x5XG4gICAgICAgIC8vIGV4ZWN1dGUgY29kZSBiZWZvcmUgdGhlIGZpcnN0IGF3YWl0LiBTaW5jZSB3ZSBpbXBsZW1lbnQgc2ltcGxlXG4gICAgICAgIC8vIGFzeW5jIGZ1bmN0aW9ucyBpbiB0ZXJtcyBvZiBhc3luYyBnZW5lcmF0b3JzLCBpdCBpcyBlc3BlY2lhbGx5XG4gICAgICAgIC8vIGltcG9ydGFudCB0byBnZXQgdGhpcyByaWdodCwgZXZlbiB0aG91Z2ggaXQgcmVxdWlyZXMgY2FyZS5cbiAgICAgICAgcHJldmlvdXNQcm9taXNlID8gcHJldmlvdXNQcm9taXNlLnRoZW4oXG4gICAgICAgICAgY2FsbEludm9rZVdpdGhNZXRob2RBbmRBcmcsXG4gICAgICAgICAgLy8gQXZvaWQgcHJvcGFnYXRpbmcgZmFpbHVyZXMgdG8gUHJvbWlzZXMgcmV0dXJuZWQgYnkgbGF0ZXJcbiAgICAgICAgICAvLyBpbnZvY2F0aW9ucyBvZiB0aGUgaXRlcmF0b3IuXG4gICAgICAgICAgY2FsbEludm9rZVdpdGhNZXRob2RBbmRBcmdcbiAgICAgICAgKSA6IGNhbGxJbnZva2VXaXRoTWV0aG9kQW5kQXJnKCk7XG4gICAgfVxuXG4gICAgLy8gRGVmaW5lIHRoZSB1bmlmaWVkIGhlbHBlciBtZXRob2QgdGhhdCBpcyB1c2VkIHRvIGltcGxlbWVudCAubmV4dCxcbiAgICAvLyAudGhyb3csIGFuZCAucmV0dXJuIChzZWUgZGVmaW5lSXRlcmF0b3JNZXRob2RzKS5cbiAgICB0aGlzLl9pbnZva2UgPSBlbnF1ZXVlO1xuICB9XG5cbiAgZGVmaW5lSXRlcmF0b3JNZXRob2RzKEFzeW5jSXRlcmF0b3IucHJvdG90eXBlKTtcbiAgQXN5bmNJdGVyYXRvci5wcm90b3R5cGVbYXN5bmNJdGVyYXRvclN5bWJvbF0gPSBmdW5jdGlvbiAoKSB7XG4gICAgcmV0dXJuIHRoaXM7XG4gIH07XG4gIHJ1bnRpbWUuQXN5bmNJdGVyYXRvciA9IEFzeW5jSXRlcmF0b3I7XG5cbiAgLy8gTm90ZSB0aGF0IHNpbXBsZSBhc3luYyBmdW5jdGlvbnMgYXJlIGltcGxlbWVudGVkIG9uIHRvcCBvZlxuICAvLyBBc3luY0l0ZXJhdG9yIG9iamVjdHM7IHRoZXkganVzdCByZXR1cm4gYSBQcm9taXNlIGZvciB0aGUgdmFsdWUgb2ZcbiAgLy8gdGhlIGZpbmFsIHJlc3VsdCBwcm9kdWNlZCBieSB0aGUgaXRlcmF0b3IuXG4gIHJ1bnRpbWUuYXN5bmMgPSBmdW5jdGlvbihpbm5lckZuLCBvdXRlckZuLCBzZWxmLCB0cnlMb2NzTGlzdCkge1xuICAgIHZhciBpdGVyID0gbmV3IEFzeW5jSXRlcmF0b3IoXG4gICAgICB3cmFwKGlubmVyRm4sIG91dGVyRm4sIHNlbGYsIHRyeUxvY3NMaXN0KVxuICAgICk7XG5cbiAgICByZXR1cm4gcnVudGltZS5pc0dlbmVyYXRvckZ1bmN0aW9uKG91dGVyRm4pXG4gICAgICA/IGl0ZXIgLy8gSWYgb3V0ZXJGbiBpcyBhIGdlbmVyYXRvciwgcmV0dXJuIHRoZSBmdWxsIGl0ZXJhdG9yLlxuICAgICAgOiBpdGVyLm5leHQoKS50aGVuKGZ1bmN0aW9uKHJlc3VsdCkge1xuICAgICAgICAgIHJldHVybiByZXN1bHQuZG9uZSA/IHJlc3VsdC52YWx1ZSA6IGl0ZXIubmV4dCgpO1xuICAgICAgICB9KTtcbiAgfTtcblxuICBmdW5jdGlvbiBtYWtlSW52b2tlTWV0aG9kKGlubmVyRm4sIHNlbGYsIGNvbnRleHQpIHtcbiAgICB2YXIgc3RhdGUgPSBHZW5TdGF0ZVN1c3BlbmRlZFN0YXJ0O1xuXG4gICAgcmV0dXJuIGZ1bmN0aW9uIGludm9rZShtZXRob2QsIGFyZykge1xuICAgICAgaWYgKHN0YXRlID09PSBHZW5TdGF0ZUV4ZWN1dGluZykge1xuICAgICAgICB0aHJvdyBuZXcgRXJyb3IoXCJHZW5lcmF0b3IgaXMgYWxyZWFkeSBydW5uaW5nXCIpO1xuICAgICAgfVxuXG4gICAgICBpZiAoc3RhdGUgPT09IEdlblN0YXRlQ29tcGxldGVkKSB7XG4gICAgICAgIGlmIChtZXRob2QgPT09IFwidGhyb3dcIikge1xuICAgICAgICAgIHRocm93IGFyZztcbiAgICAgICAgfVxuXG4gICAgICAgIC8vIEJlIGZvcmdpdmluZywgcGVyIDI1LjMuMy4zLjMgb2YgdGhlIHNwZWM6XG4gICAgICAgIC8vIGh0dHBzOi8vcGVvcGxlLm1vemlsbGEub3JnL35qb3JlbmRvcmZmL2VzNi1kcmFmdC5odG1sI3NlYy1nZW5lcmF0b3JyZXN1bWVcbiAgICAgICAgcmV0dXJuIGRvbmVSZXN1bHQoKTtcbiAgICAgIH1cblxuICAgICAgY29udGV4dC5tZXRob2QgPSBtZXRob2Q7XG4gICAgICBjb250ZXh0LmFyZyA9IGFyZztcblxuICAgICAgd2hpbGUgKHRydWUpIHtcbiAgICAgICAgdmFyIGRlbGVnYXRlID0gY29udGV4dC5kZWxlZ2F0ZTtcbiAgICAgICAgaWYgKGRlbGVnYXRlKSB7XG4gICAgICAgICAgdmFyIGRlbGVnYXRlUmVzdWx0ID0gbWF5YmVJbnZva2VEZWxlZ2F0ZShkZWxlZ2F0ZSwgY29udGV4dCk7XG4gICAgICAgICAgaWYgKGRlbGVnYXRlUmVzdWx0KSB7XG4gICAgICAgICAgICBpZiAoZGVsZWdhdGVSZXN1bHQgPT09IENvbnRpbnVlU2VudGluZWwpIGNvbnRpbnVlO1xuICAgICAgICAgICAgcmV0dXJuIGRlbGVnYXRlUmVzdWx0O1xuICAgICAgICAgIH1cbiAgICAgICAgfVxuXG4gICAgICAgIGlmIChjb250ZXh0Lm1ldGhvZCA9PT0gXCJuZXh0XCIpIHtcbiAgICAgICAgICAvLyBTZXR0aW5nIGNvbnRleHQuX3NlbnQgZm9yIGxlZ2FjeSBzdXBwb3J0IG9mIEJhYmVsJ3NcbiAgICAgICAgICAvLyBmdW5jdGlvbi5zZW50IGltcGxlbWVudGF0aW9uLlxuICAgICAgICAgIGNvbnRleHQuc2VudCA9IGNvbnRleHQuX3NlbnQgPSBjb250ZXh0LmFyZztcblxuICAgICAgICB9IGVsc2UgaWYgKGNvbnRleHQubWV0aG9kID09PSBcInRocm93XCIpIHtcbiAgICAgICAgICBpZiAoc3RhdGUgPT09IEdlblN0YXRlU3VzcGVuZGVkU3RhcnQpIHtcbiAgICAgICAgICAgIHN0YXRlID0gR2VuU3RhdGVDb21wbGV0ZWQ7XG4gICAgICAgICAgICB0aHJvdyBjb250ZXh0LmFyZztcbiAgICAgICAgICB9XG5cbiAgICAgICAgICBjb250ZXh0LmRpc3BhdGNoRXhjZXB0aW9uKGNvbnRleHQuYXJnKTtcblxuICAgICAgICB9IGVsc2UgaWYgKGNvbnRleHQubWV0aG9kID09PSBcInJldHVyblwiKSB7XG4gICAgICAgICAgY29udGV4dC5hYnJ1cHQoXCJyZXR1cm5cIiwgY29udGV4dC5hcmcpO1xuICAgICAgICB9XG5cbiAgICAgICAgc3RhdGUgPSBHZW5TdGF0ZUV4ZWN1dGluZztcblxuICAgICAgICB2YXIgcmVjb3JkID0gdHJ5Q2F0Y2goaW5uZXJGbiwgc2VsZiwgY29udGV4dCk7XG4gICAgICAgIGlmIChyZWNvcmQudHlwZSA9PT0gXCJub3JtYWxcIikge1xuICAgICAgICAgIC8vIElmIGFuIGV4Y2VwdGlvbiBpcyB0aHJvd24gZnJvbSBpbm5lckZuLCB3ZSBsZWF2ZSBzdGF0ZSA9PT1cbiAgICAgICAgICAvLyBHZW5TdGF0ZUV4ZWN1dGluZyBhbmQgbG9vcCBiYWNrIGZvciBhbm90aGVyIGludm9jYXRpb24uXG4gICAgICAgICAgc3RhdGUgPSBjb250ZXh0LmRvbmVcbiAgICAgICAgICAgID8gR2VuU3RhdGVDb21wbGV0ZWRcbiAgICAgICAgICAgIDogR2VuU3RhdGVTdXNwZW5kZWRZaWVsZDtcblxuICAgICAgICAgIGlmIChyZWNvcmQuYXJnID09PSBDb250aW51ZVNlbnRpbmVsKSB7XG4gICAgICAgICAgICBjb250aW51ZTtcbiAgICAgICAgICB9XG5cbiAgICAgICAgICByZXR1cm4ge1xuICAgICAgICAgICAgdmFsdWU6IHJlY29yZC5hcmcsXG4gICAgICAgICAgICBkb25lOiBjb250ZXh0LmRvbmVcbiAgICAgICAgICB9O1xuXG4gICAgICAgIH0gZWxzZSBpZiAocmVjb3JkLnR5cGUgPT09IFwidGhyb3dcIikge1xuICAgICAgICAgIHN0YXRlID0gR2VuU3RhdGVDb21wbGV0ZWQ7XG4gICAgICAgICAgLy8gRGlzcGF0Y2ggdGhlIGV4Y2VwdGlvbiBieSBsb29waW5nIGJhY2sgYXJvdW5kIHRvIHRoZVxuICAgICAgICAgIC8vIGNvbnRleHQuZGlzcGF0Y2hFeGNlcHRpb24oY29udGV4dC5hcmcpIGNhbGwgYWJvdmUuXG4gICAgICAgICAgY29udGV4dC5tZXRob2QgPSBcInRocm93XCI7XG4gICAgICAgICAgY29udGV4dC5hcmcgPSByZWNvcmQuYXJnO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgfTtcbiAgfVxuXG4gIC8vIENhbGwgZGVsZWdhdGUuaXRlcmF0b3JbY29udGV4dC5tZXRob2RdKGNvbnRleHQuYXJnKSBhbmQgaGFuZGxlIHRoZVxuICAvLyByZXN1bHQsIGVpdGhlciBieSByZXR1cm5pbmcgYSB7IHZhbHVlLCBkb25lIH0gcmVzdWx0IGZyb20gdGhlXG4gIC8vIGRlbGVnYXRlIGl0ZXJhdG9yLCBvciBieSBtb2RpZnlpbmcgY29udGV4dC5tZXRob2QgYW5kIGNvbnRleHQuYXJnLFxuICAvLyBzZXR0aW5nIGNvbnRleHQuZGVsZWdhdGUgdG8gbnVsbCwgYW5kIHJldHVybmluZyB0aGUgQ29udGludWVTZW50aW5lbC5cbiAgZnVuY3Rpb24gbWF5YmVJbnZva2VEZWxlZ2F0ZShkZWxlZ2F0ZSwgY29udGV4dCkge1xuICAgIHZhciBtZXRob2QgPSBkZWxlZ2F0ZS5pdGVyYXRvcltjb250ZXh0Lm1ldGhvZF07XG4gICAgaWYgKG1ldGhvZCA9PT0gdW5kZWZpbmVkKSB7XG4gICAgICAvLyBBIC50aHJvdyBvciAucmV0dXJuIHdoZW4gdGhlIGRlbGVnYXRlIGl0ZXJhdG9yIGhhcyBubyAudGhyb3dcbiAgICAgIC8vIG1ldGhvZCBhbHdheXMgdGVybWluYXRlcyB0aGUgeWllbGQqIGxvb3AuXG4gICAgICBjb250ZXh0LmRlbGVnYXRlID0gbnVsbDtcblxuICAgICAgaWYgKGNvbnRleHQubWV0aG9kID09PSBcInRocm93XCIpIHtcbiAgICAgICAgaWYgKGRlbGVnYXRlLml0ZXJhdG9yLnJldHVybikge1xuICAgICAgICAgIC8vIElmIHRoZSBkZWxlZ2F0ZSBpdGVyYXRvciBoYXMgYSByZXR1cm4gbWV0aG9kLCBnaXZlIGl0IGFcbiAgICAgICAgICAvLyBjaGFuY2UgdG8gY2xlYW4gdXAuXG4gICAgICAgICAgY29udGV4dC5tZXRob2QgPSBcInJldHVyblwiO1xuICAgICAgICAgIGNvbnRleHQuYXJnID0gdW5kZWZpbmVkO1xuICAgICAgICAgIG1heWJlSW52b2tlRGVsZWdhdGUoZGVsZWdhdGUsIGNvbnRleHQpO1xuXG4gICAgICAgICAgaWYgKGNvbnRleHQubWV0aG9kID09PSBcInRocm93XCIpIHtcbiAgICAgICAgICAgIC8vIElmIG1heWJlSW52b2tlRGVsZWdhdGUoY29udGV4dCkgY2hhbmdlZCBjb250ZXh0Lm1ldGhvZCBmcm9tXG4gICAgICAgICAgICAvLyBcInJldHVyblwiIHRvIFwidGhyb3dcIiwgbGV0IHRoYXQgb3ZlcnJpZGUgdGhlIFR5cGVFcnJvciBiZWxvdy5cbiAgICAgICAgICAgIHJldHVybiBDb250aW51ZVNlbnRpbmVsO1xuICAgICAgICAgIH1cbiAgICAgICAgfVxuXG4gICAgICAgIGNvbnRleHQubWV0aG9kID0gXCJ0aHJvd1wiO1xuICAgICAgICBjb250ZXh0LmFyZyA9IG5ldyBUeXBlRXJyb3IoXG4gICAgICAgICAgXCJUaGUgaXRlcmF0b3IgZG9lcyBub3QgcHJvdmlkZSBhICd0aHJvdycgbWV0aG9kXCIpO1xuICAgICAgfVxuXG4gICAgICByZXR1cm4gQ29udGludWVTZW50aW5lbDtcbiAgICB9XG5cbiAgICB2YXIgcmVjb3JkID0gdHJ5Q2F0Y2gobWV0aG9kLCBkZWxlZ2F0ZS5pdGVyYXRvciwgY29udGV4dC5hcmcpO1xuXG4gICAgaWYgKHJlY29yZC50eXBlID09PSBcInRocm93XCIpIHtcbiAgICAgIGNvbnRleHQubWV0aG9kID0gXCJ0aHJvd1wiO1xuICAgICAgY29udGV4dC5hcmcgPSByZWNvcmQuYXJnO1xuICAgICAgY29udGV4dC5kZWxlZ2F0ZSA9IG51bGw7XG4gICAgICByZXR1cm4gQ29udGludWVTZW50aW5lbDtcbiAgICB9XG5cbiAgICB2YXIgaW5mbyA9IHJlY29yZC5hcmc7XG5cbiAgICBpZiAoISBpbmZvKSB7XG4gICAgICBjb250ZXh0Lm1ldGhvZCA9IFwidGhyb3dcIjtcbiAgICAgIGNvbnRleHQuYXJnID0gbmV3IFR5cGVFcnJvcihcIml0ZXJhdG9yIHJlc3VsdCBpcyBub3QgYW4gb2JqZWN0XCIpO1xuICAgICAgY29udGV4dC5kZWxlZ2F0ZSA9IG51bGw7XG4gICAgICByZXR1cm4gQ29udGludWVTZW50aW5lbDtcbiAgICB9XG5cbiAgICBpZiAoaW5mby5kb25lKSB7XG4gICAgICAvLyBBc3NpZ24gdGhlIHJlc3VsdCBvZiB0aGUgZmluaXNoZWQgZGVsZWdhdGUgdG8gdGhlIHRlbXBvcmFyeVxuICAgICAgLy8gdmFyaWFibGUgc3BlY2lmaWVkIGJ5IGRlbGVnYXRlLnJlc3VsdE5hbWUgKHNlZSBkZWxlZ2F0ZVlpZWxkKS5cbiAgICAgIGNvbnRleHRbZGVsZWdhdGUucmVzdWx0TmFtZV0gPSBpbmZvLnZhbHVlO1xuXG4gICAgICAvLyBSZXN1bWUgZXhlY3V0aW9uIGF0IHRoZSBkZXNpcmVkIGxvY2F0aW9uIChzZWUgZGVsZWdhdGVZaWVsZCkuXG4gICAgICBjb250ZXh0Lm5leHQgPSBkZWxlZ2F0ZS5uZXh0TG9jO1xuXG4gICAgICAvLyBJZiBjb250ZXh0Lm1ldGhvZCB3YXMgXCJ0aHJvd1wiIGJ1dCB0aGUgZGVsZWdhdGUgaGFuZGxlZCB0aGVcbiAgICAgIC8vIGV4Y2VwdGlvbiwgbGV0IHRoZSBvdXRlciBnZW5lcmF0b3IgcHJvY2VlZCBub3JtYWxseS4gSWZcbiAgICAgIC8vIGNvbnRleHQubWV0aG9kIHdhcyBcIm5leHRcIiwgZm9yZ2V0IGNvbnRleHQuYXJnIHNpbmNlIGl0IGhhcyBiZWVuXG4gICAgICAvLyBcImNvbnN1bWVkXCIgYnkgdGhlIGRlbGVnYXRlIGl0ZXJhdG9yLiBJZiBjb250ZXh0Lm1ldGhvZCB3YXNcbiAgICAgIC8vIFwicmV0dXJuXCIsIGFsbG93IHRoZSBvcmlnaW5hbCAucmV0dXJuIGNhbGwgdG8gY29udGludWUgaW4gdGhlXG4gICAgICAvLyBvdXRlciBnZW5lcmF0b3IuXG4gICAgICBpZiAoY29udGV4dC5tZXRob2QgIT09IFwicmV0dXJuXCIpIHtcbiAgICAgICAgY29udGV4dC5tZXRob2QgPSBcIm5leHRcIjtcbiAgICAgICAgY29udGV4dC5hcmcgPSB1bmRlZmluZWQ7XG4gICAgICB9XG5cbiAgICB9IGVsc2Uge1xuICAgICAgLy8gUmUteWllbGQgdGhlIHJlc3VsdCByZXR1cm5lZCBieSB0aGUgZGVsZWdhdGUgbWV0aG9kLlxuICAgICAgcmV0dXJuIGluZm87XG4gICAgfVxuXG4gICAgLy8gVGhlIGRlbGVnYXRlIGl0ZXJhdG9yIGlzIGZpbmlzaGVkLCBzbyBmb3JnZXQgaXQgYW5kIGNvbnRpbnVlIHdpdGhcbiAgICAvLyB0aGUgb3V0ZXIgZ2VuZXJhdG9yLlxuICAgIGNvbnRleHQuZGVsZWdhdGUgPSBudWxsO1xuICAgIHJldHVybiBDb250aW51ZVNlbnRpbmVsO1xuICB9XG5cbiAgLy8gRGVmaW5lIEdlbmVyYXRvci5wcm90b3R5cGUue25leHQsdGhyb3cscmV0dXJufSBpbiB0ZXJtcyBvZiB0aGVcbiAgLy8gdW5pZmllZCAuX2ludm9rZSBoZWxwZXIgbWV0aG9kLlxuICBkZWZpbmVJdGVyYXRvck1ldGhvZHMoR3ApO1xuXG4gIEdwW3RvU3RyaW5nVGFnU3ltYm9sXSA9IFwiR2VuZXJhdG9yXCI7XG5cbiAgLy8gQSBHZW5lcmF0b3Igc2hvdWxkIGFsd2F5cyByZXR1cm4gaXRzZWxmIGFzIHRoZSBpdGVyYXRvciBvYmplY3Qgd2hlbiB0aGVcbiAgLy8gQEBpdGVyYXRvciBmdW5jdGlvbiBpcyBjYWxsZWQgb24gaXQuIFNvbWUgYnJvd3NlcnMnIGltcGxlbWVudGF0aW9ucyBvZiB0aGVcbiAgLy8gaXRlcmF0b3IgcHJvdG90eXBlIGNoYWluIGluY29ycmVjdGx5IGltcGxlbWVudCB0aGlzLCBjYXVzaW5nIHRoZSBHZW5lcmF0b3JcbiAgLy8gb2JqZWN0IHRvIG5vdCBiZSByZXR1cm5lZCBmcm9tIHRoaXMgY2FsbC4gVGhpcyBlbnN1cmVzIHRoYXQgZG9lc24ndCBoYXBwZW4uXG4gIC8vIFNlZSBodHRwczovL2dpdGh1Yi5jb20vZmFjZWJvb2svcmVnZW5lcmF0b3IvaXNzdWVzLzI3NCBmb3IgbW9yZSBkZXRhaWxzLlxuICBHcFtpdGVyYXRvclN5bWJvbF0gPSBmdW5jdGlvbigpIHtcbiAgICByZXR1cm4gdGhpcztcbiAgfTtcblxuICBHcC50b1N0cmluZyA9IGZ1bmN0aW9uKCkge1xuICAgIHJldHVybiBcIltvYmplY3QgR2VuZXJhdG9yXVwiO1xuICB9O1xuXG4gIGZ1bmN0aW9uIHB1c2hUcnlFbnRyeShsb2NzKSB7XG4gICAgdmFyIGVudHJ5ID0geyB0cnlMb2M6IGxvY3NbMF0gfTtcblxuICAgIGlmICgxIGluIGxvY3MpIHtcbiAgICAgIGVudHJ5LmNhdGNoTG9jID0gbG9jc1sxXTtcbiAgICB9XG5cbiAgICBpZiAoMiBpbiBsb2NzKSB7XG4gICAgICBlbnRyeS5maW5hbGx5TG9jID0gbG9jc1syXTtcbiAgICAgIGVudHJ5LmFmdGVyTG9jID0gbG9jc1szXTtcbiAgICB9XG5cbiAgICB0aGlzLnRyeUVudHJpZXMucHVzaChlbnRyeSk7XG4gIH1cblxuICBmdW5jdGlvbiByZXNldFRyeUVudHJ5KGVudHJ5KSB7XG4gICAgdmFyIHJlY29yZCA9IGVudHJ5LmNvbXBsZXRpb24gfHwge307XG4gICAgcmVjb3JkLnR5cGUgPSBcIm5vcm1hbFwiO1xuICAgIGRlbGV0ZSByZWNvcmQuYXJnO1xuICAgIGVudHJ5LmNvbXBsZXRpb24gPSByZWNvcmQ7XG4gIH1cblxuICBmdW5jdGlvbiBDb250ZXh0KHRyeUxvY3NMaXN0KSB7XG4gICAgLy8gVGhlIHJvb3QgZW50cnkgb2JqZWN0IChlZmZlY3RpdmVseSBhIHRyeSBzdGF0ZW1lbnQgd2l0aG91dCBhIGNhdGNoXG4gICAgLy8gb3IgYSBmaW5hbGx5IGJsb2NrKSBnaXZlcyB1cyBhIHBsYWNlIHRvIHN0b3JlIHZhbHVlcyB0aHJvd24gZnJvbVxuICAgIC8vIGxvY2F0aW9ucyB3aGVyZSB0aGVyZSBpcyBubyBlbmNsb3NpbmcgdHJ5IHN0YXRlbWVudC5cbiAgICB0aGlzLnRyeUVudHJpZXMgPSBbeyB0cnlMb2M6IFwicm9vdFwiIH1dO1xuICAgIHRyeUxvY3NMaXN0LmZvckVhY2gocHVzaFRyeUVudHJ5LCB0aGlzKTtcbiAgICB0aGlzLnJlc2V0KHRydWUpO1xuICB9XG5cbiAgcnVudGltZS5rZXlzID0gZnVuY3Rpb24ob2JqZWN0KSB7XG4gICAgdmFyIGtleXMgPSBbXTtcbiAgICBmb3IgKHZhciBrZXkgaW4gb2JqZWN0KSB7XG4gICAgICBrZXlzLnB1c2goa2V5KTtcbiAgICB9XG4gICAga2V5cy5yZXZlcnNlKCk7XG5cbiAgICAvLyBSYXRoZXIgdGhhbiByZXR1cm5pbmcgYW4gb2JqZWN0IHdpdGggYSBuZXh0IG1ldGhvZCwgd2Uga2VlcFxuICAgIC8vIHRoaW5ncyBzaW1wbGUgYW5kIHJldHVybiB0aGUgbmV4dCBmdW5jdGlvbiBpdHNlbGYuXG4gICAgcmV0dXJuIGZ1bmN0aW9uIG5leHQoKSB7XG4gICAgICB3aGlsZSAoa2V5cy5sZW5ndGgpIHtcbiAgICAgICAgdmFyIGtleSA9IGtleXMucG9wKCk7XG4gICAgICAgIGlmIChrZXkgaW4gb2JqZWN0KSB7XG4gICAgICAgICAgbmV4dC52YWx1ZSA9IGtleTtcbiAgICAgICAgICBuZXh0LmRvbmUgPSBmYWxzZTtcbiAgICAgICAgICByZXR1cm4gbmV4dDtcbiAgICAgICAgfVxuICAgICAgfVxuXG4gICAgICAvLyBUbyBhdm9pZCBjcmVhdGluZyBhbiBhZGRpdGlvbmFsIG9iamVjdCwgd2UganVzdCBoYW5nIHRoZSAudmFsdWVcbiAgICAgIC8vIGFuZCAuZG9uZSBwcm9wZXJ0aWVzIG9mZiB0aGUgbmV4dCBmdW5jdGlvbiBvYmplY3QgaXRzZWxmLiBUaGlzXG4gICAgICAvLyBhbHNvIGVuc3VyZXMgdGhhdCB0aGUgbWluaWZpZXIgd2lsbCBub3QgYW5vbnltaXplIHRoZSBmdW5jdGlvbi5cbiAgICAgIG5leHQuZG9uZSA9IHRydWU7XG4gICAgICByZXR1cm4gbmV4dDtcbiAgICB9O1xuICB9O1xuXG4gIGZ1bmN0aW9uIHZhbHVlcyhpdGVyYWJsZSkge1xuICAgIGlmIChpdGVyYWJsZSkge1xuICAgICAgdmFyIGl0ZXJhdG9yTWV0aG9kID0gaXRlcmFibGVbaXRlcmF0b3JTeW1ib2xdO1xuICAgICAgaWYgKGl0ZXJhdG9yTWV0aG9kKSB7XG4gICAgICAgIHJldHVybiBpdGVyYXRvck1ldGhvZC5jYWxsKGl0ZXJhYmxlKTtcbiAgICAgIH1cblxuICAgICAgaWYgKHR5cGVvZiBpdGVyYWJsZS5uZXh0ID09PSBcImZ1bmN0aW9uXCIpIHtcbiAgICAgICAgcmV0dXJuIGl0ZXJhYmxlO1xuICAgICAgfVxuXG4gICAgICBpZiAoIWlzTmFOKGl0ZXJhYmxlLmxlbmd0aCkpIHtcbiAgICAgICAgdmFyIGkgPSAtMSwgbmV4dCA9IGZ1bmN0aW9uIG5leHQoKSB7XG4gICAgICAgICAgd2hpbGUgKCsraSA8IGl0ZXJhYmxlLmxlbmd0aCkge1xuICAgICAgICAgICAgaWYgKGhhc093bi5jYWxsKGl0ZXJhYmxlLCBpKSkge1xuICAgICAgICAgICAgICBuZXh0LnZhbHVlID0gaXRlcmFibGVbaV07XG4gICAgICAgICAgICAgIG5leHQuZG9uZSA9IGZhbHNlO1xuICAgICAgICAgICAgICByZXR1cm4gbmV4dDtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICB9XG5cbiAgICAgICAgICBuZXh0LnZhbHVlID0gdW5kZWZpbmVkO1xuICAgICAgICAgIG5leHQuZG9uZSA9IHRydWU7XG5cbiAgICAgICAgICByZXR1cm4gbmV4dDtcbiAgICAgICAgfTtcblxuICAgICAgICByZXR1cm4gbmV4dC5uZXh0ID0gbmV4dDtcbiAgICAgIH1cbiAgICB9XG5cbiAgICAvLyBSZXR1cm4gYW4gaXRlcmF0b3Igd2l0aCBubyB2YWx1ZXMuXG4gICAgcmV0dXJuIHsgbmV4dDogZG9uZVJlc3VsdCB9O1xuICB9XG4gIHJ1bnRpbWUudmFsdWVzID0gdmFsdWVzO1xuXG4gIGZ1bmN0aW9uIGRvbmVSZXN1bHQoKSB7XG4gICAgcmV0dXJuIHsgdmFsdWU6IHVuZGVmaW5lZCwgZG9uZTogdHJ1ZSB9O1xuICB9XG5cbiAgQ29udGV4dC5wcm90b3R5cGUgPSB7XG4gICAgY29uc3RydWN0b3I6IENvbnRleHQsXG5cbiAgICByZXNldDogZnVuY3Rpb24oc2tpcFRlbXBSZXNldCkge1xuICAgICAgdGhpcy5wcmV2ID0gMDtcbiAgICAgIHRoaXMubmV4dCA9IDA7XG4gICAgICAvLyBSZXNldHRpbmcgY29udGV4dC5fc2VudCBmb3IgbGVnYWN5IHN1cHBvcnQgb2YgQmFiZWwnc1xuICAgICAgLy8gZnVuY3Rpb24uc2VudCBpbXBsZW1lbnRhdGlvbi5cbiAgICAgIHRoaXMuc2VudCA9IHRoaXMuX3NlbnQgPSB1bmRlZmluZWQ7XG4gICAgICB0aGlzLmRvbmUgPSBmYWxzZTtcbiAgICAgIHRoaXMuZGVsZWdhdGUgPSBudWxsO1xuXG4gICAgICB0aGlzLm1ldGhvZCA9IFwibmV4dFwiO1xuICAgICAgdGhpcy5hcmcgPSB1bmRlZmluZWQ7XG5cbiAgICAgIHRoaXMudHJ5RW50cmllcy5mb3JFYWNoKHJlc2V0VHJ5RW50cnkpO1xuXG4gICAgICBpZiAoIXNraXBUZW1wUmVzZXQpIHtcbiAgICAgICAgZm9yICh2YXIgbmFtZSBpbiB0aGlzKSB7XG4gICAgICAgICAgLy8gTm90IHN1cmUgYWJvdXQgdGhlIG9wdGltYWwgb3JkZXIgb2YgdGhlc2UgY29uZGl0aW9uczpcbiAgICAgICAgICBpZiAobmFtZS5jaGFyQXQoMCkgPT09IFwidFwiICYmXG4gICAgICAgICAgICAgIGhhc093bi5jYWxsKHRoaXMsIG5hbWUpICYmXG4gICAgICAgICAgICAgICFpc05hTigrbmFtZS5zbGljZSgxKSkpIHtcbiAgICAgICAgICAgIHRoaXNbbmFtZV0gPSB1bmRlZmluZWQ7XG4gICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICB9XG4gICAgfSxcblxuICAgIHN0b3A6IGZ1bmN0aW9uKCkge1xuICAgICAgdGhpcy5kb25lID0gdHJ1ZTtcblxuICAgICAgdmFyIHJvb3RFbnRyeSA9IHRoaXMudHJ5RW50cmllc1swXTtcbiAgICAgIHZhciByb290UmVjb3JkID0gcm9vdEVudHJ5LmNvbXBsZXRpb247XG4gICAgICBpZiAocm9vdFJlY29yZC50eXBlID09PSBcInRocm93XCIpIHtcbiAgICAgICAgdGhyb3cgcm9vdFJlY29yZC5hcmc7XG4gICAgICB9XG5cbiAgICAgIHJldHVybiB0aGlzLnJ2YWw7XG4gICAgfSxcblxuICAgIGRpc3BhdGNoRXhjZXB0aW9uOiBmdW5jdGlvbihleGNlcHRpb24pIHtcbiAgICAgIGlmICh0aGlzLmRvbmUpIHtcbiAgICAgICAgdGhyb3cgZXhjZXB0aW9uO1xuICAgICAgfVxuXG4gICAgICB2YXIgY29udGV4dCA9IHRoaXM7XG4gICAgICBmdW5jdGlvbiBoYW5kbGUobG9jLCBjYXVnaHQpIHtcbiAgICAgICAgcmVjb3JkLnR5cGUgPSBcInRocm93XCI7XG4gICAgICAgIHJlY29yZC5hcmcgPSBleGNlcHRpb247XG4gICAgICAgIGNvbnRleHQubmV4dCA9IGxvYztcblxuICAgICAgICBpZiAoY2F1Z2h0KSB7XG4gICAgICAgICAgLy8gSWYgdGhlIGRpc3BhdGNoZWQgZXhjZXB0aW9uIHdhcyBjYXVnaHQgYnkgYSBjYXRjaCBibG9jayxcbiAgICAgICAgICAvLyB0aGVuIGxldCB0aGF0IGNhdGNoIGJsb2NrIGhhbmRsZSB0aGUgZXhjZXB0aW9uIG5vcm1hbGx5LlxuICAgICAgICAgIGNvbnRleHQubWV0aG9kID0gXCJuZXh0XCI7XG4gICAgICAgICAgY29udGV4dC5hcmcgPSB1bmRlZmluZWQ7XG4gICAgICAgIH1cblxuICAgICAgICByZXR1cm4gISEgY2F1Z2h0O1xuICAgICAgfVxuXG4gICAgICBmb3IgKHZhciBpID0gdGhpcy50cnlFbnRyaWVzLmxlbmd0aCAtIDE7IGkgPj0gMDsgLS1pKSB7XG4gICAgICAgIHZhciBlbnRyeSA9IHRoaXMudHJ5RW50cmllc1tpXTtcbiAgICAgICAgdmFyIHJlY29yZCA9IGVudHJ5LmNvbXBsZXRpb247XG5cbiAgICAgICAgaWYgKGVudHJ5LnRyeUxvYyA9PT0gXCJyb290XCIpIHtcbiAgICAgICAgICAvLyBFeGNlcHRpb24gdGhyb3duIG91dHNpZGUgb2YgYW55IHRyeSBibG9jayB0aGF0IGNvdWxkIGhhbmRsZVxuICAgICAgICAgIC8vIGl0LCBzbyBzZXQgdGhlIGNvbXBsZXRpb24gdmFsdWUgb2YgdGhlIGVudGlyZSBmdW5jdGlvbiB0b1xuICAgICAgICAgIC8vIHRocm93IHRoZSBleGNlcHRpb24uXG4gICAgICAgICAgcmV0dXJuIGhhbmRsZShcImVuZFwiKTtcbiAgICAgICAgfVxuXG4gICAgICAgIGlmIChlbnRyeS50cnlMb2MgPD0gdGhpcy5wcmV2KSB7XG4gICAgICAgICAgdmFyIGhhc0NhdGNoID0gaGFzT3duLmNhbGwoZW50cnksIFwiY2F0Y2hMb2NcIik7XG4gICAgICAgICAgdmFyIGhhc0ZpbmFsbHkgPSBoYXNPd24uY2FsbChlbnRyeSwgXCJmaW5hbGx5TG9jXCIpO1xuXG4gICAgICAgICAgaWYgKGhhc0NhdGNoICYmIGhhc0ZpbmFsbHkpIHtcbiAgICAgICAgICAgIGlmICh0aGlzLnByZXYgPCBlbnRyeS5jYXRjaExvYykge1xuICAgICAgICAgICAgICByZXR1cm4gaGFuZGxlKGVudHJ5LmNhdGNoTG9jLCB0cnVlKTtcbiAgICAgICAgICAgIH0gZWxzZSBpZiAodGhpcy5wcmV2IDwgZW50cnkuZmluYWxseUxvYykge1xuICAgICAgICAgICAgICByZXR1cm4gaGFuZGxlKGVudHJ5LmZpbmFsbHlMb2MpO1xuICAgICAgICAgICAgfVxuXG4gICAgICAgICAgfSBlbHNlIGlmIChoYXNDYXRjaCkge1xuICAgICAgICAgICAgaWYgKHRoaXMucHJldiA8IGVudHJ5LmNhdGNoTG9jKSB7XG4gICAgICAgICAgICAgIHJldHVybiBoYW5kbGUoZW50cnkuY2F0Y2hMb2MsIHRydWUpO1xuICAgICAgICAgICAgfVxuXG4gICAgICAgICAgfSBlbHNlIGlmIChoYXNGaW5hbGx5KSB7XG4gICAgICAgICAgICBpZiAodGhpcy5wcmV2IDwgZW50cnkuZmluYWxseUxvYykge1xuICAgICAgICAgICAgICByZXR1cm4gaGFuZGxlKGVudHJ5LmZpbmFsbHlMb2MpO1xuICAgICAgICAgICAgfVxuXG4gICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgIHRocm93IG5ldyBFcnJvcihcInRyeSBzdGF0ZW1lbnQgd2l0aG91dCBjYXRjaCBvciBmaW5hbGx5XCIpO1xuICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgICAgfVxuICAgIH0sXG5cbiAgICBhYnJ1cHQ6IGZ1bmN0aW9uKHR5cGUsIGFyZykge1xuICAgICAgZm9yICh2YXIgaSA9IHRoaXMudHJ5RW50cmllcy5sZW5ndGggLSAxOyBpID49IDA7IC0taSkge1xuICAgICAgICB2YXIgZW50cnkgPSB0aGlzLnRyeUVudHJpZXNbaV07XG4gICAgICAgIGlmIChlbnRyeS50cnlMb2MgPD0gdGhpcy5wcmV2ICYmXG4gICAgICAgICAgICBoYXNPd24uY2FsbChlbnRyeSwgXCJmaW5hbGx5TG9jXCIpICYmXG4gICAgICAgICAgICB0aGlzLnByZXYgPCBlbnRyeS5maW5hbGx5TG9jKSB7XG4gICAgICAgICAgdmFyIGZpbmFsbHlFbnRyeSA9IGVudHJ5O1xuICAgICAgICAgIGJyZWFrO1xuICAgICAgICB9XG4gICAgICB9XG5cbiAgICAgIGlmIChmaW5hbGx5RW50cnkgJiZcbiAgICAgICAgICAodHlwZSA9PT0gXCJicmVha1wiIHx8XG4gICAgICAgICAgIHR5cGUgPT09IFwiY29udGludWVcIikgJiZcbiAgICAgICAgICBmaW5hbGx5RW50cnkudHJ5TG9jIDw9IGFyZyAmJlxuICAgICAgICAgIGFyZyA8PSBmaW5hbGx5RW50cnkuZmluYWxseUxvYykge1xuICAgICAgICAvLyBJZ25vcmUgdGhlIGZpbmFsbHkgZW50cnkgaWYgY29udHJvbCBpcyBub3QganVtcGluZyB0byBhXG4gICAgICAgIC8vIGxvY2F0aW9uIG91dHNpZGUgdGhlIHRyeS9jYXRjaCBibG9jay5cbiAgICAgICAgZmluYWxseUVudHJ5ID0gbnVsbDtcbiAgICAgIH1cblxuICAgICAgdmFyIHJlY29yZCA9IGZpbmFsbHlFbnRyeSA/IGZpbmFsbHlFbnRyeS5jb21wbGV0aW9uIDoge307XG4gICAgICByZWNvcmQudHlwZSA9IHR5cGU7XG4gICAgICByZWNvcmQuYXJnID0gYXJnO1xuXG4gICAgICBpZiAoZmluYWxseUVudHJ5KSB7XG4gICAgICAgIHRoaXMubWV0aG9kID0gXCJuZXh0XCI7XG4gICAgICAgIHRoaXMubmV4dCA9IGZpbmFsbHlFbnRyeS5maW5hbGx5TG9jO1xuICAgICAgICByZXR1cm4gQ29udGludWVTZW50aW5lbDtcbiAgICAgIH1cblxuICAgICAgcmV0dXJuIHRoaXMuY29tcGxldGUocmVjb3JkKTtcbiAgICB9LFxuXG4gICAgY29tcGxldGU6IGZ1bmN0aW9uKHJlY29yZCwgYWZ0ZXJMb2MpIHtcbiAgICAgIGlmIChyZWNvcmQudHlwZSA9PT0gXCJ0aHJvd1wiKSB7XG4gICAgICAgIHRocm93IHJlY29yZC5hcmc7XG4gICAgICB9XG5cbiAgICAgIGlmIChyZWNvcmQudHlwZSA9PT0gXCJicmVha1wiIHx8XG4gICAgICAgICAgcmVjb3JkLnR5cGUgPT09IFwiY29udGludWVcIikge1xuICAgICAgICB0aGlzLm5leHQgPSByZWNvcmQuYXJnO1xuICAgICAgfSBlbHNlIGlmIChyZWNvcmQudHlwZSA9PT0gXCJyZXR1cm5cIikge1xuICAgICAgICB0aGlzLnJ2YWwgPSB0aGlzLmFyZyA9IHJlY29yZC5hcmc7XG4gICAgICAgIHRoaXMubWV0aG9kID0gXCJyZXR1cm5cIjtcbiAgICAgICAgdGhpcy5uZXh0ID0gXCJlbmRcIjtcbiAgICAgIH0gZWxzZSBpZiAocmVjb3JkLnR5cGUgPT09IFwibm9ybWFsXCIgJiYgYWZ0ZXJMb2MpIHtcbiAgICAgICAgdGhpcy5uZXh0ID0gYWZ0ZXJMb2M7XG4gICAgICB9XG5cbiAgICAgIHJldHVybiBDb250aW51ZVNlbnRpbmVsO1xuICAgIH0sXG5cbiAgICBmaW5pc2g6IGZ1bmN0aW9uKGZpbmFsbHlMb2MpIHtcbiAgICAgIGZvciAodmFyIGkgPSB0aGlzLnRyeUVudHJpZXMubGVuZ3RoIC0gMTsgaSA+PSAwOyAtLWkpIHtcbiAgICAgICAgdmFyIGVudHJ5ID0gdGhpcy50cnlFbnRyaWVzW2ldO1xuICAgICAgICBpZiAoZW50cnkuZmluYWxseUxvYyA9PT0gZmluYWxseUxvYykge1xuICAgICAgICAgIHRoaXMuY29tcGxldGUoZW50cnkuY29tcGxldGlvbiwgZW50cnkuYWZ0ZXJMb2MpO1xuICAgICAgICAgIHJlc2V0VHJ5RW50cnkoZW50cnkpO1xuICAgICAgICAgIHJldHVybiBDb250aW51ZVNlbnRpbmVsO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgfSxcblxuICAgIFwiY2F0Y2hcIjogZnVuY3Rpb24odHJ5TG9jKSB7XG4gICAgICBmb3IgKHZhciBpID0gdGhpcy50cnlFbnRyaWVzLmxlbmd0aCAtIDE7IGkgPj0gMDsgLS1pKSB7XG4gICAgICAgIHZhciBlbnRyeSA9IHRoaXMudHJ5RW50cmllc1tpXTtcbiAgICAgICAgaWYgKGVudHJ5LnRyeUxvYyA9PT0gdHJ5TG9jKSB7XG4gICAgICAgICAgdmFyIHJlY29yZCA9IGVudHJ5LmNvbXBsZXRpb247XG4gICAgICAgICAgaWYgKHJlY29yZC50eXBlID09PSBcInRocm93XCIpIHtcbiAgICAgICAgICAgIHZhciB0aHJvd24gPSByZWNvcmQuYXJnO1xuICAgICAgICAgICAgcmVzZXRUcnlFbnRyeShlbnRyeSk7XG4gICAgICAgICAgfVxuICAgICAgICAgIHJldHVybiB0aHJvd247XG4gICAgICAgIH1cbiAgICAgIH1cblxuICAgICAgLy8gVGhlIGNvbnRleHQuY2F0Y2ggbWV0aG9kIG11c3Qgb25seSBiZSBjYWxsZWQgd2l0aCBhIGxvY2F0aW9uXG4gICAgICAvLyBhcmd1bWVudCB0aGF0IGNvcnJlc3BvbmRzIHRvIGEga25vd24gY2F0Y2ggYmxvY2suXG4gICAgICB0aHJvdyBuZXcgRXJyb3IoXCJpbGxlZ2FsIGNhdGNoIGF0dGVtcHRcIik7XG4gICAgfSxcblxuICAgIGRlbGVnYXRlWWllbGQ6IGZ1bmN0aW9uKGl0ZXJhYmxlLCByZXN1bHROYW1lLCBuZXh0TG9jKSB7XG4gICAgICB0aGlzLmRlbGVnYXRlID0ge1xuICAgICAgICBpdGVyYXRvcjogdmFsdWVzKGl0ZXJhYmxlKSxcbiAgICAgICAgcmVzdWx0TmFtZTogcmVzdWx0TmFtZSxcbiAgICAgICAgbmV4dExvYzogbmV4dExvY1xuICAgICAgfTtcblxuICAgICAgaWYgKHRoaXMubWV0aG9kID09PSBcIm5leHRcIikge1xuICAgICAgICAvLyBEZWxpYmVyYXRlbHkgZm9yZ2V0IHRoZSBsYXN0IHNlbnQgdmFsdWUgc28gdGhhdCB3ZSBkb24ndFxuICAgICAgICAvLyBhY2NpZGVudGFsbHkgcGFzcyBpdCBvbiB0byB0aGUgZGVsZWdhdGUuXG4gICAgICAgIHRoaXMuYXJnID0gdW5kZWZpbmVkO1xuICAgICAgfVxuXG4gICAgICByZXR1cm4gQ29udGludWVTZW50aW5lbDtcbiAgICB9XG4gIH07XG59KShcbiAgLy8gSW4gc2xvcHB5IG1vZGUsIHVuYm91bmQgYHRoaXNgIHJlZmVycyB0byB0aGUgZ2xvYmFsIG9iamVjdCwgZmFsbGJhY2sgdG9cbiAgLy8gRnVuY3Rpb24gY29uc3RydWN0b3IgaWYgd2UncmUgaW4gZ2xvYmFsIHN0cmljdCBtb2RlLiBUaGF0IGlzIHNhZGx5IGEgZm9ybVxuICAvLyBvZiBpbmRpcmVjdCBldmFsIHdoaWNoIHZpb2xhdGVzIENvbnRlbnQgU2VjdXJpdHkgUG9saWN5LlxuICAoZnVuY3Rpb24oKSB7XG4gICAgcmV0dXJuIHRoaXMgfHwgKHR5cGVvZiBzZWxmID09PSBcIm9iamVjdFwiICYmIHNlbGYpO1xuICB9KSgpIHx8IEZ1bmN0aW9uKFwicmV0dXJuIHRoaXNcIikoKVxuKTtcbiIsImxldCBBUEk7XG5pZihwcm9jZXNzLmVudi5OT0RFX0VOViA9PT0gJ2RldmVsb3BtZW50Jykge1xuXHRBUEkgPSAnaHR0cHM6Ly94aW5neGluZy5xdXR1YmFvLmNvbS8nO1xufSBlbHNlIHtcblx0QVBJID0gJ2h0dHBzOi8veGluZ3hpbmcucXV0dWJhby5jb20vJztcbn1cbmV4cG9ydCBkZWZhdWx0IHtcblx0QVBJXG59IiwiZXhwb3J0IGRlZmF1bHQgYXN5bmMgKG9wdGlvbnMpID0+IHtcblx0aWYgKCFvcHRpb25zLnVybCkge1xuXHRcdHJldHVybiBjb25zb2xlLndhcm4oJ+ivt+S8oOWFpXVybCcpO1xuXHR9XG5cdGNvbnN0IHIgPSBhd2FpdCB1bmkucmVxdWVzdChvcHRpb25zKTtcblx0cmV0dXJuIChyICYmIHIuZGF0YSkgPyByLmRhdGEgOiAoclsxXSA/IHJbMV0uZGF0YSA6IHt9KTtcbn0iLCIvKiBnbG9iYWxzIF9fVlVFX1NTUl9DT05URVhUX18gKi9cblxuLy8gSU1QT1JUQU5UOiBEbyBOT1QgdXNlIEVTMjAxNSBmZWF0dXJlcyBpbiB0aGlzIGZpbGUgKGV4Y2VwdCBmb3IgbW9kdWxlcykuXG4vLyBUaGlzIG1vZHVsZSBpcyBhIHJ1bnRpbWUgdXRpbGl0eSBmb3IgY2xlYW5lciBjb21wb25lbnQgbW9kdWxlIG91dHB1dCBhbmQgd2lsbFxuLy8gYmUgaW5jbHVkZWQgaW4gdGhlIGZpbmFsIHdlYnBhY2sgdXNlciBidW5kbGUuXG5cbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIG5vcm1hbGl6ZUNvbXBvbmVudCAoXG4gIHNjcmlwdEV4cG9ydHMsXG4gIHJlbmRlcixcbiAgc3RhdGljUmVuZGVyRm5zLFxuICBmdW5jdGlvbmFsVGVtcGxhdGUsXG4gIGluamVjdFN0eWxlcyxcbiAgc2NvcGVJZCxcbiAgbW9kdWxlSWRlbnRpZmllciwgLyogc2VydmVyIG9ubHkgKi9cbiAgc2hhZG93TW9kZSwgLyogdnVlLWNsaSBvbmx5ICovXG4gIGNvbXBvbmVudHMsIC8vIGZpeGVkIGJ5IHh4eHh4eCBhdXRvIGNvbXBvbmVudHNcbiAgcmVuZGVyanMgLy8gZml4ZWQgYnkgeHh4eHh4IHJlbmRlcmpzXG4pIHtcbiAgLy8gVnVlLmV4dGVuZCBjb25zdHJ1Y3RvciBleHBvcnQgaW50ZXJvcFxuICB2YXIgb3B0aW9ucyA9IHR5cGVvZiBzY3JpcHRFeHBvcnRzID09PSAnZnVuY3Rpb24nXG4gICAgPyBzY3JpcHRFeHBvcnRzLm9wdGlvbnNcbiAgICA6IHNjcmlwdEV4cG9ydHNcblxuICAvLyBmaXhlZCBieSB4eHh4eHggYXV0byBjb21wb25lbnRzXG4gIGlmIChjb21wb25lbnRzKSB7XG4gICAgaWYgKCFvcHRpb25zLmNvbXBvbmVudHMpIHtcbiAgICAgIG9wdGlvbnMuY29tcG9uZW50cyA9IHt9XG4gICAgfVxuICAgIHZhciBoYXNPd24gPSBPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5XG4gICAgZm9yICh2YXIgbmFtZSBpbiBjb21wb25lbnRzKSB7XG4gICAgICBpZiAoaGFzT3duLmNhbGwoY29tcG9uZW50cywgbmFtZSkgJiYgIWhhc093bi5jYWxsKG9wdGlvbnMuY29tcG9uZW50cywgbmFtZSkpIHtcbiAgICAgICAgb3B0aW9ucy5jb21wb25lbnRzW25hbWVdID0gY29tcG9uZW50c1tuYW1lXVxuICAgICAgfVxuICAgIH1cbiAgfVxuICAvLyBmaXhlZCBieSB4eHh4eHggcmVuZGVyanNcbiAgaWYgKHJlbmRlcmpzKSB7XG4gICAgKHJlbmRlcmpzLmJlZm9yZUNyZWF0ZSB8fCAocmVuZGVyanMuYmVmb3JlQ3JlYXRlID0gW10pKS51bnNoaWZ0KGZ1bmN0aW9uKCkge1xuICAgICAgdGhpc1tyZW5kZXJqcy5fX21vZHVsZV0gPSB0aGlzXG4gICAgfSk7XG4gICAgKG9wdGlvbnMubWl4aW5zIHx8IChvcHRpb25zLm1peGlucyA9IFtdKSkucHVzaChyZW5kZXJqcylcbiAgfVxuXG4gIC8vIHJlbmRlciBmdW5jdGlvbnNcbiAgaWYgKHJlbmRlcikge1xuICAgIG9wdGlvbnMucmVuZGVyID0gcmVuZGVyXG4gICAgb3B0aW9ucy5zdGF0aWNSZW5kZXJGbnMgPSBzdGF0aWNSZW5kZXJGbnNcbiAgICBvcHRpb25zLl9jb21waWxlZCA9IHRydWVcbiAgfVxuXG4gIC8vIGZ1bmN0aW9uYWwgdGVtcGxhdGVcbiAgaWYgKGZ1bmN0aW9uYWxUZW1wbGF0ZSkge1xuICAgIG9wdGlvbnMuZnVuY3Rpb25hbCA9IHRydWVcbiAgfVxuXG4gIC8vIHNjb3BlZElkXG4gIGlmIChzY29wZUlkKSB7XG4gICAgb3B0aW9ucy5fc2NvcGVJZCA9ICdkYXRhLXYtJyArIHNjb3BlSWRcbiAgfVxuXG4gIHZhciBob29rXG4gIGlmIChtb2R1bGVJZGVudGlmaWVyKSB7IC8vIHNlcnZlciBidWlsZFxuICAgIGhvb2sgPSBmdW5jdGlvbiAoY29udGV4dCkge1xuICAgICAgLy8gMi4zIGluamVjdGlvblxuICAgICAgY29udGV4dCA9XG4gICAgICAgIGNvbnRleHQgfHwgLy8gY2FjaGVkIGNhbGxcbiAgICAgICAgKHRoaXMuJHZub2RlICYmIHRoaXMuJHZub2RlLnNzckNvbnRleHQpIHx8IC8vIHN0YXRlZnVsXG4gICAgICAgICh0aGlzLnBhcmVudCAmJiB0aGlzLnBhcmVudC4kdm5vZGUgJiYgdGhpcy5wYXJlbnQuJHZub2RlLnNzckNvbnRleHQpIC8vIGZ1bmN0aW9uYWxcbiAgICAgIC8vIDIuMiB3aXRoIHJ1bkluTmV3Q29udGV4dDogdHJ1ZVxuICAgICAgaWYgKCFjb250ZXh0ICYmIHR5cGVvZiBfX1ZVRV9TU1JfQ09OVEVYVF9fICE9PSAndW5kZWZpbmVkJykge1xuICAgICAgICBjb250ZXh0ID0gX19WVUVfU1NSX0NPTlRFWFRfX1xuICAgICAgfVxuICAgICAgLy8gaW5qZWN0IGNvbXBvbmVudCBzdHlsZXNcbiAgICAgIGlmIChpbmplY3RTdHlsZXMpIHtcbiAgICAgICAgaW5qZWN0U3R5bGVzLmNhbGwodGhpcywgY29udGV4dClcbiAgICAgIH1cbiAgICAgIC8vIHJlZ2lzdGVyIGNvbXBvbmVudCBtb2R1bGUgaWRlbnRpZmllciBmb3IgYXN5bmMgY2h1bmsgaW5mZXJyZW5jZVxuICAgICAgaWYgKGNvbnRleHQgJiYgY29udGV4dC5fcmVnaXN0ZXJlZENvbXBvbmVudHMpIHtcbiAgICAgICAgY29udGV4dC5fcmVnaXN0ZXJlZENvbXBvbmVudHMuYWRkKG1vZHVsZUlkZW50aWZpZXIpXG4gICAgICB9XG4gICAgfVxuICAgIC8vIHVzZWQgYnkgc3NyIGluIGNhc2UgY29tcG9uZW50IGlzIGNhY2hlZCBhbmQgYmVmb3JlQ3JlYXRlXG4gICAgLy8gbmV2ZXIgZ2V0cyBjYWxsZWRcbiAgICBvcHRpb25zLl9zc3JSZWdpc3RlciA9IGhvb2tcbiAgfSBlbHNlIGlmIChpbmplY3RTdHlsZXMpIHtcbiAgICBob29rID0gc2hhZG93TW9kZVxuICAgICAgPyBmdW5jdGlvbiAoKSB7IGluamVjdFN0eWxlcy5jYWxsKHRoaXMsIHRoaXMuJHJvb3QuJG9wdGlvbnMuc2hhZG93Um9vdCkgfVxuICAgICAgOiBpbmplY3RTdHlsZXNcbiAgfVxuXG4gIGlmIChob29rKSB7XG4gICAgaWYgKG9wdGlvbnMuZnVuY3Rpb25hbCkge1xuICAgICAgLy8gZm9yIHRlbXBsYXRlLW9ubHkgaG90LXJlbG9hZCBiZWNhdXNlIGluIHRoYXQgY2FzZSB0aGUgcmVuZGVyIGZuIGRvZXNuJ3RcbiAgICAgIC8vIGdvIHRocm91Z2ggdGhlIG5vcm1hbGl6ZXJcbiAgICAgIG9wdGlvbnMuX2luamVjdFN0eWxlcyA9IGhvb2tcbiAgICAgIC8vIHJlZ2lzdGVyIGZvciBmdW5jdGlvYWwgY29tcG9uZW50IGluIHZ1ZSBmaWxlXG4gICAgICB2YXIgb3JpZ2luYWxSZW5kZXIgPSBvcHRpb25zLnJlbmRlclxuICAgICAgb3B0aW9ucy5yZW5kZXIgPSBmdW5jdGlvbiByZW5kZXJXaXRoU3R5bGVJbmplY3Rpb24gKGgsIGNvbnRleHQpIHtcbiAgICAgICAgaG9vay5jYWxsKGNvbnRleHQpXG4gICAgICAgIHJldHVybiBvcmlnaW5hbFJlbmRlcihoLCBjb250ZXh0KVxuICAgICAgfVxuICAgIH0gZWxzZSB7XG4gICAgICAvLyBpbmplY3QgY29tcG9uZW50IHJlZ2lzdHJhdGlvbiBhcyBiZWZvcmVDcmVhdGUgaG9va1xuICAgICAgdmFyIGV4aXN0aW5nID0gb3B0aW9ucy5iZWZvcmVDcmVhdGVcbiAgICAgIG9wdGlvbnMuYmVmb3JlQ3JlYXRlID0gZXhpc3RpbmdcbiAgICAgICAgPyBbXS5jb25jYXQoZXhpc3RpbmcsIGhvb2spXG4gICAgICAgIDogW2hvb2tdXG4gICAgfVxuICB9XG5cbiAgcmV0dXJuIHtcbiAgICBleHBvcnRzOiBzY3JpcHRFeHBvcnRzLFxuICAgIG9wdGlvbnM6IG9wdGlvbnNcbiAgfVxufVxuIiwiZXhwb3J0IGRlZmF1bHQge1xuXHRzeXN0ZW1JbmZvKCkge1xuXHRcdHRyeXtcblx0XHRcdGNvbnN0IHN5c3RlbWluZm8gPSB1bmkuZ2V0U3lzdGVtSW5mb1N5bmMoKTtcblx0XHRcdHJldHVybiB7XG5cdFx0XHRcdHdpbmRvd1dpZHRoOiBzeXN0ZW1pbmZvLndpbmRvd1dpZHRoLFxuXHRcdFx0XHR3aW5kb3dIZWlnaHQ6IHN5c3RlbWluZm8ud2luZG93SGVpZ2h0LFxuXHRcdFx0XHRwaXhlZFJhdGlvOiBzeXN0ZW1pbmZvLnBpeGVsUmF0aW9cblx0XHRcdH1cblx0XHR9Y2F0Y2goZSl7XG5cdFx0XHRyZXR1cm4ge307XG5cdFx0fVxuXHR9LFxuXHRcblx0dG9hc3QodGV4dCkge1xuXHRcdHJldHVybiB1bmkuc2hvd1RvYXN0KHtcblx0XHRcdHRpdGxlOiB0ZXh0LFxuXHRcdFx0aWNvbjogJ25vbmUnXG5cdFx0fSk7XG5cdH1cbn0iXSwic291cmNlUm9vdCI6IiJ9