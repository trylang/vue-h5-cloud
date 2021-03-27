// axios
import request from '@/utils/request'

// 企业 - 查询（列表）
export function companys() {
  return request({
    url: `/api/v1/companys`,
    method: 'get'
  })
}

// 企业服务
export function businesses(id) {
  return request({
    url: `/api/v1/companys/${id}/businesses`,
    method: 'get'
  })
}

// 活动查询列表
export function activitys() {
  return request({
    url: `/api/v1/activitys`,
    method: 'get'
  })
}

// 对企业或企业服务投诉
export function postComplaints(data) {
  return request({
    url: `/api/v1/complaints`,
    method: 'post',
    data,
    hideloading: true
  })
}
