/*
 * @Author: your name
 * @Date: 2021-06-01 19:16:28
 * @LastEditTime: 2021-06-01 20:36:19
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: \VueCli\supermall\src\components\common\toast\index.js
 */
import toast from './Toast'

const obj = {}
//在main.js中use时，会触发安装
obj.install = function (Vue) {
    // console.log("toast is installed . ")
    const toastContructor = Vue.extend(toast)           //创建一个构造器(Vue扩展一个组件)
    const toastObj = new toastContructor();             //创建构建器实例对象（通过构造器，生成一个子组件）
    toastObj.$mount(document.createElement("div"))      //将对象挂载到一个新创建的div上（新增DIV,用它来挂载子组件
    document.body.appendChild(toastObj.$el)             //将toast的元素添加到body上
    Vue.prototype.$toast = toastObj;                    //新组件对象，挂载到Vue原型上
}

export default obj