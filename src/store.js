import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
      num:3
  },
  mutations: {
      add(state){
        state.num++
      },
      cub(state){
        state.num--
      }
  },
  actions: {

  }
})
