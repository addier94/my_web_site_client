import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export const state = () => ({
  currentArticle: null,
  spinner: {
    spinner: false,
    spinnerFor: ''
  }
})

export const mutations = {
  SET_CURRENT_ARTICLE(state, article) {
    state.currentArticle = article
  },
  setItems(state, { resource, items }) {
    state[resource].items = items
  },
  setSpinner(state, payload) {
    state.spinner.spinner = payload.value
    state.spinner.spinnerFor = payload.spinnerFor
  }
}

export const actions = {
  async nuxtServerInit({ commit, dispatch }) {
  }
}