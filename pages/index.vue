<template>
  <div class="flex flex-col items-center mx-5 mt-8">
    <Registration />
    <Home />
  </div>
</template>

<script lang='ts'>
import Vue from 'vue'
import Registration from '../components/Registration.vue'
import NavBar from '../components/NavBar.vue'
import Home from '../components/Home.vue'

export default Vue.extend({
  components: {
    Registration,
    NavBar,
    Home,
  },
})
</script>