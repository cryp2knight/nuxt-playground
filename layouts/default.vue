<template>
  <div class="bg-red-100 antialiased flex flex-col min-h-screen justify-between">
    <NavBar />
    <nuxt />
    <Footer />
  </div>
</template>

<script lang='ts'>
import Vue from 'vue'
import Footer from '../components/Footer.vue'

export default Vue.extend({
  components: {
    Footer,
  },
})
</script>
