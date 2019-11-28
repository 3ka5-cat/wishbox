import axios from 'axios'
import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

const wishesUrl = 'https://hello.wishbox.space/api/wishes';

export default new Vuex.Store({
  state: {
    loading: false,
    error: null,
    userId: 'anon',
    wishCount: 832,
    wishText: '',
    wishFormInFocus: false,
    wishSent: false,
  },
  mutations: {
    SET_USER_ID(state, id) {
      state.userId = id
    },
    SET_ERROR(state, error) {
      state.error = error
    },
    SET_LOADING(state, loading) {
      state.loading = loading
    },
    SET_WISH_COUNTER(state, count) {
      state.wishCount = count
    },
    SET_WISH_TEXT(state, text) {
      state.wishText = text
    },
    SET_WISH_FORM_FOCUS(state, inFocus) {
      state.wishFormInFocus = inFocus
    },
    SET_WISH_SENT(state, isSent) {
      state.wishSent = isSent
    }
  },
  actions: {
    SET_USER_ID({ commit }, { id }) {
      commit('SET_USER_ID', id);
    },
    SET_WISH_COUNTER({ commit }) {
      commit('SET_LOADING', true);
      axios
        .get(wishesUrl)
        .then((response) => {
          commit('SET_WISH_COUNTER', response.data.data);
          commit('SET_ERROR', null);
        })
        .catch((error) => {
          commit('SET_ERROR', error);
        })
        .finally(() => {
          commit('SET_LOADING', false);
        });
    },
    SET_WISH_TEXT({ commit }, { text }) {
      commit('SET_WISH_TEXT', text )
    },
    SET_WISH_FORM_FOCUS({ commit }, { inFocus }) {
      commit('SET_WISH_FORM_FOCUS', inFocus )
    },
    SET_WISH_SENT({ commit }, { isSent }) {
      commit('SET_WISH_SENT', isSent )
    }
  }
})
