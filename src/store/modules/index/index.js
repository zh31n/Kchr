import axios from 'axios'

export default {
  state: {},
  getters: {},
  actions: {
    getInfo (ctx, data) {
      console.log(data.dates[0])
      return new Promise((resolve) => {
        axios.get('index/info?dateFrom=' + data.dates[0] +
          '&dateTo=' + data.dates[1]).then(response => {
          resolve(response)
        }).catch(error => {
          console.log(error)
        })
      })
    }
  },
  mutations: {}
}
