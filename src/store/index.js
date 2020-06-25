import Vue from 'vue'
import Vuex from 'vuex'
import state from './state.js'
import mutations from './mutations.js'

// vuex是一个插件，Vue使用插件都是用.use
Vue.use(Vuex)

// 导出仓库store
export default new Vuex.Store({
  state: state,
  // actions: {
  //   changeCityAction (ctx, city) { // 第一个参数ctx是上下文
  //     ctx.commit('changeCityMutation', city) // 通过commit()调用Mutation
  //     // console.log(city)
  //   }
  // },
  mutations: mutations,
  getters: {
    doubleCity (state) {
      return state.city + ' ' + state.city
    }
  }
})
