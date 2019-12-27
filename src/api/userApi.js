import fetch from './fetch'

export default {
  // 获取已有的内部人员Ip
  getPersonnelIp: async function (page, limit) {
    return fetch.userHost.get(`api/v1/insider/all?page=${page}&limit=${limit}`)
  }
}
