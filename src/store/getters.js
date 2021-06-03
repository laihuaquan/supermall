/*
 * @Author: your name
 * @Date: 2021-05-26 21:08:47
 * @LastEditTime: 2021-05-28 20:53:30
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: \VueCli\supermall\src\store\getters.js
 */
export default {
    cartNum(state) {
        return state.cartList.length;
    },
    cartList(state) {
        return state.cartList;
    },


}

