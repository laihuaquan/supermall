/*
 * @Author: your name
 * @Date: 2021-06-01 20:47:54
 * @LastEditTime: 2021-06-01 21:05:28
 * @LastEditors: your name
 * @Description: In User Settings Edit
 * @FilePath: \VueCli\supermall\src\network\category.js
 */
// import axios from './axios'
import { request } from './request'

export function getCategory() {
  return request({
    url: '/category'
  })
}

export function getSubcategory(maitKey) {
  return request({
    url: '/subcategory',
    params: {
      maitKey
    }
  })
}

export function getCategoryDetail(miniWallkey, type) {
  return request({
    url: '/subcategory/detail',
    params: {
      miniWallkey,
      type
    }
  })
}
