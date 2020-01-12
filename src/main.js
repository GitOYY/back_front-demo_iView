import Vue from 'vue'
import App from './App'
import router from './router'
import store from './store'

// 使用iView
import ViewUI from 'view-design'
import 'view-design/dist/styles/iview.css'

/// 使用EasyScroll
import EasyScroll from 'easyscroll'

import axios from 'axios'

Vue.config.productionTip = false

Vue.use(ViewUI)
Vue.use(EasyScroll)
Vue.prototype.$axios = axios

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  store,
  components: { App },
  template: '<App/>'
})
