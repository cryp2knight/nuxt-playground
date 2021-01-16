<template>
  <div class="flex flex-col mx-auto max-w-lg m-4">
    <div class="flex justify-between items-center">
      <h1 class="text-3xl font-medium">Admin Dashboard</h1>
      <nuxt-link
        class="text-red-500 font-bold text-lg underline"
        to="/add-hotel"
        >Add hotel</nuxt-link
      >
    </div>
    <hr />
    <div class="flex flex-wrap">
      <div
        v-for="user of users"
        :key="user.id"
        class="p-3 bg-white rounded-xl shadow-lg m-3 flex flex-col gap-3"
      >
        <nuxt-link
          class="text-xl font-medium text-red-700 underline"
          :to="`/users/${user.id}`"
          >{{
            (user.firstName || 'admin') + ' ' + (user.lastName || 'admin')
          }}</nuxt-link
        >
        <div class="flex flex-col">
          <span class="text-sm text-gray-700">{{ user.address }}</span>
          <span class="text-gray-800">{{ user.contact }}</span>
          <span class="text-gray-800">{{ user.email }}</span>
        </div>
        <hr />
        <div class="flex gap-5">
          <span v-if="user.saved && user.saved.length > 0"
            ><strong>{{ user.saved.length }}</strong> saved rooms</span
          >
          <span v-if="user.booked && user.booked.length > 0"
            ><strong>{{ user.booked.length }}</strong> booked rooms</span
          >
        </div>
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import Vue from 'vue'
export default Vue.extend({
  middleware: 'admin',
  data() {
    return {
      users: [],
    }
  },
  methods: {
    async getUsers() {
      // @ts-ignore
      const usersRef = this.$fire.firestore.collection('users')
      try {
        const snapshot = await usersRef.get()
        const s = snapshot.docs.map((doc: any) => {
          return { ...doc.data(), id: doc.id }
        })
        this.users = s
      } catch (e) {
        console.log(e)
      }
    },
  },
  mounted() {
    this.getUsers()
  },
})
</script>