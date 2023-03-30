import axios from 'axios'
import Vue from 'vue'
export default {
  state: {},
  getters: {},
  actions: {
    uploadReport (ctx, data) {
      return new Promise(() => {
        axios.post('reports/upload', data).then(response => {
          if (response.data.result === 'error') {
            Vue.$toast.error(response.data.message)
          } else {
            let link = document.createElement('a')
            link.href = response.data.link
            link.setAttribute('download', response.data.data.dir + response.data.data.name)
            document.body.appendChild(link)
            link.click()
            link.remove()
            Vue.$toast.success(response.data.message)
          }
        }).catch(error => {
          console.log(error)
        })
      })
    }
  },
  mutations: {}
}
