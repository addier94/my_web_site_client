export const state = () => ({
  user: null
})

export const getters = {
  authUser(state) {
    return state.user || null
  },
  isAuthenticated(state) {
    return !!state.user
  },
  isAdmin(state) {
    return state.user &&
      state.user.role &&
      state.user.role === 'admin'
  }
}

export const actions = {
  login({ commit, state }, loginData) {
    return this.$axios.$post('/api/v1/auth/login', loginData)
      .then(user => {
        commit('setAuthUser', user)
        localStorage.setItem('token', `Bearer ${user.token}`)
        return state.user
      })
      .catch(error => Promise.reject(error))
  },
  register(_, registerData) {
    return this.$axios.$post('/api/v1/auth/register', registerData)
      .then((response) => {
        localStorage.setItem('token', `Bearer ${response.token}`)
      })
      .catch(error => {
        let errorMessage = 'Ooops, error inesperado intenta registrarte de nuevo'
        if (error.response.data.error) {
          errorMessage = error.response.data.error
        }
        return Promise.reject(errorMessage)
      })
  },
  forgotpassword(_, email) {
    return this.$axios.$post('/api/v1/auth/forgotpassword', { email })
      .catch(error => {
        let errorMessage = 'The email was not found'
        if (error.response.data.error) {
          errorMessage = error.response.data.error
        }
        return Promise.reject(errorMessage)
      })
  },
  getAuthUser({ commit, getters, state }, token) {
    const authUser = getters.authUser;
    if (authUser && authUser.hasOwnProperty('email')) { return Promise.resolve(authUser) }
    return this.$axios.$get('/api/v1/auth/me', token)
      .then((user) => {
        commit('setAuthUser', user.data)
        return state.user
      })
      .catch((error) => {
        commit('setAuthUser', null)
        return Promise.reject(error)
      })
  },
  updateNameEmailOfUser({ commit, state }, token) {
    const { name, email } = state.user
    return this.$axios.$put('/api/v1/auth/updatedetails', { name, email }, token)
      .then((user) => {
        commit('setAuthUser', user.data)
        return state.user
      }).catch((error) => {
        let errorMessage = 'Was error in updating'
        if (error.response.data.error) {
          errorMessage = error.response.data.error
        }
        return Promise.reject(errorMessage)
      })
  },
  logout({ commit }) {
    return this.$axios.$get('/api/v1/auth/logout')
      .then(() => {
        commit('setAuthUser', null)
        localStorage.removeItem('token')
        return true
      })
      .catch(error => Promise.reject(error))
  },
}

export const mutations = {
  setAuthUser(state, user) {
    return state.user = user
  },
  // setItems(state, { resource, items })
  setChangeUser(state, { resource, item }) {
    return state.user[resource] = item
  }
}
