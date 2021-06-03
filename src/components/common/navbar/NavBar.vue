<!--
 * @Author: your name
 * @Date: 2021-05-02 21:09:51
 * @LastEditTime: 2021-05-16 21:52:24
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: \VueCli\supermall\src\components\common\navbar\NavBar.vue
 //注意顶部标题，应该是fixed布局，使不被其他覆盖。
-->
<template>
  <div class="nav-bar">
    <div class="left"><slot name="left"></slot></div>
    <div class="center"><slot name="center"></slot></div>
    <div class="right"><slot name="right"></slot></div>
  </div>
</template>

<script>
export default {};
</script>

<style scoped>
.nav-bar {
  display: flex;
  height: 44px;
  line-height: 44px;
  text-align: center;
  box-shadow: 0 1px 1px rgb(100, 100, 100, 0.1);
  font-size: 20px;
  position: fixed;
  left: 0;
  top: 0;
  right: 0;
  z-index: 1;
}
.left,
.right {
  width: 60px;
}
.center {
  flex: 1;
}
</style>