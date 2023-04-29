(global["webpackJsonp"] = global["webpackJsonp"] || []).push([["pages/main/replyquestion/replyquestion"],{

/***/ 226:
/*!************************************************************************************************************!*\
  !*** D:/gitgpt更新代码不修改/chatgpt_wechat_font/main.js?{"page":"pages%2Fmain%2Freplyquestion%2Freplyquestion"} ***!
  \************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/* WEBPACK VAR INJECTION */(function(wx, createPage) {__webpack_require__(/*! uni-pages */ 5);
var _vue = _interopRequireDefault(__webpack_require__(/*! vue */ 3));
var _replyquestion = _interopRequireDefault(__webpack_require__(/*! ./pages/main/replyquestion/replyquestion.vue */ 227));function _interopRequireDefault(obj) {return obj && obj.__esModule ? obj : { default: obj };}wx.__webpack_require_UNI_MP_PLUGIN__ = __webpack_require__;
createPage(_replyquestion.default);
/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./node_modules/@dcloudio/uni-mp-toutiao/dist/index.js */ 1)["default"], __webpack_require__(/*! ./node_modules/@dcloudio/uni-mp-toutiao/dist/index.js */ 1)["createPage"]))

/***/ }),

/***/ 227:
/*!***************************************************************************************!*\
  !*** D:/gitgpt更新代码不修改/chatgpt_wechat_font/pages/main/replyquestion/replyquestion.vue ***!
  \***************************************************************************************/
/*! no static exports found */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _replyquestion_vue_vue_type_template_id_07cb7118___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./replyquestion.vue?vue&type=template&id=07cb7118& */ 228);
/* harmony import */ var _replyquestion_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./replyquestion.vue?vue&type=script&lang=js& */ 230);
/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _replyquestion_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__) if(__WEBPACK_IMPORT_KEY__ !== 'default') (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _replyquestion_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__[key]; }) }(__WEBPACK_IMPORT_KEY__));
/* harmony import */ var _replyquestion_vue_vue_type_style_index_0_lang_css___WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./replyquestion.vue?vue&type=style&index=0&lang=css& */ 232);
/* harmony import */ var _hubuder_HBuilder_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../../../hubuder/HBuilder/HBuilderX/plugins/uniapp-cli/node_modules/@dcloudio/vue-cli-plugin-uni/packages/vue-loader/lib/runtime/componentNormalizer.js */ 14);

var renderjs





/* normalize component */

var component = Object(_hubuder_HBuilder_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_3__["default"])(
  _replyquestion_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__["default"],
  _replyquestion_vue_vue_type_template_id_07cb7118___WEBPACK_IMPORTED_MODULE_0__["render"],
  _replyquestion_vue_vue_type_template_id_07cb7118___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"],
  false,
  null,
  null,
  null,
  false,
  _replyquestion_vue_vue_type_template_id_07cb7118___WEBPACK_IMPORTED_MODULE_0__["components"],
  renderjs
)

component.options.__file = "pages/main/replyquestion/replyquestion.vue"
/* harmony default export */ __webpack_exports__["default"] = (component.exports);

/***/ }),

/***/ 228:
/*!**********************************************************************************************************************!*\
  !*** D:/gitgpt更新代码不修改/chatgpt_wechat_font/pages/main/replyquestion/replyquestion.vue?vue&type=template&id=07cb7118& ***!
  \**********************************************************************************************************************/
/*! exports provided: render, staticRenderFns, recyclableRender, components */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _hubuder_HBuilder_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_hubuder_HBuilder_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_16_0_hubuder_HBuilder_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_template_js_hubuder_HBuilder_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_uni_app_loader_page_meta_js_hubuder_HBuilder_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_hubuder_HBuilder_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_style_js_replyquestion_vue_vue_type_template_id_07cb7118___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../hubuder/HBuilder/HBuilderX/plugins/uniapp-cli/node_modules/@dcloudio/vue-cli-plugin-uni/packages/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../../../hubuder/HBuilder/HBuilderX/plugins/uniapp-cli/node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-preprocess-loader??ref--16-0!../../../../../hubuder/HBuilder/HBuilderX/plugins/uniapp-cli/node_modules/@dcloudio/webpack-uni-mp-loader/lib/template.js!../../../../../hubuder/HBuilder/HBuilderX/plugins/uniapp-cli/node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-uni-app-loader/page-meta.js!../../../../../hubuder/HBuilder/HBuilderX/plugins/uniapp-cli/node_modules/@dcloudio/vue-cli-plugin-uni/packages/vue-loader/lib??vue-loader-options!../../../../../hubuder/HBuilder/HBuilderX/plugins/uniapp-cli/node_modules/@dcloudio/webpack-uni-mp-loader/lib/style.js!./replyquestion.vue?vue&type=template&id=07cb7118& */ 229);
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "render", function() { return _hubuder_HBuilder_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_hubuder_HBuilder_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_16_0_hubuder_HBuilder_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_template_js_hubuder_HBuilder_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_uni_app_loader_page_meta_js_hubuder_HBuilder_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_hubuder_HBuilder_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_style_js_replyquestion_vue_vue_type_template_id_07cb7118___WEBPACK_IMPORTED_MODULE_0__["render"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return _hubuder_HBuilder_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_hubuder_HBuilder_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_16_0_hubuder_HBuilder_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_template_js_hubuder_HBuilder_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_uni_app_loader_page_meta_js_hubuder_HBuilder_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_hubuder_HBuilder_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_style_js_replyquestion_vue_vue_type_template_id_07cb7118___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "recyclableRender", function() { return _hubuder_HBuilder_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_hubuder_HBuilder_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_16_0_hubuder_HBuilder_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_template_js_hubuder_HBuilder_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_uni_app_loader_page_meta_js_hubuder_HBuilder_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_hubuder_HBuilder_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_style_js_replyquestion_vue_vue_type_template_id_07cb7118___WEBPACK_IMPORTED_MODULE_0__["recyclableRender"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "components", function() { return _hubuder_HBuilder_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_hubuder_HBuilder_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_16_0_hubuder_HBuilder_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_template_js_hubuder_HBuilder_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_uni_app_loader_page_meta_js_hubuder_HBuilder_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_hubuder_HBuilder_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_style_js_replyquestion_vue_vue_type_template_id_07cb7118___WEBPACK_IMPORTED_MODULE_0__["components"]; });



/***/ }),

/***/ 229:
/*!**********************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/@dcloudio/vue-cli-plugin-uni/packages/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-preprocess-loader??ref--16-0!./node_modules/@dcloudio/webpack-uni-mp-loader/lib/template.js!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-uni-app-loader/page-meta.js!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/vue-loader/lib??vue-loader-options!./node_modules/@dcloudio/webpack-uni-mp-loader/lib/style.js!D:/gitgpt更新代码不修改/chatgpt_wechat_font/pages/main/replyquestion/replyquestion.vue?vue&type=template&id=07cb7118& ***!
  \**********************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
/*! exports provided: render, staticRenderFns, recyclableRender, components */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "render", function() { return render; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return staticRenderFns; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "recyclableRender", function() { return recyclableRender; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "components", function() { return components; });
var components
var render = function() {
  var _vm = this
  var _h = _vm.$createElement
  var _c = _vm._self._c || _h
}
var recyclableRender = false
var staticRenderFns = []
render._withStripped = true



/***/ }),

/***/ 230:
/*!****************************************************************************************************************!*\
  !*** D:/gitgpt更新代码不修改/chatgpt_wechat_font/pages/main/replyquestion/replyquestion.vue?vue&type=script&lang=js& ***!
  \****************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _hubuder_HBuilder_HBuilderX_plugins_uniapp_cli_node_modules_babel_loader_lib_index_js_hubuder_HBuilder_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_12_1_hubuder_HBuilder_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_script_js_hubuder_HBuilder_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_hubuder_HBuilder_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_style_js_replyquestion_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../hubuder/HBuilder/HBuilderX/plugins/uniapp-cli/node_modules/babel-loader/lib!../../../../../hubuder/HBuilder/HBuilderX/plugins/uniapp-cli/node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-preprocess-loader??ref--12-1!../../../../../hubuder/HBuilder/HBuilderX/plugins/uniapp-cli/node_modules/@dcloudio/webpack-uni-mp-loader/lib/script.js!../../../../../hubuder/HBuilder/HBuilderX/plugins/uniapp-cli/node_modules/@dcloudio/vue-cli-plugin-uni/packages/vue-loader/lib??vue-loader-options!../../../../../hubuder/HBuilder/HBuilderX/plugins/uniapp-cli/node_modules/@dcloudio/webpack-uni-mp-loader/lib/style.js!./replyquestion.vue?vue&type=script&lang=js& */ 231);
/* harmony import */ var _hubuder_HBuilder_HBuilderX_plugins_uniapp_cli_node_modules_babel_loader_lib_index_js_hubuder_HBuilder_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_12_1_hubuder_HBuilder_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_script_js_hubuder_HBuilder_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_hubuder_HBuilder_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_style_js_replyquestion_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_hubuder_HBuilder_HBuilderX_plugins_uniapp_cli_node_modules_babel_loader_lib_index_js_hubuder_HBuilder_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_12_1_hubuder_HBuilder_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_script_js_hubuder_HBuilder_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_hubuder_HBuilder_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_style_js_replyquestion_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__);
/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _hubuder_HBuilder_HBuilderX_plugins_uniapp_cli_node_modules_babel_loader_lib_index_js_hubuder_HBuilder_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_12_1_hubuder_HBuilder_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_script_js_hubuder_HBuilder_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_hubuder_HBuilder_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_style_js_replyquestion_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__) if(__WEBPACK_IMPORT_KEY__ !== 'default') (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _hubuder_HBuilder_HBuilderX_plugins_uniapp_cli_node_modules_babel_loader_lib_index_js_hubuder_HBuilder_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_12_1_hubuder_HBuilder_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_script_js_hubuder_HBuilder_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_hubuder_HBuilder_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_style_js_replyquestion_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__[key]; }) }(__WEBPACK_IMPORT_KEY__));
 /* harmony default export */ __webpack_exports__["default"] = (_hubuder_HBuilder_HBuilderX_plugins_uniapp_cli_node_modules_babel_loader_lib_index_js_hubuder_HBuilder_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_12_1_hubuder_HBuilder_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_script_js_hubuder_HBuilder_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_hubuder_HBuilder_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_style_js_replyquestion_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0___default.a); 

/***/ }),

/***/ 231:
/*!***********************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-preprocess-loader??ref--12-1!./node_modules/@dcloudio/webpack-uni-mp-loader/lib/script.js!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/vue-loader/lib??vue-loader-options!./node_modules/@dcloudio/webpack-uni-mp-loader/lib/style.js!D:/gitgpt更新代码不修改/chatgpt_wechat_font/pages/main/replyquestion/replyquestion.vue?vue&type=script&lang=js& ***!
  \***********************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/* WEBPACK VAR INJECTION */(function(uni) {Object.defineProperty(exports, "__esModule", { value: true });exports.default = void 0;



















































var _request = _interopRequireDefault(__webpack_require__(/*! ../../../request/request.js */ 10));
var _util = _interopRequireDefault(__webpack_require__(/*! ../../../util/util.js */ 9));
var _websocket = _interopRequireDefault(__webpack_require__(/*! ../../../util/websocket.js */ 190));
var _md2 = _interopRequireDefault(__webpack_require__(/*! ../../../static/js/md */ 191));function _interopRequireDefault(obj) {return obj && obj.__esModule ? obj : { default: obj };} //
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
var socket = null;var mpHtml = function mpHtml() {Promise.all(/*! require.ensure | node-modules/mp-html/mp-html */[__webpack_require__.e("common/vendor"), __webpack_require__.e("node-modules/mp-html/mp-html")]).then((function () {return resolve(__webpack_require__(/*! @/node_modules/mp-html/mp-html */ 345));}).bind(null, __webpack_require__)).catch(__webpack_require__.oe);};var _default = { computed: { md: function md() {return _md2.default;} }, components: { mpHtml: mpHtml }, data: function data() {return { isLoadding: true, copyData: '', askContent: '', isReplyIng: false, changeAnswerTextContent: '' };}, onLoad: function onLoad(options) {//跨页面传递信息
    uni.$on('onMessage', this.onMessage);var item = JSON.parse(decodeURIComponent(options.askContent));this.askContent = item.askContent;this.aksContent(this.askContent);}, methods: { insertChatSession: function insertChatSession(e) {this.changeAnswerTextContent = this.changeAnswerTextContent + e;}, initSocket: function initSocket() {socket = new _websocket.default();socket.initSocketLogin();}, copyContent: function copyContent() {var that = this;uni.setClipboardData({ data: that.copyData, success: function success() {uni.showToast({ title: '已复制内容到剪贴板' });} });}, onMessage: function onMessage(e) {try {if (e != '[DONE]' && e != 'isOnlineSucc') {this.isLoadding = false;var result = JSON.parse(e);if (_util.default.isNotBlank(result.choices[0].delta.content)) {
            //首先判断是否回复中
            if (this.isReplyIng) {
              //如果回复中
              this.insertChatSession(result.choices[0].delta.content);
            } else {
              this.isReplyIng = true;
              this.insertChatSession(result.choices[0].delta.content);
            }
          }
        } else {
          this.isReplyIng = false;
        }
      } catch (e) {
        this.isReplyIng = false;
      }
    },
    aksContent: function aksContent(e) {
      var param = {
        prompt: e };

      //进行存储
      (0, _request.default)('', '/yuan/ai/w/stream/chat', 'POST', param, {}).then(function (res) {
        socket.close();
        var msgerr = res.msg;
        if (res.code == 500 && msgerr.search("429") != -1) {
          _util.default.message("访问太过频繁,请稍后重试", 'error', function () {
            setTimeout(function () {
              uni.switchTab({
                url: '/pages/main/rolefragment/rolefragment' });

            }, 1000);
          });
        } else {
          _util.default.message(msgerr, 'error', function () {
            setTimeout(function () {
              uni.switchTab({
                url: '/pages/main/rolefragment/rolefragment' });

            }, 1000);
          });
        }
      });
    } },

  onHide: function onHide() {
    socket.close();
  },
  onUnload: function onUnload() {
    socket.close();
  },
  onShow: function onShow() {
    this.initSocket();
  } };exports.default = _default;
/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./node_modules/@dcloudio/uni-mp-toutiao/dist/index.js */ 1)["default"]))

/***/ }),

/***/ 232:
/*!************************************************************************************************************************!*\
  !*** D:/gitgpt更新代码不修改/chatgpt_wechat_font/pages/main/replyquestion/replyquestion.vue?vue&type=style&index=0&lang=css& ***!
  \************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _hubuder_HBuilder_HBuilderX_plugins_uniapp_cli_node_modules_mini_css_extract_plugin_dist_loader_js_ref_6_oneOf_1_0_hubuder_HBuilder_HBuilderX_plugins_uniapp_cli_node_modules_css_loader_dist_cjs_js_ref_6_oneOf_1_1_hubuder_HBuilder_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_loaders_stylePostLoader_js_hubuder_HBuilder_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_6_oneOf_1_2_hubuder_HBuilder_HBuilderX_plugins_uniapp_cli_node_modules_postcss_loader_src_index_js_ref_6_oneOf_1_3_hubuder_HBuilder_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_hubuder_HBuilder_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_style_js_replyquestion_vue_vue_type_style_index_0_lang_css___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../hubuder/HBuilder/HBuilderX/plugins/uniapp-cli/node_modules/mini-css-extract-plugin/dist/loader.js??ref--6-oneOf-1-0!../../../../../hubuder/HBuilder/HBuilderX/plugins/uniapp-cli/node_modules/css-loader/dist/cjs.js??ref--6-oneOf-1-1!../../../../../hubuder/HBuilder/HBuilderX/plugins/uniapp-cli/node_modules/@dcloudio/vue-cli-plugin-uni/packages/vue-loader/lib/loaders/stylePostLoader.js!../../../../../hubuder/HBuilder/HBuilderX/plugins/uniapp-cli/node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-preprocess-loader??ref--6-oneOf-1-2!../../../../../hubuder/HBuilder/HBuilderX/plugins/uniapp-cli/node_modules/postcss-loader/src??ref--6-oneOf-1-3!../../../../../hubuder/HBuilder/HBuilderX/plugins/uniapp-cli/node_modules/@dcloudio/vue-cli-plugin-uni/packages/vue-loader/lib??vue-loader-options!../../../../../hubuder/HBuilder/HBuilderX/plugins/uniapp-cli/node_modules/@dcloudio/webpack-uni-mp-loader/lib/style.js!./replyquestion.vue?vue&type=style&index=0&lang=css& */ 233);
/* harmony import */ var _hubuder_HBuilder_HBuilderX_plugins_uniapp_cli_node_modules_mini_css_extract_plugin_dist_loader_js_ref_6_oneOf_1_0_hubuder_HBuilder_HBuilderX_plugins_uniapp_cli_node_modules_css_loader_dist_cjs_js_ref_6_oneOf_1_1_hubuder_HBuilder_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_loaders_stylePostLoader_js_hubuder_HBuilder_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_6_oneOf_1_2_hubuder_HBuilder_HBuilderX_plugins_uniapp_cli_node_modules_postcss_loader_src_index_js_ref_6_oneOf_1_3_hubuder_HBuilder_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_hubuder_HBuilder_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_style_js_replyquestion_vue_vue_type_style_index_0_lang_css___WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_hubuder_HBuilder_HBuilderX_plugins_uniapp_cli_node_modules_mini_css_extract_plugin_dist_loader_js_ref_6_oneOf_1_0_hubuder_HBuilder_HBuilderX_plugins_uniapp_cli_node_modules_css_loader_dist_cjs_js_ref_6_oneOf_1_1_hubuder_HBuilder_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_loaders_stylePostLoader_js_hubuder_HBuilder_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_6_oneOf_1_2_hubuder_HBuilder_HBuilderX_plugins_uniapp_cli_node_modules_postcss_loader_src_index_js_ref_6_oneOf_1_3_hubuder_HBuilder_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_hubuder_HBuilder_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_style_js_replyquestion_vue_vue_type_style_index_0_lang_css___WEBPACK_IMPORTED_MODULE_0__);
/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _hubuder_HBuilder_HBuilderX_plugins_uniapp_cli_node_modules_mini_css_extract_plugin_dist_loader_js_ref_6_oneOf_1_0_hubuder_HBuilder_HBuilderX_plugins_uniapp_cli_node_modules_css_loader_dist_cjs_js_ref_6_oneOf_1_1_hubuder_HBuilder_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_loaders_stylePostLoader_js_hubuder_HBuilder_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_6_oneOf_1_2_hubuder_HBuilder_HBuilderX_plugins_uniapp_cli_node_modules_postcss_loader_src_index_js_ref_6_oneOf_1_3_hubuder_HBuilder_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_hubuder_HBuilder_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_style_js_replyquestion_vue_vue_type_style_index_0_lang_css___WEBPACK_IMPORTED_MODULE_0__) if(__WEBPACK_IMPORT_KEY__ !== 'default') (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _hubuder_HBuilder_HBuilderX_plugins_uniapp_cli_node_modules_mini_css_extract_plugin_dist_loader_js_ref_6_oneOf_1_0_hubuder_HBuilder_HBuilderX_plugins_uniapp_cli_node_modules_css_loader_dist_cjs_js_ref_6_oneOf_1_1_hubuder_HBuilder_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_loaders_stylePostLoader_js_hubuder_HBuilder_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_6_oneOf_1_2_hubuder_HBuilder_HBuilderX_plugins_uniapp_cli_node_modules_postcss_loader_src_index_js_ref_6_oneOf_1_3_hubuder_HBuilder_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_hubuder_HBuilder_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_style_js_replyquestion_vue_vue_type_style_index_0_lang_css___WEBPACK_IMPORTED_MODULE_0__[key]; }) }(__WEBPACK_IMPORT_KEY__));
 /* harmony default export */ __webpack_exports__["default"] = (_hubuder_HBuilder_HBuilderX_plugins_uniapp_cli_node_modules_mini_css_extract_plugin_dist_loader_js_ref_6_oneOf_1_0_hubuder_HBuilder_HBuilderX_plugins_uniapp_cli_node_modules_css_loader_dist_cjs_js_ref_6_oneOf_1_1_hubuder_HBuilder_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_loaders_stylePostLoader_js_hubuder_HBuilder_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_6_oneOf_1_2_hubuder_HBuilder_HBuilderX_plugins_uniapp_cli_node_modules_postcss_loader_src_index_js_ref_6_oneOf_1_3_hubuder_HBuilder_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_hubuder_HBuilder_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_style_js_replyquestion_vue_vue_type_style_index_0_lang_css___WEBPACK_IMPORTED_MODULE_0___default.a); 

/***/ }),

/***/ 233:
/*!****************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/mini-css-extract-plugin/dist/loader.js??ref--6-oneOf-1-0!./node_modules/css-loader/dist/cjs.js??ref--6-oneOf-1-1!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-preprocess-loader??ref--6-oneOf-1-2!./node_modules/postcss-loader/src??ref--6-oneOf-1-3!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/vue-loader/lib??vue-loader-options!./node_modules/@dcloudio/webpack-uni-mp-loader/lib/style.js!D:/gitgpt更新代码不修改/chatgpt_wechat_font/pages/main/replyquestion/replyquestion.vue?vue&type=style&index=0&lang=css& ***!
  \****************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

// extracted by mini-css-extract-plugin
    if(false) { var cssReload; }
  

/***/ })

},[[226,"common/runtime","common/vendor"]]]);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInVuaS1hcHA6Ly8vbWFpbi5qcyIsIndlYnBhY2s6Ly8vRDovZ2l0Z3B05pu05paw5Luj56CB5LiN5L+u5pS5L2NoYXRncHRfd2VjaGF0X2ZvbnQvcGFnZXMvbWFpbi9yZXBseXF1ZXN0aW9uL3JlcGx5cXVlc3Rpb24udnVlPzdhMjEiLCJ3ZWJwYWNrOi8vL0Q6L2dpdGdwdOabtOaWsOS7o+eggeS4jeS/ruaUuS9jaGF0Z3B0X3dlY2hhdF9mb250L3BhZ2VzL21haW4vcmVwbHlxdWVzdGlvbi9yZXBseXF1ZXN0aW9uLnZ1ZT9hMWVmIiwid2VicGFjazovLy9EOi9naXRncHTmm7TmlrDku6PnoIHkuI3kv67mlLkvY2hhdGdwdF93ZWNoYXRfZm9udC9wYWdlcy9tYWluL3JlcGx5cXVlc3Rpb24vcmVwbHlxdWVzdGlvbi52dWU/MTljMiIsIndlYnBhY2s6Ly8vRDovZ2l0Z3B05pu05paw5Luj56CB5LiN5L+u5pS5L2NoYXRncHRfd2VjaGF0X2ZvbnQvcGFnZXMvbWFpbi9yZXBseXF1ZXN0aW9uL3JlcGx5cXVlc3Rpb24udnVlPzViMTYiLCJ1bmktYXBwOi8vL3BhZ2VzL21haW4vcmVwbHlxdWVzdGlvbi9yZXBseXF1ZXN0aW9uLnZ1ZSIsIndlYnBhY2s6Ly8vRDovZ2l0Z3B05pu05paw5Luj56CB5LiN5L+u5pS5L2NoYXRncHRfd2VjaGF0X2ZvbnQvcGFnZXMvbWFpbi9yZXBseXF1ZXN0aW9uL3JlcGx5cXVlc3Rpb24udnVlPzk2YzgiLCJ3ZWJwYWNrOi8vL0Q6L2dpdGdwdOabtOaWsOS7o+eggeS4jeS/ruaUuS9jaGF0Z3B0X3dlY2hhdF9mb250L3BhZ2VzL21haW4vcmVwbHlxdWVzdGlvbi9yZXBseXF1ZXN0aW9uLnZ1ZT8zYjBlIl0sIm5hbWVzIjpbInd4IiwiX193ZWJwYWNrX3JlcXVpcmVfVU5JX01QX1BMVUdJTl9fIiwiX193ZWJwYWNrX3JlcXVpcmVfXyIsImNyZWF0ZVBhZ2UiLCJQYWdlIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7O3NEQUFBO0FBQ0E7QUFDQSwwSCw2RkFGbUJBLEVBQUUsQ0FBQ0MsaUNBQUgsR0FBdUNDLG1CQUF2QztBQUduQkMsVUFBVSxDQUFDQyxzQkFBRCxDQUFWLEM7Ozs7Ozs7Ozs7Ozs7QUNIQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBMEg7QUFDMUg7QUFDaUU7QUFDTDtBQUNhOzs7QUFHekU7QUFDdUw7QUFDdkwsZ0JBQWdCLDhMQUFVO0FBQzFCLEVBQUUsbUZBQU07QUFDUixFQUFFLHdGQUFNO0FBQ1IsRUFBRSxpR0FBZTtBQUNqQjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsRUFBRSw0RkFBVTtBQUNaO0FBQ0E7O0FBRUE7QUFDZSxnRjs7Ozs7Ozs7Ozs7O0FDdkJmO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBOzs7Ozs7Ozs7Ozs7O0FDQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7Ozs7Ozs7Ozs7Ozs7QUNSQTtBQUFBO0FBQUE7QUFBQTtBQUE4c0IsQ0FBZ0IsNHNCQUFHLEVBQUMsQzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQ29EbHVCO0FBQ0E7QUFDQTtBQUNBLHlGOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUpBLGtCLHNYQU1BLEVBQ0EsWUFDQSxFQURBLGdCQUNBLENBQ0Esb0JBQ0EsQ0FIQSxFQURBLEVBTUEsY0FDQSxjQURBLEVBTkEsRUFTQSxJQVRBLGtCQVNBLENBQ0EsU0FDQSxnQkFEQSxFQUVBLFlBRkEsRUFHQSxjQUhBLEVBSUEsaUJBSkEsRUFLQSwyQkFMQSxHQU9BLENBakJBLEVBa0JBLE1BbEJBLGtCQWtCQSxPQWxCQSxFQWtCQSxDQUNBO0FBQ0EseUNBQ0EsOERBQ0Esa0NBQ0EsaUNBQ0EsQ0F4QkEsRUF5QkEsV0FDQSxpQkFEQSw2QkFDQSxDQURBLEVBQ0EsQ0FDQSxnRUFDQSxDQUhBLEVBSUEsVUFKQSx3QkFJQSxDQUNBLGtDQUNBLHlCQUNBLENBUEEsRUFRQSxXQVJBLHlCQVFBLENBQ0EsZ0JBQ0EsdUJBQ0EsbUJBREEsRUFFQSw2QkFDQSxnQkFDQSxrQkFEQSxJQUdBLENBTkEsSUFRQSxDQWxCQSxFQW1CQSxTQW5CQSxxQkFtQkEsQ0FuQkEsRUFtQkEsQ0FDQSxLQUNBLDJDQUNBLHdCQUNBLDJCQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxhQUhBLE1BR0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFNBYkEsTUFhQTtBQUNBO0FBQ0E7QUFDQSxPQWpCQSxDQWlCQTtBQUNBO0FBQ0E7QUFDQSxLQXhDQTtBQXlDQSxjQXpDQSxzQkF5Q0EsQ0F6Q0EsRUF5Q0E7QUFDQTtBQUNBLGlCQURBOztBQUdBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSw0REFEQTs7QUFHQSxhQUpBLEVBSUEsSUFKQTtBQUtBLFdBTkE7QUFPQSxTQVJBLE1BUUE7QUFDQTtBQUNBO0FBQ0E7QUFDQSw0REFEQTs7QUFHQSxhQUpBLEVBSUEsSUFKQTtBQUtBLFdBTkE7QUFPQTtBQUNBLE9BcEJBO0FBcUJBLEtBbkVBLEVBekJBOztBQThGQSxRQTlGQSxvQkE4RkE7QUFDQTtBQUNBLEdBaEdBO0FBaUdBLFVBakdBLHNCQWlHQTtBQUNBO0FBQ0EsR0FuR0E7QUFvR0EsUUFwR0Esb0JBb0dBO0FBQ0E7QUFDQSxHQXRHQSxFOzs7Ozs7Ozs7Ozs7O0FDekRBO0FBQUE7QUFBQTtBQUFBO0FBQXlnQyxDQUFnQixtK0JBQUcsRUFBQyxDOzs7Ozs7Ozs7OztBQ0E3aEM7QUFDQSxPQUFPLEtBQVUsRUFBRSxrQkFLZCIsImZpbGUiOiJwYWdlcy9tYWluL3JlcGx5cXVlc3Rpb24vcmVwbHlxdWVzdGlvbi5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCAndW5pLXBhZ2VzJzt3eC5fX3dlYnBhY2tfcmVxdWlyZV9VTklfTVBfUExVR0lOX18gPSBfX3dlYnBhY2tfcmVxdWlyZV9fO1xuaW1wb3J0IFZ1ZSBmcm9tICd2dWUnXG5pbXBvcnQgUGFnZSBmcm9tICcuL3BhZ2VzL21haW4vcmVwbHlxdWVzdGlvbi9yZXBseXF1ZXN0aW9uLnZ1ZSdcbmNyZWF0ZVBhZ2UoUGFnZSkiLCJpbXBvcnQgeyByZW5kZXIsIHN0YXRpY1JlbmRlckZucywgcmVjeWNsYWJsZVJlbmRlciwgY29tcG9uZW50cyB9IGZyb20gXCIuL3JlcGx5cXVlc3Rpb24udnVlP3Z1ZSZ0eXBlPXRlbXBsYXRlJmlkPTA3Y2I3MTE4JlwiXG52YXIgcmVuZGVyanNcbmltcG9ydCBzY3JpcHQgZnJvbSBcIi4vcmVwbHlxdWVzdGlvbi52dWU/dnVlJnR5cGU9c2NyaXB0Jmxhbmc9anMmXCJcbmV4cG9ydCAqIGZyb20gXCIuL3JlcGx5cXVlc3Rpb24udnVlP3Z1ZSZ0eXBlPXNjcmlwdCZsYW5nPWpzJlwiXG5pbXBvcnQgc3R5bGUwIGZyb20gXCIuL3JlcGx5cXVlc3Rpb24udnVlP3Z1ZSZ0eXBlPXN0eWxlJmluZGV4PTAmbGFuZz1jc3MmXCJcblxuXG4vKiBub3JtYWxpemUgY29tcG9uZW50ICovXG5pbXBvcnQgbm9ybWFsaXplciBmcm9tIFwiIS4uLy4uLy4uLy4uLy4uL2h1YnVkZXIvSEJ1aWxkZXIvSEJ1aWxkZXJYL3BsdWdpbnMvdW5pYXBwLWNsaS9ub2RlX21vZHVsZXMvQGRjbG91ZGlvL3Z1ZS1jbGktcGx1Z2luLXVuaS9wYWNrYWdlcy92dWUtbG9hZGVyL2xpYi9ydW50aW1lL2NvbXBvbmVudE5vcm1hbGl6ZXIuanNcIlxudmFyIGNvbXBvbmVudCA9IG5vcm1hbGl6ZXIoXG4gIHNjcmlwdCxcbiAgcmVuZGVyLFxuICBzdGF0aWNSZW5kZXJGbnMsXG4gIGZhbHNlLFxuICBudWxsLFxuICBudWxsLFxuICBudWxsLFxuICBmYWxzZSxcbiAgY29tcG9uZW50cyxcbiAgcmVuZGVyanNcbilcblxuY29tcG9uZW50Lm9wdGlvbnMuX19maWxlID0gXCJwYWdlcy9tYWluL3JlcGx5cXVlc3Rpb24vcmVwbHlxdWVzdGlvbi52dWVcIlxuZXhwb3J0IGRlZmF1bHQgY29tcG9uZW50LmV4cG9ydHMiLCJleHBvcnQgKiBmcm9tIFwiLSEuLi8uLi8uLi8uLi8uLi9odWJ1ZGVyL0hCdWlsZGVyL0hCdWlsZGVyWC9wbHVnaW5zL3VuaWFwcC1jbGkvbm9kZV9tb2R1bGVzL0BkY2xvdWRpby92dWUtY2xpLXBsdWdpbi11bmkvcGFja2FnZXMvdnVlLWxvYWRlci9saWIvbG9hZGVycy90ZW1wbGF0ZUxvYWRlci5qcz8/dnVlLWxvYWRlci1vcHRpb25zIS4uLy4uLy4uLy4uLy4uL2h1YnVkZXIvSEJ1aWxkZXIvSEJ1aWxkZXJYL3BsdWdpbnMvdW5pYXBwLWNsaS9ub2RlX21vZHVsZXMvQGRjbG91ZGlvL3Z1ZS1jbGktcGx1Z2luLXVuaS9wYWNrYWdlcy93ZWJwYWNrLXByZXByb2Nlc3MtbG9hZGVyL2luZGV4LmpzPz9yZWYtLTE2LTAhLi4vLi4vLi4vLi4vLi4vaHVidWRlci9IQnVpbGRlci9IQnVpbGRlclgvcGx1Z2lucy91bmlhcHAtY2xpL25vZGVfbW9kdWxlcy9AZGNsb3VkaW8vd2VicGFjay11bmktbXAtbG9hZGVyL2xpYi90ZW1wbGF0ZS5qcyEuLi8uLi8uLi8uLi8uLi9odWJ1ZGVyL0hCdWlsZGVyL0hCdWlsZGVyWC9wbHVnaW5zL3VuaWFwcC1jbGkvbm9kZV9tb2R1bGVzL0BkY2xvdWRpby92dWUtY2xpLXBsdWdpbi11bmkvcGFja2FnZXMvd2VicGFjay11bmktYXBwLWxvYWRlci9wYWdlLW1ldGEuanMhLi4vLi4vLi4vLi4vLi4vaHVidWRlci9IQnVpbGRlci9IQnVpbGRlclgvcGx1Z2lucy91bmlhcHAtY2xpL25vZGVfbW9kdWxlcy9AZGNsb3VkaW8vdnVlLWNsaS1wbHVnaW4tdW5pL3BhY2thZ2VzL3Z1ZS1sb2FkZXIvbGliL2luZGV4LmpzPz92dWUtbG9hZGVyLW9wdGlvbnMhLi4vLi4vLi4vLi4vLi4vaHVidWRlci9IQnVpbGRlci9IQnVpbGRlclgvcGx1Z2lucy91bmlhcHAtY2xpL25vZGVfbW9kdWxlcy9AZGNsb3VkaW8vd2VicGFjay11bmktbXAtbG9hZGVyL2xpYi9zdHlsZS5qcyEuL3JlcGx5cXVlc3Rpb24udnVlP3Z1ZSZ0eXBlPXRlbXBsYXRlJmlkPTA3Y2I3MTE4JlwiIiwidmFyIGNvbXBvbmVudHNcbnZhciByZW5kZXIgPSBmdW5jdGlvbigpIHtcbiAgdmFyIF92bSA9IHRoaXNcbiAgdmFyIF9oID0gX3ZtLiRjcmVhdGVFbGVtZW50XG4gIHZhciBfYyA9IF92bS5fc2VsZi5fYyB8fCBfaFxufVxudmFyIHJlY3ljbGFibGVSZW5kZXIgPSBmYWxzZVxudmFyIHN0YXRpY1JlbmRlckZucyA9IFtdXG5yZW5kZXIuX3dpdGhTdHJpcHBlZCA9IHRydWVcblxuZXhwb3J0IHsgcmVuZGVyLCBzdGF0aWNSZW5kZXJGbnMsIHJlY3ljbGFibGVSZW5kZXIsIGNvbXBvbmVudHMgfSIsImltcG9ydCBtb2QgZnJvbSBcIi0hLi4vLi4vLi4vLi4vLi4vaHVidWRlci9IQnVpbGRlci9IQnVpbGRlclgvcGx1Z2lucy91bmlhcHAtY2xpL25vZGVfbW9kdWxlcy9iYWJlbC1sb2FkZXIvbGliL2luZGV4LmpzIS4uLy4uLy4uLy4uLy4uL2h1YnVkZXIvSEJ1aWxkZXIvSEJ1aWxkZXJYL3BsdWdpbnMvdW5pYXBwLWNsaS9ub2RlX21vZHVsZXMvQGRjbG91ZGlvL3Z1ZS1jbGktcGx1Z2luLXVuaS9wYWNrYWdlcy93ZWJwYWNrLXByZXByb2Nlc3MtbG9hZGVyL2luZGV4LmpzPz9yZWYtLTEyLTEhLi4vLi4vLi4vLi4vLi4vaHVidWRlci9IQnVpbGRlci9IQnVpbGRlclgvcGx1Z2lucy91bmlhcHAtY2xpL25vZGVfbW9kdWxlcy9AZGNsb3VkaW8vd2VicGFjay11bmktbXAtbG9hZGVyL2xpYi9zY3JpcHQuanMhLi4vLi4vLi4vLi4vLi4vaHVidWRlci9IQnVpbGRlci9IQnVpbGRlclgvcGx1Z2lucy91bmlhcHAtY2xpL25vZGVfbW9kdWxlcy9AZGNsb3VkaW8vdnVlLWNsaS1wbHVnaW4tdW5pL3BhY2thZ2VzL3Z1ZS1sb2FkZXIvbGliL2luZGV4LmpzPz92dWUtbG9hZGVyLW9wdGlvbnMhLi4vLi4vLi4vLi4vLi4vaHVidWRlci9IQnVpbGRlci9IQnVpbGRlclgvcGx1Z2lucy91bmlhcHAtY2xpL25vZGVfbW9kdWxlcy9AZGNsb3VkaW8vd2VicGFjay11bmktbXAtbG9hZGVyL2xpYi9zdHlsZS5qcyEuL3JlcGx5cXVlc3Rpb24udnVlP3Z1ZSZ0eXBlPXNjcmlwdCZsYW5nPWpzJlwiOyBleHBvcnQgZGVmYXVsdCBtb2Q7IGV4cG9ydCAqIGZyb20gXCItIS4uLy4uLy4uLy4uLy4uL2h1YnVkZXIvSEJ1aWxkZXIvSEJ1aWxkZXJYL3BsdWdpbnMvdW5pYXBwLWNsaS9ub2RlX21vZHVsZXMvYmFiZWwtbG9hZGVyL2xpYi9pbmRleC5qcyEuLi8uLi8uLi8uLi8uLi9odWJ1ZGVyL0hCdWlsZGVyL0hCdWlsZGVyWC9wbHVnaW5zL3VuaWFwcC1jbGkvbm9kZV9tb2R1bGVzL0BkY2xvdWRpby92dWUtY2xpLXBsdWdpbi11bmkvcGFja2FnZXMvd2VicGFjay1wcmVwcm9jZXNzLWxvYWRlci9pbmRleC5qcz8/cmVmLS0xMi0xIS4uLy4uLy4uLy4uLy4uL2h1YnVkZXIvSEJ1aWxkZXIvSEJ1aWxkZXJYL3BsdWdpbnMvdW5pYXBwLWNsaS9ub2RlX21vZHVsZXMvQGRjbG91ZGlvL3dlYnBhY2stdW5pLW1wLWxvYWRlci9saWIvc2NyaXB0LmpzIS4uLy4uLy4uLy4uLy4uL2h1YnVkZXIvSEJ1aWxkZXIvSEJ1aWxkZXJYL3BsdWdpbnMvdW5pYXBwLWNsaS9ub2RlX21vZHVsZXMvQGRjbG91ZGlvL3Z1ZS1jbGktcGx1Z2luLXVuaS9wYWNrYWdlcy92dWUtbG9hZGVyL2xpYi9pbmRleC5qcz8/dnVlLWxvYWRlci1vcHRpb25zIS4uLy4uLy4uLy4uLy4uL2h1YnVkZXIvSEJ1aWxkZXIvSEJ1aWxkZXJYL3BsdWdpbnMvdW5pYXBwLWNsaS9ub2RlX21vZHVsZXMvQGRjbG91ZGlvL3dlYnBhY2stdW5pLW1wLWxvYWRlci9saWIvc3R5bGUuanMhLi9yZXBseXF1ZXN0aW9uLnZ1ZT92dWUmdHlwZT1zY3JpcHQmbGFuZz1qcyZcIiIsIjx0ZW1wbGF0ZT5cclxuXHQ8dmlldz5cclxuXHRcdDwhLS0gICNpZmRlZiBINSAtLT5cclxuXHRcdFx0PHZpZXc+XHJcblx0XHRcdFx0PCEtLSAyLjAuMTnmlK/mjIFhdXRvQmFja++8jOm7mOiupOS4umZhbHNlIC0tPlxyXG5cdFx0ICAgICAgICA8dS1uYXZiYXJcclxuXHRcdCAgICAgICAgICAgIHRpdGxlPVwi6Zeu562U5Lit5b+DXCJcclxuXHRcdCAgICAgICAgICAgIDphdXRvQmFjaz1cInRydWVcIlxyXG5cdFx0XHRcdFx0OnBsYWNlaG9sZGVyPVwidHJ1ZVwiXHJcblx0XHQgICAgICAgID5cclxuXHRcdCAgICAgICAgPC91LW5hdmJhcj5cclxuXHRcdFx0PC92aWV3PlxyXG5cdFx0XHQ8IS0tICAjZW5kaWYgLS0+XHJcblx0XHQ8dmlldyBjbGFzcz1cImNsb3VtXCI+XHJcblx0XHRcdDx2aWV3ID5cclxuXHRcdFx0XHQ8dmlldyBjbGFzcz1cInJvd1wiIHN0eWxlPVwianVzdGlmeS1jb250ZW50OiBmbGV4LWVuZDsgbWFyZ2luLXRvcDogMzBycHg7XCI+XHJcblx0XHRcdFx0XHQ8dmlldyBjbGFzcz0nZGlhbG9nIHUtdHJpJz5cclxuXHRcdFx0XHRcdFx0e3thc2tDb250ZW50fX1cclxuXHRcdFx0XHRcdDwvdmlldz5cclxuXHRcdFx0XHRcdDxpbWFnZSBjbGFzcz1cImhlYWRJbWdcIiBzcmM9XCIuLi8uLi8uLi9zdGF0aWMvbG9nby5wbmdcIj48L2ltYWdlPlxyXG5cdFx0XHRcdDwvdmlldz5cclxuXHRcdFx0PC92aWV3PlxyXG5cdFx0XHQ8dmlldyBzdHlsZT1cIm1hcmdpbi1ib3R0b206IDEwMHJweDtcIj5cclxuXHRcdFx0XHQ8dmlldyBjbGFzcz1cInJvd1wiIHN0eWxlPVwiICBtYXJnaW4tdG9wOiAzMHJweDtcIj5cclxuXHRcdFx0XHRcdDxpbWFnZSBjbGFzcz1cImhlYWRJbWdcIiBzcmM9XCIuLi8uLi8uLi9zdGF0aWMvbG9nby5wbmdcIj48L2ltYWdlPlxyXG5cdFx0XHRcdFx0PHZpZXcgY2xhc3M9J2xlZnREaWFsb2cgbGVmdFUtdHJpJz5cclxuXHRcdFx0XHRcdFx0PHZpZXcgdi1pZj1cImlzTG9hZGRpbmdcIj5cclxuXHRcdFx0XHRcdFx0XHQ8dmlldyBjbGFzcz1cImxvYWRpbmdcIj5cclxuXHRcdFx0XHRcdFx0XHRcdDx2aWV3IGNsYXNzPVwiZG90MFwiPjwvdmlldz5cclxuXHRcdFx0XHRcdFx0XHRcdDx2aWV3IGNsYXNzPVwiZG90MVwiPjwvdmlldz5cclxuXHRcdFx0XHRcdFx0XHRcdDx2aWV3IGNsYXNzPVwiZG90MlwiPjwvdmlldz5cclxuXHRcdFx0XHRcdFx0XHRcdDx2aWV3IGNsYXNzPVwiZG90M1wiPjwvdmlldz5cclxuXHRcdFx0XHRcdFx0XHRcdDx2aWV3IGNsYXNzPVwiZG90NFwiPjwvdmlldz5cclxuXHRcdFx0XHRcdFx0XHQ8L3ZpZXc+XHJcblx0XHRcdFx0XHRcdDwvdmlldz5cclxuXHRcdFx0XHRcdFx0PG1wLWh0bWwgc3R5bGU9XCJjb2xvcjogIzAwMDAwMFwiIDpzZWxlY3RhYmxlPVwidHJ1ZVwiIG1hcmtkb3duPVwibWFya2Rvd25cIiA6Y29udGVudD1cImNoYW5nZUFuc3dlclRleHRDb250ZW50XCIgLz5cclxuXHRcdFx0XHRcdDwvdmlldz5cclxuXHJcblx0XHRcdFx0PC92aWV3PlxyXG5cdFx0XHQ8L3ZpZXc+XHJcblx0XHQ8L3ZpZXc+XHJcblxyXG5cclxuXHRcdDx2aWV3IGNsYXNzPVwiYm90dG9tQW5zd2VyXCI+XHJcblx0XHRcdDxidXR0b24gY2xhc3M9XCJzaGFyZUJ0blwiIG9wZW4tdHlwZT1cInNoYXJlXCI+5YiG5Lqr57uZ5aW95Y+LPC9idXR0b24+XHJcblx0XHRcdDxidXR0b24gQGNsaWNrPVwiY29weUNvbnRlbnRcIiBjbGFzcz1cImNvcHlCdG5cIj7lpI3liLbpl67popjnrZTmoYg8L2J1dHRvbj5cclxuXHRcdDwvdmlldz5cclxuXHQ8L3ZpZXc+XHJcbjwvdGVtcGxhdGU+XHJcblxyXG48c2NyaXB0PlxyXG5cdGxldCBzb2NrZXQgPSBudWxsO1xyXG5cdGltcG9ydCByZXF1ZXN0IGZyb20gXCIuLi8uLi8uLi9yZXF1ZXN0L3JlcXVlc3QuanNcIjtcclxuXHRpbXBvcnQgdXRpbCBmcm9tIFwiLi4vLi4vLi4vdXRpbC91dGlsLmpzXCI7XHJcblx0aW1wb3J0IHdlYnNvY2tldCBmcm9tIFwiLi4vLi4vLi4vdXRpbC93ZWJzb2NrZXQuanNcIjtcclxuXHRpbXBvcnQgbWQgZnJvbSAnLi4vLi4vLi4vc3RhdGljL2pzL21kJztcclxuXHRpbXBvcnQgbXBIdG1sIGZyb20gJ0Avbm9kZV9tb2R1bGVzL21wLWh0bWwvbXAtaHRtbCdcclxuXHRleHBvcnQgZGVmYXVsdCB7XHJcblx0XHRjb21wdXRlZDoge1xyXG5cdFx0XHRtZCgpIHtcclxuXHRcdFx0XHRyZXR1cm4gbWRcclxuXHRcdFx0fVxyXG5cdFx0fSxcclxuXHRcdGNvbXBvbmVudHM6IHtcclxuXHRcdFx0bXBIdG1sXHJcblx0XHR9LFxyXG5cdFx0ZGF0YSgpIHtcclxuXHRcdFx0cmV0dXJuIHtcclxuXHRcdFx0XHRpc0xvYWRkaW5nOnRydWUsXHJcblx0XHRcdFx0Y29weURhdGE6ICcnLFxyXG5cdFx0XHRcdGFza0NvbnRlbnQ6ICcnLFxyXG5cdFx0XHRcdGlzUmVwbHlJbmc6IGZhbHNlLFxyXG5cdFx0XHRcdGNoYW5nZUFuc3dlclRleHRDb250ZW50OiAnJ1xyXG5cdFx0XHR9XHJcblx0XHR9LFxyXG5cdFx0b25Mb2FkKG9wdGlvbnMpIHtcclxuXHRcdFx0Ly/ot6jpobXpnaLkvKDpgJLkv6Hmga9cclxuXHRcdFx0dW5pLiRvbignb25NZXNzYWdlJywgdGhpcy5vbk1lc3NhZ2UpO1xyXG5cdFx0XHRsZXQgaXRlbSA9IEpTT04ucGFyc2UoZGVjb2RlVVJJQ29tcG9uZW50KG9wdGlvbnMuYXNrQ29udGVudCkpXHJcblx0XHRcdHRoaXMuYXNrQ29udGVudCA9IGl0ZW0uYXNrQ29udGVudDtcclxuXHRcdFx0dGhpcy5ha3NDb250ZW50KHRoaXMuYXNrQ29udGVudClcclxuXHRcdH0sXHJcblx0XHRtZXRob2RzOiB7XHJcblx0XHRcdGluc2VydENoYXRTZXNzaW9uKGUpIHtcclxuXHRcdFx0XHR0aGlzLmNoYW5nZUFuc3dlclRleHRDb250ZW50ID0gdGhpcy5jaGFuZ2VBbnN3ZXJUZXh0Q29udGVudCArIGU7XHJcblx0XHRcdH0sXHJcblx0XHRcdGluaXRTb2NrZXQoKSB7XHJcblx0XHRcdFx0c29ja2V0ID0gbmV3IHdlYnNvY2tldCgpO1xyXG5cdFx0XHRcdHNvY2tldC5pbml0U29ja2V0TG9naW4oKTtcclxuXHRcdFx0fSxcclxuXHRcdFx0Y29weUNvbnRlbnQoKSB7XHJcblx0XHRcdFx0bGV0IHRoYXQgPSB0aGlzXHJcblx0XHRcdFx0dW5pLnNldENsaXBib2FyZERhdGEoe1xyXG5cdFx0XHRcdFx0ZGF0YTogdGhhdC5jb3B5RGF0YSxcclxuXHRcdFx0XHRcdHN1Y2Nlc3M6IGZ1bmN0aW9uKCkge1xyXG5cdFx0XHRcdFx0XHR1bmkuc2hvd1RvYXN0KHtcclxuXHRcdFx0XHRcdFx0XHR0aXRsZTogJ+W3suWkjeWItuWGheWuueWIsOWJqui0tOadvydcclxuXHRcdFx0XHRcdFx0fSlcclxuXHRcdFx0XHRcdH1cclxuXHRcdFx0XHR9KTtcclxuXHRcdFx0fSxcclxuXHRcdFx0b25NZXNzYWdlKGUpIHtcclxuXHRcdFx0XHR0cnkge1xyXG5cdFx0XHRcdFx0aWYgKGUgIT0gJ1tET05FXScgJiYgZSAhPSAnaXNPbmxpbmVTdWNjJykge1xyXG5cdFx0XHRcdFx0XHR0aGlzLmlzTG9hZGRpbmcgPSBmYWxzZVxyXG5cdFx0XHRcdFx0XHRsZXQgcmVzdWx0ID0gSlNPTi5wYXJzZShlKTtcclxuXHRcdFx0XHRcdFx0aWYgKHV0aWwuaXNOb3RCbGFuayhyZXN1bHQuY2hvaWNlc1swXS5kZWx0YS5jb250ZW50KSkge1xyXG5cdFx0XHRcdFx0XHRcdC8v6aaW5YWI5Yik5pat5piv5ZCm5Zue5aSN5LitXHJcblx0XHRcdFx0XHRcdFx0aWYgKHRoaXMuaXNSZXBseUluZykge1xyXG5cdFx0XHRcdFx0XHRcdFx0Ly/lpoLmnpzlm57lpI3kuK1cclxuXHRcdFx0XHRcdFx0XHRcdHRoaXMuaW5zZXJ0Q2hhdFNlc3Npb24ocmVzdWx0LmNob2ljZXNbMF0uZGVsdGEuY29udGVudCk7XHJcblx0XHRcdFx0XHRcdFx0fSBlbHNlIHtcclxuXHRcdFx0XHRcdFx0XHRcdHRoaXMuaXNSZXBseUluZyA9IHRydWU7XHJcblx0XHRcdFx0XHRcdFx0XHR0aGlzLmluc2VydENoYXRTZXNzaW9uKHJlc3VsdC5jaG9pY2VzWzBdLmRlbHRhLmNvbnRlbnQpO1xyXG5cdFx0XHRcdFx0XHRcdH1cclxuXHRcdFx0XHRcdFx0fVxyXG5cdFx0XHRcdFx0fSBlbHNlIHtcclxuXHRcdFx0XHRcdFx0dGhpcy5pc1JlcGx5SW5nID0gZmFsc2VcclxuXHRcdFx0XHRcdH1cclxuXHRcdFx0XHR9IGNhdGNoIChlKSB7XHJcblx0XHRcdFx0XHR0aGlzLmlzUmVwbHlJbmcgPSBmYWxzZVxyXG5cdFx0XHRcdH1cclxuXHRcdFx0fSxcclxuXHRcdFx0YWtzQ29udGVudChlKSB7XHJcblx0XHRcdFx0bGV0IHBhcmFtID0ge1xyXG5cdFx0XHRcdFx0cHJvbXB0OiBlXHJcblx0XHRcdFx0fVxyXG5cdFx0XHRcdC8v6L+b6KGM5a2Y5YKoXHJcblx0XHRcdFx0cmVxdWVzdCgnJywgJy95dWFuL2FpL3cvc3RyZWFtL2NoYXQnLCAnUE9TVCcsIHBhcmFtLCB7fSkudGhlbihyZXMgPT4ge1xyXG5cdFx0XHRcdFx0c29ja2V0LmNsb3NlKClcclxuXHRcdFx0XHRcdGxldCBtc2dlcnIgPSByZXMubXNnXHJcblx0XHRcdFx0XHRpZiAocmVzLmNvZGUgPT0gNTAwICYmIChtc2dlcnIuc2VhcmNoKFwiNDI5XCIpICE9IC0xKSkge1xyXG5cdFx0XHRcdFx0XHR1dGlsLm1lc3NhZ2UoXCLorr/pl67lpKrov4fpopHnuYEs6K+356iN5ZCO6YeN6K+VXCIsICdlcnJvcicsIGZ1bmN0aW9uKCkge1xyXG5cdFx0XHRcdFx0XHRcdHNldFRpbWVvdXQoKCkgPT4ge1xyXG5cdFx0XHRcdFx0XHRcdFx0dW5pLnN3aXRjaFRhYih7XHJcblx0XHRcdFx0XHRcdFx0XHRcdHVybDonL3BhZ2VzL21haW4vcm9sZWZyYWdtZW50L3JvbGVmcmFnbWVudCdcclxuXHRcdFx0XHRcdFx0XHRcdH0pXHJcblx0XHRcdFx0XHRcdFx0fSwgMTAwMClcclxuXHRcdFx0XHRcdFx0fSk7XHJcblx0XHRcdFx0XHR9ZWxzZXtcclxuXHRcdFx0XHRcdFx0dXRpbC5tZXNzYWdlKG1zZ2VyciwgJ2Vycm9yJywgZnVuY3Rpb24oKSB7XHJcblx0XHRcdFx0XHRcdFx0c2V0VGltZW91dCgoKSA9PiB7XHJcblx0XHRcdFx0XHRcdFx0XHR1bmkuc3dpdGNoVGFiKHtcclxuXHRcdFx0XHRcdFx0XHRcdFx0dXJsOicvcGFnZXMvbWFpbi9yb2xlZnJhZ21lbnQvcm9sZWZyYWdtZW50J1xyXG5cdFx0XHRcdFx0XHRcdFx0fSlcclxuXHRcdFx0XHRcdFx0XHR9LCAxMDAwKVxyXG5cdFx0XHRcdFx0XHR9KTtcclxuXHRcdFx0XHRcdH1cclxuXHRcdFx0XHR9KVxyXG5cdFx0XHR9XHJcblx0XHR9LFxyXG5cdFx0b25IaWRlKCkge1xyXG5cdFx0XHRzb2NrZXQuY2xvc2UoKVxyXG5cdFx0fSxcclxuXHRcdG9uVW5sb2FkKCkge1xyXG5cdFx0XHRzb2NrZXQuY2xvc2UoKVxyXG5cdFx0fSxcclxuXHRcdG9uU2hvdygpIHtcclxuXHRcdFx0dGhpcy5pbml0U29ja2V0KCk7XHJcblx0XHR9XHJcblx0fVxyXG48L3NjcmlwdD5cclxuXHJcbjxzdHlsZT5cclxuXHRwYWdlIHtcclxuXHRcdGJhY2tncm91bmQtY29sb3I6ICNmNmY2ZjY7XHJcblx0fVxyXG5cdEBrZXlmcmFtZXMganVtcCB7XHJcblxyXG5cdFx0MCUsXHJcblx0XHQ4MCUsXHJcblx0XHQxMDAlIHtcclxuXHRcdFx0dHJhbnNmb3JtOiBzY2FsZSgwKTtcclxuXHRcdFx0YmFja2dyb3VuZC1jb2xvcjogI0Y5RjlGOTtcclxuXHRcdH1cclxuXHJcblx0XHQ0MCUge1xyXG5cdFx0XHR0cmFuc2Zvcm06IHNjYWxlKDEuMCk7XHJcblx0XHRcdGJhY2tncm91bmQtY29sb3I6ICMzMTg2ZmI7XHJcblx0XHR9XHJcblx0fVxyXG5cclxuXHQuZG90MCxcclxuXHQuZG90MSxcclxuXHQuZG90MixcclxuXHQuZG90MyB7XHJcblx0XHRiYWNrZ3JvdW5kOiAjNDE3ZTVjO1xyXG5cdFx0d2lkdGg6IDMwcnB4O1xyXG5cdFx0aGVpZ2h0OiAzMHJweDtcclxuXHRcdGJvcmRlci1jb2xvcjogIzQ2NDY0NjtcclxuXHRcdGJvcmRlci1yYWRpdXM6IDUwJTtcclxuXHRcdGRpc3BsYXk6IGlubGluZS1ibG9jaztcclxuXHR9XHJcblxyXG5cdC5kb3QwIHtcclxuXHRcdGFuaW1hdGlvbjoganVtcCAxLjNzIC0wLjY0cyBsaW5lYXIgaW5maW5pdGU7XHJcblx0fVxyXG5cclxuXHQuZG90MSB7XHJcblx0XHRhbmltYXRpb246IGp1bXAgMS4zcyAtMC4zMnMgbGluZWFyIGluZmluaXRlO1xyXG5cdH1cclxuXHJcblx0LmRvdDIge1xyXG5cdFx0YW5pbWF0aW9uOiBqdW1wIDEuM3MgLTAuMTZzIGxpbmVhciBpbmZpbml0ZTtcclxuXHR9XHJcblxyXG5cdC5kb3QzIHtcclxuXHRcdGFuaW1hdGlvbjoganVtcCAxLjNzIGxpbmVhciBpbmZpbml0ZTtcclxuXHR9XHJcblxyXG5cdC5sb2FkaW5nIHtcclxuXHRcdHBhZGRpbmc6IDE3cnB4IDIwcnB4O1xyXG5cdH1cclxuXHJcblx0LmNvcHlCdG4ge1xyXG5cdFx0d2lkdGg6IDQwJTtcclxuXHRcdGJvcmRlcjogMSBzb2xpZCAjMzM4N0ZGO1xyXG5cdFx0Ym9yZGVyLXJhZGl1czogMTJycHg7XHJcblx0XHRmb250LXNpemU6IDM4cnB4O1xyXG5cdFx0aGVpZ2h0OiA3MnJweDtcclxuXHRcdGRpc3BsYXk6IGZsZXg7XHJcblx0XHRhbGlnbi1pdGVtczogY2VudGVyO1xyXG5cdFx0anVzdGlmeS1jb250ZW50OiBjZW50ZXI7XHJcblx0XHRmb250LXdlaWdodDogNTAwO1xyXG5cdFx0YmFja2dyb3VuZC1jb2xvcjogIzMzODdGRjtcclxuXHRcdGNvbG9yOiAjZmZmZmZmO1xyXG5cdH1cclxuXHJcblx0LnNoYXJlQnRuIHtcclxuXHRcdGhlaWdodDogNzJycHg7XHJcblx0XHR3aWR0aDogNDIlO1xyXG5cdFx0ZGlzcGxheTogZmxleDtcclxuXHRcdGFsaWduLWl0ZW1zOiBjZW50ZXI7XHJcblx0XHRqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcclxuXHRcdGJvcmRlcjogMSBzb2xpZCAjMzM4N0ZGO1xyXG5cdFx0Ym9yZGVyLXJhZGl1czogMTJycHg7XHJcblx0XHRmb250LXNpemU6IDM4cnB4O1xyXG5cdFx0Zm9udC13ZWlnaHQ6IDUwMDtcclxuXHRcdGNvbG9yOiAjMzM4N0ZGO1xyXG5cdH1cclxuXHJcblx0LnJvd0J0biB7XHJcblx0XHRwb3NpdGlvbjogYWJzb2x1dGU7XHJcblx0XHRib3R0b206IDEwMHJweDtcclxuXHRcdHdpZHRoOiAxMDAlO1xyXG5cdH1cclxuXHJcblx0LmNsb3VtIHtcclxuXHRcdGRpc3BsYXk6IGZsZXg7XHJcblx0XHRmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xyXG5cdH1cclxuXHJcblx0LmhlYWRJbWcge1xyXG5cdFx0d2lkdGg6IDgycnB4O1xyXG5cdFx0aGVpZ2h0OiA4MnJweDtcclxuXHRcdGJvcmRlci1yYWRpdXM6IDUwJTtcclxuXHRcdG1hcmdpbi1sZWZ0OiAxMnJweDtcclxuXHRcdG1hcmdpbi1yaWdodDogMTJycHg7XHJcblx0fVxyXG5cclxuXHQuY2hhdEl0ZW0ge1xyXG5cclxuXHRcdHBhZGRpbmctbGVmdDogMjBycHg7XHJcblx0XHRwYWRkaW5nLXRvcDogMjBycHg7XHJcblx0fVxyXG5cclxuXHQucm93IHtcclxuXHJcblx0XHRkaXNwbGF5OiBmbGV4O1xyXG5cdFx0ZmxleC1kaXJlY3Rpb246IHJvdztcclxuXHRcdGFsaWduLWl0ZW1zOiB0b3A7XHJcblx0XHR6LWluZGV4OiA5O1xyXG5cdH1cclxuXHJcblx0LmRpYWxvZyB7XHJcblx0XHRwb3NpdGlvbjogcmVsYXRpdmU7XHJcblx0XHRkaXNwbGF5OiBmbGV4O1xyXG5cdFx0ZmxleC1kaXJlY3Rpb246IHJvdztcclxuXHRcdGFsaWduLWl0ZW1zOiBjZW50ZXI7XHJcblxyXG5cdFx0bWF4LXdpZHRoOiA0NTBycHg7XHJcblx0XHRiYWNrZ3JvdW5kLWNvbG9yOiB3aGl0ZTtcclxuXHRcdGJvcmRlci1yYWRpdXM6IDEycnB4O1xyXG5cdFx0cGFkZGluZy1sZWZ0OiAyMHJweDtcclxuXHRcdHBhZGRpbmctcmlnaHQ6IDIwcnB4O1xyXG5cdFx0cGFkZGluZy10b3A6IDEwcnB4O1xyXG5cdFx0bWFyZ2luLXJpZ2h0OiAxMHJweDtcclxuXHRcdG1hcmdpbi1yaWdodDogMTBycHg7XHJcblx0XHRtYXJnaW4tdG9wOiAxMHJweDtcclxuXHJcblxyXG5cdFx0cGFkZGluZy1ib3R0b206IDEwcnB4O1xyXG5cdFx0ei1pbmRleDogMjtcclxuXHR9XHJcblxyXG5cdC51LXRyaTo6YmVmb3JlIHtcclxuXHRcdHBvc2l0aW9uOiBhYnNvbHV0ZTtcclxuXHRcdHJpZ2h0OiAtNHB4O1xyXG5cdFx0dG9wOiA1cHg7XHJcblx0XHRjb250ZW50OiAnJztcclxuXHRcdHdpZHRoOiAyMHB4O1xyXG5cdFx0aGVpZ2h0OiAyMHB4O1xyXG5cdFx0Ym9yZGVyLXN0eWxlOiBzb2xpZDtcclxuXHRcdGJvcmRlci13aWR0aDogMnB4O1xyXG5cdFx0Ym9yZGVyLWNvbG9yOiB3aGl0ZTtcclxuXHRcdGJvcmRlci1yYWRpdXM6IDZweDtcclxuXHRcdGJhY2tncm91bmQtY29sb3I6IHdoaXRlO1xyXG5cdFx0dHJhbnNmb3JtOiByb3RhdGUoNDVkZWcpO1xyXG5cdFx0ei1pbmRleDogLTE7XHJcblx0fVxyXG5cclxuXHQubGVmdERpYWxvZyB7XHJcblx0XHRwb3NpdGlvbjogcmVsYXRpdmU7XHJcblx0XHRkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XHJcblxyXG5cdFx0bWFyZ2luLXRvcDogMTBycHg7XHJcblx0XHRtYXgtd2lkdGg6IDQ1MHJweDtcclxuXHRcdGJhY2tncm91bmQtY29sb3I6ICNDQ0UxRkY7XHJcblx0XHRwYWRkaW5nLWxlZnQ6IDIwcnB4O1xyXG5cdFx0cGFkZGluZy1yaWdodDogMjBycHg7XHJcblx0XHRwYWRkaW5nLXRvcDogMTBycHg7XHJcblx0XHRtYXJnaW4tbGVmdDogMTBycHg7XHJcblx0XHRib3JkZXItcmFkaXVzOiAxMnJweDtcclxuXHRcdG1hcmdpbi1yaWdodDogMTBycHg7XHJcblx0XHRwYWRkaW5nLWJvdHRvbTogMTBycHg7XHJcblx0XHR6LWluZGV4OiAyO1xyXG5cdH1cclxuXHJcblx0LmxlZnRVLXRyaTo6YmVmb3JlIHtcclxuXHRcdHBvc2l0aW9uOiBhYnNvbHV0ZTtcclxuXHRcdGxlZnQ6IC00cHg7XHJcblx0XHR0b3A6IDVweDtcclxuXHRcdGNvbnRlbnQ6ICcnO1xyXG5cdFx0d2lkdGg6IDIwcHg7XHJcblxyXG5cdFx0aGVpZ2h0OiAyMHB4O1xyXG5cdFx0Ym9yZGVyLXN0eWxlOiBzb2xpZDtcclxuXHRcdGJvcmRlci13aWR0aDogMnB4O1xyXG5cdFx0dGV4dC1hbGlnbjogY2VudGVyO1xyXG5cdFx0Ym9yZGVyLWNvbG9yOiAjQ0NFMUZGO1xyXG5cdFx0Ym9yZGVyLXJhZGl1czogNnB4O1xyXG5cdFx0YmFja2dyb3VuZC1jb2xvcjogI0NDRTFGRjtcclxuXHRcdHRyYW5zZm9ybTogcm90YXRlKDQ1ZGVnKTtcclxuXHRcdHotaW5kZXg6IC0xO1xyXG5cdH1cclxuXHJcblx0LmJvdHRvbUFuc3dlciB7XHJcblx0XHR6LWluZGV4OiA5O1xyXG5cdFx0cG9zaXRpb246IGZpeGVkO1xyXG5cdFx0ZGlzcGxheTogZmxleDtcclxuXHRcdHotaW5kZXg6IDk7XHJcblx0XHRib3R0b206IDMwcnB4O1xyXG5cdFx0d2lkdGg6IDEwMCU7XHJcblx0fVxyXG48L3N0eWxlPlxuIiwiaW1wb3J0IG1vZCBmcm9tIFwiLSEuLi8uLi8uLi8uLi8uLi9odWJ1ZGVyL0hCdWlsZGVyL0hCdWlsZGVyWC9wbHVnaW5zL3VuaWFwcC1jbGkvbm9kZV9tb2R1bGVzL21pbmktY3NzLWV4dHJhY3QtcGx1Z2luL2Rpc3QvbG9hZGVyLmpzPz9yZWYtLTYtb25lT2YtMS0wIS4uLy4uLy4uLy4uLy4uL2h1YnVkZXIvSEJ1aWxkZXIvSEJ1aWxkZXJYL3BsdWdpbnMvdW5pYXBwLWNsaS9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L2Nqcy5qcz8/cmVmLS02LW9uZU9mLTEtMSEuLi8uLi8uLi8uLi8uLi9odWJ1ZGVyL0hCdWlsZGVyL0hCdWlsZGVyWC9wbHVnaW5zL3VuaWFwcC1jbGkvbm9kZV9tb2R1bGVzL0BkY2xvdWRpby92dWUtY2xpLXBsdWdpbi11bmkvcGFja2FnZXMvdnVlLWxvYWRlci9saWIvbG9hZGVycy9zdHlsZVBvc3RMb2FkZXIuanMhLi4vLi4vLi4vLi4vLi4vaHVidWRlci9IQnVpbGRlci9IQnVpbGRlclgvcGx1Z2lucy91bmlhcHAtY2xpL25vZGVfbW9kdWxlcy9AZGNsb3VkaW8vdnVlLWNsaS1wbHVnaW4tdW5pL3BhY2thZ2VzL3dlYnBhY2stcHJlcHJvY2Vzcy1sb2FkZXIvaW5kZXguanM/P3JlZi0tNi1vbmVPZi0xLTIhLi4vLi4vLi4vLi4vLi4vaHVidWRlci9IQnVpbGRlci9IQnVpbGRlclgvcGx1Z2lucy91bmlhcHAtY2xpL25vZGVfbW9kdWxlcy9wb3N0Y3NzLWxvYWRlci9zcmMvaW5kZXguanM/P3JlZi0tNi1vbmVPZi0xLTMhLi4vLi4vLi4vLi4vLi4vaHVidWRlci9IQnVpbGRlci9IQnVpbGRlclgvcGx1Z2lucy91bmlhcHAtY2xpL25vZGVfbW9kdWxlcy9AZGNsb3VkaW8vdnVlLWNsaS1wbHVnaW4tdW5pL3BhY2thZ2VzL3Z1ZS1sb2FkZXIvbGliL2luZGV4LmpzPz92dWUtbG9hZGVyLW9wdGlvbnMhLi4vLi4vLi4vLi4vLi4vaHVidWRlci9IQnVpbGRlci9IQnVpbGRlclgvcGx1Z2lucy91bmlhcHAtY2xpL25vZGVfbW9kdWxlcy9AZGNsb3VkaW8vd2VicGFjay11bmktbXAtbG9hZGVyL2xpYi9zdHlsZS5qcyEuL3JlcGx5cXVlc3Rpb24udnVlP3Z1ZSZ0eXBlPXN0eWxlJmluZGV4PTAmbGFuZz1jc3MmXCI7IGV4cG9ydCBkZWZhdWx0IG1vZDsgZXhwb3J0ICogZnJvbSBcIi0hLi4vLi4vLi4vLi4vLi4vaHVidWRlci9IQnVpbGRlci9IQnVpbGRlclgvcGx1Z2lucy91bmlhcHAtY2xpL25vZGVfbW9kdWxlcy9taW5pLWNzcy1leHRyYWN0LXBsdWdpbi9kaXN0L2xvYWRlci5qcz8/cmVmLS02LW9uZU9mLTEtMCEuLi8uLi8uLi8uLi8uLi9odWJ1ZGVyL0hCdWlsZGVyL0hCdWlsZGVyWC9wbHVnaW5zL3VuaWFwcC1jbGkvbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9janMuanM/P3JlZi0tNi1vbmVPZi0xLTEhLi4vLi4vLi4vLi4vLi4vaHVidWRlci9IQnVpbGRlci9IQnVpbGRlclgvcGx1Z2lucy91bmlhcHAtY2xpL25vZGVfbW9kdWxlcy9AZGNsb3VkaW8vdnVlLWNsaS1wbHVnaW4tdW5pL3BhY2thZ2VzL3Z1ZS1sb2FkZXIvbGliL2xvYWRlcnMvc3R5bGVQb3N0TG9hZGVyLmpzIS4uLy4uLy4uLy4uLy4uL2h1YnVkZXIvSEJ1aWxkZXIvSEJ1aWxkZXJYL3BsdWdpbnMvdW5pYXBwLWNsaS9ub2RlX21vZHVsZXMvQGRjbG91ZGlvL3Z1ZS1jbGktcGx1Z2luLXVuaS9wYWNrYWdlcy93ZWJwYWNrLXByZXByb2Nlc3MtbG9hZGVyL2luZGV4LmpzPz9yZWYtLTYtb25lT2YtMS0yIS4uLy4uLy4uLy4uLy4uL2h1YnVkZXIvSEJ1aWxkZXIvSEJ1aWxkZXJYL3BsdWdpbnMvdW5pYXBwLWNsaS9ub2RlX21vZHVsZXMvcG9zdGNzcy1sb2FkZXIvc3JjL2luZGV4LmpzPz9yZWYtLTYtb25lT2YtMS0zIS4uLy4uLy4uLy4uLy4uL2h1YnVkZXIvSEJ1aWxkZXIvSEJ1aWxkZXJYL3BsdWdpbnMvdW5pYXBwLWNsaS9ub2RlX21vZHVsZXMvQGRjbG91ZGlvL3Z1ZS1jbGktcGx1Z2luLXVuaS9wYWNrYWdlcy92dWUtbG9hZGVyL2xpYi9pbmRleC5qcz8/dnVlLWxvYWRlci1vcHRpb25zIS4uLy4uLy4uLy4uLy4uL2h1YnVkZXIvSEJ1aWxkZXIvSEJ1aWxkZXJYL3BsdWdpbnMvdW5pYXBwLWNsaS9ub2RlX21vZHVsZXMvQGRjbG91ZGlvL3dlYnBhY2stdW5pLW1wLWxvYWRlci9saWIvc3R5bGUuanMhLi9yZXBseXF1ZXN0aW9uLnZ1ZT92dWUmdHlwZT1zdHlsZSZpbmRleD0wJmxhbmc9Y3NzJlwiIiwiLy8gZXh0cmFjdGVkIGJ5IG1pbmktY3NzLWV4dHJhY3QtcGx1Z2luXG4gICAgaWYobW9kdWxlLmhvdCkge1xuICAgICAgLy8gMTY4Mjc0NjM1NDA1NlxuICAgICAgdmFyIGNzc1JlbG9hZCA9IHJlcXVpcmUoXCJEOi9odWJ1ZGVyL0hCdWlsZGVyL0hCdWlsZGVyWC9wbHVnaW5zL3VuaWFwcC1jbGkvbm9kZV9tb2R1bGVzL21pbmktY3NzLWV4dHJhY3QtcGx1Z2luL2Rpc3QvaG1yL2hvdE1vZHVsZVJlcGxhY2VtZW50LmpzXCIpKG1vZHVsZS5pZCwge1wiaG1yXCI6dHJ1ZSxcInB1YmxpY1BhdGhcIjpcIi4uLy4uL1wiLFwibG9jYWxzXCI6ZmFsc2V9KTtcbiAgICAgIG1vZHVsZS5ob3QuZGlzcG9zZShjc3NSZWxvYWQpO1xuICAgICAgbW9kdWxlLmhvdC5hY2NlcHQodW5kZWZpbmVkLCBjc3NSZWxvYWQpO1xuICAgIH1cbiAgIl0sInNvdXJjZVJvb3QiOiIifQ==