import axios from 'axios/index'
// import {Spin} from 'view-design'
import {LoadingBar} from 'view-design'
import '../style/loading.css'

export function request ({baseUrl, headers}) {
  const service = axios.create({
    baseURL: baseUrl,
    timeout: 20000,
    headers: headers ||
      {
        'Content-Type': 'application/json;charset=utf-8',
        'Accept': 'application/json'
      }
  })

  // 请求拦截器
  service.interceptors.request.use(
    config => {
      let token = sessionStorage.getItem('token')
      if (token) {
        // 判断是否存在token，如果存在的话，则每个http header都加上token
        config.headers = {
          Authorization: 'bearer ' + token,
          ...config.headers
        }
      }
      LoadingBar.start()
      // Spin.show({
      //   render: (h) => {
      //     return h('div',
      //       [
      //         h('div', {'class': 'loading'})
      //       ]
      //     )
      //   }
      // })
      return config
    }, (error) => {
      return Promise.reject(error)
    })
  // 请求错误处理
  const errorHandle = (status, other) => {
    // 状态码判断
    switch (status) {
      case 401:
        console.log('token失效，请重新登陆')
        break
      case 403:
        console.log('服务器拒绝请求')
        break
      case 404:
        console.log('服务器找不到请求的网页。')
        break
      case 500:
        console.log('500错误')
        break
      default:
        console.log(other)
    }
  }

  // 响应拦截器
  service.interceptors.response.use(
    // 请求成功
    res => {
      if (res.status === 200) {
        LoadingBar.finish()
        // Spin.hide()
        return Promise.resolve(res)
      } else {
        return Promise.reject(res)
      }
    },
    // 请求失败
    error => {
      const {response} = error
      if (response) {
        // 请求已发出，但是不在2xx的范围
        errorHandle(response.status, response.data.message)
        return Promise.reject(response)
      } else {
        console.log('网络错误，请连接网络')
      }
    })

  function get (url, params) {
    return service.get(url, params)
      .then(
        (response) => {
          return response
        }
      )
  }
  function post (url, data, config) {
    return service
      .post(url, JSON.stringify(data), config)
      .then(
        (response) => {
          return response
        }
      )
  }
  function del (url, data) {
    return service
      .delete(url, {data})
      .then(
        (response) => {
          return response
        }
      )
  }
  function put (url, data, config) {
    return service
      .put(url, data, config)
      .then(
        (response) => {
          return response
        }
      )
  }
  return {get: get, post: post, del: del, put: put}
}
