const state = {
  token: ''
}

const mutations = {
  setToken (state, token) {
    state.token = token
    sessionStorage.setItem('token', token)
  },
  delToken (state, token) {
    state.token = ''
    sessionStorage.removeItem('token')
  }
}

export default {
  namespaced: true, // 用于在全局引用此文件里的方法时标识这一个的文件名
  state,
  mutations
}
