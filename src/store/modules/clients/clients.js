import axios from 'axios'
import qs from 'qs'

export default {
  state: {
    clients: []
  },
  getters: {
    getClients: state => state.clients
  },
  actions: {
    getClients (ctx, data) {
      return new Promise((resolve) => {
        axios.get('clients/list?' + qs.stringify(data)).then(response => {
          resolve(response)
          ctx.commit('updateClientsList', response.data.data)
        }).catch(error => {
          console.log(error)
        })
      })
    },
    editClient (ctx, data) {
      return new Promise((resolve) => {
        axios.post('clients/edit', data).then(response => {
          resolve(response)
        }).catch(error => {
          console.log(error)
        })
      })
    }
  },
  mutations: {
    updateClientsList (state, data) {
      state.clients = data
    }
  }
}
