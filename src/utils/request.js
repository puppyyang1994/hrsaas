import axios from 'axios'
import { Message } from 'element-ui'

const service = axios.create({
  // 当执行 npm run dev 会执行 env.development 里面设置的基础地址是/api 所以能触发跨域代理
  baseURL: process.env.VUE_APP_BASE_API,
  //   设置axios请求的基础的基础地址
  timeout: 5000
}

)

service.interceptors.request.use()
// 响应拦截器
service.interceptors.response.use(
  response => {
    // 成功 -->解构数据
    const { success, message, data } = response.data
    // 要根据success的成功与否 决定下面的操作
    if (success) {
      return data
    } else {
      // 业务已经错了， 还能进then? 不能！ 应该进catch
      Message.error(message) // 提示错误消息
      return Promise.reject(new Error(message)) // 没有错误对象 所以自己new一个
    }
  },
  error => {
    // 用element-ui的方法 提示错误  然后reject
    Message.error(error.message)
    // 返回执行错误  让当前的执行链跳出成功 直接进入catch
    return Promise.reject(error)
    // login().then().catch()
  }
)

export default service
