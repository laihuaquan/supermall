/*
 * @Author: your name
 * @Date: 2021-04-29 21:31:43
 * @LastEditTime: 2021-05-15 21:23:05
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: \VueCli\supermall\src\router\index.js
 */
import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from 'views/home/Home.vue'

Vue.use(VueRouter)

const Category = () => import("views/category/Category")
const Cart = () => import("views/cart/Cart")
const Profile = () => import("views/profile/Profile")
const Detail = () => import("views/detail/Detail")

const routes = [
  {
    path: '/',
    redirect: "/home"
  },
  {
    path: '/home',
    name: 'Home',
    component: Home,
    meta: { title: "首页" }
  },
  {
    path: '/cart',
    name: "Cart",
    component: Cart,
    meta: { title: "购物车" }
  },
  {
    path: '/category',
    name: "Category",
    component: Category,
    meta: { title: "分类" }
  },
  {
    path: '/profile',
    name: "Profile",
    component: Profile,
    meta: { title: "我的..." }
  },
  {
    path: '/detail/:iid',  //使用动态路由来传递参数
    name: "Detail",
    component: Detail,
    meta: { title: "详情" }
  },
]


const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

//处理标题
router.beforeEach((to, from, next) => {
  document.title = to.meta.title;
  next();//调这一步，使过程得以继续
});


export default router
