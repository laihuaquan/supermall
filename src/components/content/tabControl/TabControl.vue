<!--
 * @Author: your name
 * @Date: 2021-05-03 21:25:01
 * @LastEditTime: 2021-05-07 23:28:51
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: \VueCli\supermall\src\components\content\tabControl\TabControl.vue
-->
<template>
  <div class="tabcontrol">
    <!-- 通过动态类来决定是否是当前，采用对象语法，当对象值为true时，该类有效 -->
    <div
      v-for="(item, index) in titles"
      :key="index"
      class="tabitem"
      :class="{ active: index == currentIndex }"
      @click="itemClicked(index)"
    >
      <span>{{ item }}</span>
    </div>
  </div>
</template>

<script>
export default {
  name: "TabControl.vue",
  data() {
    return { currentIndex: 0 };
  },
  props: {
    titles: {
      type: Array,
      default() {
        return [];
      },
    },
  },
  methods: {
    itemClicked(index) {
      this.currentIndex = index;
      this.$emit("tabClicked", index);
    },
  },
};
</script>

<style>
.tabcontrol {
  display: flex;
  text-align: center;
}
.tabitem {
  flex: 1;
  height: 40px;
  line-height: 40px;
  font-size: 14px;
  background-color: #fff;
}
.tabitem span {
  padding: 5px;
}
.active {
  /* color: red; 可以这样定义，但最好使用全局变量*/
  color: var(--color-high-text);
}
/* 直接给span较好，不然太长，看着难受 */
.active span {
  /* border-bottom: red 2px solid; */
  border-bottom: 2px solid var(--color-high-text);
}
</style>