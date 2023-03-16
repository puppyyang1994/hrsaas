import Cookies from 'js-cookie'

// 设置一个独一无二的Key
const TokenKey = 'hrssas-ihrm-token'

// 获取token
export function getToken() {
  return Cookies.get(TokenKey)
}

// 将token 写入缓存
export function setToken(token) {
  return Cookies.set(TokenKey, token)
}

// 移除token
export function removeToken() {
  return Cookies.remove(TokenKey)
}
