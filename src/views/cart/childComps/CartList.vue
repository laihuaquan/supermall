<!--
 * @Author: your name
 * @Date: 2021-05-28 20:41:17
 * @LastEditTime: 2021-05-30 20:38:55
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: \VueCli\supermall\src\views\cart\childComps\CartList.vue
-->
<template>
  <div>
    <scroll class="cart-content" ref="cartRef">
      <cart-list-item
        v-for="item in cartList"
        :key="item.iid"
        :item-info="item"
      ></cart-list-item>
    </scroll>
  </div>
</template>

<script>
import Scroll from "common/scroll/Scroll";
import cartListItem from "./CartListItem";
// import { mapGetters } from "vuex";

export default {
  name: "CartList",
  components: {
    Scroll,
    cartListItem,
  },
  props: {
    cartList: {
      type: Array,
      default() {
        return [];
      },
    },
  },
  activated() {
    this.$refs.cartRef.refresh(); //强制刷新
  },
};
</script>

<style scoped>
.cart-content {
  height: calc(100% - 40px);
  overflow: hidden;
}
</style>
