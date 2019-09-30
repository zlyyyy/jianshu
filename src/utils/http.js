import axios from 'axios'
import { message } from 'antd';
// 创建axios实例
const service = axios.create({
    // `withCredentials` 表示跨域请求时是否需要使用凭证
    withCredentials: true,
    // baseURL: 'http://localhost:7300/mock/5c85c5cab5fe5c1068536b4d/jianshu',
    timeout: 15000 // 请求超时时间
})
//添加请求拦截器
service.interceptors.request.use(config => {
    //config.headers['Accept'] = 'application/json'
    return config
}, error => {
    message.error('加载超时');
    return Promise.reject(error)
})

// 添加响应拦截器
service.interceptors.response.use(
    response => {
        return response.data
    },
    error => {
        message.error('加载超时');
        return Promise.reject(error)
    }
)

export default service
