<!--
 * @Author: your name
 * @Date: 2021-04-12 19:28:31
 * @LastEditTime: 2021-05-23 22:50:18
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: \VueCli\tabbar\src\views\home\home.vue
-->
<template>
  <div>
    <div id="home">
      <navBar class="bgc"><div slot="center">首页</div></navBar>
      <tab-control
        :titles="['流行', '新款', '精选']"
        class="tabcontrol"
        @tabClicked="tabClicked"
        v-show="tabFixed"
        ref="tabControl0"
      />
      <!-- 注意，加入ref-“scroll”是后面方便被引用 -->
      <scroll
        class="content"
        ref="scrollRef"
        :probe-type="3"
        @scroll="contentScroll"
        :pull-up-load="true"
        @pullingUp="reachEnd"
      >
        <home-swiper :banners="banners" @swipperImgLoaded="swipperImgLoaded" />
        <recommend :recommends="recommends" />
        <feature-view />
        <tab-control
          :titles="['流行', '新款', '精选']"
          @tabClicked="tabClicked"
          ref="tabControl"
        />
        <goods-list :goods="getGoods" />
      </scroll>
      <!-- 注意，必须要使用.native属性，否则组件不能直接获得监听事件 -->
      <back-top @click.native="backToTop" v-show="isShow"></back-top>
    </div>
  </div>
</template>

<script>
import homeSwiper from "./childComps/HomeSwiper"; //轮播图
import recommend from "./childComps/RecommendView"; //推荐栏
import featureView from "./childComps/FeatureView"; //特性区域

import navBar from "common/navbar/NavBar";
import scroll from "common/scroll/Scroll";
import tabControl from "content/tabControl/TabControl"; //tabControl
import goodsList from "content/goods/GoodsList"; //导入商品列表组件
import backTop from "content/backTop/BackTop"; //回到顶部工具条

import { getHomeMultidata, getHomeData } from "network/home"; //导出的名称需要一致
// import {debounce} from 'common/utils' //导入防抖动函数

export default {
  name: "Home",
  components: {
    homeSwiper,
    recommend,
    featureView,
    navBar,
    tabControl,
    goodsList,
    scroll,
    backTop,
  },
  data() {
    return {
      activeType: "pop",
      currTab: 0,
      banners: [],
      recommends: [],
      goods: {
        pop: { page: 0, list: [] },
        new: { page: 0, list: [] },
        sell: { page: 0, list: [] },
      },
      isShow: false,
      tabOffSet: 0,
      tabFixed: false,
      positionY: 0,
    };
  },
  computed: {
    getGoods() {
      return this.goods[this.activeType].list;
    },
  },
  created() {
    this.getHomeDefaults(), //代码的组织方式，具体执行在methods
      this.getHomeData("pop"),
      this.getHomeData("new"),
      this.getHomeData("sell");
  },
  activated() {
    this.$refs.scrollRef.scrollTo(0, this.positionY);
    this.$refs.scrollRef.scroll.refresh();
  },
  deactivated() {
    this.positionY = this.$refs.scrollRef.scroll.y; //注意是负数
  },
  mounted() {},
  methods: {
    getHomeDefaults() {
      getHomeMultidata().then((res) => {
        this.banners = res.data.banner.list;
        this.recommends = res.data.recommend.list;
      });
    },
    getHomeData(type) {
      const page = this.goods[type].page + 1;
      getHomeData(type, page).then((res) => {
        this.goods[type].list.push(...res.data.list); //缓存到数组goods中
        this.goods[type].page + 1; //页码 + 1
        this.$refs.scrollRef.finishPullUp();
      });
    },
    tabClicked(index) {
      //接收来自tab项目的点击事件
      switch (index) {
        case 0:
          this.activeType = "pop";
          break;
        case 1:
          this.activeType = "new";
          break;
        case 2:
          this.activeType = "sell";
          break;
      }
      this.$refs.tabControl0.currentIndex = index;
      this.$refs.tabControl.currentIndex = index;
    },
    contentScroll(position) {
      this.isShow = -position.y > 1000; //position.y 原值是负的
      this.tabFixed = -position.y > this.tabOffSet;
    },
    reachEnd() {
      console.log("加载更多");
      this.getHomeData(this.activeType);
      // this.$refs.scrollRef.finishPullUp(); //标记下拉完成//可以放在取数据的函数中
      // this.$refs.scrollRef.scroll.refresh(); //重新计算高度
    },
    backToTop() {
      // this.$refs.scrollRef.scroll.scrollTo(0, 0, 500);
      console.log("backToTop");
      this.$refs.scrollRef.scrollTo(0, 0, 500);
    },
    swipperImgLoaded() {
      this.tabOffSet = this.$refs.tabControl.$el.offsetTop; //等图片加载完成后，确定tabControl的高度
    },
  },
};
</script>

<style scoped>
/* 给home加一个padding，使与顶部标题栏不重叠 。 */
#home {
  padding-top: 44px;
  height: 100vh;
  position: relative;
}
.bgc {
  background-color: var(--color-tint);
  color: white;
}

/*被scroll包裹以后，粘性定位会失效*/
/* .tabcontrol {
  position: sticky;
  top: 44px;
  z-index: 99;
} */
.tabcontrol {
  position: relative;
  z-index: 2;
}

.content {
  /* position: absolute;
  top: 45px;
  bottom: 49px;
  left: 0;
  right: 0; */
  height: calc(100vh - 93px);
  overflow: hidden;
}
</style>