import Vue from 'vue'
import axios from 'axios'

export default {
  state: {
    token: localStorage.getItem('token') || '',
    fullName: localStorage.getItem('fullName') || '',
    email: localStorage.getItem('email') || '',
    image: localStorage.getItem('image') === 'null' ? '' : localStorage.getItem('image')
  },
  getters: {
    isLogin: state => !!state.token
  },
  actions: {
    login (ctx, data) {
      return new Promise(() => {
        axios.post('login', data).then(response => {
          if (response.data.result === 'error') {
            Vue.$toast.error(response.data.message)
          } else {
            Vue.$toast.success(response.data.message)
            ctx.commit('updateAfterLogin', response.data.data)
            window.location.href = '/'
          }
        }).catch(error => {
          console.log(error)
        })
      })
    },
    recoveryPassword (ctx, data) {
      return new Promise(() => {
        axios.post('recovery', data).then(response => {
          if (response.data.result === 'error') {
            Vue.$toast.error(response.data.message)
          } else {
            Vue.$toast.success(response.data.message)
          }
        }).catch(error => {
          console.log(error)
        })
      })
    }
  },
  mutations: {
    updateAfterLogin (state, data) {
      localStorage.setItem('token', data.token)
      localStorage.setItem('fullName', data.full_name)
      localStorage.setItem('email', data.email)
      localStorage.setItem('image', data.image)
      axios.defaults.headers.common['Authorization'] = `Bearer ${data.token}`
    }
  }
}
