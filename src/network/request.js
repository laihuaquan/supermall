/*
 * @Author: your name
 * @Date: 2021-04-28 20:49:20
 * @LastEditTime: 2021-05-07 20:59:34
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: \VueCli\shopping\src\network\request.js
 */
import axios from 'axios';

//方法三，直接使用Promise
export function request(config) {

    //创建实例
    const instance = axios.create({
        // baseURL: "http://123.207.32.32:8000",
        baseURL: "http://152.136.185.210:7878/api/m5",
        timeout: 5000
    });

    //拦截的数据，检查完以后，需要return 参数，否则后续得不到参数 
    instance.interceptors.request.use(
        config => { return config },
        err => { console.log('错误', err); return err }
    );
    //对响应的拦截，注意，也需要返回
    instance.interceptors.response.use(
        result => { return result.data },
        err => {
            if (err && err.response) {
                switch (err.response.status) {
                    case 400:
                        err.message = '请求错误'
                        break
                    case 401:
                        err.message = '未授权的访问'
                        break
                    case 404:
                        err.message = "页面不存在"
                        break
                }
            }
            return err
        }
    );
    //发送请求并回调
    return instance(config);
}