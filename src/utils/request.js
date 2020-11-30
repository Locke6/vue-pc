import axios from 'axios'

import NProgress from 'nprogress'
import "nprogress/nprogress.css";
import { Message } from 'element-ui'

const instance = axios.create({
  baseURL: "http://182.92.128.115/api",
  headers: {}
})
//请求拦截器，初始化默认返回成功promise
instance.interceptors.request.use((config) => {
  NProgress.start()
  return config
})
//响应拦截器
instance.interceptors.response.use((res) => {
  NProgress.done()
  //状态码200，返回成功的响应数据
  if (res.data.code === 200) {
    return res.data.data
  }
  //状态码201，返回失败的promise
  const { message } = res.data
  Message.error(message)
  return Promise.reject(message)

}, (err) => {
  // 响应失败：当响应状态码不是 2xx
  NProgress.done()
  const message = err.message || "网络错误"
  Message.error(message)
  return Promise.reject(message)
})
export default instance