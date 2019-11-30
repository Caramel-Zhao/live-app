export default{
  state: {
    slideIndex:0,
  },
  mutations: {
    'MY_SLIDE': (state, i) => {
      state.slideIndex = i;
      // console.log(state.slideIndex);
    }
  },
  actions: {
    'GET_SLIDE_INDEX': async ({ commit },i) => {
      // console.log(i);
      commit('MY_SLIDE', i)
    },
  },
  getters: {
    'GET_SLIDE': ({ slideIndex }) => {
      return slideIndex
    }
  }
}
