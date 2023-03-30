import Vue from 'vue'
import axios from 'axios'
import router from '../../../router'

export default {
  state: {},
  getters: {},
  actions: {
    register (ctx, data) {
      return new Promise(() => {
        axios.post('register', data).then(response => {
          if (response.data.result === 'error') {
            Vue.$toast.error(response.data.message)
          } else {
            Vue.$toast.success(response.data.message)
            router.push('/login')
          }
        }).catch(error => {
          console.log(error)
        })
      })
    }
  },
  mutations: {}
}
