import Vue from 'vue'
import axios from 'axios'
import store from '../../store/index'

Vue.config.productionTip = false

axios.defaults.baseURL = Vue.config.productionTip ? 'https://api-partner.alamat.ru/' : 'http://alamat.services/'

let token = localStorage.getItem('token')

axios.interceptors.request.use(
  (config) => {
    if (token) {
      config.headers['Authorization'] = `Bearer ${token}`
    }

    return config
  },

  (error) => {
    return Promise.reject(error)
  }
)

axios.interceptors.response.use(function (response) {
  return response
}, function (error) {
  if (error.response.status === 401) {
    store.dispatch('logout')
  }
  return Promise.reject(error)
})
