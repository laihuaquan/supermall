<!--
 * @Author: your name
 * @Date: 2021-05-15 22:57:00
 * @LastEditTime: 2021-05-21 12:11:20
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: \VueCli\supermall\src\views\detail\childComps\DetailSwiper.vue
-->
<template>
  <swiper class="detailSwiper">
    <swiper-item v-for="(item, index) in topImages" :key="index">
      <img :src="item" alt="" />
    </swiper-item>
  </swiper>
</template>

<script>
//注意，使用该语法的原因是，在swiper文件夹下有一个index.js，里面做了二个函数的封装。
//注意导出的名称与导入的要一致
import { Swiper, SwiperItem } from "common/swiper";
export default {
  name: "DetailSwiper",
  props: {
    topImages: {
      type: Array,
      default() {
        return [];
      },
    },
  },
  components: { Swiper, SwiperItem },
};
</script>

<style scoped>
.detailSwiper {
  margin-top: 44px;
  height: 300px;
  overflow: hidden;
}
</style>