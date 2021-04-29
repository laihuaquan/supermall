/*
 * @Author: your name
 * @Date: 2021-04-29 22:59:00
 * @LastEditTime: 2021-04-29 23:08:25
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: \VueCli\supermall\src\vue.config.js
 * 配置vue,比如设置别名
 */
module.exports = {
    configWebpack: {
        resolve: {
            // extensions: [], //扩展名在公共文件中已经处理
            alias: {
                'assets': "@/assets",
                'common': "@/common",
                'netword': "@/network",
                'views': "@/views",
                // 'router': "@/router", //router一般不需要，只在一个地方引用一次即可。
                // 'store': "@/store",   //一般不需要，不需要在其他地方引用
            } //内部已经配置过 @ => src
        }
    }
}  //会和公共文件合并
