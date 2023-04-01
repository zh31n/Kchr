<template>
  <div class="header-wrapper">
    <!-- <h1 class="title">{{ this.$route.meta.title }}</h1> -->
    <h1 class="title">Ключевые показатели мониторинга развития туризма на территории КЧР</h1>
    <div class="right">
      <div class="notifications">//
        <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
          <g clip-path="url(#clip0_1860_11504)">
            <path
              d="M8.95996 22.0015C9.48121 23.1736 10.6371 24.0002 12.0012 24.0002C13.3654 24.0002 14.5212 23.1736 15.0425 22.0015C14.0806 22.0485 13.0803 22.0802 12.0012 22.0802C10.9222 22.0802 9.92189 22.0485 8.95996 22.0015Z"
              fill="#717579"/>
            <path
              d="M22.5887 16.92C21.3234 15.3245 19.1999 12.1882 19.1999 9.12C19.1999 6.07776 17.2454 3.34078 14.3999 2.3347C14.3654 1.04062 13.3017 0 12.0009 0C10.6991 0 9.63641 1.04062 9.60182 2.3347C6.75543 3.34078 4.80088 6.07776 4.80088 9.12C4.80088 12.1891 2.67833 15.3245 1.4121 16.92C0.989708 17.4528 0.859114 18.1565 1.06363 18.8025C1.26332 19.4332 1.76057 19.9219 2.39418 20.1082C3.50394 20.4355 5.32311 20.8042 8.09755 20.9923C9.29849 21.0729 10.5897 21.12 12.0009 21.12C13.4112 21.12 14.7024 21.0729 15.9033 20.9923C18.6787 20.8042 20.4969 20.4355 21.6076 20.1082C22.2412 19.9219 22.7376 19.4333 22.9372 18.8025C23.1417 18.1565 23.0102 17.4528 22.5887 16.92Z"
              fill="#717579"/>
          </g>
          <defs>
            <clipPath id="clip0_1860_11504">
              <rect width="24" height="24" fill="white"/>
            </clipPath>
          </defs>
        </svg>
      </div>
      <div class="calendar">
        <div class="svg">
          <svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path
              d="M15.8337 4.1665H15.0003V2.49984C15.0003 2.27882 14.9125 2.06686 14.7563 1.91058C14.6 1.7543 14.388 1.6665 14.167 1.6665C13.946 1.6665 13.734 1.7543 13.5777 1.91058C13.4215 2.06686 13.3337 2.27882 13.3337 2.49984V4.1665H6.66699V2.49984C6.66699 2.27882 6.5792 2.06686 6.42292 1.91058C6.26663 1.7543 6.05467 1.6665 5.83366 1.6665C5.61265 1.6665 5.40068 1.7543 5.2444 1.91058C5.08812 2.06686 5.00033 2.27882 5.00033 2.49984V4.1665H4.16699C3.50395 4.1665 2.86807 4.4299 2.39923 4.89874C1.93038 5.36758 1.66699 6.00346 1.66699 6.6665V7.49984H18.3337V6.6665C18.3337 6.00346 18.0703 5.36758 17.6014 4.89874C17.1326 4.4299 16.4967 4.1665 15.8337 4.1665Z"
              fill="#F66F4D"/>
            <path
              d="M1.66699 15.8332C1.66699 16.4962 1.93038 17.1321 2.39923 17.6009C2.86807 18.0698 3.50395 18.3332 4.16699 18.3332H15.8337C16.4967 18.3332 17.1326 18.0698 17.6014 17.6009C18.0703 17.1321 18.3337 16.4962 18.3337 15.8332V9.1665H1.66699V15.8332Z"
              fill="#F66F4D"/>
          </svg>
        </div>
        {{ $moment().format('MMMM DD') }}, {{ $moment().format('YYYY') }}
      </div>
      <div class="user" @click="dropdown = !dropdown">
        <img src="../assets/images/user/logo.png">
        <transition enter-active-class="animate__animated animate__fadeIn"
                    leave-active-class="animate__animated animate__fadeOut">
          <div class="dropdown" v-if="dropdown">
            <router-link to="/profile">Профиль</router-link>
            <router-link to="/profile/settings">Настройки</router-link>
            <a @click="logout">Выйти</a>
          </div>
        </transition>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data: function () {
    return {
      dropdown: false
    }
  },
  async mounted () {
  },
  computed: {},
  methods: {
    logout: function () {
      this.$store.dispatch('logout')
    }
  }
}
</script>

<style lang="scss" scoped>

</style>
