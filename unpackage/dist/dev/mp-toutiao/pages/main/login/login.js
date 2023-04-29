(global["webpackJsonp"] = global["webpackJsonp"] || []).push([["pages/main/login/login"],{

/***/ 210:
/*!********************************************************************************************!*\
  !*** D:/gitgpt更新代码不修改/chatgpt_wechat_font/main.js?{"page":"pages%2Fmain%2Flogin%2Flogin"} ***!
  \********************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/* WEBPACK VAR INJECTION */(function(wx, createPage) {__webpack_require__(/*! uni-pages */ 5);
var _vue = _interopRequireDefault(__webpack_require__(/*! vue */ 3));
var _login = _interopRequireDefault(__webpack_require__(/*! ./pages/main/login/login.vue */ 211));function _interopRequireDefault(obj) {return obj && obj.__esModule ? obj : { default: obj };}wx.__webpack_require_UNI_MP_PLUGIN__ = __webpack_require__;
createPage(_login.default);
/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./node_modules/@dcloudio/uni-mp-toutiao/dist/index.js */ 1)["default"], __webpack_require__(/*! ./node_modules/@dcloudio/uni-mp-toutiao/dist/index.js */ 1)["createPage"]))

/***/ }),

/***/ 211:
/*!***********************************************************************!*\
  !*** D:/gitgpt更新代码不修改/chatgpt_wechat_font/pages/main/login/login.vue ***!
  \***********************************************************************/
/*! no static exports found */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _login_vue_vue_type_template_id_3d10f834_scoped_true___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./login.vue?vue&type=template&id=3d10f834&scoped=true& */ 212);
/* harmony import */ var _login_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./login.vue?vue&type=script&lang=js& */ 214);
/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _login_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__) if(__WEBPACK_IMPORT_KEY__ !== 'default') (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _login_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__[key]; }) }(__WEBPACK_IMPORT_KEY__));
/* harmony import */ var _login_vue_vue_type_style_index_0_id_3d10f834_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./login.vue?vue&type=style&index=0&id=3d10f834&scoped=true&lang=css& */ 216);
/* harmony import */ var _hubuder_HBuilder_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../../../hubuder/HBuilder/HBuilderX/plugins/uniapp-cli/node_modules/@dcloudio/vue-cli-plugin-uni/packages/vue-loader/lib/runtime/componentNormalizer.js */ 14);

var renderjs





/* normalize component */

var component = Object(_hubuder_HBuilder_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_3__["default"])(
  _login_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__["default"],
  _login_vue_vue_type_template_id_3d10f834_scoped_true___WEBPACK_IMPORTED_MODULE_0__["render"],
  _login_vue_vue_type_template_id_3d10f834_scoped_true___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"],
  false,
  null,
  "3d10f834",
  null,
  false,
  _login_vue_vue_type_template_id_3d10f834_scoped_true___WEBPACK_IMPORTED_MODULE_0__["components"],
  renderjs
)

component.options.__file = "pages/main/login/login.vue"
/* harmony default export */ __webpack_exports__["default"] = (component.exports);

/***/ }),

/***/ 212:
/*!******************************************************************************************************************!*\
  !*** D:/gitgpt更新代码不修改/chatgpt_wechat_font/pages/main/login/login.vue?vue&type=template&id=3d10f834&scoped=true& ***!
  \******************************************************************************************************************/
/*! exports provided: render, staticRenderFns, recyclableRender, components */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _hubuder_HBuilder_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_hubuder_HBuilder_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_16_0_hubuder_HBuilder_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_template_js_hubuder_HBuilder_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_uni_app_loader_page_meta_js_hubuder_HBuilder_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_hubuder_HBuilder_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_style_js_login_vue_vue_type_template_id_3d10f834_scoped_true___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../hubuder/HBuilder/HBuilderX/plugins/uniapp-cli/node_modules/@dcloudio/vue-cli-plugin-uni/packages/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../../../hubuder/HBuilder/HBuilderX/plugins/uniapp-cli/node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-preprocess-loader??ref--16-0!../../../../../hubuder/HBuilder/HBuilderX/plugins/uniapp-cli/node_modules/@dcloudio/webpack-uni-mp-loader/lib/template.js!../../../../../hubuder/HBuilder/HBuilderX/plugins/uniapp-cli/node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-uni-app-loader/page-meta.js!../../../../../hubuder/HBuilder/HBuilderX/plugins/uniapp-cli/node_modules/@dcloudio/vue-cli-plugin-uni/packages/vue-loader/lib??vue-loader-options!../../../../../hubuder/HBuilder/HBuilderX/plugins/uniapp-cli/node_modules/@dcloudio/webpack-uni-mp-loader/lib/style.js!./login.vue?vue&type=template&id=3d10f834&scoped=true& */ 213);
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "render", function() { return _hubuder_HBuilder_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_hubuder_HBuilder_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_16_0_hubuder_HBuilder_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_template_js_hubuder_HBuilder_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_uni_app_loader_page_meta_js_hubuder_HBuilder_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_hubuder_HBuilder_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_style_js_login_vue_vue_type_template_id_3d10f834_scoped_true___WEBPACK_IMPORTED_MODULE_0__["render"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return _hubuder_HBuilder_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_hubuder_HBuilder_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_16_0_hubuder_HBuilder_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_template_js_hubuder_HBuilder_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_uni_app_loader_page_meta_js_hubuder_HBuilder_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_hubuder_HBuilder_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_style_js_login_vue_vue_type_template_id_3d10f834_scoped_true___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "recyclableRender", function() { return _hubuder_HBuilder_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_hubuder_HBuilder_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_16_0_hubuder_HBuilder_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_template_js_hubuder_HBuilder_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_uni_app_loader_page_meta_js_hubuder_HBuilder_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_hubuder_HBuilder_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_style_js_login_vue_vue_type_template_id_3d10f834_scoped_true___WEBPACK_IMPORTED_MODULE_0__["recyclableRender"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "components", function() { return _hubuder_HBuilder_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_hubuder_HBuilder_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_16_0_hubuder_HBuilder_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_template_js_hubuder_HBuilder_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_uni_app_loader_page_meta_js_hubuder_HBuilder_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_hubuder_HBuilder_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_style_js_login_vue_vue_type_template_id_3d10f834_scoped_true___WEBPACK_IMPORTED_MODULE_0__["components"]; });



/***/ }),

/***/ 213:
/*!******************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/@dcloudio/vue-cli-plugin-uni/packages/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-preprocess-loader??ref--16-0!./node_modules/@dcloudio/webpack-uni-mp-loader/lib/template.js!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-uni-app-loader/page-meta.js!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/vue-loader/lib??vue-loader-options!./node_modules/@dcloudio/webpack-uni-mp-loader/lib/style.js!D:/gitgpt更新代码不修改/chatgpt_wechat_font/pages/main/login/login.vue?vue&type=template&id=3d10f834&scoped=true& ***!
  \******************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
/*! exports provided: render, staticRenderFns, recyclableRender, components */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "render", function() { return render; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return staticRenderFns; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "recyclableRender", function() { return recyclableRender; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "components", function() { return components; });
var components
try {
  components = {
    "u-Image": function() {
      return Promise.all(/*! import() | node-modules/uview-ui/components/u--image/u--image */[__webpack_require__.e("common/vendor"), __webpack_require__.e("node-modules/uview-ui/components/u--image/u--image")]).then(__webpack_require__.bind(null, /*! uview-ui/components/u--image/u--image.vue */ 250))
    },
    uIcon: function() {
      return Promise.all(/*! import() | node-modules/uview-ui/components/u-icon/u-icon */[__webpack_require__.e("common/vendor"), __webpack_require__.e("node-modules/uview-ui/components/u-icon/u-icon")]).then(__webpack_require__.bind(null, /*! uview-ui/components/u-icon/u-icon.vue */ 256))
    }
  }
} catch (e) {
  if (
    e.message.indexOf("Cannot find module") !== -1 &&
    e.message.indexOf(".vue") !== -1
  ) {
    console.error(e.message)
    console.error("1. 排查组件名称拼写是否正确")
    console.error(
      "2. 排查组件是否符合 easycom 规范，文档：https://uniapp.dcloud.net.cn/collocation/pages?id=easycom"
    )
    console.error(
      "3. 若组件不符合 easycom 规范，需手动引入，并在 components 中注册该组件"
    )
  } else {
    throw e
  }
}
var render = function() {
  var _vm = this
  var _h = _vm.$createElement
  var _c = _vm._self._c || _h
  var s0 = _vm.__get_style([
    _vm.statusBarHeight < 40
      ? {
          marginTop: 2.5 * _vm.statusBarHeight + "rpx"
        }
      : {
          marginTop: 2.3 * _vm.statusBarHeight + "rpx"
        }
  ])

  _vm.$mp.data = Object.assign(
    {},
    {
      $root: {
        s0: s0
      }
    }
  )
}
var recyclableRender = false
var staticRenderFns = []
render._withStripped = true



/***/ }),

/***/ 214:
/*!************************************************************************************************!*\
  !*** D:/gitgpt更新代码不修改/chatgpt_wechat_font/pages/main/login/login.vue?vue&type=script&lang=js& ***!
  \************************************************************************************************/
/*! no static exports found */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _hubuder_HBuilder_HBuilderX_plugins_uniapp_cli_node_modules_babel_loader_lib_index_js_hubuder_HBuilder_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_12_1_hubuder_HBuilder_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_script_js_hubuder_HBuilder_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_hubuder_HBuilder_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_style_js_login_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../hubuder/HBuilder/HBuilderX/plugins/uniapp-cli/node_modules/babel-loader/lib!../../../../../hubuder/HBuilder/HBuilderX/plugins/uniapp-cli/node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-preprocess-loader??ref--12-1!../../../../../hubuder/HBuilder/HBuilderX/plugins/uniapp-cli/node_modules/@dcloudio/webpack-uni-mp-loader/lib/script.js!../../../../../hubuder/HBuilder/HBuilderX/plugins/uniapp-cli/node_modules/@dcloudio/vue-cli-plugin-uni/packages/vue-loader/lib??vue-loader-options!../../../../../hubuder/HBuilder/HBuilderX/plugins/uniapp-cli/node_modules/@dcloudio/webpack-uni-mp-loader/lib/style.js!./login.vue?vue&type=script&lang=js& */ 215);
/* harmony import */ var _hubuder_HBuilder_HBuilderX_plugins_uniapp_cli_node_modules_babel_loader_lib_index_js_hubuder_HBuilder_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_12_1_hubuder_HBuilder_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_script_js_hubuder_HBuilder_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_hubuder_HBuilder_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_style_js_login_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_hubuder_HBuilder_HBuilderX_plugins_uniapp_cli_node_modules_babel_loader_lib_index_js_hubuder_HBuilder_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_12_1_hubuder_HBuilder_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_script_js_hubuder_HBuilder_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_hubuder_HBuilder_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_style_js_login_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__);
/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _hubuder_HBuilder_HBuilderX_plugins_uniapp_cli_node_modules_babel_loader_lib_index_js_hubuder_HBuilder_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_12_1_hubuder_HBuilder_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_script_js_hubuder_HBuilder_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_hubuder_HBuilder_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_style_js_login_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__) if(__WEBPACK_IMPORT_KEY__ !== 'default') (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _hubuder_HBuilder_HBuilderX_plugins_uniapp_cli_node_modules_babel_loader_lib_index_js_hubuder_HBuilder_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_12_1_hubuder_HBuilder_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_script_js_hubuder_HBuilder_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_hubuder_HBuilder_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_style_js_login_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__[key]; }) }(__WEBPACK_IMPORT_KEY__));
 /* harmony default export */ __webpack_exports__["default"] = (_hubuder_HBuilder_HBuilderX_plugins_uniapp_cli_node_modules_babel_loader_lib_index_js_hubuder_HBuilder_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_12_1_hubuder_HBuilder_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_script_js_hubuder_HBuilder_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_hubuder_HBuilder_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_style_js_login_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0___default.a); 

/***/ }),

/***/ 215:
/*!*******************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-preprocess-loader??ref--12-1!./node_modules/@dcloudio/webpack-uni-mp-loader/lib/script.js!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/vue-loader/lib??vue-loader-options!./node_modules/@dcloudio/webpack-uni-mp-loader/lib/style.js!D:/gitgpt更新代码不修改/chatgpt_wechat_font/pages/main/login/login.vue?vue&type=script&lang=js& ***!
  \*******************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/* WEBPACK VAR INJECTION */(function(uni) {Object.defineProperty(exports, "__esModule", { value: true });exports.default = void 0;










































var _request = _interopRequireDefault(__webpack_require__(/*! ../../../request/request.js */ 10));
var _util = _interopRequireDefault(__webpack_require__(/*! ../../../util/util.js */ 9));function _interopRequireDefault(obj) {return obj && obj.__esModule ? obj : { default: obj };} //
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
var _default = { data: function data() {return { avatarUrl: _util.default.defaultAvatar(), nickname: '', statusBarHeight: 0, logoImg: 'https://yuan-ai.oss-cn-beijing.aliyuncs.com/logo.png', weChatInfo: { weichat_name: '', weichat_notice: '' }, show: false, isSelectImage: false, title: '', desc: '', loadTitle: true, isagreeU: false };}, onLoad: function onLoad() {uni.navigateTo({ url: './login_h5' });this.isLogin();this.getCacheContent();this.getStatusBarHeight();}, methods: { getCacheContent: function getCacheContent() {var _this = this;(0, _request.default)('', '/yuan/ai/w/stream/configInfo', 'POST', {}, {}).then(function (res) {if (res.code == 200) {_this.weChatInfo = res.data;uni.setStorageSync('baseConfig', res.data);}});}, toUserCenter: function toUserCenter() {uni.switchTab({ url: '/pages/main/minefragment/minefragment' });
    },
    isLogin: function isLogin() {
      if (_util.default.isNotBlank(uni.getStorageSync('authorization'))) {
        this.toUserCenter();
      }
    },
    /**
        * 返回上一页
        */
    back: function back() {
      uni.navigateBack({
        delta: 1 });

    },
    backIndex: function backIndex() {
      uni.switchTab({
        url: '/pages/main/index/index' });

    },
    jumpPage: function jumpPage(e) {
      uni.navigateTo({
        url: e });

    },
    open: function open() {
      // console.log('open');
    },
    isAgree: function isAgree() {
      if (this.isagreeU) {
        this.isagreeU = false;
      } else {
        this.isagreeU = true;
      }
    },
    close: function close() {
      this.show = false;
      // console.log('close');
    },
    getStatusBarHeight: function getStatusBarHeight() {
      this.statusBarHeight = uni.getSystemInfoSync().statusBarHeight;
    },
    onChooseAvatar: function onChooseAvatar(e) {
      this.avatarUrl = e.detail.avatarUrl;
      this.isSelectImage = true;
    },
    //登录用户,获取用户的信息
    loginRequest: function loginRequest() {

      if (!this.isagreeU) {
        _util.default.message("请先阅读《使用协议》与《用户协议》");
        return;
      }

















    },
    loginJwt: function loginJwt(jsCode) {var _this2 = this;
      var param = {
        'jsCode': jsCode,
        'inviteCode': uni.getStorageSync('invitationCode') };

      (0, _request.default)('', '/authorization/wx/registerOrLogin', 'POST', param, {}).then(function (res) {
        if (res.code == 200) {
          uni.setStorageSync('authorization', res.data.token);
          uni.setStorageSync('userInfo', res.data.userInfo);
          _this2.toUserCenter();
        } else {
          _util.default.message("登录失败,请重试", 'error');
        }
        uni.hideLoading();
      });
    } } };exports.default = _default;
/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./node_modules/@dcloudio/uni-mp-toutiao/dist/index.js */ 1)["default"]))

/***/ }),

/***/ 216:
/*!********************************************************************************************************************************!*\
  !*** D:/gitgpt更新代码不修改/chatgpt_wechat_font/pages/main/login/login.vue?vue&type=style&index=0&id=3d10f834&scoped=true&lang=css& ***!
  \********************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _hubuder_HBuilder_HBuilderX_plugins_uniapp_cli_node_modules_mini_css_extract_plugin_dist_loader_js_ref_6_oneOf_1_0_hubuder_HBuilder_HBuilderX_plugins_uniapp_cli_node_modules_css_loader_dist_cjs_js_ref_6_oneOf_1_1_hubuder_HBuilder_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_loaders_stylePostLoader_js_hubuder_HBuilder_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_6_oneOf_1_2_hubuder_HBuilder_HBuilderX_plugins_uniapp_cli_node_modules_postcss_loader_src_index_js_ref_6_oneOf_1_3_hubuder_HBuilder_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_hubuder_HBuilder_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_style_js_login_vue_vue_type_style_index_0_id_3d10f834_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../hubuder/HBuilder/HBuilderX/plugins/uniapp-cli/node_modules/mini-css-extract-plugin/dist/loader.js??ref--6-oneOf-1-0!../../../../../hubuder/HBuilder/HBuilderX/plugins/uniapp-cli/node_modules/css-loader/dist/cjs.js??ref--6-oneOf-1-1!../../../../../hubuder/HBuilder/HBuilderX/plugins/uniapp-cli/node_modules/@dcloudio/vue-cli-plugin-uni/packages/vue-loader/lib/loaders/stylePostLoader.js!../../../../../hubuder/HBuilder/HBuilderX/plugins/uniapp-cli/node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-preprocess-loader??ref--6-oneOf-1-2!../../../../../hubuder/HBuilder/HBuilderX/plugins/uniapp-cli/node_modules/postcss-loader/src??ref--6-oneOf-1-3!../../../../../hubuder/HBuilder/HBuilderX/plugins/uniapp-cli/node_modules/@dcloudio/vue-cli-plugin-uni/packages/vue-loader/lib??vue-loader-options!../../../../../hubuder/HBuilder/HBuilderX/plugins/uniapp-cli/node_modules/@dcloudio/webpack-uni-mp-loader/lib/style.js!./login.vue?vue&type=style&index=0&id=3d10f834&scoped=true&lang=css& */ 217);
/* harmony import */ var _hubuder_HBuilder_HBuilderX_plugins_uniapp_cli_node_modules_mini_css_extract_plugin_dist_loader_js_ref_6_oneOf_1_0_hubuder_HBuilder_HBuilderX_plugins_uniapp_cli_node_modules_css_loader_dist_cjs_js_ref_6_oneOf_1_1_hubuder_HBuilder_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_loaders_stylePostLoader_js_hubuder_HBuilder_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_6_oneOf_1_2_hubuder_HBuilder_HBuilderX_plugins_uniapp_cli_node_modules_postcss_loader_src_index_js_ref_6_oneOf_1_3_hubuder_HBuilder_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_hubuder_HBuilder_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_style_js_login_vue_vue_type_style_index_0_id_3d10f834_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_hubuder_HBuilder_HBuilderX_plugins_uniapp_cli_node_modules_mini_css_extract_plugin_dist_loader_js_ref_6_oneOf_1_0_hubuder_HBuilder_HBuilderX_plugins_uniapp_cli_node_modules_css_loader_dist_cjs_js_ref_6_oneOf_1_1_hubuder_HBuilder_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_loaders_stylePostLoader_js_hubuder_HBuilder_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_6_oneOf_1_2_hubuder_HBuilder_HBuilderX_plugins_uniapp_cli_node_modules_postcss_loader_src_index_js_ref_6_oneOf_1_3_hubuder_HBuilder_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_hubuder_HBuilder_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_style_js_login_vue_vue_type_style_index_0_id_3d10f834_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0__);
/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _hubuder_HBuilder_HBuilderX_plugins_uniapp_cli_node_modules_mini_css_extract_plugin_dist_loader_js_ref_6_oneOf_1_0_hubuder_HBuilder_HBuilderX_plugins_uniapp_cli_node_modules_css_loader_dist_cjs_js_ref_6_oneOf_1_1_hubuder_HBuilder_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_loaders_stylePostLoader_js_hubuder_HBuilder_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_6_oneOf_1_2_hubuder_HBuilder_HBuilderX_plugins_uniapp_cli_node_modules_postcss_loader_src_index_js_ref_6_oneOf_1_3_hubuder_HBuilder_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_hubuder_HBuilder_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_style_js_login_vue_vue_type_style_index_0_id_3d10f834_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0__) if(__WEBPACK_IMPORT_KEY__ !== 'default') (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _hubuder_HBuilder_HBuilderX_plugins_uniapp_cli_node_modules_mini_css_extract_plugin_dist_loader_js_ref_6_oneOf_1_0_hubuder_HBuilder_HBuilderX_plugins_uniapp_cli_node_modules_css_loader_dist_cjs_js_ref_6_oneOf_1_1_hubuder_HBuilder_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_loaders_stylePostLoader_js_hubuder_HBuilder_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_6_oneOf_1_2_hubuder_HBuilder_HBuilderX_plugins_uniapp_cli_node_modules_postcss_loader_src_index_js_ref_6_oneOf_1_3_hubuder_HBuilder_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_hubuder_HBuilder_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_style_js_login_vue_vue_type_style_index_0_id_3d10f834_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0__[key]; }) }(__WEBPACK_IMPORT_KEY__));
 /* harmony default export */ __webpack_exports__["default"] = (_hubuder_HBuilder_HBuilderX_plugins_uniapp_cli_node_modules_mini_css_extract_plugin_dist_loader_js_ref_6_oneOf_1_0_hubuder_HBuilder_HBuilderX_plugins_uniapp_cli_node_modules_css_loader_dist_cjs_js_ref_6_oneOf_1_1_hubuder_HBuilder_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_loaders_stylePostLoader_js_hubuder_HBuilder_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_6_oneOf_1_2_hubuder_HBuilder_HBuilderX_plugins_uniapp_cli_node_modules_postcss_loader_src_index_js_ref_6_oneOf_1_3_hubuder_HBuilder_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_hubuder_HBuilder_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_style_js_login_vue_vue_type_style_index_0_id_3d10f834_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0___default.a); 

/***/ }),

/***/ 217:
/*!************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/mini-css-extract-plugin/dist/loader.js??ref--6-oneOf-1-0!./node_modules/css-loader/dist/cjs.js??ref--6-oneOf-1-1!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-preprocess-loader??ref--6-oneOf-1-2!./node_modules/postcss-loader/src??ref--6-oneOf-1-3!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/vue-loader/lib??vue-loader-options!./node_modules/@dcloudio/webpack-uni-mp-loader/lib/style.js!D:/gitgpt更新代码不修改/chatgpt_wechat_font/pages/main/login/login.vue?vue&type=style&index=0&id=3d10f834&scoped=true&lang=css& ***!
  \************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

// extracted by mini-css-extract-plugin
    if(false) { var cssReload; }
  

/***/ })

},[[210,"common/runtime","common/vendor"]]]);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInVuaS1hcHA6Ly8vbWFpbi5qcyIsIndlYnBhY2s6Ly8vRDovZ2l0Z3B05pu05paw5Luj56CB5LiN5L+u5pS5L2NoYXRncHRfd2VjaGF0X2ZvbnQvcGFnZXMvbWFpbi9sb2dpbi9sb2dpbi52dWU/MTZjZSIsIndlYnBhY2s6Ly8vRDovZ2l0Z3B05pu05paw5Luj56CB5LiN5L+u5pS5L2NoYXRncHRfd2VjaGF0X2ZvbnQvcGFnZXMvbWFpbi9sb2dpbi9sb2dpbi52dWU/NjRlOSIsIndlYnBhY2s6Ly8vRDovZ2l0Z3B05pu05paw5Luj56CB5LiN5L+u5pS5L2NoYXRncHRfd2VjaGF0X2ZvbnQvcGFnZXMvbWFpbi9sb2dpbi9sb2dpbi52dWU/N2FmZSIsIndlYnBhY2s6Ly8vRDovZ2l0Z3B05pu05paw5Luj56CB5LiN5L+u5pS5L2NoYXRncHRfd2VjaGF0X2ZvbnQvcGFnZXMvbWFpbi9sb2dpbi9sb2dpbi52dWU/OGRmNCIsInVuaS1hcHA6Ly8vcGFnZXMvbWFpbi9sb2dpbi9sb2dpbi52dWUiLCJ3ZWJwYWNrOi8vL0Q6L2dpdGdwdOabtOaWsOS7o+eggeS4jeS/ruaUuS9jaGF0Z3B0X3dlY2hhdF9mb250L3BhZ2VzL21haW4vbG9naW4vbG9naW4udnVlP2QxMDQiLCJ3ZWJwYWNrOi8vL0Q6L2dpdGdwdOabtOaWsOS7o+eggeS4jeS/ruaUuS9jaGF0Z3B0X3dlY2hhdF9mb250L3BhZ2VzL21haW4vbG9naW4vbG9naW4udnVlP2JhMmMiXSwibmFtZXMiOlsid3giLCJfX3dlYnBhY2tfcmVxdWlyZV9VTklfTVBfUExVR0lOX18iLCJfX3dlYnBhY2tfcmVxdWlyZV9fIiwiY3JlYXRlUGFnZSIsIlBhZ2UiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7c0RBQUE7QUFDQTtBQUNBLGtHLDZGQUZtQkEsRUFBRSxDQUFDQyxpQ0FBSCxHQUF1Q0MsbUJBQXZDO0FBR25CQyxVQUFVLENBQUNDLGNBQUQsQ0FBVixDOzs7Ozs7Ozs7Ozs7O0FDSEE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQThIO0FBQzlIO0FBQ3lEO0FBQ0w7QUFDcUM7OztBQUd6RjtBQUN1TDtBQUN2TCxnQkFBZ0IsOExBQVU7QUFDMUIsRUFBRSwyRUFBTTtBQUNSLEVBQUUsNEZBQU07QUFDUixFQUFFLHFHQUFlO0FBQ2pCO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxFQUFFLGdHQUFVO0FBQ1o7QUFDQTs7QUFFQTtBQUNlLGdGOzs7Ozs7Ozs7Ozs7QUN2QmY7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7Ozs7Ozs7Ozs7Ozs7QUNBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQSxhQUFhLGlTQUVOO0FBQ1AsS0FBSztBQUNMO0FBQ0EsYUFBYSxxUkFFTjtBQUNQO0FBQ0E7QUFDQSxDQUFDO0FBQ0Q7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsR0FBRztBQUNIO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0EsTUFBTTtBQUNOO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOzs7Ozs7Ozs7Ozs7OztBQ3hEQTtBQUFBO0FBQUE7QUFBQTtBQUFzc0IsQ0FBZ0Isb3NCQUFHLEVBQUMsQzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQzJDMXRCO0FBQ0Esd0Y7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztlQUNBLEVBQ0EsSUFEQSxrQkFDQSxDQUNBLFNBQ0Esd0NBREEsRUFFQSxZQUZBLEVBR0Esa0JBSEEsRUFJQSwrREFKQSxFQUtBLGNBQ0EsZ0JBREEsRUFFQSxrQkFGQSxFQUxBLEVBU0EsV0FUQSxFQVVBLG9CQVZBLEVBV0EsU0FYQSxFQVlBLFFBWkEsRUFhQSxlQWJBLEVBY0EsZUFkQSxHQWdCQSxDQWxCQSxFQW1CQSxNQW5CQSxvQkFtQkEsQ0FFQSxpQkFDQSxpQkFEQSxJQUlBLGVBQ0EsdUJBQ0EsMEJBQ0EsQ0E1QkEsRUE2QkEsV0FDQSxlQURBLDZCQUNBLGtCQUNBLCtGQUNBLHNCQUNBLDRCQUNBLDJDQUNBLENBQ0EsQ0FMQSxFQU1BLENBUkEsRUFTQSxZQVRBLDBCQVNBLENBQ0EsZ0JBQ0EsNENBREE7QUFHQSxLQWJBO0FBY0EsV0FkQSxxQkFjQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEtBbEJBO0FBbUJBOzs7QUFHQSxRQXRCQSxrQkFzQkE7QUFDQTtBQUNBLGdCQURBOztBQUdBLEtBMUJBO0FBMkJBLGFBM0JBLHVCQTJCQTtBQUNBO0FBQ0Esc0NBREE7O0FBR0EsS0EvQkE7QUFnQ0EsWUFoQ0Esb0JBZ0NBLENBaENBLEVBZ0NBO0FBQ0E7QUFDQSxjQURBOztBQUdBLEtBcENBO0FBcUNBLFFBckNBLGtCQXFDQTtBQUNBO0FBQ0EsS0F2Q0E7QUF3Q0EsV0F4Q0EscUJBd0NBO0FBQ0E7QUFDQTtBQUNBLE9BRkEsTUFFQTtBQUNBO0FBQ0E7QUFDQSxLQTlDQTtBQStDQSxTQS9DQSxtQkErQ0E7QUFDQTtBQUNBO0FBQ0EsS0FsREE7QUFtREEsc0JBbkRBLGdDQW1EQTtBQUNBO0FBQ0EsS0FyREE7QUFzREEsa0JBdERBLDBCQXNEQSxDQXREQSxFQXNEQTtBQUNBO0FBQ0E7QUFDQSxLQXpEQTtBQTBEQTtBQUNBLGdCQTNEQSwwQkEyREE7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQWtCQSxLQWxGQTtBQW1GQSxZQW5GQSxvQkFtRkEsTUFuRkEsRUFtRkE7QUFDQTtBQUNBLHdCQURBO0FBRUEsMERBRkE7O0FBSUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFNBSkEsTUFJQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLE9BVEE7QUFVQSxLQWxHQSxFQTdCQSxFOzs7Ozs7Ozs7Ozs7O0FDN0NBO0FBQUE7QUFBQTtBQUFBO0FBQXloQyxDQUFnQixtL0JBQUcsRUFBQyxDOzs7Ozs7Ozs7OztBQ0E3aUM7QUFDQSxPQUFPLEtBQVUsRUFBRSxrQkFLZCIsImZpbGUiOiJwYWdlcy9tYWluL2xvZ2luL2xvZ2luLmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0ICd1bmktcGFnZXMnO3d4Ll9fd2VicGFja19yZXF1aXJlX1VOSV9NUF9QTFVHSU5fXyA9IF9fd2VicGFja19yZXF1aXJlX187XG5pbXBvcnQgVnVlIGZyb20gJ3Z1ZSdcbmltcG9ydCBQYWdlIGZyb20gJy4vcGFnZXMvbWFpbi9sb2dpbi9sb2dpbi52dWUnXG5jcmVhdGVQYWdlKFBhZ2UpIiwiaW1wb3J0IHsgcmVuZGVyLCBzdGF0aWNSZW5kZXJGbnMsIHJlY3ljbGFibGVSZW5kZXIsIGNvbXBvbmVudHMgfSBmcm9tIFwiLi9sb2dpbi52dWU/dnVlJnR5cGU9dGVtcGxhdGUmaWQ9M2QxMGY4MzQmc2NvcGVkPXRydWUmXCJcbnZhciByZW5kZXJqc1xuaW1wb3J0IHNjcmlwdCBmcm9tIFwiLi9sb2dpbi52dWU/dnVlJnR5cGU9c2NyaXB0Jmxhbmc9anMmXCJcbmV4cG9ydCAqIGZyb20gXCIuL2xvZ2luLnZ1ZT92dWUmdHlwZT1zY3JpcHQmbGFuZz1qcyZcIlxuaW1wb3J0IHN0eWxlMCBmcm9tIFwiLi9sb2dpbi52dWU/dnVlJnR5cGU9c3R5bGUmaW5kZXg9MCZpZD0zZDEwZjgzNCZzY29wZWQ9dHJ1ZSZsYW5nPWNzcyZcIlxuXG5cbi8qIG5vcm1hbGl6ZSBjb21wb25lbnQgKi9cbmltcG9ydCBub3JtYWxpemVyIGZyb20gXCIhLi4vLi4vLi4vLi4vLi4vaHVidWRlci9IQnVpbGRlci9IQnVpbGRlclgvcGx1Z2lucy91bmlhcHAtY2xpL25vZGVfbW9kdWxlcy9AZGNsb3VkaW8vdnVlLWNsaS1wbHVnaW4tdW5pL3BhY2thZ2VzL3Z1ZS1sb2FkZXIvbGliL3J1bnRpbWUvY29tcG9uZW50Tm9ybWFsaXplci5qc1wiXG52YXIgY29tcG9uZW50ID0gbm9ybWFsaXplcihcbiAgc2NyaXB0LFxuICByZW5kZXIsXG4gIHN0YXRpY1JlbmRlckZucyxcbiAgZmFsc2UsXG4gIG51bGwsXG4gIFwiM2QxMGY4MzRcIixcbiAgbnVsbCxcbiAgZmFsc2UsXG4gIGNvbXBvbmVudHMsXG4gIHJlbmRlcmpzXG4pXG5cbmNvbXBvbmVudC5vcHRpb25zLl9fZmlsZSA9IFwicGFnZXMvbWFpbi9sb2dpbi9sb2dpbi52dWVcIlxuZXhwb3J0IGRlZmF1bHQgY29tcG9uZW50LmV4cG9ydHMiLCJleHBvcnQgKiBmcm9tIFwiLSEuLi8uLi8uLi8uLi8uLi9odWJ1ZGVyL0hCdWlsZGVyL0hCdWlsZGVyWC9wbHVnaW5zL3VuaWFwcC1jbGkvbm9kZV9tb2R1bGVzL0BkY2xvdWRpby92dWUtY2xpLXBsdWdpbi11bmkvcGFja2FnZXMvdnVlLWxvYWRlci9saWIvbG9hZGVycy90ZW1wbGF0ZUxvYWRlci5qcz8/dnVlLWxvYWRlci1vcHRpb25zIS4uLy4uLy4uLy4uLy4uL2h1YnVkZXIvSEJ1aWxkZXIvSEJ1aWxkZXJYL3BsdWdpbnMvdW5pYXBwLWNsaS9ub2RlX21vZHVsZXMvQGRjbG91ZGlvL3Z1ZS1jbGktcGx1Z2luLXVuaS9wYWNrYWdlcy93ZWJwYWNrLXByZXByb2Nlc3MtbG9hZGVyL2luZGV4LmpzPz9yZWYtLTE2LTAhLi4vLi4vLi4vLi4vLi4vaHVidWRlci9IQnVpbGRlci9IQnVpbGRlclgvcGx1Z2lucy91bmlhcHAtY2xpL25vZGVfbW9kdWxlcy9AZGNsb3VkaW8vd2VicGFjay11bmktbXAtbG9hZGVyL2xpYi90ZW1wbGF0ZS5qcyEuLi8uLi8uLi8uLi8uLi9odWJ1ZGVyL0hCdWlsZGVyL0hCdWlsZGVyWC9wbHVnaW5zL3VuaWFwcC1jbGkvbm9kZV9tb2R1bGVzL0BkY2xvdWRpby92dWUtY2xpLXBsdWdpbi11bmkvcGFja2FnZXMvd2VicGFjay11bmktYXBwLWxvYWRlci9wYWdlLW1ldGEuanMhLi4vLi4vLi4vLi4vLi4vaHVidWRlci9IQnVpbGRlci9IQnVpbGRlclgvcGx1Z2lucy91bmlhcHAtY2xpL25vZGVfbW9kdWxlcy9AZGNsb3VkaW8vdnVlLWNsaS1wbHVnaW4tdW5pL3BhY2thZ2VzL3Z1ZS1sb2FkZXIvbGliL2luZGV4LmpzPz92dWUtbG9hZGVyLW9wdGlvbnMhLi4vLi4vLi4vLi4vLi4vaHVidWRlci9IQnVpbGRlci9IQnVpbGRlclgvcGx1Z2lucy91bmlhcHAtY2xpL25vZGVfbW9kdWxlcy9AZGNsb3VkaW8vd2VicGFjay11bmktbXAtbG9hZGVyL2xpYi9zdHlsZS5qcyEuL2xvZ2luLnZ1ZT92dWUmdHlwZT10ZW1wbGF0ZSZpZD0zZDEwZjgzNCZzY29wZWQ9dHJ1ZSZcIiIsInZhciBjb21wb25lbnRzXG50cnkge1xuICBjb21wb25lbnRzID0ge1xuICAgIFwidS1JbWFnZVwiOiBmdW5jdGlvbigpIHtcbiAgICAgIHJldHVybiBpbXBvcnQoXG4gICAgICAgIC8qIHdlYnBhY2tDaHVua05hbWU6IFwibm9kZS1tb2R1bGVzL3V2aWV3LXVpL2NvbXBvbmVudHMvdS0taW1hZ2UvdS0taW1hZ2VcIiAqLyBcInV2aWV3LXVpL2NvbXBvbmVudHMvdS0taW1hZ2UvdS0taW1hZ2UudnVlXCJcbiAgICAgIClcbiAgICB9LFxuICAgIHVJY29uOiBmdW5jdGlvbigpIHtcbiAgICAgIHJldHVybiBpbXBvcnQoXG4gICAgICAgIC8qIHdlYnBhY2tDaHVua05hbWU6IFwibm9kZS1tb2R1bGVzL3V2aWV3LXVpL2NvbXBvbmVudHMvdS1pY29uL3UtaWNvblwiICovIFwidXZpZXctdWkvY29tcG9uZW50cy91LWljb24vdS1pY29uLnZ1ZVwiXG4gICAgICApXG4gICAgfVxuICB9XG59IGNhdGNoIChlKSB7XG4gIGlmIChcbiAgICBlLm1lc3NhZ2UuaW5kZXhPZihcIkNhbm5vdCBmaW5kIG1vZHVsZVwiKSAhPT0gLTEgJiZcbiAgICBlLm1lc3NhZ2UuaW5kZXhPZihcIi52dWVcIikgIT09IC0xXG4gICkge1xuICAgIGNvbnNvbGUuZXJyb3IoZS5tZXNzYWdlKVxuICAgIGNvbnNvbGUuZXJyb3IoXCIxLiDmjpLmn6Xnu4Tku7blkI3np7Dmi7zlhpnmmK/lkKbmraPnoa5cIilcbiAgICBjb25zb2xlLmVycm9yKFxuICAgICAgXCIyLiDmjpLmn6Xnu4Tku7bmmK/lkKbnrKblkIggZWFzeWNvbSDop4TojIPvvIzmlofmoaPvvJpodHRwczovL3VuaWFwcC5kY2xvdWQubmV0LmNuL2NvbGxvY2F0aW9uL3BhZ2VzP2lkPWVhc3ljb21cIlxuICAgIClcbiAgICBjb25zb2xlLmVycm9yKFxuICAgICAgXCIzLiDoi6Xnu4Tku7bkuI3nrKblkIggZWFzeWNvbSDop4TojIPvvIzpnIDmiYvliqjlvJXlhaXvvIzlubblnKggY29tcG9uZW50cyDkuK3ms6jlhozor6Xnu4Tku7ZcIlxuICAgIClcbiAgfSBlbHNlIHtcbiAgICB0aHJvdyBlXG4gIH1cbn1cbnZhciByZW5kZXIgPSBmdW5jdGlvbigpIHtcbiAgdmFyIF92bSA9IHRoaXNcbiAgdmFyIF9oID0gX3ZtLiRjcmVhdGVFbGVtZW50XG4gIHZhciBfYyA9IF92bS5fc2VsZi5fYyB8fCBfaFxuICB2YXIgczAgPSBfdm0uX19nZXRfc3R5bGUoW1xuICAgIF92bS5zdGF0dXNCYXJIZWlnaHQgPCA0MFxuICAgICAgPyB7XG4gICAgICAgICAgbWFyZ2luVG9wOiAyLjUgKiBfdm0uc3RhdHVzQmFySGVpZ2h0ICsgXCJycHhcIlxuICAgICAgICB9XG4gICAgICA6IHtcbiAgICAgICAgICBtYXJnaW5Ub3A6IDIuMyAqIF92bS5zdGF0dXNCYXJIZWlnaHQgKyBcInJweFwiXG4gICAgICAgIH1cbiAgXSlcblxuICBfdm0uJG1wLmRhdGEgPSBPYmplY3QuYXNzaWduKFxuICAgIHt9LFxuICAgIHtcbiAgICAgICRyb290OiB7XG4gICAgICAgIHMwOiBzMFxuICAgICAgfVxuICAgIH1cbiAgKVxufVxudmFyIHJlY3ljbGFibGVSZW5kZXIgPSBmYWxzZVxudmFyIHN0YXRpY1JlbmRlckZucyA9IFtdXG5yZW5kZXIuX3dpdGhTdHJpcHBlZCA9IHRydWVcblxuZXhwb3J0IHsgcmVuZGVyLCBzdGF0aWNSZW5kZXJGbnMsIHJlY3ljbGFibGVSZW5kZXIsIGNvbXBvbmVudHMgfSIsImltcG9ydCBtb2QgZnJvbSBcIi0hLi4vLi4vLi4vLi4vLi4vaHVidWRlci9IQnVpbGRlci9IQnVpbGRlclgvcGx1Z2lucy91bmlhcHAtY2xpL25vZGVfbW9kdWxlcy9iYWJlbC1sb2FkZXIvbGliL2luZGV4LmpzIS4uLy4uLy4uLy4uLy4uL2h1YnVkZXIvSEJ1aWxkZXIvSEJ1aWxkZXJYL3BsdWdpbnMvdW5pYXBwLWNsaS9ub2RlX21vZHVsZXMvQGRjbG91ZGlvL3Z1ZS1jbGktcGx1Z2luLXVuaS9wYWNrYWdlcy93ZWJwYWNrLXByZXByb2Nlc3MtbG9hZGVyL2luZGV4LmpzPz9yZWYtLTEyLTEhLi4vLi4vLi4vLi4vLi4vaHVidWRlci9IQnVpbGRlci9IQnVpbGRlclgvcGx1Z2lucy91bmlhcHAtY2xpL25vZGVfbW9kdWxlcy9AZGNsb3VkaW8vd2VicGFjay11bmktbXAtbG9hZGVyL2xpYi9zY3JpcHQuanMhLi4vLi4vLi4vLi4vLi4vaHVidWRlci9IQnVpbGRlci9IQnVpbGRlclgvcGx1Z2lucy91bmlhcHAtY2xpL25vZGVfbW9kdWxlcy9AZGNsb3VkaW8vdnVlLWNsaS1wbHVnaW4tdW5pL3BhY2thZ2VzL3Z1ZS1sb2FkZXIvbGliL2luZGV4LmpzPz92dWUtbG9hZGVyLW9wdGlvbnMhLi4vLi4vLi4vLi4vLi4vaHVidWRlci9IQnVpbGRlci9IQnVpbGRlclgvcGx1Z2lucy91bmlhcHAtY2xpL25vZGVfbW9kdWxlcy9AZGNsb3VkaW8vd2VicGFjay11bmktbXAtbG9hZGVyL2xpYi9zdHlsZS5qcyEuL2xvZ2luLnZ1ZT92dWUmdHlwZT1zY3JpcHQmbGFuZz1qcyZcIjsgZXhwb3J0IGRlZmF1bHQgbW9kOyBleHBvcnQgKiBmcm9tIFwiLSEuLi8uLi8uLi8uLi8uLi9odWJ1ZGVyL0hCdWlsZGVyL0hCdWlsZGVyWC9wbHVnaW5zL3VuaWFwcC1jbGkvbm9kZV9tb2R1bGVzL2JhYmVsLWxvYWRlci9saWIvaW5kZXguanMhLi4vLi4vLi4vLi4vLi4vaHVidWRlci9IQnVpbGRlci9IQnVpbGRlclgvcGx1Z2lucy91bmlhcHAtY2xpL25vZGVfbW9kdWxlcy9AZGNsb3VkaW8vdnVlLWNsaS1wbHVnaW4tdW5pL3BhY2thZ2VzL3dlYnBhY2stcHJlcHJvY2Vzcy1sb2FkZXIvaW5kZXguanM/P3JlZi0tMTItMSEuLi8uLi8uLi8uLi8uLi9odWJ1ZGVyL0hCdWlsZGVyL0hCdWlsZGVyWC9wbHVnaW5zL3VuaWFwcC1jbGkvbm9kZV9tb2R1bGVzL0BkY2xvdWRpby93ZWJwYWNrLXVuaS1tcC1sb2FkZXIvbGliL3NjcmlwdC5qcyEuLi8uLi8uLi8uLi8uLi9odWJ1ZGVyL0hCdWlsZGVyL0hCdWlsZGVyWC9wbHVnaW5zL3VuaWFwcC1jbGkvbm9kZV9tb2R1bGVzL0BkY2xvdWRpby92dWUtY2xpLXBsdWdpbi11bmkvcGFja2FnZXMvdnVlLWxvYWRlci9saWIvaW5kZXguanM/P3Z1ZS1sb2FkZXItb3B0aW9ucyEuLi8uLi8uLi8uLi8uLi9odWJ1ZGVyL0hCdWlsZGVyL0hCdWlsZGVyWC9wbHVnaW5zL3VuaWFwcC1jbGkvbm9kZV9tb2R1bGVzL0BkY2xvdWRpby93ZWJwYWNrLXVuaS1tcC1sb2FkZXIvbGliL3N0eWxlLmpzIS4vbG9naW4udnVlP3Z1ZSZ0eXBlPXNjcmlwdCZsYW5nPWpzJlwiIiwiPHRlbXBsYXRlPlxyXG5cdDx2aWV3PlxyXG5cdFx0PGltYWdlIG1vZGU9XCJhc3BlY3RGaWxsXCIgY2xhc3M9XCJ0b3BNYWluQmdcIiBzcmM9XCIuLi8uLi8uLi9zdGF0aWMvbG9naW5fdG9wX2JnLnBuZ1wiPjwvaW1hZ2U+XHJcblx0XHQ8dmlldyBjbGFzcz1cIm1haW5cIj5cclxuXHRcdFx0PHZpZXcgY2xhc3M9XCJyb3cgcG9zaXRpb25cIlxyXG5cdFx0XHRcdDpzdHlsZT1cIltzdGF0dXNCYXJIZWlnaHQ8NDA/e21hcmdpblRvcDoyLjUqc3RhdHVzQmFySGVpZ2h0KydycHgnfTp7bWFyZ2luVG9wOjIuMypzdGF0dXNCYXJIZWlnaHQrJ3JweCd9XVwiPlxyXG5cdFx0XHRcdDwhLS0gPGltYWdlIEBjbGljaz1cImJhY2tcIiBjbGFzcz1cImJhY2tJbWdcIiBtb2RlPVwiYXNwZWN0RmlsbFwiIHNyYz1cIi4uLy4uLy4uL3N0YXRpYy9iYWNrX2ljb24ucG5nXCI+PC9pbWFnZT4gLS0+XHJcblx0XHRcdFx0PHZpZXcgY2xhc3M9XCJ0aXRsZVwiPlxyXG5cdFx0XHRcdFx055m75b2VXHJcblx0XHRcdFx0PC92aWV3PlxyXG5cdFx0XHQ8L3ZpZXc+XHJcblx0XHRcdDx2aWV3IGNsYXNzPVwibG9nb0JvcmRlclwiPlxyXG5cdFx0XHRcdDx1LS1pbWFnZSByYWRpdXM9XCIyNXJweFwiIDpzcmM9XCJsb2dvSW1nXCIgd2lkdGg9XCIxNzJycHhcIiBoZWlnaHQ9XCIxNzJycHhcIj48L3UtLWltYWdlPlxyXG5cdFx0XHQ8L3ZpZXc+XHJcblxyXG5cdFx0XHQ8dmlldyBjbGFzcz1cIndlQ2hhdE5hbWVcIj5cclxuXHRcdFx0XHR7e3dlQ2hhdEluZm8ud2VpY2hhdF9uYW1lfX1cclxuXHRcdFx0PC92aWV3PlxyXG5cdFx0XHQ8dmlldyBjbGFzcz1cIndlQ2hhdERlc1wiPlxyXG5cdFx0XHRcdHt7d2VDaGF0SW5mby53ZWljaGF0X25vdGljZX19XHJcblx0XHRcdDwvdmlldz5cclxuXHJcblx0XHRcdDx2aWV3IGNsYXNzPVwiYnRuXCI+XHJcblxyXG5cdFx0XHRcdDx2aWV3IGNsYXNzPVwiY29taXRCdG5cIiBAY2xpY2s9XCJsb2dpblJlcXVlc3QoKVwiPlxyXG5cdFx0XHRcdFx05o6I5p2D55m75b2VXHJcblx0XHRcdFx0PC92aWV3PlxyXG5cdFx0XHRcdDx2aWV3IGNsYXNzPVwiY2FuY2VsQnRuXCIgQGNsaWNrPVwiYmFja0luZGV4XCI+XHJcblx0XHRcdFx0XHTkuI3lkIzmhI9cclxuXHRcdFx0XHQ8L3ZpZXc+XHJcblx0XHRcdDwvdmlldz5cclxuXHRcdFx0PHZpZXcgc3R5bGU9XCJkaXNwbGF5OiBmbGV4O21hcmdpbi10b3A6IDIwcHg7XCI+XHJcblx0XHRcdFx0PHZpZXcgY2xhc3M9XCJpY29uLWFncmVlbWVudFwiIHN0eWxlPVwibWFyZ2luLXRvcDogNHB4O2ZvbnQtc2l6ZTogMTJycHg7XCIgQGNsaWNrPVwiaXNBZ3JlZVwiPlxyXG5cdFx0XHRcdFx0PHUtaWNvbiB2LWlmPVwiaXNhZ3JlZVVcIiBuYW1lPVwiY2hlY2tib3gtbWFya1wiIGNvbG9yPVwiIzI5NzlmZlwiIHNpemU9XCIxNFwiPjwvdS1pY29uPlxyXG5cdFx0XHRcdDwvdmlldz5cclxuXHRcdFx0XHTmiJHlkIzmhI88c3BhbiBzdHlsZT1cImNvbG9yOiAjMDA3QUZGO1wiIEBjbGljaz1cImp1bXBQYWdlKCcvcGFnZXMvbWFpbi9hZ3JlZW1lbnQvdXNlUmVkZXInKVwiPuOAiuS9v+eUqOWNj+iuruOAizwvc3Bhbj7lkow8c3BhblxyXG5cdFx0XHRcdFx0c3R5bGU9XCJjb2xvcjogIzAwN0FGRjtcIiBAY2xpY2s9XCJqdW1wUGFnZSgnL3BhZ2VzL21haW4vYWdyZWVtZW50L3VzZXJSZWRlcicpXCI+44CK55So5oi35Y2P6K6u44CLPC9zcGFuPlxyXG5cdFx0XHQ8L3ZpZXc+XHJcblx0XHQ8L3ZpZXc+XHJcblx0PC92aWV3PlxyXG48L3RlbXBsYXRlPlxyXG5cclxuPHNjcmlwdD5cclxuXHRpbXBvcnQgcmVxdWVzdCBmcm9tIFwiLi4vLi4vLi4vcmVxdWVzdC9yZXF1ZXN0LmpzXCI7XHJcblx0aW1wb3J0IHV0aWwgZnJvbSBcIi4uLy4uLy4uL3V0aWwvdXRpbC5qc1wiO1xyXG5cdGV4cG9ydCBkZWZhdWx0IHtcclxuXHRcdGRhdGEoKSB7XHJcblx0XHRcdHJldHVybiB7XHJcblx0XHRcdFx0YXZhdGFyVXJsOiB1dGlsLmRlZmF1bHRBdmF0YXIoKSxcclxuXHRcdFx0XHRuaWNrbmFtZTogJycsXHJcblx0XHRcdFx0c3RhdHVzQmFySGVpZ2h0OiAwLFxyXG5cdFx0XHRcdGxvZ29JbWc6ICdodHRwczovL3l1YW4tYWkub3NzLWNuLWJlaWppbmcuYWxpeXVuY3MuY29tL2xvZ28ucG5nJyxcclxuXHRcdFx0XHR3ZUNoYXRJbmZvOiB7XHJcblx0XHRcdFx0XHR3ZWljaGF0X25hbWU6ICcnLFxyXG5cdFx0XHRcdFx0d2VpY2hhdF9ub3RpY2U6ICcnXHJcblx0XHRcdFx0fSxcclxuXHRcdFx0XHRzaG93OiBmYWxzZSxcclxuXHRcdFx0XHRpc1NlbGVjdEltYWdlOiBmYWxzZSxcclxuXHRcdFx0XHR0aXRsZTogJycsXHJcblx0XHRcdFx0ZGVzYzogJycsXHJcblx0XHRcdFx0bG9hZFRpdGxlOiB0cnVlLFxyXG5cdFx0XHRcdGlzYWdyZWVVOiBmYWxzZVxyXG5cdFx0XHR9XHJcblx0XHR9LFxyXG5cdFx0b25Mb2FkKCkge1xyXG5cdFx0XHQvLyAjaWZuZGVmIE1QLVdFSVhJTlxyXG5cdFx0XHRcdHVuaS5uYXZpZ2F0ZVRvKHtcclxuXHRcdFx0XHRcdHVybDonLi9sb2dpbl9oNSdcclxuXHRcdFx0XHR9KVxyXG5cdFx0XHQvLyAjZW5kaWZcclxuXHRcdFx0dGhpcy5pc0xvZ2luKClcclxuXHRcdFx0dGhpcy5nZXRDYWNoZUNvbnRlbnQoKVxyXG5cdFx0XHR0aGlzLmdldFN0YXR1c0JhckhlaWdodCgpXHJcblx0XHR9LFxyXG5cdFx0bWV0aG9kczoge1xyXG5cdFx0XHRnZXRDYWNoZUNvbnRlbnQoKSB7XHJcblx0XHRcdFx0cmVxdWVzdCgnJywgJy95dWFuL2FpL3cvc3RyZWFtL2NvbmZpZ0luZm8nLCAnUE9TVCcsIHt9LCB7fSkudGhlbihyZXMgPT4ge1xyXG5cdFx0XHRcdFx0aWYgKHJlcy5jb2RlID09IDIwMCkge1xyXG5cdFx0XHRcdFx0XHR0aGlzLndlQ2hhdEluZm8gPSByZXMuZGF0YTtcclxuXHRcdFx0XHRcdFx0dW5pLnNldFN0b3JhZ2VTeW5jKCdiYXNlQ29uZmlnJywgcmVzLmRhdGEpXHJcblx0XHRcdFx0XHR9XHJcblx0XHRcdFx0fSlcclxuXHRcdFx0fSxcclxuXHRcdFx0dG9Vc2VyQ2VudGVyKCkge1xyXG5cdFx0XHRcdHVuaS5zd2l0Y2hUYWIoe1xyXG5cdFx0XHRcdFx0dXJsOiAnL3BhZ2VzL21haW4vbWluZWZyYWdtZW50L21pbmVmcmFnbWVudCdcclxuXHRcdFx0XHR9KVxyXG5cdFx0XHR9LFxyXG5cdFx0XHRpc0xvZ2luKCkge1xyXG5cdFx0XHRcdGlmICh1dGlsLmlzTm90QmxhbmsodW5pLmdldFN0b3JhZ2VTeW5jKCdhdXRob3JpemF0aW9uJykpKSB7XHJcblx0XHRcdFx0XHR0aGlzLnRvVXNlckNlbnRlcigpXHJcblx0XHRcdFx0fVxyXG5cdFx0XHR9LFxyXG5cdFx0XHQvKipcclxuXHRcdFx0ICog6L+U5Zue5LiK5LiA6aG1XHJcblx0XHRcdCAqL1xyXG5cdFx0XHRiYWNrKCkge1xyXG5cdFx0XHRcdHVuaS5uYXZpZ2F0ZUJhY2soe1xyXG5cdFx0XHRcdFx0ZGVsdGE6IDFcclxuXHRcdFx0XHR9KTtcclxuXHRcdFx0fSxcclxuXHRcdFx0YmFja0luZGV4KCkge1xyXG5cdFx0XHRcdHVuaS5zd2l0Y2hUYWIoe1xyXG5cdFx0XHRcdFx0dXJsOiAnL3BhZ2VzL21haW4vaW5kZXgvaW5kZXgnXHJcblx0XHRcdFx0fSlcclxuXHRcdFx0fSxcclxuXHRcdFx0anVtcFBhZ2UoZSkge1xyXG5cdFx0XHRcdHVuaS5uYXZpZ2F0ZVRvKHtcclxuXHRcdFx0XHRcdHVybDogZVxyXG5cdFx0XHRcdH0pXHJcblx0XHRcdH0sXHJcblx0XHRcdG9wZW4oKSB7XHJcblx0XHRcdFx0Ly8gY29uc29sZS5sb2coJ29wZW4nKTtcclxuXHRcdFx0fSxcclxuXHRcdFx0aXNBZ3JlZSgpIHtcclxuXHRcdFx0XHRpZiAodGhpcy5pc2FncmVlVSkge1xyXG5cdFx0XHRcdFx0dGhpcy5pc2FncmVlVSA9IGZhbHNlXHJcblx0XHRcdFx0fSBlbHNlIHtcclxuXHRcdFx0XHRcdHRoaXMuaXNhZ3JlZVUgPSB0cnVlXHJcblx0XHRcdFx0fVxyXG5cdFx0XHR9LFxyXG5cdFx0XHRjbG9zZSgpIHtcclxuXHRcdFx0XHR0aGlzLnNob3cgPSBmYWxzZVxyXG5cdFx0XHRcdC8vIGNvbnNvbGUubG9nKCdjbG9zZScpO1xyXG5cdFx0XHR9LFxyXG5cdFx0XHRnZXRTdGF0dXNCYXJIZWlnaHQoKSB7XHJcblx0XHRcdFx0dGhpcy5zdGF0dXNCYXJIZWlnaHQgPSB1bmkuZ2V0U3lzdGVtSW5mb1N5bmMoKS5zdGF0dXNCYXJIZWlnaHRcclxuXHRcdFx0fSxcclxuXHRcdFx0b25DaG9vc2VBdmF0YXIoZSkge1xyXG5cdFx0XHRcdHRoaXMuYXZhdGFyVXJsID0gZS5kZXRhaWwuYXZhdGFyVXJsXHJcblx0XHRcdFx0dGhpcy5pc1NlbGVjdEltYWdlID0gdHJ1ZVxyXG5cdFx0XHR9LFxyXG5cdFx0XHQvL+eZu+W9leeUqOaItyzojrflj5bnlKjmiLfnmoTkv6Hmga9cclxuXHRcdFx0bG9naW5SZXF1ZXN0KCkge1xyXG5cdFx0XHRcdFxyXG5cdFx0XHRpZiAoIXRoaXMuaXNhZ3JlZVUpIHtcclxuXHRcdFx0XHR1dGlsLm1lc3NhZ2UoXCLor7flhYjpmIXor7vjgIrkvb/nlKjljY/orq7jgIvkuI7jgIrnlKjmiLfljY/orq7jgItcIik7XHJcblx0XHRcdCAgIHJldHVybjtcclxuXHRcdFx0fVxyXG5cdFx0XHQvLyAjaWZkZWYgTVAtV0VJWElOXHJcblx0XHRcdGxldCB0aGF0ID0gdGhpcztcclxuXHRcdFx0XHR1dGlsLm1lc3NhZ2UoXCLnmbvlvZXkuK1cIiwgXCJsb2FkZGluZ1wiKVxyXG5cdFx0XHRcdHVuaS5sb2dpbih7XHJcblx0XHRcdFx0XHRzdWNjZXNzKHJlcykge1xyXG5cdFx0XHRcdFx0XHRpZiAocmVzLmNvZGUpIHtcclxuXHRcdFx0XHRcdFx0XHR0aGF0LmxvZ2luSnd0KHJlcy5jb2RlKVxyXG5cdFx0XHRcdFx0XHR9IGVsc2Uge1xyXG5cdFx0XHRcdFx0XHRcdHVuaS5oaWRlTG9hZGluZygpXHJcblx0XHRcdFx0XHRcdFx0dXRpbC5tZXNzYWdlKFwi55m75b2V5aSx6LSlXCIsICdlcnJvcicpXHJcblx0XHRcdFx0XHRcdH1cclxuXHRcdFx0XHRcdH0sXHJcblx0XHRcdFx0XHRmYWlsKHJlcykge1xyXG5cdFx0XHRcdFx0XHR1bmkuaGlkZUxvYWRpbmcoKVxyXG5cdFx0XHRcdFx0fVxyXG5cdFx0XHRcdH0pXHJcblx0XHRcdC8vICNlbmRpZlxyXG5cdFx0XHR9LFxyXG5cdFx0XHRsb2dpbkp3dChqc0NvZGUpIHtcclxuXHRcdFx0XHRsZXQgcGFyYW0gPSB7XHJcblx0XHRcdFx0XHQnanNDb2RlJzoganNDb2RlLFxyXG5cdFx0XHRcdFx0J2ludml0ZUNvZGUnOiB1bmkuZ2V0U3RvcmFnZVN5bmMoJ2ludml0YXRpb25Db2RlJylcclxuXHRcdFx0XHR9XHJcblx0XHRcdFx0cmVxdWVzdCgnJywgJy9hdXRob3JpemF0aW9uL3d4L3JlZ2lzdGVyT3JMb2dpbicsICdQT1NUJywgcGFyYW0sIHt9KS50aGVuKHJlcyA9PiB7XHJcblx0XHRcdFx0XHRpZiAocmVzLmNvZGUgPT0gMjAwKSB7XHJcblx0XHRcdFx0XHRcdHVuaS5zZXRTdG9yYWdlU3luYygnYXV0aG9yaXphdGlvbicsIHJlcy5kYXRhLnRva2VuKVxyXG5cdFx0XHRcdFx0XHR1bmkuc2V0U3RvcmFnZVN5bmMoJ3VzZXJJbmZvJywgcmVzLmRhdGEudXNlckluZm8pXHJcblx0XHRcdFx0XHRcdHRoaXMudG9Vc2VyQ2VudGVyKClcclxuXHRcdFx0XHRcdH0gZWxzZSB7XHJcblx0XHRcdFx0XHRcdHV0aWwubWVzc2FnZShcIueZu+W9leWksei0pSzor7fph43or5VcIiwgJ2Vycm9yJylcclxuXHRcdFx0XHRcdH1cclxuXHRcdFx0XHRcdHVuaS5oaWRlTG9hZGluZygpXHJcblx0XHRcdFx0fSlcclxuXHRcdFx0fSxcclxuXHRcdH1cclxuXHR9XHJcbjwvc2NyaXB0PlxyXG5cclxuPHN0eWxlIHNjb3BlZD5cclxuXHRwYWdlIHtcclxuXHRcdGJhY2tncm91bmQ6ICNGRkZGRkY7XHJcblx0fVxyXG5cclxuXHJcblxyXG5cdC8qIC9kZWVwLy51LXBvcHVwX19jb250ZW50IHsgXHJcbiAgICAgICAgYmFja2dyb3VuZC1jb2xvcjogIzAwMDAwMDAwICFpbXBvcnRhbnQ7XHJcbiAgICB9ICovXHJcblx0LmhlYWQge1xyXG5cdFx0LyogYm94LXNoYWRvdzogMHJweCAwcnB4IDEycnB4IDBycHggcmdiYSgwLDAsMCwwLjE1KTsgKi9cclxuXHRcdGJvcmRlci1yYWRpdXM6IDUwJTtcclxuXHRcdC8qIHdpZHRoOiAxNTNycHg7ICovXHJcblx0XHRtYXJnaW4tdG9wOiAxNXJweDtcclxuXHRcdC8qIGhlaWdodDogMTUzcnB4OyAqL1xyXG5cdFx0cG9zaXRpb246IHJlbGF0aXZlO1xyXG5cdH1cclxuXHQucGhvdG9Cb3JkZXIge1xyXG5cdFx0ei1pbmRleDogMTA7XHJcblx0XHRwb3NpdGlvbjogYWJzb2x1dGU7XHJcblx0XHRib3R0b206IDA7XHJcblx0XHRyaWdodDogMDtcclxuXHRcdHdpZHRoOiAzNy41cnB4O1xyXG5cdFx0aGVpZ2h0OiAzNy41cnB4O1xyXG5cdFx0dGV4dC1hbGlnbjogY2VudGVyO1xyXG5cdFx0Ym9yZGVyLXJhZGl1czogNTAlO1xyXG5cdFx0bGVmdDogNzJweDtcclxuXHRcdGJhY2tncm91bmQ6IGxpbmVhci1ncmFkaWVudCgwZGVnLCAjNTk5RUZGLCAjQzM5OUZGKTtcclxuXHR9XHJcblxyXG5cdC5waG90b0ljb24ge1xyXG5cdFx0d2lkdGg6IDIycnB4O1xyXG5cdFx0aGVpZ2h0OiAxN3JweDtcclxuXHR9XHJcblxyXG5cdC5kaWFsb2cge1xyXG5cdFx0d2lkdGg6IDgwdnc7XHJcblx0XHRiYWNrZ3JvdW5kLWNvbG9yOiAjZmZmZmZmO1xyXG5cdFx0cGFkZGluZzogNTBycHggMzJycHg7XHJcblx0XHRkaXNwbGF5OiBmbGV4O1xyXG5cdFx0Ym9yZGVyLXJhZGl1czogMThycHg7XHJcblx0XHRmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xyXG5cdFx0YWxpZ24taXRlbXM6IGNlbnRlcjtcclxuXHRcdC8qIHBvc2l0aW9uOiByZWxhdGl2ZTsgKi9cclxuXHR9XHJcblxyXG5cdC5kaWFsb2dDb21pdEJ0biB7XHJcblx0XHR3aWR0aDogMzIwcnB4O1xyXG5cdFx0YmFja2dyb3VuZDogIzMzODhGRjtcclxuXHRcdGJvcmRlci1yYWRpdXM6IDZycHg7XHJcblx0XHRmb250LXNpemU6IDI3cnB4O1xyXG5cdFx0aGVpZ2h0OiA1NnJweDtcclxuXHRcdGRpc3BsYXk6IGZsZXg7XHJcblx0XHRmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xyXG5cdFx0YWxpZ24taXRlbXM6IGNlbnRlcjtcclxuXHRcdHRleHQtYWxpZ246IGNlbnRlcjtcclxuXHRcdGp1c3RpZnktY29udGVudDogY2VudGVyO1xyXG5cdFx0Y29sb3I6IHdoaXRlO1xyXG5cdH1cclxuXHJcblx0LmNsb3NlSW1nIHtcclxuXHRcdHJpZ2h0OiAwO1xyXG5cdFx0d2lkdGg6IDE4cnB4O1xyXG5cdFx0aGVpZ2h0OiAxOHJweDtcclxuXHRcdHBvc2l0aW9uOiBhYnNvbHV0ZTtcclxuXHRcdHRvcDogMzJycHg7XHJcblx0XHRyaWdodDogMzJycHg7XHJcblx0fVxyXG5cclxuXHQuY29taXRCdG4ge1xyXG5cdFx0d2lkdGg6IDQ1JTtcclxuXHRcdGJhY2tncm91bmQ6ICMzMzg4RkY7XHJcblx0XHRib3JkZXItcmFkaXVzOiAxMnJweDtcclxuXHRcdGZvbnQtc2l6ZTogMzVycHg7XHJcblx0XHRmb250LXdlaWdodDogNTAwO1xyXG5cdFx0cGFkZGluZzogMjVycHg7XHJcblx0XHR0ZXh0LWFsaWduOiBjZW50ZXI7XHJcblx0XHRjb2xvcjogd2hpdGU7XHJcblx0fVxyXG5cclxuXHQuY2FuY2VsQnRuIHtcclxuXHRcdHdpZHRoOiA0NSU7XHJcblx0XHRtYXJnaW4tdG9wOiAyN3JweDtcclxuXHRcdGJhY2tncm91bmQ6ICNmZmZmZmY7XHJcblx0XHRib3JkZXItcmFkaXVzOiAxMnJweDtcclxuXHRcdGZvbnQtc2l6ZTogMzVycHg7XHJcblx0XHRmb250LXdlaWdodDogNTAwO1xyXG5cdFx0dGV4dC1hbGlnbjogY2VudGVyO1xyXG5cdFx0cGFkZGluZzogMjVycHg7XHJcblx0XHRib3JkZXI6ICM0OTRBNEMgc29saWQgMS44cnB4O1xyXG5cdFx0Y29sb3I6ICM0OTRBNEM7XHJcblx0fVxyXG5cclxuXHQuYnRuIHtcclxuXHRcdGRpc3BsYXk6IGZsZXg7XHJcblx0XHRmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xyXG5cdFx0YWxpZ24taXRlbXM6IGNlbnRlcjtcclxuXHRcdG1hcmdpbi10b3A6IDE3MHJweDtcclxuXHRcdHdpZHRoOiAxMDAlO1xyXG5cdH1cclxuXHJcblx0LndlQ2hhdERlcyB7XHJcblx0XHRmb250LXNpemU6IDI3cnB4O1xyXG5cdFx0Y29sb3I6ICM0OTRBNEM7XHJcblx0XHR3aWR0aDogNTAlO1xyXG5cdFx0dGV4dC1hbGlnbjogY2VudGVyO1xyXG5cdFx0bGluZS1oZWlnaHQ6IDMxcnB4O1xyXG5cdFx0bWFyZ2luLXRvcDogMTZycHg7XHJcblx0fVxyXG5cclxuXHQud2VDaGF0TmFtZSB7XHJcblx0XHRmb250LXNpemU6IDM1cnB4O1xyXG5cdFx0Zm9udC13ZWlnaHQ6IDcwMDtcclxuXHRcdGNvbG9yOiAjMTQxNzFBO1xyXG5cdFx0bWFyZ2luLXRvcDogMjVycHg7XHJcblx0fVxyXG5cclxuXHQudG9wTWFpbkJnIHtcclxuXHRcdHdpZHRoOiAxMDAlO1xyXG5cdFx0aGVpZ2h0OiA0MTBycHg7XHJcblx0fVxyXG5cclxuXHQubWFpbiB7XHJcblx0XHRwb3NpdGlvbjogYWJzb2x1dGU7XHJcblx0XHR3aWR0aDogMTAwJTtcclxuXHRcdHRvcDogMDtcclxuXHRcdGRpc3BsYXk6IGZsZXg7XHJcblx0XHRmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xyXG5cdFx0YWxpZ24taXRlbXM6IGNlbnRlcjtcclxuXHR9XHJcblxyXG5cdC5yb3cge1xyXG5cdFx0ZGlzcGxheTogZmxleDtcclxuXHRcdGZsZXgtZGlyZWN0aW9uOiByb3c7XHJcblx0XHRhbGlnbi1pdGVtczogY2VudGVyO1xyXG5cdFx0ZmxleC13cmFwOiB3cmFwO1xyXG5cdH1cclxuXHJcblx0LmJhY2tJbWcge1xyXG5cdFx0d2lkdGg6IDE2cnB4O1xyXG5cdFx0ei1pbmRleDogOTk5O1xyXG5cdFx0aGVpZ2h0OiAyOHJweDtcclxuXHRcdG1hcmdpbi1sZWZ0OiAxOHJweDtcclxuXHR9XHJcblxyXG5cdC5wb3NpdGlvbiB7XHJcblx0XHRwb3NpdGlvbjogcmVsYXRpdmU7XHJcblx0XHR3aWR0aDogMTAwJTtcclxuXHRcdGhlaWdodDogNTBycHg7XHJcblx0XHRkaXNwbGF5OiBmbGV4O1xyXG5cdFx0ZmxleC1kaXJlY3Rpb246IHJvdztcclxuXHRcdGFsaWduLWl0ZW1zOiBjZW50ZXI7XHJcblx0fVxyXG5cclxuXHQudGl0bGUge1xyXG5cdFx0cG9zaXRpb246IGFic29sdXRlO1xyXG5cdFx0dG9wOiAwO1xyXG5cdFx0d2lkdGg6IDEwMCU7XHJcblx0XHR0ZXh0LWFsaWduOiBjZW50ZXI7XHJcblx0XHRmb250LXNpemU6IDM1cnB4O1xyXG5cdFx0Zm9udC13ZWlnaHQ6IDUwMDtcclxuXHRcdGNvbG9yOiB3aGl0ZVxyXG5cdH1cclxuXHJcblx0LmxvZ29Cb3JkZXIge1xyXG5cdFx0Ym9yZGVyOiAjRkZGRkZGIHNvbGlkIDVycHg7XHJcblx0XHRib3JkZXItcmFkaXVzOiAyNXJweDtcclxuXHRcdHdpZHRoOiBtYXgtY29udGVudDtcclxuXHRcdG1hcmdpbi10b3A6IDE5MHJweDtcclxuXHR9XHJcblxyXG5cdC5pY29uLWFncmVlbWVudCB7XHJcblx0XHR3aWR0aDogMTRweDtcclxuXHRcdGhlaWdodDogMTRweDtcclxuXHRcdGJvcmRlcjogMXB4IHNvbGlkICMwMDdBRkY7XHJcblx0XHRib3JkZXItcmFkaXVzOiA1cHg7XHJcblx0fVxyXG48L3N0eWxlPlxuIiwiaW1wb3J0IG1vZCBmcm9tIFwiLSEuLi8uLi8uLi8uLi8uLi9odWJ1ZGVyL0hCdWlsZGVyL0hCdWlsZGVyWC9wbHVnaW5zL3VuaWFwcC1jbGkvbm9kZV9tb2R1bGVzL21pbmktY3NzLWV4dHJhY3QtcGx1Z2luL2Rpc3QvbG9hZGVyLmpzPz9yZWYtLTYtb25lT2YtMS0wIS4uLy4uLy4uLy4uLy4uL2h1YnVkZXIvSEJ1aWxkZXIvSEJ1aWxkZXJYL3BsdWdpbnMvdW5pYXBwLWNsaS9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L2Nqcy5qcz8/cmVmLS02LW9uZU9mLTEtMSEuLi8uLi8uLi8uLi8uLi9odWJ1ZGVyL0hCdWlsZGVyL0hCdWlsZGVyWC9wbHVnaW5zL3VuaWFwcC1jbGkvbm9kZV9tb2R1bGVzL0BkY2xvdWRpby92dWUtY2xpLXBsdWdpbi11bmkvcGFja2FnZXMvdnVlLWxvYWRlci9saWIvbG9hZGVycy9zdHlsZVBvc3RMb2FkZXIuanMhLi4vLi4vLi4vLi4vLi4vaHVidWRlci9IQnVpbGRlci9IQnVpbGRlclgvcGx1Z2lucy91bmlhcHAtY2xpL25vZGVfbW9kdWxlcy9AZGNsb3VkaW8vdnVlLWNsaS1wbHVnaW4tdW5pL3BhY2thZ2VzL3dlYnBhY2stcHJlcHJvY2Vzcy1sb2FkZXIvaW5kZXguanM/P3JlZi0tNi1vbmVPZi0xLTIhLi4vLi4vLi4vLi4vLi4vaHVidWRlci9IQnVpbGRlci9IQnVpbGRlclgvcGx1Z2lucy91bmlhcHAtY2xpL25vZGVfbW9kdWxlcy9wb3N0Y3NzLWxvYWRlci9zcmMvaW5kZXguanM/P3JlZi0tNi1vbmVPZi0xLTMhLi4vLi4vLi4vLi4vLi4vaHVidWRlci9IQnVpbGRlci9IQnVpbGRlclgvcGx1Z2lucy91bmlhcHAtY2xpL25vZGVfbW9kdWxlcy9AZGNsb3VkaW8vdnVlLWNsaS1wbHVnaW4tdW5pL3BhY2thZ2VzL3Z1ZS1sb2FkZXIvbGliL2luZGV4LmpzPz92dWUtbG9hZGVyLW9wdGlvbnMhLi4vLi4vLi4vLi4vLi4vaHVidWRlci9IQnVpbGRlci9IQnVpbGRlclgvcGx1Z2lucy91bmlhcHAtY2xpL25vZGVfbW9kdWxlcy9AZGNsb3VkaW8vd2VicGFjay11bmktbXAtbG9hZGVyL2xpYi9zdHlsZS5qcyEuL2xvZ2luLnZ1ZT92dWUmdHlwZT1zdHlsZSZpbmRleD0wJmlkPTNkMTBmODM0JnNjb3BlZD10cnVlJmxhbmc9Y3NzJlwiOyBleHBvcnQgZGVmYXVsdCBtb2Q7IGV4cG9ydCAqIGZyb20gXCItIS4uLy4uLy4uLy4uLy4uL2h1YnVkZXIvSEJ1aWxkZXIvSEJ1aWxkZXJYL3BsdWdpbnMvdW5pYXBwLWNsaS9ub2RlX21vZHVsZXMvbWluaS1jc3MtZXh0cmFjdC1wbHVnaW4vZGlzdC9sb2FkZXIuanM/P3JlZi0tNi1vbmVPZi0xLTAhLi4vLi4vLi4vLi4vLi4vaHVidWRlci9IQnVpbGRlci9IQnVpbGRlclgvcGx1Z2lucy91bmlhcHAtY2xpL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvY2pzLmpzPz9yZWYtLTYtb25lT2YtMS0xIS4uLy4uLy4uLy4uLy4uL2h1YnVkZXIvSEJ1aWxkZXIvSEJ1aWxkZXJYL3BsdWdpbnMvdW5pYXBwLWNsaS9ub2RlX21vZHVsZXMvQGRjbG91ZGlvL3Z1ZS1jbGktcGx1Z2luLXVuaS9wYWNrYWdlcy92dWUtbG9hZGVyL2xpYi9sb2FkZXJzL3N0eWxlUG9zdExvYWRlci5qcyEuLi8uLi8uLi8uLi8uLi9odWJ1ZGVyL0hCdWlsZGVyL0hCdWlsZGVyWC9wbHVnaW5zL3VuaWFwcC1jbGkvbm9kZV9tb2R1bGVzL0BkY2xvdWRpby92dWUtY2xpLXBsdWdpbi11bmkvcGFja2FnZXMvd2VicGFjay1wcmVwcm9jZXNzLWxvYWRlci9pbmRleC5qcz8/cmVmLS02LW9uZU9mLTEtMiEuLi8uLi8uLi8uLi8uLi9odWJ1ZGVyL0hCdWlsZGVyL0hCdWlsZGVyWC9wbHVnaW5zL3VuaWFwcC1jbGkvbm9kZV9tb2R1bGVzL3Bvc3Rjc3MtbG9hZGVyL3NyYy9pbmRleC5qcz8/cmVmLS02LW9uZU9mLTEtMyEuLi8uLi8uLi8uLi8uLi9odWJ1ZGVyL0hCdWlsZGVyL0hCdWlsZGVyWC9wbHVnaW5zL3VuaWFwcC1jbGkvbm9kZV9tb2R1bGVzL0BkY2xvdWRpby92dWUtY2xpLXBsdWdpbi11bmkvcGFja2FnZXMvdnVlLWxvYWRlci9saWIvaW5kZXguanM/P3Z1ZS1sb2FkZXItb3B0aW9ucyEuLi8uLi8uLi8uLi8uLi9odWJ1ZGVyL0hCdWlsZGVyL0hCdWlsZGVyWC9wbHVnaW5zL3VuaWFwcC1jbGkvbm9kZV9tb2R1bGVzL0BkY2xvdWRpby93ZWJwYWNrLXVuaS1tcC1sb2FkZXIvbGliL3N0eWxlLmpzIS4vbG9naW4udnVlP3Z1ZSZ0eXBlPXN0eWxlJmluZGV4PTAmaWQ9M2QxMGY4MzQmc2NvcGVkPXRydWUmbGFuZz1jc3MmXCIiLCIvLyBleHRyYWN0ZWQgYnkgbWluaS1jc3MtZXh0cmFjdC1wbHVnaW5cbiAgICBpZihtb2R1bGUuaG90KSB7XG4gICAgICAvLyAxNjgyNzQ2MzU0MDQzXG4gICAgICB2YXIgY3NzUmVsb2FkID0gcmVxdWlyZShcIkQ6L2h1YnVkZXIvSEJ1aWxkZXIvSEJ1aWxkZXJYL3BsdWdpbnMvdW5pYXBwLWNsaS9ub2RlX21vZHVsZXMvbWluaS1jc3MtZXh0cmFjdC1wbHVnaW4vZGlzdC9obXIvaG90TW9kdWxlUmVwbGFjZW1lbnQuanNcIikobW9kdWxlLmlkLCB7XCJobXJcIjp0cnVlLFwicHVibGljUGF0aFwiOlwiLi4vLi4vXCIsXCJsb2NhbHNcIjpmYWxzZX0pO1xuICAgICAgbW9kdWxlLmhvdC5kaXNwb3NlKGNzc1JlbG9hZCk7XG4gICAgICBtb2R1bGUuaG90LmFjY2VwdCh1bmRlZmluZWQsIGNzc1JlbG9hZCk7XG4gICAgfVxuICAiXSwic291cmNlUm9vdCI6IiJ9