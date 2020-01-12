import Vue from 'vue'
import Vuex from 'vuex'
import user from './modules/user'
import login from './modules/login'

import createPersistedState from 'vuex-persistedstate'

// 判断环境 vuex提示生产环境中不使用
const debug = process.env.NODE_ENV !== 'production'

const createPersisted = createPersistedState({
  storage: window.sessionStorage
})

Vue.use(Vuex)

export default new Vuex.Store({
  modules: {
    user,
    login
  },
  plugins: debug ? [createPersisted] : [createPersisted]
})
