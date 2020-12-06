<template>
  <footer class="w-full bg-red-700 text-white m-0 mt-20 text-lg px-6 py-20">
      <h3 class="font-semibold">Hotel Reservation System</h3>
      <p class="text-sm">Copyright © {{ new Date().getFullYear() }}</p>
  </footer>
</template>

<script lang='ts'>
import Vue from 'vue'

export default Vue.extend({
  name: 'Footer',
})
</script>
