/*
 * @Author: your name
 * @Date: 2021-05-26 20:38:22
 * @LastEditTime: 2021-05-26 20:50:25
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: \VueCli\supermall\src\store\mutations.js
 */
import { GOODS_UPDATE, GOODS_APPEND } from './mutations-type'
export default {
    [GOODS_UPDATE](state, payload) { payload.count += 1 },
    [GOODS_APPEND](state, payload) { state.cartList.push(payload) }
}
