/*
 * @Author: your name
 * @Date: 2021-04-29 21:31:43
 * @LastEditTime: 2021-05-28 21:20:02
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: \VueCli\supermall\src\store\index.js
 */
import Vue from 'vue'
import Vuex from 'vuex'
import mutations from './mutations'
import actions from './actions'
import getters from './getters'

Vue.use(Vuex)

const state = {
  cartList: [],  //购物车
}

export default new Vuex.Store({
  state,      //共享变量
  mutations,  //跟踪变量
  actions,    //一般异步中使用 
  getters,    //计算属性
})
