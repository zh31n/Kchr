import Vue from 'vue'
import Vuex from 'vuex'
import Index from './modules/index/index'
import Login from './modules/login/login'
import Register from './modules/register/register'
import Clients from './modules/clients/clients'
import Services from './modules/services/services'
import Bookings from './modules/booking/booking'
import Quotas from './modules/quotas/quotas'
import Yandex from './modules/yandex/yandex'
import Settings from './modules/settings/settings'
import Reports from './modules/reports/reports'

require('../components/Plugins/Toast/Toast')

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    menu: true,
    backdrop: false,
    dataModal: [],
    modal: {
      createServiceModal: false,
      editServiceModal: false,
      editClientModal: false,
      groupOperationModal: false,
      createBookingModal: false,
      editBookingModal: false
    }
  },
  actions: {
    toggleMenu (ctx) {
      ctx.commit('setMenu')
    },
    triggerModal (ctx, data) {
      ctx.commit('triggerModal', data)
    },
    logout (ctx) {
      ctx.commit('destroyToken')
    }
  },
  mutations: {
    setMenu (state) {
      state.menu = !state.menu
    },
    triggerModal (state, data) {
      state.backdrop = !state.backdrop
      state.dataModal = data.data ? data.data : []
      state.modal[data.name] = !state.modal[data.name]
    },
    destroyToken () {
      localStorage.removeItem('token')
      localStorage.removeItem('fullName')
      localStorage.removeItem('email')
      localStorage.removeItem('image')
      window.location.href = '/login'
    }
  },
  getters: {
    url: state => state.url,
    triggerMenu: state => state.menu,
    backDrop: state => state.backdrop,
    dataModal: state => state.dataModal,
    modal: state => state.modal
  },
  modules: {Login, Register, Index, Clients, Services, Bookings, Quotas, Yandex, Settings, Reports}
})
