import api from './index'
// axios
import request from '@/utils/request'

// get 分页查询用户通话记录
export function callrecords(params) {
  return request({
    url: '/api/v1/callrecords',
    method: 'get',
    params
  })
}

// 用户信息 post 方法
export function getUserInfo(data) {
  return request({
    url: api.UserInfo,
    method: 'post',
    data,
    hideloading: true
  })
}

// 用户名称 get 方法
export function getUserName(params) {
  return request({
    url: api.UserName,
    method: 'get',
    params,
    hideloading: true
  })
}
