<!--
 * @Author: your name
 * @Date: 2021-05-31 22:33:15
 * @LastEditTime: 2021-06-01 20:37:05
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: \VueCli\supermall\src\components\common\toast\Toast.vue
-->
<template>
  <div class="toast" v-show="show">
    <div>{{ message }}</div>
  </div>
</template>

<script>
export default {
  name: "Toast",
  // props: {
  //   message: {
  //     type: String,
  //     default: "",
  //   },
  //   show: {
  //     type: Boolean,
  //     default: false,
  //   },
  // },
  data() {
    return { message: "", show: false };
  },
  methods: {
    showMessage(_message, duration = 1500) {
      // console.log("showMessage", _message, duration);
      this.message = _message;
      this.show = true;
      setTimeout(() => {
        this.show = false;
        this.message = "";
      }, duration);
    },
  },
};
</script scoped>

<style scoped>
.toast {
  position: fixed;
  padding: 8px 10px;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  background-color: rgba(0, 0, 0, 0.8);
  color: white;
  font-size: 18px;
  z-index: 9999;
}
</style>