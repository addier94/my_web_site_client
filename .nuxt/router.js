import Vue from 'vue'
import Router from 'vue-router'
import { interopDefault } from './utils'
import scrollBehavior from './router.scrollBehavior.js'

const _7ea8bec1 = () => interopDefault(import('../pages/alltags.vue' /* webpackChunkName: "pages/alltags" */))
const _55314f06 = () => interopDefault(import('../pages/article.vue' /* webpackChunkName: "pages/article" */))
const _3f0e9619 = () => interopDefault(import('../pages/index.vue' /* webpackChunkName: "pages/index" */))
const _39ef09b7 = () => interopDefault(import('../pages/featured.vue' /* webpackChunkName: "pages/featured" */))
const _33331a8c = () => interopDefault(import('../pages/nuxt.vue' /* webpackChunkName: "pages/nuxt" */))
const _da213d42 = () => interopDefault(import('../pages/t/_tag.vue' /* webpackChunkName: "pages/t/_tag" */))
const _193407ff = () => interopDefault(import('../pages/_username/index.vue' /* webpackChunkName: "pages/_username/index" */))
const _2e51adcc = () => interopDefault(import('../pages/_username/_article.vue' /* webpackChunkName: "pages/_username/_article" */))

// TODO: remove in Nuxt 3
const emptyFn = () => {}
const originalPush = Router.prototype.push
Router.prototype.push = function push (location, onComplete = emptyFn, onAbort) {
  return originalPush.call(this, location, onComplete, onAbort)
}

Vue.use(Router)

export const routerOptions = {
  mode: 'history',
  base: decodeURI('/'),
  linkActiveClass: 'nuxt-link-active',
  linkExactActiveClass: 'nuxt-link-exact-active',
  scrollBehavior,

  routes: [{
    path: "/alltags",
    component: _7ea8bec1,
    name: "alltags___en"
  }, {
    path: "/article",
    component: _55314f06,
    name: "article___en"
  }, {
    path: "/es",
    component: _3f0e9619,
    name: "index___es"
  }, {
    path: "/featured",
    component: _39ef09b7,
    name: "featured___en"
  }, {
    path: "/nuxt",
    component: _33331a8c,
    name: "nuxt___en"
  }, {
    path: "/es/alltags",
    component: _7ea8bec1,
    name: "alltags___es"
  }, {
    path: "/es/article",
    component: _55314f06,
    name: "article___es"
  }, {
    path: "/es/featured",
    component: _39ef09b7,
    name: "featured___es"
  }, {
    path: "/es/nuxt",
    component: _33331a8c,
    name: "nuxt___es"
  }, {
    path: "/es/t/:tag?",
    component: _da213d42,
    name: "t-tag___es"
  }, {
    path: "/es/:username",
    component: _193407ff,
    name: "username___es"
  }, {
    path: "/t/:tag?",
    component: _da213d42,
    name: "t-tag___en"
  }, {
    path: "/es/:username/:article",
    component: _2e51adcc,
    name: "username-article___es"
  }, {
    path: "/",
    component: _3f0e9619,
    name: "index___en"
  }, {
    path: "/:username",
    component: _193407ff,
    name: "username___en"
  }, {
    path: "/:username/:article",
    component: _2e51adcc,
    name: "username-article___en"
  }],

  fallback: false
}

export function createRouter () {
  return new Router(routerOptions)
}
