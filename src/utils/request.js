import axios from 'axios'

const instance = axios.create({
  baseURL: "http://182.92.128.115/api",
  headers: {}
})
//请求拦截器，初始化默认返回成功promise
instance.interceptors.request.use((config) => {
  return config
})
//响应拦截器
instance.interceptors.response.use((res) => {
  if (res.data.code === 200) {
    return res.data.data
  }
  else {
    return Promise.reject(res.data.message)
  }
}, (err) => {
  return Promise.reject(err)
})
export default instance