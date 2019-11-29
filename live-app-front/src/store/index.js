import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    data: [],
    vip:""
  },
  mutations: {
    'INIT': (state, a) => {
        state.data = a;
    },
    'VIPMU':(state, a) => {
      state.vip = a.toString();
      console.log(state.vip);
    }
  },
  actions: {
    'INITDATA': async ({ commit }) => {
      let a = await require("../mocks/User");
        commit('INIT', a)
      },
    'VIP':({ commit },a) => {
      commit('VIPMU', a+1)
    }
  },
  getters: {
    'GETDATA': ({ data }) => {
      return data
    },
    'GETVIP': ({ vip }) => {
      return vip
    }
  }
})
