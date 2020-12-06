<template>
  <div
    tabindex="0"
    class="z-40 overflow-auto left-0 top-0 bottom-0 right-0 w-full h-full fixed"
    :class="show ? '' : 'hidden'"
  >
    <div class="z-50 relative p-3 mx-auto my-0 max-w-full" style="width: 600px">
      <div
        class="bg-white rounded shadow-lg border flex flex-col overflow-hidden"
      >
        <button
          @click="show = false"
          class="fill-current h-6 w-6 absolute right-0 top-0 m-6 font-3xl font-bold"
        >
          &times;
        </button>
        <div class="px-6 py-3 text-xl border-b font-bold">
          Title of the modal {{ show }}
        </div>
        <div class="p-6 flex-grow">
          <p>
            You are watching this text in tailwind css model with alpine JS.
          </p>
        </div>
        <div class="px-6 py-3 border-t">
          <div class="flex justify-end">
            <button
              @click="show = false"
              type="button"
              class="bg-gray-700 text-gray-100 rounded px-4 py-2 mr-1"
            >
              Close
            </button>
            <button
              type="button"
              class="bg-blue-600 text-gray-200 rounded px-4 py-2"
            >
              Saves Changes
            </button>
          </div>
        </div>
      </div>
    </div>
    <div
      class="z-40 overflow-auto left-0 top-0 bottom-0 right-0 w-full h-full fixed bg-black opacity-50"
    ></div>
  </div>
</template>


<script lang='ts'>
import Vue from 'vue'

export default Vue.extend({
  name: 'HotelModal',
  props: {
    hotel: { required: false },
  },
  data() {
    return {
      show: false,
    }
  },
})
</script>