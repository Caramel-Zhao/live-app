export default{
  state: {
    slideIndex:0,
  },
  mutations: {
    'MYSLIDE': (state, i) => {
      state.slideIndex = i;
      // console.log(state.slideIndex);
    }
  },
  actions: {
    'GETSLIDEINDEX': async ({ commit },i) => {
      // console.log(i);
      commit('MYSLIDE', i)
    },
  },
  getters: {
    'GETSLIDE': ({ slideIndex }) => {
      return slideIndex
    }
  }
}
