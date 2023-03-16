import request from '@/utils/request'

// 封装单独的登录接口
export function login(data) {
  // 返回了一个promise对象
  return request({
    url: '/sys/login',
    method: 'post',
    data
  })
}
// return 返回的是promise对象 可以用async和await获取结果
// 集中式管理 谁想用就可以直接来引用

export function getInfo(token) {

}

export function logout() {

}
