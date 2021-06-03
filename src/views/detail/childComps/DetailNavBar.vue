<!--
 * @Author: your name
 * @Date: 2021-05-15 21:33:55
 * @LastEditTime: 2021-05-26 08:41:25
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: \VueCli\supermall\src\views\detail\childComps\DetailNavBar.vue
-->
<template>
  <div class="detail-nav">
    <nav-bar>
      <div slot="left" @click="titleBack">
        <img src="~assets/img/common/back.svg" alt="" class="imgBack" />
      </div>
      <div slot="center" class="navItems">
        <div
          v-for="(item, index) in titleInfos"
          :key="index"
          class="detailNavItem"
          @click="navItemClicked(index)"
          :class="{ isActive: currentIndex == index }"
        >
          {{ item }}
        </div>
      </div>
    </nav-bar>
  </div>
</template>

<script>
import navBar from "components/common/navbar/NavBar";
export default {
  name: "DetailNavBar",
  components: {
    navBar,
  },
  props: {
    titleInfos: {
      type: Array,
      default: () => {
        return ["商品", "参数", "评论", "推荐"];
      },
    },
    // currentIndex: {
    //   type: Number,
    //   default: () => {
    //     return 0;
    //   },
    // },  //注意，不要直接通过属性变更的方法来同步当前index，当使用data或computed属性来定义
  },
  data() {
    return { currentIndex: 0 };
  },
  methods: {
    navItemClicked(index) {
      this.currentIndex = index;
      this.$emit("itemClicked", index); //将点击了什么，告诉父组件
    },
    titleBack() {
      //返回到上一页
      //   this.$router.go(-1);
      this.$router.back();
    },
    changeIndex(index) {
      this.currentIndex = index;
    },
  },
};
</script>

<style  scoped>
.navItems {
  display: flex;
}

.detailNavItem {
  flex: 1;
  font-size: 13px;
}

/* 指示当前行 */
.isActive {
  color: var(--color-high-text);
}

.imgBack {
  margin-top: 10px;
}
</style>