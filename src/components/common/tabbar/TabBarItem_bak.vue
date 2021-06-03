<!--
 * @Author: your name
 * @Date: 2021-04-11 21:17:28
 * @LastEditTime: 2021-05-21 19:54:42
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: \VueCli\tabbar\src\components\TabBarItem.vue
-->
<template>
  <div class="tabitem" @click="itemClicked">
    <div v-show="!isActived"><slot name="icon"></slot></div>
    <div v-show="isActived"><slot name="active-icon"></slot></div>
    <!-- <div :style="{ color:activeStyle }"> -->
    <slot name="text"></slot>
    <!-- </div> -->
  </div>
</template>

<script>
export default {
  name: "TabBarItem",
  props: { link: String, activeColor: { type: String, default: "red" } },
  computed: {
    isActived() {
      return this.$route.path == this.link;
    },
    activeStyle() {
      return this.isActived ? { color: this.activeColor } : {};
    },
  },
  methods: {
    itemClicked() {
      if (this.$route.path !== this.link) this.$router.replace(this.link);
    },
    // this.$router.replace(this.link).catch(() => {console.log("忽略了1次异常");});
  },
};
</script>

<style>
.tabitem {
  flex: 1;
  text-align: center;
  height: 49px;
}
.tabitem img {
  width: 24px;
  height: 24px;
}
</style>