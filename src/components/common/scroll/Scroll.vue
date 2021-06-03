<!--
 * @Author: your name
 * @Date: 2021-05-09 22:45:01
 * @LastEditTime: 2021-05-16 22:58:51
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: \VueCli\supermall\src\components\common\scroll\Scroll.vue
-->
<template>
  <div ref="wrap">
    <div>
      <slot></slot>
    </div>
  </div>
</template>

<script>
import BScroll from "better-scroll";
export default {
  name: "Scroll",
  data() {
    return { scroll: null };
  },
  props: {
    probeType: { type: Number, default: 0 },
    pullUpLoad: { type: Boolean, default: false },
  },
  mounted() {
    this.scroll = new BScroll(this.$refs.wrap, {
      probeType: this.probeType,
      pullUpLoad: this.pullUpLoad,
      click: true,
      observeDOM: true,
    });
    if (this.probeType == 2 || this.probeType == 3) {
      this.scroll.on("scroll", (p) => {
        this.$emit("scroll", p);
      });
    } //将滚动事件传给父组件
    if (this.pullUpLoad) {
      this.scroll.on("pullingUp", () => {
        this.$emit("pullingUp");
      });
    }
  },
  methods: {
    scrollTo(x, y, time = 300) {
      this.scroll.scrollTo(x, y, time);
    },
    finishPullUp() {
      this.scroll.finishPullUp();
    }, //通知下拉完成。然后可以再次下拉
    refresh() {
      this.scroll.refresh();
    },
  },
};
</script>

<style scoped>
</style>