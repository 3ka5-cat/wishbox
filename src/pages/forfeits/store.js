import axios from 'axios'
import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

const forfeitsUrl = 'https://hello.wishbox.space/api/forfeits'
// const forfeitsUrl = 'http://wish.localhost:5000/api/forfeits'

export default new Vuex.Store({
  state: {
    loading: false,
    isPlaying: false,
    forfeit: { text: 'Слоны', id: null},
    error: null,
    userId: 'anon',
  },
  mutations: {
    SET_USER_ID(state, id) {
      state.userId = id
    },
    START_TO_PLAY(state) {
      state.isPlaying = true
    },
    SET_FORFEIT(state, forfeit) {
      state.forfeit = forfeit
    },
    SET_ERROR(state, error) {
      state.error = error
    },
    SET_LOADING(state, loading) {
      state.loading = loading
    },
  },
  actions: {
    SET_USER_ID({ commit }, { id }) {
      commit('SET_USER_ID', id)
    },
    START_TO_PLAY({ commit }) {
      commit('START_TO_PLAY')
    },
    SET_FORFEIT({ commit, state }) {
      commit('SET_LOADING', true)
      axios
        .get(forfeitsUrl, {
          params: {
            external_user_id: state.userId,
          }
        })
        .then((response) => {
          commit('SET_FORFEIT', response.data.data)
          commit('SET_ERROR', null)
        })
        .catch((error) => {
          commit('SET_ERROR', error)
        })
        .finally(() => {
          commit('SET_LOADING', false)
        });

    },
    SEND_FEEDBACK({ commit, state }, payload) {
      axios
        .put(`${forfeitsUrl}/${payload.id}`, {
          feedback: payload.feedback,
          external_user_id: state.userId,
        })
        .catch((error) => {
          commit('SET_ERROR', error)
        })
    },
  }
})
