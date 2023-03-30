import axios from 'axios'
import qs from 'qs'

export default {
  state: {
    serviceId: 0,
    service: [],
    services: [],
    freeIntervals: []
  },
  getters: {
    getServiceId: state => state.serviceId,
    getService: state => state.service,
    getServices: state => state.services,
    getFreeIntervals: state => state.freeIntervals
  },
  actions: {
    getService (ctx, id) {
      return new Promise((resolve) => {
        axios.get('services/get?id=' + id).then(response => {
          resolve(response)
          ctx.commit('updateService', response.data.data)
        }).catch(error => {
          console.log(error)
        })
      })
    },
    getServiceFreeIntervals (ctx, data) {
      return new Promise((resolve) => {
        axios.get('services/get-free-intervals?' + qs.stringify(data)).then(response => {
          resolve(response)
        }).catch(error => {
          console.log(error)
        })
      })
    },
    getServices (ctx, data) {
      return new Promise(() => {
        axios.get('services/list?' + qs.stringify(data)).then(response => {
          ctx.commit('updateServicesList', response.data.data)
        }).catch(error => {
          console.log(error)
        })
      })
    },
    createService (ctx, data) {
      let formData = new FormData()
      formData.append('title', data.title)
      formData.append('age_limit', data.age_limit)
      formData.append('player_from', data.player_from)
      formData.append('player_to', data.player_to)
      formData.append('season', data.season)
      formData.append('duration', data.duration)
      formData.append('address', data.address)
      formData.append('lat', data.lat)
      formData.append('lon', data.lon)
      formData.append('schedule', data.schedule)
      formData.append('hour_from', data.hour_from)
      formData.append('hour_to', data.hour_to)
      formData.append('additional_services', data.additional_services)
      formData.append('type', data.type)
      formData.append('short_desc', data.short_desc)
      formData.append('long_desc', data.long_desc)
      data.images.forEach((val, i) => {
        formData.append('image-' + (i + 1), val)
      })
      formData.append('image_count', data.images.length)
      return new Promise((resolve) => {
        axios.post('services/create', formData).then(response => {
          resolve(response)
        }).catch(error => {
          console.log(error)
        })
      })
    },
    editService (ctx, data) {
      return new Promise((resolve) => {
        axios.post('services/edit', data).then(response => {
          resolve(response)
        }).catch(error => {
          console.log(error)
        })
      })
    },
    statusService (ctx, id) {
      return new Promise((resolve) => {
        axios.post('services/status', id).then(response => {
          resolve(response)
        }).catch(error => {
          console.log(error)
        })
      })
    },
    removeService (ctx, id) {
      return new Promise((resolve) => {
        axios.post('services/remove', id).then(response => {
          resolve(response)
        }).catch(error => {
          console.log(error)
        })
      })
    },
    removeImage (ctx, data) {
      return new Promise((resolve) => {
        axios.post('services/remove-image', data).then(response => {
          resolve(response)
        }).catch(error => {
          console.log(error)
        })
      })
    }
  },
  mutations: {
    updateService (state, data) {
      state.service = data
    },
    updateServicesList (state, data) {
      state.services = data
    }
  }
}
