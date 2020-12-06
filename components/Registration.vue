<template>
  <div class="mx-3 md:max-w-md">
    <div class="bg-white rounded-3xl p-6 shadow-xl" v-if="!isLoggedIn">
      <span class="text-3xl font-semibold text-gray-800"
        >Hotel Reservation</span
      >
      <div class="flex flex-col mt-4">
        <label class="text-sm text-red-700">Email</label>
        <input
          class="my-2 px-3 py-1 border rounded-lg text-gray-700 outline-none"
          type="email"
          placeholder="john@mail.com"
          v-model="email"
        />
      </div>
      <div class="flex flex-col">
        <label class="text-sm text-red-700">Password</label>
        <input
          class="my-2 px-3 py-1 border rounded-lg text-gray-700 outline-none"
          type="password"
          placeholder="******"
          v-model="password"
        />
      </div>
      <hr class="my-3" />
      <div class="flex mt-4">
        <Button
          class="text-white w-20 bg-red-600 p-2 font-semibold rounded-lg hover:bg-red-900"
          @click="register"
          >Register</Button
        >
        <Button
          class="ml-2 w-20 text-white bg-red-600 p-2 font-semibold rounded-lg hover:bg-red-900"
          @click="signInUser"
          >Sign In</Button
        >
      </div>
    </div>
  </div>
</template>

<script lang='ts'>
import Vue from 'vue'
import { mapState, mapGetters } from 'vuex'

export default Vue.extend({
  name: 'Registration',
  data() {
    return {
      email: '',
      password: '',
    }
  },
  computed: {
    ...mapState({
      authUser: (state: any) => state.authUser,
    }),
    ...mapGetters({
      isLoggedIn: 'isLoggedIn',
    }),
  },
  methods: {
    async register() {
      try {
        // @ts-ignore
        await this.$fire.auth.createUserWithEmailAndPassword(
          this.email,
          this.password
        )
      } catch (e) {
        alert(e)
      }
    },
    async signInUser() {
      try {
        // @ts-ignore
        await this.$fire.auth.signInWithEmailAndPassword(
          this.email,
          this.password
        )
      } catch (e) {
        alert(e)
      }
    },
  },
})
</script>
