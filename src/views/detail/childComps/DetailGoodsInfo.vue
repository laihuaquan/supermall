<!--
 * @Author: your name
 * @Date: 2021-05-16 22:12:08
 * @LastEditTime: 2021-05-21 13:34:28
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: \VueCli\supermall\src\views\detail\childComps\DetailGoodsInfo.vue
-->
<template>
  <div v-if="Object.keys(detailInfo).length !== 0" class="goods-infos">
    <div class="info-desc">
      <div class="start"></div>
      <div class="desc">{{ detailInfo.desc }}</div>
      <div class="end"></div>
    </div>
    <div class="info-key">{{ detailInfo.detailImage[0].key }}</div>
    <div class="info-list">
      <img
        v-for="(item, index) in detailInfo.detailImage[0].list"
        :src="item"
        alt=""
        :key="index"
        @load="imgLoaded"
      />
    </div>
  </div>
</template>

<script>
export default {
  name: "DetailGoodsInfo",
  data() {
    return {
      counter: 0,
      imgCounter: 0,
    };
  },
  watch: {
    detailInfo() {
      this.imgCounter = this.detailInfo.detailImage[0].list.length; //检测图片数据的变化
    },
  },
  methods: {
    imgLoaded() {
      if (++this.counter == this.imgCounter) {
        this.$emit("imgLoaded");
      }
    },
  },
  props: {
    detailInfo: {
      type: Object,
      default() {
        return {};
      },
    },
  },
};
</script>

<style scoped >
.goods-infos {
  padding: 20px 0;
  border-bottom: 5px solid #f2f5f8;
}

.info-desc {
  padding: 0 15px;
}

.info-desc .start,
.info-desc .end {
  width: 90px;
  height: 1px;
  background-color: #a3a3a5;
  position: relative;
}

.info-desc .start {
  float: left;
}

.info-desc .end {
  float: right;
}

.info-desc .start::before,
.info-desc .end::after {
  content: "";
  position: absolute;
  width: 5px;
  height: 5px;
  background-color: #333;
  bottom: 0;
}

.info-desc .end::after {
  right: 0;
}

.info-desc .desc {
  padding: 15px 0;
  font-size: 14px;
}

.info-key {
  margin: 10px 0 10px 15px;
  color: #333;
  font-size: 15px;
}

.info-list img {
  width: 100%;
}
</style>
