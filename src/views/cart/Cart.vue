<!--
 * @Author: your name
 * @Date: 2021-04-12 19:29:02
 * @LastEditTime: 2021-05-28 23:09:11
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: \VueCli\tabbar\src\views\cart\cart.vue
-->
<template>
  <div id="cart">
    <!-- 导航栏 -->
    <nav-bar class="nav-bar">
      <div slot="center">购物车( {{ cartNum }})</div>
    </nav-bar>
    <!-- 商品列表 -->
    <cart-list :cartList="mycartList" class="cart-list" />
    <bottomBar />
  </div>
</template>

<script>
import navBar from "common/navbar/NavBar";
import cartList from "./childComps/CartList";
import bottomBar from "./childComps/BottomBar";
// import mapGetters from "vuex";

export default {
  name: "Cart",
  components: { navBar, cartList, bottomBar },
  computed: {
    mycartList() {
      return this.$store.getters.cartList;
    },
    cartNum() {
      return this.$store.getters.cartNum;
    },
    // ...mapGetters(["cartNum", "cartList"]), //？ 不正常
    //...mapGetters({ cartNumber: "cartNum", cartLists: "cartList" }), //？不成功 //如果名称与Getters中定义的不符
  },
  data() {
    return { cartList: [] };
  },
  create() {},
};
</script>

<style>
#cart {
  height: 100vh;
}

.nav-bar {
  background-color: var(--color-tint);
  font-weight: 700;
  color: #fff;
}
.cart-list {
  position: absolute;
  top: 44px;
  bottom: 49px;
  width: 100%;
}
</style>