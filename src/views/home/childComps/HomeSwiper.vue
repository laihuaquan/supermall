<!--
 * @Author: your name
 * @Date: 2021-05-03 19:48:56
 * @LastEditTime: 2021-06-01 20:43:04
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: \VueCli\supermall\src\views\home\childComps\homeSwiper.vue
 //轮播图
-->
<template>
  <!-- <Swiper :showIndicator="false" :interval="500">  是否显示进度表，切换图片的时间-->
  <Swiper>
    <SwiperItem v-for="item in banners" :key="item.link">
      <a :href="item.link">
        <img :src="item.image" alt="" @load="imgLoaded" />
      </a>
    </SwiperItem>
  </Swiper>
</template>

<script>
import { Swiper, SwiperItem } from "common/swiper";
export default {
  name: "HomeSwiper",
  components: { Swiper, SwiperItem },
  props: {
    banners: {
      type: Array,
      default() {
        return [];
      },
    },
  },
  data() {
    return { counter: 0, isLoaded: false };
  },
  methods: {
    imgLoaded() {
      if (!this.isloaded) {
        this.isloaded = true; //只要有一张图片确认位置就确认就可以返回，并阻止后面的操作
        this.$emit("swipperImgLoaded");
        // console.log("轮播图已经确定了高度");
      }
      // if (++this.counter == this.banners.length) {
      //   this.$emit("swipperImgLoaded"); //防抖动处理(原来使用标志位，不知道为何不可以)
      // }
    },
  },
};
</script>

<style>
</style>