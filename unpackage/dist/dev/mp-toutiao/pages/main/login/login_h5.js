(global["webpackJsonp"] = global["webpackJsonp"] || []).push([["pages/main/login/login_h5"],{

/***/ 148:
/*!***********************************************************************************************!*\
  !*** D:/gitgpt更新代码不修改/chatgpt_wechat_font/main.js?{"page":"pages%2Fmain%2Flogin%2Flogin_h5"} ***!
  \***********************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/* WEBPACK VAR INJECTION */(function(wx, createPage) {__webpack_require__(/*! uni-pages */ 5);
var _vue = _interopRequireDefault(__webpack_require__(/*! vue */ 3));
var _login_h = _interopRequireDefault(__webpack_require__(/*! ./pages/main/login/login_h5.vue */ 149));function _interopRequireDefault(obj) {return obj && obj.__esModule ? obj : { default: obj };}wx.__webpack_require_UNI_MP_PLUGIN__ = __webpack_require__;
createPage(_login_h.default);
/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./node_modules/@dcloudio/uni-mp-toutiao/dist/index.js */ 1)["default"], __webpack_require__(/*! ./node_modules/@dcloudio/uni-mp-toutiao/dist/index.js */ 1)["createPage"]))

/***/ }),

/***/ 149:
/*!**************************************************************************!*\
  !*** D:/gitgpt更新代码不修改/chatgpt_wechat_font/pages/main/login/login_h5.vue ***!
  \**************************************************************************/
/*! no static exports found */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _login_h5_vue_vue_type_template_id_50a2dc14___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./login_h5.vue?vue&type=template&id=50a2dc14& */ 150);
/* harmony import */ var _login_h5_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./login_h5.vue?vue&type=script&lang=js& */ 152);
/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _login_h5_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__) if(__WEBPACK_IMPORT_KEY__ !== 'default') (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _login_h5_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__[key]; }) }(__WEBPACK_IMPORT_KEY__));
/* harmony import */ var _login_h5_vue_vue_type_style_index_0_lang_css___WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./login_h5.vue?vue&type=style&index=0&lang=css& */ 154);
/* harmony import */ var _hubuder_HBuilder_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../../../hubuder/HBuilder/HBuilderX/plugins/uniapp-cli/node_modules/@dcloudio/vue-cli-plugin-uni/packages/vue-loader/lib/runtime/componentNormalizer.js */ 14);

var renderjs





/* normalize component */

var component = Object(_hubuder_HBuilder_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_3__["default"])(
  _login_h5_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__["default"],
  _login_h5_vue_vue_type_template_id_50a2dc14___WEBPACK_IMPORTED_MODULE_0__["render"],
  _login_h5_vue_vue_type_template_id_50a2dc14___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"],
  false,
  null,
  null,
  null,
  false,
  _login_h5_vue_vue_type_template_id_50a2dc14___WEBPACK_IMPORTED_MODULE_0__["components"],
  renderjs
)

component.options.__file = "pages/main/login/login_h5.vue"
/* harmony default export */ __webpack_exports__["default"] = (component.exports);

/***/ }),

/***/ 150:
/*!*********************************************************************************************************!*\
  !*** D:/gitgpt更新代码不修改/chatgpt_wechat_font/pages/main/login/login_h5.vue?vue&type=template&id=50a2dc14& ***!
  \*********************************************************************************************************/
/*! exports provided: render, staticRenderFns, recyclableRender, components */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _hubuder_HBuilder_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_hubuder_HBuilder_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_16_0_hubuder_HBuilder_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_template_js_hubuder_HBuilder_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_uni_app_loader_page_meta_js_hubuder_HBuilder_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_hubuder_HBuilder_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_style_js_login_h5_vue_vue_type_template_id_50a2dc14___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../hubuder/HBuilder/HBuilderX/plugins/uniapp-cli/node_modules/@dcloudio/vue-cli-plugin-uni/packages/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../../../hubuder/HBuilder/HBuilderX/plugins/uniapp-cli/node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-preprocess-loader??ref--16-0!../../../../../hubuder/HBuilder/HBuilderX/plugins/uniapp-cli/node_modules/@dcloudio/webpack-uni-mp-loader/lib/template.js!../../../../../hubuder/HBuilder/HBuilderX/plugins/uniapp-cli/node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-uni-app-loader/page-meta.js!../../../../../hubuder/HBuilder/HBuilderX/plugins/uniapp-cli/node_modules/@dcloudio/vue-cli-plugin-uni/packages/vue-loader/lib??vue-loader-options!../../../../../hubuder/HBuilder/HBuilderX/plugins/uniapp-cli/node_modules/@dcloudio/webpack-uni-mp-loader/lib/style.js!./login_h5.vue?vue&type=template&id=50a2dc14& */ 151);
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "render", function() { return _hubuder_HBuilder_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_hubuder_HBuilder_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_16_0_hubuder_HBuilder_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_template_js_hubuder_HBuilder_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_uni_app_loader_page_meta_js_hubuder_HBuilder_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_hubuder_HBuilder_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_style_js_login_h5_vue_vue_type_template_id_50a2dc14___WEBPACK_IMPORTED_MODULE_0__["render"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return _hubuder_HBuilder_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_hubuder_HBuilder_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_16_0_hubuder_HBuilder_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_template_js_hubuder_HBuilder_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_uni_app_loader_page_meta_js_hubuder_HBuilder_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_hubuder_HBuilder_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_style_js_login_h5_vue_vue_type_template_id_50a2dc14___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "recyclableRender", function() { return _hubuder_HBuilder_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_hubuder_HBuilder_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_16_0_hubuder_HBuilder_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_template_js_hubuder_HBuilder_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_uni_app_loader_page_meta_js_hubuder_HBuilder_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_hubuder_HBuilder_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_style_js_login_h5_vue_vue_type_template_id_50a2dc14___WEBPACK_IMPORTED_MODULE_0__["recyclableRender"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "components", function() { return _hubuder_HBuilder_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_hubuder_HBuilder_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_16_0_hubuder_HBuilder_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_template_js_hubuder_HBuilder_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_uni_app_loader_page_meta_js_hubuder_HBuilder_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_hubuder_HBuilder_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_style_js_login_h5_vue_vue_type_template_id_50a2dc14___WEBPACK_IMPORTED_MODULE_0__["components"]; });



/***/ }),

/***/ 151:
/*!*********************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/@dcloudio/vue-cli-plugin-uni/packages/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-preprocess-loader??ref--16-0!./node_modules/@dcloudio/webpack-uni-mp-loader/lib/template.js!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-uni-app-loader/page-meta.js!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/vue-loader/lib??vue-loader-options!./node_modules/@dcloudio/webpack-uni-mp-loader/lib/style.js!D:/gitgpt更新代码不修改/chatgpt_wechat_font/pages/main/login/login_h5.vue?vue&type=template&id=50a2dc14& ***!
  \*********************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
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
    },
    uDivider: function() {
      return Promise.all(/*! import() | node-modules/uview-ui/components/u-divider/u-divider */[__webpack_require__.e("common/vendor"), __webpack_require__.e("node-modules/uview-ui/components/u-divider/u-divider")]).then(__webpack_require__.bind(null, /*! uview-ui/components/u-divider/u-divider.vue */ 265))
    },
    uPopup: function() {
      return Promise.all(/*! import() | node-modules/uview-ui/components/u-popup/u-popup */[__webpack_require__.e("common/vendor"), __webpack_require__.e("node-modules/uview-ui/components/u-popup/u-popup")]).then(__webpack_require__.bind(null, /*! uview-ui/components/u-popup/u-popup.vue */ 273))
    },
    "u-Input": function() {
      return Promise.all(/*! import() | node-modules/uview-ui/components/u--input/u--input */[__webpack_require__.e("common/vendor"), __webpack_require__.e("node-modules/uview-ui/components/u--input/u--input")]).then(__webpack_require__.bind(null, /*! uview-ui/components/u--input/u--input.vue */ 281))
    },
    uCode: function() {
      return Promise.all(/*! import() | node-modules/uview-ui/components/u-code/u-code */[__webpack_require__.e("common/vendor"), __webpack_require__.e("node-modules/uview-ui/components/u-code/u-code")]).then(__webpack_require__.bind(null, /*! uview-ui/components/u-code/u-code.vue */ 287))
    },
    uButton: function() {
      return Promise.all(/*! import() | node-modules/uview-ui/components/u-button/u-button */[__webpack_require__.e("common/vendor"), __webpack_require__.e("node-modules/uview-ui/components/u-button/u-button")]).then(__webpack_require__.bind(null, /*! uview-ui/components/u-button/u-button.vue */ 295))
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
}
var recyclableRender = false
var staticRenderFns = []
render._withStripped = true



/***/ }),

/***/ 152:
/*!***************************************************************************************************!*\
  !*** D:/gitgpt更新代码不修改/chatgpt_wechat_font/pages/main/login/login_h5.vue?vue&type=script&lang=js& ***!
  \***************************************************************************************************/
/*! no static exports found */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _hubuder_HBuilder_HBuilderX_plugins_uniapp_cli_node_modules_babel_loader_lib_index_js_hubuder_HBuilder_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_12_1_hubuder_HBuilder_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_script_js_hubuder_HBuilder_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_hubuder_HBuilder_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_style_js_login_h5_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../hubuder/HBuilder/HBuilderX/plugins/uniapp-cli/node_modules/babel-loader/lib!../../../../../hubuder/HBuilder/HBuilderX/plugins/uniapp-cli/node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-preprocess-loader??ref--12-1!../../../../../hubuder/HBuilder/HBuilderX/plugins/uniapp-cli/node_modules/@dcloudio/webpack-uni-mp-loader/lib/script.js!../../../../../hubuder/HBuilder/HBuilderX/plugins/uniapp-cli/node_modules/@dcloudio/vue-cli-plugin-uni/packages/vue-loader/lib??vue-loader-options!../../../../../hubuder/HBuilder/HBuilderX/plugins/uniapp-cli/node_modules/@dcloudio/webpack-uni-mp-loader/lib/style.js!./login_h5.vue?vue&type=script&lang=js& */ 153);
/* harmony import */ var _hubuder_HBuilder_HBuilderX_plugins_uniapp_cli_node_modules_babel_loader_lib_index_js_hubuder_HBuilder_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_12_1_hubuder_HBuilder_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_script_js_hubuder_HBuilder_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_hubuder_HBuilder_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_style_js_login_h5_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_hubuder_HBuilder_HBuilderX_plugins_uniapp_cli_node_modules_babel_loader_lib_index_js_hubuder_HBuilder_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_12_1_hubuder_HBuilder_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_script_js_hubuder_HBuilder_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_hubuder_HBuilder_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_style_js_login_h5_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__);
/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _hubuder_HBuilder_HBuilderX_plugins_uniapp_cli_node_modules_babel_loader_lib_index_js_hubuder_HBuilder_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_12_1_hubuder_HBuilder_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_script_js_hubuder_HBuilder_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_hubuder_HBuilder_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_style_js_login_h5_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__) if(__WEBPACK_IMPORT_KEY__ !== 'default') (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _hubuder_HBuilder_HBuilderX_plugins_uniapp_cli_node_modules_babel_loader_lib_index_js_hubuder_HBuilder_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_12_1_hubuder_HBuilder_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_script_js_hubuder_HBuilder_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_hubuder_HBuilder_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_style_js_login_h5_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__[key]; }) }(__WEBPACK_IMPORT_KEY__));
 /* harmony default export */ __webpack_exports__["default"] = (_hubuder_HBuilder_HBuilderX_plugins_uniapp_cli_node_modules_babel_loader_lib_index_js_hubuder_HBuilder_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_12_1_hubuder_HBuilder_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_script_js_hubuder_HBuilder_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_hubuder_HBuilder_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_style_js_login_h5_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0___default.a); 

/***/ }),

/***/ 153:
/*!**********************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-preprocess-loader??ref--12-1!./node_modules/@dcloudio/webpack-uni-mp-loader/lib/script.js!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/vue-loader/lib??vue-loader-options!./node_modules/@dcloudio/webpack-uni-mp-loader/lib/style.js!D:/gitgpt更新代码不修改/chatgpt_wechat_font/pages/main/login/login_h5.vue?vue&type=script&lang=js& ***!
  \**********************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
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
var Verify = function Verify() {Promise.all(/*! require.ensure | node-modules/Verifition/Verify */[__webpack_require__.e("common/vendor"), __webpack_require__.e("node-modules/Verifition/Verify")]).then((function () {return resolve(__webpack_require__(/*! @/node_modules/Verifition/Verify */ 305));}).bind(null, __webpack_require__)).catch(__webpack_require__.oe);};var _default = { components: { Verify: Verify }, data: function data() {return { avatarUrl: _util.default.defaultAvatar(), nickname: '', statusBarHeight: 0, logoImg: 'https://yuan-ai.oss-cn-beijing.aliyuncs.com/logo.png', weChatInfo: { weichat_name: '', weichat_notice: '' }, loginForm: { userName: '', passWord: '', conPassWord: '', valismsCode: '', code: '' }, show: false, isSelectImage: false, title: '', desc: '', loadTitle: true, isagreeU: false, popupShow: false, passwordIcon: true, isText: false, //后置图标
      singFlag: 0, //1标识登录,2标识注册,3表示验证码登录
      smsTips: "获取验证码", countdown: 0, keepRunning: true, aliyunSmsTimes: 60, userInfo: {} };}, onLoad: function onLoad() {}, methods: { codeChange: function codeChange(text) {this.smsTips = text;}, getCode: function getCode() {var _this = this;if (this.$refs.uCode.canGetCode) {uni.showLoading({ title: '正在获取验证码' });(0, _request.default)('', '/authorization/register/sendCmsCode', 'POST', this.loginForm, {}).then(function (res) {_util.default.message(res.msg);if (res.code == 200) {_this.$refs.uCode.start();}});}}, getAliyunSmsTimes: function getAliyunSmsTimes() {this.aliyunSmsTimes = uni.getStorageSync('baseConfig').aliyun_sms_times;}, closePop: function closePop() {this.popupShow = false;}, getCacheContent: function getCacheContent() {var _this2 = this;(0, _request.default)('', '/yuan/ai/w/stream/configInfo', 'POST', {}, {}).then(function (res) {if (res.code == 200) {_this2.weChatInfo = res.data;uni.setStorageSync('baseConfig', res.data);}});}, toUserCenter: function toUserCenter() {uni.switchTab({ url: '/pages/main/minefragment/minefragment' });}, isLogin: function isLogin() {if (_util.default.isNotBlank(uni.getStorageSync('authorization'))) {this.toUserCenter();}}, /**
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                 * 返回上一页
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                 */back: function back() {uni.navigateBack({ delta: 1 });}, changeType: function changeType(flag) {this.isText = flag;}, jumpPage: function jumpPage(e) {uni.navigateTo({ url: e });
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
    getUserInfo: function getUserInfo() {var _this3 = this;
      (0, _request.default)('', '/user/getUserInfo', 'GET', {}, {}).then(function (res) {

        if (res.code == 200) {
          _this3.userInfo = res.data;
          uni.setStorageSync('userInfo', _this3.userInfo);
          uni.switchTab({
            url: '../minefragment/minefragment' });

        } else {
          _util.default.message("个人信息获取失败", 'error');
        }


      });
    },
    openLoginOrRegister: function openLoginOrRegister(flag) {
      this.singFlag = flag;
      if (!this.isagreeU) {
        _util.default.message("请先阅读《使用协议》与《用户协议》");
        return;
      }
      if (_util.default.isBlank(this.singFlag) || this.singFlag == 0) {
        _util.default.message("请选择登陆方式");
        return;
      }
      this.popupShow = true;
    },
    passwordLogin: function passwordLogin() {var _this4 = this;
      _util.default.message("登陆中", "loadding");
      //校验
      if (_util.default.isBlank(this.loginForm.userName) ||
      _util.default.isBlank(this.loginForm.passWord)) {
        _util.default.message("账号密码不可为空");
        return;
      }
      var param = {
        'code': this.loginForm.code,
        'username': this.loginForm.userName,
        'password': this.loginForm.passWord };

      (0, _request.default)('', '/login', 'POST', param, {}).then(function (res) {
        console.log(res.token);
        if (res.code == 200) {
          uni.setStorageSync('authorization', res.token);
          _this4.getUserInfo();
        } else if (res.code == 500) {
          _util.default.message(res.msg);
        } else {
          _util.default.message("未知错误");
        }
        uni.hideLoading();
      });
    },
    register: function register() {var _this5 = this;
      _util.default.message("登陆中", "loadding");
      //校验
      if (_util.default.isBlank(this.loginForm.userName) ||
      _util.default.isBlank(this.loginForm.passWord)) {
        _util.default.message("账号密码不可为空");
        return;
      }
      if (this.loginForm.passWord !== this.loginForm.conPassWord) {
        _util.default.message("两次密码不相同");
        return;
      }
      var param = {
        'code': this.loginForm.code,
        'username': this.loginForm.userName,
        'password': this.loginForm.passWord,
        'confirmPassword': this.loginForm.conPassWord };

      (0, _request.default)('', '/register', 'POST', param, {}).then(function (res) {
        if (res.code == 200) {
          _this5.singFlag = 1;
        } else if (res.code == 500) {
          _util.default.message(res.msg);
        } else {
          _util.default.message("未知错误");
        }
        uni.hideLoading();
      });
    },
    smsCode: function smsCode() {var _this6 = this;
      _util.default.message("登陆中", "loadding");
      //校验
      if (_util.default.isBlank(this.loginForm.userName)) {
        _util.default.message("账号不可为空");
        return;
      }
      if (_util.default.isBlank(this.loginForm.valismsCode)) {
        _util.default.message("验证码不可为空");
        return;
      }
      var param = {
        'code': this.loginForm.code,
        'userName': this.loginForm.userName,
        'valismsCode': this.loginForm.valismsCode };

      (0, _request.default)('', '/authorization/register/smsLogin', 'POST', param, {}).then(function (res) {
        if (res.code == 200) {
          console.log(res);
          uni.setStorageSync('authorization', res.data.token);
          uni.setStorageSync('userInfo', res.data.userInfo);
          _this6.toUserCenter();
        } else if (res.code == 500) {
          _util.default.message(res.msg);
        } else {
          _util.default.message("未知错误");
        }
        uni.hideLoading();
      });
    },
    openVerify: function openVerify() {



      if (this.singFlag == 1) {
        //校验
        if (_util.default.isBlank(this.loginForm.userName) ||
        _util.default.isBlank(this.loginForm.passWord)) {
          _util.default.message("账号密码不可为空");
          return;
        }
      } else if (this.singFlag == 2) {
        //校验
        if (_util.default.isBlank(this.loginForm.userName) ||
        _util.default.isBlank(this.loginForm.passWord)) {
          _util.default.message("账号密码不可为空");
          return;
        }
        if (this.loginForm.passWord !== this.loginForm.conPassWord) {
          _util.default.message("两次密码不相同");
          return;
        }
      } else if (this.singFlag == 3) {
        //校验
        if (_util.default.isBlank(this.loginForm.userName)) {
          _util.default.message("账号不可为空");
          return;
        }
        if (_util.default.isBlank(this.loginForm.valismsCode)) {
          _util.default.message("验证码不可为空");
          return;
        }
      } else {
        _util.default.message("登陆方式错误", 'error');
      }



      this.$refs.verify.show();
    },
    verifySuccess: function verifySuccess(params) {
      //认证成功
      this.loginForm.code = params.captchaVerification;
      this.loginOrRegister(this.singFlag);
    },
    loginOrRegister: function loginOrRegister(singFlag) {
      if (this.singFlag == 1) {
        this.passwordLogin();
      } else if (this.singFlag == 2) {
        this.register();
      } else if (this.singFlag == 3) {
        this.smsCode();
      } else {
        _util.default.message("登陆方式错误", 'error');
      }
    },
    loginJwt: function loginJwt(jsCode) {var _this7 = this;
      var param = {
        'jsCode': jsCode,
        'inviteCode': uni.getStorageSync('invitationCode') };

      (0, _request.default)('', '/authorization/wx/registerOrLogin', 'POST', param, {}).then(function (res) {
        if (res.code == 200) {
          uni.setStorageSync('authorization', res.data.token);
          uni.setStorageSync('userInfo', res.data.userInfo);
          _this7.toUserCenter();
        } else {
          _util.default.message("登录失败,请重试", 'error');
        }
        uni.hideLoading();
      });
    },
    loginRequest: function loginRequest() {
      if (!this.isagreeU) {
        _util.default.message("请先阅读《使用协议》与《用户协议》");
        return;
      }
      var redicturl = encodeURIComponent(uni.getStorageSync('baseConfig').wx_h5_redirect_uri);
      console.log(redicturl);
      var appid = uni.getStorageSync('baseConfig').wx_h5_appid;
      window.location.href = "https://open.weixin.qq.com/connect/oauth2/authorize?appid=" + appid +
      "&redirect_uri=" + redicturl + "&response_type=code&scope=snsapi_userinfo&state=STATE#wechat_redirect";
    } } };exports.default = _default;
/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./node_modules/@dcloudio/uni-mp-toutiao/dist/index.js */ 1)["default"]))

/***/ }),

/***/ 154:
/*!***********************************************************************************************************!*\
  !*** D:/gitgpt更新代码不修改/chatgpt_wechat_font/pages/main/login/login_h5.vue?vue&type=style&index=0&lang=css& ***!
  \***********************************************************************************************************/
/*! no static exports found */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _hubuder_HBuilder_HBuilderX_plugins_uniapp_cli_node_modules_mini_css_extract_plugin_dist_loader_js_ref_6_oneOf_1_0_hubuder_HBuilder_HBuilderX_plugins_uniapp_cli_node_modules_css_loader_dist_cjs_js_ref_6_oneOf_1_1_hubuder_HBuilder_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_loaders_stylePostLoader_js_hubuder_HBuilder_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_6_oneOf_1_2_hubuder_HBuilder_HBuilderX_plugins_uniapp_cli_node_modules_postcss_loader_src_index_js_ref_6_oneOf_1_3_hubuder_HBuilder_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_hubuder_HBuilder_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_style_js_login_h5_vue_vue_type_style_index_0_lang_css___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../hubuder/HBuilder/HBuilderX/plugins/uniapp-cli/node_modules/mini-css-extract-plugin/dist/loader.js??ref--6-oneOf-1-0!../../../../../hubuder/HBuilder/HBuilderX/plugins/uniapp-cli/node_modules/css-loader/dist/cjs.js??ref--6-oneOf-1-1!../../../../../hubuder/HBuilder/HBuilderX/plugins/uniapp-cli/node_modules/@dcloudio/vue-cli-plugin-uni/packages/vue-loader/lib/loaders/stylePostLoader.js!../../../../../hubuder/HBuilder/HBuilderX/plugins/uniapp-cli/node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-preprocess-loader??ref--6-oneOf-1-2!../../../../../hubuder/HBuilder/HBuilderX/plugins/uniapp-cli/node_modules/postcss-loader/src??ref--6-oneOf-1-3!../../../../../hubuder/HBuilder/HBuilderX/plugins/uniapp-cli/node_modules/@dcloudio/vue-cli-plugin-uni/packages/vue-loader/lib??vue-loader-options!../../../../../hubuder/HBuilder/HBuilderX/plugins/uniapp-cli/node_modules/@dcloudio/webpack-uni-mp-loader/lib/style.js!./login_h5.vue?vue&type=style&index=0&lang=css& */ 155);
/* harmony import */ var _hubuder_HBuilder_HBuilderX_plugins_uniapp_cli_node_modules_mini_css_extract_plugin_dist_loader_js_ref_6_oneOf_1_0_hubuder_HBuilder_HBuilderX_plugins_uniapp_cli_node_modules_css_loader_dist_cjs_js_ref_6_oneOf_1_1_hubuder_HBuilder_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_loaders_stylePostLoader_js_hubuder_HBuilder_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_6_oneOf_1_2_hubuder_HBuilder_HBuilderX_plugins_uniapp_cli_node_modules_postcss_loader_src_index_js_ref_6_oneOf_1_3_hubuder_HBuilder_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_hubuder_HBuilder_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_style_js_login_h5_vue_vue_type_style_index_0_lang_css___WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_hubuder_HBuilder_HBuilderX_plugins_uniapp_cli_node_modules_mini_css_extract_plugin_dist_loader_js_ref_6_oneOf_1_0_hubuder_HBuilder_HBuilderX_plugins_uniapp_cli_node_modules_css_loader_dist_cjs_js_ref_6_oneOf_1_1_hubuder_HBuilder_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_loaders_stylePostLoader_js_hubuder_HBuilder_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_6_oneOf_1_2_hubuder_HBuilder_HBuilderX_plugins_uniapp_cli_node_modules_postcss_loader_src_index_js_ref_6_oneOf_1_3_hubuder_HBuilder_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_hubuder_HBuilder_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_style_js_login_h5_vue_vue_type_style_index_0_lang_css___WEBPACK_IMPORTED_MODULE_0__);
/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _hubuder_HBuilder_HBuilderX_plugins_uniapp_cli_node_modules_mini_css_extract_plugin_dist_loader_js_ref_6_oneOf_1_0_hubuder_HBuilder_HBuilderX_plugins_uniapp_cli_node_modules_css_loader_dist_cjs_js_ref_6_oneOf_1_1_hubuder_HBuilder_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_loaders_stylePostLoader_js_hubuder_HBuilder_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_6_oneOf_1_2_hubuder_HBuilder_HBuilderX_plugins_uniapp_cli_node_modules_postcss_loader_src_index_js_ref_6_oneOf_1_3_hubuder_HBuilder_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_hubuder_HBuilder_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_style_js_login_h5_vue_vue_type_style_index_0_lang_css___WEBPACK_IMPORTED_MODULE_0__) if(__WEBPACK_IMPORT_KEY__ !== 'default') (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _hubuder_HBuilder_HBuilderX_plugins_uniapp_cli_node_modules_mini_css_extract_plugin_dist_loader_js_ref_6_oneOf_1_0_hubuder_HBuilder_HBuilderX_plugins_uniapp_cli_node_modules_css_loader_dist_cjs_js_ref_6_oneOf_1_1_hubuder_HBuilder_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_loaders_stylePostLoader_js_hubuder_HBuilder_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_6_oneOf_1_2_hubuder_HBuilder_HBuilderX_plugins_uniapp_cli_node_modules_postcss_loader_src_index_js_ref_6_oneOf_1_3_hubuder_HBuilder_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_hubuder_HBuilder_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_style_js_login_h5_vue_vue_type_style_index_0_lang_css___WEBPACK_IMPORTED_MODULE_0__[key]; }) }(__WEBPACK_IMPORT_KEY__));
 /* harmony default export */ __webpack_exports__["default"] = (_hubuder_HBuilder_HBuilderX_plugins_uniapp_cli_node_modules_mini_css_extract_plugin_dist_loader_js_ref_6_oneOf_1_0_hubuder_HBuilder_HBuilderX_plugins_uniapp_cli_node_modules_css_loader_dist_cjs_js_ref_6_oneOf_1_1_hubuder_HBuilder_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_loaders_stylePostLoader_js_hubuder_HBuilder_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_6_oneOf_1_2_hubuder_HBuilder_HBuilderX_plugins_uniapp_cli_node_modules_postcss_loader_src_index_js_ref_6_oneOf_1_3_hubuder_HBuilder_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_hubuder_HBuilder_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_style_js_login_h5_vue_vue_type_style_index_0_lang_css___WEBPACK_IMPORTED_MODULE_0___default.a); 

/***/ }),

/***/ 155:
/*!***************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/mini-css-extract-plugin/dist/loader.js??ref--6-oneOf-1-0!./node_modules/css-loader/dist/cjs.js??ref--6-oneOf-1-1!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-preprocess-loader??ref--6-oneOf-1-2!./node_modules/postcss-loader/src??ref--6-oneOf-1-3!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/vue-loader/lib??vue-loader-options!./node_modules/@dcloudio/webpack-uni-mp-loader/lib/style.js!D:/gitgpt更新代码不修改/chatgpt_wechat_font/pages/main/login/login_h5.vue?vue&type=style&index=0&lang=css& ***!
  \***************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

// extracted by mini-css-extract-plugin
    if(false) { var cssReload; }
  

/***/ })

},[[148,"common/runtime","common/vendor"]]]);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInVuaS1hcHA6Ly8vbWFpbi5qcyIsIndlYnBhY2s6Ly8vRDovZ2l0Z3B05pu05paw5Luj56CB5LiN5L+u5pS5L2NoYXRncHRfd2VjaGF0X2ZvbnQvcGFnZXMvbWFpbi9sb2dpbi9sb2dpbl9oNS52dWU/YjNkNSIsIndlYnBhY2s6Ly8vRDovZ2l0Z3B05pu05paw5Luj56CB5LiN5L+u5pS5L2NoYXRncHRfd2VjaGF0X2ZvbnQvcGFnZXMvbWFpbi9sb2dpbi9sb2dpbl9oNS52dWU/NzZiNCIsIndlYnBhY2s6Ly8vRDovZ2l0Z3B05pu05paw5Luj56CB5LiN5L+u5pS5L2NoYXRncHRfd2VjaGF0X2ZvbnQvcGFnZXMvbWFpbi9sb2dpbi9sb2dpbl9oNS52dWU/ODU5NiIsIndlYnBhY2s6Ly8vRDovZ2l0Z3B05pu05paw5Luj56CB5LiN5L+u5pS5L2NoYXRncHRfd2VjaGF0X2ZvbnQvcGFnZXMvbWFpbi9sb2dpbi9sb2dpbl9oNS52dWU/NjIzNSIsInVuaS1hcHA6Ly8vcGFnZXMvbWFpbi9sb2dpbi9sb2dpbl9oNS52dWUiLCJ3ZWJwYWNrOi8vL0Q6L2dpdGdwdOabtOaWsOS7o+eggeS4jeS/ruaUuS9jaGF0Z3B0X3dlY2hhdF9mb250L3BhZ2VzL21haW4vbG9naW4vbG9naW5faDUudnVlPzVmNzAiLCJ3ZWJwYWNrOi8vL0Q6L2dpdGdwdOabtOaWsOS7o+eggeS4jeS/ruaUuS9jaGF0Z3B0X3dlY2hhdF9mb250L3BhZ2VzL21haW4vbG9naW4vbG9naW5faDUudnVlPzk3YjQiXSwibmFtZXMiOlsid3giLCJfX3dlYnBhY2tfcmVxdWlyZV9VTklfTVBfUExVR0lOX18iLCJfX3dlYnBhY2tfcmVxdWlyZV9fIiwiY3JlYXRlUGFnZSIsIlBhZ2UiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7c0RBQUE7QUFDQTtBQUNBLHVHLDZGQUZtQkEsRUFBRSxDQUFDQyxpQ0FBSCxHQUF1Q0MsbUJBQXZDO0FBR25CQyxVQUFVLENBQUNDLGdCQUFELENBQVYsQzs7Ozs7Ozs7Ozs7OztB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Q0E7QUFDQTtBQUNBO0FBQ0Esc0JBREEsR0FDQSxTQURBLEdBQ0EsdUVBREE7QUFFQSxLQWxSQSxFQW5EQSxFOzs7Ozs7Ozs7Ozs7O0FDbkhBO0FBQUE7QUFBQTtBQUFBO0FBQW9nQyxDQUFnQiw4OUJBQUcsRUFBQyxDOzs7Ozs7Ozs7OztBQ0F4aEM7QUFDQSxPQUFPLEtBQVUsRUFBRSxrQkFLZCIsImZpbGUiOiJwYWdlcy9tYWluL2xvZ2luL2xvZ2luX2g1LmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0ICd1bmktcGFnZXMnO3d4Ll9fd2VicGFja19yZXF1aXJlX1VOSV9NUF9QTFVHSU5fXyA9IF9fd2VicGFja19yZXF1aXJlX187XG5pbXBvcnQgVnVlIGZyb20gJ3Z1ZSdcbmltcG9ydCBQYWdlIGZyb20gJy4vcGFnZXMvbWFpbi9sb2dpbi9sb2dpbl9oNS52dWUnXG5jcmVhdGVQYWdlKFBhZ2UpIiwiaW1wb3J0IHsgcmVuZGVyLCBzdGF0aWNSZW5kZXJGbnMsIHJlY3ljbGFibGVSZW5kZXIsIGNvbXBvbmVudHMgfSBmcm9tIFwiLi9sb2dpbl9oNS52dWU/dnVlJnR5cGU9dGVtcGxhdGUmaWQ9NTBhMmRjMTQmXCJcbnZhciByZW5kZXJqc1xuaW1wb3J0IHNjcmlwdCBmcm9tIFwiLi9sb2dpbl9oNS52dWU/dnVlJnR5cGU9c2NyaXB0Jmxhbmc9anMmXCJcbmV4cG9ydCAqIGZyb20gXCIuL2xvZ2luX2g1LnZ1ZT92dWUmdHlwZT1zY3JpcHQmbGFuZz1qcyZcIlxuaW1wb3J0IHN0eWxlMCBmcm9tIFwiLi9sb2dpbl9oNS52dWU/dnVlJnR5cGU9c3R5bGUmaW5kZXg9MCZsYW5nPWNzcyZcIlxuXG5cbi8qIG5vcm1hbGl6ZSBjb21wb25lbnQgKi9cbmltcG9ydCBub3JtYWxpemVyIGZyb20gXCIhLi4vLi4vLi4vLi4vLi4vaHVidWRlci9IQnVpbGRlci9IQnVpbGRlclgvcGx1Z2lucy91bmlhcHAtY2xpL25vZGVfbW9kdWxlcy9AZGNsb3VkaW8vdnVlLWNsaS1wbHVnaW4tdW5pL3BhY2thZ2VzL3Z1ZS1sb2FkZXIvbGliL3J1bnRpbWUvY29tcG9uZW50Tm9ybWFsaXplci5qc1wiXG52YXIgY29tcG9uZW50ID0gbm9ybWFsaXplcihcbiAgc2NyaXB0LFxuICByZW5kZXIsXG4gIHN0YXRpY1JlbmRlckZucyxcbiAgZmFsc2UsXG4gIG51bGwsXG4gIG51bGwsXG4gIG51bGwsXG4gIGZhbHNlLFxuICBjb21wb25lbnRzLFxuICByZW5kZXJqc1xuKVxuXG5jb21wb25lbnQub3B0aW9ucy5fX2ZpbGUgPSBcInBhZ2VzL21haW4vbG9naW4vbG9naW5faDUudnVlXCJcbmV4cG9ydCBkZWZhdWx0IGNvbXBvbmVudC5leHBvcnRzIiwiZXhwb3J0ICogZnJvbSBcIi0hLi4vLi4vLi4vLi4vLi4vaHVidWRlci9IQnVpbGRlci9IQnVpbGRlclgvcGx1Z2lucy91bmlhcHAtY2xpL25vZGVfbW9kdWxlcy9AZGNsb3VkaW8vdnVlLWNsaS1wbHVnaW4tdW5pL3BhY2thZ2VzL3Z1ZS1sb2FkZXIvbGliL2xvYWRlcnMvdGVtcGxhdGVMb2FkZXIuanM/P3Z1ZS1sb2FkZXItb3B0aW9ucyEuLi8uLi8uLi8uLi8uLi9odWJ1ZGVyL0hCdWlsZGVyL0hCdWlsZGVyWC9wbHVnaW5zL3VuaWFwcC1jbGkvbm9kZV9tb2R1bGVzL0BkY2xvdWRpby92dWUtY2xpLXBsdWdpbi11bmkvcGFja2FnZXMvd2VicGFjay1wcmVwcm9jZXNzLWxvYWRlci9pbmRleC5qcz8/cmVmLS0xNi0wIS4uLy4uLy4uLy4uLy4uL2h1YnVkZXIvSEJ1aWxkZXIvSEJ1aWxkZXJYL3BsdWdpbnMvdW5pYXBwLWNsaS9ub2RlX21vZHVsZXMvQGRjbG91ZGlvL3dlYnBhY2stdW5pLW1wLWxvYWRlci9saWIvdGVtcGxhdGUuanMhLi4vLi4vLi4vLi4vLi4vaHVidWRlci9IQnVpbGRlci9IQnVpbGRlclgvcGx1Z2lucy91bmlhcHAtY2xpL25vZGVfbW9kdWxlcy9AZGNsb3VkaW8vdnVlLWNsaS1wbHVnaW4tdW5pL3BhY2thZ2VzL3dlYnBhY2stdW5pLWFwcC1sb2FkZXIvcGFnZS1tZXRhLmpzIS4uLy4uLy4uLy4uLy4uL2h1YnVkZXIvSEJ1aWxkZXIvSEJ1aWxkZXJYL3BsdWdpbnMvdW5pYXBwLWNsaS9ub2RlX21vZHVsZXMvQGRjbG91ZGlvL3Z1ZS1jbGktcGx1Z2luLXVuaS9wYWNrYWdlcy92dWUtbG9hZGVyL2xpYi9pbmRleC5qcz8/dnVlLWxvYWRlci1vcHRpb25zIS4uLy4uLy4uLy4uLy4uL2h1YnVkZXIvSEJ1aWxkZXIvSEJ1aWxkZXJYL3BsdWdpbnMvdW5pYXBwLWNsaS9ub2RlX21vZHVsZXMvQGRjbG91ZGlvL3dlYnBhY2stdW5pLW1wLWxvYWRlci9saWIvc3R5bGUuanMhLi9sb2dpbl9oNS52dWU/dnVlJnR5cGU9dGVtcGxhdGUmaWQ9NTBhMmRjMTQmXCIiLCJ2YXIgY29tcG9uZW50c1xudHJ5IHtcbiAgY29tcG9uZW50cyA9IHtcbiAgICBcInUtSW1hZ2VcIjogZnVuY3Rpb24oKSB7XG4gICAgICByZXR1cm4gaW1wb3J0KFxuICAgICAgICAvKiB3ZWJwYWNrQ2h1bmtOYW1lOiBcIm5vZGUtbW9kdWxlcy91dmlldy11aS9jb21wb25lbnRzL3UtLWltYWdlL3UtLWltYWdlXCIgKi8gXCJ1dmlldy11aS9jb21wb25lbnRzL3UtLWltYWdlL3UtLWltYWdlLnZ1ZVwiXG4gICAgICApXG4gICAgfSxcbiAgICB1SWNvbjogZnVuY3Rpb24oKSB7XG4gICAgICByZXR1cm4gaW1wb3J0KFxuICAgICAgICAvKiB3ZWJwYWNrQ2h1bmtOYW1lOiBcIm5vZGUtbW9kdWxlcy91dmlldy11aS9jb21wb25lbnRzL3UtaWNvbi91LWljb25cIiAqLyBcInV2aWV3LXVpL2NvbXBvbmVudHMvdS1pY29uL3UtaWNvbi52dWVcIlxuICAgICAgKVxuICAgIH0sXG4gICAgdURpdmlkZXI6IGZ1bmN0aW9uKCkge1xuICAgICAgcmV0dXJuIGltcG9ydChcbiAgICAgICAgLyogd2VicGFja0NodW5rTmFtZTogXCJub2RlLW1vZHVsZXMvdXZpZXctdWkvY29tcG9uZW50cy91LWRpdmlkZXIvdS1kaXZpZGVyXCIgKi8gXCJ1dmlldy11aS9jb21wb25lbnRzL3UtZGl2aWRlci91LWRpdmlkZXIudnVlXCJcbiAgICAgIClcbiAgICB9LFxuICAgIHVQb3B1cDogZnVuY3Rpb24oKSB7XG4gICAgICByZXR1cm4gaW1wb3J0KFxuICAgICAgICAvKiB3ZWJwYWNrQ2h1bmtOYW1lOiBcIm5vZGUtbW9kdWxlcy91dmlldy11aS9jb21wb25lbnRzL3UtcG9wdXAvdS1wb3B1cFwiICovIFwidXZpZXctdWkvY29tcG9uZW50cy91LXBvcHVwL3UtcG9wdXAudnVlXCJcbiAgICAgIClcbiAgICB9LFxuICAgIFwidS1JbnB1dFwiOiBmdW5jdGlvbigpIHtcbiAgICAgIHJldHVybiBpbXBvcnQoXG4gICAgICAgIC8qIHdlYnBhY2tDaHVua05hbWU6IFwibm9kZS1tb2R1bGVzL3V2aWV3LXVpL2NvbXBvbmVudHMvdS0taW5wdXQvdS0taW5wdXRcIiAqLyBcInV2aWV3LXVpL2NvbXBvbmVudHMvdS0taW5wdXQvdS0taW5wdXQudnVlXCJcbiAgICAgIClcbiAgICB9LFxuICAgIHVDb2RlOiBmdW5jdGlvbigpIHtcbiAgICAgIHJldHVybiBpbXBvcnQoXG4gICAgICAgIC8qIHdlYnBhY2tDaHVua05hbWU6IFwibm9kZS1tb2R1bGVzL3V2aWV3LXVpL2NvbXBvbmVudHMvdS1jb2RlL3UtY29kZVwiICovIFwidXZpZXctdWkvY29tcG9uZW50cy91LWNvZGUvdS1jb2RlLnZ1ZVwiXG4gICAgICApXG4gICAgfSxcbiAgICB1QnV0dG9uOiBmdW5jdGlvbigpIHtcbiAgICAgIHJldHVybiBpbXBvcnQoXG4gICAgICAgIC8qIHdlYnBhY2tDaHVua05hbWU6IFwibm9kZS1tb2R1bGVzL3V2aWV3LXVpL2NvbXBvbmVudHMvdS1idXR0b24vdS1idXR0b25cIiAqLyBcInV2aWV3LXVpL2NvbXBvbmVudHMvdS1idXR0b24vdS1idXR0b24udnVlXCJcbiAgICAgIClcbiAgICB9XG4gIH1cbn0gY2F0Y2ggKGUpIHtcbiAgaWYgKFxuICAgIGUubWVzc2FnZS5pbmRleE9mKFwiQ2Fubm90IGZpbmQgbW9kdWxlXCIpICE9PSAtMSAmJlxuICAgIGUubWVzc2FnZS5pbmRleE9mKFwiLnZ1ZVwiKSAhPT0gLTFcbiAgKSB7XG4gICAgY29uc29sZS5lcnJvcihlLm1lc3NhZ2UpXG4gICAgY29uc29sZS5lcnJvcihcIjEuIOaOkuafpee7hOS7tuWQjeensOaLvOWGmeaYr+WQpuato+ehrlwiKVxuICAgIGNvbnNvbGUuZXJyb3IoXG4gICAgICBcIjIuIOaOkuafpee7hOS7tuaYr+WQpuespuWQiCBlYXN5Y29tIOinhOiMg++8jOaWh+aho++8mmh0dHBzOi8vdW5pYXBwLmRjbG91ZC5uZXQuY24vY29sbG9jYXRpb24vcGFnZXM/aWQ9ZWFzeWNvbVwiXG4gICAgKVxuICAgIGNvbnNvbGUuZXJyb3IoXG4gICAgICBcIjMuIOiLpee7hOS7tuS4jeespuWQiCBlYXN5Y29tIOinhOiMg++8jOmcgOaJi+WKqOW8leWFpe+8jOW5tuWcqCBjb21wb25lbnRzIOS4reazqOWGjOivpee7hOS7tlwiXG4gICAgKVxuICB9IGVsc2Uge1xuICAgIHRocm93IGVcbiAgfVxufVxudmFyIHJlbmRlciA9IGZ1bmN0aW9uKCkge1xuICB2YXIgX3ZtID0gdGhpc1xuICB2YXIgX2ggPSBfdm0uJGNyZWF0ZUVsZW1lbnRcbiAgdmFyIF9jID0gX3ZtLl9zZWxmLl9jIHx8IF9oXG59XG52YXIgcmVjeWNsYWJsZVJlbmRlciA9IGZhbHNlXG52YXIgc3RhdGljUmVuZGVyRm5zID0gW11cbnJlbmRlci5fd2l0aFN0cmlwcGVkID0gdHJ1ZVxuXG5leHBvcnQgeyByZW5kZXIsIHN0YXRpY1JlbmRlckZucywgcmVjeWNsYWJsZVJlbmRlciwgY29tcG9uZW50cyB9IiwiaW1wb3J0IG1vZCBmcm9tIFwiLSEuLi8uLi8uLi8uLi8uLi9odWJ1ZGVyL0hCdWlsZGVyL0hCdWlsZGVyWC9wbHVnaW5zL3VuaWFwcC1jbGkvbm9kZV9tb2R1bGVzL2JhYmVsLWxvYWRlci9saWIvaW5kZXguanMhLi4vLi4vLi4vLi4vLi4vaHVidWRlci9IQnVpbGRlci9IQnVpbGRlclgvcGx1Z2lucy91bmlhcHAtY2xpL25vZGVfbW9kdWxlcy9AZGNsb3VkaW8vdnVlLWNsaS1wbHVnaW4tdW5pL3BhY2thZ2VzL3dlYnBhY2stcHJlcHJvY2Vzcy1sb2FkZXIvaW5kZXguanM/P3JlZi0tMTItMSEuLi8uLi8uLi8uLi8uLi9odWJ1ZGVyL0hCdWlsZGVyL0hCdWlsZGVyWC9wbHVnaW5zL3VuaWFwcC1jbGkvbm9kZV9tb2R1bGVzL0BkY2xvdWRpby93ZWJwYWNrLXVuaS1tcC1sb2FkZXIvbGliL3NjcmlwdC5qcyEuLi8uLi8uLi8uLi8uLi9odWJ1ZGVyL0hCdWlsZGVyL0hCdWlsZGVyWC9wbHVnaW5zL3VuaWFwcC1jbGkvbm9kZV9tb2R1bGVzL0BkY2xvdWRpby92dWUtY2xpLXBsdWdpbi11bmkvcGFja2FnZXMvdnVlLWxvYWRlci9saWIvaW5kZXguanM/P3Z1ZS1sb2FkZXItb3B0aW9ucyEuLi8uLi8uLi8uLi8uLi9odWJ1ZGVyL0hCdWlsZGVyL0hCdWlsZGVyWC9wbHVnaW5zL3VuaWFwcC1jbGkvbm9kZV9tb2R1bGVzL0BkY2xvdWRpby93ZWJwYWNrLXVuaS1tcC1sb2FkZXIvbGliL3N0eWxlLmpzIS4vbG9naW5faDUudnVlP3Z1ZSZ0eXBlPXNjcmlwdCZsYW5nPWpzJlwiOyBleHBvcnQgZGVmYXVsdCBtb2Q7IGV4cG9ydCAqIGZyb20gXCItIS4uLy4uLy4uLy4uLy4uL2h1YnVkZXIvSEJ1aWxkZXIvSEJ1aWxkZXJYL3BsdWdpbnMvdW5pYXBwLWNsaS9ub2RlX21vZHVsZXMvYmFiZWwtbG9hZGVyL2xpYi9pbmRleC5qcyEuLi8uLi8uLi8uLi8uLi9odWJ1ZGVyL0hCdWlsZGVyL0hCdWlsZGVyWC9wbHVnaW5zL3VuaWFwcC1jbGkvbm9kZV9tb2R1bGVzL0BkY2xvdWRpby92dWUtY2xpLXBsdWdpbi11bmkvcGFja2FnZXMvd2VicGFjay1wcmVwcm9jZXNzLWxvYWRlci9pbmRleC5qcz8/cmVmLS0xMi0xIS4uLy4uLy4uLy4uLy4uL2h1YnVkZXIvSEJ1aWxkZXIvSEJ1aWxkZXJYL3BsdWdpbnMvdW5pYXBwLWNsaS9ub2RlX21vZHVsZXMvQGRjbG91ZGlvL3dlYnBhY2stdW5pLW1wLWxvYWRlci9saWIvc2NyaXB0LmpzIS4uLy4uLy4uLy4uLy4uL2h1YnVkZXIvSEJ1aWxkZXIvSEJ1aWxkZXJYL3BsdWdpbnMvdW5pYXBwLWNsaS9ub2RlX21vZHVsZXMvQGRjbG91ZGlvL3Z1ZS1jbGktcGx1Z2luLXVuaS9wYWNrYWdlcy92dWUtbG9hZGVyL2xpYi9pbmRleC5qcz8/dnVlLWxvYWRlci1vcHRpb25zIS4uLy4uLy4uLy4uLy4uL2h1YnVkZXIvSEJ1aWxkZXIvSEJ1aWxkZXJYL3BsdWdpbnMvdW5pYXBwLWNsaS9ub2RlX21vZHVsZXMvQGRjbG91ZGlvL3dlYnBhY2stdW5pLW1wLWxvYWRlci9saWIvc3R5bGUuanMhLi9sb2dpbl9oNS52dWU/dnVlJnR5cGU9c2NyaXB0Jmxhbmc9anMmXCIiLCI8dGVtcGxhdGU+XHJcblx0PHZpZXc+XHJcblx0XHQ8aW1hZ2UgbW9kZT1cImFzcGVjdEZpbGxcIiBjbGFzcz1cInRvcE1haW5CZ1wiIHNyYz1cIi4uLy4uLy4uL3N0YXRpYy9sb2dpbl90b3BfYmcucG5nXCI+PC9pbWFnZT5cclxuXHJcblx0XHQ8dmlldyBjbGFzcz1cIm1haW5cIj5cclxuXHJcblx0XHRcdDx2aWV3IGNsYXNzPVwicm93IHBvc2l0aW9uXCIgc3R5bGU9XCJtYXJnaW4tdG9wOiAyMHB4O1wiPlxyXG5cdFx0XHRcdDx2aWV3IGNsYXNzPVwidGl0bGVcIj5cclxuXHRcdFx0XHRcdOeZu+W9lVxyXG5cdFx0XHRcdDwvdmlldz5cclxuXHRcdFx0PC92aWV3PlxyXG5cclxuXHRcdFx0PHZpZXcgY2xhc3M9XCJsb2dvQm9yZGVyXCI+XHJcblx0XHRcdFx0PHUtLWltYWdlIHJhZGl1cz1cIjI1cnB4XCIgOnNyYz1cImxvZ29JbWdcIiB3aWR0aD1cIjE3MnJweFwiIGhlaWdodD1cIjE3MnJweFwiPjwvdS0taW1hZ2U+XHJcblx0XHRcdDwvdmlldz5cclxuXHJcblxyXG5cdFx0XHQ8dmlldyBjbGFzcz1cIndlQ2hhdE5hbWVcIj5cclxuXHRcdFx0XHR7e3dlQ2hhdEluZm8ud2VpY2hhdF9uYW1lfX1cclxuXHRcdFx0PC92aWV3PlxyXG5cclxuXHRcdFx0PHZpZXcgY2xhc3M9XCJ3ZUNoYXREZXNcIj5cclxuXHRcdFx0XHR7e3dlQ2hhdEluZm8ud2VpY2hhdF9ub3RpY2V9fVxyXG5cdFx0XHQ8L3ZpZXc+XHJcblxyXG5cdFx0XHQ8dmlldyBjbGFzcz1cImJ0blwiPlxyXG5cdFx0XHRcdDx2aWV3IGNsYXNzPVwiY29taXRCdG5cIiBAY2xpY2s9XCJvcGVuTG9naW5PclJlZ2lzdGVyKDEpXCI+XHJcblx0XHRcdFx0XHTnmbvlvZVcclxuXHRcdFx0XHQ8L3ZpZXc+XHJcblx0XHRcdDwvdmlldz5cclxuXHRcdFx0PHZpZXcgY2xhc3M9XCJyZWdcIiBAY2xpY2s9XCJvcGVuTG9naW5PclJlZ2lzdGVyKDIpXCI+XHJcblx0XHRcdFx05pyq5rOo5YaM6LSm5Y+377yf5Y675rOo5YaMPlxyXG5cdFx0XHQ8L3ZpZXc+XHJcblx0XHRcdDx2aWV3IHN0eWxlPVwiZGlzcGxheTogZmxleDttYXJnaW4tdG9wOiAyNXB4O1wiPlxyXG5cdFx0XHRcdDx2aWV3IGNsYXNzPVwiaWNvbi1hZ3JlZW1lbnRcIiBzdHlsZT1cIm1hcmdpbi10b3A6IDRweDtmb250LXNpemU6IDEycnB4O1wiIEBjbGljaz1cImlzQWdyZWVcIj5cclxuXHRcdFx0XHRcdDx1LWljb24gdi1pZj1cImlzYWdyZWVVXCIgbmFtZT1cImNoZWNrYm94LW1hcmtcIiBjb2xvcj1cIiMyOTc5ZmZcIiBzaXplPVwiMTRcIj48L3UtaWNvbj5cclxuXHRcdFx0XHQ8L3ZpZXc+XHJcblx0XHRcdFx0PHNwYW4gc3R5bGU9XCJjb2xvcjogI2M3YzdjYztcIj7miJHlkIzmhI88L3NwYW4+XHJcblx0XHRcdFx0PHNwYW4gc3R5bGU9XCJjb2xvcjogIzAwN0FGRjtcIiBAY2xpY2s9XCJqdW1wUGFnZSgnL3BhZ2VzL21haW4vYWdyZWVtZW50L3VzZVJlZGVyJylcIj7jgIrkvb/nlKjljY/orq7jgIs8L3NwYW4+XHJcblx0XHRcdFx0PHNwYW4gc3R5bGU9XCJjb2xvcjogI2M3YzdjYztcIj7lkow8L3NwYW4+XHJcblx0XHRcdFx0PHNwYW4gc3R5bGU9XCJjb2xvcjogIzAwN0FGRjtcIiBAY2xpY2s9XCJqdW1wUGFnZSgnL3BhZ2VzL21haW4vYWdyZWVtZW50L3VzZXJSZWRlcicpXCI+44CK55So5oi35Y2P6K6u44CLPC9zcGFuPlxyXG5cdFx0XHQ8L3ZpZXc+XHJcblx0XHRcdDx2aWV3IGNsYXNzPVwiYmJvdHRvbS1sb2dpblwiPlxyXG5cdFx0XHRcdDx1LWRpdmlkZXIgdGV4dD1cIuWFtuS7lueZu+mZhuaWueW8j1wiIHRleHRDb2xvcj1cIiNjN2M3Y2NcIiBsaW5lQ29sb3I9XCIjMjk3OWZmXCI+PC91LWRpdmlkZXI+XHJcblx0XHRcdDwvdmlldz5cclxuXHRcdFx0PHZpZXcgY2xhc3M9XCJvdGhlci1sb2dpbi10eXBlXCI+XHJcblx0XHRcdFx0PHZpZXcgY2xhc3M9XCJvdGhlclwiIEBjbGljaz1cIm9wZW5Mb2dpbk9yUmVnaXN0ZXIoMylcIj5cclxuXHRcdFx0XHRcdDx1LWljb24gbmFtZT1cInBob25lXCIgY29sb3I9XCIjMjk3OWZmXCIgc2l6ZT1cIjIwXCI+PC91LWljb24+XHJcblx0XHRcdFx0PC92aWV3PlxyXG5cclxuXHRcdFx0XHQ8dmlldyBjbGFzcz1cIm90aGVyXCIgQGNsaWNrPVwibG9naW5SZXF1ZXN0KClcIiBzdHlsZT1cIm1hcmdpbi1sZWZ0OiAyMHB4O1wiPlxyXG5cdFx0XHRcdFx0PHUtaWNvbiBuYW1lPVwid2VpeGluLWZpbGxcIiBjb2xvcj1cIiMyOTc5ZmZcIiBzaXplPVwiMjBcIj48L3UtaWNvbj5cclxuXHRcdFx0XHQ8L3ZpZXc+XHJcblx0XHRcdDwvdmlldz5cclxuXHJcblx0XHQ8L3ZpZXc+XHJcblx0XHQ8dS1wb3B1cCA6Y2xvc2VhYmxlPVwidHJ1ZVwiIEBjbG9zZT1cImNsb3NlUG9wXCJcclxuXHRcdFx0Y3VzdG9tU3R5bGU9XCJib3JkZXItdG9wLWxlZnQtcmFkaXVzOiAxMHB4O2JvcmRlci10b3AtcmlnaHQtcmFkaXVzOiAxMHB4O1wiIG1vZGU9XCJib3R0b21cIiA6c2hvdz1cInBvcHVwU2hvd1wiPlxyXG5cdFx0XHQ8dmlldyBjbGFzcz1cImNvbnRlbnRcIj5cclxuXHRcdFx0XHQ8dmlldyB2LWlmPVwic2luZ0ZsYWc9PTFcIiBjbGFzcz1cInRleHQtdGl0bGVcIj7otKblj7flr4bnoIHnmbvlvZU8L3ZpZXc+XHJcblx0XHRcdFx0PHZpZXcgdi1pZj1cInNpbmdGbGFnPT0yXCIgY2xhc3M9XCJ0ZXh0LXRpdGxlXCI+5rOo5YaMPC92aWV3PlxyXG5cdFx0XHRcdDx2aWV3IHYtaWY9XCJzaW5nRmxhZz09M1wiIGNsYXNzPVwidGV4dC10aXRsZVwiPumqjOivgeeggeeZu+W9lTwvdmlldz5cclxuXHRcdFx0XHQ8dmlldyBjbGFzcz1cImxvZ2luLWJvZHlcIj5cclxuXHRcdFx0XHRcdDx1LS1pbnB1dCB2LW1vZGVsPVwibG9naW5Gb3JtLnVzZXJOYW1lXCIgcGxhY2Vob2xkZXI9XCLor7fovpPlhaXotKblj7dcIiBjbGFzcz1cImlucHV0IHUtZmxleCBhbGlnbi1jZW50ZXJcIlxyXG5cdFx0XHRcdFx0XHRwcmVmaXhJY29uPVwiYWNjb3VudC1maWxsXCIgcHJlZml4SWNvblN0eWxlPVwiZm9udC1zaXplOiAyNHB4O2NvbG9yOiAjMDA3QUZGXCI+PC91LS1pbnB1dD5cclxuXHJcblx0XHRcdFx0XHQ8dS0taW5wdXQgdi1pZj1cInNpbmdGbGFnPT0xIHx8IHNpbmdGbGFnPT0yXCIgdi1tb2RlbD1cImxvZ2luRm9ybS5wYXNzV29yZFwiIHBsYWNlaG9sZGVyPVwi6K+36L6T5YWl5a+G56CBXCJcclxuXHRcdFx0XHRcdFx0Y2xhc3M9XCJpbnB1dCB1LWZsZXggYWxpZ24tY2VudGVyXCIgcHJlZml4SWNvbj1cImxvY2stZmlsbFwiXHJcblx0XHRcdFx0XHRcdHByZWZpeEljb25TdHlsZT1cImZvbnQtc2l6ZTogMjRweDtjb2xvcjogIzAwN0FGRlwiIDpwYXNzd29yZD1cIiFpc1RleHRcIj5cclxuXHRcdFx0XHRcdFx0PHRlbXBsYXRlIHNsb3Q9XCJzdWZmaXhcIj5cclxuXHRcdFx0XHRcdFx0XHQ8dS1pY29uIG5hbWU9XCJleWUtZmlsbFwiIEBjbGljaz1cImNoYW5nZVR5cGUoZmFsc2UpXCIgY29sb3I9XCIjMDA3QUZGXCIgc2l6ZT1cIjIyXCIgdi1pZj1cImlzVGV4dFwiPlxyXG5cdFx0XHRcdFx0XHRcdDwvdS1pY29uPlxyXG5cdFx0XHRcdFx0XHRcdDx1LWljb24gbmFtZT1cImV5ZS1vZmZcIiBAY2xpY2s9XCJjaGFuZ2VUeXBlKHRydWUpXCIgY29sb3I9XCIjMDA3QUZGXCIgc2l6ZT1cIjIyXCIgdi1lbHNlPjwvdS1pY29uPlxyXG5cdFx0XHRcdFx0XHQ8L3RlbXBsYXRlPlxyXG5cdFx0XHRcdFx0PC91LS1pbnB1dD5cclxuXHJcblx0XHRcdFx0XHQ8dS0taW5wdXQgdi1pZj1cInNpbmdGbGFnPT0yXCIgdi1tb2RlbD1cImxvZ2luRm9ybS5jb25QYXNzV29yZFwiIHBsYWNlaG9sZGVyPVwi6K+356Gu6K6k5a+G56CBXCJcclxuXHRcdFx0XHRcdFx0Y2xhc3M9XCJpbnB1dCB1LWZsZXggYWxpZ24tY2VudGVyXCIgcHJlZml4SWNvbj1cImxvY2stZmlsbFwiXHJcblx0XHRcdFx0XHRcdHByZWZpeEljb25TdHlsZT1cImZvbnQtc2l6ZTogMjRweDtjb2xvcjogIzAwN0FGRlwiIDpwYXNzd29yZD1cIiFpc1RleHRcIj5cclxuXHRcdFx0XHRcdFx0PHRlbXBsYXRlIHNsb3Q9XCJzdWZmaXhcIj5cclxuXHRcdFx0XHRcdFx0XHQ8dS1pY29uIG5hbWU9XCJleWUtZmlsbFwiIEBjbGljaz1cImNoYW5nZVR5cGUoZmFsc2UpXCIgY29sb3I9XCIjMDA3QUZGXCIgc2l6ZT1cIjIyXCIgdi1pZj1cImlzVGV4dFwiPlxyXG5cdFx0XHRcdFx0XHRcdDwvdS1pY29uPlxyXG5cdFx0XHRcdFx0XHRcdDx1LWljb24gbmFtZT1cImV5ZS1vZmZcIiBAY2xpY2s9XCJjaGFuZ2VUeXBlKHRydWUpXCIgY29sb3I9XCIjMDA3QUZGXCIgc2l6ZT1cIjIyXCIgdi1lbHNlPjwvdS1pY29uPlxyXG5cdFx0XHRcdFx0XHQ8L3RlbXBsYXRlPlxyXG5cdFx0XHRcdFx0PC91LS1pbnB1dD5cclxuXHRcdFx0XHRcdDx1LS1pbnB1dCB2LWlmPVwic2luZ0ZsYWc9PTNcIiB2LW1vZGVsPVwibG9naW5Gb3JtLnZhbGlzbXNDb2RlXCIgcGxhY2Vob2xkZXI9XCLor7fovpPlhaXpqozor4HnoIFcIlxyXG5cdFx0XHRcdFx0XHRjbGFzcz1cImlucHV0IHUtZmxleCBhbGlnbi1jZW50ZXJcIiBwcmVmaXhJY29uPVwiY2hhdC1maWxsXCJcclxuXHRcdFx0XHRcdFx0cHJlZml4SWNvblN0eWxlPVwiZm9udC1zaXplOiAyNHB4O2NvbG9yOiAjMDA3QUZGXCI+XHJcblx0XHRcdFx0XHRcdDx0ZW1wbGF0ZSBzbG90PVwic3VmZml4XCI+XHJcblx0XHRcdFx0XHRcdFx0PHUtY29kZSByZWY9XCJ1Q29kZVwiIEBjaGFuZ2U9XCJjb2RlQ2hhbmdlXCIgOnNlY29uZHM9XCJhbGl5dW5TbXNUaW1lc1wiIGNoYW5nZVRleHQ9XCJY56eS6YeN5paw6I635Y+WXCJcclxuXHRcdFx0XHRcdFx0XHRcdDprZWVwUnVubmluZz1cImtlZXBSdW5uaW5nXCIgdW5pcXVlS2V5PVwibG9naW5cIj48L3UtY29kZT5cclxuXHJcblx0XHRcdFx0XHRcdFx0PHUtYnV0dG9uIHN0eWxlPVwiYmFja2dyb3VuZC1jb2xvcjogIzAwN0FGRjtjb2xvcjogI0ZGRkZGRjtcIiBAdGFwPVwiZ2V0Q29kZVwiIDp0ZXh0PVwic21zVGlwc1wiXHJcblx0XHRcdFx0XHRcdFx0XHRzaXplPVwibWluaVwiPjwvdS1idXR0b24+XHJcblx0XHRcdFx0XHRcdDwvdGVtcGxhdGU+XHJcblx0XHRcdFx0XHQ8L3UtLWlucHV0PlxyXG5cclxuXHRcdFx0XHQ8L3ZpZXc+XHJcblx0XHRcdFx0PHZpZXcgQGNsaWNrPVwib3BlblZlcmlmeVwiIHYtaWY9XCJzaW5nRmxhZz09MSB8fCBzaW5nRmxhZz09M1wiIGNsYXNzPVwiYnV0LWNvbm1pcmVcIj7nq4vljbPnmbvlvZU8L3ZpZXc+XHJcblx0XHRcdFx0PHZpZXcgQGNsaWNrPVwib3BlblZlcmlmeVwiIHYtaWY9XCJzaW5nRmxhZz09MlwiIGNsYXNzPVwiYnV0LWNvbm1pcmVcIj7nq4vljbPms6jlhow8L3ZpZXc+XHJcblx0XHRcdDwvdmlldz5cclxuXHRcdDwvdS1wb3B1cD5cclxuXHJcblx0XHQ8VmVyaWZ5IEBzdWNjZXNzPVwidmVyaWZ5U3VjY2Vzc1wiIDptb2RlPVwiJ3BvcCdcIiA6Y2FwdGNoYVR5cGU9XCInYmxvY2tQdXp6bGUnXCJcclxuXHRcdFx0OmltZ1NpemU9XCJ7IHdpZHRoOiAnMzMwcHgnLCBoZWlnaHQ6ICcxNTVweCcgfVwiIHJlZj1cInZlcmlmeVwiPjwvVmVyaWZ5PlxyXG5cdDwvdmlldz5cclxuPC90ZW1wbGF0ZT5cclxuXHJcbjxzY3JpcHQ+XHJcblx0aW1wb3J0IHJlcXVlc3QgZnJvbSBcIi4uLy4uLy4uL3JlcXVlc3QvcmVxdWVzdC5qc1wiO1xyXG5cdGltcG9ydCB1dGlsIGZyb20gXCIuLi8uLi8uLi91dGlsL3V0aWwuanNcIjtcclxuXHQvLyAjaWZuZGVmIE1QLVdFSVhJTlxyXG5cdGltcG9ydCBWZXJpZnkgZnJvbSBcIkAvbm9kZV9tb2R1bGVzL1ZlcmlmaXRpb24vVmVyaWZ5XCI7XHJcblx0Ly8gI2VuZGlmXHJcblxyXG5cdGV4cG9ydCBkZWZhdWx0IHtcclxuXHRcdC8vICNpZm5kZWYgTVAtV0VJWElOXHJcblx0XHRjb21wb25lbnRzOiB7XHJcblx0XHRcdFZlcmlmeVxyXG5cdFx0fSxcclxuXHRcdC8vICNlbmRpZlxyXG5cclxuXHRcdGRhdGEoKSB7XHJcblx0XHRcdHJldHVybiB7XHJcblx0XHRcdFx0YXZhdGFyVXJsOiB1dGlsLmRlZmF1bHRBdmF0YXIoKSxcclxuXHRcdFx0XHRuaWNrbmFtZTogJycsXHJcblx0XHRcdFx0c3RhdHVzQmFySGVpZ2h0OiAwLFxyXG5cdFx0XHRcdGxvZ29JbWc6ICdodHRwczovL3l1YW4tYWkub3NzLWNuLWJlaWppbmcuYWxpeXVuY3MuY29tL2xvZ28ucG5nJyxcclxuXHRcdFx0XHR3ZUNoYXRJbmZvOiB7XHJcblx0XHRcdFx0XHR3ZWljaGF0X25hbWU6ICcnLFxyXG5cdFx0XHRcdFx0d2VpY2hhdF9ub3RpY2U6ICcnXHJcblx0XHRcdFx0fSxcclxuXHRcdFx0XHRsb2dpbkZvcm06IHtcclxuXHRcdFx0XHRcdHVzZXJOYW1lOiAnJyxcclxuXHRcdFx0XHRcdHBhc3NXb3JkOiAnJyxcclxuXHRcdFx0XHRcdGNvblBhc3NXb3JkOiAnJyxcclxuXHRcdFx0XHRcdHZhbGlzbXNDb2RlOiAnJyxcclxuXHRcdFx0XHRcdGNvZGU6ICcnXHJcblx0XHRcdFx0fSxcclxuXHRcdFx0XHRzaG93OiBmYWxzZSxcclxuXHRcdFx0XHRpc1NlbGVjdEltYWdlOiBmYWxzZSxcclxuXHRcdFx0XHR0aXRsZTogJycsXHJcblx0XHRcdFx0ZGVzYzogJycsXHJcblx0XHRcdFx0bG9hZFRpdGxlOiB0cnVlLFxyXG5cdFx0XHRcdGlzYWdyZWVVOiBmYWxzZSxcclxuXHRcdFx0XHRwb3B1cFNob3c6IGZhbHNlLFxyXG5cdFx0XHRcdHBhc3N3b3JkSWNvbjogdHJ1ZSxcclxuXHRcdFx0XHRpc1RleHQ6IGZhbHNlLCAvL+WQjue9ruWbvuagh1xyXG5cdFx0XHRcdHNpbmdGbGFnOiAwLCAvLzHmoIfor4bnmbvlvZUsMuagh+ivhuazqOWGjCwz6KGo56S66aqM6K+B56CB55m75b2VXHJcblx0XHRcdFx0c21zVGlwczogXCLojrflj5bpqozor4HnoIFcIixcclxuXHRcdFx0XHRjb3VudGRvd246IDAsXHJcblx0XHRcdFx0a2VlcFJ1bm5pbmc6IHRydWUsXHJcblx0XHRcdFx0YWxpeXVuU21zVGltZXM6IDYwLFxyXG5cdFx0XHRcdHVzZXJJbmZvOiB7fVxyXG5cdFx0XHR9XHJcblx0XHR9LFxyXG5cdFx0b25Mb2FkKCkge1xyXG5cdFx0XHQvLyAjaWZkZWYgTVAtV0VJWElOXHJcblx0XHRcdHVuaS5uYXZpZ2F0ZVRvKHtcclxuXHRcdFx0XHR1cmw6ICcuL2xvZ2luJ1xyXG5cdFx0XHR9KVxyXG5cdFx0XHR0aGlzLmlzTG9naW4oKVxyXG5cdFx0XHR0aGlzLmdldENhY2hlQ29udGVudCgpXHJcblx0XHRcdHRoaXMuZ2V0U3RhdHVzQmFySGVpZ2h0KClcclxuXHRcdFx0Ly8gI2VuZGlmXHJcblx0XHR9LFxyXG5cdFx0bWV0aG9kczoge1xyXG5cdFx0XHRjb2RlQ2hhbmdlKHRleHQpIHtcclxuXHRcdFx0XHR0aGlzLnNtc1RpcHMgPSB0ZXh0O1xyXG5cdFx0XHR9LFxyXG5cdFx0XHRnZXRDb2RlKCkge1xyXG5cdFx0XHRcdGlmICh0aGlzLiRyZWZzLnVDb2RlLmNhbkdldENvZGUpIHtcclxuXHRcdFx0XHRcdHVuaS5zaG93TG9hZGluZyh7XHJcblx0XHRcdFx0XHRcdHRpdGxlOiAn5q2j5Zyo6I635Y+W6aqM6K+B56CBJ1xyXG5cdFx0XHRcdFx0fSlcclxuXHRcdFx0XHRcdHJlcXVlc3QoJycsICcvYXV0aG9yaXphdGlvbi9yZWdpc3Rlci9zZW5kQ21zQ29kZScsICdQT1NUJywgdGhpcy5sb2dpbkZvcm0sIHt9KS50aGVuKHJlcyA9PiB7XHJcblx0XHRcdFx0XHRcdHV0aWwubWVzc2FnZShyZXMubXNnKVxyXG5cdFx0XHRcdFx0XHRpZiAocmVzLmNvZGUgPT0gMjAwKSB7XHJcblx0XHRcdFx0XHRcdFx0dGhpcy4kcmVmcy51Q29kZS5zdGFydCgpO1xyXG5cdFx0XHRcdFx0XHR9XHJcblx0XHRcdFx0XHR9KVxyXG5cdFx0XHRcdH1cclxuXHJcblx0XHRcdH0sXHJcblx0XHRcdGdldEFsaXl1blNtc1RpbWVzKCkge1xyXG5cdFx0XHRcdHRoaXMuYWxpeXVuU21zVGltZXMgPSB1bmkuZ2V0U3RvcmFnZVN5bmMoJ2Jhc2VDb25maWcnKS5hbGl5dW5fc21zX3RpbWVzXHJcblx0XHRcdH0sXHJcblx0XHRcdGNsb3NlUG9wKCkge1xyXG5cdFx0XHRcdHRoaXMucG9wdXBTaG93ID0gZmFsc2VcclxuXHRcdFx0fSxcclxuXHRcdFx0Z2V0Q2FjaGVDb250ZW50KCkge1xyXG5cdFx0XHRcdHJlcXVlc3QoJycsICcveXVhbi9haS93L3N0cmVhbS9jb25maWdJbmZvJywgJ1BPU1QnLCB7fSwge30pLnRoZW4ocmVzID0+IHtcclxuXHRcdFx0XHRcdGlmIChyZXMuY29kZSA9PSAyMDApIHtcclxuXHRcdFx0XHRcdFx0dGhpcy53ZUNoYXRJbmZvID0gcmVzLmRhdGE7XHJcblx0XHRcdFx0XHRcdHVuaS5zZXRTdG9yYWdlU3luYygnYmFzZUNvbmZpZycsIHJlcy5kYXRhKVxyXG5cdFx0XHRcdFx0fVxyXG5cdFx0XHRcdH0pXHJcblx0XHRcdH0sXHJcblx0XHRcdHRvVXNlckNlbnRlcigpIHtcclxuXHRcdFx0XHR1bmkuc3dpdGNoVGFiKHtcclxuXHRcdFx0XHRcdHVybDogJy9wYWdlcy9tYWluL21pbmVmcmFnbWVudC9taW5lZnJhZ21lbnQnXHJcblx0XHRcdFx0fSlcclxuXHRcdFx0fSxcclxuXHRcdFx0aXNMb2dpbigpIHtcclxuXHRcdFx0XHRpZiAodXRpbC5pc05vdEJsYW5rKHVuaS5nZXRTdG9yYWdlU3luYygnYXV0aG9yaXphdGlvbicpKSkge1xyXG5cdFx0XHRcdFx0dGhpcy50b1VzZXJDZW50ZXIoKVxyXG5cdFx0XHRcdH1cclxuXHRcdFx0fSxcclxuXHRcdFx0LyoqXHJcblx0XHRcdCAqIOi/lOWbnuS4iuS4gOmhtVxyXG5cdFx0XHQgKi9cclxuXHRcdFx0YmFjaygpIHtcclxuXHRcdFx0XHR1bmkubmF2aWdhdGVCYWNrKHtcclxuXHRcdFx0XHRcdGRlbHRhOiAxXHJcblx0XHRcdFx0fSk7XHJcblx0XHRcdH0sXHJcblx0XHRcdGNoYW5nZVR5cGUoZmxhZykge1xyXG5cdFx0XHRcdHRoaXMuaXNUZXh0ID0gZmxhZ1xyXG5cdFx0XHR9LFxyXG5cdFx0XHRqdW1wUGFnZShlKSB7XHJcblx0XHRcdFx0dW5pLm5hdmlnYXRlVG8oe1xyXG5cdFx0XHRcdFx0dXJsOiBlXHJcblx0XHRcdFx0fSlcclxuXHRcdFx0fSxcclxuXHRcdFx0b3BlbigpIHtcclxuXHRcdFx0XHQvLyBjb25zb2xlLmxvZygnb3BlbicpO1xyXG5cdFx0XHR9LFxyXG5cdFx0XHRpc0FncmVlKCkge1xyXG5cdFx0XHRcdGlmICh0aGlzLmlzYWdyZWVVKSB7XHJcblx0XHRcdFx0XHR0aGlzLmlzYWdyZWVVID0gZmFsc2VcclxuXHRcdFx0XHR9IGVsc2Uge1xyXG5cdFx0XHRcdFx0dGhpcy5pc2FncmVlVSA9IHRydWVcclxuXHRcdFx0XHR9XHJcblx0XHRcdH0sXHJcblx0XHRcdGNsb3NlKCkge1xyXG5cdFx0XHRcdHRoaXMuc2hvdyA9IGZhbHNlXHJcblx0XHRcdFx0Ly8gY29uc29sZS5sb2coJ2Nsb3NlJyk7XHJcblx0XHRcdH0sXHJcblx0XHRcdGdldFN0YXR1c0JhckhlaWdodCgpIHtcclxuXHRcdFx0XHR0aGlzLnN0YXR1c0JhckhlaWdodCA9IHVuaS5nZXRTeXN0ZW1JbmZvU3luYygpLnN0YXR1c0JhckhlaWdodFxyXG5cdFx0XHR9LFxyXG5cdFx0XHRvbkNob29zZUF2YXRhcihlKSB7XHJcblx0XHRcdFx0dGhpcy5hdmF0YXJVcmwgPSBlLmRldGFpbC5hdmF0YXJVcmxcclxuXHRcdFx0XHR0aGlzLmlzU2VsZWN0SW1hZ2UgPSB0cnVlXHJcblx0XHRcdH0sXHJcblx0XHRcdGdldFVzZXJJbmZvKCkge1xyXG5cdFx0XHRcdHJlcXVlc3QoJycsICcvdXNlci9nZXRVc2VySW5mbycsICdHRVQnLCB7fSwge30pLnRoZW4ocmVzID0+IHtcclxuXHJcblx0XHRcdFx0XHRpZiAocmVzLmNvZGUgPT0gMjAwKSB7XHJcblx0XHRcdFx0XHRcdHRoaXMudXNlckluZm8gPSByZXMuZGF0YVxyXG5cdFx0XHRcdFx0XHR1bmkuc2V0U3RvcmFnZVN5bmMoJ3VzZXJJbmZvJywgdGhpcy51c2VySW5mbylcclxuXHRcdFx0XHRcdFx0dW5pLnN3aXRjaFRhYih7XHJcblx0XHRcdFx0XHRcdFx0dXJsOiAnLi4vbWluZWZyYWdtZW50L21pbmVmcmFnbWVudCdcclxuXHRcdFx0XHRcdFx0fSlcclxuXHRcdFx0XHRcdH0gZWxzZSB7XHJcblx0XHRcdFx0XHRcdHV0aWwubWVzc2FnZShcIuS4quS6uuS/oeaBr+iOt+WPluWksei0pVwiLCAnZXJyb3InKVxyXG5cdFx0XHRcdFx0fVxyXG5cclxuXHJcblx0XHRcdFx0fSlcclxuXHRcdFx0fSxcclxuXHRcdFx0b3BlbkxvZ2luT3JSZWdpc3RlcihmbGFnKSB7XHJcblx0XHRcdFx0dGhpcy5zaW5nRmxhZyA9IGZsYWdcclxuXHRcdFx0XHRpZiAoIXRoaXMuaXNhZ3JlZVUpIHtcclxuXHRcdFx0XHRcdHV0aWwubWVzc2FnZShcIuivt+WFiOmYheivu+OAiuS9v+eUqOWNj+iuruOAi+S4juOAiueUqOaIt+WNj+iuruOAi1wiKTtcclxuXHRcdFx0XHRcdHJldHVybjtcclxuXHRcdFx0XHR9XHJcblx0XHRcdFx0aWYgKHV0aWwuaXNCbGFuayh0aGlzLnNpbmdGbGFnKSB8fCB0aGlzLnNpbmdGbGFnID09IDApIHtcclxuXHRcdFx0XHRcdHV0aWwubWVzc2FnZShcIuivt+mAieaLqeeZu+mZhuaWueW8j1wiKTtcclxuXHRcdFx0XHRcdHJldHVybjtcclxuXHRcdFx0XHR9XHJcblx0XHRcdFx0dGhpcy5wb3B1cFNob3cgPSB0cnVlXHJcblx0XHRcdH0sXHJcblx0XHRcdHBhc3N3b3JkTG9naW4oKSB7XHJcblx0XHRcdFx0dXRpbC5tZXNzYWdlKFwi55m76ZmG5LitXCIsIFwibG9hZGRpbmdcIilcclxuXHRcdFx0XHQvL+agoemqjFxyXG5cdFx0XHRcdGlmICh1dGlsLmlzQmxhbmsodGhpcy5sb2dpbkZvcm0udXNlck5hbWUpIHx8XHJcblx0XHRcdFx0XHR1dGlsLmlzQmxhbmsodGhpcy5sb2dpbkZvcm0ucGFzc1dvcmQpKSB7XHJcblx0XHRcdFx0XHR1dGlsLm1lc3NhZ2UoXCLotKblj7flr4bnoIHkuI3lj6/kuLrnqbpcIik7XHJcblx0XHRcdFx0XHRyZXR1cm47XHJcblx0XHRcdFx0fVxyXG5cdFx0XHRcdGxldCBwYXJhbSA9IHtcclxuXHRcdFx0XHRcdCdjb2RlJzogdGhpcy5sb2dpbkZvcm0uY29kZSxcclxuXHRcdFx0XHRcdCd1c2VybmFtZSc6IHRoaXMubG9naW5Gb3JtLnVzZXJOYW1lLFxyXG5cdFx0XHRcdFx0J3Bhc3N3b3JkJzogdGhpcy5sb2dpbkZvcm0ucGFzc1dvcmRcclxuXHRcdFx0XHR9XHJcblx0XHRcdFx0cmVxdWVzdCgnJywgJy9sb2dpbicsICdQT1NUJywgcGFyYW0sIHt9KS50aGVuKHJlcyA9PiB7XHJcblx0XHRcdFx0XHRjb25zb2xlLmxvZyhyZXMudG9rZW4pXHJcblx0XHRcdFx0XHRpZiAocmVzLmNvZGUgPT0gMjAwKSB7XHJcblx0XHRcdFx0XHRcdHVuaS5zZXRTdG9yYWdlU3luYygnYXV0aG9yaXphdGlvbicsIHJlcy50b2tlbilcclxuXHRcdFx0XHRcdFx0dGhpcy5nZXRVc2VySW5mbygpXHJcblx0XHRcdFx0XHR9IGVsc2UgaWYgKHJlcy5jb2RlID09IDUwMCkge1xyXG5cdFx0XHRcdFx0XHR1dGlsLm1lc3NhZ2UocmVzLm1zZyk7XHJcblx0XHRcdFx0XHR9IGVsc2Uge1xyXG5cdFx0XHRcdFx0XHR1dGlsLm1lc3NhZ2UoXCLmnKrnn6XplJnor69cIik7XHJcblx0XHRcdFx0XHR9XHJcblx0XHRcdFx0XHR1bmkuaGlkZUxvYWRpbmcoKVxyXG5cdFx0XHRcdH0pXHJcblx0XHRcdH0sXHJcblx0XHRcdHJlZ2lzdGVyKCkge1xyXG5cdFx0XHRcdHV0aWwubWVzc2FnZShcIueZu+mZhuS4rVwiLCBcImxvYWRkaW5nXCIpXHJcblx0XHRcdFx0Ly/moKHpqoxcclxuXHRcdFx0XHRpZiAodXRpbC5pc0JsYW5rKHRoaXMubG9naW5Gb3JtLnVzZXJOYW1lKSB8fFxyXG5cdFx0XHRcdFx0dXRpbC5pc0JsYW5rKHRoaXMubG9naW5Gb3JtLnBhc3NXb3JkKSkge1xyXG5cdFx0XHRcdFx0dXRpbC5tZXNzYWdlKFwi6LSm5Y+35a+G56CB5LiN5Y+v5Li656m6XCIpO1xyXG5cdFx0XHRcdFx0cmV0dXJuO1xyXG5cdFx0XHRcdH1cclxuXHRcdFx0XHRpZiAodGhpcy5sb2dpbkZvcm0ucGFzc1dvcmQgIT09IHRoaXMubG9naW5Gb3JtLmNvblBhc3NXb3JkKSB7XHJcblx0XHRcdFx0XHR1dGlsLm1lc3NhZ2UoXCLkuKTmrKHlr4bnoIHkuI3nm7jlkIxcIik7XHJcblx0XHRcdFx0XHRyZXR1cm47XHJcblx0XHRcdFx0fVxyXG5cdFx0XHRcdGxldCBwYXJhbSA9IHtcclxuXHRcdFx0XHRcdCdjb2RlJzogdGhpcy5sb2dpbkZvcm0uY29kZSxcclxuXHRcdFx0XHRcdCd1c2VybmFtZSc6IHRoaXMubG9naW5Gb3JtLnVzZXJOYW1lLFxyXG5cdFx0XHRcdFx0J3Bhc3N3b3JkJzogdGhpcy5sb2dpbkZvcm0ucGFzc1dvcmQsXHJcblx0XHRcdFx0XHQnY29uZmlybVBhc3N3b3JkJzogdGhpcy5sb2dpbkZvcm0uY29uUGFzc1dvcmRcclxuXHRcdFx0XHR9XHJcblx0XHRcdFx0cmVxdWVzdCgnJywgJy9yZWdpc3RlcicsICdQT1NUJywgcGFyYW0sIHt9KS50aGVuKHJlcyA9PiB7XHJcblx0XHRcdFx0XHRpZiAocmVzLmNvZGUgPT0gMjAwKSB7XHJcblx0XHRcdFx0XHRcdHRoaXMuc2luZ0ZsYWcgPSAxXHJcblx0XHRcdFx0XHR9IGVsc2UgaWYgKHJlcy5jb2RlID09IDUwMCkge1xyXG5cdFx0XHRcdFx0XHR1dGlsLm1lc3NhZ2UocmVzLm1zZyk7XHJcblx0XHRcdFx0XHR9IGVsc2Uge1xyXG5cdFx0XHRcdFx0XHR1dGlsLm1lc3NhZ2UoXCLmnKrnn6XplJnor69cIik7XHJcblx0XHRcdFx0XHR9XHJcblx0XHRcdFx0XHR1bmkuaGlkZUxvYWRpbmcoKVxyXG5cdFx0XHRcdH0pXHJcblx0XHRcdH0sXHJcblx0XHRcdHNtc0NvZGUoKSB7XHJcblx0XHRcdFx0dXRpbC5tZXNzYWdlKFwi55m76ZmG5LitXCIsIFwibG9hZGRpbmdcIilcclxuXHRcdFx0XHQvL+agoemqjFxyXG5cdFx0XHRcdGlmICh1dGlsLmlzQmxhbmsodGhpcy5sb2dpbkZvcm0udXNlck5hbWUpKSB7XHJcblx0XHRcdFx0XHR1dGlsLm1lc3NhZ2UoXCLotKblj7fkuI3lj6/kuLrnqbpcIik7XHJcblx0XHRcdFx0XHRyZXR1cm47XHJcblx0XHRcdFx0fVxyXG5cdFx0XHRcdGlmICh1dGlsLmlzQmxhbmsodGhpcy5sb2dpbkZvcm0udmFsaXNtc0NvZGUpKSB7XHJcblx0XHRcdFx0XHR1dGlsLm1lc3NhZ2UoXCLpqozor4HnoIHkuI3lj6/kuLrnqbpcIik7XHJcblx0XHRcdFx0XHRyZXR1cm47XHJcblx0XHRcdFx0fVxyXG5cdFx0XHRcdGxldCBwYXJhbSA9IHtcclxuXHRcdFx0XHRcdCdjb2RlJzogdGhpcy5sb2dpbkZvcm0uY29kZSxcclxuXHRcdFx0XHRcdCd1c2VyTmFtZSc6IHRoaXMubG9naW5Gb3JtLnVzZXJOYW1lLFxyXG5cdFx0XHRcdFx0J3ZhbGlzbXNDb2RlJzogdGhpcy5sb2dpbkZvcm0udmFsaXNtc0NvZGVcclxuXHRcdFx0XHR9XHJcblx0XHRcdFx0cmVxdWVzdCgnJywgJy9hdXRob3JpemF0aW9uL3JlZ2lzdGVyL3Ntc0xvZ2luJywgJ1BPU1QnLCBwYXJhbSwge30pLnRoZW4ocmVzID0+IHtcclxuXHRcdFx0XHRcdGlmIChyZXMuY29kZSA9PSAyMDApIHtcclxuXHRcdFx0XHRcdFx0Y29uc29sZS5sb2cocmVzKVxyXG5cdFx0XHRcdFx0XHR1bmkuc2V0U3RvcmFnZVN5bmMoJ2F1dGhvcml6YXRpb24nLCByZXMuZGF0YS50b2tlbilcclxuXHRcdFx0XHRcdFx0dW5pLnNldFN0b3JhZ2VTeW5jKCd1c2VySW5mbycsIHJlcy5kYXRhLnVzZXJJbmZvKVxyXG5cdFx0XHRcdFx0XHR0aGlzLnRvVXNlckNlbnRlcigpXHJcblx0XHRcdFx0XHR9IGVsc2UgaWYgKHJlcy5jb2RlID09IDUwMCkge1xyXG5cdFx0XHRcdFx0XHR1dGlsLm1lc3NhZ2UocmVzLm1zZyk7XHJcblx0XHRcdFx0XHR9IGVsc2Uge1xyXG5cdFx0XHRcdFx0XHR1dGlsLm1lc3NhZ2UoXCLmnKrnn6XplJnor69cIik7XHJcblx0XHRcdFx0XHR9XHJcblx0XHRcdFx0XHR1bmkuaGlkZUxvYWRpbmcoKVxyXG5cdFx0XHRcdH0pXHJcblx0XHRcdH0sXHJcblx0XHRcdG9wZW5WZXJpZnkoKSB7XHJcblx0XHRcdFx0XHJcblx0XHRcdFx0XHJcblx0XHRcdFx0XHJcblx0XHRcdFx0aWYgKHRoaXMuc2luZ0ZsYWcgPT0gMSkge1xyXG5cdFx0XHRcdFx0Ly/moKHpqoxcclxuXHRcdFx0XHRcdGlmICh1dGlsLmlzQmxhbmsodGhpcy5sb2dpbkZvcm0udXNlck5hbWUpIHx8XHJcblx0XHRcdFx0XHRcdHV0aWwuaXNCbGFuayh0aGlzLmxvZ2luRm9ybS5wYXNzV29yZCkpIHtcclxuXHRcdFx0XHRcdFx0dXRpbC5tZXNzYWdlKFwi6LSm5Y+35a+G56CB5LiN5Y+v5Li656m6XCIpO1xyXG5cdFx0XHRcdFx0XHRyZXR1cm47XHJcblx0XHRcdFx0XHR9XHJcblx0XHRcdFx0fSBlbHNlIGlmICh0aGlzLnNpbmdGbGFnID09IDIpIHtcclxuXHRcdFx0XHRcdC8v5qCh6aqMXHJcblx0XHRcdFx0XHRpZiAodXRpbC5pc0JsYW5rKHRoaXMubG9naW5Gb3JtLnVzZXJOYW1lKSB8fFxyXG5cdFx0XHRcdFx0XHR1dGlsLmlzQmxhbmsodGhpcy5sb2dpbkZvcm0ucGFzc1dvcmQpKSB7XHJcblx0XHRcdFx0XHRcdHV0aWwubWVzc2FnZShcIui0puWPt+WvhueggeS4jeWPr+S4uuepulwiKTtcclxuXHRcdFx0XHRcdFx0cmV0dXJuO1xyXG5cdFx0XHRcdFx0fVxyXG5cdFx0XHRcdFx0aWYgKHRoaXMubG9naW5Gb3JtLnBhc3NXb3JkICE9PSB0aGlzLmxvZ2luRm9ybS5jb25QYXNzV29yZCkge1xyXG5cdFx0XHRcdFx0XHR1dGlsLm1lc3NhZ2UoXCLkuKTmrKHlr4bnoIHkuI3nm7jlkIxcIik7XHJcblx0XHRcdFx0XHRcdHJldHVybjtcclxuXHRcdFx0XHRcdH1cclxuXHRcdFx0XHR9IGVsc2UgaWYgKHRoaXMuc2luZ0ZsYWcgPT0gMykge1xyXG5cdFx0XHRcdFx0Ly/moKHpqoxcclxuXHRcdFx0XHRcdGlmICh1dGlsLmlzQmxhbmsodGhpcy5sb2dpbkZvcm0udXNlck5hbWUpKSB7XHJcblx0XHRcdFx0XHRcdHV0aWwubWVzc2FnZShcIui0puWPt+S4jeWPr+S4uuepulwiKTtcclxuXHRcdFx0XHRcdFx0cmV0dXJuO1xyXG5cdFx0XHRcdFx0fVxyXG5cdFx0XHRcdFx0aWYgKHV0aWwuaXNCbGFuayh0aGlzLmxvZ2luRm9ybS52YWxpc21zQ29kZSkpIHtcclxuXHRcdFx0XHRcdFx0dXRpbC5tZXNzYWdlKFwi6aqM6K+B56CB5LiN5Y+v5Li656m6XCIpO1xyXG5cdFx0XHRcdFx0XHRyZXR1cm47XHJcblx0XHRcdFx0XHR9XHJcblx0XHRcdFx0fSBlbHNlIHtcclxuXHRcdFx0XHRcdHV0aWwubWVzc2FnZShcIueZu+mZhuaWueW8j+mUmeivr1wiLCAnZXJyb3InKVxyXG5cdFx0XHRcdH1cclxuXHRcdFx0XHRcclxuXHRcdFx0XHRcclxuXHRcdFx0XHRcclxuXHRcdFx0XHR0aGlzLiRyZWZzLnZlcmlmeS5zaG93KCk7XHJcblx0XHRcdH0sXHJcblx0XHRcdHZlcmlmeVN1Y2Nlc3MocGFyYW1zKSB7XHJcblx0XHRcdFx0Ly/orqTor4HmiJDlip9cclxuXHRcdFx0XHR0aGlzLmxvZ2luRm9ybS5jb2RlID0gcGFyYW1zLmNhcHRjaGFWZXJpZmljYXRpb247XHJcblx0XHRcdFx0dGhpcy5sb2dpbk9yUmVnaXN0ZXIodGhpcy5zaW5nRmxhZyk7XHJcblx0XHRcdH0sXHJcblx0XHRcdGxvZ2luT3JSZWdpc3RlcihzaW5nRmxhZykge1xyXG5cdFx0XHRcdGlmICh0aGlzLnNpbmdGbGFnID09IDEpIHtcclxuXHRcdFx0XHRcdHRoaXMucGFzc3dvcmRMb2dpbigpXHJcblx0XHRcdFx0fSBlbHNlIGlmICh0aGlzLnNpbmdGbGFnID09IDIpIHtcclxuXHRcdFx0XHRcdHRoaXMucmVnaXN0ZXIoKVxyXG5cdFx0XHRcdH0gZWxzZSBpZiAodGhpcy5zaW5nRmxhZyA9PSAzKSB7XHJcblx0XHRcdFx0XHR0aGlzLnNtc0NvZGUoKVxyXG5cdFx0XHRcdH0gZWxzZSB7XHJcblx0XHRcdFx0XHR1dGlsLm1lc3NhZ2UoXCLnmbvpmYbmlrnlvI/plJnor69cIiwgJ2Vycm9yJylcclxuXHRcdFx0XHR9XHJcblx0XHRcdH0sXHJcblx0XHRcdGxvZ2luSnd0KGpzQ29kZSkge1xyXG5cdFx0XHRcdGxldCBwYXJhbSA9IHtcclxuXHRcdFx0XHRcdCdqc0NvZGUnOiBqc0NvZGUsXHJcblx0XHRcdFx0XHQnaW52aXRlQ29kZSc6IHVuaS5nZXRTdG9yYWdlU3luYygnaW52aXRhdGlvbkNvZGUnKVxyXG5cdFx0XHRcdH1cclxuXHRcdFx0XHRyZXF1ZXN0KCcnLCAnL2F1dGhvcml6YXRpb24vd3gvcmVnaXN0ZXJPckxvZ2luJywgJ1BPU1QnLCBwYXJhbSwge30pLnRoZW4ocmVzID0+IHtcclxuXHRcdFx0XHRcdGlmIChyZXMuY29kZSA9PSAyMDApIHtcclxuXHRcdFx0XHRcdFx0dW5pLnNldFN0b3JhZ2VTeW5jKCdhdXRob3JpemF0aW9uJywgcmVzLmRhdGEudG9rZW4pXHJcblx0XHRcdFx0XHRcdHVuaS5zZXRTdG9yYWdlU3luYygndXNlckluZm8nLCByZXMuZGF0YS51c2VySW5mbylcclxuXHRcdFx0XHRcdFx0dGhpcy50b1VzZXJDZW50ZXIoKVxyXG5cdFx0XHRcdFx0fSBlbHNlIHtcclxuXHRcdFx0XHRcdFx0dXRpbC5tZXNzYWdlKFwi55m75b2V5aSx6LSlLOivt+mHjeivlVwiLCAnZXJyb3InKVxyXG5cdFx0XHRcdFx0fVxyXG5cdFx0XHRcdFx0dW5pLmhpZGVMb2FkaW5nKClcclxuXHRcdFx0XHR9KVxyXG5cdFx0XHR9LFxyXG5cdFx0XHRsb2dpblJlcXVlc3QoKSB7XHJcblx0XHRcdFx0aWYgKCF0aGlzLmlzYWdyZWVVKSB7XHJcblx0XHRcdFx0XHR1dGlsLm1lc3NhZ2UoXCLor7flhYjpmIXor7vjgIrkvb/nlKjljY/orq7jgIvkuI7jgIrnlKjmiLfljY/orq7jgItcIik7XHJcblx0XHRcdFx0XHRyZXR1cm47XHJcblx0XHRcdFx0fVxyXG5cdFx0XHRcdGxldCByZWRpY3R1cmwgPSBlbmNvZGVVUklDb21wb25lbnQodW5pLmdldFN0b3JhZ2VTeW5jKCdiYXNlQ29uZmlnJykud3hfaDVfcmVkaXJlY3RfdXJpKTtcclxuXHRcdFx0XHRjb25zb2xlLmxvZyhyZWRpY3R1cmwpXHJcblx0XHRcdFx0bGV0IGFwcGlkID0gdW5pLmdldFN0b3JhZ2VTeW5jKCdiYXNlQ29uZmlnJykud3hfaDVfYXBwaWQ7XHJcblx0XHRcdFx0d2luZG93LmxvY2F0aW9uLmhyZWYgPSBcImh0dHBzOi8vb3Blbi53ZWl4aW4ucXEuY29tL2Nvbm5lY3Qvb2F1dGgyL2F1dGhvcml6ZT9hcHBpZD1cIiArIGFwcGlkICtcclxuXHRcdFx0XHRcdFwiJnJlZGlyZWN0X3VyaT1cIiArIHJlZGljdHVybCArIFwiJnJlc3BvbnNlX3R5cGU9Y29kZSZzY29wZT1zbnNhcGlfdXNlcmluZm8mc3RhdGU9U1RBVEUjd2VjaGF0X3JlZGlyZWN0XCI7XHJcblx0XHRcdH0sXHJcblx0XHR9XHJcblx0fVxyXG48L3NjcmlwdD5cclxuXHJcbjxzdHlsZSA+XHJcblx0cGFnZSB7XHJcblx0XHRiYWNrZ3JvdW5kOiAjRkZGRkZGO1xyXG5cdH1cclxuXHJcblxyXG5cclxuXHQvKiAvZGVlcC8udS1wb3B1cF9fY29udGVudCB7IFxyXG4gICAgICAgIGJhY2tncm91bmQtY29sb3I6ICMwMDAwMDAwMCAhaW1wb3J0YW50O1xyXG4gICAgfSAqL1xyXG5cdC5oZWFkIHtcclxuXHRcdC8qIGJveC1zaGFkb3c6IDBycHggMHJweCAxMnJweCAwcnB4IHJnYmEoMCwwLDAsMC4xNSk7ICovXHJcblx0XHRib3JkZXItcmFkaXVzOiA1MCU7XHJcblx0XHQvKiB3aWR0aDogMTUzcnB4OyAqL1xyXG5cdFx0bWFyZ2luLXRvcDogMTVycHg7XHJcblx0XHQvKiBoZWlnaHQ6IDE1M3JweDsgKi9cclxuXHRcdHBvc2l0aW9uOiByZWxhdGl2ZTtcclxuXHR9XHJcblxyXG5cdC5waG90b0JvcmRlciB7XHJcblx0XHR6LWluZGV4OiAxMDtcclxuXHRcdHBvc2l0aW9uOiBhYnNvbHV0ZTtcclxuXHRcdGJvdHRvbTogMDtcclxuXHRcdHJpZ2h0OiAwO1xyXG5cdFx0d2lkdGg6IDM3LjVycHg7XHJcblx0XHRoZWlnaHQ6IDM3LjVycHg7XHJcblx0XHR0ZXh0LWFsaWduOiBjZW50ZXI7XHJcblx0XHRib3JkZXItcmFkaXVzOiA1MCU7XHJcblx0XHRsZWZ0OiA3MnB4O1xyXG5cdFx0YmFja2dyb3VuZDogbGluZWFyLWdyYWRpZW50KDBkZWcsICM1OTlFRkYsICNDMzk5RkYpO1xyXG5cdH1cclxuXHJcblx0LnBob3RvSWNvbiB7XHJcblx0XHR3aWR0aDogMjJycHg7XHJcblx0XHRoZWlnaHQ6IDE3cnB4O1xyXG5cdH1cclxuXHJcblx0LmRpYWxvZyB7XHJcblx0XHR3aWR0aDogODB2dztcclxuXHRcdGJhY2tncm91bmQtY29sb3I6ICNmZmZmZmY7XHJcblx0XHRwYWRkaW5nOiA1MHJweCAzMnJweDtcclxuXHRcdGRpc3BsYXk6IGZsZXg7XHJcblx0XHRib3JkZXItcmFkaXVzOiAxOHJweDtcclxuXHRcdGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XHJcblx0XHRhbGlnbi1pdGVtczogY2VudGVyO1xyXG5cdFx0LyogcG9zaXRpb246IHJlbGF0aXZlOyAqL1xyXG5cdH1cclxuXHJcblx0LmRpYWxvZ0NvbWl0QnRuIHtcclxuXHRcdHdpZHRoOiAzMjBycHg7XHJcblx0XHRiYWNrZ3JvdW5kOiAjMzM4OEZGO1xyXG5cdFx0Ym9yZGVyLXJhZGl1czogNnJweDtcclxuXHRcdGZvbnQtc2l6ZTogMjdycHg7XHJcblx0XHRoZWlnaHQ6IDU2cnB4O1xyXG5cdFx0ZGlzcGxheTogZmxleDtcclxuXHRcdGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XHJcblx0XHRhbGlnbi1pdGVtczogY2VudGVyO1xyXG5cdFx0dGV4dC1hbGlnbjogY2VudGVyO1xyXG5cdFx0anVzdGlmeS1jb250ZW50OiBjZW50ZXI7XHJcblx0XHRjb2xvcjogd2hpdGU7XHJcblx0fVxyXG5cclxuXHQuY2xvc2VJbWcge1xyXG5cdFx0cmlnaHQ6IDA7XHJcblx0XHR3aWR0aDogMThycHg7XHJcblx0XHRoZWlnaHQ6IDE4cnB4O1xyXG5cdFx0cG9zaXRpb246IGFic29sdXRlO1xyXG5cdFx0dG9wOiAzMnJweDtcclxuXHRcdHJpZ2h0OiAzMnJweDtcclxuXHR9XHJcblxyXG5cdC5jb21pdEJ0biB7XHJcblx0XHR3aWR0aDogNDUlO1xyXG5cdFx0YmFja2dyb3VuZDogIzMzODhGRjtcclxuXHRcdGJvcmRlci1yYWRpdXM6IDEycnB4O1xyXG5cdFx0Zm9udC1zaXplOiAzNXJweDtcclxuXHRcdGZvbnQtd2VpZ2h0OiA1MDA7XHJcblx0XHRwYWRkaW5nOiAyNXJweDtcclxuXHRcdHRleHQtYWxpZ246IGNlbnRlcjtcclxuXHRcdGNvbG9yOiB3aGl0ZTtcclxuXHR9XHJcblxyXG5cdC5jYW5jZWxCdG4ge1xyXG5cdFx0d2lkdGg6IDQ1JTtcclxuXHRcdG1hcmdpbi10b3A6IDI3cnB4O1xyXG5cdFx0YmFja2dyb3VuZDogI2ZmZmZmZjtcclxuXHRcdGJvcmRlci1yYWRpdXM6IDEycnB4O1xyXG5cdFx0Zm9udC1zaXplOiAzNXJweDtcclxuXHRcdGZvbnQtd2VpZ2h0OiA1MDA7XHJcblx0XHR0ZXh0LWFsaWduOiBjZW50ZXI7XHJcblx0XHRwYWRkaW5nOiAyNXJweDtcclxuXHRcdGJvcmRlcjogIzQ5NEE0QyBzb2xpZCAxLjhycHg7XHJcblx0XHRjb2xvcjogIzQ5NEE0QztcclxuXHR9XHJcblxyXG5cdC5idG4ge1xyXG5cdFx0ZGlzcGxheTogZmxleDtcclxuXHRcdGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XHJcblx0XHRhbGlnbi1pdGVtczogY2VudGVyO1xyXG5cdFx0bWFyZ2luLXRvcDogMTcwcnB4O1xyXG5cdFx0d2lkdGg6IDEwMCU7XHJcblx0fVxyXG5cclxuXHQud2VDaGF0RGVzIHtcclxuXHRcdGZvbnQtc2l6ZTogMjdycHg7XHJcblx0XHRjb2xvcjogIzQ5NEE0QztcclxuXHRcdHdpZHRoOiA1MCU7XHJcblx0XHR0ZXh0LWFsaWduOiBjZW50ZXI7XHJcblx0XHRsaW5lLWhlaWdodDogMzFycHg7XHJcblx0XHRtYXJnaW4tdG9wOiAxNnJweDtcclxuXHR9XHJcblxyXG5cdC53ZUNoYXROYW1lIHtcclxuXHRcdGZvbnQtc2l6ZTogMzVycHg7XHJcblx0XHRmb250LXdlaWdodDogNzAwO1xyXG5cdFx0Y29sb3I6ICMxNDE3MUE7XHJcblx0XHRtYXJnaW4tdG9wOiAyNXJweDtcclxuXHR9XHJcblxyXG5cdC50b3BNYWluQmcge1xyXG5cdFx0d2lkdGg6IDEwMCU7XHJcblx0XHRoZWlnaHQ6IDQxMHJweDtcclxuXHR9XHJcblxyXG5cdC5tYWluIHtcclxuXHRcdHBvc2l0aW9uOiBhYnNvbHV0ZTtcclxuXHRcdHdpZHRoOiAxMDAlO1xyXG5cdFx0dG9wOiAwO1xyXG5cdFx0ZGlzcGxheTogZmxleDtcclxuXHRcdGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XHJcblx0XHRhbGlnbi1pdGVtczogY2VudGVyO1xyXG5cdH1cclxuXHJcblx0LnJvdyB7XHJcblx0XHRkaXNwbGF5OiBmbGV4O1xyXG5cdFx0ZmxleC1kaXJlY3Rpb246IHJvdztcclxuXHRcdGFsaWduLWl0ZW1zOiBjZW50ZXI7XHJcblx0XHRmbGV4LXdyYXA6IHdyYXA7XHJcblx0fVxyXG5cclxuXHQuYmFja0ltZyB7XHJcblx0XHR3aWR0aDogMTZycHg7XHJcblx0XHR6LWluZGV4OiA5OTk7XHJcblx0XHRoZWlnaHQ6IDI4cnB4O1xyXG5cdFx0bWFyZ2luLWxlZnQ6IDE4cnB4O1xyXG5cdH1cclxuXHJcblx0LnBvc2l0aW9uIHtcclxuXHRcdHBvc2l0aW9uOiByZWxhdGl2ZTtcclxuXHRcdHdpZHRoOiAxMDAlO1xyXG5cdFx0aGVpZ2h0OiA1MHJweDtcclxuXHRcdGRpc3BsYXk6IGZsZXg7XHJcblx0XHRmbGV4LWRpcmVjdGlvbjogcm93O1xyXG5cdFx0YWxpZ24taXRlbXM6IGNlbnRlcjtcclxuXHR9XHJcblxyXG5cdC50aXRsZSB7XHJcblx0XHRwb3NpdGlvbjogYWJzb2x1dGU7XHJcblx0XHR0b3A6IDA7XHJcblx0XHR3aWR0aDogMTAwJTtcclxuXHRcdHRleHQtYWxpZ246IGNlbnRlcjtcclxuXHRcdGZvbnQtc2l6ZTogMzVycHg7XHJcblx0XHRmb250LXdlaWdodDogNTAwO1xyXG5cdFx0Y29sb3I6IHdoaXRlXHJcblx0fVxyXG5cclxuXHQubG9nb0JvcmRlciB7XHJcblx0XHRib3JkZXI6ICNGRkZGRkYgc29saWQgNXJweDtcclxuXHRcdGJvcmRlci1yYWRpdXM6IDI1cnB4O1xyXG5cdFx0d2lkdGg6IG1heC1jb250ZW50O1xyXG5cdFx0bWFyZ2luLXRvcDogMTkwcnB4O1xyXG5cdH1cclxuXHJcblx0Lmljb24tYWdyZWVtZW50IHtcclxuXHRcdHdpZHRoOiAxNHB4O1xyXG5cdFx0aGVpZ2h0OiAxNHB4O1xyXG5cdFx0Ym9yZGVyOiAxcHggc29saWQgIzAwN0FGRjtcclxuXHRcdGJvcmRlci1yYWRpdXM6IDUwcHg7XHJcblx0XHRtYXJnaW4tcmlnaHQ6IDhweDtcclxuXHR9XHJcblxyXG5cdC5jb250ZW50IHtcclxuXHRcdG1hcmdpbi10b3A6IDMwcHg7XHJcblx0fVxyXG5cclxuXHQudGV4dC10aXRsZSB7XHJcblx0XHRmb250LXNpemU6IDIwcHg7XHJcblx0XHRtYXJnaW46IDAgMzBweCAyNXB4O1xyXG5cdFx0Zm9udC13ZWlnaHQ6IDcwMDtcclxuXHR9XHJcblxyXG5cdC5sb2dpbi1ib2R5IHtcclxuXHRcdG1hcmdpbi1ib3R0b206IDQwcHg7XHJcblx0fVxyXG5cclxuXHQubG9naW4tYm9keSAuaW5wdXQge1xyXG5cdFx0aGVpZ2h0OiA1MHB4O1xyXG5cdFx0cGFkZGluZzogMCAxNXB4O1xyXG5cdFx0YmFja2dyb3VuZDogI2Y3ZjdmNztcclxuXHRcdGJvcmRlci1yYWRpdXM6IDhweDtcclxuXHRcdGZsZXgtZGlyZWN0aW9uOiByb3c7XHJcblx0XHRtYXJnaW46IDAgMzBweCAyMHB4O1xyXG5cdFx0Zm9udC1zdHlsZTogbm9ybWFsO1xyXG5cdFx0Zm9udC1zaXplOiAxNXB4O1xyXG5cdFx0Zm9udC1mYW1pbHk6IERyb2lkIFNhbnMgRmFsbGJhY2s7XHJcblx0fVxyXG5cclxuXHQudS1mbGV4IHtcclxuXHRcdGRpc3BsYXk6IGZsZXg7XHJcblx0XHRhbGlnbi1pdGVtczogY2VudGVyO1xyXG5cdH1cclxuXHJcblx0LmJ1dC1jb25taXJlIHtcclxuXHRcdGJhY2tncm91bmQ6ICMwMDdBRkY7XHJcblx0XHRmb250LXNpemU6IDE3cHg7XHJcblx0XHRjb2xvcjogI2ZmZjtcclxuXHRcdG1hcmdpbjogMCAzMHB4IDIwcHg7XHJcblx0XHR0ZXh0LWFsaWduOiBjZW50ZXI7XHJcblx0XHRsaW5lLWhlaWdodDogNDVweDtcclxuXHRcdGhlaWdodDogNDVweDtcclxuXHRcdGJvcmRlci1yYWRpdXM6IDhweDtcclxuXHRcdGZvbnQtd2VpZ2h0OiA3MDA7XHJcblx0fVxyXG5cclxuXHQucmVnIHtcclxuXHRcdGZvbnQtc2l6ZTogMTNweDtcclxuXHRcdG1hcmdpbi10b3A6IDhweDtcclxuXHRcdGNvbG9yOiAjYzdjN2NjO1xyXG5cdH1cclxuXHJcblx0LmJib3R0b20tbG9naW4ge1xyXG5cdFx0bWFyZ2luLXRvcDogMjBweDtcclxuXHRcdHdpZHRoOiA4MCU7XHJcblx0fVxyXG5cclxuXHQub3RoZXItbG9naW4tdHlwZSB7XHJcblx0XHRkaXNwbGF5OiBmbGV4O1xyXG5cdH1cclxuXHJcblx0Lm90aGVyLWxvZ2luLXR5cGUgLm90aGVyIHtcclxuXHRcdHBhZGRpbmc6IDNweDtcclxuXHRcdGJvcmRlcjogMXB4IHNvbGlkICMyOTc5ZmY7XHJcblx0XHRib3JkZXItcmFkaXVzOiA1MCU7XHJcblx0fVxyXG48L3N0eWxlPlxuIiwiaW1wb3J0IG1vZCBmcm9tIFwiLSEuLi8uLi8uLi8uLi8uLi9odWJ1ZGVyL0hCdWlsZGVyL0hCdWlsZGVyWC9wbHVnaW5zL3VuaWFwcC1jbGkvbm9kZV9tb2R1bGVzL21pbmktY3NzLWV4dHJhY3QtcGx1Z2luL2Rpc3QvbG9hZGVyLmpzPz9yZWYtLTYtb25lT2YtMS0wIS4uLy4uLy4uLy4uLy4uL2h1YnVkZXIvSEJ1aWxkZXIvSEJ1aWxkZXJYL3BsdWdpbnMvdW5pYXBwLWNsaS9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L2Nqcy5qcz8/cmVmLS02LW9uZU9mLTEtMSEuLi8uLi8uLi8uLi8uLi9odWJ1ZGVyL0hCdWlsZGVyL0hCdWlsZGVyWC9wbHVnaW5zL3VuaWFwcC1jbGkvbm9kZV9tb2R1bGVzL0BkY2xvdWRpby92dWUtY2xpLXBsdWdpbi11bmkvcGFja2FnZXMvdnVlLWxvYWRlci9saWIvbG9hZGVycy9zdHlsZVBvc3RMb2FkZXIuanMhLi4vLi4vLi4vLi4vLi4vaHVidWRlci9IQnVpbGRlci9IQnVpbGRlclgvcGx1Z2lucy91bmlhcHAtY2xpL25vZGVfbW9kdWxlcy9AZGNsb3VkaW8vdnVlLWNsaS1wbHVnaW4tdW5pL3BhY2thZ2VzL3dlYnBhY2stcHJlcHJvY2Vzcy1sb2FkZXIvaW5kZXguanM/P3JlZi0tNi1vbmVPZi0xLTIhLi4vLi4vLi4vLi4vLi4vaHVidWRlci9IQnVpbGRlci9IQnVpbGRlclgvcGx1Z2lucy91bmlhcHAtY2xpL25vZGVfbW9kdWxlcy9wb3N0Y3NzLWxvYWRlci9zcmMvaW5kZXguanM/P3JlZi0tNi1vbmVPZi0xLTMhLi4vLi4vLi4vLi4vLi4vaHVidWRlci9IQnVpbGRlci9IQnVpbGRlclgvcGx1Z2lucy91bmlhcHAtY2xpL25vZGVfbW9kdWxlcy9AZGNsb3VkaW8vdnVlLWNsaS1wbHVnaW4tdW5pL3BhY2thZ2VzL3Z1ZS1sb2FkZXIvbGliL2luZGV4LmpzPz92dWUtbG9hZGVyLW9wdGlvbnMhLi4vLi4vLi4vLi4vLi4vaHVidWRlci9IQnVpbGRlci9IQnVpbGRlclgvcGx1Z2lucy91bmlhcHAtY2xpL25vZGVfbW9kdWxlcy9AZGNsb3VkaW8vd2VicGFjay11bmktbXAtbG9hZGVyL2xpYi9zdHlsZS5qcyEuL2xvZ2luX2g1LnZ1ZT92dWUmdHlwZT1zdHlsZSZpbmRleD0wJmxhbmc9Y3NzJlwiOyBleHBvcnQgZGVmYXVsdCBtb2Q7IGV4cG9ydCAqIGZyb20gXCItIS4uLy4uLy4uLy4uLy4uL2h1YnVkZXIvSEJ1aWxkZXIvSEJ1aWxkZXJYL3BsdWdpbnMvdW5pYXBwLWNsaS9ub2RlX21vZHVsZXMvbWluaS1jc3MtZXh0cmFjdC1wbHVnaW4vZGlzdC9sb2FkZXIuanM/P3JlZi0tNi1vbmVPZi0xLTAhLi4vLi4vLi4vLi4vLi4vaHVidWRlci9IQnVpbGRlci9IQnVpbGRlclgvcGx1Z2lucy91bmlhcHAtY2xpL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvY2pzLmpzPz9yZWYtLTYtb25lT2YtMS0xIS4uLy4uLy4uLy4uLy4uL2h1YnVkZXIvSEJ1aWxkZXIvSEJ1aWxkZXJYL3BsdWdpbnMvdW5pYXBwLWNsaS9ub2RlX21vZHVsZXMvQGRjbG91ZGlvL3Z1ZS1jbGktcGx1Z2luLXVuaS9wYWNrYWdlcy92dWUtbG9hZGVyL2xpYi9sb2FkZXJzL3N0eWxlUG9zdExvYWRlci5qcyEuLi8uLi8uLi8uLi8uLi9odWJ1ZGVyL0hCdWlsZGVyL0hCdWlsZGVyWC9wbHVnaW5zL3VuaWFwcC1jbGkvbm9kZV9tb2R1bGVzL0BkY2xvdWRpby92dWUtY2xpLXBsdWdpbi11bmkvcGFja2FnZXMvd2VicGFjay1wcmVwcm9jZXNzLWxvYWRlci9pbmRleC5qcz8/cmVmLS02LW9uZU9mLTEtMiEuLi8uLi8uLi8uLi8uLi9odWJ1ZGVyL0hCdWlsZGVyL0hCdWlsZGVyWC9wbHVnaW5zL3VuaWFwcC1jbGkvbm9kZV9tb2R1bGVzL3Bvc3Rjc3MtbG9hZGVyL3NyYy9pbmRleC5qcz8/cmVmLS02LW9uZU9mLTEtMyEuLi8uLi8uLi8uLi8uLi9odWJ1ZGVyL0hCdWlsZGVyL0hCdWlsZGVyWC9wbHVnaW5zL3VuaWFwcC1jbGkvbm9kZV9tb2R1bGVzL0BkY2xvdWRpby92dWUtY2xpLXBsdWdpbi11bmkvcGFja2FnZXMvdnVlLWxvYWRlci9saWIvaW5kZXguanM/P3Z1ZS1sb2FkZXItb3B0aW9ucyEuLi8uLi8uLi8uLi8uLi9odWJ1ZGVyL0hCdWlsZGVyL0hCdWlsZGVyWC9wbHVnaW5zL3VuaWFwcC1jbGkvbm9kZV9tb2R1bGVzL0BkY2xvdWRpby93ZWJwYWNrLXVuaS1tcC1sb2FkZXIvbGliL3N0eWxlLmpzIS4vbG9naW5faDUudnVlP3Z1ZSZ0eXBlPXN0eWxlJmluZGV4PTAmbGFuZz1jc3MmXCIiLCIvLyBleHRyYWN0ZWQgYnkgbWluaS1jc3MtZXh0cmFjdC1wbHVnaW5cbiAgICBpZihtb2R1bGUuaG90KSB7XG4gICAgICAvLyAxNjgyNzQ2MzU0MDM1XG4gICAgICB2YXIgY3NzUmVsb2FkID0gcmVxdWlyZShcIkQ6L2h1YnVkZXIvSEJ1aWxkZXIvSEJ1aWxkZXJYL3BsdWdpbnMvdW5pYXBwLWNsaS9ub2RlX21vZHVsZXMvbWluaS1jc3MtZXh0cmFjdC1wbHVnaW4vZGlzdC9obXIvaG90TW9kdWxlUmVwbGFjZW1lbnQuanNcIikobW9kdWxlLmlkLCB7XCJobXJcIjp0cnVlLFwicHVibGljUGF0aFwiOlwiLi4vLi4vXCIsXCJsb2NhbHNcIjpmYWxzZX0pO1xuICAgICAgbW9kdWxlLmhvdC5kaXNwb3NlKGNzc1JlbG9hZCk7XG4gICAgICBtb2R1bGUuaG90LmFjY2VwdCh1bmRlZmluZWQsIGNzc1JlbG9hZCk7XG4gICAgfVxuICAiXSwic291cmNlUm9vdCI6IiJ9