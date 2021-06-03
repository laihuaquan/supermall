/*
 * @Author: your name
 * @Date: 2021-05-22 21:31:26
 * @LastEditTime: 2021-06-01 20:50:34
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: \VueCli\supermall\src\common\mixin.js
 * 混入的意思，就是减少一些代码的重复工作。使一次定义的data(){}, methods: 等，能快速的嵌入到子组件中。简化工作。
 */
import { POP, NEW, SELL } from "./const";

export const backTopMixin = {
  data: function () {
    return {
      showBackTop: false,
    }
  },
  methods: {
    backTop: function () {
      this.$refs.scrollRef.scrollTo(0, 0, 300);
    }
  }
}
export const tabControlMixin = {
  data: function () {
    return {
      currentType: POP
    }
  },
  methods: {
    tabClick(index) {
      switch (index) {
        case 0:
          this.currentType = POP
          break
        case 1:
          this.currentType = NEW
          break
        case 2:
          this.currentType = SELL
          break
      }
      console.log(this.currentType);
    }
  }
}
