<!--
 * @Author: your name
 * @Date: 2021-04-11 20:52:07
 * @LastEditTime: 2021-04-12 22:15:31
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: \VueCli\tabbar\src\components\tab\TabBar.vue
-->
<template>
  <div class="tabbar">
    <slot></slot>
  </div>
</template>

<script>
export default {
  name: "TabBar",
};
</script>

<style>
.tabbar {
  position: fixed;
  left: 0;
  right: 0;
  bottom: 0;
  background-color: #f6f6f6;
  box-shadow: 0 -1px 5px rgb(100, 100, 100, 0.2);
  display: flex;
}
</style>