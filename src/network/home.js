/*
 * @Author: your name
 * @Date: 2021-05-02 21:55:59
 * @LastEditTime: 2021-05-06 21:25:04
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: \VueCli\supermall\src\network\home.js
 */
import { request } from './request'
export function getHomeMultidata() {
  return request({
    url: '/home/multidata'
  })
}

export function getHomeData(type, page) {
  return request({
    url: '/home/data',
    params: { type, page }
  })
}

// import axios from './axios'

// export const BANNER = 'banner'
// export const RECOMMEND = 'recommend'

// export function getHomeMultidata() {
//   return axios({
//     url: '/home/multidata'
//   })
// }

// export function getHomeData(type, page) {
//   return axios({
//     url: '/home/data',
//     params: {
//       type,
//       page
//     }
//   })
// }
