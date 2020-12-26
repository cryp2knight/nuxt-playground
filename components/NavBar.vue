<template>
  <div
    v-if="isLoggedIn"
    class="w-full p-2 shadow-md bg-red-200 m-0 flex justify-between"
  >
    <span class="">{{ authUser.email }}</span>
    <button @click="logout">Logout</button>
  </div>
</template>

<script lang='ts'>
import Vue from 'vue'
import { mapState, mapGetters } from 'vuex'

export default Vue.extend({
  name: 'NavBar',
  computed: {
    ...mapState({
      authUser: (state: any) => state.authUser,
    }),
    ...mapGetters({
      isLoggedIn: 'isLoggedIn',
    }),
  },
  methods: {
    async logout() {
      try {
        // @ts-ignore
        await this.$fire.auth.signOut()
        window.location.reload()
      } catch (e) {
        alert(e)
      }
    },
  },
})
</script>
