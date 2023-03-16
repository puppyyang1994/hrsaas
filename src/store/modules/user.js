import { getToken, setToken, removeToken } from '@/utils/auth'
import { login } from '@/api/user'

// 配置user 实现vuex中token数据持久化

// 保存状态
const state = {
  // 设置token为共享状态
  token: getToken() // 已初始化就从缓存中读token

}

// 修改状态
const mutations = {
  // 载荷是token
  setToken(state, token) {
    state.token = token // 将数据设置给vuex
    // 同步给缓存 这样就实现了数据的缓存华
    setToken(token)
  },
  removeToken(state) {
    state.token = null // 将vuex的数据置空  单缓存还没有
    // 调用 缓存置空 同步到缓存
    removeToken()
  }
}

// 执行异步
const actions = {
  // 调用接口后返回的是一个data
  // login这是方法
  async  login(context, data) {
    // 调用api接口
    const result = await login(data) // 拿到token
    // request.js中已经对返回的promise对象进行了处理 不再需要判断了 拿不到会return出去

    context.commit('setToken', result) // 设置token  在响应拦截器已经处理过了
  }
}

export default {
  namespaced: true,
  state,
  mutations,
  actions
}
