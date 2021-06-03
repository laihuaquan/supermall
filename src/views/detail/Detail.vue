<!--
 * @Author: your name
 * @Date: 2021-05-15 20:31:37
 * @LastEditTime: 2021-06-01 20:40:50
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: \VueCli\supermall\src\views\detail\Detail.vue
-->
<template>
  <div id="detail">
    <ul>
      <li v-for="(item, index) in $store.cartList" :key="index">{{ item }}</li>
    </ul>
    <detail-nav-bar
      @itemClicked="itemClicked"
      ref="navbar"
      :current-index="currentIndex"
    />

    <scroll
      class="detail-contents"
      ref="scrollRef"
      :probe-type="3"
      @scroll="detailScroll"
    >
      <div>
        <detail-swiper :top-images="topImages" />
        <detail-base-info :goods="goods" />
        <detail-shop-info :shop="shop" />
        <detail-goods-info :detail-info="detailInfo" @imgLoaded="imgLoaded" />
        <detail-param-info ref="params" :param-info="paramInfo" />
        <detail-comment-info ref="comments" :comment-info="commentInfo" />
        <detail-recommend-info
          ref="recommends"
          :recommend-list="recommendList"
        />
      </div>
    </scroll>
    <detailBottomBar @addToCart="addToCart" @buyNow="buyNow" />
    <back-top @click.native="backTop" v-show="showBackTop"></back-top>
    <!-- <toast :show="show" :message="message" ref="toast" /> -->
  </div>
</template>

<script>
import scroll from "common/scroll/Scroll";

import detailNavBar from "./childComps/DetailNavBar";
import detailSwiper from "./childComps/DetailSwiper";
import detailBaseInfo from "./childComps/DetailBaseInfo";
import detailShopInfo from "./childComps/DetailShopInfo";
import detailGoodsInfo from "./childComps/DetailGoodsInfo";
import detailParamInfo from "./childComps/DetailParamInfo";
import detailCommentInfo from "./childComps/DetailCommentInfo";
import detailRecommendInfo from "./childComps/DetailRecommendInfo";
import detailBottomBar from "./childComps/DetailBottomBar";
import backTop from "content/backTop/BackTop"; //回到顶部工具条
import {
  getDetail,
  Goods,
  Shop,
  GoodsParam,
  getRecommend,
} from "network/detail";

import { backTopMixin } from "@/common/mixin";
// import toast from "common/toast/Toast";
// import { debounce } from "@/common/utils";

export default {
  name: "Detail",
  mixins: [backTopMixin], //混入（回到顶部）
  components: {
    scroll,
    detailNavBar,
    detailSwiper,
    detailBaseInfo,
    detailShopInfo,
    detailGoodsInfo,
    GoodsParam,
    detailParamInfo,
    detailCommentInfo,
    detailRecommendInfo,
    getRecommend,
    detailBottomBar,
    backTop,
    // toast,
  },
  methods: {
    imgLoaded() {
      this.$refs.scrollRef.refresh();
      this.freshPosition();
      // console.log("all img is load.");
    },
    detailScroll(position) {
      this.showBackTop = position.y < -1000; //显示回到顶部
      this._listenScrollTheme(-position.y);
    },
    //联动顶部跳转项
    _listenScrollTheme(position) {
      let length = this.detailZonePosY.length;
      for (let i = 0; i < length; i++) {
        let iPos = this.detailZonePosY[i];
        if (
          this.currentIndex !== i &&
          position >= iPos &&
          position < this.detailZonePosY[i + 1]
        ) {
          this.currentIndex = i;
          this.$refs.navbar.changeIndex(this.currentIndex);
          break;
        }
      }
    },
    //顶部导航点击
    itemClicked(index) {
      this.$refs.scrollRef.scrollTo(0, -this.detailZonePosY[index] - 44, 200); //根据索引跳转主题。
      this.currentIndex = index;
    },
    //加入购物车
    addToCart() {
      if (!this.iid) return;
      const product = {};
      product.image = this.topImages[0];
      product.title = this.goods.title;
      product.desc = this.goods.desc;
      product.price = this.goods.realPrice;
      product.iid = this.iid;
      //将商品加入到购物车(使用Vuex共享数据)
      // this.$store.cartList.push(product) //虽然可以，但是不应该这样直接操作
      // this.$store.commit("addToCart", product); //去呼叫mutations中的方法
      // this.$store.dispatch("addToCart", product); //去呼叫actions中的方法
      this.$store.dispatch("addToCart", product).then((res) => {
        this.$toast.showMessage(res);
        //     this.message = res;
        //     this.show = true;
        //     setTimeout(() => {
        //       this.show = false;
        //       this.message = "";
        //     }, 1500);
      }); //去呼叫actions中的方法的同时，执行回调并接收参数
    },
    buyNow() {
      console.log("点击了：立刻购买");
    },
    //记录座标
    freshPosition() {
      this.detailZonePosY = [];
      this.detailZonePosY.push(0);
      this.detailZonePosY.push(this.$refs.params.$el.offsetTop);
      this.detailZonePosY.push(this.$refs.comments.$el.offsetTop);
      this.detailZonePosY.push(this.$refs.recommends.$el.offsetTop);
      this.detailZonePosY.push(Number.MAX_VALUE); //多插入一个值
      // console.log(this.detailZonePosY);
    },
  },
  data() {
    return {
      iid: null,
      topImages: [],
      goods: {},
      shop: {},
      detailInfo: {},
      paramInfo: {},
      commentInfo: {},
      recommendList: [],
      detailZonePosY: [], //记录各版块的座标值
      getPos: null,
      currentIndex: 0,
      // show: false,
      // message: "哈哈哈...",
    };
  },
  created() {
    //接受传入的参数
    this.iid = this.$route.params.iid;

    //发起网络请求,获得详细数据
    getDetail(this.iid).then((res) => {
      //console.log(res); //原始数据打印一下，方便结构的分析
      const data = res.result;
      //轮播图数据
      this.topImages = data.itemInfo.topImages;
      //商品信息
      this.goods = new Goods(
        data.itemInfo,
        data.columns,
        data.shopInfo.services
      );
      //店铺数据
      this.shop = new Shop(data.shopInfo);
      //图片详情
      this.detailInfo = data.detailInfo;
      //参数
      this.paramInfo = new GoodsParam(
        data.itemParams.info,
        data.itemParams.rule
      );
      //评论信息
      if (data.rate.list) {
        this.commentInfo = data.rate.list[0];
      }
    });
    //获得推荐的数据
    getRecommend().then((res) => {
      this.recommendList = res.data.list;
    });
  },
};
</script>

<style scoped>
#detail {
  background-color: #fff;
  position: relative;
  z-index: 9;
}
.detail-contents {
  margin-top: 45px;
  height: calc(100vh - 45px);
  overflow: hidden;
}
</style>