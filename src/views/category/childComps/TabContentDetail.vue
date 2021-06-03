<!--
 * @Author: your name
 * @Date: 2021-06-01 20:45:45
 * @LastEditTime: 2021-06-01 22:00:49
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: \VueCli\supermall\src\views\category\childComps\TabContentDetail.vue
-->
<template>
  <grid-view>
    <goods-list-item
      v-for="(item, index) in categoryDetail"
      :key="index"
      :goods="item"
    ></goods-list-item>
  </grid-view>
</template>

<script>
import GridView from "common/gridView/GridView";
import GoodsListItem from "views/home/childComps/GoodsListItem";
// import GoodsListItem from "components/content/goods/GoodsListItem";

export default {
  name: "TabContentDetail",
  components: {
    GridView,
    GoodsListItem,
  },
  props: {
    categoryDetail: {
      type: Array,
      default() {
        return [];
      },
    },
  },
};
</script>

<style scoped>
</style>
