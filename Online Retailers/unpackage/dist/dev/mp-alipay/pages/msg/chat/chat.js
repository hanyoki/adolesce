(my["webpackJsonp"] = my["webpackJsonp"] || []).push([["pages/msg/chat/chat"],{

/***/ 128:
/*!***********************************************************************************************************!*\
  !*** F:/前端 极客营/课堂/微信小程序/uni-app/商城模板(更新一部分nvue页和subNvue导航栏)/main.js?{"page":"pages%2Fmsg%2Fchat%2Fchat"} ***!
  \***********************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/* WEBPACK VAR INJECTION */(function(createPage) {__webpack_require__(/*! uni-pages */ 4);
var _vue = _interopRequireDefault(__webpack_require__(/*! vue */ 2));
var _chat = _interopRequireDefault(__webpack_require__(/*! ./pages/msg/chat/chat.vue */ 129));function _interopRequireDefault(obj) {return obj && obj.__esModule ? obj : { default: obj };}
createPage(_chat.default);
/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./node_modules/@dcloudio/uni-mp-alipay/dist/index.js */ 1)["createPage"]))

/***/ }),

/***/ 129:
/*!**************************************************************************************!*\
  !*** F:/前端 极客营/课堂/微信小程序/uni-app/商城模板(更新一部分nvue页和subNvue导航栏)/pages/msg/chat/chat.vue ***!
  \**************************************************************************************/
/*! no static exports found */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _chat_vue_vue_type_template_id_3b8dca78___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./chat.vue?vue&type=template&id=3b8dca78& */ 130);
/* harmony import */ var _chat_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./chat.vue?vue&type=script&lang=js& */ 132);
/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _chat_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__) if(__WEBPACK_IMPORT_KEY__ !== 'default') (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _chat_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__[key]; }) }(__WEBPACK_IMPORT_KEY__));
/* harmony import */ var _chat_vue_vue_type_style_index_0_lang_scss___WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./chat.vue?vue&type=style&index=0&lang=scss& */ 134);
/* harmony import */ var _17_02_uni_app_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../../../../../正课/前端备课/17.微信小程序/02.uni-app资料/素材/HBuilderX/plugins/uniapp-cli/node_modules/@dcloudio/vue-cli-plugin-uni/packages/vue-loader/lib/runtime/componentNormalizer.js */ 10);

var renderjs





/* normalize component */

var component = Object(_17_02_uni_app_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_3__["default"])(
  _chat_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__["default"],
  _chat_vue_vue_type_template_id_3b8dca78___WEBPACK_IMPORTED_MODULE_0__["render"],
  _chat_vue_vue_type_template_id_3b8dca78___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"],
  false,
  null,
  null,
  null,
  false,
  _chat_vue_vue_type_template_id_3b8dca78___WEBPACK_IMPORTED_MODULE_0__["components"],
  renderjs
)

component.options.__file = "pages/msg/chat/chat.vue"
/* harmony default export */ __webpack_exports__["default"] = (component.exports);

/***/ }),

/***/ 130:
/*!*********************************************************************************************************************!*\
  !*** F:/前端 极客营/课堂/微信小程序/uni-app/商城模板(更新一部分nvue页和subNvue导航栏)/pages/msg/chat/chat.vue?vue&type=template&id=3b8dca78& ***!
  \*********************************************************************************************************************/
/*! exports provided: render, staticRenderFns, recyclableRender, components */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _17_02_uni_app_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_17_02_uni_app_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_16_0_17_02_uni_app_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_template_js_17_02_uni_app_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_uni_app_loader_page_meta_js_17_02_uni_app_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_17_02_uni_app_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_style_js_chat_vue_vue_type_template_id_3b8dca78___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../../../正课/前端备课/17.微信小程序/02.uni-app资料/素材/HBuilderX/plugins/uniapp-cli/node_modules/@dcloudio/vue-cli-plugin-uni/packages/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../../../../../正课/前端备课/17.微信小程序/02.uni-app资料/素材/HBuilderX/plugins/uniapp-cli/node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-preprocess-loader??ref--16-0!../../../../../../../正课/前端备课/17.微信小程序/02.uni-app资料/素材/HBuilderX/plugins/uniapp-cli/node_modules/@dcloudio/webpack-uni-mp-loader/lib/template.js!../../../../../../../正课/前端备课/17.微信小程序/02.uni-app资料/素材/HBuilderX/plugins/uniapp-cli/node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-uni-app-loader/page-meta.js!../../../../../../../正课/前端备课/17.微信小程序/02.uni-app资料/素材/HBuilderX/plugins/uniapp-cli/node_modules/@dcloudio/vue-cli-plugin-uni/packages/vue-loader/lib??vue-loader-options!../../../../../../../正课/前端备课/17.微信小程序/02.uni-app资料/素材/HBuilderX/plugins/uniapp-cli/node_modules/@dcloudio/webpack-uni-mp-loader/lib/style.js!./chat.vue?vue&type=template&id=3b8dca78& */ 131);
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "render", function() { return _17_02_uni_app_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_17_02_uni_app_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_16_0_17_02_uni_app_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_template_js_17_02_uni_app_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_uni_app_loader_page_meta_js_17_02_uni_app_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_17_02_uni_app_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_style_js_chat_vue_vue_type_template_id_3b8dca78___WEBPACK_IMPORTED_MODULE_0__["render"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return _17_02_uni_app_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_17_02_uni_app_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_16_0_17_02_uni_app_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_template_js_17_02_uni_app_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_uni_app_loader_page_meta_js_17_02_uni_app_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_17_02_uni_app_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_style_js_chat_vue_vue_type_template_id_3b8dca78___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "recyclableRender", function() { return _17_02_uni_app_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_17_02_uni_app_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_16_0_17_02_uni_app_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_template_js_17_02_uni_app_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_uni_app_loader_page_meta_js_17_02_uni_app_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_17_02_uni_app_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_style_js_chat_vue_vue_type_template_id_3b8dca78___WEBPACK_IMPORTED_MODULE_0__["recyclableRender"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "components", function() { return _17_02_uni_app_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_17_02_uni_app_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_16_0_17_02_uni_app_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_template_js_17_02_uni_app_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_uni_app_loader_page_meta_js_17_02_uni_app_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_17_02_uni_app_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_style_js_chat_vue_vue_type_template_id_3b8dca78___WEBPACK_IMPORTED_MODULE_0__["components"]; });



/***/ }),

/***/ 131:
/*!*********************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/@dcloudio/vue-cli-plugin-uni/packages/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-preprocess-loader??ref--16-0!./node_modules/@dcloudio/webpack-uni-mp-loader/lib/template.js!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-uni-app-loader/page-meta.js!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/vue-loader/lib??vue-loader-options!./node_modules/@dcloudio/webpack-uni-mp-loader/lib/style.js!F:/前端 极客营/课堂/微信小程序/uni-app/商城模板(更新一部分nvue页和subNvue导航栏)/pages/msg/chat/chat.vue?vue&type=template&id=3b8dca78& ***!
  \*********************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
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

/***/ 132:
/*!***************************************************************************************************************!*\
  !*** F:/前端 极客营/课堂/微信小程序/uni-app/商城模板(更新一部分nvue页和subNvue导航栏)/pages/msg/chat/chat.vue?vue&type=script&lang=js& ***!
  \***************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _17_02_uni_app_HBuilderX_plugins_uniapp_cli_node_modules_babel_loader_lib_index_js_17_02_uni_app_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_12_1_17_02_uni_app_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_script_js_17_02_uni_app_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_17_02_uni_app_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_style_js_chat_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../../../正课/前端备课/17.微信小程序/02.uni-app资料/素材/HBuilderX/plugins/uniapp-cli/node_modules/babel-loader/lib!../../../../../../../正课/前端备课/17.微信小程序/02.uni-app资料/素材/HBuilderX/plugins/uniapp-cli/node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-preprocess-loader??ref--12-1!../../../../../../../正课/前端备课/17.微信小程序/02.uni-app资料/素材/HBuilderX/plugins/uniapp-cli/node_modules/@dcloudio/webpack-uni-mp-loader/lib/script.js!../../../../../../../正课/前端备课/17.微信小程序/02.uni-app资料/素材/HBuilderX/plugins/uniapp-cli/node_modules/@dcloudio/vue-cli-plugin-uni/packages/vue-loader/lib??vue-loader-options!../../../../../../../正课/前端备课/17.微信小程序/02.uni-app资料/素材/HBuilderX/plugins/uniapp-cli/node_modules/@dcloudio/webpack-uni-mp-loader/lib/style.js!./chat.vue?vue&type=script&lang=js& */ 133);
/* harmony import */ var _17_02_uni_app_HBuilderX_plugins_uniapp_cli_node_modules_babel_loader_lib_index_js_17_02_uni_app_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_12_1_17_02_uni_app_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_script_js_17_02_uni_app_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_17_02_uni_app_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_style_js_chat_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_17_02_uni_app_HBuilderX_plugins_uniapp_cli_node_modules_babel_loader_lib_index_js_17_02_uni_app_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_12_1_17_02_uni_app_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_script_js_17_02_uni_app_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_17_02_uni_app_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_style_js_chat_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__);
/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _17_02_uni_app_HBuilderX_plugins_uniapp_cli_node_modules_babel_loader_lib_index_js_17_02_uni_app_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_12_1_17_02_uni_app_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_script_js_17_02_uni_app_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_17_02_uni_app_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_style_js_chat_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__) if(__WEBPACK_IMPORT_KEY__ !== 'default') (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _17_02_uni_app_HBuilderX_plugins_uniapp_cli_node_modules_babel_loader_lib_index_js_17_02_uni_app_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_12_1_17_02_uni_app_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_script_js_17_02_uni_app_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_17_02_uni_app_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_style_js_chat_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__[key]; }) }(__WEBPACK_IMPORT_KEY__));
 /* harmony default export */ __webpack_exports__["default"] = (_17_02_uni_app_HBuilderX_plugins_uniapp_cli_node_modules_babel_loader_lib_index_js_17_02_uni_app_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_12_1_17_02_uni_app_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_script_js_17_02_uni_app_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_17_02_uni_app_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_style_js_chat_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0___default.a); 

/***/ }),

/***/ 133:
/*!**********************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-preprocess-loader??ref--12-1!./node_modules/@dcloudio/webpack-uni-mp-loader/lib/script.js!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/vue-loader/lib??vue-loader-options!./node_modules/@dcloudio/webpack-uni-mp-loader/lib/style.js!F:/前端 极客营/课堂/微信小程序/uni-app/商城模板(更新一部分nvue页和subNvue导航栏)/pages/msg/chat/chat.vue?vue&type=script&lang=js& ***!
  \**********************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/* WEBPACK VAR INJECTION */(function(uni) {Object.defineProperty(exports, "__esModule", { value: true });exports.default = void 0; //
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
var _default =
{
  data: function data() {
    return {
      //文字消息

      textMsg: '',
      //消息列表
      scrollAnimation: false,
      scrollTop: 0,
      scrollToView: '',
      msgList: [],
      msgImgList: [],
      myuid: 0,
      //录音相关参数

      //H5不能录音
      RECORDER: uni.getRecorderManager(),

      isVoice: false,
      voiceTis: '按住 说话',
      recordTis: "手指上滑 取消发送",
      recording: false,
      willStop: false,
      initPoint: { identifier: 0, Y: 0 },
      recordTimer: null,
      recordLength: 0,
      //播放语音相关参数
      AUDIO: uni.createInnerAudioContext(),
      playMsgid: null,
      VoiceTimer: null,
      //表情定义
      showEmji: '',
      emojiList: [
      [{ "url": "100.gif", alt: "[微笑]" }, { "url": "101.gif", alt: "[伤心]" }, { "url": "102.gif", alt: "[美女]" }, { "url": "103.gif", alt: "[发呆]" }, { "url": "104.gif", alt: "[墨镜]" }, { "url": "105.gif", alt: "[哭]" }, { "url": "106.gif", alt: "[羞]" }, { "url": "107.gif", alt: "[哑]" }, { "url": "108.gif", alt: "[睡]" }, { "url": "109.gif", alt: "[哭]" }, { "url": "110.gif", alt: "[囧]" }, { "url": "111.gif", alt: "[怒]" }, { "url": "112.gif", alt: "[调皮]" }, { "url": "113.gif", alt: "[笑]" }, { "url": "114.gif", alt: "[惊讶]" }, { "url": "115.gif", alt: "[难过]" }, { "url": "116.gif", alt: "[酷]" }, { "url": "117.gif", alt: "[汗]" }, { "url": "118.gif", alt: "[抓狂]" }, { "url": "119.gif", alt: "[吐]" }, { "url": "120.gif", alt: "[笑]" }, { "url": "121.gif", alt: "[快乐]" }, { "url": "122.gif", alt: "[奇]" }, { "url": "123.gif", alt: "[傲]" }],
      [{ "url": "124.gif", alt: "[饿]" }, { "url": "125.gif", alt: "[累]" }, { "url": "126.gif", alt: "[吓]" }, { "url": "127.gif", alt: "[汗]" }, { "url": "128.gif", alt: "[高兴]" }, { "url": "129.gif", alt: "[闲]" }, { "url": "130.gif", alt: "[努力]" }, { "url": "131.gif", alt: "[骂]" }, { "url": "132.gif", alt: "[疑问]" }, { "url": "133.gif", alt: "[秘密]" }, { "url": "134.gif", alt: "[乱]" }, { "url": "135.gif", alt: "[疯]" }, { "url": "136.gif", alt: "[哀]" }, { "url": "137.gif", alt: "[鬼]" }, { "url": "138.gif", alt: "[打击]" }, { "url": "139.gif", alt: "[bye]" }, { "url": "140.gif", alt: "[汗]" }, { "url": "141.gif", alt: "[抠]" }, { "url": "142.gif", alt: "[鼓掌]" }, { "url": "143.gif", alt: "[糟糕]" }, { "url": "144.gif", alt: "[恶搞]" }, { "url": "145.gif", alt: "[什么]" }, { "url": "146.gif", alt: "[什么]" }, { "url": "147.gif", alt: "[累]" }],
      [{ "url": "148.gif", alt: "[看]" }, { "url": "149.gif", alt: "[难过]" }, { "url": "150.gif", alt: "[难过]" }, { "url": "151.gif", alt: "[坏]" }, { "url": "152.gif", alt: "[亲]" }, { "url": "153.gif", alt: "[吓]" }, { "url": "154.gif", alt: "[可怜]" }, { "url": "155.gif", alt: "[刀]" }, { "url": "156.gif", alt: "[水果]" }, { "url": "157.gif", alt: "[酒]" }, { "url": "158.gif", alt: "[篮球]" }, { "url": "159.gif", alt: "[乒乓]" }, { "url": "160.gif", alt: "[咖啡]" }, { "url": "161.gif", alt: "[美食]" }, { "url": "162.gif", alt: "[动物]" }, { "url": "163.gif", alt: "[鲜花]" }, { "url": "164.gif", alt: "[枯]" }, { "url": "165.gif", alt: "[唇]" }, { "url": "166.gif", alt: "[爱]" }, { "url": "167.gif", alt: "[分手]" }, { "url": "168.gif", alt: "[生日]" }, { "url": "169.gif", alt: "[电]" }, { "url": "170.gif", alt: "[炸弹]" }, { "url": "171.gif", alt: "[刀子]" }],
      [{ "url": "172.gif", alt: "[足球]" }, { "url": "173.gif", alt: "[瓢虫]" }, { "url": "174.gif", alt: "[翔]" }, { "url": "175.gif", alt: "[月亮]" }, { "url": "176.gif", alt: "[太阳]" }, { "url": "177.gif", alt: "[礼物]" }, { "url": "178.gif", alt: "[抱抱]" }, { "url": "179.gif", alt: "[拇指]" }, { "url": "180.gif", alt: "[贬低]" }, { "url": "181.gif", alt: "[握手]" }, { "url": "182.gif", alt: "[剪刀手]" }, { "url": "183.gif", alt: "[抱拳]" }, { "url": "184.gif", alt: "[勾引]" }, { "url": "185.gif", alt: "[拳头]" }, { "url": "186.gif", alt: "[小拇指]" }, { "url": "187.gif", alt: "[拇指八]" }, { "url": "188.gif", alt: "[食指]" }, { "url": "189.gif", alt: "[ok]" }, { "url": "190.gif", alt: "[情侣]" }, { "url": "191.gif", alt: "[爱心]" }, { "url": "192.gif", alt: "[蹦哒]" }, { "url": "193.gif", alt: "[颤抖]" }, { "url": "194.gif", alt: "[怄气]" }, { "url": "195.gif", alt: "[跳舞]" }],
      [{ "url": "196.gif", alt: "[发呆]" }, { "url": "197.gif", alt: "[背着]" }, { "url": "198.gif", alt: "[伸手]" }, { "url": "199.gif", alt: "[耍帅]" }, { "url": "200.png", alt: "[微笑]" }, { "url": "201.png", alt: "[生病]" }, { "url": "202.png", alt: "[哭泣]" }, { "url": "203.png", alt: "[吐舌]" }, { "url": "204.png", alt: "[迷糊]" }, { "url": "205.png", alt: "[瞪眼]" }, { "url": "206.png", alt: "[恐怖]" }, { "url": "207.png", alt: "[忧愁]" }, { "url": "208.png", alt: "[眨眉]" }, { "url": "209.png", alt: "[闭眼]" }, { "url": "210.png", alt: "[鄙视]" }, { "url": "211.png", alt: "[阴暗]" }, { "url": "212.png", alt: "[小鬼]" }, { "url": "213.png", alt: "[礼物]" }, { "url": "214.png", alt: "[拜佛]" }, { "url": "215.png", alt: "[力量]" }, { "url": "216.png", alt: "[金钱]" }, { "url": "217.png", alt: "[蛋糕]" }, { "url": "218.png", alt: "[彩带]" }, { "url": "219.png", alt: "[礼物]" }]],

      //表情图片图床名称
      onlineEmoji: { "100.gif": "AbNQgA.gif", "101.gif": "AbN3ut.gif", "102.gif": "AbNM3d.gif", "103.gif": "AbN8DP.gif", "104.gif": "AbNljI.gif", "105.gif": "AbNtUS.gif", "106.gif": "AbNGHf.gif", "107.gif": "AbNYE8.gif", "108.gif": "AbNaCQ.gif", "109.gif": "AbNN4g.gif", "110.gif": "AbN0vn.gif", "111.gif": "AbNd3j.gif", "112.gif": "AbNsbV.gif", "113.gif": "AbNwgs.gif", "114.gif": "AbNrD0.gif", "115.gif": "AbNDuq.gif", "116.gif": "AbNg5F.gif", "117.gif": "AbN6ET.gif", "118.gif": "AbNcUU.gif", "119.gif": "AbNRC4.gif", "120.gif": "AbNhvR.gif", "121.gif": "AbNf29.gif", "122.gif": "AbNW8J.gif", "123.gif": "AbNob6.gif", "124.gif": "AbN5K1.gif", "125.gif": "AbNHUO.gif", "126.gif": "AbNIDx.gif", "127.gif": "AbN7VK.gif", "128.gif": "AbNb5D.gif", "129.gif": "AbNX2d.gif", "130.gif": "AbNLPe.gif", "131.gif": "AbNjxA.gif", "132.gif": "AbNO8H.gif", "133.gif": "AbNxKI.gif", "134.gif": "AbNzrt.gif", "135.gif": "AbU9Vf.gif", "136.gif": "AbUSqP.gif", "137.gif": "AbUCa8.gif", "138.gif": "AbUkGQ.gif", "139.gif": "AbUFPg.gif", "140.gif": "AbUPIS.gif", "141.gif": "AbUZMn.gif", "142.gif": "AbUExs.gif", "143.gif": "AbUA2j.gif", "144.gif": "AbUMIU.gif", "145.gif": "AbUerq.gif", "146.gif": "AbUKaT.gif", "147.gif": "AbUmq0.gif", "148.gif": "AbUuZV.gif", "149.gif": "AbUliF.gif", "150.gif": "AbU1G4.gif", "151.gif": "AbU8z9.gif", "152.gif": "AbU3RJ.gif", "153.gif": "AbUYs1.gif", "154.gif": "AbUJMR.gif", "155.gif": "AbUadK.gif", "156.gif": "AbUtqx.gif", "157.gif": "AbUUZ6.gif", "158.gif": "AbUBJe.gif", "159.gif": "AbUdIO.gif", "160.gif": "AbU0iD.gif", "161.gif": "AbUrzd.gif", "162.gif": "AbUDRH.gif", "163.gif": "AbUyQA.gif", "164.gif": "AbUWo8.gif", "165.gif": "AbU6sI.gif", "166.gif": "AbU2eP.gif", "167.gif": "AbUcLt.gif", "168.gif": "AbU4Jg.gif", "169.gif": "AbURdf.gif", "170.gif": "AbUhFS.gif", "171.gif": "AbU5WQ.gif", "172.gif": "AbULwV.gif", "173.gif": "AbUIzj.gif", "174.gif": "AbUTQs.gif", "175.gif": "AbU7yn.gif", "176.gif": "AbUqe0.gif", "177.gif": "AbUHLq.gif", "178.gif": "AbUOoT.gif", "179.gif": "AbUvYF.gif", "180.gif": "AbUjFU.gif", "181.gif": "AbaSSJ.gif", "182.gif": "AbUxW4.gif", "183.gif": "AbaCO1.gif", "184.gif": "Abapl9.gif", "185.gif": "Aba9yR.gif", "186.gif": "AbaFw6.gif", "187.gif": "Abaiex.gif", "188.gif": "AbakTK.gif", "189.gif": "AbaZfe.png", "190.gif": "AbaEFO.gif", "191.gif": "AbaVYD.gif", "192.gif": "AbamSH.gif", "193.gif": "AbaKOI.gif", "194.gif": "Abanld.gif", "195.gif": "Abau6A.gif", "196.gif": "AbaQmt.gif", "197.gif": "Abal0P.gif", "198.gif": "AbatpQ.gif", "199.gif": "Aba1Tf.gif", "200.png": "Aba8k8.png", "201.png": "AbaGtS.png", "202.png": "AbaJfg.png", "203.png": "AbaNlj.png", "204.png": "Abawmq.png", "205.png": "AbaU6s.png", "206.png": "AbaaXn.png", "207.png": "Aba000.png", "208.png": "AbarkT.png", "209.png": "AbastU.png", "210.png": "AbaB7V.png", "211.png": "Abafn1.png", "212.png": "Abacp4.png", "213.png": "AbayhF.png", "214.png": "Abag1J.png", "215.png": "Aba2c9.png", "216.png": "AbaRXR.png", "217.png": "Aba476.png", "218.png": "Abah0x.png", "219.png": "Abdg58.png" } };

  },
  onLoad: function onLoad(option) {var _this = this;
    uni.setNavigationBarTitle({
      title: option.name });

    this.getMsgList();
    //语音自然播放结束
    this.AUDIO.onEnded(function (res) {
      _this.playMsgid = null;
    });

    //录音开始事件
    this.RECORDER.onStart(function (e) {
      _this.recordBegin(e);
    });
    //录音结束事件
    this.RECORDER.onStop(function (e) {
      _this.recordEnd(e);
    });

  },
  methods: {
    getMsgList: function getMsgList() {
      // 消息列表
      var list = [
      { id: 0, uid: 0, username: "大黑哥", face: "/static/img/face.jpg", time: "12:56", type: "text", msg: { content: "为什么温度会相差那么大？" } },
      { id: 1, uid: 1, username: "售后客服008", face: "/static/img/im/face/face_2.jpg", time: "12:57", type: "text", msg: { content: "这个是有偏差的，两个温度相差十几二十度是很正常的，如果相差五十度，那即是质量问题了。" } },
      { id: 2, uid: 1, username: "售后客服008", face: "/static/img/im/face/face_2.jpg", time: "12:59", type: "voice", msg: { url: "/static/voice/3.aac", length: "00:06" } },
      { id: 3, uid: 0, username: "大黑哥", face: "/static/img/face.jpg", time: "13:05", type: "voice", msg: { url: "/static/voice/2.mp3", length: "00:06" } },
      { id: 4, uid: 0, username: "大黑哥", face: "/static/img/face.jpg", time: "13:05", type: "img", msg: { url: "/static/img/goods/p10.jpg", w: 200, h: 200 } },
      { id: 5, uid: 1, username: "售后客服008", face: "/static/img/im/face/face_2.jpg", time: "12:59", type: "img", msg: { url: "/static/img/q.jpg", w: 1920, h: 1080 } }];

      // 获取消息中的图片,并处理显示尺寸
      for (var i = 0; i < list.length; i++) {
        if (list[i].type == 'img') {
          list[i] = this.setPicSize(list[i]);
          console.log("list[i]: " + JSON.stringify(list[i]));
          this.msgImgList.push(list[i].msg.url);
        }
      }
      this.msgList = list;
      // 滚动到底部
      this.$nextTick(function () {
        this.scrollTop = 9999;
        this.scrollAnimation = true;
      });
    },
    //处理图片尺寸，如果不处理宽高，新进入页面加载图片时候会闪
    setPicSize: function setPicSize(row) {
      var maxW = uni.upx2px(350);
      var maxH = uni.upx2px(350);
      if (row.msg.w > maxW || row.msg.h > maxH) {
        var scale = row.msg.w / row.msg.h;
        if (row.msg.w > row.msg.h) {
          row.msg.w = maxW;
          row.msg.h = row.msg.w / scale;
        } else {
          row.msg.h = maxH;
          row.msg.w = row.msg.h * scale;
        }
      }
      return row;
    },
    // 接受消息(筛选处理)
    screenMsg: function screenMsg(msg) {
      //从长连接处转发给这个方法，进行筛选处理
      if (msg.uid != this.myuid) {
        uni.vibrateLong();
      }
      switch (msg.type) {
        case 'text':
          this.addTextMsg(msg);
          break;
        case 'voice':
          this.addVoiceMsg(msg);
          break;
        case 'img':
          this.addImgMsg(msg);
          break;}

      this.$nextTick(function () {
        this.scrollToView = 'msg' + msg.id;
      });
    },
    // 选择表情
    chooseEmoji: function chooseEmoji() {
      this.showEmji = this.showEmji == 'showEmoji' ? 'hideEmoji' : 'showEmoji';
    },
    // 隐藏表情
    hideEmoji: function hideEmoji() {
      this.showEmji = this.showEmji == 'showEmoji' ? 'hideEmoji' : '';
    },
    //添加表情
    addEmoji: function addEmoji(em) {
      this.textMsg += em.alt;
    },
    // 发送文字消息
    sendText: function sendText() {
      this.hideEmoji();
      if (!this.textMsg) {
        return;
      }
      var content = this.replaceEmoji(this.textMsg);
      var msg = { content: content };
      this.sendMsg(msg, 'text');
      this.textMsg = '';
    },
    //替换表情符号为图片
    replaceEmoji: function replaceEmoji(str) {var _this2 = this;
      var replacedStr = str.replace(/\[([^(\]|\[)]*)\]/g, function (item, index) {
        console.log("item: " + item);
        for (var i = 0; i < _this2.emojiList.length; i++) {
          var row = _this2.emojiList[i];
          for (var j = 0; j < row.length; j++) {
            var EM = row[j];
            if (EM.alt == item) {
              //在线表情路径，图文混排必须使用网络路径
              var onlinePath = 'https://s2.ax1x.com/2019/04/12/';
              var imgstr = '<img src="' + onlinePath + _this2.onlineEmoji[EM.url] + '">';
              console.log("imgstr: " + imgstr);
              return imgstr;
            }
          }
        }
      });
      return '<div style="display: flex;align-items: center;">' + replacedStr + '</div>';
    },
    // 选择图片发送
    chooseImage: function chooseImage() {var _this3 = this;
      this.hideEmoji();
      uni.chooseImage({
        sizeType: ['original', 'compressed'], //可以指定是原图还是压缩图，默认二者都有
        success: function success(res) {var _loop = function _loop(
          i) {
            uni.getImageInfo({
              src: res.tempFilePaths[i],
              success: function success(image) {
                console.log(image.width);
                console.log(image.height);
                var msg = { url: res.tempFilePaths[i], w: image.width, h: image.height };
                _this3.sendMsg(msg, 'img');
              } });};for (var i = 0; i < res.tempFilePaths.length; i++) {_loop(i);

          }
        } });

    },
    // 发送消息
    sendMsg: function sendMsg(content, type) {var _this4 = this;
      //实际应用中，此处应该提交长连接，模板仅做本地处理。
      var nowDate = new Date();
      var lastid = this.msgList[this.msgList.length - 1].id;
      lastid++;
      var msg = { id: lastid, uid: 0, username: "大黑哥", face: "/static/img/face.jpg", time: nowDate.getHours() + ":" + nowDate.getMinutes(), type: type, msg: content };
      this.screenMsg(msg);
      // 定时器模拟对方回复,三秒
      setTimeout(function () {
        lastid = _this4.msgList[_this4.msgList.length - 1].id;
        lastid++;
        msg = { id: lastid, uid: 1, username: "售后客服008", face: "/static/img/im/face/face_2.jpg", time: nowDate.getHours() + ":" + nowDate.getMinutes(), type: type, msg: content };
        _this4.screenMsg(msg);
      }, 3000);
    },

    // 处理文字消息
    addTextMsg: function addTextMsg(msg) {
      this.msgList.push(msg);
    },
    // 处理语音消息
    addVoiceMsg: function addVoiceMsg(msg) {
      this.msgList.push(msg);
    },
    // 处理图片消息
    addImgMsg: function addImgMsg(msg) {
      msg = this.setPicSize(msg);
      this.msgImgList.push(msg.msg.url);
      this.msgList.push(msg);
    },
    // 预览图片
    showPic: function showPic(row) {
      uni.previewImage({
        indicator: "none",
        current: row.msg.url,
        urls: this.msgImgList });

    },
    // 播放语音
    playVoice: function playVoice(msg) {
      this.playMsgid = msg.id;
      this.AUDIO.src = msg.msg.url;
      console.log("msg.msg.url: " + msg.msg.url);
      this.AUDIO.play();
    },
    // 录音开始
    voiceBegin: function voiceBegin(e) {
      if (e.touches.length > 1) {
        return;
      }
      this.initPoint.Y = e.touches[0].clientY;
      this.initPoint.identifier = e.touches[0].identifier;
      this.RECORDER.start({ format: "aac" }); //录音开始,
    },
    //录音开始UI效果
    recordBegin: function recordBegin(e) {var _this5 = this;
      this.recording = true;
      this.voiceTis = '松开 结束';
      this.recordLength = 0;
      this.recordTimer = setInterval(function () {
        _this5.recordLength++;
      }, 1000);
    },
    // 录音被打断
    voiceCancel: function voiceCancel() {
      this.recording = false;
      this.voiceTis = '按住 说话';
      this.recordTis = '手指上滑 取消发送';
      this.willStop = true; //不发送录音
      this.RECORDER.stop(); //录音结束
    },
    // 录音中(判断是否触发上滑取消发送)
    voiceIng: function voiceIng(e) {
      if (!this.recording) {
        return;
      }
      var touche = e.touches[0];
      //上滑一个导航栏的高度触发上滑取消发送
      if (this.initPoint.Y - touche.clientY >= uni.upx2px(100)) {
        this.willStop = true;
        this.recordTis = '松开手指 取消发送';
      } else {
        this.willStop = false;
        this.recordTis = '手指上滑 取消发送';
      }
    },
    // 结束录音
    voiceEnd: function voiceEnd(e) {
      if (!this.recording) {
        return;
      }
      this.recording = false;
      this.voiceTis = '按住 说话';
      this.recordTis = '手指上滑 取消发送';
      this.RECORDER.stop(); //录音结束
    },

    //录音结束(回调文件)
    recordEnd: function recordEnd(e) {
      clearInterval(this.recordTimer);
      if (!this.willStop) {
        plus.io.resolveLocalFileSystemURL(e.tempFilePath, function (entry) {
          // 可通过entry对象操作test.html文件 
          entry.file(function (file) {
            console.log(file.size + '--' + file.name);
          });
        }, function (e) {
          alert("Resolve file URL failed: " + e.message);
        });
        console.log("e: " + JSON.stringify(e));
        var msg = {
          length: 0,
          url: e.tempFilePath };

        var min = parseInt(this.recordLength / 60);
        var sec = this.recordLength % 60;
        min = min < 10 ? '0' + min : min;
        sec = sec < 10 ? '0' + sec : sec;
        msg.length = min + ':' + sec;
        this.sendMsg(msg, 'voice');
      } else {
        console.log('取消发送录音');
      }
      this.willStop = false;
    },
    // 切换语音/文字输入
    switchVoice: function switchVoice() {
      this.hideEmoji();
      this.isVoice = this.isVoice ? false : true;
    },
    discard: function discard() {
      return;
    } } };exports.default = _default;
/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./node_modules/@dcloudio/uni-mp-alipay/dist/index.js */ 1)["default"]))

/***/ }),

/***/ 134:
/*!************************************************************************************************************************!*\
  !*** F:/前端 极客营/课堂/微信小程序/uni-app/商城模板(更新一部分nvue页和subNvue导航栏)/pages/msg/chat/chat.vue?vue&type=style&index=0&lang=scss& ***!
  \************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _17_02_uni_app_HBuilderX_plugins_uniapp_cli_node_modules_mini_css_extract_plugin_dist_loader_js_ref_8_oneOf_1_0_17_02_uni_app_HBuilderX_plugins_uniapp_cli_node_modules_css_loader_dist_cjs_js_ref_8_oneOf_1_1_17_02_uni_app_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_loaders_stylePostLoader_js_17_02_uni_app_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_8_oneOf_1_2_17_02_uni_app_HBuilderX_plugins_uniapp_cli_node_modules_postcss_loader_src_index_js_ref_8_oneOf_1_3_17_02_uni_app_HBuilderX_plugins_uniapp_cli_node_modules_sass_loader_dist_cjs_js_ref_8_oneOf_1_4_17_02_uni_app_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_8_oneOf_1_5_17_02_uni_app_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_17_02_uni_app_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_style_js_chat_vue_vue_type_style_index_0_lang_scss___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../../../正课/前端备课/17.微信小程序/02.uni-app资料/素材/HBuilderX/plugins/uniapp-cli/node_modules/mini-css-extract-plugin/dist/loader.js??ref--8-oneOf-1-0!../../../../../../../正课/前端备课/17.微信小程序/02.uni-app资料/素材/HBuilderX/plugins/uniapp-cli/node_modules/css-loader/dist/cjs.js??ref--8-oneOf-1-1!../../../../../../../正课/前端备课/17.微信小程序/02.uni-app资料/素材/HBuilderX/plugins/uniapp-cli/node_modules/@dcloudio/vue-cli-plugin-uni/packages/vue-loader/lib/loaders/stylePostLoader.js!../../../../../../../正课/前端备课/17.微信小程序/02.uni-app资料/素材/HBuilderX/plugins/uniapp-cli/node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-preprocess-loader??ref--8-oneOf-1-2!../../../../../../../正课/前端备课/17.微信小程序/02.uni-app资料/素材/HBuilderX/plugins/uniapp-cli/node_modules/postcss-loader/src??ref--8-oneOf-1-3!../../../../../../../正课/前端备课/17.微信小程序/02.uni-app资料/素材/HBuilderX/plugins/uniapp-cli/node_modules/sass-loader/dist/cjs.js??ref--8-oneOf-1-4!../../../../../../../正课/前端备课/17.微信小程序/02.uni-app资料/素材/HBuilderX/plugins/uniapp-cli/node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-preprocess-loader??ref--8-oneOf-1-5!../../../../../../../正课/前端备课/17.微信小程序/02.uni-app资料/素材/HBuilderX/plugins/uniapp-cli/node_modules/@dcloudio/vue-cli-plugin-uni/packages/vue-loader/lib??vue-loader-options!../../../../../../../正课/前端备课/17.微信小程序/02.uni-app资料/素材/HBuilderX/plugins/uniapp-cli/node_modules/@dcloudio/webpack-uni-mp-loader/lib/style.js!./chat.vue?vue&type=style&index=0&lang=scss& */ 135);
/* harmony import */ var _17_02_uni_app_HBuilderX_plugins_uniapp_cli_node_modules_mini_css_extract_plugin_dist_loader_js_ref_8_oneOf_1_0_17_02_uni_app_HBuilderX_plugins_uniapp_cli_node_modules_css_loader_dist_cjs_js_ref_8_oneOf_1_1_17_02_uni_app_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_loaders_stylePostLoader_js_17_02_uni_app_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_8_oneOf_1_2_17_02_uni_app_HBuilderX_plugins_uniapp_cli_node_modules_postcss_loader_src_index_js_ref_8_oneOf_1_3_17_02_uni_app_HBuilderX_plugins_uniapp_cli_node_modules_sass_loader_dist_cjs_js_ref_8_oneOf_1_4_17_02_uni_app_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_8_oneOf_1_5_17_02_uni_app_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_17_02_uni_app_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_style_js_chat_vue_vue_type_style_index_0_lang_scss___WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_17_02_uni_app_HBuilderX_plugins_uniapp_cli_node_modules_mini_css_extract_plugin_dist_loader_js_ref_8_oneOf_1_0_17_02_uni_app_HBuilderX_plugins_uniapp_cli_node_modules_css_loader_dist_cjs_js_ref_8_oneOf_1_1_17_02_uni_app_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_loaders_stylePostLoader_js_17_02_uni_app_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_8_oneOf_1_2_17_02_uni_app_HBuilderX_plugins_uniapp_cli_node_modules_postcss_loader_src_index_js_ref_8_oneOf_1_3_17_02_uni_app_HBuilderX_plugins_uniapp_cli_node_modules_sass_loader_dist_cjs_js_ref_8_oneOf_1_4_17_02_uni_app_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_8_oneOf_1_5_17_02_uni_app_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_17_02_uni_app_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_style_js_chat_vue_vue_type_style_index_0_lang_scss___WEBPACK_IMPORTED_MODULE_0__);
/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _17_02_uni_app_HBuilderX_plugins_uniapp_cli_node_modules_mini_css_extract_plugin_dist_loader_js_ref_8_oneOf_1_0_17_02_uni_app_HBuilderX_plugins_uniapp_cli_node_modules_css_loader_dist_cjs_js_ref_8_oneOf_1_1_17_02_uni_app_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_loaders_stylePostLoader_js_17_02_uni_app_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_8_oneOf_1_2_17_02_uni_app_HBuilderX_plugins_uniapp_cli_node_modules_postcss_loader_src_index_js_ref_8_oneOf_1_3_17_02_uni_app_HBuilderX_plugins_uniapp_cli_node_modules_sass_loader_dist_cjs_js_ref_8_oneOf_1_4_17_02_uni_app_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_8_oneOf_1_5_17_02_uni_app_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_17_02_uni_app_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_style_js_chat_vue_vue_type_style_index_0_lang_scss___WEBPACK_IMPORTED_MODULE_0__) if(__WEBPACK_IMPORT_KEY__ !== 'default') (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _17_02_uni_app_HBuilderX_plugins_uniapp_cli_node_modules_mini_css_extract_plugin_dist_loader_js_ref_8_oneOf_1_0_17_02_uni_app_HBuilderX_plugins_uniapp_cli_node_modules_css_loader_dist_cjs_js_ref_8_oneOf_1_1_17_02_uni_app_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_loaders_stylePostLoader_js_17_02_uni_app_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_8_oneOf_1_2_17_02_uni_app_HBuilderX_plugins_uniapp_cli_node_modules_postcss_loader_src_index_js_ref_8_oneOf_1_3_17_02_uni_app_HBuilderX_plugins_uniapp_cli_node_modules_sass_loader_dist_cjs_js_ref_8_oneOf_1_4_17_02_uni_app_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_8_oneOf_1_5_17_02_uni_app_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_17_02_uni_app_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_style_js_chat_vue_vue_type_style_index_0_lang_scss___WEBPACK_IMPORTED_MODULE_0__[key]; }) }(__WEBPACK_IMPORT_KEY__));
 /* harmony default export */ __webpack_exports__["default"] = (_17_02_uni_app_HBuilderX_plugins_uniapp_cli_node_modules_mini_css_extract_plugin_dist_loader_js_ref_8_oneOf_1_0_17_02_uni_app_HBuilderX_plugins_uniapp_cli_node_modules_css_loader_dist_cjs_js_ref_8_oneOf_1_1_17_02_uni_app_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_loaders_stylePostLoader_js_17_02_uni_app_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_8_oneOf_1_2_17_02_uni_app_HBuilderX_plugins_uniapp_cli_node_modules_postcss_loader_src_index_js_ref_8_oneOf_1_3_17_02_uni_app_HBuilderX_plugins_uniapp_cli_node_modules_sass_loader_dist_cjs_js_ref_8_oneOf_1_4_17_02_uni_app_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_8_oneOf_1_5_17_02_uni_app_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_17_02_uni_app_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_style_js_chat_vue_vue_type_style_index_0_lang_scss___WEBPACK_IMPORTED_MODULE_0___default.a); 

/***/ }),

/***/ 135:
/*!**************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/mini-css-extract-plugin/dist/loader.js??ref--8-oneOf-1-0!./node_modules/css-loader/dist/cjs.js??ref--8-oneOf-1-1!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-preprocess-loader??ref--8-oneOf-1-2!./node_modules/postcss-loader/src??ref--8-oneOf-1-3!./node_modules/sass-loader/dist/cjs.js??ref--8-oneOf-1-4!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-preprocess-loader??ref--8-oneOf-1-5!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/vue-loader/lib??vue-loader-options!./node_modules/@dcloudio/webpack-uni-mp-loader/lib/style.js!F:/前端 极客营/课堂/微信小程序/uni-app/商城模板(更新一部分nvue页和subNvue导航栏)/pages/msg/chat/chat.vue?vue&type=style&index=0&lang=scss& ***!
  \**************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

// extracted by mini-css-extract-plugin
    if(false) { var cssReload; }
  

/***/ })

},[[128,"common/runtime","common/vendor"]]]);