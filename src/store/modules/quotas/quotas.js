import axios from 'axios'

export default {
  state: {
    quota: [],
    quotas: []
  },
  getters: {
    getQuota: state => state.quota,
    getQuotas: state => state.quotas
  },
  actions: {
    getQuota (ctx, id) {
      return new Promise((resolve) => {
        axios.get('quotas/get?id=' + id).then(response => {
          resolve(response)
          ctx.commit('updateQuota', response.data.data)
        }).catch(error => {
          console.log(error)
        })
      })
    },
    getQuotas (ctx) {
      return new Promise((resolve) => {
        axios.get('quotas/list').then(response => {
          resolve(response)
          ctx.commit('updateQuotas', response.data.data)
        }).catch(error => {
          console.log(error)
        })
      })
    },
    createQuotas (ctx, data) {
      return new Promise((resolve) => {
        axios.post('quotas/create', data).then(response => {
          resolve(response)
        }).catch(error => {
          console.log(error)
        })
      })
    }
  },
  mutations: {
    updateQuota (state, data) {
      state.quota = data
    },
    updateQuotas (state, data) {
      state.quotas = data
    }
  }
}
