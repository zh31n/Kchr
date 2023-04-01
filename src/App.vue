<template>
  <component :is="layout">
    <router-view/>
  </component>
</template>

<script>
import MainLayout from '@/components/Layouts/Main'
import FreeLayout from '@/components/Layouts/Free'

export default {
  name: 'App',
  computed: {
    layout: function () {
      return Object.keys(this.$route.meta).length === 0 ? 'free-layout' : (this.$route.meta.layout) + '-layout'
    }
  },
  async mounted () {
    this.$root.$on('triggerModal', (data) => {
      this.$store.dispatch('triggerModal', data)
    })
  },
  methods: {},
  components: {MainLayout, FreeLayout}
}
</script>
