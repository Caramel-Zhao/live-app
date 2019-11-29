import Vue from 'vue'
import Vuex from 'vuex'
import user from "../apis/user/user"

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
    'INITDATA': async ({ commit }, id) => {
      // console.log(id);
      
      let a = await user.getUserdata(id)
      // let a = await require("../mocks/User.json")
      console.log(a);
      commit('INIT', a)
    }
  },
  getters: {
    'GETDATA': ({ data }) => {
      return data
    }
  }
})
