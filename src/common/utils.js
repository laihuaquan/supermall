/*
 * @Author: your name
 * @Date: 2021-05-14 21:39:02
 * @LastEditTime: 2021-05-24 21:59:11
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: \VueCli\supermall\src\common\utils.js
 */
//防抖动处理,需要加一个默认值。
export function debounce(func, delay = 100) {
    let timer = null;
    return function (...args) {
        if (timer) clearTimeOut(timer);
        timer = setTimeout(() => { func.apply(this, args) }, delay);  //定时检查，如果定时器已经存在则清掉，否则到时间后，执行函数
    }
}

export function formatDate(date, fmt) {
    if (/(y+)/.test(fmt)) {
        fmt = fmt.replace(RegExp.$1, (date.getFullYear() + '').substr(4 - RegExp.$1.length));
    }
    let o = {
        'M+': date.getMonth() + 1,
        'd+': date.getDate(),
        'h+': date.getHours(),
        'm+': date.getMinutes(),
        's+': date.getSeconds()
    };
    for (let k in o) {
        if (new RegExp(`(${k})`).test(fmt)) {
            let str = o[k] + '';
            fmt = fmt.replace(RegExp.$1, (RegExp.$1.length === 1) ? str : padLeftZero(str));
        }
    }
    return fmt;
};

function padLeftZero(str) {
    return ('00' + str).substr(str.length);
};
