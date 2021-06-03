/*
 * @Author: your name
 * @Date: 2021-05-15 22:19:55
 * @LastEditTime: 2021-05-22 19:29:11
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: \VueCli\supermall\src\network\detail.js
 */
import { request } from './request'

//获得详细商品信息
export function getDetail(iid) {

    return request({
        url: '/detail', params: { iid }
    })
}

// 获得推荐数据
export function getRecommend() {
    return request({ url: '/recommend' });
}

export class Goods {
    constructor(item, columns, services) {
        this.title = item.title
        this.desc = item.price
        this.oldPrice = item.price
        this.discount = item.discountDesc
        this.columns = columns
        this.services = services
        this.realPrice = item.lowNowPrice
    }
}

export class Shop {
    constructor(s) {
        this.logo = s.shopLogo;
        this.name = s.name;
        this.fans = s.cFans;
        this.sells = s.cSells;
        this.scrore = s.score;
        this.goodsCount = s.cGoods
    }
}

export class GoodsParam {
    constructor(info, rule) {
        this.image = info.images ? info.images[0] : "";
        this.infos = info.set;
        this.sizes = rule.tables;
    }
}