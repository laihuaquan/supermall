/*
 * @Author: your name
 * @Date: 2021-04-29 22:59:00
 * @LastEditTime: 2021-06-01 21:16:59
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: \VueCli\supermall\vue.config.js
 */
module.exports = {
  configureWebpack: {
    resolve: {
      alias: {
        'components': '@/components',
        'content': 'components/content',
        'common': 'components/common',
        'assets': '@/assets',
        'network': '@/network',
        'views': '@/views',
      }
    }
  },
  devServer: {
    port: 8081,
    // 查阅 https://github.com/vuejs/vue-doc-zh-cn/vue-cli/cli-service.md#配置代理
  }
}
