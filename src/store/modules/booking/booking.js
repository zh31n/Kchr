import axios from 'axios'
import qs from 'qs'

export default {
  state: {
    booking: [],
    bookings: [],
    bookingsTable: [],
    bookingStats: []
  },
  getters: {
    getBooking: state => state.booking,
    getBookings: state => state.bookings,
    getBookingsTable: state => state.bookingsTable,
    getBookingsStats: state => state.bookingStats
  },
  actions: {
    getBooking (ctx, id) {
      return new Promise(() => {
        axios.get('bookings/get?id=' + id).then(response => {
          ctx.commit('updateBooking', response.data.data)
        }).catch(error => {
          console.log(error)
        })
      })
    },
    getBookings (ctx, data) {
      return new Promise(() => {
        axios.get('bookings/list').then(response => {
          ctx.commit('updateBookingsList', response.data.data)
        }).catch(error => {
          console.log(error)
        })
      })
    },
    getBookingsTable (ctx, data) {
      return new Promise(() => {
        axios.get('bookings/list-table?' + qs.stringify(data)).then(response => {
          ctx.commit('updateBookingsListTable', response.data.data)
        }).catch(error => {
          console.log(error)
        })
      })
    },
    createBooking (ctx, data) {
      return new Promise((resolve) => {
        axios.post('bookings/create', data).then(response => {
          resolve(response)
        }).catch(error => {
          console.log(error)
        })
      })
    },
    updateBooking (ctx, data) {
      return new Promise((resolve) => {
        axios.post('bookings/update', data).then(response => {
          resolve(response)
        }).catch(error => {
          console.log(error)
        })
      })
    },
    getBookingStats (ctx) {
      return new Promise(() => {
        axios.get('bookings/stats').then(response => {
          ctx.commit('updateBookingStatsList', response.data.data)
        }).catch(error => {
          console.log(error)
        })
      })
    }
  },
  mutations: {
    updateBooking (state, data) {
      state.booking = data
    },
    updateBookingsList (state, data) {
      state.bookings = data
    },
    updateBookingsListTable (state, data) {
      state.bookingsTable = data
    },
    updateBookingStatsList (state, data) {
      state.bookingStats = data
    }
  }
}
