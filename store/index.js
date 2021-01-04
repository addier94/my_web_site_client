import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export const state = () => ({
  currentArticle: null,
  spinner: false
})

export const mutations = {
  SET_CURRENT_ARTICLE(state, article) {
    state.currentArticle = article
  },
  setItems(state, { resource, items }) {
    state[resource].items = items
  },
  setSpinner(state, value) {
    state.spinner = value
  }
}

export const actions = {
  async nuxtServerInit({ commit, dispatch }) {
  }
}