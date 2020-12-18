import Vue from 'vue'
import Router from 'vue-router'
import { interopDefault } from './utils'
import scrollBehavior from './router.scrollBehavior.js'

const _5d41bd37 = () => interopDefault(import('../pages/alltags.vue' /* webpackChunkName: "pages/alltags" */))
const _97ff521a = () => interopDefault(import('../pages/article.vue' /* webpackChunkName: "pages/article" */))
const _79a0ba0f = () => interopDefault(import('../pages/index.vue' /* webpackChunkName: "pages/index" */))
const _2e75da01 = () => interopDefault(import('../pages/featured.vue' /* webpackChunkName: "pages/featured" */))
const _bf1cc054 = () => interopDefault(import('../pages/nuxt.vue' /* webpackChunkName: "pages/nuxt" */))
const _aabc87ae = () => interopDefault(import('../pages/t/_tag.vue' /* webpackChunkName: "pages/t/_tag" */))
const _1d7a3075 = () => interopDefault(import('../pages/_username/index.vue' /* webpackChunkName: "pages/_username/index" */))
const _4935a4e4 = () => interopDefault(import('../pages/_username/_article.vue' /* webpackChunkName: "pages/_username/_article" */))

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
    component: _5d41bd37,
    name: "alltags___en"
  }, {
    path: "/article",
    component: _97ff521a,
    name: "article___en"
  }, {
    path: "/es",
    component: _79a0ba0f,
    name: "index___es"
  }, {
    path: "/featured",
    component: _2e75da01,
    name: "featured___en"
  }, {
    path: "/nuxt",
    component: _bf1cc054,
    name: "nuxt___en"
  }, {
    path: "/es/alltags",
    component: _5d41bd37,
    name: "alltags___es"
  }, {
    path: "/es/article",
    component: _97ff521a,
    name: "article___es"
  }, {
    path: "/es/featured",
    component: _2e75da01,
    name: "featured___es"
  }, {
    path: "/es/nuxt",
    component: _bf1cc054,
    name: "nuxt___es"
  }, {
    path: "/es/t/:tag?",
    component: _aabc87ae,
    name: "t-tag___es"
  }, {
    path: "/es/:username",
    component: _1d7a3075,
    name: "username___es"
  }, {
    path: "/t/:tag?",
    component: _aabc87ae,
    name: "t-tag___en"
  }, {
    path: "/es/:username/:article",
    component: _4935a4e4,
    name: "username-article___es"
  }, {
    path: "/",
    component: _79a0ba0f,
    name: "index___en"
  }, {
    path: "/:username",
    component: _1d7a3075,
    name: "username___en"
  }, {
    path: "/:username/:article",
    component: _4935a4e4,
    name: "username-article___en"
  }],

  fallback: false
}

export function createRouter () {
  return new Router(routerOptions)
}
