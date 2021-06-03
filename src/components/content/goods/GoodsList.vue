<!--
 * @Author: your name
 * @Date: 2021-05-07 21:48:08
 * @LastEditTime: 2021-05-07 22:49:39
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: \VueCli\supermall\src\components\content\goods\GoodList.vue
-->
<template>
  <div class="goods">
    <goods-list-item
      v-for="(item, index) in goods"
      :key="index"
      :item="item"
    ></goods-list-item>
  </div>
</template>

<script>
import goodsListItem from "./GoodsListItem";
export default {
  name: "GoodsList",
  components: { goodsListItem },
  props: {
    goods: {
      type: Array,
      default() {
        return [];
      },
    },
  },
};
</script>

<style>
.goods {
  display: flex;
  width: 100%;
  flex-wrap: wrap;
}
</style>