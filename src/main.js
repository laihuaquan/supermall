/*
 * @Author: your name
 * @Date: 2021-04-29 21:31:43
 * @LastEditTime: 2021-06-01 21:51:26
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: \VueCli\supermall\src\main.js
 */
import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import toast from 'components/common/toast'
import fastClick from 'fastclick'
import VueLazyload from 'vue-lazyload'

Vue.config.productionTip = false
Vue.use(VueLazyload)  //图片懒加载时使用
Vue.use(toast); //会触发  common/toast/index.js 中的 install
fastClick.attach(document.body); //解决移动端300ms的问题

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
