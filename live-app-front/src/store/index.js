import Vue from 'vue'
import Vuex from 'vuex'
import user from "../apis/User/user"
import home from "./home";
import token from "./token";

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
    },
    'GETNAME': (state, a) => {
      // console.log(state.data.data.userid)
      // console.log(a)
      state.data.data.username = a
    },
    'GETAUTOGRAPH': (state, a) => {
      // console.log(state.data.data.userid)
      // console.log(a)
      state.data.data.autograph = a
    }
  },
  actions: {
    'INITDATA': async ({ commit }, id) => {
      // console.log(id);
      let a = await user.getUserdata(id);
      // let a = await require("../mocks/User.json")
      // console.log(a);
      commit('INIT', a)
    },
    'VIP': async ({ commit }, a) => {
      commit('VIPMU', a)
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
    home,
    token
  }
})
