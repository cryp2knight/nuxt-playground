<template>
  <div class="flex justify-evenly my-3">
    <div class="flex flex-col items-center">
      <div
        class="bg-white h-20 w-20 rounded-2xl shadow-lg flex items-center justify-center hover:bg-red-200"
        :class="currentOption === 'all' ? 'bg-red-200' : 'bg-white'"
        @click="setCurrentOption('all')"
      >
        <img src="~assets/binoculars.png" class="w-10" />
      </div>
      <span class="text-sm text-red-600 mt-2">All</span>
    </div>
    <div class="flex flex-col items-center">
      <div
        class="bg-white h-20 w-20 rounded-2xl shadow-lg flex items-center justify-center hover:bg-red-200"
        :class="currentOption === 'saved' ? 'bg-red-200' : 'bg-white'"
        @click="setCurrentOption('saved')"
      >
        <img src="~assets/bookmark-ribbon.png" class="w-10" />
      </div>
      <span class="text-sm text-red-600 mt-2">Saved</span>
    </div>
    <div class="flex flex-col items-center">
      <div
        class="bg-white h-20 w-20 rounded-2xl shadow-lg flex items-center justify-center hover:bg-red-200"
        :class="currentOption === 'booked' ? 'bg-red-200' : 'bg-white'"
        @click="setCurrentOption('booked')"
      >
        <img src="~assets/bookmark.png" class="w-10" />
      </div>
      <span class="text-sm text-red-600 mt-2">Booked</span>
    </div>
  </div>
</template>

<script lang='ts'>
import Vue from 'vue'
import { mapGetters, mapActions } from 'vuex'

export default Vue.extend({
  name: 'OptionNav',
  computed: {
    ...mapGetters(['currentOption']),
  },
  methods: {
    ...mapActions(['setOption']),
    setCurrentOption: function (option: string) {
      this.setOption(option)
    },
  },
})
</script>
