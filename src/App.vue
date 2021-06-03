<!--
 * @Author: your name
 * @Date: 2021-04-29 21:31:43
 * @LastEditTime: 2021-05-15 23:36:44
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: \VueCli\supermall\src\App.vue
-->
<template>
  <div id="app">
    <keep-alive exclude="Detail">
      <router-view></router-view>
    </keep-alive>
    <MainTabBar> </MainTabBar>
  </div>
</template>

<script>
import MainTabBar from "content/mainTabbar/MainTabBar";

export default {
  name: "app",
  components: { MainTabBar },
};
</script>

<style>
/* assets已经在别名中配置 vue.config.js */
@import "assets/css/base.css";
#app {
  position: relative;
}
</style>
