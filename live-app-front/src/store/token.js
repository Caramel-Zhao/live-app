export default{
  state: {
    token:null,
  },
  mutations: {
    'MYTOKEN': (state, i) => {
      state.token = i;
      console.log(state.token);
    }
  },
  actions: {
    'SENDTOKEN': async ({ commit },i) => {
      // console.log(i);
      commit('MYTOKEN', i)
    },
  },
  getters: {
    'GETTOKEN': ({ token }) => {
      return token
    }
  }
}