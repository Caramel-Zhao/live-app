import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    data: [],
  },
  mutations: {
    'INIT': (state, a) => {
        state.data = a;
        console.log(state.data);
        
    }
  },
  actions: {
    'INITDATA': async ({ commit }) => {
      let a = await require("../mocks/User");
      console.log(a);
            commit('INIT', a)
       },
  },
  getters: {
    'GETDATA': ({ data }) => {
      return data
    }
  }
})
