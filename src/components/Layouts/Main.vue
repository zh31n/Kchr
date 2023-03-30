<template>
  <div class="main-wrapper">
    <sidebar/>
    <div class="body-wrapper">
      <Header/>
      <router-view/>
      <Footer/>
    </div>

    <!-- MODAL WINDOWS -->

    <transition enter-active-class="animate__animated animate__fadeIn"
                leave-active-class="animate__animated animate__fadeOut">
      <create-services-modal v-if="this.$store.getters.modal.createServiceModal"/>
    </transition>

    <transition enter-active-class="animate__animated animate__fadeIn"
                leave-active-class="animate__animated animate__fadeOut">
      <edit-services-modal v-if="this.$store.getters.modal.editServiceModal"/>
    </transition>

    <transition enter-active-class="animate__animated animate__fadeIn"
                leave-active-class="animate__animated animate__fadeOut">
      <edit-client-modal v-if="this.$store.getters.modal.editClientModal"/>
    </transition>

    <transition enter-active-class="animate__animated animate__fadeIn"
                leave-active-class="animate__animated animate__fadeOut">
      <group-operation-modal v-if="this.$store.getters.modal.groupOperationModal"/>
    </transition>

    <transition enter-active-class="animate__animated animate__fadeIn"
                leave-active-class="animate__animated animate__fadeOut">
      <create-booking-modal v-if="this.$store.getters.modal.createBookingModal"/>
    </transition>

    <transition enter-active-class="animate__animated animate__fadeIn"
                leave-active-class="animate__animated animate__fadeOut">
      <edit-booking-modal v-if="this.$store.getters.modal.editBookingModal"/>
    </transition>

    <!-- MODAL WINDOWS END -->

    <transition enter-active-class="animate__animated animate__fadeIn"
                leave-active-class="animate__animated animate__fadeOut">
      <backdrop v-if="this.$store.getters.backDrop"/>
    </transition>
  </div>
</template>

<script>

import Sidebar from '../Sidebar'
import Header from '../Header'
import CreateServicesModal from '../Modal/services/create-services-modal'
import Backdrop from '../Backdrop/backdrop'
import EditServicesModal from '../Modal/services/edit-services-modal'
import EditClientModal from '../Modal/clients/edit-client-modal'
import CreateBookingModal from '../Modal/booking/create-booking-modal'
import GroupOperationModal from '../Modal/quotas/group-operation-modal'
import Footer from '../Footer'
import EditBookingModal from '../Modal/booking/edit-booking-modal'

export default {
  name: 'main-layout',
  components: {
    EditBookingModal,
    Footer,
    GroupOperationModal,
    CreateBookingModal,
    EditClientModal,
    EditServicesModal,
    Backdrop,
    CreateServicesModal,
    Header,
    Sidebar
  },
  data: function () {
    return {}
  },
  async mounted () {
  },
  computed: {},
  methods: {}
}
</script>
