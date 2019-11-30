import Vue from 'vue'
import Vuex from 'vuex'
import user from "../apis/User/user"
import home from "./home"

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    data: [],
    vip: ""
  },
  mutations: {
    'INIT': (state, a) => {
      state.data = a;
    },
    'VIPMU': (state, a) => {
      state.vip = a.toString();
      console.log(state.vip);
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
    },
    'GETVIP': ({ vip }) => {
      return vip
    }
  },
  modules: {
    home
  }
})
