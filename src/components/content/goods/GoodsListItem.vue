<!--
 * @Author: your name
 * @Date: 2021-05-07 21:50:02
 * @LastEditTime: 2021-06-01 22:00:07
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: \VueCli\supermall\src\components\content\goods\GoodsListItem.vue
-->
<template>
  <div class="goodsitem" @click="goodsClicked">
    <!-- <img :src="getImg" :key="getImg" alt="" /> -->
    <img v-lazy="getImg" :key="getImg" alt="" />
    <div class="goods-info">
      <p>{{ item.title }}</p>
      <span class="price">{{ item.price }}</span>
      <span class="orgPrice">>{{ item.orgPrice }}</span>
    </div>
  </div>
</template>

<script>
export default {
  name: "GoodsListItem",
  props: {
    item: {
      type: Object,
      default() {
        return {};
      },
    },
  },

  methods: {
    goodsClicked() {
      //this.$bus.$emit("imgClicked!") //也可以通过总线发送非父子关系元素之间的数据传递。
      this.$router.push("/detail/" + this.item.iid);
    },
  },
  computed: {
    getImg() {
      return this.item.image || this.item.show.img || this.item.img;
    },
  },
};
</script>

<style>
.goodsitem {
  position: relative;
  padding: 5px;
  padding-bottom: 40px;
  width: 50%;
}
.goodsitem img {
  border-radius: 5px;
  width: 100%;
}

.goods-info {
  font-size: 12px;
  position: absolute;
  bottom: 5px;
  left: 0;
  right: 0;
  overflow: hidden;
  text-align: center;
}

.goods-info p {
  overflow: hidden;
  text-overflow: ellipsis;
  white-space: nowrap;
  margin-bottom: 3px;
}

.goods-info .price {
  color: var(--color-high-text);
  margin-right: 20px;
}

.goods-info .orgPrice {
  position: relative;
}

.goods-info .orgPrice::before {
  content: "";
  position: absolute;
  left: -15px;
  top: 0;
  width: 14px;
  height: 14px;
  background: url("~assets/img/common/collect.svg") 0 0/14px 14px;
}
</style>