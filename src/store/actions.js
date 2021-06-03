/*
 * @Author: your name
 * @Date: 2021-05-26 20:40:42
 * @LastEditTime: 2021-06-01 18:13:31
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: \VueCli\supermall\src\store\actions.js
 */
import { GOODS_UPDATE, GOODS_APPEND } from './mutations-type'

export default {
    addToCart(content, payload) {
        return new Promise((resolve, reject) => {
            //先查找是否存在，存在则数量加1，不存在，则加入购物车
            let oldProduct = content.state.cartList.find(item => item.iid === payload.iid)
            if (oldProduct) {
                //oldProduct.count += 1 
                content.commit(GOODS_UPDATE, oldProduct)
                resolve("当前商品数量+1")
            }
            else {
                payload.count = 1;
                payload.checked = true; //代表的是选中状态
                content.commit(GOODS_APPEND, payload)
                resolve("加入购物车")
            }
        });


    }
}
