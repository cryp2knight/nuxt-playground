<template>
  <div class="flex flex-col mx-auto m-5">
    <h1 class="text-2xl font-medium">Sign up</h1>
    <hr />
    <form class="flex flex-col gap-3 mt-5" @submit.prevent="register">
      <span
        v-if="showError && !isValid.submit"
        class="p-3 bg-white border border-red-500 text-red-500 flex justify-between"
        ><span>{{ isValid.name }}</span
        ><button
          class="w-6 h-6 rounded-full bg-gray-500 text-center text-white"
          @click="showError = false"
        >
          x
        </button></span
      >
      <div class="flex gap-2">
        <span class="flex flex-col">
          <label>First name</label>
          <input type="text" placeholder="first name" v-model="firstName" />
        </span>
        <span class="flex flex-col">
          <label>Last name</label>
          <input type="text" placeholder="first name" v-model="lastName" />
        </span>
      </div>
      <span class="flex flex-col">
        <label>Address</label>
        <input type="text" placeholder="Address" v-model="address" />
      </span>
      <span class="flex flex-col">
        <label>Contact Number</label>
        <input type="phone" placeholder="09|+639" v-model="contact" />
      </span>
      <span class="flex flex-col">
        <label>Email address</label>
        <input type="email" v-model="email" />
      </span>
      <div class="flex gap-2">
        <span class="flex flex-col">
          <label>Password</label>
          <input type="password" v-model="password1" />
        </span>
        <span class="flex flex-col">
          <label>Confirm password</label>
          <input type="password" v-model="password2" />
        </span>
      </div>
      <div class="flex justify-end items-center gap-10">
        <NuxtLink
          to="/"
          class="text-red-700 uppercase mt-5 p-2 border hover:border-red-500"
          >login</NuxtLink
        >
        <button
          type="submit"
          class="w-40 mt-5 text-white bg-red-600 p-2 font-semibold rounded-2xl hover:bg-red-900"
        >
          Register
        </button>
      </div>
    </form>
  </div>
</template>

<script lang="ts">
import Vue from 'vue'
import { mapState } from 'vuex'

export default Vue.extend({
  asyncData({ store, redirect }: any) {
    if (store.getters.isLoggedIn) return redirect('/')
  },
  data() {
    return {
      firstName: '',
      lastName: '',
      address: '',
      contact: '',
      email: '',
      password1: '',
      password2: '',
      showError: false,
    }
  },
  computed: {
    ...mapState(['authUser']),
    isValid() {
      const a: any = {
        'first name': this.firstName,
        'last name': this.lastName,
        address: this.address,
        contact: this.contact,
        email: this.email,
        password: this.password1,
        'confirm password': this.password1,
      }
      for (let i in a) {
        if (a[i] === '') {
          return { name: i + ' cannot be empty', submit: false }
        }
      }
      if (this.password1 !== this.password2)
        return { name: 'passwords does not match', submit: false }
      if (this.password1.length < 6)
        return {
          name: 'password should be atleast 6 characters',
          submit: false,
        }
      if (!this.contact.match(/^(09|\+639)\d{9}$/))
        return { name: 'invalid contact number', submit: false }
      if (!this.email.match(/[^@ \t\r\n]+@[^@ \t\r\n]+\.[^@ \t\r\n]+/))
        return { name: 'invalid email', submit: false }

      return { name: '', submit: true }
    },
  },
  methods: {
    async createUser() {
      try {
        // @ts-ignore
        const rs = await this.$fire.auth.createUserWithEmailAndPassword(
          this.email,
          this.password1
        )
        // @ts-ignore
        const userRef = this.$fire.firestore
          .collection('users')
          .doc(rs.user.uid)
        await userRef.set({
          firstName: this.firstName,
          lastName: this.lastName,
          email: this.email,
          contact: this.contact,
          address: this.address,
        })
        this.$store.dispatch('resetStore')
        // @ts-ignore
        await this.$fire.auth.signOut()
        alert('successfully registered! please login')
        window.location.reload()
      } catch (e) {
        alert(e)
      }
    },
    async register() {
      if (this.isValid.submit) {
        await this.createUser()
      } else {
        this.showError = true
      }
    },
  },
})
</script>

<style scoped>
input {
  @apply px-3 py-1 border rounded-lg text-gray-700 outline-none border border-gray-500;
}
</style>