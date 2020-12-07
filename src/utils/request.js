import axios from 'axios'

import NProgress from 'nprogress'
import "nprogress/nprogress.css";
import { Message } from 'element-ui'
import getUserTempId from './getUserTempId'
const instance = axios.create({
  baseURL: "http://182.92.128.115/api",
  headers: {}
})

// 变量接收下userTempId是在内存中进行，性能好
// 如果直接在拦截器中给localStorage保存数据，是在磁盘中进行的，性能不好
const userTempId = getUserTempId()

//请求拦截器，初始化默认返回成功promise
instance.interceptors.request.use((config) => {
  NProgress.start()
  config.headers.userTempId = userTempId
  return config
})
//响应拦截器
instance.interceptors.response.use((res) => {
  NProgress.done()
  //状态码200，返回成功的响应数据
  if (res.data.code === 200) {
    // console.log(res.data.data)
    return res.data.data
  }
  //状态码201，返回失败的promise
  const { data } = res.data
  Message.error(data)
  return Promise.reject(data)

}, (err) => {
  // 响应失败：当响应状态码不是 2xx
  NProgress.done()
  const message = err.message || "网络错误"
  Message.error(message)
  return Promise.reject(message)
})
export default instance