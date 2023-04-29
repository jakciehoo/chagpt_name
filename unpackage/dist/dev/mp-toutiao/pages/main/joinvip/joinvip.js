(global["webpackJsonp"] = global["webpackJsonp"] || []).push([["pages/main/joinvip/joinvip"],{

/***/ 194:
/*!************************************************************************************************!*\
  !*** D:/gitgpt更新代码不修改/chatgpt_wechat_font/main.js?{"page":"pages%2Fmain%2Fjoinvip%2Fjoinvip"} ***!
  \************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/* WEBPACK VAR INJECTION */(function(wx, createPage) {__webpack_require__(/*! uni-pages */ 5);
var _vue = _interopRequireDefault(__webpack_require__(/*! vue */ 3));
var _joinvip = _interopRequireDefault(__webpack_require__(/*! ./pages/main/joinvip/joinvip.vue */ 195));function _interopRequireDefault(obj) {return obj && obj.__esModule ? obj : { default: obj };}wx.__webpack_require_UNI_MP_PLUGIN__ = __webpack_require__;
createPage(_joinvip.default);
/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./node_modules/@dcloudio/uni-mp-toutiao/dist/index.js */ 1)["default"], __webpack_require__(/*! ./node_modules/@dcloudio/uni-mp-toutiao/dist/index.js */ 1)["createPage"]))

/***/ }),

/***/ 195:
/*!***************************************************************************!*\
  !*** D:/gitgpt更新代码不修改/chatgpt_wechat_font/pages/main/joinvip/joinvip.vue ***!
  \***************************************************************************/
/*! no static exports found */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _joinvip_vue_vue_type_template_id_3ed08a7a___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./joinvip.vue?vue&type=template&id=3ed08a7a& */ 196);
/* harmony import */ var _joinvip_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./joinvip.vue?vue&type=script&lang=js& */ 198);
/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _joinvip_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__) if(__WEBPACK_IMPORT_KEY__ !== 'default') (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _joinvip_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__[key]; }) }(__WEBPACK_IMPORT_KEY__));
/* harmony import */ var _joinvip_vue_vue_type_style_index_0_lang_css___WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./joinvip.vue?vue&type=style&index=0&lang=css& */ 200);
/* harmony import */ var _hubuder_HBuilder_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../../../hubuder/HBuilder/HBuilderX/plugins/uniapp-cli/node_modules/@dcloudio/vue-cli-plugin-uni/packages/vue-loader/lib/runtime/componentNormalizer.js */ 14);

var renderjs





/* normalize component */

var component = Object(_hubuder_HBuilder_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_3__["default"])(
  _joinvip_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__["default"],
  _joinvip_vue_vue_type_template_id_3ed08a7a___WEBPACK_IMPORTED_MODULE_0__["render"],
  _joinvip_vue_vue_type_template_id_3ed08a7a___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"],
  false,
  null,
  null,
  null,
  false,
  _joinvip_vue_vue_type_template_id_3ed08a7a___WEBPACK_IMPORTED_MODULE_0__["components"],
  renderjs
)

component.options.__file = "pages/main/joinvip/joinvip.vue"
/* harmony default export */ __webpack_exports__["default"] = (component.exports);

/***/ }),

/***/ 196:
/*!**********************************************************************************************************!*\
  !*** D:/gitgpt更新代码不修改/chatgpt_wechat_font/pages/main/joinvip/joinvip.vue?vue&type=template&id=3ed08a7a& ***!
  \**********************************************************************************************************/
/*! exports provided: render, staticRenderFns, recyclableRender, components */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _hubuder_HBuilder_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_hubuder_HBuilder_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_16_0_hubuder_HBuilder_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_template_js_hubuder_HBuilder_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_uni_app_loader_page_meta_js_hubuder_HBuilder_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_hubuder_HBuilder_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_style_js_joinvip_vue_vue_type_template_id_3ed08a7a___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../hubuder/HBuilder/HBuilderX/plugins/uniapp-cli/node_modules/@dcloudio/vue-cli-plugin-uni/packages/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../../../hubuder/HBuilder/HBuilderX/plugins/uniapp-cli/node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-preprocess-loader??ref--16-0!../../../../../hubuder/HBuilder/HBuilderX/plugins/uniapp-cli/node_modules/@dcloudio/webpack-uni-mp-loader/lib/template.js!../../../../../hubuder/HBuilder/HBuilderX/plugins/uniapp-cli/node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-uni-app-loader/page-meta.js!../../../../../hubuder/HBuilder/HBuilderX/plugins/uniapp-cli/node_modules/@dcloudio/vue-cli-plugin-uni/packages/vue-loader/lib??vue-loader-options!../../../../../hubuder/HBuilder/HBuilderX/plugins/uniapp-cli/node_modules/@dcloudio/webpack-uni-mp-loader/lib/style.js!./joinvip.vue?vue&type=template&id=3ed08a7a& */ 197);
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "render", function() { return _hubuder_HBuilder_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_hubuder_HBuilder_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_16_0_hubuder_HBuilder_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_template_js_hubuder_HBuilder_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_uni_app_loader_page_meta_js_hubuder_HBuilder_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_hubuder_HBuilder_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_style_js_joinvip_vue_vue_type_template_id_3ed08a7a___WEBPACK_IMPORTED_MODULE_0__["render"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return _hubuder_HBuilder_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_hubuder_HBuilder_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_16_0_hubuder_HBuilder_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_template_js_hubuder_HBuilder_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_uni_app_loader_page_meta_js_hubuder_HBuilder_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_hubuder_HBuilder_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_style_js_joinvip_vue_vue_type_template_id_3ed08a7a___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "recyclableRender", function() { return _hubuder_HBuilder_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_hubuder_HBuilder_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_16_0_hubuder_HBuilder_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_template_js_hubuder_HBuilder_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_uni_app_loader_page_meta_js_hubuder_HBuilder_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_hubuder_HBuilder_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_style_js_joinvip_vue_vue_type_template_id_3ed08a7a___WEBPACK_IMPORTED_MODULE_0__["recyclableRender"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "components", function() { return _hubuder_HBuilder_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_hubuder_HBuilder_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_16_0_hubuder_HBuilder_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_template_js_hubuder_HBuilder_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_uni_app_loader_page_meta_js_hubuder_HBuilder_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_hubuder_HBuilder_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_style_js_joinvip_vue_vue_type_template_id_3ed08a7a___WEBPACK_IMPORTED_MODULE_0__["components"]; });



/***/ }),

/***/ 197:
/*!**********************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/@dcloudio/vue-cli-plugin-uni/packages/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-preprocess-loader??ref--16-0!./node_modules/@dcloudio/webpack-uni-mp-loader/lib/template.js!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-uni-app-loader/page-meta.js!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/vue-loader/lib??vue-loader-options!./node_modules/@dcloudio/webpack-uni-mp-loader/lib/style.js!D:/gitgpt更新代码不修改/chatgpt_wechat_font/pages/main/joinvip/joinvip.vue?vue&type=template&id=3ed08a7a& ***!
  \**********************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
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
    uAvatar: function() {
      return Promise.all(/*! import() | node-modules/uview-ui/components/u-avatar/u-avatar */[__webpack_require__.e("common/vendor"), __webpack_require__.e("node-modules/uview-ui/components/u-avatar/u-avatar")]).then(__webpack_require__.bind(null, /*! uview-ui/components/u-avatar/u-avatar.vue */ 366))
    },
    uEmpty: function() {
      return Promise.all(/*! import() | node-modules/uview-ui/components/u-empty/u-empty */[__webpack_require__.e("common/vendor"), __webpack_require__.e("node-modules/uview-ui/components/u-empty/u-empty")]).then(__webpack_require__.bind(null, /*! uview-ui/components/u-empty/u-empty.vue */ 313))
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
          marginTop: 2.6 * _vm.statusBarHeight + "rpx"
        }
      : {
          marginTop: 2.3 * _vm.statusBarHeight + "rpx"
        }
  ])

  var m0 =
    !(_vm.baseConfig.is_open_num == "0") &&
    !(_vm.userInfo.vipType == 1) &&
    _vm.userInfo.vipType == 2
      ? _vm.blanceDateNum(_vm.userInfo.blanceDate)
      : null
  _vm.$mp.data = Object.assign(
    {},
    {
      $root: {
        s0: s0,
        m0: m0
      }
    }
  )
}
var recyclableRender = false
var staticRenderFns = []
render._withStripped = true



/***/ }),

/***/ 198:
/*!****************************************************************************************************!*\
  !*** D:/gitgpt更新代码不修改/chatgpt_wechat_font/pages/main/joinvip/joinvip.vue?vue&type=script&lang=js& ***!
  \****************************************************************************************************/
/*! no static exports found */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _hubuder_HBuilder_HBuilderX_plugins_uniapp_cli_node_modules_babel_loader_lib_index_js_hubuder_HBuilder_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_12_1_hubuder_HBuilder_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_script_js_hubuder_HBuilder_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_hubuder_HBuilder_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_style_js_joinvip_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../hubuder/HBuilder/HBuilderX/plugins/uniapp-cli/node_modules/babel-loader/lib!../../../../../hubuder/HBuilder/HBuilderX/plugins/uniapp-cli/node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-preprocess-loader??ref--12-1!../../../../../hubuder/HBuilder/HBuilderX/plugins/uniapp-cli/node_modules/@dcloudio/webpack-uni-mp-loader/lib/script.js!../../../../../hubuder/HBuilder/HBuilderX/plugins/uniapp-cli/node_modules/@dcloudio/vue-cli-plugin-uni/packages/vue-loader/lib??vue-loader-options!../../../../../hubuder/HBuilder/HBuilderX/plugins/uniapp-cli/node_modules/@dcloudio/webpack-uni-mp-loader/lib/style.js!./joinvip.vue?vue&type=script&lang=js& */ 199);
/* harmony import */ var _hubuder_HBuilder_HBuilderX_plugins_uniapp_cli_node_modules_babel_loader_lib_index_js_hubuder_HBuilder_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_12_1_hubuder_HBuilder_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_script_js_hubuder_HBuilder_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_hubuder_HBuilder_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_style_js_joinvip_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_hubuder_HBuilder_HBuilderX_plugins_uniapp_cli_node_modules_babel_loader_lib_index_js_hubuder_HBuilder_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_12_1_hubuder_HBuilder_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_script_js_hubuder_HBuilder_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_hubuder_HBuilder_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_style_js_joinvip_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__);
/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _hubuder_HBuilder_HBuilderX_plugins_uniapp_cli_node_modules_babel_loader_lib_index_js_hubuder_HBuilder_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_12_1_hubuder_HBuilder_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_script_js_hubuder_HBuilder_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_hubuder_HBuilder_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_style_js_joinvip_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__) if(__WEBPACK_IMPORT_KEY__ !== 'default') (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _hubuder_HBuilder_HBuilderX_plugins_uniapp_cli_node_modules_babel_loader_lib_index_js_hubuder_HBuilder_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_12_1_hubuder_HBuilder_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_script_js_hubuder_HBuilder_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_hubuder_HBuilder_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_style_js_joinvip_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__[key]; }) }(__WEBPACK_IMPORT_KEY__));
 /* harmony default export */ __webpack_exports__["default"] = (_hubuder_HBuilder_HBuilderX_plugins_uniapp_cli_node_modules_babel_loader_lib_index_js_hubuder_HBuilder_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_12_1_hubuder_HBuilder_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_script_js_hubuder_HBuilder_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_hubuder_HBuilder_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_style_js_joinvip_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0___default.a); 

/***/ }),

/***/ 199:
/*!***********************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-preprocess-loader??ref--12-1!./node_modules/@dcloudio/webpack-uni-mp-loader/lib/script.js!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/vue-loader/lib??vue-loader-options!./node_modules/@dcloudio/webpack-uni-mp-loader/lib/style.js!D:/gitgpt更新代码不修改/chatgpt_wechat_font/pages/main/joinvip/joinvip.vue?vue&type=script&lang=js& ***!
  \***********************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
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
var _default = { data: function data() {return { type: 1, statusBarHeight: 0, priceList: [{ title: '半月会员', price: 88, oldprice: 99, check: false }, { title: '半月会员', price: 88, oldprice: 99, check: false }, { title: '半月会员', price: 88, oldprice: 99, check: false }, { title: '半月会员', price: 88, oldprice: 99, check: false }], userInfo: { 'nickName': '未登录', 'avatar': _util.default.defaultAvatar(), 'userId': '-1', 'blanceNum': '-', 'vip_type': '-' }, baseConfig: {}, intivateCard: '' };}, onLoad: function onLoad() {this.getStatusBarHeight();this.priceList[0].check = true;}, onShow: function onShow() {this.initbaseConfig();this.getUserInfo();}, methods: { initbaseConfig: function initbaseConfig() {_util.default.getbaseConfig();this.baseConfig = uni.getStorageSync('baseConfig');}, getUserInfo: function getUserInfo() {var _this = this;(0, _request.default)('', '/user/getUserInfo', 'GET', {}, {}).then(function (res) {if (res.code == 200) {_this.userInfo = res.data;uni.setStorageSync('userInfo', _this.userInfo);} else {_util.default.message("个人信息获取失败", 'error');}});}, backPage: function backPage() {uni.navigateBack({ delta: 1 });}, getStatusBarHeight: function getStatusBarHeight() {this.statusBarHeight = uni.getSystemInfoSync().statusBarHeight;}, checkItem: function checkItem(index) {for (var i = 0; i < this.priceList.length; i++) {this.priceList[i].check = false;}this.priceList[index].check = true;this.$forceUpdate();}, aboutUs: function aboutUs() {var text = this.baseConfig.groupdesc;if (_util.default.isBlank(this.baseConfig.groupdesc)) {text = "Q群:575451625";}uni.setClipboardData({ data: text, //要被复制的内容
        success: function success() {//复制成功的回调函数
          uni.showToast({ //提示
            title: "\u590D\u5236\u6210\u529F", icon: 'success' });} }, true);}, getVip: function getVip() {uni.showToast({ title: '领取卡密' });}, changeType: function changeType(type) {this.type = type;}, blanceDateNum: function blanceDateNum(dateStr) {var date = new Date(dateStr);var blance = date.getTime() / 1000;var now = new Date().getTime() / 1000;if (blance - now > 0) {//转换成时
        var hourNum = (blance - now) / 60;return hourNum.toFixed(1);} else {return '已过期';}}, useIntivateCard: function useIntivateCard() {var _this2 = this;if (_util.default.isNotBlank(this.intivateCard)) {(0, _request.default)('', '/cricleai/rechargeablecardprocess/use?cardNumber=' + this.intivateCard, 'POST', {}, {}).then(function (res) {if (res.code == 200) {_util.default.message("激活成功", 'success');_this2.getUserInfo();} else {_util.default.message(res.msg, 'error');}});} else {_util.default.message("激活码不可为空", 'error');}} } };exports.default = _default;
/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./node_modules/@dcloudio/uni-mp-toutiao/dist/index.js */ 1)["default"]))

/***/ }),

/***/ 200:
/*!************************************************************************************************************!*\
  !*** D:/gitgpt更新代码不修改/chatgpt_wechat_font/pages/main/joinvip/joinvip.vue?vue&type=style&index=0&lang=css& ***!
  \************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _hubuder_HBuilder_HBuilderX_plugins_uniapp_cli_node_modules_mini_css_extract_plugin_dist_loader_js_ref_6_oneOf_1_0_hubuder_HBuilder_HBuilderX_plugins_uniapp_cli_node_modules_css_loader_dist_cjs_js_ref_6_oneOf_1_1_hubuder_HBuilder_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_loaders_stylePostLoader_js_hubuder_HBuilder_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_6_oneOf_1_2_hubuder_HBuilder_HBuilderX_plugins_uniapp_cli_node_modules_postcss_loader_src_index_js_ref_6_oneOf_1_3_hubuder_HBuilder_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_hubuder_HBuilder_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_style_js_joinvip_vue_vue_type_style_index_0_lang_css___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../hubuder/HBuilder/HBuilderX/plugins/uniapp-cli/node_modules/mini-css-extract-plugin/dist/loader.js??ref--6-oneOf-1-0!../../../../../hubuder/HBuilder/HBuilderX/plugins/uniapp-cli/node_modules/css-loader/dist/cjs.js??ref--6-oneOf-1-1!../../../../../hubuder/HBuilder/HBuilderX/plugins/uniapp-cli/node_modules/@dcloudio/vue-cli-plugin-uni/packages/vue-loader/lib/loaders/stylePostLoader.js!../../../../../hubuder/HBuilder/HBuilderX/plugins/uniapp-cli/node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-preprocess-loader??ref--6-oneOf-1-2!../../../../../hubuder/HBuilder/HBuilderX/plugins/uniapp-cli/node_modules/postcss-loader/src??ref--6-oneOf-1-3!../../../../../hubuder/HBuilder/HBuilderX/plugins/uniapp-cli/node_modules/@dcloudio/vue-cli-plugin-uni/packages/vue-loader/lib??vue-loader-options!../../../../../hubuder/HBuilder/HBuilderX/plugins/uniapp-cli/node_modules/@dcloudio/webpack-uni-mp-loader/lib/style.js!./joinvip.vue?vue&type=style&index=0&lang=css& */ 201);
/* harmony import */ var _hubuder_HBuilder_HBuilderX_plugins_uniapp_cli_node_modules_mini_css_extract_plugin_dist_loader_js_ref_6_oneOf_1_0_hubuder_HBuilder_HBuilderX_plugins_uniapp_cli_node_modules_css_loader_dist_cjs_js_ref_6_oneOf_1_1_hubuder_HBuilder_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_loaders_stylePostLoader_js_hubuder_HBuilder_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_6_oneOf_1_2_hubuder_HBuilder_HBuilderX_plugins_uniapp_cli_node_modules_postcss_loader_src_index_js_ref_6_oneOf_1_3_hubuder_HBuilder_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_hubuder_HBuilder_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_style_js_joinvip_vue_vue_type_style_index_0_lang_css___WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_hubuder_HBuilder_HBuilderX_plugins_uniapp_cli_node_modules_mini_css_extract_plugin_dist_loader_js_ref_6_oneOf_1_0_hubuder_HBuilder_HBuilderX_plugins_uniapp_cli_node_modules_css_loader_dist_cjs_js_ref_6_oneOf_1_1_hubuder_HBuilder_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_loaders_stylePostLoader_js_hubuder_HBuilder_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_6_oneOf_1_2_hubuder_HBuilder_HBuilderX_plugins_uniapp_cli_node_modules_postcss_loader_src_index_js_ref_6_oneOf_1_3_hubuder_HBuilder_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_hubuder_HBuilder_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_style_js_joinvip_vue_vue_type_style_index_0_lang_css___WEBPACK_IMPORTED_MODULE_0__);
/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _hubuder_HBuilder_HBuilderX_plugins_uniapp_cli_node_modules_mini_css_extract_plugin_dist_loader_js_ref_6_oneOf_1_0_hubuder_HBuilder_HBuilderX_plugins_uniapp_cli_node_modules_css_loader_dist_cjs_js_ref_6_oneOf_1_1_hubuder_HBuilder_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_loaders_stylePostLoader_js_hubuder_HBuilder_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_6_oneOf_1_2_hubuder_HBuilder_HBuilderX_plugins_uniapp_cli_node_modules_postcss_loader_src_index_js_ref_6_oneOf_1_3_hubuder_HBuilder_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_hubuder_HBuilder_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_style_js_joinvip_vue_vue_type_style_index_0_lang_css___WEBPACK_IMPORTED_MODULE_0__) if(__WEBPACK_IMPORT_KEY__ !== 'default') (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _hubuder_HBuilder_HBuilderX_plugins_uniapp_cli_node_modules_mini_css_extract_plugin_dist_loader_js_ref_6_oneOf_1_0_hubuder_HBuilder_HBuilderX_plugins_uniapp_cli_node_modules_css_loader_dist_cjs_js_ref_6_oneOf_1_1_hubuder_HBuilder_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_loaders_stylePostLoader_js_hubuder_HBuilder_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_6_oneOf_1_2_hubuder_HBuilder_HBuilderX_plugins_uniapp_cli_node_modules_postcss_loader_src_index_js_ref_6_oneOf_1_3_hubuder_HBuilder_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_hubuder_HBuilder_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_style_js_joinvip_vue_vue_type_style_index_0_lang_css___WEBPACK_IMPORTED_MODULE_0__[key]; }) }(__WEBPACK_IMPORT_KEY__));
 /* harmony default export */ __webpack_exports__["default"] = (_hubuder_HBuilder_HBuilderX_plugins_uniapp_cli_node_modules_mini_css_extract_plugin_dist_loader_js_ref_6_oneOf_1_0_hubuder_HBuilder_HBuilderX_plugins_uniapp_cli_node_modules_css_loader_dist_cjs_js_ref_6_oneOf_1_1_hubuder_HBuilder_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_loaders_stylePostLoader_js_hubuder_HBuilder_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_6_oneOf_1_2_hubuder_HBuilder_HBuilderX_plugins_uniapp_cli_node_modules_postcss_loader_src_index_js_ref_6_oneOf_1_3_hubuder_HBuilder_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_hubuder_HBuilder_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_style_js_joinvip_vue_vue_type_style_index_0_lang_css___WEBPACK_IMPORTED_MODULE_0___default.a); 

/***/ }),

/***/ 201:
/*!****************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/mini-css-extract-plugin/dist/loader.js??ref--6-oneOf-1-0!./node_modules/css-loader/dist/cjs.js??ref--6-oneOf-1-1!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-preprocess-loader??ref--6-oneOf-1-2!./node_modules/postcss-loader/src??ref--6-oneOf-1-3!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/vue-loader/lib??vue-loader-options!./node_modules/@dcloudio/webpack-uni-mp-loader/lib/style.js!D:/gitgpt更新代码不修改/chatgpt_wechat_font/pages/main/joinvip/joinvip.vue?vue&type=style&index=0&lang=css& ***!
  \****************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

// extracted by mini-css-extract-plugin
    if(false) { var cssReload; }
  

/***/ })

},[[194,"common/runtime","common/vendor"]]]);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInVuaS1hcHA6Ly8vbWFpbi5qcyIsIndlYnBhY2s6Ly8vRDovZ2l0Z3B05pu05paw5Luj56CB5LiN5L+u5pS5L2NoYXRncHRfd2VjaGF0X2ZvbnQvcGFnZXMvbWFpbi9qb2ludmlwL2pvaW52aXAudnVlP2RmZjEiLCJ3ZWJwYWNrOi8vL0Q6L2dpdGdwdOabtOaWsOS7o+eggeS4jeS/ruaUuS9jaGF0Z3B0X3dlY2hhdF9mb250L3BhZ2VzL21haW4vam9pbnZpcC9qb2ludmlwLnZ1ZT83NWY4Iiwid2VicGFjazovLy9EOi9naXRncHTmm7TmlrDku6PnoIHkuI3kv67mlLkvY2hhdGdwdF93ZWNoYXRfZm9udC9wYWdlcy9tYWluL2pvaW52aXAvam9pbnZpcC52dWU/ODc4OCIsIndlYnBhY2s6Ly8vRDovZ2l0Z3B05pu05paw5Luj56CB5LiN5L+u5pS5L2NoYXRncHRfd2VjaGF0X2ZvbnQvcGFnZXMvbWFpbi9qb2ludmlwL2pvaW52aXAudnVlP2Y4Y2EiLCJ1bmktYXBwOi8vL3BhZ2VzL21haW4vam9pbnZpcC9qb2ludmlwLnZ1ZSIsIndlYnBhY2s6Ly8vRDovZ2l0Z3B05pu05paw5Luj56CB5LiN5L+u5pS5L2NoYXRncHRfd2VjaGF0X2ZvbnQvcGFnZXMvbWFpbi9qb2ludmlwL2pvaW52aXAudnVlPzI4N2MiLCJ3ZWJwYWNrOi8vL0Q6L2dpdGdwdOabtOaWsOS7o+eggeS4jeS/ruaUuS9jaGF0Z3B0X3dlY2hhdF9mb250L3BhZ2VzL21haW4vam9pbnZpcC9qb2ludmlwLnZ1ZT8xYmM5Il0sIm5hbWVzIjpbInd4IiwiX193ZWJwYWNrX3JlcXVpcmVfVU5JX01QX1BMVUdJTl9fIiwiX193ZWJwYWNrX3JlcXVpcmVfXyIsImNyZWF0ZVBhZ2UiLCJQYWdlIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7O3NEQUFBO0FBQ0E7QUFDQSx3Ryw2RkFGbUJBLEVBQUUsQ0FBQ0MsaUNBQUgsR0FBdUNDLG1CQUF2QztBQUduQkMsVUFBVSxDQUFDQyxnQkFBRCxDQUFWLEM7Ozs7Ozs7Ozs7Ozs7QUNIQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBb0g7QUFDcEg7QUFDMkQ7QUFDTDtBQUNhOzs7QUFHbkU7QUFDdUw7QUFDdkwsZ0JBQWdCLDhMQUFVO0FBQzFCLEVBQUUsNkVBQU07QUFDUixFQUFFLGtGQUFNO0FBQ1IsRUFBRSwyRkFBZTtBQUNqQjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsRUFBRSxzRkFBVTtBQUNaO0FBQ0E7O0FBRUE7QUFDZSxnRjs7Ozs7Ozs7Ozs7O0FDdkJmO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBOzs7Ozs7Ozs7Ozs7O0FDQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsYUFBYSxpU0FFTjtBQUNQLEtBQUs7QUFDTDtBQUNBLGFBQWEsMlJBRU47QUFDUDtBQUNBO0FBQ0EsQ0FBQztBQUNEO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEdBQUc7QUFDSDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLE1BQU07QUFDTjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOzs7Ozs7Ozs7Ozs7OztBQy9EQTtBQUFBO0FBQUE7QUFBQTtBQUF3c0IsQ0FBZ0Isc3NCQUFHLEVBQUMsQzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQytINXRCO0FBQ0Esd0Y7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztlQUNBLEVBQ0EsSUFEQSxrQkFDQSxDQUNBLFNBQ0EsT0FEQSxFQUVBLGtCQUZBLEVBR0EsY0FDQSxhQURBLEVBRUEsU0FGQSxFQUdBLFlBSEEsRUFJQSxZQUpBLElBS0EsRUFDQSxhQURBLEVBRUEsU0FGQSxFQUdBLFlBSEEsRUFJQSxZQUpBLEVBTEEsRUFVQSxFQUNBLGFBREEsRUFFQSxTQUZBLEVBR0EsWUFIQSxFQUlBLFlBSkEsRUFWQSxFQWVBLEVBQ0EsYUFEQSxFQUVBLFNBRkEsRUFHQSxZQUhBLEVBSUEsWUFKQSxFQWZBLENBSEEsRUF3QkEsWUFDQSxpQkFEQSxFQUVBLHVDQUZBLEVBR0EsY0FIQSxFQUlBLGdCQUpBLEVBS0EsZUFMQSxFQXhCQSxFQStCQSxjQS9CQSxFQWdDQSxnQkFoQ0EsR0FrQ0EsQ0FwQ0EsRUFxQ0EsTUFyQ0Esb0JBcUNBLENBQ0EsMEJBQ0EsK0JBQ0EsQ0F4Q0EsRUF5Q0EsTUF6Q0Esb0JBeUNBLENBQ0Esc0JBQ0EsbUJBQ0EsQ0E1Q0EsRUE2Q0EsV0FDQSxjQURBLDRCQUNBLENBQ0EsOEJBQ0EsbURBQ0EsQ0FKQSxFQUtBLFdBTEEseUJBS0Esa0JBQ0EsbUZBQ0Esc0JBQ0EsMEJBQ0EsK0NBQ0EsQ0FIQSxNQUdBLENBQ0EsMkNBQ0EsQ0FDQSxDQVBBLEVBUUEsQ0FkQSxFQWVBLFFBZkEsc0JBZUEsQ0FDQSxtQkFDQSxRQURBLElBR0EsQ0FuQkEsRUFvQkEsa0JBcEJBLGdDQW9CQSxDQUNBLCtEQUNBLENBdEJBLEVBdUJBLFNBdkJBLHFCQXVCQSxLQXZCQSxFQXVCQSxDQUNBLGlEQUNBLGdDQUNBLENBQ0EsbUNBQ0Esb0JBQ0EsQ0E3QkEsRUE4QkEsT0E5QkEscUJBOEJBLENBQ0EscUNBQ0EsdURBQ0Esc0JBQ0EsQ0FDQSx1QkFDQSxVQURBLEVBQ0E7QUFDQTtBQUNBO0FBQ0EsNkNBREEsRUFFQSxlQUZBLElBSUEsQ0FQQSxJQVFBLElBUkEsRUFTQSxDQTVDQSxFQTZDQSxNQTdDQSxvQkE2Q0EsQ0FDQSxnQkFDQSxhQURBLElBR0EsQ0FqREEsRUFrREEsVUFsREEsc0JBa0RBLElBbERBLEVBa0RBLENBQ0EsaUJBQ0EsQ0FwREEsRUFxREEsYUFyREEseUJBcURBLE9BckRBLEVBcURBLENBQ0EsNkJBQ0EsbUNBQ0Esc0NBQ0EsdUJBQ0E7QUFDQSwwQ0FDQSwwQkFDQSxDQUpBLE1BSUEsQ0FDQSxhQUNBLENBRUEsQ0FqRUEsRUFrRUEsZUFsRUEsNkJBa0VBLG1CQUNBLGtEQUVBLHdJQUNBLHNCQUNBLHlDQUNBLHFCQUNBLENBSEEsTUFHQSxDQUNBLHdDQUNBLENBQ0EsQ0FQQSxFQVFBLENBVkEsTUFVQSxDQUNBLDBDQUNBLENBQ0EsQ0FoRkEsRUE3Q0EsRTs7Ozs7Ozs7Ozs7OztBQ2pJQTtBQUFBO0FBQUE7QUFBQTtBQUFtZ0MsQ0FBZ0IsNjlCQUFHLEVBQUMsQzs7Ozs7Ozs7Ozs7QUNBdmhDO0FBQ0EsT0FBTyxLQUFVLEVBQUUsa0JBS2QiLCJmaWxlIjoicGFnZXMvbWFpbi9qb2ludmlwL2pvaW52aXAuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgJ3VuaS1wYWdlcyc7d3guX193ZWJwYWNrX3JlcXVpcmVfVU5JX01QX1BMVUdJTl9fID0gX193ZWJwYWNrX3JlcXVpcmVfXztcbmltcG9ydCBWdWUgZnJvbSAndnVlJ1xuaW1wb3J0IFBhZ2UgZnJvbSAnLi9wYWdlcy9tYWluL2pvaW52aXAvam9pbnZpcC52dWUnXG5jcmVhdGVQYWdlKFBhZ2UpIiwiaW1wb3J0IHsgcmVuZGVyLCBzdGF0aWNSZW5kZXJGbnMsIHJlY3ljbGFibGVSZW5kZXIsIGNvbXBvbmVudHMgfSBmcm9tIFwiLi9qb2ludmlwLnZ1ZT92dWUmdHlwZT10ZW1wbGF0ZSZpZD0zZWQwOGE3YSZcIlxudmFyIHJlbmRlcmpzXG5pbXBvcnQgc2NyaXB0IGZyb20gXCIuL2pvaW52aXAudnVlP3Z1ZSZ0eXBlPXNjcmlwdCZsYW5nPWpzJlwiXG5leHBvcnQgKiBmcm9tIFwiLi9qb2ludmlwLnZ1ZT92dWUmdHlwZT1zY3JpcHQmbGFuZz1qcyZcIlxuaW1wb3J0IHN0eWxlMCBmcm9tIFwiLi9qb2ludmlwLnZ1ZT92dWUmdHlwZT1zdHlsZSZpbmRleD0wJmxhbmc9Y3NzJlwiXG5cblxuLyogbm9ybWFsaXplIGNvbXBvbmVudCAqL1xuaW1wb3J0IG5vcm1hbGl6ZXIgZnJvbSBcIiEuLi8uLi8uLi8uLi8uLi9odWJ1ZGVyL0hCdWlsZGVyL0hCdWlsZGVyWC9wbHVnaW5zL3VuaWFwcC1jbGkvbm9kZV9tb2R1bGVzL0BkY2xvdWRpby92dWUtY2xpLXBsdWdpbi11bmkvcGFja2FnZXMvdnVlLWxvYWRlci9saWIvcnVudGltZS9jb21wb25lbnROb3JtYWxpemVyLmpzXCJcbnZhciBjb21wb25lbnQgPSBub3JtYWxpemVyKFxuICBzY3JpcHQsXG4gIHJlbmRlcixcbiAgc3RhdGljUmVuZGVyRm5zLFxuICBmYWxzZSxcbiAgbnVsbCxcbiAgbnVsbCxcbiAgbnVsbCxcbiAgZmFsc2UsXG4gIGNvbXBvbmVudHMsXG4gIHJlbmRlcmpzXG4pXG5cbmNvbXBvbmVudC5vcHRpb25zLl9fZmlsZSA9IFwicGFnZXMvbWFpbi9qb2ludmlwL2pvaW52aXAudnVlXCJcbmV4cG9ydCBkZWZhdWx0IGNvbXBvbmVudC5leHBvcnRzIiwiZXhwb3J0ICogZnJvbSBcIi0hLi4vLi4vLi4vLi4vLi4vaHVidWRlci9IQnVpbGRlci9IQnVpbGRlclgvcGx1Z2lucy91bmlhcHAtY2xpL25vZGVfbW9kdWxlcy9AZGNsb3VkaW8vdnVlLWNsaS1wbHVnaW4tdW5pL3BhY2thZ2VzL3Z1ZS1sb2FkZXIvbGliL2xvYWRlcnMvdGVtcGxhdGVMb2FkZXIuanM/P3Z1ZS1sb2FkZXItb3B0aW9ucyEuLi8uLi8uLi8uLi8uLi9odWJ1ZGVyL0hCdWlsZGVyL0hCdWlsZGVyWC9wbHVnaW5zL3VuaWFwcC1jbGkvbm9kZV9tb2R1bGVzL0BkY2xvdWRpby92dWUtY2xpLXBsdWdpbi11bmkvcGFja2FnZXMvd2VicGFjay1wcmVwcm9jZXNzLWxvYWRlci9pbmRleC5qcz8/cmVmLS0xNi0wIS4uLy4uLy4uLy4uLy4uL2h1YnVkZXIvSEJ1aWxkZXIvSEJ1aWxkZXJYL3BsdWdpbnMvdW5pYXBwLWNsaS9ub2RlX21vZHVsZXMvQGRjbG91ZGlvL3dlYnBhY2stdW5pLW1wLWxvYWRlci9saWIvdGVtcGxhdGUuanMhLi4vLi4vLi4vLi4vLi4vaHVidWRlci9IQnVpbGRlci9IQnVpbGRlclgvcGx1Z2lucy91bmlhcHAtY2xpL25vZGVfbW9kdWxlcy9AZGNsb3VkaW8vdnVlLWNsaS1wbHVnaW4tdW5pL3BhY2thZ2VzL3dlYnBhY2stdW5pLWFwcC1sb2FkZXIvcGFnZS1tZXRhLmpzIS4uLy4uLy4uLy4uLy4uL2h1YnVkZXIvSEJ1aWxkZXIvSEJ1aWxkZXJYL3BsdWdpbnMvdW5pYXBwLWNsaS9ub2RlX21vZHVsZXMvQGRjbG91ZGlvL3Z1ZS1jbGktcGx1Z2luLXVuaS9wYWNrYWdlcy92dWUtbG9hZGVyL2xpYi9pbmRleC5qcz8/dnVlLWxvYWRlci1vcHRpb25zIS4uLy4uLy4uLy4uLy4uL2h1YnVkZXIvSEJ1aWxkZXIvSEJ1aWxkZXJYL3BsdWdpbnMvdW5pYXBwLWNsaS9ub2RlX21vZHVsZXMvQGRjbG91ZGlvL3dlYnBhY2stdW5pLW1wLWxvYWRlci9saWIvc3R5bGUuanMhLi9qb2ludmlwLnZ1ZT92dWUmdHlwZT10ZW1wbGF0ZSZpZD0zZWQwOGE3YSZcIiIsInZhciBjb21wb25lbnRzXG50cnkge1xuICBjb21wb25lbnRzID0ge1xuICAgIHVBdmF0YXI6IGZ1bmN0aW9uKCkge1xuICAgICAgcmV0dXJuIGltcG9ydChcbiAgICAgICAgLyogd2VicGFja0NodW5rTmFtZTogXCJub2RlLW1vZHVsZXMvdXZpZXctdWkvY29tcG9uZW50cy91LWF2YXRhci91LWF2YXRhclwiICovIFwidXZpZXctdWkvY29tcG9uZW50cy91LWF2YXRhci91LWF2YXRhci52dWVcIlxuICAgICAgKVxuICAgIH0sXG4gICAgdUVtcHR5OiBmdW5jdGlvbigpIHtcbiAgICAgIHJldHVybiBpbXBvcnQoXG4gICAgICAgIC8qIHdlYnBhY2tDaHVua05hbWU6IFwibm9kZS1tb2R1bGVzL3V2aWV3LXVpL2NvbXBvbmVudHMvdS1lbXB0eS91LWVtcHR5XCIgKi8gXCJ1dmlldy11aS9jb21wb25lbnRzL3UtZW1wdHkvdS1lbXB0eS52dWVcIlxuICAgICAgKVxuICAgIH1cbiAgfVxufSBjYXRjaCAoZSkge1xuICBpZiAoXG4gICAgZS5tZXNzYWdlLmluZGV4T2YoXCJDYW5ub3QgZmluZCBtb2R1bGVcIikgIT09IC0xICYmXG4gICAgZS5tZXNzYWdlLmluZGV4T2YoXCIudnVlXCIpICE9PSAtMVxuICApIHtcbiAgICBjb25zb2xlLmVycm9yKGUubWVzc2FnZSlcbiAgICBjb25zb2xlLmVycm9yKFwiMS4g5o6S5p+l57uE5Lu25ZCN56ew5ou85YaZ5piv5ZCm5q2j56GuXCIpXG4gICAgY29uc29sZS5lcnJvcihcbiAgICAgIFwiMi4g5o6S5p+l57uE5Lu25piv5ZCm56ym5ZCIIGVhc3ljb20g6KeE6IyD77yM5paH5qGj77yaaHR0cHM6Ly91bmlhcHAuZGNsb3VkLm5ldC5jbi9jb2xsb2NhdGlvbi9wYWdlcz9pZD1lYXN5Y29tXCJcbiAgICApXG4gICAgY29uc29sZS5lcnJvcihcbiAgICAgIFwiMy4g6Iul57uE5Lu25LiN56ym5ZCIIGVhc3ljb20g6KeE6IyD77yM6ZyA5omL5Yqo5byV5YWl77yM5bm25ZyoIGNvbXBvbmVudHMg5Lit5rOo5YaM6K+l57uE5Lu2XCJcbiAgICApXG4gIH0gZWxzZSB7XG4gICAgdGhyb3cgZVxuICB9XG59XG52YXIgcmVuZGVyID0gZnVuY3Rpb24oKSB7XG4gIHZhciBfdm0gPSB0aGlzXG4gIHZhciBfaCA9IF92bS4kY3JlYXRlRWxlbWVudFxuICB2YXIgX2MgPSBfdm0uX3NlbGYuX2MgfHwgX2hcbiAgdmFyIHMwID0gX3ZtLl9fZ2V0X3N0eWxlKFtcbiAgICBfdm0uc3RhdHVzQmFySGVpZ2h0IDwgNDBcbiAgICAgID8ge1xuICAgICAgICAgIG1hcmdpblRvcDogMi42ICogX3ZtLnN0YXR1c0JhckhlaWdodCArIFwicnB4XCJcbiAgICAgICAgfVxuICAgICAgOiB7XG4gICAgICAgICAgbWFyZ2luVG9wOiAyLjMgKiBfdm0uc3RhdHVzQmFySGVpZ2h0ICsgXCJycHhcIlxuICAgICAgICB9XG4gIF0pXG5cbiAgdmFyIG0wID1cbiAgICAhKF92bS5iYXNlQ29uZmlnLmlzX29wZW5fbnVtID09IFwiMFwiKSAmJlxuICAgICEoX3ZtLnVzZXJJbmZvLnZpcFR5cGUgPT0gMSkgJiZcbiAgICBfdm0udXNlckluZm8udmlwVHlwZSA9PSAyXG4gICAgICA/IF92bS5ibGFuY2VEYXRlTnVtKF92bS51c2VySW5mby5ibGFuY2VEYXRlKVxuICAgICAgOiBudWxsXG4gIF92bS4kbXAuZGF0YSA9IE9iamVjdC5hc3NpZ24oXG4gICAge30sXG4gICAge1xuICAgICAgJHJvb3Q6IHtcbiAgICAgICAgczA6IHMwLFxuICAgICAgICBtMDogbTBcbiAgICAgIH1cbiAgICB9XG4gIClcbn1cbnZhciByZWN5Y2xhYmxlUmVuZGVyID0gZmFsc2VcbnZhciBzdGF0aWNSZW5kZXJGbnMgPSBbXVxucmVuZGVyLl93aXRoU3RyaXBwZWQgPSB0cnVlXG5cbmV4cG9ydCB7IHJlbmRlciwgc3RhdGljUmVuZGVyRm5zLCByZWN5Y2xhYmxlUmVuZGVyLCBjb21wb25lbnRzIH0iLCJpbXBvcnQgbW9kIGZyb20gXCItIS4uLy4uLy4uLy4uLy4uL2h1YnVkZXIvSEJ1aWxkZXIvSEJ1aWxkZXJYL3BsdWdpbnMvdW5pYXBwLWNsaS9ub2RlX21vZHVsZXMvYmFiZWwtbG9hZGVyL2xpYi9pbmRleC5qcyEuLi8uLi8uLi8uLi8uLi9odWJ1ZGVyL0hCdWlsZGVyL0hCdWlsZGVyWC9wbHVnaW5zL3VuaWFwcC1jbGkvbm9kZV9tb2R1bGVzL0BkY2xvdWRpby92dWUtY2xpLXBsdWdpbi11bmkvcGFja2FnZXMvd2VicGFjay1wcmVwcm9jZXNzLWxvYWRlci9pbmRleC5qcz8/cmVmLS0xMi0xIS4uLy4uLy4uLy4uLy4uL2h1YnVkZXIvSEJ1aWxkZXIvSEJ1aWxkZXJYL3BsdWdpbnMvdW5pYXBwLWNsaS9ub2RlX21vZHVsZXMvQGRjbG91ZGlvL3dlYnBhY2stdW5pLW1wLWxvYWRlci9saWIvc2NyaXB0LmpzIS4uLy4uLy4uLy4uLy4uL2h1YnVkZXIvSEJ1aWxkZXIvSEJ1aWxkZXJYL3BsdWdpbnMvdW5pYXBwLWNsaS9ub2RlX21vZHVsZXMvQGRjbG91ZGlvL3Z1ZS1jbGktcGx1Z2luLXVuaS9wYWNrYWdlcy92dWUtbG9hZGVyL2xpYi9pbmRleC5qcz8/dnVlLWxvYWRlci1vcHRpb25zIS4uLy4uLy4uLy4uLy4uL2h1YnVkZXIvSEJ1aWxkZXIvSEJ1aWxkZXJYL3BsdWdpbnMvdW5pYXBwLWNsaS9ub2RlX21vZHVsZXMvQGRjbG91ZGlvL3dlYnBhY2stdW5pLW1wLWxvYWRlci9saWIvc3R5bGUuanMhLi9qb2ludmlwLnZ1ZT92dWUmdHlwZT1zY3JpcHQmbGFuZz1qcyZcIjsgZXhwb3J0IGRlZmF1bHQgbW9kOyBleHBvcnQgKiBmcm9tIFwiLSEuLi8uLi8uLi8uLi8uLi9odWJ1ZGVyL0hCdWlsZGVyL0hCdWlsZGVyWC9wbHVnaW5zL3VuaWFwcC1jbGkvbm9kZV9tb2R1bGVzL2JhYmVsLWxvYWRlci9saWIvaW5kZXguanMhLi4vLi4vLi4vLi4vLi4vaHVidWRlci9IQnVpbGRlci9IQnVpbGRlclgvcGx1Z2lucy91bmlhcHAtY2xpL25vZGVfbW9kdWxlcy9AZGNsb3VkaW8vdnVlLWNsaS1wbHVnaW4tdW5pL3BhY2thZ2VzL3dlYnBhY2stcHJlcHJvY2Vzcy1sb2FkZXIvaW5kZXguanM/P3JlZi0tMTItMSEuLi8uLi8uLi8uLi8uLi9odWJ1ZGVyL0hCdWlsZGVyL0hCdWlsZGVyWC9wbHVnaW5zL3VuaWFwcC1jbGkvbm9kZV9tb2R1bGVzL0BkY2xvdWRpby93ZWJwYWNrLXVuaS1tcC1sb2FkZXIvbGliL3NjcmlwdC5qcyEuLi8uLi8uLi8uLi8uLi9odWJ1ZGVyL0hCdWlsZGVyL0hCdWlsZGVyWC9wbHVnaW5zL3VuaWFwcC1jbGkvbm9kZV9tb2R1bGVzL0BkY2xvdWRpby92dWUtY2xpLXBsdWdpbi11bmkvcGFja2FnZXMvdnVlLWxvYWRlci9saWIvaW5kZXguanM/P3Z1ZS1sb2FkZXItb3B0aW9ucyEuLi8uLi8uLi8uLi8uLi9odWJ1ZGVyL0hCdWlsZGVyL0hCdWlsZGVyWC9wbHVnaW5zL3VuaWFwcC1jbGkvbm9kZV9tb2R1bGVzL0BkY2xvdWRpby93ZWJwYWNrLXVuaS1tcC1sb2FkZXIvbGliL3N0eWxlLmpzIS4vam9pbnZpcC52dWU/dnVlJnR5cGU9c2NyaXB0Jmxhbmc9anMmXCIiLCI8dGVtcGxhdGU+XHJcblx0PHZpZXc+XHJcblx0XHQ8dmlldz5cclxuXHRcdFx0PGltYWdlIGNsYXNzPVwidG9wQmdcIiBtb2RlPVwiYXNwZWN0RmlsbFwiIHNyYz1cIi4uLy4uLy4uL3N0YXRpYy9taW5lX3RvcF9iZy5wbmdcIj48L2ltYWdlPlxyXG5cdFx0XHQ8dmlldyBjbGFzcz1cInBvc2l0aW9uX3RvcFwiPlxyXG5cdFx0XHRcdDx2aWV3IGNsYXNzPVwiaGVhZGVyXCI+XHJcblx0XHRcdFx0XHQ8IS0tIDx2aWV3IGNsYXNzPVwidG9wXCI+PC92aWV3PiAtLT5cclxuXHRcdFx0XHRcdDx2aWV3IGNsYXNzPVwicm93IHBvc2l0aW9uXCJcclxuXHRcdFx0XHRcdFx0OnN0eWxlPVwiW3N0YXR1c0JhckhlaWdodDw0MD97bWFyZ2luVG9wOjIuNipzdGF0dXNCYXJIZWlnaHQrJ3JweCd9OnttYXJnaW5Ub3A6Mi4zKnN0YXR1c0JhckhlaWdodCsncnB4J31dXCI+XHJcblx0XHRcdFx0XHRcdDx2aWV3IGNsYXNzPVwidGl0bGVcIj5cclxuXHRcdFx0XHRcdFx0XHQ8aW1hZ2UgQGNsaWNrPVwiYmFja1BhZ2VcIiBjbGFzcz1cImJhY2tJbWdcIiBzcmM9XCIuLi8uLi8uLi9zdGF0aWMvYmFja19pY29uLnBuZ1wiPjwvaW1hZ2U+5Lya5ZGY5YWF5YC8XHJcblx0XHRcdFx0XHRcdDwvdmlldz5cclxuXHRcdFx0XHRcdFx0PHZpZXcgY2xhc3M9XCJtaW5lSW5mb1wiPlxyXG5cdFx0XHRcdFx0XHRcdDx2aWV3IGNsYXNzPVwicm93IHVzZXJSb3dcIj5cclxuXHRcdFx0XHRcdFx0XHRcdDwhLS0gXHQ8dS0taW1hZ2Ugc2hhcGU9XCJjaXJjbGVcIiA6c3JjPVwidXNlckluZm8uYXZhdGFyXCIgd2lkdGg9XCI4MHB4XCIgaGVpZ2h0PVwiODBweFwiPlxyXG5cdFx0XHRcdFx0XHRcdFx0PC91LS1pbWFnZT4gLS0+XHJcblx0XHRcdFx0XHRcdFx0XHQ8dS1hdmF0YXIgOnNyYz1cInVzZXJJbmZvLmF2YXRhclwiIHNoYXBlPVwiY2lyY2xlXCIgc2l6ZT1cIjgwcHhcIj48L3UtYXZhdGFyPlxyXG5cdFx0XHRcdFx0XHRcdFx0PHZpZXcgc3R5bGU9XCJtYXJnaW4tbGVmdDogMzBycHg7IHRleHQtYWxpZ246IGxlZnQ7XCI+XHJcblx0XHRcdFx0XHRcdFx0XHRcdDx2aWV3IGNsYXNzPVwicm93XCI+XHJcblx0XHRcdFx0XHRcdFx0XHRcdFx0PHZpZXcgY2xhc3M9XCJ1c2VyTmFtZVwiPnt7dXNlckluZm8ubmlja05hbWV9fVxyXG5cdFx0XHRcdFx0XHRcdFx0XHRcdDwvdmlldz5cclxuXHJcblx0XHRcdFx0XHRcdFx0XHRcdFx0PHZpZXcgY2xhc3M9XCJ2aXBUaXBcIj5cclxuXHRcdFx0XHRcdFx0XHRcdFx0XHRcdDxpbWFnZSBzcmM9XCIuLi8uLi8uLi9zdGF0aWMvbWluZV92aXBfaWNvbi5wbmdcIlxyXG5cdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHRzdHlsZT1cIndpZHRoOiAxMzJycHg7aGVpZ2h0OiAzOHJweDtcIj5cclxuXHRcdFx0XHRcdFx0XHRcdFx0XHRcdDwvaW1hZ2U+XHJcblx0XHRcdFx0XHRcdFx0XHRcdFx0XHQ8dmlldyB2LWlmPVwiYmFzZUNvbmZpZy5pc19vcGVuX251bT09JzAnXCIgY2xhc3M9XCJ2aXBUZXh0XCI+6ZmQ5pe25YWN6LS5PC92aWV3PlxyXG5cdFx0XHRcdFx0XHRcdFx0XHRcdFx0PHZpZXcgdi1lbHNlLWlmPVwidXNlckluZm8udmlwVHlwZT09MVwiIGNsYXNzPVwidmlwVGV4dFwiPuaMieasoeiuoeeulzwvdmlldz5cclxuXHRcdFx0XHRcdFx0XHRcdFx0XHRcdDx2aWV3IHYtZWxzZS1pZj1cInVzZXJJbmZvLnZpcFR5cGU9PTJcIiBjbGFzcz1cInZpcFRleHRcIj7mjInml7borqHnrpc8L3ZpZXc+XHJcblxyXG5cdFx0XHRcdFx0XHRcdFx0XHRcdDwvdmlldz5cclxuXHRcdFx0XHRcdFx0XHRcdFx0PC92aWV3PlxyXG5cdFx0XHRcdFx0XHRcdFx0XHQ8dmlldyB2LWlmPVwiYmFzZUNvbmZpZy5pc19vcGVuX251bT09JzAnXCIgY2xhc3M9XCJ1c2VyRGVzXCI+6Zeu562UOuaXoOmZkOWItjwvdmlldz5cclxuXHRcdFx0XHRcdFx0XHRcdFx0PHZpZXcgdi1lbHNlLWlmPVwidXNlckluZm8udmlwVHlwZT09MVwiIGNsYXNzPVwidXNlckRlc1wiPumXruetlOasoeaVsDp7e3VzZXJJbmZvLmJsYW5jZU51bX19XHJcblx0XHRcdFx0XHRcdFx0XHRcdDwvdmlldz5cclxuXHRcdFx0XHRcdFx0XHRcdFx0PHZpZXcgdi1lbHNlLWlmPVwidXNlckluZm8udmlwVHlwZT09MlwiIGNsYXNzPVwidXNlckRlc1wiPlxyXG5cdFx0XHRcdFx0XHRcdFx0XHRcdOmXruetlOaXtumVvyjliIbpkp8pOnt7YmxhbmNlRGF0ZU51bSh1c2VySW5mby5ibGFuY2VEYXRlKX19PC92aWV3PlxyXG5cdFx0XHRcdFx0XHRcdFx0PC92aWV3PlxyXG5cdFx0XHRcdFx0XHRcdDwvdmlldz5cclxuXHJcblxyXG5cdFx0XHRcdFx0XHRcdDx2aWV3IGNsYXNzPVwicm93XCI+XHJcblx0XHRcdFx0XHRcdFx0XHQ8dmlldyBjbGFzcz1cInRvcENoZWNrXCIgQGNsaWNrPVwiY2hhbmdlVHlwZSgxKVwiPlxyXG5cdFx0XHRcdFx0XHRcdFx0XHQ8dmlldyB2LWlmPVwidHlwZT09MVwiIGNsYXNzPVwiIHN1clRleHRcIj5cclxuXHRcdFx0XHRcdFx0XHRcdFx0XHTotoXnuqdWSVBcclxuXHRcdFx0XHRcdFx0XHRcdFx0PC92aWV3PlxyXG5cdFx0XHRcdFx0XHRcdFx0XHQ8dmlldyB2LWlmPVwidHlwZT09MlwiIGNsYXNzPVwiIHVuc3VyVGV4dFwiPlxyXG5cdFx0XHRcdFx0XHRcdFx0XHRcdOi2hee6p1ZJUFxyXG5cdFx0XHRcdFx0XHRcdFx0XHQ8L3ZpZXc+XHJcblx0XHRcdFx0XHRcdFx0XHQ8L3ZpZXc+XHJcblx0XHRcdFx0XHRcdFx0XHQ8dmlldyBjbGFzcz1cInRvcENoZWNrXCIgQGNsaWNrPVwiY2hhbmdlVHlwZSgyKVwiPlxyXG5cdFx0XHRcdFx0XHRcdFx0XHQ8dmlldyB2LWlmPVwidHlwZT09MlwiIGNsYXNzPVwiIHNvVGV4dFwiPlxyXG5cdFx0XHRcdFx0XHRcdFx0XHRcdOaZrumAmlZJUFxyXG5cdFx0XHRcdFx0XHRcdFx0XHQ8L3ZpZXc+XHJcblx0XHRcdFx0XHRcdFx0XHRcdDx2aWV3IHYtaWY9XCJ0eXBlPT0xXCIgY2xhc3M9XCIgdW5zb1RleHRcIj5cclxuXHRcdFx0XHRcdFx0XHRcdFx0XHTmma7pgJpWSVBcclxuXHRcdFx0XHRcdFx0XHRcdFx0PC92aWV3PlxyXG5cdFx0XHRcdFx0XHRcdFx0PC92aWV3PlxyXG5cdFx0XHRcdFx0XHRcdDwvdmlldz5cclxuXHJcblx0XHRcdFx0XHRcdFx0PHZpZXcgY2xhc3M9XCJ0b3BSb3VuZFwiPlxyXG5cdFx0XHRcdFx0XHRcdFx0PHZpZXcgY2xhc3M9XCJyb2xlLW1vZGVsXCI+XHJcblx0XHRcdFx0XHRcdFx0XHRcdDwhLS0gXHQ8dmlldyB2LWZvcj1cIihpdGVtLGluZGV4KSBpbiBwcmljZUxpc3RcIiBjbGFzcz1cInJvbGVcIiA6a2V5PVwiaW5kZXhcIj5cclxuXHRcdFx0XHRcdFx0XHRcdFx0PHZpZXcgQGNsaWNrPVwiY2hlY2tJdGVtKGluZGV4KVwiPlxyXG5cdFx0XHRcdFx0XHRcdFx0XHRcdFx0PHZpZXcgdi1pZj1cIml0ZW0uY2hlY2tcIiBjbGFzcz1cInNlbGVjdEl0ZW1cIj5cclxuXHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0PHZpZXcgY2xhc3M9XCJpdGVtVGl0bGVcIj5cclxuXHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHR7e2l0ZW0udGl0bGV9fVxyXG5cdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHQ8L3ZpZXc+XHJcblx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdDx2aWV3IGNsYXNzPVwicm93IHNlbGVjdHByaWNlXCI+XHJcblx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0PHZpZXcgc3R5bGU9XCJmb250LXNpemU6IDM2cnB4O1wiPu+/pTwvdmlldz5cclxuXHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHQ8dmlldyBjbGFzcz1cInByaWNlTnVtXCI+e3tpdGVtLnByaWNlfX08L3ZpZXc+XHJcblx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdDwvdmlldz5cclxuXHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0PHZpZXcgY2xhc3M9XCJvbGRQaXJjZVwiPuWOn+S7t++/pXt7aXRlbS5vbGRwcmljZX195YWDPC92aWV3PlxyXG5cdFx0XHRcdFx0XHRcdFx0XHRcdFx0PC92aWV3PlxyXG5cdFx0XHRcdFx0XHRcdFx0XHRcdFx0PHZpZXcgdi1pZj1cIiFpdGVtLmNoZWNrXCIgY2xhc3M9XCJ1bnNlbGVjdEl0ZW1cIj5cclxuXHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0PHZpZXcgY2xhc3M9XCJpdGVtVGl0bGVcIj5cclxuXHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHR7e2l0ZW0udGl0bGV9fVxyXG5cdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHQ8L3ZpZXc+XHJcblx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdDx2aWV3IGNsYXNzPVwicm93IHVuc2VsZWN0cHJpY2VcIj5cclxuXHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHQ8dmlldyBzdHlsZT1cImZvbnQtc2l6ZTogMzZycHg7XCI+77+lPC92aWV3PlxyXG5cdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdDx2aWV3IGNsYXNzPVwicHJpY2VOdW1cIj57e2l0ZW0ucHJpY2V9fTwvdmlldz5cclxuXHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0PC92aWV3PlxyXG5cdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHQ8dmlldyBjbGFzcz1cIm9sZFBpcmNlXCI+5Y6f5Lu377+le3tpdGVtLm9sZHByaWNlfX3lhYM8L3ZpZXc+XHJcblx0XHRcdFx0XHRcdFx0XHRcdFx0XHQ8L3ZpZXc+XHJcblx0XHRcdFx0XHRcdFx0XHRcdFx0PC92aWV3PlxyXG5cdFx0XHRcdFx0XHRcdFx0XHQ8L3ZpZXc+IC0tPlxyXG5cdFx0XHRcdFx0XHRcdFx0XHQ8dS1lbXB0eSBtb2RlPVwiZGF0YVwiIGljb249XCJodHRwOi8vY2RuLnV2aWV3dWkuY29tL3V2aWV3L2VtcHR5L2RhdGEucG5nXCIgdGV4dD1cIuaaguaXoOWll+mkkFwiPlxyXG5cdFx0XHRcdFx0XHRcdFx0XHQ8L3UtZW1wdHk+XHJcblx0XHRcdFx0XHRcdFx0XHQ8L3ZpZXc+XHJcblxyXG5cdFx0XHRcdFx0XHRcdFx0PCEtLSA8dmlldyBjbGFzcz1cInRpcHNcIj7kuI3pmZDmrKHogYrlpKksIOWFg0Fs5Y2P5Yqp5bel5L2c5pu05b+r6JC95ZywPC92aWV3PiAtLT5cclxuXHJcblx0XHRcdFx0XHRcdFx0XHQ8dmlldyBjbGFzcz1cImxpbmVcIj48L3ZpZXc+XHJcblxyXG5cdFx0XHRcdFx0XHRcdFx0PHZpZXcgY2xhc3M9XCJjYXJkVGl0bGVcIj7ljaHlr4blhYXlgLw8L3ZpZXc+XHJcblxyXG5cdFx0XHRcdFx0XHRcdFx0PHZpZXcgY2xhc3M9XCJjYXJkSW5wdXQgcm93XCI+XHJcblx0XHRcdFx0XHRcdFx0XHRcdDxpbnB1dCBjbGFzcz1cImNhcmRJbnB1dFRleHRcIiBwbGFjZWhvbGRlcj1cIuivt+i+k+WFpTMy5L2N5Y2h5a+GXCJcclxuXHRcdFx0XHRcdFx0XHRcdFx0XHRwbGFjZWhvbGRlci1jbGFzcz1cImNhcmRJbnB1dFBsYWNlXCIgdi1tb2RlbD1cImludGl2YXRlQ2FyZFwiIC8+XHJcblx0XHRcdFx0XHRcdFx0XHRcdDx2aWV3IGNsYXNzPVwiZ2V0QnRuXCIgQGNsaWNrPVwidXNlSW50aXZhdGVDYXJkXCI+5YWF5YC8PC92aWV3PlxyXG5cdFx0XHRcdFx0XHRcdFx0PC92aWV3PlxyXG5cclxuXHRcdFx0XHRcdFx0XHRcdDxidXR0b24gaG92ZXItY2xhc3M9XCJub25lXCIgb3Blbi10eXBlPVwiY29udGFjdFwiIGNsYXNzPVwicm93IGtmUm93XCIgQGNsaWNrPVwiYWJvdXRVc1wiPlxyXG5cdFx0XHRcdFx0XHRcdFx0XHQ8aW1hZ2Ugc3JjPVwiLi4vLi4vLi4vc3RhdGljL2Fib3V0dXNfaWNvbi5wbmdcIiBjbGFzcz1cImtmSW1nXCI+PC9pbWFnZT5cclxuXHRcdFx0XHRcdFx0XHRcdFx0PHZpZXcgY2xhc3M9XCJhYm91dFVzXCI+6K+36IGU57O75a6i5pyN6I635Y+W77yIUee+pDo1NzU0NTE2MjXvvIk8L3ZpZXc+XHJcblx0XHRcdFx0XHRcdFx0XHQ8L2J1dHRvbj5cclxuXHJcblx0XHRcdFx0XHRcdFx0XHQ8IS0tIFx0XHRcdFx0XHRcdFx0XHQ8dmlldyBjbGFzcz1cInJvdyBrZlJvd1wiIEBjbGljaz1cImFib3V0VXNcIj5cclxuXHRcdFx0XHRcdFx0XHRcdFx0PGltYWdlIHNyYz1cIi4uLy4uLy4uL3N0YXRpYy9hYm91dHVzX2ljb24ucG5nXCIgY2xhc3M9XCJrZkltZ1wiPjwvaW1hZ2U+XHJcblx0XHRcdFx0XHRcdFx0XHRcclxuXHRcdFx0XHRcdFx0XHRcdFx0PHZpZXcgY2xhc3M9XCJhYm91dFVzXCI+6K+36IGU57O75a6i5pyN6I635Y+WPC92aWV3PlxyXG5cdFx0XHRcdFx0XHRcdFx0PC92aWV3PiAtLT5cclxuXHRcdFx0XHRcdFx0XHQ8L3ZpZXc+XHJcblxyXG5cdFx0XHRcdFx0XHRcdDx2aWV3IGNsYXNzPVwiYnVsZV9idG5cIj7noa7orqTljY/orq7lubbmlK/ku5g8L3ZpZXc+XHJcblx0XHRcdFx0XHRcdDwvdmlldz5cclxuXHRcdFx0XHRcdDwvdmlldz5cclxuXHRcdFx0XHQ8L3ZpZXc+XHJcblxyXG5cdFx0XHQ8L3ZpZXc+XHJcblx0XHQ8L3ZpZXc+XHJcblxyXG5cclxuXHQ8L3ZpZXc+XHJcbjwvdGVtcGxhdGU+XHJcblxyXG48c2NyaXB0PlxyXG5cdGltcG9ydCByZXF1ZXN0IGZyb20gXCIuLi8uLi8uLi9yZXF1ZXN0L3JlcXVlc3QuanNcIjtcclxuXHRpbXBvcnQgdXRpbCBmcm9tIFwiLi4vLi4vLi4vdXRpbC91dGlsLmpzXCI7XHJcblx0ZXhwb3J0IGRlZmF1bHQge1xyXG5cdFx0ZGF0YSgpIHtcclxuXHRcdFx0cmV0dXJuIHtcclxuXHRcdFx0XHR0eXBlOiAxLFxyXG5cdFx0XHRcdHN0YXR1c0JhckhlaWdodDogMCxcclxuXHRcdFx0XHRwcmljZUxpc3Q6IFt7XHJcblx0XHRcdFx0XHR0aXRsZTogJ+WNiuaciOS8muWRmCcsXHJcblx0XHRcdFx0XHRwcmljZTogODgsXHJcblx0XHRcdFx0XHRvbGRwcmljZTogOTksXHJcblx0XHRcdFx0XHRjaGVjazogZmFsc2VcclxuXHRcdFx0XHR9LCB7XHJcblx0XHRcdFx0XHR0aXRsZTogJ+WNiuaciOS8muWRmCcsXHJcblx0XHRcdFx0XHRwcmljZTogODgsXHJcblx0XHRcdFx0XHRvbGRwcmljZTogOTksXHJcblx0XHRcdFx0XHRjaGVjazogZmFsc2VcclxuXHRcdFx0XHR9LCB7XHJcblx0XHRcdFx0XHR0aXRsZTogJ+WNiuaciOS8muWRmCcsXHJcblx0XHRcdFx0XHRwcmljZTogODgsXHJcblx0XHRcdFx0XHRvbGRwcmljZTogOTksXHJcblx0XHRcdFx0XHRjaGVjazogZmFsc2VcclxuXHRcdFx0XHR9LCB7XHJcblx0XHRcdFx0XHR0aXRsZTogJ+WNiuaciOS8muWRmCcsXHJcblx0XHRcdFx0XHRwcmljZTogODgsXHJcblx0XHRcdFx0XHRvbGRwcmljZTogOTksXHJcblx0XHRcdFx0XHRjaGVjazogZmFsc2VcclxuXHRcdFx0XHR9XSxcclxuXHRcdFx0XHR1c2VySW5mbzoge1xyXG5cdFx0XHRcdFx0J25pY2tOYW1lJzogJ+acqueZu+W9lScsXHJcblx0XHRcdFx0XHQnYXZhdGFyJzogdXRpbC5kZWZhdWx0QXZhdGFyKCksXHJcblx0XHRcdFx0XHQndXNlcklkJzogJy0xJyxcclxuXHRcdFx0XHRcdCdibGFuY2VOdW0nOiAnLScsXHJcblx0XHRcdFx0XHQndmlwX3R5cGUnOiAnLSdcclxuXHRcdFx0XHR9LFxyXG5cdFx0XHRcdGJhc2VDb25maWc6IHt9LFxyXG5cdFx0XHRcdGludGl2YXRlQ2FyZDonJ1xyXG5cdFx0XHR9XHJcblx0XHR9LFxyXG5cdFx0b25Mb2FkKCkge1xyXG5cdFx0XHR0aGlzLmdldFN0YXR1c0JhckhlaWdodCgpXHJcblx0XHRcdHRoaXMucHJpY2VMaXN0WzBdLmNoZWNrID0gdHJ1ZVxyXG5cdFx0fSxcclxuXHRcdG9uU2hvdygpIHtcclxuXHRcdFx0dGhpcy5pbml0YmFzZUNvbmZpZygpO1xyXG5cdFx0XHR0aGlzLmdldFVzZXJJbmZvKCk7XHJcblx0XHR9LFxyXG5cdFx0bWV0aG9kczoge1xyXG5cdFx0XHRpbml0YmFzZUNvbmZpZygpIHtcclxuXHRcdFx0XHR1dGlsLmdldGJhc2VDb25maWcoKVxyXG5cdFx0XHRcdHRoaXMuYmFzZUNvbmZpZyA9IHVuaS5nZXRTdG9yYWdlU3luYygnYmFzZUNvbmZpZycpXHJcblx0XHRcdH0sXHJcblx0XHRcdGdldFVzZXJJbmZvKCkge1xyXG5cdFx0XHRcdHJlcXVlc3QoJycsICcvdXNlci9nZXRVc2VySW5mbycsICdHRVQnLCB7fSwge30pLnRoZW4ocmVzID0+IHtcclxuXHRcdFx0XHRcdGlmIChyZXMuY29kZSA9PSAyMDApIHtcclxuXHRcdFx0XHRcdFx0dGhpcy51c2VySW5mbyA9IHJlcy5kYXRhXHJcblx0XHRcdFx0XHRcdHVuaS5zZXRTdG9yYWdlU3luYygndXNlckluZm8nLCB0aGlzLnVzZXJJbmZvKVxyXG5cdFx0XHRcdFx0fSBlbHNlIHtcclxuXHRcdFx0XHRcdFx0dXRpbC5tZXNzYWdlKFwi5Liq5Lq65L+h5oGv6I635Y+W5aSx6LSlXCIsICdlcnJvcicpXHJcblx0XHRcdFx0XHR9XHJcblx0XHRcdFx0fSlcclxuXHRcdFx0fSxcclxuXHRcdFx0YmFja1BhZ2UoKSB7XHJcblx0XHRcdFx0dW5pLm5hdmlnYXRlQmFjayh7XHJcblx0XHRcdFx0XHRkZWx0YTogMVxyXG5cdFx0XHRcdH0pXHJcblx0XHRcdH0sXHJcblx0XHRcdGdldFN0YXR1c0JhckhlaWdodCgpIHtcclxuXHRcdFx0XHR0aGlzLnN0YXR1c0JhckhlaWdodCA9IHVuaS5nZXRTeXN0ZW1JbmZvU3luYygpLnN0YXR1c0JhckhlaWdodFxyXG5cdFx0XHR9LFxyXG5cdFx0XHRjaGVja0l0ZW0oaW5kZXgpIHtcclxuXHRcdFx0XHRmb3IgKHZhciBpID0gMDsgaSA8IHRoaXMucHJpY2VMaXN0Lmxlbmd0aDsgaSsrKSB7XHJcblx0XHRcdFx0XHR0aGlzLnByaWNlTGlzdFtpXS5jaGVjayA9IGZhbHNlXHJcblx0XHRcdFx0fVxyXG5cdFx0XHRcdHRoaXMucHJpY2VMaXN0W2luZGV4XS5jaGVjayA9IHRydWVcclxuXHRcdFx0XHR0aGlzLiRmb3JjZVVwZGF0ZSgpXHJcblx0XHRcdH0sXHJcblx0XHRcdGFib3V0VXMoKSB7XHJcblx0XHRcdFx0bGV0IHRleHQgPSB0aGlzLmJhc2VDb25maWcuZ3JvdXBkZXNjXHJcblx0XHRcdFx0aWYodXRpbC5pc0JsYW5rKHRoaXMuYmFzZUNvbmZpZy5ncm91cGRlc2MpKXtcclxuXHRcdFx0XHRcdHRleHQgPSBcIlHnvqQ6NTc1NDUxNjI1XCI7XHJcblx0XHRcdFx0fVxyXG5cdFx0XHRcdHVuaS5zZXRDbGlwYm9hcmREYXRhKHtcclxuXHRcdFx0XHQgIGRhdGE6dGV4dCwvL+imgeiiq+WkjeWItueahOWGheWuuVxyXG5cdFx0XHRcdCAgc3VjY2VzczooKT0+ey8v5aSN5Yi25oiQ5Yqf55qE5Zue6LCD5Ye95pWwXHJcblx0XHRcdFx0XHR1bmkuc2hvd1RvYXN0KHsvL+aPkOekulxyXG5cdFx0XHRcdFx0ICB0aXRsZTpg5aSN5Yi25oiQ5YqfYCxcclxuXHRcdFx0XHRcdCAgaWNvbjonc3VjY2VzcydcclxuXHRcdFx0XHRcdH0pXHJcblx0XHRcdFx0ICB9XHJcblx0XHRcdFx0fSx0cnVlKTtcclxuXHRcdFx0fSxcclxuXHRcdFx0Z2V0VmlwKCkge1xyXG5cdFx0XHRcdHVuaS5zaG93VG9hc3Qoe1xyXG5cdFx0XHRcdFx0dGl0bGU6ICfpooblj5bljaHlr4YnXHJcblx0XHRcdFx0fSlcclxuXHRcdFx0fSxcclxuXHRcdFx0Y2hhbmdlVHlwZSh0eXBlKSB7XHJcblx0XHRcdFx0dGhpcy50eXBlID0gdHlwZVxyXG5cdFx0XHR9LFxyXG5cdFx0XHRibGFuY2VEYXRlTnVtKGRhdGVTdHIpIHtcclxuXHRcdFx0XHR2YXIgZGF0ZSA9IG5ldyBEYXRlKGRhdGVTdHIpO1xyXG5cdFx0XHRcdGxldCBibGFuY2UgPSBkYXRlLmdldFRpbWUoKSAvIDEwMDA7XHJcblx0XHRcdFx0bGV0IG5vdyA9IChuZXcgRGF0ZSgpLmdldFRpbWUoKSkgLyAxMDAwO1xyXG5cdFx0XHRcdGlmICgoYmxhbmNlIC0gbm93KSA+IDApIHtcclxuXHRcdFx0XHRcdC8v6L2s5o2i5oiQ5pe2XHJcblx0XHRcdFx0XHRsZXQgaG91ck51bSA9IChibGFuY2UgLSBub3cpIC8gNjBcclxuXHRcdFx0XHRcdHJldHVybiBob3VyTnVtLnRvRml4ZWQoMSk7XHJcblx0XHRcdFx0fSBlbHNlIHtcclxuXHRcdFx0XHRcdHJldHVybiAn5bey6L+H5pyfJztcclxuXHRcdFx0XHR9XHJcblx0XHRcdFxyXG5cdFx0XHR9LFxyXG5cdFx0XHR1c2VJbnRpdmF0ZUNhcmQoKSB7XHJcblx0XHRcdFx0aWYodXRpbC5pc05vdEJsYW5rKHRoaXMuaW50aXZhdGVDYXJkKSl7XHJcblx0XHRcdFx0XHRcclxuXHRcdFx0XHRcdHJlcXVlc3QoJycsICcvY3JpY2xlYWkvcmVjaGFyZ2VhYmxlY2FyZHByb2Nlc3MvdXNlP2NhcmROdW1iZXI9Jyt0aGlzLmludGl2YXRlQ2FyZCwgJ1BPU1QnLCB7fSwge30pLnRoZW4ocmVzID0+IHtcclxuXHRcdFx0XHRcdFx0aWYgKHJlcy5jb2RlID09IDIwMCkge1xyXG5cdFx0XHRcdFx0XHRcdHV0aWwubWVzc2FnZShcIua/gOa0u+aIkOWKn1wiLCAnc3VjY2VzcycpXHJcblx0XHRcdFx0XHRcdFx0dGhpcy5nZXRVc2VySW5mbygpXHJcblx0XHRcdFx0XHRcdH0gZWxzZSB7XHJcblx0XHRcdFx0XHRcdFx0dXRpbC5tZXNzYWdlKHJlcy5tc2csICdlcnJvcicpXHJcblx0XHRcdFx0XHRcdH1cclxuXHRcdFx0XHRcdH0pXHJcblx0XHRcdFx0fWVsc2V7XHJcblx0XHRcdFx0XHRcdHV0aWwubWVzc2FnZShcIua/gOa0u+eggeS4jeWPr+S4uuepulwiLCAnZXJyb3InKVxyXG5cdFx0XHRcdH1cclxuXHRcdFx0fVxyXG5cdFx0fVxyXG5cdH1cclxuPC9zY3JpcHQ+XHJcblxyXG48c3R5bGU+XHJcblx0cGFnZSB7XHJcblx0XHRiYWNrZ3JvdW5kLWNvbG9yOiAjZjZmNmY2O1xyXG5cdH1cclxuXHJcblx0LmJ1bGVfYnRuIHtcclxuXHRcdHdpZHRoOiAtd2Via2l0LWZpbGwtYXZhaWxhYmxlO1xyXG5cdFx0cGFkZGluZzogMjhycHg7XHJcblx0XHRmb250LXNpemU6IDM4cnB4O1xyXG5cdFx0Zm9udC13ZWlnaHQ6IDcwMDtcclxuXHRcdHRleHQtYWxpZ246IGNlbnRlcjtcclxuXHRcdG1hcmdpbi1sZWZ0OiA1MHJweDtcclxuXHRcdG1hcmdpbi1yaWdodDogNTBycHg7XHJcblx0XHRjb2xvcjogd2hpdGU7XHJcblx0XHRiYWNrZ3JvdW5kLWNvbG9yOiAjMzM4N0ZGO1xyXG5cdFx0Ym9yZGVyLXJhZGl1czogMTJycHg7XHJcblx0XHRtYXJnaW4tdG9wOiA4OHJweDtcclxuXHR9XHJcblxyXG5cdC5hYm91dFVzIHtcclxuXHRcdGZvbnQtc2l6ZTogMjRycHg7XHJcblx0XHRjb2xvcjogIzQ5NEE0QztcclxuXHRcdG1hcmdpbi1sZWZ0OiAyMHJweDtcclxuXHR9XHJcblxyXG5cdC5rZlJvdyB7XHJcblx0XHRtYXJnaW4tdG9wOiAyMHJweDtcclxuXHRcdC8qIG1hcmdpbi1sZWZ0OiAyMHJweDsgKi9cclxuXHR9XHJcblxyXG5cdC5rZkltZyB7XHJcblxyXG5cdFx0d2lkdGg6IDQwcnB4O1xyXG5cdFx0aGVpZ2h0OiA0MHJweDtcclxuXHR9XHJcblxyXG5cdC5nZXRCdG4ge1xyXG5cdFx0aGVpZ2h0OiA3MnJweDtcclxuXHRcdGNvbG9yOiB3aGl0ZTtcclxuXHRcdGJhY2tncm91bmQtY29sb3I6ICMzMzg3RkY7XHJcblx0XHRib3JkZXI6IDFycHggc29saWQgIzMzODdGRjtcclxuXHRcdHdpZHRoOiAxNDBycHg7XHJcblx0XHRkaXNwbGF5OiBmbGV4O1xyXG5cdFx0YWxpZ24taXRlbXM6IGNlbnRlcjtcclxuXHRcdGp1c3RpZnktY29udGVudDogY2VudGVyO1xyXG5cdFx0cG9zaXRpb246IGFic29sdXRlO1xyXG5cdFx0cmlnaHQ6IDA7XHJcblx0XHRib3JkZXItcmFkaXVzOiAwcnB4IDEycnB4IDEycnB4IDBycHg7XHJcblx0fVxyXG5cclxuXHQuY2FyZElucHV0UGxhY2Uge1xyXG5cdFx0Zm9udC1zaXplOiAzMHJweDtcclxuXHRcdGNvbG9yOiAjODk4RDk5O1xyXG5cclxuXHR9XHJcblxyXG5cdC5jYXJkSW5wdXRUZXh0IHtcclxuXHRcdGZvbnQtc2l6ZTogMzBycHg7XHJcblx0XHRjb2xvcjogIzAwMDAwMDtcclxuXHRcdHdpZHRoOiAyNTlweDtcclxuXHR9XHJcblxyXG5cdC5jYXJkSW5wdXQge1xyXG5cdFx0aGVpZ2h0OiA3MnJweDtcclxuXHRcdG1hcmdpbi1sZWZ0OiAyMHJweDtcclxuXHRcdG1hcmdpbi10b3A6IDIwcnB4O1xyXG5cdFx0Ym9yZGVyOiAxcnB4IHNvbGlkICMzMzg3RkY7XHJcblx0XHRib3JkZXItcmFkaXVzOiAxMnJweDtcclxuXHRcdHBvc2l0aW9uOiByZWxhdGl2ZTtcclxuXHRcdHBhZGRpbmctbGVmdDogMjBycHg7XHJcblx0XHRtYXJnaW4tcmlnaHQ6IDIwcnB4O1xyXG5cdH1cclxuXHJcblx0LmNhcmRUaXRsZSB7XHJcblx0XHRmb250LXNpemU6IDMwcnB4O1xyXG5cdFx0Y29sb3I6ICMwMDAwMDA7XHJcblx0XHRmb250LXdlaWdodDogNzAwO1xyXG5cdFx0bWFyZ2luLWxlZnQ6IDIwcnB4O1xyXG5cdFx0bWFyZ2luLXRvcDogMTBycHg7XHJcblx0fVxyXG5cclxuXHQudGlwcyB7XHJcblx0XHRmb250LXNpemU6IDI0cnB4O1xyXG5cdFx0Y29sb3I6ICM0OTRBNEM7XHJcblx0XHRtYXJnaW4tdG9wOiAyMHJweDtcclxuXHRcdG1hcmdpbi1sZWZ0OiAyMHJweDtcclxuXHR9XHJcblxyXG5cdC5saW5lIHtcclxuXHRcdHdpZHRoOiAxMDAlO1xyXG5cdFx0aGVpZ2h0OiAxcnB4O1xyXG5cdFx0YmFja2dyb3VuZC1jb2xvcjogI0U5RTdFNztcclxuXHRcdG1hcmdpbi10b3A6IDIwcnB4O1xyXG5cdFx0bWFyZ2luLWJvdHRvbTogMjBycHg7XHJcblx0fVxyXG5cclxuXHQub2xkUGlyY2Uge1xyXG5cdFx0Zm9udC1zaXplOiAyMnJweDtcclxuXHRcdGNvbG9yOiAjNDk0QTRDO1xyXG5cdFx0dGV4dC1kZWNvcmF0aW9uOiBsaW5lLXRocm91Z2hcclxuXHR9XHJcblxyXG5cdC5wcmljZU51bSB7XHJcblx0XHRmb250LXNpemU6IDc2cnB4O1xyXG5cdFx0Zm9udC13ZWlnaHQ6IDcwMDtcclxuXHR9XHJcblxyXG5cdC51bnNlbGVjdHByaWNlIHtcclxuXHRcdGNvbG9yOiAjMDAwMDAwO1xyXG5cdFx0bWFyZ2luLXRvcDogMjBycHg7XHJcblx0fVxyXG5cclxuXHQuc2VsZWN0cHJpY2Uge1xyXG5cdFx0Y29sb3I6ICNGN0I2NkE7XHJcblx0XHRtYXJnaW4tdG9wOiAyMHJweDtcclxuXHR9XHJcblxyXG5cdC5pdGVtVGl0bGUge1xyXG5cdFx0Zm9udC1zaXplOiAzMHJweDtcclxuXHRcdGZvbnQtd2VpZ2h0OiA3MDA7XHJcblx0XHRjb2xvcjogIzAwMDAwMDtcclxuXHR9XHJcblxyXG5cdC5zZWxlY3RJdGVtIHtcclxuXHRcdGJvcmRlcjogMXJweCBzb2xpZCAjRjdCNjZBO1xyXG5cdFx0YmFja2dyb3VuZC1jb2xvcjogI0ZGRjRFQTtcclxuXHRcdGJvcmRlci1yYWRpdXM6IDEycnB4O1xyXG5cdFx0cGFkZGluZzogMTJycHg7XHJcblx0fVxyXG5cclxuXHQudW5zZWxlY3RJdGVtIHtcclxuXHRcdGJvcmRlcjogMXJweCBzb2xpZCAjQ0REMUQ5O1xyXG5cdFx0YmFja2dyb3VuZC1jb2xvcjogI0Y3RkJGRjtcclxuXHRcdGJvcmRlci1yYWRpdXM6IDEycnB4O1xyXG5cdFx0cGFkZGluZzogMTJycHg7XHJcblx0fVxyXG5cclxuXHQucm9sZS1tb2RlbCB7XHJcblx0XHRkaXNwbGF5OiBmbGV4O1xyXG5cdFx0ZmxleC1kaXJlY3Rpb246IHJvdztcclxuXHRcdGp1c3RpZnktY29udGVudDogY2VudGVyO1xyXG5cdFx0ZmxleC13cmFwOiB3cmFwO1xyXG5cdFx0YWxpZ24taXRlbXM6IGNlbnRlcjtcclxuXHR9XHJcblxyXG5cdC5yb2xlLW1vZGVsIC5yb2xlIHtcclxuXHRcdHdpZHRoOiAyNSU7XHJcblx0XHRkaXNwbGF5OiBmbGV4O1xyXG5cdFx0ZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcclxuXHRcdGFsaWduLWl0ZW1zOiBjZW50ZXI7XHJcblx0XHRqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcclxuXHRcdC8qIG1hcmdpbjogN3B4IDEycHg7ICovXHJcblx0XHRwb3NpdGlvbjogcmVsYXRpdmU7XHJcblx0fVxyXG5cclxuXHQudG9wUm91bmQge1xyXG5cdFx0bWFyZ2luOiAzMHJweDtcclxuXHRcdGJveC1zaGFkb3c6IDBycHggMHJweCA2cnB4IDZycHggcmdiYSgwLCAwLCAwLCAwLjA1KTtcclxuXHRcdGJvcmRlci1yYWRpdXM6IDEzcnB4O1xyXG5cdFx0cGFkZGluZy10b3A6IDMwcnB4O1xyXG5cdFx0cGFkZGluZy1ib3R0b206IDMwcnB4O1xyXG5cdH1cclxuXHJcblx0LnN1clRleHQge1xyXG5cdFx0Y29sb3I6ICMxNDE3MUE7XHJcblx0XHRiYWNrZ3JvdW5kOiBsaW5lYXItZ3JhZGllbnQoI0ZGQ0Q5NSAwJSwgI0ZGRTlEMCAxMDAlKTtcclxuXHRcdGJvcmRlci1yYWRpdXM6IDM2cnB4IDBycHggMHJweCAwcnB4O1xyXG5cdFx0Zm9udC1zaXplOiA1MHJweDtcclxuXHRcdGRpc3BsYXk6IGZsZXg7XHJcblx0XHRhbGlnbi1pdGVtczogY2VudGVyO1xyXG5cdFx0anVzdGlmeS1jb250ZW50OiBjZW50ZXI7XHJcblx0XHRoZWlnaHQ6IDEwMCU7XHJcblx0XHRmb250LXdlaWdodDogNzAwO1xyXG5cdH1cclxuXHJcblx0LnVuc29UZXh0IHtcclxuXHRcdGJhY2tncm91bmQ6ICM4OUFGRTU7XHJcblx0XHRib3JkZXItcmFkaXVzOiAwcnB4IDM2cnB4IDBycHggMHJweDtcclxuXHRcdGNvbG9yOiAjRDlEREU1O1xyXG5cdFx0Zm9udC1zaXplOiA1MHJweDtcclxuXHRcdGp1c3RpZnktY29udGVudDogY2VudGVyO1xyXG5cdFx0aGVpZ2h0OiAxMDAlO1xyXG5cdFx0ZGlzcGxheTogZmxleDtcclxuXHRcdGFsaWduLWl0ZW1zOiBjZW50ZXI7XHJcblx0XHRmb250LXdlaWdodDogNzAwO1xyXG5cclxuXHR9XHJcblxyXG5cdC51bnN1clRleHQge1xyXG5cdFx0Y29sb3I6ICNEOURERTU7XHJcblx0XHRiYWNrZ3JvdW5kOiAjODlBRkU1O1xyXG5cdFx0Ym9yZGVyLXJhZGl1czogMzZycHggMHJweCAwcnB4IDBycHg7XHJcblx0XHRmb250LXNpemU6IDUwcnB4O1xyXG5cdFx0ZGlzcGxheTogZmxleDtcclxuXHRcdGFsaWduLWl0ZW1zOiBjZW50ZXI7XHJcblx0XHRoZWlnaHQ6IDEwMCU7XHJcblx0XHRqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcclxuXHRcdGZvbnQtd2VpZ2h0OiA3MDA7XHJcblx0fVxyXG5cclxuXHQuc29UZXh0IHtcclxuXHRcdGJhY2tncm91bmQ6IGxpbmVhci1ncmFkaWVudCgjRkZDRDk1IDAlLCAjRkZFOUQwIDEwMCUpO1xyXG5cdFx0Ym9yZGVyLXJhZGl1czogMHJweCAzNnJweCAwcnB4IDBycHg7XHJcblx0XHRjb2xvcjogIzE0MTcxQTtcclxuXHRcdGZvbnQtc2l6ZTogNTBycHg7XHJcblx0XHRqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcclxuXHRcdGRpc3BsYXk6IGZsZXg7XHJcblx0XHRhbGlnbi1pdGVtczogY2VudGVyO1xyXG5cdFx0aGVpZ2h0OiAxMDAlO1xyXG5cdFx0Zm9udC13ZWlnaHQ6IDcwMDtcclxuXHJcblx0fVxyXG5cclxuXHQudG9wQ2hlY2sge1xyXG5cdFx0d2lkdGg6IDUwJTtcclxuXHRcdHRleHQtYWxpZ246IGNlbnRlcjtcclxuXHRcdGhlaWdodDogMTEycnB4O1xyXG5cdH1cclxuXHJcblx0Lm51bURlc1RleHQge1xyXG5cdFx0Zm9udC1zaXplOiAyNXJweDtcclxuXHRcdGNvbG9yOiAjMUIxQjFCO1xyXG5cdFx0bWFyZ2luLXRvcDogMTBycHg7XHJcblx0fVxyXG5cclxuXHQubnVtVGV4dCB7XHJcblx0XHRmb250LXNpemU6IDQwcnB4O1xyXG5cdFx0Zm9udC13ZWlnaHQ6IDUwMDtcclxuXHRcdGNvbG9yOiAjQUY2OTFEO1xyXG5cdH1cclxuXHJcblx0LnZpcFRpcCB7XHJcblx0XHRtYXJnaW4tbGVmdDogMTNycHg7XHJcblx0XHR0ZXh0LWFsaWduOiBjZW50ZXI7XHJcblx0XHRwb3NpdGlvbjogcmVsYXRpdmU7XHJcblx0XHRkaXNwbGF5OiBmbGV4O1xyXG5cdFx0YWxpZ24taXRlbXM6IGNlbnRlcjtcclxuXHRcdGp1c3RpZnktY29udGVudDogY2VudGVyO1xyXG5cdH1cclxuXHJcblx0LnZpcFRleHQge1xyXG5cdFx0Y29sb3I6IHdoaXRlO1xyXG5cdFx0Zm9udC1zaXplOiAyNHJweDtcclxuXHRcdHBvc2l0aW9uOiBhYnNvbHV0ZTtcclxuXHRcdHRvcDogMDtcclxuXHRcdGZvbnQtd2VpZ2h0OiA2MDA7XHJcblx0fVxyXG5cclxuXHQudXNlckRlcyB7XHJcblx0XHRmb250LXNpemU6IDI2cnB4O1xyXG5cdFx0aGVpZ2h0OiAyNnJweDtcclxuXHRcdGNvbG9yOiAjZmZmZmZmO1xyXG5cdFx0bWFyZ2luLXRvcDogMTBycHg7XHJcblx0fVxyXG5cclxuXHQudXNlck5hbWUge1xyXG5cdFx0Zm9udC1zaXplOiAzOHJweDtcclxuXHRcdGZvbnQtd2VpZ2h0OiA3MDA7XHJcblx0XHRjb2xvcjogI0ZGQ0Q5NTtcclxuXHR9XHJcblxyXG5cdC51c2VyUm93IHtcclxuXHRcdGhlaWdodDogNzAlO1xyXG5cdFx0bWFyZ2luLWJvdHRvbTogMzBycHg7XHJcblx0XHRtYXJnaW4tbGVmdDogMjBycHg7XHJcblx0XHRtYXJnaW4tcmlnaHQ6IDIwcnB4O1xyXG5cdH1cclxuXHJcblx0LnJvdyB7XHJcblx0XHRkaXNwbGF5OiBmbGV4O1xyXG5cdFx0ZmxleC1kaXJlY3Rpb246IHJvdztcclxuXHRcdGFsaWduLWl0ZW1zOiBjZW50ZXI7XHJcblx0XHRmbGV4LXdyYXA6IHdyYXA7XHJcblxyXG5cdH1cclxuXHJcblx0LnBvc2l0aW9uIHtcclxuXHRcdHBvc2l0aW9uOiByZWxhdGl2ZTtcclxuXHRcdHdpZHRoOiAxMDAlO1xyXG5cdFx0aGVpZ2h0OiA1MHJweDtcclxuXHRcdGRpc3BsYXk6IGZsZXg7XHJcblx0XHRmbGV4LWRpcmVjdGlvbjogcm93O1xyXG5cdFx0YWxpZ24taXRlbXM6IGNlbnRlcjtcclxuXHR9XHJcblxyXG5cdC5iYWNrSW1nIHtcclxuXHRcdHdpZHRoOiAxOHJweDtcclxuXHRcdGhlaWdodDogMzBycHg7XHJcblx0XHRwb3NpdGlvbjogYWJzb2x1dGU7XHJcblx0XHRsZWZ0OiAwO1xyXG5cdFx0bWFyZ2luLWxlZnQ6IDIwcnB4O1xyXG5cdFx0bWFyZ2luLXRvcDogNnJweFxyXG5cdH1cclxuXHJcblx0LmhlYWRlciAudGl0bGUge1xyXG5cdFx0dGV4dC1hbGlnbjogY2VudGVyO1xyXG5cdFx0Zm9udC1zaXplOiAzMXJweDtcclxuXHRcdHBvc2l0aW9uOiByZWxhdGl2ZTtcclxuXHRcdGZvbnQtd2VpZ2h0OiA2MDA7XHJcblx0XHRjb2xvcjogI0ZGRkZGRjtcclxuXHRcdHdpZHRoOiAxMDB2dztcclxuXHJcblx0XHRmbGV4LWRpcmVjdGlvbjogcm93O1xyXG5cdFx0anVzdGlmeS1jb250ZW50OiBjZW50ZXI7XHJcblx0XHRhbGlnbi1pdGVtczogY2VudGVyO1xyXG5cdFx0LyogIHBhZGRpbmctdG9wOiAzM3B4O1xyXG5cdFx0ICAgIHBhZGRpbmctYm90dG9tOiA0MHB4OyAqL1xyXG5cdH1cclxuXHJcblx0LnBvc2l0aW9uX3RvcCB7XHJcblx0XHQvLyNpZm5kZWYgTVAtV0VJWElOXHJcblx0XHRtYXJnaW4tdG9wOiAyMHB4O1xyXG5cdFx0Ly8gI2VuZGlmXHJcblx0XHRwb3NpdGlvbjogYWJzb2x1dGU7XHJcblx0XHR0b3A6IDA7XHJcblx0XHR3aWR0aDogMTAwJTtcclxuXHRcdC8qIHBhZGRpbmctdG9wOiA5MHJweDsgKi9cclxuXHR9XHJcblxyXG5cclxuXHJcblx0Lm1pbmVJbmZvIHtcclxuXHRcdHdpZHRoOiAtd2Via2l0LWZpbGwtYXZhaWxhYmxlO1xyXG5cdFx0aGVpZ2h0OiAzMDZycHg7XHJcblx0XHRwb3NpdGlvbjogcmVsYXRpdmU7XHJcblxyXG5cdFx0bWFyZ2luLXRvcDogNDVycHg7XHJcblx0fVxyXG5cclxuXHQuaGVhZGVyIHtcclxuXHRcdHdpZHRoOiAxMDAlO1xyXG5cdFx0cG9zaXRpb246IHJlbGF0aXZlO1xyXG5cdFx0ei1pbmRleDogOTk5O1xyXG5cdH1cclxuXHJcblx0LnRvcEJnIHtcclxuXHRcdHdpZHRoOiAxMDAlO1xyXG5cdFx0aGVpZ2h0OiA0NzBycHg7XHJcblx0fVxyXG5cclxuXHQuaGVpZ2h0OTAge1xyXG5cdFx0aGVpZ2h0OiA5NXJweDtcclxuXHR9XHJcblxyXG5cdC5oZWlnaHQ0NSB7XHJcblx0XHRoZWlnaHQ6IDUwcnB4O1xyXG5cdH1cclxuXHJcblx0YnV0dG9uOjphZnRlciB7XHJcblx0XHRib3JkZXI6IG5vbmU7XHJcblx0fVxyXG48L3N0eWxlPlxuIiwiaW1wb3J0IG1vZCBmcm9tIFwiLSEuLi8uLi8uLi8uLi8uLi9odWJ1ZGVyL0hCdWlsZGVyL0hCdWlsZGVyWC9wbHVnaW5zL3VuaWFwcC1jbGkvbm9kZV9tb2R1bGVzL21pbmktY3NzLWV4dHJhY3QtcGx1Z2luL2Rpc3QvbG9hZGVyLmpzPz9yZWYtLTYtb25lT2YtMS0wIS4uLy4uLy4uLy4uLy4uL2h1YnVkZXIvSEJ1aWxkZXIvSEJ1aWxkZXJYL3BsdWdpbnMvdW5pYXBwLWNsaS9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L2Nqcy5qcz8/cmVmLS02LW9uZU9mLTEtMSEuLi8uLi8uLi8uLi8uLi9odWJ1ZGVyL0hCdWlsZGVyL0hCdWlsZGVyWC9wbHVnaW5zL3VuaWFwcC1jbGkvbm9kZV9tb2R1bGVzL0BkY2xvdWRpby92dWUtY2xpLXBsdWdpbi11bmkvcGFja2FnZXMvdnVlLWxvYWRlci9saWIvbG9hZGVycy9zdHlsZVBvc3RMb2FkZXIuanMhLi4vLi4vLi4vLi4vLi4vaHVidWRlci9IQnVpbGRlci9IQnVpbGRlclgvcGx1Z2lucy91bmlhcHAtY2xpL25vZGVfbW9kdWxlcy9AZGNsb3VkaW8vdnVlLWNsaS1wbHVnaW4tdW5pL3BhY2thZ2VzL3dlYnBhY2stcHJlcHJvY2Vzcy1sb2FkZXIvaW5kZXguanM/P3JlZi0tNi1vbmVPZi0xLTIhLi4vLi4vLi4vLi4vLi4vaHVidWRlci9IQnVpbGRlci9IQnVpbGRlclgvcGx1Z2lucy91bmlhcHAtY2xpL25vZGVfbW9kdWxlcy9wb3N0Y3NzLWxvYWRlci9zcmMvaW5kZXguanM/P3JlZi0tNi1vbmVPZi0xLTMhLi4vLi4vLi4vLi4vLi4vaHVidWRlci9IQnVpbGRlci9IQnVpbGRlclgvcGx1Z2lucy91bmlhcHAtY2xpL25vZGVfbW9kdWxlcy9AZGNsb3VkaW8vdnVlLWNsaS1wbHVnaW4tdW5pL3BhY2thZ2VzL3Z1ZS1sb2FkZXIvbGliL2luZGV4LmpzPz92dWUtbG9hZGVyLW9wdGlvbnMhLi4vLi4vLi4vLi4vLi4vaHVidWRlci9IQnVpbGRlci9IQnVpbGRlclgvcGx1Z2lucy91bmlhcHAtY2xpL25vZGVfbW9kdWxlcy9AZGNsb3VkaW8vd2VicGFjay11bmktbXAtbG9hZGVyL2xpYi9zdHlsZS5qcyEuL2pvaW52aXAudnVlP3Z1ZSZ0eXBlPXN0eWxlJmluZGV4PTAmbGFuZz1jc3MmXCI7IGV4cG9ydCBkZWZhdWx0IG1vZDsgZXhwb3J0ICogZnJvbSBcIi0hLi4vLi4vLi4vLi4vLi4vaHVidWRlci9IQnVpbGRlci9IQnVpbGRlclgvcGx1Z2lucy91bmlhcHAtY2xpL25vZGVfbW9kdWxlcy9taW5pLWNzcy1leHRyYWN0LXBsdWdpbi9kaXN0L2xvYWRlci5qcz8/cmVmLS02LW9uZU9mLTEtMCEuLi8uLi8uLi8uLi8uLi9odWJ1ZGVyL0hCdWlsZGVyL0hCdWlsZGVyWC9wbHVnaW5zL3VuaWFwcC1jbGkvbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9janMuanM/P3JlZi0tNi1vbmVPZi0xLTEhLi4vLi4vLi4vLi4vLi4vaHVidWRlci9IQnVpbGRlci9IQnVpbGRlclgvcGx1Z2lucy91bmlhcHAtY2xpL25vZGVfbW9kdWxlcy9AZGNsb3VkaW8vdnVlLWNsaS1wbHVnaW4tdW5pL3BhY2thZ2VzL3Z1ZS1sb2FkZXIvbGliL2xvYWRlcnMvc3R5bGVQb3N0TG9hZGVyLmpzIS4uLy4uLy4uLy4uLy4uL2h1YnVkZXIvSEJ1aWxkZXIvSEJ1aWxkZXJYL3BsdWdpbnMvdW5pYXBwLWNsaS9ub2RlX21vZHVsZXMvQGRjbG91ZGlvL3Z1ZS1jbGktcGx1Z2luLXVuaS9wYWNrYWdlcy93ZWJwYWNrLXByZXByb2Nlc3MtbG9hZGVyL2luZGV4LmpzPz9yZWYtLTYtb25lT2YtMS0yIS4uLy4uLy4uLy4uLy4uL2h1YnVkZXIvSEJ1aWxkZXIvSEJ1aWxkZXJYL3BsdWdpbnMvdW5pYXBwLWNsaS9ub2RlX21vZHVsZXMvcG9zdGNzcy1sb2FkZXIvc3JjL2luZGV4LmpzPz9yZWYtLTYtb25lT2YtMS0zIS4uLy4uLy4uLy4uLy4uL2h1YnVkZXIvSEJ1aWxkZXIvSEJ1aWxkZXJYL3BsdWdpbnMvdW5pYXBwLWNsaS9ub2RlX21vZHVsZXMvQGRjbG91ZGlvL3Z1ZS1jbGktcGx1Z2luLXVuaS9wYWNrYWdlcy92dWUtbG9hZGVyL2xpYi9pbmRleC5qcz8/dnVlLWxvYWRlci1vcHRpb25zIS4uLy4uLy4uLy4uLy4uL2h1YnVkZXIvSEJ1aWxkZXIvSEJ1aWxkZXJYL3BsdWdpbnMvdW5pYXBwLWNsaS9ub2RlX21vZHVsZXMvQGRjbG91ZGlvL3dlYnBhY2stdW5pLW1wLWxvYWRlci9saWIvc3R5bGUuanMhLi9qb2ludmlwLnZ1ZT92dWUmdHlwZT1zdHlsZSZpbmRleD0wJmxhbmc9Y3NzJlwiIiwiLy8gZXh0cmFjdGVkIGJ5IG1pbmktY3NzLWV4dHJhY3QtcGx1Z2luXG4gICAgaWYobW9kdWxlLmhvdCkge1xuICAgICAgLy8gMTY4Mjc0NjM1NDA0N1xuICAgICAgdmFyIGNzc1JlbG9hZCA9IHJlcXVpcmUoXCJEOi9odWJ1ZGVyL0hCdWlsZGVyL0hCdWlsZGVyWC9wbHVnaW5zL3VuaWFwcC1jbGkvbm9kZV9tb2R1bGVzL21pbmktY3NzLWV4dHJhY3QtcGx1Z2luL2Rpc3QvaG1yL2hvdE1vZHVsZVJlcGxhY2VtZW50LmpzXCIpKG1vZHVsZS5pZCwge1wiaG1yXCI6dHJ1ZSxcInB1YmxpY1BhdGhcIjpcIi4uLy4uL1wiLFwibG9jYWxzXCI6ZmFsc2V9KTtcbiAgICAgIG1vZHVsZS5ob3QuZGlzcG9zZShjc3NSZWxvYWQpO1xuICAgICAgbW9kdWxlLmhvdC5hY2NlcHQodW5kZWZpbmVkLCBjc3NSZWxvYWQpO1xuICAgIH1cbiAgIl0sInNvdXJjZVJvb3QiOiIifQ==