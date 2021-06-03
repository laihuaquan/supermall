<!--
 * @Author: your name
 * @Date: 2021-05-21 19:26:59
 * @LastEditTime: 2021-05-22 20:47:26
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: \VueCli\supermall\src\views\detail\childComps\DetailRecommendInfo.vue
-->
<template>
  <div class="recommend-info">
    <div class="info-header">热门推荐</div>
    <grid-view>
      <goods-list-item
        v-for="(item, index) in recommendList"
        :key="index"
        :item="item"
      ></goods-list-item>
    </grid-view>
  </div>
</template>

<script>
import GridView from "common/gridView/GridView";
import GoodsListItem from "content/goods/GoodsListItem";

export default {
  name: "DetailRecommendInfo",
  components: {
    GridView,
    GoodsListItem,
  },
  props: {
    recommendList: {
      type: Array,
      default() {
        return [];
      },
    },
  },
};
</script>

<style scoped>
.recommend-info {
  padding: 5px;
}

.info-header {
  line-height: 40px;
  padding-left: 8px;
  font-size: 15px;
  color: #333;
}
</style>
