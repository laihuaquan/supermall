<!--
 * @Author: your name
 * @Date: 2021-05-01 19:57:25
 * @LastEditTime: 2021-05-01 22:23:27
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: \VueCli\supermall\src\components\content\mainTabbar\MainTabBar.vue
-->
<template>
  <tabbar>
    <tabbaritem link="/home">
      <img slot="icon" src="~assets/img/tabbar/home.svg" alt="" />
      <img slot="active-icon" src="~assets/img/tabbar/home_active.svg" alt="" />
      <div slot="text">首页</div>
    </tabbaritem>
    <tabbaritem link="/category">
      <img slot="icon" src="~assets/img/tabbar/category.svg" alt="" />
      <img
        slot="active-icon"
        src="~assets/img/tabbar/category_active.svg"
        alt=""
      />
      <div slot="text">分类</div>
    </tabbaritem>
    <tabbaritem link="/cart">
      <img slot="icon" src="~assets/img/tabbar/cart.svg" alt="" />
      <img slot="active-icon" src="~assets/img/tabbar/cart_active.svg" alt="" />
      <div slot="text">购物车</div>
    </tabbaritem>
    <tabbaritem link="/profile">
      <img slot="icon" src="~assets/img/tabbar/profile.svg" alt="" />
      <img
        slot="active-icon"
        src="~assets/img/tabbar/profile_active.svg"
        alt=""
      />
      <div slot="text">我的</div>
    </tabbaritem>
  </tabbar>
</template>

<script>
import tabbar from "common/tabbar/TabBar";
import tabbaritem from "common/tabbar/TabBarItem";

export default {
  name: "MainTabBar",
  components: {
    tabbar,
    tabbaritem,
  },
};
</script>

<style scoped>
</style>
