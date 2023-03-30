import axios from 'axios'

export default {
  state: {
  },
  getters: {},
  actions: {
    searchAddress (ctx, data) {
      return new Promise((resolve) => {
        axios.get('https://geocode-maps.yandex.ru/1.x?geocode=' + data + '&apikey=a08d8928-8db6-4c85-bcf5-149d469739ef&rspn=1&bbox=20.742187,26.431228~188.789062,78.903929&format=json').then(response => {
          resolve(response)
        }).catch(error => {
          console.log(error)
        })
      })
    }
  },
  mutations: {}
}
