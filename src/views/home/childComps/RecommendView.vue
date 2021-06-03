<!--
今日推荐
 * @Author: your name
 * @Date: 2021-05-03 20:13:29
 * @LastEditTime: 2021-05-03 20:36:43
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: \VueCli\supermall\src\views\home\childComps\RecommendView.vue
-->
<template>
  <div class="recommend">
    <div v-for="item in recommends" :key="item.link" class="item">
      <a :href="item.link">
        <img :src="item.image" alt="" />
        <div>{{ item.title }}</div>
      </a>
    </div>
  </div>
</template>

<script>
export default {
  name: "RecommendView",
  props: {
    recommends: {
      type: Array,
      default() {
        return [];
      },
    },
  },
};
</script>
<style scoped>
.recommend {
  display: flex;
  width: 100%;
  text-align: center;
  font-size: 12px;
  padding: 10px 0 20px;
  border-bottom: 10px solid #eee;
}
.item {
  flex: 1;
}
.item img {
  width: 65px;
  height: 65px;
  margin-bottom: 10px;
}
</style>