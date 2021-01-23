import Vue from 'vue'
import axios from 'axios'
import store from '@/store'

import { Message, Notification } from 'element-ui'
//import { ACCESS_TOKEN } from "@/store/mutation-types"
import baseConfig from "@/baseConfig";
// 创建 axios 实例
// let baseURL = process.env.NODE_ENV == 'development' ? '/proxyApi' : (process.env.NODE_ENV == 'production'?baseConfig.api_url:'');
let baseURL = process.env.NODE_ENV == 'development' ? baseConfig.api_url : (process.env.NODE_ENV == 'production' ? baseConfig.api_url : '');
const service = axios.create({
  baseURL: baseURL,
  timeout: 16000 // 请求超时时间
})

const err = (error) => {
  if (error.response) {
    let data = error.response.data
    const token = Vue.ls.get(ACCESS_TOKEN)
    switch (error.response.status) {
      case 403:
        Notification({
          title: '系统提示',
          message: "拒绝访问",
          type: 'error'
        })
        break
      case 500:
        Notification({
          title: '系统提示',
          message: "内部服务器错误",
          type: 'error'
        })
        if (token && data.message == "Token失效，请重新登录") {
          Message({
            message: data.message,
            type: 'error'
          })
        }
        break
      case 404:
        Notification({
          title: '系统提示',
          message: "很抱歉，资源未找到!",
          type: 'error'
        })
        break
      case 504:
        Notification({
          title: '系统提示',
          message: "网络超时",
          type: 'error'
        })
        break
      case 401:
        Notification({
          title: '系统提示',
          message: "未授权，请重新登录",
          type: 'error'
        })
        if (token) {
          store.dispatch('LogOut').then(() => {
            setTimeout(() => {
              window.location.reload()
            }, 1500)
          })
        }
        break
      default:
        Notification({
          title: '系统提示',
          message: data.message,
          type: 'error'
        })
        break
    }
  }
  return Promise.reject(error)
};

// request interceptor(请求拦截)
service.interceptors.request.use(config => {
  // const token = Vue.ls.get();
  // const token = '0e9ab7a2-74f9-45b5-9f9c-f5d197533c8a';
  // if (token) {
  //   config.headers['token'] = 'Bearer ' + token // 让每个请求携带自定义 token 请根据实际情况自行修改
  // }
  if (config.method == 'get') {
    config.params = {
      // _t: Date.parse(new Date()) / 1000,
      ...config.params
    }
  }
  return config
}, (error) => {
  return Promise.reject(error)
})

let isRequest = false;
// response interceptor（响应拦截）
service.interceptors.response.use((response) => {
  if (response.data.ret == 10004030 || response.data.ret == 10004010) {
    if (!isRequest) {
      isRequest = true;
      // store.dispatch('OpenLogin', true)
      store.dispatch('LogOut').then(() => { })
      setTimeout(() => {
        isRequest = false
      }, 3000);
    }
  }
  // if (response.data.ret == 10001004) {
  //   Message({
  //     message: response.data.msg,
  //     type: 'error'
  //   })
  // } else if (response.data.ret == 10004040) {
  //   Message({
  //     message: response.data.msg,
  //     type: 'error'
  //   })
  // }
  return response.data
}, err)



export {
  service as axios
}