import Vue from 'vue'
import axios from 'axios'

export default {
  state: {
    settings: []
  },
  getters: {
    getSettings: state => state.settings
  },
  actions: {
    getSettings (ctx) {
      return new Promise((resolve) => {
        axios.get('settings/get').then(response => {
          resolve(response)
          ctx.commit('updateSettings', response.data.data)
        }).catch(error => {
          console.log(error)
        })
      })
    },
    update (ctx, data) {
      return new Promise(() => {
        axios.post('settings/update', data).then(response => {
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
    updateSettings (state, data) {
      state.settings = data
    }
  }
}
