exports.ids = [3];
exports.modules = {

/***/ 145:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// CONCATENATED MODULE: ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib??vue-loader-options!./pages/alltags.vue?vue&type=template&id=722f9fa9&scoped=true&
var render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('div',{staticClass:"page-wrapper"},[(_vm.$fetchState.pending && !_vm.tags.length)?[_c('content-placeholders',{attrs:{"rounded":""}},[_c('content-placeholders-heading'),_vm._v(" "),_c('content-placeholders-text',{attrs:{"lines":70}})],1)]:(_vm.$fetchState.error)?[_c('inline-error-block',{attrs:{"error":_vm.$fetchState.error}})]:[_vm._ssrNode("<div class=\"flex flex-wrap justify-between mb-2 items-center\" data-v-722f9fa9>","</div>",[_vm._ssrNode("<input type=\"text\" placeholder=\"search\""+(_vm._ssrAttr("value",(_vm.searchQuery)))+" class=\"px-3 py-1 rounded-md outline-none mb-1 w-56\" data-v-722f9fa9> "),_c('routing-articles')],2),_vm._ssrNode(" "),_vm._ssrNode("<div class=\"flex flex-wrap\" data-v-722f9fa9>","</div>",_vm._l((_vm.queryTags),function(tag){return _c('tags-of-articles',{key:tag.id,attrs:{"tag":tag}})}),1)]],2)}
var staticRenderFns = []


// CONCATENATED MODULE: ./pages/alltags.vue?vue&type=template&id=722f9fa9&scoped=true&

// CONCATENATED MODULE: ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib??vue-loader-options!./components/blocks/TagsOfArticles.vue?vue&type=template&id=ea23ea78&scoped=true&
var TagsOfArticlesvue_type_template_id_ea23ea78_scoped_true_render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('nuxt-link',{staticClass:"tag",style:({ background: _vm.tag.bg_color_hex, color: _vm.tag.text_color_hex }),attrs:{"to":_vm.localePath({ name: 't-tag', params: { tag: _vm.tag.name } })}},[_vm._v("\n  #"+_vm._s(_vm.tag.name)+"\n")])}
var TagsOfArticlesvue_type_template_id_ea23ea78_scoped_true_staticRenderFns = []


// CONCATENATED MODULE: ./components/blocks/TagsOfArticles.vue?vue&type=template&id=ea23ea78&scoped=true&

// CONCATENATED MODULE: ./node_modules/babel-loader/lib??ref--2-0!./node_modules/vue-loader/lib??vue-loader-options!./components/blocks/TagsOfArticles.vue?vue&type=script&lang=js&
//
//
//
//
//
//
//
//
//
/* harmony default export */ var TagsOfArticlesvue_type_script_lang_js_ = ({
  props: {
    tag: {
      type: Object,
      default: null
    }
  }
});
// CONCATENATED MODULE: ./components/blocks/TagsOfArticles.vue?vue&type=script&lang=js&
 /* harmony default export */ var blocks_TagsOfArticlesvue_type_script_lang_js_ = (TagsOfArticlesvue_type_script_lang_js_); 
// EXTERNAL MODULE: ./node_modules/vue-loader/lib/runtime/componentNormalizer.js
var componentNormalizer = __webpack_require__(4);

// CONCATENATED MODULE: ./components/blocks/TagsOfArticles.vue



function injectStyles (context) {
  
  var style0 = __webpack_require__(93)
if (style0.__inject__) style0.__inject__(context)

}

/* normalize component */

var component = Object(componentNormalizer["a" /* default */])(
  blocks_TagsOfArticlesvue_type_script_lang_js_,
  TagsOfArticlesvue_type_template_id_ea23ea78_scoped_true_render,
  TagsOfArticlesvue_type_template_id_ea23ea78_scoped_true_staticRenderFns,
  false,
  injectStyles,
  "ea23ea78",
  "646287e0"
  
)

/* harmony default export */ var TagsOfArticles = (component.exports);
// EXTERNAL MODULE: ./components/blocks/RoutingArticles.vue + 4 modules
var RoutingArticles = __webpack_require__(65);

// EXTERNAL MODULE: ./components/blocks/InlineErrorBlock.vue + 4 modules
var InlineErrorBlock = __webpack_require__(53);

// CONCATENATED MODULE: ./node_modules/babel-loader/lib??ref--2-0!./node_modules/vue-loader/lib??vue-loader-options!./pages/alltags.vue?vue&type=script&lang=js&
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//



/* harmony default export */ var alltagsvue_type_script_lang_js_ = ({
  components: {
    tagsOfArticles: TagsOfArticles,
    InlineErrorBlock: InlineErrorBlock["a" /* default */],
    RoutingArticles: RoutingArticles["a" /* default */]
  },

  async fetch() {
    const tags = await fetch(`https://dev.to/api/tags?per_page=1000`).then(res => res.json());
    this.tags = tags;
  },

  data() {
    return {
      currentPage: 1,
      searchQuery: '',
      tags: []
    };
  },

  computed: {
    queryTags() {
      if (this.searchQuery) {
        return this.tags.filter(item => {
          return this.searchQuery.toLowerCase().split(' ').every(v => item.name.toLowerCase().includes(v));
        });
      } else {
        return this.tags;
      }
    }

  },
  methods: {},

  head() {
    return {
      title: 'New Tags'
    };
  }

});
// CONCATENATED MODULE: ./pages/alltags.vue?vue&type=script&lang=js&
 /* harmony default export */ var pages_alltagsvue_type_script_lang_js_ = (alltagsvue_type_script_lang_js_); 
// CONCATENATED MODULE: ./pages/alltags.vue



function alltags_injectStyles (context) {
  
  var style0 = __webpack_require__(95)
if (style0.__inject__) style0.__inject__(context)

}

/* normalize component */

var alltags_component = Object(componentNormalizer["a" /* default */])(
  pages_alltagsvue_type_script_lang_js_,
  render,
  staticRenderFns,
  false,
  alltags_injectStyles,
  "722f9fa9",
  "3159badc"
  
)

/* harmony default export */ var alltags = __webpack_exports__["default"] = (alltags_component.exports);

/***/ }),

/***/ 52:
/***/ (function(module, exports, __webpack_require__) {

// style-loader: Adds some css to the DOM by adding a <style> tag

// load the styles
var content = __webpack_require__(58);
if(typeof content === 'string') content = [[module.i, content, '']];
if(content.locals) module.exports = content.locals;
// add CSS to SSR context
var add = __webpack_require__(3).default
module.exports.__inject__ = function (context) {
  add("06217649", content, true, context)
};

/***/ }),

/***/ 53:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";

// CONCATENATED MODULE: ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib??vue-loader-options!./components/blocks/InlineErrorBlock.vue?vue&type=template&id=29c14bcb&scoped=true&
var render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('div',{staticClass:"error-block"},[_c('warning-icon'),_vm._ssrNode(" <h2 data-v-29c14bcb>"+_vm._ssrEscape(_vm._s(_vm.error.message))+"</h2>")],2)}
var staticRenderFns = []


// CONCATENATED MODULE: ./components/blocks/InlineErrorBlock.vue?vue&type=template&id=29c14bcb&scoped=true&

// EXTERNAL MODULE: ./assets/icons/warning.svg?inline
var warninginline = __webpack_require__(56);
var warninginline_default = /*#__PURE__*/__webpack_require__.n(warninginline);

// CONCATENATED MODULE: ./node_modules/babel-loader/lib??ref--2-0!./node_modules/vue-loader/lib??vue-loader-options!./components/blocks/InlineErrorBlock.vue?vue&type=script&lang=js&
//
//
//
//
//
//
//

/* harmony default export */ var InlineErrorBlockvue_type_script_lang_js_ = ({
  components: {
    WarningIcon: warninginline_default.a
  },
  props: {
    error: {
      type: Object,
      default: () => {}
    }
  }
});
// CONCATENATED MODULE: ./components/blocks/InlineErrorBlock.vue?vue&type=script&lang=js&
 /* harmony default export */ var blocks_InlineErrorBlockvue_type_script_lang_js_ = (InlineErrorBlockvue_type_script_lang_js_); 
// EXTERNAL MODULE: ./node_modules/vue-loader/lib/runtime/componentNormalizer.js
var componentNormalizer = __webpack_require__(4);

// CONCATENATED MODULE: ./components/blocks/InlineErrorBlock.vue



function injectStyles (context) {
  
  var style0 = __webpack_require__(57)
if (style0.__inject__) style0.__inject__(context)

}

/* normalize component */

var component = Object(componentNormalizer["a" /* default */])(
  blocks_InlineErrorBlockvue_type_script_lang_js_,
  render,
  staticRenderFns,
  false,
  injectStyles,
  "29c14bcb",
  "4a60a551"
  
)

/* harmony default export */ var InlineErrorBlock = __webpack_exports__["a"] = (component.exports);

/***/ }),

/***/ 54:
/***/ (function(module, exports, __webpack_require__) {

// style-loader: Adds some css to the DOM by adding a <style> tag

// load the styles
var content = __webpack_require__(62);
if(typeof content === 'string') content = [[module.i, content, '']];
if(content.locals) module.exports = content.locals;
// add CSS to SSR context
var add = __webpack_require__(3).default
module.exports.__inject__ = function (context) {
  add("155ff493", content, true, context)
};

/***/ }),

/***/ 56:
/***/ (function(module, exports) {


      module.exports = {
        functional: true,
        render(_h, _vm) {
          const { _c, _v, data, children = [] } = _vm;

          const {
            class: classNames,
            staticClass,
            style,
            staticStyle,
            attrs = {},
            ...rest
          } = data;

          return _c(
            'svg',
            {
              class: [classNames,staticClass],
              style: [style,staticStyle],
              attrs: Object.assign({"width":"24","height":"24","viewBox":"0 0 24 24","fill":"none","xmlns":"http://www.w3.org/2000/svg"}, attrs),
              ...rest,
            },
            children.concat([_c('path',{attrs:{"d":"M21.9035 20.8367L12.6183 3.38776C12.4799 3.12844 12.2411 3 12 3C11.7589 3 11.5179 3.12844 11.3817 3.38776L2.09654 20.8367C1.822 21.3554 2.16573 22 2.71481 22H21.2852C21.8343 22 22.178 21.3554 21.9035 20.8367ZM11.2858 10.1735C11.2858 10.0668 11.3661 9.97959 11.4643 9.97959H12.5357C12.6339 9.97959 12.7142 10.0668 12.7142 10.1735V14.6327C12.7142 14.7393 12.6339 14.8265 12.5357 14.8265H11.4643C11.3661 14.8265 11.2858 14.7393 11.2858 14.6327V10.1735ZM12 18.7041C11.7196 18.6979 11.4527 18.5726 11.2564 18.3551C11.0602 18.1376 10.9503 17.8453 10.9503 17.5408C10.9503 17.2363 11.0602 16.944 11.2564 16.7265C11.4527 16.5091 11.7196 16.3838 12 16.3776C12.2804 16.3838 12.5473 16.5091 12.7436 16.7265C12.9398 16.944 13.0497 17.2363 13.0497 17.5408C13.0497 17.8453 12.9398 18.1376 12.7436 18.3551C12.5473 18.5726 12.2804 18.6979 12 18.7041V18.7041Z","fill":"black"}})])
          )
        }
      }
    

/***/ }),

/***/ 57:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_vue_style_loader_index_js_ref_7_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_7_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_7_oneOf_1_2_node_modules_sass_loader_dist_cjs_js_ref_7_oneOf_1_3_node_modules_sass_resources_loader_lib_loader_js_ref_7_oneOf_1_4_node_modules_vue_loader_lib_index_js_vue_loader_options_InlineErrorBlock_vue_vue_type_style_index_0_id_29c14bcb_lang_scss_scoped_true___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(52);
/* harmony import */ var _node_modules_vue_style_loader_index_js_ref_7_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_7_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_7_oneOf_1_2_node_modules_sass_loader_dist_cjs_js_ref_7_oneOf_1_3_node_modules_sass_resources_loader_lib_loader_js_ref_7_oneOf_1_4_node_modules_vue_loader_lib_index_js_vue_loader_options_InlineErrorBlock_vue_vue_type_style_index_0_id_29c14bcb_lang_scss_scoped_true___WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_vue_style_loader_index_js_ref_7_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_7_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_7_oneOf_1_2_node_modules_sass_loader_dist_cjs_js_ref_7_oneOf_1_3_node_modules_sass_resources_loader_lib_loader_js_ref_7_oneOf_1_4_node_modules_vue_loader_lib_index_js_vue_loader_options_InlineErrorBlock_vue_vue_type_style_index_0_id_29c14bcb_lang_scss_scoped_true___WEBPACK_IMPORTED_MODULE_0__);
/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _node_modules_vue_style_loader_index_js_ref_7_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_7_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_7_oneOf_1_2_node_modules_sass_loader_dist_cjs_js_ref_7_oneOf_1_3_node_modules_sass_resources_loader_lib_loader_js_ref_7_oneOf_1_4_node_modules_vue_loader_lib_index_js_vue_loader_options_InlineErrorBlock_vue_vue_type_style_index_0_id_29c14bcb_lang_scss_scoped_true___WEBPACK_IMPORTED_MODULE_0__) if(["default"].indexOf(__WEBPACK_IMPORT_KEY__) < 0) (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _node_modules_vue_style_loader_index_js_ref_7_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_7_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_7_oneOf_1_2_node_modules_sass_loader_dist_cjs_js_ref_7_oneOf_1_3_node_modules_sass_resources_loader_lib_loader_js_ref_7_oneOf_1_4_node_modules_vue_loader_lib_index_js_vue_loader_options_InlineErrorBlock_vue_vue_type_style_index_0_id_29c14bcb_lang_scss_scoped_true___WEBPACK_IMPORTED_MODULE_0__[key]; }) }(__WEBPACK_IMPORT_KEY__));


/***/ }),

/***/ 58:
/***/ (function(module, exports, __webpack_require__) {

// Imports
var ___CSS_LOADER_API_IMPORT___ = __webpack_require__(2);
exports = ___CSS_LOADER_API_IMPORT___(false);
// Module
exports.push([module.i, ".error-block[data-v-29c14bcb]{display:flex;flex-direction:column;align-items:center;padding:2rem}svg[data-v-29c14bcb]{width:3rem;height:3rem;margin-bottom:1rem;opacity:.75}h2[data-v-29c14bcb]{font-size:1.5rem;text-align:center}", ""]);
// Exports
module.exports = exports;


/***/ }),

/***/ 61:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_vue_style_loader_index_js_ref_7_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_7_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_7_oneOf_1_2_node_modules_sass_loader_dist_cjs_js_ref_7_oneOf_1_3_node_modules_sass_resources_loader_lib_loader_js_ref_7_oneOf_1_4_node_modules_vue_loader_lib_index_js_vue_loader_options_RoutingArticles_vue_vue_type_style_index_0_id_0e47e0be_lang_scss_scoped_true___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(54);
/* harmony import */ var _node_modules_vue_style_loader_index_js_ref_7_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_7_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_7_oneOf_1_2_node_modules_sass_loader_dist_cjs_js_ref_7_oneOf_1_3_node_modules_sass_resources_loader_lib_loader_js_ref_7_oneOf_1_4_node_modules_vue_loader_lib_index_js_vue_loader_options_RoutingArticles_vue_vue_type_style_index_0_id_0e47e0be_lang_scss_scoped_true___WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_vue_style_loader_index_js_ref_7_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_7_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_7_oneOf_1_2_node_modules_sass_loader_dist_cjs_js_ref_7_oneOf_1_3_node_modules_sass_resources_loader_lib_loader_js_ref_7_oneOf_1_4_node_modules_vue_loader_lib_index_js_vue_loader_options_RoutingArticles_vue_vue_type_style_index_0_id_0e47e0be_lang_scss_scoped_true___WEBPACK_IMPORTED_MODULE_0__);
/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _node_modules_vue_style_loader_index_js_ref_7_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_7_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_7_oneOf_1_2_node_modules_sass_loader_dist_cjs_js_ref_7_oneOf_1_3_node_modules_sass_resources_loader_lib_loader_js_ref_7_oneOf_1_4_node_modules_vue_loader_lib_index_js_vue_loader_options_RoutingArticles_vue_vue_type_style_index_0_id_0e47e0be_lang_scss_scoped_true___WEBPACK_IMPORTED_MODULE_0__) if(["default"].indexOf(__WEBPACK_IMPORT_KEY__) < 0) (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _node_modules_vue_style_loader_index_js_ref_7_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_7_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_7_oneOf_1_2_node_modules_sass_loader_dist_cjs_js_ref_7_oneOf_1_3_node_modules_sass_resources_loader_lib_loader_js_ref_7_oneOf_1_4_node_modules_vue_loader_lib_index_js_vue_loader_options_RoutingArticles_vue_vue_type_style_index_0_id_0e47e0be_lang_scss_scoped_true___WEBPACK_IMPORTED_MODULE_0__[key]; }) }(__WEBPACK_IMPORT_KEY__));


/***/ }),

/***/ 62:
/***/ (function(module, exports, __webpack_require__) {

// Imports
var ___CSS_LOADER_API_IMPORT___ = __webpack_require__(2);
exports = ___CSS_LOADER_API_IMPORT___(false);
// Module
exports.push([module.i, ".tags[data-v-0e47e0be]{display:flex;flex-wrap:wrap}.tags .tag[data-v-0e47e0be]{font-size:.875rem;font-weight:500;line-height:1;margin:.25rem;padding:.5rem;border-radius:.25rem;box-shadow:-4px -4px 8px #f8fafe,4px 4px 8px #ced2db}.tags .tag[data-v-0e47e0be]:hover{color:#673ab7;background:linear-gradient(135deg,rgba(0,0,0,.09),hsla(0,0%,100%,0))}.tags .tag.nuxt-link-exact-active[data-v-0e47e0be],.tags .tag[data-v-0e47e0be]:active{color:#673ab7;background:transparent;box-shadow:inset -4px -4px 8px #f0f3f9,inset 4px 4px 8px #ced2db,inset -1px -1px 4px #8e8e8e}", ""]);
// Exports
module.exports = exports;


/***/ }),

/***/ 65:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";

// CONCATENATED MODULE: ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib??vue-loader-options!./components/blocks/RoutingArticles.vue?vue&type=template&id=0e47e0be&scoped=true&
var render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('div',{staticClass:"tags"},_vm._l((_vm.links),function(link){return _c('nuxt-link',{key:link.slug,staticClass:"tag",attrs:{"to":_vm.localePath({ name: link.slug })}},[_vm._v("\n    "+_vm._s(link.name)+"\n  ")])}),1)}
var staticRenderFns = []


// CONCATENATED MODULE: ./components/blocks/RoutingArticles.vue?vue&type=template&id=0e47e0be&scoped=true&

// CONCATENATED MODULE: ./node_modules/babel-loader/lib??ref--2-0!./node_modules/vue-loader/lib??vue-loader-options!./components/blocks/RoutingArticles.vue?vue&type=script&lang=js&
//
//
//
//
//
//
//
//
//
//
//
//
//
/* harmony default export */ var RoutingArticlesvue_type_script_lang_js_ = ({
  components: {},

  data() {
    return {
      links: [{
        name: 'All Tags',
        slug: 'alltags'
      }, {
        name: 'Feature',
        slug: 'featured'
      }, {
        name: 'Nuxt',
        slug: 'nuxt'
      }]
    };
  }

});
// CONCATENATED MODULE: ./components/blocks/RoutingArticles.vue?vue&type=script&lang=js&
 /* harmony default export */ var blocks_RoutingArticlesvue_type_script_lang_js_ = (RoutingArticlesvue_type_script_lang_js_); 
// EXTERNAL MODULE: ./node_modules/vue-loader/lib/runtime/componentNormalizer.js
var componentNormalizer = __webpack_require__(4);

// CONCATENATED MODULE: ./components/blocks/RoutingArticles.vue



function injectStyles (context) {
  
  var style0 = __webpack_require__(61)
if (style0.__inject__) style0.__inject__(context)

}

/* normalize component */

var component = Object(componentNormalizer["a" /* default */])(
  blocks_RoutingArticlesvue_type_script_lang_js_,
  render,
  staticRenderFns,
  false,
  injectStyles,
  "0e47e0be",
  "3b3b5c00"
  
)

/* harmony default export */ var RoutingArticles = __webpack_exports__["a"] = (component.exports);

/***/ }),

/***/ 71:
/***/ (function(module, exports, __webpack_require__) {

// style-loader: Adds some css to the DOM by adding a <style> tag

// load the styles
var content = __webpack_require__(94);
if(typeof content === 'string') content = [[module.i, content, '']];
if(content.locals) module.exports = content.locals;
// add CSS to SSR context
var add = __webpack_require__(3).default
module.exports.__inject__ = function (context) {
  add("c40a987e", content, true, context)
};

/***/ }),

/***/ 72:
/***/ (function(module, exports, __webpack_require__) {

// style-loader: Adds some css to the DOM by adding a <style> tag

// load the styles
var content = __webpack_require__(96);
if(typeof content === 'string') content = [[module.i, content, '']];
if(content.locals) module.exports = content.locals;
// add CSS to SSR context
var add = __webpack_require__(3).default
module.exports.__inject__ = function (context) {
  add("61fd1634", content, true, context)
};

/***/ }),

/***/ 93:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_vue_style_loader_index_js_ref_7_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_7_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_7_oneOf_1_2_node_modules_sass_loader_dist_cjs_js_ref_7_oneOf_1_3_node_modules_sass_resources_loader_lib_loader_js_ref_7_oneOf_1_4_node_modules_vue_loader_lib_index_js_vue_loader_options_TagsOfArticles_vue_vue_type_style_index_0_id_ea23ea78_lang_scss_scoped_true___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(71);
/* harmony import */ var _node_modules_vue_style_loader_index_js_ref_7_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_7_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_7_oneOf_1_2_node_modules_sass_loader_dist_cjs_js_ref_7_oneOf_1_3_node_modules_sass_resources_loader_lib_loader_js_ref_7_oneOf_1_4_node_modules_vue_loader_lib_index_js_vue_loader_options_TagsOfArticles_vue_vue_type_style_index_0_id_ea23ea78_lang_scss_scoped_true___WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_vue_style_loader_index_js_ref_7_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_7_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_7_oneOf_1_2_node_modules_sass_loader_dist_cjs_js_ref_7_oneOf_1_3_node_modules_sass_resources_loader_lib_loader_js_ref_7_oneOf_1_4_node_modules_vue_loader_lib_index_js_vue_loader_options_TagsOfArticles_vue_vue_type_style_index_0_id_ea23ea78_lang_scss_scoped_true___WEBPACK_IMPORTED_MODULE_0__);
/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _node_modules_vue_style_loader_index_js_ref_7_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_7_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_7_oneOf_1_2_node_modules_sass_loader_dist_cjs_js_ref_7_oneOf_1_3_node_modules_sass_resources_loader_lib_loader_js_ref_7_oneOf_1_4_node_modules_vue_loader_lib_index_js_vue_loader_options_TagsOfArticles_vue_vue_type_style_index_0_id_ea23ea78_lang_scss_scoped_true___WEBPACK_IMPORTED_MODULE_0__) if(["default"].indexOf(__WEBPACK_IMPORT_KEY__) < 0) (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _node_modules_vue_style_loader_index_js_ref_7_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_7_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_7_oneOf_1_2_node_modules_sass_loader_dist_cjs_js_ref_7_oneOf_1_3_node_modules_sass_resources_loader_lib_loader_js_ref_7_oneOf_1_4_node_modules_vue_loader_lib_index_js_vue_loader_options_TagsOfArticles_vue_vue_type_style_index_0_id_ea23ea78_lang_scss_scoped_true___WEBPACK_IMPORTED_MODULE_0__[key]; }) }(__WEBPACK_IMPORT_KEY__));


/***/ }),

/***/ 94:
/***/ (function(module, exports, __webpack_require__) {

// Imports
var ___CSS_LOADER_API_IMPORT___ = __webpack_require__(2);
exports = ___CSS_LOADER_API_IMPORT___(false);
// Module
exports.push([module.i, ".tag[data-v-ea23ea78]{font-size:.875rem;font-weight:500;line-height:1;margin:.25rem;padding:.5rem;border-radius:.25rem;box-shadow:-4px -4px 8px #f8fafe,4px 4px 8px #ced2db}.tag[data-v-ea23ea78]:hover{color:#673ab7;background:linear-gradient(135deg,rgba(0,0,0,.09),hsla(0,0%,100%,0))}.tag.nuxt-link-exact-active[data-v-ea23ea78]{color:#673ab7}.tag.nuxt-link-exact-active[data-v-ea23ea78],.tag[data-v-ea23ea78]:active{background:transparent;box-shadow:inset -4px -4px 8px #f0f3f9,inset 4px 4px 8px #ced2db,inset -1px -1px 4px #8e8e8e}", ""]);
// Exports
module.exports = exports;


/***/ }),

/***/ 95:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_vue_style_loader_index_js_ref_7_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_7_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_7_oneOf_1_2_node_modules_sass_loader_dist_cjs_js_ref_7_oneOf_1_3_node_modules_sass_resources_loader_lib_loader_js_ref_7_oneOf_1_4_node_modules_vue_loader_lib_index_js_vue_loader_options_alltags_vue_vue_type_style_index_0_id_722f9fa9_lang_scss_scoped_true___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(72);
/* harmony import */ var _node_modules_vue_style_loader_index_js_ref_7_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_7_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_7_oneOf_1_2_node_modules_sass_loader_dist_cjs_js_ref_7_oneOf_1_3_node_modules_sass_resources_loader_lib_loader_js_ref_7_oneOf_1_4_node_modules_vue_loader_lib_index_js_vue_loader_options_alltags_vue_vue_type_style_index_0_id_722f9fa9_lang_scss_scoped_true___WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_vue_style_loader_index_js_ref_7_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_7_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_7_oneOf_1_2_node_modules_sass_loader_dist_cjs_js_ref_7_oneOf_1_3_node_modules_sass_resources_loader_lib_loader_js_ref_7_oneOf_1_4_node_modules_vue_loader_lib_index_js_vue_loader_options_alltags_vue_vue_type_style_index_0_id_722f9fa9_lang_scss_scoped_true___WEBPACK_IMPORTED_MODULE_0__);
/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _node_modules_vue_style_loader_index_js_ref_7_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_7_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_7_oneOf_1_2_node_modules_sass_loader_dist_cjs_js_ref_7_oneOf_1_3_node_modules_sass_resources_loader_lib_loader_js_ref_7_oneOf_1_4_node_modules_vue_loader_lib_index_js_vue_loader_options_alltags_vue_vue_type_style_index_0_id_722f9fa9_lang_scss_scoped_true___WEBPACK_IMPORTED_MODULE_0__) if(["default"].indexOf(__WEBPACK_IMPORT_KEY__) < 0) (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _node_modules_vue_style_loader_index_js_ref_7_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_7_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_7_oneOf_1_2_node_modules_sass_loader_dist_cjs_js_ref_7_oneOf_1_3_node_modules_sass_resources_loader_lib_loader_js_ref_7_oneOf_1_4_node_modules_vue_loader_lib_index_js_vue_loader_options_alltags_vue_vue_type_style_index_0_id_722f9fa9_lang_scss_scoped_true___WEBPACK_IMPORTED_MODULE_0__[key]; }) }(__WEBPACK_IMPORT_KEY__));


/***/ }),

/***/ 96:
/***/ (function(module, exports, __webpack_require__) {

// Imports
var ___CSS_LOADER_API_IMPORT___ = __webpack_require__(2);
exports = ___CSS_LOADER_API_IMPORT___(false);
// Module
exports.push([module.i, ".page-wrapper[data-v-722f9fa9]{max-width:1280px;margin:auto;padding:1rem;min-height:100vh}", ""]);
// Exports
module.exports = exports;


/***/ })

};;
//# sourceMappingURL=alltags.js.map