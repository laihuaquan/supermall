<!--
 * @Author: your name
 * @Date: 2021-05-10 21:50:57
 * @LastEditTime: 2021-05-10 22:16:59
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: \VueCli\supermall\src\components\content\backTop\BackTop.vue
 //点击事件直接在父组件上实现，不需要内部实现并发射信号出去。
-->
<template>
  <div class="back-top">
    <img src="~assets/img/common/top.png" alt="" />
  </div>
</template>

<script>
export default {
  name: "BackTop",
  methods: {},
};
</script>

<style scoped>
.back-top {
  position: fixed;
  right: 10px;
  bottom: 50px;
}
.back-top img {
  width: 53px;
}
</style>